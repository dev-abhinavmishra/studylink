import { icon } from './icons.js';
import { esc, toast, go, masteryDot, masteryTag, progressRing, emptyState, crumbs, skeletons } from './ui.js';
import { api, state, recordGuestAttempt, guestSkillLevel } from './api.js';
import { renderBlocks, inlineMd } from './markdown.js';

// ---------- catalog -------------------------------------------------------

export function pageSubjects(catalog) {
  return `
  <div class="wrap page">
    <div class="page-head">
      <div class="eyebrow">The library</div>
      <h1>What do you want to learn?</h1>
      <p class="sub">Every course is free, self-paced, and built for mastery — short lessons, worked examples, and practice that adapts to you.</p>
    </div>
    ${catalog.subjects.map((s) => `
      <div class="mb-4">
        <div class="flex aic gap-2 mb-2">
          <span class="subj-icon" style="width:36px;height:36px;border-radius:10px;display:grid;place-items:center;background:${s.color}1a;color:${s.color}">${icon(s.icon, 19)}</span>
          <h2 style="margin:0">${esc(s.name)}</h2>
          <span class="muted small" style="margin-left:6px">${esc(s.tagline)}</span>
        </div>
        <div class="grid grid-3">
          ${s.courses.map((c) => `
            <a class="card card-hover card-pad card-link" href="/course/${c.id}" data-nav>
              <div class="flex aic jcsb mb-1">
                <span class="badge badge-muted">${esc(c.subtitle || '')}</span>
                ${c.masteredSkills ? `<span class="badge badge-accepted">${c.masteredSkills}/${c.totalSkills} mastered</span>` : ''}
              </div>
              <h3 class="card-title" style="font-size:1.08rem">${esc(c.title)}</h3>
              <p class="muted small" style="margin-bottom:12px">${esc(c.summary)}</p>
              <div class="flex aic gap-2 muted small" style="margin-top:auto">
                ${icon('book', 14)} ${c.lessons} lessons · ${icon('target', 14)} ${c.totalSkills || c.skills?.length || 0} skills
              </div>
              ${c.touchedSkills ? `<div class="progress-track mt-1"><div class="progress-fill" style="width:${Math.round(100 * (c.masteredSkills || 0) / Math.max(1, c.totalSkills))}%"></div></div>` : ''}
            </a>`).join('')}
        </div>
      </div>`).join('')}
  </div>`;
}

export function pageSubject(subject) {
  return `
  <div class="wrap page">
    <div class="page-head">
      ${crumbs([{ label: 'Subjects', href: '/subjects' }, { label: subject.name }])}
      <div class="flex aic gap-2">
        <span style="width:52px;height:52px;border-radius:14px;display:grid;place-items:center;background:${subject.color}1a;color:${subject.color}">${icon(subject.icon, 26)}</span>
        <div><h1 style="margin:0">${esc(subject.name)}</h1><div class="muted">${esc(subject.tagline)}</div></div>
      </div>
      <p class="sub mt-2">${esc(subject.description || '')}</p>
    </div>
    <div class="grid grid-2">
      ${subject.courses.map((c) => `
        <a class="card card-hover card-pad card-link" href="/course/${c.id}" data-nav>
          <div class="badge badge-muted mb-1">${esc(c.subtitle || '')}</div>
          <h3 class="card-title">${esc(c.title)}</h3>
          <p class="muted small">${esc(c.summary)}</p>
          <div class="muted small">${icon('book', 13)} ${c.lessons} lessons · ${icon('target', 13)} ${c.totalSkills || c.skills?.length || 0} skills${c.masteredSkills ? ` · ${c.masteredSkills} mastered` : ''}</div>
        </a>`).join('')}
    </div>
  </div>`;
}

