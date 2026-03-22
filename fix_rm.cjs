/**
 * Step 1: Replace renderMarkdown with table + code block support
 */
const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

const RM_START = code.indexOf('const renderMarkdown = (text) => {');
const RM_END   = code.indexOf('return <>{out}</>;\r\n};', RM_START) + 'return <>{out}</>;\r\n};'.length;

console.log('RM_START:', RM_START, 'RM_END:', RM_END);

const NEW_RENDER_MD = `const renderMarkdown = (text) => {
  if (!text) return null;
  const lines = text.replace(/\\r\\n/g, '\\n').split('\\n');
  const out = [];
  let listItems = [];
  let tableRows = [];
  let inCode = false;
  let codeLines = [];

  const flushList = () => {
    if (!listItems.length) return;
    out.push(<ul key={'ul' + out.length} style={{ paddingLeft: 18, margin: '4px 0', listStyle: 'disc' }}>{listItems.splice(0)}</ul>);
  };

  const flushTable = () => {
    if (!tableRows.length) return;
    const rows = tableRows.splice(0).filter(row => !row.every(c => /^[-: ]+$/.test(c)));
    if (!rows.length) return;
    const [headerCols, ...bodyRows] = rows;
    out.push(
      <div key={'tbl' + out.length} style={{ overflowX: 'auto', margin: '12px 0', borderRadius: 12, border: '1px solid rgba(99,102,241,0.18)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85em', tableLayout: 'auto', minWidth: 300 }}>
          <thead>
            <tr>{headerCols.map((c, i) =>
              <th key={i} style={{ background: 'rgba(99,102,241,0.08)', padding: '8px 12px', textAlign: 'left', fontWeight: 800, fontSize: '0.8em', color: 'var(--accent)', whiteSpace: 'nowrap', borderBottom: '1.5px solid rgba(99,102,241,0.2)' }}>{renderMdInline(c.trim())}</th>
            )}</tr>
          </thead>
          <tbody>
            {bodyRows.map((row, ri) =>
              <tr key={ri} style={{ background: ri % 2 === 0 ? 'transparent' : 'rgba(99,102,241,0.03)', borderBottom: '1px solid rgba(99,102,241,0.08)' }}>
                {row.map((c, ci) =>
                  <td key={ci} style={{ padding: '7px 12px', lineHeight: 1.5, verticalAlign: 'top', borderRight: ci < row.length - 1 ? '1px solid rgba(99,102,241,0.08)' : 'none' }}>{renderMdInline(c.trim())}</td>
                )}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };

  lines.forEach((line, idx) => {
    if (/^\`\`\`/.test(line)) {
      if (!inCode) { flushList(); flushTable(); inCode = true; codeLines = []; }
      else {
        inCode = false;
        out.push(<pre key={'code' + idx} style={{ background: 'rgba(0,0,0,0.08)', borderRadius: 10, padding: '10px 14px', overflowX: 'auto', margin: '8px 0', fontSize: '0.82em', fontFamily: 'ui-monospace,Menlo,monospace', lineHeight: 1.55 }}><code>{codeLines.join('\\n')}</code></pre>);
        codeLines = [];
      }
      return;
    }
    if (inCode) { codeLines.push(line); return; }
    const tl = line.trim();
    if (tl.startsWith('|') && tl.endsWith('|')) { flushList(); tableRows.push(tl.split('|').slice(1, -1)); return; }
    else if (tableRows.length) flushTable();
    const bq = line.match(/^> ?(.*)/);
    if (bq) { flushList(); out.push(<div key={idx} style={{ borderLeft: '3px solid var(--accent)', paddingLeft: 12, margin: '4px 0', opacity: 0.8, fontStyle: 'italic' }}>{renderMdInline(bq[1])}</div>); return; }
    const h3 = line.match(/^### (.+)$/); if (h3) { flushList(); out.push(<p key={idx} style={{ fontWeight: 800, margin: '12px 0 3px', fontSize: '1.0em' }}>{renderMdInline(h3[1])}</p>); return; }
    const h2 = line.match(/^## (.+)$/); if (h2) { flushList(); out.push(<p key={idx} style={{ fontWeight: 900, fontSize: '1.06em', margin: '14px 0 4px', borderBottom: '1px solid rgba(99,102,241,0.12)', paddingBottom: 3 }}>{renderMdInline(h2[1])}</p>); return; }
    const h1 = line.match(/^# (.+)$/); if (h1) { flushList(); out.push(<p key={idx} style={{ fontWeight: 900, fontSize: '1.15em', margin: '16px 0 5px' }}>{renderMdInline(h1[1])}</p>); return; }
    const li = line.match(/^\\s*[-*+] (.+)$/) || line.match(/^\\s*\\d+\\.\\s+(.+)$/);
    if (li) { listItems.push(<li key={idx} style={{ marginBottom: 3, lineHeight: 1.55 }}>{renderMdInline(li[1])}</li>); return; }
    if (/^---+$/.test(tl)) { flushList(); out.push(<hr key={idx} style={{ border: 'none', borderTop: '1px solid rgba(99,102,241,0.15)', margin: '10px 0' }} />); return; }
    if (!tl) { flushList(); if (out.length) out.push(<div key={idx} style={{ height: 6 }} />); return; }
    flushList();
    out.push(<div key={idx} style={{ lineHeight: 1.65 }}>{renderMdInline(line)}</div>);
  });
  flushList();
  flushTable();
  return <>{out}</>;
};`;

code = code.slice(0, RM_START) + NEW_RENDER_MD + code.slice(RM_END);
fs.writeFileSync('src/App.jsx', code);
console.log('✔ renderMarkdown replaced. New file size:', code.length);
