// markdown-lite: paragraphs, **bold**, *italic*, `code`, fenced code,
// $inline$ and $$block$$ math via KaTeX (graceful if CDN absent).

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderMath(tex, display) {
  try {
    if (window.katex) {
      return window.katex.renderToString(tex, {
        displayMode: display, throwOnError: false, strict: false
      });
    }
  } catch (e) { /* fall through */ }
  return `<code class="math-raw">${esc(tex)}</code>`;
}

export function inlineMd(text) {
  // Escaped dollars (\$) are literal currency, never math delimiters.
  let s = esc(String(text)).replace(/\\\$/g, '@@LUMDOLLAR@@');
  // math first ($...$ and $$...$$) — work on escaped text; $ survives escaping.
  // A close-$ preceded by space, or followed by a digit, is currency not math.
  s = s.replace(/\$\$([^$]+)\$\$/g, (_, m) => renderMath(m, true));
  s = s.replace(/\$([^\s$](?:[^$\n]*?[^\s$])?)\$(?!\d)/g, (_, m) => renderMath(m, false));
  s = s.replace(/@@LUMDOLLAR@@/g, '$');
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/\*([^*\n]+)\*/g, '<em>$1</em>');
  s = s.replace(/`([^`\n]+)`/g, '<code>$1</code>');
  // Links: allow only http(s)/mailto/protocol-relative-safe paths; anything else
  // (javascript:, data:, vbscript: ...) renders as plain text.
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, text, url) => {
    const u = String(url).replace(/&amp;/g, '&').trim();
    const safe = /^(https?:|mailto:)/i.test(u) || /^\/(?!\/)/.test(u) || /^#/.test(u);
    return safe ? `<a href="${u}" rel="noopener nofollow">${text}</a>` : `${text} (${esc(u)})`;
  });
  return s;
}

export function md(text) {
  const src = String(text || '');
  const out = [];
  let para = [];
  let inCode = false, codeLang = '', codeBuf = [];
  let inList = false;

  const flushPara = () => {
    if (para.length) {
      out.push(`<p>${para.map(inlineMd).join('<br>')}</p>`);
      para = [];
    }
  };
  const flushList = () => { if (inList) { out.push('</ul>'); inList = false; } };

  for (const raw of src.split('\n')) {
    const line = raw.replace(/\s+$/, '');
    const fence = line.match(/^```(\w*)/);
    if (fence) {
      if (!inCode) { flushPara(); flushList(); inCode = true; codeLang = fence[1] || ''; codeBuf = []; }
      else { out.push(`<pre class="code-block"><span class="code-lang">${esc(codeLang || 'code')}</span>${esc(codeBuf.join('\n'))}</pre>`); inCode = false; }
      continue;
    }
    if (inCode) { codeBuf.push(raw); continue; }
    const li = line.match(/^\s*[-*]\s+(.+)/);
    const num = line.match(/^\s*\d+[.)]\s+(.+)/);
    if (li || num) {
      flushPara();
      if (!inList) { out.push('<ul>'); inList = true; }
      out.push(`<li>${inlineMd((li || num)[1])}</li>`);
      continue;
    }
    flushList();
    if (!line.trim()) { flushPara(); continue; }
    const h = line.match(/^(#{1,3})\s+(.+)/);
    if (h) { flushPara(); out.push(`<h${h[1].length + 1}>${inlineMd(h[2])}</h${h[1].length + 1}>`); continue; }
    para.push(line);
  }
  if (inCode) out.push(`<pre class="code-block">${esc(codeBuf.join('\n'))}</pre>`);
  flushPara(); flushList();
  return out.join('\n');
}

// Render a lesson block[] into prose HTML.
export function renderBlocks(blocks) {
  return (blocks || []).map((b) => {
    switch (b.type) {
      case 'p': return `<p>${inlineMd(b.text)}</p>`;
      case 'h2': return `<h2>${inlineMd(b.text)}</h2>`;
      case 'callout': {
        const tag = { key: 'Key idea', tip: 'Tip', warning: 'Watch out' }[b.kind] || 'Note';
        return `<div class="callout callout-${b.kind || 'key'}"><span class="callout-tag">${tag}</span>${inlineMd(b.text)}</div>`;
      }
      case 'example':
        return `<div class="example-block"><div class="ex-title">${b.title ? esc(b.title) : 'Worked example'}</div><p class="mt-0">${inlineMd(b.text)}</p></div>`;
      case 'list':
        return `<ul>${(b.items || []).map((i) => `<li>${inlineMd(i)}</li>`).join('')}</ul>`;
      case 'formula':
        return `<div class="formula-block">${renderMath(b.text, true)}</div>`;
      case 'code':
        return `<pre class="code-block"><span class="code-lang">${esc(b.lang || 'code')}</span>${esc(b.text)}</pre>`;
      case 'graph':
        return `<div class="lgraph" data-graph="${encodeURIComponent(JSON.stringify(b))}"></div>`;
      default: return b.text ? `<p>${inlineMd(b.text)}</p>` : '';
    }
  }).join('\n');
}
