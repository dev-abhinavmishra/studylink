import { icon } from './icons.js';
import { esc, toast, skeletons, avatarHtml } from './ui.js';
import { api, recordGuestAttempt } from './api.js';
import { inlineMd, md } from './markdown.js';

// A rotating pool of generated skills — the hero card plays a real question.
const HERO_SKILLS = [
  'two-step-equations', 'pythagorean-theorem', 'slope-from-points',
  'order-of-operations', 'circle-area', 'function-evaluation',
  'percent-change-practice', 'solve-quadratics'
];

const TICKER_SKILLS = [
  'Two-step equations', 'Pythagorean theorem', 'Solving quadratics',
  'Slope from two points', 'Order of operations', 'Evaluating functions',
  'Power rule for derivatives', 'Evaluating logarithms', 'Circle area',
  'Percent change', 'Compound interest', 'Unit pricing',
  'Photosynthesis inputs & outputs', 'Balancing equations', 'Mole calculations',
  'Cellular respiration', 'Punnett square genetics', 'Natural selection',
  'River-valley civilizations', 'The Industrial Revolution', 'The Civil Rights Movement'
];

export function pageLanding(catalog) {
  const subjectCards = (catalog.subjects || []).map((s) => `
    <a class="card card-hover card-pad subject-card card-link" href="/subjects/${s.id}" data-nav style="border-top:3px solid ${s.color}">
      <span class="subj-icon" style="background:${s.color}1a;color:${s.color}">${icon(s.icon, 22)}</span>
      <h3 class="card-title" style="margin-bottom:2px">${esc(s.name)}</h3>
      <div class="muted small">${esc(s.tagline)}</div>
      <div class="course-count mt-1">${s.courses.length} course${s.courses.length === 1 ? '' : 's'} · ${s.courses.reduce((n, c) => n + (c.lessons || 0), 0)} lessons</div>
    </a>`).join('');

  const tickerItems = [...TICKER_SKILLS, ...TICKER_SKILLS].map((t) => `<span class="ticker-item">${esc(t)}<i></i></span>`).join('');

  return `
  <section class="hero">
    <canvas class="hero-canvas" aria-hidden="true"></canvas>
    <div class="hero-deco" aria-hidden="true">
      <span class="deco deco-ring"></span>
      <span class="deco deco-spark d1">${icon('spark', 18)}</span>
      <span class="deco deco-spark d2">${icon('spark', 13)}</span>
    </div>
    <div class="wrap hero-grid">
      <div class="hero-copy">
        <span class="hero-eyebrow">Free courses · unlimited practice · real homework help</span>
        <h1>Where &ldquo;I&rsquo;m stuck&rdquo; becomes <em class="hl">&ldquo;I get it.&rdquo;<svg class="hl-squiggle" viewBox="0 0 240 16" preserveAspectRatio="none" aria-hidden="true"><path d="M5 11 C 45 3, 85 15, 128 8 S 215 4, 235 10" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"/></svg></em></h1>
        <p class="lede">Lumina is a full learning platform in one tab — lessons you can actually finish, practice that grades itself and shows the work, and a help board where every answer explains its steps.</p>
        <div class="hero-actions">
          <a class="btn btn-amber btn-lg" href="/signup" data-nav>Start learning — free ${icon('arrowR', 17)}</a>
          <a class="btn btn-outline btn-lg" href="/subjects" data-nav>Browse the library</a>
        </div>
        <ul class="hero-points">
          <li>${icon('check', 14)} No card, no trial timer</li>
          <li>${icon('check', 14)} Every answer shows the work</li>
          <li>${icon('check', 14)} Guest progress carries into your account</li>
        </ul>
      </div>
      <div class="hero-demo">
        <div class="try-wrap">
          <span class="try-badge">${icon('zap', 12)} Live — answer it</span>
          <div class="try-card"><div id="tryHost">${skeletons(1, 210)}</div></div>
          <p class="try-note">That&rsquo;s a real practice question — same engine, same grading, straight from the app.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="ticker" aria-hidden="true"><div class="ticker-track">${tickerItems}</div></div>

  <section class="section reveal">
    <div class="wrap">
      <div class="section-head">
        <div class="eyebrow">How it works</div>
        <h2 class="display">Three habits, one place</h2>
      </div>
      <div class="how-grid">
        <div class="how-item">
          <span class="how-n">01</span>
          <h3>Learn the concept</h3>
          <p>Short, readable lessons with worked examples and &ldquo;watch out&rdquo; callouts — no hour-long videos, no walls of text.</p>
          <a href="/subjects" data-nav class="how-link">Open a lesson ${icon('arrowR', 14)}</a>
        </div>
        <div class="how-item">
          <span class="how-n">02</span>
          <h3>Practice to mastery</h3>
          <p>Unlimited generated questions, graded instantly with step-by-step solutions. Five in a row and the skill is yours.</p>
          <a href="/practice/two-step-equations" data-nav class="how-link">Try practice ${icon('arrowR', 14)}</a>
        </div>
        <div class="how-item">
          <span class="how-n">03</span>
          <h3>Ask when stuck</h3>
          <p>A homework-help board of real solved problems — plus Coach, a built-in study assistant that works through it with you.</p>
          <a href="/help" data-nav class="how-link">See solved problems ${icon('arrowR', 14)}</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-band reveal">
    <div class="wrap">
      <div class="section-head">
        <div class="eyebrow">The library</div>
        <h2 class="display">Pick a subject. Go deep.</h2>
        <p class="sub"><b class="count" data-n="${catalog.totals?.courses || 0}">${catalog.totals?.courses || 0}</b> courses · <b class="count" data-n="${catalog.totals?.lessons || 0}">${catalog.totals?.lessons || 0}</b> lessons · every one free</p>
      </div>
      <div class="grid grid-3">${subjectCards}</div>
    </div>
  </section>

  <section class="section reveal" id="solvedSection">
    <div class="wrap">
      <div class="section-head">
        <div class="eyebrow">Homework help</div>
        <h2 class="display">Every answer shows the work.</h2>
        <p class="sub">Real threads from the board — not vibes, not one-line answers.</p>
      </div>
      <div id="solvedHost">${skeletons(2, 150)}</div>
    </div>
  </section>

  <section class="section section-band reveal">
    <div class="wrap split">
      <div>
        <div class="eyebrow">Coach</div>
        <h2 class="display">A study assistant that shows its work</h2>
        <p class="sub" style="margin-bottom:22px">Coach solves equations step-by-step, explains any topic from the library, finds you practice, and builds a study plan from your actual progress. No API key, no waitlist — it&rsquo;s just in the app.</p>
        <a class="btn btn-primary" href="/coach" data-nav>${icon('chat', 16)} Talk to Coach</a>
      </div>
      <div class="coach-mock">
        <div class="chat-msg user"><span class="chat-avatar">${icon('user', 15)}</span><div class="chat-bubble">solve 3x + 5 = 20</div></div>
        <div class="chat-msg bot"><span class="chat-avatar">${icon('spark', 15)}</span><div class="chat-bubble">${md('Solving $3x + 5 = 20$:\n\n**1.** Move everything to one side: $(3x + 5) - (20) = 0$\n**2.** This reduces to $3x - 15 = 0$\n**3.** Isolate $x$: $x = \\frac{15}{3} = \\boxed{5}$')}</div></div>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:10px">
    <div class="wrap">
      <div class="cta-panel">
        <div class="cta-deco" aria-hidden="true"><i class="t"></i><i class="t"></i><i class="t"></i></div>
        <h2 class="display">Stuck is temporary. Let&rsquo;s fix that.</h2>
        <p>Free forever. Your first win is about ninety seconds away.</p>
        <div class="mt-3" style="position:relative">
          <a class="btn btn-amber btn-lg" href="/signup" data-nav>Create a free account</a>
          <a class="btn btn-outline btn-lg cta-ghost" href="/help" data-nav>Browse solved problems</a>
        </div>
      </div>
    </div>
  </section>`;
}

