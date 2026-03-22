const fs = require('fs');
['src/Counseling.js', 'src/Diseases.js', 'src/drugData.js'].forEach(file => {
    let c = fs.readFileSync(file, 'utf8');
    c = c.replace(/Detailed explanation is unavailable\. Correct Answer: /g, 'Correct Answer: ');
    fs.writeFileSync(file, c);
});
console.log('Cleaned up text');
