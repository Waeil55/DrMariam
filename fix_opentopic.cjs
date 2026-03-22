/**
 * Fix openTopic function - replace broken string literals with template literals
 */
const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

const START_MARKER = '  const openTopic = (topic) => {';
const END_MARKER = '  const send = async (overrideMsg) => {';

const start = code.indexOf(START_MARKER);
const end = code.indexOf(END_MARKER, start);

console.log('openTopic start:', start, 'end:', end);

const NEW_OPEN_TOPIC = `  const openTopic = (topic) => {
    setHasStarted(true); setMsgs([]); setSelSess(null);
    if (window.innerWidth < 1024) setSidebarOpen(false);
    const hiddenPrompt = [
      'You are MARIAM, an expert medical educator. The student wants a comprehensive deep-dive lesson on: "' + topic.name + '".',
      '',
      'Produce an outstanding, textbook-quality teaching response structured as a complete lesson:',
      '- Use ## headings for major sections',
      '- Use **bold** for key terms, drug names, and concepts',
      '- Use Markdown tables to compare mechanisms, classifications, or data',
      '- Use bullet points and numbered lists for key facts',
      '- Add clinical pearls with emojis',
      '- Include mnemonics or memory aids where useful',
      '',
      'Cover: Overview, Mechanism of Action, Classification (with table), Clinical Uses, Dosing (table), Pharmacokinetics, Side Effects, Contraindications, Drug Interactions, Monitoring, Clinical Pearls.',
      '',
      'Be thorough, accurate, richly formatted, and immediately useful for pharmacy/medical students.',
    ].join('\n');
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

  `;

code = code.slice(0, start) + NEW_OPEN_TOPIC + code.slice(end);
fs.writeFileSync('src/App.jsx', code);
console.log('✔ openTopic fixed. Size:', code.length);
