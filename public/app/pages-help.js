import { icon } from './icons.js';
import { esc, toast, go, timeAgo, avatarHtml, emptyState, skeletons } from './ui.js';
import { api, state } from './api.js';
import { inlineMd, md } from './markdown.js';

// ---------- board ------------------------------------------------------------

export function pageHelp(subjects, params) {
  const cur = params.subject || '';
  const sort = params.sort || 'new';
  return `
  <div class="wrap page">
    <div class="page-head">
      <div class="eyebrow">Homework help</div>
      <div class="flex jcsb aic" style="flex-wrap:wrap;gap:14px">
        <h1 style="margin:0">Solved problems, real explanations</h1>
        <a class="btn btn-amber" href="/help/ask" data-nav>${icon('plus', 15)} Ask a question</a>
      </div>
      <p class="sub">Every expert answer is a worked solution — steps, not just answers. Ask anything you're stuck on.</p>
    </div>
    <div class="flex gap-1 mb-2" style="flex-wrap:wrap">
      <a class="chip ${!cur ? 'on' : ''}" href="/help" data-nav>All</a>
      ${subjects.map((s) => `<a class="chip ${cur === s.id ? 'on' : ''}" href="/help?subject=${s.id}" data-nav>${icon(s.icon, 13)} ${esc(s.name)}</a>`).join('')}
    </div>
    <div class="flex gap-1 mb-3">
      ${[['new', 'Newest'], ['top', 'Top voted'], ['unanswered', 'Needs an answer']].map(([k, l]) =>
        `<a class="chip ${sort === k ? 'on' : ''}" href="/help?${cur ? `subject=${cur}&` : ''}sort=${k}" data-nav>${l}</a>`).join('')}
    </div>
    <div class="card" id="qaList">${skeletons(4, 96)}</div>
    <div id="qaPager" class="flex jcsb mt-2"></div>
  </div>`;
}

export async function wireHelp(params) {
  const list = document.getElementById('qaList');
  const load = async (page) => {
    list.innerHTML = skeletons(4, 96);
    const qs = new URLSearchParams();
    if (params.subject) qs.set('subject', params.subject);
    if (params.sort) qs.set('sort', params.sort);
    qs.set('page', page);
    const d = await api('GET', `/api/questions?${qs}`);
    if (!d.questions.length) {
      list.innerHTML = emptyState('chat', 'No questions yet', 'Be the first to ask — answers come with worked steps.',
        `<a class="btn btn-amber mt-2" href="/help/ask" data-nav>Ask a question</a>`);
      document.getElementById('qaPager').innerHTML = '';
      return;
    }
    list.innerHTML = d.questions.map((q) => `
      <a class="qa-row card-link" href="/help/${q.id}" data-nav style="color:inherit">
        <div class="vote-col">${icon('up', 15)}<span class="vote-count">${q.votes}</span></div>
        <div style="flex:1;min-width:0">
          <div class="qa-meta">
            <span class="chip static" style="padding:2px 10px;font-size:.72rem">${esc(q.subject_id)}</span>
            ${q.accepted_answer_id ? '<span class="badge badge-accepted">✓ Solved</span>' : '<span class="badge badge-open">Open</span>'}
            <span>${icon('chat', 12)} ${q.answer_count}</span>
            <span>${icon('eye', 12)} ${q.views}</span>
            <span>${esc(q.author_name)} · ${timeAgo(q.created_at)}</span>
          </div>
          <div class="qa-title">${esc(q.title)}</div>
          <div class="qa-excerpt">${esc(q.body.slice(0, 160))}</div>
        </div>
      </a>`).join('');
    const pager = document.getElementById('qaPager');
    pager.innerHTML = `
      ${page > 1 ? `<button class="btn btn-outline btn-sm" id="pgPrev">${icon('arrowL', 14)} Newer</button>` : '<span></span>'}
      <span class="muted small">Page ${d.page} of ${d.pages}</span>
      ${page < d.pages ? `<button class="btn btn-outline btn-sm" id="pgNext">Older ${icon('arrowR', 14)}</button>` : '<span></span>'}`;
    const pv = document.getElementById('pgPrev'); if (pv) pv.onclick = () => load(page - 1);
    const nx = document.getElementById('pgNext'); if (nx) nx.onclick = () => load(page + 1);
  };
  await load(params.page || 1);
}

// ---------- question thread ----------------------------------------------------

