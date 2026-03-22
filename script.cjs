const fs = require('fs');
for (const file of ['src/Counseling.js', 'src/Diseases.js']) {
    let content = fs.readFileSync(file, 'utf8');
    const tempPath = './temp_eval.cjs';
    fs.writeFileSync(tempPath, content.replace(/export const/g, 'exports.'));
    const mod = require(tempPath);
    let updatedContent = content;
    
    for (const key of Object.keys(mod)) {
        if (key.includes('Exams')) {
            const exams = mod[key];
            if (exams && exams[0] && exams[0].questions) {
                exams[0].questions.forEach(q => {
                    if (!q.explanation && q.options && q.options[q.correct] !== undefined) {
                        q.explanation = q.options[q.correct];
                    }
                });
                
                // Now replace the questions array in the file
                const newQuestions = JSON.stringify(exams[0].questions, null, 2);
                
                const matchRegex = new RegExp('export const ' + key + ' = ');
                const match = content.match(matchRegex);
                if (match) {
                    const idx = content.indexOf('questions: [', match.index);
                    if (idx > -1) {
                        const endIdx = content.indexOf('  }\n  ]\n}];', idx);
                        if (endIdx > -1) {
                           const startPart = content.substring(0, idx + 'questions: '.length);
                           const replacement = newQuestions.split('\n').map(l => '  ' + l).join('\n').trim();
                           const endPart = content.substring(endIdx + '  }\n  ]'.length);
                           updatedContent = startPart + '\n  ' + replacement + endPart;
                        } else {
                            console.log('Failed to find end index for', key);
                        }
                    }
                }
            }
        }
    }
    fs.writeFileSync(file, updatedContent);
    try { fs.unlinkSync(tempPath); } catch(e){}
    console.log('Updated ' + file);
}
