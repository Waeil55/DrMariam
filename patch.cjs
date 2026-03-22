const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Add saving activeId and view
code = code.replace(/saveState\('mindMaps', mindMaps\), saveState\('timelines', timelines\)\]\);/, "saveState('mindMaps', mindMaps), saveState('timelines', timelines), saveState('activeId', activeId), saveState('view', view)]);");
code = code.replace(/mindMaps, timelines, loaded\]\);/, "mindMaps, timelines, activeId, view, loaded]);");

// 2. Add loading activeId and view
code = code.replace(/getState\('docPages'\), getState\('mindMaps'\), getState\('timelines'\)\]\);/, "getState('docPages'), getState('mindMaps'), getState('timelines'), getState('activeId'), getState('view')]);");
code = code.replace(/const \[d, fc, ex, ca, no, ch, st, od, dp, mm, tl\] = await Promise\.all/, "const [d, fc, ex, ca, no, ch, st, od, dp, mm, tl, actId, savedView] = await Promise.all");

code = code.replace(/if \(st\) setSettings\(p => \(\{ \.\.\.DEFAULT_SETTINGS, \.\.\.p, \.\.\.st \}\)\);/, "if (st) setSettings(p => ({ ...DEFAULT_SETTINGS, ...p, ...st }));\n          if (actId) setActiveId(actId);\n          if (savedView && savedView === 'reader') setView(savedView);\n          else if (od && od.length > 0) setActiveId(od[od.length-1]);");

// 3. Fix NAV_ITEMS dis property
code = code.replace(/\{ icon: BookMarked, label: 'Reader', v: 'reader', dis: !activeId \},/g, "{ icon: BookMarked, label: 'Reader', v: 'reader' },");

// 4. Update the onClick logic
code = code.replace(/onClick=\{\(\) => \{ if \(!dis\) \{ if \(v === 'reader' && activeId\) setView\('reader'\); else if \(v !== 'reader'\) setView\(v\); \} \}\}/g, 
  "onClick={() => { if (dis) return; if (v === 'reader') { if (activeId) setView('reader'); else if (docs && docs.length > 0) { const topDoc = docs[0]; setActiveId(topDoc.id); setOpenDocs(p => p.includes(topDoc.id) ? p : [...p, topDoc.id]); setView('reader'); } else setView('library'); } else setView(v); }}"
);

fs.writeFileSync('src/App.jsx', code);
console.log('App.jsx patched via JS script!');