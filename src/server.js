const express = require('express');
const path = require('path');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const db = require('./db');
const { subjects, skillIndex, lessonIndex, courseIndex, courseStats, catalogSummary } = require('../content');
const { generate } = require('../content/generators');
const coach = require('./coach');
const qaSeed = require('../content/qa');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: '256kb' }));
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(session({
  secret: process.env.SESSION_SECRET || 'lumina-dev-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 30 } // 30 days
}));

// ---------- helpers -------------------------------------------------------

const LEVELS = ['attempted', 'familiar', 'proficient', 'mastered'];
const STREAK_FOR = { familiar: 1, proficient: 3, mastered: 5 };

function levelFor(streak, correct) {
  if (streak >= STREAK_FOR.mastered || correct >= 10) return 'mastered';
  if (streak >= STREAK_FOR.proficient) return 'proficient';
  if (streak >= STREAK_FOR.familiar) return 'familiar';
  return 'attempted';
}

function awardXp(userId, xp) {
  const day = new Date().toISOString().slice(0, 10);
  db.prepare(`INSERT INTO activity_days (user_id, day, xp) VALUES (?, ?, ?)
    ON CONFLICT (user_id, day) DO UPDATE SET xp = xp + excluded.xp`).run(userId, day, xp);
}

function streakDays(userId) {
  const rows = db.prepare('SELECT day FROM activity_days WHERE user_id = ? ORDER BY day DESC').all(userId);
  if (!rows.length) return 0;
  const days = new Set(rows.map((r) => r.day));
  let streak = 0;
  const d = new Date();
  const today = d.toISOString().slice(0, 10);
  if (!days.has(today)) d.setUTCDate(d.getUTCDate() - 1); // grace: streak alive if yesterday active
  while (days.has(d.toISOString().slice(0, 10))) {
    streak += 1;
    d.setUTCDate(d.getUTCDate() - 1);
  }
  return streak;
}

function totalXp(userId) {
  const r = db.prepare('SELECT COALESCE(SUM(xp),0) AS xp FROM activity_days WHERE user_id = ?').get(userId);
  return r.xp;
}

function levelFromXp(xp) {
  // level n requires 100 * n*(n+1)/2 cumulative xp → smooth ramp
  let level = 1;
  while (level * (level + 1) * 50 <= xp) level += 1;
  return level;
}

function progressMap(userId) {
  if (!userId) return new Map();
  const rows = db.prepare('SELECT * FROM skill_progress WHERE user_id = ?').all(userId);
  return new Map(rows.map((r) => [r.skill_id, r]));
}

function requireAuth(req, res, next) {
  if (req.session.userId) return next();
  res.status(401).json({ error: 'Sign in required', code: 'auth_required' });
}

function publicUser(u) {
  return u ? { id: u.id, name: u.name, email: u.email, avatarSeed: u.avatar_seed } : null;
}

// ---------- content shaping ----------------------------------------------

function lessonWithProgress(lesson, prog) {
  const s = lesson.skill;
  const p = s ? prog.get(s.id) : null;
  return {
    id: lesson.id,
    title: lesson.title,
    minutes: lesson.minutes || 6,
    summary: lesson.summary || '',
    skill: s ? { id: s.id, name: s.name } : null,
    mastery: p ? p.level : null
  };
}

function courseDetail(course, prog) {
  return {
    id: course.id,
    title: course.title,
    subtitle: course.subtitle,
    summary: course.summary,
    ...courseStats(course),
    units: course.units.map((unit) => ({
      id: unit.id,
      title: unit.title,
      lessons: unit.lessons.map((l) => lessonWithProgress(l, prog))
    }))
  };
}

// ---------- auth ----------------------------------------------------------

