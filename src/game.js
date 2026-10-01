// Gamification: XP levels, titles, and the achievement shelf.
// checkAchievements(db, uid, ctx) grants any newly-qualified badges and
// returns the specs of the ones just earned (for toasts/confetti).

const LEVEL_TITLES = ['Novice', 'Apprentice', 'Student', 'Scholar', 'Adept', 'Expert', 'Sage', 'Master', 'Luminary', 'Grand Luminary'];

// Level n occupies [(n-1)n·50, n(n+1)·50) cumulative XP (same curve as levelFromXp).
function levelInfo(xp) {
  let level = 1;
  while (level * (level + 1) * 50 <= xp) level += 1;
  const floor = (level - 1) * level * 50;
  return { level, title: LEVEL_TITLES[Math.min(level - 1, LEVEL_TITLES.length - 1)], xp, into: xp - floor, span: level * 100 };
}

const ACHIEVEMENTS = [
  { key: 'first-steps',   name: 'First steps',      desc: 'Answer your first question correctly',          icon: 'spark' },
  { key: 'ten-right',     name: 'Warming up',       desc: 'Answer 10 questions correctly',                 icon: 'target' },
  { key: 'fifty-right',   name: 'Sharpshooter',     desc: 'Answer 50 questions correctly',                 icon: 'zap' },
  { key: 'perfectionist', name: 'Perfectionist',    desc: 'Get 10 correct answers in a row',               icon: 'star' },
  { key: 'master-one',    name: 'First mastery',    desc: 'Reach mastery on your first skill',             icon: 'trophy' },
  { key: 'five-masters',  name: 'Polymath',         desc: 'Master 5 different skills',                     icon: 'atom' },
  { key: 'bookworm',      name: 'Bookworm',         desc: 'Complete 10 lessons',                           icon: 'book' },
  { key: 'scholar',       name: 'Course graduate',  desc: 'Finish every lesson in a course',               icon: 'rocket' },
  { key: 'week-streak',   name: 'On fire',          desc: 'Practice 7 days in a row',                      icon: 'flame' },
  { key: 'month-streak',  name: 'Unstoppable',      desc: 'Practice 30 days in a row',                     icon: 'flame' },
  { key: 'challenger',    name: 'Challenger',       desc: 'Finish a course challenge',                     icon: 'shield' },
  { key: 'ace',           name: 'Ace',              desc: 'Score 100% on a course challenge',              icon: 'star' },
  { key: 'century',       name: 'Century club',     desc: 'Earn 100 XP',                                   icon: 'compass' },
  { key: 'xp-500',        name: 'Half millennium',  desc: 'Earn 500 XP',                                   icon: 'compass' },
  { key: 'xp-1500',       name: 'Luminary fuel',    desc: 'Earn 1,500 XP',                                 icon: 'rocket' },
  { key: 'curious',       name: 'Curious mind',     desc: 'Ask a question on the help board',              icon: 'help' },
  { key: 'helper',        name: 'Study buddy',      desc: 'Post an answer to a homework question',         icon: 'chat' },
  { key: 'accepted',      name: 'Verified brain',   desc: 'Have your answer accepted as the solution',     icon: 'check' },
];

function statsFor(db, uid) {
  const g = (sql, ...a) => db.prepare(sql).get(uid, ...a) || {};
  const all = (sql, ...a) => db.prepare(sql).all(uid, ...a);
  const correct = g('SELECT COALESCE(SUM(correct),0) n FROM skill_progress WHERE user_id = ?').n;
  const mastered = g("SELECT COUNT(*) n FROM skill_progress WHERE user_id = ? AND level = 'mastered'").n;
  const lessons = g('SELECT COUNT(*) n FROM lesson_visits WHERE user_id = ? AND completed = 1').n;
  const completedLessonIds = all('SELECT lesson_id FROM lesson_visits WHERE user_id = ? AND completed = 1').map((r) => r.lesson_id);
  const runs = g('SELECT COUNT(*) n, COALESCE(MAX(correct = total AND total > 0),0) perfect FROM challenge_runs WHERE user_id = ? AND finished_at IS NOT NULL');
  const answersPosted = g('SELECT COUNT(*) n FROM answers WHERE user_id = ?').n;
  const accepted = g('SELECT COUNT(*) n FROM answers a JOIN questions q ON q.accepted_answer_id = a.id WHERE a.user_id = ?').n;
  const questionsAsked = g('SELECT COUNT(*) n FROM questions WHERE user_id = ?').n;
  let consecutive = 0;
  for (const r of all('SELECT correct FROM attempts WHERE user_id = ? ORDER BY created_at DESC, id DESC LIMIT 40')) {
    if (!r.correct) break;
    consecutive += 1;
  }
  return { correct, mastered, lessons, completedLessonIds, runs: runs.n, perfectRuns: runs.perfect, answersPosted, accepted, questionsAsked, consecutive };
}

// ctx: { xp, streak, courseLessonIds: Map<courseId, string[]> }
function checkAchievements(db, uid, ctx = {}) {
  if (!uid) return [];
  const s = statsFor(db, uid);
  const courseDone = ctx.courseLessonIds
    ? [...ctx.courseLessonIds.entries()].some(([, ids]) => ids.length && ids.every((id) => s.completedLessonIds.includes(id)))
    : false;
  const xp = ctx.xp ?? 0;
  const streak = ctx.streak ?? 0;

  const earnedRows = new Set(db.prepare('SELECT key FROM achievements WHERE user_id = ?').all(uid).map((r) => r.key));
  const fresh = [];
  const grant = (key) => {
    if (earnedRows.has(key)) return;
    db.prepare('INSERT OR IGNORE INTO achievements (user_id, key) VALUES (?, ?)').run(uid, key);
    earnedRows.add(key);
    fresh.push(ACHIEVEMENTS.find((a) => a.key === key));
  };

  if (s.correct >= 1) grant('first-steps');
  if (s.correct >= 10) grant('ten-right');
  if (s.correct >= 50) grant('fifty-right');
  if (s.consecutive >= 10) grant('perfectionist');
  if (s.mastered >= 1) grant('master-one');
  if (s.mastered >= 5) grant('five-masters');
  if (s.lessons >= 10) grant('bookworm');
  if (courseDone) grant('scholar');
  if (streak >= 7) grant('week-streak');
  if (streak >= 30) grant('month-streak');
  if (s.runs >= 1) grant('challenger');
  if (s.perfectRuns >= 1) grant('ace');
  if (xp >= 100) grant('century');
  if (xp >= 500) grant('xp-500');
  if (xp >= 1500) grant('xp-1500');
  if (s.questionsAsked >= 1) grant('curious');
  if (s.answersPosted >= 1) grant('helper');
  if (s.accepted >= 1) grant('accepted');
  return fresh;
}

function achievementShelf(db, uid) {
  const rows = new Map(db.prepare('SELECT key, earned_at FROM achievements WHERE user_id = ?').all(uid).map((r) => [r.key, r.earned_at]));
  return ACHIEVEMENTS.map((a) => ({ ...a, earnedAt: rows.get(a.key) || null }));
}

module.exports = { ACHIEVEMENTS, LEVEL_TITLES, levelInfo, checkAchievements, achievementShelf };
