/**
 * Patch ChatView:
 * 1. Fix tab buttons – 2×2 grid, proper compact size  
 * 2. Add Encyclo as 4th tab
 * 3. Encyclo sidebar: category → subcategory nav
 * 4. Main area: AI-generated rich tables when topic selected
 */
const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// ── Find the two major replacement zones ──────────────────────────────────
// A) State declarations + tabs section (top of ChatView)
const STATE_ANCHOR = '  const [showNewTopic, setShowNewTopic] = useState(false);';
const stateIdx = code.indexOf(STATE_ANCHOR);
if (stateIdx === -1) { console.error('Cannot find state anchor'); process.exit(1); }

// B) The Tabs div
const TABS_OLD = `        {/* Tabs */}
        <div className="flex border-b border-[color:var(--border2,var(--border))] shrink-0 px-2 gap-0.5 pt-0.5">
          {[['chats', 'Chats', MessageSquare], ['projects', 'Projects', FolderOpen], ['topics', 'Topics', BookA]].map(([id, lbl, Icon]) => (
            <button key={id} onClick={() => setSidebarTab(id)}
              className={'flex-1 flex items-center justify-center gap-1 px-1 py-2.5 text-[9px] font-black uppercase tracking-widest border-b-2 transition-colors -mb-px ' +
                (sidebarTab === id ? 'border-[var(--accent)] text-[var(--accent)]' : 'border-transparent opacity-40 hover:opacity-70')}>
              <Icon size={11} />{lbl}
            </button>
          ))}
        </div>`;

const tabsIdx = code.indexOf(TABS_OLD);
if (tabsIdx === -1) { console.error('Cannot find Tabs div'); process.exit(1); }

const TABS_NEW = `        {/* Tabs – 2×2 grid */}
        <div className="grid grid-cols-2 border-b border-[color:var(--border2,var(--border))] shrink-0">
          {[
            ['chats', 'Chats', MessageSquare],
            ['projects', 'Projects', FolderOpen],
            ['topics', 'Topics', BookA],
            ['encyclo', 'Encyclo', Globe],
          ].map(([id, lbl, Icon], i) => (
            <button key={id} onClick={() => setSidebarTab(id)}
              className={'flex items-center justify-center gap-1.5 py-2.5 text-[10px] font-extrabold uppercase tracking-wide transition-colors border-b-2 ' +
                (i % 2 === 0 ? 'border-r border-r-[color:var(--border2,var(--border))] ' : '') +
                (sidebarTab === id ? 'border-b-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/5' : 'border-b-transparent opacity-45 hover:opacity-75 hover:bg-black/3 dark:hover:bg-white/3')}>
              <Icon size={12} />
              <span>{lbl}</span>
            </button>
          ))}
        </div>`;

code = code.replace(TABS_OLD, TABS_NEW);
console.log('✔ Tabs replaced');

// ── C) Add new state vars for encyclopedia  ─────────────────────────────
// After:  const [newTopicName, setNewTopicName] = useState('');
const STATE_INSERT_AFTER = `  const [newTopicName, setNewTopicName] = useState('');`;
const siIdx = code.indexOf(STATE_INSERT_AFTER, stateIdx - 200);
if (siIdx === -1) { console.error('Cannot find newTopicName state'); process.exit(1); }

const STATE_ADD = `\r\n  const [encCat, setEncCat] = useState(null);\r\n  const [encSub, setEncSub] = useState(null);\r\n  const [encContent, setEncContent] = useState('');\r\n  const [encLoading, setEncLoading] = useState(false);`;
code = code.slice(0, siIdx + STATE_INSERT_AFTER.length) + STATE_ADD + code.slice(siIdx + STATE_INSERT_AFTER.length);
console.log('✔ Encyclopedia state added');

// ── D) Add openEncycloTopic function  ────────────────────────────────────
const OPEN_TOPIC_ANCHOR = '  const openTopic = (topic) => {';
const otIdx = code.indexOf(OPEN_TOPIC_ANCHOR);
if (otIdx === -1) { console.error('Cannot find openTopic'); process.exit(1); }

