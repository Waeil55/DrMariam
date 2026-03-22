const fs = require('fs');
eval(fs.readFileSync('src/drugData.js', 'utf8').replace(/export const/g, 'var'));
eval(fs.readFileSync('src/Counseling.js', 'utf8').replace(/export const/g, 'var'));

const dSet = new Set(drugFlashcards[0].cards.map(c => c.q.toLowerCase().trim()));
const cSet = counselingFlashcards[0].cards.map(c => c.q.toLowerCase().trim());
const missing = cSet.filter(c => !dSet.has(c));
console.log('Missing count: ', missing.length);
console.log(missing.join(', '));
