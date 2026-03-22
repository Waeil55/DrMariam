/**
 * Patches App.jsx:
 * 1. Replaces renderMarkdown with table+code support version
 * 2. Replaces ChatView with Topics + full redesign
 * 3. Adds mobile header hide for chat view
 */
const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// ─── 1. Enhanced renderMarkdown ─────────────────────────────────────────────
const OLD_RENDER_MD = `const renderMarkdown = (text) => {
  if (!text) return null;
  const lines = text.split('\\n');
  const out = [];
  let listItems = [];
  const flushList = () => {
    if (!listItems.length) return;
    out.push(<ul key={\`ul\${out.length}\`} style={{ paddingLeft: 18, margin: '4px 0', listStyle: 'disc' }}>{listItems.splice(0)}</ul>);
  };
  lines.forEach((line, idx) => {
    const h3 = line.match(/^### (.+)$/); if (h3) { flushList(); out.push(<p key={idx} style={{ fontWeight: 800, margin: '10px 0 2px' }}>{renderMdInline(h3[1])}</p>); return; }
    const h2 = line.match(/^## (.+)$/); if (h2) { flushList(); out.push(<p key={idx} style={{ fontWeight: 800, fontSize: '1.05em', margin: '10px 0 3px' }}>{renderMdInline(h2[1])}</p>); return; }
    const h1 = line.match(/^# (.+)$/); if (h1) { flushList(); out.push(<p key={idx} style={{ fontWeight: 900, fontSize: '1.1em', margin: '12px 0 4px' }}>{renderMdInline(h1[1])}</p>); return; }
    const li = line.match(/^\\s*[-*•+] (.+)$/) || line.match(/^\\s*\\d+\\.\\s+(.+)$/);
    if (li) { listItems.push(<li key={idx} style={{ marginBottom: 2, lineHeight: 1.5 }}>{renderMdInline(li[1])}</li>); return; }
    if (/^---+$/.test(line.trim())) { flushList(); out.push(<hr key={idx} style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.15)', margin: '8px 0' }} />); return; }
    if (!line.trim()) { flushList(); if (out.length) out.push(<div key={idx} style={{ height: 6 }} />); return; }
    flushList();
    out.push(<div key={idx} style={{ lineHeight: 1.6 }}>{renderMdInline(line)}</div>);
  });
  flushList();
  return <>{out}</>;
};`;

