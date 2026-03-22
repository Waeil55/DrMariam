
const fs = require("fs");
let code = fs.readFileSync("src/App.jsx", "utf8");

code = code.replace(
  "function DocWorkspace({ activeDoc, setDocs, currentPage, setCurrentPage, openDocs, closeTab, setActiveId, docs, onBack }) {",
  "function DocWorkspace({ activeDoc, setDocs, currentPage, setCurrentPage, openDocs, closeTab, setActiveId, docs, onBack, rpOpen, setRpOpen }) {"
);

const oldTopBar = `<button onClick={() => setScale(s => Math.min(s + .2, 4))} className="w-7 h-7 glass rounded-lg flex items-center justify-center opacity-60 hover:opacity-100"><ZoomIn size={16} /></button>
            </div>
          )}`;

const newTopBar = `<button onClick={() => setScale(s => Math.min(s + .2, 4))} className="w-7 h-7 glass rounded-lg flex items-center justify-center opacity-60 hover:opacity-100"><ZoomIn size={16} /></button>
            </div>
          )}
          <button onClick={() => setRpOpen(p => !p)} className={\`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black transition-all \${rpOpen ? "bg-[var(--accent)] text-white" : "glass hover:bg-[var(--accent)]/10 text-[var(--accent)]"}\`}>
            <Sparkles size={14} /> {rpOpen ? "Hide Tools" : "AI Tools"}
          </button>
        </div>`;

code = code.replace(oldTopBar, newTopBar);

code = code.replace(
  "setActiveId={setActiveId} docs={docs} onBack={() => setView(\x27library\x27)} />",
  "setActiveId={setActiveId} docs={docs} onBack={() => setView(\x27library\x27)} rpOpen={rpOpen} setRpOpen={setRpOpen} />"
);

fs.writeFileSync("src/App.jsx", code);
console.log("Patched DocWorkspace for AI toggler!");

