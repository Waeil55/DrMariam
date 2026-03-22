const fs = require('fs');

let c = fs.readFileSync('src/Counseling.js', 'utf8');
let d = fs.readFileSync('src/drugData.js', 'utf8');

c = c.replace(/export const/g, 'exports.');
d = d.replace(/export const/g, 'exports.');

fs.writeFileSync('temp_c.cjs', c);
fs.writeFileSync('temp_d.cjs', d);

const modc = require('./temp_c.cjs');
const modd = require('./temp_d.cjs');

let drugCards = modd.drugFlashcards[0].cards;
let drugMap = {};
for (let card of drugCards) {
    drugMap[card.q.toLowerCase().trim()] = card.a;
}

let counCards = modc.counselingFlashcards[0].cards;
let matched = 0;
for (let card of counCards) {
    let key = card.q.toLowerCase().trim();
    if (drugMap[key]) {
        card.a = drugMap[key];
        matched++;
    } else {
        // If not matched, we just keep the old answer, but maybe format it?
        card.a = "Brand: N/A\nIndication: " + card.a + "\nClass: N/A\nCounseling Points:\n- Take exactly as directed\n- Consult pharmacist for specific side effects";
    }
}

// Write back to Counseling.js
const originalText = fs.readFileSync('src/Counseling.js', 'utf8');
let startMatch = originalText.indexOf('export const counselingFlashcards = [');
let endMatch = originalText.indexOf('export const counselingExams = [');
let suffix = originalText.substring(endMatch);

fs.writeFileSync('src/Counseling.js', originalText.substring(0, startMatch) + 'export const counselingFlashcards = ' + JSON.stringify(modc.counselingFlashcards, null, 2) + ';\n\n' + suffix);
console.log('Fixed counselingFlashcards. Matched ' + matched);

fs.unlinkSync('temp_c.cjs');
fs.unlinkSync('temp_d.cjs');
