# Content spec — Lumina curriculum files

Each subject file is a CommonJS module exporting ONE object. Files live in `content/` and must be `require()`-able by plain Node 20 (no imports, no deps, no top-level side effects).

```js
module.exports = {
  id: 'science',                    // unique subject id (kebab-case, matches file name)
  name: 'Science',                  // display name
  icon: 'flask',                    // one of: sigma flask atom globe chip dollar book pen rocket trophy chat check flame star target compass beaker shield lightbulb code history calculator
  color: '#2ea96b',                 // hex accent color
  tagline: 'One-line subtitle',     // <= 60 chars
  description: '2–3 sentences shown on the subject page.',
  courses: [ Course, ... ]          // 2–4 courses per subject
}
```

## Course

```js
{
  id: 'physics-essentials',         // unique across ALL subjects
  title: 'Physics Essentials',
  subtitle: 'Grades 9–12 · Core',   // level tag, free-form
  summary: '1–2 sentences on what the learner gets.',
  units: [ Unit, ... ]              // 2–4 units per course
}
```

## Unit

```js
{ id: 'motion', title: 'Motion and forces', lessons: [ Lesson, ... ] }   // 2–4 lessons per unit
```

## Lesson

```js
{
  id: 'newtons-laws',               // unique across ALL subjects
  title: "Newton's laws of motion",
  minutes: 8,                       // reading time estimate
  summary: '1 sentence, shown on the course page.',
  tags: ['physics', 'forces'],      // used by search
  blocks: [ Block, ... ],           // 4–8 blocks, see below
  skill: Skill                      // every lesson MUST have exactly one
}
```

### Block types

- `{ type: 'p', text }` — paragraph, markdown-lite: `**bold**`, `*italic*`, `` `code` ``, math in `$...$` (inline) — KaTeX syntax
- `{ type: 'h2', text }` — section heading inside the lesson
- `{ type: 'callout', kind: 'key'|'tip'|'warning', text }` — `key` = definition/core idea, `tip` = helpful shortcut, `warning` = common mistake
- `{ type: 'example', title, text }` — worked example with a real computation, ends with the result (mark the check with ✓ when verifying)
- `{ type: 'list', items: [str, ...] }` — bullet list, markdown-lite allowed
- `{ type: 'formula', text }` — display math in KaTeX, e.g. `'x^a \\cdot x^b = x^{a+b}'` (note: JS string — double every backslash)
- `{ type: 'code', lang: 'python'|'js'|..., text }` — fenced code block, real runnable-looking code

Write real instructional content — teach the concept, give a worked example, flag a misconception. Aim for 120–250 words of prose per lesson, plus examples. Math strings use KaTeX syntax inside `$...$` within `text`, or raw KaTeX in `formula` blocks. Backslashes must be escaped in JS strings (`\\frac{a}{b}`).

### Skill

Every lesson needs exactly one skill — this is what the practice engine uses:

```js
skill: { id: 'unique-skill-id', name: 'Short skill name',
         generator: 'generatorName' }                // uses content/generators.js
// OR
skill: { id: 'unique-skill-id', name: 'Short skill name',
         bank: [ Question, ... ] }                   // static question pool, 6–12 items
```

Available generators (see `generators.js`): `oneStepLinear`, `twoStepLinear`, `linearDistribute`, `slopeFromPoints`, `slopeIntercept`, `exponentProduct`, `exponentQuotient`, `factorTrinomial`, `quadraticSolve`, `evaluateExpression`, `orderOfOperations`, `percentOf`, `ratioScale`, `pythagorean`, `circleArea`, `triangleAngles`, `trigSolve`, `functionEval`, `derivativePower`, `logarithmEval`, `ohmsLaw`, `kinematics`, `density`, `percentYield`.

You MAY also write a `bank` instead — required for conceptual (non-computational) skills. Bank question shape:

```js
{
  type: 'choice',                   // 'choice' | 'numeric' | 'text'
  prompt: 'Question with $math$ allowed',
  choices: [{ id: 'a', text: '...' }, { id: 'b', ... }, { id: 'c', ... }, { id: 'd', ... }],  // choice only; exactly 4, ids a–d
  answer: 'b',                      // choice: the letter; numeric: the number; text: canonical string
  tolerance: 0.01,                  // numeric only, optional
  normalize: 'lower',               // text only, optional — compares case-insensitively after trim
  hint: 'One nudge, not the answer.',
  steps: ['Step 1 ...', 'Step 2 ...'],  // worked solution shown after answering — ALWAYS include 1–4 steps
  answerText: 'display form of the answer'
}
```

Vary the correct letter across bank questions (don't make everything 'b'). Wrong choices should be plausible (common errors), not jokes.

## Seeded Q&A file (`content/qa.js`)

Expert-answered questions for the homework-help board. Export an array:

```js
[{ subjectId: 'science', title, body, tags: [], answer, author, minutesAgo? }]
```

`body` is the student's question (markdown-lite + `$math$`), `answer` is the expert reply written as 2–6 numbered steps or short paragraphs. 5–8 questions per subject.

## Quality bar

- Accurate: every number, date, and formula must be correct.
- Consistent ids: kebab-case, globally unique, stable.
- Validate before done: `node -e "const s=require('./content/<file>.js'); console.log(s.courses.length)"` from the repo root must print the course count, and `node scripts/validate-content.js` must pass for your file.
