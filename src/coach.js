// Lumina Coach — a deterministic study assistant.
// No external AI dependency: it parses intent, solves math with mathjs,
// retrieves from the lesson/Q&A corpus, and builds study plans from progress.

const math = require('mathjs');
const { subjects, skillIndex, lessonIndex } = require('../content');

const STOP = new Set(('a,an,the,is,are,was,were,be,been,being,have,has,had,do,does,did,will,would,'
  + 'could,should,to,of,in,for,on,with,at,by,from,as,into,about,between,through,after,before,'
  + 'and,but,or,nor,so,yet,both,either,neither,not,only,very,can,just,how,what,when,where,who,'
  + 'which,why,i,you,he,she,it,we,they,me,him,her,us,them,my,your,his,its,our,their,this,that,'
  + 'these,those,am,get,explain,help,teach,tell,please,show,learn,understand,mean,means,'
  + 'does,difference,between,solve,find,calculate,compute,evaluate,hi,hello,hey,thanks,thank').split(','));

function tokenize(text) {
  return text.toLowerCase()
    .replace(/[^a-z0-9²³°%+x\-./\s]/g, ' ')
    .split(/\s+/)
    .filter((t) => t && !STOP.has(t));
}

// ---- math handling ------------------------------------------------------

const EQUATION_RE = /^(.*)=(.*)$/;
const MATHY_RE = /^[\d\sxX+\-*/^().=,%]+$/;

function tryMath(raw) {
  // Natural-language percent: "what is 15% of 80", "20% off $45", "30% of 200"
  const pct = raw.match(/(-?\d+(?:\.\d+)?)\s*%\s*(of|off)\s*\$?\s*(-?\d+(?:\.\d+)?)/i);
  if (pct) {
    const p = parseFloat(pct[1]), base = parseFloat(pct[3]);
    const part = Math.round((p / 100) * base * 100) / 100;
    if (pct[2].toLowerCase() === 'off') {
      const price = Math.round((base - part) * 100) / 100;
      return {
        text: `$${p}\\%$ off $${base}$:\n\n`
          + `**1.** Discount: $\\frac{${p}}{100} \\times ${base} = ${fmtNum(part)}$\n`
          + `**2.** Final price: $${base} - ${fmtNum(part)} = \\boxed{${fmtNum(price)}}$`,
        math: true
      };
    }
    return {
      text: `$${p}\\%$ of $${base}$ $= \\frac{${p}}{100} \\times ${base} = \\boxed{${fmtNum(part)}}$`,
      math: true
    };
  }

  const text = raw.replace(/solve for x[:\s]*/i, '').replace(/solve[:\s]*/i, '')
    .replace(/what is|evaluate|compute|calculate/gi, '').trim();
  const eqMatch = text.match(EQUATION_RE);
  const hasX = /[xX]/.test(text);

  if (eqMatch && hasX) {
    // Linear-equation solver: f(x) = left - right; a = f(1)-f(0), b = f(0)
    try {
      const lhs = eqMatch[1].trim(), rhs = eqMatch[2].trim();
      const f = math.compile(`(${lhs}) - (${rhs})`);
      const f0 = f.evaluate({ x: 0 });
      const f1 = f.evaluate({ x: 1 });
      const a = f1 - f0;
      const f2 = f.evaluate({ x: 2 });
      if (Math.abs(f2 - (f1 + a)) > 1e-9) {
        const quad = tryQuadratic(f, f0, f1, f2, lhs, rhs);
        if (quad) return quad;
        return { text: `That equation isn't linear or quadratic, so I can't isolate $x$ with a simple rule. Try asking about a specific topic — e.g. "explain factoring" — or an equation like \`3x + 5 = 20\` or \`x^2 + 5x + 6 = 0\`.` };
      }
      if (Math.abs(a) < 1e-12) {
        return Math.abs(f0) < 1e-12
          ? { text: `Every value of $x$ satisfies that — it's an identity (infinitely many solutions).` }
          : { text: `That equation has **no solution** — both sides differ by a constant.` };
      }
      const x = -f0 / a;
      const xs = math.round(x * 1e6) / 1e6;
      return {
        text: `Solving $${lhs} = ${rhs}$:\n\n`
          + `**1.** Move everything to one side: $(${lhs}) - (${rhs}) = 0$\n`
          + `**2.** This reduces to $${fmtNum(a)}x ${f0 >= 0 ? '+' : '-'} ${fmtNum(Math.abs(f0))} = 0$\n`
          + `**3.** Isolate $x$: $x = \\frac{${fmtNum(-f0)}}{${fmtNum(a)}} = \\boxed{${fmtNum(xs)}}$`,
        math: true
      };
    } catch (e) { /* fall through */ }
  }

  if (MATHY_RE.test(text.replace(/x/gi, '')) && /\d/.test(text)) {
    try {
      const scope = { x: 1 };
      const expr = text.replace(/%/g, '/100').replace(/\^/g, '^');
      const val = math.evaluate(expr, scope);
      if (typeof val === 'number' || math.typeOf(val) === 'Fraction' || math.typeOf(val) === 'BigNumber') {
        return {
          text: `$${text.trim()} = ${math.format(val, { precision: 8 })}$`,
          math: true
        };
      }
    } catch (e) { /* not math we can eval */ }
  }
  return null;
}

