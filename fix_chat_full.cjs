/**
 * Full patch script: renderMarkdown + ChatView with Topics + CSS fix
 */
const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// ─── 1. Replace renderMarkdown with table + code block version ───────────────
const start = code.indexOf('const renderMarkdown = (text) => {');
const marker = 'return <>{out}</>;\r\n};';
const end = code.indexOf(marker, start) + marker.length;
const NEW_RENDER_MD = `const renderMarkdown = (text) => {
  if (!text) return null;
  // Normalize line endings
  const lines = text.replace(/\\r\\n/g, '\\n').split('\\n');
  const out = [];
  let listItems = [];
  let tableRows = [];
  let inCode = false;
  let codeLang = '';
  let codeLines = [];

  const flushList = () => {
    if (!listItems.length) return;
    out.push(<ul key={\`ul\${out.length}\`} style={{ paddingLeft: 18, margin: '4px 0', listStyle: 'disc' }}>{listItems.splice(0)}</ul>);
  };

  const flushTable = () => {
    if (!tableRows.length) return;
    const rows = tableRows.splice(0);
    // Filter out separator rows (---|---) 
    const dataRows = rows.filter(row => !row.every(c => /^[-: ]+$/.test(c)));
    if (!dataRows.length) return;
    const headerCols = dataRows[0];
    const bodyRows = dataRows.slice(1);
    out.push(
      <div key={\`tbl\${out.length}\`} style={{ overflowX: 'auto', margin: '12px 0', borderRadius: 12, border: '1px solid rgba(var(--acc-rgb,99,102,241),0.18)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85em', tableLayout: 'auto', minWidth: 300 }}>
          <thead>
            <tr>{headerCols.map((c, i) =>
              <th key={i} style={{ background: 'rgba(var(--acc-rgb,99,102,241),0.08)', padding: '8px 12px', textAlign: 'left', fontWeight: 800, fontSize: '0.8em', color: 'var(--accent)', whiteSpace: 'nowrap', borderBottom: '1.5px solid rgba(var(--acc-rgb,99,102,241),0.2)' }}>{renderMdInline(c.trim())}</th>
            )}</tr>
          </thead>
          <tbody>
            {bodyRows.map((row, ri) =>
              <tr key={ri} style={{ background: ri % 2 === 0 ? 'transparent' : 'rgba(var(--acc-rgb,99,102,241),0.03)', borderBottom: '1px solid rgba(var(--acc-rgb,99,102,241),0.08)' }}>
                {row.map((c, ci) =>
                  <td key={ci} style={{ padding: '7px 12px', lineHeight: 1.5, verticalAlign: 'top', borderRight: ci < row.length - 1 ? '1px solid rgba(var(--acc-rgb,99,102,241),0.08)' : 'none' }}>{renderMdInline(c.trim())}</td>
                )}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };

  lines.forEach((line, idx) => {
    // Code fence detection
    if (/^\`\`\`/.test(line)) {
      if (!inCode) { flushList(); flushTable(); inCode = true; codeLang = line.slice(3).trim(); codeLines = []; }
      else {
        inCode = false;
        out.push(<pre key={\`code\${idx}\`} style={{ background: 'rgba(0,0,0,0.07)', borderRadius: 10, padding: '10px 14px', overflowX: 'auto', margin: '8px 0', fontSize: '0.81em', fontFamily: 'ui-monospace,Menlo,monospace', lineHeight: 1.55, color: 'var(--text)', border: '1px solid rgba(0,0,0,0.07)' }}><code>{codeLines.join('\\n')}</code></pre>);
        codeLines = [];
      }
      return;
    }
    if (inCode) { codeLines.push(line); return; }

    // Tables
    const tl = line.trim();
    if (tl.startsWith('|') && tl.endsWith('|')) {
      flushList();
      const cols = tl.split('|').slice(1, -1);
      tableRows.push(cols);
      return;
    } else if (tableRows.length) { flushTable(); }

    // Blockquotes
    const bq = line.match(/^>\\s?(.*)/);
    if (bq) { flushList(); out.push(<div key={idx} style={{ borderLeft: '3px solid var(--accent)', paddingLeft: 12, margin: '4px 0', opacity: 0.8, fontStyle: 'italic' }}>{renderMdInline(bq[1])}</div>); return; }

    const h3 = line.match(/^### (.+)$/); if (h3) { flushList(); out.push(<p key={idx} style={{ fontWeight: 800, margin: '12px 0 3px', fontSize: '1.0em' }}>{renderMdInline(h3[1])}</p>); return; }
    const h2 = line.match(/^## (.+)$/); if (h2) { flushList(); out.push(<p key={idx} style={{ fontWeight: 900, fontSize: '1.06em', margin: '14px 0 4px', borderBottom: '1px solid rgba(var(--acc-rgb,99,102,241),0.12)', paddingBottom: 3 }}>{renderMdInline(h2[1])}</p>); return; }
    const h1 = line.match(/^# (.+)$/); if (h1) { flushList(); out.push(<p key={idx} style={{ fontWeight: 900, fontSize: '1.15em', margin: '16px 0 5px' }}>{renderMdInline(h1[1])}</p>); return; }
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

code = code.slice(0, start) + NEW_RENDER_MD + code.slice(end);
console.log('✔ renderMarkdown upgraded');

// ─── 2. Replace ChatView ─────────────────────────────────────────────────────
const CHAT_START = code.indexOf('function ChatView({ settings, sessions, setSessions }) {');
const CHAT_END_MARKER = '/* ═══════════════════════════════════════════════════════════════════\n   SETTINGS VIEW';
const CHAT_END = code.indexOf(CHAT_END_MARKER, CHAT_START);

const NEW_CHAT = `function ChatView({ settings, sessions, setSessions }) {
  const [selSess, setSelSess] = useState(null);
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(() => window.innerWidth >= 1024);
  const [sessSearch, setSessSearch] = useState('');
  const [pinnedIds, setPinnedIds] = useState([]);
  const [contextMenu, setContextMenu] = useState(null);
  const [projects, setProjects] = useState([]);
  const [topics, setTopics] = useState([]);
  const [selProject, setSelProject] = useState(null);
  const [showNewProject, setShowNewProject] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectInstructions, setNewProjectInstructions] = useState('');
  const [showNewTopic, setShowNewTopic] = useState(false);
  const [newTopicName, setNewTopicName] = useState('');
  const [sidebarTab, setSidebarTab] = useState('chats');
  const [inputRows, setInputRows] = useState(1);
  const [hasStarted, setHasStarted] = useState(false);
  const endRef = useRef(null);
  const recogRef = useRef(null);
  const inputRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, loading]);

  const STARTERS = [
    { icon: '🧬', text: 'Explain a complex pharmacology concept' },
    { icon: '📋', text: 'Create a study plan for my exam' },
    { icon: '❓', text: 'Quiz me on controlled substances law' },
    { icon: '🔍', text: 'Compare drug mechanisms of action' },
    { icon: '🏥', text: 'Walk me through a clinical case' },
    { icon: '💊', text: 'Explain drug interactions for warfarin' },
  ];

  const toggleVoice = () => {
    if (listening) { recogRef.current?.stop(); setListening(false); return; }
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { alert('Voice not supported in this browser.'); return; }
    const r = new SR(); r.continuous = false; r.interimResults = true;
    r.onresult = e => { setInput(Array.from(e.results).map(r => r[0].transcript).join('')); };
    r.onend = () => setListening(false); r.onerror = () => setListening(false);
    r.start(); recogRef.current = r; setListening(true);
  };

  const newSession = () => { setSelSess(null); setMsgs([]); setHasStarted(false); setTimeout(() => inputRef.current?.focus(), 50); };

  const saveSession = useCallback((ms, id) => {
    if (!ms.filter(m => m.role === 'user').length) return;
    const sessId = id || selSess || Date.now().toString();
    const title = ms.find(m => m.role === 'user')?.content?.slice(0, 60) || 'New Chat';
    const sess = { id: sessId, title, messages: ms, updatedAt: new Date().toISOString(), msgCount: ms.filter(m => m.role === 'user').length, projectId: selProject || null };
    setSessions(p => { const ex = p.findIndex(s => s.id === sessId); return ex >= 0 ? [...p.slice(0, ex), sess, ...p.slice(ex + 1)] : [sess, ...p]; });
    setSelSess(sessId);
  }, [selSess, setSessions, selProject]);

  const loadSession = sess => {
    setSelSess(sess.id); setMsgs(sess.messages || []); setHasStarted(true);
    if (window.innerWidth < 1024) setSidebarOpen(false);
  };

  const deleteSession = id => {
    setSessions(p => p.filter(s => s.id !== id));
    setPinnedIds(p => p.filter(x => x !== id));
    if (selSess === id) { setSelSess(null); setMsgs([]); setHasStarted(false); }
    setContextMenu(null);
  };

  const copySession = id => {
    const sess = sessions.find(s => s.id === id);
    if (!sess) return;
    navigator.clipboard?.writeText(sess.messages.map(m => \`\${m.role === 'user' ? 'You' : 'MARIAM'}: \${m.content}\`).join('\\n\\n'));
    setContextMenu(null);
  };

  const createProject = () => {
    if (!newProjectName.trim()) return;
    const p = { id: Date.now().toString(), name: newProjectName.trim(), instructions: newProjectInstructions.trim(), color: ['#6366f1','#8b5cf6','#3b82f6','#10b981','#f59e0b','#ef4444'][Math.floor(Math.random()*6)], createdAt: new Date().toISOString() };
    setProjects(prev => [...prev, p]);
    setNewProjectName(''); setNewProjectInstructions(''); setShowNewProject(false);
  };

  const createTopic = () => {
    if (!newTopicName.trim()) return;
    const t = { id: Date.now().toString(), name: newTopicName.trim(), createdAt: new Date().toISOString() };
    setTopics(prev => [...prev, t]);
    setNewTopicName(''); setShowNewTopic(false);
  };

  const openTopic = (topic) => {
    setHasStarted(false);
    setMsgs([]);
    setSelSess(null);
    if (window.innerWidth < 1024) setSidebarOpen(false);
    // Build a rich hidden system prompt and fire it
    const hiddenPrompt = \`You are MARIAM, an expert medical educator and AI study assistant. The student wants a comprehensive deep-dive lesson on: "\${topic.name}".

Your task is to produce an outstanding, textbook-quality teaching response. Structure it as a complete lesson using:
- Clear headings (##) for major sections
- Bullet points and numbered lists for key facts
- **Bold** for essential terms, drug names, and concepts
- Markdown tables to compare mechanisms, classifications, or data
- Clinical pearls highlighted with 💊 or 🏥 emoji
- Memory aids or mnemonics where useful
- Real-world clinical examples

Cover these areas (when relevant):
1. Overview & Definition
2. Mechanism of Action / Pathophysiology
3. Classification (table if applicable)
4. Clinical Uses / Indications
5. Dosing & Administration (table)
6. Pharmacokinetics (ADME)
7. Side Effects / Adverse Reactions
8. Contraindications & Warnings
9. Drug Interactions
10. Monitoring Parameters
11. Clinical Pearls & High-Yield Facts

Be thorough, accurate, and educational. Format with great care so the student can study directly from this response.\`;

    const userMsg = \`Teach me everything about: \${topic.name}\`;
    setHasStarted(true);
    const newMsgs = [
      { role: 'user', content: userMsg, timestamp: Date.now() },
      { role: 'assistant', content: '', timestamp: Date.now() }
    ];
    setMsgs(newMsgs);
    setLoading(true);
    const sessId = Date.now().toString();
    setSelSess(sessId);
    callAIStreaming(hiddenPrompt + '\\n\\nUSER: ' + userMsg + '\\n\\nMARIAM:', chunk => {
      setMsgs(p => [...p.slice(0, -1), { role: 'assistant', content: chunk, timestamp: Date.now() }]);
    }, settings, 8000).catch(e => {
      setMsgs(p => [...p.slice(0, -1), { role: 'assistant', content: \`⚠️ \${e.message}\` }]);
    }).finally(() => setLoading(false));
  };

  const send = async (overrideMsg) => {
    const msg = overrideMsg || input;
    if (!msg.trim() || loading) return;
    setInput(''); setInputRows(1); setHasStarted(true);
    const sessId = selSess || Date.now().toString();
    if (!selSess) setSelSess(sessId);
    const newMsgs = [...msgs, { role: 'user', content: msg, timestamp: Date.now() }, { role: 'assistant', content: '', timestamp: Date.now() }];
    setMsgs(newMsgs); setLoading(true);
    try {
      const hist = newMsgs.slice(-12, -1).map(m => \`\${m.role === 'user' ? 'USER' : 'MARIAM'}: \${m.content}\`).join('\\n');
      const proj = selProject ? projects.find(p => p.id === selProject) : null;
      const projCtx = proj ? \`\\n\\nProject: \${proj.name}\${proj.instructions ? \`\\nInstructions: \${proj.instructions}\` : ''}\` : '';
      const sysPrompt = \`You are MARIAM, a brilliant AI study assistant specialized in medicine and pharmacy. Format responses with **bold** for key terms, ## headings for long answers, bullet points, tables when comparing items, and clinical examples.\${projCtx}\`;
      const prompt = \`\${sysPrompt}\\n\\nConversation:\\n\${hist}\\n\\nUSER: \${msg}\\n\\nMARIAM:\`;
      await callAIStreaming(prompt, chunk => { setMsgs(p => [...p.slice(0, -1), { role: 'assistant', content: chunk, timestamp: Date.now() }]); }, settings, 6000);
      const finalMsgs = newMsgs.map((m, i) => i === newMsgs.length - 1 ? m : m);
      setTimeout(() => saveSession(finalMsgs, sessId), 300);
    } catch (e) { setMsgs(p => [...p.slice(0, -1), { role: 'assistant', content: \`⚠️ \${e.message}\` }]); }
    finally { setLoading(false); }
  };

  const filteredSessions = useMemo(() => {
    let s = [...sessions];
    if (sidebarTab === 'projects' && selProject) s = s.filter(x => x.projectId === selProject);
    const q = sessSearch.toLowerCase();
    if (q) s = s.filter(x => x.title.toLowerCase().includes(q) || x.messages?.some(m => m.content?.toLowerCase().includes(q)));
    return s;
  }, [sessions, sessSearch, sidebarTab, selProject]);

  const pinned = filteredSessions.filter(s => pinnedIds.includes(s.id));
  const unpinned = filteredSessions.filter(s => !pinnedIds.includes(s.id)).sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  const groupByDate = (items) => {
    const today = new Date(); today.setHours(0,0,0,0);
    const yesterday = new Date(today); yesterday.setDate(yesterday.getDate()-1);
    const week = new Date(today); week.setDate(week.getDate()-7);
    const groups = { Today: [], Yesterday: [], 'Last 7 Days': [], 'Older': [] };
    items.forEach(s => {
      const d = new Date(s.updatedAt);
      if (d >= today) groups.Today.push(s);
      else if (d >= yesterday) groups.Yesterday.push(s);
      else if (d >= week) groups['Last 7 Days'].push(s);
      else groups.Older.push(s);
    });
    return groups;
  };
  const grouped = groupByDate(unpinned);

  const SessionItem = ({ s }) => (
    <button className={\`w-full flex items-start gap-2.5 px-3 py-2.5 rounded-xl text-left transition-all group relative \${selSess === s.id ? 'bg-[var(--accent)]/10 border border-[var(--accent)]/20' : 'hover:bg-black/5 dark:hover:bg-white/5 border border-transparent'}\`}
      onClick={() => loadSession(s)}>
      {s.projectId && <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: projects.find(p => p.id === s.projectId)?.color || '#6366f1' }} />}
      <div className="flex-1 min-w-0">
        <p className={\`text-sm truncate font-medium \${selSess === s.id ? 'text-[var(--accent)] font-bold' : ''}\`}>{s.title}</p>
        <p className="text-xs opacity-40 mt-0.5">{new Date(s.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} · {s.msgCount || 0} msgs</p>
      </div>
      <button className="opacity-0 group-hover:opacity-60 hover:!opacity-100 shrink-0 p-1 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 mt-1"
        onClick={e => { e.stopPropagation(); setContextMenu({ id: s.id, x: e.clientX, y: e.clientY }); }}>
        <MoreVertical size={14} />
      </button>
    </button>
  );

  const curSessData = sessions.find(s => s.id === selSess);
  const topicsFiltered = sessSearch ? topics.filter(t => t.name.toLowerCase().includes(sessSearch.toLowerCase())) : topics;

  return (
    <div className="flex h-full min-h-0 overflow-hidden" style={{ background: 'var(--bg)' }} onClick={() => contextMenu && setContextMenu(null)}>

      {/* Context menu */}
      {contextMenu && (
        <div className="fixed z-[9999] glass rounded-xl shadow-2xl border border-[color:var(--border2,var(--border))] py-1 min-w-[180px]"
          style={{ left: Math.min(contextMenu.x, window.innerWidth - 200), top: Math.min(contextMenu.y, window.innerHeight - 140) }}>
          <button onClick={() => { setPinnedIds(p => p.includes(contextMenu.id) ? p.filter(x => x !== contextMenu.id) : [...p, contextMenu.id]); setContextMenu(null); }}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium hover:bg-[var(--accent)]/10 transition-colors">
            <Pin size={15} />{pinnedIds.includes(contextMenu.id) ? 'Unpin' : 'Pin to top'}
          </button>
          <button onClick={() => copySession(contextMenu.id)} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium hover:bg-[var(--accent)]/10 transition-colors">
            <Copy size={15} />Copy transcript
          </button>
          <div className="my-1 border-t border-[color:var(--border2,var(--border))]" />
          <button onClick={() => deleteSession(contextMenu.id)} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-red-500 hover:bg-red-500/10 transition-colors">
            <Trash2 size={15} />Delete chat
          </button>
        </div>
      )}

      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-[40]" style={{ background: 'rgba(0,0,0,0.55)' }} onClick={() => setSidebarOpen(false)} />
      )}

      {/* ── SIDEBAR ── */}
      <div className={\`flex flex-col border-r border-[color:var(--border2,var(--border))] transition-all duration-300 shrink-0 z-[41] \${sidebarOpen ? 'w-72' : 'w-0 overflow-hidden'} lg:relative absolute inset-y-0 left-0\`}
        style={{ background: 'var(--bg)' }}>

        <div className="flex items-center justify-between px-4 py-3 border-b border-[color:var(--border2,var(--border))] shrink-0">
          <span className="text-base font-black">MARIAM</span>
          <div className="flex items-center gap-1">
            <button onClick={newSession} className="w-8 h-8 btn-accent rounded-xl flex items-center justify-center shadow-sm" title="New chat">
              <Plus size={18} />
            </button>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden w-8 h-8 glass rounded-xl flex items-center justify-center opacity-60"><X size={18} /></button>
          </div>
        </div>

        <div className="px-3 py-2 shrink-0">
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" />
            <input value={sessSearch} onChange={e => setSessSearch(e.target.value)} placeholder="Search…"
              className="w-full bg-black/5 dark:bg-white/5 rounded-xl pl-9 pr-3 py-2 text-sm outline-none border border-transparent focus:border-[var(--accent)]/40 text-[var(--text)]" />
          </div>
        </div>

        {/* Tabs: Chats | Projects | Topics */}
        <div className="flex border-b border-[color:var(--border2,var(--border))] shrink-0 px-2 gap-0.5">
          {[['chats', 'Chats', MessageSquare], ['projects', 'Projects', FolderOpen], ['topics', 'Topics', BookA]].map(([id, lbl, Icon]) => (
            <button key={id} onClick={() => setSidebarTab(id)}
              className={\`flex-1 flex items-center justify-center gap-1 px-1 py-2.5 text-[10px] font-black uppercase tracking-wider border-b-2 transition-colors -mb-px
                \${sidebarTab === id ? 'border-[var(--accent)] text-[var(--accent)]' : 'border-transparent opacity-50 hover:opacity-80'}\`}>
              <Icon size={12} />{lbl}
            </button>
          ))}
        </div>

        {/* CHATS TAB */}
        {sidebarTab === 'chats' && (
          <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar py-2">
            {pinned.length > 0 && (
              <div className="mb-2">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-30 px-4 py-1 flex items-center gap-1"><Pin size={9} />Pinned</p>
                {pinned.map(s => <SessionItem key={s.id} s={s} />)}
                <div className="mx-3 my-2 border-t border-[color:var(--border2,var(--border))]" />
              </div>
            )}
            {Object.entries(grouped).map(([grp, items]) => items.length > 0 && (
              <div key={grp} className="mb-3">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-30 px-4 py-1">{grp}</p>
                {items.map(s => <SessionItem key={s.id} s={s} />)}
              </div>
            ))}
            {!sessions.length && (
              <div className="text-center py-16 px-4 opacity-30">
                <MessageSquare size={32} className="mx-auto mb-3" />
                <p className="text-sm font-bold">No chats yet</p>
                <p className="text-xs mt-1">Start a conversation</p>
              </div>
            )}
          </div>
        )}

        {/* PROJECTS TAB */}
        {sidebarTab === 'projects' && (
          <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar py-2">
            <button onClick={() => setShowNewProject(true)} className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-bold text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-colors">
              <Plus size={16} />New Project
            </button>
            {showNewProject && (
              <div className="mx-3 mb-3 p-3 rounded-xl border border-[color:var(--border2,var(--border))] space-y-2.5 bg-[var(--surface,rgba(255,255,255,0.95))]">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-40">New Project</p>
                <input value={newProjectName} onChange={e => setNewProjectName(e.target.value)} placeholder="Project name…" autoFocus
                  className="w-full text-sm bg-transparent outline-none border-b border-[color:var(--border2,var(--border))] pb-1.5 font-bold text-[var(--text)] placeholder:font-normal placeholder:opacity-40" />
                <textarea value={newProjectInstructions} onChange={e => setNewProjectInstructions(e.target.value)}
                  placeholder="Custom instructions (optional)…" rows={3}
                  className="w-full text-xs bg-black/5 dark:bg-white/5 rounded-lg px-2.5 py-2 outline-none resize-none border border-[color:var(--border2,var(--border))] focus:border-[var(--accent)]/50 text-[var(--text)] placeholder:opacity-40" />
                <div className="flex gap-2">
                  <button onClick={createProject} className="flex-1 py-2 btn-accent rounded-lg text-xs font-black">Create</button>
                  <button onClick={() => { setShowNewProject(false); setNewProjectName(''); setNewProjectInstructions(''); }} className="flex-1 py-2 rounded-lg text-xs font-black glass opacity-70">Cancel</button>
                </div>
              </div>
            )}
            {[{ id: null, name: 'All Chats', color: '#6366f1' }, ...projects].map(p => (
              <button key={p.id || 'all'} onClick={() => { setSelProject(p.id); setSidebarTab(p.id ? 'projects' : 'chats'); }}
                className={\`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-left transition-all \${selProject === p.id ? 'bg-[var(--accent)]/10' : 'hover:bg-black/5 dark:hover:bg-white/5'}\`}>
                <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: p.color }} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold truncate">{p.name}</p>
                  <p className="text-xs opacity-40">{sessions.filter(s => s.projectId === p.id).length} chats</p>
                </div>
                {p.id && <button onClick={e => { e.stopPropagation(); setProjects(prev => prev.filter(x => x.id !== p.id)); }} className="w-6 h-6 rounded-lg hover:bg-red-500/10 flex items-center justify-center opacity-0 group-hover:opacity-60"><Trash2 size={12} className="text-red-500" /></button>}
              </button>
            ))}
            {projects.length === 0 && !showNewProject && (
              <div className="text-center py-12 px-4 opacity-30"><FolderOpen size={32} className="mx-auto mb-3" /><p className="text-sm font-bold">No projects yet</p></div>
            )}
          </div>
        )}

        {/* TOPICS TAB */}
        {sidebarTab === 'topics' && (
          <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar py-2">
            <button onClick={() => setShowNewTopic(true)} className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-bold text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-colors">
              <Plus size={16} />New Topic
            </button>
            {showNewTopic && (
              <div className="mx-3 mb-3 p-3 rounded-xl border border-[color:var(--border2,var(--border))] space-y-2.5 bg-[var(--surface,rgba(255,255,255,0.95))]">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-40">New Topic</p>
                <input value={newTopicName} onChange={e => setNewTopicName(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && createTopic()}
                  placeholder="e.g. Tylenol, Warfarin, Renal Dosing…" autoFocus
                  className="w-full text-sm bg-transparent outline-none border-b border-[color:var(--border2,var(--border))] pb-1.5 font-bold text-[var(--text)] placeholder:font-normal placeholder:opacity-40" />
                <div className="flex gap-2">
                  <button onClick={createTopic} className="flex-1 py-2 btn-accent rounded-lg text-xs font-black">Generate Lesson</button>
                  <button onClick={() => { setShowNewTopic(false); setNewTopicName(''); }} className="flex-1 py-2 rounded-lg text-xs font-black glass opacity-70">Cancel</button>
                </div>
              </div>
            )}
            {topicsFiltered.length === 0 && !showNewTopic && (
              <div className="text-center py-12 px-4 opacity-30">
                <BookA size={32} className="mx-auto mb-3" />
                <p className="text-sm font-bold">No topics yet</p>
                <p className="text-xs mt-1">Add a drug or concept to get a full lesson</p>
              </div>
            )}
            {topicsFiltered.map(t => (
              <div key={t.id} className="flex items-center group px-3 py-1">
                <button onClick={() => openTopic(t)} className="flex-1 flex items-center gap-3 px-2 py-2.5 rounded-xl text-left hover:bg-[var(--accent)]/8 transition-all">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent2,var(--accent))] flex items-center justify-center shrink-0">
                    <BookA size={14} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold truncate">{t.name}</p>
                    <p className="text-xs opacity-40">Tap to load full lesson</p>
                  </div>
                  <ChevronRight size={14} className="opacity-30 shrink-0" />
                </button>
                <button onClick={() => setTopics(p => p.filter(x => x.id !== t.id))}
                  className="opacity-0 group-hover:opacity-60 hover:!opacity-100 w-7 h-7 rounded-lg hover:bg-red-500/10 flex items-center justify-center ml-1">
                  <Trash2 size={12} className="text-red-500" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Sidebar footer */}
        <div className="shrink-0 p-3 border-t border-[color:var(--border2,var(--border))]">
          <div className="flex items-center gap-2 px-2 py-1.5 text-xs opacity-40">
            <Brain size={13} />
            <span className="font-bold">{sessions.length} chats · {topics.length} topics</span>
          </div>
        </div>
      </div>

      {/* ── MAIN CHAT AREA ── */}
      <div className="flex-1 flex flex-col min-h-0 min-w-0 relative">

        {/* Top bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-[color:var(--border2,var(--border))] shrink-0" style={{ backdropFilter: 'blur(20px)', background: 'var(--surface,var(--card))' }}>
          <button onClick={() => setSidebarOpen(o => !o)}
            className="w-9 h-9 glass rounded-xl flex items-center justify-center opacity-60 hover:opacity-100 shrink-0 transition-all">
            <History size={18} />
          </button>
          <div className="flex-1 min-w-0">
            {curSessData?.projectId && (
              <div className="flex items-center gap-1.5 mb-0.5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: projects.find(p => p.id === curSessData.projectId)?.color || '#6366f1' }} />
                <span className="text-xs opacity-50 font-bold">{projects.find(p => p.id === curSessData.projectId)?.name}</span>
              </div>
            )}
            <p className="text-sm font-black truncate">{curSessData?.title || 'New Conversation'}</p>
          </div>
          <div className="flex items-center gap-1">
            {msgs.length > 0 && (
              <button onClick={() => navigator.clipboard?.writeText(msgs.map(m => \`\${m.role === 'user' ? 'You' : 'MARIAM'}: \${m.content}\`).join('\\n\\n'))}
                className="w-9 h-9 glass rounded-xl flex items-center justify-center opacity-60 hover:opacity-100 transition-all" title="Copy transcript">
                <Copy size={16} />
              </button>
            )}
            <button onClick={newSession} className="flex items-center gap-1.5 px-3 py-2 glass rounded-xl text-xs font-black opacity-60 hover:opacity-100 transition-all">
              <Plus size={14} />New
            </button>
          </div>
        </div>

        {/* Messages / Welcome screen */}
        <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar" ref={scrollContainerRef}>
          {!hasStarted ? (
            <div className="flex flex-col items-center justify-center min-h-full p-6 gap-8">
              <div className="text-center space-y-3">
                <div className="relative inline-block">
                  <img src={MARIAM_IMG} className="w-20 h-20 rounded-2xl object-cover shadow-2xl border-2 border-[color:var(--border2,var(--border))]" alt="MARIAM AI" />
                  <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 bg-emerald-500 rounded-full border-2 border-[var(--bg)] flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
                <h1 className="text-2xl font-black">What can I help you study?</h1>
                <p className="text-sm opacity-50 max-w-sm">Your AI study companion — precise, thorough, and always ready</p>
              </div>

              {/* Topics quick-access */}
              {topics.length > 0 && (
                <div className="w-full max-w-2xl">
                  <p className="text-xs font-black uppercase tracking-widest opacity-40 mb-2 flex items-center gap-1.5"><BookA size={11} />Your Topics</p>
                  <div className="flex flex-wrap gap-2">
                    {topics.map(t => (
                      <button key={t.id} onClick={() => openTopic(t)}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-bold border border-[var(--accent)]/20 bg-[var(--accent)]/5 hover:bg-[var(--accent)]/12 hover:border-[var(--accent)]/40 transition-all text-[var(--accent)]">
                        <BookA size={12} />{t.name}
                      </button>
                    ))}
                    <button onClick={() => { setSidebarOpen(true); setSidebarTab('topics'); setShowNewTopic(true); }}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-bold border border-dashed border-[var(--accent)]/30 text-[var(--accent)]/60 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all">
                      <Plus size={12} />Add Topic
                    </button>
                  </div>
                </div>
              )}

              {/* Starter suggestions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-2xl">
                {STARTERS.map(s => (
                  <button key={s.text} onClick={() => send(s.text)}
                    className="glass rounded-2xl p-4 text-left hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/5 transition-all border border-[color:var(--border2,var(--border))] group">
                    <div className="text-2xl mb-2">{s.icon}</div>
                    <p className="text-sm font-bold group-hover:text-[var(--accent)] transition-colors">{s.text}</p>
                  </button>
                ))}
              </div>

              {topics.length === 0 && (
                <button onClick={() => { setSidebarOpen(true); setSidebarTab('topics'); setShowNewTopic(true); }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-black border-2 border-dashed border-[var(--accent)]/30 text-[var(--accent)]/60 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all">
                  <BookA size={16} />Add a Study Topic for deep lessons
                </button>
              )}
            </div>
          ) : (
            <div className="max-w-3xl mx-auto py-6 px-4 space-y-6">
              {msgs.map((m, i) => (
                <div key={i} className={\`flex gap-3 \${m.role === 'user' ? 'flex-row-reverse' : ''} group\`}>
                  <div className={\`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-1 \${m.role === 'user' ? 'bg-[var(--accent)]' : 'overflow-hidden border border-[color:var(--border2,var(--border))]'}\`}>
                    {m.role === 'user' ? <UserCircle2 size={18} className="text-white" /> : <img src={MARIAM_IMG} className="w-full h-full object-cover" alt="AI" />}
                  </div>
                  <div className={\`flex-1 max-w-[88%] flex flex-col gap-1.5 \${m.role === 'user' ? 'items-end' : ''}\`}>
                    <div className={\`px-4 py-3 rounded-2xl text-sm leading-relaxed \${m.role === 'user' ? 'bg-[var(--accent)] text-white rounded-tr-sm max-w-[82%]' : 'glass rounded-tl-sm border border-[color:var(--border2,var(--border))]'}\`}>
                      {m.role === 'assistant' ? (
                        <div className="prose-custom">{m.content ? renderMarkdown(m.content) : <span className="opacity-30 animate-pulse text-lg">▊</span>}</div>
                      ) : (
                        <p className="whitespace-pre-wrap">{m.content}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-2 px-1">
                      <button onClick={() => navigator.clipboard?.writeText(m.content)}
                        className="opacity-0 group-hover:opacity-40 hover:!opacity-80 text-xs font-bold flex items-center gap-1 transition-opacity">
                        <Copy size={11} />Copy
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-xl overflow-hidden border border-[color:var(--border2,var(--border))] shrink-0 mt-1"><img src={MARIAM_IMG} className="w-full h-full object-cover" alt="AI" /></div>
                  <div className="glass rounded-2xl rounded-tl-sm px-4 py-3.5 flex items-center gap-1.5 border border-[color:var(--border2,var(--border))]">
                    {[0,1,2].map(i => <div key={i} className="w-2 h-2 bg-[var(--accent)] rounded-full animate-bounce" style={{ animationDelay: \`\${i * 0.15}s\` }} />)}
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>
          )}
        </div>

        {/* Input area */}
        <div className="shrink-0 px-4 py-3 border-t border-[color:var(--border2,var(--border))]" style={{ backdropFilter: 'blur(20px)', background: 'var(--surface,var(--card))' }}>
          <div className="max-w-3xl mx-auto">
            {selProject && (
              <div className="flex items-center gap-2 mb-2 px-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: projects.find(p => p.id === selProject)?.color }} />
                <span className="text-xs font-bold opacity-60">{projects.find(p => p.id === selProject)?.name}</span>
                <button onClick={() => setSelProject(null)} className="opacity-40 hover:opacity-80 ml-1"><X size={11} /></button>
              </div>
            )}
            <div className="glass rounded-2xl border border-[color:var(--border2,var(--border))] focus-within:border-[var(--accent)]/50 transition-colors shadow-lg">
              <textarea ref={inputRef} value={input}
                onChange={e => { setInput(e.target.value); setInputRows(Math.min(8, e.target.value.split('\\n').length + 1)); }}
                onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
                placeholder="Message MARIAM… (Shift+Enter for new line)" disabled={loading} rows={inputRows}
                className="w-full bg-transparent px-4 pt-3.5 pb-2 text-sm outline-none resize-none custom-scrollbar text-[var(--text)] min-h-[48px]" />
              <div className="flex items-center justify-between px-3 pb-2.5">
                <div className="flex items-center gap-1">
                  <button onClick={toggleVoice}
                    className={\`w-8 h-8 rounded-xl flex items-center justify-center transition-all \${listening ? 'bg-red-500 text-white animate-pulse' : 'opacity-50 hover:opacity-100 hover:bg-black/10 dark:hover:bg-white/10'}\`} title="Voice input">
                    {listening ? <MicOff size={15} /> : <Mic size={15} />}
                  </button>
                  {topics.length > 0 && (
                    <div className="relative group/topics">
                      <button className="w-8 h-8 rounded-xl flex items-center justify-center opacity-50 hover:opacity-100 hover:bg-black/10 dark:hover:bg-white/10 transition-all" title="Load a topic">
                        <BookA size={15} />
                      </button>
                      <div className="absolute bottom-10 left-0 hidden group-hover/topics:flex flex-col glass rounded-xl border border-[color:var(--border2,var(--border))] shadow-xl min-w-[180px] py-1 z-50 max-h-48 overflow-y-auto">
                        {topics.map(t => (
                          <button key={t.id} onClick={() => openTopic(t)} className="flex items-center gap-2.5 px-3 py-2 text-sm hover:bg-[var(--accent)]/10 transition-colors text-left">
                            <BookA size={13} className="text-[var(--accent)] shrink-0" />{t.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  {projects.length > 0 && (
                    <div className="relative group/proj">
                      <button className="w-8 h-8 rounded-xl flex items-center justify-center opacity-50 hover:opacity-100 hover:bg-black/10 dark:hover:bg-white/10 transition-all" title="Select project">
                        <FolderOpen size={15} />
                      </button>
                      <div className="absolute bottom-10 left-0 hidden group-hover/proj:flex flex-col glass rounded-xl border border-[color:var(--border2,var(--border))] shadow-xl min-w-[160px] py-1 z-50">
                        {projects.map(p => (
                          <button key={p.id} onClick={() => setSelProject(p.id)} className="flex items-center gap-2.5 px-3 py-2 text-sm hover:bg-[var(--accent)]/10 transition-colors">
                            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.color }} />{p.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <button onClick={() => send()} disabled={loading || !input.trim()}
                  className="w-9 h-9 bg-[var(--accent)] disabled:opacity-30 rounded-xl text-white flex items-center justify-center shadow-lg transition-all hover:opacity-90 active:scale-95">
                  {loading ? <Loader2 size={17} className="animate-spin" /> : <Send size={15} />}
                </button>
              </div>
            </div>
            <p className="text-[10px] text-center opacity-20 font-medium mt-2">MARIAM may make errors. Always verify critical medical information.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

`;

if (CHAT_START === -1) { console.error('✘ ChatView start not found'); process.exit(1); }
if (CHAT_END === -1) { console.error('✘ ChatView end not found'); process.exit(1); }
code = code.slice(0, CHAT_START) + NEW_CHAT + code.slice(CHAT_END);
console.log('✔ ChatView replaced with Topics version');

fs.writeFileSync('src/App.jsx', code);
console.log('✔ App.jsx saved');
