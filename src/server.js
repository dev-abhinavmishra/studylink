const express = require('express');
const path = require('path');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const db = require('./db');
const { subjects, skillIndex, lessonIndex, courseIndex, courseStats, catalogSummary } = require('../content');
const { generate } = require('../content/generators');
const coach = require('./coach');
const qaSeed = require('../content/qa');
const { ACHIEVEMENTS, levelInfo, checkAchievements, achievementShelf } = require('./game');

const app = express();
const port = process.env.PORT || 3000;
const isProd = process.env.NODE_ENV === 'production';

if (isProd && !process.env.SESSION_SECRET) {
  throw new Error('SESSION_SECRET env var is required in production');
}

app.set('trust proxy', 1); // needed for secure cookies behind a TLS-terminating proxy
app.use(express.json({ limit: '256kb' }));
app.use(express.static(path.join(process.cwd(), 'public'), {
  // HTML/app shell revalidates every load; versioned-ish assets get a day.
  setHeaders: (res, filePath) => {
    if (filePath.includes(`${path.sep}assets${path.sep}`)) res.setHeader('Cache-Control', 'public, max-age=86400');
    else res.setHeader('Cache-Control', 'no-cache');
  }
}));
app.use(session({
  secret: process.env.SESSION_SECRET || 'lumina-dev-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    httpOnly: true,
    sameSite: 'lax',
    secure: isProd
  }
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

// courseId -> lesson ids (for the course-graduate achievement)
const courseLessonIds = new Map();
for (const s of subjects) for (const c of s.courses) {
  courseLessonIds.set(c.id, c.units.flatMap((u) => u.lessons.map((l) => l.id)));
}

// Run the badge shelf after any progress-changing action. Returns specs of
// achievements earned by THIS call so clients can toast + confetti them.
function gameCheck(uid) {
  if (!uid) return [];
  try {
    return checkAchievements(db, uid, { xp: totalXp(uid), streak: streakDays(uid), courseLessonIds });
  } catch { return []; }
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

function lessonWithProgress(lesson, prog, visits) {
  const s = lesson.skill;
  const p = s ? prog.get(s.id) : null;
  const v = visits ? visits.get(lesson.id) : null;
  return {
    id: lesson.id,
    title: lesson.title,
    minutes: lesson.minutes || 6,
    summary: lesson.summary || '',
    skill: s ? { id: s.id, name: s.name } : null,
    mastery: p ? p.level : null,
    completed: !!(v && v.completed),
    visited: !!v
  };
}

function visitMap(userId) {
  if (!userId) return new Map();
  const rows = db.prepare('SELECT lesson_id, completed, visited_at FROM lesson_visits WHERE user_id = ?').all(userId);
  return new Map(rows.map((r) => [r.lesson_id, r]));
}

function courseDetail(course, prog, visits) {
  const lessons = course.units.flatMap((u) => u.lessons.map((l) => lessonWithProgress(l, prog, visits)));
  const done = lessons.filter((l) => l.completed).length;
  return {
    id: course.id,
    title: course.title,
    subtitle: course.subtitle,
    summary: course.summary,
    ...courseStats(course),
    progress: { done, total: lessons.length },
    units: course.units.map((unit) => ({
      id: unit.id,
      title: unit.title,
      lessons: unit.lessons.map((l) => lessonWithProgress(l, prog, visits))
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
    levelInfo: levelInfo(xp),
    achievements: db.prepare('SELECT COUNT(*) n FROM achievements WHERE user_id = ?').get(u.id).n,
    streakDays: streakDays(u.id)
  });
});

// ---------- achievements ---------------------------------------------------

app.get('/api/achievements', requireAuth, (req, res) => {
  const shelf = achievementShelf(db, req.session.userId);
  res.json({
    total: shelf.length,
    earned: shelf.filter((a) => a.earnedAt).length,
    levelInfo: levelInfo(totalXp(req.session.userId)),
    achievements: shelf
  });
});

// ---------- catalog --------------------------------------------------------

app.get('/api/catalog', (req, res) => {
  const prog = progressMap(req.session.userId);
  const summary = catalogSummary();
  const totals = {
    subjects: summary.length,
    courses: summary.reduce((n, s) => n + s.courses.length, 0),
    lessons: summary.reduce((n, s) => n + s.courses.reduce((m, c) => m + c.lessons, 0), 0)
  };
  const data = summary.map((s) => ({
    ...s,
    courses: s.courses.map((c) => {
      const mastered = c.skills.filter((id) => prog.get(id)?.level === 'mastered').length;
      const touched = c.skills.filter((id) => prog.has(id)).length;
      return { ...c, masteredSkills: mastered, touchedSkills: touched, totalSkills: c.skills.length };
    })
  }));
  res.json({ subjects: data, totals });
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
    course: courseDetail(hit.course, prog, visitMap(req.session.userId))
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
  const uid = req.session.userId;
  const visit = uid ? db.prepare('SELECT completed FROM lesson_visits WHERE user_id = ? AND lesson_id = ?').get(uid, lesson.id) : null;
  const bookmarked = uid ? !!db.prepare('SELECT 1 FROM bookmarks WHERE user_id = ? AND lesson_id = ?').get(uid, lesson.id) : false;
  res.json({
    subject: { id: subject.id, name: subject.name, color: subject.color },
    course: { id: course.id, title: course.title },
    unit: { id: unit.id, title: unit.title },
    lesson: {
      id: lesson.id, title: lesson.title, minutes: lesson.minutes,
      summary: lesson.summary, tags: lesson.tags, blocks: lesson.blocks,
      completed: !!(visit && visit.completed), bookmarked,
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
    const cleaned = String(given).trim().replace(/[, ]/g, '').replace(/%$/, '');
    if (!cleaned) return false;
    const g = Number(cleaned); // strict: rejects trailing junk that parseFloat would ignore
    if (!Number.isFinite(g)) return false;
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
  // A qid is single-use, bound to the skill that issued it, and expires.
  if (!stored || stored.skillId !== hit.skill.id || stored.expires <= Date.now()) {
    return res.status(410).json({ error: 'That question expired — load a new one.', expired: true });
  }
  sessionQ.delete(qid);
  const correct = checkAnswer(stored, answer);
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
    if (stored.challengeRunId) {
      db.prepare('UPDATE challenge_runs SET total = total + 1, correct = correct + ? WHERE id = ? AND user_id = ?')
        .run(correct ? 1 : 0, stored.challengeRunId, uid);
    }
    const xp = totalXp(uid);
    progress = {
      level, attempts, correct: correctCt, streak,
      xpAwarded, levelUp: LEVELS.indexOf(level) > LEVELS.indexOf(prevLevel),
      levelInfo: levelInfo(xp),
      newAchievements: gameCheck(uid)
    };
  }
  res.json({
    correct,
    progress,
    reveal: { answer: stored.answer, answerText: stored.answerText, steps: stored.steps },
    guest: !uid
  });
});

// Course challenge: a mixed assessment spanning every skill in the course.
// Questions go through the same sessionQ/answer pipeline as practice —
// grading and progress updates stay server-side and consistent.
app.get('/api/courses/:id/challenge', (req, res) => {
  const hit = courseIndex.get(req.params.id);
  if (!hit) return res.status(404).json({ error: 'Course not found' });
  const unitIdx = req.query.unit != null ? parseInt(req.query.unit, 10) : null;
  const units = unitIdx == null ? hit.course.units : [hit.course.units[unitIdx]].filter(Boolean);
  if (!units.length) return res.status(404).json({ error: 'Unit not found' });
  const seen = new Set();
  const pool = [];
  units.forEach((u) => u.lessons.forEach((l) => {
    if (l.skill && !seen.has(l.skill.id)) {
      seen.add(l.skill.id);
      pool.push({ skill: l.skill, lesson: l, unit: u });
    }
  }));
  if (!pool.length) return res.status(404).json({ error: 'This course has no practice skills yet' });
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  // Signed-in challengers get a tracked run — the answer endpoint tallies it
  // server-side, and finishing it awards the challenge badges.
  const uid = req.session.userId;
  const runId = uid
    ? db.prepare('INSERT INTO challenge_runs (user_id, course_id, unit) VALUES (?,?,?)').run(uid, hit.course.id, unitIdx).lastInsertRowid
    : null;
  const questions = pool.slice(0, Math.min(10, pool.length)).map((p) => {
    const q = questionPayload({ skill: p.skill });
    if (!q) return null;
    const qid = `q${qidSeq += 1}`;
    sessionQ.set(qid, {
      answer: q.answer, tolerance: q.tolerance || 0, normalize: q.normalize,
      steps: q.steps || [], answerText: q.answerText || String(q.answer),
      skillId: p.skill.id, challengeRunId: runId, expires: Date.now() + 30 * 60 * 1000
    });
    return {
      qid, skillId: p.skill.id, skillName: p.skill.name, unit: p.unit.title,
      question: { type: q.type, prompt: q.prompt, choices: q.choices, hint: q.hint }
    };
  }).filter(Boolean);
  res.json({
    course: {
      id: hit.course.id, title: hit.course.title, subjectId: hit.subject.id,
      unit: unitIdx != null ? { index: unitIdx, title: units[0]?.title } : null
    },
    count: questions.length,
    runId,
    questions
  });
});

app.post('/api/courses/:id/challenge/finish', requireAuth, (req, res) => {
  const run = db.prepare('SELECT * FROM challenge_runs WHERE id = ? AND user_id = ?').get(req.body.runId, req.session.userId);
  if (!run || run.course_id !== req.params.id) return res.status(404).json({ error: 'Challenge run not found' });
  db.prepare('UPDATE challenge_runs SET finished_at = datetime(\'now\') WHERE id = ?').run(run.id);
  res.json({
    run: { total: run.total, correct: run.correct },
    newAchievements: gameCheck(req.session.userId)
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
  if (!lessonIndex.has(req.params.id)) return res.status(404).json({ error: 'Lesson not found' });
  const uid = req.session.userId;
  if (!uid) return res.json({ ok: true, guest: true });
  const wasDone = db.prepare('SELECT completed FROM lesson_visits WHERE user_id = ? AND lesson_id = ?').get(uid, req.params.id);
  db.prepare(`INSERT INTO lesson_visits (user_id, lesson_id, completed) VALUES (?,?,1)
    ON CONFLICT (user_id, lesson_id) DO UPDATE SET completed = 1, visited_at = datetime('now')`)
    .run(uid, req.params.id);
  const xpAwarded = wasDone?.completed ? 0 : 5; // completing a lesson pays once
  if (xpAwarded) awardXp(uid, xpAwarded);
  res.json({ ok: true, xpAwarded, levelInfo: levelInfo(totalXp(uid)), newAchievements: gameCheck(uid) });
});

app.post('/api/lessons/:id/bookmark', requireAuth, (req, res) => {
  if (!lessonIndex.has(req.params.id)) return res.status(404).json({ error: 'Lesson not found' });
  const uid = req.session.userId;
  const existing = db.prepare('SELECT 1 FROM bookmarks WHERE user_id = ? AND lesson_id = ?').get(uid, req.params.id);
  if (existing) {
    db.prepare('DELETE FROM bookmarks WHERE user_id = ? AND lesson_id = ?').run(uid, req.params.id);
    return res.json({ bookmarked: false });
  }
  db.prepare('INSERT INTO bookmarks (user_id, lesson_id) VALUES (?,?)').run(uid, req.params.id);
  res.json({ bookmarked: true });
});

app.get('/api/bookmarks', requireAuth, (req, res) => {
  const rows = db.prepare('SELECT lesson_id, created_at FROM bookmarks WHERE user_id = ? ORDER BY created_at DESC').all(req.session.userId);
  res.json({ bookmarks: rows.map((r) => ({ ...lessonBrief(r.lesson_id), savedAt: r.created_at })).filter((b) => b.lessonId) });
});

function lessonBrief(lessonId) {
  const hit = lessonIndex.get(lessonId);
  if (!hit) return { lessonId: null };
  return {
    lessonId, title: hit.lesson.title, minutes: hit.lesson.minutes || 6,
    courseId: hit.course.id, courseTitle: hit.course.title,
    subjectId: hit.subject.id, subjectColor: hit.subject.color
  };
}

// Merge guest (localStorage) progress after signup/login.
app.post('/api/progress/import', requireAuth, (req, res) => {
  // Client sends per-skill aggregates; merging in one write per skill avoids
  // replay-order artifacts (misses wiping a live streak) and count caps.
  const skills = Array.isArray(req.body?.skills) ? req.body.skills.slice(0, 500) : [];
  const uid = req.session.userId;
  let imported = 0;
  for (const it of skills) {
    if (!it || !skillIndex.has(it.skillId)) continue;
    const ga = Math.max(0, Math.min(2000, parseInt(it.attempts, 10) || 0));
    const gc = Math.max(0, Math.min(ga, parseInt(it.correct, 10) || 0));
    const gs = Math.max(0, Math.min(ga, parseInt(it.streak, 10) || 0));
    if (!ga) continue;
    const prev = db.prepare('SELECT * FROM skill_progress WHERE user_id = ? AND skill_id = ?').get(uid, it.skillId);
    const attempts = (prev?.attempts || 0) + ga;
    const correctCt = (prev?.correct || 0) + gc;
    const streak = Math.max(prev?.streak || 0, gs);
    db.prepare(`INSERT INTO skill_progress (user_id, skill_id, attempts, correct, streak, level)
      VALUES (?,?,?,?,?,?)
      ON CONFLICT (user_id, skill_id) DO UPDATE SET attempts=excluded.attempts, correct=excluded.correct,
        streak=excluded.streak, level=excluded.level, updated_at=datetime('now')`)
      .run(uid, it.skillId, attempts, correctCt, streak, levelFor(streak, correctCt));
    if (gc) awardXp(uid, 10 * gc);
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

  // "Up next": the first incomplete lesson in the course the user touched most
  // recently; if that course is done, the first course with untouched skills.
  const visits = visitMap(uid);
  let upNext = null;
  const recentHit = recent.length ? lessonIndex.get(recent[0].lesson_id) : null;
  if (recentHit) {
    const flat = recentHit.course.units.flatMap((un) => un.lessons);
    const pending = flat.find((l) => !visits.get(l.id)?.completed);
    if (pending && pending.id !== recent[0].lesson_id) {
      upNext = { lessonId: pending.id, title: pending.title, courseId: recentHit.course.id, courseTitle: recentHit.course.title, subjectColor: recentHit.subject.color, minutes: pending.minutes || 6 };
    }
  }
  if (!upNext) {
    outer:
    for (const s of subjects) {
      for (const c of s.courses) {
        const flat = c.units.flatMap((un) => un.lessons);
        const pending = flat.find((l) => !visits.get(l.id)?.completed);
        if (pending && (visits.has(flat[0].id) || c === subjects[0].courses[0])) {
          upNext = { lessonId: pending.id, title: pending.title, courseId: c.id, courseTitle: c.title, subjectColor: s.color, minutes: pending.minutes || 6 };
          break outer;
        }
      }
    }
  }
  if (!upNext) {
    const first = subjects[0]?.courses[0]?.units?.[0]?.lessons?.[0];
    if (first) upNext = { lessonId: first.id, title: first.title, courseId: subjects[0].courses[0].id, courseTitle: subjects[0].courses[0].title, subjectColor: subjects[0].color, minutes: first.minutes || 6 };
  }

  const bookmarkRows = db.prepare('SELECT lesson_id FROM bookmarks WHERE user_id = ? ORDER BY created_at DESC LIMIT 6').all(uid);
  const bookmarks = bookmarkRows.map((r) => lessonBrief(r.lesson_id)).filter((b) => b.lessonId);
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
  const activity = new Map(db.prepare(`SELECT day, xp FROM activity_days WHERE user_id = ?
    ORDER BY day DESC LIMIT 60`).all(uid).map((r) => [r.day, r.xp]));
  // Emit the last 14 consecutive calendar days so the graph reflects gaps.
  const weekly = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(Date.now() - (13 - i) * 86400000).toISOString().slice(0, 10);
    return { day: d, xp: activity.get(d) || 0 };
  });
  const today = { xp: weekly[13].xp, goal: 50 };

  // Suggested practice: stale mastered/proficient skills resurface for spaced
  // review first (oldest first), then weakest in-progress skills, then
  // untouched skills inside courses the user has already started.
  const suggested = [];
  const stale = db.prepare(`SELECT skill_id, CAST(julianday('now') - julianday(updated_at) AS INTEGER) AS days
    FROM skill_progress
    WHERE user_id = ? AND level IN ('proficient','mastered') AND updated_at < datetime('now', '-3 days')
    ORDER BY updated_at ASC LIMIT 3`).all(uid);
  for (const row of stale) {
    const hit = skillIndex.get(row.skill_id);
    if (!hit) continue;
    suggested.push({ skillId: row.skill_id, name: hit.skill.name, lessonTitle: hit.lesson.title, courseId: hit.course.id, level: 'review', streak: 0, kind: 'review', days: row.days });
    if (suggested.length >= 3) break;
  }
  const inProg = [...prog.entries()]
    .filter(([id, p]) => p.level !== 'mastered' && skillIndex.has(id))
    .map(([id, p]) => ({ id, p }));
  inProg.sort((a, b) => (a.p.streak - b.p.streak) || (a.p.correct - b.p.correct));
  for (const { id, p } of inProg) {
    if (suggested.length >= 3) break;
    const hit = skillIndex.get(id);
    if (!hit) continue;
    suggested.push({ skillId: id, name: hit.skill.name, lessonTitle: hit.lesson.title, courseId: hit.course.id, level: p.level, streak: p.streak, kind: 'keep-going' });
  }
  if (suggested.length < 3) {
    for (const c of [...courseIndex.values()].map((h) => h.course)) {
      const flat = c.units.flatMap((un) => un.lessons);
      const started = flat.some((l) => visits.has(l.id));
      if (!started) continue;
      const next = flat.find((l) => l.skill && !prog.has(l.skill.id));
      if (!next) continue;
      const hit = skillIndex.get(next.skill.id);
      suggested.push({ skillId: next.skill.id, name: next.skill.name, lessonTitle: next.title, courseId: c.id, level: 'new', streak: 0, kind: 'new-skill', courseTitle: hit?.course.title });
      if (suggested.length >= 3) break;
    }
  }

  res.json({
    user: publicUser(u),
    xp, level: levelFromXp(xp), levelInfo: levelInfo(xp), streakDays: streakDays(uid),
    xpToNext: (levelFromXp(xp) * (levelFromXp(xp) + 1) * 50) - xp,
    achievements: {
      earned: db.prepare('SELECT COUNT(*) n FROM achievements WHERE user_id = ?').get(uid).n,
      total: ACHIEVEMENTS.length
    },
    continueLearning, bySubject, recentAttempts, weekly, upNext, bookmarks,
    today, suggested
  });
});

// ---------- homework help (Q&A) --------------------------------------------

function seedQuestions() {
  // Idempotent per-title seeding: new seeds added to content/qa.js reach
  // existing databases without touching user-generated questions.
  const exists = db.prepare('SELECT id FROM questions WHERE title = ?');
  const insQ = db.prepare(`INSERT INTO questions (author_name, is_expert, title, body, subject_id, tags, views, votes, created_at)
    VALUES (?,?,?,?,?,?,?,?, datetime('now', ?))`);
  const insA = db.prepare(`INSERT INTO answers (question_id, author_name, is_expert, body, votes, created_at)
    VALUES (?,?,?,?,?, datetime('now', ?))`);
  const setAcc = db.prepare('UPDATE questions SET accepted_answer_id = ? WHERE id = ?');
  qaSeed.forEach((q, i) => {
    if (exists.get(q.title)) return;
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
  if (sort === 'unanswered') where.push('q.accepted_answer_id IS NULL');
  const whereSql = where.length ? `WHERE ${where.join(' AND ')}` : '';
  const orderSql = sort === 'top' ? 'ORDER BY q.votes DESC, q.created_at DESC' : 'ORDER BY q.created_at DESC';
  const rows = db.prepare(`
    SELECT q.*, (SELECT COUNT(*) FROM answers a WHERE a.question_id = q.id) AS answer_count
    FROM questions q ${whereSql} ${orderSql}
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
  res.json({ id: info.lastInsertRowid, newAchievements: gameCheck(req.session.userId) });
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
  res.json({ id: info.lastInsertRowid, newAchievements: gameCheck(req.session.userId) });
});

app.post('/api/questions/:id/accept', requireAuth, (req, res) => {
  const q = db.prepare('SELECT * FROM questions WHERE id = ?').get(req.params.id);
  if (!q) return res.status(404).json({ error: 'Question not found' });
  if (q.user_id !== req.session.userId) return res.status(403).json({ error: 'Only the asker can accept an answer' });
  const { answerId } = req.body || {};
  const a = db.prepare('SELECT * FROM answers WHERE id = ? AND question_id = ?').get(answerId, q.id);
  if (!a) return res.status(404).json({ error: 'Answer not found' });
  db.prepare('UPDATE questions SET accepted_answer_id = ? WHERE id = ?').run(a.id, q.id);
  if (a.user_id && a.user_id !== req.session.userId) gameCheck(a.user_id); // "Verified brain" for the answer author
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
  if (typeof message === 'string' && message.length > 1000) {
    return res.status(400).json({ error: 'Keep messages under 1000 characters' });
  }
  const user = req.session.userId
    ? db.prepare('SELECT * FROM users WHERE id = ?').get(req.session.userId) : null;
  const reply = coach.respond(message, user, db);
  if (user) {
    db.prepare('INSERT INTO coach_threads (user_id, role, body) VALUES (?,?,?)').run(user.id, 'user', message || '');
    db.prepare('INSERT INTO coach_threads (user_id, role, body) VALUES (?,?,?)').run(user.id, 'assistant', reply.text);
  }
  res.json({ reply });
});

// ---------- sitemap ----------------------------------------------------------

app.get('/sitemap.xml', (req, res) => {
  const urls = ['/', '/subjects', '/help', '/coach', '/about', '/faq', '/terms', '/privacy'];
  for (const s of subjects) {
    urls.push(`/subjects/${s.id}`);
    for (const c of s.courses) {
      urls.push(`/course/${c.id}`);
      for (const u of c.units) for (const l of u.lessons) urls.push(`/learn/${c.id}/${l.id}`);
    }
  }
  res.set('content-type', 'application/xml').send(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n') + '\n</urlset>'
  );
});

// ---------- SPA fallback -----------------------------------------------------

const SPA_ROUTES = /^\/(?!api\/|images\/|styles\/|app\/|assets\/|favicon|robots\.txt$|sitemap\.xml$).*/;
app.get(SPA_ROUTES, (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Lumina running on http://localhost:${port}`);
});