app.post('/api/auth/signup', (req, res) => {
  const { name, email, password } = req.body || {};
  if (!name || !name.trim()) return res.status(400).json({ error: 'Name is required' });
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: 'Valid email is required' });
  if (!password || password.length < 8) return res.status(400).json({ error: 'Password must be at least 8 characters' });
  const exists = db.prepare('SELECT id FROM users WHERE email = ?').get(email.trim());
  if (exists) return res.status(409).json({ error: 'An account with that email already exists' });
  const hash = bcrypt.hashSync(password, 10);
  const info = db.prepare('INSERT INTO users (name, email, password_hash, avatar_seed) VALUES (?,?,?,?)')
    .run(name.trim(), email.trim(), hash, Math.floor(Math.random() * 12));
  req.session.userId = info.lastInsertRowid;
  res.json({ user: publicUser(db.prepare('SELECT * FROM users WHERE id = ?').get(info.lastInsertRowid)) });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body || {};
  const u = db.prepare('SELECT * FROM users WHERE email = ?').get((email || '').trim());
  if (!u || !bcrypt.compareSync(password || '', u.password_hash)) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  req.session.userId = u.id;
  db.prepare('UPDATE users SET last_seen_at = datetime(\'now\') WHERE id = ?').run(u.id);
  res.json({ user: publicUser(u) });
});

app.post('/api/auth/logout', (req, res) => {
  req.session.destroy(() => res.json({ ok: true }));
});

app.get('/api/me', (req, res) => {
  if (!req.session.userId) return res.json({ user: null });
  const u = db.prepare('SELECT * FROM users WHERE id = ?').get(req.session.userId);
  if (!u) return res.json({ user: null });
  const xp = totalXp(u.id);
  res.json({
    user: publicUser(u),
    xp,
    level: levelFromXp(xp),
    streakDays: streakDays(u.id)
  });
});

// ---------- catalog --------------------------------------------------------

app.get('/api/catalog', (req, res) => {
  const prog = progressMap(req.session.userId);
  const data = catalogSummary().map((s) => ({
    ...s,
    courses: s.courses.map((c) => {
      const mastered = c.skills.filter((id) => prog.get(id)?.level === 'mastered').length;
      const touched = c.skills.filter((id) => prog.has(id)).length;
      return { ...c, masteredSkills: mastered, touchedSkills: touched, totalSkills: c.skills.length };
    })
  }));
  res.json({ subjects: data });
});

app.get('/api/subjects/:id', (req, res) => {
  const subject = subjects.find((s) => s.id === req.params.id);
  if (!subject) return res.status(404).json({ error: 'Subject not found' });
  const prog = progressMap(req.session.userId);
  res.json({
    subject: {
      id: subject.id, name: subject.name, icon: subject.icon,
      color: subject.color, tagline: subject.tagline, description: subject.description,
      courses: subject.courses.map((c) => {
        const st = courseStats(c);
        const mastered = st.skills.filter((id) => prog.get(id)?.level === 'mastered').length;
        return { id: c.id, title: c.title, subtitle: c.subtitle, summary: c.summary, ...st, masteredSkills: mastered };
      })
    }
  });
});

app.get('/api/courses/:id', (req, res) => {
  const hit = courseIndex.get(req.params.id);
  if (!hit) return res.status(404).json({ error: 'Course not found' });
  const prog = progressMap(req.session.userId);
  res.json({
    subject: { id: hit.subject.id, name: hit.subject.name, color: hit.subject.color },
    course: courseDetail(hit.course, prog)
  });
});

app.get('/api/lessons/:id', (req, res) => {
  const hit = lessonIndex.get(req.params.id);
  if (!hit) return res.status(404).json({ error: 'Lesson not found' });
  const { lesson, unit, course, subject } = hit;
  // siblings for prev/next within the course
  const flat = course.units.flatMap((u) => u.lessons);
  const i = flat.findIndex((l) => l.id === lesson.id);
  const prog = progressMap(req.session.userId);
  const p = lesson.skill ? prog.get(lesson.skill.id) : null;
  res.json({
    subject: { id: subject.id, name: subject.name, color: subject.color },
    course: { id: course.id, title: course.title },
    unit: { id: unit.id, title: unit.title },
    lesson: {
      id: lesson.id, title: lesson.title, minutes: lesson.minutes,
      summary: lesson.summary, tags: lesson.tags, blocks: lesson.blocks,
      skill: lesson.skill ? { id: lesson.skill.id, name: lesson.skill.name, mastery: p ? p.level : null } : null
    },
    prev: i > 0 ? { id: flat[i - 1].id, title: flat[i - 1].title } : null,
    next: i < flat.length - 1 ? { id: flat[i + 1].id, title: flat[i + 1].title } : null
  });
});

