import { icon, logoSvg } from './icons.js';
import { state, api, refreshMe } from './api.js';

export const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function timeAgo(iso) {
  const norm = String(iso).replace(' ', 'T');
  const t = new Date(norm + (/[zZ]|\+\d{2}:?\d{2}$/.test(norm) ? '' : 'Z')).getTime();
  const s = Math.max(1, Math.floor((Date.now() - t) / 1000));
  if (s < 60) return 'just now';
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  if (s < 86400 * 30) return `${Math.floor(s / 86400)}d ago`;
  return new Date(t).toLocaleDateString();
}

const AVATAR_COLORS = ['#4f46e5', '#0ea5e9', '#16a34a', '#d97706', '#dc2626', '#7c3aed', '#db2777', '#0891b2', '#65a30d', '#ea580c', '#4f7cff', '#9333ea'];
export function avatarHtml(name, seed = 0, size = 34) {
  const initials = (name || '?').trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase();
  const bg = AVATAR_COLORS[Math.abs(seed || initials.charCodeAt(0) || 0) % AVATAR_COLORS.length];
  return `<span class="avatar" style="width:${size}px;height:${size}px;background:${bg};font-size:${Math.round(size * .38)}px">${esc(initials)}</span>`;
}

export function masteryDot(level) {
  return `<span class="m-dot" data-level="${level || ''}" title="${level || 'not started'}"></span>`;
}
export function masteryTag(level) {
  const labels = { attempted: 'In progress', familiar: 'Familiar', proficient: 'Proficient', mastered: 'Mastered' };
  if (!level) return '';
  return `<span class="mastery-tag" data-level="${level}">${labels[level]}</span>`;
}

export function progressRing(pct, size = 74, stroke = 7) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c * (1 - Math.min(1, Math.max(0, pct)));
  return `<svg class="ring" width="${size}" height="${size}">
    <circle class="ring-bg" cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke-width="${stroke}"/>
    <circle class="ring-val" cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="url(#rgrad)" stroke-width="${stroke}" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${off}"/>
    <defs><linearGradient id="rgrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4f46e5"/><stop offset="1" stop-color="#f59e0b"/></linearGradient></defs>
    <text x="50%" y="50%" dy=".35em" text-anchor="middle" transform="rotate(90 ${size / 2} ${size / 2})" fill="currentColor" font-weight="800" font-size="${size * 0.24}">${Math.round(pct * 100)}%</text>
  </svg>`;
}

// ---------- nav + footer -------------------------------------------------

let navMenuOpen = false;
let mobileOpen = false;

export function navHtml() {
  const me = state.me?.user;
  const xp = state.me?.xp ?? 0;
  const streak = state.me?.streakDays ?? 0;
  return `
  <nav class="nav">
    <div class="nav-inner">
      <a class="brand" href="/" data-nav>${logoSvg(30)} Lumina</a>
      <div class="nav-links ${mobileOpen ? 'open' : ''}" id="navLinks">
        <a href="/subjects" data-nav data-route="subjects">Learn</a>
        <a href="/help" data-nav data-route="help">Homework help</a>
        <a href="/coach" data-nav data-route="coach">Coach</a>
        ${me ? `<a href="/dashboard" data-nav data-route="dashboard">My progress</a>` : ''}
      </div>
      <div class="nav-spacer"></div>
      <div class="nav-search" id="navSearch">
        ${icon('search', 15)}<input id="navSearchInput" placeholder="Search lessons, answers…" aria-label="Search">
      </div>
      ${me ? `
        ${streak > 0 ? `<span class="xp-pill" title="${streak}-day streak">${icon('flame', 13)} ${streak}</span>` : ''}
        <span class="xp-pill" title="${xp} XP — level ${state.me.level}">${icon('spark', 13)} ${xp} XP</span>
        <button class="avatar-btn" id="avatarBtn" aria-label="Account menu">${avatarHtml(me.name, me.avatarSeed, 34)}</button>
      ` : `
        <a class="btn btn-outline btn-sm" href="/login" data-nav>Log in</a>
        <a class="btn btn-primary btn-sm" href="/signup" data-nav>Sign up</a>
      `}
      <button class="nav-toggle" id="navToggle" aria-label="Menu">${icon('menu', 20)}</button>
    </div>
    ${navMenuOpen && me ? `
    <div class="nav-menu" id="navMenu">
      <div class="menu-head"><strong>${esc(me.name)}</strong><span>${esc(me.email)}</span></div>
      <a href="/dashboard" data-nav>${icon('target', 16)} Dashboard</a>
      <a href="/profile" data-nav>${icon('user', 16)} Profile</a>
      <button id="themeBtn">${icon(document.documentElement.dataset.theme === 'dark' ? 'sun' : 'moon', 16)} ${document.documentElement.dataset.theme === 'dark' ? 'Light mode' : 'Dark mode'}</button>
      <button id="logoutBtn">${icon('logout', 16)} Sign out</button>
    </div>` : ''}
  </nav>`;
}

