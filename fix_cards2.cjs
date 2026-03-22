const fs = require('fs');
let code = fs.readFileSync('src/lawData.js', 'utf8');
code = code.replace(/q:\s*`/g, "question: `");
code = code.replace(/q:\s*([^'"`])/g, "question: $1");
fs.writeFileSync('src/lawData.js', code);
console.log("Fixed remaining q to question in lawData.js cards!");