// ---------- practice -------------------------------------------------------

function questionPayload(hit) {
  const { skill } = hit;
  if (skill.generator) {
    for (let t = 0; t < 12; t += 1) {
      const q = generate(skill.generator);
      if (q) return q;
    }
    return null;
  }
  const bank = skill.bank || [];
  return bank.length ? bank[Math.floor(Math.random() * bank.length)] : null;
}

// Public-facing question strips the answer; graded server-side.
const sessionQ = new Map(); // qid -> {answer, steps, answerText, ...}
let qidSeq = 1;

app.get('/api/skills/:id/question', (req, res) => {
  const hit = skillIndex.get(req.params.id);
  if (!hit) return res.status(404).json({ error: 'Skill not found' });
  const q = questionPayload(hit);
  if (!q) return res.status(500).json({ error: 'Could not generate a question' });
  const qid = `q${qidSeq += 1}`;
  sessionQ.set(qid, {
    answer: q.answer, tolerance: q.tolerance || 0, normalize: q.normalize,
    steps: q.steps || [], answerText: q.answerText || String(q.answer),
    skillId: hit.skill.id, expires: Date.now() + 10 * 60 * 1000
  });
  if (sessionQ.size > 5000) {
    const now = Date.now();
    for (const [k, v] of sessionQ) if (v.expires < now) sessionQ.delete(k);
  }
  res.json({
    qid,
    skill: { id: hit.skill.id, name: hit.skill.name },
    lesson: { id: hit.lesson.id, title: hit.lesson.title, courseId: hit.course.id },
    question: {
      type: q.type, prompt: q.prompt, choices: q.choices, hint: q.hint
    }
  });
});

function checkAnswer(stored, given) {
  if (stored.answer == null || given == null) return false;
  if (typeof stored.answer === 'number') {
    const g = parseFloat(String(given).replace(/[, ]/g, '').replace(/%$/, ''));
    if (Number.isNaN(g)) return false;
    return Math.abs(g - stored.answer) <= Math.max(stored.tolerance || 0, 1e-9);
  }
  if (typeof stored.answer === 'string') {
    const a = stored.normalize === 'lower' ? stored.answer.toLowerCase() : stored.answer;
    const g = stored.normalize === 'lower' ? String(given).toLowerCase() : String(given);
    return a.trim() === g.trim();
  }
  return false;
}

app.post('/api/skills/:id/answer', (req, res) => {
  const hit = skillIndex.get(req.params.id);
  if (!hit) return res.status(404).json({ error: 'Skill not found' });
  const { qid, answer } = req.body || {};
  const stored = sessionQ.get(qid);
  const correct = stored ? checkAnswer(stored, answer) : false;
  let progress = null;
  let xpAwarded = 0;
  const uid = req.session.userId;
  if (uid) {
    const prev = db.prepare('SELECT * FROM skill_progress WHERE user_id = ? AND skill_id = ?').get(uid, hit.skill.id);
    const attempts = (prev?.attempts || 0) + 1;
    const correctCt = (prev?.correct || 0) + (correct ? 1 : 0);
    const streak = correct ? (prev?.streak || 0) + 1 : 0;
    const level = levelFor(streak, correctCt);
    const prevLevel = prev?.level || 'attempted';
    xpAwarded = correct ? 10 : 0;
    if (LEVELS.indexOf(level) > LEVELS.indexOf(prevLevel)) {
      xpAwarded += level === 'mastered' ? 30 : 15; // level-up bonus
    }
    db.prepare(`INSERT INTO skill_progress (user_id, skill_id, attempts, correct, streak, level)
      VALUES (?,?,?,?,?,?)
      ON CONFLICT (user_id, skill_id) DO UPDATE SET
        attempts = excluded.attempts, correct = excluded.correct,
        streak = excluded.streak, level = excluded.level, updated_at = datetime('now')`)
      .run(uid, hit.skill.id, attempts, correctCt, streak, level);
    db.prepare('INSERT INTO attempts (user_id, skill_id, lesson_id, correct, xp) VALUES (?,?,?,?,?)')
      .run(uid, hit.skill.id, req.body.lessonId || hit.lesson.id, correct ? 1 : 0, xpAwarded);
    if (xpAwarded) awardXp(uid, xpAwarded);
    progress = {
      level, attempts, correct: correctCt, streak,
      xpAwarded, levelUp: LEVELS.indexOf(level) > LEVELS.indexOf(prevLevel)
    };
  }
  res.json({
    correct,
    progress,
    reveal: stored ? { answer: stored.answer, answerText: stored.answerText, steps: stored.steps } : null,
    guest: !uid
  });
});