export function footerHtml() {
  return `
  <footer class="footer">
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <a class="brand" href="/" data-nav style="margin-bottom:12px">${logoSvg(26)} Lumina</a>
          <p class="muted small">Free courses, unlimited practice, and step-by-step homework help — for every student, everywhere.</p>
        </div>
        <div>
          <h5>Learn</h5>
          <a href="/subjects" data-nav>All subjects</a>
          <a href="/coach" data-nav>Coach</a>
          <a href="/help" data-nav>Homework help</a>
        </div>
        <div>
          <h5>Company</h5>
          <a href="/about" data-nav>About</a>
          <a href="/faq" data-nav>FAQ</a>
        </div>
        <div>
          <h5>Legal</h5>
          <a href="/terms" data-nav>Terms</a>
          <a href="/privacy" data-nav>Privacy</a>
        </div>
      </div>
      <div class="fine">
        <span>© ${new Date().getFullYear()} Lumina Learning. Learn it. Solve it. Master it.</span>
        <span>Made with ${icon('heart', 12)} for students</span>
      </div>
    </div>
  </footer>`;
}

export function wireNav(root, rerender) {
  const av = root.querySelector('#avatarBtn');
  if (av) av.onclick = () => { navMenuOpen = !navMenuOpen; rerender(); };
  const t = root.querySelector('#navToggle');
  if (t) t.onclick = () => { mobileOpen = !mobileOpen; rerender(); };
  const menu = root.querySelector('#navMenu');
  if (menu) {
    const lo = menu.querySelector('#logoutBtn');
    if (lo) lo.onclick = async () => {
      await api('POST', '/api/auth/logout');
      navMenuOpen = false;
      await refreshMe();
      rerender();
      location.href = '/';
    };
    const th = menu.querySelector('#themeBtn');
    if (th) th.onclick = () => {
      const cur = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = cur;
      localStorage.setItem('lumina.theme', cur);
      rerender();
    };
  }
  const si = root.querySelector('#navSearchInput');
  const sw = root.querySelector('#navSearch');
  if (sw) sw.onclick = () => si && si.focus();
  if (si) {
    si.onkeydown = (e) => {
      if (e.key === 'Enter' && si.value.trim()) {
        go(`/search?q=${encodeURIComponent(si.value.trim())}`);
      }
    };
  }
  // mark active route
  const path = location.pathname;
  root.querySelectorAll('.nav-links a').forEach((a) => {
    const r = a.getAttribute('data-route');
    if (r && path.startsWith(`/${r}`)) a.classList.add('active');
    a.addEventListener('click', () => {
      if (mobileOpen) { mobileOpen = false; rerender(); }
    });
  });
}

export function setNavMenu(open) { navMenuOpen = open; }

// ---------- toasts --------------------------------------------------------

let toastHost = null;
export function toast(msg, kind = '') {
  if (!toastHost) {
    toastHost = document.createElement('div');
    toastHost.className = 'toast-stack';
    document.body.appendChild(toastHost);
  }
  const el = document.createElement('div');
  el.className = `toast ${kind}`;
  el.innerHTML = `${kind === 'xp' ? icon('spark', 15) : ''}${esc(msg)}`;
  toastHost.appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; el.style.transition = 'opacity .4s'; setTimeout(() => el.remove(), 400); }, 3400);
}

// ---------- misc components ------------------------------------------------

export function skeletons(n = 3, h = 80) {
  return Array.from({ length: n }, () => `<div class="skeleton" style="height:${h}px"></div>`).join('');
}

export function emptyState(iconName, title, body, ctaHtml = '') {
  return `<div class="empty-state">
    <div class="empty-icon">${icon(iconName, 44)}</div>
    <h3>${esc(title)}</h3><p>${esc(body)}</p>${ctaHtml}
  </div>`;
}

export function crumbs(items) {
  return `<div class="crumbs">${items.map((it, i) =>
    i < items.length - 1
      ? `<a href="${esc(it.href)}" data-nav>${esc(it.label)}</a><span>/</span>`
      : `<span>${esc(it.label)}</span>`
  ).join('')}</div>`;
}

// Client-side navigation (declared here; implemented in app.js)
let navFn = (href) => { location.href = href; };
export function go(href) { navFn(href); }
export function _setNav(fn) { navFn = fn; }