export function pageCourse(subject, course) {
  return `
  <div class="wrap page">
    <div class="page-head">
      ${crumbs([{ label: 'Subjects', href: '/subjects' }, { label: subject.name, href: `/subjects/${subject.id}` }, { label: course.title }])}
      <h1>${esc(course.title)}</h1>
      <p class="sub">${esc(course.summary)}</p>
      <div class="flex gap-2 aic" style="margin-top:10px">
        <span class="badge" style="background:${subject.color}1a;color:${subject.color}">${esc(subject.name)}</span>
        <span class="badge badge-muted">${esc(course.subtitle || '')}</span>
        <span class="badge badge-muted">${course.lessons} lessons</span>
      </div>
    </div>
    ${course.units.map((u, ui) => `
      <div class="unit-block">
        <div class="unit-head">
          <span class="badge badge-muted">Unit ${ui + 1}</span>
          <h3>${esc(u.title)}</h3>
          <span class="unit-count">${u.lessons.length} lessons</span>
        </div>
        <div class="grid">
          ${u.lessons.map((l) => `
            <a class="lesson-row" href="/learn/${course.id}/${l.id}" data-nav>
              ${masteryDot(l.mastery)}
              <div>
                <div class="lr-title">${esc(l.title)}</div>
                <div class="lr-sub">${esc(l.summary)}</div>
              </div>
              <div class="lr-right">
                ${l.mastery ? masteryTag(l.mastery) : ''}
                <span class="muted small">${icon('clock', 13)} ${l.minutes}m</span>
                ${icon('arrowR', 16)}
              </div>
            </a>`).join('')}
        </div>
      </div>`).join('')}
  </div>`;
}

export function pageLesson(data) {
  const { lesson, course, unit, subject, prev, next } = data;
  return `
  <div class="wrap-narrow page">
    <div class="page-head" style="padding-bottom:12px">
      ${crumbs([{ label: subject.name, href: `/subjects/${subject.id}` }, { label: course.title, href: `/course/${course.id}` }, { label: lesson.title }])}
      <div class="flex aic jcsb">
        <h1 style="margin-bottom:4px">${esc(lesson.title)}</h1>
      </div>
      <div class="muted small">${esc(unit.title)} · ${icon('clock', 12)} ${lesson.minutes || 6} min read${lesson.mastery ? ` · ` : ''}</div>
    </div>
    <article class="card card-pad prose fade-in" style="padding:34px">
      ${renderBlocks(lesson.blocks)}
    </article>
    ${lesson.skill ? `
      <div class="card card-pad mt-3" style="border-left:4px solid var(--amber);display:flex;align-items:center;gap:18px;flex-wrap:wrap">
        <span style="width:44px;height:44px;border-radius:12px;display:grid;place-items:center;background:var(--amber-soft);color:var(--amber-deep)">${icon('target', 22)}</span>
        <div style="flex:1;min-width:200px">
          <h3 style="margin-bottom:2px">Practice: ${esc(lesson.skill.name)}</h3>
          <div class="muted small">Unlimited questions with step-by-step solutions. ${lesson.skill.mastery ? `Current level: <b>${lesson.skill.mastery}</b>` : 'Get 5 in a row to master it.'}</div>
        </div>
        <a class="btn btn-amber" href="/practice/${lesson.skill.id}" data-nav>Start practicing ${icon('arrowR', 15)}</a>
      </div>` : ''}
    <div class="flex jcsb mt-3">
      ${prev ? `<a class="btn btn-outline" href="/learn/${course.id}/${prev.id}" data-nav>${icon('arrowL', 15)} ${esc(prev.title)}</a>` : '<span></span>'}
      ${next ? `<a class="btn btn-outline" href="/learn/${course.id}/${next.id}" data-nav>${esc(next.title)} ${icon('arrowR', 15)}</a>` : `<a class="btn btn-outline" href="/course/${course.id}" data-nav>Back to course ${icon('check', 15)}</a>`}
    </div>
  </div>`;
}

export async function wireLesson(lessonId) {
  try { await api('POST', `/api/lessons/${lessonId}/visit`); } catch { /* guest */ }
}

// ---------- practice engine -------------------------------------------------

let practice = { qid: null, answered: false, streak: 0, done: 0, correct: 0 };

