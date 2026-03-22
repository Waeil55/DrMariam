const fs = require('fs');

function processFile(file, nameExams) {
    let content = fs.readFileSync(file, 'utf8');
    let modContent = content.replace(/export const/g, 'exports.');
    let tempName = './temp_eval_' + Date.now() + '.cjs';
    fs.writeFileSync(tempName, modContent);
    const mod = require(tempName);
    
    let exams = mod[nameExams];
    if (exams && exams[0] && exams[0].questions) {
        exams[0].questions.forEach(q => {
            if (!q.explanation && q.options && q.options[q.correct] !== undefined) {
                // If the option has a letter like A) , remove it for the explanation
                let baseOpt = q.options[q.correct].replace(/^[A-E][\)\.]\s*/, '');
                
                // Set the explanation property
                // But wait, the user's issue might be exactly what I fixed in App.jsx rendering (it uses q.options[q.correct] as a backup anyway).
                q.explanation = 'Detailed explanation is unavailable. Correct Answer: ' + baseOpt;
            }
        });
        
        let startMatch = content.indexOf('export const ' + nameExams + ' = [');
        if (startMatch > -1) {
            let prefix = content.substring(0, startMatch);
            let nextExportIdx = content.indexOf('export const', startMatch + 10);
            if (nextExportIdx === -1) nextExportIdx = content.length;
            
            let suffix = content.substring(nextExportIdx);
            
            content = prefix + 'export const ' + nameExams + ' = ' + JSON.stringify(exams, null, 2) + ';\n\n' + suffix;
            fs.writeFileSync(file, content);
            console.log('Fixed', file, nameExams);
        }
    }
    fs.unlinkSync(tempName);
}

processFile('src/Counseling.js', 'counselingExams');
processFile('src/Diseases.js', 'diseasesExams');
processFile('src/drugData.js', 'drugExams');
