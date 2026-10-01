// Achievements page — badge shelf + level card.

import { api } from './api.js';
import { icon } from './icons.js';
import { esc, progressRing, crumbs } from './ui.js';

export function pageAchievements(d) {
  const li = d.levelInfo;
  const pct = li && li.span ? Math.round((li.into / li.span) * 100) : 0;
  const tiles = d.achievements.map((a) => `
    <div class="badge-tile ${a.earnedAt ? 'earned' : 'locked'}">
      <div class="badge-medal">${icon(a.icon, 26)}</div>
      <div class="badge-name">${esc(a.name)}</div>
      <div class="badge-desc">${esc(a.desc)}</div>
      ${a.earnedAt ? `<div class="badge-date">${esc(String(a.earnedAt).slice(0, 10))}</div>` : '<div class="badge-date">Locked</div>'}
    </div>`).join('');
  return `<div class="wrap page">
    ${crumbs([{ label: 'Dashboard', href: '/dashboard' }, { label: 'Achievements' }])}
    <div class="lvl-hero card">
      <div class="lvl-ring">${progressRing(pct / 100, 96, 9)}</div>
      <div>
        <div class="eyebrow">Level ${li?.level ?? 1}</div>
        <h1 style="margin:2px 0 4px">${esc(li?.title || 'Novice')}</h1>
        <div class="muted">${li ? `${li.into} of ${li.span} XP to level ${li.level + 1}` : ''} · ${d.earned} of ${d.total} achievements</div>
      </div>
    </div>
    <div class="badge-grid">${tiles}</div>
  </div>`;
}

export async function fetchAchievements() {
  return api('GET', '/api/achievements');
}
