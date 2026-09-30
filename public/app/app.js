import { api, refreshMe, state } from './api.js';
import { navHtml, footerHtml, wireNav, go, _setNav, skeletons } from './ui.js';
import { pageLanding, wireLanding, pageAbout, pageFaq, pageTerms, pagePrivacy, pageNotFound } from './pages-marketing.js';
import { pageAuth, wireAuth, pageProfile, wireProfile } from './pages-auth.js';
import { pageSubjects, pageSubject, pageCourse, pageLesson, wireLesson, pagePractice, loadQuestion, pageDashboard, pageChallenge, startChallenge } from './pages-learn.js';
import { pageHelp, wireHelp, pageThread, wireThread, pageAsk, wireAsk, pageCoach, wireCoach, pageSearch } from './pages-help.js';

const app = document.getElementById('app');
const navHost = document.getElementById('navHost');
const footHost = document.getElementById('footHost');
const routeBar = document.getElementById('routeBar');
let barTimer = null;
function barStart() {
  clearTimeout(barTimer);
  barTimer = setTimeout(() => routeBar.classList.add('on'), 120); // don't flash for instant routes
}
function barDone() {
  clearTimeout(barTimer);
  routeBar.classList.remove('on');
}

function parseQuery() {
  return Object.fromEntries(new URLSearchParams(location.search));
}

const html = (s) => s;

async function route() {
  barStart();
  const path = location.pathname;
  const params = parseQuery();
  document.onkeydown = null; // clear practice shortcuts
  let page = '';
  let wire = null;
  let title = 'Lumina';
  try {
    if (path === '/') {
      if (state.me?.user) { go('/dashboard'); return; }
      const catalog = await api('GET', '/api/catalog');
      page = pageLanding(catalog);
      wire = () => wireLanding(catalog);
      title = 'Lumina — Learn it. Solve it. Master it.';
    } else if (path === '/about') { page = pageAbout(); title = 'About · Lumina'; }
    else if (path === '/faq') { page = pageFaq(); title = 'FAQ · Lumina'; }
    else if (path === '/terms') { page = pageTerms(); title = 'Terms · Lumina'; }
    else if (path === '/privacy') { page = pagePrivacy(); title = 'Privacy · Lumina'; }
    else if (path === '/login' || path === '/signup') {
      if (state.me?.user) { go('/dashboard'); return; }
      const mode = path.slice(1);
      page = pageAuth(mode);
      wire = () => wireAuth(mode);
      title = `${mode === 'signup' ? 'Sign up' : 'Log in'} · Lumina`;
    } else if (path === '/subjects') {
      const catalog = await api('GET', '/api/catalog');
      page = pageSubjects(catalog); title = 'Subjects · Lumina';
    } else if (path.match(/^\/subjects\/[^/]+$/)) {
      const s = await api('GET', `/api/subjects/${path.split('/')[2]}`);
      page = pageSubject(s.subject); title = `${s.subject.name} · Lumina`;
    } else if (path.match(/^\/course\/[^/]+$/)) {
      const c = await api('GET', `/api/courses/${path.split('/')[2]}`);
      page = pageCourse(c.subject, c.course); title = `${c.course.title} · Lumina`;
    } else if (path.match(/^\/learn\/[^/]+\/[^/]+$/)) {
      const [, , courseId, lessonId] = path.split('/');
      const d = await api('GET', `/api/lessons/${lessonId}`);
      page = pageLesson(d);
      wire = () => wireLesson(lessonId, d.lesson.skill?.id);
      title = `${d.lesson.title} · Lumina`;
    } else if (path.match(/^\/practice\/[^/]+$/)) {
      const skillId = path.split('/')[2];
      page = pagePractice('Practice');
      wire = () => loadQuestion(skillId);
      title = 'Practice · Lumina';
    } else if (path.match(/^\/challenge\/[^/]+$/)) {
      const courseId = path.split('/')[2];
      page = pageChallenge();
      wire = () => startChallenge(courseId);
      title = 'Course challenge · Lumina';
    } else if (path === '/dashboard') {
      if (!state.me?.user) { go('/login'); return; }
      const d = await api('GET', '/api/dashboard');
      page = pageDashboard(d); title = 'Dashboard · Lumina';
    } else if (path === '/help') {
      const catalog = await api('GET', '/api/catalog');
      page = pageHelp(catalog.subjects, params);
      wire = () => wireHelp(params);
      title = 'Homework help · Lumina';
    } else if (path === '/help/ask') {
      if (!state.me?.user) { go('/login'); return; }
      const catalog = await api('GET', '/api/catalog');
      page = pageAsk(catalog.subjects);
      wire = () => wireAsk(catalog.subjects);
      title = 'Ask a question · Lumina';
    } else if (path.match(/^\/help\/[^/]+$/)) {
      page = pageThread();
      wire = () => wireThread(path.split('/')[2]);
      title = 'Homework help · Lumina';
    } else if (path === '/coach') {
      page = pageCoach(); wire = wireCoach; title = 'Coach · Lumina';
    } else if (path === '/search') {
      const q = params.q || '';
      const results = q ? await api('GET', `/api/search?q=${encodeURIComponent(q)}`) : { lessons: [], courses: [], questions: [] };
      page = pageSearch(q, results); title = `Search · Lumina`;
    } else if (path === '/profile') {
      if (!state.me?.user) { go('/login'); return; }
      page = pageProfile(); wire = () => wireProfile(renderNav);
      title = 'Profile · Lumina';
    } else {
      page = pageNotFound(); title = 'Not found · Lumina';
    }
  } catch (e) {
    if (e.status === 404) page = pageNotFound();
    else page = `<div class="wrap page"><div class="card card-pad tc"><h2>Something went wrong</h2><p class="muted">${e.message || 'Please try again.'}</p><a class="btn btn-outline mt-2" href="/" data-nav>Go home</a></div></div>`;
  }
  document.title = title;
  app.innerHTML = page;
  app.classList.remove('route-enter');
  void app.offsetWidth; // restart the enter animation
  app.classList.add('route-enter');
  barDone();
  if (wire) await wire();
  window.scrollTo({ top: 0 });
}

function renderNav() {
  navHost.innerHTML = navHtml();
  wireNav(navHost, renderNav);
}

function render() {
  renderNav();
  footHost.innerHTML = footerHtml();
  route();
}

_setNav((href) => { history.pushState({}, '', href); route(); });

// history-API navigation
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[data-nav]');
  if (!a) return;
  const href = a.getAttribute('href');
  if (!href || href.startsWith('http')) return;
  e.preventDefault();
  history.pushState({}, '', href);
  route();
});
window.addEventListener('popstate', route);

// pages ask the nav to refresh session stats (XP/streak) after progress
window.addEventListener('lumina:nav-refresh', () => {
  refreshMe().then(renderNav);
});

// boot
(async () => {
  const theme = localStorage.getItem('lumina.theme');
  if (theme) document.documentElement.dataset.theme = theme;
  else if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) document.documentElement.dataset.theme = 'dark';
  await refreshMe();
  renderNav();
  footHost.innerHTML = footerHtml();
  await route();
  const boot = document.getElementById('boot');
  if (boot) { boot.classList.add('out'); boot.addEventListener('transitionend', () => boot.remove(), { once: true }); setTimeout(() => boot.remove(), 900); }
})();
