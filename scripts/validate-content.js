#!/usr/bin/env node
// Validates content files against the spec in content/SPEC.md.
// Usage: node scripts/validate-content.js [file-name ...]
// With no args, validates every registered subject + qa.js.

const path = require('path');
const fs = require('fs');
const { GENERATORS } = require('../content/generators');

const CONTENT_DIR = path.join(__dirname, '..', 'content');
const args = process.argv.slice(2);
const files = args.length
  ? args
  : fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.js') && !['index.js', 'generators.js'].includes(f));

const ids = new Set();       // subjects, courses, units, lessons share one namespace
const skillIds = new Set();  // skills are a separate namespace (different routes)
let errors = 0;
let warnings = 0;
const err = (where, msg) => { errors += 1; console.error(`ERR  ${where}: ${msg}`); };
const warn = (where, msg) => { warnings += 1; console.warn(`WARN ${where}: ${msg}`); };
const uniqId = (where, id, pool = ids) => {
  if (!id || !/^[a-z0-9-]+$/.test(id)) err(where, `bad id "${id}" (kebab-case required)`);
  else if (pool.has(id)) err(where, `duplicate id "${id}"`);
  else pool.add(id);
};

function validateQuestion(where, q) {
  if (!q || typeof q !== 'object') return err(where, 'question is not an object');
  if (!q.prompt) err(where, 'question missing prompt');
  if (!Array.isArray(q.steps) || q.steps.length === 0) err(where, 'question missing steps[]');
  if (!q.hint) warn(where, 'question missing hint');
  if (q.type === 'choice') {
    if (!Array.isArray(q.choices) || q.choices.length !== 4) err(where, 'choice question needs exactly 4 choices');
    else {
      const ids = q.choices.map((c) => c.id).sort().join('');
      if (ids !== 'abcd') err(where, `choice ids must be a..d, got ${ids}`);
      if (!['a', 'b', 'c', 'd'].includes(q.answer)) err(where, `choice answer "${q.answer}" is not a valid letter`);
    }
  } else if (q.type === 'numeric') {
    if (typeof q.answer !== 'number') err(where, 'numeric answer must be a number');
  } else if (q.type === 'text') {
    if (typeof q.answer !== 'string') err(where, 'text answer must be a string');
  } else {
    err(where, `unknown question type "${q.type}"`);
  }
}

function validateSkill(where, skill) {
  if (!skill) return err(where, 'lesson missing skill');
  uniqId(`${where}.skill`, skill.id, skillIds);
  if (!skill.name) err(where, 'skill missing name');
  const hasGen = !!skill.generator;
  const hasBank = Array.isArray(skill.bank) && skill.bank.length > 0;
  if (hasGen === hasBank) return err(where, 'skill needs exactly one of generator/bank');
  if (hasGen && !GENERATORS[skill.generator]) err(where, `unknown generator "${skill.generator}"`);
  if (hasBank) {
    if (skill.bank.length < 6) warn(where, `skill bank has only ${skill.bank.length} questions (aim for 6–12)`);
    skill.bank.forEach((q, i) => validateQuestion(`${where}.bank[${i}]`, q));
  }
}

function validateSubject(mod, file) {
  const where = file;
  if (!mod.id || !mod.name || !mod.color || !Array.isArray(mod.courses)) {
    return err(where, 'subject missing id/name/color/courses');
  }
  if (!/^[a-z0-9-]+$/.test(mod.id)) err(where, `bad subject id "${mod.id}"`);
  // duplicate subject ids across files are fine — the registry merges their courses
  let lessonCount = 0;
  for (const course of mod.courses) {
    const cw = `${file}:${course.id || '?'}`;
    uniqId(cw, course.id);
    if (!course.title || !Array.isArray(course.units)) err(cw, 'course missing title/units');
    for (const unit of course.units || []) {
      const uw = `${cw}/${unit.id || '?'}`;
      uniqId(uw, unit.id);
      if (!Array.isArray(unit.lessons) || unit.lessons.length === 0) err(uw, 'unit has no lessons');
      for (const lesson of unit.lessons || []) {
        const lw = `${uw}/${lesson.id || '?'}`;
        uniqId(lw, lesson.id);
        lessonCount += 1;
        if (!lesson.title) err(lw, 'lesson missing title');
        if (!Array.isArray(lesson.blocks) || lesson.blocks.length < 3) err(lw, 'lesson needs >= 3 blocks');
        (lesson.blocks || []).forEach((b, i) => {
          if (!b || !b.type) err(`${lw}.blocks[${i}]`, 'block missing type');
        });
        validateSkill(lw, lesson.skill);
      }
    }
  }
  if (lessonCount === 0) err(file, 'subject has no lessons');
  return lessonCount;
}

let totalLessons = 0;
for (const file of files) {
  const full = path.join(CONTENT_DIR, file);
  if (!fs.existsSync(full)) { console.warn(`skip ${file}: not found`); continue; }
  try {
    const mod = require(full);
    if (file === 'qa.js') {
      if (!Array.isArray(mod)) { err(file, 'qa.js must export an array'); continue; }
      mod.forEach((q, i) => {
        const qw = `${file}[${i}]`;
        if (!q.title || !q.body || !q.answer || !q.subjectId) err(qw, 'missing title/body/answer/subjectId');
      });
      console.log(`${file}: ${mod.length} seeded Q&A`);
      continue;
    }
    const n = validateSubject(mod, file);
    totalLessons += n || 0;
    console.log(`${file}: ${mod.courses?.length || 0} courses, ${n} lessons`);
  } catch (e) {
    err(file, `failed to load: ${e.message}`);
  }
}

console.log(`\n${errors} errors, ${warnings} warnings, ${totalLessons} lessons`);
process.exit(errors ? 1 : 0);
