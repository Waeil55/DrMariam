/**
 * Fix send() function which has literal newlines in strings
 */
const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

const START = code.indexOf('  const send = async (overrideMsg) => {');
const END = code.indexOf('  const filteredSessions = useMemo(', START);

console.log('send() start:', START, 'end:', END);

const NEW_SEND = `  const send = async (overrideMsg) => {
    const msg = (overrideMsg || input).trim();
    if (!msg || loading) return;
    setInput(''); setInputRows(1); setHasStarted(true);
    const sessId = selSess || Date.now().toString();
    if (!selSess) setSelSess(sessId);
    const proj = selProject ? projects.find(p => p.id === selProject) : null;
    const projCtx = proj
      ? '\\n\\nProject: ' + proj.name + (proj.instructions ? '\\nInstructions: ' + proj.instructions : '')
      : '';
    const sysPrompt = 'You are MARIAM, a brilliant AI study assistant specialized in medicine and pharmacy. ' +
      'Format responses with **bold** for key terms, ## headings for long answers, bullet points, and tables when comparing items.' +
      projCtx;
    const newMsgs = [...msgs,
      { role: 'user', content: msg, timestamp: Date.now() },
      { role: 'assistant', content: '', timestamp: Date.now() }
    ];
    setMsgs(newMsgs); setLoading(true);
    try {
      const hist = newMsgs.slice(-13, -1)
        .map(m => (m.role === 'user' ? 'USER' : 'MARIAM') + ': ' + m.content)
        .join('\\n');
      const prompt = sysPrompt + '\\n\\nConversation:\\n' + hist + '\\n\\nUSER: ' + msg + '\\n\\nMARIAM:';
      await callAIStreaming(prompt, chunk => {
        setMsgs(p => [...p.slice(0, -1), { role: 'assistant', content: chunk, timestamp: Date.now() }]);
      }, settings, 6000);
      setTimeout(() => saveSession(newMsgs, sessId), 400);
    } catch (e) {
      setMsgs(p => [...p.slice(0, -1), { role: 'assistant', content: '\u26a0\ufe0f ' + e.message }]);
    } finally { setLoading(false); }
  };

  `;

code = code.slice(0, START) + NEW_SEND + code.slice(END);
fs.writeFileSync('src/App.jsx', code);
console.log('✔ send() fixed. Size:', code.length);
