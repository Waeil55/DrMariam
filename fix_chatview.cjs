/**
 * Replace ChatView with full redesign: Chats + Projects + Topics sidebar
 */
const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

const CS = code.indexOf('function ChatView({ settings, sessions, setSessions }) {');
const SETTINGS_IDX = code.indexOf('SETTINGS VIEW');
const CE = code.lastIndexOf('}\r\n\r\n', SETTINGS_IDX) + 2; // points right after the closing }

console.log('CS:', CS, 'CE:', CE);

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
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
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
    if (listening) { recogRef.current && recogRef.current.stop(); setListening(false); return; }
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { alert('Voice not supported in this browser.'); return; }
    const r = new SR(); r.continuous = false; r.interimResults = true;
    r.onresult = e => setInput(Array.from(e.results).map(r => r[0].transcript).join(''));
    r.onend = () => setListening(false); r.onerror = () => setListening(false);
    r.start(); recogRef.current = r; setListening(true);
  };

  const newChat = () => { setSelSess(null); setMsgs([]); setHasStarted(false); setTimeout(() => inputRef.current && inputRef.current.focus(), 50); };

  const saveSession = (ms, id) => {
    if (!ms.filter(m => m.role === 'user').length) return;
    const sessId = id || selSess || Date.now().toString();
    const title = (ms.find(m => m.role === 'user') || {}).content.slice(0, 60) || 'New Chat';
    const sess = { id: sessId, title, messages: ms, updatedAt: new Date().toISOString(), msgCount: ms.filter(m => m.role === 'user').length, projectId: selProject || null };
    setSessions(p => { const ex = p.findIndex(s => s.id === sessId); return ex >= 0 ? [...p.slice(0, ex), sess, ...p.slice(ex + 1)] : [sess, ...p]; });
    setSelSess(sessId);
  };

  const loadSession = s => {
    setSelSess(s.id); setMsgs(s.messages || []); setHasStarted(true);
    if (window.innerWidth < 1024) setSidebarOpen(false);
  };

  const deleteSession = id => {
    setSessions(p => p.filter(s => s.id !== id));
    setPinnedIds(p => p.filter(x => x !== id));
    if (selSess === id) { setSelSess(null); setMsgs([]); setHasStarted(false); }
    setContextMenu(null);
  };

  const createProject = () => {
    if (!newProjectName.trim()) return;
    const colors = ['#6366f1','#8b5cf6','#3b82f6','#10b981','#f59e0b','#ef4444'];
    const p = { id: Date.now().toString(), name: newProjectName.trim(), instructions: newProjectInstructions.trim(), color: colors[Math.floor(Math.random()*colors.length)], createdAt: new Date().toISOString() };
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
    setHasStarted(true); setMsgs([]); setSelSess(null);
    if (window.innerWidth < 1024) setSidebarOpen(false);
    const hiddenPrompt = 'You are MARIAM, an expert medical educator. The student wants a comprehensive deep-dive lesson on: "' + topic.name + '".\n\n' +
      'Produce an outstanding, textbook-quality teaching response. Structure it as a complete lesson:\n' +
      '- Use ## headings for major sections\n' +
      '- Use **bold** for key terms, drug names, and concepts\n' +
      '- Use Markdown tables to compare mechanisms, classifications, or data\n' +
      '- Use bullet points and numbered lists for key facts\n' +
      '- Add clinical pearls with \u{1F48A} or \u{1F3E5} emojis\n' +
      '- Include mnemonics or memory aids where useful\n\n' +
      'Cover: Overview, Mechanism of Action, Classification (with table), Clinical Uses, Dosing (table), Pharmacokinetics, Side Effects, Contraindications, Drug Interactions, Monitoring, Clinical Pearls.\n\n' +
      'Be thorough, accurate, richly formatted, and immediately useful for pharmacy/medical students.';
    const userMsg = 'Teach me everything about: ' + topic.name;
    const sessId = Date.now().toString();
    setSelSess(sessId);
    const initMsgs = [
      { role: 'user', content: userMsg, timestamp: Date.now() },
      { role: 'assistant', content: '', timestamp: Date.now() }
    ];
    setMsgs(initMsgs);
    setLoading(true);
    callAIStreaming(hiddenPrompt + '\n\nUSER: ' + userMsg + '\n\nMARIAM:', chunk => {
      setMsgs(p => [...p.slice(0, -1), { role: 'assistant', content: chunk, timestamp: Date.now() }]);
    }, settings, 8000)
    .catch(e => setMsgs(p => [...p.slice(0, -1), { role: 'assistant', content: '\u26a0\ufe0f ' + e.message }]))
    .finally(() => setLoading(false));
  };

  const send = async (overrideMsg) => {
    const msg = (overrideMsg || input).trim();
    if (!msg || loading) return;
    setInput(''); setInputRows(1); setHasStarted(true);
    const sessId = selSess || Date.now().toString();
    if (!selSess) setSelSess(sessId);
    const proj = selProject ? projects.find(p => p.id === selProject) : null;
    const projCtx = proj ? '\n\nProject: ' + proj.name + (proj.instructions ? '\nInstructions: ' + proj.instructions : '') : '';
    const sysPrompt = 'You are MARIAM, a brilliant AI study assistant specialized in medicine and pharmacy. Format responses with **bold** for key terms, ## headings for long answers, bullet points, and tables when comparing items.' + projCtx;
    const newMsgs = [...msgs, { role: 'user', content: msg, timestamp: Date.now() }, { role: 'assistant', content: '', timestamp: Date.now() }];
    setMsgs(newMsgs); setLoading(true);
    try {
      const hist = newMsgs.slice(-13, -1).map(m => (m.role === 'user' ? 'USER' : 'MARIAM') + ': ' + m.content).join('\n');
      const prompt = sysPrompt + '\n\nConversation:\n' + hist + '\n\nUSER: ' + msg + '\n\nMARIAM:';
      await callAIStreaming(prompt, chunk => {
        setMsgs(p => [...p.slice(0, -1), { role: 'assistant', content: chunk, timestamp: Date.now() }]);
      }, settings, 6000);
      setTimeout(() => saveSession(newMsgs, sessId), 400);
    } catch (e) {
      setMsgs(p => [...p.slice(0, -1), { role: 'assistant', content: '\u26a0\ufe0f ' + e.message }]);
    } finally { setLoading(false); }
  };

  const filteredSessions = useMemo(() => {
    let s = [...sessions];
    if (sidebarTab === 'projects' && selProject) s = s.filter(x => x.projectId === selProject);
    const q = sessSearch.toLowerCase();
    if (q) s = s.filter(x => x.title.toLowerCase().includes(q));
    return s.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  }, [sessions, sessSearch, sidebarTab, selProject]);

  const pinned = filteredSessions.filter(s => pinnedIds.includes(s.id));
  const unpinned = filteredSessions.filter(s => !pinnedIds.includes(s.id));

  const groupByDate = items => {
    const now = new Date(); now.setHours(0,0,0,0);
    const yest = new Date(now); yest.setDate(yest.getDate()-1);
    const week = new Date(now); week.setDate(week.getDate()-7);
    const g = { Today: [], Yesterday: [], 'Last 7 Days': [], Older: [] };
    items.forEach(s => {
      const d = new Date(s.updatedAt);
      if (d >= now) g.Today.push(s);
      else if (d >= yest) g.Yesterday.push(s);
      else if (d >= week) g['Last 7 Days'].push(s);
      else g.Older.push(s);
    });
    return g;
  };
  const grouped = groupByDate(unpinned);

  const SessItem = ({ s }) => (
    <button className={'w-full flex items-start gap-2.5 px-3 py-2.5 rounded-xl text-left transition-all group relative ' + (selSess === s.id ? 'bg-[var(--accent)]/10 border border-[var(--accent)]/25' : 'hover:bg-black/5 dark:hover:bg-white/5 border border-transparent')}
      onClick={() => loadSession(s)}>
      {s.projectId && <div className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0" style={{ backgroundColor: (projects.find(p => p.id === s.projectId) || {}).color || '#6366f1' }} />}
      <div className="flex-1 min-w-0">
        <p className={'text-sm truncate font-semibold ' + (selSess === s.id ? 'text-[var(--accent)]' : '')}>{s.title}</p>
        <p className="text-[10px] opacity-35 mt-0.5">{new Date(s.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} · {s.msgCount || 0} msgs</p>
      </div>
      <button className="opacity-0 group-hover:opacity-60 hover:!opacity-100 shrink-0 p-1 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 mt-0.5"
        onClick={e => { e.stopPropagation(); setContextMenu({ id: s.id, x: e.clientX, y: e.clientY }); }}>
        <MoreVertical size={13} />
      </button>
    </button>
  );

  const curSess = sessions.find(s => s.id === selSess);
  const topicsFiltered = sessSearch ? topics.filter(t => t.name.toLowerCase().includes(sessSearch.toLowerCase())) : topics;

  return (
    <div className="flex h-full min-h-0 overflow-hidden" style={{ background: 'var(--bg)' }} onClick={() => contextMenu && setContextMenu(null)}>

      {/* Context Menu */}
      {contextMenu && (
        <div className="fixed z-[9999] glass rounded-xl shadow-2xl border border-[color:var(--border2,var(--border))] py-1 min-w-[180px]"
          style={{ left: Math.min(contextMenu.x, window.innerWidth - 210), top: Math.min(contextMenu.y, window.innerHeight - 150) }}>
          <button onClick={() => { setPinnedIds(p => p.includes(contextMenu.id) ? p.filter(x => x !== contextMenu.id) : [...p, contextMenu.id]); setContextMenu(null); }}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold hover:bg-[var(--accent)]/10 transition-colors">
            <Pin size={14} />{pinnedIds.includes(contextMenu.id) ? 'Unpin' : 'Pin to top'}
          </button>
          <button onClick={() => { const s = sessions.find(x => x.id === contextMenu.id); if (s) navigator.clipboard && navigator.clipboard.writeText(s.messages.map(m => (m.role === 'user' ? 'You' : 'MARIAM') + ': ' + m.content).join('\n\n')); setContextMenu(null); }}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold hover:bg-[var(--accent)]/10 transition-colors">
            <Copy size={14} />Copy transcript
          </button>
          <div className="my-1 border-t border-[color:var(--border2,var(--border))]" />
          <button onClick={() => deleteSession(contextMenu.id)}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-500/10 transition-colors">
            <Trash2 size={14} />Delete chat
          </button>
        </div>
      )}

      {/* Mobile backdrop */}
      {sidebarOpen && <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setSidebarOpen(false)} />}

      {/* ── SIDEBAR ────────────────────────────────────────────────── */}
      <div className={'flex flex-col border-r border-[color:var(--border2,var(--border))] transition-all duration-300 shrink-0 lg:relative absolute inset-y-0 left-0 z-[41] ' + (sidebarOpen ? 'w-[280px]' : 'w-0 overflow-hidden')}
        style={{ background: 'var(--bg)' }}>

        {/* Sidebar header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[color:var(--border2,var(--border))] shrink-0">
          <span className="text-base font-black tracking-tight">MARIAM</span>
          <div className="flex items-center gap-1.5">
            <button onClick={newChat} className="w-8 h-8 btn-accent rounded-xl flex items-center justify-center shadow-sm" title="New chat"><Plus size={17} /></button>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden w-8 h-8 glass rounded-xl flex items-center justify-center opacity-60"><X size={17} /></button>
          </div>
        </div>

        {/* Search */}
        <div className="px-3 py-2.5 shrink-0">
          <div className="relative">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40 pointer-events-none" />
            <input value={sessSearch} onChange={e => setSessSearch(e.target.value)} placeholder="Search…"
              className="w-full bg-black/5 dark:bg-white/5 rounded-xl pl-8 pr-3 py-2 text-sm outline-none border border-transparent focus:border-[var(--accent)]/40 text-[var(--text)]" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[color:var(--border2,var(--border))] shrink-0 px-2 gap-0.5 pt-0.5">
          {[['chats', 'Chats', MessageSquare], ['projects', 'Projects', FolderOpen], ['topics', 'Topics', BookA]].map(([id, lbl, Icon]) => (
            <button key={id} onClick={() => setSidebarTab(id)}
              className={'flex-1 flex items-center justify-center gap-1 px-1 py-2.5 text-[9px] font-black uppercase tracking-widest border-b-2 transition-colors -mb-px ' +
                (sidebarTab === id ? 'border-[var(--accent)] text-[var(--accent)]' : 'border-transparent opacity-40 hover:opacity-70')}>
              <Icon size={11} />{lbl}
            </button>
          ))}
        </div>

        {/* ── CHATS TAB ── */}
        {sidebarTab === 'chats' && (
          <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar py-2 px-2">
            {pinned.length > 0 && (
              <div className="mb-2">
                <p className="text-[9px] font-black uppercase tracking-widest opacity-30 px-2 py-1 flex items-center gap-1"><Pin size={8} />Pinned</p>
                {pinned.map(s => <SessItem key={s.id} s={s} />)}
                <div className="mx-2 my-2 border-t border-[color:var(--border2,var(--border))]" />
              </div>
            )}
            {Object.entries(grouped).map(([grp, items]) => items.length > 0 && (
              <div key={grp} className="mb-3">
                <p className="text-[9px] font-black uppercase tracking-widest opacity-30 px-2 py-1">{grp}</p>
                {items.map(s => <SessItem key={s.id} s={s} />)}
              </div>
            ))}
            {!sessions.length && (
              <div className="text-center py-16 px-4 opacity-30">
                <MessageSquare size={28} className="mx-auto mb-3" />
                <p className="text-sm font-bold">No chats yet</p>
                <p className="text-xs mt-1 opacity-70">Start a conversation below</p>
              </div>
            )}
          </div>
        )}

        {/* ── PROJECTS TAB ── */}
        {sidebarTab === 'projects' && (
          <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar py-2">
            <button onClick={() => setShowNewProject(true)} className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-colors">
              <Plus size={15} />New Project
            </button>
            {showNewProject && (
              <div className="mx-3 mb-3 p-3 rounded-xl border border-[color:var(--border2,var(--border))] space-y-2.5" style={{ background: 'var(--card)' }}>
                <p className="text-[9px] font-black uppercase tracking-widest opacity-40">New Project</p>
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
              <button key={p.id || 'all'} onClick={() => { setSelProject(p.id); if (!p.id) setSidebarTab('chats'); }}
                className={'w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-left transition-all ' + (selProject === p.id ? 'bg-[var(--accent)]/10' : 'hover:bg-black/5 dark:hover:bg-white/5')}>
                <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: p.color }} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold truncate">{p.name}</p>
                  <p className="text-[10px] opacity-40">{sessions.filter(s => s.projectId === p.id).length} chats</p>
                </div>
              </button>
            ))}
            {!projects.length && !showNewProject && (
              <div className="text-center py-12 px-4 opacity-30"><FolderOpen size={28} className="mx-auto mb-3" /><p className="text-sm font-bold">No projects yet</p></div>
            )}
          </div>
        )}

        {/* ── TOPICS TAB ── */}
        {sidebarTab === 'topics' && (
          <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar py-2">
            <button onClick={() => setShowNewTopic(true)} className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-colors">
              <Plus size={15} />New Topic
            </button>
            {showNewTopic && (
              <div className="mx-3 mb-3 p-3 rounded-xl border border-[color:var(--border2,var(--border))] space-y-2.5" style={{ background: 'var(--card)' }}>
                <p className="text-[9px] font-black uppercase tracking-widest opacity-40">New Topic</p>
                <input value={newTopicName} onChange={e => setNewTopicName(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && createTopic()}
                  placeholder="e.g. Warfarin, Renal Dosing, Beta Blockers…" autoFocus
                  className="w-full text-sm bg-transparent outline-none border-b border-[color:var(--border2,var(--border))] pb-1.5 font-bold text-[var(--text)] placeholder:font-normal placeholder:opacity-40" />
                <div className="flex gap-2">
                  <button onClick={createTopic} className="flex-1 py-2 btn-accent rounded-lg text-xs font-black">Generate Lesson</button>
                  <button onClick={() => { setShowNewTopic(false); setNewTopicName(''); }} className="flex-1 py-2 rounded-lg text-xs font-black glass opacity-70">Cancel</button>
                </div>
              </div>
            )}
            {!topicsFiltered.length && !showNewTopic && (
              <div className="text-center py-12 px-4 opacity-30">
                <BookA size={28} className="mx-auto mb-3" />
                <p className="text-sm font-bold">No topics yet</p>
                <p className="text-xs mt-1 opacity-70">Add a drug or concept for a deep lesson</p>
              </div>
            )}
            {topicsFiltered.map(t => (
              <div key={t.id} className="group flex items-center px-3 py-0.5">
                <button onClick={() => openTopic(t)} className="flex-1 flex items-center gap-3 px-2 py-2.5 rounded-xl text-left hover:bg-[var(--accent)]/8 transition-all">
                  <div className="w-8 h-8 rounded-xl btn-accent flex items-center justify-center shrink-0 shadow-sm">
                    <BookA size={14} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold truncate">{t.name}</p>
                    <p className="text-[10px] opacity-40">Tap for full lesson</p>
                  </div>
                  <ChevronRight size={13} className="opacity-30 shrink-0" />
                </button>
                <button onClick={() => setTopics(p => p.filter(x => x.id !== t.id))}
                  className="opacity-0 group-hover:opacity-60 hover:!opacity-100 w-7 h-7 rounded-lg hover:bg-red-500/10 flex items-center justify-center ml-1 flex-shrink-0">
                  <Trash2 size={12} className="text-red-500" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Sidebar footer */}
        <div className="shrink-0 px-4 py-2.5 border-t border-[color:var(--border2,var(--border))]">
          <p className="text-[10px] opacity-30 font-bold flex items-center gap-1.5"><Brain size={11} />{sessions.length} chats · {topics.length} topics</p>
        </div>
      </div>

      {/* ── MAIN AREA ──────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-h-0 min-w-0">

        {/* Top bar */}
        <div className="flex items-center gap-3 px-4 py-2.5 border-b border-[color:var(--border2,var(--border))] shrink-0" style={{ backdropFilter: 'blur(20px)', background: 'var(--surface,var(--card))' }}>
          <button onClick={() => setSidebarOpen(o => !o)} className="w-9 h-9 glass rounded-xl flex items-center justify-center opacity-60 hover:opacity-100 shrink-0 transition-all" title="Toggle sidebar">
            <History size={17} />
          </button>
          <div className="flex-1 min-w-0">
            {curSess && curSess.projectId && (
              <div className="flex items-center gap-1.5 mb-0.5">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: (projects.find(p => p.id === curSess.projectId) || {}).color || '#6366f1' }} />
                <span className="text-[10px] opacity-40 font-bold">{(projects.find(p => p.id === curSess.projectId) || {}).name}</span>
              </div>
            )}
            <p className="text-sm font-black truncate">{curSess ? curSess.title : 'New Conversation'}</p>
          </div>
          <div className="flex items-center gap-1">
            {msgs.length > 0 && (
              <button onClick={() => navigator.clipboard && navigator.clipboard.writeText(msgs.map(m => (m.role === 'user' ? 'You' : 'MARIAM') + ': ' + m.content).join('\n\n'))}
                className="w-9 h-9 glass rounded-xl flex items-center justify-center opacity-50 hover:opacity-100 transition-all" title="Copy all">
                <Copy size={15} />
              </button>
            )}
            <button onClick={newChat} className="flex items-center gap-1.5 px-3 py-2 glass rounded-xl text-xs font-black opacity-60 hover:opacity-100 transition-all">
              <Plus size={13} />New
            </button>
          </div>
        </div>

        {/* Messages / Welcome */}
        <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar" ref={scrollRef}>
          {!hasStarted ? (
            <div className="flex flex-col items-center justify-center min-h-full p-6 gap-7 max-w-2xl mx-auto">
              <div className="text-center space-y-3">
                <div className="relative inline-block">
                  <img src={MARIAM_IMG} className="w-20 h-20 rounded-2xl object-cover shadow-2xl border-2 border-[color:var(--border2,var(--border))]" alt="MARIAM" />
                  <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 bg-emerald-500 rounded-full border-2 border-[var(--bg)] flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
                <h1 className="text-2xl font-black">What can I help you study?</h1>
                <p className="text-sm opacity-40 max-w-xs">Your AI study companion for pharmacy &amp; medicine</p>
              </div>

              {topics.length > 0 && (
                <div className="w-full">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-35 mb-2 flex items-center gap-1.5"><BookA size={10} />Your Topics</p>
                  <div className="flex flex-wrap gap-2">
                    {topics.map(t => (
                      <button key={t.id} onClick={() => openTopic(t)}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-bold border border-[var(--accent)]/20 bg-[var(--accent)]/5 hover:bg-[var(--accent)]/12 hover:border-[var(--accent)]/40 transition-all text-[var(--accent)]">
                        <BookA size={11} />{t.name}
                      </button>
                    ))}
                    <button onClick={() => { setSidebarOpen(true); setSidebarTab('topics'); setTimeout(() => setShowNewTopic(true), 200); }}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-bold border border-dashed border-[var(--accent)]/25 text-[var(--accent)]/50 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all">
                      <Plus size={11} />Add
                    </button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {STARTERS.map(s => (
                  <button key={s.text} onClick={() => send(s.text)}
                    className="glass rounded-2xl p-4 text-left hover:border-[var(--accent)]/35 hover:bg-[var(--accent)]/5 transition-all border border-[color:var(--border2,var(--border))] group">
                    <div className="text-xl mb-2">{s.icon}</div>
                    <p className="text-sm font-semibold group-hover:text-[var(--accent)] transition-colors leading-snug">{s.text}</p>
                  </button>
                ))}
              </div>

              {!topics.length && (
                <button onClick={() => { setSidebarOpen(true); setSidebarTab('topics'); setTimeout(() => setShowNewTopic(true), 200); }}
                  className="flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-black border-2 border-dashed border-[var(--accent)]/25 text-[var(--accent)]/50 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all">
                  <BookA size={17} />Add a Study Topic for deep AI lessons
                </button>
              )}
            </div>
          ) : (
            <div className="max-w-3xl mx-auto py-6 px-4 space-y-5">
              {msgs.map((m, i) => (
                <div key={i} className={'flex gap-3 ' + (m.role === 'user' ? 'flex-row-reverse' : '') + ' group'}>
                  <div className={'w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ' + (m.role === 'user' ? 'bg-[var(--accent)]' : 'overflow-hidden border border-[color:var(--border2,var(--border))]')}>
                    {m.role === 'user' ? <UserCircle2 size={17} className="text-white" /> : <img src={MARIAM_IMG} className="w-full h-full object-cover" />}
                  </div>
                  <div className={'flex-1 max-w-[88%] flex flex-col gap-1 ' + (m.role === 'user' ? 'items-end' : '')}>
                    <div className={'px-4 py-3 rounded-2xl text-sm leading-relaxed ' + (m.role === 'user' ? 'bg-[var(--accent)] text-white rounded-tr-sm max-w-[82%]' : 'glass rounded-tl-sm border border-[color:var(--border2,var(--border))]')}>
                      {m.role === 'assistant' ? (
                        <div>{m.content ? renderMarkdown(m.content) : <span className="opacity-30 text-lg animate-pulse">\u258A</span>}</div>
                      ) : <p className="whitespace-pre-wrap">{m.content}</p>}
                    </div>
                    <button onClick={() => navigator.clipboard && navigator.clipboard.writeText(m.content)}
                      className="opacity-0 group-hover:opacity-40 hover:!opacity-80 text-[10px] font-bold flex items-center gap-1 transition-opacity px-1">
                      <Copy size={10} />Copy
                    </button>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-xl overflow-hidden border border-[color:var(--border2,var(--border))] shrink-0 mt-0.5"><img src={MARIAM_IMG} className="w-full h-full object-cover" /></div>
                  <div className="glass rounded-2xl rounded-tl-sm px-4 py-3.5 flex items-center gap-1.5 border border-[color:var(--border2,var(--border))]">
                    {[0,1,2].map(i => <div key={i} className="w-2 h-2 bg-[var(--accent)] rounded-full animate-bounce" style={{ animationDelay: i * 0.15 + 's' }} />)}
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>
          )}
        </div>

        {/* Input */}
        <div className="shrink-0 px-4 pb-4 pt-3 border-t border-[color:var(--border2,var(--border))]" style={{ backdropFilter: 'blur(20px)', background: 'var(--surface,var(--card))' }}>
          <div className="max-w-3xl mx-auto">
            {selProject && (() => { const p = projects.find(x => x.id === selProject); return p ? (
              <div className="flex items-center gap-2 mb-2 px-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
                <span className="text-xs font-bold opacity-50">{p.name}</span>
                <button onClick={() => setSelProject(null)} className="opacity-40 hover:opacity-80"><X size={11} /></button>
              </div>
            ) : null; })()}
            <div className="glass rounded-2xl border border-[color:var(--border2,var(--border))] focus-within:border-[var(--accent)]/50 transition-colors shadow-lg">
              <textarea ref={inputRef} value={input}
                onChange={e => { setInput(e.target.value); setInputRows(Math.min(8, (e.target.value.match(/\n/g) || []).length + 2)); }}
                onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
                placeholder="Message MARIAM… (Shift+Enter for new line)" disabled={loading} rows={inputRows}
                className="w-full bg-transparent px-4 pt-3.5 pb-2 text-sm outline-none resize-none custom-scrollbar text-[var(--text)]" style={{ minHeight: 52 }} />
              <div className="flex items-center justify-between px-3 pb-3">
                <div className="flex items-center gap-1">
                  <button onClick={toggleVoice}
                    className={'w-8 h-8 rounded-xl flex items-center justify-center transition-all ' + (listening ? 'bg-red-500 text-white animate-pulse' : 'opacity-50 hover:opacity-100 hover:bg-black/8 dark:hover:bg-white/8')} title={listening ? 'Stop' : 'Voice input'}>
                    {listening ? <MicOff size={15} /> : <Mic size={15} />}
                  </button>
                  {topics.length > 0 && (
                    <div className="relative group/tpop">
                      <button className="w-8 h-8 rounded-xl flex items-center justify-center opacity-50 hover:opacity-100 hover:bg-black/8 dark:hover:bg-white/8 transition-all" title="Load topic lesson">
                        <BookA size={15} />
                      </button>
                      <div className="absolute bottom-10 left-0 hidden group-hover/tpop:flex flex-col glass rounded-xl border border-[color:var(--border2,var(--border))] shadow-xl min-w-[180px] py-1 z-50 max-h-48 overflow-y-auto">
                        {topics.map(t => (
                          <button key={t.id} onClick={() => openTopic(t)} className="flex items-center gap-2.5 px-3 py-2 text-sm hover:bg-[var(--accent)]/10 transition-colors text-left whitespace-nowrap">
                            <BookA size={12} className="text-[var(--accent)] shrink-0" />{t.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  {projects.length > 0 && (
                    <div className="relative group/ppop">
                      <button className="w-8 h-8 rounded-xl flex items-center justify-center opacity-50 hover:opacity-100 hover:bg-black/8 dark:hover:bg-white/8 transition-all" title="Select project">
                        <FolderOpen size={15} />
                      </button>
                      <div className="absolute bottom-10 left-0 hidden group-hover/ppop:flex flex-col glass rounded-xl border border-[color:var(--border2,var(--border))] shadow-xl min-w-[160px] py-1 z-50">
                        {projects.map(p => (
                          <button key={p.id} onClick={() => setSelProject(p.id)} className="flex items-center gap-2.5 px-3 py-2 text-sm hover:bg-[var(--accent)]/10 transition-colors whitespace-nowrap">
                            <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: p.color }} />{p.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <button onClick={() => send()} disabled={loading || !input.trim()}
                  className="w-9 h-9 bg-[var(--accent)] disabled:opacity-30 rounded-xl text-white flex items-center justify-center shadow-md transition-all hover:opacity-90 active:scale-95">
                  {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={15} />}
                </button>
              </div>
            </div>
            <p className="text-[10px] text-center opacity-20 font-medium mt-2">MARIAM may make errors. Always verify medical information.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
`;

code = code.slice(0, CS) + NEW_CHAT + code.slice(CE);
fs.writeFileSync('src/App.jsx', code);
console.log('✔ ChatView replaced. New file size:', code.length);