const NEW_RENDER_MD = `const renderMarkdown = (text) => {
  if (!text) return null;
  const lines = text.split('\\n');
  const out = [];
  let listItems = [];
  let tableRows = [];
  let inCode = false;
  let codeLines = [];

  const flushList = () => {
    if (!listItems.length) return;
    out.push(<ul key={\`ul\${out.length}\`} style={{ paddingLeft: 18, margin: '4px 0', listStyle: 'disc' }}>{listItems.splice(0)}</ul>);
  };

  const flushTable = () => {
    if (!tableRows.length) return;
    const rows = tableRows.splice(0);
    // rows[0] = header cols, rows[1] = separator, rows[2+] = data
    const hdrs = rows[0] || [];
    const data = rows.filter((r, i) => i !== 1); // remove separator row
    // data[0] is headers, data[1+] are body rows
    const headerCols = data[0] || [];
    const bodyCols = data.slice(1);
    out.push(
      <div key={\`tbl\${out.length}\`} style={{ overflowX: 'auto', margin: '10px 0', borderRadius: 12 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875em', tableLayout: 'auto' }}>
          <thead>
            <tr>{headerCols.map((c, i) =>
              <th key={i} style={{ background: 'rgba(var(--acc-rgb,99,102,241),0.1)', border: '1px solid rgba(var(--acc-rgb,99,102,241),0.18)', padding: '7px 12px', textAlign: 'left', fontWeight: 800, fontSize: '0.82em', color: 'var(--accent)', whiteSpace: 'nowrap' }}>{c.trim()}</th>
            )}</tr>
          </thead>
          <tbody>
            {bodyCols.map((row, ri) =>
              <tr key={ri} style={{ background: ri % 2 === 0 ? 'transparent' : 'rgba(var(--acc-rgb,99,102,241),0.03)' }}>
                {row.map((c, ci) =>
                  <td key={ci} style={{ border: '1px solid rgba(var(--acc-rgb,99,102,241),0.12)', padding: '6px 12px', lineHeight: 1.5, verticalAlign: 'top' }}>{renderMdInline(c.trim())}</td>
                )}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };

  const parseTableRow = line => line.split('|').slice(1, -1);
  const isSepRow = cols => cols.every(c => /^[-: ]+$/.test(c));

  lines.forEach((line, idx) => {
    // Code fences
    if (line.startsWith('\`\`\`')) {
      if (!inCode) { flushList(); flushTable(); inCode = true; codeLines = []; }
      else {
        inCode = false;
        out.push(<pre key={\`code\${idx}\`} style={{ background: 'rgba(0,0,0,0.06)', borderRadius: 10, padding: '10px 14px', overflowX: 'auto', margin: '8px 0', fontSize: '0.81em', fontFamily: 'monospace', lineHeight: 1.55, color: 'var(--text)' }}><code>{codeLines.join('\\n')}</code></pre>);
        codeLines = [];
      }
      return;
    }
    if (inCode) { codeLines.push(line); return; }

    // Tables
    const tl = line.trim();
    if (tl.startsWith('|') && tl.endsWith('|')) {
      flushList();
      const cols = parseTableRow(line);
      if (!isSepRow(cols)) tableRows.push(cols);
      else tableRows.push(cols); // keep sep for index tracking
      return;
    } else if (tableRows.length) { flushTable(); }

    const h3 = line.match(/^### (.+)$/); if (h3) { flushList(); out.push(<p key={idx} style={{ fontWeight: 800, margin: '12px 0 3px', fontSize: '1.02em' }}>{renderMdInline(h3[1])}</p>); return; }
    const h2 = line.match(/^## (.+)$/); if (h2) { flushList(); out.push(<p key={idx} style={{ fontWeight: 900, fontSize: '1.08em', margin: '14px 0 4px', borderBottom: '1px solid rgba(var(--acc-rgb,99,102,241),0.12)', paddingBottom: 4 }}>{renderMdInline(h2[1])}</p>); return; }
    const h1 = line.match(/^# (.+)$/); if (h1) { flushList(); out.push(<p key={idx} style={{ fontWeight: 900, fontSize: '1.2em', margin: '16px 0 5px' }}>{renderMdInline(h1[1])}</p>); return; }
    const li = line.match(/^\\s*[-*•+] (.+)$/) || line.match(/^\\s*\\d+\\.\\s+(.+)$/);
    if (li) { listItems.push(<li key={idx} style={{ marginBottom: 3, lineHeight: 1.55 }}>{renderMdInline(li[1])}</li>); return; }
    if (/^---+$/.test(tl)) { flushList(); out.push(<hr key={idx} style={{ border: 'none', borderTop: '1px solid rgba(var(--acc-rgb,99,102,241),0.15)', margin: '10px 0' }} />); return; }
    if (!tl) { flushList(); if (out.length) out.push(<div key={idx} style={{ height: 6 }} />); return; }
    flushList();
    out.push(<div key={idx} style={{ lineHeight: 1.65 }}>{renderMdInline(line)}</div>);
  });
  flushList();
  flushTable();
  return <>{out}</>;
};`;

if (code.includes(OLD_RENDER_MD)) {
  code = code.replace(OLD_RENDER_MD, NEW_RENDER_MD);
  console.log('✔ renderMarkdown patched');
} else {
  console.error('✘ renderMarkdown old string NOT found');
}

// ─── 2. Mobile header: hide when in chat view ───────────────────────────────
const OLD_HEADER = `      <header className="design-header shrink-0 relative">`;
const NEW_HEADER = `      <header className={\`design-header shrink-0 relative\${view === 'chat' ? ' chat-header-hide' : ''}\`}>`;
if (code.includes(OLD_HEADER)) {
  code = code.replace(OLD_HEADER, NEW_HEADER);
  console.log('✔ Mobile header fix applied');
} else {
  console.error('✘ Header old string NOT found');
}

fs.writeFileSync('src/App.jsx', code);
console.log('Done patching App.jsx. Now patching ChatView separately...');
