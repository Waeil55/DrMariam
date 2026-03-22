/**
 * Fix the broken regex in textarea onChange
 */
const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// Find the position of the broken regex
const idx = code.indexOf('(e.target.value.match(/');
console.log('Found at:', idx);

// Check what's around it
const slice = code.slice(idx, idx + 60);
console.log('Raw:', JSON.stringify(slice));

// Replace the broken match(/CRLF/g) with a simple split approach  
// The broken string: (e.target.value.match(/\r\n/g) || []).length + 2))
// The \r\n here are literal 2-byte sequences
const oldStr = code.slice(idx, idx + '(e.target.value.match(/\r\n/g) || []).length + 2))'.length);
console.log('oldStr:', JSON.stringify(oldStr));

const newStr = '(e.target.value.split("\\n").length + 1)';
console.log('newStr:', newStr);

code = code.slice(0, idx) + newStr + code.slice(idx + oldStr.length);
fs.writeFileSync('src/App.jsx', code);
console.log('✔ Fixed regex. Size:', code.length);
