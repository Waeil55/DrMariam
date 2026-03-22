/**
 * Comprehensive fix: replace all literal newlines inside single-quoted strings
 * within the ChatView function section of App.jsx
 */
const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

const CS = code.indexOf('function ChatView({ settings, sessions, setSessions }) {');
const CE = code.indexOf('SETTINGS VIEW');

let chatCode = code.slice(CS, CE);

// State machine to find literal newlines inside single-quoted strings
// and replace them with \\n
let result = '';
let i = 0;
let inSingleStr = false;
let inDoubleStr = false;
let inTemplate = false;
let templateDepth = 0;
let fixes = 0;

while (i < chatCode.length) {
  const c = chatCode[i];
  const prev = i > 0 ? chatCode[i-1] : '';
  
  // Track template literals (backtick strings) - skip them
  if (!inSingleStr && !inDoubleStr && c === '`') {
    inTemplate = !inTemplate;
    result += c;
    i++;
    continue;
  }
  
  if (inTemplate) {
    // In template literal - pass through unchanged
    result += c;
    i++;
    continue;
  }
  
  // Track double-quoted strings
  if (!inSingleStr && !inDoubleStr && c === '"' && prev !== '\\') {
    inDoubleStr = true;
    result += c;
    i++;
    continue;
  }
  if (inDoubleStr && c === '"' && prev !== '\\') {
    inDoubleStr = false;
    result += c;
    i++;
    continue;
  }
  
  // Track single-quoted strings
  if (!inSingleStr && !inDoubleStr && c === "'" && prev !== '\\') {
    inSingleStr = true;
    result += c;
    i++;
    continue;
  }
  if (inSingleStr && c === "'" && prev !== '\\') {
    inSingleStr = false;
    result += c;
    i++;
    continue;
  }
  
  // In a single-quoted string and found a literal newline (LF or CRLF)
  if (inSingleStr && c === '\n') {
    // Replace literal LF with \n escape
    result += '\\n';
    fixes++;
    i++;
    continue;
  }
  if (inSingleStr && c === '\r' && chatCode[i+1] === '\n') {
    // CRLF in string - replace with \n
    result += '\\n';
    fixes++;
    i += 2;
    continue;
  }
  
  result += c;
  i++;
}

console.log('Fixed', fixes, 'literal newlines in single-quoted strings');

code = code.slice(0, CS) + result + code.slice(CE);
fs.writeFileSync('src/App.jsx', code);
console.log('✔ Saved. Size:', code.length);
