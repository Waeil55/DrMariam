const fs = require('fs');

function processFile(file, nameExams) {
    let content = fs.readFileSync(file, 'utf8');
    let modContent = content.replace(/export const/g, 'exports.');
    fs.writeFileSync('temp_eval.cjs', modContent);
    const mod = require('./temp_eval.cjs');
    
    let exams = mod[nameExams];
    if (exams && exams[0] && exams[0].questions) {
        exams[0].questions.forEach(q => {
            if (!q.explanation && q.options && q.options[q.correct] !== undefined) {
                q.explanation = 'Correct Answer: ' + q.options[q.correct];
            }
        });
        
        // Find exactly where the exams array is in the text
        const examsStr = JSON.stringify(exams, null, 2);
        // Indent
        const replacement = examsStr;
        
        let startMatch = content.indexOf('export const ' + nameExams + ' = [');
        if (startMatch > -1) {
            let prefix = content.substring(0, startMatch);
            // find the end of the array by parsing the text or just using the string.
            // Since we know the next export might be something else
            let nextExportIdx = content.indexOf('export const', startMatch + 10);
            if (nextExportIdx === -1) nextExportIdx = content.length;
            
            let suffix = content.substring(nextExportIdx);
            
            // Reconstruct
            content = prefix + 'export const ' + nameExams + ' = ' + replacement + ';\n\n' + suffix;
            
            fs.writeFileSync(file, content);
            console.log('Fixed', file, nameExams);
        }
    }
}

processFile('src/Counseling.js', 'counselingExams');
processFile('src/Diseases.js', 'diseasesExams');
processFile('src/drugData.js', 'drugExams');