export function pageThread() {
  return `<div class="wrap-narrow page"><div id="threadHost">${skeletons(2, 160)}</div></div>`;
}

export async function wireThread(id) {
  const host = document.getElementById('threadHost');
  let data;
  try {
    data = await api('GET', `/api/questions/${id}`);
  } catch (e) {
    host.innerHTML = emptyState('compass', 'Question not found', 'It may have been removed.');
    return;
  }
  const { question: q, answers, myVotes, mine } = data;
  const isAuthed = !!state.me?.user;

  const voteHtml = (type, id, votes) => `
    <div class="vote-col">
      <button class="vote-btn ${myVotes[`${type}:${id}`] === 1 ? 'on' : ''}" data-vote="${type}:${id}:1">${icon('up', 18)}</button>
      <span class="vote-count" id="vc-${type}-${id}">${votes}</span>
      <button class="vote-btn ${myVotes[`${type}:${id}`] === -1 ? 'on' : ''}" data-vote="${type}:${id}:-1">${icon('down', 18)}</button>
    </div>`;

  host.innerHTML = `
    <div class="page-head" style="padding-bottom:8px">
      <div class="crumbs"><a href="/help" data-nav>Homework help</a><span>/</span><span>${esc(q.subject_id)}</span></div>
    </div>
    <div class="card thread-body mb-3">
      <div class="flex" style="gap:18px">
        ${voteHtml('question', q.id, q.votes)}
        <div style="flex:1;min-width:0">
          <h1>${esc(q.title)}</h1>
          <div class="qa-meta mb-2">
            <span class="chip static" style="font-size:.74rem">${esc(q.subject_id)}</span>
            ${(q.tags || []).map((t) => `<span class="chip static" style="font-size:.72rem">#${esc(t)}</span>`).join('')}
          </div>
          <div class="prose">${md(q.body)}</div>
          <div class="flex aic gap-2 mt-2 muted small">
            ${avatarHtml(q.author_name, q.id, 26)} <span>${esc(q.author_name)}</span> · ${timeAgo(q.created_at)} · ${q.views} views
          </div>
        </div>
      </div>
    </div>

    <h2 class="mb-2">${answers.length} answer${answers.length === 1 ? '' : 's'}</h2>
    <div id="answers">
      ${answers.map((a) => `
        <div class="card answer-card ${a.accepted ? 'accepted' : ''}">
          ${a.accepted ? `<span class="accepted-mark badge badge-accepted">${icon('check', 12)} Accepted answer</span>` : ''}
          <div class="flex" style="gap:18px">
            ${voteHtml('answer', a.id, a.votes)}
            <div style="flex:1;min-width:0">
              <div class="prose">${md(a.body)}</div>
              <div class="flex aic gap-2 mt-2 muted small">
                ${avatarHtml(a.author_name, a.id, 26)}
                <span>${esc(a.author_name)}</span>
                ${a.is_expert ? `<span class="badge badge-expert">${icon('award', 11)} Expert</span>` : ''}
                · ${timeAgo(a.created_at)}
                ${mine && !a.accepted ? `<button class="btn btn-outline btn-sm" data-accept="${a.id}" style="margin-left:auto">${icon('check', 13)} Accept</button>` : ''}
              </div>
            </div>
          </div>
        </div>`).join('')}
    </div>

    ${isAuthed ? `
      <div class="card card-pad">
        <h3>Your answer</h3>
        <p class="muted small">Write the steps, not just the result. Markdown works: **bold**, lists, \`code\`, $math$.</p>
        <textarea class="textarea" id="answerBody" placeholder="Walk through it step by step…"></textarea>
        <div class="flex jcsb mt-2">
          <span class="muted small">+15 XP for posting an answer</span>
          <button class="btn btn-primary" id="postAnswer">${icon('send', 14)} Post answer</button>
        </div>
        <div id="ansErr"></div>
      </div>` : `
      <div class="card card-pad tc">
        <p class="muted">Know this one? <a href="/login" data-nav>Log in</a> to post your answer and earn XP.</p>
      </div>`}
  `;

  host.querySelectorAll('[data-vote]').forEach((b) => {
    b.onclick = async () => {
      if (!isAuthed) { go('/login'); return; }
      const [type, tid, v] = b.dataset.vote.split(':');
      try {
        const r = await api('POST', '/api/vote', { targetType: type, targetId: +tid, value: +v });
        document.getElementById(`vc-${type}-${tid}`).textContent = r.votes;
        const wasOn = b.classList.contains('on');
        host.querySelectorAll(`[data-vote^="${type}:${tid}"]`).forEach((x) => x.classList.remove('on'));
        if (!wasOn) b.classList.add('on');
      } catch (e) { toast(e.message); }
    };
  });
  host.querySelectorAll('[data-accept]').forEach((b) => {
    b.onclick = async () => {
      await api('POST', `/api/questions/${id}/accept`, { answerId: +b.dataset.accept });
      toast('Answer accepted');
      wireThread(id);
    };
  });
  const post = document.getElementById('postAnswer');
  if (post) post.onclick = async () => {
    const body = document.getElementById('answerBody').value;
    try {
      await api('POST', `/api/questions/${id}/answers`, { body });
      toast('+15 XP — answer posted', 'xp');
      wireThread(id);
    } catch (e) {
      document.getElementById('ansErr').innerHTML = `<div class="form-error mt-2">${esc(e.message)}</div>`;
    }
  };
}

// ---------- ask -----------------------------------------------------------------

export function pageAsk(subjects) {
  return `
  <div class="wrap-narrow page">
    <div class="page-head">
      <div class="crumbs"><a href="/help" data-nav>Homework help</a><span>/</span><span>Ask</span></div>
      <h1>Ask a question</h1>
      <p class="sub">The more precise your question, the better the answers. Include the problem text and what you've tried.</p>
    </div>
    <div class="card card-pad">
      <div id="askErr"></div>
      <div class="field">
        <label>Subject</label>
        <div class="flex gap-1" style="flex-wrap:wrap" id="subjChips">
          ${subjects.map((s) => `<button type="button" class="chip" data-subj="${s.id}">${icon(s.icon, 13)} ${esc(s.name)}</button>`).join('')}
        </div>
      </div>
      <div class="field">
        <label for="qTitle">Title</label>
        <input class="input" id="qTitle" placeholder='e.g. "Solve 3(x−4) = 2x+5 step by step"'>
        <div class="hint-text">One sentence that states the actual question — at least 10 characters.</div>
      </div>
      <div class="field">
        <label for="qBody">Details</label>
        <textarea class="textarea" id="qBody" placeholder="What exactly are you stuck on? Show what you tried. Markdown works: **bold**, lists, `code`, $math$."></textarea>
      </div>
      <div class="field">
        <label for="qTags">Tags <span class="muted" style="font-weight:400">(optional, comma-separated)</span></label>
        <input class="input" id="qTags" placeholder="algebra, equations">
      </div>
      <button class="btn btn-amber btn-lg btn-block" id="askBtn">${icon('send', 16)} Post question</button>
    </div>
  </div>`;
}

export function wireAsk(subjects) {
  let subject = null;
  document.querySelectorAll('#subjChips .chip').forEach((c) => {
    c.onclick = () => {
      document.querySelectorAll('#subjChips .chip').forEach((x) => x.classList.remove('on'));
      c.classList.add('on');
      subject = c.dataset.subj;
    };
  });
  document.getElementById('askBtn').onclick = async () => {
    const err = document.getElementById('askErr');
    err.innerHTML = '';
    const tags = document.getElementById('qTags').value.split(',').map((t) => t.trim().toLowerCase()).filter(Boolean);
    try {
      const r = await api('POST', '/api/questions', {
        subjectId: subject,
        title: document.getElementById('qTitle').value,
        body: document.getElementById('qBody').value,
        tags
      });
      toast('Question posted');
      go(`/help/${r.id}`);
    } catch (e) {
      err.innerHTML = `<div class="form-error">${esc(e.message)}</div>`;
    }
  };
}

// ---------- coach ------------------------------------------------------------------

export function pageCoach() {
  return `
  <div class="wrap-narrow page">
    <div class="page-head" style="padding-bottom:6px">
      <div class="eyebrow">${'Coach'}</div>
      <h1>Ask me anything</h1>
      <p class="sub">I solve equations step-by-step, explain any topic in the library, find you practice, and build your study plan.</p>
    </div>
    <div class="coach-shell">
      <div class="chat-log" id="chatLog">
        <div class="chat-msg bot">
          <div class="chat-avatar">L</div>
          <div class="chat-bubble">Hey! What are you working on? Try one of these:
            <div class="suggest-row">
              ${['solve 3x + 5 = 20', 'explain compound interest', 'practice exponents', 'what should I study next?'].map((s) => `<button class="chip" data-sug="${esc(s)}">${esc(s)}</button>`).join('')}
            </div>
          </div>
        </div>
      </div>
      <div class="chat-input-row">
        <input class="input" id="chatInput" placeholder="Ask Coach…" autocomplete="off">
        <button class="btn btn-primary" id="chatSend" style="border-radius:99px;padding:0 20px">${icon('send', 17)}</button>
      </div>
    </div>
  </div>`;
}

export async function wireCoach() {
  const log = document.getElementById('chatLog');
  const input = document.getElementById('chatInput');
  const addMsg = (role, html) => {
    const el = document.createElement('div');
    el.className = `chat-msg ${role}`;
    el.innerHTML = `${role === 'user' ? '' : '<div class="chat-avatar">L</div>'}<div class="chat-bubble">${html}</div>${role === 'user' ? `<div class="chat-avatar" style="background:var(--bg-soft)">${icon('user', 15)}</div>` : ''}`;
    log.appendChild(el);
    el.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };
  // replay history
  try {
    const h = await api('GET', '/api/coach/history');
    for (const m of h.messages.slice(-24)) {
      if (m.role === 'user') addMsg('user', esc(m.body));
      else addMsg('bot', md(m.body));
    }
  } catch { /* not logged in */ }

  const send = async (text) => {
    const msg = (text ?? input.value).trim();
    if (!msg) return;
    input.value = '';
    addMsg('user', esc(msg));
    const typing = document.createElement('div');
    typing.className = 'chat-msg bot';
    typing.innerHTML = `<div class="chat-avatar">L</div><div class="chat-bubble"><span class="typing"><i></i><i></i><i></i></span></div>`;
    log.appendChild(typing);
    try {
      const { reply } = await api('POST', '/api/coach', { message: msg });
      typing.remove();
      const links = (reply.links || []).map((l) => `<a href="${esc(l.url)}" data-nav>${esc(l.label)}</a>`).join('');
      addMsg('bot', `${md(reply.text)}${links ? `<div class="coach-links">${links}</div>` : ''}`);
    } catch {
      typing.remove();
      addMsg('bot', 'Something hiccuped — try again.');
    }
  };
  document.getElementById('chatSend').onclick = () => send();
  input.onkeydown = (e) => { if (e.key === 'Enter') send(); };
  log.querySelectorAll('[data-sug]').forEach((b) => { b.onclick = () => send(b.dataset.sug); });
  input.focus();
}

// ---------- search -------------------------------------------------------------------

export function pageSearch(q, results) {
  const empty = !results.lessons.length && !results.courses.length && !results.questions.length;
  return `
  <div class="wrap page">
    <div class="page-head"><div class="eyebrow">Search</div><h1>Results for "${esc(q)}"</h1></div>
    ${empty ? emptyState('search', 'No results', 'Try different keywords, or browse the subjects.', '<a class="btn btn-primary mt-2" href="/subjects" data-nav>Browse subjects</a>') : ''}
    ${results.courses.length ? `<h2>Courses</h2><div class="grid grid-3 mb-3">${results.courses.map((c) => `
      <a class="card card-hover card-pad card-link" href="/course/${c.id}" data-nav><h3 class="card-title" style="font-size:1rem">${esc(c.title)}</h3><div class="muted small">${esc(c.subject)}</div></a>`).join('')}</div>` : ''}
    ${results.lessons.length ? `<h2>Lessons</h2><div class="grid mb-3">${results.lessons.map((l) => `
      <a class="lesson-row" href="/learn/${l.courseId}/${l.lessonId}" data-nav>
        ${icon('book', 16)}<div><div class="lr-title">${esc(l.title)}</div><div class="lr-sub">${esc(l.courseTitle)} · ${esc(l.subject)}</div></div>
        <div class="lr-right">${icon('arrowR', 15)}</div>
      </a>`).join('')}</div>` : ''}
    ${results.questions.length ? `<h2>Solved questions</h2><div class="card">${results.questions.map((x) => `
      <a class="qa-row card-link" href="/help/${x.id}" data-nav style="color:inherit">
        <div style="flex:1"><div class="qa-meta">${x.solved ? '<span class="badge badge-accepted">✓ Solved</span>' : ''}<span>${esc(x.subject_id)}</span></div>
        <div class="qa-title">${esc(x.title)}</div></div>
      </a>`).join('')}</div>` : ''}
  </div>`;
}
