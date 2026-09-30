// Interactive lesson widget: a live function plotter driven by sliders.
// Content authors add {type:'graph', expr:'a*x+b', sliders:{a:{min,max,value,label}},
// xrange:[lo,hi], yrange:[lo,hi], points:[{x,y,label}] } blocks to lessons.

import { inlineMd } from './markdown.js';

const SAFE = /^[\d\sxabcd+\-*/().,^]+$/;

function compile(expr) {
  const body = String(expr).replace(/\^/g, '**');
  if (!SAFE.test(body)) return () => NaN;
  try {
    const f = new Function('x', 'a', 'b', 'c', 'd', `"use strict"; return (${body});`);
    if (!Number.isFinite(f(1, 1, 1, 1, 1))) return () => NaN;
    return f;
  } catch { return () => NaN; }
}

function cssVar(name, fallback) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
}

function prettyExpr(expr, vals) {
  return String(expr).replace(/\^/g, '^').replace(/\b([abcd])\b/g, (_, k) => {
    const v = vals[k];
    return v == null ? k : (v < 0 ? `(${v})` : String(v));
  }).replace(/\*/g, '·');
}

function draw(cv, cfg, vals) {
  const dpr = window.devicePixelRatio || 1;
  const W = cv.clientWidth, H = cv.clientHeight;
  if (cv.width !== W * dpr) { cv.width = W * dpr; cv.height = H * dpr; }
  const ctx = cv.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const [x0, x1] = cfg.xrange || [-10, 10];
  const [y0, y1] = cfg.yrange || [-10, 10];
  const px = (x) => ((x - x0) / (x1 - x0)) * W;
  const py = (y) => H - ((y - y0) / (y1 - y0)) * H;
  const grid = cssVar('--border', '#ddd');
  const axis = cssVar('--muted', '#888');
  const ink = cssVar('--primary', '#4f46e5');
  const amber = cssVar('--amber-deep', '#b45309');
  ctx.clearRect(0, 0, W, H);
  ctx.lineWidth = 1;
  ctx.strokeStyle = grid;
  const stepX = Math.max(1, Math.round((x1 - x0) / 12));
  const stepY = Math.max(1, Math.round((y1 - y0) / 8));
  ctx.beginPath();
  for (let gx = Math.ceil(x0 / stepX) * stepX; gx <= x1; gx += stepX) { ctx.moveTo(px(gx), 0); ctx.lineTo(px(gx), H); }
  for (let gy = Math.ceil(y0 / stepY) * stepY; gy <= y1; gy += stepY) { ctx.moveTo(0, py(gy)); ctx.lineTo(W, py(gy)); }
  ctx.stroke();
  ctx.strokeStyle = axis;
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  if (y0 < 0 && y1 > 0) { ctx.moveTo(0, py(0)); ctx.lineTo(W, py(0)); }
  if (x0 < 0 && x1 > 0) { ctx.moveTo(px(0), 0); ctx.lineTo(px(0), H); }
  ctx.stroke();

  const f = compile(cfg.expr);
  const A = vals.a ?? 0, B = vals.b ?? 0, C = vals.c ?? 0, D = vals.d ?? 0;
  ctx.strokeStyle = ink;
  ctx.lineWidth = 2.4;
  ctx.beginPath();
  let pen = false;
  let lastY = 0;
  for (let i = 0; i <= W; i += 1) {
    const x = x0 + (i / W) * (x1 - x0);
    const y = f(x, A, B, C, D);
    if (!Number.isFinite(y) || y < y0 - (y1 - y0) * 4 || y > y1 + (y1 - y0) * 4) { pen = false; continue; }
    const syp = py(y);
    if (pen && Math.abs(syp - lastY) > H * 1.5) pen = false; // asymptote jump
    if (pen) ctx.lineTo(i, syp); else ctx.moveTo(i, syp);
    pen = true; lastY = syp;
  }
  ctx.stroke();

  (cfg.points || []).forEach((p) => {
    ctx.fillStyle = amber;
    ctx.beginPath();
    ctx.arc(px(p.x), py(p.y), 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1.6;
    ctx.stroke();
    if (p.label) {
      ctx.fillStyle = cssVar('--ink', '#222');
      ctx.font = '600 11px Inter, sans-serif';
      ctx.fillText(p.label, Math.min(W - 60, px(p.x) + 9), Math.max(12, py(p.y) - 8));
    }
  });
}

// Repaint mounted widgets when the theme flips — canvas colors come from
// CSS vars, so a theme change must trigger a fresh draw.
const liveDraws = new Set();
let themeObserver = null;
function watchTheme() {
  if (themeObserver) return;
  themeObserver = new MutationObserver(() => liveDraws.forEach((fn) => fn()));
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
}

export function mountGraphs(root = document) {
  root.querySelectorAll('.lgraph').forEach((el) => {
    let cfg;
    try { cfg = JSON.parse(decodeURIComponent(el.dataset.graph)); } catch { return; }
    const vals = {};
    Object.entries(cfg.sliders || {}).forEach(([k, s]) => { vals[k] = s.value ?? s.min ?? 0; });
    const sliders = cfg.sliders || {};
    const ariaExpr = (cfg.expr || '').replace(/\*/g, ' times ').replace(/\^/g, ' to the power ');
    el.innerHTML = `
      <div class="lgraph-cap">${cfg.caption ? inlineMd(cfg.caption) : 'Drag the sliders — watch the curve.'}</div>
      <canvas class="lgraph-cv" height="280" role="img" aria-label="Interactive graph of y = ${ariaExpr}. Sliders below adjust the parameters."></canvas>
      <div class="lgraph-eq" aria-live="polite"><span class="mono" id="leq"></span></div>
      ${Object.entries(sliders).map(([k, s]) => `
        <label class="lgraph-row">
          <span class="lgraph-name">${s.label || k}</span>
          <input type="range" min="${s.min}" max="${s.max}" step="${s.step || 0.1}" value="${vals[k]}" data-k="${k}">
          <span class="lgraph-val mono" id="lv-${k}">${vals[k]}</span>
        </label>`).join('')}`;
    const cv = el.querySelector('canvas');
    cv.style.width = '100%';
    const redraw = () => {
      draw(cv, cfg, vals);
      const eq = el.querySelector('#leq');
      if (eq) eq.textContent = `f(x) = ${prettyExpr(cfg.expr, vals)}`;
    };
    liveDraws.add(redraw);
    watchTheme();
    el.querySelectorAll('input[type=range]').forEach((inp) => {
      inp.addEventListener('input', () => {
        const v = parseFloat(inp.value);
        vals[inp.dataset.k] = Number.isInteger(v) ? v : +v.toFixed(2);
        const lab = el.querySelector(`#lv-${inp.dataset.k}`);
        if (lab) lab.textContent = vals[inp.dataset.k];
        redraw();
      });
    });
    redraw();
  });
}
