// Content registry: aggregates subject files, builds lookup indexes,
// and exposes the catalog to the server.

const SUBJECT_FILES = [
  'math',
  'math2',
  'science',
  'computing',
  'humanities',
  'economics',
  'english'
];

const subjects = [];
for (const name of SUBJECT_FILES) {
  try {
    // eslint-disable-next-line global-require
    const mod = require(`./${name}.js`);
    if (!mod || !mod.id || !Array.isArray(mod.courses)) continue;
    // Multiple files may contribute courses to the same subject id (e.g. math.js + math2.js).
    const existing = subjects.find((s) => s.id === mod.id);
    if (existing) existing.courses.push(...mod.courses);
    else subjects.push(mod);
  } catch (e) {
    if (e.code !== 'MODULE_NOT_FOUND') console.warn(`content/${name}.js failed to load:`, e.message);
  }
}

// ---- indexes ------------------------------------------------------------
const skillIndex = new Map();    // skillId -> {skill, lesson, unit, course, subject}
const lessonIndex = new Map();   // lessonId -> {lesson, unit, course, subject}
const courseIndex = new Map();   // courseId -> {course, subject}

for (const subject of subjects) {
  for (const course of subject.courses) {
    courseIndex.set(course.id, { course, subject });
    for (const unit of course.units || []) {
      for (const lesson of unit.lessons || []) {
        lessonIndex.set(lesson.id, { lesson, unit, course, subject });
        if (lesson.skill) {
          skillIndex.set(lesson.skill.id, {
            skill: lesson.skill, lesson, unit, course, subject
          });
        }
      }
    }
  }
}

function courseStats(course) {
  let lessons = 0;
  const skills = [];
  for (const unit of course.units || []) {
    for (const lesson of unit.lessons || []) {
      lessons += 1;
      if (lesson.skill) skills.push(lesson.skill.id);
    }
  }
  return { lessons, skills };
}

function catalogSummary() {
  return subjects.map((s) => ({
    id: s.id,
    name: s.name,
    icon: s.icon,
    color: s.color,
    tagline: s.tagline,
    description: s.description,
    courses: s.courses.map((c) => ({
      id: c.id, title: c.title, subtitle: c.subtitle, summary: c.summary,
      ...courseStats(c)
    }))
  }));
}

module.exports = { subjects, skillIndex, lessonIndex, courseIndex, courseStats, catalogSummary };
