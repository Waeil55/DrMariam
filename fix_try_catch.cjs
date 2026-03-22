
const fs = require("fs");
let code = fs.readFileSync("src/App.jsx", "utf8");

code = code.replace(
  "const startSetWithResumeCheck = async (set) => {",
  "const startSetWithResumeCheck = async (set) => { try {"
);
code = code.replace(
  "const saved = await getSessionProgress(set.id);",
  "let saved = null; try { saved = await getSessionProgress(set.id); } catch(e) { console.warn(\"IDB error:\", e); }"
);
code = code.replace(
  /setFlipped\(false\);\s*\}\s*\};\s/g,
  "setFlipped(false); }\n      } catch (err) { alert(\"Error starting flashcards: \" + err.message); console.error(err); }\n    };\n"
);

code = code.replace(
  "const startExamWithResumeCheck = async (ex) => {",
  "const startExamWithResumeCheck = async (ex) => { try {"
);
code = code.replace(
  "const saved = await getSessionProgress(ex.id);",
  "let saved = null; try { saved = await getSessionProgress(ex.id); } catch(e) { console.warn(\"IDB error:\", e); }"
);
code = code.replace(
  /setReviewMode\(false\);\s*\}\s*\};\s/g,
  "setReviewMode(false); }\n      } catch (err) { alert(\"Error starting exam: \" + err.message); console.error(err); }\n    };\n"
);

// Fix Cases Practice click as well!
code = code.replace(
  /<button onClick=\{\(\) => \{\s*const shuffledSet = \{ \.\.\.set, questions: shuffleOptions\(set\.questions\.map.*?Practice<\/button>/g,
  (match) => {
    return match.replace("onClick={() => {", "onClick={() => { try {")
                .replace("setSubmitted(false); }}", "setSubmitted(false); } catch(err) { alert(\"Error starting practice: \" + err.message); console.error(err); } }}");
  }
);

fs.writeFileSync("src/App.jsx", code);
console.log("Patched App.jsx");

