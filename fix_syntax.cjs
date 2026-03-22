
const fs = require("fs");
let code = fs.readFileSync("src/App.jsx", "utf8");

code = code.replace(/setFlipped\(false\);\s*\}\s*\}\s*catch\s*\(err\)/g, "setFlipped(false); } catch (err)");
code = code.replace(/setReviewMode\(false\);\s*\}\s*\}\s*catch\s*\(err\)/g, "setReviewMode(false); } catch (err)");

fs.writeFileSync("src/App.jsx", code);