const ENCYCLO_FN = `  const openEncycloTopic = (cat, sub) => {
    setEncCat(cat); setEncSub(sub); setEncContent(''); setEncLoading(true);
    if (window.innerWidth < 1024) setSidebarOpen(false);
    const prompt = [
      'You are MARIAM, a world-class medical educator. Generate a comprehensive, beautifully structured reference entry for:',
      '',
      'Topic: ' + sub.label,
      'Category: ' + cat.label,
      'Description: ' + sub.desc,
      '',
      'FORMAT REQUIREMENTS — you MUST use all of these:',
      '1. Start with a 2-3 sentence clinical overview in bold',
      '2. Use ## headings for each major section',
      '3. Use Markdown tables (| Col | Col |) for classifications, comparisons, dosing — at least 2 tables',
      '4. Use bullet points and numbered lists for mechanisms and steps',
      '5. For drug comparisons: always use a side-by-side table',
      '6. Add "Clinical Pearl" boxes using > blockquote syntax',
      '7. Use **bold** for all drug names, medical terms, key values',
      '8. Add relevant emojis (💊 🧬 ⚠️ ✅ 🏥 🔬) as section markers',
      '9. End with a "High-Yield Board Points" section as a numbered list',
      '',
      'CONTENT REQUIREMENTS:',
      '- Be exhaustive — cover ALL clinically relevant aspects',
      '- Include real drug names, doses, monitoring parameters',
      '- Include mechanisms of action where applicable',
      '- Include comparison tables between drug classes or agents',
      '- Flag contraindications and warnings clearly',
      '- Be exam-ready (NAPLEX, USMLE, NCLEX level)',
      '',
      'Generate the complete reference now:',
    ].join('\n');
    callAIStreaming(prompt, chunk => setEncContent(chunk), settings, 10000)
      .catch(e => setEncContent('\u26a0\ufe0f Error: ' + e.message))
      .finally(() => setEncLoading(false));
  };

  `;

code = code.slice(0, otIdx) + ENCYCLO_FN + code.slice(otIdx);
console.log('✔ openEncycloTopic function added');

// ── E) Add TOPICS TAB closing then add ENCYCLO TAB  ──────────────────────
// Find the end of the Topics tab (the closing }) and add Encyclo after it
const TOPICS_TAB_END = `        {/* ── TOPICS TAB ── */}
        {sidebarTab === 'topics' && (`;
const topicsTabIdx = code.indexOf(TOPICS_TAB_END);
if (topicsTabIdx === -1) { console.error('Cannot find Topics tab start'); process.exit(1); }

// Find the closing of the Topics tab panel - look for the pattern after it
// The topics tab ends with: </div>\n        )}\n\n        {/* Sidebar footer */}
const SIDEBAR_FOOTER = `        {/* Sidebar footer */}`;
const sfIdx = code.indexOf(SIDEBAR_FOOTER, topicsTabIdx);
if (sfIdx === -1) { console.error('Cannot find Sidebar footer'); process.exit(1); }