// ---------- progress / visits ---------------------------------------------

app.post('/api/lessons/:id/visit', (req, res) => {
  if (!lessonIndex.has(req.params.id)) return res.status(404).json({ error: 'Lesson not found' });
  if (!req.session.userId) return res.json({ ok: true, guest: true });
  db.prepare(`INSERT INTO lesson_visits (user_id, lesson_id, completed) VALUES (?,?,0)
    ON CONFLICT (user_id, lesson_id) DO UPDATE SET visited_at = datetime('now')`)
    .run(req.session.userId, req.params.id);
  res.json({ ok: true });
});

app.post('/api/lessons/:id/complete', (req, res) => {
  if (!req.session.userId) return res.json({ ok: true, guest: true });
  db.prepare(`INSERT INTO lesson_visits (user_id, lesson_id, completed) VALUES (?,?,1)
    ON CONFLICT (user_id, lesson_id) DO UPDATE SET completed = 1, visited_at = datetime('now')`)
    .run(req.session.userId, req.params.id);
  res.json({ ok: true });
});

// Merge guest (localStorage) progress after signup/login.
app.post('/api/progress/import', requireAuth, (req, res) => {
  const items = Array.isArray(req.body?.items) ? req.body.items.slice(0, 2000) : [];
  const uid = req.session.userId;
  let imported = 0;
  for (const it of items) {
    if (!it || !skillIndex.has(it.skillId)) continue;
    const ok = !!it.correct;
    const prev = db.prepare('SELECT * FROM skill_progress WHERE user_id = ? AND skill_id = ?').get(uid, it.skillId);
    const attempts = (prev?.attempts || 0) + 1;
    const correctCt = (prev?.correct || 0) + (ok ? 1 : 0);
    const streak = ok ? (prev?.streak || 0) + 1 : 0;
    db.prepare(`INSERT INTO skill_progress (user_id, skill_id, attempts, correct, streak, level)
      VALUES (?,?,?,?,?,?)
      ON CONFLICT (user_id, skill_id) DO UPDATE SET attempts=excluded.attempts, correct=excluded.correct,
        streak=excluded.streak, level=excluded.level, updated_at=datetime('now')`)
      .run(uid, it.skillId, attempts, correctCt, streak, levelFor(streak, correctCt));
    if (ok) { awardXp(uid, 10); }
    imported += 1;
  }
  res.json({ imported });
});

// ---------- dashboard ------------------------------------------------------