// Quadratic solver via second differences: if f(x) = ax²+bx+c, then
// f(0)=c, a=(f(2)-2f(1)+f(0))/2, b=f(1)-f(0)-a. Verified against f(3).
function tryQuadratic(f, f0, f1, f2, lhs, rhs) {
  try {
    const f3 = f.evaluate({ x: 3 });
    const secondDiff = (f2 - f1) - (f1 - f0);
    const secondDiff2 = (f3 - f2) - (f2 - f1);
    if (Math.abs(secondDiff - secondDiff2) > 1e-9 || Math.abs(secondDiff) < 1e-12) return null;
    const a = secondDiff / 2, c = f0, b = f1 - f0 - a;
    const disc = b * b - 4 * a * c;
    const fmtCoef = (v, vname) => {
      const s = Math.abs(v);
      if (!vname) return fmtNum(s);
      if (s === 1) return vname;
      return `${fmtNum(s)}${vname}`;
    };
    const poly = `${fmtCoef(a, 'x^2')} ${b >= 0 ? '+' : '-'} ${fmtCoef(b, 'x')} ${c >= 0 ? '+' : '-'} ${fmtNum(Math.abs(c))}`;
    const head = `Solving $${lhs} = ${rhs}$ — rearranged: $${poly} = 0$\n\n`
      + `**1.** Quadratic formula: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ with $a=${fmtNum(a)},\\ b=${fmtNum(b)},\\ c=${fmtNum(c)}$\n`
      + `**2.** Discriminant: $(${fmtNum(b)})^2 - 4(${fmtNum(a)})(${fmtNum(c)}) = ${fmtNum(disc)}$`;
    if (disc < -1e-9) {
      return { text: head + `\n**3.** Negative discriminant → **no real solutions** — the parabola never crosses the x-axis.`, math: true };
    }
    if (Math.abs(disc) < 1e-9) {
      const x = -b / (2 * a);
      return { text: head + `\n**3.** Zero discriminant → one repeated root: $x = \\frac{${fmtNum(-b)}}{${fmtNum(2 * a)}} = \\boxed{${fmtNum(x)}}$`, math: true };
    }
    const sq = Math.sqrt(disc);
    const x1 = (-b + sq) / (2 * a), x2 = (-b - sq) / (2 * a);
    return {
      text: head + `\n**3.** Two roots: $x = \\frac{${fmtNum(-b)} \\pm ${fmtNum(Math.round(sq * 1e6) / 1e6)}}{${fmtNum(2 * a)}}$ → $x = \\boxed{${fmtNum(Math.round(x1 * 1e6) / 1e6)}}$ or $x = \\boxed{${fmtNum(Math.round(x2 * 1e6) / 1e6)}}$`,
      math: true
    };
  } catch (e) { return null; }
}