// ---------- landing wiring --------------------------------------------------

export function wireLanding(catalog) {
  const subjectName = new Map((catalog.subjects || []).map((s) => [s.id, s.name]));
  const tryHost = document.getElementById('tryHost');
  if (tryHost) loadTryQuestion(tryHost);
  loadSolved(subjectName);
  // reveal-on-scroll (with a hard fallback so sections never stay hidden)
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
  setTimeout(() => document.querySelectorAll('.reveal:not(.in)').forEach((el) => el.classList.add('in')), 1600);
  heroScene();
  countUp();
}

// Animated counts for the library totals.
function countUp() {
  const els = document.querySelectorAll('.count[data-n]');
  if (!els.length) return;
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  els.forEach((el) => {
    const n = Number(el.dataset.n) || 0;
    if (reduced || !n) { el.textContent = n; return; }
    const t0 = performance.now(), dur = 1100;
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(n * e);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

// The hero's signature piece: a wireframe trefoil (torus) knot — a real
// parametric curve — projected in 3D on a 2D canvas, drifting slowly and
// leaning toward the pointer. No library, theme-aware, motion-safe.
function heroScene() {
  const canvas = document.querySelector('.hero-canvas');
  const card = document.querySelector('.try-card');
  const hero = document.querySelector('.hero');
  if (!canvas || !card || !hero) return;
  const ctx = canvas.getContext('2d');
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  // Unit trefoil knot, precomputed once.
  const N = 320, pts = [];
  let max = 0;
  for (let i = 0; i < N; i++) {
    const t = (i / N) * Math.PI * 2, r = 2 + Math.cos(3 * t);
    const p = [r * Math.cos(2 * t), r * Math.sin(2 * t), Math.sin(3 * t) * 1.7];
    max = Math.max(max, Math.abs(p[0]), Math.abs(p[1]), Math.abs(p[2]));
    pts.push(p);
  }
  pts.forEach((p) => { p[0] /= max; p[1] /= max; p[2] /= max; });

  let W = 0, H = 0, dpr = 1, cx = 0, cy = 0, R = 0;
  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const r = hero.getBoundingClientRect();
    W = Math.round(r.width * dpr); H = Math.round(r.height * dpr);
    canvas.width = W; canvas.height = H;
    const cr = card.getBoundingClientRect();
    cx = (cr.left - r.left + cr.width / 2) * dpr;
    cy = (cr.top - r.top + cr.height / 2) * dpr;
    R = Math.max(cr.width, cr.height) * 0.62 * dpr;
    cy -= 14 * dpr;
  };
  resize();
  window.addEventListener('resize', resize);
  setTimeout(resize, 400); // once fonts/card settle

  // Pointer parallax targets (eased per frame).
  let tx = 0, ty = 0, rx = 0, ry = 0;
  const fine = window.matchMedia?.('(pointer: fine)').matches;
  if (fine && !reduced) {
    hero.addEventListener('mousemove', (e) => {
      const r = hero.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 0.7;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 0.55;
    });
    hero.addEventListener('mouseleave', () => { tx = 0; ty = 0; });

    // Gentle 3D tilt on the live card itself.
    const wrap = document.querySelector('.try-wrap');
    if (wrap) {
      hero.addEventListener('mousemove', (e) => {
        const r = wrap.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
        const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
        wrap.style.transform = `rotateY(${dx * 4.5}deg) rotateX(${-dy * 4.5}deg)`;
      });
      hero.addEventListener('mouseleave', () => { wrap.style.transform = ''; });
    }
  }

  const palette = () => document.documentElement.dataset.theme === 'dark'
    ? { line: '124,116,245', bead: '251,191,36', alpha: 0.4 }
    : { line: '79,70,229', bead: '217,119,6', alpha: 0.38 };

  const draw = (t) => {
    const { line, bead, alpha } = palette();
    ctx.clearRect(0, 0, W, H);
    rx += (tx - rx) * 0.05; ry += (ty - ry) * 0.05;
    const ay = t * 0.00010 + rx * 1.6;   // slow spin + pointer lean
    const ax = -0.42 + ry * 1.1;
    const ca = Math.cos(ay), sa = Math.sin(ay), cb = Math.cos(ax), sb = Math.sin(ax);
    const f = 3.2; // perspective focal length
    const proj = new Array(N);
    for (let i = 0; i < N; i++) {
      const [x0, y0, z0] = pts[i];
      const x1 = x0 * ca + z0 * sa, z1 = -x0 * sa + z0 * ca; // rotate Y
      const y1 = y0 * cb - z1 * sb, z2 = y0 * sb + z1 * cb;  // rotate X
      const s = f / (f + z2);
      proj[i] = [cx + x1 * s * R, cy + y1 * s * R * 0.92, z2, s];
    }
    // Curve, depth-shaded per segment.
    ctx.lineCap = 'round';
    for (let i = 0; i < N; i++) {
      const a = proj[i], b = proj[(i + 1) % N];
      const depth = (2.4 - (a[2] + b[2])) / 4.4; // nearer = brighter
      ctx.strokeStyle = `rgba(${line},${(alpha * depth).toFixed(3)})`;
      ctx.lineWidth = (1.1 + a[3] * 0.9) * dpr;
      ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke();
    }
    // Beads traveling the curve — like study progress along a path.
    const B = 9, shift = Math.floor((t * 0.02) % N);
    for (let i = 0; i < B; i++) {
      const p = proj[(shift + Math.floor(i * N / B)) % N];
      const rad = (2.1 + p[3] * 1.6) * dpr;
      ctx.beginPath();
      ctx.fillStyle = `rgba(${bead},${(0.28 + (p[3] - 1) * 0.5).toFixed(3)})`;
      ctx.arc(p[0], p[1], rad, 0, Math.PI * 2); ctx.fill();
    }
    // Faint node dots at fixed intervals.
    for (let i = 0; i < N; i += 20) {
      const p = proj[i];
      ctx.beginPath();
      ctx.fillStyle = `rgba(${line},${(alpha * 0.8 * (p[3] - 0.6)).toFixed(3)})`;
      ctx.arc(p[0], p[1], 1.6 * dpr, 0, Math.PI * 2); ctx.fill();
    }
  };

  if (reduced) { draw(0); return; }
  const loop = (t) => { draw(t); requestAnimationFrame(loop); };
  requestAnimationFrame(loop);
}

async function loadTryQuestion(host) {
  host.innerHTML = skeletons(1, 190);
  const skillId = HERO_SKILLS[Math.floor(Math.random() * HERO_SKILLS.length)];
  let d;
  try {
    d = await api('GET', `/api/skills/${skillId}/question`);
  } catch {
    host.innerHTML = `<div class="muted small">Couldn&rsquo;t load a question — <a href="/practice/two-step-equations" data-nav>open practice</a>.</div>`;
    return;
  }
  const q = d.question;
  host.innerHTML = `
    <div class="try-skill">${esc(d.skill.name)}<span class="try-from">from ${esc(d.lesson.title)}</span></div>
    <div class="try-prompt">${inlineMd(q.prompt)}</div>
    ${q.type === 'choice'
      ? `<div class="choice-list">${q.choices.map((c) => `<button class="choice" data-id="${c.id}"><span class="choice-letter">${c.id}</span><span>${inlineMd(c.text)}</span></button>`).join('')}</div>`
      : `<div class="numeric-row"><input class="input" id="tryNum" placeholder="Your answer…" autocomplete="off" ${q.type === 'numeric' ? 'inputmode="decimal"' : ''}><button class="btn btn-primary" id="tryCheck">Check</button></div>`}
    <div class="try-tools">
      <button class="btn btn-ghost btn-sm" id="tryHint">${icon('lightbulb', 14)} Hint</button>
      <button class="btn btn-ghost btn-sm" id="tryNew">${icon('arrowR', 14)} Different question</button>
    </div>
    <div id="tryHintBox"></div>
    <div id="tryFb"></div>`;

  let done = false;
  const submit = async (answer) => {
    if (done || answer == null || answer === '') return;
    done = true;
    let res;
    try {
      res = await api('POST', `/api/skills/${skillId}/answer`, { qid: d.qid, answer, lessonId: d.lesson.id });
    } catch (err) {
      if (err.status === 410) { loadTryQuestion(host); return; }
      done = false;
      toast(err.message || 'Could not check that answer');
      return;
    }
    host.querySelectorAll('.choice').forEach((b) => {
      b.disabled = true;
      const isAns = b.dataset.id === res.reveal?.answer;
      const picked = b.dataset.id === answer;
      if (isAns) b.classList.add('correct');
      else if (picked) b.classList.add('wrong');
      else b.classList.add('dim');
    });
    const num = host.querySelector('#tryNum');
    if (num) {
      num.disabled = true;
      num.style.borderColor = res.correct ? 'var(--green)' : 'var(--red)';
      const btn = host.querySelector('#tryCheck');
      if (btn) btn.disabled = true;
    }
    const steps = res.reveal?.steps || [];
    host.querySelector('#tryFb').innerHTML = `
      <div class="feedback ${res.correct ? 'ok' : 'no'}">
        ${icon(res.correct ? 'check' : 'x', 16)}
        <span>${res.correct
          ? `Correct${res.progress?.xpAwarded ? ` — +${res.progress.xpAwarded} XP` : ''}${res.progress?.levelUp ? ` — level up: <b>${res.progress.level}</b>` : ''}`
          : `Not quite — it was <b>${inlineMd(res.reveal?.answerText ?? '')}</b>`}</span>
      </div>
      ${steps.length ? `<div class="steps-box"><div class="steps-head">${icon('book', 14)} Worked solution</div>${steps.map((s, i) => `<div class="step"><span class="step-n">${i + 1}</span>${inlineMd(s)}</div>`).join('')}</div>` : ''}
      ${res.guest ? `<div class="try-cta">Nice — <a href="/signup" data-nav><b>create a free account</b></a> to keep that streak. Guest progress carries over.</div>` : ''}
      <div class="mt-2 flex gap-1">
        <button class="btn btn-outline btn-sm" id="tryAgain">Another question ${icon('arrowR', 13)}</button>
        <a class="btn btn-ghost btn-sm" href="/practice/${skillId}" data-nav>Practice this skill</a>
      </div>`;
    host.querySelector('#tryAgain').onclick = () => loadTryQuestion(host);
    if (res.correct && res.progress?.xpAwarded) {
      toast(`+${res.progress.xpAwarded} XP`, 'xp');
      window.dispatchEvent(new Event('lumina:nav-refresh'));
    }
    if (res.guest) recordGuestAttempt(skillId, res.correct);
  };

  host.querySelectorAll('.choice').forEach((b) => { b.onclick = () => submit(b.dataset.id); });
  const num = host.querySelector('#tryNum');
  if (num) {
    num.onkeydown = (e) => { if (e.key === 'Enter') submit(num.value); };
    host.querySelector('#tryCheck').onclick = () => submit(num.value);
  }
  host.querySelector('#tryHint').onclick = () => {
    if (q.hint) host.querySelector('#tryHintBox').innerHTML = `<div class="hint-box">${icon('lightbulb', 14)} ${inlineMd(q.hint)}</div>`;
  };
  host.querySelector('#tryNew').onclick = () => loadTryQuestion(host);
}

async function loadSolved(subjectName) {
  const host = document.getElementById('solvedHost');
  if (!host) return;
  try {
    const list = await api('GET', '/api/questions?sort=top');
    const solved = (list.questions || []).filter((q) => q.answer_count > 0).slice(0, 3);
    if (!solved.length) { host.innerHTML = '<div class="card card-pad muted">Solved problems will appear here.</div>'; return; }
    const detail = await api('GET', `/api/questions/${solved[0].id}`);
    const ans = (detail.answers || []).find((a) => a.accepted) || detail.answers?.[0];
    host.innerHTML = `
      <div class="solved-grid">
        <a class="card card-hover solved-main card-link" href="/help/${solved[0].id}" data-nav>
          <div class="qa-meta">
            <span class="badge badge-accepted">${icon('check', 12)} Accepted answer</span>
            <span>${esc(subjectName.get(solved[0].subject_id) || '')}</span>
            <span>${icon('up', 12)} ${solved[0].votes} votes</span>
          </div>
          <h3>${esc(solved[0].title)}</h3>
          ${ans ? `<div class="solved-answer">
            <div class="solved-by">${avatarHtml(ans.author_name, ans.author_name?.length || 0, 22)} <b>${esc(ans.author_name)}</b>${ans.is_expert ? ` <span class="badge badge-expert">${icon('spark', 11)} Expert</span>` : ''}</div>
            <div class="solved-body">${md(ans.body)}</div>
          </div>` : ''}
          <span class="solved-link">Read the full solution ${icon('arrowR', 14)}</span>
        </a>
        <div class="solved-side">
          ${solved.slice(1).map((q) => `
            <a class="card card-hover card-pad card-link solved-row" href="/help/${q.id}" data-nav>
              <div class="qa-meta"><span>${esc(subjectName.get(q.subject_id) || '')}</span><span>${icon('up', 11)} ${q.votes}</span><span>${icon('chat', 11)} ${q.answer_count}</span></div>
              <div class="qa-title">${esc(q.title)}</div>
            </a>`).join('')}
          <a class="card card-hover card-pad card-link solved-more" href="/help?sort=top" data-nav>
            Browse every solved problem ${icon('arrowR', 15)}
          </a>
        </div>
      </div>`;
  } catch {
    document.getElementById('solvedSection')?.remove();
  }
}

export function pageAbout() {
  return `
  <div class="wrap-narrow page">
    <div class="page-head"><div class="eyebrow">About</div><h1>Learning that treats you like a person</h1></div>
    <div class="prose">
      <p>Lumina started as a simple idea: students deserve tools that make them <em>smarter</em>, not just tools that hand over answers.</p>
      <p>So we combined two worlds. From the best learning platforms, we took structured courses, bite-sized lessons, and mastery-based practice. From homework-help sites, we took the thing students actually need at 11pm: a clear, worked, step-by-step solution to the exact problem they're stuck on.</p>
      <p>Every lesson on Lumina is written to teach — short on lecture, long on worked examples and "watch out for this" moments. Every practice skill gives you unlimited generated questions with instant, explained feedback. And our homework-help board pairs real questions with expert-verified step-by-step answers.</p>
      <h2>Our promise</h2>
      <p>Lumina is free for learners. We're building the study tool we wish existed: honest about what it does, rigorous about being correct, and designed to make "I don't get it" a temporary state.</p>
      <p class="mt-3"><a class="btn btn-primary" href="/signup" data-nav>Join free</a> <a class="btn btn-outline" href="/subjects" data-nav style="margin-left:8px">Browse the library</a></p>
    </div>
  </div>`;
}

export function pageFaq() {
  const faqs = [
    ['Is Lumina really free?', 'Yes. Courses, practice, and homework help are free for learners. We may add optional premium features later, but the core library stays free.'],
    ['How does mastery work?', 'Each skill tracks your correct answers. Get 1 in a row for Familiar, 3 for Proficient, 5 for Mastered. Wrong answers reset your streak — but never your total progress.'],
    ['Can I use Lumina without an account?', 'Yes — browse and practice as a guest and progress is kept on your device. Create an account to sync progress across devices and post on the help board.'],
    ['How is this different from Chegg?', 'Homework help is one piece — not the whole product. Lumina teaches the underlying skill too: every solved problem links back to lessons and practice so the answer sticks.'],
    ['What is Coach?', 'Coach is a built-in study assistant that solves equations step-by-step, explains topics from our lesson library, finds you practice, and builds a study plan from your progress.'],
    ['Who writes the content?', 'Lessons and expert answers are authored and reviewed for accuracy. Community answers on the help board are marked separately from expert-verified ones.']
  ];
  return `
  <div class="wrap-narrow page">
    <div class="page-head"><div class="eyebrow">FAQ</div><h1>Questions? Good — that's the whole point.</h1></div>
    ${faqs.map(([q, a]) => `<div class="card card-pad mb-2"><h3 style="font-size:1.02rem;margin-bottom:8px">${esc(q)}</h3><p class="muted" style="margin:0">${esc(a)}</p></div>`).join('')}
  </div>`;
}

export function pageTerms() {
  return `
  <div class="wrap-narrow page">
    <div class="page-head"><div class="eyebrow">Legal</div><h1>Terms of Service</h1><p class="sub">Last updated ${new Date().toLocaleDateString()}</p></div>
    <div class="prose">
      <h2>1. What Lumina is</h2>
      <p>Lumina is an educational platform offering lessons, practice exercises, a homework-help community, and a study assistant. Content is provided for learning purposes.</p>
      <h2>2. Your account</h2>
      <p>You are responsible for your account credentials and activity. You must be at least 13 years old (or have parental consent) to create an account.</p>
      <h2>3. Acceptable use</h2>
      <p>Do not post unlawful, harmful, or harassing content; do not attempt to cheat academic-integrity policies of your institution; do not scrape or overload the service. Homework help is meant to teach methods — misuse for plagiarism is your responsibility.</p>
      <h2>4. Community content</h2>
      <p>You keep rights to what you post; by posting you grant Lumina a license to display and distribute it on the platform. We may remove content that violates these terms.</p>
      <h2>5. Accuracy</h2>
      <p>We work hard to be correct, but lessons and answers are provided "as is" — always verify critical work. Community answers are not guaranteed.</p>
      <h2>6. Liability</h2>
      <p>To the maximum extent permitted by law, Lumina is not liable for indirect or consequential damages arising from use of the service.</p>
    </div>
  </div>`;
}

export function pagePrivacy() {
  return `
  <div class="wrap-narrow page">
    <div class="page-head"><div class="eyebrow">Legal</div><h1>Privacy Policy</h1><p class="sub">Last updated ${new Date().toLocaleDateString()}</p></div>
    <div class="prose">
      <h2>What we collect</h2>
      <p>Account details (name, email, password — stored only as a hash), your learning activity (attempts, mastery, XP, streaks), and community content you post (questions, answers). Guest progress stays in your browser's local storage until you create an account.</p>
      <h2>How we use it</h2>
      <p>To run the product: track progress, compute streaks, power the dashboard, personalize Coach's study plan, and display your posts on the help board. We do not sell personal data and do not run third-party ad networks.</p>
      <h2>Cookies</h2>
      <p>We use a session cookie for sign-in and local storage for preferences (theme) and guest progress. No tracking cookies.</p>
      <h2>Retention & deletion</h2>
      <p>Your data lives in your account until you delete it. Contact support to export or delete your account data.</p>
      <h2>Security</h2>
      <p>Passwords are bcrypt-hashed; sessions are server-side. No system is perfectly secure — report issues to us and we'll respond promptly.</p>
    </div>
  </div>`;
}

export function pageNotFound() {
  return `
  <div class="wrap page">
    <div class="empty-state" style="padding-top:110px">
      <div class="empty-icon">${icon('compass', 52)}</div>
      <h2>This page doesn't exist</h2>
      <p>The link may be old, or the page moved. Let's get you back to learning.</p>
      <div class="mt-2"><a class="btn btn-primary" href="/" data-nav>Go home</a> <a class="btn btn-outline" href="/subjects" data-nav>Browse subjects</a></div>
    </div>
  </div>`;
}