export function pagePractice(skillName) {
  practice = { qid: null, answered: false, streak: 0, done: 0, correct: 0 };
  return `
  <div class="wrap page">
    <div class="page-head" style="padding-bottom:14px">
      <div class="eyebrow">Practice</div>
      <h1 style="font-size:1.6rem" id="skillTitle">${esc(skillName)}</h1>
      <div class="muted small" id="practiceSub">Get 5 correct in a row to reach <b>Mastered</b>.</div>
    </div>
    <div class="practice-shell">
      <div id="qHost">${skeletons(1, 260)}</div>
      <div>
        <div class="card side-card">
          <h4>Session</h4>
          <div class="flex jcsb small"><span class="muted">Answered</span><b id="stDone">0</b></div>
          <div class="flex jcsb small mt-1"><span class="muted">Correct</span><b id="stCorrect">0</b></div>
          <div class="divider" style="margin:14px 0"></div>
          <h4>Streak to mastery</h4>
          <div class="streak-bar" id="streakBar">${'<span class="streak-seg"></span>'.repeat(5)}</div>
          <div class="small muted mt-1" id="streakLabel">0 / 5 correct in a row</div>
          <div id="levelBadge" class="mt-2"></div>
        </div>
        <div class="card side-card">
          <h4>Shortcuts</h4>
          <div class="small muted">Enter — submit / next<br>H — hint<br>1-4 — pick an answer</div>
        </div>
      </div>
    </div>
  </div>`;
}

export async function loadQuestion(skillId) {
  const host = document.getElementById('qHost');
  if (!host) return;
  host.innerHTML = skeletons(1, 240);
  const d = await api('GET', `/api/skills/${skillId}/question`);
  practice.qid = d.qid;
  practice.answered = false;
  const q = d.question;
  const st = document.getElementById('skillTitle');
  if (st && d.skill) st.textContent = d.skill.name;
  const ps = document.getElementById('practiceSub');
  if (ps && d.lesson) ps.innerHTML = `From the lesson <a href="/learn/${d.lesson.courseId}/${d.lesson.id}" data-nav>${esc(d.lesson.title)}</a> · 5 in a row = <b>Mastered</b>`;
  host.innerHTML = `
    <div class="card q-card fade-in">
      <div class="muted small mb-1">${esc(d.lesson.title)}</div>
      <div class="q-prompt">${inlineMd(q.prompt)}</div>
      ${q.type === 'choice' ? `
        <div class="choice-list" id="choiceList">
          ${q.choices.map((c) => `<button class="choice" data-id="${c.id}"><span class="choice-letter">${c.id}</span><span>${inlineMd(c.text)}</span></button>`).join('')}
        </div>` : `
        <div class="numeric-row">
          <input class="input" id="numInput" placeholder="Your answer…" autocomplete="off" ${q.type === 'numeric' ? 'inputmode="decimal"' : ''}>
          <button class="btn btn-primary" id="submitNum">Check</button>
        </div>`}
      <div id="qFeedback"></div>
      <div class="flex gap-2 mt-3">
        <button class="btn btn-ghost btn-sm" id="hintBtn">${icon('lightbulb', 14)} Hint</button>
        <button class="btn btn-outline btn-sm" id="nextBtn" style="margin-left:auto">Skip ${icon('arrowR', 13)}</button>
      </div>
      <div id="hintHost"></div>
    </div>`;

  const submit = (answer) => submitAnswer(skillId, d, answer);
  if (q.type === 'choice') {
    host.querySelectorAll('.choice').forEach((btn) => {
      btn.onclick = () => { if (!practice.answered) submit(btn.dataset.id); };
    });
  } else {
    const input = host.querySelector('#numInput');
    input.focus();
    input.onkeydown = (e) => { if (e.key === 'Enter' && !practice.answered) submit(input.value); };
    host.querySelector('#submitNum').onclick = () => { if (!practice.answered) submit(input.value); };
  }
  host.querySelector('#hintBtn').onclick = () => {
    const hh = host.querySelector('#hintHost');
    if (q.hint) hh.innerHTML = `<div class="hint-box">${icon('lightbulb', 14)} ${inlineMd(q.hint)}</div>`;
  };
  host.querySelector('#nextBtn').onclick = () => loadQuestion(skillId);
  document.onkeydown = (e) => {
    if (e.target.tagName === 'INPUT' && e.key !== 'Enter') return;
    if (practice.answered && e.key === 'Enter') { e.preventDefault(); host.querySelector('#nextAfter')?.click(); }
    if (!practice.answered && q.type === 'choice' && ['1', '2', '3', '4'].includes(e.key)) {
      const idx = +e.key - 1;
      const btn = host.querySelectorAll('.choice')[idx];
      if (btn) btn.click();
    }
    if (e.key.toLowerCase() === 'h' && e.target.tagName !== 'INPUT') host.querySelector('#hintBtn')?.click();
  };
}

