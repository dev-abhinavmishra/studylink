// Inline SVG icon set. icon('name') returns an SVG string.
const P = {
  spark: 'M32 12 L35.5 26 L49 26 L38 34.5 L42.5 49 L32 40.5 L21.5 49 L26 34.5 L15 26 L28.5 26 Z',
  logoMark: 'M32 12 L35.5 26 L49 26 L38 34.5 L42.5 49 L32 40.5 L21.5 49 L26 34.5 L15 26 L28.5 26 Z'
};

const STROKE = {
  book: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z',
  flask: 'M10 2v6L4.5 18.5A2 2 0 0 0 6.3 21h11.4a2 2 0 0 0 1.8-1.5L14 8V2 M8.5 2h7 M7 15h10',
  atom: 'M12 12h.01 M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20z M2 12a15.3 15.3 0 0 1 20 0 15.3 15.3 0 0 1-20 0z',
  globe: 'M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z M2 12h20 M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z',
  chip: 'M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M9 9h6v6H9z M4 9h2M4 15h2M18 9h2M18 15h2M9 4v2M15 4v2M9 18v2M15 18v2',
  dollar: 'M12 2v20 M17 6.5C17 4.5 14.8 4 12 4s-5 1.3-5 3.5S9 11 12 11s5 1.3 5 3.5-2.2 3.5-5 3.5-5-1.5-5-3.5',
  pen: 'M12 20h9 M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z',
  sigma: 'M18 5H6l6 7-6 7h12',
  rocket: 'M12 15c5-4 7-9 7-13-4 0-9 2-13 7l-2 7 7-2z M9 12l-4-2c1-4 3-6 7-7 M15 12l-4-2',
  trophy: 'M8 21h8 M12 17v4 M7 4h10v7a5 5 0 0 1-10 0V4z M7 6H4a2 2 0 0 0 0 4h3 M17 6h3a2 2 0 0 1 0 4h-3',
  chat: 'M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z',
  check: 'M20 6L9 17l-5-5',
  flame: 'M12 22c4 0 7-3 7-7 0-3-2-5-4-7 0 2-1 3-2 3s-2-1-2-4c-3 2-6 5-6 9 0 4 3 6 7 6z',
  star: 'M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7L5.8 21l1.6-7L2 9.2l7.1-.6z',
  target: 'M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  compass: 'M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z M15.5 8.5l-2 5-5 2 2-5z',
  beaker: 'M9 3h6 M10 3v5L4.5 19a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 8V3 M7 15h10',
  shield: 'M12 22s8-3.6 8-10V5l-8-3-8 3v7c0 6.4 8 10 8 10z',
  lightbulb: 'M9 18h6 M10 21h4 M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3v1h6v-1c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z',
  code: 'M16 18l6-6-6-6 M8 6l-6 6 6 6',
  history: 'M3 3v5h5 M3.5 8A9 9 0 1 1 3 12 M12 7v5l4 2',
  calculator: 'M4 2h16v20H4z M8 6h8 M8 11h.01 M12 11h.01 M16 11h.01 M8 15h.01 M12 15h.01 M16 15h.01 M8 19h.01 M12 19h.01 M16 19h.01',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z M21 21l-4.35-4.35',
  arrowR: 'M5 12h14 M12 5l7 7-7 7',
  arrowL: 'M19 12H5 M12 19l-7-7 7-7',
  plus: 'M12 5v14 M5 12h14',
  up: 'M12 19V5 M5 12l7-7 7 7',
  down: 'M12 5v14 M19 12l-7 7-7-7',
  clock: 'M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z M12 6v6l4 2',
  menu: 'M3 6h18 M3 12h18 M3 18h18',
  x: 'M18 6L6 18 M6 6l12 12',
  sun: 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z M12 1v2 M12 21v2 M4.2 4.2l1.4 1.4 M18.4 18.4l1.4 1.4 M1 12h2 M21 12h2 M4.2 19.8l1.4-1.4 M18.4 5.6l1.4-1.4',
  moon: 'M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z',
  logout: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9',
  user: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  eye: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  help: 'M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3 M12 17h.01',
  zap: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  grad: 'M22 9L12 4 2 9l10 5 10-5z M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5 M22 9v6',
  play: 'M6 4l14 8-14 8V4z',
  send: 'M22 2L11 13 M22 2l-7 20-4-9-9-4 20-7z',
  award: 'M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14z M8.2 13.9L7 22l5-3 5 3-1.2-8.1',
  layers: 'M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5',
  heart: 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l8.8 8.8 8.8-8.8a5.5 5.5 0 0 0 0-7.8z',
  bookmark: 'M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'
};

export function icon(name, size = 18, cls = '') {
  const stroke = STROKE[name];
  const fill = P[name];
  if (stroke) {
    return `<svg class="icn ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${stroke}"/></svg>`;
  }
  if (fill) {
    return `<svg class="icn ${cls}" width="${size}" height="${size}" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true"><path d="${fill}"/></svg>`;
  }
  return `<svg class="icn ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/></svg>`;
}

export function logoSvg(size = 30) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 64 64" aria-hidden="true">
    <defs><linearGradient id="lgx${size}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#fbbf24"/><stop offset=".55" stop-color="#f59e0b"/><stop offset="1" stop-color="#4f46e5"/>
    </linearGradient></defs>
    <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#lgx${size})"/>
    <path d="${P.spark}" fill="#fff" opacity=".96"/>
  </svg>`;
}
