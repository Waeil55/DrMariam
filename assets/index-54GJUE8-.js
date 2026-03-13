import { r as reactExports, R as React, L as Loader2, A as AlertCircle, X, S as Search, G as GripVertical, a as Sparkles, Z as Zap, M as MessageSquare, D as Database, F as FolderOpen, B as BookMarked, b as Layers, c as Activity, C as CheckSquare, d as Settings, e as CheckCircle2, I as Info, f as FileText, P as PenLine, g as FileUp, h as Grid3x3, i as List, j as ChevronLeft, k as Printer, l as RefreshCw, m as FilePlus, T as Trash2, E as Eye, n as Target, o as Stethoscope, p as ChevronRight, q as Thermometer, s as ChevronDown, t as Pin, u as Copy, v as Plus, w as Brain, H as History, x as CircleUserRound, y as MicOff, z as Mic, J as Send, K as Smartphone, N as Download, O as Globe, Q as KeyRound, U as Palette, V as Sun, W as CloudSun, Y as Flame, _ as Heart, $ as Leaf, a0 as Moon, a1 as MoonStar, a2 as PanelsTopLeft, a3 as FileCode, a4 as Image, a5 as Table, a6 as ZoomOut, a7 as Maximize, a8 as ZoomIn, a9 as Save, aa as BookOpen, ab as AlignLeft, ac as Pill, ad as Lightbulb, ae as Baby, af as Network, ag as Tag, ah as Clock, ai as Languages, aj as Wand2, ak as FlaskConical, al as Code, am as ListChecks, an as GraduationCap, ao as Hash, ap as MoreVertical, aq as ChevronUp } from './icons-nbm0w_CD.js';
import { r as reactDomExports } from './react-BbAQWnT3.js';

true&&(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
}());

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m$1=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:true,ref:true,__self:true,__source:true};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m$1.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a) void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

var client = {};

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

