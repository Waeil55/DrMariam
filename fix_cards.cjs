const fs = require('fs');
let code = fs.readFileSync('src/lawData.js', 'utf8');
code = code.replace(/q:\s*'/g, "question: '");
code = code.replace(/q:\s*"/g, 'question: "');
fs.writeFileSync('src/lawData.js', code);
console.log("Replaced 'q' with 'question' in lawData.js cards!");