app.get('/api/dashboard', requireAuth, (req, res) => {
  const uid = req.session.userId;
  const u = db.prepare('SELECT * FROM users WHERE id = ?').get(uid);
  const xp = totalXp(uid);
  const prog = progressMap(uid);
  const recent = db.prepare(`SELECT lesson_id, visited_at, completed FROM lesson_visits
    WHERE user_id = ? ORDER BY visited_at DESC LIMIT 6`).all(uid);
  const continueLearning = recent.map((r) => {
    const hit = lessonIndex.get(r.lesson_id);
    if (!hit) return null;
    return {
      lessonId: r.lesson_id, title: hit.lesson.title, courseId: hit.course.id,
      courseTitle: hit.course.title, subjectColor: hit.subject.color,
      completed: !!r.completed
    };
  }).filter(Boolean);
  const bySubject = subjects.map((s) => {
    let total = 0; let mastered = 0; let touched = 0;
    for (const c of s.courses) {
      for (const id of courseStats(c).skills) {
        total += 1;
        const p = prog.get(id);
        if (p) { touched += 1; if (p.level === 'mastered') mastered += 1; }
      }
    }
    return { id: s.id, name: s.name, color: s.color, icon: s.icon, total, mastered, touched };
  });
  const recentAttempts = db.prepare(`SELECT skill_id, correct, xp, created_at FROM attempts
    WHERE user_id = ? ORDER BY created_at DESC LIMIT 8`).all(uid)
    .map((a) => ({ ...a, skillName: skillIndex.get(a.skill_id)?.skill.name || a.skill_id }));
  const weekly = db.prepare(`SELECT day, xp FROM activity_days WHERE user_id = ?
    ORDER BY day DESC LIMIT 14`).all(uid).reverse();
  res.json({
    user: publicUser(u),
    xp, level: levelFromXp(xp), streakDays: streakDays(uid),
    xpToNext: (levelFromXp(xp) * (levelFromXp(xp) + 1) * 50) - xp,
    continueLearning, bySubject, recentAttempts, weekly
  });
});

// ---------- homework help (Q&A) --------------------------------------------

function seedQuestions() {
  const count = db.prepare('SELECT COUNT(*) AS n FROM questions').get().n;
  if (count > 0) return;
  const insQ = db.prepare(`INSERT INTO questions (author_name, is_expert, title, body, subject_id, tags, views, votes, created_at)
    VALUES (?,?,?,?,?,?,?,?, datetime('now', ?))`);
  const insA = db.prepare(`INSERT INTO answers (question_id, author_name, is_expert, body, votes, created_at)
    VALUES (?,?,?,?,?, datetime('now', ?))`);
  const setAcc = db.prepare('UPDATE questions SET accepted_answer_id = ? WHERE id = ?');
  qaSeed.forEach((q, i) => {
    const mins = -(60 * (i + 3));
    const qi = insQ.run(q.author || 'Student', 0, q.title, q.body, q.subjectId, JSON.stringify(q.tags || []),
      50 + Math.floor(Math.random() * 400), Math.floor(Math.random() * 12) + 1, `${mins} minutes`);
    const ai = insA.run(qi.lastInsertRowid, 'Lumina Expert', 1, q.answer, Math.floor(Math.random() * 15) + 3, `${mins + 45} minutes`);
    setAcc.run(ai.lastInsertRowid, qi.lastInsertRowid);
  });
}
seedQuestions();

app.get('/api/questions', (req, res) => {
  const { subject, q, sort, page } = req.query;
  const limit = 20;
  const offset = Math.max(0, (parseInt(page, 10) || 1) - 1) * limit;
  const where = []; const params = [];
  if (subject) { where.push('q.subject_id = ?'); params.push(subject); }
  if (q) {
    where.push('(q.title LIKE ? OR q.body LIKE ?)');
    params.push(`%${q}%`, `%${q}%`);
  }
  const whereSql = where.length ? `WHERE ${where.join(' AND ')}` : '';
  const orderSql = sort === 'top' ? 'ORDER BY q.votes DESC, q.created_at DESC'
    : sort === 'unanswered' ? 'AND q.accepted_answer_id IS NULL ORDER BY q.created_at DESC'
    : 'ORDER BY q.created_at DESC';
  const rows = db.prepare(`
    SELECT q.*, (SELECT COUNT(*) FROM answers a WHERE a.question_id = q.id) AS answer_count
    FROM questions q ${whereSql} ${orderSql.replace('ORDER BY', 'ORDER BY')}
    LIMIT ? OFFSET ?`).all(...params, limit, offset);
  const total = db.prepare(`SELECT COUNT(*) AS n FROM questions q ${whereSql}`).get(...params).n;
  res.json({
    questions: rows.map((r) => ({ ...r, tags: JSON.parse(r.tags || '[]') })),
    total, page: parseInt(page, 10) || 1, pages: Math.max(1, Math.ceil(total / limit))
  });
});

