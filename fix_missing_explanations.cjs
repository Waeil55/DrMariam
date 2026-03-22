const fs = require('fs');
const path = require('path');

function processFile(filename, flashcardsName, examsName) {
    const filePath = path.join(__dirname, 'src', filename);
    let content = fs.readFileSync(filePath, 'utf8');

    // Super simple regex to grab the flashcards array JSON string
    // This expects export const XYZ = [{ ... }];
    
    // Instead of parsing entire file as JSON, let's just do a string replace on exams:
    // We already know in counselingExams, every question has correct: 0 and NO explanation.
    // The correct answer string is exactly options[0]. That IS the explanation.
    // So we can just regex replace:
    // "correct": 0
    // },
    // With:
    // "correct": 0,
    // "explanation": "..."
    // Wait, the options array might be multiline.
}

function quickFixFile(filename) {
    const filePath = path.join(__dirname, 'src', filename);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace "correct": 0 \n  } with "correct": 0,\n    "explanation": "Detailed explanation unavailable please refer to drug quick reference."
    // BUT we want the actual explanation to be the correct option!
    
    // Let's use eval to parse the whole file!
    const tempPath = path.join(__dirname, 'temp_eval.js');
    let modContent = content.replace(/export const /g, 'exports.');
    fs.writeFileSync(tempPath, modContent);
    const mod = require('./temp_eval.js');
    
    let examsKey = Object.keys(mod).find(k => k.toLowerCase().includes('exams'));
    
    if (examsKey && mod[examsKey] && mod[examsKey][0] && mod[examsKey][0].questions) {
        mod[examsKey][0].questions.forEach(q => {
            if (!q.explanation) {
                // If it's drug cases or counseling, maybe we can use the correct option as the explanation
                // Or for Counseling/Diseases, the correct option is quite descriptive.
                q.explanation = q.options[q.correct];
            }
        });
        
        // Serialize back
        let newQuestionsStr = JSON.stringify(mod[examsKey][0].questions, null, 2);
        // Indent properly
        newQuestionsStr = newQuestionsStr.split('\n').map(l => '  ' + l).join('\n').trim();
        
        let targetRegex = new RegExp((export const  =.*?questions:\\s*)\\[[\\s\\S]*?\\](\\s*\\}?\\s*\\];), 'v');
        // Actually simpler:
        let beforeMatch = content.match(new RegExp(export const  =.*?\\[[\\s\\S]*?questions:\\s*\\[));
        if (beforeMatch) {
            let startIdx = content.indexOf('questions:', beforeMatch.index) + 'questions:'.length;
            let bracketStart = content.indexOf('[', startIdx);
            
            // To find the end of the questions array, we need a bracket matcher, but since it's the last thing before }];
            let endIdx = content.indexOf(']', content.lastIndexOf('}'));
            // Wait, this is risky. Let's just do a string replace per question!
        }
    }
}