const ENCYCLO_TAB = `        {/* ── ENCYCLO TAB ── */}
        {sidebarTab === 'encyclo' && (
          <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar py-2">
            {!encCat ? (
              <>
                <p className="text-[9px] font-black uppercase tracking-widest opacity-30 px-4 py-2">Browse Categories</p>
                {ENCYCLOPEDIA_CATEGORIES.map(cat => (
                  <button key={cat.id} onClick={() => setEncCat(cat)}
                    className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-[var(--accent)]/6 transition-all text-left group">
                    <div className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                      style={{ background: cat.color + '18' }}>
                      <cat.icon size={14} style={{ color: cat.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold truncate">{cat.label}</p>
                      <p className="text-[9px] opacity-40">{cat.subcategories.length} topics</p>
                    </div>
                    <ChevronRight size={12} className="opacity-30 shrink-0" />
                  </button>
                ))}
              </>
            ) : !encSub ? (
              <>
                <div className="flex items-center gap-2 px-3 py-2 border-b border-[color:var(--border2,var(--border))] mb-1">
                  <button onClick={() => setEncCat(null)} className="p-1 rounded-lg hover:bg-black/8 dark:hover:bg-white/8 opacity-60 hover:opacity-100">
                    <ChevronLeft size={15} />
                  </button>
                  <div className="flex items-center gap-2 min-w-0">
                    <encCat.icon size={13} style={{ color: encCat.color }} />
                    <span className="text-xs font-black truncate" style={{ color: encCat.color }}>{encCat.label}</span>
                  </div>
                </div>
                {encCat.subcategories.map(sub => (
                  <button key={sub.id} onClick={() => openEncycloTopic(encCat, sub)}
                    className={'w-full flex items-center gap-2.5 px-4 py-2.5 hover:bg-[var(--accent)]/6 transition-all text-left group ' +
                      (encSub && encSub.id === sub.id ? 'bg-[var(--accent)]/10' : '')}>
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: encCat.color + '99' }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold truncate">{sub.label}</p>
                      <p className="text-[9px] opacity-35 truncate">{sub.desc}</p>
                    </div>
                    <ChevronRight size={11} className="opacity-25 shrink-0" />
                  </button>
                ))}
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 px-3 py-2 border-b border-[color:var(--border2,var(--border))] mb-1">
                  <button onClick={() => setEncSub(null)} className="p-1 rounded-lg hover:bg-black/8 dark:hover:bg-white/8 opacity-60 hover:opacity-100">
                    <ChevronLeft size={15} />
                  </button>
                  <span className="text-xs font-black truncate flex-1">{encSub.label}</span>
                </div>
                {encCat.subcategories.map(sub => (
                  <button key={sub.id} onClick={() => openEncycloTopic(encCat, sub)}
                    className={'w-full flex items-center gap-2 px-4 py-2 text-left transition-all ' +
                      (encSub.id === sub.id ? 'bg-[var(--accent)]/12 text-[var(--accent)] font-black' : 'hover:bg-[var(--accent)]/5 opacity-60 hover:opacity-100')}>
                    <span className="text-[10px] font-semibold truncate">{sub.label}</span>
                  </button>
                ))}
              </>
            )}
          </div>
        )}

        `;

code = code.slice(0, sfIdx) + ENCYCLO_TAB + code.slice(sfIdx);
console.log('✔ Encyclo sidebar tab added');

// ── F) Modify main area to show encyclopedia when encyclo tab active  ────
// Find the welcome screen condition: !hasStarted
// We need to add: if sidebarTab === 'encyclo' && encSub → show encyclopedia content
// Find the messages / welcome section start
const SCROLL_REF_DIV = `        <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar" ref={scrollRef}>
          {!hasStarted ? (`;
const scrollIdx = code.indexOf(SCROLL_REF_DIV);
if (scrollIdx === -1) { console.error('Cannot find scroll ref div'); process.exit(1); }