async function submitAnswer(skillId, d, answer) {
  if (answer == null || answer === '') return;
  practice.answered = true;
  const host = document.getElementById('qHost');
  let res;
  try {
    res = await api('POST', `/api/skills/${skillId}/answer`, { qid: d.qid, answer, lessonId: d.lesson.id });
  } catch (err) {
    if (err.status === 410) { loadQuestion(skillId); return; } // expired — fetch a fresh question
    practice.answered = false;
    toast(err.message || 'Could not check that answer', '');
    return;
  }
  const q = d.question;
  practice.done += 1;
  if (res.correct) practice.correct += 1;
  practice.streak = res.correct ? practice.streak + 1 : 0;

  // paint choices
  if (q.type === 'choice') {
    host.querySelectorAll('.choice').forEach((btn) => {
      btn.disabled = true;
      const isAnswer = btn.dataset.id === res.reveal?.answer;
      const picked = btn.dataset.id === answer;
      if (isAnswer) btn.classList.add('correct');
      else if (picked) btn.classList.add('wrong');
      else btn.classList.add('dim');
    });
  } else {
    const inp = host.querySelector('#numInput');
    inp.disabled = true;
    host.querySelector('#submitNum').disabled = true;
    inp.style.borderColor = res.correct ? 'var(--green)' : 'var(--red)';
  }

  const fb = host.querySelector('#qFeedback');
  const steps = res.reveal?.steps || [];
  fb.innerHTML = `
    <div class="feedback ${res.correct ? 'ok' : 'no'}">
      ${icon(res.correct ? 'check' : 'x', 17)}
      <span>${res.correct
        ? `Correct! ${res.progress?.xpAwarded ? `+${res.progress.xpAwarded} XP` : ''}${res.progress?.levelUp ? ` — level up: <b>${res.progress.level}</b>!` : ''}`
        : `Not quite — the answer was <b>&nbsp;${esc(res.reveal?.answerText ?? res.reveal?.answer ?? '')}</b>`}</span>
    </div>
    ${steps.length ? `
      <div class="steps-box">
        <div class="steps-head">${icon('book', 14)} Worked solution</div>
        ${steps.map((s, i) => `<div class="step"><span class="step-n">${i + 1}</span>${inlineMd(s)}</div>`).join('')}
      </div>` : ''}`;
  const nextBtn = host.querySelector('#nextBtn');
  nextBtn.outerHTML = `<button class="btn btn-primary" id="nextAfter" style="margin-left:auto">${res.progress?.level === 'mastered' ? 'Mastered! Keep going' : 'Next question'} ${icon('arrowR', 15)}</button>`;
  host.querySelector('#nextAfter').onclick = () => loadQuestion(skillId);

  if (res.correct && res.progress?.xpAwarded) {
    toast(`+${res.progress.xpAwarded} XP`, 'xp');
    window.dispatchEvent(new Event('lumina:nav-refresh'));
  }
  if (res.guest) recordGuestAttempt(skillId, res.correct);

  // sidebar
  document.getElementById('stDone').textContent = practice.done;
  document.getElementById('stCorrect').textContent = practice.correct;
  const streak = res.progress ? res.progress.streak : (state.guestProgress[skillId]?.streak || 0);
  document.querySelectorAll('#streakBar .streak-seg').forEach((seg, i) => {
    seg.classList.toggle('lit', i < Math.min(5, streak));
  });
  document.getElementById('streakLabel').textContent = `${Math.min(5, streak)} / 5 correct in a row`;
  const level = res.progress?.level || guestSkillLevel(skillId);
  if (level) {
    document.getElementById('levelBadge').innerHTML = `<div class="flex aic gap-1">${masteryDot(level)} ${masteryTag(level)}</div>`;
  }
}

// ---------- dashboard --------------------------------------------------------