app.get('/api/questions/:id', (req, res) => {
  const q = db.prepare('SELECT * FROM questions WHERE id = ?').get(req.params.id);
  if (!q) return res.status(404).json({ error: 'Question not found' });
  db.prepare('UPDATE questions SET views = views + 1 WHERE id = ?').run(q.id);
  const answers = db.prepare('SELECT * FROM answers WHERE question_id = ? ORDER BY is_expert DESC, votes DESC, created_at ASC').all(q.id);
  let myVotes = new Map();
  if (req.session.userId) {
    const vs = db.prepare(`SELECT target_type, target_id, value FROM votes WHERE user_id = ?`).all(req.session.userId);
    myVotes = new Map(vs.map((v) => [`${v.target_type}:${v.target_id}`, v.value]));
  }
  res.json({
    question: { ...q, tags: JSON.parse(q.tags || '[]') },
    answers: answers.map((a) => ({ ...a, accepted: q.accepted_answer_id === a.id })),
    myVotes: Object.fromEntries(myVotes),
    mine: req.session.userId && q.user_id === req.session.userId
  });
});

app.post('/api/questions', requireAuth, (req, res) => {
  const { title, body, subjectId, tags } = req.body || {};
  if (!title || title.trim().length < 10) return res.status(400).json({ error: 'Title needs at least 10 characters' });
  if (!body || body.trim().length < 20) return res.status(400).json({ error: 'Add some detail — at least 20 characters' });
  if (!subjects.find((s) => s.id === subjectId)) return res.status(400).json({ error: 'Pick a valid subject' });
  const u = db.prepare('SELECT name FROM users WHERE id = ?').get(req.session.userId);
  const info = db.prepare('INSERT INTO questions (user_id, author_name, title, body, subject_id, tags) VALUES (?,?,?,?,?,?)')
    .run(req.session.userId, u.name, title.trim(), body.trim(), subjectId, JSON.stringify((tags || []).slice(0, 5)));
  res.json({ id: info.lastInsertRowid });
});

app.post('/api/questions/:id/answers', requireAuth, (req, res) => {
  const q = db.prepare('SELECT * FROM questions WHERE id = ?').get(req.params.id);
  if (!q) return res.status(404).json({ error: 'Question not found' });
  const { body } = req.body || {};
  if (!body || body.trim().length < 20) return res.status(400).json({ error: 'Answers need at least 20 characters' });
  const u = db.prepare('SELECT name FROM users WHERE id = ?').get(req.session.userId);
  const info = db.prepare('INSERT INTO answers (question_id, user_id, author_name, body) VALUES (?,?,?,?)')
    .run(q.id, req.session.userId, u.name, body.trim());
  awardXp(req.session.userId, 15);
  res.json({ id: info.lastInsertRowid });
});

app.post('/api/questions/:id/accept', requireAuth, (req, res) => {
  const q = db.prepare('SELECT * FROM questions WHERE id = ?').get(req.params.id);
  if (!q) return res.status(404).json({ error: 'Question not found' });
  if (q.user_id !== req.session.userId) return res.status(403).json({ error: 'Only the asker can accept an answer' });
  const { answerId } = req.body || {};
  const a = db.prepare('SELECT * FROM answers WHERE id = ? AND question_id = ?').get(answerId, q.id);
  if (!a) return res.status(404).json({ error: 'Answer not found' });
  db.prepare('UPDATE questions SET accepted_answer_id = ? WHERE id = ?').run(a.id, q.id);
  res.json({ ok: true });
});