function fmtNum(n) {
  const r = Math.round(n * 1e6) / 1e6;
  return Number.isInteger(r) ? `${r}` : `${r}`;
}

// ---- retrieval ----------------------------------------------------------

function lessonCorpus() {
  const docs = [];
  for (const { lesson, unit, course, subject } of lessonIndex.values()) {
    const text = [
      lesson.title, lesson.summary || '', (lesson.tags || []).join(' '),
      unit.title, course.title, subject.name,
      ...(lesson.blocks || []).map((b) => b.text || b.title || (b.items || []).join(' ') || '')
    ].join(' ').toLowerCase();
    docs.push({ lesson, unit, course, subject, text });
  }
  return docs;
}

let _corpus = null;
function corpus() { if (!_corpus) _corpus = lessonCorpus(); return _corpus; }

function scoreDoc(docText, tokens) {
  let s = 0;
  for (const t of tokens) {
    if (!t || t.length < 2) continue;
    let i = 0, c = 0;
    while ((i = docText.indexOf(t, i)) !== -1) { c += 1; i += t.length; }
    s += c * (t.length >= 5 ? 2 : 1);
  }
  return s;
}

function findRelevant(query, limit = 3) {
  const tokens = tokenize(query);
  if (!tokens.length) return [];
  return corpus()
    .map((d) => ({ d, s: scoreDoc(d.text, tokens) }))
    .filter((r) => r.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, limit)
    .map((r) => r.d);
}

// ---- intent routing -----------------------------------------------------