const NEW_SCROLL_REF_DIV = `        <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar" ref={scrollRef}>
          {sidebarTab === 'encyclo' && (encSub || encLoading) ? (
            /* ── ENCYCLOPEDIA CONTENT PANEL ── */
            <div className="flex flex-col h-full">
              {/* Encyclo header */}
              {encSub && encCat && (
                <div className="shrink-0 px-5 pt-5 pb-3 border-b border-[color:var(--border2,var(--border))]">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: encCat.color + '18' }}>
                      <encCat.icon size={20} style={{ color: encCat.color }} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest opacity-40">{encCat.label}</p>
                      <h2 className="text-lg font-black leading-tight">{encSub.label}</h2>
                    </div>
                  </div>
                  <p className="text-xs opacity-50 ml-13">{encSub.desc}</p>
                </div>
              )}
              {/* Content */}
              <div className="flex-1 overflow-y-auto custom-scrollbar p-5">
                {encLoading && !encContent && (
                  <div className="flex items-center gap-3 py-8 justify-center opacity-50">
                    <div className="w-5 h-5 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin" />
                    <span className="text-sm font-bold">Generating comprehensive reference…</span>
                  </div>
                )}
                {encContent && (
                  <div className="text-sm leading-relaxed">
                    {renderMarkdown(encContent)}
                    {encLoading && <span className="inline-block w-1.5 h-4 bg-[var(--accent)] opacity-70 animate-pulse ml-0.5 rounded-sm" />}
                  </div>
                )}
              </div>
              {/* Ask AI bar */}
              {encSub && (
                <div className="shrink-0 px-4 pb-4 pt-2 border-t border-[color:var(--border2,var(--border))]">
                  <div className="glass rounded-2xl border border-[color:var(--border2,var(--border))] focus-within:border-[var(--accent)]/50 transition-colors">
                    <textarea
                      placeholder={'Ask anything about ' + encSub.label + '…'}
                      rows={2}
                      className="w-full bg-transparent px-4 pt-3 pb-2 text-sm outline-none resize-none text-[var(--text)]"
                      onKeyDown={e => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          const q = e.target.value.trim();
                          if (!q) return;
                          e.target.value = '';
                          setSidebarTab('chats');
                          setTimeout(() => send('[ENCYCLO: ' + encSub.label + '] ' + q), 50);
                        }
                      }}
                    />
                    <p className="text-[10px] opacity-30 px-4 pb-2.5 font-medium">Enter to ask in Chat • Shift+Enter for new line</p>
                  </div>
                </div>
              )}
            </div>
          ) : sidebarTab === 'encyclo' && !encSub ? (
            /* ── ENCYCLOPEDIA HOME ── */
            <div className="p-5 space-y-5">
              <div className="text-center py-6">
                <div className="text-4xl mb-3">🌍</div>
                <h2 className="text-xl font-black">Medical Encyclopedia</h2>
                <p className="text-sm opacity-50 mt-2 max-w-sm mx-auto">Select a category from the sidebar to explore topics, or pick one below</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {ENCYCLOPEDIA_CATEGORIES.slice(0, 9).map(cat => (
                  <button key={cat.id} onClick={() => { setSidebarOpen(true); setEncCat(cat); }}
                    className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-[color:var(--border2,var(--border))] hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/4 transition-all group">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ background: cat.color + '18' }}>
                      <cat.icon size={20} style={{ color: cat.color }} />
                    </div>
                    <p className="text-[11px] font-black text-center leading-snug">{cat.label}</p>
                    <p className="text-[9px] opacity-40">{cat.subcategories.length} topics</p>
                  </button>
                ))}
                <button onClick={() => { setSidebarOpen(true); setEncCat(null); }}
                  className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-dashed border-[var(--accent)]/25 hover:border-[var(--accent)] hover:bg-[var(--accent)]/4 transition-all text-[var(--accent)]">
                  <Globe size={20} />
                  <p className="text-[11px] font-black">All Categories</p>
                  <p className="text-[9px] opacity-60">{ENCYCLOPEDIA_CATEGORIES.length} total</p>
                </button>
              </div>
            </div>
          ) : !hasStarted ? (`;

code = code.replace(SCROLL_REF_DIV, NEW_SCROLL_REF_DIV);
console.log('✔ Main area encyclopedia panel added');

// ── G) Fix the closing structure — we need an extra ) after the original welcome + msgs section
// The original was:
//   {!hasStarted ? ( <welcome> ) : ( <messages> )}
// Now we need:   
//   {sidebarTab === 'encyclo' && encSub ? ( <encyclo content> )
//    : sidebarTab === 'encyclo' ? ( <encyclo home> )
//    : !hasStarted ? ( <welcome> ) : ( <messages> )}
// The final close of the ternary chain — we changed "!hasStarted ? (" to ": !hasStarted ? ("
// so we need to add the missing closing ) at the end
// Find the current end of the messages section (before </div> of scrollRef)
// It ends with: <div ref={endRef} />\n            </div>\n          )}\n        </div>
const MSG_END = `
              <div ref={endRef} />
            </div>
          )}
        </div>`;
const MSG_END_IDX = code.indexOf(MSG_END, scrollIdx);
if (MSG_END_IDX === -1) { console.error('Cannot find message end'); process.exit(1); }

const MSG_END_NEW = `
              <div ref={endRef} />
            </div>
          ) : null}
        </div>`;

code = code.slice(0, MSG_END_IDX) + MSG_END_NEW + code.slice(MSG_END_IDX + MSG_END.length);
console.log('✔ Ternary closed correctly');

fs.writeFileSync('src/App.jsx', code);
console.log('✔ All patches applied. Size:', code.length);
