// Game FX: confetti bursts + achievement/level-up celebration.
// All effects are optional layer — no-op under prefers-reduced-motion or
// when the app is hidden, and they never block grading.

import { toast } from './ui.js';
import { state } from './api.js';

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let fxCanvas = null;
let fxCtx = null;
let particles = [];
let rafId = 0;

function ensureCanvas() {
  if (fxCanvas) return;
  fxCanvas = document.createElement('canvas');
  fxCanvas.id = 'fxConfetti';
  fxCanvas.setAttribute('aria-hidden', 'true');
  fxCanvas.style.cssText = 'position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:2000';
  document.body.appendChild(fxCanvas);
  fxCtx = fxCanvas.getContext('2d');
  resize();
  window.addEventListener('resize', resize);
}

function resize() {
  if (!fxCanvas) return;
  fxCanvas.width = Math.floor(window.innerWidth * devicePixelRatio);
  fxCanvas.height = Math.floor(window.innerHeight * devicePixelRatio);
  fxCtx?.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
}

const CONF_COLORS = () => {
  const dark = document.documentElement.dataset.theme === 'dark';
  return dark
    ? ['#f5b83d', '#7ee2c0', '#8fb6ff', '#f38ba8', '#e8e4dc']
    : ['#d97706', '#0d9488', '#3b6fe0', '#e05299', '#1a1a18'];
};

export function burst(x, y, n = 70, spread = 1) {
  if (reduceMotion() || document.hidden) return;
  ensureCanvas();
  const colors = CONF_COLORS();
  for (let i = 0; i < n; i += 1) {
    const a = Math.random() * Math.PI * 2;
    const sp = (2.5 + Math.random() * 5) * spread;
    particles.push({
      x, y,
      vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 4,
      size: 3 + Math.random() * 5,
      color: colors[(Math.random() * colors.length) | 0],
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.3,
      life: 1, decay: 0.012 + Math.random() * 0.014,
      shape: Math.random() < 0.35 ? 'rect' : 'dot'
    });
  }
  if (!rafId) tick();
}

function tick() {
  rafId = requestAnimationFrame(() => {
    fxCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    particles = particles.filter((p) => p.life > 0);
    for (const p of particles) {
      p.x += p.vx; p.y += p.vy;
      p.vy += 0.16; p.vx *= 0.99;
      p.rot += p.vr;
      p.life -= p.decay;
      fxCtx.save();
      fxCtx.translate(p.x, p.y);
      fxCtx.rotate(p.rot);
      fxCtx.globalAlpha = Math.max(0, Math.min(1, p.life * 1.4));
      fxCtx.fillStyle = p.color;
      if (p.shape === 'rect') fxCtx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.66);
      else { fxCtx.beginPath(); fxCtx.arc(0, 0, p.size / 2.4, 0, Math.PI * 2); fxCtx.fill(); }
      fxCtx.restore();
    }
    if (particles.length) tick();
    else { rafId = 0; fxCtx.clearRect(0, 0, window.innerWidth, window.innerHeight); }
  });
}

export function burstAt(el, n = 70, spread = 1) {
  const r = el?.getBoundingClientRect?.();
  const x = r ? r.left + r.width / 2 : window.innerWidth / 2;
  const y = r ? r.top + r.height / 2 : window.innerHeight * 0.4;
  burst(x, y, n, spread);
}

export function celebrateAchievements(list) {
  if (!list?.length) return;
  window.dispatchEvent(new Event('lumina:nav-refresh'));
  list.forEach((a, i) => {
    setTimeout(() => {
      toast(`Achievement unlocked — ${a.name}`, 'badge');
      if (!reduceMotion()) burstAt(null, 60, 0.9);
    }, i * 900);
  });
}

// One entry point after a graded answer / completion response.
// res.progress carries { xpAwarded, levelUp, levelInfo, newAchievements }.
export function gameFx(res, anchorEl) {
  const p = res?.progress || res || {};
  if (res?.correct) burstAt(anchorEl, 46, 0.8);
  if (p.levelUp) {
    burstAt(null, 130, 1.35);
    toast(`Level ${p.levelInfo?.level ?? ''} — ${p.levelInfo?.title || 'Level up!'}`, 'badge');
  } else if (p.levelInfo && state.me?.level && p.levelInfo.level > state.me.level) {
    toast(`Level ${p.levelInfo.level} — ${p.levelInfo.title}`, 'badge');
    burstAt(null, 110, 1.2);
  }
  celebrateAchievements(p.newAchievements || res?.newAchievements);
}
