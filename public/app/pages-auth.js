import { icon } from './icons.js';
import { esc, toast, go } from './ui.js';
import { api, refreshMe, flushGuestProgress, state } from './api.js';

export function pageAuth(mode = 'login') {
  const isSignup = mode === 'signup';
  return `
  <div class="wrap page">
    <div class="card auth-card">
      <h1>${isSignup ? 'Create your free account' : 'Welcome back'}</h1>
      <p class="sub">${isSignup ? 'Courses, practice, and homework help — free forever.' : 'Pick up right where you left off.'}</p>
      <div id="authErr"></div>
      <form id="authForm" novalidate>
        ${isSignup ? `
        <div class="field">
          <label for="name">Name</label>
          <input class="input" id="name" autocomplete="name" placeholder="Ada Lovelace" required>
        </div>` : ''}
        <div class="field">
          <label for="email">Email</label>
          <input class="input" id="email" type="email" autocomplete="email" placeholder="you@school.edu" required>
        </div>
        <div class="field">
          <label for="password">Password${isSignup ? ' <span class="muted" style="font-weight:400">(8+ characters)</span>' : ''}</label>
          <input class="input" id="password" type="password" autocomplete="${isSignup ? 'new-password' : 'current-password'}" required>
        </div>
        <button class="btn btn-primary btn-block btn-lg" type="submit">${isSignup ? 'Create account' : 'Log in'}</button>
      </form>
      <div class="auth-alt">
        ${isSignup
          ? `Already have an account? <a href="/login" data-nav>Log in</a>`
          : `New to Lumina? <a href="/signup" data-nav>Create a free account</a>`}
      </div>
    </div>
  </div>`;
}

export function wireAuth(mode) {
  const form = document.getElementById('authForm');
  const errBox = document.getElementById('authErr');
  if (!form) return;
  form.onsubmit = async (e) => {
    e.preventDefault();
    errBox.innerHTML = '';
    const btn = form.querySelector('button[type=submit]');
    btn.disabled = true; btn.textContent = 'Working…';
    try {
      const body = {
        name: document.getElementById('name')?.value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
      };
      await api('POST', `/api/auth/${mode === 'signup' ? 'signup' : 'login'}`, body);
      await refreshMe();
      await flushGuestProgress();
      toast(mode === 'signup' ? 'Welcome to Lumina!' : 'Welcome back!', 'xp');
      go('/dashboard');
      setTimeout(() => location.reload(), 60);
    } catch (err) {
      errBox.innerHTML = `<div class="form-error">${esc(err.message)}</div>`;
      btn.disabled = false; btn.textContent = mode === 'signup' ? 'Create account' : 'Log in';
    }
  };
}

export function pageProfile() {
  const u = state.me?.user;
  if (!u) return '';
  return `
  <div class="wrap-narrow page">
    <div class="page-head"><div class="eyebrow">Account</div><h1>Profile</h1></div>
    <div class="card card-pad">
      <div class="flex aic gap-2 mb-3">
        ${avatarBox(u)}
        <div><h2 style="margin:0">${esc(u.name)}</h2><div class="muted">${esc(u.email)}</div></div>
      </div>
      <div class="grid grid-3" style="gap:12px">
        <div class="card card-pad tc"><div style="font-size:1.7rem;font-weight:800">${state.me.xp}</div><div class="muted small">Total XP</div></div>
        <div class="card card-pad tc"><div style="font-size:1.7rem;font-weight:800">${state.me.level}</div><div class="muted small">Level</div></div>
        <div class="card card-pad tc"><div style="font-size:1.7rem;font-weight:800">${state.me.streakDays}</div><div class="muted small">Day streak</div></div>
      </div>
      <div class="divider"></div>
      <h3>Preferences</h3>
      <div class="field"><label>Theme</label>
        <button class="btn btn-outline" id="themeToggle">${icon(document.documentElement.dataset.theme === 'dark' ? 'sun' : 'moon', 16)} Toggle ${document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'} mode</button>
      </div>
      <div class="divider"></div>
      <button class="btn btn-danger-ghost" id="logout2">${icon('logout', 16)} Sign out</button>
    </div>
  </div>`;
}

function avatarBox(u) {
  const initials = (u.name || '?').split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase();
  return `<span class="avatar" style="width:64px;height:64px;font-size:1.4rem;background:#4f46e5">${esc(initials)}</span>`;
}

export function wireProfile(rerender) {
  const t = document.getElementById('themeToggle');
  if (t) t.onclick = () => {
    const cur = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = cur;
    localStorage.setItem('lumina.theme', cur);
    rerender();
  };
  const l = document.getElementById('logout2');
  if (l) l.onclick = async () => {
    await api('POST', '/api/auth/logout');
    await refreshMe();
    location.href = '/';
  };
}