export function pageDashboard(d) {
  const first = (d.user.name || '').split(' ')[0];
  const streak = d.streakDays;
  const xpPct = Math.min(1, d.xp / (d.xp + (d.xpToNext || 1)));
  const weekly = d.weekly || [];
  const maxXp = Math.max(20, ...weekly.map((w) => w.xp));
  return `
  <div class="wrap page">
    <div class="dash-hero mb-4">
      <div style="flex:1;min-width:240px;position:relative;z-index:1">
        <h1>Welcome back, ${esc(first)}</h1>
        <p class="sub">${streak > 0 ? `${streak}-day streak — keep it alive.` : 'Answer a practice question to start a streak.'} Level ${d.level} · ${d.xpToNext} XP to next.</p>
        <div class="stat-strip">
          <div class="stat-pill"><span class="num">${d.xp}</span><span class="lbl">XP</span></div>
          <div class="stat-pill"><span class="num">${d.level}</span><span class="lbl">Level</span></div>
          <div class="stat-pill"><span class="num">${icon('flame', 20)} ${streak}</span><span class="lbl">Streak</span></div>
          <div class="stat-pill"><span class="num">${d.bySubject.reduce((n, s) => n + s.mastered, 0)}</span><span class="lbl">Mastered</span></div>
        </div>
      </div>
      <div style="color:#fff;position:relative;z-index:1">${progressRing(xpPct, 96, 9)}<div class="tc small" style="margin-top:4px">to level ${d.level + 1}</div></div>
    </div>

    <div class="grid" style="grid-template-columns:1.4fr .9fr;gap:28px;align-items:start">
      <div>
        <h2>Continue learning</h2>
        ${d.continueLearning.length ? `<div class="grid">${d.continueLearning.map((c) => `
          <a class="lesson-row" href="/learn/${c.courseId}/${c.lessonId}" data-nav>
            <span class="m-dot" style="background:${c.subjectColor}"></span>
            <div><div class="lr-title">${esc(c.title)}</div><div class="lr-sub">${esc(c.courseTitle)}${c.completed ? ' · completed' : ''}</div></div>
            <div class="lr-right">${icon('arrowR', 16)}</div>
          </a>`).join('')}</div>`
        : `<div class="card card-pad muted">No lessons yet — pick a course to get started. <a href="/subjects" data-nav>Browse subjects</a></div>`}

        <h2 class="mt-4">Mastery by subject</h2>
        <div class="mastery-grid">
          ${d.bySubject.map((s) => `
            <a class="card mastery-cell card-hover card-link" href="/subjects/${s.id}" data-nav>
              <div class="top"><span style="width:30px;height:30px;border-radius:9px;display:grid;place-items:center;background:${s.color}1a;color:${s.color}">${icon(s.icon, 16)}</span><b class="small">${esc(s.name)}</b><span class="pct">${s.mastered}/${s.total}</span></div>
              <div class="progress-track"><div class="progress-fill" style="width:${s.total ? Math.round(100 * s.mastered / s.total) : 0}%;background:${s.color}"></div></div>
            </a>`).join('')}
        </div>
      </div>
      <div>
        <h2>This fortnight</h2>
        <div class="card card-pad mb-3">
          <div class="flex" style="align-items:flex-end;gap:6px;height:110px">
            ${weekly.map((w) => `
              <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;height:100%;justify-content:flex-end">
                <div title="${w.xp} XP on ${w.day}" style="width:100%;max-width:26px;border-radius:6px 6px 3px 3px;background:${w.xp ? 'linear-gradient(180deg,#fbbf24,#f59e0b)' : 'var(--bg-soft)'};height:${Math.max(6, Math.round(100 * w.xp / maxXp))}%"></div>
                <span class="muted" style="font-size:.62rem">${w.day.slice(5)}</span>
              </div>`).join('')}
          </div>
          <div class="muted small mt-2" style="text-align:center">Daily XP, last ${weekly.length} days</div>
        </div>
        <h2>Recent activity</h2>
        <div class="card">
          ${d.recentAttempts.length ? d.recentAttempts.map((a) => `
            <div class="flex aic gap-2" style="padding:11px 18px;border-bottom:1px solid var(--border)">
              <span class="m-dot" data-level="${a.correct ? 'mastered' : 'attempted'}"></span>
              <div style="flex:1"><div class="small" style="font-weight:600">${esc(a.skillName)}</div><div class="muted" style="font-size:.76rem">${time(a.created_at)}</div></div>
              <span class="small" style="color:${a.correct ? 'var(--green)' : 'var(--red)'};font-weight:700">${a.correct ? `+${a.xp} XP` : 'miss'}</span>
            </div>`).join('')
            : '<div class="card-pad muted small">Nothing yet — your practice attempts will show here.</div>'}
        </div>
      </div>
    </div>
  </div>`;
}

function time(iso) {
  const norm = String(iso).replace(' ', 'T');
  return new Date(norm + (/[zZ]|\+\d{2}:?\d{2}$/.test(norm) ? '' : 'Z'))
    .toLocaleString(undefined, { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
}
