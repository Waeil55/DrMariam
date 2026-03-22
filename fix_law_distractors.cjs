
const fs = require("fs");
let code = fs.readFileSync("src/lawData.js", "utf8");

// We can extract lawExams, modify them, and rewrite the file, but since the file has other exports, 
// let us just rewrite lawExams directly or read as a module.
const { lawExams, lawFlashcards, lawCases } = require("./src/lawData.js");

lawExams.forEach(exam => {
  if (exam.questions) {
    const allCorrectAnswers = exam.questions.map(q => q.options ? q.options[q.correct] : null).filter(Boolean);
    
    exam.questions.forEach((q, i) => {
      if (!q.options) return;
      const correctAns = q.options[q.correct];
      const newOptions = [correctAns];
      
      // Select 3 random different correct answers as distractors
      let attempts = 0;
      while (newOptions.length < 4 && attempts < 50) {
        const randAns = allCorrectAnswers[Math.floor(Math.random() * allCorrectAnswers.length)];
        if (!newOptions.includes(randAns) && randAns) {
          newOptions.push(randAns);
        }
        attempts++;
      }
      
      // Shuffle them
      for (let k = newOptions.length - 1; k > 0; k--) {
        const j = Math.floor(Math.random() * (k + 1));
        [newOptions[k], newOptions[j]] = [newOptions[j], newOptions[k]];
      }
      
      q.options = newOptions;
      q.correct = newOptions.indexOf(correctAns);
    });
  }
});

// Now we need to overwrite the lawExams in the file...
const newCode = `export const lawFlashcards = ${JSON.stringify(lawFlashcards, null, 2)};\n\nexport const lawExams = ${JSON.stringify(lawExams, null, 2)};\n\nexport const lawCases = ${JSON.stringify(lawCases, null, 2)};\n`;

fs.writeFileSync("src/lawData.js", newCode);
console.log("Updated law distractors.");