app.post('/api/vote', requireAuth, (req, res) => {
  const { targetType, targetId, value } = req.body || {};
  if (!['question', 'answer'].includes(targetType) || ![1, -1].includes(value)) {
    return res.status(400).json({ error: 'Bad vote' });
  }
  const table = targetType === 'question' ? 'questions' : 'answers';
  const target = db.prepare(`SELECT id FROM ${table} WHERE id = ?`).get(targetId);
  if (!target) return res.status(404).json({ error: 'Not found' });
  const existing = db.prepare('SELECT value FROM votes WHERE user_id = ? AND target_type = ? AND target_id = ?')
    .get(req.session.userId, targetType, targetId);
  let delta = 0;
  if (!existing) {
    db.prepare('INSERT INTO votes (user_id, target_type, target_id, value) VALUES (?,?,?,?)')
      .run(req.session.userId, targetType, targetId, value);
    delta = value;
  } else if (existing.value === value) {
    db.prepare('DELETE FROM votes WHERE user_id = ? AND target_type = ? AND target_id = ?')
      .run(req.session.userId, targetType, targetId);
    delta = -value;
  } else {
    db.prepare('UPDATE votes SET value = ? WHERE user_id = ? AND target_type = ? AND target_id = ?')
      .run(value, req.session.userId, targetType, targetId);
    delta = 2 * value;
  }
  db.prepare(`UPDATE ${table} SET votes = votes + ? WHERE id = ?`).run(delta, targetId);
  const row = db.prepare(`SELECT votes FROM ${table} WHERE id = ?`).get(targetId);
  res.json({ votes: row.votes });
});

// ---------- search ----------------------------------------------------------

app.get('/api/search', (req, res) => {
  const q = (req.query.q || '').trim().toLowerCase();
  if (!q || q.length < 2) return res.json({ lessons: [], courses: [], questions: [] });
  const terms = q.split(/\s+/);
  const match = (text) => terms.every((t) => (text || '').toLowerCase().includes(t));

  const lessons = [];
  for (const { lesson, course, subject } of lessonIndex.values()) {
    const hay = `${lesson.title} ${lesson.summary || ''} ${(lesson.tags || []).join(' ')}`;
    if (match(hay)) lessons.push({
      lessonId: lesson.id, title: lesson.title, summary: lesson.summary,
      courseId: course.id, courseTitle: course.title, subject: subject.name
    });
    if (lessons.length >= 8) break;
  }
  const courses = [];
  for (const { course, subject } of courseIndex.values()) {
    if (match(`${course.title} ${course.summary || ''}`)) {
      courses.push({ id: course.id, title: course.title, summary: course.summary, subject: subject.name });
    }
  }
  const questions = db.prepare(`SELECT id, title, subject_id, accepted_answer_id FROM questions
    WHERE title LIKE ? LIMIT 8`).all(`%${q}%`)
    .map((r) => ({ ...r, solved: !!r.accepted_answer_id }));
  res.json({ lessons, courses, questions });
});

// ---------- coach ------------------------------------------------------------

app.get('/api/coach/history', requireAuth, (req, res) => {
  const rows = db.prepare('SELECT role, body, created_at FROM coach_threads WHERE user_id = ? ORDER BY id ASC LIMIT 60')
    .all(req.session.userId);
  res.json({ messages: rows });
});

app.post('/api/coach', (req, res) => {
  const { message } = req.body || {};
  const user = req.session.userId
    ? db.prepare('SELECT * FROM users WHERE id = ?').get(req.session.userId) : null;
  const reply = coach.respond(message, user, db);
  if (user) {
    db.prepare('INSERT INTO coach_threads (user_id, role, body) VALUES (?,?,?)').run(user.id, 'user', message || '');
    db.prepare('INSERT INTO coach_threads (user_id, role, body) VALUES (?,?,?)').run(user.id, 'assistant', reply.text);
  }
  res.json({ reply });
});

// ---------- SPA fallback -----------------------------------------------------

const SPA_ROUTES = /^\/(?!api\/|images\/|styles\/|app\/|assets\/|favicon).*/;
app.get(SPA_ROUTES, (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Lumina running on http://localhost:${port}`);
});
