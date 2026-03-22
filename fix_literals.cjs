/**
 * Fix the literal newline inside .join() and other broken newlines in the chatview
 */
const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// Fix 1: ].join('\n') where \n is a literal newline (byte 10)  
// Pattern: ].join(' + quote + LF + quote + )
code = code.replace(/\]\.join\('\n'\);/g, "].join('\\n');");
console.log('Fix 1 done');

// Fix 2: hiddenPrompt + 'LF LF USER: ' + userMsg ... 
// These became actual newlines too. Search for the callAIStreaming call
const badPattern = /callAIStreaming\(hiddenPrompt \+ '\n\nUSER: '/;
if (badPattern.test(code)) {
  code = code.replace(badPattern, "callAIStreaming(hiddenPrompt + '\\n\\nUSER: '");
  console.log('Fix 2a done');
}
const badPattern2 = /'\n\nMARIAM:', chunk/;
if (badPattern2.test(code)) {
  code = code.replace(badPattern2, "'\\n\\nMARIAM:', chunk");
  console.log('Fix 2b done');
}

// Fix similar issues in send() function - check for literal newlines in strings
// The hist join
const badHist = /\.join\('\\n'\)/g;
// already fine if it's \\n

fs.writeFileSync('src/App.jsx', code);
console.log('✔ Literal newlines fixed. Size:', code.length);

// Verify
const check = fs.readFileSync('src/App.jsx', 'utf8');
const joinIdx = check.indexOf('].join(');
const slice = check.slice(joinIdx, joinIdx+15);
let ok = true;
for (let i=0; i<slice.length; i++) {
  if (slice.charCodeAt(i) === 10 && i > 6 && i < 12) { ok = false; console.log('Still has literal newline at position', i); }
}
if (ok) console.log('✔ join() verified clean');
