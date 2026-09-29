# Lumina

**Learn it. Solve it. Master it.**

Lumina is a free learning platform combining the best parts of a course library (Khan Academy-style) with step-by-step homework help (Chegg-style) — rebuilt from the original studylink demo into a full product.

## What's inside

- **Course library** — 7 subjects, 20 courses, 111 lessons of written lessons with worked examples, KaTeX math, and per-lesson skills.
- **Practice engine** — unlimited parameterized questions (20+ generators) plus curated banks; server-side grading so answers never leak to the client; instant worked solutions, hints, and streak tracking.
- **Mastery & gamification** — attempted → familiar → proficient → mastered levels, XP, levels, daily streaks, and a dashboard with subject mastery and activity graphs.
- **Homework help** — a Q&A board with ask/answer/upvote/accept, expert-verified solutions, subject filters, and search.
- **Coach** — a deterministic study assistant: solves linear equations and expressions step-by-step (mathjs), explains topics via corpus retrieval, finds practice, and builds a study plan from your progress. No external AI dependency.
- **Accounts** — bcrypt-hashed auth, server sessions, guest-mode practice with localStorage progress that merges into your account on sign-up.
- **Everything else** — landing page, about/FAQ/terms/privacy, full-text search, dark mode, responsive design, zero-build ES-module SPA.

## Quick start

```bash
npm install
npm start        # http://localhost:3000
```

No environment variables required. Set `PORT` to change the port and `SESSION_SECRET` in production.

## Scripts

| command | does what |
|---|---|
| `npm start` / `npm run dev` | boot the server on port 3000 |
| `npm run validate` | validate all content files against the content spec |

## Layout

```
src/            Express API + session auth + deterministic coach
  server.js     REST endpoints (auth, catalog, practice, Q&A, search, coach, dashboard)
  coach.js      offline-capable study assistant
  db.js         better-sqlite3 schema (users, progress, attempts, Q&A, votes, coach)
content/        curriculum: subject/course/unit/lesson/skill files (see content/SPEC.md)
  generators.js parameterized question generators w/ worked solutions
public/         zero-build SPA
  app/          ES-module pages, router, API client, markdown, icons
  styles/app.css design system (light + dark)
scripts/        validate-content.js — schema checker
data/           SQLite database (created at runtime, gitignored)
```

## Adding content

See `content/SPEC.md` for the full schema. In short: a subject file exports
`{ id, name, icon, color, tagline, description, courses[] }`; courses contain
units, units contain lessons, and each lesson may attach a `skill` — either
`{ generator: '<name>' }` for infinite parameterized questions or `{ bank: [...] }`
for a curated list. Run `npm run validate` before committing.
