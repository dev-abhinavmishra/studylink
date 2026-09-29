// Tiny API client + shared session state.

export const state = {
  me: null,          // { user, xp, level, streakDays } | null
  guestProgress: loadGuest()
};

function loadGuest() {
  try { return JSON.parse(localStorage.getItem('lumina.guestProgress') || '{}'); }
  catch { return {}; }
}
function saveGuest() {
  localStorage.setItem('lumina.guestProgress', JSON.stringify(state.guestProgress));
}

export function recordGuestAttempt(skillId, correct) {
  const p = state.guestProgress[skillId] || { attempts: 0, correct: 0, streak: 0 };
  p.attempts += 1;
  if (correct) { p.correct += 1; p.streak += 1; } else p.streak = 0;
  state.guestProgress[skillId] = p;
  saveGuest();
  return p;
}

export function guestSkillLevel(skillId) {
  const p = state.guestProgress[skillId];
  if (!p) return null;
  if (p.streak >= 5 || p.correct >= 10) return 'mastered';
  if (p.streak >= 3) return 'proficient';
  if (p.streak >= 1) return 'familiar';
  return 'attempted';
}

export async function flushGuestProgress() {
  const items = [];
  for (const [skillId, p] of Object.entries(state.guestProgress)) {
    // replay as attempts: server increments per item; replay correct-then-rest
    for (let i = 0; i < Math.min(p.correct, 50); i++) items.push({ skillId, correct: true });
    for (let i = 0; i < Math.min(p.attempts - p.correct, 50); i++) items.push({ skillId, correct: false });
  }
  if (!items.length) return;
  try {
    await api('POST', '/api/progress/import', { items });
    state.guestProgress = {};
    saveGuest();
  } catch { /* keep local copy */ }
}

async function api(method, url, body) {
  const res = await fetch(url, {
    method,
    headers: body ? { 'Content-Type': 'application/json' } : undefined,
    body: body ? JSON.stringify(body) : undefined,
    credentials: 'same-origin'
  });
  let data = null;
  try { data = await res.json(); } catch { /* non-json */ }
  if (!res.ok) {
    const err = new Error((data && data.error) || `Request failed (${res.status})`);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

export async function refreshMe() {
  try {
    state.me = await api('GET', '/api/me');
  } catch {
    state.me = { user: null };
  }
  return state.me;
}

export { api };