const scriptRel = 'modulepreload';const assetsURL = function(dep) { return "/DrMariam/"+dep };const seen = {};const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (true && deps && deps.length > 0) {
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
    promise = Promise.allSettled(
      deps.map((dep) => {
        dep = assetsURL(dep);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};

let counselingFlashcards = [], counselingExams = [], counselingCases = [];
let diseasesFlashcards = [], diseasesExams = [], diseasesCases = [];
let drugFlashcards = [], drugExams = [], drugCases = [];
let lawFlashcards = [], lawExams = [], lawCases = [];
try {
  const m = await __vitePreload(() => import('./Counseling-BQrLX5bh.js'),true?[]:void 0);
  counselingFlashcards = m.counselingFlashcards || [];
  counselingExams = m.counselingExams || [];
  counselingCases = m.counselingCases || [];
} catch (e) {
  console.warn("[MARIAM] Counseling data failed to load:", e.message);
}
try {
  const m = await __vitePreload(() => import('./Diseases-BD0cyV2C.js'),true?[]:void 0);
  diseasesFlashcards = m.diseasesFlashcards || [];
  diseasesExams = m.diseasesExams || [];
  diseasesCases = m.diseasesCases || [];
} catch (e) {
  console.warn("[MARIAM] Diseases data failed to load:", e.message);
}
try {
  const m = await __vitePreload(() => import('./drugData-CvfaZtB4.js'),true?[]:void 0);
  drugFlashcards = m.drugFlashcards || [];
  drugExams = m.drugExams || [];
  drugCases = m.drugCases || [];
} catch (e) {
  console.warn("[MARIAM] Drug data failed to load:", e.message);
}
try {
  const m = await __vitePreload(() => import('./lawData--3LNKORE.js'),true?[]:void 0);
  lawFlashcards = m.lawFlashcards || [];
  lawExams = m.lawExams || [];
  lawCases = m.lawCases || [];
} catch (e) {
  console.warn("[MARIAM] Law data failed to load:", e.message);
}
(() => {
  let vp = document.querySelector('meta[name="viewport"]');
  if (!vp) {
    vp = document.createElement("meta");
    vp.name = "viewport";
    document.head.appendChild(vp);
  }
  if (!vp.content.includes("viewport-fit=cover")) {
    vp.content = "width=device-width, initial-scale=1, viewport-fit=cover";
  }
  document.documentElement.style.cssText += "height:100%;background:transparent;";
  document.body.style.cssText += "height:100%;background:transparent;margin:0;padding:0;overflow:hidden;";
})();
const loadScript = async (src, globalName) => {
  if (window[globalName]) return window[globalName];
  return new Promise((res, rej) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => {
      if (window[globalName]) res(window[globalName]);
      else rej(new Error(`Script loaded but global '${globalName}' not found at ${src}`));
    };
    s.onerror = () => rej(new Error(`Network error loading ${globalName} from ${src}. Check your internet connection.`));
    document.head.appendChild(s);
  });
};
const loadMammoth = () => loadScript(CONFIG.MAMMOTH_CDN, "mammoth");
const loadXLSX = () => loadScript(CONFIG.XLSX_CDN, "XLSX");
const loadJsPDF = () => loadScript(CONFIG.JSPDF_CDN, "jspdf");
const CONFIG = Object.freeze({
  MARIAM_IMG: "https://raw.githubusercontent.com/Waeil55/DrMariam/main/M.jpeg",
  NAV_H: 72,
  // px — mobile bottom nav height
  APP_VER: "v7.0 ULTRA",
  CHUNK: 3500,
  // chars per virtual page for non-PDF files
  MAX_TOKENS: 8e3,
  // default AI response ceiling
  DB_NAME: "MariamProDB_v70",
  DB_VERSION: 9,
  PDF_CDN: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105",
  MAMMOTH_CDN: "https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js",
  XLSX_CDN: "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js",
  JSPDF_CDN: "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",
  RETRY_ATTEMPTS: 2,
  PARALLEL_CONCURRENCY: 50
});
const { MARIAM_IMG, NAV_H, APP_VER, CHUNK } = CONFIG;
const logError = (context, err) => {
  console.error(`[MariamPro][${context}]`, err?.message || err);
};
const openDB = () => new Promise((resolve, reject) => {
  if (!window.indexedDB) {
    return reject(new Error("IndexedDB is not supported in this browser."));
  }
  const request = indexedDB.open(CONFIG.DB_NAME, CONFIG.DB_VERSION);
  request.onupgradeneeded = (event) => {
    const db = event.target.result;
    const oldV = event.oldVersion;
    if (oldV < 1) {
      if (!db.objectStoreNames.contains("files")) db.createObjectStore("files");
      if (!db.objectStoreNames.contains("appState")) db.createObjectStore("appState");
    }
    if (oldV >= 1 && oldV < 9) {
      if (!db.objectStoreNames.contains("files")) db.createObjectStore("files");
      if (!db.objectStoreNames.contains("appState")) db.createObjectStore("appState");
    }
  };
  request.onsuccess = () => resolve(request.result);
  request.onerror = () => {
    const msg = `Failed to open IndexedDB: ${request.error?.message || "unknown error"}`;
    logError("openDB", msg);
    reject(new Error(msg));
  };
  request.onblocked = () => {
    logError("openDB", "Database upgrade blocked — close other tabs running this app.");
  };
});
const dbOp = async (store, mode, op) => {
  let db;
  try {
    db = await openDB();
  } catch (err) {
    throw new Error(`DB open failed for store '${store}': ${err.message}`);
  }
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, mode);
    const objectStore = tx.objectStore(store);
    let result;
    try {
      const request = op(objectStore);
      if (request && typeof request.onsuccess !== "undefined") {
        request.onsuccess = () => {
          result = request.result;
        };
        request.onerror = () => reject(new Error(`IDB request error (${store}): ${request.error?.message}`));
      }
    } catch (err) {
      return reject(err);
    }
    tx.oncomplete = () => resolve(result);
    tx.onerror = () => reject(new Error(`IDB transaction error (${store}): ${tx.error?.message}`));
    tx.onabort = () => reject(new Error("IDB transaction aborted"));
  });
};
const saveFile = (id, data) => dbOp("files", "readwrite", (s) => {
  s.put(data, id);
});
const getFile = (id) => dbOp("files", "readonly", (s) => s.get(id));
const delFile = (id) => dbOp("files", "readwrite", (s) => {
  s.delete(id);
});
const saveState = (key, val) => dbOp("appState", "readwrite", (s) => {
  s.put(val, key);
});
const getState = (key) => dbOp("appState", "readonly", (s) => s.get(key));
const loadPdfJs = async () => {
  if (window.pdfjsLib) return window.pdfjsLib;
  const base = CONFIG.PDF_CDN;
  let lastErr;
  for (let attempt = 1; attempt <= CONFIG.RETRY_ATTEMPTS + 1; attempt++) {
    try {
      await new Promise((resolve, reject) => {
        const sc = document.createElement("script");
        sc.src = `${base}/pdf.min.js`;
        sc.onload = () => {
          if (!window.pdfjsLib) {
            return reject(new Error("PDF.js script loaded but pdfjsLib global not found."));
          }
          window.pdfjsLib.GlobalWorkerOptions.workerSrc = `${base}/pdf.worker.min.js`;
          resolve();
        };
        sc.onerror = () => reject(new Error(`Network error loading PDF.js from ${sc.src}`));
        document.body.appendChild(sc);
      });
      return window.pdfjsLib;
    } catch (err) {
      lastErr = err;
      logError(`loadPdfJs attempt ${attempt}`, err);
      if (attempt <= CONFIG.RETRY_ATTEMPTS) {
        await new Promise((r) => setTimeout(r, 1e3 * attempt));
        if (window.pdfjsLib) return window.pdfjsLib;
      }
    }
  }
  throw new Error(
    `Could not load PDF renderer after ${CONFIG.RETRY_ATTEMPTS + 1} attempts. Check your internet connection. (${lastErr?.message})`
  );
};
const getFileCategory = (file) => {
  const n = file.name.toLowerCase();
  const t = file.type || "";
  if (t === "application/pdf" || n.endsWith(".pdf")) return "pdf";
  if (t.includes("wordprocessingml") || t.includes("msword") || n.endsWith(".docx") || n.endsWith(".doc")) return "word";
  if (t.includes("spreadsheetml") || t.includes("ms-excel") || n.endsWith(".xlsx") || n.endsWith(".xls")) return "spreadsheet";
  if (n.endsWith(".csv") || t === "text/csv") return "csv";
  if (t.startsWith("image/")) return "image";
  const textExts = [".txt", ".md", ".markdown", ".js", ".ts", ".jsx", ".tsx", ".py", ".java", ".c", ".cpp", ".go", ".rs", ".rb", ".php", ".html", ".css", ".json", ".yaml", ".yml", ".xml", ".sh", ".bash", ".zsh", ".sql", ".r", ".swift", ".kt", ".dart", ".vue", ".svelte", ".toml", ".ini", ".env", ".log"];
  if (t.startsWith("text/") || textExts.some((e) => n.endsWith(e))) return "text";
  return "unknown";
};
const FILE_ICONS = {
  pdf: { Icon: FileText, from: "from-red-500", to: "to-rose-600", label: "PDF" },
  word: { Icon: FileText, from: "from-blue-500", to: "to-blue-700", label: "Word" },
  spreadsheet: { Icon: Table, from: "from-emerald-500", to: "to-green-700", label: "Excel" },
  csv: { Icon: Table, from: "from-teal-500", to: "to-emerald-700", label: "CSV" },
  image: { Icon: Image, from: "from-purple-500", to: "to-violet-700", label: "Image" },
  text: { Icon: FileCode, from: "from-amber-500", to: "to-orange-600", label: "Text" },
  unknown: { Icon: FileUp, from: "from-slate-500", to: "to-slate-700", label: "File" }
};
const chunkText = (text) => {
  const pages = {};
  let page = 1, cur = "";
  const parts = text.split(/\n\n+/);
  for (const part of parts) {
    if (!part.trim()) continue;
    if (cur.length + part.length > CHUNK && cur) {
      pages[page++] = cur.trim();
      cur = part + "\n\n";
    } else cur += part + "\n\n";
  }
  if (cur.trim()) pages[page] = cur.trim();
  if (!Object.keys(pages).length) pages[1] = text.trim().substring(0, CHUNK) || "(empty)";
  return { pagesText: pages, totalPages: page };
};
const extractPdf = async (file, onProgress) => {
  const ab = await file.arrayBuffer();
  const pdfjs = await loadPdfJs();
  const pdf = await pdfjs.getDocument({ data: ab.slice(0) }).promise;
  const tot = pdf.numPages;
  const pagesText = {};
  for (let i = 1; i <= tot; i++) {
    try {
      const pg = await pdf.getPage(i);
      const tc = await pg.getTextContent();
      pagesText[i] = tc.items.map((s) => s.str).join(" ");
      pg.cleanup();
    } catch {
      pagesText[i] = "";
    }
    if (i % 5 === 0) await new Promise((r) => setTimeout(r, 0));
    if (onProgress) onProgress(i / tot);
  }
  try {
    await pdf.destroy();
  } catch {
  }
  return { buffer: ab, pagesText, totalPages: tot, fileCategory: "pdf" };
};
const extractWord = async (file) => {
  const ab = await file.arrayBuffer();
  let text = "";
  try {
    const mammoth = await loadMammoth();
    const r = await mammoth.extractRawText({ arrayBuffer: ab });
    text = r.value || "";
  } catch (e) {
    text = `Could not extract Word content: ${e.message}`;
  }
  const { pagesText, totalPages } = chunkText(text);
  return { pagesText, totalPages, rawText: text, fileCategory: "word" };
};
const extractSpreadsheet = async (file) => {
  const ab = await file.arrayBuffer();
  let text = "";
  try {
    const XLSX = await loadXLSX();
    const wb = XLSX.read(new Uint8Array(ab), { type: "array" });
    const parts = wb.SheetNames.map((name) => {
      const ws = wb.Sheets[name];
      const csv = XLSX.utils.sheet_to_csv(ws, { skipHidden: true });
      return `=== Sheet: ${name} ===
${csv}`;
    });
    text = parts.join("\n\n");
  } catch (e) {
    text = `Spreadsheet parse error: ${e.message}`;
  }
  const { pagesText, totalPages } = chunkText(text);
  return { pagesText, totalPages, rawText: text, fileCategory: "spreadsheet" };
};
const extractCsv = async (file) => {
  const text = await file.text();
  const { pagesText, totalPages } = chunkText(text);
  return { pagesText, totalPages, rawText: text, fileCategory: "csv" };
};
const extractImage = async (file) => {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const b64 = e.target.result.split(",")[1];
      const pagesText = { 1: `[IMAGE FILE: ${file.name}]
Size: ${(file.size / 1024).toFixed(1)}KB
Type: ${file.type}

This is an image file. Use the AI Vision feature to analyze its content.` };
      res({ pagesText, totalPages: 1, imageBase64: b64, imageType: file.type || "image/jpeg", fileCategory: "image" });
    };
    reader.onerror = rej;
    reader.readAsDataURL(file);
  });
};
const extractText = async (file) => {
  let text = "";
  try {
    text = await file.text();
  } catch (e) {
    text = `Could not read file: ${e.message}`;
  }
  const { pagesText, totalPages } = chunkText(text);
  return { pagesText, totalPages, rawText: text, fileCategory: "text" };
};
const extractUniversal = async (file, onProgress) => {
  const cat = getFileCategory(file);
  switch (cat) {
    case "pdf":
      return extractPdf(file, onProgress);
    case "word":
      return extractWord(file);
    case "spreadsheet":
      return extractSpreadsheet(file);
    case "csv":
      return extractCsv(file);
    case "image":
      return extractImage(file);
    default:
      return extractText(file);
  }
};
const callAI = async (prompt, expectJson, strictMode, settings = {}, maxTokens = 8e3) => {
  const { provider = "anthropic", apiKey = "", baseUrl = "", model = "" } = settings;
  const sys = `CRITICAL INSTRUCTION: You are an expert AI that generates EXCLUSIVELY from the provided PDF/document content below. You must NEVER use outside knowledge, general facts, or information not present in the document. Every question, answer, explanation, and vignette must be directly traceable to the document text. If a concept is not in the document, do not include it. Generate long, detailed, comprehensive content — questions should be multi-sentence with rich clinical/academic context. Explanations must be thorough (3-5 sentences minimum). ${strictMode ? "STRICT MODE: Cite [Page X] for every single item." : "Always reference the source material explicitly."}

MEDICINE RULE — CRITICAL: Whenever any explanation, answer, flashcard, exam question, or clinical case involves a medication or drug, you MUST begin that explanation/answer/description by stating the brand name first, followed by the generic name in parentheses. Example: "Tylenol (acetaminophen)" or "Lipitor (atorvastatin)". If only the generic name is mentioned in the document, look it up from pharmacological knowledge and always present as: "BrandName (generic name) — [explanation]". This rule applies to ALL content types: flashcards, exams, clinical cases, summaries, and chat responses.`;
  const jsonSuffix = expectJson ? "\n\nRETURN ONLY RAW JSON. No markdown. No explanation. No backticks." : "";
  const finalPrompt = prompt + jsonSuffix;
  if (provider === "anthropic") {
    const r2 = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json", ...apiKey ? { "x-api-key": apiKey } : {} },
      body: JSON.stringify({
        model: model || "claude-sonnet-4-20250514",
        max_tokens: Math.min(maxTokens, 8192),
        system: sys,
        messages: [{ role: "user", content: finalPrompt }]
      })
    });
    if (!r2.ok) {
      const e = await r2.json().catch(() => ({}));
      throw new Error(e.error?.message || r2.statusText);
    }
    const d2 = await r2.json();
    return d2.content[0].text.trim();
  }
  if (provider === "gemini") {
    if (!apiKey) throw new Error("Gemini API key required.");
    const mdl = model || "gemini-2.0-flash";
    const r2 = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${mdl}:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: sys }] },
        contents: [{ role: "user", parts: [{ text: finalPrompt }] }],
        generationConfig: { maxOutputTokens: Math.min(maxTokens, 8192), temperature: strictMode ? 0 : 0.4 }
      })
    });
    if (!r2.ok) {
      const e = await r2.json().catch(() => ({}));
      throw new Error(e.error?.message || r2.statusText);
    }
    const d2 = await r2.json();
    return d2.candidates[0].content.parts[0].text.trim();
  }
  if (!apiKey) throw new Error("API key required — add it in Settings.");
  const base = (baseUrl || "https://api.openai.com").replace(/\/$/, "");
  const r = await fetch(`${base}/v1/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${apiKey}` },
    body: JSON.stringify({
      model: model || "gpt-4o-mini",
      messages: [{ role: "system", content: sys }, { role: "user", content: finalPrompt }],
      max_tokens: Math.min(maxTokens, 8192),
      temperature: strictMode ? 0 : 0.4,
      ...expectJson && provider === "openai" ? { response_format: { type: "json_object" } } : {}
    })
  });
  if (!r.ok) {
    const e = await r.json().catch(() => ({}));
    throw new Error(e.error?.message || r.statusText);
  }
  const d = await r.json();
  return d.choices[0].message.content.trim();
};
const callAIWithVision = async (prompt, imageBase64, imageType, settings = {}, maxTokens = 4e3) => {
  const { provider = "anthropic", apiKey = "", model = "" } = settings;
  if (provider === "anthropic") {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json", ...apiKey ? { "x-api-key": apiKey } : {} },
      body: JSON.stringify({
        model: model || "claude-sonnet-4-20250514",
        max_tokens: Math.min(maxTokens, 8192),
        messages: [{
          role: "user",
          content: [
            { type: "image", source: { type: "base64", media_type: imageType, data: imageBase64 } },
            { type: "text", text: prompt }
          ]
        }]
      })
    });
    if (!r.ok) {
      const e = await r.json().catch(() => ({}));
      throw new Error(e.error?.message || r.statusText);
    }
    const d = await r.json();
    return d.content[0].text.trim();
  }
  return callAI(`[Image file provided. Describe based on filename context]
${prompt}`, false, false, settings, maxTokens);
};
const callAIStreaming = async (prompt, onChunk, settings = {}, maxTokens = 4e3) => {
  const { provider = "anthropic", apiKey = "", model = "" } = settings;
  if (provider !== "anthropic") {
    const full = await callAI(prompt, false, false, settings, maxTokens);
    onChunk(full);
    return full;
  }
  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json", ...apiKey ? { "x-api-key": apiKey } : {} },
    body: JSON.stringify({
      model: model || "claude-sonnet-4-20250514",
      max_tokens: Math.min(maxTokens, 8192),
      stream: true,
      messages: [{ role: "user", content: prompt }]
    })
  });
  if (!r.ok) {
    const e = await r.json().catch(() => ({}));
    throw new Error(e.error?.message || r.statusText);
  }
  const reader = r.body.getReader();
  const decoder = new TextDecoder();
  let text = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    const lines = decoder.decode(value, { stream: true }).split("\n");
    for (const line of lines) {
      if (!line.startsWith("data: ")) continue;
      try {
        const d = JSON.parse(line.slice(6));
        if (d.type === "content_block_delta" && d.delta?.type === "text_delta") {
          text += d.delta.text;
          onChunk(text);
        }
      } catch {
      }
    }
  }
  return text;
};
const parseJson = (txt) => {
  let cleaned = txt.replace(/```json/gi, "").replace(/```/g, "").trim();
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start !== -1 && end !== -1 && end > start) cleaned = cleaned.substring(start, end + 1);
  try {
    return JSON.parse(cleaned);
  } catch (err) {
    throw new Error(`AI response was not valid JSON. Raw text (first 200 chars): ${cleaned.substring(0, 200)}`);
  }
};
const runParallel = async (tasks, concurrency = 10, onProgress) => {
  const results = [];
  for (let i = 0; i < tasks.length; i += concurrency) {
    const batch = tasks.slice(i, i + concurrency);
    const batchResults = await Promise.allSettled(batch.map((fn) => fn()));
    results.push(...batchResults);
    if (onProgress) onProgress(Math.min(i + concurrency, tasks.length), tasks.length);
  }
  return results;
};
const exportToPDF = async (type, data, title, addToast) => {
  try {
    const lib = await loadJsPDF();
    const jsPDF = lib.jspdf?.jsPDF || lib.jsPDF || window.jspdf?.jsPDF;
    if (!jsPDF) throw new Error("jsPDF failed to load.");
    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const pageW = 210, pageH = 297, margin = 15, colW = pageW - margin * 2;
    let y = margin;
    const checkPage = (needed = 12) => {
      if (y + needed > pageH - margin) {
        doc.addPage();
        y = margin;
      }
    };
    const drawLine = () => {
      doc.setDrawColor(200, 200, 200);
      doc.line(margin, y, pageW - margin, y);
      y += 4;
    };
    doc.setFillColor(99, 102, 241);
    doc.rect(0, 0, pageW, 18, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("MARIAM PRO", margin, 11);
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.text(`${type.toUpperCase()} · ${title}`, margin + 40, 11);
    doc.text(`Generated ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`, pageW - margin - 35, 11);
    y = 24;
    doc.setTextColor(30, 30, 30);
    if (type === "flashcards") {
      data.forEach((card, i) => {
        checkPage(28);
        doc.setFillColor(248, 250, 252);
        doc.roundedRect(margin, y, colW, 24, 2, 2, "F");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9);
        doc.setTextColor(99, 102, 241);
        doc.text(`Q${i + 1}`, margin + 3, y + 6);
        doc.setTextColor(30, 30, 30);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        const qLines = doc.splitTextToSize(card.q || "", colW - 12);
        doc.text(qLines, margin + 10, y + 6);
        const qH = Math.min(qLines.length * 4.5, 14);
        doc.setFillColor(238, 240, 255);
        doc.roundedRect(margin + 2, y + qH + 2, colW - 4, 10, 1, 1, "F");
        doc.setTextColor(79, 70, 229);
        doc.setFontSize(8.5);
        const aLines = doc.splitTextToSize(card.a || "", colW - 10);
        doc.text(aLines.slice(0, 2), margin + 5, y + qH + 7);
        y += 28;
        doc.setTextColor(30, 30, 30);
      });
    } else if (type === "exam") {
      data.forEach((q, i) => {
        const opts = q.options || [];
        const needed = 22 + opts.length * 7 + (q.explanation ? 12 : 0);
        checkPage(needed);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9.5);
        doc.setTextColor(30, 30, 30);
        const qLines = doc.splitTextToSize(`Q${i + 1}. ${q.q || q.question || ""}`, colW);
        doc.text(qLines, margin, y);
        y += qLines.length * 5 + 3;
        opts.forEach((opt, oi) => {
          const isCorrect = oi === q.correct;
          if (isCorrect) {
            doc.setFillColor(220, 252, 231);
            doc.roundedRect(margin, y - 3.5, colW, 6.5, 1, 1, "F");
          }
          doc.setFont("helvetica", isCorrect ? "bold" : "normal");
          doc.setFontSize(8.5);
          doc.setTextColor(isCorrect ? 22 : 80, isCorrect ? 163 : 80, isCorrect ? 74 : 80);
          doc.text(`${String.fromCharCode(65 + oi)}. ${opt}`, margin + 3, y);
          if (isCorrect) {
            doc.setTextColor(22, 163, 74);
            doc.text("✓", pageW - margin - 5, y);
          }
          y += 6.5;
        });
        if (q.explanation) {
          checkPage(12);
          doc.setFillColor(254, 252, 232);
          doc.roundedRect(margin, y, colW, 10, 1, 1, "F");
          doc.setFont("helvetica", "italic");
          doc.setFontSize(7.5);
          doc.setTextColor(120, 100, 20);
          const expLines = doc.splitTextToSize(q.explanation, colW - 6);
          doc.text(expLines.slice(0, 2), margin + 3, y + 4);
          y += 12;
        }
        drawLine();
        y += 2;
        doc.setTextColor(30, 30, 30);
      });
    } else if (type === "cases") {
      data.forEach((cas, i) => {
        checkPage(40);
        const q = cas.examQuestion || cas;
        doc.setFillColor(240, 249, 255);
        doc.roundedRect(margin, y, colW, 8, 2, 2, "F");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(14, 116, 144);
        doc.text(`Case ${i + 1}: ${cas.title || "Clinical Case"}`, margin + 3, y + 5.5);
        y += 11;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8.5);
        doc.setTextColor(30, 30, 30);
        const vigLines = doc.splitTextToSize(cas.vignette || "", colW);
        doc.text(vigLines.slice(0, 6), margin, y);
        y += Math.min(vigLines.length, 6) * 4.5 + 5;
        if (cas.diagnosis) {
          doc.setFont("helvetica", "bold");
          doc.setFontSize(8.5);
          doc.setTextColor(16, 185, 129);
          doc.text(`Dx: ${cas.diagnosis}`, margin, y);
          y += 6;
        }
        const opts = q.options || [];
        opts.forEach((opt, oi) => {
          const isCorrect = oi === q.correct;
          doc.setFont("helvetica", isCorrect ? "bold" : "normal");
          doc.setFontSize(8.5);
          doc.setTextColor(isCorrect ? 22 : 80, isCorrect ? 163 : 80, isCorrect ? 74 : 80);
          doc.text(`${String.fromCharCode(65 + oi)}. ${opt}`, margin + 3, y);
          y += 6;
        });
        drawLine();
        y += 3;
        doc.setTextColor(30, 30, 30);
      });
    }
    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFontSize(7);
      doc.setTextColor(160, 160, 160);
      doc.text(`MARIAM PRO · ${title}`, margin, pageH - 6);
      doc.text(`Page ${i} of ${totalPages}`, pageW - margin - 18, pageH - 6);
    }
    doc.save(`${title.replace(/[^a-zA-Z0-9]/g, "_")}_${type}.pdf`);
    if (addToast) addToast("PDF exported! 📄", "success");
  } catch (e) {
    console.error("PDF export error:", e);
    if (addToast) addToast(`PDF export failed: ${e.message}`, "error");
  }
};
if (!window.__MARIAM_ANALYTICS__) window.__MARIAM_ANALYTICS__ = {
  sessions: [],
  streak: 0,
  lastStudy: null,
  totalCards: 0,
  totalExams: 0,
  scores: []
};
const ANALYTICS = window.__MARIAM_ANALYTICS__;
const trackStudy = (type, score, total) => {
  const today = (/* @__PURE__ */ new Date()).toDateString();
  if (ANALYTICS.lastStudy !== today) {
    ANALYTICS.streak = ANALYTICS.lastStudy === new Date(Date.now() - 864e5).toDateString() ? ANALYTICS.streak + 1 : 1;
    ANALYTICS.lastStudy = today;
  }
  if (type === "flashcard") ANALYTICS.totalCards++;
  if (type === "exam" && score !== void 0) ANALYTICS.scores.push({ date: Date.now(), score, total, pct: Math.round(score / total * 100) });
  ANALYTICS.sessions.push({ type, date: Date.now() });
  if (ANALYTICS.sessions.length > 500) ANALYTICS.sessions = ANALYTICS.sessions.slice(-500);
};
function useKeyboardShortcuts(shortcuts) {
  reactExports.useEffect(() => {
    const handler = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      for (const [combo, fn] of shortcuts) {
        const parts = combo.toLowerCase().split("+");
        const key = parts[parts.length - 1];
        const ctrl = parts.includes("ctrl");
        parts.includes("meta");
        const alt = parts.includes("alt");
        if (e.key.toLowerCase() === key && (ctrl ? e.ctrlKey || e.metaKey : !e.ctrlKey) && (alt ? e.altKey : !e.altKey)) {
          e.preventDefault();
          fn();
          break;
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [shortcuts]);
}
function GlobalSearch({ docs, flashcards, exams, cases, notes, onNavigate, onClose }) {
  const [q, setQ] = reactExports.useState("");
  const inputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    inputRef.current?.focus();
  }, []);
  const results = reactExports.useMemo(() => {
    if (!q.trim() || q.length < 2) return [];
    const lq = q.toLowerCase();
    const out = [];
    docs.forEach((d) => {
      if (d.name.toLowerCase().includes(lq)) out.push({ type: "doc", icon: FileText, label: d.name, sub: `${d.totalPages} pages`, color: "#6366f1", action: () => onNavigate("reader", d.id) });
    });
    flashcards.forEach((set) => set.cards?.forEach((c) => {
      if ((c.q + c.a).toLowerCase().includes(lq)) out.push({ type: "card", icon: Layers, label: c.q.slice(0, 60), sub: set.title, color: "#8b5cf6", action: () => onNavigate("flashcards") });
    }));
    exams.forEach((ex) => ex.questions?.forEach((q2) => {
      if ((q2.q || "").toLowerCase().includes(lq)) out.push({ type: "exam", icon: CheckSquare, label: (q2.q || "").slice(0, 60), sub: ex.title, color: "#3b82f6", action: () => onNavigate("exams") });
    }));
    cases.forEach((set) => set.questions?.forEach((c) => {
      if ((c.vignette || "").toLowerCase().includes(lq)) out.push({ type: "case", icon: Activity, label: (c.title || c.vignette || "").slice(0, 60), sub: set.title, color: "#06b6d4", action: () => onNavigate("cases") });
    }));
    notes.forEach((n) => {
      if ((n.title + n.content).toLowerCase().includes(lq)) out.push({ type: "note", icon: PenLine, label: n.title, sub: n.content?.slice(0, 50), color: "#f59e0b", action: () => onNavigate("library") });
    });
    return out.slice(0, 12);
  }, [q, docs, flashcards, exams, cases, notes]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 z-[9999] flex items-start justify-center pt-16 px-4",
      style: { background: "rgba(0,0,0,0.7)", backdropFilter: "blur(12px)" },
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "w-full max-w-2xl glass rounded-3xl shadow-2xl overflow-hidden animate-slide-up border border-[var(--accent)]/30",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-5 py-4 border-b border-[color:var(--border2,var(--border))]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 20, className: "text-[var(--accent)] shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  ref: inputRef,
                  value: q,
                  onChange: (e) => setQ(e.target.value),
                  placeholder: "Search everything — documents, cards, questions, cases, notes…",
                  className: "flex-1 bg-transparent text-sm outline-none font-medium placeholder:opacity-40 text-[var(--text)]"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { className: "text-xs font-black opacity-30 px-2 py-1 glass rounded-lg", children: "ESC" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "opacity-40 hover:opacity-80", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 }) })
            ] }),
            q.length >= 2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-96 overflow-y-auto custom-scrollbar", children: results.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-12 text-center opacity-40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 32, className: "mx-auto mb-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-bold", children: [
                'No results for "',
                q,
                '"'
              ] })
            ] }) : results.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => {
                  r.action();
                  onClose();
                },
                className: "w-full flex items-center gap-4 px-5 py-3.5 hover:bg-[var(--accent)]/5 transition-colors text-left border-b border-[color:var(--border2,var(--border))]/50 last:border-0",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl flex items-center justify-center shrink-0", style: { background: r.color + "20" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(r.icon, { size: 16, style: { color: r.color } }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold truncate", children: r.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-50 truncate", children: r.sub })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest opacity-30 px-2 py-1 glass rounded-lg shrink-0", children: r.type })
                ]
              },
              i
            )) }),
            !q && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 grid grid-cols-2 sm:grid-cols-4 gap-2", children: [["Documents", "doc", FileText, "#6366f1"], ["Flashcards", "flashcards", Layers, "#8b5cf6"], ["Exams", "exams", CheckSquare, "#3b82f6"], ["Cases", "cases", Activity, "#06b6d4"]].map(([lbl, v, Icon, col]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => {
                  onNavigate(v);
                  onClose();
                },
                className: "glass rounded-2xl p-3 flex flex-col items-center gap-2 hover:border-[var(--accent)]/30 transition-all",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20, style: { color: col } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black", children: lbl })
                ]
              },
              v
            )) })
          ]
        }
      )
    }
  );
}
if (!window.__MARIAM_BG__) window.__MARIAM_BG__ = { tasks: {}, listeners: /* @__PURE__ */ new Set() };
const BG = window.__MARIAM_BG__;
const bgEmit = () => BG.listeners.forEach((fn) => fn({ ...BG.tasks }));
const bgStart = (id, meta) => {
  BG.tasks[id] = { ...meta, startedAt: Date.now(), status: "running" };
  bgEmit();
};
const bgUpdate = (id, patch) => {
  if (BG.tasks[id]) {
    BG.tasks[id] = { ...BG.tasks[id], ...patch };
    bgEmit();
  }
};
const bgFinish = (id, result) => {
  if (BG.tasks[id]) {
    BG.tasks[id] = { ...BG.tasks[id], status: "done", result, finishedAt: Date.now() };
    bgEmit();
  }
};
const bgFail = (id, err) => {
  if (BG.tasks[id]) {
    BG.tasks[id] = { ...BG.tasks[id], status: "error", error: err };
    bgEmit();
  }
};
const bgClear = (id) => {
  delete BG.tasks[id];
  bgEmit();
};
function useBgTasks() {
  const [tasks, setTasks] = reactExports.useState({ ...BG.tasks });
  reactExports.useEffect(() => {
    const fn = (t) => setTasks({ ...t });
    BG.listeners.add(fn);
    return () => BG.listeners.delete(fn);
  }, []);
  return tasks;
}
const runBgGeneration = async ({ taskId, docId, docName, taskType, startPage, endPage, count, difficultyLevel, targetLang, settings, onSave }) => {
  const batchSize = 40;
  const isBatch = count > batchSize && ["flashcards", "exam", "cases"].includes(taskType);
  const numBatches = isBatch ? Math.ceil(count / batchSize) : 1;
  bgStart(taskId, { type: taskType, docName, msg: "Loading document…", done: 0, total: numBatches });
  try {
    const fileData = await getFile(docId);
    if (!fileData) throw new Error("Document not found in storage.");
    const pageRange = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    const textChunks = pageRange.map((p) => fileData.pagesText?.[p] || "").filter(Boolean);
    const fullText = textChunks.join("\n\n").substring(0, 8e4);
    if (!fullText.trim()) throw new Error("No text could be extracted from the selected page range.");
    bgUpdate(taskId, { msg: "Generating…", done: 0, total: numBatches });
    const MEDICINE_RULE = `

MEDICINE RULE — MANDATORY: For every medication/drug mentioned in any question, answer, explanation, or vignette, ALWAYS write the brand name first followed by generic name in parentheses. Format: "BrandName (generic)" e.g. "Lasix (furosemide)", "Tylenol (acetaminophen)", "Glucophage (metformin)". Apply this rule to EVERY drug in EVERY item.`;
    const makePrompt = (bc) => {
      const base = `DOCUMENT: "${docName}" | Pages ${startPage}-${endPage}

DOCUMENT CONTENT (generate ONLY from this):
${fullText}

DIFFICULTY: ${difficultyLevel}${MEDICINE_RULE}

`;
      if (taskType === "flashcards") return `${base}YOU MUST generate EXACTLY ${bc} flashcards — no more, no fewer. Count carefully before responding. Use ONLY topics from the document above. Each question must be a complete, multi-sentence clinical/academic question. Answers must be comprehensive (3-5 sentences). RETURN JSON ONLY — the "items" array MUST contain EXACTLY ${bc} objects: {"items":[{"q":"detailed question","a":"comprehensive answer","evidence":"exact quote","sourcePage":1}]}`;
      if (taskType === "exam") return `${base}YOU MUST generate EXACTLY ${bc} MCQ questions — no more, no fewer. Count carefully before responding. Use ONLY content from the document. Each stem must be 2-4 sentences. All 4 options must be plausible. Explanation must be 3-5 sentences. RETURN JSON ONLY — the "items" array MUST contain EXACTLY ${bc} objects: {"items":[{"q":"detailed question stem","options":["A. option","B. option","C. option","D. option"],"correct":0,"explanation":"thorough explanation","evidence":"exact quote","sourcePage":1}]}`;
      if (taskType === "cases") return `${base}YOU MUST generate EXACTLY ${bc} clinical cases — no more, no fewer. Count carefully. Use ONLY document content. Each case needs: vignette (8-12 sentences with demographics/HPI/PMH/meds/vitals/exam), 3 lab panels (12+ total rows), examQuestion with 5 options (A-E). RETURN JSON ONLY — the "items" array MUST contain EXACTLY ${bc} objects: {"items":[{"vignette":"8-12 sentence case","title":"title","diagnosis":"diagnosis","labPanels":[{"panelName":"COMPLETE BLOOD COUNT","rows":[{"test":"WBC","result":"value","flag":"H","range":"4.5-11.0","units":"K/uL"},{"test":"Hgb","result":"value","flag":"","range":"12-16","units":"g/dL"},{"test":"Hct","result":"value","flag":"","range":"36-46","units":"%"},{"test":"Platelets","result":"value","flag":"","range":"150-400","units":"K/uL"},{"test":"MCV","result":"value","flag":"","range":"80-100","units":"fL"}]},{"panelName":"BASIC METABOLIC PANEL","rows":[{"test":"Sodium","result":"value","flag":"","range":"135-145","units":"mEq/L"},{"test":"Potassium","result":"value","flag":"","range":"3.5-5.0","units":"mEq/L"},{"test":"Creatinine","result":"value","flag":"","range":"0.6-1.2","units":"mg/dL"},{"test":"BUN","result":"value","flag":"","range":"7-20","units":"mg/dL"},{"test":"Glucose","result":"value","flag":"","range":"70-100","units":"mg/dL"}]},{"panelName":"DISEASE-SPECIFIC PANEL","rows":[{"test":"test1","result":"value","flag":"H","range":"ref","units":"u"},{"test":"test2","result":"value","flag":"L","range":"ref","units":"u"},{"test":"test3","result":"value","flag":"","range":"ref","units":"u"},{"test":"test4","result":"value","flag":"","range":"ref","units":"u"}]}],"examQuestion":{"q":"2-3 sentence question","options":["A) opt","B) opt","C) opt","D) opt","E) opt"],"correct":0,"explanation":"4-6 sentence explanation"}}]}`;
      return `${base}Analyze this content comprehensively using only the document provided.`;
    };
    const isJson = ["flashcards", "exam", "cases"].includes(taskType);
    const tasks = Array.from({ length: numBatches }, (_, i) => {
      const bc = i === numBatches - 1 ? count % batchSize === 0 ? batchSize : count % batchSize : batchSize;
      return () => callAI(makePrompt(bc), isJson, false, settings, 8e3);
    });
    let all = [];
    const results = await runParallel(tasks, 50, (done, total) => {
      bgUpdate(taskId, { done, total, msg: `${done}/${total} batches complete…` });
    });
    for (const r of results) {
      if (r.status === "fulfilled") {
        try {
          const p = parseJson(r.value);
          all = [...all, ...p.items || p.cases || p.questions || p.flashcards || []];
        } catch (e) {
          console.warn("BG parse err:", e.message);
        }
      }
    }
    if (!all.length) throw new Error("AI returned no parseable data. Try again with a different page range.");
    const finalData = all.slice(0, count);
    bgFinish(taskId, { type: taskType, data: finalData, pages: `${startPage}-${endPage}`, docName, count: finalData.length });
    if (onSave) onSave(finalData, taskId);
  } catch (e) {
    bgFail(taskId, e.message || String(e));
  }
};
function GlobalTaskIndicator({ onViewResult }) {
  const tasks = useBgTasks();
  const list = Object.entries(tasks);
  if (!list.length) return null;
  const running = list.filter(([, t]) => t.status === "running");
  const done = list.filter(([, t]) => t.status === "done");
  const errors = list.filter(([, t]) => t.status === "error");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-20 lg:bottom-6 right-3 z-[9990] flex flex-col gap-2 items-end pointer-events-none", style: { maxWidth: 320 }, children: [
    running.map(([id, t]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-auto glass rounded-2xl px-4 py-3 shadow-2xl border border-[var(--accent)]/30 flex items-center gap-3 animate-slide-in", style: { background: "var(--card)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-xl bg-[var(--accent)]/15 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader2, { size: 15, className: "text-[var(--accent)] animate-spin" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-black uppercase tracking-widest text-[var(--accent)] truncate", children: [
          t.type,
          " · ",
          t.docName?.slice(0, 22) || "…"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-50 font-bold", children: t.msg || "Generating…" }),
        t.total > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 w-32 h-1 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-[var(--accent)] rounded-full transition-all duration-500", style: { width: `${t.total ? (t.done || 0) / t.total * 100 : 10}%` } }) })
      ] })
    ] }, id)),
    done.map(([id, t]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "pointer-events-auto glass rounded-2xl px-4 py-3 shadow-2xl border border-emerald-500/30 flex items-center gap-3 animate-slide-in cursor-pointer hover:border-emerald-500/60 transition-colors",
        onClick: () => onViewResult && onViewResult(id, t),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-xl bg-emerald-500/15 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 15, className: "text-emerald-500" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-black uppercase tracking-widest text-emerald-500", children: [
              t.type,
              " ready!"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs opacity-50 font-bold", children: [
              t.result?.count || 0,
              " items · ",
              t.docName?.slice(0, 20) || "…",
              " · tap to save"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
            e.stopPropagation();
            bgClear(id);
          }, className: "text-xs opacity-40 hover:opacity-80 ml-1 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 }) })
        ]
      },
      id
    )),
    errors.map(([id, t]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-auto glass rounded-2xl px-4 py-3 shadow-2xl border border-red-500/30 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-xl bg-red-500/15 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { size: 18, className: "text-red-500" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black uppercase tracking-widest text-red-500", children: "Failed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-50 font-bold truncate", children: t.error?.slice(0, 40) || "Unknown error" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => bgClear(id), className: "text-xs opacity-40 hover:opacity-80 ml-1 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 }) })
    ] }, id))
  ] });
}
function QuickGenerateModal({
  type,
  docs,
  settings,
  onClose,
  onTaskStart,
  addToast,
  setFlashcards,
  setExams,
  setCases
}) {
  const [tab, setTab] = reactExports.useState("library");
  const [selDocId, setSelDocId] = reactExports.useState(docs[0]?.id || null);
  const [uploadedDoc, setUploadedDoc] = reactExports.useState(null);
  const [uploading, setUploading] = reactExports.useState(false);
  const [uploadPct, setUploadPct] = reactExports.useState(0);
  const [entireFile, setEntireFile] = reactExports.useState(true);
  const [startPage, setStartPage] = reactExports.useState(1);
  const [endPage, setEndPage] = reactExports.useState(1);
  const [count, setCount] = reactExports.useState(20);
  const [difficulty, setDifficulty] = reactExports.useState(2);
  const levels = ["Easy", "Medium", "Hard"];
  const inputRef = reactExports.useRef(null);
  const activeDoc = tab === "upload" ? uploadedDoc : docs.find((d) => d.id === selDocId) || null;
  reactExports.useEffect(() => {
    if (activeDoc) {
      setStartPage(1);
      setEndPage(activeDoc.totalPages || 1);
    }
  }, [activeDoc?.id]);
  const handleFileUpload = async (files) => {
    const file = files[0];
    if (!file) return;
    setUploading(true);
    setUploadPct(5);
    try {
      const data = await extractUniversal(file, (p) => setUploadPct(5 + p * 85));
      const id = "tmp_" + Date.now();
      const doc = {
        id,
        name: file.name,
        size: file.size,
        fileCategory: data.fileCategory,
        totalPages: data.totalPages,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      await saveFile(id, { ...data, name: file.name, size: file.size });
      setUploadedDoc(doc);
      setUploadPct(100);
      setStartPage(1);
      setEndPage(data.totalPages);
      addToast(`"${file.name}" loaded!`, "success");
    } catch (e) {
      addToast(e.message, "error");
    } finally {
      setUploading(false);
    }
  };
  const typeConfig = {
    flashcards: { label: "Flashcards", icon: Layers, color: "#6366f1" },
    exam: { label: "Exam", icon: CheckSquare, color: "#3b82f6" },
    cases: { label: "Cases", icon: Activity, color: "#8b5cf6" }
  };
  const tc = typeConfig[type] || typeConfig.flashcards;
  const Icon = tc.icon;
  const handleGo = () => {
    if (!activeDoc) {
      addToast("Select or upload a document first.", "error");
      return;
    }
    const sp = entireFile ? 1 : startPage;
    const ep = entireFile ? activeDoc.totalPages : endPage;
    const taskId = "task_" + Date.now();
    const onSave = (data, tid) => {
      const now = (/* @__PURE__ */ new Date()).toISOString();
      if (type === "flashcards") {
        const cards = data.map((c) => ({
          id: Date.now() + Math.random(),
          q: c.q,
          a: c.a,
          evidence: c.evidence,
          sourcePage: c.sourcePage,
          repetitions: 0,
          ef: 2.5,
          interval: 1,
          nextReview: Date.now(),
          lastReview: Date.now()
        }));
        setFlashcards((p) => [...p, {
          id: taskId,
          docId: activeDoc.id,
          sourcePages: `${sp}-${ep}`,
          title: `Cards — ${activeDoc.name.slice(0, 30)}`,
          cards,
          createdAt: now
        }]);
        addToast(`${cards.length} flashcards saved! ⚡`, "success");
      } else if (type === "exam") {
        setExams((p) => [...p, {
          id: taskId,
          docId: activeDoc.id,
          sourcePages: `${sp}-${ep}`,
          title: `Exam — ${activeDoc.name.slice(0, 30)}`,
          questions: data,
          createdAt: now
        }]);
        addToast(`${data.length} exam questions saved! ⚡`, "success");
      } else if (type === "cases") {
        setCases((p) => [...p, {
          id: taskId,
          docId: activeDoc.id,
          sourcePages: `${sp}-${ep}`,
          title: `Cases — ${activeDoc.name.slice(0, 30)}`,
          questions: data,
          createdAt: now
        }]);
        addToast(`${data.length} cases saved! ⚡`, "success");
      }
      bgClear(tid);
    };
    runBgGeneration({
      taskId,
      docId: activeDoc.id,
      docName: activeDoc.name,
      taskType: type,
      startPage: sp,
      endPage: ep,
      count,
      difficultyLevel: levels[difficulty - 1],
      settings,
      onSave
    });
    if (onTaskStart) onTaskStart(taskId);
    addToast(`Generating ${count} ${tc.label}… runs in background!`, "info");
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 z-[9000] flex items-end sm:items-center justify-center p-0 sm:p-4",
      style: { background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full sm:max-w-lg glass rounded-t-3xl sm:rounded-3xl flex flex-col max-h-[92dvh] overflow-hidden shadow-2xl animate-slide-in", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-5 border-b border-[color:var(--border2,var(--border))] shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-2xl flex items-center justify-center", style: { background: tc.color + "22" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20, style: { color: tc.color } }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-black text-sm", children: [
                "Generate ",
                tc.label
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-50 font-bold", children: "From any document • Runs in background" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "w-9 h-9 glass rounded-xl flex items-center justify-center opacity-60 hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 overflow-y-auto custom-scrollbar p-5 space-y-4 max-h-[70vh]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 p-1 glass rounded-2xl", children: [["library", "From Library", BookOpen], ["upload", "Upload File", FileUp]].map(([id, lbl, TIcon]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setTab(id),
              className: `flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-black transition-all
                  ${tab === id ? "bg-[var(--accent)] text-white shadow-md" : "opacity-50 hover:opacity-80"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TIcon, { size: 16 }),
                lbl
              ]
            },
            id
          )) }),
          tab === "library" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-48 overflow-y-auto custom-scrollbar", children: !docs.length ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-6 opacity-40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 28, className: "mx-auto mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold", children: "No documents in library" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1", children: 'Switch to "Upload File" tab' })
          ] }) : docs.map((doc) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setSelDocId(doc.id),
              className: `w-full flex items-center gap-3 p-3 rounded-2xl text-left transition-all border
                    ${selDocId === doc.id ? "bg-[var(--accent)]/10 border-[var(--accent)]/40" : "glass border-transparent hover:border-[color:var(--border2,var(--border))]"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-9 h-9 rounded-xl bg-gradient-to-br ${FILE_ICONS[doc.fileCategory || "unknown"]?.from || "from-slate-500"} ${FILE_ICONS[doc.fileCategory || "unknown"]?.to || "to-slate-700"} flex items-center justify-center shrink-0`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 18, className: "text-white opacity-80" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold truncate", children: doc.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs opacity-40 font-mono", children: [
                    doc.totalPages,
                    " pages"
                  ] })
                ] }),
                selDocId === doc.id && /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 16, className: "text-[var(--accent)] shrink-0" })
              ]
            },
            doc.id
          )) }),
          tab === "upload" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: !uploadedDoc ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              onDragOver: (e) => e.preventDefault(),
              onDrop: (e) => {
                e.preventDefault();
                handleFileUpload(e.dataTransfer.files);
              },
              onClick: () => inputRef.current?.click(),
              className: "border-2 border-dashed border-[color:var(--border2,var(--border))] rounded-2xl p-8 text-center cursor-pointer hover:border-[var(--accent)]/50 transition-colors",
              children: [
                uploading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Loader2, { size: 28, className: "mx-auto text-[var(--accent)] animate-spin" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold", children: "Processing…" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-black/10 rounded-full h-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-[var(--accent)] rounded-full transition-all", style: { width: `${uploadPct}%` } }) })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileUp, { size: 32, className: "mx-auto mb-3 opacity-30" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-black opacity-60", children: "Drop file here or click to browse" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-30 mt-1", children: "PDF, Word, Excel, CSV, images, text" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    ref: inputRef,
                    type: "file",
                    className: "hidden",
                    accept: ".pdf,.docx,.doc,.xlsx,.xls,.csv,.txt,.md,.jpg,.jpeg,.png,.webp",
                    onChange: (e) => handleFileUpload(e.target.files)
                  }
                )
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 glass rounded-2xl border border-emerald-500/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 18, className: "text-emerald-500 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold truncate", children: uploadedDoc.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs opacity-40", children: [
                uploadedDoc.totalPages,
                " pages extracted"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setUploadedDoc(null), className: "opacity-40 hover:opacity-80", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 }) })
          ] }) }),
          activeDoc && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-4 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xs font-black uppercase tracking-widest opacity-60 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 16 }),
                "Page Range"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold opacity-40", children: [
                activeDoc.totalPages,
                " total"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setEntireFile(true),
                  className: `flex-1 py-2 rounded-xl text-xs font-black border transition-all ${entireFile ? "bg-[var(--accent)] text-white border-transparent" : "glass border-[color:var(--border2,var(--border))] opacity-60"}`,
                  children: "Entire File"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setEntireFile(false),
                  className: `flex-1 py-2 rounded-xl text-xs font-black border transition-all ${!entireFile ? "bg-[var(--accent)] text-white border-transparent" : "glass border-[color:var(--border2,var(--border))] opacity-60"}`,
                  children: "Page Range"
                }
              )
            ] }),
            !entireFile && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: [["From", startPage, setStartPage], ["To", endPage, setEndPage]].map(([l, v, s]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-black uppercase tracking-widest opacity-40 block mb-1", children: l }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "number",
                  min: 1,
                  max: activeDoc.totalPages,
                  value: v,
                  onChange: (e) => s(Math.max(1, Math.min(activeDoc.totalPages, Number(e.target.value)))),
                  className: "w-full glass rounded-xl px-3 py-2.5 text-center font-mono font-bold text-sm outline-none focus:border-[var(--accent)] border border-[color:var(--border2,var(--border))] text-[var(--text)]"
                }
              )
            ] }, l)) }),
            entireFile && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-[var(--accent)] font-bold text-center", children: [
              "All ",
              activeDoc.totalPages,
              " pages selected"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-4 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xs font-black uppercase tracking-widest opacity-60 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { size: 16 }),
                "Quantity"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-black text-[var(--accent)]", children: count })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "range",
                min: "1",
                max: "1000",
                value: count,
                onChange: (e) => setCount(+e.target.value),
                className: "w-full accent-[var(--accent)]"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 flex-wrap", children: [5, 10, 20, 50, 100, 200, 500, 1e3].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setCount(n),
                className: `px-2.5 py-1 rounded-lg text-xs font-black transition-all ${count === n ? "bg-[var(--accent)] text-white" : "glass opacity-60 hover:opacity-100"}`,
                children: n
              },
              n
            )) }),
            count > 50 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-500 font-bold flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { size: 10 }),
              "Parallel AI — runs fully in background"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-4 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-black uppercase tracking-widest opacity-60", children: "Difficulty Level" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: levels.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setDifficulty(i + 1),
                className: `py-2.5 rounded-xl text-xs font-black border transition-all
                    ${difficulty === i + 1 ? "text-white border-transparent shadow-md" : "glass border-[color:var(--border2,var(--border))] opacity-60 hover:opacity-100"}`,
                style: difficulty === i + 1 ? { background: ["#10b981", "#f59e0b", "#ef4444"][i] } : {},
                children: [
                  ["🟢", "🟡", "🔴"][i],
                  " ",
                  l
                ]
              },
              l
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border-t border-[color:var(--border2,var(--border))] shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: handleGo,
              disabled: !activeDoc,
              className: "w-full py-4 btn-accent rounded-2xl text-sm font-black uppercase tracking-widest disabled:opacity-40 flex items-center justify-center gap-3 shadow-xl",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 18, fill: "currentColor" }),
                "Generate ",
                count,
                " ",
                tc.label,
                " in Background"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-center opacity-30 font-bold mt-2", children: "You can switch pages — generation never stops" })
        ] })
      ] })
    }
  );
}
const setupPWA = () => {
  const manifest = {
    name: "MARIAM PRO",
    short_name: "MARIAM",
    description: "Universal AI Document Intelligence",
    start_url: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#0a0a14",
    theme_color: "#0a0a14",
    icons: [
      { src: MARIAM_IMG, sizes: "192x192", type: "image/jpeg", purpose: "any maskable" },
      { src: MARIAM_IMG, sizes: "512x512", type: "image/jpeg", purpose: "any maskable" }
    ],
    categories: ["education", "productivity", "medical"],
    screenshots: [],
    shortcuts: [
      { name: "Library", url: "/" },
      { name: "Flashcards", url: "/" }
    ]
  };
  try {
    const mBlob = new Blob([JSON.stringify(manifest)], { type: "application/manifest+json" });
    const mUrl = URL.createObjectURL(mBlob);
    let link = document.querySelector('link[rel="manifest"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "manifest";
      document.head.appendChild(link);
    }
    link.href = mUrl;
  } catch {
  }
  const metas = [
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
    { name: "apple-mobile-web-app-title", content: "MARIAM PRO" },
    { name: "theme-color", content: "#6366f1" },
    { name: "msapplication-navbutton-color", content: "#6366f1" },
    { name: "msapplication-starturl", content: "/" }
  ];
  metas.forEach(({ name, content }) => {
    let m = document.querySelector(`meta[name="${name}"]`);
    if (!m) {
      m = document.createElement("meta");
      m.name = name;
      document.head.appendChild(m);
    }
    m.content = content;
  });
  let vp = document.querySelector('meta[name="viewport"]');
  if (!vp) {
    vp = document.createElement("meta");
    vp.name = "viewport";
    document.head.appendChild(vp);
  }
  if (!vp.content.includes("viewport-fit")) {
    vp.content = (vp.content || "width=device-width, initial-scale=1") + ", viewport-fit=cover";
  }
  let apl = document.querySelector('link[rel="apple-touch-icon"]');
  if (!apl) {
    apl = document.createElement("link");
    apl.rel = "apple-touch-icon";
    document.head.appendChild(apl);
  }
  apl.href = MARIAM_IMG;
  if ("serviceWorker" in navigator) {
    const swCode = `
const CACHE='mariam-v7';
const OFFLINE_RESP=new Response('MARIAM PRO is cached and ready!',{headers:{'Content-Type':'text/plain'}});
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['/'])).catch(()=>{})));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(fetch(e.request).then(r=>{const rc=r.clone();caches.open(CACHE).then(c=>c.put(e.request,rc)).catch(()=>{});return r;}).catch(()=>caches.match(e.request).then(r=>r||OFFLINE_RESP)));
});
    `;
    try {
      const swBlob = new Blob([swCode], { type: "application/javascript" });
      const swUrl = URL.createObjectURL(swBlob);
      navigator.serviceWorker.register(swUrl).catch(() => {
      });
    } catch {
    }
  }
};
function useToast() {
  const [toasts, setToasts] = reactExports.useState([]);
  const add = reactExports.useCallback((msg, type = "success", dur = 3500) => {
    const id = Date.now() + Math.random();
    setToasts((p) => [...p, { id, msg, type }]);
    setTimeout(() => setToasts((p) => p.filter((t) => t.id !== id)), dur);
  }, []);
  return { toasts, addToast: add };
}
function ToastContainer({ toasts }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed top-20 right-3 z-[9999] flex flex-col gap-2 pointer-events-none max-w-[calc(100vw-24px)]", children: toasts.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `px-4 py-3 rounded-2xl text-xs font-bold shadow-2xl flex items-center gap-2.5 animate-slide-in pointer-events-auto
          ${t.type === "success" ? "bg-emerald-500 text-white" : t.type === "error" ? "bg-red-500 text-white" : t.type === "warn" ? "bg-amber-500 text-white" : "bg-[var(--surface,var(--card))] border border-[color:var(--border2,var(--border))] text-[var(--text)]"}`, children: [
    t.type === "success" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 15 }) : t.type === "error" ? /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { size: 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { size: 18 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[280px]", children: t.msg })
  ] }, t.id)) });
}
function useDrag(onDrag, deps = []) {
  const dragging = reactExports.useRef(false);
  const start = reactExports.useCallback((e) => {
    e.preventDefault();
    dragging.current = true;
    document.body.style.userSelect = "none";
    document.body.style.webkitUserSelect = "none";
    const move = (ev) => {
      if (!dragging.current) return;
      const x = ev.touches?.[0]?.clientX ?? ev.clientX;
      const y = ev.touches?.[0]?.clientY ?? ev.clientY;
      if (x !== void 0) onDrag(x, y);
    };
    const up = () => {
      dragging.current = false;
      document.body.style.userSelect = "";
      document.body.style.webkitUserSelect = "";
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
      document.removeEventListener("touchmove", move);
      document.removeEventListener("touchend", up);
    };
    document.addEventListener("mousemove", move, { passive: false });
    document.addEventListener("mouseup", up);
    document.addEventListener("touchmove", move, { passive: false });
    document.addEventListener("touchend", up);
  }, [onDrag, ...deps]);
  return start;
}
function MindMap({ data }) {
  if (!data?.topic) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-full opacity-40 text-sm font-bold", children: "No mind map data" });
  const branches = data.branches || [];
  const W = 700, H = 500, cx = W / 2, cy = H / 2, r1 = 160, r2 = 260;
  const branchAngles = branches.map((_, i) => 2 * Math.PI * i / branches.length - Math.PI / 2);
  const COLORS = ["#6366f1", "#a855f7", "#3b82f6", "#10b981", "#f43f5e", "#f59e0b", "#06b6d4", "#84cc16"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full overflow-auto custom-scrollbar p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: `0 0 ${W} ${H}`, className: "w-full max-h-[420px]", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "mmBg", cx: "50%", cy: "50%", r: "50%", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--accent)", stopOpacity: "0.05" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "transparent", stopOpacity: "0" })
      ] }),
      branches.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("marker", { id: `arrow${i}`, markerWidth: "8", markerHeight: "8", refX: "6", refY: "3", orient: "auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,0 L0,6 L9,3 z", fill: COLORS[i % COLORS.length], opacity: "0.6" }) }, i))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: W, height: H, fill: "url(#mmBg)", rx: "16" }),
    branches.map((branch, i) => {
      const ang = branchAngles[i];
      const col = COLORS[i % COLORS.length];
      const bx = cx + r1 * Math.cos(ang), by = cy + r1 * Math.sin(ang);
      const subs = branch.subtopics || branch.children || [];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: cx, y1: cy, x2: bx, y2: by, stroke: col, strokeWidth: "2", strokeOpacity: "0.5", strokeDasharray: "4 2" }),
        subs.slice(0, 4).map((sub, j) => {
          const subCount = Math.min(subs.length, 4);
          const spanAngle = subCount > 1 ? Math.PI / 3 : 0;
          const startAng = ang - spanAngle / 2;
          const subAng = subCount > 1 ? startAng + j / (subCount - 1) * spanAngle : ang;
          const sx = cx + r2 * Math.cos(subAng), sy = cy + r2 * Math.sin(subAng);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: bx, y1: by, x2: sx, y2: sy, stroke: col, strokeWidth: "1.5", strokeOpacity: "0.3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: sx, cy: sy, r: "24", fill: col, fillOpacity: "0.08", stroke: col, strokeWidth: "1", strokeOpacity: "0.3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("foreignObject", { x: sx - 30, y: sy - 18, width: "60", height: "36", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { xmlns: "http://www.w3.org/1999/xhtml", style: { fontSize: "8px", textAlign: "center", color: "var(--text)", fontWeight: 700, lineHeight: 1.2, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }, children: typeof sub === "string" ? sub : sub.label || sub }) })
          ] }, j);
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: bx, cy: by, rx: "42", ry: "20", fill: col, fillOpacity: "0.15", stroke: col, strokeWidth: "2", strokeOpacity: "0.6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("foreignObject", { x: bx - 40, y: by - 16, width: "80", height: "32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { xmlns: "http://www.w3.org/1999/xhtml", style: { fontSize: "9px", textAlign: "center", color: "var(--text)", fontWeight: 800, lineHeight: 1.2, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }, children: branch.label }) })
      ] }, i);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx, cy, r: "50", fill: "var(--accent)", fillOpacity: "0.15", stroke: "var(--accent)", strokeWidth: "3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx, cy, r: "42", fill: "var(--accent)", fillOpacity: "0.2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("foreignObject", { x: cx - 38, y: cy - 24, width: "76", height: "48", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { xmlns: "http://www.w3.org/1999/xhtml", style: { fontSize: "10px", textAlign: "center", color: "var(--accent)", fontWeight: 900, lineHeight: 1.2, display: "flex", alignItems: "center", justifyContent: "center", height: "100%", overflow: "hidden" }, children: data.topic }) })
  ] }) });
}
function TimelineView({ events = [] }) {
  if (!events.length) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-32 opacity-40 text-sm font-bold", children: "No timeline data" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pl-8 space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/40 to-transparent" }),
    events.map((ev, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-5 w-4 h-4 rounded-full bg-[var(--accent)] border-2 border-[var(--bg)] flex items-center justify-center text-xs text-white font-black", children: i + 1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black text-[var(--accent)] uppercase tracking-widest", children: ev.date || ev.time || ev.year || "" }),
          ev.page && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs opacity-40 font-mono", children: [
            "p.",
            ev.page
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold leading-relaxed", children: ev.event || ev.title || ev.description || ev }),
        ev.significance && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-60 mt-1 italic", children: ev.significance })
      ] })
    ] }, i))
  ] });
}
const PROVIDERS = {
  anthropic: { label: "Claude (Anthropic)", note: "Works built-in — no API key needed in Claude artifacts.", needsKey: false, defaultModel: "claude-sonnet-4-20250514", baseUrl: "" },
  openai: { label: "OpenAI (GPT)", note: "Requires an OpenAI API key.", needsKey: true, defaultModel: "gpt-4o-mini", baseUrl: "https://api.openai.com" },
  gemini: { label: "Google Gemini", note: "Requires a Google AI Studio API key.", needsKey: true, defaultModel: "gemini-2.0-flash", baseUrl: "" },
  deepseek: { label: "DeepSeek", note: "Requires a DeepSeek API key.", needsKey: true, defaultModel: "deepseek-chat", baseUrl: "https://api.deepseek.com" },
  groq: { label: "Groq (Ultra-fast)", note: "Requires a Groq API key. Blazing fast inference.", needsKey: true, defaultModel: "llama-3.3-70b-versatile", baseUrl: "https://api.groq.com/openai" },
  ollama: { label: "Ollama (Local)", note: "Local inference — no API key needed.", needsKey: false, defaultModel: "llama3", baseUrl: "http://localhost:11434/v1" },
  custom: { label: "Custom API", note: "Any OpenAI-compatible endpoint.", needsKey: true, defaultModel: "", baseUrl: "" }
};
const DEFAULT_SETTINGS = { provider: "anthropic", apiKey: "", baseUrl: "", model: "", strictMode: false, theme: "pure-white", fontSize: "large", accentColor: "indigo", lineSpacing: "normal", cardStyle: "comfortable", animations: true, compactSidebar: false };
const BUILTIN_FLASHCARD_SETS = [
  ...counselingFlashcards,
  ...diseasesFlashcards,
  ...drugFlashcards,
  ...lawFlashcards
];
const BUILTIN_EXAM_SETS = [
  ...counselingExams,
  ...diseasesExams,
  ...drugExams,
  ...lawExams
];
const BUILTIN_CASE_SETS = [
  ...counselingCases,
  ...diseasesCases,
  ...drugCases,
  ...lawCases
];
const ViewWrapper = ({ active, children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 flex flex-col ${active ? "z-10 pointer-events-auto opacity-100" : "z-0 pointer-events-none opacity-0"}`, children });
function LibraryMergedView({ docs, uploading, onUpload, onOpen, onDelete, flashcards, exams, cases, notes, setView, setActiveId, addToast, settings }) {
  const [search, setSearch] = reactExports.useState("");
  const [sortBy, setSortBy] = reactExports.useState("date");
  const [viewMode, setViewMode] = reactExports.useState("grid");
  const [dragging, setDragging] = reactExports.useState(false);
  const inputRef = reactExports.useRef(null);
  const totalCards = flashcards.reduce((s, f) => s + (f.cards?.length || 0), 0);
  const totalQ = exams.reduce((s, e) => s + (e.questions?.length || 0), 0);
  const totalCases = cases.reduce((s, c) => s + (c.questions?.length || 0), 0);
  const dueCards = flashcards.reduce((s, f) => s + (f.cards?.filter((c) => c.nextReview <= Date.now()).length || 0), 0);
  const recentScores = ANALYTICS.scores.slice(-7);
  recentScores.length ? Math.round(recentScores.reduce((s, r) => s + r.pct, 0) / recentScores.length) : 0;
  ANALYTICS.streak || 0;
  docs.slice(-4).reverse();
  Object.values(window.__MARIAM_BG__?.tasks || {});
  const allStats = reactExports.useMemo(() => ({
    docs: docs.length,
    cards: totalCards,
    exams: totalQ,
    cases: totalCases
  }), [docs.length, totalCards, totalQ, totalCases]);
  const filtered = reactExports.useMemo(() => {
    let d = docs.filter((doc) => doc.name.toLowerCase().includes(search.toLowerCase()));
    if (sortBy === "date") d = [...d].sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
    else if (sortBy === "name") d = [...d].sort((a, b) => a.name.localeCompare(b.name));
    else if (sortBy === "type") d = [...d].sort((a, b) => (a.fileCategory || "pdf").localeCompare(b.fileCategory || "pdf"));
    return d;
  }, [docs, search, sortBy]);
  const handleDrop = reactExports.useCallback((e) => {
    e.preventDefault();
    setDragging(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length) onUpload({ target: { files } });
  }, [onUpload]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex-1 min-h-0 overflow-y-auto custom-scrollbar scroll-content app-view",
      style: { touchAction: "pan-y", WebkitOverflowScrolling: "touch" },
      onDragOver: (e) => {
        e.preventDefault();
        setDragging(true);
      },
      onDragLeave: () => setDragging(false),
      onDrop: handleDrop,
      children: [
        dragging && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[9998] bg-[var(--accent)]/20 border-4 border-dashed border-[var(--accent)] flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "design-btn rounded-3xl px-8 py-6 text-center shadow-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileUp, { size: 48, className: "mx-auto mb-3 animate-bounce" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-black", children: "Drop files here!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-80 mt-1", children: "PDF, Word, Excel, Images" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "design-card", style: { background: "linear-gradient(135deg, hsl(var(--primary-hue, 220), 80%, 50%), hsl(var(--primary-hue, 220), 70%, 40%))", color: "white", border: "none" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { color: "white" }, children: "AI Study Hub" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { opacity: 0.9 }, children: [
            (/* @__PURE__ */ new Date()).getHours() < 12 ? "Good morning ☀️" : (/* @__PURE__ */ new Date()).getHours() < 17 ? "Good afternoon 🌤" : "Good evening 🌙",
            " — ",
            docs.length === 0 ? "Upload a document to get started" : "Your AI-powered study command center"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { marginTop: 8 }, children: "Today's Plan:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { style: { listStyle: "disc", paddingLeft: 20, opacity: 0.9, fontSize: "0.9rem" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              "Practice ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: dueCards }),
              " due flashcards"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Review exam topics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              "Study ",
              totalCards,
              " total cards"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setView("flashcards"), className: "design-btn design-btn-secondary", style: { marginTop: 16, background: "rgba(255,255,255,0.2)", color: "white", borderColor: "rgba(255,255,255,0.3)" }, children: "Start Study Session" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "design-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Performance Snapshot" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-label", style: { color: "var(--text-muted, var(--text3))" }, children: "Your study stats." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "button-grid", style: { marginTop: 12 }, children: [
            { label: "Documents", val: allStats.docs, col: "#6366f1" },
            { label: "Flashcards", val: allStats.cards, col: "#8b5cf6" },
            { label: "Exam Qs", val: allStats.exams, col: "#3b82f6" },
            { label: "Cases", val: allStats.cases, col: "#06b6d4" }
          ].map(({ label, val, col }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "design-card", style: { padding: 12, marginBottom: 0, textAlign: "center" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "1.5rem", fontWeight: 800, color: col }, children: val }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-label", style: { fontSize: "0.75rem" }, children: label })
          ] }, label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "design-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Quick Actions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "button-grid", children: [
            { lbl: "Study Cards", Icon: Layers, v: "flashcards" },
            { lbl: "Exams", Icon: CheckSquare, v: "exams" },
            { lbl: "Cases", Icon: Activity, v: "cases" },
            { lbl: "AI Tutor", Icon: MessageSquare, v: "chat" }
          ].map(({ lbl, Icon, v }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setView(v), className: "design-btn design-btn-secondary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18 }),
            lbl
          ] }, v)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "design-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "My Documents" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 items-center", style: { marginBottom: 16 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-[140px] relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 opacity-30", size: 14 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  value: search,
                  onChange: (e) => setSearch(e.target.value),
                  placeholder: "Search…",
                  className: "design-card",
                  style: { padding: "10px 10px 10px 36px", marginBottom: 0 }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: sortBy, onChange: (e) => setSortBy(e.target.value), className: "design-card", style: { padding: "10px 14px", marginBottom: 0, width: "auto" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "date", children: "Newest" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "name", children: "Name" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex rounded-xl overflow-hidden border border-[var(--card-border)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setViewMode("grid"), className: `p-2.5 ${viewMode === "grid" ? "bg-[var(--accent)] text-white" : "opacity-50"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Grid3x3, { size: 18 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setViewMode("list"), className: `p-2.5 ${viewMode === "list" ? "bg-[var(--accent)] text-white" : "opacity-50"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(List, { size: 18 }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `design-btn cursor-pointer ${uploading ? "opacity-50" : ""}`, children: [
              uploading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader2, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FileUp, { size: 16 }),
              uploading ? "Uploading…" : "Import",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  ref: inputRef,
                  type: "file",
                  multiple: true,
                  className: "hidden",
                  onChange: onUpload,
                  disabled: uploading,
                  accept: ".pdf,.doc,.docx,.xls,.xlsx,.csv,.txt,.md,.js,.ts,.jsx,.tsx,.py,.png,.jpg,.jpeg,.gif,.webp"
                }
              )
            ] })
          ] }),
          filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "design-card text-center", style: { padding: 32 }, onClick: () => inputRef.current?.click(), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileUp, { size: 40, className: "mx-auto mb-3 opacity-50", style: { color: "var(--accent)" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--text-muted, var(--text3))" }, children: search ? "No results" : "Drop or browse files" }),
            !search && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "design-btn design-btn-feature", style: { marginTop: 16 }, children: "Browse Files" })
          ] }) : viewMode === "grid" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: filtered.map((doc) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => onOpen(doc.id), className: "design-card cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-black mb-2", style: { background: "linear-gradient(135deg,var(--accent),var(--accent2,var(--accent)))" }, children: doc.name.slice(0, 2).toUpperCase() }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm truncate", children: doc.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-label text-xs", children: [
              doc.totalPages,
              " pages"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
              e.stopPropagation();
              onDelete(doc.id, e);
            }, className: "design-btn design-btn-secondary mt-2", style: { padding: "6px 12px", fontSize: 12 }, children: "Remove" })
          ] }, doc.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: filtered.map((doc) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => onOpen(doc.id), className: "design-card flex items-center gap-3 cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-black shrink-0", style: { background: "linear-gradient(135deg,var(--accent),var(--accent2))" }, children: doc.name.slice(0, 2).toUpperCase() }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold truncate", children: doc.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-label text-xs", children: [
                doc.totalPages,
                " pages"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
              e.stopPropagation();
              onDelete(doc.id, e);
            }, className: "design-btn design-btn-secondary", style: { padding: "6px 12px", fontSize: 12 }, children: "Remove" })
          ] }, doc.id)) })
        ] })
      ]
    }
  );
}
function DocWorkspace({ activeDoc, setDocs, currentPage, setCurrentPage, openDocs, closeTab, setActiveId, docs, onBack }) {
  const [pdf, setPdf] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [scale, setScale] = reactExports.useState(1);
  const [dims, setDims] = reactExports.useState({ w: 0, h: 0 });
  const [pageText, setPageText] = reactExports.useState("");
  const [imageData, setImageData] = reactExports.useState(null);
  const canvasRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  const textRef = reactExports.useRef(null);
  const renderRef = reactExports.useRef(null);
  const pdfRef = reactExports.useRef(null);
  const renderGenRef = reactExports.useRef(0);
  const cat = activeDoc?.fileCategory || "pdf";
  const isPdf = cat === "pdf";
  reactExports.useEffect(() => {
    if (!activeDoc?.id) return;
    let mounted = true;
    setLoading(true);
    setPdf(null);
    setPageText("");
    setImageData(null);
    if (pdfRef.current) {
      try {
        pdfRef.current.destroy();
      } catch {
      }
      pdfRef.current = null;
    }
    (async () => {
      try {
        const data = await getFile(activeDoc.id);
        if (!data || !mounted) return;
        if (isPdf) {
          const pdfjs = await loadPdfJs();
          const loaded = await pdfjs.getDocument({ data: (data.buffer || data).slice(0) }).promise;
          if (mounted) {
            pdfRef.current = loaded;
            setPdf(loaded);
          } else {
            try {
              loaded.destroy();
            } catch {
            }
          }
        } else if (cat === "image") {
          if (mounted && data.imageBase64) setImageData(`data:${data.imageType || "image/jpeg"};base64,${data.imageBase64}`);
        } else {
          if (mounted && data.pagesText) setPageText(data.pagesText[currentPage] || "");
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [activeDoc?.id, cat]);
  reactExports.useEffect(() => {
    if (!isPdf) return;
    if (!pdf) return;
    let mounted = true;
    const gen = ++renderGenRef.current;
    (async () => {
      try {
        const page = await pdf.getPage(currentPage);
        const cont = containerRef.current;
        if (!cont || !mounted) return;
        const tmp = page.getViewport({ scale: 1 });
        const base = cont.clientWidth / tmp.width;
        const final = Math.min(Math.max(base * scale, 0.5), 5);
        const vp = page.getViewport({ scale: final });
        if (mounted && gen === renderGenRef.current) setDims({ w: vp.width, h: vp.height });
        const canvas = canvasRef.current;
        if (canvas && gen === renderGenRef.current) {
          const pr = window.devicePixelRatio || 1;
          canvas.width = Math.floor(vp.width * pr);
          canvas.height = Math.floor(vp.height * pr);
          canvas.style.width = `${vp.width}px`;
          canvas.style.height = `${vp.height}px`;
          if (renderRef.current) renderRef.current.cancel();
          renderRef.current = page.render({ canvasContext: canvas.getContext("2d"), viewport: vp, transform: [pr, 0, 0, pr, 0, 0] });
          await renderRef.current.promise;
        }
        const tl = textRef.current;
        if (tl && mounted && gen === renderGenRef.current) {
          tl.innerHTML = "";
          tl.style.setProperty("--scale-factor", vp.scale);
          const tc = await page.getTextContent();
          window.pdfjsLib?.renderTextLayer({ textContentSource: tc, container: tl, viewport: vp, textDivs: [] });
        }
      } catch (e) {
        if (e?.name !== "RenderingCancelledException") console.warn(e?.message);
      }
    })();
    return () => {
      mounted = false;
      if (renderRef.current) renderRef.current.cancel();
    };
  }, [currentPage, pdf, scale, isPdf]);
  reactExports.useEffect(() => {
    if (isPdf || cat === "image" || !activeDoc) return;
    (async () => {
      try {
        const data = await getFile(activeDoc.id);
        if (data?.pagesText) setPageText(data.pagesText[currentPage] || "");
      } catch {
      }
    })();
  }, [currentPage, isPdf, cat, activeDoc]);
  const nav = reactExports.useCallback((dir) => {
    if (!activeDoc) return;
    const next = Math.max(1, Math.min(activeDoc.totalPages, currentPage + dir));
    if (next !== currentPage) {
      setCurrentPage(next);
      setDocs((p) => p.map((d) => d.id === activeDoc.id ? { ...d, progress: next } : d));
      containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage, activeDoc, setCurrentPage, setDocs]);
  reactExports.useEffect(() => {
    const kd = (e) => {
      if (["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;
      if (e.key === "ArrowLeft") nav(-1);
      if (e.key === "ArrowRight") nav(1);
    };
    document.addEventListener("keydown", kd);
    return () => document.removeEventListener("keydown", kd);
  }, [nav]);
  if (!activeDoc) return null;
  const cfg = FILE_ICONS[cat] || FILE_ICONS.unknown;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col h-full min-h-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-12 glass flex items-center gap-2 px-3 shrink-0 border-t-0 border-x-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onBack, className: "w-8 h-8 glass rounded-xl flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 16 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-5 h-5 rounded-md bg-gradient-to-br ${cfg.from} ${cfg.to} flex items-center justify-center shrink-0`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(cfg.Icon, { size: 11, className: "text-white" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-xs truncate flex-1 min-w-0", children: activeDoc.name }),
      isPdf && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setScale((s) => Math.max(s - 0.2, 0.5)), className: "w-7 h-7 glass rounded-lg flex items-center justify-center opacity-60 hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomOut, { size: 16 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setScale(1), className: "w-7 h-7 glass rounded-lg flex items-center justify-center opacity-60 hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize, { size: 16 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setScale((s) => Math.min(s + 0.2, 4)), className: "w-7 h-7 glass rounded-lg flex items-center justify-center opacity-60 hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomIn, { size: 16 }) })
      ] })
    ] }),
    openDocs.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 px-3 py-1.5 border-b border-[color:var(--border2,var(--border))] overflow-x-auto custom-scrollbar shrink-0 bg-[var(--surface,var(--card))]", children: openDocs.map((id) => {
      const doc = docs.find((d) => d.id === id);
      if (!doc) return null;
      const dc = FILE_ICONS[doc.fileCategory || "pdf"] || FILE_ICONS.pdf;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          onClick: () => setActiveId(id),
          className: `flex items-center gap-1.5 px-2.5 py-1 rounded-lg cursor-pointer text-xs font-bold shrink-0 transition-colors
                  ${id === activeDoc.id ? "bg-[var(--accent)] text-white" : "glass hover:bg-black/5 dark:hover:bg-white/5"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(dc.Icon, { size: 10 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[80px]", children: doc.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
              e.stopPropagation();
              closeTab(id);
            }, className: "opacity-60 hover:opacity-100 ml-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 10 }) })
          ]
        },
        id
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: containerRef, className: "flex-1 overflow-auto custom-scrollbar min-h-0 bg-zinc-200 dark:bg-zinc-900", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center h-full gap-3 text-[var(--accent)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Loader2, { size: 28, className: "animate-spin" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold opacity-50", children: "Loading…" })
    ] }) : isPdf && pdf ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 pb-20 lg:pb-4 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-white shadow-2xl", style: { width: dims.w ? `${dims.w}px` : "100%", height: dims.h ? `${dims.h}px` : "auto" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: textRef, style: { position: "absolute", inset: 0, overflow: "hidden", opacity: 1, lineHeight: 1, userSelect: "text" } })
    ] }) }) : cat === "image" && imageData ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center p-4 pb-20 lg:pb-4 min-h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imageData, alt: activeDoc.name, className: "max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 pb-20 lg:pb-6 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[var(--surface,var(--card))] rounded-2xl p-6 shadow-sm border border-[color:var(--border2,var(--border))] min-h-[60vh]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "text-sm leading-relaxed whitespace-pre-wrap font-mono text-[var(--text)] opacity-90 break-words", children: pageText || "(No content on this page)" }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "h-14 glass flex items-center justify-center gap-3 shrink-0 border-t border-[color:var(--border2,var(--border))] border-x-0 border-b-0\n        fixed bottom-[72px] left-0 right-0 z-[200] lg:relative lg:bottom-auto lg:z-auto",
        style: { bottom: `calc(${NAV_H}px + env(safe-area-inset-bottom))` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => nav(-1), disabled: currentPage <= 1, className: "w-10 h-10 glass rounded-xl flex items-center justify-center disabled:opacity-30 active:scale-95", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2 glass rounded-xl font-mono text-sm font-bold border border-[color:var(--border2,var(--border))] min-w-[90px] text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--accent)]", children: currentPage }),
            " / ",
            activeDoc.totalPages
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => nav(1),
              disabled: currentPage >= activeDoc.totalPages,
              className: "w-10 h-10 btn-accent rounded-xl flex items-center justify-center disabled:opacity-40 active:scale-95 shadow-md",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 18 })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 lg:hidden shrink-0" })
  ] });
}
function GeneratePanel({ activeDoc, bgTask, onStart, onClear, setFlashcards, setExams, setCases, setNotes, onVault, currentPage, addToast, settings, mindMaps, setMindMaps, timelines, setTimelines }) {
  const [startPage, setStartPage] = reactExports.useState(currentPage);
  const [endPage, setEndPage] = reactExports.useState(currentPage);
  const [entireFile, setEntireFile] = reactExports.useState(false);
  const [type, setType] = reactExports.useState("exam");
  const [count, setCount] = reactExports.useState(20);
  const [difficulty, setDifficulty] = reactExports.useState(2);
  const [targetLang, setTargetLang] = reactExports.useState("Spanish");
  const levels = ["Hard", "Expert", "Insane"];
  reactExports.useEffect(() => {
    if (!bgTask) {
      setStartPage(currentPage);
      if (!entireFile) setEndPage(currentPage);
    }
  }, [currentPage, bgTask]);
  reactExports.useEffect(() => {
    if (entireFile && activeDoc) {
      setStartPage(1);
      setEndPage(activeDoc.totalPages);
    }
  }, [entireFile, activeDoc]);
  if (!activeDoc) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center text-sm opacity-40 font-bold", children: "No document open." });
  const go = () => onStart(type, activeDoc.id, startPage, endPage, { count, difficultyLevel: levels[difficulty - 1], targetLang });
  const save = () => {
    if (!bgTask?.result) return;
    const g = bgTask.result;
    if (g.type === "flashcards") {
      const cards = g.data.map((c) => ({ id: Date.now() + Math.random(), q: c.q, a: c.a, evidence: c.evidence, sourcePage: c.sourcePage, repetitions: 0, ef: 2.5, interval: 1, nextReview: Date.now(), lastReview: Date.now() }));
      setFlashcards((p) => [...p, { id: Date.now().toString(), docId: activeDoc.id, sourcePages: g.pages, title: `Cards — Pgs ${g.pages}`, cards, createdAt: (/* @__PURE__ */ new Date()).toISOString() }]);
      addToast(`${cards.length} flashcards saved!`, "success");
    } else if (g.type === "cases") {
      setCases((p) => [...p, { id: Date.now().toString(), docId: activeDoc.id, sourcePages: g.pages, title: "Patient Cases", questions: g.data, createdAt: (/* @__PURE__ */ new Date()).toISOString() }]);
      addToast(`${g.data.length} cases saved!`, "success");
    } else if (g.type === "exam") {
      setExams((p) => [...p, { id: Date.now().toString(), docId: activeDoc.id, sourcePages: g.pages, title: `Exam — Pgs ${g.pages}`, questions: g.data, createdAt: (/* @__PURE__ */ new Date()).toISOString() }]);
      addToast(`${g.data.length} questions saved!`, "success");
    } else if (g.type === "mindmap") {
      if (setMindMaps) setMindMaps((p) => [...p, { id: Date.now().toString(), docId: activeDoc.id, pages: g.pages, data: g.data, createdAt: (/* @__PURE__ */ new Date()).toISOString() }]);
      addToast("Mind map saved!", "success");
    } else if (g.type === "timeline") {
      if (setTimelines) setTimelines((p) => [...p, { id: Date.now().toString(), docId: activeDoc.id, pages: g.pages, events: g.data, createdAt: (/* @__PURE__ */ new Date()).toISOString() }]);
      addToast("Timeline saved!", "success");
    } else {
      setNotes((p) => [...p, { id: Date.now().toString(), docId: activeDoc.id, title: `${g.title || "Note"} · Pgs ${g.pages}`, content: g.data, createdAt: (/* @__PURE__ */ new Date()).toISOString() }]);
      addToast("Saved!", "success");
    }
    onClear();
    onVault();
  };
  const TOOLS = [
    ["flashcards", "Cards", Layers, "#6366f1"],
    ["exam", "Exam", CheckSquare, "#3b82f6"],
    ["summary", "Summary", AlignLeft, "#10b981"],
    ["cases", "Cases", Activity, "#8b5cf6"],
    ["clinical", "Clinical", Stethoscope, "#06b6d4"],
    ["treatment", "Treat", Pill, "#f59e0b"],
    ["labs", "Labs", Thermometer, "#ef4444"],
    ["mnemonics", "Memory", Lightbulb, "#84cc16"],
    ["eli5", "ELI5", Baby, "#f97316"],
    ["mindmap", "MindMap", Network, "#a855f7"],
    ["concepts", "Concepts", Tag, "#14b8a6"],
    ["timeline", "Timeline", Clock, "#6366f1"],
    ["translate", "Translate", Languages, "#ec4899"],
    ["smart-summary", "SmartSum", Wand2, "#f59e0b"],
    ["differential", "Diff Dx", FlaskConical, "#8b5cf6"],
    ["code-explain", "Explain", Code, "#94a3b8"]
  ];
  if (bgTask?.isFinished) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 bg-emerald-500/10 border-b border-emerald-500/20 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 15 }),
        Array.isArray(bgTask.result?.data) ? `${bgTask.result.data.length} items ready` : "Done!"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClear, className: "px-3 py-1.5 glass rounded-xl text-xs font-black uppercase opacity-60 hover:opacity-100", children: "Discard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: save, className: "px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-black uppercase flex items-center gap-1.5 shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { size: 16 }),
          " Save"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 overflow-y-auto custom-scrollbar p-4 space-y-4", style: { touchAction: "pan-y", WebkitOverflowScrolling: "touch" }, children: [
      bgTask.result?.type === "flashcards" && bgTask.result.data.slice(0, 5).map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass p-4 rounded-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-xs mb-3 leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "opacity-30 mr-1.5 font-mono text-xs", children: [
            "Q",
            i + 1
          ] }),
          item.q
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[var(--accent)]/10 border border-[var(--accent)]/20 p-3 rounded-xl text-xs text-[var(--accent)]", children: item.a }),
        item.evidence && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs opacity-40 italic", children: [
          '"',
          item.evidence,
          '" — Pg ',
          item.sourcePage
        ] })
      ] }, i)),
      (bgTask.result?.type === "exam" || bgTask.result?.type === "cases") && bgTask.result.data.slice(0, 3).map((item, i) => {
        const q = item.examQuestion || item;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass p-4 rounded-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-xs mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "opacity-30 mr-1.5 text-xs", children: [
              "Q",
              i + 1
            ] }),
            item.vignette || q.q
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: (q.options || []).map((opt, oi) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `px-3 py-2 rounded-xl text-xs font-medium border ${oi === q.correct ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold" : "glass border-transparent"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-black opacity-50 mr-2", children: [
              String.fromCharCode(65 + oi),
              "."
            ] }),
            opt
          ] }, oi)) })
        ] }, i);
      }),
      bgTask.result?.type === "mindmap" && /* @__PURE__ */ jsxRuntimeExports.jsx(MindMap, { data: bgTask.result.data }),
      bgTask.result?.type === "timeline" && /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineView, { events: bgTask.result.data.events || bgTask.result.data }),
      bgTask.result?.type === "concepts" && bgTask.result.data.slice(0, 5).map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass p-4 rounded-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-xs mb-1 text-[var(--accent)]", children: c.concept || c.term }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs leading-relaxed opacity-80", children: c.definition || c.explanation }),
        c.example && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs mt-2 opacity-50 italic", children: [
          "Ex: ",
          c.example
        ] })
      ] }, i)),
      ["summary", "clinical", "treatment", "labs", "eli5", "mnemonics", "translate", "differential", "smart-summary", "code-explain"].includes(bgTask.result?.type) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass p-4 rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "text-xs leading-relaxed whitespace-pre-wrap text-[var(--text)] opacity-90", children: bgTask.result.data }) }),
      bgTask.result?.data?.length > 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs opacity-40 font-bold", children: [
        "+",
        bgTask.result.data.length - 5,
        " more items saved"
      ] })
    ] })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 overflow-y-auto custom-scrollbar p-4 space-y-4 h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-black uppercase tracking-widest opacity-60 mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 16 }),
        " Page Range"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 mb-3 cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            onClick: () => setEntireFile((v) => !v),
            className: `w-9 h-5 rounded-full transition-colors relative ${entireFile ? "bg-[var(--accent)]" : "bg-gray-300 dark:bg-zinc-600"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${entireFile ? "translate-x-4" : "translate-x-0.5"}` })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold opacity-60", children: "Entire file" })
      ] }),
      !entireFile && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: [["From", startPage, setStartPage], ["To", endPage, setEndPage]].map(([l, v, s]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-black uppercase tracking-widest opacity-40 block mb-1", children: l }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            min: 1,
            max: activeDoc.totalPages,
            value: v,
            onChange: (e) => s(Number(e.target.value)),
            className: "w-full glass rounded-xl px-3 py-2.5 text-center font-mono font-bold text-sm outline-none focus:border-[var(--accent)] border border-[color:var(--border2,var(--border))] text-[var(--text)]"
          }
        )
      ] }, l)) }),
      entireFile && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-[var(--accent)] font-bold mt-2 text-center", children: [
        "All ",
        activeDoc.totalPages,
        " pages selected"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-black uppercase tracking-widest opacity-60 mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 16 }),
        " AI Tool"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-1.5", children: TOOLS.map(([id, lbl, Icon, color]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setType(id),
          className: `py-2.5 flex flex-col items-center gap-1 rounded-xl text-xs font-black uppercase tracking-wider transition-all border
                ${type === id ? "text-white border-transparent shadow-md scale-105" : "glass opacity-60 hover:opacity-100 border-[color:var(--border2,var(--border))]"}`,
          style: type === id ? { backgroundColor: color } : {},
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18 }),
            lbl
          ]
        },
        id
      )) })
    ] }),
    type === "translate" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase tracking-widest opacity-60 mb-4", children: "Target Language" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["Arabic", "Spanish", "French", "German", "Chinese", "Japanese", "Portuguese", "Turkish", "Hindi", "Urdu"].map((lang) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setTargetLang(lang),
          className: `px-3 py-1.5 rounded-xl text-xs font-black transition-all ${targetLang === lang ? "bg-[var(--accent)] text-white" : "glass opacity-60 hover:opacity-100"}`,
          children: lang
        },
        lang
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          value: targetLang,
          onChange: (e) => setTargetLang(e.target.value),
          placeholder: "Or type any language…",
          className: "mt-3 w-full glass border border-[color:var(--border2,var(--border))] rounded-xl px-3 py-2 text-xs outline-none focus:border-[var(--accent)] text-[var(--text)]"
        }
      )
    ] }),
    ["flashcards", "exam", "cases"].includes(type) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xs font-black uppercase tracking-widest opacity-60 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ListChecks, { size: 16 }),
          " Quantity"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-black text-[var(--accent)]", children: count })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "range",
          min: "1",
          max: "1000",
          value: count,
          onChange: (e) => setCount(+e.target.value),
          className: "w-full accent-[var(--accent)] mb-2"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 flex-wrap", children: [5, 10, 20, 50, 100, 250, 500, 1e3].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setCount(n),
          className: `px-2 py-1 rounded-lg text-xs font-black transition-colors ${count === n ? "bg-[var(--accent)] text-white" : "glass opacity-60 hover:opacity-100"}`,
          children: n
        },
        n
      )) }),
      count > 50 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-500 font-bold mt-2 flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { size: 10 }),
        "Parallel AI — ",
        count,
        "+ items in ~30-120s"
      ] })
    ] }),
    ["flashcards", "exam", "cases"].includes(type) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-black uppercase tracking-widest opacity-60", children: "Difficulty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black text-[var(--accent)]", children: levels[difficulty - 1] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "range",
          min: "1",
          max: "3",
          value: difficulty,
          onChange: (e) => setDifficulty(+e.target.value),
          className: "w-full accent-[var(--accent)]"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: go,
        disabled: !!bgTask,
        className: "w-full py-4 btn-accent rounded-2xl text-sm font-black uppercase tracking-widest disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl",
        children: [
          bgTask ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader2, { size: 18, className: "animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 18, fill: "currentColor" }),
          bgTask ? `${bgTask.msg}` : "⚡ Generate Now"
        ]
      }
    ),
    bgTask && !bgTask.isFinished && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black opacity-60", children: bgTask.msg }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-black text-[var(--accent)]", children: [
          bgTask.done || 0,
          "/",
          bgTask.total || 1
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-black/10 dark:bg-white/10 rounded-full h-2.5 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "bg-gradient-to-r from-[var(--accent)] to-[var(--accent2,var(--accent))] h-full rounded-full transition-all duration-300 animate-pulse",
          style: { width: `${bgTask.total ? (bgTask.done || 0) / bgTask.total * 100 : 10}%` }
        }
      ) })
    ] })
  ] });
}
function ChatPanel({ activeDoc, settings, currentPage }) {
  const [msgs, setMsgs] = reactExports.useState([{ role: "assistant", content: "Ready. Ask me anything about this document." }]);
  const [input, setInput] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [mode, setMode] = reactExports.useState("page");
  const [listening, setListening] = reactExports.useState(false);
  const endRef = reactExports.useRef(null);
  const recogRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, loading]);
  const toggleVoice = () => {
    if (listening) {
      recogRef.current?.abort();
      recogRef.current = null;
      setListening(false);
      return;
    }
    if (recogRef.current) {
      recogRef.current.abort();
      recogRef.current = null;
    }
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;
    const r = new SR();
    r.continuous = false;
    r.interimResults = true;
    r.onresult = (e) => {
      setInput(Array.from(e.results).map((r2) => r2[0].transcript).join(""));
    };
    r.onend = () => setListening(false);
    r.onerror = () => setListening(false);
    r.start();
    recogRef.current = r;
    setListening(true);
  };
  const send = async () => {
    if (!input.trim() || loading) return;
    const msg = input;
    setInput("");
    setMsgs((p) => [...p, { role: "user", content: msg }, { role: "assistant", content: "" }]);
    setLoading(true);
    try {
      const fileData = await getFile(activeDoc.id);
      let textContext = "";
      if (activeDoc.fileCategory === "image" && fileData?.imageBase64) {
        const result = await callAIWithVision(
          `Document context: ${activeDoc.name}
User question: ${msg}`,
          fileData.imageBase64,
          fileData.imageType || "image/jpeg",
          settings,
          3e3
        );
        setMsgs((p) => [...p.slice(0, -1), { role: "assistant", content: result }]);
        setLoading(false);
        return;
      }
      if (mode === "page") {
        textContext = fileData?.pagesText?.[currentPage] || "No text on this page.";
      } else {
        textContext = Object.entries(fileData?.pagesText || {}).map(([p, t]) => `[Page ${p}]
${t}`).join("\n\n").substring(0, 8e4);
      }
      const hist = msgs.slice(-6).map((m) => `${m.role === "user" ? "USER" : "AI"}: ${m.content}`).join("\n");
      const prompt = `DOCUMENT:
${textContext}

CONVERSATION:
${hist}

QUESTION: ${msg}

Answer clearly and precisely.`;
      await callAIStreaming(prompt, (chunk) => {
        setMsgs((p) => [...p.slice(0, -1), { role: "assistant", content: chunk }]);
      }, settings, 4e3);
    } catch (e) {
      setMsgs((p) => [...p.slice(0, -1), { role: "assistant", content: `⚠️ ${e.message}` }]);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-h-0 h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex shrink-0 border-b border-[color:var(--border2,var(--border))] bg-[var(--surface,var(--card))]", children: ["page", "document"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setMode(m),
        className: `flex-1 py-2.5 text-xs font-black uppercase tracking-widest transition-colors border-b-2
              ${mode === m ? "border-[var(--accent)] text-[var(--accent)]" : "border-transparent opacity-50 hover:opacity-80"}`,
        children: m === "page" ? `Page ${currentPage}` : "Full Doc"
      },
      m
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 overflow-y-auto custom-scrollbar p-4 space-y-3 min-h-0", children: [
      msgs.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex gap-2.5 ${m.role === "user" ? "flex-row-reverse" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${m.role === "user" ? "bg-[var(--accent)]" : "overflow-hidden glass"}`, children: m.role === "user" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleUserRound, { size: 16, className: "text-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: MARIAM_IMG, className: "w-full h-full object-cover", alt: "AI" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `px-3.5 py-2.5 text-xs leading-relaxed max-w-[84%] whitespace-pre-wrap rounded-2xl
              ${m.role === "user" ? "bg-[var(--accent)] text-white rounded-tr-sm" : "glass rounded-tl-sm"}`, children: m.content || /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-30", children: "▊" }) })
      ] }, i)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: endRef })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "shrink-0 border-t border-[color:var(--border2,var(--border))] bg-[var(--surface,var(--card))]",
        style: { padding: "12px 12px calc(12px + env(safe-area-inset-bottom)) 12px" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-end glass rounded-2xl p-2 border border-[color:var(--border2,var(--border))] focus-within:border-[var(--accent)]/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              value: input,
              onChange: (e) => setInput(e.target.value),
              onKeyDown: (e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send();
                }
              },
              placeholder: "Ask about this document…",
              disabled: loading,
              rows: 1,
              className: "flex-1 bg-[var(--bg)] border border-[color:var(--border2,var(--border))] rounded-xl px-3 py-2 text-xs outline-none resize-none focus:border-[var(--accent)] text-[var(--text)] min-h-[36px] max-h-24"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: toggleVoice,
              className: `w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${listening ? "bg-red-500 text-white animate-pulse" : "glass text-[var(--accent)]"}`,
              children: listening ? /* @__PURE__ */ jsxRuntimeExports.jsx(MicOff, { size: 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: send,
              disabled: loading || !input.trim(),
              className: "w-9 h-9 bg-[var(--accent)] disabled:opacity-40 rounded-xl text-white flex items-center justify-center shrink-0",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 18 })
            }
          )
        ] })
      }
    )
  ] });
}
function VaultPanel({ activeDocId, flashcards, setFlashcards, exams, setExams, cases, setCases, notes, setNotes, addToast, setCurrentPage, setView, settings, mindMaps, timelines }) {
  const docFc = flashcards.filter((f) => f.docId === activeDocId);
  const docEx = exams.filter((e) => e.docId === activeDocId);
  const docCa = cases.filter((c) => c.docId === activeDocId);
  const docNo = notes.filter((n) => n.docId === activeDocId);
  const docMm = (mindMaps || []).filter((m) => m.docId === activeDocId);
  const docTl = (timelines || []).filter((t) => t.docId === activeDocId);
  const [expanded, setExpanded] = reactExports.useState({});
  const toggle = (k) => setExpanded((p) => ({ ...p, [k]: !p[k] }));
  const Section = ({ title, count, colorClass, children, id }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toggle(id), className: "w-full flex items-center justify-between p-4 hover:bg-black/5 dark:hover:bg-white/5 transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-black uppercase tracking-widest ${colorClass}`, children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-black px-2 py-0.5 rounded-full ${colorClass} bg-current/10`, children: count })
      ] }),
      expanded[id] ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { size: 18, className: "opacity-40" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 18, className: "opacity-40" })
    ] }),
    expanded[id] && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-[color:var(--border2,var(--border))] p-3 space-y-2", children })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 overflow-y-auto custom-scrollbar p-4 space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "fc", title: "Flashcards", count: docFc.reduce((s, f) => s + (f.cards?.length || 0), 0), colorClass: "text-[var(--accent)]", children: [
      docFc.map((set) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 glass rounded-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold", children: set.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs opacity-40", children: [
            set.cards?.length,
            " cards · ",
            new Date(set.createdAt).toLocaleDateString()
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setView("flashcards"), className: "text-xs font-black px-2 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-lg", children: "Study" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFlashcards((p) => p.filter((f) => f.id !== set.id)), className: "text-xs font-black px-2 py-1 bg-red-500/10 text-red-500 rounded-lg", style: { display: set.isBuiltin ? "none" : "inline-flex" }, children: "Del" })
        ] })
      ] }, set.id)),
      !docFc.length && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs opacity-40 py-2 font-bold", children: "No flashcards yet" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "ex", title: "Exams", count: docEx.reduce((s, e) => s + (e.questions?.length || 0), 0), colorClass: "text-emerald-500", children: [
      docEx.map((ex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 glass rounded-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold", children: ex.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs opacity-40", children: [
            ex.questions?.length,
            " Qs"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setView("exams"), className: "text-xs font-black px-2 py-1 bg-emerald-500/10 text-emerald-500 rounded-lg", children: "Take" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setExams((p) => p.filter((e) => e.id !== ex.id)), className: "text-xs font-black px-2 py-1 bg-red-500/10 text-red-500 rounded-lg", style: { display: ex.isBuiltin ? "none" : "inline-flex" }, children: "Del" })
        ] })
      ] }, ex.id)),
      !docEx.length && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs opacity-40 py-2 font-bold", children: "No exams yet" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "ca", title: "Cases", count: docCa.reduce((s, c) => s + (c.questions?.length || 0), 0), colorClass: "text-blue-500", children: [
      docCa.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 glass rounded-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold", children: c.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs opacity-40", children: [
            c.questions?.length,
            " cases"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setView("cases"), className: "text-xs font-black px-2 py-1 bg-blue-500/10 text-blue-500 rounded-lg", children: "Start" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCases((p) => p.filter((x) => x.id !== c.id)), className: "text-xs font-black px-2 py-1 bg-red-500/10 text-red-500 rounded-lg", style: { display: c.isBuiltin ? "none" : "inline-flex" }, children: "Del" })
        ] })
      ] }, c.id)),
      !docCa.length && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs opacity-40 py-2 font-bold", children: "No cases yet" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "no", title: "Notes", count: docNo.length, colorClass: "text-amber-500", children: [
      docNo.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 glass rounded-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold", children: n.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setNotes((p) => p.filter((x) => x.id !== n.id)), className: "text-xs px-1.5 py-0.5 bg-red-500/10 text-red-500 rounded-lg font-black", children: "Del" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-60 line-clamp-3 leading-relaxed", children: n.content })
      ] }, n.id)),
      !docNo.length && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs opacity-40 py-2 font-bold", children: "No notes yet" })
    ] }),
    docMm.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "mm", title: "Mind Maps", count: docMm.length, colorClass: "text-purple-500", children: docMm.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold p-2 border-b border-[color:var(--border2,var(--border))] opacity-60", children: [
        m.data?.topic || `Map ${i + 1}`,
        " · Pgs ",
        m.pages
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MindMap, { data: m.data })
    ] }, m.id)) }),
    docTl.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "tl", title: "Timelines", count: docTl.length, colorClass: "text-teal-500", children: docTl.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold mb-3 opacity-60", children: [
        "Timeline · Pgs ",
        t.pages
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineView, { events: t.events || [] })
    ] }, t.id)) })
  ] });
}
function AiTutorPanel({ settings, context, onClose, width, onDragStart, alwaysOpen = false }) {
  const [msgs, setMsgs] = reactExports.useState([{ role: "assistant", content: "Hi! I'm your AI Tutor 🎓\nAsk me anything about this question, the diagnosis, the explanation, or related concepts. I'm here to help you learn!" }]);
  const [input, setInput] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const endRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, loading]);
  const send = async (override) => {
    const msg = override || input;
    if (!msg.trim() || loading) return;
    setInput("");
    const newMsgs = [...msgs, { role: "user", content: msg }, { role: "assistant", content: "" }];
    setMsgs(newMsgs);
    setLoading(true);
    try {
      const hist = newMsgs.slice(-8, -1).map((m) => `${m.role === "user" ? "STUDENT" : "TUTOR"}: ${m.content}`).join("\n");
      const prompt = `You are an expert medical/academic AI tutor. The student is currently studying the following content:

CONTEXT:
${context || "General study session"}

Conversation so far:
${hist}

STUDENT: ${msg}

TUTOR: Provide a clear, educational explanation. Use bullet points, bold key terms, and be thorough but concise.

CRITICAL MEDICINE RULE: Whenever you discuss any medication or drug, ALWAYS start with the brand name first, followed by the generic name in parentheses. Format: "BrandName (generic name)". Example: "Tylenol (acetaminophen)", "Lipitor (atorvastatin)", "Lasix (furosemide)". Apply this to every single drug mentioned anywhere in your response.`;
      await callAIStreaming(prompt, (chunk) => {
        setMsgs((p) => [...p.slice(0, -1), { role: "assistant", content: chunk }]);
      }, settings, 4e3);
    } catch (e) {
      setMsgs((p) => [...p.slice(0, -1), { role: "assistant", content: `⚠️ ${e.message}` }]);
    } finally {
      setLoading(false);
    }
  };
  const QUICK = [
    "Explain this in detail",
    "Why is this the correct answer?",
    "What are common mistakes here?",
    "Give me a mnemonic",
    "What else should I know?",
    "Create a practice question"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full min-h-0 bg-[var(--surface,var(--card))] border-l border-[color:var(--border2,var(--border))]", style: { width: width || 360 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-gradient-to-r from-[var(--accent)] to-[var(--accent2,var(--accent))] text-white flex items-center justify-between px-4 py-3 shrink-0 cursor-grab select-none",
        onMouseDown: onDragStart,
        onTouchStart: onDragStart,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-black flex items-center gap-2 text-base", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { size: 20 }),
              " AI Tutor"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-70 mt-0.5", children: "Ask about anything you're studying" })
          ] }),
          !alwaysOpen && onClose && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "w-9 h-9 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 overflow-y-auto custom-scrollbar p-3 space-y-3", children: [
      msgs.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex gap-2 ${m.role === "user" ? "flex-row-reverse" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-black ${m.role === "user" ? "bg-[var(--accent)] text-white" : "bg-gradient-to-br from-[var(--accent)] to-[var(--accent2,var(--accent))] text-white"}`, children: m.role === "user" ? "You" : "AI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `px-3 py-2.5 text-sm leading-relaxed rounded-2xl max-w-[85%] whitespace-pre-wrap
              ${m.role === "user" ? "bg-[var(--accent)] text-white rounded-tr-sm" : "glass border border-[color:var(--border2,var(--border))] rounded-tl-sm"}`, children: m.content || /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-30 animate-pulse", children: "▊" }) })
      ] }, i)),
      loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent2,var(--accent))] text-white flex items-center justify-center text-xs font-black shrink-0", children: "AI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5 border border-[color:var(--border2,var(--border))]", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-[var(--accent)] rounded-full animate-bounce", style: { animationDelay: `${i * 0.15}s` } }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: endRef })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-2 flex gap-1.5 flex-wrap shrink-0 border-t border-[color:var(--border2,var(--border))]", children: QUICK.map((q) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => send(q),
        className: "px-2.5 py-1.5 glass rounded-xl text-xs font-bold opacity-60 hover:opacity-100 hover:border-[var(--accent)]/40 transition-all border border-[color:var(--border2,var(--border))] leading-tight text-left",
        children: q
      },
      q
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 p-3 border-t border-[color:var(--border2,var(--border))] bg-[var(--surface,var(--card))]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-end glass rounded-2xl p-2 border border-[color:var(--border2,var(--border))] focus-within:border-[var(--accent)]/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          value: input,
          onChange: (e) => setInput(e.target.value),
          onKeyDown: (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              send();
            }
          },
          placeholder: "Ask your tutor anything…",
          disabled: loading,
          rows: 1,
          className: "flex-1 bg-transparent p-1.5 text-sm outline-none resize-none max-h-32 custom-scrollbar text-[var(--text)] min-h-[36px]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => send(),
          disabled: loading || !input.trim(),
          className: "w-9 h-9 bg-[var(--accent)] disabled:opacity-40 rounded-xl text-white flex items-center justify-center shrink-0 shadow-lg",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 18 })
        }
      )
    ] }) })
  ] });
}
function FlashcardsView({ flashcards, setFlashcards, settings, addToast, docs, setExams, setCases }) {
  const [selSet, setSelSet] = reactExports.useState(null);
  const [idx, setIdx] = reactExports.useState(0);
  const [flipped, setFlipped] = reactExports.useState(false);
  const [mode, setMode] = reactExports.useState("browse");
  const [showModal, setShowModal] = reactExports.useState(false);
  const [exporting, setExporting] = reactExports.useState(null);
  const [filterDocId, setFilterDocId] = reactExports.useState("all");
  const [mobileTutorOpen, setMobileTutorOpen] = reactExports.useState(false);
  const rateCard = reactExports.useCallback((q) => {
    trackStudy("flashcard");
    setFlashcards((p) => p.map((set) => {
      if (set.id !== selSet.id) return set;
      return {
        ...set,
        cards: set.cards.map((c, i) => {
          if (i !== idx) return c;
          const newEf = Math.max(1.3, (c.ef || 2.5) + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
          let newInterval;
          if (q < 3) {
            newInterval = 1;
          } else if ((c.repetitions || 0) === 0) {
            newInterval = 1;
          } else if ((c.repetitions || 0) === 1) {
            newInterval = 6;
          } else {
            newInterval = Math.round((c.interval || 1) * newEf);
          }
          return {
            ...c,
            ef: newEf,
            interval: newInterval,
            repetitions: q < 3 ? 0 : (c.repetitions || 0) + 1,
            nextReview: Date.now() + newInterval * 864e5,
            lastReview: Date.now(),
            lastRating: q
          };
        })
      };
    }));
    const nextIdx = idx + 1;
    if (nextIdx < selSet.cards.length) {
      setIdx(nextIdx);
      setFlipped(false);
    } else {
      addToast("🎉 Set complete!", "success");
      setSelSet(null);
      setIdx(0);
    }
  }, [selSet, idx, setFlashcards, addToast]);
  const handleExport = async (set) => {
    setExporting(set.id);
    await exportToPDF("flashcards", set.cards, set.title, addToast);
    setExporting(null);
  };
  const filteredSets = reactExports.useMemo(() => {
    if (filterDocId === "all") return flashcards;
    return flashcards.filter((f) => f.docId === filterDocId);
  }, [flashcards, filterDocId]);
  const [fcTutorW, setFcTutorW] = reactExports.useState(380);
  const handleFcTutorDrag = reactExports.useCallback((x) => {
    setFcTutorW(Math.max(280, Math.min(560, window.innerWidth - x)));
  }, []);
  const startFcTutorDrag = useDrag(handleFcTutorDrag, [handleFcTutorDrag]);
  if (selSet) {
    const card = selSet.cards[idx];
    const progress = (idx + 1) / selSet.cards.length * 100;
    const tutorCtx = `Flashcard study session.
Set: ${selSet.title}
Card ${idx + 1}/${selSet.cards.length}
Question: ${card?.q}
Answer: ${card?.a}
Evidence: ${card?.evidence || "N/A"}`;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-14 glass flex items-center justify-between px-5 shrink-0 border-b border-[color:var(--border2,var(--border))] border-x-0 border-t-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              setSelSet(null);
              setIdx(0);
              setFlipped(false);
            },
            className: "glass px-4 py-2 rounded-xl text-sm font-black flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 18 }),
              "Exit"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-black truncate max-w-xs", children: selSet.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs opacity-40", children: [
            idx + 1,
            " / ",
            selSet.cards.length
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => handleExport(selSet), className: "glass px-3 py-2 rounded-xl text-sm font-black flex items-center gap-2 opacity-60 hover:opacity-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { size: 16 }),
          "PDF"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-black/10 dark:bg-white/10 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-[var(--accent)] to-[var(--accent2,var(--accent))] h-full transition-all duration-500", style: { width: `${progress}%` } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 flex overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 overflow-y-auto custom-scrollbar p-6 flex flex-col gap-5", style: { touchAction: "pan-y", WebkitOverflowScrolling: "touch" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { perspective: "1200px" }, onClick: () => setFlipped((f) => !f), className: "cursor-pointer select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            display: "grid",
            width: "100%",
            minHeight: 220,
            transformStyle: "preserve-3d",
            transition: "transform 0.55s cubic-bezier(0.45,0.05,0.55,0.95)",
            transform: flipped ? "rotateX(180deg)" : "rotateX(0deg)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: { backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", gridArea: "1 / 1" },
                className: "glass rounded-3xl p-8 flex flex-col justify-between border border-[color:var(--border2,var(--border))] hover:border-[var(--accent)]/40 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full border glass opacity-50", children: "Question" }),
                    card.sourcePage && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono opacity-30", children: [
                      "p.",
                      card.sourcePage
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold leading-relaxed flex-1", children: card.q }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs opacity-25 text-center mt-6 flex items-center justify-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 11 }),
                    "Tap to flip"
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: { backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", gridArea: "1 / 1", transform: "rotateX(180deg)" },
                className: "glass rounded-3xl p-8 flex flex-col justify-between border border-[var(--accent)]/30 bg-[var(--accent)]/4 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full border border-[var(--accent)]/40 text-[var(--accent)] bg-[var(--accent)]/10", children: "Answer" }),
                    card.sourcePage && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono opacity-30", children: [
                      "p.",
                      card.sourcePage
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold leading-relaxed flex-1 text-[var(--accent)]", style: { whiteSpace: "pre-line" }, children: card.a }),
                  card.evidence && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs opacity-40 mt-4 italic border-t border-[color:var(--border2,var(--border))] pt-3", children: [
                    '"',
                    card.evidence,
                    '"'
                  ] })
                ]
              }
            )
          ] }) }),
          flipped ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-3", children: [["Again", 0, "#ef4444", "🔁"], ["Hard", 2, "#f59e0b", "😓"], ["Good", 3, "#3b82f6", "👍"], ["Easy", 5, "#10b981", "⚡"]].map(([l, q, col, em]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => rateCard(q),
              className: "text-white py-4 rounded-2xl text-sm font-black uppercase tracking-wide shadow-lg active:scale-95 transition-all flex flex-col items-center gap-1",
              style: { background: col },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: em }),
                l
              ]
            },
            l
          )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFlipped(true), className: "w-full py-4 btn-accent rounded-2xl text-base font-black shadow-xl", children: "Show Answer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden mt-2 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setMobileTutorOpen(true), className: "w-full glass py-3.5 rounded-2xl flex items-center justify-center gap-2 font-bold text-[var(--accent)] border border-[var(--accent)]/30 hover:bg-[var(--accent)]/10 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { size: 18 }),
            " Ask AI Tutor"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            onMouseDown: startFcTutorDrag,
            onTouchStart: startFcTutorDrag,
            className: "hidden lg:flex w-1.5 cursor-col-resize items-center justify-center bg-[var(--border)]/30 hover:bg-[var(--accent)]/40 shrink-0 touch-none transition-colors group",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(GripVertical, { size: 14, className: "opacity-20 group-hover:opacity-70 text-[var(--text)]" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:flex flex-col border-l border-[color:var(--border2,var(--border))] shrink-0", style: { width: fcTutorW }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AiTutorPanel, { settings, context: tutorCtx, onClose: null, width: fcTutorW, onDragStart: startFcTutorDrag, alwaysOpen: true }) })
      ] }),
      reactDomExports.createPortal(
        /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setMobileTutorOpen(true),
              className: "lg:hidden fixed w-14 h-14 rounded-[22px] btn-accent shadow-2xl flex items-center justify-center transition-transform active:scale-90",
              style: { bottom: "calc(90px + env(safe-area-inset-bottom))", right: 16, zIndex: 9e3 },
              title: "AI Tutor",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { size: 24 })
            }
          ),
          mobileTutorOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden fixed inset-0 z-[99999] flex flex-col justify-end backdrop-blur-sm", style: { background: "rgba(0,0,0,0.55)" }, onClick: (e) => e.target === e.currentTarget && setMobileTutorOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-t-[32px] flex flex-col overflow-hidden animate-slide-up", style: { height: "85%", boxShadow: "0 -10px 50px rgba(0,0,0,0.4)" }, onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(AiTutorPanel, { settings, context: tutorCtx, onClose: () => setMobileTutorOpen(false), width: window.innerWidth }) }) })
        ] }),
        document.body
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 overflow-y-auto custom-scrollbar scroll-content", style: { touchAction: "pan-y", WebkitOverflowScrolling: "touch" }, children: [
    showModal && /* @__PURE__ */ jsxRuntimeExports.jsx(
      QuickGenerateModal,
      {
        type: "flashcards",
        docs: docs || [],
        settings,
        onClose: () => setShowModal(false),
        addToast,
        setFlashcards,
        setExams,
        setCases
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full p-6 lg:p-8 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl lg:text-3xl font-black flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { size: 26, className: "opacity-40" }),
          " Flashcards"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setShowModal(true),
            className: "btn-accent px-4 py-2.5 rounded-xl text-xs font-black flex items-center gap-2 shadow-lg",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlus, { size: 18 }),
              " New from File"
            ]
          }
        )
      ] }),
      flashcards.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: [
          ["Sets", flashcards.length, "#6366f1"],
          ["Cards", flashcards.reduce((s, f) => s + (f.cards?.length || 0), 0), "#3b82f6"],
          ["Due Today", flashcards.reduce((s, f) => s + (f.cards?.filter((c) => !c.nextReview || c.nextReview <= Date.now()).length || 0), 0), "#f59e0b"]
        ].map(([l, n, col]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-3 text-center border border-[color:var(--border2,var(--border))]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-black", style: { color: col }, children: n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black uppercase tracking-widest opacity-50 mt-0.5", children: l })
        ] }, l)) }),
        docs?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: filterDocId,
            onChange: (e) => setFilterDocId(e.target.value),
            className: "glass rounded-xl px-3 py-2 text-xs font-bold border border-[color:var(--border2,var(--border))] outline-none text-[var(--text)]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All Documents" }),
              [...new Set(flashcards.map((f) => f.docId))].map((id) => {
                const doc = docs?.find((d) => d.id === id);
                return doc ? /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: id, children: doc.name.slice(0, 30) }, id) : null;
              })
            ]
          }
        )
      ] }),
      !flashcards.length ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass border-dashed border-2 border-[color:var(--border2,var(--border))] rounded-3xl p-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { size: 48, className: "mx-auto mb-4 opacity-20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-black opacity-40", children: "No flashcard sets yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-30 mt-1 mb-6", children: "Generate cards from any document" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setShowModal(true), className: "btn-accent px-6 py-3 rounded-2xl font-black shadow-xl flex items-center gap-2 mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlus, { size: 16 }),
          " Generate from File"
        ] })
      ] }) : filteredSets.map((set) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `glass rounded-2xl p-5 border transition-all card-hover ${set.isBuiltin ? "border-[var(--accent)]/30 bg-[var(--accent)]/3" : "border-[color:var(--border2,var(--border))] hover:border-[var(--accent)]/20"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-black text-sm truncate", children: set.title }),
            (set.isBuiltin || set.isBuiltIn) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black px-2 py-0.5 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/20 shrink-0", children: "📚 Built-in" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs opacity-40 mt-0.5", children: [
            set.cards?.length,
            " cards · ",
            set.isBuiltin || set.isBuiltIn ? "Always available" : new Date(set.createdAt).toLocaleDateString()
          ] }),
          set.docId && docs?.find((d) => d.id === set.docId) && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs opacity-30 mt-0.5 truncate", children: [
            "📄 ",
            docs.find((d) => d.id === set.docId).name
          ] }),
          set.cards?.some((c) => !c.nextReview || c.nextReview <= Date.now()) && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-black text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full mt-1 inline-block", children: [
            set.cards.filter((c) => !c.nextReview || c.nextReview <= Date.now()).length,
            " due today"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleExport(set),
              disabled: exporting === set.id,
              title: "Export PDF",
              className: "w-9 h-9 glass rounded-xl flex items-center justify-center hover:bg-blue-500/10 hover:text-blue-500 transition-colors",
              children: exporting === set.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader2, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => {
                setSelSet(set);
                setIdx(0);
                setFlipped(false);
              },
              className: "btn-accent px-4 py-2 rounded-xl text-xs font-black shadow-md flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { size: 16 }),
                " Study"
              ]
            }
          ),
          !(set.isBuiltin || set.isBuiltIn) && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFlashcards((p) => p.filter((f) => f.id !== set.id)), className: "w-9 h-9 glass rounded-xl flex items-center justify-center hover:bg-red-500/10 hover:text-red-500 transition-colors", style: { display: set.isBuiltin ? "none" : "flex" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14 }) })
        ] })
      ] }) }, set.id))
    ] })
  ] });
}
function ExamsView({ exams, setExams, settings, addToast, docs, setFlashcards, setCases }) {
  const [selEx, setSelEx] = reactExports.useState(null);
  const [qi, setQi] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [score, setScore] = reactExports.useState(null);
  const [answers, setAnswers] = reactExports.useState([]);
  const [showModal, setShowModal] = reactExports.useState(false);
  const [reviewMode, setReviewMode] = reactExports.useState(false);
  const [exporting, setExporting] = reactExports.useState(false);
  const [filterDocId, setFilterDocId] = reactExports.useState("all");
  const [sortMode, setSortMode] = reactExports.useState("newest");
  const [examMobileOpen, setExamMobileOpen] = reactExports.useState(false);
  const startExam = (ex) => {
    setSelEx(ex);
    setQi(0);
    setSelected(null);
    setSubmitted(false);
    setScore(null);
    setAnswers([]);
    setReviewMode(false);
  };
  const submit = () => {
    if (selected === null) return;
    const correct = selEx.questions[qi].correct === selected;
    const newAnswers = [...answers, { qi, selected, correct }];
    setAnswers(newAnswers);
    setSubmitted(true);
    if (qi === selEx.questions.length - 1) {
      const sc = newAnswers.filter((a) => a.correct).length;
      setScore(sc);
      trackStudy("exam", sc, selEx.questions.length);
    }
  };
  const next = () => {
    if (qi < selEx.questions.length - 1) {
      setQi((i) => i + 1);
      setSelected(null);
      setSubmitted(false);
    }
  };
  const handleExport = async (ex) => {
    setExporting(true);
    await exportToPDF("exam", ex.questions, ex.title, addToast);
    setExporting(false);
  };
  const filteredExams = reactExports.useMemo(() => {
    let r = [...exams];
    if (filterDocId !== "all") r = r.filter((e) => e.docId === filterDocId);
    if (sortMode === "newest") r.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    if (sortMode === "oldest") r.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    if (sortMode === "most") r.sort((a, b) => (b.questions?.length || 0) - (a.questions?.length || 0));
    return r;
  }, [exams, filterDocId, sortMode]);
  const [examTutorW, setExamTutorW] = reactExports.useState(380);
  const handleExamTutorDrag = reactExports.useCallback((x) => {
    setExamTutorW(Math.max(280, Math.min(580, window.innerWidth - x)));
  }, []);
  const startExamTutorDrag = useDrag(handleExamTutorDrag, [handleExamTutorDrag]);
  if (selEx && score === null && !reviewMode) {
    const q = selEx.questions[qi];
    const progress = (qi + 1) / selEx.questions.length * 100;
    const tutorCtx = `Exam session: ${selEx.title}
Question ${qi + 1}/${selEx.questions.length}
Q: ${q?.q}
Options: ${(q?.options || []).join(" | ")}
Correct answer: ${q?.options?.[q?.correct]}
Explanation: ${q?.explanation || "N/A"}`;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-14 glass flex items-center justify-between px-5 shrink-0 border-b border-[color:var(--border2,var(--border))] border-x-0 border-t-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
          setSelEx(null);
          setScore(null);
          setAnswers([]);
        }, className: "glass px-4 py-2 rounded-xl text-sm font-black flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 18 }),
          "Exit"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-black truncate max-w-xs", children: selEx.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs opacity-40", children: [
            qi + 1,
            " / ",
            selEx.questions.length,
            " questions"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setReviewMode(true), className: "glass px-3 py-2 rounded-xl text-sm font-black opacity-60 hover:opacity-100", children: "Review All" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-black/10 dark:bg-white/10 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-[var(--accent)] to-[var(--accent2,var(--accent))] h-full transition-all duration-500", style: { width: `${progress}%` } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 flex overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 overflow-y-auto custom-scrollbar p-4 lg:p-8 space-y-4", style: { touchAction: "pan-y", WebkitOverflowScrolling: "touch" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-4 lg:p-6 border border-[color:var(--border2,var(--border))]", children: [
            q.sourcePage && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-mono opacity-30 mb-3", children: [
              "Source: p.",
              q.sourcePage
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold leading-relaxed", children: q.q })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: (q.options || []).map((opt, oi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              disabled: submitted,
              onClick: () => setSelected(oi),
              className: `w-full text-left px-5 py-3.5 rounded-2xl text-sm font-medium transition-all border flex items-center gap-3
                    ${submitted && oi === q.correct ? "bg-emerald-500/15 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold" : submitted && oi === selected && oi !== q.correct ? "bg-red-500/15 border-red-500 text-red-500" : selected === oi ? "bg-[var(--accent)]/10 border-[var(--accent)] font-bold" : "glass border-[color:var(--border2,var(--border))] hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/5"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 border transition-all
                    ${submitted && oi === q.correct ? "bg-emerald-500 border-emerald-500 text-white" : submitted && oi === selected && oi !== q.correct ? "bg-red-500 border-red-500 text-white" : selected === oi ? "bg-[var(--accent)] border-[var(--accent)] text-white" : "border-[color:var(--border2,var(--border))] opacity-50"}`, children: String.fromCharCode(65 + oi) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: opt }),
                submitted && oi === q.correct && /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 15, className: "text-emerald-500 shrink-0" })
              ]
            },
            oi
          )) }),
          submitted && q.explanation && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass p-5 rounded-2xl border-l-4 border-[var(--accent)] bg-[var(--accent)]/5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black opacity-60 mb-2 uppercase tracking-widest", children: "Explanation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", children: q.explanation }),
            q.evidence && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs opacity-40 italic mt-3 pt-3 border-t border-[color:var(--border2,var(--border))]", children: [
              '"',
              q.evidence,
              '"'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pb-4", children: !submitted ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: submit, disabled: selected === null, className: "w-full py-4 btn-accent rounded-2xl text-base font-black disabled:opacity-40 shadow-xl", children: "Submit Answer" }) : qi < selEx.questions.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: next, className: "w-full py-4 btn-accent rounded-2xl text-base font-black shadow-xl", children: "Next Question →" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            const sc = answers.filter((a) => a.correct).length;
            setScore(sc);
            trackStudy("exam", sc, selEx.questions.length);
          }, className: "w-full py-4 btn-accent rounded-2xl text-base font-black shadow-xl", children: "See Results →" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden mt-4 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setExamMobileOpen(true), className: "w-full glass py-3.5 rounded-2xl flex items-center justify-center gap-2 font-bold text-[var(--accent)] border border-[var(--accent)]/30 hover:bg-[var(--accent)]/10 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { size: 18 }),
            " Ask AI Tutor"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            onMouseDown: startExamTutorDrag,
            onTouchStart: startExamTutorDrag,
            className: "hidden lg:flex w-1.5 cursor-col-resize items-center justify-center bg-[var(--border)]/30 hover:bg-[var(--accent)]/40 shrink-0 touch-none transition-colors group",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(GripVertical, { size: 14, className: "opacity-20 group-hover:opacity-70 text-[var(--text)]" })
          }
        ),
        reactDomExports.createPortal(
          /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setExamMobileOpen(true),
                className: "lg:hidden fixed w-14 h-14 rounded-[22px] btn-accent shadow-2xl flex items-center justify-center transition-transform active:scale-90",
                style: { bottom: "calc(90px + env(safe-area-inset-bottom))", right: 16, zIndex: 9e3 },
                title: "AI Tutor",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { size: 24 })
              }
            ),
            examMobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden fixed inset-0 z-[99999] flex flex-col justify-end backdrop-blur-sm", style: { background: "rgba(0,0,0,0.55)" }, onClick: (e) => e.target === e.currentTarget && setExamMobileOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-t-[32px] flex flex-col overflow-hidden animate-slide-up", style: { height: "85%", boxShadow: "0 -10px 50px rgba(0,0,0,0.4)" }, onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(AiTutorPanel, { settings, context: `Exam: ${selEx?.title}
Q${qi + 1}: ${selEx?.questions?.[qi]?.q}
Options: ${selEx?.questions?.[qi]?.options?.join(" | ")}
Correct: ${selEx?.questions?.[qi]?.options?.[selEx?.questions?.[qi]?.correct]}`, onClose: () => setExamMobileOpen(false), width: window.innerWidth }) }) })
          ] }),
          document.body
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:flex flex-col border-l border-[color:var(--border2,var(--border))] shrink-0", style: { width: examTutorW }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AiTutorPanel, { settings, context: tutorCtx, onClose: null, width: examTutorW, onDragStart: startExamTutorDrag, alwaysOpen: true }) })
      ] })
    ] });
  }
  if (reviewMode && selEx) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-y-auto custom-scrollbar scroll-content", style: { touchAction: "pan-y", WebkitOverflowScrolling: "touch" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full p-6 lg:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setReviewMode(false), className: "glass px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 18 }),
          "Back"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-black text-lg", children: [
          selEx.title,
          " — Review"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleExport(selEx),
            disabled: exporting,
            className: "ml-auto btn-accent px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 shadow-md",
            children: [
              exporting ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader2, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { size: 16 }),
              "Print PDF"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: selEx.questions.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-5 border border-[color:var(--border2,var(--border))]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-black text-[var(--accent)] mb-2", children: [
          "Q",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold mb-3", children: q.q }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: (q.options || []).map((opt, oi) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `px-3 py-2 rounded-xl text-xs font-medium ${oi === q.correct ? "bg-emerald-500/15 text-emerald-600 font-bold border border-emerald-500/30" : "opacity-50"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-black mr-2", children: [
            String.fromCharCode(65 + oi),
            "."
          ] }),
          opt,
          oi === q.correct && /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 16, className: "inline ml-2 text-emerald-500" })
        ] }, oi)) }),
        q.explanation && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-50 mt-3 italic", children: q.explanation })
      ] }, i)) })
    ] }) });
  }
  if (score !== null && selEx) {
    const pct = Math.round(score / selEx.questions.length * 100);
    const grade = pct >= 90 ? "A" : pct >= 80 ? "B" : pct >= 70 ? "C" : pct >= 60 ? "D" : "F";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center p-6 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-10 text-center max-w-sm w-full border border-[color:var(--border2,var(--border))]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-7xl font-black mb-1 ${pct >= 80 ? "text-emerald-500" : pct >= 60 ? "text-amber-500" : "text-red-500"}`, children: [
          pct,
          "%"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-3xl font-black mb-4 ${pct >= 80 ? "text-emerald-500" : pct >= 60 ? "text-amber-500" : "text-red-500"}`, children: [
          "Grade ",
          grade
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-black opacity-60 mb-1", children: [
          score,
          " / ",
          selEx.questions.length,
          " correct"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-40", children: pct >= 80 ? "Outstanding! 🎉" : pct >= 60 ? "Good effort! Keep studying 📚" : "Need more review 💪" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-black/10 dark:bg-white/10 rounded-full h-3 mt-6 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full transition-all duration-1000", style: { width: `${pct}%`, background: pct >= 80 ? "#10b981" : pct >= 60 ? "#f59e0b" : "#ef4444" } }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          setReviewMode(true);
        }, className: "glass px-6 py-3 rounded-2xl font-black border border-[color:var(--border2,var(--border))]", children: "Review Answers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          setSelEx(null);
          setScore(null);
          setAnswers([]);
        }, className: "btn-accent px-6 py-3 rounded-2xl font-black shadow-xl", children: "Back to Exams" })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 overflow-y-auto custom-scrollbar scroll-content", style: { touchAction: "pan-y", WebkitOverflowScrolling: "touch" }, children: [
    showModal && /* @__PURE__ */ jsxRuntimeExports.jsx(
      QuickGenerateModal,
      {
        type: "exam",
        docs: docs || [],
        settings,
        onClose: () => setShowModal(false),
        addToast,
        setFlashcards: setFlashcards || ((fn) => {
        }),
        setExams,
        setCases: setCases || ((fn) => {
        })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full p-6 lg:p-8 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl lg:text-3xl font-black flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CheckSquare, { size: 26, className: "opacity-40" }),
          " Exams"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setShowModal(true), className: "btn-accent px-4 py-2.5 rounded-xl text-xs font-black flex items-center gap-2 shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlus, { size: 18 }),
          " New from File"
        ] })
      ] }),
      exams.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
          ["Total Exams", exams.length, "#3b82f6"],
          ["Questions", exams.reduce((s, e) => s + (e.questions?.length || 0), 0), "#6366f1"],
          ["Avg Score", ANALYTICS.scores.length ? `${Math.round(ANALYTICS.scores.reduce((s, r) => s + r.pct, 0) / ANALYTICS.scores.length)}%` : "—", "#10b981"],
          ["Attempts", ANALYTICS.scores.length, "#f59e0b"]
        ].map(([l, n, col]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-3 text-center border border-[color:var(--border2,var(--border))]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-black", style: { color: col }, children: n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black uppercase tracking-widest opacity-50 mt-0.5", children: l })
        ] }, l)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: filterDocId,
              onChange: (e) => setFilterDocId(e.target.value),
              className: "glass rounded-xl px-3 py-2 text-xs font-bold border border-[color:var(--border2,var(--border))] outline-none text-[var(--text)]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All Documents" }),
                [...new Set(exams.map((e) => e.docId))].map((id) => {
                  const doc = docs?.find((d) => d.id === id);
                  return doc ? /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: id, children: doc.name.slice(0, 30) }, id) : null;
                })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: sortMode,
              onChange: (e) => setSortMode(e.target.value),
              className: "glass rounded-xl px-3 py-2 text-xs font-bold border border-[color:var(--border2,var(--border))] outline-none text-[var(--text)]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "newest", children: "Newest first" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "oldest", children: "Oldest first" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "most", children: "Most questions" })
              ]
            }
          )
        ] })
      ] }),
      !exams.length ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass border-dashed border-2 border-[color:var(--border2,var(--border))] rounded-3xl p-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CheckSquare, { size: 48, className: "mx-auto mb-4 opacity-20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-black opacity-40", children: "No exams yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-30 mt-1 mb-6", children: "Generate exams from any document" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setShowModal(true), className: "btn-accent px-6 py-3 rounded-2xl font-black shadow-xl flex items-center gap-2 mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlus, { size: 16 }),
          " Generate from File"
        ] })
      ] }) : filteredExams.map((ex) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `glass rounded-2xl p-5 border transition-all card-hover ${ex.isBuiltin ? "border-emerald-500/30 bg-emerald-500/3" : "border-[color:var(--border2,var(--border))] hover:border-[var(--accent)]/20"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-black text-sm truncate", children: ex.title }),
            ex.isBuiltin && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0", children: "📚 Built-in" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs opacity-40 mt-0.5", children: [
            ex.questions?.length,
            " questions · ",
            ex.isBuiltin ? "Always available" : new Date(ex.createdAt).toLocaleDateString()
          ] }),
          ex.docId && docs?.find((d) => d.id === ex.docId) && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs opacity-30 mt-0.5 truncate", children: [
            "📄 ",
            docs.find((d) => d.id === ex.docId).name
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleExport(ex),
              disabled: exporting,
              title: "Export as PDF",
              className: "w-9 h-9 glass rounded-xl flex items-center justify-center hover:bg-blue-500/10 hover:text-blue-500 transition-colors",
              children: exporting ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader2, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                setSelEx(ex);
                setReviewMode(true);
              },
              title: "Review all questions",
              className: "w-9 h-9 glass rounded-xl flex items-center justify-center hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => startExam(ex), className: "btn-accent px-4 py-2 rounded-xl text-xs font-black shadow-md flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { size: 18 }),
            " Start"
          ] }),
          !(ex.isBuiltin || ex.isBuiltIn) && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setExams((p) => p.filter((f) => f.id !== ex.id)), className: "w-9 h-9 glass rounded-xl flex items-center justify-center hover:bg-red-500/10 hover:text-red-500 transition-colors", style: { display: ex.isBuiltin ? "none" : "flex" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14 }) })
        ] })
      ] }) }, ex.id))
    ] })
  ] });
}
function CasesView({ cases, setCases, settings, addToast, docs, setFlashcards, setExams }) {
  const [selSet, setSelSet] = reactExports.useState(null);
  const [ci, setCi] = reactExports.useState(0);
  const [casesMobileTutorOpen, setCasesMobileTutorOpen] = reactExports.useState(false);
  const [stage, setStage] = reactExports.useState("vignette");
  const [selOpt, setSelOpt] = reactExports.useState(null);
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [showModal, setShowModal] = reactExports.useState(false);
  const [exporting, setExporting] = reactExports.useState(null);
  const handleExport = async (set) => {
    setExporting(set.id);
    await exportToPDF("cases", set.questions, set.title, addToast);
    setExporting(null);
  };
  const [labW, setLabW] = reactExports.useState(420);
  const [tutorW, setTutorW] = reactExports.useState(360);
  const handleLabDrag = reactExports.useCallback((x) => {
    setLabW(Math.max(280, Math.min(600, window.innerWidth - x)));
  }, []);
  const handleTutorDrag = reactExports.useCallback((x) => {
    setTutorW(Math.max(260, Math.min(520, window.innerWidth - x)));
  }, []);
  const startLabDrag = useDrag(handleLabDrag, [handleLabDrag]);
  const startTutorDrag = useDrag(handleTutorDrag, [handleTutorDrag]);
  if (selSet) {
    const cas = selSet.questions[ci];
    const q = cas.examQuestion || cas;
    const tutorCtx = `Clinical case: ${cas?.title || "Untitled"}
Vignette: ${cas?.vignette || ""}
Diagnosis: ${cas?.diagnosis || "N/A"}
Question: ${q?.q}
Correct answer: ${q?.options?.[q?.correct]}
Explanation: ${q?.explanation || "N/A"}`;
    return (
      /* ══ THREE-PANEL LAYOUT ══ */
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 flex flex-col overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-14 glass flex items-center justify-between px-5 shrink-0 border-b border-[color:var(--border2,var(--border))] border-x-0 border-t-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => {
                setSelSet(null);
                setCi(0);
                setSelOpt(null);
                setSubmitted(false);
              },
              className: "glass px-4 py-2 rounded-xl text-sm font-black flex items-center gap-2 hover:border-[var(--accent)]/40 transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 18 }),
                "Exit"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            cas.title && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-black truncate max-w-xs", children: cas.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 justify-center mt-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold opacity-50", children: [
                "Case ",
                ci + 1,
                " / ",
                selSet.questions.length
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: selSet.questions.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-1.5 rounded-full transition-all ${i === ci ? "w-6 bg-[var(--accent)]" : i < ci ? "w-2 bg-emerald-500" : "w-2 bg-black/10 dark:bg-white/10"}` }, i)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => handleExport(selSet), className: "glass px-3 py-2 rounded-xl text-sm font-black opacity-60 hover:opacity-100 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { size: 16 }),
            "PDF"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 flex overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 overflow-y-auto custom-scrollbar p-5 space-y-4", style: { touchAction: "pan-y", WebkitOverflowScrolling: "touch" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-5 border border-[color:var(--border2,var(--border))]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-black uppercase tracking-widest text-[var(--accent)] mb-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { size: 13 }),
                " Patient Vignette"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-[1.85]", children: cas.vignette })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-5 border border-[color:var(--border2,var(--border))]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-black uppercase tracking-widest opacity-40 mb-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CheckSquare, { size: 13 }),
                "Question"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold leading-relaxed", children: q.q })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: (q.options || []).map((opt, oi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                disabled: submitted,
                onClick: () => setSelOpt(oi),
                className: `w-full text-left px-5 py-3.5 rounded-2xl text-sm font-medium transition-all border flex items-center gap-3
                    ${submitted && oi === q.correct ? "bg-emerald-500/15 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold" : submitted && oi === selOpt && oi !== q.correct ? "bg-red-500/15 border-red-500 text-red-500" : selOpt === oi ? "bg-[var(--accent)]/10 border-[var(--accent)] font-bold" : "glass border-[color:var(--border2,var(--border))] hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/5"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 border transition-all
                    ${submitted && oi === q.correct ? "bg-emerald-500 border-emerald-500 text-white" : submitted && oi === selOpt && oi !== q.correct ? "bg-red-500 border-red-500 text-white" : selOpt === oi ? "bg-[var(--accent)] border-[var(--accent)] text-white" : "border-[color:var(--border2,var(--border))] opacity-50"}`, children: String.fromCharCode(65 + oi) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: opt }),
                  submitted && oi === q.correct && /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 16, className: "text-emerald-500 shrink-0" })
                ]
              },
              oi
            )) }),
            submitted && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass p-5 rounded-2xl border-l-4 border-emerald-500 bg-emerald-500/5 space-y-2", children: [
              cas.diagnosis && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 15 }),
                "Diagnosis: ",
                cas.diagnosis
              ] }),
              q.explanation && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", children: q.explanation }),
              q.evidence && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs opacity-40 italic pt-3 border-t border-[color:var(--border2,var(--border))]", children: [
                '"',
                q.evidence,
                '" — p.',
                q.sourcePage
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pb-4", children: !submitted ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setSubmitted(true),
                disabled: selOpt === null,
                className: "w-full py-4 btn-accent rounded-2xl text-base font-black disabled:opacity-40 shadow-xl",
                children: "Submit Answer"
              }
            ) : ci < selSet.questions.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => {
                  setCi((i) => i + 1);
                  setSelOpt(null);
                  setSubmitted(false);
                },
                className: "w-full py-4 btn-accent rounded-2xl text-base font-black shadow-xl flex items-center justify-center gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 20 }),
                  "Next Case"
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => {
                  setSelSet(null);
                  setCi(0);
                  addToast("All cases complete! 🏆", "success");
                },
                className: "w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl text-base font-black shadow-xl",
                children: "Finish Session 🎉"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              onMouseDown: startLabDrag,
              onTouchStart: startLabDrag,
              className: "hidden lg:flex w-1.5 cursor-col-resize items-center justify-center bg-[var(--border)]/30 hover:bg-[var(--accent)]/40 shrink-0 z-10 touch-none transition-colors group",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(GripVertical, { size: 14, className: "opacity-20 group-hover:opacity-70 text-[var(--text)]" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "hidden lg:flex flex-col border-l border-[color:var(--border2,var(--border))] bg-[var(--surface,var(--card))] overflow-hidden shrink-0",
              style: { width: labW },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2 px-4 py-3 border-b border-[color:var(--border2,var(--border))] shrink-0 cursor-grab select-none",
                    onMouseDown: startLabDrag,
                    onTouchStart: startLabDrag,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Thermometer, { size: 15, className: "text-[var(--accent)] shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-black uppercase tracking-widest text-[var(--accent)]", children: "Laboratory Results" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(GripVertical, { size: 13, className: "ml-auto opacity-20" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-y-auto custom-scrollbar p-4 space-y-5", children: cas.labPanels?.length > 0 ? cas.labPanels.map((panel, pi) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black uppercase tracking-widest opacity-50 mb-2 px-1", children: panel.panelName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-[color:var(--border2,var(--border))]", children: ["TEST", "RESULT", "RANGE", "UNITS"].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1.5 px-2 text-xs font-black uppercase tracking-wider opacity-40", children: h }, h)) }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: (panel.rows || []).map((row, ri) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-[color:var(--border2,var(--border))]/20 hover:bg-black/5 dark:hover:bg-white/5 transition-colors", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2 font-bold text-sm", children: row.test }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2 font-black text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", style: { color: row.flag === "H" ? "#ef4444" : row.flag === "L" ? "#3b82f6" : void 0 }, children: [
                        row.result,
                        row.flag && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black px-1 py-0.5 rounded", style: { backgroundColor: row.flag === "H" ? "#ef444420" : row.flag === "L" ? "#3b82f620" : "transparent" }, children: row.flag })
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2 text-sm opacity-45 font-mono", children: row.range }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2 text-sm opacity-35 font-mono", children: row.units })
                    ] }, ri)) })
                  ] })
                ] }, pi)) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-32 opacity-25", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Thermometer, { size: 28, className: "mb-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold", children: "No lab data" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden mt-4 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setCasesMobileTutorOpen(true), className: "w-full glass py-3.5 rounded-2xl flex items-center justify-center gap-2 font-bold text-[var(--accent)] border border-[var(--accent)]/30 hover:bg-[var(--accent)]/10 transition-colors", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { size: 18 }),
                  " Ask AI Tutor"
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              onMouseDown: startTutorDrag,
              onTouchStart: startTutorDrag,
              className: "hidden lg:flex w-1.5 cursor-col-resize items-center justify-center bg-[var(--border)]/30 hover:bg-[var(--accent)]/40 shrink-0 z-10 touch-none transition-colors group",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(GripVertical, { size: 14, className: "opacity-20 group-hover:opacity-70 text-[var(--text)]" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "hidden lg:flex flex-col border-l border-[color:var(--border2,var(--border))] shrink-0 overflow-hidden",
              style: { width: tutorW },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(AiTutorPanel, { settings, context: tutorCtx, onClose: null, width: tutorW, onDragStart: startTutorDrag, alwaysOpen: true })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-[color:var(--border2,var(--border))]", children: cas.labPanels?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "flex items-center gap-2 px-4 py-3 cursor-pointer bg-[var(--surface,var(--card))] text-sm font-black select-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Thermometer, { size: 15, className: "text-[var(--accent)]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--accent)] uppercase tracking-widest text-xs", children: "Lab Results" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 14, className: "ml-auto opacity-40 group-open:rotate-180 transition-transform" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 overflow-x-auto", children: cas.labPanels.map((panel, pi) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black uppercase tracking-widest opacity-50 mb-2", children: panel.panelName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-[color:var(--border2,var(--border))]", children: ["TEST", "RESULT", "RANGE", "UNITS"].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1 px-2 font-black uppercase opacity-40", children: h }, h)) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: (panel.rows || []).map((row, ri) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-[color:var(--border2,var(--border))]/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 px-2 font-bold", children: row.test }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-1.5 px-2 font-black", style: { color: row.flag === "H" ? "#ef4444" : row.flag === "L" ? "#3b82f6" : void 0 }, children: [
                  row.result,
                  row.flag && ` ${row.flag}`
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 px-2 opacity-40 font-mono", children: row.range }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 px-2 opacity-35 font-mono", children: row.units })
              ] }, ri)) })
            ] })
          ] }, pi)) })
        ] }) }),
        reactDomExports.createPortal(
          /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setCasesMobileTutorOpen(true),
                className: "lg:hidden fixed w-14 h-14 rounded-[22px] btn-accent shadow-2xl flex items-center justify-center transition-transform active:scale-90",
                style: { bottom: "calc(90px + env(safe-area-inset-bottom))", right: 16, zIndex: 9e3 },
                title: "AI Tutor",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { size: 24 })
              }
            ),
            casesMobileTutorOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden fixed inset-0 z-[99999] flex flex-col justify-end backdrop-blur-sm", style: { background: "rgba(0,0,0,0.55)" }, onClick: (e) => e.target === e.currentTarget && setCasesMobileTutorOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-t-[32px] flex flex-col overflow-hidden animate-slide-up", style: { height: "85%", boxShadow: "0 -10px 50px rgba(0,0,0,0.4)" }, onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(AiTutorPanel, { settings, context: tutorCtx, onClose: () => setCasesMobileTutorOpen(false), width: window.innerWidth }) }) })
          ] }),
          document.body
        )
      ] })
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 overflow-y-auto custom-scrollbar scroll-content", style: { touchAction: "pan-y", WebkitOverflowScrolling: "touch" }, children: [
    showModal && /* @__PURE__ */ jsxRuntimeExports.jsx(
      QuickGenerateModal,
      {
        type: "cases",
        docs: docs || [],
        settings,
        onClose: () => setShowModal(false),
        addToast,
        setFlashcards: setFlashcards || ((fn) => {
        }),
        setExams: setExams || ((fn) => {
        }),
        setCases
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full p-6 lg:p-8 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl lg:text-3xl font-black flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { size: 26, className: "opacity-40" }),
          " Clinical Cases"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setShowModal(true), className: "btn-accent px-4 py-2.5 rounded-xl text-xs font-black flex items-center gap-2 shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlus, { size: 18 }),
          " New from File"
        ] })
      ] }),
      cases.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3", children: [
        ["Case Sets", cases.length, "#8b5cf6"],
        ["Total Cases", cases.reduce((s, c) => s + (c.questions?.length || 0), 0), "#06b6d4"],
        ["Docs Used", [...new Set(cases.map((c) => c.docId))].filter(Boolean).length, "#10b981"]
      ].map(([l, n, col]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-3 text-center border border-[color:var(--border2,var(--border))]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-black", style: { color: col }, children: n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black uppercase tracking-widest opacity-50 mt-0.5", children: l })
      ] }, l)) }),
      !cases.length ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass border-dashed border-2 border-[color:var(--border2,var(--border))] rounded-3xl p-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { size: 48, className: "mx-auto mb-4 opacity-20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-black opacity-40", children: "No cases yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-30 mt-1 mb-6", children: "Generate clinical cases from any medical document" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setShowModal(true), className: "btn-accent px-6 py-3 rounded-2xl font-black shadow-xl flex items-center gap-2 mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlus, { size: 16 }),
          " Generate from File"
        ] })
      ] }) : cases.map((set) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-2xl p-5 border border-[color:var(--border2,var(--border))] hover:border-[var(--accent)]/20 transition-all card-hover", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-black text-sm truncate", children: set.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs opacity-40 mt-0.5", children: [
            set.questions?.length,
            " cases · ",
            new Date(set.createdAt || 0).toLocaleDateString()
          ] }),
          set.docId && docs?.find((d) => d.id === set.docId) && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs opacity-30 mt-0.5 truncate", children: [
            "📄 ",
            docs.find((d) => d.id === set.docId).name
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleExport(set),
              disabled: exporting === set.id,
              title: "Export PDF",
              className: "w-9 h-9 glass rounded-xl flex items-center justify-center hover:bg-blue-500/10 hover:text-blue-500 transition-colors",
              children: exporting === set.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader2, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => {
                setSelSet(set);
                setCi(0);
                setSelOpt(null);
                setSubmitted(false);
              },
              className: "btn-accent px-4 py-2 rounded-xl text-xs font-black shadow-md flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { size: 18 }),
                "Practice"
              ]
            }
          ),
          !(set.isBuiltin || set.isBuiltIn) && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCases((p) => p.filter((x) => x.id !== set.id)), className: "w-9 h-9 glass rounded-xl flex items-center justify-center hover:bg-red-500/10 hover:text-red-500 transition-colors", style: { display: set.isBuiltin ? "none" : "flex" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14 }) })
        ] })
      ] }) }, set.id))
    ] })
  ] });
}
function ChatView({ settings, sessions, setSessions }) {
  const [selSess, setSelSess] = reactExports.useState(null);
  const [msgs, setMsgs] = reactExports.useState([]);
  const [input, setInput] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [listening, setListening] = reactExports.useState(false);
  const [sidebarOpen, setSidebarOpen] = reactExports.useState(true);
  const [sessSearch, setSessSearch] = reactExports.useState("");
  const [pinnedIds, setPinnedIds] = reactExports.useState([]);
  const [contextMenu, setContextMenu] = reactExports.useState(null);
  const [projects, setProjects] = reactExports.useState([]);
  const [selProject, setSelProject] = reactExports.useState(null);
  const [showNewProject, setShowNewProject] = reactExports.useState(false);
  const [newProjectName, setNewProjectName] = reactExports.useState("");
  const [sidebarTab, setSidebarTab] = reactExports.useState("chats");
  const [inputRows, setInputRows] = reactExports.useState(1);
  const endRef = reactExports.useRef(null);
  const recogRef = reactExports.useRef(null);
  const inputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, loading]);
  const STARTERS = [
    { icon: "🧬", text: "Explain a complex topic" },
    { icon: "📋", text: "Create a study plan" },
    { icon: "❓", text: "Quiz me on key concepts" },
    { icon: "🔍", text: "Compare and contrast" },
    { icon: "📝", text: "Summarize main points" },
    { icon: "💡", text: "Give me clinical pearls" }
  ];
  const toggleVoice = () => {
    if (listening) {
      recogRef.current?.stop();
      setListening(false);
      return;
    }
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      alert("Voice not supported in this browser.");
      return;
    }
    const r = new SR();
    r.continuous = false;
    r.interimResults = true;
    r.onresult = (e) => {
      setInput(Array.from(e.results).map((r2) => r2[0].transcript).join(""));
    };
    r.onend = () => setListening(false);
    r.onerror = () => setListening(false);
    r.start();
    recogRef.current = r;
    setListening(true);
  };
  const newSession = () => {
    setSelSess(null);
    setMsgs([]);
    inputRef.current?.focus();
  };
  const saveSession = reactExports.useCallback((ms, id) => {
    if (!ms.filter((m) => m.role === "user").length) return;
    const sessId = id || selSess || Date.now().toString();
    const title = ms.find((m) => m.role === "user")?.content?.slice(0, 50) || "New Chat";
    const sess = { id: sessId, title, messages: ms, updatedAt: (/* @__PURE__ */ new Date()).toISOString(), msgCount: ms.filter((m) => m.role === "user").length, projectId: selProject || null };
    setSessions((p) => {
      const ex = p.findIndex((s) => s.id === sessId);
      return ex >= 0 ? [...p.slice(0, ex), sess, ...p.slice(ex + 1)] : [sess, ...p];
    });
    setSelSess(sessId);
  }, [selSess, setSessions, selProject]);
  const loadSession = (sess) => {
    setSelSess(sess.id);
    setMsgs(sess.messages || []);
  };
  const deleteSession = (id) => {
    setSessions((p) => p.filter((s) => s.id !== id));
    setPinnedIds((p) => p.filter((x) => x !== id));
    if (selSess === id) {
      setSelSess(null);
      setMsgs([]);
    }
    setContextMenu(null);
  };
  const copySession = (id) => {
    const sess = sessions.find((s) => s.id === id);
    if (!sess) return;
    const text = sess.messages.map((m) => `${m.role === "user" ? "You" : "MARIAM"}: ${m.content}`).join("\n\n");
    navigator.clipboard?.writeText(text);
    setContextMenu(null);
  };
  const createProject = () => {
    if (!newProjectName.trim()) return;
    const p = { id: Date.now().toString(), name: newProjectName.trim(), color: ["#6366f1", "#8b5cf6", "#3b82f6", "#10b981", "#f59e0b", "#ef4444"][Math.floor(Math.random() * 6)], createdAt: (/* @__PURE__ */ new Date()).toISOString() };
    setProjects((prev) => [...prev, p]);
    setNewProjectName("");
    setShowNewProject(false);
  };
  const send = async (overrideMsg) => {
    const msg = overrideMsg || input;
    if (!msg.trim() || loading) return;
    setInput("");
    setInputRows(1);
    const sessId = selSess || Date.now().toString();
    if (!selSess) setSelSess(sessId);
    const newMsgs = [...msgs, { role: "user", content: msg, timestamp: Date.now() }, { role: "assistant", content: "", timestamp: Date.now() }];
    setMsgs(newMsgs);
    setLoading(true);
    try {
      const hist = newMsgs.slice(-12, -1).map((m) => `${m.role === "user" ? "USER" : "MARIAM"}: ${m.content}`).join("\n");
      const projCtx = selProject ? `

Project context: ${projects.find((p) => p.id === selProject)?.name || ""}` : "";
      const sysPrompt = `You are MARIAM, a brilliant, warm, and knowledgeable AI study assistant specialized in medicine and academia. You help students understand complex topics, create study materials, explain clinical concepts, and achieve their academic goals.${projCtx}

Formatting rules:
- Use **bold** for key terms and important concepts
- Use bullet points and numbered lists when listing items
- Use headers (##) for major sections in long responses
- Be thorough but organized — students need to be able to study from your answers
- Always cite clinical evidence when relevant`;
      const prompt = `${sysPrompt}

Conversation:
${hist}

USER: ${msg}

MARIAM:`;
      await callAIStreaming(prompt, (chunk) => {
        setMsgs((p) => [...p.slice(0, -1), { role: "assistant", content: chunk, timestamp: Date.now() }]);
      }, settings, 6e3);
      const finalMsgs = [...newMsgs.slice(0, -1), { ...newMsgs[newMsgs.length - 1] }];
      setTimeout(() => saveSession(finalMsgs, sessId), 300);
    } catch (e) {
      setMsgs((p) => [...p.slice(0, -1), { role: "assistant", content: `⚠️ ${e.message}` }]);
    } finally {
      setLoading(false);
    }
  };
  const filteredSessions = reactExports.useMemo(() => {
    let s = [...sessions];
    if (sidebarTab === "projects" && selProject) s = s.filter((x) => x.projectId === selProject);
    const q = sessSearch.toLowerCase();
    if (q) s = s.filter((x) => x.title.toLowerCase().includes(q) || x.messages?.some((m) => m.content?.toLowerCase().includes(q)));
    return s;
  }, [sessions, sessSearch, sidebarTab, selProject]);
  const pinned = filteredSessions.filter((s) => pinnedIds.includes(s.id));
  const unpinned = filteredSessions.filter((s) => !pinnedIds.includes(s.id)).sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  const groupByDate = (items) => {
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const week = new Date(today);
    week.setDate(week.getDate() - 7);
    const groups = { Today: [], Yesterday: [], "Last 7 Days": [], "Older": [] };
    items.forEach((s) => {
      const d = new Date(s.updatedAt);
      if (d >= today) groups.Today.push(s);
      else if (d >= yesterday) groups.Yesterday.push(s);
      else if (d >= week) groups["Last 7 Days"].push(s);
      else groups.Older.push(s);
    });
    return groups;
  };
  const grouped = groupByDate(unpinned);
  const SessionItem = ({ s }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      className: `w-full flex items-start gap-2.5 px-3 py-2 rounded-xl text-left transition-all group relative ${selSess === s.id ? "bg-[var(--accent)]/10 border border-[var(--accent)]/20" : "hover:bg-black/5 dark:hover:bg-white/5 border border-transparent"}`,
      onClick: () => loadSession(s),
      children: [
        s.projectId && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full mt-1.5 shrink-0", style: { backgroundColor: projects.find((p) => p.id === s.projectId)?.color || "#6366f1" } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm truncate font-medium ${selSess === s.id ? "text-[var(--accent)] font-bold" : ""}`, children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-40 mt-0.5", children: new Date(s.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "opacity-0 group-hover:opacity-60 hover:!opacity-100 shrink-0 p-1 rounded-lg hover:bg-black/10 dark:hover:bg-white/10",
            onClick: (e) => {
              e.stopPropagation();
              setContextMenu({ id: s.id, x: e.clientX, y: e.clientY });
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(MoreVertical, { size: 14 })
          }
        )
      ]
    }
  );
  const formatMsg = (text) => {
    return text.split("\n").map((line, i) => {
      if (line.startsWith("## ")) return /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black mt-3 mb-1", children: line.slice(3) }, i);
      if (line.startsWith("# ")) return /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-black mt-4 mb-1", children: line.slice(2) }, i);
      if (line.startsWith("- ") || line.startsWith("• ")) return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "ml-4 list-disc text-sm leading-relaxed", children: formatInline(line.slice(2)) }, i);
      if (/^\d+\. /.test(line)) return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "ml-4 list-decimal text-sm leading-relaxed", children: formatInline(line.replace(/^\d+\. /, "")) }, i);
      if (line === "" && i > 0) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2" }, i);
      return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", children: formatInline(line) }, i);
    });
  };
  const formatInline = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((p, i) => p.startsWith("**") && p.endsWith("**") ? /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-black", children: p.slice(2, -2) }, i) : p);
  };
  const curSessData = sessions.find((s) => s.id === selSess);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full min-h-0 overflow-hidden bg-[var(--bg)]", onClick: () => contextMenu && setContextMenu(null), children: [
    contextMenu && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "fixed z-[9999] glass rounded-xl shadow-2xl border border-[color:var(--border2,var(--border))] py-1 min-w-[180px]",
        style: { left: Math.min(contextMenu.x, window.innerWidth - 200), top: Math.min(contextMenu.y, window.innerHeight - 140) },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => {
                setPinnedIds((p) => p.includes(contextMenu.id) ? p.filter((x) => x !== contextMenu.id) : [...p, contextMenu.id]);
                setContextMenu(null);
              },
              className: "w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium hover:bg-[var(--accent)]/10 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Pin, { size: 15 }),
                pinnedIds.includes(contextMenu.id) ? "Unpin" : "Pin to top"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => copySession(contextMenu.id),
              className: "w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium hover:bg-[var(--accent)]/10 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 15 }),
                "Copy transcript"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-1 border-t border-[color:var(--border2,var(--border))]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => deleteSession(contextMenu.id),
              className: "w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-red-500 hover:bg-red-500/10 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 15 }),
                "Delete chat"
              ]
            }
          )
        ]
      }
    ),
    sidebarOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "lg:hidden fixed inset-0 bg-black/40 z-[40] backdrop-blur-sm",
        onClick: () => setSidebarOpen(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col bg-[var(--surface,var(--card))] border-r border-[color:var(--border2,var(--border))] transition-all duration-300 shrink-0 z-[41]
        ${sidebarOpen ? "w-72" : "w-0 overflow-hidden"}
        lg:relative absolute inset-y-0 left-0`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-[color:var(--border2,var(--border))] shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-black", children: "MARIAM Chat" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: newSession,
              className: "w-8 h-8 btn-accent rounded-xl flex items-center justify-center shadow-sm",
              title: "New chat",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setSidebarOpen(false),
              className: "lg:hidden w-8 h-8 glass rounded-xl flex items-center justify-center opacity-60",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-2 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14, className: "absolute left-3 top-1/2 -translate-y-1/2 opacity-40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            value: sessSearch,
            onChange: (e) => setSessSearch(e.target.value),
            placeholder: "Search conversations…",
            className: "w-full bg-black/5 dark:bg-white/5 rounded-xl pl-9 pr-3 py-2.5 text-sm outline-none border border-transparent focus:border-[var(--accent)]/40 text-[var(--text)]"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex border-b border-[color:var(--border2,var(--border))] shrink-0 px-3 gap-1", children: [["chats", "Chats", MessageSquare], ["projects", "Projects", FolderOpen]].map(([id, lbl, Icon]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setSidebarTab(id),
          className: `flex items-center gap-1.5 px-3 py-2.5 text-xs font-black uppercase tracking-widest border-b-2 transition-colors -mb-px
                ${sidebarTab === id ? "border-[var(--accent)] text-[var(--accent)]" : "border-transparent opacity-50 hover:opacity-80"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 14 }),
            lbl
          ]
        },
        id
      )) }),
      sidebarTab === "chats" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 overflow-y-auto custom-scrollbar py-2", children: [
        pinned.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-black uppercase tracking-widest opacity-30 px-4 py-1.5 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pin, { size: 10 }),
            "Pinned"
          ] }),
          pinned.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SessionItem, { s }, s.id)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-3 my-2 border-t border-[color:var(--border2,var(--border))]" })
        ] }),
        Object.entries(grouped).map(([grp, items]) => items.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black uppercase tracking-widest opacity-30 px-4 py-1.5", children: grp }),
          items.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SessionItem, { s }, s.id))
        ] }, grp)),
        !sessions.length && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16 px-4 opacity-30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { size: 32, className: "mx-auto mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold", children: "No chats yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1", children: "Start a conversation below" })
        ] })
      ] }),
      sidebarTab === "projects" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 overflow-y-auto custom-scrollbar py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setShowNewProject(true),
            className: "w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-bold text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 }),
              "New Project"
            ]
          }
        ),
        showNewProject && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-3 mb-3 p-3 glass rounded-xl border border-[color:var(--border2,var(--border))] space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: newProjectName,
              onChange: (e) => setNewProjectName(e.target.value),
              onKeyDown: (e) => e.key === "Enter" && createProject(),
              placeholder: "Project name…",
              autoFocus: true,
              className: "w-full text-sm bg-transparent outline-none border-b border-[color:var(--border2,var(--border))] pb-1 text-[var(--text)]"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: createProject, className: "flex-1 py-1.5 btn-accent rounded-lg text-xs font-black", children: "Create" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowNewProject(false), className: "flex-1 py-1.5 glass rounded-lg text-xs font-black opacity-60", children: "Cancel" })
          ] })
        ] }),
        projects.length === 0 && !showNewProject && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 px-4 opacity-30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { size: 32, className: "mx-auto mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold", children: "No projects yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1", children: "Organize chats into projects" })
        ] }),
        [{ id: null, name: "All Chats", color: "#6366f1" }, ...projects].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              setSelProject(p.id);
              setSidebarTab(p.id ? "projects" : "chats");
            },
            className: `w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-left transition-all mx-0
                  ${selProject === p.id ? "bg-[var(--accent)]/10" : "hover:bg-black/5 dark:hover:bg-white/5"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full shrink-0", style: { backgroundColor: p.color } }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold truncate", children: p.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs opacity-40", children: [
                  sessions.filter((s) => s.projectId === p.id).length,
                  " chats"
                ] })
              ] }),
              p.id && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: (e) => {
                    e.stopPropagation();
                    setProjects((prev) => prev.filter((x) => x.id !== p.id));
                  },
                  className: "opacity-0 group-hover:opacity-60 hover:!opacity-100 w-6 h-6 rounded-lg hover:bg-red-500/10 flex items-center justify-center",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12, className: "text-red-500" })
                }
              )
            ]
          },
          p.id || "all"
        )),
        selProject && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-[color:var(--border2,var(--border))] mt-2 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black uppercase tracking-widest opacity-30 px-4 py-1.5", children: "Chats in project" }),
          filteredSessions.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SessionItem, { s }, s.id)),
          filteredSessions.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-30 text-center py-4", children: "No chats in this project" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 p-3 border-t border-[color:var(--border2,var(--border))]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-2 py-2 text-xs opacity-40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 14 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold", children: [
          sessions.length,
          " conversations · ",
          sessions.reduce((a, s) => a + (s.msgCount || 0), 0),
          " messages"
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-h-0 min-w-0 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3 border-b border-[color:var(--border2,var(--border))] bg-[var(--surface,var(--card))]/80 backdrop-blur-sm shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setSidebarOpen((o) => !o),
            className: "w-9 h-9 glass rounded-xl flex items-center justify-center opacity-60 hover:opacity-100 shrink-0 transition-all",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(History, { size: 18 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          curSessData?.projectId && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full", style: { backgroundColor: projects.find((p) => p.id === curSessData.projectId)?.color || "#6366f1" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs opacity-50 font-bold", children: projects.find((p) => p.id === curSessData.projectId)?.name || "Project" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-black truncate", children: curSessData?.title || "New Conversation" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          msgs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                const t = msgs.map((m) => `${m.role === "user" ? "You" : "MARIAM"}: ${m.content}`).join("\n\n");
                navigator.clipboard?.writeText(t);
              },
              className: "w-9 h-9 glass rounded-xl flex items-center justify-center opacity-60 hover:opacity-100 transition-all",
              title: "Copy transcript",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 18 })
            }
          ),
          msgs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: newSession,
              className: "flex items-center gap-2 px-3 py-2 glass rounded-xl text-sm font-black opacity-60 hover:opacity-100 transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 }),
                "New"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-y-auto custom-scrollbar", children: msgs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center min-h-full p-6 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: MARIAM_IMG, className: "w-24 h-24 rounded-3xl object-cover shadow-2xl border-4 border-[color:var(--border2,var(--border))]", alt: "MARIAM AI" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1.5 -right-1.5 w-7 h-7 bg-emerald-500 rounded-full border-2 border-[var(--bg)] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 bg-white rounded-full" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-black", children: "What can I help you study?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base opacity-50 max-w-md", children: "Your AI study assistant — medicine, sciences, and beyond" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-2xl", children: STARTERS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => send(s.text),
            className: "glass rounded-2xl p-4 text-left hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/5 transition-all border border-[color:var(--border2,var(--border))] group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: s.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold group-hover:text-[var(--accent)] transition-colors", children: s.text })
            ]
          },
          s.text
        )) }),
        selProject && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl px-4 py-3 flex items-center gap-3 border border-[var(--accent)]/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full", style: { backgroundColor: projects.find((p) => p.id === selProject)?.color } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold", children: [
            "Project: ",
            projects.find((p) => p.id === selProject)?.name
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelProject(null), className: "ml-auto text-xs opacity-50 hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 }) })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto py-6 px-4 space-y-6", children: [
        msgs.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex gap-4 ${m.role === "user" ? "flex-row-reverse" : ""} group`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-1 ${m.role === "user" ? "bg-[var(--accent)]" : "overflow-hidden border border-[color:var(--border2,var(--border))]"}`, children: m.role === "user" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleUserRound, { size: 20, className: "text-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: MARIAM_IMG, className: "w-full h-full object-cover", alt: "AI" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex-1 max-w-[85%] flex flex-col gap-1.5 ${m.role === "user" ? "items-end" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `px-4 py-3 rounded-2xl text-sm leading-relaxed
                      ${m.role === "user" ? "bg-[var(--accent)] text-white rounded-tr-sm max-w-[80%]" : "rounded-tl-sm"}`, children: [
              m.role === "assistant" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose-custom space-y-1", children: formatMsg(m.content || "") }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-wrap", children: m.content }),
              !m.content && m.role === "assistant" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-30 animate-pulse", children: "▊" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 px-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => navigator.clipboard?.writeText(m.content),
                className: "opacity-0 group-hover:opacity-40 hover:!opacity-80 text-xs font-bold flex items-center gap-1 transition-opacity",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 12 }),
                  "Copy"
                ]
              }
            ) })
          ] })
        ] }, i)),
        loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl overflow-hidden border border-[color:var(--border2,var(--border))] shrink-0 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: MARIAM_IMG, className: "w-full h-full object-cover", alt: "AI" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-2xl rounded-tl-sm px-4 py-3.5 flex items-center gap-1.5", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 bg-[var(--accent)] rounded-full animate-bounce", style: { animationDelay: `${i * 0.15}s` } }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: endRef })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 px-4 py-4 border-t border-[color:var(--border2,var(--border))] bg-[var(--surface,var(--card))]/80 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
        selProject && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2 px-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full", style: { backgroundColor: projects.find((p) => p.id === selProject)?.color } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold opacity-60", children: projects.find((p) => p.id === selProject)?.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelProject(null), className: "opacity-40 hover:opacity-80 ml-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl border border-[color:var(--border2,var(--border))] focus-within:border-[var(--accent)]/60 transition-colors shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              ref: inputRef,
              value: input,
              onChange: (e) => {
                setInput(e.target.value);
                setInputRows(Math.min(8, e.target.value.split("\n").length));
              },
              onKeyDown: (e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send();
                }
              },
              placeholder: "Message MARIAM…",
              disabled: loading,
              rows: inputRows,
              className: "w-full bg-transparent px-4 pt-4 pb-2 text-sm outline-none resize-none custom-scrollbar text-[var(--text)] min-h-[52px]"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-3 pb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: toggleVoice,
                  className: `w-8 h-8 rounded-xl flex items-center justify-center transition-all ${listening ? "bg-red-500 text-white animate-pulse" : "opacity-50 hover:opacity-100 hover:bg-black/10 dark:hover:bg-white/10"}`,
                  title: "Voice input",
                  children: listening ? /* @__PURE__ */ jsxRuntimeExports.jsx(MicOff, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { size: 16 })
                }
              ),
              projects.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-8 h-8 rounded-xl flex items-center justify-center opacity-50 hover:opacity-100 hover:bg-black/10 dark:hover:bg-white/10 transition-all", title: "Assign to project", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { size: 16 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 left-0 hidden group-hover:flex flex-col glass rounded-xl border border-[color:var(--border2,var(--border))] shadow-xl min-w-[160px] py-1 z-50", children: projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => setSelProject(p.id),
                    className: "flex items-center gap-2.5 px-3 py-2 text-sm hover:bg-[var(--accent)]/10 transition-colors",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 rounded-full", style: { backgroundColor: p.color } }),
                      p.name
                    ]
                  },
                  p.id
                )) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => send(),
                disabled: loading || !input.trim(),
                className: "w-9 h-9 bg-[var(--accent)] disabled:opacity-30 rounded-xl text-white flex items-center justify-center shrink-0 shadow-lg transition-all hover:opacity-90 active:scale-95",
                children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader2, { size: 18, className: "animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-center opacity-20 font-medium mt-2", children: "MARIAM can make mistakes. Verify important medical information." })
      ] }) })
    ] })
  ] });
}
function SettingsView({ settings, setSettings, installPrompt, onInstall }) {
  const pr = PROVIDERS[settings.provider] || PROVIDERS.anthropic;
  const themes = [
    { id: "pure-white", label: "White", icon: Sun, desc: "Clean & bright" },
    { id: "light", label: "Soft Blue", icon: CloudSun, desc: "Gentle blue tint" },
    { id: "warm", label: "Warm", icon: Flame, desc: "Cozy amber tone" },
    { id: "rose", label: "Rose", icon: Heart, desc: "Soft pink glow" },
    { id: "forest", label: "Forest", icon: Leaf, desc: "Natural greens" },
    { id: "dark", label: "Dark", icon: Moon, desc: "Easy on eyes" },
    { id: "midnight", label: "Midnight", icon: MoonStar, desc: "Deep blue-black" },
    { id: "slate", label: "Slate", icon: Layers, desc: "Modern grey" },
    { id: "oled", label: "OLED", icon: Zap, desc: "Pure black" }
  ];
  const accents = [
    { id: "indigo", hex: "#5046e5", label: "Indigo" },
    { id: "purple", hex: "#9333ea", label: "Purple" },
    { id: "blue", hex: "#2563eb", label: "Blue" },
    { id: "emerald", hex: "#059669", label: "Emerald" },
    { id: "rose", hex: "#e11d48", label: "Rose" },
    { id: "amber", hex: "#d97706", label: "Amber" },
    { id: "cyan", hex: "#0891b2", label: "Cyan" },
    { id: "teal", hex: "#0d9488", label: "Teal" }
  ];
  const sizes = [{ id: "small", label: "S", px: 14 }, { id: "medium", label: "M", px: 16 }, { id: "large", label: "L", px: 20 }, { id: "xl", label: "XL", px: 23 }, { id: "xxl", label: "XXL", px: 26 }];
  const changeProvider = (p) => {
    const pr2 = PROVIDERS[p];
    setSettings((s) => ({ ...s, provider: p, baseUrl: pr2.baseUrl, model: pr2.defaultModel }));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-y-auto custom-scrollbar scroll-content", style: { touchAction: "pan-y", WebkitOverflowScrolling: "touch" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full p-6 lg:p-8 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-black flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { size: 28, className: "opacity-40" }),
      " Settings"
    ] }),
    installPrompt && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "glass rounded-2xl p-5 border border-[var(--accent)]/30 bg-[var(--accent)]/5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-black text-sm mb-2 flex items-center gap-2 text-[var(--accent)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { size: 16 }),
        " Install as App"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-60 mb-4", children: "Install MARIAM PRO on your device for offline access, faster loading, and a native app experience." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onInstall, className: "btn-accent px-4 py-2.5 rounded-xl text-xs font-black flex items-center gap-2 shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 18 }),
        " Install Now"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "glass rounded-2xl p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-black text-sm mb-4 flex items-center gap-2 opacity-70", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 16 }),
        " AI Provider"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4", children: Object.entries(PROVIDERS).map(([id, { label }]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => changeProvider(id),
          className: `py-2.5 px-2 rounded-xl text-xs font-black leading-tight transition-all border
                  ${settings.provider === id ? "bg-[var(--accent)] text-white border-transparent shadow-md scale-105" : "glass opacity-60 hover:opacity-100 border-[color:var(--border2,var(--border))]"}`,
          children: [
            label.split(" ")[0],
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-70 font-normal normal-case text-xs", children: label.split(" ").slice(1).join(" ") })
          ]
        },
        id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-start gap-2 p-3 rounded-xl mb-4 text-xs font-medium ${pr.needsKey ? "bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300" : "bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300"}`, children: [
        pr.needsKey ? /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { size: 18, className: "shrink-0 mt-0.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 14, className: "shrink-0 mt-0.5" }),
        pr.note
      ] }),
      pr.needsKey && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs font-black uppercase tracking-widest opacity-40 block mb-1.5 flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { size: 10 }),
          "API Key"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "password",
            placeholder: "Paste your API key…",
            value: settings.apiKey || "",
            onChange: (e) => setSettings((s) => ({ ...s, apiKey: e.target.value })),
            className: "w-full glass rounded-xl px-4 py-3 font-mono text-xs outline-none focus:border-[var(--accent)] border border-[color:var(--border2,var(--border))] text-[var(--text)]"
          }
        )
      ] }),
      (settings.provider === "custom" || settings.provider === "ollama") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-black uppercase tracking-widest opacity-40 block mb-1.5", children: "Base URL" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            placeholder: "https://your-api.com",
            value: settings.baseUrl || "",
            onChange: (e) => setSettings((s) => ({ ...s, baseUrl: e.target.value })),
            className: "w-full glass rounded-xl px-4 py-3 font-mono text-xs outline-none focus:border-[var(--accent)] border border-[color:var(--border2,var(--border))] text-[var(--text)]"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-black uppercase tracking-widest opacity-40 block mb-1.5", children: "Model (optional)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            placeholder: pr.defaultModel || "e.g. gpt-4o",
            value: settings.model || "",
            onChange: (e) => setSettings((s) => ({ ...s, model: e.target.value })),
            className: "w-full glass rounded-xl px-4 py-3 font-mono text-xs outline-none focus:border-[var(--accent)] border border-[color:var(--border2,var(--border))] text-[var(--text)]"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "glass rounded-2xl p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-black text-sm mb-4 flex items-center gap-2 opacity-70", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { size: 16 }),
        " Appearance"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-5", children: themes.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setSettings({ ...settings, theme: t.id }),
          className: `py-3 px-2 flex flex-col items-center gap-1.5 rounded-xl text-xs font-black border transition-all`,
          style: settings.theme === t.id ? { background: "linear-gradient(135deg,rgba(var(--acc-rgb,99,102,241),.18),rgba(var(--acc-rgb,99,102,241),.08))", borderColor: "rgba(var(--acc-rgb,99,102,241),.4)", color: "var(--accent)", boxShadow: "0 4px 16px rgba(var(--acc-rgb,99,102,241),.18)" } : { background: "var(--surface2,var(--card))", borderColor: "var(--border)", opacity: 0.7 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(t.icon, { size: 18 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.label }),
            t.desc && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 9, fontWeight: 500, opacity: 0.6 }, children: t.desc })
          ]
        },
        t.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black uppercase tracking-widest mb-3", style: { color: "var(--text3)", opacity: 0.7 }, children: "Accent Color" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: accents.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setSettings({ ...settings, accentColor: a.id }),
            title: a.label,
            className: "flex flex-col items-center gap-1 transition-all",
            style: {},
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-8 h-8 rounded-xl transition-all flex items-center justify-center",
                  style: { background: a.hex, boxShadow: settings.accentColor === a.id ? `0 0 0 3px rgba(255,255,255,.5), 0 0 0 5px ${a.hex}` : void 0, transform: settings.accentColor === a.id ? "scale(1.2)" : "scale(1)" },
                  children: settings.accentColor === a.id && /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 14, className: "text-white" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 9, fontWeight: 700, color: "var(--text3)", opacity: 0.7 }, children: a.label })
            ]
          },
          a.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest block mb-2", style: { color: "var(--text3)", opacity: 0.7 }, children: "Font Size" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 glass rounded-xl p-1.5", children: sizes.map((sz) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setSettings({ ...settings, fontSize: sz.id }),
            className: `flex-1 py-2 rounded-lg font-black transition-all text-sm`,
            style: settings.fontSize === sz.id ? { background: "var(--accent)", color: "#fff" } : { opacity: 0.6 },
            children: [
              sz.label,
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: 9, display: "block", opacity: 0.7 }, children: [
                sz.px,
                "px"
              ] })
            ]
          },
          sz.id
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "glass rounded-2xl p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-black text-sm mb-4 flex items-center gap-2 opacity-70", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PanelsTopLeft, { size: 16 }),
        " Display & Layout"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest block mb-2", style: { color: "var(--text3)", opacity: 0.7 }, children: "Line Spacing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 glass rounded-xl p-1.5", children: [["compact", "Compact", 1.4], ["normal", "Normal", 1.7], ["relaxed", "Relaxed", 2], ["loose", "Loose", 2.4]].map(([id, label, lh]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setSettings((s) => ({ ...s, lineSpacing: id })),
            className: "flex-1 py-2 rounded-lg font-black transition-all text-xs",
            style: (settings.lineSpacing || "normal") === id ? { background: "var(--accent)", color: "#fff" } : { opacity: 0.6 },
            children: [
              label,
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: 8, display: "block", opacity: 0.7 }, children: [
                "×",
                lh
              ] })
            ]
          },
          id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest block mb-2", style: { color: "var(--text3)", opacity: 0.7 }, children: "Card / Panel Density" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 glass rounded-xl p-1.5", children: [["compact", "Compact"], ["comfortable", "Comfortable"], ["spacious", "Spacious"]].map(([id, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setSettings((s) => ({ ...s, cardStyle: id })),
            className: "flex-1 py-2.5 rounded-lg font-black transition-all text-xs",
            style: (settings.cardStyle || "comfortable") === id ? { background: "var(--accent)", color: "#fff" } : { opacity: 0.6 },
            children: label
          },
          id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center justify-between cursor-pointer mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black", children: "Animations & Transitions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-40 mt-0.5", children: "Smooth motion effects throughout the app" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            onClick: () => setSettings((s) => ({ ...s, animations: !s.animations })),
            className: `w-12 h-6 rounded-full transition-all cursor-pointer relative flex items-center px-1`,
            style: { background: settings.animations !== false ? "var(--accent)" : "var(--border)" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-4 h-4 bg-white rounded-full shadow transition-all",
                style: { transform: settings.animations !== false ? "translateX(24px)" : "translateX(0)" }
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center justify-between cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black", children: "Compact Sidebar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-40 mt-0.5", children: "Show icons only, hide labels" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            onClick: () => setSettings((s) => ({ ...s, compactSidebar: !s.compactSidebar })),
            className: "w-12 h-6 rounded-full transition-all cursor-pointer relative flex items-center px-1",
            style: { background: settings.compactSidebar ? "var(--accent)" : "var(--border)" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-4 h-4 bg-white rounded-full shadow transition-all",
                style: { transform: settings.compactSidebar ? "translateX(24px)" : "translateX(0)" }
              }
            )
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "glass rounded-2xl p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-black text-sm mb-4 flex items-center gap-2 opacity-70", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 16 }),
        " Generation"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center justify-between cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", children: "Strict Mode" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-50 mt-0.5", children: "Use ONLY document text, no outside knowledge" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            onClick: () => setSettings((s) => ({ ...s, strictMode: !s.strictMode })),
            className: `w-11 h-6 rounded-full transition-colors relative cursor-pointer ${settings.strictMode ? "bg-[var(--accent)]" : "bg-gray-300 dark:bg-zinc-600"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${settings.strictMode ? "translate-x-5" : "translate-x-1"}` })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "glass rounded-2xl p-5 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: MARIAM_IMG, className: "w-16 h-16 rounded-2xl object-cover mx-auto mb-3 shadow-lg", alt: "MARIAM" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-black text-sm", children: [
        "MARIAM PRO ",
        APP_VER
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-40 mt-1", children: "Universal AI Document Intelligence" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-3 mt-3 text-xs font-black uppercase tracking-widest opacity-30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "PDF · Word · Excel · Images · Code" }) })
    ] })
  ] }) });
}
function App() {
  const [loaded, setLoaded] = reactExports.useState(false);
  const [bootError, setBootError] = reactExports.useState(null);
  const [docs, setDocs] = reactExports.useState([]);
  const [openDocs, setOpenDocs] = reactExports.useState([]);
  const [activeId, setActiveId] = reactExports.useState(null);
  const [docPages, setDocPages] = reactExports.useState({});
  const [flashcards, setFlashcards] = reactExports.useState([]);
  const [exams, setExams] = reactExports.useState([]);
  const [cases, setCases] = reactExports.useState([]);
  const [notes, setNotes] = reactExports.useState([]);
  const [chatSessions, setChatSessions] = reactExports.useState([]);
  const [mindMaps, setMindMaps] = reactExports.useState([]);
  const [timelines, setTimelines] = reactExports.useState([]);
  const [settings, setSettings] = reactExports.useState(DEFAULT_SETTINGS);
  const [uploading, setUploading] = reactExports.useState(false);
  const [uploadPct, setUploadPct] = reactExports.useState(0);
  const [view, setView] = reactExports.useState("library");
  const [rpTab, setRpTab] = reactExports.useState("generate");
  const [rpOpen, setRpOpen] = reactExports.useState(false);
  const [rpW, setRpW] = reactExports.useState(420);
  const [bgTask, setBgTask] = reactExports.useState(null);
  const [installPrompt, setInstallPrompt] = reactExports.useState(null);
  const [showGlobalSearch, setShowGlobalSearch] = reactExports.useState(false);
  const [isMobile, setIsMobile] = reactExports.useState(() => window.innerWidth < 1024);
  const { toasts, addToast } = useToast();
  reactExports.useEffect(() => {
    document.documentElement.style.setProperty("--nav-h", `${NAV_H}px`);
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  useKeyboardShortcuts([
    ["ctrl+k", () => setShowGlobalSearch(true)],
    ["ctrl+/", () => setShowGlobalSearch(true)],
    ["Escape", () => setShowGlobalSearch(false)],
    ["ctrl+1", () => setView("library")],
    ["ctrl+3", () => setView("flashcards")],
    ["ctrl+4", () => setView("exams")],
    ["ctrl+5", () => setView("cases")],
    ["ctrl+6", () => setView("chat")]
  ]);
  reactExports.useEffect(() => {
    setupPWA();
    const handler = (e) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", () => {
      setInstallPrompt(null);
      addToast("App installed! 🎉", "success");
    });
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);
  reactExports.useEffect(() => {
    (async () => {
      try {
        const [d, fc, ex, ca, no, ch, st, od, dp, mm, tl] = await Promise.all([
          getState("docs"),
          getState("flashcards"),
          getState("exams"),
          getState("cases"),
          getState("notes"),
          getState("chats"),
          getState("settings"),
          getState("openDocs"),
          getState("docPages"),
          getState("mindMaps"),
          getState("timelines")
        ]);
        if (d) setDocs(d);
        const userFC = (fc || []).filter((f) => !f.isBuiltin && !f.isBuiltIn);
        const userEx = (ex || []).filter((e) => !e.isBuiltin && !e.isBuiltIn);
        const userCa = (ca || []).filter((c) => !c.isBuiltin && !c.isBuiltIn);
        setFlashcards([...BUILTIN_FLASHCARD_SETS, ...userFC]);
        setExams([...BUILTIN_EXAM_SETS, ...userEx]);
        setCases([...BUILTIN_CASE_SETS, ...userCa]);
        if (no) setNotes(no);
        if (ch) setChatSessions(ch);
        if (od) setOpenDocs(od);
        if (dp) setDocPages(dp);
        if (mm) setMindMaps(mm);
        if (tl) setTimelines(tl);
        if (st) setSettings((p) => ({ ...DEFAULT_SETTINGS, ...p, ...st }));
      } catch (err) {
        logError("boot", err);
        setFlashcards([...BUILTIN_FLASHCARD_SETS]);
        setExams([...BUILTIN_EXAM_SETS]);
        console.warn("Could not restore saved data. Starting fresh.", err.message);
        setBootError(err.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);
  reactExports.useEffect(() => {
    if (!loaded) return;
    const t = setTimeout(async () => {
      try {
        const slim = docs.map((d) => {
          const c = { ...d };
          delete c.pagesText;
          delete c.buffer;
          return c;
        });
        const userFC = flashcards.filter((f) => !f.isBuiltin);
        const userEx = exams.filter((e) => !e.isBuiltin);
        await Promise.all([
          saveState("docs", slim),
          saveState("flashcards", userFC),
          saveState("exams", userEx),
          saveState("cases", cases),
          saveState("notes", notes),
          saveState("chats", chatSessions),
          saveState("settings", settings),
          saveState("openDocs", openDocs),
          saveState("docPages", docPages),
          saveState("mindMaps", mindMaps),
          saveState("timelines", timelines)
        ]);
      } catch (err) {
        logError("persist", err);
      }
    }, 800);
    return () => clearTimeout(t);
  }, [docs, flashcards, exams, cases, notes, chatSessions, settings, openDocs, docPages, mindMaps, timelines, loaded]);
  reactExports.useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("pure-white", "light", "dark", "oled");
    let th = settings.theme;
    if (th === "system") th = window.matchMedia?.("(prefers-color-scheme:dark)").matches ? "dark" : "pure-white";
    root.classList.add(th);
    root.style.setProperty("color-scheme", th === "dark" || th === "oled" ? "dark" : "light");
    root.style.fontSize = { small: "14px", medium: "16px", large: "20px", xl: "23px", xxl: "26px" }[settings.fontSize] || "20px";
    root.style.setProperty("--line-height", { compact: "1.4", normal: "1.7", relaxed: "2.0", loose: "2.4" }[settings.lineSpacing || "normal"] || "1.7");
    root.style.setProperty("--transition-speed", settings.animations === false ? "0s" : "0.2s");
    const clrs = {
      indigo: { hex: "#6366f1", rgb: "99,102,241", soft: "#4f46e5" },
      purple: { hex: "#a855f7", rgb: "168,85,247", soft: "#9333ea" },
      blue: { hex: "#3b82f6", rgb: "59,130,246", soft: "#2563eb" },
      emerald: { hex: "#10b981", rgb: "16,185,129", soft: "#059669" },
      rose: { hex: "#f43f5e", rgb: "244,63,94", soft: "#e11d48" }
    };
    const c = clrs[settings.accentColor] || clrs.indigo;
    root.style.setProperty("--accent", c.hex);
    root.style.setProperty("--acc-rgb", c.rgb);
    root.style.setProperty("--accent-soft", c.soft);
  }, [settings.theme, settings.fontSize, settings.accentColor]);
  const handleRpDrag = reactExports.useCallback((x) => {
    setRpW(Math.max(320, Math.min(window.innerWidth - 300, window.innerWidth - x)));
  }, []);
  const startRpDrag = useDrag(handleRpDrag, [handleRpDrag]);
  const handleUpload = async (e) => {
    const files = Array.from(e.target?.files || e.dataTransfer?.files || []);
    if (!files.length) return;
    if (e.target) e.target.value = "";
    setUploading(true);
    setUploadPct(2);
    try {
      const newDocs = [], newIds = [], newPg = {};
      let lastId = null;
      for (let fi = 0; fi < files.length; fi++) {
        const file = files[fi];
        const cat = getFileCategory(file);
        try {
          const data = await extractUniversal(file, (pct) => {
            setUploadPct(Math.round(fi / files.length * 100 + pct * (80 / files.length)));
          });
          const id = `${Date.now()}-${Math.random().toString(36).substr(2, 6)}`;
          let imagePreview = null;
          if (cat === "image" && data.imageBase64) {
            imagePreview = `data:${data.imageType || "image/jpeg"};base64,${data.imageBase64.substring(0, 200)}`;
          }
          await saveFile(id, data);
          newDocs.push({ id, name: file.name, totalPages: data.totalPages, progress: 1, addedAt: (/* @__PURE__ */ new Date()).toISOString(), fileCategory: cat, fileSize: file.size, imagePreview });
          newIds.push(id);
          newPg[id] = 1;
          lastId = id;
          addToast(`"${file.name}" imported!`, "success");
        } catch (err) {
          addToast(`"${file.name}": ${err.message}`, "error");
        }
        setUploadPct(Math.round((fi + 1) / files.length * 95));
      }
      if (newDocs.length) {
        setDocs((p) => [...p, ...newDocs]);
        setOpenDocs((p) => [.../* @__PURE__ */ new Set([...p, ...newIds])]);
        setDocPages((p) => ({ ...p, ...newPg }));
        if (lastId) setTimeout(() => {
          setActiveId(lastId);
          setView("reader");
          setRpOpen(true);
        }, 60);
      }
    } catch (e2) {
      addToast(`Upload failed: ${e2.message}`, "error");
    } finally {
      setUploading(false);
      setUploadPct(0);
    }
  };
  const closeDoc = reactExports.useCallback((id) => {
    setOpenDocs((p) => p.filter((d) => d !== id));
    setActiveId((prev) => {
      if (prev !== id) return prev;
      const next = openDocs.filter((d) => d !== id)[0] || null;
      if (!next) setView("library");
      return next;
    });
  }, [openDocs]);
  const deleteDoc = async (id, ev) => {
    if (ev) ev.stopPropagation();
    try {
      await delFile(id);
    } catch {
    }
    setDocs((p) => p.filter((d) => d.id !== id));
    setFlashcards((p) => p.filter((f) => f.docId !== id));
    setExams((p) => p.filter((e) => e.docId !== id));
    setCases((p) => p.filter((c) => c.docId !== id));
    setNotes((p) => p.filter((n) => n.docId !== id));
    setMindMaps((p) => p.filter((m) => m.docId !== id));
    setTimelines((p) => p.filter((t) => t.docId !== id));
    closeDoc(id);
    addToast("Document deleted", "info");
  };
  const activeDoc = reactExports.useMemo(() => docs.find((d) => d.id === activeId) || null, [docs, activeId]);
  const setPage = reactExports.useCallback((updater) => setDocPages((p) => ({ ...p, [activeId]: typeof updater === "function" ? updater(p[activeId] || 1) : updater })), [activeId]);
  const startGen = async (taskType, docId, startPage, endPage, params) => {
    if (bgTask) {
      addToast("A generation is already running", "info");
      return;
    }
    setBgTask({ title: `AI ${taskType.toUpperCase()}`, msg: "Initializing…", done: 0, total: 1, isFinished: false });
    try {
      const fileData = await getFile(docId);
      const pagesText = fileData?.pagesText || {};
      const doc = docs.find((d) => d.id === docId);
      if (doc?.fileCategory === "image" && fileData?.imageBase64) {
        setBgTask((p) => ({ ...p, msg: "Analyzing image with AI Vision…" }));
        const prompt = `Analyze this image and ${taskType === "mindmap" ? "create a mind map JSON" : "provide detailed analysis"}.
${taskType === "mindmap" ? 'JSON: {"topic":"...","branches":[{"label":"...","subtopics":["..."]}]}' : ""}`;
        const result = await callAIWithVision(prompt, fileData.imageBase64, fileData.imageType, settings, 4e3);
        if (taskType === "mindmap") {
          try {
            setBgTask((p) => ({ ...p, isFinished: true, result: { type: "mindmap", data: parseJson(result), pages: "image" }, msg: "Done!" }));
          } catch {
            setBgTask((p) => ({ ...p, isFinished: true, result: { type: "summary", data: result, pages: "image", title: "Image Analysis" }, msg: "Done!" }));
          }
        } else {
          setBgTask((p) => ({ ...p, isFinished: true, result: { type: "summary", data: result, pages: "image", title: "Image Analysis" }, msg: "Done!" }));
        }
        addToast("Analysis complete!", "success");
        return;
      }
      let textContext = "";
      for (let i = Number(startPage); i <= Number(endPage); i++) {
        if (pagesText[i]) textContext += `
[PAGE ${i}]
${pagesText[i]}
`;
      }
      if (!textContext.trim() || textContext.length < 10) throw new Error("No text found in selected page range.");
      const count = params.count || 10;
      const diff = params.difficultyLevel || "Expert";
      const targetLang = params.targetLang || "Spanish";
      const batchSize = taskType === "cases" ? 5 : taskType === "flashcards" ? 30 : 15;
      const isBatch = ["flashcards", "exam", "cases"].includes(taskType);
      const numBatches = isBatch ? Math.ceil(count / batchSize) : 1;
      setBgTask((p) => ({ ...p, total: numBatches, msg: `Launching ${numBatches} parallel AI requests…` }));
      const MEDICINE_RULE_GEN = `

MEDICINE RULE — MANDATORY: For every medication/drug, ALWAYS write brand name first then generic in parentheses. e.g. "Lasix (furosemide)", "Tylenol (acetaminophen)". Apply to ALL items.`;
      const makePrompt = (bc) => {
        const base = `Difficulty: ${diff}. USE ONLY provided text.${MEDICINE_RULE_GEN}
DOCUMENT:
${textContext}`;
        if (taskType === "flashcards") return `${base}
YOU MUST generate EXACTLY ${bc} expert flashcards — count carefully, the "items" array must have EXACTLY ${bc} entries.
JSON: {"items":[{"q":"...","a":"...","evidence":"...","sourcePage":1}]}`;
        if (taskType === "exam") return `${base}
YOU MUST generate EXACTLY ${bc} exam questions — count carefully, the "items" array must have EXACTLY ${bc} entries.
JSON: {"items":[{"q":"...","options":["A","B","C","D"],"correct":0,"explanation":"...","evidence":"...","sourcePage":1}]}`;
        if (taskType === "cases") return `${base}
Generate exactly ${bc} richly detailed clinical cases from ONLY the document content. EACH case MUST have:
- vignette: 6-10 sentences with demographics, chief complaint, HPI, PMH, meds, vitals, physical exam
- labPanels: MINIMUM 3 panels (CBC, BMP, LFTs, others) with 5+ rows each (12-20 total lab values), flag abnormals H/L
- examQuestion with 5 answer options (A-E), long stem, thorough explanation
The "cases" array MUST contain EXACTLY ${bc} entries.
JSON ONLY: {"cases":[{"title":"descriptive title","vignette":"6-10 sentence detailed vignette","diagnosis":"specific ICD diagnosis","labPanels":[{"panelName":"COMPLETE BLOOD COUNT","rows":[{"test":"WBC","result":"15.2","flag":"H","range":"4.5-11.0","units":"K/uL"},{"test":"Hemoglobin","result":"11.5","flag":"L","range":"12.0-16.0","units":"g/dL"},{"test":"Hematocrit","result":"34.5","flag":"L","range":"36-46","units":"%"},{"test":"Platelets","result":"250","flag":"","range":"150-400","units":"K/uL"},{"test":"MCV","result":"80","flag":"","range":"80-100","units":"fL"},{"test":"Neutrophils","result":"85","flag":"H","range":"50-70","units":"%"}]},{"panelName":"BASIC METABOLIC PANEL","rows":[{"test":"Na","result":"138","flag":"","range":"135-145","units":"mEq/L"},{"test":"K","result":"3.2","flag":"L","range":"3.5-5.0","units":"mEq/L"},{"test":"Cl","result":"100","flag":"","range":"98-107","units":"mEq/L"},{"test":"CO2","result":"24","flag":"","range":"22-28","units":"mEq/L"},{"test":"BUN","result":"28","flag":"H","range":"7-20","units":"mg/dL"},{"test":"Creatinine","result":"1.5","flag":"H","range":"0.6-1.2","units":"mg/dL"}]},{"panelName":"LIVER FUNCTION TESTS","rows":[{"test":"AST","result":"150","flag":"H","range":"10-40","units":"U/L"},{"test":"ALT","result":"175","flag":"H","range":"7-56","units":"U/L"},{"test":"ALP","result":"90","flag":"","range":"44-147","units":"U/L"},{"test":"Total Bilirubin","result":"1.2","flag":"","range":"0.1-1.2","units":"mg/dL"},{"test":"Albumin","result":"3.0","flag":"L","range":"3.5-5.0","units":"g/dL"}]}],"examQuestion":{"q":"Detailed 2-3 sentence question stem about the case","options":["A) specific option","B) specific option","C) specific option","D) specific option","E) specific option"],"correct":0,"explanation":"Thorough 4-5 sentence explanation","evidence":"document quote","sourcePage":1}}]}`;
        if (taskType === "mindmap") return `${base}
Create a comprehensive mind map.
JSON: {"topic":"Central Topic","branches":[{"label":"Branch Name","subtopics":["sub1","sub2","sub3"]}]}`;
        if (taskType === "concepts") return `${base}
Extract key concepts with definitions.
JSON: {"items":[{"concept":"...","definition":"...","example":"...","sourcePage":1}]}`;
        if (taskType === "timeline") return `${base}
Extract chronological events.
JSON: {"events":[{"date":"...","event":"...","significance":"...","page":1}]}`;
        if (taskType === "translate") return `${base}
Translate the content to ${targetLang}. Preserve structure. Provide the complete translation.`;
        if (taskType === "summary") return `${base}
Provide a comprehensive summary with key points, main themes, and critical details.`;
        if (taskType === "smart-summary") return `${base}

Provide 3-tier smart summary:
## EXECUTIVE (2-3 sentences)
## STANDARD (1 paragraph)
## DETAILED (bullet points with key facts)`;
        if (taskType === "clinical") return `${base}
Provide a structured clinical summary with: Chief Complaint, History, Physical Findings, Assessment, Plan.`;
        if (taskType === "differential") return `${base}
Provide a ranked differential diagnosis with supporting evidence and key distinguishing features.`;
        if (taskType === "treatment") return `${base}
Provide a comprehensive treatment plan with first-line, second-line options, monitoring, and follow-up.`;
        if (taskType === "labs") return `${base}
Interpret all laboratory values mentioned. Provide clinical significance and action items.`;
        if (taskType === "mnemonics") return `${base}
Create memorable mnemonics and memory aids for the key concepts in this content.`;
        if (taskType === "eli5") return `${base}
Explain this content simply, as if teaching a 10-year-old. Use analogies and simple language.`;
        if (taskType === "code-explain") return `${base}
Explain this code/technical content clearly. Cover: purpose, how it works, key concepts, practical applications.`;
        return `${base}
Provide a detailed analysis of this content.`;
      };
      const isJson = ["flashcards", "exam", "cases", "mindmap", "concepts", "timeline"].includes(taskType);
      const tasks = isBatch ? Array.from({ length: numBatches }, (_, i) => {
        const bc = i === numBatches - 1 ? count % batchSize === 0 ? batchSize : count % batchSize : batchSize;
        return () => callAI(makePrompt(bc), isJson, settings.strictMode, settings, 8e3);
      }) : [() => callAI(makePrompt(count), isJson, settings.strictMode, settings, 8e3)];
      let all = [];
      const exRes = await runParallel(tasks, 50, (done, total) => {
        setBgTask((p) => ({ ...p, done, msg: `${done}/${total} batches complete…` }));
      });
      if (isJson) {
        for (const r of exRes) {
          if (r.status === "fulfilled") {
            try {
              const p = parseJson(r.value);
              if (taskType === "mindmap") {
                all = [p];
                break;
              }
              if (taskType === "timeline") {
                all = [p];
                break;
              }
              all = [...all, ...p.cases || p.items || p.questions || p.events || []];
            } catch (e) {
              console.warn("Parse:", e.message);
            }
          }
        }
        if (!all.length) throw new Error("AI returned no parseable data.");
        const finalData = taskType === "mindmap" ? all[0] : taskType === "timeline" ? all[0] : all.slice(0, count);
        setBgTask((p) => ({ ...p, isFinished: true, result: { type: taskType, data: finalData, pages: `${startPage}-${endPage}` }, msg: `Done! ${Array.isArray(finalData) ? finalData.length : 1} items.` }));
      } else {
        const raw = exRes[0]?.value || "No content generated.";
        const titles = { summary: "Summary", "smart-summary": "Smart Summary", clinical: "Clinical Summary", differential: "Differential Dx", treatment: "Treatment Plan", labs: "Lab Interpretation", eli5: "Simplified Explanation", mnemonics: "Mnemonics", translate: `${targetLang} Translation`, "code-explain": "Code Explanation" };
        setBgTask((p) => ({ ...p, isFinished: true, result: { type: taskType, data: raw, pages: `${startPage}-${endPage}`, title: titles[taskType] || taskType }, msg: "Complete!" }));
      }
      addToast("Generation complete! ⚡", "success");
    } catch (e) {
      console.error(e);
      setBgTask(null);
      addToast(e.message, "error");
    }
  };
  const onInstall = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === "accepted") setInstallPrompt(null);
  };
  if (!loaded) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-[100dvh] w-screen flex flex-col items-center justify-center bg-white gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=JetBrains+Mono:wght@400;500;700&display=swap');

        /* ══ FONTS ══ */
        *, *::before, *::after { box-sizing: border-box; }
        * { -webkit-tap-highlight-color: transparent; font-family: 'DM Sans', system-ui, sans-serif; }
        h1,h2,h3,h4,.brand,.font-black { font-family: 'Plus Jakarta Sans', system-ui, sans-serif !important; }
        .mono, code, pre { font-family: 'JetBrains Mono', monospace !important; }
        body { margin:0; padding:0; overflow:hidden; }
        input, textarea, select { font-size: 16px !important; }

        /* ══ LIGHT THEMES ══ */
        .pure-white {
          --bg:#f6f8ff; --bg2:#edf1ff; --surface:#ffffff; --surface2:#f0f4ff; --surface3:#e5eaff;
          --text:#060d28; --text2:#3e4f7a; --text3:#8494bc;
          --border:rgba(50,80,220,.07); --border2:rgba(50,80,220,.14);
          --accent:#4f46e5; --accent2:#7c3aed; --acc-rgb:79,70,229;
          --nav-bg:rgba(246,248,255,.88); --sidebar-bg:linear-gradient(180deg,#eef2ff,#e5eaff);
          --card:#fff; --glow:rgba(79,70,229,.12);
        }
        .light {
          --bg:#eef2ff; --bg2:#e3eaff; --surface:#ffffff; --surface2:#eef2ff; --surface3:#e0e8ff;
          --text:#040e2a; --text2:#2e3f6a; --text3:#6a7caa;
          --border:rgba(40,70,220,.09); --border2:rgba(40,70,220,.17);
          --accent:#4338ca; --accent2:#6d28d9; --acc-rgb:67,56,202;
          --nav-bg:rgba(238,242,255,.92); --sidebar-bg:linear-gradient(180deg,#e3eaff,#d8e2ff);
          --card:#fff; --glow:rgba(67,56,202,.12);
        }
        .warm {
          --bg:#fffcf5; --bg2:#fff8ea; --surface:#ffffff; --surface2:#fffbf0; --surface3:#fff4d9;
          --text:#1c0f04; --text2:#5c3d1a; --text3:#9e7540;
          --border:rgba(180,110,20,.08); --border2:rgba(180,110,20,.15);
          --accent:#d97706; --accent2:#ea580c; --acc-rgb:217,119,6;
          --nav-bg:rgba(255,252,245,.92); --sidebar-bg:linear-gradient(180deg,#fff8ea,#ffefd4);
          --card:#fff; --glow:rgba(217,119,6,.12);
        }
        .rose {
          --bg:#fff5f7; --bg2:#ffe8ee; --surface:#ffffff; --surface2:#fff0f4; --surface3:#ffdde5;
          --text:#1c040c; --text2:#5c1525; --text3:#a04560;
          --border:rgba(220,30,80,.08); --border2:rgba(220,30,80,.15);
          --accent:#e11d48; --accent2:#be185d; --acc-rgb:225,29,72;
          --nav-bg:rgba(255,245,247,.92); --sidebar-bg:linear-gradient(180deg,#ffe8ee,#ffdde5);
          --card:#fff; --glow:rgba(225,29,72,.12);
        }
        .forest {
          --bg:#f2fbf6; --bg2:#e2f5ea; --surface:#ffffff; --surface2:#eef9f3; --surface3:#ddf3e6;
          --text:#041a0c; --text2:#1a4a2a; --text3:#4a8060;
          --border:rgba(20,130,55,.08); --border2:rgba(20,130,55,.15);
          --accent:#059669; --accent2:#0d9488; --acc-rgb:5,150,105;
          --nav-bg:rgba(242,251,246,.92); --sidebar-bg:linear-gradient(180deg,#e2f5ea,#cfeedd);
          --card:#fff; --glow:rgba(5,150,105,.12);
        }
        /* ══ DARK THEMES ══ */
        .dark {
          --bg:#050a14; --bg2:#080e1e; --surface:#0d1628; --surface2:#121e34; --surface3:#172440;
          --text:#cad8f8; --text2:#546082; --text3:#324060;
          --border:rgba(100,140,255,.08); --border2:rgba(100,140,255,.15);
          --accent:#818cf8; --accent2:#a78bfa; --acc-rgb:129,140,248;
          --nav-bg:rgba(5,10,20,.94); --sidebar-bg:linear-gradient(180deg,#06091a,#050810);
          --card:#0d1628; --glow:rgba(129,140,248,.14);
        }
        .midnight {
          --bg:#09091a; --bg2:#0e0e24; --surface:#131326; --surface2:#191934; --surface3:#202046;
          --text:#dddeff; --text2:#5a5a98; --text3:#3a3a70;
          --border:rgba(130,130,255,.08); --border2:rgba(130,130,255,.15);
          --accent:#6366f1; --accent2:#8b5cf6; --acc-rgb:99,102,241;
          --nav-bg:rgba(9,9,26,.96); --sidebar-bg:linear-gradient(180deg,#0e0e24,#09091a);
          --card:#131326; --glow:rgba(99,102,241,.14);
        }
        .slate {
          --bg:#0d1117; --bg2:#131b24; --surface:#1a2330; --surface2:#202c3a; --surface3:#283444;
          --text:#d4e4f8; --text2:#4e6080; --text3:#304050;
          --border:rgba(80,130,190,.08); --border2:rgba(80,130,190,.15);
          --accent:#38bdf8; --accent2:#818cf8; --acc-rgb:56,189,248;
          --nav-bg:rgba(13,17,23,.96); --sidebar-bg:linear-gradient(180deg,#131b24,#0d1117);
          --card:#1a2330; --glow:rgba(56,189,248,.14);
        }
        .oled {
          --bg:#000000; --bg2:#040810; --surface:#070c18; --surface2:#0b1020; --surface3:#0f1528;
          --text:#b8ccf0; --text2:#384870; --text3:#243050;
          --border:rgba(70,110,220,.07); --border2:rgba(70,110,220,.12);
          --accent:#818cf8; --accent2:#c084fc; --acc-rgb:129,140,248;
          --nav-bg:rgba(0,0,0,.97); --sidebar-bg:linear-gradient(180deg,#040810,#000000);
          --card:#070c18; --glow:rgba(129,140,248,.12);
        }
        /* ══ ACCENT OVERRIDES ══ */
        .accent-indigo  {--accent:#4f46e5;--accent2:#7c3aed;--acc-rgb:79,70,229;}
        .accent-purple  {--accent:#9333ea;--accent2:#7c3aed;--acc-rgb:147,51,234;}
        .accent-blue    {--accent:#2563eb;--accent2:#0891b2;--acc-rgb:37,99,235;}
        .accent-emerald {--accent:#059669;--accent2:#0d9488;--acc-rgb:5,150,105;}
        .accent-rose    {--accent:#e11d48;--accent2:#be185d;--acc-rgb:225,29,72;}
        .accent-amber   {--accent:#d97706;--accent2:#ea580c;--acc-rgb:217,119,6;}
        .accent-cyan    {--accent:#0891b2;--accent2:#0e7490;--acc-rgb:8,145,178;}
        .accent-teal    {--accent:#0d9488;--accent2:#059669;--acc-rgb:13,148,136;}

        /* ══ SCROLLBAR ══ */
        .custom-scrollbar { -webkit-overflow-scrolling: touch; }
        .custom-scrollbar::-webkit-scrollbar { width: 2px; height: 2px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(var(--acc-rgb,99,102,241),.2); border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(var(--acc-rgb,99,102,241),.4); }

        /* ══ SURFACES ══ */
        .glass { background: var(--surface,var(--card)); border: 1px solid var(--border); }
        .glass-2 { background: var(--surface2,var(--card)); border: 1px solid var(--border2,var(--border)); }
        .card-lined {
          background: var(--surface,var(--card));
          border: 1px solid var(--border2,var(--border));
          border-top: 1.5px solid rgba(var(--acc-rgb,99,102,241),.25);
          box-shadow: 0 4px 20px rgba(0,0,0,.1), 0 1px 4px rgba(0,0,0,.06);
        }
        .card-glow {
          background: linear-gradient(135deg,rgba(var(--acc-rgb,99,102,241),.08),rgba(var(--acc-rgb,99,102,241),.02));
          border: 1px solid rgba(var(--acc-rgb,99,102,241),.22);
          box-shadow: 0 0 28px rgba(var(--acc-rgb,99,102,241),.08),inset 0 1px 0 rgba(var(--acc-rgb,99,102,241),.1);
        }

        /* ══ BUTTONS ══ */
        .btn-accent {
          background: linear-gradient(135deg,var(--accent),var(--accent2,var(--accent)));
          color:#fff; border:none; cursor:pointer; font-weight:800; letter-spacing:.015em;
          transition: all .18s cubic-bezier(.34,1.4,.64,1);
          box-shadow: 0 4px 18px rgba(var(--acc-rgb,99,102,241),.32),inset 0 1px 0 rgba(255,255,255,.14);
          position:relative; overflow:hidden;
        }
        @media (min-width: 1024px) { .btn-accent::after { content:''; position:absolute; inset:0; background:linear-gradient(180deg,rgba(255,255,255,.1),transparent); } }
        .btn-accent:hover { transform:translateY(-1px); box-shadow:0 8px 28px rgba(var(--acc-rgb,99,102,241),.44); }
        .btn-accent:active { transform:scale(.97); }

        /* ══ GRADIENT TEXT ══ */
        .gradient-text {
          background: linear-gradient(135deg,var(--accent),var(--accent2,var(--accent)));
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }

        /* ══ CARD HOVER ══ */
        .card-hover { transition:transform .2s ease,box-shadow .2s ease,border-color .2s ease; }
        .card-hover:hover {
          transform:translateY(-2px);
          box-shadow:0 12px 36px rgba(var(--acc-rgb,99,102,241),.1),0 2px 8px rgba(0,0,0,.14);
          border-color:rgba(var(--acc-rgb,99,102,241),.3) !important;
        }

        /* ══ ANIMATIONS ══ */
        @keyframes slide-in  { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }
        @keyframes slide-up  { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:none} }
        @keyframes scale-in  { from{opacity:0;transform:scale(.93)} to{opacity:1;transform:scale(1)} }
        @keyframes fade-in   { from{opacity:0} to{opacity:1} }
        @keyframes spin      { to{transform:rotate(360deg)} }
        @keyframes float     { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        @keyframes glow-ring { 0%,100%{box-shadow:0 0 0 0 rgba(var(--acc-rgb,99,102,241),.35)} 50%{box-shadow:0 0 0 7px rgba(var(--acc-rgb,99,102,241),0)} }
        @keyframes shimmer   { 0%{background-position:-400% 0} 100%{background-position:400% 0} }
        @keyframes ticker    { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        .animate-slide-in { animation:slide-in .25s cubic-bezier(.34,1.2,.64,1) both; }
        .animate-slide-up { animation:slide-up .32s cubic-bezier(.34,1.2,.64,1) both; }
        .animate-scale-in { animation:scale-in .24s cubic-bezier(.34,1.3,.64,1) both; }
        .animate-fade-in  { animation:fade-in .2s ease both; }
        .animate-spin     { animation:spin 1s linear infinite; }
        .animate-pulse    { animation:glow-ring 2.5s ease infinite; }
        .animate-bounce   { animation:float 1s ease-in-out infinite; }
        .animate-float    { animation:float 3s ease-in-out infinite; }
        .stagger-1{animation-delay:.06s} .stagger-2{animation-delay:.12s} .stagger-3{animation-delay:.18s}
        .stagger-4{animation-delay:.24s} .stagger-5{animation-delay:.30s} .stagger-6{animation-delay:.36s}

        /* ══ NAVIGATION ══ */
        .sidebar-nav { background:var(--sidebar-bg,var(--surface2)); border-right:1px solid var(--border); }
        .sidebar-nav button { transition:all .18s ease; }
        .nav-item-active { position:relative; }
        .nav-item-active::before {
          content:''; position:absolute; left:0; top:50%; transform:translateY(-50%);
          width:3px; height:30px; border-radius:0 6px 6px 0;
          background:linear-gradient(180deg,var(--accent),var(--accent2,var(--accent)));
        }
        /* ══ ROOT RESET — zero margin/padding, exact screen fit ══ */
        *, *::before, *::after { box-sizing: border-box; }
        html, body {
          margin: 0; padding: 0;
          width: 100%; height: 100dvh;
          overflow: hidden;
          overscroll-behavior: none;
          background: transparent;
        }

        .main-header {
          background:var(--nav-bg);
          backdrop-filter:saturate(200%) blur(20px); -webkit-backdrop-filter:saturate(200%) blur(20px);
          border-bottom:1px solid var(--border);
        }

        /* ══ PILL NAV / SIDEBAR — controlled by React isMobile state, not CSS ══ */
        /* Glass pill nav styles (applied via inline styles in JSX) */

        /* ══ BG MESH ══ */
        .bg-mesh {
          background:
            radial-gradient(ellipse 900px 700px at 0% -5%,rgba(var(--acc-rgb,99,102,241),.06) 0%,transparent 55%),
            radial-gradient(ellipse 700px 900px at 105% 105%,rgba(167,139,250,.04) 0%,transparent 55%),
            var(--bg);
        }

        /* ══ INPUTS ══ */
        .glass-input {
          background:var(--surface2,var(--card)); border:1px solid var(--border2,var(--border));
          color:var(--text); transition:border-color .15s,box-shadow .15s;
        }
        .glass-input:focus {
          outline:none; border-color:rgba(var(--acc-rgb,99,102,241),.5);
          box-shadow:0 0 0 3px rgba(var(--acc-rgb,99,102,241),.1);
        }

        /* ══ SHIMMER SKELETON ══ */
        .shimmer {
          background: linear-gradient(90deg,var(--surface2) 25%,var(--surface3,var(--surface)) 50%,var(--surface2) 75%);
          background-size:400% 100%; animation:shimmer 1.6s ease infinite;
        }

        /* ══ MISC ══ */
        /* Mobile: pad bottom so content clears the pill nav (~62px) + safe area */
        .scroll-content { padding-bottom:calc(96px + env(safe-area-inset-bottom)); -webkit-overflow-scrolling:touch; }
        @media(min-width:1024px){ .scroll-content { padding-bottom:32px; } }
        .prose-custom h2,.prose-custom h3 { font-weight:800; margin:14px 0 5px; }
        .prose-custom li { margin:3px 0; }
        .prose-custom strong { font-weight:800; }
        canvas { display:block; max-width:100%; height:auto !important; }
        textarea { min-height:40px; }
        input[type=range] { accent-color:var(--accent); }
        html { scroll-behavior:smooth; }
        @media(max-width:640px){ .hide-sm{display:none!important;} }
        @media(min-width:1024px){ .lg-only{display:flex!important;} }

        /* ══ DRAG HANDLE ══ */
        .drag-h { cursor:col-resize; width:8px; flex-shrink:0; display:flex; align-items:center; justify-content:center; background:transparent; transition:background .15s; }
        .drag-h:hover { background:rgba(var(--acc-rgb,99,102,241),.12); }
        .drag-h-row { cursor:row-resize; height:8px; flex-shrink:0; display:flex; align-items:center; justify-content:center; background:transparent; transition:background .15s; }
        .drag-h-row:hover { background:rgba(var(--acc-rgb,99,102,241),.12); }

        /* ══ ANSWER OPTION ══ */
        .answer-opt { transition:all .13s ease; cursor:pointer; border:1.5px solid var(--border2,var(--border)); background:var(--surface,var(--card)); border-radius:14px; }
        .answer-opt:not(:disabled):hover { border-color:rgba(var(--acc-rgb,99,102,241),.4); background:rgba(var(--acc-rgb,99,102,241),.05); transform:translateX(3px); }
        .answer-opt.selected  { border-color:var(--accent); background:rgba(var(--acc-rgb,99,102,241),.1); }
        .answer-opt.correct   { border-color:#10b981; background:rgba(16,185,129,.1); }
        .answer-opt.wrong     { border-color:#f43f5e; background:rgba(244,63,94,.08); }

        /* ══ BADGE ══ */
        .badge { display:inline-flex; align-items:center; gap:4px; padding:2px 9px; border-radius:999px; font-size:11px; font-weight:700; background:rgba(var(--acc-rgb,99,102,241),.1); color:var(--accent); border:1px solid rgba(var(--acc-rgb,99,102,241),.2); }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: MARIAM_IMG, className: "w-16 h-16 rounded-2xl object-cover shadow-2xl", alt: "MARIAM" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1 -right-1 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader2, { className: "animate-spin text-white", size: 14 }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-black text-indigo-500", children: "MARIAM PRO" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-black uppercase tracking-[0.3em] opacity-30 mt-1", children: [
        APP_VER,
        " · Loading"
      ] })
    ] })
  ] });
  const showReader = view === "reader" && !!activeId && !!activeDoc;
  const NAV_ITEMS2 = [
    { icon: FolderOpen, label: "Library", v: "library" },
    { icon: BookMarked, label: "Reader", v: "reader", dis: !activeId },
    { icon: Layers, label: "Cards", v: "flashcards" },
    { icon: Activity, label: "Cases", v: "cases" },
    { icon: CheckSquare, label: "Exams", v: "exams" },
    { icon: MessageSquare, label: "Chat", v: "chat" },
    { icon: Settings, label: "Settings", v: "settings" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `w-screen flex flex-col overflow-hidden text-[var(--text)] bg-mesh ${settings.theme || "pure-white"} accent-${settings.accentColor || "indigo"}`,
      style: {
        height: "100%",
        maxHeight: "100%",
        boxSizing: "border-box"
        /* safe-area-inset-top is handled by the header below */
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        /* ── ROOT RESET ── */
        /* Handled natively and at EOF of this block to enforce position: absolute */
        /* ── LIGHT THEMES ── */
        .pure-white{--bg:#f8fafc;--bg-gradient:radial-gradient(circle at 15% 50%,#dcfce7,transparent 45%),radial-gradient(circle at 85% 30%,#e0e7ff,transparent 45%),radial-gradient(circle at 50% 80%,#fef08a,transparent 45%),#f8fafc;--bg2:#ecf0ff;--surface:rgba(255,255,255,0.6);--surface2:rgba(255,255,255,0.5);--text:#1e293b;--text2:#475569;--text3:#64748b;--border:rgba(255,255,255,0.6);--border2:rgba(60,80,220,.13);--accent:#5046e5;--accent2:#7c3aed;--accent3:#0891b2;--acc-rgb:80,70,229;--nav-bg:rgba(255,255,255,0.4);--sidebar-bg:linear-gradient(180deg,rgba(255,255,255,.5) 0%,rgba(238,242,255,.6) 100%);--card:rgba(255,255,255,0.5);--card-border:rgba(255,255,255,0.6);}
        .light{--bg:#f8fafc;--bg-gradient:radial-gradient(circle at 15% 50%,#dcfce7,transparent 45%),radial-gradient(circle at 85% 30%,#e0e7ff,transparent 45%),#f8fafc;--bg2:#e4eaff;--surface:rgba(255,255,255,0.6);--surface2:rgba(238,242,255,0.6);--text:#1e293b;--text2:#334155;--text3:#64748b;--border:rgba(255,255,255,0.6);--border2:rgba(40,70,220,.16);--accent:#4338ca;--accent2:#6d28d9;--accent3:#0284c7;--acc-rgb:67,56,202;--nav-bg:rgba(255,255,255,0.4);--sidebar-bg:linear-gradient(180deg,rgba(255,255,255,.45) 0%,rgba(232,240,255,.55) 100%);--card:rgba(255,255,255,0.5);--card-border:rgba(255,255,255,0.6);}
        .warm{--bg:#fffbf5;--bg-gradient:radial-gradient(circle at 15% 50%,#fffbeb,transparent 45%),radial-gradient(circle at 85% 30%,#fef3c7,transparent 45%),#fffbf5;--bg2:#fff5e8;--surface:rgba(255,255,255,0.6);--surface2:rgba(255,248,240,0.7);--text:#1c1917;--text2:#57534e;--text3:#78716c;--border:rgba(255,251,235,0.7);--border2:rgba(180,110,20,.15);--accent:#ea580c;--accent2:#d97706;--accent3:#0891b2;--acc-rgb:234,88,12;--nav-bg:rgba(255,251,245,0.5);--sidebar-bg:linear-gradient(180deg,rgba(255,248,234,.6) 0%,rgba(255,243,218,.5) 100%);--card:rgba(255,255,255,0.55);--card-border:rgba(255,251,235,0.7);}
        .rose{--bg:#fff5f7;--bg-gradient:radial-gradient(circle at 15% 50%,#ffe4e6,transparent 45%),radial-gradient(circle at 85% 30%,#fce7f3,transparent 45%),#fff5f7;--bg2:#ffe8ed;--surface:rgba(255,255,255,0.55);--surface2:rgba(255,240,246,0.6);--text:#1c1917;--text2:#4c0519;--text3:#9d174d;--border:rgba(255,255,255,0.55);--border2:rgba(220,30,80,.15);--accent:#e11d48;--accent2:#be185d;--accent3:#0891b2;--acc-rgb:225,29,72;--nav-bg:rgba(255,245,247,0.5);--sidebar-bg:linear-gradient(180deg,rgba(255,228,230,.5) 0%,rgba(254,226,226,.5) 100%);--card:rgba(255,255,255,0.5);--card-border:rgba(255,228,230,0.6);}
        .forest{--bg:#f0fdf4;--bg-gradient:radial-gradient(circle at 15% 50%,#dcfce7,transparent 45%),radial-gradient(circle at 85% 30%,#bbf7d0,transparent 45%),#f0fdf4;--bg2:#e0f5ea;--surface:rgba(255,255,255,0.55);--surface2:rgba(236,253,245,0.6);--text:#052e16;--text2:#166534;--text3:#15803d;--border:rgba(220,252,231,0.6);--border2:rgba(20,130,55,.15);--accent:#059669;--accent2:#0d9488;--accent3:#7c3aed;--acc-rgb:5,150,105;--nav-bg:rgba(240,253,244,0.5);--sidebar-bg:linear-gradient(180deg,rgba(220,252,231,.5) 0%,rgba(187,247,208,.4) 100%);--card:rgba(255,255,255,0.5);--card-border:rgba(187,247,208,0.5);}
        /* ── DARK THEMES ── */
        .dark{--bg:#020617;--bg-gradient:radial-gradient(circle at 15% 20%,#1e1b4b,transparent 40%),radial-gradient(circle at 85% 60%,#0f172a,transparent 40%),radial-gradient(circle at 50% 90%,#312e81,transparent 40%),#020617;--bg2:#0f172a;--surface:rgba(15,23,42,0.5);--surface2:rgba(15,23,42,0.4);--text:#f8fafc;--text2:#94a3b8;--text3:#64748b;--border:rgba(255,255,255,0.1);--border2:rgba(100,130,255,.14);--accent:#818cf8;--accent2:#a78bfa;--accent3:#22d3ee;--acc-rgb:129,140,248;--nav-bg:rgba(15,23,42,0.5);--sidebar-bg:linear-gradient(180deg,rgba(15,23,42,.6) 0%,rgba(2,6,23,.9) 100%);--card:rgba(15,23,42,0.5);--card-border:rgba(255,255,255,0.1);}
        .oled{--bg:#000000;--bg-gradient:radial-gradient(circle at 15% 20%,#0f172a,transparent 45%),radial-gradient(circle at 85% 60%,#0a0a14,transparent 45%),#000;--bg2:#030610;--surface:rgba(7,12,24,0.7);--surface2:rgba(11,16,32,0.6);--text:#f8fafc;--text2:#94a3b8;--text3:#64748b;--border:rgba(255,255,255,0.08);--border2:rgba(80,120,255,.12);--accent:#818cf8;--accent2:#c084fc;--accent3:#22d3ee;--acc-rgb:129,140,248;--nav-bg:rgba(0,0,0,0.7);--sidebar-bg:linear-gradient(180deg,rgba(2,6,16,.95) 0%,#000 100%);--card:rgba(7,12,24,0.8);--card-border:rgba(255,255,255,0.08);}
        .midnight{--bg:#020617;--bg-gradient:radial-gradient(circle at 15% 20%,#1e1b4b,transparent 40%),radial-gradient(circle at 85% 60%,#312e81,transparent 40%),#020617;--bg2:#0e0e24;--surface:rgba(18,18,42,0.5);--surface2:rgba(24,24,58,0.45);--text:#f8fafc;--text2:#94a3b8;--text3:#64748b;--border:rgba(255,255,255,0.1);--border2:rgba(140,140,255,.14);--accent:#6366f1;--accent2:#8b5cf6;--accent3:#22d3ee;--acc-rgb:99,102,241;--nav-bg:rgba(18,18,42,0.5);--sidebar-bg:linear-gradient(180deg,rgba(14,14,36,.7) 0%,rgba(10,10,23,.95) 100%);--card:rgba(18,18,42,0.5);--card-border:rgba(255,255,255,0.1);}
        .slate{--bg:#0f172a;--bg-gradient:radial-gradient(circle at 15% 20%,#1e293b,transparent 40%),radial-gradient(circle at 85% 60%,#0f172a,transparent 40%),#0f172a;--bg2:#161820;--surface:rgba(30,33,48,0.55);--surface2:rgba(37,40,64,0.5);--text:#f1f5f9;--text2:#94a3b8;--text3:#64748b;--border:rgba(255,255,255,0.08);--border2:rgba(100,130,180,.14);--accent:#38bdf8;--accent2:#818cf8;--accent3:#34d399;--acc-rgb:56,189,248;--nav-bg:rgba(15,23,42,0.55);--sidebar-bg:linear-gradient(180deg,rgba(22,24,32,.7) 0%,rgba(15,23,42,.95) 100%);--card:rgba(30,33,48,0.55);--card-border:rgba(255,255,255,0.1);}
        /* ── ACCENT OVERRIDES (when user picks accent color) ── */
        .accent-indigo{--accent:#5046e5;--accent2:#7c3aed;--acc-rgb:80,70,229;}
        .accent-purple{--accent:#9333ea;--accent2:#7c3aed;--acc-rgb:147,51,234;}
        .accent-blue{--accent:#2563eb;--accent2:#0891b2;--acc-rgb:37,99,235;}
        .accent-emerald{--accent:#059669;--accent2:#0d9488;--acc-rgb:5,150,105;}
        .accent-rose{--accent:#e11d48;--accent2:#be185d;--acc-rgb:225,29,72;}
        .accent-amber{--accent:#d97706;--accent2:#ea580c;--acc-rgb:217,119,6;}
        .accent-cyan{--accent:#0891b2;--accent2:#0e7490;--acc-rgb:8,145,178;}
        .accent-teal{--accent:#0d9488;--accent2:#059669;--acc-rgb:13,148,136;}
        *{box-sizing:border-box;-webkit-tap-highlight-color:transparent;}
        /* ── ROOT RESET ── */
        html, body, #root {
          margin: 0; padding: 0;
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          overflow: hidden;
          overscroll-behavior: none;
          background-color: var(--bg) !important; /* Fixes the white flash at the bottom */
        }
        #root { width: 100%; height: 100%; }
        input,textarea,select{font-size:16px!important;}
        .custom-scrollbar{-webkit-overflow-scrolling:touch;}
        .custom-scrollbar::-webkit-scrollbar{width:2px;height:2px;}
        .custom-scrollbar::-webkit-scrollbar-track{background:transparent;}
        .custom-scrollbar::-webkit-scrollbar-thumb{background:rgba(var(--acc-rgb,99,102,241),.22);border-radius:4px;}
        .glass{background:var(--surface,var(--card));backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid var(--card-border,var(--border));border-radius:20px;box-shadow:0 8px 32px rgba(0,0,0,.05);}
        .glass-2{background:var(--surface2,var(--card));backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid var(--card-border,var(--border2,var(--border)));border-radius:20px;}
        .card-lined{background:var(--surface,var(--card));backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid var(--card-border,var(--border2,var(--border)));border-top:1.5px solid rgba(var(--acc-rgb,99,102,241),.25);border-radius:20px;box-shadow:0 8px 32px rgba(0,0,0,.08);}
        .card-glow{background:linear-gradient(145deg,rgba(var(--acc-rgb,99,102,241),.08),rgba(var(--acc-rgb,99,102,241),.02));border:1px solid rgba(var(--acc-rgb,99,102,241),.22);box-shadow:0 0 28px rgba(var(--acc-rgb,99,102,241),.07);}
        .btn-accent{background:linear-gradient(135deg,var(--accent),var(--accent2,var(--accent)));color:#fff;border:none;cursor:pointer;font-weight:800;letter-spacing:.01em;transition:all .18s cubic-bezier(.34,1.4,.64,1);box-shadow:0 4px 18px rgba(var(--acc-rgb,99,102,241),.3),inset 0 1px 0 rgba(255,255,255,.13);position:relative;overflow:hidden;}
        @media (min-width: 1024px) { .btn-accent::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,.09),transparent);} }
        .btn-accent:hover{transform:translateY(-1px);box-shadow:0 8px 28px rgba(var(--acc-rgb,99,102,241),.42);}
        .btn-accent:active{transform:scale(.97);}
        .gradient-text{background:linear-gradient(135deg,var(--accent),var(--accent2,var(--accent)));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
        .card-hover{transition:transform .2s ease,box-shadow .2s ease,border-color .2s ease;}
        .card-hover:hover{transform:translateY(-2px);box-shadow:0 14px 36px rgba(var(--acc-rgb,99,102,241),.1),0 2px 8px rgba(0,0,0,.15);border-color:rgba(var(--acc-rgb,99,102,241),.28)!important;}
        @keyframes slide-in{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
        @keyframes slide-up{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
        @keyframes scale-in{from{opacity:0;transform:scale(.94)}to{opacity:1;transform:scale(1)}}
        @keyframes fade-in{from{opacity:0}to{opacity:1}}
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes glow-ring{0%,100%{box-shadow:0 0 0 0 rgba(var(--acc-rgb,99,102,241),.3)}50%{box-shadow:0 0 0 6px rgba(var(--acc-rgb,99,102,241),0)}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
        .animate-slide-in{animation:slide-in .24s cubic-bezier(.34,1.2,.64,1) both;}
        .animate-slide-up{animation:slide-up .3s cubic-bezier(.34,1.2,.64,1) both;}
        .animate-scale-in{animation:scale-in .22s cubic-bezier(.34,1.3,.64,1) both;}
        .animate-fade-in{animation:fade-in .2s ease both;}
        .animate-spin{animation:spin 1s linear infinite;}
        .animate-pulse{animation:glow-ring 2s ease infinite;}
        .animate-bounce{animation:float .9s ease-in-out infinite;}
        .stagger-1{animation-delay:.06s}.stagger-2{animation-delay:.12s}.stagger-3{animation-delay:.18s}
        .stagger-4{animation-delay:.24s}.stagger-5{animation-delay:.3s}.stagger-6{animation-delay:.36s}
        .sidebar-nav{background:var(--sidebar-bg);border-right:1px solid var(--border);}
        .nav-item-active{position:relative;}
        .nav-item-active::before{content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);width:3px;height:26px;border-radius:0 4px 4px 0;background:linear-gradient(180deg,var(--accent),var(--accent2,var(--accent)));}
        .mobile-nav{background:var(--nav-bg);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid var(--card-border,var(--border));border-radius:24px;box-shadow:0 10px 40px rgba(0,0,0,.15);}
        .main-header{background:var(--nav-bg);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border-bottom:1px solid var(--card-border,var(--border));}
        .bg-mesh{background:var(--bg-gradient,radial-gradient(ellipse 800px 600px at 0% 0%,rgba(var(--acc-rgb,99,102,241),.06) 0%,transparent 60%),radial-gradient(ellipse 600px 800px at 100% 100%,rgba(167,139,250,.04) 0%,transparent 60%),var(--bg));background-attachment:fixed;}
        .prose-custom h2,.prose-custom h3{font-weight:800;margin:14px 0 5px;}
        .prose-custom li{margin:3px 0;}
        .prose-custom strong{font-weight:800;}
        .scroll-content{padding-bottom:calc(96px + env(safe-area-inset-bottom));-webkit-overflow-scrolling:touch;}
        @media(min-width:1024px){.scroll-content{padding-bottom:32px;}}

        /* ── PILL NAV ITEM ACTIVE ── */
        .pill-nav-active{position:relative;}
        .pill-nav-active::before{display:none;}
        /* ── SIDEBAR HOVER ── */
        .sidebar-nav button:not(:disabled):hover .nav-icon{opacity:1!important;transform:scale(1.1);}
        .sidebar-nav button{border-radius:12px;margin:0 8px;}
        /* ── GLASS INPUTS ── */
        .glass-input{background:var(--surface2,var(--card));border:1px solid var(--border2,var(--border));color:var(--text);transition:border-color .15s,box-shadow .15s;}
        .glass-input:focus{outline:none;border-color:rgba(var(--acc-rgb,99,102,241),.5);box-shadow:0 0 0 3px rgba(var(--acc-rgb,99,102,241),.1);}
        /* ── PILL BADGE ── */
        .badge{display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:999px;font-size:11px;font-weight:700;background:rgba(var(--acc-rgb,99,102,241),.1);color:var(--accent);border:1px solid rgba(var(--acc-rgb,99,102,241),.2);}
        /* ── DRAG HANDLE ── */
        .drag-handle{cursor:col-resize;display:flex;align-items:center;justify-content:center;width:8px;background:transparent;transition:background .15s;flex-shrink:0;}
        .drag-handle:hover{background:rgba(var(--acc-rgb,99,102,241),.15);}
        /* ── SECTION HEADER ── */
        .section-label{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--text3,var(--text));opacity:.7;}
        /* ── STAT CARD SHIMMER on load ── */
        @keyframes shimmer{0%{background-position:-400% 0}100%{background-position:400% 0}}
        .shimmer{background:linear-gradient(90deg,var(--surface2) 25%,var(--surface3,var(--surface)) 50%,var(--surface2) 75%);background-size:400% 100%;animation:shimmer 1.5s ease infinite;}
        /* ── RESPONSIVE FIXES ── */
        @media(max-width:640px){
          .hide-mobile{display:none!important;}
          .glass{backdrop-filter:none;-webkit-backdrop-filter:none;}
        }
        @media(min-width:1024px){
          .hide-desktop{display:none!important;}
        }
        /* ── CARD GRID RESPONSIVE ── */
        .responsive-grid{display:grid;gap:16px;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));}
        @media(max-width:640px){.responsive-grid{grid-template-columns:1fr;}}
        canvas{display:block;max-width:100%;height:auto!important;}
        textarea{min-height:40px;}
        input[type=range]{accent-color:var(--accent);}
        html{scroll-behavior:smooth;}
      ` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ToastContainer, { toasts }),
        showGlobalSearch && /* @__PURE__ */ jsxRuntimeExports.jsx(
          GlobalSearch,
          {
            docs,
            flashcards,
            exams,
            cases,
            notes,
            onNavigate: (v, id) => {
              setView(v);
              if (id) {
                setActiveId(id);
                setOpenDocs((p) => p.includes(id) ? p : [...p, id]);
                setDocPages((p) => ({ ...p, [id]: 1 }));
              }
            },
            onClose: () => setShowGlobalSearch(false)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalTaskIndicator, { onViewResult: (id, task) => {
          if (task.type === "flashcards") setView("flashcards");
          else if (task.type === "exam") setView("exams");
          else if (task.type === "cases") setView("cases");
        } }),
        bootError && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 bg-amber-500/10 border-b border-amber-500/30 px-4 py-2 flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { size: 16, className: "shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Could not restore your previous session — starting fresh. (",
            bootError,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setBootError(null), className: "ml-auto opacity-60 hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "design-header shrink-0 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: MARIAM_IMG, alt: "", className: "w-9 h-9 rounded-xl object-cover" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[1.5rem]", children: "MARIAM" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowGlobalSearch(true), className: "absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center", style: { background: "rgba(255,255,255,0.15)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 18 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 min-h-0 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 flex flex-col min-h-0 overflow-hidden overflow-y-auto relative", style: { paddingBottom: 120 }, children: [
            uploading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-1.5 bg-[var(--border)] z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2,var(--accent))] transition-all duration-300 animate-pulse", style: { width: `${uploadPct}%` } }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ViewWrapper, { active: view === "library", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              LibraryMergedView,
              {
                docs,
                uploading,
                onUpload: handleUpload,
                onOpen: (id) => {
                  setOpenDocs((p) => p.includes(id) ? p : [...p, id]);
                  setActiveId(id);
                  setView("reader");
                },
                onDelete: deleteDoc,
                flashcards,
                exams,
                cases,
                notes,
                setView,
                setActiveId: (id) => {
                  setActiveId(id);
                  setOpenDocs((p) => p.includes(id) ? p : [...p, id]);
                },
                addToast,
                settings
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ViewWrapper, { active: view === "flashcards", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlashcardsView, { flashcards, setFlashcards, settings, addToast, docs, setExams, setCases }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ViewWrapper, { active: view === "exams", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExamsView, { exams, setExams, settings, addToast, docs, setFlashcards, setCases }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ViewWrapper, { active: view === "cases", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CasesView, { cases, setCases, settings, addToast, docs, setFlashcards, setExams }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ViewWrapper, { active: view === "chat", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChatView, { settings, sessions: chatSessions, setSessions: setChatSessions }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ViewWrapper, { active: view === "settings", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsView, { settings, setSettings, installPrompt, onInstall }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ViewWrapper, { active: showReader, children: activeDoc && /* @__PURE__ */ jsxRuntimeExports.jsx(
              DocWorkspace,
              {
                activeDoc,
                setDocs,
                currentPage: docPages[activeId] || 1,
                setCurrentPage: setPage,
                openDocs,
                closeTab: (id) => setOpenDocs((p) => p.filter((d) => d !== id)),
                setActiveId,
                docs,
                onBack: () => setView("library")
              }
            ) })
          ] }),
          showReader && rpOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                onMouseDown: startRpDrag,
                onTouchStart: startRpDrag,
                className: "hidden lg:flex w-2 cursor-col-resize items-center justify-center bg-[var(--border)]/30 hover:bg-[var(--accent)]/30 shrink-0 z-[120] touch-none transition-colors group",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(GripVertical, { size: 16, className: "text-[var(--text)] opacity-20 group-hover:opacity-60" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "aside",
              {
                style: { width: window.innerWidth >= 1024 ? `${rpW}px` : "100%" },
                className: "glass flex flex-col shrink-0 z-[100] lg:relative absolute inset-0 lg:inset-auto border-t-0 border-b-0 border-r-0 animate-slide-in h-full",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-14 lg:h-16 bg-gradient-to-r from-[var(--accent)] to-[var(--accent2,var(--accent))] text-white flex items-center justify-between px-4 shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-black flex items-center gap-2 text-base", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 18 }),
                      " AI Studio"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setRpOpen(false), className: "w-8 h-8 hover:bg-white/20 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex shrink-0 border-b border-[color:var(--border2,var(--border))] bg-[var(--surface,var(--card))]", children: [["generate", "Generate", Zap], ["chat", "Chat", MessageSquare], ["vault", "Vault", Database]].map(([id, lbl, Icon]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => setRpTab(id),
                      className: `flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-black uppercase tracking-widest transition-colors border-b-2
                      ${rpTab === id ? "border-[var(--accent)] text-[var(--accent)]" : "border-transparent text-[var(--text)] opacity-50 hover:opacity-80"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16 }),
                        lbl
                      ]
                    },
                    id
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 overflow-hidden", children: [
                    activeDoc && rpTab === "generate" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      GeneratePanel,
                      {
                        activeDoc,
                        bgTask,
                        onStart: startGen,
                        onClear: () => setBgTask(null),
                        setFlashcards,
                        setExams,
                        setCases,
                        setNotes,
                        onVault: () => setRpTab("vault"),
                        currentPage: docPages[activeId] || 1,
                        addToast,
                        settings,
                        mindMaps,
                        setMindMaps,
                        timelines,
                        setTimelines
                      }
                    ),
                    activeDoc && rpTab === "chat" && /* @__PURE__ */ jsxRuntimeExports.jsx(ChatPanel, { activeDoc, settings, currentPage: docPages[activeId] || 1 }),
                    activeDoc && rpTab === "vault" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      VaultPanel,
                      {
                        activeDocId: activeId,
                        flashcards,
                        setFlashcards,
                        exams,
                        setExams,
                        cases,
                        setCases,
                        notes,
                        setNotes,
                        addToast,
                        setCurrentPage: setPage,
                        setView,
                        settings,
                        mindMaps,
                        timelines
                      }
                    )
                  ] })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "design-nav", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "design-nav-inner", children: NAV_ITEMS2.map(({ icon: Icon, label, v, dis }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            disabled: dis,
            onClick: () => {
              if (!dis) {
                if (v === "reader" && activeId) setView("reader");
                else if (v !== "reader") setView(v);
              }
            },
            className: `design-nav-btn ${view === v ? "active" : ""}`,
            title: label,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22, strokeWidth: view === v ? 2.5 : 2 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "design-nav-label", children: label })
            ]
          },
          v
        )) }) })
      ]
    }
  );
}
class AppErrorBoundary extends React.Component {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: 40, textAlign: "center", fontFamily: "system-ui" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "MARIAM PRO encountered an error" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { style: { background: "#fee", padding: 16, borderRadius: 8, fontSize: 12, textAlign: "left", overflowX: "auto" }, children: this.state.error?.message }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => window.location.reload(),
          style: { marginTop: 20, padding: "10px 20px", borderRadius: 8, background: "var(--accent, #6366f1)", color: "white", border: "none", cursor: "pointer" },
          children: "Reload App"
        }
      )
    ] });
    return this.props.children;
  }
}
function AppWithBoundary() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) });
}

client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppWithBoundary, {}) })
);