function respond(message, user, db) {
  const text = (message || '').trim();
  if (!text) return { text: 'Ask me anything — try "explain the distributive property" or "solve 3x + 5 = 20".' };

  const lower = text.toLowerCase();

  // greetings
  if (/^(hi|hello|hey|yo|sup|good (morning|afternoon|evening))\b/.test(lower)) {
    return {
      text: `Hey${user ? ` ${user.name.split(' ')[0]}` : ''}! I'm **Coach**, your study assistant. I can:\n\n`
        + '- **Solve math** — `solve 3x + 5 = 20`, `x^2 + 5x + 6 = 0`, or `what is 15% of 80`\n'
        + '- **Explain topics** — try "explain photosynthesis" or "what is a variable"\n'
        + '- **Find practice** — "practice factoring" or "quiz me on physics"\n'
        + '- **Build a plan** — "what should I study next?"\n\nWhat are you working on?'
    };
  }

  // math — equations, expressions, or natural percent phrasing
  if (/\d+(?:\.\d+)?\s*%\s*(of|off)\s*\$?\s*\d/i.test(lower)
    || EQUATION_RE.test(text) || (MATHY_RE.test(text) && /\d/.test(text))
    || /\b(solve|evaluate|compute|calculate|percent|%)\b/i.test(lower) && /[\d+x=^%]/.test(lower)) {
    const m = tryMath(text);
    if (m) return m;
  }

  // study plan
  if (/\b(plan|schedule|what should i (study|learn|do)|recommend|suggest|next)\b/i.test(lower)) {
    return studyPlan(user, db);
  }

  // practice request
  const prMatch = lower.match(/(?:practice|quiz|test|drill)\s+(?:me\s+(?:on|in)\s+)?(.+)/);
  if (prMatch) {
    const hits = findRelevant(prMatch[1], 3);
    const withSkill = hits.filter((h) => h.lesson.skill);
    if (withSkill.length) {
      const h = withSkill[0];
      return {
        text: `Here's practice for **${h.lesson.skill.name}** — from the lesson "${h.lesson.title}":`,
        links: [{ label: `Practice: ${h.lesson.skill.name}`, url: `/practice/${h.lesson.skill.id}` },
          { label: `Lesson: ${h.lesson.title}`, url: `/learn/${h.course.id}/${h.lesson.id}` }]
      };
    }
    return { text: `I couldn't find a practice set for "${prMatch[1]}". Try a broader topic like "practice algebra" or browse the catalog.` };
  }

  // homework question look-up
  if (db) {
    const rows = db.prepare('SELECT id, title, body FROM questions').all();
    const tokens = tokenize(text);
    const scored = rows.map((r) => ({ r, s: scoreDoc((r.title + ' ' + r.body).toLowerCase(), tokens) }))
      .filter((x) => x.s > 1).sort((a, b) => b.s - a.s).slice(0, 2);
    const lessons = findRelevant(text, 3);
    if (scored.length || lessons.length) {
      const parts = [];
      if (lessons.length) {
        parts.push(`Here's what I found on that:`);
        const l = lessons[0];
        parts.push(`**${l.lesson.title}** — ${(l.lesson.summary || '').trim()}`);
      }
      return {
        text: parts.join('\n\n'),
        links: [
          ...lessons.map((l) => ({ label: `Lesson: ${l.lesson.title}`, url: `/learn/${l.course.id}/${l.lesson.id}` })),
          ...scored.map(({ r }) => ({ label: `Solved: ${r.title}`, url: `/help/${r.id}` }))
        ]
      };
    }
  }

  const lessons = findRelevant(text, 3);
  if (lessons.length) {
    const l = lessons[0];
    return {
      text: `The best match in the library is **${l.lesson.title}** (${l.course.title}). ${l.lesson.summary || ''}`,
      links: [
        { label: `Open lesson`, url: `/learn/${l.course.id}/${l.lesson.id}` },
        ...(l.lesson.skill ? [{ label: `Practice ${l.lesson.skill.name}`, url: `/practice/${l.lesson.skill.id}` }] : []),
        ...lessons.slice(1).map((x) => ({ label: x.lesson.title, url: `/learn/${x.course.id}/${x.lesson.id}` }))
      ]
    };
  }

  return {
    text: `I don't have a good answer for that yet. Try rephrasing, or ask me to **solve** a math problem, **explain** a topic, **practice** a skill, or build you a **study plan**.`,
    links: [{ label: 'Browse all subjects', url: '/subjects' }]
  };
}

function studyPlan(user, db) {
  if (!user) {
    return {
      text: `I can build a personalized study plan once you have an account — your progress tells me what to queue up next. For now, **Algebra Foundations** is a great place to start.`,
      links: [{ label: 'Create free account', url: '/signup' }, { label: 'Browse subjects', url: '/subjects' }]
    };
  }
  const prog = db.prepare('SELECT skill_id, level, streak, correct FROM skill_progress WHERE user_id = ?').all(user.id);
  const inProgress = prog.filter((p) => p.level !== 'mastered');
  const mastered = prog.filter((p) => p.level === 'mastered').length;
  const lines = [`Here's your plan based on where you stand (**${mastered}** skills mastered so far):`];
  const links = [];
  for (const p of inProgress.slice(0, 3)) {
    const hit = skillIndex.get(p.skill_id);
    if (!hit) continue;
    lines.push(`- **${hit.skill.name}** (${hit.lesson.title}) — level: ${p.level}, current streak ${p.streak}. Keep going until you hit 5 correct in a row.`);
    links.push({ label: `Practice ${hit.skill.name}`, url: `/practice/${p.skill_id}` });
  }
  if (!inProgress.length) {
    lines.push(`- You've mastered everything you've tried! Pick a new course to expand into.`);
    links.push({ label: 'Browse the catalog', url: '/subjects' });
  }
  links.push({ label: 'View dashboard', url: '/dashboard' });
  return { text: lines.join('\n'), links };
}

module.exports = { respond };
