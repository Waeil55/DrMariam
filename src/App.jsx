import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import * as counselingDataModule from './Counseling.js';
import * as diseasesDataModule from './Diseases.js';
import * as drugDataModule from './drugData.js';
import * as lawDataModule from './lawData.js';

let counselingFlashcards = [], counselingExams = [], counselingCases = [];
let diseasesFlashcards = [], diseasesExams = [], diseasesCases = [];
let drugFlashcards = [], drugExams = [], drugCases = [];
let lawFlashcards = [], lawExams = [], lawCases = [];

try {
  counselingFlashcards = counselingDataModule.counselingFlashcards || [];
  counselingExams = counselingDataModule.counselingExams || [];
  counselingCases = counselingDataModule.counselingCases || [];
} catch (e) { console.warn('[MARIAM] Counseling data failed to load:', e.message); }

try {
  diseasesFlashcards = diseasesDataModule.diseasesFlashcards || [];
  diseasesExams = diseasesDataModule.diseasesExams || [];
  diseasesCases = diseasesDataModule.diseasesCases || [];
} catch (e) { console.warn('[MARIAM] Diseases data failed to load:', e.message); }

try {
  drugFlashcards = drugDataModule.drugFlashcards || [];
  drugExams = drugDataModule.drugExams || [];
  drugCases = drugDataModule.drugCases || [];
} catch (e) { console.warn('[MARIAM] Drug data failed to load:', e.message); }

try {
  lawFlashcards = lawDataModule.lawFlashcards || [];
  lawExams = lawDataModule.lawExams || [];
  lawCases = lawDataModule.lawCases || [];
} catch (e) { console.warn('[MARIAM] Law data failed to load:', e.message); }

/* ═══════════════════════════════════════════════════════════════════
   DRUG DETAIL LOOKUP — parses drugData answers into structured info
   for the auto-detail panel shown below flashcards during study.
   ═══════════════════════════════════════════════════════════════════ */
const drugDetailLookup = (() => {
  const map = {};
  try {
    const allDrugCards = [
      ...(drugFlashcards || []),
      ...(counselingFlashcards || [])
    ].flatMap(s => s.cards || []);
    for (const c of allDrugCards) {
      const name = (c.q || '').trim().toLowerCase();
      if (!name) continue;
      const a = c.a || '';
      const brandMatch = a.match(/Brand:\s*(.+?)\n/);
      const classMatch = a.match(/Class:\s*(.+?)\n/);
      const indicationMatch = a.match(/Indication:\s*(.+?)\n/);
      const pointsMatch = a.match(/Counseling Points:\s*\n([\s\S]*)/);
      const points = pointsMatch
        ? pointsMatch[1].split('\n').map(l => l.replace(/^\s*-\s*/, '').trim()).filter(Boolean).slice(0, 4)
        : [];
      const detail = {
        brand: brandMatch ? brandMatch[1].trim() : '',
        generic: c.q.trim(),
        drugClass: classMatch ? classMatch[1].trim() : '',
        indication: indicationMatch ? indicationMatch[1].trim() : '',
        counselingPoints: points,
      };
      // Index by generic name
      map[name] = detail;
      // Also index by base/short generic name (first word before space/paren/slash)
      // e.g. "albuterol sulfate (hfa)" → also key "albuterol"
      const baseName = name.split(/[\s(/,]/)[0];
      if (baseName.length > 3 && !map[baseName]) map[baseName] = detail;
      // Also index by brand names (may be comma-separated)
      if (detail.brand) {
        const brands = detail.brand.split(',').map(b => b.trim()).filter(Boolean);
        for (const b of brands) {
          map[b.toLowerCase()] = detail;
          // base brand name too
          const baseBrand = b.toLowerCase().split(/[\s(/,]/)[0];
          if (baseBrand.length > 3 && !map[baseBrand]) map[baseBrand] = detail;
        }
      }
    }
  } catch (e) { console.warn('[MARIAM] Drug detail lookup build failed:', e.message); }
  return map;
})();

/** Search question text + options for a drug name match in the lookup */
function findDrugDetail(questionText, options, correctIdx) {
  if (!questionText) return null;
  // 1. Direct name match from question
  const allNames = Object.keys(drugDetailLookup);
  const qLow = questionText.toLowerCase();
  for (const name of allNames) {
    if (qLow.includes(name)) return drugDetailLookup[name];
  }
  // 2. Check correct answer option
  if (options && correctIdx != null && options[correctIdx]) {
    const optLow = options[correctIdx].toLowerCase().trim();
    if (drugDetailLookup[optLow]) return drugDetailLookup[optLow];
    for (const name of allNames) {
      if (optLow.includes(name)) return drugDetailLookup[name];
    }
  }
  // 3. Check all options
  if (options) {
    for (const opt of options) {
      const oLow = (opt || '').toLowerCase().trim();
      if (drugDetailLookup[oLow]) return drugDetailLookup[oLow];
    }
  }
  return null;
}

/** Reusable Drug Quick Reference panel component */
function DrugQuickRef({ detail, compact }) {
  if (!detail) return null;
  return (
    <div className={`rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 ${compact ? 'px-3 py-2.5' : 'px-5 py-4'} space-y-2`}>
      <div className="flex items-center gap-2">
        <Pill size={compact ? 13 : 16} className="text-[var(--accent)]" />
        <span className={`${compact ? 'text-[10px]' : 'text-xs'} font-black uppercase tracking-widest text-[var(--accent)]`}>Drug Quick Reference</span>
      </div>
      <div className={`grid grid-cols-2 gap-x-4 gap-y-1.5 ${compact ? 'text-xs' : 'text-sm'}`}>
        <div><span className="opacity-50 text-[11px] font-bold uppercase">Generic</span><p className="font-bold">{detail.generic}</p></div>
        <div><span className="opacity-50 text-[11px] font-bold uppercase">Brand</span><p className="font-bold text-[var(--accent)]">{detail.brand || 'N/A'}</p></div>
        <div><span className="opacity-50 text-[11px] font-bold uppercase">Class</span><p className="font-semibold">{detail.drugClass || 'N/A'}</p></div>
        <div><span className="opacity-50 text-[11px] font-bold uppercase">Use Cases</span><p className="font-semibold">{detail.indication || 'N/A'}</p></div>
      </div>
      {detail.counselingPoints.length > 0 && (
        <div className="border-t border-[var(--accent)]/20 pt-2 mt-1">
          <span className={`opacity-60 ${compact ? 'text-[10px]' : 'text-xs'} font-bold flex items-center gap-1.5 mb-1`}><Clipboard size={compact ? 10 : 12} /> Top 4 Key Points</span>
          <ul className="space-y-0.5">
            {detail.counselingPoints.map((pt, i) => (
              <li key={i} className={`${compact ? 'text-xs' : 'text-sm'} flex items-start gap-2`}>
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/*
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  MARIAM PRO v7.0 ULTRA — Universal AI Document Intelligence     ║
 * ╠══════════════════════════════════════════════════════════════════╣
 * ║  DEPENDENCY VERSIONS (pinned in CONFIG below):                  ║
 * ║   • pdf.js        2.16.105  (Cloudflare CDN)                    ║
 * ║   • mammoth       1.6.0     (Cloudflare CDN, loaded on demand)  ║
 * ║   • xlsx          0.18.5    (Cloudflare CDN, loaded on demand)  ║
 * ║   • lucide-react  (peer dep — managed by npm/package.json)      ║
 * ╠══════════════════════════════════════════════════════════════════╣
 * ║  SECURITY POLICY:                                               ║
 * ║   • All file data stays in the user's browser (IndexedDB).      ║
 * ║   • No data is ever sent to any server except the chosen AI     ║
 * ║     provider API (text prompts only — no raw files uploaded).   ║
 * ║   • API keys are stored in IndexedDB only, never in cookies or  ║
 * ║     localStorage, and are never transmitted except to the       ║
 * ║     provider endpoint chosen by the user.                       ║
 * ║   • Do NOT store HIPAA/GDPR regulated data without adding       ║
 * ║     server-side encryption and access controls.                 ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */
/* mammoth and XLSX are loaded dynamically from CDN — no npm install needed */
import {
  BookOpen, Layers, CheckSquare, Settings, ChevronLeft, ChevronRight, MessageSquare,
  CheckCircle2, Trash2, Loader2, Send, GraduationCap, Save, X, BookA, AlertCircle, FileUp,
  Target, Trash, Sparkles, Activity, Stethoscope, Lightbulb, Baby, Pill, Thermometer, Zap,
  Database, Search, Palette, Type, Moon, Sun, UserCircle2, ZoomIn, ZoomOut, Maximize,
  PlusCircle, CloudSun, MoonStar, FileSearch, MessageCircleQuestion, FastForward,
  FlaskConical, Info, Clipboard, KeyRound, Globe, GripVertical, BookMarked, Layers3,
  Brain, ListChecks, FilePlus, AlignLeft, Hash, Image, FileText, FileCode, Table,
  Map, Clock, Download, Share2, Star, Mic, MicOff, Network, BarChart2, Camera,
  Languages, Wand2, Tag, TrendingUp, LayoutDashboard, Award,
  ChevronDown, ChevronUp, Eye, EyeOff, RefreshCw, RotateCcw,
  Filter, SortAsc, Grid, List, Smartphone, Monitor, Code,
  Printer, FileDown, FolderOpen, Pin, Copy, ExternalLink,
  Bell, Archive, BarChart, BookCopy, CalendarDays, FlameKindling,
  Trophy, Percent, PenLine, Scissors, Bookmark, History, Plus,
  MoreVertical, CheckCheck, CircleDot, Flame, Heart, Leaf,
  Layout, LayoutGrid, BotMessageSquare, Shuffle, Menu,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════════
   DYNAMIC CDN LOADERS — no npm install needed.
   Versions are pinned in CONFIG above so upgrades are one-line changes.
═══════════════════════════════════════════════════════════════════ */
/**
 * Injects a <script> tag and resolves with the global the library exposes.
 * Safe to call multiple times — returns the cached global immediately if loaded.
 */
/* ── IMMEDIATE MOBILE FIXES (runs before first React render) ──────────────────
   1. viewport-fit=cover  →  env(safe-area-inset-*) gets real iPhone values
   2. body background     →  no white flash / gap behind fixed nav
──────────────────────────────────────────────────────────────────────────── */
(() => {
  // viewport-fit=cover must exist BEFORE first paint for safe-area-inset to work
  let vp = document.querySelector('meta[name="viewport"]');
  if (!vp) { vp = document.createElement('meta'); vp.name = 'viewport'; document.head.appendChild(vp); }
  if (!vp.content.includes('viewport-fit=cover')) {
    vp.content = 'width=device-width, initial-scale=1, viewport-fit=cover, interactive-widget=resizes-content';
  } else if (!vp.content.includes('interactive-widget')) {
    vp.content = vp.content + ', interactive-widget=resizes-content';
  }
  // Make html+body fill screen colour so no white shows behind fixed nav
  document.documentElement.style.cssText += 'height:100%;background:transparent;';
  document.body.style.cssText += 'height:100%;background:transparent;margin:0;padding:0;overflow:hidden;';
})();

const loadScript = async (src, globalName) => {
  if (window[globalName]) return window[globalName];
  return new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = () => {
      if (window[globalName]) res(window[globalName]);
      else rej(new Error(`Script loaded but global '${globalName}' not found at ${src}`));
    };
    s.onerror = () => rej(new Error(`Network error loading ${globalName} from ${src}. Check your internet connection.`));
    document.head.appendChild(s);
  });
};

const loadMammoth = () => loadScript(CONFIG.MAMMOTH_CDN, 'mammoth');
const loadXLSX = () => loadScript(CONFIG.XLSX_CDN, 'XLSX');
const loadJsPDF = () => loadScript(CONFIG.JSPDF_CDN, 'jspdf');
const loadJSZip = () => loadScript(CONFIG.JSZIP_CDN, 'JSZip');


/* ═══════════════════════════════════════════════════════════════════
   CONFIG — change values here, not scattered through the codebase.
   In a production app these would come from import.meta.env / .env
═══════════════════════════════════════════════════════════════════ */

const speakText = (text) => {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  // Pick a good generic voice
  const voices = window.speechSynthesis.getVoices();
  const enhanced = voices.find(v => v.name.includes('Google') || v.name.includes('Premium') || v.name.includes('Enhanced'));
  if (enhanced) utterance.voice = enhanced;
  utterance.rate = 0.95;
  window.speechSynthesis.speak(utterance);
};

const CONFIG = Object.freeze({
  MARIAM_IMG: 'https://raw.githubusercontent.com/Waeil55/DrMariam/main/M.jpeg',
  NAV_H: 72,           // px — mobile bottom nav height
  APP_VER: 'v7.0 ULTRA',
  CHUNK: 3500,         // chars per virtual page for non-PDF files
  MAX_TOKENS: 8000,    // default AI response ceiling
  DB_NAME: 'MariamProDB_v70',
  DB_VERSION: 10,
  PDF_CDN: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105',
  MAMMOTH_CDN: 'https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js',
  XLSX_CDN: 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js',
  JSPDF_CDN: 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  JSZIP_CDN: 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js',
  RETRY_ATTEMPTS: 2,
  PARALLEL_CONCURRENCY: 50,
});
const { MARIAM_IMG, NAV_H, APP_VER, CHUNK } = CONFIG;

/* ═══════════════════════════════════════════════════════════════════
   INDEXED DB — with proper migration strategy and async/await
   Migration guide: bump CONFIG.DB_VERSION and add a case below.
═══════════════════════════════════════════════════════════════════ */

/** Centralised error logger — swap console.error for Sentry.captureException etc. */
const logError = (context, err) => {
  console.error(`[MariamPro][${context}]`, err?.message || err);
};

/**
 * Opens (or upgrades) the IndexedDB database.
 * onupgradeneeded handles ALL schema migrations in version order,
 * so the DB is always consistent regardless of which version the
 * user was previously on.
 */
const openDB = () => new Promise((resolve, reject) => {
  if (!window.indexedDB) {
    return reject(new Error('IndexedDB is not supported in this browser.'));
  }
  const request = indexedDB.open(CONFIG.DB_NAME, CONFIG.DB_VERSION);

  request.onupgradeneeded = event => {
    const db = event.target.result;
    const oldV = event.oldVersion;
    // BUG-009 fix: use versioned migration — never drop stores, only create missing ones
    if (oldV < 1) {
      if (!db.objectStoreNames.contains('files')) db.createObjectStore('files');
      if (!db.objectStoreNames.contains('appState')) db.createObjectStore('appState');
    }
    // oldV < 9 covers all previous versions — safe creates only
    if (oldV >= 1 && oldV < 9) {
      if (!db.objectStoreNames.contains('files')) db.createObjectStore('files');
      if (!db.objectStoreNames.contains('appState')) db.createObjectStore('appState');
    }
    // v10+ migrations go here, example:
    // if (oldV < 10) { if (!db.objectStoreNames.contains('analytics')) db.createObjectStore('analytics'); }
    // Add sessionProgress store for resume functionality
    if (oldV < 10) { if (!db.objectStoreNames.contains('sessionProgress')) db.createObjectStore('sessionProgress'); }
    // v10: encyclopedia topic cache — never deletes generated content
    if (oldV < 10) { if (!db.objectStoreNames.contains('encyclopediaCache')) db.createObjectStore('encyclopediaCache'); }
  };

  request.onsuccess = () => resolve(request.result);
  request.onerror = () => {
    const msg = `Failed to open IndexedDB: ${request.error?.message || 'unknown error'}`;
    logError('openDB', msg);
    reject(new Error(msg));
  };
  request.onblocked = () => {
    logError('openDB', 'Database upgrade blocked — close other tabs running this app.');
  };
});

/**
 * Generic database operation wrapper.
 * Uses async/await internally; always rejects with a descriptive Error.
 */
const dbOp = async (store, mode, op) => { let db;
  try { db = await openDB(); }
  catch (err) { throw new Error(`DB open failed for store '${store}': ${err.message}`); }

  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, mode);
    const objectStore = tx.objectStore(store);
    let result;
    // BUG-004 fix: always attach handlers to both request AND transaction
    try {
      const request = op(objectStore);
      if (request && typeof request.onsuccess !== 'undefined') {
        request.onsuccess = () => { result = request.result; };
        request.onerror = () => reject(new Error(`IDB request error (${store}): ${request.error?.message}`));
      }
    } catch (err) { return reject(err); }
    tx.oncomplete = () => resolve(result);
    tx.onerror = () => reject(new Error(`IDB transaction error (${store}): ${tx.error?.message}`));
    tx.onabort = () => reject(new Error('IDB transaction aborted'));
  });
};

// Typed helpers — all return Promises; callers should await them
const saveFile = (id, data) => dbOp('files', 'readwrite', s => { s.put(data, id); });
const getFile = id => dbOp('files', 'readonly', s => s.get(id));
const delFile = id => dbOp('files', 'readwrite', s => { s.delete(id); });
const saveState = (key, val) => dbOp('appState', 'readwrite', s => { s.put(val, key); });
const getState = key => dbOp('appState', 'readonly', s => s.get(key));

// Session progress helpers
const saveSessionProgress = (setId, type, index) => dbOp('sessionProgress', 'readwrite', s => { s.put({ setId, type, index, timestamp: Date.now() }, setId); });
const getSessionProgress = setId => dbOp('sessionProgress', 'readonly', s => s.get(setId));
const deleteSessionProgress = setId => dbOp('sessionProgress', 'readwrite', s => { s.delete(setId); });

// Encyclopedia topic cache helpers — content is NEVER auto-deleted
const saveTopicCache = (key, data) => dbOp('encyclopediaCache', 'readwrite', s => { s.put({ data, savedAt: Date.now() }, key); });
const getTopicCache = key => dbOp('encyclopediaCache', 'readonly', s => s.get(key));

/* ═══════════════════════════════════════════════════════════════════
   PDF.JS LOADER — with retry and descriptive error messages
═══════════════════════════════════════════════════════════════════ */
/**
 * Loads PDF.js from CDN with up to RETRY_ATTEMPTS retries.
 * Throws a user-friendly Error if all attempts fail.
 */
const loadPdfJs = async () => {
  if (window.pdfjsLib) return window.pdfjsLib;

  const base = CONFIG.PDF_CDN;
  let lastErr;
  for (let attempt = 1; attempt <= CONFIG.RETRY_ATTEMPTS + 1; attempt++) {
    try {
      await new Promise((resolve, reject) => {
        const sc = document.createElement('script');
        sc.src = `${base}/pdf.min.js`;
        sc.onload = () => {
          if (!window.pdfjsLib) {
            return reject(new Error('PDF.js script loaded but pdfjsLib global not found.'));
          }
          window.pdfjsLib.GlobalWorkerOptions.workerSrc = `${base}/pdf.worker.min.js`;
          resolve();
        };
        sc.onerror = () => reject(new Error(`Network error loading PDF.js from ${sc.src}`));
        document.body.appendChild(sc);
      });
      return window.pdfjsLib; // success
    } catch (err) {
      lastErr = err;
      logError(`loadPdfJs attempt ${attempt}`, err);
      if (attempt <= CONFIG.RETRY_ATTEMPTS) {
        await new Promise(r => setTimeout(r, 1000 * attempt)); // back-off
        if (window.pdfjsLib) return window.pdfjsLib; // loaded by previous try
      }
    }
  }
  throw new Error(
    `Could not load PDF renderer after ${CONFIG.RETRY_ATTEMPTS + 1} attempts. ` +
    `Check your internet connection. (${lastErr?.message})`
  );
};

/* ═══════════════════════════════════════════════════════════════════
   FILE CATEGORY DETECTION
═══════════════════════════════════════════════════════════════════ */
const getFileCategory = (file) => {
  const n = file.name.toLowerCase(); const t = file.type || '';
  if (t === 'application/pdf' || n.endsWith('.pdf')) return 'pdf';
  if (t.includes('wordprocessingml') || t.includes('msword') || n.endsWith('.docx') || n.endsWith('.doc')) return 'word';
  if (t.includes('spreadsheetml') || t.includes('ms-excel') || n.endsWith('.xlsx') || n.endsWith('.xls')) return 'spreadsheet';
  if (n.endsWith('.csv') || t === 'text/csv') return 'csv';
  if (t.startsWith('image/')) return 'image';
  if (t.includes('presentationml') || t.includes('ms-powerpoint') || n.endsWith('.pptx') || n.endsWith('.ppt') || n.endsWith('.odp')) return 'presentation';
  const textExts = ['.txt', '.md', '.markdown', '.js', '.ts', '.jsx', '.tsx', '.py', '.java', '.c', '.cpp', '.go', '.rs', '.rb', '.php', '.html', '.css', '.json', '.yaml', '.yml', '.xml', '.sh', '.bash', '.zsh', '.sql', '.r', '.swift', '.kt', '.dart', '.vue', '.svelte', '.toml', '.ini', '.env', '.log', '.epub', '.odt', '.rtf'];
  if (t.startsWith('text/') || textExts.some(e => n.endsWith(e))) return 'text';
  return 'unknown';
};

const FILE_ICONS = {
  pdf: { Icon: FileText, from: 'from-red-500', to: 'to-rose-600', label: 'PDF' },
  word: { Icon: FileText, from: 'from-blue-500', to: 'to-blue-700', label: 'Word' },
  spreadsheet: { Icon: Table, from: 'from-emerald-500', to: 'to-green-700', label: 'Excel' },
  csv: { Icon: Table, from: 'from-teal-500', to: 'to-emerald-700', label: 'CSV' },
  image: { Icon: Image, from: 'from-purple-500', to: 'to-violet-700', label: 'Image' },
  text: { Icon: FileCode, from: 'from-amber-500', to: 'to-orange-600', label: 'Text' },
  presentation: { Icon: FileText, from: 'from-orange-500', to: 'to-amber-600', label: 'Slides' },
  unknown: { Icon: FileUp, from: 'from-slate-500', to: 'to-slate-700', label: 'File' },
};

/* ═══════════════════════════════════════════════════════════════════
   UNIVERSAL FILE EXTRACTOR
   Non-PDF files have no intrinsic page structure, so we split their
   text into virtual pages of CONFIG.CHUNK characters each. This lets
   every file type work with the same page-based AI & reader UI.
═══════════════════════════════════════════════════════════════════ */

/**
 * Splits a plain-text string into numbered virtual pages.
 * Uses paragraph breaks as split points to avoid cutting mid-sentence,
 * then falls back to hard character limits (CONFIG.CHUNK).
 * @returns {{ pagesText: Record<number,string>, totalPages: number }}
 */
const chunkText = (text) => {
  const pages = {}; let page = 1, cur = '';
  const parts = text.split(/\n\n+/);
  for (const part of parts) {
    if (!part.trim()) continue;
    if (cur.length + part.length > CHUNK && cur) { pages[page++] = cur.trim(); cur = part + '\n\n'; }
    else cur += part + '\n\n';
  }
  if (cur.trim()) pages[page] = cur.trim();
  if (!Object.keys(pages).length) pages[1] = text.trim().substring(0, CHUNK) || '(empty)';
  return { pagesText: pages, totalPages: page };
};

/** Extracts text from a PDF file page-by-page using PDF.js. */
const extractPdf = async (file, onProgress) => {
  const ab = await file.arrayBuffer();
  const pdfjs = await loadPdfJs();
  const pdf = await pdfjs.getDocument({ data: ab.slice(0) }).promise;
  const tot = pdf.numPages; const pagesText = {};
  for (let i = 1; i <= tot; i++) {
    try { const pg = await pdf.getPage(i); const tc = await pg.getTextContent(); pagesText[i] = tc.items.map(s => s.str).join(' '); pg.cleanup(); }
    catch { pagesText[i] = ''; }
    if (i % 5 === 0) await new Promise(r => setTimeout(r, 0));
    if (onProgress) onProgress(i / tot);
  }
  try { await pdf.destroy(); } catch { }
  return { buffer: ab, pagesText, totalPages: tot, fileCategory: 'pdf' };
};

/** Extracts raw text from a .docx/.doc file using mammoth (loaded from CDN). */
const extractWord = async (file) => {
  const ab = await file.arrayBuffer();
  let text = '';
  try {
    const mammoth = await loadMammoth();
    const r = await mammoth.extractRawText({ arrayBuffer: ab });
    text = r.value || '';
  } catch (e) { text = `Could not extract Word content: ${e.message}`; }
  const { pagesText, totalPages } = chunkText(text);
  return { pagesText, totalPages, rawText: text, fileCategory: 'word' };
};

/** Converts each sheet in an Excel workbook to CSV text, then chunks it. */
const extractSpreadsheet = async (file) => {
  const ab = await file.arrayBuffer();
  let text = '';
  try {
    const XLSX = await loadXLSX();
    const wb = XLSX.read(new Uint8Array(ab), { type: 'array' });
    const parts = wb.SheetNames.map(name => {
      const ws = wb.Sheets[name];
      const csv = XLSX.utils.sheet_to_csv(ws, { skipHidden: true });
      return `=== Sheet: ${name} ===\n${csv}`;
    });
    text = parts.join('\n\n');
  } catch (e) { text = `Spreadsheet parse error: ${e.message}`; }
  const { pagesText, totalPages } = chunkText(text);
  return { pagesText, totalPages, rawText: text, fileCategory: 'spreadsheet' };
};

/** Reads a CSV file as plain text and chunks it into virtual pages. */
const extractCsv = async (file) => {
  const text = await file.text();
  const { pagesText, totalPages } = chunkText(text);
  return { pagesText, totalPages, rawText: text, fileCategory: 'csv' };
};

/**
 * Reads an image file as base64.
 * NOTE: base64 data is stored in IndexedDB only for display/AI-vision.
 * No sensitive personal data should be uploaded; the app has no server-side
 * storage — all data stays in the user's own browser.
 */
const extractImage = async (file) => {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onload = e => {
      const b64 = e.target.result.split(',')[1];
      const pagesText = { 1: `[IMAGE FILE: ${file.name}]\nSize: ${(file.size / 1024).toFixed(1)}KB\nType: ${file.type}\n\nThis is an image file. Use the AI Vision feature to analyze its content.` };
      res({ pagesText, totalPages: 1, imageBase64: b64, imageType: file.type || 'image/jpeg', fileCategory: 'image' });
    };
    reader.onerror = rej;
    reader.readAsDataURL(file);
  });
};

/** Falls back to reading the file as UTF-8 text for code, markdown, logs, etc. */
const extractText = async (file) => {
  let text = '';
  try { text = await file.text(); }
  catch (e) { text = `Could not read file: ${e.message}`; }
  const { pagesText, totalPages } = chunkText(text);
  return { pagesText, totalPages, rawText: text, fileCategory: 'text' };
};

/** Extracts text from PowerPoint .pptx files by unzipping with JSZip and parsing slide XML. */
const extractPresentation = async (file) => {
  const ab = await file.arrayBuffer();
  const slides = [];
  try {
    const JSZip = await loadJSZip();
    const zip = await JSZip.loadAsync(ab);
    const slideFiles = Object.keys(zip.files)
      .filter(name => /^ppt\/slides\/slide\d+\.xml$/i.test(name))
      .sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)?.[0] || '0', 10);
        const numB = parseInt(b.match(/\d+/)?.[0] || '0', 10);
        return numA - numB;
      });
    for (let i = 0; i < slideFiles.length; i++) {
      const xmlStr = await zip.files[slideFiles[i]].async('string');
      const texts = [];
      const regex = /<a:t(?:\s[^>]*)?>([\s\S]*?)<\/a:t>/g;
      let match;
      while ((match = regex.exec(xmlStr)) !== null) {
        const t = match[1]
          .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"').replace(/&#39;/g, "'").trim();
        if (t) texts.push(t);
      }
      if (texts.length) slides.push(`=== Slide ${i + 1} ===\n${texts.join(' ')}`);
    }
  } catch (e) {
    console.warn('PPTX extraction failed:', e.message);
  }
  const text = slides.length
    ? slides.join('\n\n')
    : `[Presentation: ${file.name}]\nSize: ${(file.size / 1024).toFixed(1)} KB\n\nUnable to extract slide content. For best results, export as PDF or DOCX.`;
  const { pagesText, totalPages } = chunkText(text);
  return { pagesText, totalPages, rawText: text, fileCategory: 'presentation' };
};

/** Attempts to extract text from any unknown file format. */
const extractUnknown = async (file) => {
  let text = '';
  try { text = await file.text(); } catch { }
  if (!text.trim() || /[\x00-\x08\x0e-\x1f]{10}/.test(text.slice(0, 500))) {
    text = `[File: ${file.name}]\nSize: ${(file.size / 1024).toFixed(1)} KB\nType: ${file.type || 'Unknown'}\n\nThis file format is not directly readable as text. For best results, convert it to PDF, Word, or a text format first.`;
  }
  const { pagesText, totalPages } = chunkText(text);
  return { pagesText, totalPages, rawText: text, fileCategory: 'unknown' };
};

/**
 * Universal entry point: detects the file type and routes to the correct extractor.
 * Always returns { pagesText, totalPages, fileCategory, ...extras }.
 */
const extractUniversal = async (file, onProgress) => {
  const cat = getFileCategory(file);
  switch (cat) {
    case 'pdf': return extractPdf(file, onProgress);
    case 'word': return extractWord(file);
    case 'spreadsheet': return extractSpreadsheet(file);
    case 'csv': return extractCsv(file);
    case 'image': return extractImage(file);
    case 'presentation': return extractPresentation(file);
    case 'text': return extractText(file);
    default: return extractUnknown(file);
  }
};

/* ═══════════════════════════════════════════════════════════════════
   AI ENGINE
   Supports: Anthropic (default, no key needed in Claude artifacts),
   OpenAI, Google Gemini, DeepSeek, Groq, Ollama, and any
   OpenAI-compatible endpoint. Provider is selected in Settings.
═══════════════════════════════════════════════════════════════════ */
/**
 * One-shot AI call. Returns the model's text response.
 * @param {boolean} expectJson  — appends a strict "return only JSON" instruction
 * @param {boolean} strictMode  — tells the model to cite only the document text
 */
const callAI = async (prompt, expectJson, strictMode, settings = {}, maxTokens = 8000) => {
  const { provider = 'anthropic', apiKey = '', baseUrl = '', model = '' } = settings;
  const sys = `CRITICAL INSTRUCTION: You are an expert AI that generates EXCLUSIVELY from the provided PDF/document content below. You must NEVER use outside knowledge, general facts, or information not present in the document. Every question, answer, explanation, and vignette must be directly traceable to the document text. If a concept is not in the document, do not include it. Generate long, detailed, comprehensive content — questions should be multi-sentence with rich clinical/academic context. Explanations must be thorough (3-5 sentences minimum). ${strictMode ? 'STRICT MODE: Cite [Page X] for every single item.' : 'Always reference the source material explicitly.'}\n\nMEDICINE RULE — CRITICAL: Whenever any explanation, answer, flashcard, exam question, or clinical case involves a medication or drug, you MUST begin that explanation/answer/description by stating the brand name first, followed by the generic name in parentheses. Example: "Tylenol (acetaminophen)" or "Lipitor (atorvastatin)". If only the generic name is mentioned in the document, look it up from pharmacological knowledge and always present as: "BrandName (generic name) — [explanation]". This rule applies to ALL content types: flashcards, exams, clinical cases, summaries, and chat responses.`;
  const jsonSuffix = expectJson ? '\n\nRETURN ONLY RAW JSON. No markdown. No explanation. No backticks.' : '';
  const finalPrompt = prompt + jsonSuffix;

  if (provider === 'anthropic') {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...(apiKey ? { 'x-api-key': apiKey } : {}) },
      body: JSON.stringify({
        model: model || 'claude-sonnet-4-20250514', max_tokens: Math.min(maxTokens, 8192),
        system: sys, messages: [{ role: 'user', content: finalPrompt }]
      })
    });
    if (!r.ok) { const e = await r.json().catch(() => ({})); throw new Error(e.error?.message || r.statusText); }
    const d = await r.json(); return d.content[0].text.trim();
  }
  if (provider === 'gemini') {
    if (!apiKey) throw new Error('Gemini API key required.');
    const mdl = model || 'gemini-2.0-flash';
    const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${mdl}:generateContent?key=${apiKey}`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: sys }] },
        contents: [{ role: 'user', parts: [{ text: finalPrompt }] }],
        generationConfig: { maxOutputTokens: Math.min(maxTokens, 8192), temperature: strictMode ? 0 : 0.4 }
      })
    });
    if (!r.ok) { const e = await r.json().catch(() => ({})); throw new Error(e.error?.message || r.statusText); }
    const d = await r.json(); return d.candidates[0].content.parts[0].text.trim();
  }
  if (!apiKey) throw new Error('API key required — add it in Settings.');
  const base = (baseUrl || 'https://api.openai.com').replace(/\/$/, '');
  const r = await fetch(`${base}/v1/chat/completions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
    body: JSON.stringify({
      model: model || 'gpt-4o-mini',
      messages: [{ role: 'system', content: sys }, { role: 'user', content: finalPrompt }],
      max_tokens: Math.min(maxTokens, 8192), temperature: strictMode ? 0 : 0.4,
      ...(expectJson && provider === 'openai' ? { response_format: { type: 'json_object' } } : {})
    })
  });
  if (!r.ok) { const e = await r.json().catch(() => ({})); throw new Error(e.error?.message || r.statusText); }
  const d = await r.json(); return d.choices[0].message.content.trim();
};

const callAIWithVision = async (prompt, imageBase64, imageType, settings = {}, maxTokens = 4000) => {
  const { provider = 'anthropic', apiKey = '', model = '' } = settings;
  if (provider === 'anthropic') {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...(apiKey ? { 'x-api-key': apiKey } : {}) },
      body: JSON.stringify({
        model: model || 'claude-sonnet-4-20250514', max_tokens: Math.min(maxTokens, 8192),
        messages: [{
          role: 'user', content: [
            { type: 'image', source: { type: 'base64', media_type: imageType, data: imageBase64 } },
            { type: 'text', text: prompt }
          ]
        }]
      })
    });
    if (!r.ok) { const e = await r.json().catch(() => ({})); throw new Error(e.error?.message || r.statusText); }
    const d = await r.json(); return d.content[0].text.trim();
  }
  // Fallback for non-vision providers
  return callAI(`[Image file provided. Describe based on filename context]\n${prompt}`, false, false, settings, maxTokens);
};

const streamTextAsTyping = async (fullText, onChunk, speedMs = 12) => {
  const text = String(fullText || '');
  if (!text) { onChunk(''); return ''; }
  let rendered = '';
  let i = 0;
  while (i < text.length) {
    const chunkLen = text[i] === '\n' ? 1 : Math.max(2, Math.min(8, Math.floor(Math.random() * 6) + 2));
    rendered += text.slice(i, i + chunkLen);
    i += chunkLen;
    onChunk(rendered);
    await new Promise(r => setTimeout(r, speedMs));
  }
  return rendered;
};

/* ── Inline markdown → React elements (bold, italic, code) ── */
const renderMdInline = (text) => {
  if (!text) return [];
  const parts = [];
  const re = /\*\*\*(.+?)\*\*\*|\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+)`/g;
  let last = 0, k = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1]) parts.push(<b key={k++}><i>{m[1]}</i></b>);
    else if (m[2]) parts.push(<b key={k++}>{m[2]}</b>);
    else if (m[3]) parts.push(<i key={k++}>{m[3]}</i>);
    else if (m[4]) parts.push(<code key={k++} style={{ background: 'rgba(0,0,0,0.1)', padding: '1px 5px', borderRadius: 4, fontFamily: 'monospace', fontSize: '0.88em' }}>{m[4]}</code>);
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length ? parts : [text];
};

/* ── Block markdown → React elements ── */
const renderMarkdown = (text) => {
  if (!text) return null;
  const lines = text.replace(/\r\n/g, '\n').split('\n');
  const out = [];
  let listItems = [];
  let tableRows = [];
  let inCode = false;
  let codeLines = [];

  const flushList = () => {
    if (!listItems.length) return;
    out.push(<ul key={'ul' + out.length} style={{ paddingLeft: 18, margin: '4px 0', listStyle: 'disc' }}>{listItems.splice(0)}</ul>);
  };

  const flushTable = () => {
    if (!tableRows.length) return;
    const rows = tableRows.splice(0).filter(row => !row.every(c => /^[-: ]+$/.test(c)));
    if (!rows.length) return;
    const [headerCols, ...bodyRows] = rows;
    out.push(
      <div key={'tbl' + out.length} style={{ overflowX: 'auto', margin: '12px 0', borderRadius: 12, border: '1px solid rgba(99,102,241,0.18)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85em', tableLayout: 'auto', minWidth: 300 }}>
          <thead>
            <tr>{headerCols.map((c, i) =>
              <th key={i} style={{ background: 'rgba(99,102,241,0.08)', padding: '8px 12px', textAlign: 'left', fontWeight: 800, fontSize: '0.8em', color: 'var(--accent)', whiteSpace: 'nowrap', borderBottom: '1.5px solid rgba(99,102,241,0.2)' }}>{renderMdInline(c.trim())}</th>
            )}</tr>
          </thead>
          <tbody>
            {bodyRows.map((row, ri) =>
              <tr key={ri} style={{ background: ri % 2 === 0 ? 'transparent' : 'rgba(99,102,241,0.03)', borderBottom: '1px solid rgba(99,102,241,0.08)' }}>
                {row.map((c, ci) =>
                  <td key={ci} style={{ padding: '7px 12px', lineHeight: 1.5, verticalAlign: 'top', borderRight: ci < row.length - 1 ? '1px solid rgba(99,102,241,0.08)' : 'none' }}>{renderMdInline(c.trim())}</td>
                )}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };

  lines.forEach((line, idx) => {
    if (/^```/.test(line)) {
      if (!inCode) { flushList(); flushTable(); inCode = true; codeLines = []; }
      else {
        inCode = false;
        out.push(<pre key={'code' + idx} style={{ background: 'rgba(0,0,0,0.08)', borderRadius: 10, padding: '10px 14px', overflowX: 'auto', margin: '8px 0', fontSize: '0.82em', fontFamily: 'ui-monospace,Menlo,monospace', lineHeight: 1.55 }}><code>{codeLines.join('\n')}</code></pre>);
        codeLines = [];
      }
      return;
    }
    if (inCode) { codeLines.push(line); return; }
    const tl = line.trim();
    if (tl.startsWith('|') && tl.endsWith('|')) { flushList(); tableRows.push(tl.split('|').slice(1, -1)); return; }
    else if (tableRows.length) flushTable();
    const bq = line.match(/^> ?(.*)/);
    if (bq) { flushList(); out.push(<div key={idx} style={{ borderLeft: '3px solid var(--accent)', paddingLeft: 12, margin: '4px 0', opacity: 0.8, fontStyle: 'italic' }}>{renderMdInline(bq[1])}</div>); return; }
    const h3 = line.match(/^### (.+)$/); if (h3) { flushList(); out.push(<p key={idx} style={{ fontWeight: 800, margin: '12px 0 3px', fontSize: '1.0em' }}>{renderMdInline(h3[1])}</p>); return; }
    const h2 = line.match(/^## (.+)$/); if (h2) { flushList(); out.push(<p key={idx} style={{ fontWeight: 900, fontSize: '1.06em', margin: '14px 0 4px', borderBottom: '1px solid rgba(99,102,241,0.12)', paddingBottom: 3 }}>{renderMdInline(h2[1])}</p>); return; }
    const h1 = line.match(/^# (.+)$/); if (h1) { flushList(); out.push(<p key={idx} style={{ fontWeight: 900, fontSize: '1.15em', margin: '16px 0 5px' }}>{renderMdInline(h1[1])}</p>); return; }
    const li = line.match(/^\s*[-*+] (.+)$/) || line.match(/^\s*\d+\.\s+(.+)$/);
    if (li) { listItems.push(<li key={idx} style={{ marginBottom: 3, lineHeight: 1.55 }}>{renderMdInline(li[1])}</li>); return; }
    if (/^---+$/.test(tl)) { flushList(); out.push(<hr key={idx} style={{ border: 'none', borderTop: '1px solid rgba(99,102,241,0.15)', margin: '10px 0' }} />); return; }
    if (!tl) { flushList(); if (out.length) out.push(<div key={idx} style={{ height: 6 }} />); return; }
    flushList();
    out.push(<div key={idx} style={{ lineHeight: 1.65 }}>{renderMdInline(line)}</div>);
  });
  flushList();
  flushTable();
  return <>{out}</>;
};

const callAIStreaming = async (prompt, onChunk, settings = {}, maxTokens = 4000) => {
  const { provider = 'anthropic', apiKey = '', model = '' } = settings;
  if (provider !== 'anthropic') {
    const full = await callAI(prompt, false, false, settings, maxTokens);
    await streamTextAsTyping(full, onChunk, 10);
    return full;
  }
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...(apiKey ? { 'x-api-key': apiKey } : {}) },
    body: JSON.stringify({
      model: model || 'claude-sonnet-4-20250514', max_tokens: Math.min(maxTokens, 8192),
      stream: true, messages: [{ role: 'user', content: prompt }]
    })
  });
  if (!r.ok) { const e = await r.json().catch(() => ({})); throw new Error(e.error?.message || r.statusText); }
  const reader = r.body.getReader(); const decoder = new TextDecoder(); let text = '';
  while (true) {
    const { done, value } = await reader.read(); if (done) break;
    const lines = decoder.decode(value, { stream: true }).split('\n');
    for (const line of lines) {
      if (!line.startsWith('data: ')) continue;
      try {
        const d = JSON.parse(line.slice(6));
        if (d.type === 'content_block_delta' && d.delta?.type === 'text_delta') {
          text += d.delta.text; onChunk(text);
        }
      } catch { }
    }
  }
  return text;
};

/**
 * Safely parses a JSON string that may be wrapped in markdown code fences.
 * Throws a descriptive error if the content cannot be parsed.
 */
const parseJson = txt => {
  // Strip markdown fences and leading/trailing whitespace
  let cleaned = txt.replace(/```json/gi, '').replace(/```/g, '').trim();
  // Extract the outermost JSON object if there's preamble text
  const start = cleaned.indexOf('{');
  const end = cleaned.lastIndexOf('}');
  if (start !== -1 && end !== -1 && end > start) cleaned = cleaned.substring(start, end + 1);
  try {
    return JSON.parse(cleaned);
  } catch (err) {
    throw new Error(`AI response was not valid JSON. Raw text (first 200 chars): ${cleaned.substring(0, 200)}`);
  }
};

/**
 * Runs an array of async task-functions with bounded concurrency.
 * Uses Promise.allSettled so a failed batch does not abort the rest.
 * @param {Function[]} tasks - zero-arg functions returning Promises
 * @param {number} concurrency - max simultaneous requests
 * @param {Function} [onProgress] - called with (completed, total) after each batch
 */
const runParallel = async (tasks, concurrency = 10, onProgress) => {
  const results = [];
  for (let i = 0; i < tasks.length; i += concurrency) {
    const batch = tasks.slice(i, i + concurrency);
    const batchResults = await Promise.allSettled(batch.map(fn => fn()));
    results.push(...batchResults);
    if (onProgress) onProgress(Math.min(i + concurrency, tasks.length), tasks.length);
  }
  return results;
};

/* ═══════════════════════════════════════════════════════════════════
   PDF EXPORT ENGINE — generates printable PDFs via jsPDF
═══════════════════════════════════════════════════════════════════ */
const exportToPDF = async (type, data, title, addToast) => {
  try {
    const lib = await loadJsPDF();
    const jsPDF = lib.jspdf?.jsPDF || lib.jsPDF || window.jspdf?.jsPDF;
    if (!jsPDF) throw new Error('jsPDF failed to load.');
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const pageW = 210, pageH = 297, margin = 15, colW = pageW - margin * 2;
    let y = margin;

    const checkPage = (needed = 12) => { if (y + needed > pageH - margin) { doc.addPage(); y = margin; } };
    const drawLine = () => { doc.setDrawColor(200, 200, 200); doc.line(margin, y, pageW - margin, y); y += 4; };

    // Header
    doc.setFillColor(99, 102, 241); doc.rect(0, 0, pageW, 18, 'F');
    doc.setTextColor(255, 255, 255); doc.setFontSize(14); doc.setFont('helvetica', 'bold');
    doc.text('MARIAM PRO', margin, 11);
    doc.setFontSize(9); doc.setFont('helvetica', 'normal');
    doc.text(`${type.toUpperCase()} · ${title}`, margin + 40, 11);
    doc.text(`Generated ${new Date().toLocaleDateString()}`, pageW - margin - 35, 11);
    y = 24;

    doc.setTextColor(30, 30, 30);

    if (type === 'flashcards') {
      data.forEach((card, i) => {
        checkPage(28);
        doc.setFillColor(248, 250, 252); doc.roundedRect(margin, y, colW, 24, 2, 2, 'F');
        doc.setFont('helvetica', 'bold'); doc.setFontSize(9); doc.setTextColor(99, 102, 241);
        doc.text(`Q${i + 1}`, margin + 3, y + 6);
        doc.setTextColor(30, 30, 30); doc.setFont('helvetica', 'normal'); doc.setFontSize(9);
        const qLines = doc.splitTextToSize(card.q || '', colW - 12);
        doc.text(qLines, margin + 10, y + 6);
        const qH = Math.min(qLines.length * 4.5, 14);
        doc.setFillColor(238, 240, 255); doc.roundedRect(margin + 2, y + qH + 2, colW - 4, 10, 1, 1, 'F');
        doc.setTextColor(79, 70, 229); doc.setFontSize(8.5);
        const aLines = doc.splitTextToSize(card.a || '', colW - 10);
        doc.text(aLines.slice(0, 2), margin + 5, y + qH + 7);
        y += 28; doc.setTextColor(30, 30, 30);
      });
    } else if (type === 'exam') {
      data.forEach((q, i) => {
        const opts = q.options || [];
        const needed = 22 + opts.length * 7 + (q.explanation ? 12 : 0);
        checkPage(needed);
        doc.setFont('helvetica', 'bold'); doc.setFontSize(9.5); doc.setTextColor(30, 30, 30);
        const qLines = doc.splitTextToSize(`Q${i + 1}. ${q.q || q.question || ''}`, colW);
        doc.text(qLines, margin, y); y += qLines.length * 5 + 3;
        opts.forEach((opt, oi) => {
          const isCorrect = oi === q.correct;
          if (isCorrect) { doc.setFillColor(220, 252, 231); doc.roundedRect(margin, y - 3.5, colW, 6.5, 1, 1, 'F'); }
          doc.setFont('helvetica', isCorrect ? 'bold' : 'normal');
          doc.setFontSize(8.5);
          doc.setTextColor(isCorrect ? 22 : 80, isCorrect ? 163 : 80, isCorrect ? 74 : 80);
          doc.text(`${String.fromCharCode(65 + oi)}. ${opt}`, margin + 3, y);
          if (isCorrect) { doc.setTextColor(22, 163, 74); doc.text('✓', pageW - margin - 5, y); }
          y += 6.5;
        });
        if (q.explanation) {
          checkPage(12);
          doc.setFillColor(254, 252, 232); doc.roundedRect(margin, y, colW, 10, 1, 1, 'F');
          doc.setFont('helvetica', 'italic'); doc.setFontSize(7.5); doc.setTextColor(120, 100, 20);
          const expLines = doc.splitTextToSize(q.explanation, colW - 6);
          doc.text(expLines.slice(0, 2), margin + 3, y + 4); y += 12;
        }
        drawLine(); y += 2;
        doc.setTextColor(30, 30, 30);
      });
    } else if (type === 'cases') {
      data.forEach((cas, i) => {
        checkPage(40);
        const q = cas.examQuestion || cas;
        doc.setFillColor(240, 249, 255); doc.roundedRect(margin, y, colW, 8, 2, 2, 'F');
        doc.setFont('helvetica', 'bold'); doc.setFontSize(10); doc.setTextColor(14, 116, 144);
        doc.text(`Case ${i + 1}: ${cas.title || 'Clinical Case'}`, margin + 3, y + 5.5); y += 11;
        doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5); doc.setTextColor(30, 30, 30);
        const vigLines = doc.splitTextToSize(cas.vignette || '', colW);
        doc.text(vigLines.slice(0, 6), margin, y); y += Math.min(vigLines.length, 6) * 4.5 + 5;
        if (cas.diagnosis) {
          doc.setFont('helvetica', 'bold'); doc.setFontSize(8.5); doc.setTextColor(16, 185, 129);
          doc.text(`Dx: ${cas.diagnosis}`, margin, y); y += 6;
        }
        const opts = q.options || [];
        opts.forEach((opt, oi) => {
          const isCorrect = oi === q.correct;
          doc.setFont('helvetica', isCorrect ? 'bold' : 'normal'); doc.setFontSize(8.5);
          doc.setTextColor(isCorrect ? 22 : 80, isCorrect ? 163 : 80, isCorrect ? 74 : 80);
          doc.text(`${String.fromCharCode(65 + oi)}. ${opt}`, margin + 3, y); y += 6;
        });
        drawLine(); y += 3; doc.setTextColor(30, 30, 30);
      });
    }

    // Footer on each page
    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i); doc.setFontSize(7); doc.setTextColor(160, 160, 160);
      doc.text(`MARIAM PRO · ${title}`, margin, pageH - 6);
      doc.text(`Page ${i} of ${totalPages}`, pageW - margin - 18, pageH - 6);
    }

    doc.save(`${title.replace(/[^a-zA-Z0-9]/g, '_')}_${type}.pdf`);
    if (addToast) addToast('PDF exported! 📄', 'success');
  } catch (e) {
    console.error('PDF export error:', e);
    if (addToast) addToast(`PDF export failed: ${e.message}`, 'error');
  }
};

/* ═══════════════════════════════════════════════════════════════════
   STUDY ANALYTICS — track sessions, streaks, scores
   Stored in window to survive view changes
═══════════════════════════════════════════════════════════════════ */
if (!window.__MARIAM_ANALYTICS__) window.__MARIAM_ANALYTICS__ = {
  sessions: [], streak: 0, lastStudy: null, totalCards: 0, totalExams: 0, scores: []
};
const ANALYTICS = window.__MARIAM_ANALYTICS__;
const trackStudy = (type, score, total) => {
  const today = new Date().toDateString();
  if (ANALYTICS.lastStudy !== today) {
    ANALYTICS.streak = (ANALYTICS.lastStudy === new Date(Date.now() - 86400000).toDateString()) ? ANALYTICS.streak + 1 : 1;
    ANALYTICS.lastStudy = today;
  }
  if (type === 'flashcard') ANALYTICS.totalCards++;
  if (type === 'exam' && score !== undefined) ANALYTICS.scores.push({ date: Date.now(), score, total, pct: Math.round(score / total * 100) });
  ANALYTICS.sessions.push({ type, date: Date.now() });
  if (ANALYTICS.sessions.length > 500) ANALYTICS.sessions = ANALYTICS.sessions.slice(-500);
};

/* ═══════════════════════════════════════════════════════════════════
   KEYBOARD SHORTCUTS HOOK
═══════════════════════════════════════════════════════════════════ */
function useKeyboardShortcuts(shortcuts) {
  useEffect(() => {
    const handler = e => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      for (const [combo, fn] of shortcuts) {
        const parts = combo.toLowerCase().split('+');
        const key = parts[parts.length - 1];
        const ctrl = parts.includes('ctrl');
        const meta = parts.includes('meta');
        const alt = parts.includes('alt');
        if (e.key.toLowerCase() === key &&
          (ctrl ? (e.ctrlKey || e.metaKey) : !e.ctrlKey) &&
          (alt ? e.altKey : !e.altKey)) {
          e.preventDefault(); fn(); break;
        }
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [shortcuts]);
}

/* ═══════════════════════════════════════════════════════════════════
   GLOBAL SEARCH — searches across all content
═══════════════════════════════════════════════════════════════════ */
function GlobalSearch({ docs, flashcards, exams, cases, notes, onNavigate, onClose }) {
  const [q, setQ] = useState(''); const inputRef = useRef(null);
  useEffect(() => { inputRef.current?.focus(); }, []);

  const results = useMemo(() => {
    if (!q.trim() || q.length < 2) return [];
    const lq = q.toLowerCase(); const out = [];
    docs.forEach(d => { if (d.name.toLowerCase().includes(lq)) out.push({ type: 'doc', icon: FileText, label: d.name, sub: `${d.totalPages} pages`, color: '#6366f1', action: () => onNavigate('reader', d.id) }); });
    flashcards.forEach(set => set.cards?.forEach(c => { if ((c.q + c.a).toLowerCase().includes(lq)) out.push({ type: 'card', icon: Layers, label: c.q.slice(0, 60), sub: set.title, color: '#8b5cf6', action: () => onNavigate('flashcards') }); }));
    exams.forEach(ex => ex.questions?.forEach(q2 => { if ((q2.q || '').toLowerCase().includes(lq)) out.push({ type: 'exam', icon: CheckSquare, label: (q2.q || '').slice(0, 60), sub: ex.title, color: '#3b82f6', action: () => onNavigate('exams') }); }));
    cases.forEach(set => set.questions?.forEach(c => { if ((c.vignette || '').toLowerCase().includes(lq)) out.push({ type: 'case', icon: Activity, label: (c.title || c.vignette || '').slice(0, 60), sub: set.title, color: '#06b6d4', action: () => onNavigate('cases') }); }));
    notes.forEach(n => { if ((n.title + n.content).toLowerCase().includes(lq)) out.push({ type: 'note', icon: PenLine, label: n.title, sub: n.content?.slice(0, 50), color: '#f59e0b', action: () => onNavigate('library') }); });
    return out.slice(0, 12);
  }, [q, docs, flashcards, exams, cases, notes]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-16 px-4"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}>
      <div className="w-full max-w-2xl glass rounded-3xl shadow-2xl overflow-hidden animate-slide-up border border-[var(--accent)]/30"
        onClick={e => e.stopPropagation()}>
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[color:var(--border2,var(--border))]">
          <Search size={20} className="text-[var(--accent)] shrink-0" />
          <input ref={inputRef} value={q} onChange={e => setQ(e.target.value)}
            placeholder="Search everything — documents, cards, questions, cases, notes…"
            className="flex-1 bg-transparent text-sm outline-none font-medium placeholder:opacity-40 text-[var(--text)]" />
          <kbd className="text-xs font-black opacity-30 px-2 py-1 glass rounded-lg">ESC</kbd>
          <button onClick={onClose} className="opacity-40 hover:opacity-80"><X size={18} /></button>
        </div>
        {q.length >= 2 && (
          <div className="max-h-96 overflow-y-auto custom-scrollbar">
            {results.length === 0 ? (
              <div className="py-12 text-center opacity-40">
                <Search size={32} className="mx-auto mb-3" />
                <p className="text-sm font-bold">No results for "{q}"</p>
              </div>
            ) : results.map((r, i) => (
              <button key={i} onClick={() => { r.action(); onClose(); }}
                className="w-full flex items-center gap-4 px-5 py-3.5 hover:bg-[var(--accent)]/5 transition-colors text-left border-b border-[color:var(--border2,var(--border))]/50 last:border-0">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: r.color + '20' }}>
                  <r.icon size={16} style={{ color: r.color }} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold truncate">{r.label}</p>
                  <p className="text-xs opacity-50 truncate">{r.sub}</p>
                </div>
                <span className="text-xs font-black uppercase tracking-widest opacity-30 px-2 py-1 glass rounded-lg shrink-0">{r.type}</span>
              </button>
            ))}
          </div>
        )}
        {!q && (
          <div className="p-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[['Documents', 'doc', FileText, '#6366f1'], ['Flashcards', 'flashcards', Layers, '#8b5cf6'], ['Exams', 'exams', CheckSquare, '#3b82f6'], ['Cases', 'cases', Activity, '#06b6d4'], ['Encyclopedia', 'encyclopedia', Globe, '#f59e0b']].map(([lbl, v, Icon, col]) => (
              <button key={v} onClick={() => { onNavigate(v); onClose(); }}
                className="glass rounded-2xl p-3 flex flex-col items-center gap-2 hover:border-[var(--accent)]/30 transition-all">
                <Icon size={20} style={{ color: col }} />
                <span className="text-xs font-black">{lbl}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   DASHBOARD VIEW — stats, streaks, recent activity, quick actions
═══════════════════════════════════════════════════════════════════ */
function DashboardView({ docs, flashcards, exams, cases, notes, chatSessions, setView, setActiveId, addToast, settings }) {
  const totalCards = flashcards.reduce((s, f) => s + (f.cards?.length || 0), 0);
  const totalQ = exams.reduce((s, e) => s + (e.questions?.length || 0), 0);
  const totalCases = cases.reduce((s, c) => s + (c.questions?.length || 0), 0);
  const dueCards = flashcards.reduce((s, f) => s + (f.cards?.filter(c => c.nextReview <= Date.now()).length || 0), 0);
  const recentScores = ANALYTICS.scores.slice(-7);
  const avgScore = recentScores.length ? Math.round(recentScores.reduce((s, r) => s + r.pct, 0) / recentScores.length) : 0;
  const streak = ANALYTICS.streak || 0;

  const STAT_CARDS = [
    { label: 'Documents', value: docs.length, icon: FileText, color: '#6366f1', sub: 'uploaded' },
    { label: 'Flashcards', value: totalCards, icon: Layers, color: '#8b5cf6', sub: `${dueCards} due today`, urgent: dueCards > 0 },
    { label: 'Exam Qs', value: totalQ, icon: CheckSquare, color: '#3b82f6', sub: `${exams.length} exams` },
    { label: 'Cases', value: totalCases, icon: Activity, color: '#06b6d4', sub: `${cases.length} sets` },
    { label: 'Notes', value: notes.length, icon: PenLine, color: '#f59e0b', sub: 'saved' },
    { label: 'Study Streak', value: streak, icon: Flame, color: '#ef4444', sub: 'days 🔥', urgent: streak >= 3 },
  ];

  const recentDocs = docs.slice(-4).reverse();
  const bgTaskList = Object.values(window.__MARIAM_BG__?.tasks || {});

  return (
    <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar scroll-content" style={{ touchAction: "pan-y", WebkitOverflowScrolling: "touch" }}>
      <div className="max-w-6xl mx-auto p-5 lg:p-8 space-y-6">

        {/* ── HERO ── */}
        <div className="flex items-start justify-between gap-4 animate-slide-in">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="badge text-xs">
                {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
              </span>
              {streak >= 3 && <span className="badge" style={{ color: '#f59e0b', borderColor: 'rgba(245,158,11,.3)', background: 'rgba(245,158,11,.1)' }}>🔥 {streak} day streak</span>}
            </div>
            <h1 className="text-3xl lg:text-4xl font-black leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--accent-soft)]" style={{ fontFamily: 'Plus Jakarta Sans,system-ui', color: 'var(--text)' }}>
              {new Date().getHours() < 12 ? 'Good morning ☀️' : new Date().getHours() < 17 ? 'Good afternoon 🌤' : 'Good evening 🌙'} 👋
            </h1>
            <p className="text-base mt-1 font-medium" style={{ color: 'var(--text2)' }}>
              {docs.length === 0 ? 'Upload a document to get started' : 'Your AI-powered study command center'}
            </p>
          </div>
          <div className="relative shrink-0 hidden sm:block">
            <img src={MARIAM_IMG} alt="" className="w-16 h-16 rounded-2xl object-cover"
              style={{ boxShadow: '0 0 0 3px rgba(var(--acc-rgb,99,102,241),.25),0 8px 24px rgba(0,0,0,.3)' }} />
          </div>
        </div>

        {/* ── STAT CARDS ── */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-3">
          {STAT_CARDS.map(({ label, value, icon: Icon, color, sub, urgent }, i) => (
            <div key={label}
              className={`card-lined rounded-2xl p-4 cursor-default animate-slide-up stagger-${Math.min(i + 1, 6)}`}
              style={urgent ? { borderTopColor: color + '99' } : {}}>
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: color + '18' }}>
                  <Icon size={17} style={{ color }} />
                </div>
                {urgent && <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: color }} />}
              </div>
              <p className="text-3xl lg:text-4xl font-black leading-none" style={{ color, fontFamily: 'Plus Jakarta Sans,system-ui' }}>{value}</p>
              <p className="text-xs font-black uppercase tracking-widest mt-1.5" style={{ color: 'var(--text3)', fontSize: 10 }}>{label}</p>
              <p className="text-xs mt-0.5 font-medium" style={{ color: 'var(--text3)' }}>{sub}</p>
            </div>
          ))}
        </div>

        {/* ── BG TASKS ── */}
        {bgTaskList.filter(t => t.status === 'running' || t.status === 'done').length > 0 && (
          <div className="card-lined rounded-2xl p-5 animate-fade-in" style={{ borderTopColor: 'rgba(var(--acc-rgb,99,102,241),.4)' }}>
            <h2 className="text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2" style={{ color: 'var(--text3)' }}>
              <Zap size={13} style={{ color: 'var(--accent)' }} /> Active Generation
            </h2>
            <div className="space-y-2.5">
              {bgTaskList.map((t, i) => (
                <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl border transition-all"
                  style={t.status === 'done' ? { borderColor: 'rgba(16,185,129,.3)', background: 'rgba(16,185,129,.05)' } : { borderColor: 'var(--border2,var(--border))', background: 'var(--surface2,var(--card))' }}>
                  {t.status === 'running' ? <Loader2 size={14} className="animate-spin shrink-0" style={{ color: 'var(--accent)' }} /> : <CheckCircle2 size={14} className="shrink-0" style={{ color: '#10b981' }} />}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold truncate capitalize">{t.type} · {t.docName?.slice(0, 28)}</p>
                    {t.status === 'running' && t.total > 1 && (
                      <div className="mt-1.5 h-1 rounded-full overflow-hidden" style={{ background: 'var(--border2,var(--border))' }}>
                        <div className="h-full rounded-full transition-all duration-500" style={{ width: `${((t.done || 0) / t.total) * 100}%`, background: 'linear-gradient(90deg,var(--accent),var(--accent2,var(--accent)))' }} />
                      </div>
                    )}
                    {t.status === 'done' && <p className="text-xs mt-0.5" style={{ color: 'var(--text3)' }}>{t.result?.count} items ready</p>}
                  </div>
                  <span className="text-xs font-black px-2.5 py-1 rounded-lg"
                    style={t.status === 'done' ? { background: 'rgba(16,185,129,.15)', color: '#10b981' } : { background: 'rgba(var(--acc-rgb,99,102,241),.12)', color: 'var(--accent)' }}>
                    {t.status === 'done' ? 'Done' : 'Running'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">

          {/* Recent Docs */}
          <div className="card-lined rounded-2xl p-5 lg:col-span-3 animate-slide-up stagger-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xs font-black uppercase tracking-widest flex items-center gap-2" style={{ color: 'var(--text3)' }}>
                <History size={13} style={{ color: 'var(--accent)' }} /> Recent Documents
              </h2>
              <button onClick={() => setView('library')} className="text-xs font-bold transition-all" style={{ color: 'var(--accent)', opacity: .7 }}>View all →</button>
            </div>
            {recentDocs.length === 0 ? (
              <div className="flex flex-col items-center py-10 gap-3">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(var(--acc-rgb,99,102,241),.08)', border: '1px solid rgba(var(--acc-rgb,99,102,241),.15)' }}>
                  <FileText size={22} style={{ color: 'var(--accent)', opacity: .5 }} />
                </div>
                <p className="text-sm font-bold" style={{ color: 'var(--text3)' }}>No documents yet</p>
                <button onClick={() => setView('library')} className="btn-accent px-4 py-2 rounded-xl text-sm font-black">Upload Document</button>
              </div>
            ) : recentDocs.map((doc, i) => (
              <button key={doc.id} onClick={() => { setActiveId(doc.id); setView('reader'); }}
                className="w-full flex items-center gap-3.5 p-3 rounded-xl transition-all group hover:bg-[rgba(var(--acc-rgb,99,102,241),0.05)] mb-1">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white text-sm font-black"
                  style={{ background: `linear-gradient(135deg,var(--accent),var(--accent2,var(--accent)))` }}>
                  {doc.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <p className="text-sm font-semibold truncate" style={{ color: 'var(--text)' }}>{doc.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text3)' }}>{doc.totalPages} pages · {new Date(doc.addedAt || 0).toLocaleDateString()}</p>
                </div>
                <ChevronRight size={14} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--accent)' }} />
              </button>
            ))}
          </div>

          {/* Right col */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            {/* Study Stats */}
            <div className="card-lined rounded-2xl p-5 animate-slide-up stagger-3">
              <h2 className="text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2" style={{ color: 'var(--text3)' }}>
                <BarChart size={13} style={{ color: 'var(--accent)' }} /> Study Progress
              </h2>
              {[
                { label: 'Avg Score', val: `${avgScore}%`, pct: avgScore, color: '#818cf8' },
                { label: 'Cards Studied', val: ANALYTICS.totalCards, pct: Math.min(100, Math.round((ANALYTICS.totalCards / Math.max(1, totalCards)) * 100)), color: '#a78bfa' },
                { label: 'Due Cards', val: dueCards, pct: Math.min(100, Math.round((dueCards / Math.max(1, totalCards)) * 100)), color: dueCards > 0 ? '#f43f5e' : '#10b981' },
              ].map(({ label, val, pct, color }) => (
                <div key={label} className="mb-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs font-medium" style={{ color: 'var(--text2)' }}>{label}</span>
                    <span className="text-xs font-black" style={{ color }}>{val}</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--border2,var(--border))' }}>
                    <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${pct}%`, background: color }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="card-lined rounded-2xl p-5 animate-slide-up stagger-4">
              <h2 className="text-xs font-black uppercase tracking-widest mb-3 flex items-center gap-2" style={{ color: 'var(--text3)' }}>
                <Zap size={13} style={{ color: 'var(--accent)' }} /> Quick Actions
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { lbl: 'Study Cards', Icon: Layers, v: 'flashcards', col: '#a78bfa' },
                  { lbl: 'Take Exam', Icon: CheckSquare, v: 'exams', col: '#818cf8' },
                  { lbl: 'Cases', Icon: Activity, v: 'cases', col: '#22d3ee' },
                  { lbl: 'AI Chat', Icon: MessageSquare, v: 'chat', col: '#34d399' },
                ].map(({ lbl, Icon, v, col }) => (
                  <button key={v} onClick={() => setView(v)}
                    className="flex flex-col items-start gap-2 p-3.5 rounded-xl card-hover transition-all"
                    style={{ background: 'var(--surface2,var(--card))', border: '1px solid var(--border2,var(--border))' }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: col + '18' }}>
                      <Icon size={16} style={{ color: col }} />
                    </div>
                    <span className="text-xs font-black" style={{ color: 'var(--text)' }}>{lbl}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Scores Chart */}
        {recentScores.length > 0 && (
          <div className="card-lined rounded-2xl p-5 animate-slide-up stagger-5">
            <h2 className="text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2" style={{ color: 'var(--text3)' }}>
              <TrendingUp size={13} style={{ color: 'var(--accent)' }} /> Exam Score History
            </h2>
            <div className="flex items-end gap-2" style={{ height: 80 }}>
              {recentScores.map((s, i) => {
                const col = s.pct >= 80 ? '#10b981' : s.pct >= 60 ? '#f59e0b' : '#f43f5e';
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <span className="text-xs font-black" style={{ color: col, fontSize: 10 }}>{s.pct}%</span>
                    <div className="w-full rounded-t-lg relative overflow-hidden"
                      style={{ height: `${Math.max(4, s.pct * .7)}px`, background: `${col}22`, border: `1px solid ${col}44` }}>
                      <div className="absolute inset-x-0 bottom-0" style={{ height: '60%', background: `${col}88` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   BACKGROUND TASKS
   Tasks survive page navigation, component unmounts, and even if the
   user switches views mid-generation. Uses module-level storage so
   React state lifecycle doesn't kill ongoing fetch chains.
═══════════════════════════════════════════════════════════════════ */
if (!window.__MARIAM_BG__) window.__MARIAM_BG__ = { tasks: {}, listeners: new Set() };

const BG = window.__MARIAM_BG__;

const bgEmit = () => BG.listeners.forEach(fn => fn({ ...BG.tasks }));

const bgStart = (id, meta) => { BG.tasks[id] = { ...meta, startedAt: Date.now(), status: 'running' }; bgEmit(); };
const bgUpdate = (id, patch) => { if (BG.tasks[id]) { BG.tasks[id] = { ...BG.tasks[id], ...patch }; bgEmit(); } };
const bgFinish = (id, result) => { if (BG.tasks[id]) { BG.tasks[id] = { ...BG.tasks[id], status: 'done', result, finishedAt: Date.now() }; bgEmit(); } };
const bgFail = (id, err) => { if (BG.tasks[id]) { BG.tasks[id] = { ...BG.tasks[id], status: 'error', error: err }; bgEmit(); } };
const bgClear = (id) => { delete BG.tasks[id]; bgEmit(); };

function useBgTasks() {
  const [tasks, setTasks] = useState({ ...BG.tasks });
  useEffect(() => {
    const fn = t => setTasks({ ...t });
    BG.listeners.add(fn);
    return () => BG.listeners.delete(fn);
  }, []);
  return tasks;
}

/**
 * Run a generation task fully in the background.
 * Calls startGen-style logic but stores progress in the BG registry
 * so it persists regardless of which page the user is on.
 */
const runBgGeneration = async ({ taskId, docId, docName, taskType, startPage, endPage, count, difficultyLevel, targetLang, settings, onSave }) => {
  const batchSize = 40;
  const isBatch = count > batchSize && ['flashcards', 'exam', 'cases'].includes(taskType);
  const numBatches = isBatch ? Math.ceil(count / batchSize) : 1;

  bgStart(taskId, { type: taskType, docName, msg: 'Loading document…', done: 0, total: numBatches });

  try {
    const fileData = await getFile(docId);
    if (!fileData) throw new Error('Document not found in storage.');

    const pageRange = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    const textChunks = pageRange.map(p => (fileData.pagesText?.[p] || '')).filter(Boolean);
    const fullText = textChunks.join('\n\n').substring(0, 80000);

    if (!fullText.trim()) throw new Error('No text could be extracted from the selected page range.');

    bgUpdate(taskId, { msg: 'Generating…', done: 0, total: numBatches });

    const MEDICINE_RULE = `\n\nMEDICINE RULE — MANDATORY: For every medication/drug mentioned in any question, answer, explanation, or vignette, ALWAYS write the brand name first followed by generic name in parentheses. Format: "BrandName (generic)" e.g. "Lasix (furosemide)", "Tylenol (acetaminophen)", "Glucophage (metformin)". Apply this rule to EVERY drug in EVERY item.`;

    const makePrompt = (bc) => {
      const base = `DOCUMENT: "${docName}" | Pages ${startPage}-${endPage}\n\nDOCUMENT CONTENT (generate ONLY from this):\n${fullText}\n\nDIFFICULTY: ${difficultyLevel}${MEDICINE_RULE}\n\n`;
      if (taskType === 'flashcards') return `${base}YOU MUST generate EXACTLY ${bc} flashcards — no more, no fewer. Count carefully before responding. Use ONLY topics from the document above. Each question must be a complete, multi-sentence clinical/academic question. Answers must be comprehensive (3-5 sentences). RETURN JSON ONLY — the "items" array MUST contain EXACTLY ${bc} objects: {"items":[{"q":"detailed question","a":"comprehensive answer","evidence":"exact quote","sourcePage":1}]}`;
      if (taskType === 'exam') return `${base}YOU MUST generate EXACTLY ${bc} MCQ questions — no more, no fewer. Count carefully before responding. Use ONLY content from the document. Each stem must be 2-4 sentences. All 4 options must be plausible. Explanation must be 3-5 sentences. RETURN JSON ONLY — the "items" array MUST contain EXACTLY ${bc} objects: {"items":[{"q":"detailed question stem","options":["A. option","B. option","C. option","D. option"],"correct":0,"explanation":"thorough explanation","evidence":"exact quote","sourcePage":1}]}`;
      if (taskType === 'cases') return `${base}YOU MUST generate EXACTLY ${bc} clinical cases — no more, no fewer. Count carefully. Use ONLY document content. Each case needs: vignette (8-12 sentences with demographics/HPI/PMH/meds/vitals/exam), 3 lab panels (12+ total rows), examQuestion with 5 options (A-E). RETURN JSON ONLY — the "items" array MUST contain EXACTLY ${bc} objects: {"items":[{"vignette":"8-12 sentence case","title":"title","diagnosis":"diagnosis","labPanels":[{"panelName":"COMPLETE BLOOD COUNT","rows":[{"test":"WBC","result":"value","flag":"H","range":"4.5-11.0","units":"K/uL"},{"test":"Hgb","result":"value","flag":"","range":"12-16","units":"g/dL"},{"test":"Hct","result":"value","flag":"","range":"36-46","units":"%"},{"test":"Platelets","result":"value","flag":"","range":"150-400","units":"K/uL"},{"test":"MCV","result":"value","flag":"","range":"80-100","units":"fL"}]},{"panelName":"BASIC METABOLIC PANEL","rows":[{"test":"Sodium","result":"value","flag":"","range":"135-145","units":"mEq/L"},{"test":"Potassium","result":"value","flag":"","range":"3.5-5.0","units":"mEq/L"},{"test":"Creatinine","result":"value","flag":"","range":"0.6-1.2","units":"mg/dL"},{"test":"BUN","result":"value","flag":"","range":"7-20","units":"mg/dL"},{"test":"Glucose","result":"value","flag":"","range":"70-100","units":"mg/dL"}]},{"panelName":"DISEASE-SPECIFIC PANEL","rows":[{"test":"test1","result":"value","flag":"H","range":"ref","units":"u"},{"test":"test2","result":"value","flag":"L","range":"ref","units":"u"},{"test":"test3","result":"value","flag":"","range":"ref","units":"u"},{"test":"test4","result":"value","flag":"","range":"ref","units":"u"}]}],"examQuestion":{"q":"2-3 sentence question","options":["A) opt","B) opt","C) opt","D) opt","E) opt"],"correct":0,"explanation":"4-6 sentence explanation"}}]}`;
      return `${base}Analyze this content comprehensively using only the document provided.`;
    };

    const isJson = ['flashcards', 'exam', 'cases'].includes(taskType);
    const tasks = Array.from({ length: numBatches }, (_, i) => {
      // Calculate exact batch size: last batch gets the remainder, all others get batchSize
      const bc = i === numBatches - 1 ? (count % batchSize === 0 ? batchSize : count % batchSize) : batchSize;
      return () => callAI(makePrompt(bc), isJson, false, settings, 8000);
    });

    let all = [];
    const results = await runParallel(tasks, 50, (done, total) => {
      bgUpdate(taskId, { done, total, msg: `${done}/${total} batches complete…` });
    });

    for (const r of results) {
      if (r.status === 'fulfilled') {
        try {
          const p = parseJson(r.value);
          all = [...all, ...(p.items || p.cases || p.questions || p.flashcards || [])];
        } catch (e) { console.warn('BG parse err:', e.message); }
      }
    }
    if (!all.length) throw new Error('AI returned no parseable data. Try again with a different page range.');

    const finalData = all.slice(0, count);
    bgFinish(taskId, { type: taskType, data: finalData, pages: `${startPage}-${endPage}`, docName, count: finalData.length });
    if (onSave) onSave(finalData, taskId);
  } catch (e) {
    bgFail(taskId, e.message || String(e));
  }
};

/* ═══════════════════════════════════════════════════════════════════
   GLOBAL TASK INDICATOR — floating pill visible on all pages
═══════════════════════════════════════════════════════════════════ */
function GlobalTaskIndicator({ onViewResult }) {
  const tasks = useBgTasks();
  const list = Object.entries(tasks);
  if (!list.length) return null;
  const running = list.filter(([, t]) => t.status === 'running');
  const done = list.filter(([, t]) => t.status === 'done');
  const errors = list.filter(([, t]) => t.status === 'error');
  return (
    <div className="fixed bottom-20 lg:bottom-6 right-3 z-[9990] flex flex-col gap-2 items-end pointer-events-none" style={{ maxWidth: 320 }}>
      {running.map(([id, t]) => (
        <div key={id} className="pointer-events-auto glass rounded-2xl px-4 py-3 shadow-2xl border border-[var(--accent)]/30 flex items-center gap-3 animate-slide-in" style={{ background: 'var(--card)' }}>
          <div className="w-8 h-8 rounded-xl bg-[var(--accent)]/15 flex items-center justify-center shrink-0">
            <Loader2 size={15} className="text-[var(--accent)] animate-spin" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-widest text-[var(--accent)] truncate">{t.type} · {t.docName?.slice(0, 22) || '…'}</p>
            <p className="text-xs opacity-50 font-bold">{t.msg || 'Generating…'}</p>
            {t.total > 1 && (
              <div className="mt-1 w-32 h-1 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[var(--accent)] rounded-full transition-all duration-500" style={{ width: `${t.total ? ((t.done || 0) / t.total) * 100 : 10}%` }} />
              </div>
            )}
          </div>
        </div>
      ))}
      {done.map(([id, t]) => (
        <div key={id} className="pointer-events-auto glass rounded-2xl px-4 py-3 shadow-2xl border border-emerald-500/30 flex items-center gap-3 animate-slide-in cursor-pointer hover:border-emerald-500/60 transition-colors"
          onClick={() => onViewResult && onViewResult(id, t)}>
          <div className="w-8 h-8 rounded-xl bg-emerald-500/15 flex items-center justify-center shrink-0">
            <CheckCircle2 size={15} className="text-emerald-500" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-500">{t.type} ready!</p>
            <p className="text-xs opacity-50 font-bold">{t.result?.count || 0} items · {t.docName?.slice(0, 20) || '…'} · tap to save</p>
          </div>
          <button onClick={e => { e.stopPropagation(); bgClear(id); }} className="text-xs opacity-40 hover:opacity-80 ml-1 shrink-0"><X size={16} /></button>
        </div>
      ))}
      {errors.map(([id, t]) => (
        <div key={id} className="pointer-events-auto glass rounded-2xl px-4 py-3 shadow-2xl border border-red-500/30 flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-red-500/15 flex items-center justify-center shrink-0">
            <AlertCircle size={18} className="text-red-500" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-black uppercase tracking-widest text-red-500">Failed</p>
            <p className="text-xs opacity-50 font-bold truncate">{t.error?.slice(0, 40) || 'Unknown error'}</p>
          </div>
          <button onClick={() => bgClear(id)} className="text-xs opacity-40 hover:opacity-80 ml-1 shrink-0"><X size={16} /></button>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   RANDOM MEDICAL TOPICS BANK — used by all generate modals
═══════════════════════════════════════════════════════════════════ */
const MEDICAL_RANDOM_TOPICS = [
  'Acetaminophen (Tylenol) toxicity: mechanisms, NAC protocol, and liver failure',
  'Hypertension: JNC-8 classification, lifestyle and pharmacotherapy',
  'Type 2 diabetes mellitus: glycemic targets and stepwise drug therapy',
  'Acute STEMI: reperfusion, antiplatelet, and anticoagulation management',
  'Heart failure with reduced ejection fraction: GDMT and device therapy',
  'COPD: GOLD staging, bronchodilators, and exacerbation management',
  'Community-acquired pneumonia: CURB-65, pathogens, and antibiotics',
  'Sepsis and septic shock: Surviving Sepsis Campaign bundle',
  'Ischemic stroke: tPA eligibility, thrombectomy, and secondary prevention',
  'Atrial fibrillation: CHA₂DS₂-VASc, rate vs rhythm, and anticoagulation',
  'DVT and pulmonary embolism: Wells score, DOAC therapy, thrombolytics',
  'Acute kidney injury: KDIGO staging, causes (prerenal/intrinsic/postrenal), management',
  'Chronic kidney disease: GFR staging, progression prevention, dialysis criteria',
  'Liver cirrhosis: Child-Pugh/MELD scoring, varices, SBP, hepatorenal syndrome',
  'Upper GI bleeding: Blatchford score, endoscopy, PPIs, H. pylori',
  'Inflammatory bowel disease: Crohn vs ulcerative colitis, aminosalicylates, biologics',
  'Hyperthyroidism and thyroid storm: Graves disease, propylthiouracil vs methimazole',
  'Hypothyroidism: levothyroxine dosing, TSH monitoring, myxedema coma',
  'Iron-deficiency anemia: labs, oral vs IV iron, transfusion thresholds',
  'Anticoagulation therapy: warfarin INR management, heparin, DOACs comparison',
  'Asthma: GINA stepwise management, controller vs reliever, biologics',
  'Breast cancer: screening mammography, staging, HER2/hormone receptor therapy',
  'Lung cancer: NSCLC vs SCLC, EGFR/ALK targeted therapy, immunotherapy',
  'Colorectal cancer: colonoscopy screening, Lynch syndrome, chemotherapy',
  'Prostate cancer: PSA screening, androgen deprivation therapy, enzalutamide',
  'Melanoma: ABCDE criteria, TNM staging, BRAF/MEK inhibitors, checkpoint inhibitors',
  'Chronic pain and opioid use disorder: opioid equianalgesic doses, naloxone, buprenorphine',
  'Generalized anxiety disorder: SSRIs, SNRIs, buspirone, benzodiazepine risks',
  'Major depressive disorder: antidepressants, augmentation, TMS, ECT',
  'Schizophrenia: typical vs atypical antipsychotics, metabolic monitoring',
  'Bipolar disorder: lithium monitoring, valproate, lamotrigine, acute mania',
  'Epilepsy: first-line AEDs by seizure type, drug interactions, teratogenicity',
  'Parkinson disease: levodopa/carbidopa, dopamine agonists, MAO-B inhibitors',
  'Alzheimer disease: cholinesterase inhibitors, memantine, staging',
  'Multiple sclerosis: relapsing-remitting, interferon, natalizumab, ocrelizumab',
  'Rheumatoid arthritis: DMARDs (methotrexate), biologics (anti-TNF), treat-to-target',
  'Systemic lupus erythematosus: ACR criteria, hydroxychloroquine, immunosuppressants',
  'Osteoporosis: DEXA T-score, bisphosphonates, denosumab, teriparatide',
  'Gout: uric acid targets, colchicine/NSAIDs for acute, allopurinol prophylaxis',
  'Infectious endocarditis: Duke criteria, empiric antibiotics, surgical indications',
  'Tuberculosis: RIPE therapy, latent TB, MDR-TB, IGRA vs TST',
  'HIV/AIDS: ART initiation, regimen selection, OI prophylaxis, PrEP',
  'UTI and complicated UTI: E. coli resistance patterns, nitrofurantoin vs TMP-SMX',
  'STIs: gonorrhea/chlamydia dual therapy, syphilis stages, HSV antivirals',
  'Beta-blockers: receptor selectivity, indications, contraindications, toxicity',
  'ACE inhibitors and ARBs: RAAS axis, indications, hyperkalemia monitoring',
  'Statins: LDL targets, intensity levels, myopathy, drug interactions',
  'Antibiotic resistance: beta-lactamase, MRSA, ESBL, VRE, CRE mechanisms',
  'Anaphylaxis: epinephrine 0.3mg IM, antihistamines, steroids, airway management',
  'Drug-induced QT prolongation: offending drugs list, Torsades de Pointes risk',
  'Serotonin syndrome vs neuroleptic malignant syndrome: Hunter criteria, cyproheptadine',
  'CYP450 drug interactions: inhibitors, inducers, and clinically significant pairs',
  'Acetylcholine vs norepinephrine: receptor subtypes, clinical relevance',
  'Burn management: Parkland formula, depth classification, escharotomy',
  'Traumatic brain injury: ICP monitoring, osmotherapy, barbiturate coma',
  'Types of shock: hemorrhagic, distributive (septic/anaphylactic), cardiogenic, obstructive',
  'Neonatal jaundice: bilirubin thresholds, phototherapy, exchange transfusion',
  'Gestational diabetes: GDM screening, insulin vs metformin, fetal risks',
  'Preeclampsia and eclampsia: BP targets, magnesium sulfate protocol, delivery',
  'Antihypertensives in pregnancy: labetalol, nifedipine, hydralazine safety',
  'Drug-induced liver injury: RUCAM scale, hepatotoxic drugs, N-acetylcysteine',
  'Pediatric vaccines: schedule, live vs inactivated, contraindications, catch-up',
  'Alcohol use disorder: CAGE/AUDIT, CIWA scale, lorazepam protocol, naltrexone',
  'Acid-base disorders: metabolic acidosis/alkalosis, respiratory compensation',
  'Electrolyte disorders: hyponatremia correction rate, hyperkalemia management, hypomagnesemia',
  'Thyroid nodule and cancer: TIRADS, FNA biopsy, PTC vs FTC surgery, RAI',
];

/* ═══════════════════════════════════════════════════════════════════
   TOPIC-BASED GENERATION — generates without a file, from a topic string
═══════════════════════════════════════════════════════════════════ */
const runTopicGeneration = async ({ taskId, topic, taskType, count, difficultyLevel, settings, onSave }) => {
  const batchSize = 40;
  const numBatches = count > batchSize ? Math.ceil(count / batchSize) : 1;
  bgStart(taskId, { type: taskType, docName: topic, msg: 'Generating from topic…', done: 0, total: numBatches });
  try {
    const MEDICINE_RULE = `\n\nMEDICINE RULE — MANDATORY: Write every drug as "BrandName (generic)" — e.g. "Tylenol (acetaminophen)", "Lasix (furosemide)", "Glucophage (metformin)". Apply to EVERY drug in EVERY item.`;
    const makePrompt = (bc) => {
      const base = `TOPIC: "${topic}"\nDIFFICULTY: ${difficultyLevel}${MEDICINE_RULE}\n\nGenerate accurate, board-exam-level ${taskType} items about this topic. Use international standards (US, UK, AUS, Middle East). Include specific numbers: doses, lab values, %, NNT, timelines.\n\n`;
      if (taskType === 'flashcards') return `${base}Generate EXACTLY ${bc} high-yield clinical flashcards. Question: detailed, multi-sentence clinical scenario or concept. Answer: precise 3-5 sentence response with specific values, doses, and mechanisms. RETURN JSON ONLY: {"items":[{"q":"detailed clinical question","a":"accurate answer with specific data","evidence":"key supporting fact"}]}`;
      if (taskType === 'exam') return `${base}Generate EXACTLY ${bc} board-exam MCQs. Each: 2-4 sentence clinical vignette stem, 4 plausible options (A-D), correct answer index, 4-5 sentence explanation addressing every option. RETURN JSON ONLY: {"items":[{"q":"clinical vignette stem","options":["A. option","B. option","C. option","D. option"],"correct":0,"explanation":"explanation covering all options with specific reasoning"}]}`;
      if (taskType === 'cases') return `${base}Generate EXACTLY ${bc} realistic clinical cases about "${topic}". Each case: (1) 8-12 sentence vignette including demographics, HPI, PMH, allergies, medications, vitals, physical exam; (2) 3 lab panels with realistic abnormal values; (3) clinical question with 5 options (A-E). RETURN JSON ONLY: {"items":[{"vignette":"8-12 sentence detailed case","title":"case title","diagnosis":"diagnosis","labPanels":[{"panelName":"COMPLETE BLOOD COUNT","rows":[{"test":"WBC","result":"11.8","flag":"H","range":"4.5-11.0","units":"K/uL"},{"test":"Hgb","result":"10.2","flag":"L","range":"12-16","units":"g/dL"},{"test":"Hct","result":"30","flag":"L","range":"36-46","units":"%"},{"test":"Platelets","result":"380","flag":"","range":"150-400","units":"K/uL"},{"test":"MCV","result":"72","flag":"L","range":"80-100","units":"fL"}]},{"panelName":"BASIC METABOLIC PANEL","rows":[{"test":"Sodium","result":"138","flag":"","range":"135-145","units":"mEq/L"},{"test":"Potassium","result":"3.9","flag":"","range":"3.5-5.0","units":"mEq/L"},{"test":"Creatinine","result":"1.1","flag":"","range":"0.6-1.2","units":"mg/dL"},{"test":"BUN","result":"18","flag":"","range":"7-20","units":"mg/dL"},{"test":"Glucose","result":"95","flag":"","range":"70-100","units":"mg/dL"}]},{"panelName":"DISEASE-SPECIFIC PANEL","rows":[{"test":"relevant test","result":"abnormal value","flag":"H","range":"reference","units":"unit"},{"test":"relevant test","result":"abnormal value","flag":"L","range":"reference","units":"unit"},{"test":"relevant test","result":"value","flag":"","range":"reference","units":"unit"}]}],"examQuestion":{"q":"clinical question stem","options":["A) option","B) option","C) option","D) option","E) option"],"correct":0,"explanation":"4-6 sentence explanation with specific data"}}]}`;
      return `${base}Analyze "${topic}" comprehensively.`;
    };
    const isJson = ['flashcards', 'exam', 'cases'].includes(taskType);
    const tasks = Array.from({ length: numBatches }, (_, i) => {
      const bc = i === numBatches - 1 ? (count % batchSize === 0 ? batchSize : count % batchSize) : batchSize;
      return () => callAI(makePrompt(bc), isJson, false, settings, 8000);
    });
    let all = [];
    const results = await runParallel(tasks, 50, (done, total) => {
      bgUpdate(taskId, { done, total, msg: `${done}/${total} batches complete…` });
    });
    for (const r of results) {
      if (r.status === 'fulfilled') {
        try {
          const p = parseJson(r.value);
          all = [...all, ...(p.items || p.cases || p.questions || p.flashcards || [])];
        } catch (e) { console.warn('Topic parse err:', e.message); }
      }
    }
    if (!all.length) throw new Error('AI returned no data. Check your API key or try a different topic.');
    const finalData = all.slice(0, count);
    bgFinish(taskId, { type: taskType, data: finalData, pages: '', docName: topic, count: finalData.length });
    if (onSave) onSave(finalData, taskId);
  } catch (e) { bgFail(taskId, e.message || String(e)); }
};

/* ═══════════════════════════════════════════════════════════════════
   QUICK GENERATE MODAL — for Flashcards / Exams / Cases pages
   Lets users upload a new file or pick from their library,
   choose page range, difficulty, and count (1–1000).
═══════════════════════════════════════════════════════════════════ */
function QuickGenerateModal({ type, docs, settings, onClose, onTaskStart, addToast,
  setFlashcards, setExams, setCases }) {
  const [tab, setTab] = useState('library'); // 'library' | 'upload' | 'topic'
  const [selDocId, setSelDocId] = useState(docs[0]?.id || null);
  const [uploadedDoc, setUploadedDoc] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadPct, setUploadPct] = useState(0);
  const [entireFile, setEntireFile] = useState(true);
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(1);
  const [count, setCount] = useState(20);
  const [difficulty, setDifficulty] = useState(2);
  const [topicInput, setTopicInput] = useState('');
  const levels = ['Easy', 'Medium', 'Hard'];
  const inputRef = useRef(null);

  const activeDoc = tab === 'upload' ? uploadedDoc : (docs.find(d => d.id === selDocId) || null);

  useEffect(() => {
    if (activeDoc) { setStartPage(1); setEndPage(activeDoc.totalPages || 1); }
  }, [activeDoc?.id]);

  const handleFileUpload = async (files) => {
    const file = files[0]; if (!file) return;
    setUploading(true); setUploadPct(5);
    try {
      const data = await extractUniversal(file, p => setUploadPct(5 + p * 85));
      const id = 'tmp_' + Date.now();
      const doc = {
        id, name: file.name, size: file.size, fileCategory: data.fileCategory,
        totalPages: data.totalPages, createdAt: new Date().toISOString()
      };
      await saveFile(id, { ...data, name: file.name, size: file.size });
      setUploadedDoc(doc); setUploadPct(100);
      setStartPage(1); setEndPage(data.totalPages);
      addToast(`"${file.name}" loaded!`, 'success');
    } catch (e) { addToast(e.message, 'error'); }
    finally { setUploading(false); }
  };

  const typeConfig = {
    flashcards: { label: 'Flashcards', icon: Layers, color: '#6366f1' },
    exam: { label: 'Exam', icon: CheckSquare, color: '#3b82f6' },
    cases: { label: 'Cases', icon: Activity, color: '#8b5cf6' },
  };
  const tc = typeConfig[type] || typeConfig.flashcards;
  const Icon = tc.icon;

  const handleGo = () => {
    // Topic-based generation (no file needed)
    if (tab === 'topic') {
      const topic = topicInput.trim();
      if (!topic) { addToast('Enter a topic or click Random Topic first.', 'error'); return; }
      const taskId = 'task_' + Date.now();
      const onSave = (data, tid) => {
        const now = new Date().toISOString();
        if (type === 'flashcards') {
          const cards = data.map(c => ({
            id: Date.now() + Math.random(), q: c.q, a: c.a, evidence: c.evidence || '',
            sourcePage: 0, repetitions: 0, ef: 2.5, interval: 1, nextReview: Date.now(), lastReview: Date.now()
          }));
          setFlashcards(p => [...p, { id: taskId, docId: null, sourcePages: 'topic', title: `Cards — ${topic.slice(0, 30)}`, cards, createdAt: now }]);
          addToast(`${cards.length} flashcards saved! ⚡`, 'success');
        } else if (type === 'exam') {
          setExams(p => [...p, { id: taskId, docId: null, sourcePages: 'topic', title: `Exam — ${topic.slice(0, 30)}`, questions: data, createdAt: now }]);
          addToast(`${data.length} exam questions saved! ⚡`, 'success');
        } else if (type === 'cases') {
          setCases(p => [...p, { id: taskId, docId: null, sourcePages: 'topic', title: `Cases — ${topic.slice(0, 30)}`, questions: data, createdAt: now }]);
          addToast(`${data.length} cases saved! ⚡`, 'success');
        }
        bgClear(tid);
      };
      runTopicGeneration({ taskId, topic, taskType: type, count, difficultyLevel: levels[difficulty - 1], settings, onSave });
      if (onTaskStart) onTaskStart(taskId);
      addToast(`Generating ${count} ${tc.label} on "${topic.slice(0, 25)}…" in background!`, 'info');
      onClose();
      return;
    }
    // File-based generation
    if (!activeDoc) { addToast('Select or upload a document first.', 'error'); return; }
    const sp = entireFile ? 1 : startPage;
    const ep = entireFile ? activeDoc.totalPages : endPage;
    const taskId = 'task_' + Date.now();
    const onSave = (data, tid) => {
      const now = new Date().toISOString();
      if (type === 'flashcards') {
        const cards = data.map(c => ({
          id: Date.now() + Math.random(), q: c.q, a: c.a, evidence: c.evidence,
          sourcePage: c.sourcePage, repetitions: 0, ef: 2.5, interval: 1, nextReview: Date.now(), lastReview: Date.now()
        }));
        setFlashcards(p => [...p, {
          id: taskId, docId: activeDoc.id, sourcePages: `${sp}-${ep}`,
          title: `Cards — ${activeDoc.name.slice(0, 30)}`, cards, createdAt: now
        }]);
        addToast(`${cards.length} flashcards saved! ⚡`, 'success');
      } else if (type === 'exam') {
        setExams(p => [...p, {
          id: taskId, docId: activeDoc.id, sourcePages: `${sp}-${ep}`,
          title: `Exam — ${activeDoc.name.slice(0, 30)}`, questions: data, createdAt: now
        }]);
        addToast(`${data.length} exam questions saved! ⚡`, 'success');
      } else if (type === 'cases') {
        setCases(p => [...p, {
          id: taskId, docId: activeDoc.id, sourcePages: `${sp}-${ep}`,
          title: `Cases — ${activeDoc.name.slice(0, 30)}`, questions: data, createdAt: now
        }]);
        addToast(`${data.length} cases saved! ⚡`, 'success');
      }
      bgClear(tid);
    };
    runBgGeneration({
      taskId, docId: activeDoc.id, docName: activeDoc.name,
      taskType: type, startPage: sp, endPage: ep, count,
      difficultyLevel: levels[difficulty - 1], settings, onSave
    });
    if (onTaskStart) onTaskStart(taskId);
    addToast(`Generating ${count} ${tc.label}… runs in background!`, 'info');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9000] flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}>
      <div className="w-full sm:max-w-lg glass rounded-t-3xl sm:rounded-3xl flex flex-col max-h-[92dvh] overflow-hidden shadow-2xl animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[color:var(--border2,var(--border))] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: tc.color + '22' }}>
              <Icon size={20} style={{ color: tc.color }} />
            </div>
            <div>
              <h2 className="font-black text-sm">Generate {tc.label}</h2>
              <p className="text-xs opacity-50 font-bold">From file · By topic · Random — runs in background</p>
            </div>
          </div>
          <button onClick={onClose} className="w-9 h-9 glass rounded-xl flex items-center justify-center opacity-60 hover:opacity-100"><X size={16} /></button>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar p-5 space-y-4 max-h-[70vh]">
          {/* Source tabs */}
          <div className="flex gap-1 p-1 glass rounded-2xl">
            {[['library', 'From Library', BookOpen], ['upload', 'Upload File', FileUp], ['topic', 'By Topic / Random', Sparkles]].map(([id, lbl, TIcon]) => (
              <button key={id} onClick={() => setTab(id)}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-black transition-all
                  ${tab === id ? 'text-white shadow-md' : 'opacity-50 hover:opacity-80'}`}
                style={tab === id ? { background: tc.color } : {}}>
                <TIcon size={14} />{lbl}
              </button>
            ))}
          </div>

          {/* Topic / Random tab */}
          {tab === 'topic' && (
            <div className="space-y-3">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest opacity-60 block">Topic or Condition</label>
                <input
                  value={topicInput}
                  onChange={e => setTopicInput(e.target.value)}
                  placeholder="e.g. Tylenol toxicity, hypertension management, cancer staging…"
                  className="w-full glass rounded-2xl px-4 py-3 text-sm outline-none border border-[color:var(--border2,var(--border))] focus:border-[var(--accent)] text-[var(--text)] placeholder:opacity-40"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    const t = MEDICAL_RANDOM_TOPICS[Math.floor(Math.random() * MEDICAL_RANDOM_TOPICS.length)];
                    setTopicInput(t);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-2xl text-xs font-black border-2 border-dashed transition-all hover:opacity-80"
                  style={{ borderColor: tc.color + '60', color: tc.color, background: tc.color + '10' }}>
                  🎲 Random Medical Topic
                </button>
                {topicInput && (
                  <button onClick={() => setTopicInput('')} className="px-3 py-2 rounded-xl glass text-xs font-bold opacity-50 hover:opacity-80">
                    <X size={14} />
                  </button>
                )}
              </div>
              {topicInput && (
                <div className="rounded-xl px-4 py-3 text-xs font-bold flex items-start gap-2"
                  style={{ background: tc.color + '12', color: tc.color, border: `1px solid ${tc.color}30` }}>
                  <Sparkles size={13} className="shrink-0 mt-0.5" />
                  <span>AI will generate {count} accurate {tc.label} on: <strong>"{topicInput.slice(0, 60)}{topicInput.length > 60 ? '…' : ''}"</strong></span>
                </div>
              )}
            </div>
          )}

          {/* Library picker */}
          {tab === 'library' && (
            <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
              {!docs.length ? (
                <div className="text-center py-6 opacity-40">
                  <BookOpen size={28} className="mx-auto mb-2" />
                  <p className="text-xs font-bold">No documents in library</p>
                  <p className="text-xs mt-1">Switch to "Upload File" tab</p>
                </div>
              ) : docs.map(doc => (
                <button key={doc.id} onClick={() => setSelDocId(doc.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-2xl text-left transition-all border
                    ${selDocId === doc.id ? 'bg-[var(--accent)]/10 border-[var(--accent)]/40' : 'glass border-transparent hover:border-[color:var(--border2,var(--border))]'}`}>
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${FILE_ICONS[doc.fileCategory || 'unknown']?.from || 'from-slate-500'} ${FILE_ICONS[doc.fileCategory || 'unknown']?.to || 'to-slate-700'} flex items-center justify-center shrink-0`}>
                    <FileText size={18} className="text-white opacity-80" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold truncate">{doc.name}</p>
                    <p className="text-xs opacity-40 font-mono">{doc.totalPages} pages</p>
                  </div>
                  {selDocId === doc.id && <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0" />}
                </button>
              ))}
            </div>
          )}

          {/* File upload */}
          {tab === 'upload' && (
            <div>
              {!uploadedDoc ? (
                <div
                  onDragOver={e => e.preventDefault()}
                  onDrop={e => { e.preventDefault(); handleFileUpload(e.dataTransfer.files); }}
                  onClick={() => inputRef.current?.click()}
                  className="border-2 border-dashed border-[color:var(--border2,var(--border))] rounded-2xl p-8 text-center cursor-pointer hover:border-[var(--accent)]/50 transition-colors">
                  {uploading ? (
                    <div className="space-y-3">
                      <Loader2 size={28} className="mx-auto text-[var(--accent)] animate-spin" />
                      <p className="text-xs font-bold">Processing…</p>
                      <div className="w-full bg-black/10 rounded-full h-1.5"><div className="h-full bg-[var(--accent)] rounded-full transition-all" style={{ width: `${uploadPct}%` }} /></div>
                    </div>
                  ) : (
                    <>
                      <FileUp size={32} className="mx-auto mb-3 opacity-30" />
                      <p className="text-sm font-black opacity-60">Drop file here or click to browse</p>
                      <p className="text-xs opacity-30 mt-1">PDF, Word, PowerPoint, Excel, Images, and more</p>
                    </>
                  )}
                  <input ref={inputRef} type="file" className="hidden" accept="*/*"
                    onChange={e => handleFileUpload(e.target.files)} />
                </div>
              ) : (
                <div className="flex items-center gap-3 p-3 glass rounded-2xl border border-emerald-500/30">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold truncate">{uploadedDoc.name}</p>
                    <p className="text-xs opacity-40">{uploadedDoc.totalPages} pages extracted</p>
                  </div>
                  <button onClick={() => setUploadedDoc(null)} className="opacity-40 hover:opacity-80"><X size={14} /></button>
                </div>
              )}
            </div>
          )}

          {/* Page range — only for file-based tabs */}
          {tab !== 'topic' && activeDoc && (
            <div className="glass rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-black uppercase tracking-widest opacity-60 flex items-center gap-2"><BookOpen size={16} />Page Range</h3>
                <span className="text-xs font-bold opacity-40">{activeDoc.totalPages} total</span>
              </div>
              <div className="flex gap-3 items-center">
                <button onClick={() => setEntireFile(true)}
                  className={`flex-1 py-2 rounded-xl text-xs font-black border transition-all ${entireFile ? 'bg-[var(--accent)] text-white border-transparent' : 'glass border-[color:var(--border2,var(--border))] opacity-60'}`}>
                  Entire File
                </button>
                <button onClick={() => setEntireFile(false)}
                  className={`flex-1 py-2 rounded-xl text-xs font-black border transition-all ${!entireFile ? 'bg-[var(--accent)] text-white border-transparent' : 'glass border-[color:var(--border2,var(--border))] opacity-60'}`}>
                  Page Range
                </button>
              </div>
              {!entireFile && (
                <div className="flex gap-3">
                  {[['From', startPage, setStartPage], ['To', endPage, setEndPage]].map(([l, v, s]) => (
                    <div key={l} className="flex-1">
                      <label className="text-xs font-black uppercase tracking-widest opacity-40 block mb-1">{l}</label>
                      <input type="number" min={1} max={activeDoc.totalPages} value={v}
                        onChange={e => s(Math.max(1, Math.min(activeDoc.totalPages, Number(e.target.value))))}
                        className="w-full glass rounded-xl px-3 py-2.5 text-center font-mono font-bold text-sm outline-none focus:border-[var(--accent)] border border-[color:var(--border2,var(--border))] text-[var(--text)]" />
                    </div>
                  ))}
                </div>
              )}
              {entireFile && <p className="text-xs text-[var(--accent)] font-bold text-center">All {activeDoc.totalPages} pages selected</p>}
            </div>
          )}

          {/* Count */}
          <div className="glass rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-black uppercase tracking-widest opacity-60 flex items-center gap-2"><Hash size={16} />Quantity</h3>
              <span className="text-lg font-black text-[var(--accent)]">{count}</span>
            </div>
            <input type="range" min="1" max="1000" value={count} onChange={e => setCount(+e.target.value)}
              className="w-full accent-[var(--accent)]" />
            <div className="flex gap-1.5 flex-wrap">
              {[5, 10, 20, 50, 100, 200, 500, 1000].map(n => (
                <button key={n} onClick={() => setCount(n)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-black transition-all ${count === n ? 'bg-[var(--accent)] text-white' : 'glass opacity-60 hover:opacity-100'}`}>{n}</button>
              ))}
            </div>
            {count > 50 && <p className="text-xs text-amber-500 font-bold flex items-center gap-1.5"><AlertCircle size={10} />Parallel AI — runs fully in background</p>}
          </div>

          {/* Difficulty */}
          <div className="glass rounded-2xl p-4 space-y-3">
            <h3 className="text-xs font-black uppercase tracking-widest opacity-60">Difficulty Level</h3>
            <div className="grid grid-cols-3 gap-2">
              {levels.map((l, i) => (
                <button key={l} onClick={() => setDifficulty(i + 1)}
                  className={`py-2.5 rounded-xl text-xs font-black border transition-all
                    ${difficulty === i + 1 ? 'text-white border-transparent shadow-md' : 'glass border-[color:var(--border2,var(--border))] opacity-60 hover:opacity-100'}`}
                  style={difficulty === i + 1 ? { background: ['#10b981', '#f59e0b', '#ef4444'][i] } : {}}>
                  {['🟢', '🟡', '🔴'][i]} {l}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-[color:var(--border2,var(--border))] shrink-0">
          <button onClick={handleGo}
            disabled={tab === 'topic' ? !topicInput.trim() : !activeDoc}
            className="w-full py-4 btn-accent rounded-2xl text-sm font-black uppercase tracking-widest disabled:opacity-40 flex items-center justify-center gap-3 shadow-xl"
            style={{ background: tc.color }}>
            {tab === 'topic'
              ? <><Sparkles size={18} /> Generate {count} {tc.label} on Topic</>
              : <><Zap size={18} fill="currentColor" /> Generate {count} {tc.label} in Background</>
            }
          </button>
          <p className="text-xs text-center opacity-30 font-bold mt-2">You can switch pages — generation never stops</p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PWA SETUP
═══════════════════════════════════════════════════════════════════ */
const setupPWA = () => {
  // Manifest
  const manifest = {
    name: 'MARIAM PRO', short_name: 'MARIAM', description: 'Universal AI Document Intelligence',
    start_url: '/', display: 'standalone', orientation: 'any',
    background_color: '#0a0a14', theme_color: '#0a0a14',
    icons: [
      { src: MARIAM_IMG, sizes: '192x192', type: 'image/jpeg', purpose: 'any maskable' },
      { src: MARIAM_IMG, sizes: '512x512', type: 'image/jpeg', purpose: 'any maskable' },
    ],
    categories: ['education', 'productivity', 'medical'],
    screenshots: [],
    shortcuts: [
      { name: 'Library', url: '/' },
      { name: 'Flashcards', url: '/' },
    ]
  };
  try {
    const mBlob = new Blob([JSON.stringify(manifest)], { type: 'application/manifest+json' });
    const mUrl = URL.createObjectURL(mBlob);
    let link = document.querySelector('link[rel="manifest"]');
    if (!link) { link = document.createElement('link'); link.rel = 'manifest'; document.head.appendChild(link); }
    link.href = mUrl;
  } catch { }

  // Meta tags for iOS & Android
  const metas = [
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    { name: 'apple-mobile-web-app-title', content: 'MARIAM PRO' },
    { name: 'theme-color', content: '#6366f1' },
    { name: 'msapplication-navbutton-color', content: '#6366f1' },
    { name: 'msapplication-starturl', content: '/' },
  ];
  metas.forEach(({ name, content }) => {
    let m = document.querySelector(`meta[name="${name}"]`);
    if (!m) { m = document.createElement('meta'); m.name = name; document.head.appendChild(m); }
    m.content = content;
  });
  // Ensure viewport-fit=cover so env(safe-area-inset-*) works on iPhone notch/island
  let vp = document.querySelector('meta[name="viewport"]');
  if (!vp) { vp = document.createElement('meta'); vp.name = 'viewport'; document.head.appendChild(vp); }
  if (!vp.content.includes('viewport-fit')) {
    vp.content = (vp.content || 'width=device-width, initial-scale=1') + ', viewport-fit=cover, interactive-widget=resizes-content';
  }

  // Apple touch icon
  let apl = document.querySelector('link[rel="apple-touch-icon"]');
  if (!apl) { apl = document.createElement('link'); apl.rel = 'apple-touch-icon'; document.head.appendChild(apl); }
  apl.href = MARIAM_IMG;

  // Service Worker (best-effort, may fail in sandboxed environments)
  if ('serviceWorker' in navigator) {
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
      const swBlob = new Blob([swCode], { type: 'application/javascript' });
      const swUrl = URL.createObjectURL(swBlob);
      navigator.serviceWorker.register(swUrl).catch(() => { });
    } catch { }
  }
};

/* ═══════════════════════════════════════════════════════════════════
   TOAST HOOK
═══════════════════════════════════════════════════════════════════ */
function useToast() {
  const [toasts, setToasts] = useState([]);
  const add = useCallback((msg, type = 'success', dur = 3500) => {
    const id = Date.now() + Math.random();
    setToasts(p => [...p, { id, msg, type }]);
    setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), dur);
  }, []);
  return { toasts, addToast: add };
}

function ToastContainer({ toasts }) {
  return (
    <div className="fixed top-20 right-3 z-[9999] flex flex-col gap-2 pointer-events-none max-w-[calc(100vw-24px)]">
      {toasts.map(t => (
        <div key={t.id} className={`px-4 py-3 rounded-2xl text-xs font-bold shadow-2xl flex items-center gap-2.5 animate-slide-in pointer-events-auto
          ${t.type === 'success' ? 'bg-emerald-500 text-white' : t.type === 'error' ? 'bg-red-500 text-white' : t.type === 'warn' ? 'bg-amber-500 text-white' : 'bg-[var(--surface,var(--card))] border border-[color:var(--border2,var(--border))] text-[var(--text)]'}`}>
          {t.type === 'success' ? <CheckCircle2 size={15} /> : t.type === 'error' ? <AlertCircle size={18} /> : <Info size={18} />}
          <span className="truncate max-w-[280px]">{t.msg}</span>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   DRAG HOOK
═══════════════════════════════════════════════════════════════════ */
function useDrag(onDrag, deps = []) {
  const dragging = useRef(false);
  const start = useCallback(e => {
    e.preventDefault(); dragging.current = true;
    document.body.style.userSelect = 'none'; document.body.style.webkitUserSelect = 'none';
    const move = ev => {
      if (!dragging.current) return;
      const x = ev.touches?.[0]?.clientX ?? ev.clientX;
      const y = ev.touches?.[0]?.clientY ?? ev.clientY;
      if (x !== undefined) onDrag(x, y);
    };
    const up = () => {
      dragging.current = false;
      document.body.style.userSelect = ''; document.body.style.webkitUserSelect = '';
      document.removeEventListener('mousemove', move); document.removeEventListener('mouseup', up);
      document.removeEventListener('touchmove', move); document.removeEventListener('touchend', up);
    };
    document.addEventListener('mousemove', move, { passive: false }); document.addEventListener('mouseup', up);
    document.addEventListener('touchmove', move, { passive: false }); document.addEventListener('touchend', up);
  }, [onDrag, ...deps]);
  return start;
}

/* ═══════════════════════════════════════════════════════════════════
   FILE ICON COMPONENT
═══════════════════════════════════════════════════════════════════ */
function FileCover({ category, className = 'h-28 lg:h-32', name = '' }) {
  const cfg = FILE_ICONS[category] || FILE_ICONS.unknown;
  const Icon = cfg.Icon;
  return (
    <div className={`bg-gradient-to-br ${cfg.from} ${cfg.to} flex flex-col items-center justify-center gap-2 ${className}`}>
      <Icon size={36} className="text-white opacity-60" />
      <span className="text-white text-xs font-black uppercase tracking-widest opacity-70 px-2 py-0.5 bg-black/20 rounded-full">{cfg.label}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MIND MAP COMPONENT
═══════════════════════════════════════════════════════════════════ */
function MindMap({ data }) {
  if (!data?.topic) return <div className="flex items-center justify-center h-full opacity-40 text-sm font-bold">No mind map data</div>;
  const branches = data.branches || [];
  const W = 700, H = 500, cx = W / 2, cy = H / 2, r1 = 160, r2 = 260;
  const branchAngles = branches.map((_, i) => ((2 * Math.PI * i) / branches.length) - (Math.PI / 2));
  const COLORS = ['#6366f1', '#a855f7', '#3b82f6', '#10b981', '#f43f5e', '#f59e0b', '#06b6d4', '#84cc16'];

  return (
    <div className="w-full overflow-auto custom-scrollbar p-4">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-h-[420px]" xmlns="http://www.w3.org/2000/svg">
        {/* Radial gradient bg */}
        <defs>
          <radialGradient id="mmBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.05" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          {branches.map((_, i) => (
            <marker key={i} id={`arrow${i}`} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L9,3 z" fill={COLORS[i % COLORS.length]} opacity="0.6" />
            </marker>
          ))}
        </defs>
        <rect width={W} height={H} fill="url(#mmBg)" rx="16" />

        {/* Branch connections & nodes */}
        {branches.map((branch, i) => {
          const ang = branchAngles[i]; const col = COLORS[i % COLORS.length];
          const bx = cx + r1 * Math.cos(ang), by = cy + r1 * Math.sin(ang);
          const subs = branch.subtopics || branch.children || [];
          return (
            <g key={i}>
              {/* Center → Branch */}
              <line x1={cx} y1={cy} x2={bx} y2={by} stroke={col} strokeWidth="2" strokeOpacity="0.5" strokeDasharray="4 2" />
              {/* Sub connections */}
              {subs.slice(0, 4).map((sub, j) => {
                const subCount = Math.min(subs.length, 4);
                const spanAngle = subCount > 1 ? (Math.PI / 3) : 0;
                const startAng = ang - (spanAngle / 2);
                const subAng = subCount > 1 ? startAng + (j / (subCount - 1)) * spanAngle : ang;
                const sx = cx + r2 * Math.cos(subAng), sy = cy + r2 * Math.sin(subAng);
                return (
                  <g key={j}>
                    <line x1={bx} y1={by} x2={sx} y2={sy} stroke={col} strokeWidth="1.5" strokeOpacity="0.3" />
                    <circle cx={sx} cy={sy} r="24" fill={col} fillOpacity="0.08" stroke={col} strokeWidth="1" strokeOpacity="0.3" />
                    <foreignObject x={sx - 30} y={sy - 18} width="60" height="36">
                      <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: '8px', textAlign: 'center', color: 'var(--text)', fontWeight: 700, lineHeight: 1.2, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                        {typeof sub === 'string' ? sub : (sub.label || sub)}
                      </div>
                    </foreignObject>
                  </g>
                );
              })}
              {/* Branch node */}
              <ellipse cx={bx} cy={by} rx="42" ry="20" fill={col} fillOpacity="0.15" stroke={col} strokeWidth="2" strokeOpacity="0.6" />
              <foreignObject x={bx - 40} y={by - 16} width="80" height="32">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: '9px', textAlign: 'center', color: 'var(--text)', fontWeight: 800, lineHeight: 1.2, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                  {branch.label}
                </div>
              </foreignObject>
            </g>
          );
        })}

        {/* Center node */}
        <circle cx={cx} cy={cy} r="50" fill="var(--accent)" fillOpacity="0.15" stroke="var(--accent)" strokeWidth="3" />
        <circle cx={cx} cy={cy} r="42" fill="var(--accent)" fillOpacity="0.2" />
        <foreignObject x={cx - 38} y={cy - 24} width="76" height="48">
          <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: '10px', textAlign: 'center', color: 'var(--accent)', fontWeight: 900, lineHeight: 1.2, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', overflow: 'hidden' }}>
            {data.topic}
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   TIMELINE COMPONENT
═══════════════════════════════════════════════════════════════════ */
function TimelineView({ events = [] }) {
  if (!events.length) return <div className="flex items-center justify-center h-32 opacity-40 text-sm font-bold">No timeline data</div>;
  return (
    <div className="relative pl-8 space-y-4">
      <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/40 to-transparent" />
      {events.map((ev, i) => (
        <div key={i} className="relative">
          <div className="absolute -left-5 w-4 h-4 rounded-full bg-[var(--accent)] border-2 border-[var(--bg)] flex items-center justify-center text-xs text-white font-black">{i + 1}</div>
          <div className="glass rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-black text-[var(--accent)] uppercase tracking-widest">{ev.date || ev.time || ev.year || ''}</span>
              {ev.page && <span className="text-xs opacity-40 font-mono">p.{ev.page}</span>}
            </div>
            <p className="text-xs font-bold leading-relaxed">{ev.event || ev.title || ev.description || ev}</p>
            {ev.significance && <p className="text-xs opacity-60 mt-1 italic">{ev.significance}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   LAB TABLE
═══════════════════════════════════════════════════════════════════ */
function LabTable({ rows }) {
  if (!rows?.length) return null;
  return (
    <div className="rounded-xl overflow-hidden border border-[color:var(--border2,var(--border))] bg-[var(--surface,var(--card))] mb-4 text-xs">
      <table className="w-full border-collapse">
        <thead><tr className="bg-black/5 dark:bg-white/5 border-b border-[color:var(--border2,var(--border))]">
          {['Test', 'Result', 'Range', 'Units'].map(h => (
            <th key={h} className="py-1.5 px-3 text-xs font-black uppercase tracking-wider text-left opacity-50">{h}</th>
          ))}
        </tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-[color:var(--border2,var(--border))]/50 last:border-0">
              <td className="py-2 px-3 font-semibold">{r.test}</td>
              <td className="py-2 px-3 text-center">
                <span className={`font-black inline-flex items-center gap-1 ${r.flag === 'L' ? 'text-blue-500' : r.flag === 'H' ? 'text-red-500' : ''}`}>
                  {r.result}
                  {r.flag && <span className={`text-xs font-black px-1 py-0.5 rounded ${r.flag === 'L' ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-600' : 'bg-red-100 dark:bg-red-900/40 text-red-600'}`}>{r.flag}</span>}
                </span>
              </td>
              <td className="py-2 px-3 text-center opacity-50 font-mono">{r.range}</td>
              <td className="py-2 px-3 text-center opacity-40 font-mono text-xs uppercase">{r.units}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SPLIT PANE
═══════════════════════════════════════════════════════════════════ */
function SplitPane({ left, right, defaultSplit = 60, minLeft = 30, maxLeft = 85, direction = 'vertical' }) {
  const [split, setSplit] = useState(defaultSplit);
  const containerRef = useRef(null);
  const handleDrag = useCallback((x, y) => {
    const el = containerRef.current; if (!el) return;
    const rect = el.getBoundingClientRect();
    if (direction === 'vertical') { const pct = Math.max(minLeft, Math.min(maxLeft, ((x - rect.left) / rect.width) * 100)); setSplit(pct); }
    else { const pct = Math.max(minLeft, Math.min(maxLeft, ((y - rect.top) / rect.height) * 100)); setSplit(pct); }
  }, [direction, minLeft, maxLeft]);
  const startDrag = useDrag(handleDrag, [handleDrag]);
  if (direction === 'vertical') return (
    <div ref={containerRef} className="flex flex-row w-full h-full overflow-hidden">
      <div style={{ width: `${split}%` }} className="flex flex-col h-full overflow-hidden min-w-0">{left}</div>
      <div onMouseDown={startDrag} onTouchStart={startDrag}
        className="w-2 shrink-0 cursor-col-resize flex items-center justify-center bg-[var(--border)]/40 hover:bg-[var(--accent)]/30 transition-colors group touch-none select-none z-10">
        <GripVertical size={16} className="text-[var(--text)] opacity-40 group-hover:opacity-100" />
      </div>
      <div style={{ width: `${100 - split}%` }} className="flex flex-col h-full overflow-hidden min-w-0">{right}</div>
    </div>
  );
  return (
    <div ref={containerRef} className="flex flex-col w-full h-full overflow-hidden">
      <div style={{ height: `${split}%` }} className="w-full overflow-hidden min-h-0">{left}</div>
      <div onMouseDown={startDrag} onTouchStart={startDrag}
        className="h-2 shrink-0 cursor-row-resize flex items-center justify-center bg-[var(--border)]/40 hover:bg-[var(--accent)]/30 transition-colors group touch-none select-none">
        <div className="w-16 h-1 bg-[var(--text)] opacity-20 rounded-full group-hover:opacity-60" />
      </div>
      <div style={{ height: `${100 - split}%` }} className="w-full overflow-hidden min-h-0">{right}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   TUTOR CHAT — streaming + voice input
═══════════════════════════════════════════════════════════════════ */
function TutorChat({ context, settings, contextLabel = '' }) {
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const endRef = useRef(null); const prevCtx = useRef(null);
  const recogRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const key = JSON.stringify(context);
    if (prevCtx.current !== key) {
      prevCtx.current = key;
      if (context) setMsgs([{ role: 'assistant', content: `Ready! Ask me anything about ${contextLabel || 'this content'}.` }]);
    }
  }, [context, contextLabel]);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, loading]);

  const toggleVoice = () => {
    if (listening) { recogRef.current?.stop(); setListening(false); return; }
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { alert('Voice input not supported in this browser.'); return; }
    const r = new SR(); r.continuous = false; r.interimResults = true;
    r.onresult = e => { const t = Array.from(e.results).map(r => r[0].transcript).join(''); setInput(t); };
    r.onend = () => setListening(false); r.onerror = () => setListening(false);
    r.start(); recogRef.current = r; setListening(true);
  };

  const send = async () => {
    if (!input.trim() || loading) return;
    const msg = input; setInput('');
    const newMsgs = [...msgs, { role: 'user', content: msg }];
    setMsgs([...newMsgs, { role: 'assistant', content: '' }]); setLoading(true);
    try {
      const hist = newMsgs.slice(-6).map(m => `${m.role === 'user' ? 'STUDENT' : 'TUTOR'}: ${m.content}`).join('\n');
      const prompt = `Expert tutor. Document context:\n${JSON.stringify(context, null, 2)}\n\nConversation:\n${hist}\n\nStudent: ${msg}\n\nAnswer concisely but completely.`;
      await callAIStreaming(prompt, chunk => { setMsgs(p => [...p.slice(0, -1), { role: 'assistant', content: chunk }]); }, settings, 3000);
    } catch (e) { setMsgs(p => [...p.slice(0, -1), { role: 'assistant', content: `⚠️ ${e.message}` }]); }
    finally { setLoading(false); }
  };

  return (
    <div className="flex flex-col h-full bg-[var(--bg)]">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-[color:var(--border2,var(--border))] bg-[var(--surface,var(--card))] shrink-0">
        <img src={MARIAM_IMG} className="w-7 h-7 rounded-lg object-cover" alt="AI" />
        <span className="text-xs font-black uppercase tracking-widest text-[var(--accent)]">AI Tutor</span>
        {loading && <div className="ml-auto flex gap-1">{[0, 1, 2].map(i => <div key={i} className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />)}</div>}
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar p-3 space-y-3" ref={scrollContainerRef}>
        {msgs.length === 0 && <div className="flex flex-col items-center justify-center h-full opacity-40 text-center"><Brain size={32} className="mb-2" /><p className="text-xs font-bold">Ask me anything</p></div>}
        {msgs.map((m, i) => (
          <div key={i} className={`flex gap-2 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-[var(--accent)]' : 'overflow-hidden'}`}>
              {m.role === 'user' ? <UserCircle2 size={16} className="text-white" /> : <img src={MARIAM_IMG} className="w-full h-full object-cover" alt="AI" />}
            </div>
            <div className={`px-3 py-2 text-xs leading-relaxed max-w-[85%] rounded-2xl
              ${m.role === 'user' ? 'bg-[var(--accent)] text-white rounded-tr-sm' : 'bg-[var(--surface,var(--card))] border border-[color:var(--border2,var(--border))] rounded-tl-sm'}`}>
              {m.content ? renderMarkdown(m.content) : <span className="opacity-40">thinking…</span>}
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <div className="shrink-0 p-2 border-t border-[color:var(--border2,var(--border))] bg-[var(--surface,var(--card))]">
        <div className="flex gap-2 items-end">
          <textarea value={input} onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
            placeholder="Ask tutor…" disabled={loading} rows={1}
            className="flex-1 bg-[var(--bg)] border border-[color:var(--border2,var(--border))] rounded-xl px-3 py-2 text-xs outline-none resize-none focus:border-[var(--accent)] text-[var(--text)] min-h-[36px] max-h-24" />
          <button onClick={toggleVoice}
            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all ${listening ? 'bg-red-500 text-white animate-pulse' : 'glass text-[var(--accent)] hover:bg-[var(--accent)]/10'}`}>
            {listening ? <MicOff size={18} /> : <Mic size={18} />}
          </button>
          <button onClick={send} disabled={loading || !input.trim()}
            className="w-9 h-9 bg-[var(--accent)] disabled:opacity-40 rounded-xl text-white flex items-center justify-center shrink-0">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PROVIDER PRESETS
═══════════════════════════════════════════════════════════════════ */
const PROVIDERS = {
  anthropic: { label: 'Claude (Anthropic)', note: 'Works built-in — no API key needed in Claude artifacts.', needsKey: false, defaultModel: 'claude-sonnet-4-20250514', baseUrl: '' },
  openai: { label: 'OpenAI (GPT)', note: 'Requires an OpenAI API key.', needsKey: true, defaultModel: 'gpt-4o-mini', baseUrl: 'https://api.openai.com' },
  gemini: { label: 'Google Gemini', note: 'Requires a Google AI Studio API key.', needsKey: true, defaultModel: 'gemini-2.0-flash', baseUrl: '' },
  deepseek: { label: 'DeepSeek', note: 'Requires a DeepSeek API key.', needsKey: true, defaultModel: 'deepseek-chat', baseUrl: 'https://api.deepseek.com' },
  groq: { label: 'Groq (Ultra-fast)', note: 'Requires a Groq API key. Blazing fast inference.', needsKey: true, defaultModel: 'llama-3.3-70b-versatile', baseUrl: 'https://api.groq.com/openai' },
  ollama: { label: 'Ollama (Local)', note: 'Local inference — no API key needed.', needsKey: false, defaultModel: 'llama3', baseUrl: 'http://localhost:11434/v1' },
  custom: { label: 'Custom API', note: 'Any OpenAI-compatible endpoint.', needsKey: true, defaultModel: '', baseUrl: '' },
};
const DEFAULT_SETTINGS = { provider: 'anthropic', apiKey: '', baseUrl: '', model: '', strictMode: false, theme: 'pure-white', fontSize: 'large', accentColor: 'indigo', lineSpacing: 'normal', cardStyle: 'comfortable', animations: true, compactSidebar: false };

/* ═══════════════════════════════════════════════════════════════════
   BUILT-IN SETS — generated from imported data files.
   These sets are PERMANENT and cannot be deleted by the user.
   Each data file exports an array of items. We support two shapes:
     Flashcard item:  { q, a, ... }  OR  { question, answer, ... }
     Exam item:       { q, options:[], correct, explanation, ... }
   We auto-detect which shape each file uses.
═══════════════════════════════════════════════════════════════════ */

/** Normalise any item from the data files into a flashcard card object */
const _toCard = (item, i) => {
  if (!item) return null;
  // Support q/a, question/answer, term/definition, front/back, name/description patterns
  const q = item.q || item.question || item.term || item.front || item.name || item.title || item.concept || `Item ${i + 1}`;
  const a = item.a || item.answer || item.definition || item.back || item.description || item.details || item.explanation || '—';
  return {
    id: `builtin_${i}_${Math.random().toString(36).slice(2)}`, q: String(q), a: String(a),
    evidence: item.evidence || item.source || '', sourcePage: item.page || item.sourcePage || null,
    repetitions: 0, ef: 2.5, interval: 1, nextReview: Date.now(), lastReview: Date.now()
  };
};

/** Normalise any item into an exam question object */
const _toExamQ = (item, i) => {
  if (!item) return null;
  // Already has options array → treat as MCQ
  if (Array.isArray(item.options) && item.options.length) {
    return {
      q: String(item.q || item.question || item.stem || `Question ${i + 1}`),
      options: item.options.map(String),
      correct: typeof item.correct === 'number' ? item.correct : 0,
      explanation: String(item.explanation || item.rationale || item.reason || ''),
      evidence: item.evidence || '', sourcePage: item.page || null
    };
  }
  // Flashcard-style → build 4 synthetic options (correct + 3 distractors built later)
  const q = item.q || item.question || item.term || item.front || item.name || item.concept || `Question ${i + 1}`;
  const a = item.a || item.answer || item.definition || item.back || item.description || item.details || '—';
  return {
    q: String(q), options: [String(a), 'See explanation for details', 'Refer to source material', 'None of the above'],
    correct: 0, explanation: String(a), evidence: item.evidence || '', sourcePage: item.page || null
  };
};

/** Safe array normaliser — handles array, object-of-arrays, or object-of-objects */
const _safeArr = (raw) => {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw;
  // e.g. { diseases:[...], conditions:[...] }  → flatten all values that are arrays
  const vals = Object.values(raw);
  const arrVals = vals.filter(Array.isArray);
  if (arrVals.length) return arrVals.flat();
  // e.g. { 0:{...}, 1:{...} }
  return vals;
};

/** Fisher-Yates shuffle of MCQ options, updating correct index so it follows the shuffled answer */
const shuffleOptions = (questions) => (questions || []).map(q => {
  if (!Array.isArray(q.options) || q.options.length < 2) return q;
  const correctText = q.options[typeof q.correct === 'number' ? q.correct : 0];
  const shuffled = [...q.options];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  const newCorrect = shuffled.indexOf(correctText);
  return { ...q, options: shuffled, correct: newCorrect >= 0 ? newCorrect : 0 };
});

const _makeBuiltinFC = (id, title, icon, color, rawData) => {
  const cards = _safeArr(rawData).map(_toCard).filter(Boolean);
  return {
    id, title, isBuiltin: true, builtinIcon: icon, builtinColor: color,
    docId: null, sourcePages: 'built-in', createdAt: '2025-01-01T00:00:00.000Z', cards
  };
};

const _makeBuiltinExam = (id, title, icon, color, rawData) => {
  const questions = _safeArr(rawData).map(_toExamQ).filter(Boolean);
  return {
    id, title, isBuiltin: true, builtinIcon: icon, builtinColor: color,
    docId: null, sourcePages: 'built-in', createdAt: '2025-01-01T00:00:00.000Z', questions
  };
};

/* ── Load properly structured built-in data ── */
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

/* ═══════════════════════════════════════════════════════════════════
   VIEW WRAPPER
═══════════════════════════════════════════════════════════════════ */
const ViewWrapper = ({ active, children }) => (
  <div className={`absolute inset-0 flex flex-col ${active ? 'z-10 pointer-events-auto opacity-100' : 'z-0 pointer-events-none opacity-0'}`}>
    {children}
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   LIBRARY MERGED VIEW — Home + Library in one beautiful page (gooddesign)
═══════════════════════════════════════════════════════════════════ */
function LibraryMergedView({ docs, uploading, onUpload, onOpen, onDelete, flashcards, exams, cases, notes, setView, setActiveId, addToast, settings }) {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [viewMode, setViewMode] = useState('grid');
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);

  const totalCards = flashcards.reduce((s, f) => s + (f.cards?.length || 0), 0);
  const totalQ = exams.reduce((s, e) => s + (e.questions?.length || 0), 0);
  const totalCases = cases.reduce((s, c) => s + (c.questions?.length || 0), 0);
  const dueCards = flashcards.reduce((s, f) => s + (f.cards?.filter(c => c.nextReview <= Date.now()).length || 0), 0);
  const recentScores = ANALYTICS.scores.slice(-7);
  const avgScore = recentScores.length ? Math.round(recentScores.reduce((s, r) => s + r.pct, 0) / recentScores.length) : 0;
  const streak = ANALYTICS.streak || 0;
  const recentDocs = docs.slice(-4).reverse();
  const bgTaskList = Object.values(window.__MARIAM_BG__?.tasks || {});

  const allStats = useMemo(() => ({
    docs: docs.length,
    cards: totalCards,
    exams: totalQ,
    cases: totalCases,
  }), [docs.length, totalCards, totalQ, totalCases]);

  const filtered = useMemo(() => {
    let d = docs.filter(doc => doc.name.toLowerCase().includes(search.toLowerCase()));
    if (sortBy === 'date') d = [...d].sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
    else if (sortBy === 'name') d = [...d].sort((a, b) => a.name.localeCompare(b.name));
    else if (sortBy === 'type') d = [...d].sort((a, b) => (a.fileCategory || 'pdf').localeCompare(b.fileCategory || 'pdf'));
    return d;
  }, [docs, search, sortBy]);

  const handleDrop = useCallback(e => {
    e.preventDefault(); setDragging(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length) onUpload({ target: { files } });
  }, [onUpload]);

  return (
    <div className="library-view flex-1 min-h-0 overflow-y-auto custom-scrollbar scroll-content app-view" style={{ touchAction: "pan-y", WebkitOverflowScrolling: "touch" }}
      onDragOver={e => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}>
      {dragging && (
        <div className="fixed inset-0 z-[9998] bg-[var(--accent)]/20 border-4 border-dashed border-[var(--accent)] flex items-center justify-center pointer-events-none">
          <div className="design-btn rounded-3xl px-8 py-6 text-center shadow-2xl"><FileUp size={48} className="mx-auto mb-3 animate-bounce" />
            <p className="text-xl font-black">Drop files here!</p><p className="text-sm opacity-80 mt-1">PDF, Word, PowerPoint, Excel, Images &amp; more</p>
          </div>
        </div>
      )}

      {/* Hero / AI Briefing */}
      <div className="design-card" style={{ background: 'linear-gradient(135deg, hsl(var(--primary-hue, 220), 80%, 50%), hsl(var(--primary-hue, 220), 70%, 40%))', color: 'white', border: 'none' }}>
        <h3 style={{ color: 'white' }}>AI Study Hub</h3>
        <p style={{ opacity: 0.9 }}>
          {new Date().getHours() < 12 ? 'Good morning ☀️' : new Date().getHours() < 17 ? 'Good afternoon 🌤' : 'Good evening 🌙'} — {docs.length === 0 ? 'Upload a document to get started' : 'Your AI-powered study command center'}
        </p>
        <p style={{ marginTop: 8 }}>Today&apos;s Plan:</p>
        <ul style={{ listStyle: 'disc', paddingLeft: 20, opacity: 0.9, fontSize: '0.9rem' }}>
          <li>Practice <strong>{dueCards}</strong> due flashcards</li>
          <li>Review exam topics</li>
          <li>Study {totalCards} total cards</li>
        </ul>
        <button onClick={() => setView('flashcards')} className="design-btn design-btn-secondary" style={{ marginTop: 16, background: 'rgba(255,255,255,0.2)', color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
          Start Study Session
        </button>
      </div>

      {/* Stats */}
      <div className="design-card">
        <h4>Performance Snapshot</h4>
        <p className="text-label" style={{ color: 'var(--text-muted, var(--text3))' }}>Your study stats.</p>
        <div className="button-grid" style={{ marginTop: 12 }}>
          {[
            { label: 'Documents', val: allStats.docs, col: '#6366f1' },
            { label: 'Flashcards', val: allStats.cards, col: '#8b5cf6' },
            { label: 'Exam Qs', val: allStats.exams, col: '#3b82f6' },
            { label: 'Cases', val: allStats.cases, col: '#06b6d4' },
          ].map(({ label, val, col }) => (
            <div key={label} className="design-card" style={{ padding: 12, marginBottom: 0, textAlign: 'center' }}>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, color: col }}>{val}</p>
              <p className="text-label" style={{ fontSize: '0.75rem' }}>{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="design-card">
        <h4>Quick Actions</h4>
        <div className="button-grid">
          {[
            { lbl: 'Study Cards', Icon: Layers, v: 'flashcards' },
            { lbl: 'Exams', Icon: CheckSquare, v: 'exams' },
            { lbl: 'Cases', Icon: Activity, v: 'cases' },
            { lbl: 'AI Tutor', Icon: MessageSquare, v: 'chat' },
          ].map(({ lbl, Icon, v }) => (
            <button key={v} onClick={() => setView(v)} className="design-btn design-btn-secondary">
              <Icon size={18} />{lbl}
            </button>
          ))}
        </div>
      </div>

      {/* Recent Docs + Upload */}
      <div className="design-card">
        <h4>My Documents</h4>
        <div className="flex flex-wrap gap-3 items-center" style={{ marginBottom: 16 }}>
          <div className="flex-1 min-w-[140px] relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 opacity-30" size={14} />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search…"
              className="design-card" style={{ padding: '10px 10px 10px 36px', marginBottom: 0 }} />
          </div>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="design-card" style={{ padding: '10px 14px', marginBottom: 0, width: 'auto' }}>
            <option value="date">Newest</option>
            <option value="name">Name</option>
          </select>
          <div className="flex rounded-xl overflow-hidden border border-[var(--card-border)]">
            <button onClick={() => setViewMode('grid')} className={`p-2.5 ${viewMode === 'grid' ? 'bg-[var(--accent)] text-white' : 'opacity-50'}`}><Grid size={18} /></button>
            <button onClick={() => setViewMode('list')} className={`p-2.5 ${viewMode === 'list' ? 'bg-[var(--accent)] text-white' : 'opacity-50'}`}><List size={18} /></button>
          </div>
          <label className={`design-btn cursor-pointer ${uploading ? 'opacity-50' : ''}`}>
            {uploading ? <Loader2 size={16} className="animate-spin" /> : <FileUp size={16} />}
            {uploading ? 'Uploading…' : 'Import'}
            <input ref={inputRef} type="file" multiple className="hidden" onChange={onUpload} disabled={uploading}
              accept="*/*" />
          </label>
        </div>

        {filtered.length === 0 ? (
          <div className="design-card text-center" style={{ padding: 32 }} onClick={() => inputRef.current?.click()}>
            <FileUp size={40} className="mx-auto mb-3 opacity-50" style={{ color: 'var(--accent)' }} />
            <p style={{ color: 'var(--text-muted, var(--text3))' }}>{search ? 'No results' : 'Drop or browse files'}</p>
            {!search && <button className="design-btn design-btn-feature" style={{ marginTop: 16 }}>Browse Files</button>}
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {filtered.map(doc => (
              <div key={doc.id} onClick={() => onOpen(doc.id)} className="design-card cursor-pointer">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-black mb-2" style={{ background: 'linear-gradient(135deg,var(--accent),var(--accent2,var(--accent)))' }}>
                  {doc.name.slice(0, 2).toUpperCase()}
                </div>
                <p className="font-bold text-sm truncate">{doc.name}</p>
                <p className="text-label text-xs">{doc.totalPages} pages</p>
                <button onClick={e => { e.stopPropagation(); onDelete(doc.id, e); }} className="design-btn design-btn-secondary mt-2" style={{ padding: '6px 12px', fontSize: 12 }}>Remove</button>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {filtered.map(doc => (
              <div key={doc.id} onClick={() => onOpen(doc.id)} className="design-card flex items-center gap-3 cursor-pointer">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-black shrink-0" style={{ background: 'linear-gradient(135deg,var(--accent),var(--accent2))' }}>
                  {doc.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold truncate">{doc.name}</p>
                  <p className="text-label text-xs">{doc.totalPages} pages</p>
                </div>
                <button onClick={e => { e.stopPropagation(); onDelete(doc.id, e); }} className="design-btn design-btn-secondary" style={{ padding: '6px 12px', fontSize: 12 }}>Remove</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   LIBRARY VIEW — with drag-drop, file types, stats (legacy, kept for ref)
═══════════════════════════════════════════════════════════════════ */
function LibraryView({ docs, uploading, onUpload, onOpen, onDelete, flashcards, exams, cases, notes }) {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [viewMode, setViewMode] = useState('grid');
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);
  const allStats = useMemo(() => ({
    docs: docs.length,
    cards: flashcards.reduce((s, set) => s + (set.cards?.length || 0), 0),
    exams: exams.reduce((s, e) => s + (e.questions?.length || 0), 0),
    cases: cases.length,
  }), [docs, flashcards, exams, cases]);

  const filtered = useMemo(() => {
    let d = docs.filter(doc => doc.name.toLowerCase().includes(search.toLowerCase()));
    if (sortBy === 'date') d = [...d].sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
    else if (sortBy === 'name') d = [...d].sort((a, b) => a.name.localeCompare(b.name));
    else if (sortBy === 'type') d = [...d].sort((a, b) => (a.fileCategory || 'pdf').localeCompare(b.fileCategory || 'pdf'));
    return d;
  }, [docs, search, sortBy]);

  const handleDrop = useCallback(e => {
    e.preventDefault(); setDragging(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length) onUpload({ target: { files } });
  }, [onUpload]);

  return (
    <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar scroll-content" style={{ touchAction: "pan-y", WebkitOverflowScrolling: "touch" }}
      onDragOver={e => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}>
      {/* Drop overlay */}
      {dragging && (
        <div className="fixed inset-0 z-[9998] bg-[var(--accent)]/20 border-4 border-dashed border-[var(--accent)] flex items-center justify-center pointer-events-none">
          <div className="bg-[var(--accent)] text-white rounded-3xl px-8 py-6 text-center shadow-2xl">
            <FileUp size={48} className="mx-auto mb-3 animate-bounce" />
            <p className="text-xl font-black">Drop any files here!</p>
            <p className="text-sm opacity-80 mt-1">PDF, Word, PowerPoint, Excel, Images, Code — all welcome</p>
          </div>
        </div>
      )}

      <div className="w-full p-6 lg:p-8 space-y-6">
        {/* Stats bar */}
        {docs.length > 0 && (
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: 'Documents', val: allStats.docs, icon: BookOpen, color: 'text-[var(--accent)]' },
              { label: 'Flashcards', val: allStats.cards, icon: Layers, color: 'text-emerald-500' },
              { label: 'Questions', val: allStats.exams, icon: CheckSquare, color: 'text-blue-500' },
              { label: 'Cases', val: allStats.cases, icon: Activity, color: 'text-purple-500' },
            ].map(({ label, val, icon: Icon, color }) => (
              <div key={label} className="glass rounded-2xl p-3 text-center">
                <Icon size={18} className={`mx-auto mb-1 ${color}`} />
                <div className={`text-xl font-black ${color}`}>{val}</div>
                <div className="text-xs font-black uppercase tracking-widest opacity-40">{label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Toolbar */}
        <div className="flex flex-wrap gap-3 items-center">
          <h1 className="text-2xl lg:text-3xl font-black tracking-tight flex-none">Library</h1>
          <div className="flex-1 min-w-[160px] relative">
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search files…"
              className="w-full bg-black/5 dark:bg-white/5 rounded-xl py-2.5 pl-9 pr-3 text-sm outline-none border border-[color:var(--border2,var(--border))] focus:border-[var(--accent)]/50 text-[var(--text)]" />
            <Search className="absolute left-2.5 top-3 opacity-30" size={14} />
          </div>
          <div className="flex items-center gap-2">
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}
              className="glass border border-[color:var(--border2,var(--border))] rounded-xl px-3 py-2.5 text-xs font-black outline-none text-[var(--text)] bg-[var(--surface,var(--card))] cursor-pointer">
              <option value="date">Newest</option>
              <option value="name">Name</option>
              <option value="type">Type</option>
            </select>
            <div className="flex glass rounded-xl overflow-hidden border border-[color:var(--border2,var(--border))]">
              <button onClick={() => setViewMode('grid')} className={`p-2.5 transition-colors ${viewMode === 'grid' ? 'bg-[var(--accent)] text-white' : 'opacity-50 hover:opacity-100'}`}><Grid size={18} /></button>
              <button onClick={() => setViewMode('list')} className={`p-2.5 transition-colors ${viewMode === 'list' ? 'bg-[var(--accent)] text-white' : 'opacity-50 hover:opacity-100'}`}><List size={18} /></button>
            </div>
            <label className={`btn-accent flex items-center gap-2 text-xs font-black uppercase tracking-widest px-4 py-2.5 rounded-xl shadow-lg cursor-pointer whitespace-nowrap ${uploading ? 'opacity-50 pointer-events-none' : ''}`}>
              {uploading ? <Loader2 size={16} className="animate-spin" /> : <FileUp size={16} />}
              {uploading ? 'Uploading…' : 'Import Files'}
              <input ref={inputRef} type="file" multiple className="hidden" onChange={onUpload} disabled={uploading}
                accept="*/*" />
            </label>
          </div>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="glass border-dashed border-2 border-[color:var(--border2,var(--border))] rounded-3xl p-12 lg:p-16 text-center flex flex-col items-center gap-4"
            onClick={() => inputRef.current?.click()}>
            <div className="w-20 h-20 rounded-3xl bg-[var(--accent)]/10 flex items-center justify-center">
              <FileUp size={40} className="text-[var(--accent)] opacity-60" />
            </div>
            <div>
              <h2 className="text-xl font-black opacity-70">{search ? 'No results found' : 'Drop any file to begin'}</h2>
              <p className="text-sm opacity-40 mt-1">PDF · Word · PowerPoint · Excel · CSV · Images · Code · Text — everything works</p>
            </div>
            {!search && <button className="btn-accent px-6 py-3 rounded-2xl text-sm font-black uppercase tracking-widest shadow-lg">Browse Files</button>}
          </div>
        )}

        {/* Grid view */}
        {filtered.length > 0 && viewMode === 'grid' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4">
            {filtered.map(doc => {
              const nCards = flashcards.filter(f => f.docId === doc.id).reduce((s, set) => s + (set.cards?.length || 0), 0);
              const nExams = exams.filter(e => e.docId === doc.id).length;
              const nCases = cases.filter(c => c.docId === doc.id).length;
              const cat = doc.fileCategory || 'pdf';
              return (
                <div key={doc.id} onClick={() => onOpen(doc.id)} className="card-hover glass rounded-2xl overflow-hidden flex flex-col relative group cursor-pointer">
                  <button onClick={ev => onDelete(doc.id, ev)}
                    className="absolute top-2 right-2 z-10 w-7 h-7 bg-black/60 hover:bg-red-500 rounded-xl text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <Trash2 size={16} />
                  </button>
                  {cat === 'image' && doc.imagePreview
                    ? <div className="h-28 lg:h-32 overflow-hidden"><img src={doc.imagePreview} className="w-full h-full object-cover" alt={doc.name} /></div>
                    : <FileCover category={cat} name={doc.name} />
                  }
                  <div className="p-3 flex-1 flex flex-col gap-2">
                    <h3 className="font-bold text-xs lg:text-xs leading-snug line-clamp-2 flex-1">{doc.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xs opacity-40 font-mono">{doc.totalPages} {cat === 'image' ? 'view' : 'pages'}</span>
                      <span className="text-xs font-black uppercase text-[var(--accent)] opacity-60">{(FILE_ICONS[cat] || FILE_ICONS.unknown).label}</span>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                      {nCards > 0 && <span className="text-xs font-bold px-1.5 py-0.5 bg-[var(--accent)]/10 text-[var(--accent)] rounded-md">{nCards} Cards</span>}
                      {nExams > 0 && <span className="text-xs font-bold px-1.5 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-md">{nExams} Exams</span>}
                      {nCases > 0 && <span className="text-xs font-bold px-1.5 py-0.5 bg-blue-500/10 text-blue-500 rounded-md">{nCases} Cases</span>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* List view */}
        {filtered.length > 0 && viewMode === 'list' && (
          <div className="space-y-2">
            {filtered.map(doc => {
              const cat = doc.fileCategory || 'pdf';
              const cfg = FILE_ICONS[cat] || FILE_ICONS.unknown;
              const Icon = cfg.Icon;
              const nCards = flashcards.filter(f => f.docId === doc.id).reduce((s, set) => s + (set.cards?.length || 0), 0);
              return (
                <div key={doc.id} onClick={() => onOpen(doc.id)} className="card-hover glass rounded-2xl p-4 flex items-center gap-4 cursor-pointer group">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cfg.from} ${cfg.to} flex items-center justify-center shrink-0`}>
                    <Icon size={18} className="text-white opacity-80" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm truncate">{doc.name}</div>
                    <div className="text-xs opacity-40 mt-0.5">{cfg.label} · {doc.totalPages} pages · {new Date(doc.addedAt).toLocaleDateString()}</div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {nCards > 0 && <span className="text-xs font-bold px-2 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-lg">{nCards} cards</span>}
                    <button onClick={ev => onDelete(doc.id, ev)} className="w-8 h-8 hover:bg-red-500/10 hover:text-red-500 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   DOCUMENT WORKSPACE — PDF canvas + text/image viewer
═══════════════════════════════════════════════════════════════════ */
function DocWorkspace({ activeDoc, setDocs, currentPage, setCurrentPage, openDocs, closeTab, setActiveId, docs, onBack, rpOpen, setRpOpen }) {
  const [pdf, setPdf] = useState(null);
  const [loading, setLoading] = useState(true);
  const [scale, setScale] = useState(1);
  const [dims, setDims] = useState({ w: 0, h: 0 });
  const [pageText, setPageText] = useState('');
  const [imageData, setImageData] = useState(null);
  const canvasRef = useRef(null); const containerRef = useRef(null);
  const textRef = useRef(null); const renderRef = useRef(null); const pdfRef = useRef(null);
  const renderGenRef = useRef(0); // BUG-005 fix: generation counter prevents stale renders
  const cat = activeDoc?.fileCategory || 'pdf';
  const isPdf = cat === 'pdf';

  useEffect(() => {
    if (!activeDoc?.id) return;
    let mounted = true; setLoading(true); setPdf(null); setPageText(''); setImageData(null);
    if (pdfRef.current) { try { pdfRef.current.destroy(); } catch { } pdfRef.current = null; }
    (async () => {
      try {
        const data = await getFile(activeDoc.id); if (!data || !mounted) return;
        if (isPdf) {
          const pdfjs = await loadPdfJs();
          const loaded = await pdfjs.getDocument({ data: (data.buffer || data).slice(0) }).promise;
          if (mounted) { pdfRef.current = loaded; setPdf(loaded); }
          else { try { loaded.destroy(); } catch { } }
        } else if (cat === 'image') {
          if (mounted && data.imageBase64) setImageData(`data:${data.imageType || 'image/jpeg'};base64,${data.imageBase64}`);
        } else {
          if (mounted && data.pagesText) setPageText(data.pagesText[currentPage] || '');
        }
      } catch (e) { console.error(e); }
      finally { if (mounted) setLoading(false); }
    })();
    return () => { mounted = false; };
  }, [activeDoc?.id, cat]);

  useEffect(() => {
    if (!isPdf) return;
    if (!pdf) return;
    let mounted = true;
    const gen = ++renderGenRef.current; // BUG-005 fix: track generation
    (async () => {
      try {
        const page = await pdf.getPage(currentPage);
        const cont = containerRef.current; if (!cont || !mounted) return;
        const tmp = page.getViewport({ scale: 1 });
        const base = cont.clientWidth / tmp.width;
        const final = Math.min(Math.max(base * scale, .5), 5);
        const vp = page.getViewport({ scale: final });
        if (mounted && gen === renderGenRef.current) setDims({ w: vp.width, h: vp.height });
        const canvas = canvasRef.current;
        if (canvas && gen === renderGenRef.current) {
          const pr = window.devicePixelRatio || 1;
          canvas.width = Math.floor(vp.width * pr); canvas.height = Math.floor(vp.height * pr);
          canvas.style.width = `${vp.width}px`; canvas.style.height = `${vp.height}px`;
          if (renderRef.current) renderRef.current.cancel();
          renderRef.current = page.render({ canvasContext: canvas.getContext('2d'), viewport: vp, transform: [pr, 0, 0, pr, 0, 0] });
          await renderRef.current.promise;
        }
        const tl = textRef.current;
        if (tl && mounted && gen === renderGenRef.current) {
          tl.innerHTML = ''; tl.style.setProperty('--scale-factor', vp.scale);
          const tc = await page.getTextContent();
          window.pdfjsLib?.renderTextLayer({ textContentSource: tc, container: tl, viewport: vp, textDivs: [] });
        }
      } catch (e) { if (e?.name !== 'RenderingCancelledException') console.warn(e?.message); }
    })();
    return () => { mounted = false; if (renderRef.current) renderRef.current.cancel(); };
  }, [currentPage, pdf, scale, isPdf]);

  // For non-PDF: load page text on page change
  useEffect(() => {
    if (isPdf || cat === 'image' || !activeDoc) return;
    (async () => {
      try { const data = await getFile(activeDoc.id); if (data?.pagesText) setPageText(data.pagesText[currentPage] || ''); }
      catch { }
    })();
  }, [currentPage, isPdf, cat, activeDoc]);

  const nav = useCallback(dir => {
    if (!activeDoc) return;
    const next = Math.max(1, Math.min(activeDoc.totalPages, currentPage + dir));
    if (next !== currentPage) { setCurrentPage(next); setDocs(p => p.map(d => d.id === activeDoc.id ? { ...d, progress: next } : d)); containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' }); }
  }, [currentPage, activeDoc, setCurrentPage, setDocs]);

  useEffect(() => {
    const kd = e => { if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return; if (e.key === 'ArrowLeft') nav(-1); if (e.key === 'ArrowRight') nav(1); };
    document.addEventListener('keydown', kd); return () => document.removeEventListener('keydown', kd);
  }, [nav]);

  if (!activeDoc) return null;
  const cfg = FILE_ICONS[cat] || FILE_ICONS.unknown;

  return (
    <div className="flex-1 flex flex-col h-full min-h-0">
      {/* Top bar */}
      <div className="h-12 glass flex items-center gap-2 px-3 shrink-0 border-t-0 border-x-0">
        <button onClick={onBack} className="w-8 h-8 glass rounded-xl flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 shrink-0"><ChevronLeft size={16} /></button>
        <div className={`w-5 h-5 rounded-md bg-gradient-to-br ${cfg.from} ${cfg.to} flex items-center justify-center shrink-0`}>
          <cfg.Icon size={11} className="text-white" />
        </div>
        <span className="font-bold text-xs truncate flex-1 min-w-0">{activeDoc.name}</span>
        {isPdf && (
          <div className="flex items-center gap-1 shrink-0">
            <button onClick={() => setScale(s => Math.max(s - .2, .5))} className="w-7 h-7 glass rounded-lg flex items-center justify-center opacity-60 hover:opacity-100"><ZoomOut size={16} /></button>
            <button onClick={() => setScale(1)} className="w-7 h-7 glass rounded-lg flex items-center justify-center opacity-60 hover:opacity-100"><Maximize size={16} /></button>
            <button onClick={() => setScale(s => Math.min(s + .2, 4))} className="w-7 h-7 glass rounded-lg flex items-center justify-center opacity-60 hover:opacity-100"><ZoomIn size={16} /></button>
          </div>
        )}
        <button onClick={() => setRpOpen(p => !p)}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-black shrink-0 transition-all ${rpOpen ? 'bg-[var(--accent)] text-white' : 'glass text-[var(--accent)]'}`}>
          <Sparkles size={13} /><span className="hidden sm:inline">{rpOpen ? 'Hide' : 'AI Tools'}</span>
        </button>
      </div>

      {/* Tab bar */}
      {openDocs.length > 1 && (
        <div className="flex gap-1.5 px-3 py-1.5 border-b border-[color:var(--border2,var(--border))] overflow-x-auto custom-scrollbar shrink-0 bg-[var(--surface,var(--card))]">
          {openDocs.map(id => {
            const doc = docs.find(d => d.id === id); if (!doc) return null;
            const dc = FILE_ICONS[doc.fileCategory || 'pdf'] || FILE_ICONS.pdf;
            return (
              <div key={id} onClick={() => setActiveId(id)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg cursor-pointer text-xs font-bold shrink-0 transition-colors
                  ${id === activeDoc.id ? 'bg-[var(--accent)] text-white' : 'glass hover:bg-black/5 dark:hover:bg-white/5'}`}>
                <dc.Icon size={10} />
                <span className="truncate max-w-[80px]">{doc.name}</span>
                <button onClick={e => { e.stopPropagation(); closeTab(id); }} className="opacity-60 hover:opacity-100 ml-0.5"><X size={10} /></button>
              </div>
            );
          })}
        </div>
      )}

      {/* Content area */}
      <div ref={containerRef} className="flex-1 overflow-auto custom-scrollbar min-h-0 bg-zinc-200 dark:bg-zinc-900">
        {loading ? (
          <div className="flex items-center justify-center h-full gap-3 text-[var(--accent)]">
            <Loader2 size={28} className="animate-spin" /><span className="text-xs font-bold opacity-50">Loading…</span>
          </div>
        ) : isPdf && pdf ? (
          <div className="p-2 pb-20 lg:pb-4 flex justify-center">
            <div className="relative bg-white shadow-2xl" style={{ width: dims.w ? `${dims.w}px` : '100%', height: dims.h ? `${dims.h}px` : 'auto' }}>
              <canvas ref={canvasRef} />
              <div ref={textRef} style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 1, lineHeight: 1, userSelect: 'text' }} />
            </div>
          </div>
        ) : cat === 'image' && imageData ? (
          <div className="flex items-center justify-center p-4 pb-20 lg:pb-4 min-h-full">
            <img src={imageData} alt={activeDoc.name} className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl" />
          </div>
        ) : (
          <div className="p-6 pb-20 lg:pb-6 w-full">
            <div className="bg-[var(--surface,var(--card))] rounded-2xl p-6 shadow-sm border border-[color:var(--border2,var(--border))] min-h-[60vh]">
              <pre className="text-sm leading-relaxed whitespace-pre-wrap font-mono text-[var(--text)] opacity-90 break-words">{pageText || '(No content on this page)'}</pre>
            </div>
          </div>
        )}
      </div>

      {/* Page nav */}
      <div className="h-14 glass flex items-center justify-center gap-3 shrink-0 border-t border-[color:var(--border2,var(--border))] border-x-0 border-b-0
        fixed bottom-[72px] left-0 right-0 z-[200] lg:relative lg:bottom-auto lg:z-auto">
        <button onClick={() => nav(-1)} disabled={currentPage <= 1} className="w-10 h-10 glass rounded-xl flex items-center justify-center disabled:opacity-30 active:scale-95"><ChevronLeft size={18} /></button>
        <div className="px-4 py-2 glass rounded-xl font-mono text-sm font-bold border border-[color:var(--border2,var(--border))] min-w-[90px] text-center">
          <span className="text-[var(--accent)]">{currentPage}</span> / {activeDoc.totalPages}
        </div>
        <button onClick={() => nav(1)} disabled={currentPage >= activeDoc.totalPages}
          className="w-10 h-10 btn-accent rounded-xl flex items-center justify-center disabled:opacity-40 active:scale-95 shadow-md"><ChevronRight size={18} /></button>
      </div>
      <div className="h-14 lg:hidden shrink-0" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   GENERATE PANEL — all AI tools including new ones
═══════════════════════════════════════════════════════════════════ */
function GeneratePanel({ activeDoc, bgTask, onStart, onClear, setFlashcards, setExams, setCases, setNotes, onVault, currentPage, addToast, settings, mindMaps, setMindMaps, timelines, setTimelines }) {
  const [startPage, setStartPage] = useState(currentPage);
  const [endPage, setEndPage] = useState(currentPage);
  const [entireFile, setEntireFile] = useState(false);
  const [type, setType] = useState('exam');
  const [count, setCount] = useState(20);
  const [difficulty, setDifficulty] = useState(2);
  const [targetLang, setTargetLang] = useState('Spanish');
  const levels = ['Hard', 'Expert', 'Insane'];

  useEffect(() => { if (!bgTask) { setStartPage(currentPage); if (!entireFile) setEndPage(currentPage); } }, [currentPage, bgTask]);
  useEffect(() => { if (entireFile && activeDoc) { setStartPage(1); setEndPage(activeDoc.totalPages); } }, [entireFile, activeDoc]);

  if (!activeDoc) return <div className="flex-1 flex items-center justify-center text-sm opacity-40 font-bold">No document open.</div>;

  const go = () => onStart(type, activeDoc.id, startPage, endPage, { count, difficultyLevel: levels[difficulty - 1], targetLang });

  const save = () => {
    if (!bgTask?.result) return;
    const g = bgTask.result;
    if (g.type === 'flashcards') {
      const cards = g.data.map(c => ({ id: Date.now() + Math.random(), q: c.q, a: c.a, evidence: c.evidence, sourcePage: c.sourcePage, repetitions: 0, ef: 2.5, interval: 1, nextReview: Date.now(), lastReview: Date.now() }));
      setFlashcards(p => [...p, { id: Date.now().toString(), docId: activeDoc.id, sourcePages: g.pages, title: `Cards — Pgs ${g.pages}`, cards, createdAt: new Date().toISOString() }]);
      addToast(`${cards.length} flashcards saved!`, 'success');
    } else if (g.type === 'cases') {
      setCases(p => [...p, { id: Date.now().toString(), docId: activeDoc.id, sourcePages: g.pages, title: 'Patient Cases', questions: g.data, createdAt: new Date().toISOString() }]);
      addToast(`${g.data.length} cases saved!`, 'success');
    } else if (g.type === 'exam') {
      setExams(p => [...p, { id: Date.now().toString(), docId: activeDoc.id, sourcePages: g.pages, title: `Exam — Pgs ${g.pages}`, questions: g.data, createdAt: new Date().toISOString() }]);
      addToast(`${g.data.length} questions saved!`, 'success');
    } else if (g.type === 'mindmap') {
      if (setMindMaps) setMindMaps(p => [...p, { id: Date.now().toString(), docId: activeDoc.id, pages: g.pages, data: g.data, createdAt: new Date().toISOString() }]);
      addToast('Mind map saved!', 'success');
    } else if (g.type === 'timeline') {
      if (setTimelines) setTimelines(p => [...p, { id: Date.now().toString(), docId: activeDoc.id, pages: g.pages, events: g.data, createdAt: new Date().toISOString() }]);
      addToast('Timeline saved!', 'success');
    } else {
      setNotes(p => [...p, { id: Date.now().toString(), docId: activeDoc.id, title: `${g.title || 'Note'} · Pgs ${g.pages}`, content: g.data, createdAt: new Date().toISOString() }]);
      addToast('Saved!', 'success');
    }
    onClear(); onVault();
  };

  const TOOLS = [
    ['flashcards', 'Cards', Layers, '#6366f1'], ['exam', 'Exam', CheckSquare, '#3b82f6'],
    ['summary', 'Summary', AlignLeft, '#10b981'], ['cases', 'Cases', Activity, '#8b5cf6'],
    ['clinical', 'Clinical', Stethoscope, '#06b6d4'], ['treatment', 'Treat', Pill, '#f59e0b'],
    ['labs', 'Labs', Thermometer, '#ef4444'], ['mnemonics', 'Memory', Lightbulb, '#84cc16'],
    ['eli5', 'ELI5', Baby, '#f97316'], ['mindmap', 'MindMap', Network, '#a855f7'],
    ['concepts', 'Concepts', Tag, '#14b8a6'], ['timeline', 'Timeline', Clock, '#6366f1'],
    ['translate', 'Translate', Languages, '#ec4899'], ['smart-summary', 'SmartSum', Wand2, '#f59e0b'],
    ['differential', 'Diff Dx', FlaskConical, '#8b5cf6'], ['code-explain', 'Explain', Code, '#94a3b8'],
  ];

  /* ── RESULTS VIEW ── */
  if (bgTask?.isFinished) return (
    <div className="flex-1 min-h-0 flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 bg-emerald-500/10 border-b border-emerald-500/20 shrink-0">
        <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
          <CheckCircle2 size={15} />{Array.isArray(bgTask.result?.data) ? `${bgTask.result.data.length} items ready` : 'Done!'}
        </span>
        <div className="flex gap-2">
          <button onClick={onClear} className="px-3 py-1.5 glass rounded-xl text-xs font-black uppercase opacity-60 hover:opacity-100">Discard</button>
          <button onClick={save} className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-black uppercase flex items-center gap-1.5 shadow-md">
            <Save size={16} /> Save
          </button>
        </div>
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar p-4 space-y-4" style={{ touchAction: "pan-y", WebkitOverflowScrolling: "touch" }}>
        {/* Flashcard preview */}
        {bgTask.result?.type === 'flashcards' && bgTask.result.data.slice(0, 5).map((item, i) => (
          <div key={i} className="glass p-4 rounded-2xl">
            <p className="font-bold text-xs mb-3 leading-relaxed"><span className="opacity-30 mr-1.5 font-mono text-xs">Q{i + 1}</span>{item.q}</p>
            <div className="bg-[var(--accent)]/10 border border-[var(--accent)]/20 p-3 rounded-xl text-xs text-[var(--accent)]">{item.a}</div>
            {item.evidence && <p className="mt-2 text-xs opacity-40 italic">"{item.evidence}" — Pg {item.sourcePage}</p>}
          </div>
        ))}
        {/* Exam/cases preview */}
        {(bgTask.result?.type === 'exam' || bgTask.result?.type === 'cases') && bgTask.result.data.slice(0, 3).map((item, i) => {
          const q = item.examQuestion || item;
          return (
            <div key={i} className="glass p-4 rounded-2xl">
              <p className="font-bold text-xs mb-3"><span className="opacity-30 mr-1.5 text-xs">Q{i + 1}</span>{item.vignette || q.q}</p>
              <div className="space-y-1.5">
                {(q.options || []).map((opt, oi) => (
                  <div key={oi} className={`px-3 py-2 rounded-xl text-xs font-medium border ${oi === q.correct ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold' : 'glass border-transparent'}`}>
                    <span className="font-black opacity-50 mr-2">{String.fromCharCode(65 + oi)}.</span>{opt}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        {/* Mind map preview */}
        {bgTask.result?.type === 'mindmap' && <MindMap data={bgTask.result.data} />}
        {/* Timeline preview */}
        {bgTask.result?.type === 'timeline' && <TimelineView events={bgTask.result.data.events || bgTask.result.data} />}
        {/* Concepts preview */}
        {bgTask.result?.type === 'concepts' && bgTask.result.data.slice(0, 5).map((c, i) => (
          <div key={i} className="glass p-4 rounded-2xl">
            <p className="font-black text-xs mb-1 text-[var(--accent)]">{c.concept || c.term}</p>
            <p className="text-xs leading-relaxed opacity-80">{c.definition || c.explanation}</p>
            {c.example && <p className="text-xs mt-2 opacity-50 italic">Ex: {c.example}</p>}
          </div>
        ))}
        {/* Text results */}
        {['summary', 'clinical', 'treatment', 'labs', 'eli5', 'mnemonics', 'translate', 'differential', 'smart-summary', 'code-explain'].includes(bgTask.result?.type) && (
          <div className="glass p-4 rounded-2xl">
            <pre className="text-xs leading-relaxed whitespace-pre-wrap text-[var(--text)] opacity-90">{bgTask.result.data}</pre>
          </div>
        )}
        {bgTask.result?.data?.length > 5 && <p className="text-center text-xs opacity-40 font-bold">+{bgTask.result.data.length - 5} more items saved</p>}
      </div>
    </div>
  );

  /* ── CONFIG VIEW ── */
  return (
    <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar p-4 pb-24 lg:pb-6 space-y-4 h-full">
      {/* Page range */}
      <div className="glass rounded-2xl p-4">
        <h3 className="text-sm font-black uppercase tracking-widest opacity-60 mb-4 flex items-center gap-2"><BookOpen size={16} /> Page Range</h3>
        <label className="flex items-center gap-2 mb-3 cursor-pointer">
          <div onClick={() => setEntireFile(v => !v)}
            className={`w-9 h-5 rounded-full transition-colors relative ${entireFile ? 'bg-[var(--accent)]' : 'bg-gray-300 dark:bg-zinc-600'}`}>
            <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${entireFile ? 'translate-x-4' : 'translate-x-0.5'}`} />
          </div>
          <span className="text-xs font-bold opacity-60">Entire file</span>
        </label>
        {!entireFile && (
          <div className="flex gap-3">
            {[['From', startPage, setStartPage], ['To', endPage, setEndPage]].map(([l, v, s]) => (
              <div key={l} className="flex-1">
                <label className="text-xs font-black uppercase tracking-widest opacity-40 block mb-1">{l}</label>
                <input type="number" min={1} max={activeDoc.totalPages} value={v} onChange={e => s(Number(e.target.value))}
                  className="w-full glass rounded-xl px-3 py-2.5 text-center font-mono font-bold text-sm outline-none focus:border-[var(--accent)] border border-[color:var(--border2,var(--border))] text-[var(--text)]" />
              </div>
            ))}
          </div>
        )}
        {entireFile && <p className="text-xs text-[var(--accent)] font-bold mt-2 text-center">All {activeDoc.totalPages} pages selected</p>}
      </div>

      {/* Tool selector */}
      <div className="glass rounded-2xl p-4">
        <h3 className="text-sm font-black uppercase tracking-widest opacity-60 mb-4 flex items-center gap-2"><Zap size={16} /> AI Tool</h3>
        <div className="grid grid-cols-4 gap-1.5">
          {TOOLS.map(([id, lbl, Icon, color]) => (
            <button key={id} onClick={() => setType(id)}
              className={`py-2.5 flex flex-col items-center gap-1 rounded-xl text-xs font-black uppercase tracking-wider transition-all border
                ${type === id ? 'text-white border-transparent shadow-md scale-105' : 'glass opacity-60 hover:opacity-100 border-[color:var(--border2,var(--border))]'}`}
              style={type === id ? { backgroundColor: color } : {}}>
              <Icon size={18} />{lbl}
            </button>
          ))}
        </div>
      </div>

      {/* Language picker for translate */}
      {type === 'translate' && (
        <div className="glass rounded-2xl p-4">
          <h3 className="text-sm font-black uppercase tracking-widest opacity-60 mb-4">Target Language</h3>
          <div className="flex flex-wrap gap-2">
            {['Arabic', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Portuguese', 'Turkish', 'Hindi', 'Urdu'].map(lang => (
              <button key={lang} onClick={() => setTargetLang(lang)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${targetLang === lang ? 'bg-[var(--accent)] text-white' : 'glass opacity-60 hover:opacity-100'}`}>
                {lang}
              </button>
            ))}
          </div>
          <input value={targetLang} onChange={e => setTargetLang(e.target.value)} placeholder="Or type any language…"
            className="mt-3 w-full glass border border-[color:var(--border2,var(--border))] rounded-xl px-3 py-2 text-xs outline-none focus:border-[var(--accent)] text-[var(--text)]" />
        </div>
      )}

      {/* Count for batch tasks */}
      {['flashcards', 'exam', 'cases'].includes(type) && (
        <div className="glass rounded-2xl p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-black uppercase tracking-widest opacity-60 flex items-center gap-2"><ListChecks size={16} /> Quantity</h3>
            <span className="text-sm font-black text-[var(--accent)]">{count}</span>
          </div>
          <input type="range" min="1" max="1000" value={count} onChange={e => setCount(+e.target.value)}
            className="w-full accent-[var(--accent)] mb-2" />
          <div className="flex gap-1.5 flex-wrap">
            {[5, 10, 20, 50, 100, 250, 500, 1000].map(n => (
              <button key={n} onClick={() => setCount(n)}
                className={`px-2 py-1 rounded-lg text-xs font-black transition-colors ${count === n ? 'bg-[var(--accent)] text-white' : 'glass opacity-60 hover:opacity-100'}`}>{n}</button>
            ))}
          </div>
          {count > 50 && <p className="text-xs text-amber-500 font-bold mt-2 flex items-center gap-1"><AlertCircle size={10} />Parallel AI — {count}+ items in ~30-120s</p>}
        </div>
      )}

      {/* Difficulty */}
      {['flashcards', 'exam', 'cases'].includes(type) && (
        <div className="glass rounded-2xl p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-black uppercase tracking-widest opacity-60">Difficulty</h3>
            <span className="text-xs font-black text-[var(--accent)]">{levels[difficulty - 1]}</span>
          </div>
          <input type="range" min="1" max="3" value={difficulty} onChange={e => setDifficulty(+e.target.value)}
            className="w-full accent-[var(--accent)]" />
        </div>
      )}

      {/* GO */}
      <button onClick={go} disabled={!!bgTask}
        className="w-full py-4 btn-accent rounded-2xl text-sm font-black uppercase tracking-widest disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl">
        {bgTask ? <Loader2 size={18} className="animate-spin" /> : <Zap size={18} fill="currentColor" />}
        {bgTask ? `${bgTask.msg}` : '⚡ Generate Now'}
      </button>

      {/* Progress */}
      {bgTask && !bgTask.isFinished && (
        <div className="glass rounded-2xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-black opacity-60">{bgTask.msg}</span>
            <span className="text-xs font-black text-[var(--accent)]">{bgTask.done || 0}/{bgTask.total || 1}</span>
          </div>
          <div className="w-full bg-black/10 dark:bg-white/10 rounded-full h-2.5 overflow-hidden">
            <div className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent2,var(--accent))] h-full rounded-full transition-all duration-300 animate-pulse"
              style={{ width: `${bgTask.total ? ((bgTask.done || 0) / bgTask.total) * 100 : 10}%` }} />
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   CHAT PANEL (AI Studio - streaming)
═══════════════════════════════════════════════════════════════════ */
function ChatPanel({ activeDoc, settings, currentPage }) {
  const [msgs, setMsgs] = useState([{ role: 'assistant', content: 'Ready. Ask me anything about this document.' }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState('page');
  const [listening, setListening] = useState(false);
  const endRef = useRef(null);
  const recogRef = useRef(null);
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, loading]);

  const toggleVoice = () => {
    if (listening) {
      recogRef.current?.abort(); // BUG-008 fix: abort is immediate, stop waits
      recogRef.current = null;
      setListening(false);
      return;
    }
    if (recogRef.current) { recogRef.current.abort(); recogRef.current = null; }
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;
    const r = new SR(); r.continuous = false; r.interimResults = true;
    r.onresult = e => { setInput(Array.from(e.results).map(r => r[0].transcript).join('')); };
    r.onend = () => setListening(false); r.onerror = () => setListening(false);
    r.start(); recogRef.current = r; setListening(true);
  };

  const send = async () => {
    if (!input.trim() || loading) return;
    const msg = input; setInput('');
    setMsgs(p => [...p, { role: 'user', content: msg }, { role: 'assistant', content: '' }]); setLoading(true);
    try {
      const fileData = await getFile(activeDoc.id);
      let textContext = '';
      if (activeDoc.fileCategory === 'image' && fileData?.imageBase64) {
        const result = await callAIWithVision(
          `Document context: ${activeDoc.name}\nUser question: ${msg}`,
          fileData.imageBase64, fileData.imageType || 'image/jpeg', settings, 3000);
        await streamTextAsTyping(result, chunk => {
          setMsgs(p => [...p.slice(0, -1), { role: 'assistant', content: chunk }]);
        }, 10);
        setLoading(false); return;
      }
      if (mode === 'page') {
        textContext = fileData?.pagesText?.[currentPage] || 'No text on this page.';
      } else {
        textContext = Object.entries(fileData?.pagesText || {}).map(([p, t]) => `[Page ${p}]\n${t}`).join('\n\n').substring(0, 80000);
      }
      const hist = msgs.slice(-6).map(m => `${m.role === 'user' ? 'USER' : 'AI'}: ${m.content}`).join('\n');
      const prompt = `DOCUMENT:\n${textContext}\n\nCONVERSATION:\n${hist}\n\nQUESTION: ${msg}\n\nAnswer clearly and precisely.`;
      await callAIStreaming(prompt, chunk => { setMsgs(p => [...p.slice(0, -1), { role: 'assistant', content: chunk }]); }, settings, 4000);
    } catch (e) { setMsgs(p => [...p.slice(0, -1), { role: 'assistant', content: `⚠️ ${e.message}` }]); }
    finally { setLoading(false); }
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 h-full">
      <div className="flex shrink-0 border-b border-[color:var(--border2,var(--border))] bg-[var(--surface,var(--card))]">
        {['page', 'document'].map(m => (
          <button key={m} onClick={() => setMode(m)}
            className={`flex-1 py-2.5 text-xs font-black uppercase tracking-widest transition-colors border-b-2
              ${mode === m ? 'border-[var(--accent)] text-[var(--accent)]' : 'border-transparent opacity-50 hover:opacity-80'}`}>
            {m === 'page' ? `Page ${currentPage}` : 'Full Doc'}
          </button>
        ))}
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar p-4 space-y-3" ref={scrollContainerRef}>
        {msgs.map((m, i) => (
          <div key={i} className={`flex gap-2.5 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-[var(--accent)]' : 'overflow-hidden glass'}`}>
              {m.role === 'user' ? <UserCircle2 size={16} className="text-white" /> : <img src={MARIAM_IMG} className="w-full h-full object-cover" alt="AI" />}
            </div>
            <div className={`px-3.5 py-2.5 text-xs leading-relaxed max-w-[84%] rounded-2xl
              ${m.role === 'user' ? 'bg-[var(--accent)] text-white rounded-tr-sm' : 'glass rounded-tl-sm'}`}>
              {m.content ? renderMarkdown(m.content) : <span className="opacity-30">▊</span>}
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>
      {/* Input inside AiTutorPanel */}
      <div className="shrink-0 border-t border-[color:var(--border2,var(--border))] bg-[var(--surface,var(--card))]"
        style={{ padding: '12px 12px calc(12px + env(safe-area-inset-bottom)) 12px' }}>
        <div className="flex gap-2 items-end glass rounded-2xl p-2 border border-[color:var(--border2,var(--border))] focus-within:border-[var(--accent)]/50">
          <textarea value={input} onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if ((e.key === 'Enter' || e.keyCode === 13) && !e.shiftKey) { e.preventDefault(); e.stopPropagation(); send(); } }}
            placeholder="Ask about this document…" disabled={loading} rows={1} enterKeyHint="send"
            className="flex-1 bg-[var(--bg)] border border-[color:var(--border2,var(--border))] rounded-xl px-3 py-2 text-xs outline-none resize-none focus:border-[var(--accent)] text-[var(--text)] min-h-[36px] max-h-24" />
          <button onClick={toggleVoice}
            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${listening ? 'bg-red-500 text-white animate-pulse' : 'glass text-[var(--accent)]'}`}>
            {listening ? <MicOff size={18} /> : <Mic size={18} />}
          </button>
          <button onClick={send} disabled={loading || !input.trim()}
            className="w-9 h-9 bg-[var(--accent)] disabled:opacity-40 rounded-xl text-white flex items-center justify-center shrink-0"><Send size={18} /></button>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   VAULT PANEL
═══════════════════════════════════════════════════════════════════ */
function VaultPanel({ activeDocId, flashcards, setFlashcards, exams, setExams, cases, setCases, notes, setNotes, addToast, setCurrentPage, setView, settings, mindMaps, timelines }) {
  const docFc = flashcards.filter(f => f.docId === activeDocId);
  const docEx = exams.filter(e => e.docId === activeDocId);
  const docCa = cases.filter(c => c.docId === activeDocId);
  const docNo = notes.filter(n => n.docId === activeDocId);
  const docMm = (mindMaps || []).filter(m => m.docId === activeDocId);
  const docTl = (timelines || []).filter(t => t.docId === activeDocId);
  const [expanded, setExpanded] = useState({});
  const toggle = k => setExpanded(p => ({ ...p, [k]: !p[k] }));

  const Section = ({ title, count, colorClass, children, id }) => (
    <div className="glass rounded-2xl overflow-hidden">
      <button onClick={() => toggle(id)} className="w-full flex items-center justify-between p-4 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
        <div className="flex items-center gap-2">
          <span className={`text-xs font-black uppercase tracking-widest ${colorClass}`}>{title}</span>
          <span className={`text-xs font-black px-2 py-0.5 rounded-full ${colorClass} bg-current/10`}>{count}</span>
        </div>
        {expanded[id] ? <ChevronUp size={18} className="opacity-40" /> : <ChevronDown size={18} className="opacity-40" />}
      </button>
      {expanded[id] && <div className="border-t border-[color:var(--border2,var(--border))] p-3 space-y-2">{children}</div>}
    </div>
  );

  return (
    <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar p-4 space-y-3">
      <Section id="fc" title="Flashcards" count={docFc.reduce((s, f) => s + (f.cards?.length || 0), 0)} colorClass="text-[var(--accent)]">
        {docFc.map(set => (
          <div key={set.id} className="flex items-center justify-between p-3 glass rounded-xl">
            <div>
              <p className="text-sm font-bold">{set.title}</p>
              <p className="text-xs opacity-40">{set.cards?.length} cards · {new Date(set.createdAt).toLocaleDateString()}</p>
            </div>
            <div className="flex gap-1.5">
              <button onClick={() => setView('flashcards')} className="text-xs font-black px-2 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-lg">Study</button>
              <button onClick={() => setFlashcards(p => p.filter(f => f.id !== set.id))} className="text-xs font-black px-2 py-1 bg-red-500/10 text-red-500 rounded-lg" style={{ display: set.isBuiltin ? 'none' : 'inline-flex' }}>Del</button>
            </div>
          </div>
        ))}
        {!docFc.length && <p className="text-center text-xs opacity-40 py-2 font-bold">No flashcards yet</p>}
      </Section>

      <Section id="ex" title="Exams" count={docEx.reduce((s, e) => s + (e.questions?.length || 0), 0)} colorClass="text-emerald-500">
        {docEx.map(ex => (
          <div key={ex.id} className="flex items-center justify-between p-3 glass rounded-xl">
            <div><p className="text-xs font-bold">{ex.title}</p><p className="text-xs opacity-40">{ex.questions?.length} Qs</p></div>
            <div className="flex gap-1.5">
              <button onClick={() => setView('exams')} className="text-xs font-black px-2 py-1 bg-emerald-500/10 text-emerald-500 rounded-lg">Take</button>
              <button onClick={() => setExams(p => p.filter(e => e.id !== ex.id))} className="text-xs font-black px-2 py-1 bg-red-500/10 text-red-500 rounded-lg" style={{ display: ex.isBuiltin ? 'none' : 'inline-flex' }}>Del</button>
            </div>
          </div>
        ))}
        {!docEx.length && <p className="text-center text-xs opacity-40 py-2 font-bold">No exams yet</p>}
      </Section>

      <Section id="ca" title="Cases" count={docCa.reduce((s, c) => s + (c.questions?.length || 0), 0)} colorClass="text-blue-500">
        {docCa.map(c => (
          <div key={c.id} className="flex items-center justify-between p-3 glass rounded-xl">
            <div><p className="text-xs font-bold">{c.title}</p><p className="text-xs opacity-40">{c.questions?.length} cases</p></div>
            <div className="flex gap-1.5">
              <button onClick={() => setView('cases')} className="text-xs font-black px-2 py-1 bg-blue-500/10 text-blue-500 rounded-lg">Start</button>
              <button onClick={() => setCases(p => p.filter(x => x.id !== c.id))} className="text-xs font-black px-2 py-1 bg-red-500/10 text-red-500 rounded-lg" style={{ display: c.isBuiltin ? 'none' : 'inline-flex' }}>Del</button>
            </div>
          </div>
        ))}
        {!docCa.length && <p className="text-center text-xs opacity-40 py-2 font-bold">No cases yet</p>}
      </Section>

      <Section id="no" title="Notes" count={docNo.length} colorClass="text-amber-500">
        {docNo.map(n => (
          <div key={n.id} className="p-3 glass rounded-xl">
            <div className="flex justify-between items-start mb-2">
              <p className="text-xs font-bold">{n.title}</p>
              <button onClick={() => setNotes(p => p.filter(x => x.id !== n.id))} className="text-xs px-1.5 py-0.5 bg-red-500/10 text-red-500 rounded-lg font-black">Del</button>
            </div>
            <p className="text-xs opacity-60 line-clamp-3 leading-relaxed">{n.content}</p>
          </div>
        ))}
        {!docNo.length && <p className="text-center text-xs opacity-40 py-2 font-bold">No notes yet</p>}
      </Section>

      {docMm.length > 0 && (
        <Section id="mm" title="Mind Maps" count={docMm.length} colorClass="text-purple-500">
          {docMm.map((m, i) => (
            <div key={m.id} className="glass rounded-xl overflow-hidden">
              <p className="text-xs font-bold p-2 border-b border-[color:var(--border2,var(--border))] opacity-60">{m.data?.topic || `Map ${i + 1}`} · Pgs {m.pages}</p>
              <MindMap data={m.data} />
            </div>
          ))}
        </Section>
      )}

      {docTl.length > 0 && (
        <Section id="tl" title="Timelines" count={docTl.length} colorClass="text-teal-500">
          {docTl.map((t, i) => (
            <div key={t.id} className="glass rounded-xl p-3">
              <p className="text-xs font-bold mb-3 opacity-60">Timeline · Pgs {t.pages}</p>
              <TimelineView events={t.events || []} />
            </div>
          ))}
        </Section>
      )}
    </div>
  );
}
/* ═══════════════════════════════════════════════════════════════════
   RESUME PROMPT — asks user whether to resume previous session
═══════════════════════════════════════════════════════════════════ */
function ResumePrompt({ setId, type, savedIndex, totalItems, onResume, onStartFresh, onCancel }) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(12px)' }}>
      <div className="glass rounded-3xl p-6 max-w-sm w-full border border-[var(--accent)]/30 animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-[var(--accent)]/15">
            <History size={20} className="text-[var(--accent)]" />
          </div>
          <h2 className="font-black text-sm">Resume Session?</h2>
        </div>
        <p className="text-sm opacity-70 mb-4">
          You previously completed {savedIndex} out of {totalItems} items. Would you like to resume from where you left off?
        </p>
        <div className="grid grid-cols-2 gap-3">
          <button onClick={onResume}
            className="btn-accent py-3 rounded-xl text-sm font-black flex items-center justify-center gap-2">
            <Play size={16} /> Resume
          </button>
          <button onClick={onStartFresh}
            className="glass py-3 rounded-xl text-sm font-black border border-[color:var(--border2,var(--border))] hover:border-[var(--accent)]/40">
            <RefreshCw size={16} /> Start Fresh
          </button>
        </div>
        <button onClick={onCancel} className="w-full mt-3 py-2.5 glass rounded-xl text-xs font-bold opacity-50 hover:opacity-80">
          Cancel
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   FLASHCARDS VIEW — v6 with Quick Generate + better UI
═══════════════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════════════
   AI TUTOR PANEL — draggable side panel for Flashcards, Exams, Cases
═══════════════════════════════════════════════════════════════════ */
function AiTutorPanel({ settings, context, onClose, width, onDragStart, alwaysOpen = false }) {
  const [msgs, setMsgs] = useState([{ role: 'assistant', content: "Hi! I'm your AI Tutor 🎓\nAsk me anything about this question, the diagnosis, the explanation, or related concepts. I'm here to help you learn!" }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showQuicks, setShowQuicks] = useState(true);
  const endRef = useRef(null);
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, loading]);

  const send = async (override) => {
    const msg = override || input;
    if (!msg.trim() || loading) return;
    setInput(''); setShowQuicks(false);
    const newMsgs = [...msgs, { role: 'user', content: msg }, { role: 'assistant', content: '' }];
    setMsgs(newMsgs); setLoading(true);
    try {
      const hist = newMsgs.slice(-8, -1).map(m => `${m.role === 'user' ? 'STUDENT' : 'TUTOR'}: ${m.content}`).join('\n');
      const prompt = `You are an expert medical/pharmacy/nursing AI tutor with encyclopedic knowledge. Answer any medical or clinical question — whether about the current card context or any related topic the student raises.

RESPONSE FORMAT RULES:
- Prefer TABLES when comparing drugs, conditions, side effects, mechanisms, or dosing — tables are clearer than prose for lists.
- Use bullet points (–) for step-by-step processes, criteria lists, or clinical decision trees.
- Keep answers MEDIUM LENGTH: precise and accurate, not padded. 4-8 bullet points or 1-2 tables max per response.
- Always include SPECIFIC data: doses, lab cutoffs, %, timelines — never vague statements.
- For every drug: write "BrandName (generic)" — e.g. "Tylenol (acetaminophen)", "Lasix (furosemide)".
- End with 1 high-yield board exam tip when relevant.

RESPONSE TYPES:
- "Explain in detail" → mechanism + clinical use + key AEs + monitoring in a table if comparing ≥2 drugs.
- "Why is this correct?" → explain why right answer is right + why each wrong option is wrong, bullet by option.
- "Common mistakes" → table: Mistake | Why It's Wrong | What's Actually True.
- "Give a mnemonic" → create a memorable acronym with clinical coverage, explain each letter.
- "What else should I know?" → 3-4 additional HY facts not in the card, with specific values.
- "Practice question" → write a full 4-option MCQ vignette, mark correct answer, explain all options.
- Any free question → answer it accurately using best current guidelines (AHA/ACC/WHO/ASHP).

CURRENT CONTEXT (may be referenced but not required):
${context || 'General medical study session — answer any clinical question.'}

${hist ? 'CONVERSATION HISTORY:\n' + hist + '\n' : ''}STUDENT: ${msg}

TUTOR:`;
      await callAIStreaming(prompt, chunk => { setMsgs(p => [...p.slice(0, -1), { role: 'assistant', content: chunk }]); }, settings, 4000);
    } catch (e) { setMsgs(p => [...p.slice(0, -1), { role: 'assistant', content: `⚠️ ${e.message}` }]); }
    finally { setLoading(false); }
  };

  const QUICK = [
    'Explain this in detail',
    'Why is this the correct answer?',
    'Show me a comparison table',
    'What are common mistakes here?',
    'Give me a mnemonic',
    'What else should I know?',
    'Create a practice question',
    'Show me the mechanism of action',
  ];

  return (
    <div className="flex flex-col h-full min-h-0 bg-[var(--surface,var(--card))] border-l border-[color:var(--border2,var(--border))]" style={{ width: width || 360 }}>
      {/* Header - draggable */}
      <div className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent2,var(--accent))] text-white flex items-center justify-between px-4 py-3 shrink-0 cursor-grab select-none"
        onMouseDown={onDragStart} onTouchStart={onDragStart} style={{ touchAction: 'none' }}>
        <div>
          <span className="font-black flex items-center gap-2 text-base"><GraduationCap size={20} /> AI Tutor</span>
          <p className="text-xs opacity-70 mt-0.5">Ask about anything you're studying</p>
        </div>
        {!alwaysOpen && onClose && <button onClick={onClose} className="w-9 h-9 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"><X size={18} /></button>}
      </div>
      {/* Messages */}
      <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar p-3 space-y-3" ref={scrollContainerRef}>
        {msgs.map((m, i) => (
          <div key={i} className={`flex gap-2 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-black ${m.role === 'user' ? 'bg-[var(--accent)] text-white' : 'bg-gradient-to-br from-[var(--accent)] to-[var(--accent2,var(--accent))] text-white'}`}>
              {m.role === 'user' ? 'You' : 'AI'}
            </div>
            <div className={`px-3 py-2.5 text-sm leading-relaxed rounded-2xl max-w-[85%]
              ${m.role === 'user' ? 'bg-[var(--accent)] text-white rounded-tr-sm' : 'glass border border-[color:var(--border2,var(--border))] rounded-tl-sm'}`}>
              {m.content ? renderMarkdown(m.content) : <span className="opacity-30 animate-pulse">▊</span>}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent2,var(--accent))] text-white flex items-center justify-center text-xs font-black shrink-0">AI</div>
            <div className="glass rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5 border border-[color:var(--border2,var(--border))]">
              {[0, 1, 2].map(i => <div key={i} className="w-2 h-2 bg-[var(--accent)] rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />)}
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>
      {/* Quick prompts — hidden once user sends any message */}
      {showQuicks && (
        <div className="px-3 py-2 flex gap-1.5 flex-wrap shrink-0 border-t border-[color:var(--border2,var(--border))]">
          {QUICK.map(q => (
            <button key={q} onClick={() => send(q)}
              className="px-2.5 py-1.5 glass rounded-xl text-xs font-bold opacity-60 hover:opacity-100 hover:border-[var(--accent)]/40 transition-all border border-[color:var(--border2,var(--border))] leading-tight text-left">
              {q}
            </button>
          ))}
        </div>
      )}
      {/* Input */}
      <div className="shrink-0 p-3 border-t border-[color:var(--border2,var(--border))] bg-[var(--surface,var(--card))]">
        <div className="flex gap-2 items-end glass rounded-2xl p-2 border border-[color:var(--border2,var(--border))] focus-within:border-[var(--accent)]/50">
          <textarea value={input} onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if ((e.key === 'Enter' || e.keyCode === 13) && !e.shiftKey) { e.preventDefault(); e.stopPropagation(); send(); } }}
            placeholder="Ask your tutor anything…" disabled={loading} rows={1} enterKeyHint="send"
            className="flex-1 bg-transparent p-1.5 text-sm outline-none resize-none max-h-32 custom-scrollbar text-[var(--text)] min-h-[36px]" />
          <button onClick={() => send()} disabled={loading || !input.trim()}
            className="w-9 h-9 bg-[var(--accent)] disabled:opacity-40 rounded-xl text-white flex items-center justify-center shrink-0 shadow-lg">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* Wrapper that adds the draggable AI Tutor panel to any view */
function WithAiTutor({ settings, context, children }) {
  const [open, setOpen] = useState(false);
  const [w, setW] = useState(380);
  const isMobile = window.innerWidth < 1024;
  const handleDrag = useCallback(x => { setW(Math.max(300, Math.min(680, window.innerWidth - x))); }, []);
  const startDrag = useDrag(handleDrag, [handleDrag]);
  return (
    <div className="flex-1 min-h-0 flex overflow-hidden relative">
      <div className="flex-1 min-h-0 flex flex-col overflow-hidden">{children}</div>
      {/* Toggle button */}
      {!open && (
        <button onClick={() => setOpen(true)}
          className="absolute top-4 right-4 z-50 flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[var(--accent)] to-[var(--accent2,var(--accent))] text-white rounded-xl font-black text-sm shadow-xl hover:opacity-90 transition-all">
          <GraduationCap size={16} />AI Tutor
        </button>
      )}
      {/* Mobile overlay backdrop */}
      {open && isMobile && (
        <div className="fixed inset-0 bg-black/50 z-[48] backdrop-blur-sm" onClick={() => setOpen(false)} />
      )}
      {open && (
        <>
          <div onMouseDown={startDrag} onTouchStart={startDrag}
            className="hidden lg:flex w-1.5 cursor-col-resize items-center justify-center bg-[var(--border)]/40 hover:bg-[var(--accent)]/40 shrink-0 z-50 touch-none transition-colors group">
            <GripVertical size={14} className="opacity-20 group-hover:opacity-60 text-[var(--text)]" />
          </div>
          <div className={isMobile ? "fixed inset-y-0 right-0 z-[49] shadow-2xl" : "h-full"}
            style={isMobile ? { width: '90vw', maxWidth: 400 } : { width: w, minWidth: 300, maxWidth: 680, flexShrink: 0 }}>
            <AiTutorPanel settings={settings} context={context} onClose={() => setOpen(false)} width={isMobile ? 400 : w} onDragStart={startDrag} />
          </div>
        </>
      )}
    </div>
  );
}

function FlashcardsView({ flashcards, setFlashcards, settings, addToast, docs, setExams, setCases }) {
  const [selSet, setSelSet] = useState(null); const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false); const [mode, setMode] = useState('browse');
  const [showModal, setShowModal] = useState(false);
  const [exporting, setExporting] = useState(null);
  const [filterDocId, setFilterDocId] = useState('all');
  const [mobileTutorOpen, setMobileTutorOpen] = useState(false);
  const [showResumePrompt, setShowResumePrompt] = useState(false);
  const [savedProgress, setSavedProgress] = useState(null);
  const [inlineCount, setInlineCount] = useState(20);
  const [inlineDiff, setInlineDiff] = useState('Medium');
  const [inlineInput, setInlineInput] = useState('');

  const rateCard = useCallback(q => {
    trackStudy('flashcard');
    setFlashcards(p => p.map(set => {
      if (set.id !== selSet.id) return set;
      return {
        ...set, cards: set.cards.map((c, i) => {
          if (i !== idx) return c;
          // BUG-011 fix: proper SM-2 algorithm
          const newEf = Math.max(1.3, (c.ef || 2.5) + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
          let newInterval;
          if (q < 3) { newInterval = 1; }          // Failed — reset
          else if ((c.repetitions || 0) === 0) { newInterval = 1; }  // First review
          else if ((c.repetitions || 0) === 1) { newInterval = 6; }  // Second review
          else { newInterval = Math.round((c.interval || 1) * newEf); } // Subsequent
          return {
            ...c,
            ef: newEf, interval: newInterval,
            repetitions: q < 3 ? 0 : (c.repetitions || 0) + 1,
            nextReview: Date.now() + newInterval * 86400000,
            lastReview: Date.now(), lastRating: q,
          };
        })
      };
    }));
    const nextIdx = idx + 1;
    if (nextIdx < selSet.cards.length) { setIdx(nextIdx); setFlipped(false); }
    else { addToast('🎉 Set complete!', 'success'); setSelSet(null); setIdx(0); }
    // Save progress after each rating
    saveSessionProgress(selSet.id, 'flashcards', idx);
  }, [selSet, idx, setFlashcards, addToast]);

  const handleExport = async (set) => {
    setExporting(set.id);
    await exportToPDF('flashcards', set.cards, set.title, addToast);
    setExporting(null);
  };

  const filteredSets = useMemo(() => {
    if (filterDocId === 'all') return flashcards;
    return flashcards.filter(f => f.docId === filterDocId);
  }, [flashcards, filterDocId]);

  const startSetWithResumeCheck = async (set) => {
    let saved = null; try { saved = await getSessionProgress(set.id); } catch(e) { console.error('DB error:', e); }
    if (saved && saved.type === 'flashcards' && saved.index < set.cards.length) {
      setSavedProgress(saved);
      setShowResumePrompt(true);
    } else {
      // No saved progress, start fresh
      setSelSet(set);
      setIdx(0);
      setFlipped(false);
    }
  };

  const handleResume = () => {
    setSelSet(flashcards.find(f => f.id === savedProgress.setId));
    setIdx(savedProgress.index);
    setFlipped(false);
    setShowResumePrompt(false);
    setSavedProgress(null);
  };

  const handleStartFresh = () => {
    setSelSet(flashcards.find(f => f.id === savedProgress.setId));
    setIdx(0);
    setFlipped(false);
    deleteSessionProgress(savedProgress.setId);
    setShowResumePrompt(false);
    setSavedProgress(null);
  };

  const handleCancelResume = () => {
    setShowResumePrompt(false);
    setSavedProgress(null);
  };

  const [fcTutorW, setFcTutorW] = useState(380);
  const handleFcTutorDrag = useCallback(x => { setFcTutorW(Math.max(280, Math.min(560, window.innerWidth - x))); }, []);
  const startFcTutorDrag = useDrag(handleFcTutorDrag, [handleFcTutorDrag]);

  if (selSet) {
    const card = selSet.cards[idx];
    const progress = ((idx + 1) / selSet.cards.length) * 100;
    // Also search answer text for drug names (helps disease/law cards that mention drugs)
    const cardDetail = drugDetailLookup[(card?.q || '').trim().toLowerCase()] ||
      findDrugDetail(card?.q, (card?.a || '').split(/[;\n]+/).map(s => s.trim()).filter(Boolean), null);
    const detailBlock = cardDetail ? `\nDrug Details:\n  Brand: ${cardDetail.brand || 'N/A'}\n  Generic: ${cardDetail.generic}\n  Class: ${cardDetail.drugClass || 'N/A'}\n  Indication: ${cardDetail.indication || 'N/A'}\n  Key Counseling Points:\n${cardDetail.counselingPoints.map(p => '  - ' + p).join('\n')}` : '';
    const tutorCtx = `Flashcard study session — FOCUS ONLY ON THIS CARD.\nSet: ${selSet.title}\nCard ${idx + 1}/${selSet.cards.length}\n\n--- CURRENT CARD (answer ONLY about this) ---\nQuestion: ${card?.q}\nAnswer: ${card?.a}\nEvidence: ${card?.evidence || 'N/A'}${detailBlock}\n--- END OF CURRENT CARD ---\nDo NOT discuss other cards or topics outside this card.`;
    return (
      <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="h-14 glass flex items-center justify-between px-5 shrink-0 border-b border-[color:var(--border2,var(--border))] border-x-0 border-t-0">
          <button onClick={() => { setSelSet(null); setIdx(0); setFlipped(false); }}
            className="glass px-4 py-2 rounded-xl text-sm font-black flex items-center gap-2"><ChevronLeft size={18} />Exit</button>
          <div className="text-center">
            <p className="text-sm font-black truncate max-w-xs">{selSet.title}</p>
            <p className="text-xs opacity-40">{idx + 1} / {selSet.cards.length}</p>
          </div>
          <button onClick={() => handleExport(selSet)} className="glass px-3 py-2 rounded-xl text-sm font-black flex items-center gap-2 opacity-60 hover:opacity-100">
            <Printer size={16} />PDF
          </button>
        </div>
        {/* Progress bar */}
        <div className="h-1.5 bg-black/10 dark:bg-white/10 shrink-0">
          <div className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent2,var(--accent))] h-full transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
        {/* Two-panel row */}
        <div className="flex-1 min-h-0 flex overflow-hidden">
          {/* LEFT: card + controls */}
          <div className="flex-1 min-w-0 overflow-y-auto custom-scrollbar p-6 pb-36 flex flex-col gap-5" style={{ touchAction: 'pan-y', WebkitOverflowScrolling: 'touch' }}>
            {/* Quizlet-style 3D flip card */}
            <div style={{ perspective: '1200px' }} onClick={() => setFlipped(f => !f)} className="cursor-pointer select-none">
              <div style={{
                display: 'grid',
                width: '100%',
                minHeight: 220,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.55s cubic-bezier(0.45,0.05,0.55,0.95)',
                transform: flipped ? 'rotateX(180deg)' : 'rotateX(0deg)',
              }}>
                {/* FRONT — Question */}
                <div style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', gridArea: '1 / 1' }}
                  className="glass rounded-3xl p-8 flex flex-col justify-between border border-[color:var(--border2,var(--border))] hover:border-[var(--accent)]/40 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full border glass opacity-50">Question</span>
                    {card.sourcePage && <span className="text-xs font-mono opacity-30">p.{card.sourcePage}</span>}
                  </div>
                  <p className="text-base font-semibold leading-relaxed flex-1">{card.q}</p>
                  <p className="text-xs opacity-25 text-center mt-6 flex items-center justify-center gap-1"><RefreshCw size={11} />Tap to flip</p>
                </div>
                {/* BACK — Answer (rotated 180deg so it faces forward when card flips) */}
                <div style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', gridArea: '1 / 1', transform: 'rotateX(180deg)' }}
                  className="glass rounded-3xl p-8 flex flex-col justify-between border border-[var(--accent)]/30 bg-[var(--accent)]/4 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full border border-[var(--accent)]/40 text-[var(--accent)] bg-[var(--accent)]/10">Answer</span>
                    {card.sourcePage && <span className="text-xs font-mono opacity-30">p.{card.sourcePage}</span>}
                  </div>
                  <p className="text-base font-semibold leading-relaxed flex-1 text-[var(--accent)]" style={{ whiteSpace: 'pre-line' }}>{card.a}</p>
                  {card.evidence && <p className="text-xs opacity-40 mt-4 italic border-t border-[color:var(--border2,var(--border))] pt-3">"{card.evidence}"</p>}
                </div>
              </div>
            </div>
            {/* Rating buttons */}
            {flipped ? (
              <div className="grid grid-cols-4 gap-3">
                {[['Again', 0, '#ef4444', '🔁'], ['Hard', 2, '#f59e0b', '😓'], ['Good', 3, '#3b82f6', '👍'], ['Easy', 5, '#10b981', '⚡']].map(([l, q, col, em]) => (
                  <button key={l} onClick={() => rateCard(q)}
                    className="text-white py-4 rounded-2xl text-sm font-black uppercase tracking-wide shadow-lg active:scale-95 transition-all flex flex-col items-center gap-1"
                    style={{ background: col }}>
                    <span className="text-base">{em}</span>{l}
                  </button>
                ))}
              </div>
            ) : (
              <button onClick={() => setFlipped(true)} className="w-full py-4 btn-accent rounded-2xl text-base font-black shadow-xl">
                Show Answer
              </button>
            )}
            {/* ── Auto Drug Detail Panel — always visible below card ── */}
            <DrugQuickRef detail={cardDetail} />
            {/* Inline AI Tutor Trigger */}
            <div className="lg:hidden mt-2 flex-shrink-0">
              <button onClick={() => setMobileTutorOpen(true)} className="w-full glass py-3.5 rounded-2xl flex items-center justify-center gap-2 font-bold text-[var(--accent)] border border-[var(--accent)]/30 hover:bg-[var(--accent)]/10 transition-colors">
                <MessageSquare size={18} /> Ask AI Tutor
              </button>
            </div>
          </div>
          {/* Drag handle */}
          <div onMouseDown={startFcTutorDrag} onTouchStart={startFcTutorDrag}
            className="hidden lg:flex w-3 cursor-col-resize items-center justify-center bg-[var(--border)]/30 hover:bg-[var(--accent)]/40 shrink-0 touch-none transition-colors group" style={{ touchAction: 'none' }}>
            <GripVertical size={14} className="opacity-20 group-hover:opacity-70 text-[var(--text)]" />
          </div>
          {/* RIGHT: AI Tutor always open */}
          <div className="hidden lg:flex flex-col border-l border-[color:var(--border2,var(--border))] shrink-0" style={{ width: fcTutorW }}>
            <AiTutorPanel settings={settings} context={tutorCtx} onClose={null} width={fcTutorW} onDragStart={startFcTutorDrag} alwaysOpen={true} />
          </div>
        </div>

        {/* MOBILE: AI Tutor modal triggered by inline Ask AI Tutor button */}
        {mobileTutorOpen && createPortal(
          <div className="lg:hidden fixed inset-0 z-[99999] flex flex-col justify-end backdrop-blur-sm" style={{ background: 'rgba(0,0,0,0.55)' }} onClick={e => e.target === e.currentTarget && setMobileTutorOpen(false)}>
            <div className="glass rounded-t-[32px] flex flex-col overflow-hidden animate-slide-up" style={{ height: '85%', boxShadow: '0 -10px 50px rgba(0,0,0,0.4)' }} onClick={e => e.stopPropagation()}>
              <AiTutorPanel settings={settings} context={tutorCtx} onClose={() => setMobileTutorOpen(false)} width={window.innerWidth} />
            </div>
          </div>, document.body
        )}
      </div>
    );
  }

  return (
    <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar scroll-content" style={{ touchAction: "pan-y", WebkitOverflowScrolling: "touch" }}>
      {showModal && <QuickGenerateModal type="flashcards" docs={docs || []} settings={settings}
        onClose={() => setShowModal(false)} addToast={addToast}
        setFlashcards={setFlashcards} setExams={setExams} setCases={setCases} />}
      {showResumePrompt && savedProgress && (
        <ResumePrompt
          setId={savedProgress.setId}
          type={savedProgress.type}
          savedIndex={savedProgress.index}
          totalItems={flashcards.find(f => f.id === savedProgress.setId)?.cards?.length || 0}
          onResume={handleResume}
          onStartFresh={handleStartFresh}
          onCancel={handleCancelResume}
        />
      )}
      <div className="w-full p-6 lg:p-8 space-y-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl lg:text-3xl font-black flex items-center gap-3"><Layers size={26} className="opacity-40" /> Flashcards</h1>
          </div>
          {/* Inline generate bar */}
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
            <div className="flex items-center gap-2 glass rounded-2xl px-4 py-2.5 border border-[color:var(--border2,var(--border))] lg:flex-1">
              <Search size={15} className="opacity-30 shrink-0" />
              <input
                value={inlineInput} onChange={e => setInlineInput(e.target.value)}
                placeholder="Type a topic… e.g. 'Tylenol toxicity', 'sepsis'"
                className="flex-1 bg-transparent text-sm outline-none placeholder:opacity-40 text-[var(--text)]"
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    const val = inlineInput.trim(); if (!val) return;
                    const taskId = 'task_' + Date.now();
                    runTopicGeneration({ taskId, topic: val, taskType: 'flashcards', count: inlineCount, difficultyLevel: inlineDiff, settings,
                      onSave: (data, tid) => { const now = new Date().toISOString(); const cards = data.map(c => ({ id: Date.now() + Math.random(), q: c.q, a: c.a, evidence: c.evidence || '', sourcePage: 0, repetitions: 0, ef: 2.5, interval: 1, nextReview: Date.now(), lastReview: Date.now() })); setFlashcards(p => [...p, { id: taskId, docId: null, sourcePages: 'topic', title: `Cards — ${val.slice(0,30)}`, cards, createdAt: now }]); addToast(`${cards.length} flashcards saved! ⚡`, 'success'); bgClear(tid); } });
                    addToast(`Generating ${inlineCount} ${inlineDiff} cards on "${val.slice(0,25)}…"`, 'info'); setInlineInput('');
                  }
                }}
              />
              <button onClick={() => { const val = inlineInput.trim(); if (!val) return; const taskId = 'task_' + Date.now(); runTopicGeneration({ taskId, topic: val, taskType: 'flashcards', count: inlineCount, difficultyLevel: inlineDiff, settings, onSave: (data, tid) => { const now = new Date().toISOString(); const cards = data.map(c => ({ id: Date.now() + Math.random(), q: c.q, a: c.a, evidence: c.evidence || '', sourcePage: 0, repetitions: 0, ef: 2.5, interval: 1, nextReview: Date.now(), lastReview: Date.now() })); setFlashcards(p => [...p, { id: taskId, docId: null, sourcePages: 'topic', title: `Cards — ${val.slice(0,30)}`, cards, createdAt: now }]); addToast(`${cards.length} flashcards saved! ⚡`, 'success'); bgClear(tid); } }); addToast(`Generating ${inlineCount} ${inlineDiff} cards on "${val.slice(0,25)}…"`, 'info'); setInlineInput(''); }}
                className="shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-xl text-[11px] font-black text-white btn-accent" title="Generate flashcards">
                <Zap size={11} /> Generate
              </button>
            </div>
            <div className="flex gap-2 lg:shrink-0">
              <button onClick={() => { const topic = MEDICAL_RANDOM_TOPICS[Math.floor(Math.random() * MEDICAL_RANDOM_TOPICS.length)]; const taskId = 'task_' + Date.now(); runTopicGeneration({ taskId, topic, taskType: 'flashcards', count: inlineCount, difficultyLevel: inlineDiff, settings, onSave: (data, tid) => { const now = new Date().toISOString(); const cards = data.map(c => ({ id: Date.now() + Math.random(), q: c.q, a: c.a, evidence: c.evidence || '', sourcePage: 0, repetitions: 0, ef: 2.5, interval: 1, nextReview: Date.now(), lastReview: Date.now() })); setFlashcards(p => [...p, { id: taskId, docId: null, sourcePages: 'topic', title: `Cards — ${topic.split(':')[0].trim().slice(0,30)}`, cards, createdAt: now }]); addToast(`${cards.length} flashcards saved! ⚡`, 'success'); bgClear(tid); } }); addToast('🎲 Generating random topic cards…', 'info'); }}
                className="flex-1 lg:flex-none lg:px-5 flex items-center justify-center gap-1.5 py-2.5 rounded-2xl text-xs font-black transition-all hover:scale-105 active:scale-95 shadow-sm"
                style={{ background: 'linear-gradient(135deg,#818cf8,#6366f1)', color: '#fff', boxShadow: '0 4px 14px #6366f140' }}>
                <Shuffle size={12} /> Random
              </button>
              <button onClick={() => setShowModal(true)} className="flex-1 lg:flex-none lg:px-5 flex items-center justify-center gap-2 py-2.5 rounded-2xl text-xs font-black glass border border-[color:var(--border2,var(--border))] hover:opacity-80 opacity-60"><FilePlus size={13} /> From File</button>
            </div>
          </div>
          {/* Count + Difficulty controls */}
          <div className="flex gap-3 items-center flex-wrap">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-black uppercase tracking-widest opacity-40 shrink-0">Count:</span>
              {[5, 10, 20, 50, 100].map(n => (
                <button key={n} onClick={() => setInlineCount(n)}
                  className="px-2.5 py-1 rounded-lg text-xs font-black transition-all"
                  style={{ background: inlineCount === n ? '#6366f1' : '#6366f118', color: inlineCount === n ? '#fff' : '#6366f1' }}>{n}</button>
              ))}
            </div>
            <div className="w-px h-4 opacity-20" style={{ background: 'var(--border)' }} />
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-black uppercase tracking-widest opacity-40 shrink-0">Level:</span>
              {[['Easy','#10b981'],['Medium','#f59e0b'],['Hard','#ef4444'],['Board','#7c3aed']].map(([d,col]) => (
                <button key={d} onClick={() => setInlineDiff(d)}
                  className="px-2.5 py-1 rounded-lg text-xs font-black transition-all"
                  style={{ background: inlineDiff === d ? col : col + '18', color: inlineDiff === d ? '#fff' : col }}>{d}</button>
              ))}
            </div>
          </div>
        </div>

        {flashcards.length > 0 && (
          <>
            <div className="grid grid-cols-3 gap-3">
              {[
                ['Sets', flashcards.length, '#6366f1'],
                ['Cards', flashcards.reduce((s, f) => s + (f.cards?.length || 0), 0), '#3b82f6'],
                ['Due Today', flashcards.reduce((s, f) => s + (f.cards?.filter(c => !c.nextReview || c.nextReview <= Date.now()).length || 0), 0), '#f59e0b'],
              ].map(([l, n, col]) => (
                <div key={l} className="glass rounded-2xl p-3 text-center border border-[color:var(--border2,var(--border))]">
                  <p className="text-xl font-black" style={{ color: col }}>{n}</p>
                  <p className="text-xs font-black uppercase tracking-widest opacity-50 mt-0.5">{l}</p>
                </div>
              ))}
            </div>
            {docs?.length > 0 && (
              <select value={filterDocId} onChange={e => setFilterDocId(e.target.value)}
                className="glass rounded-xl px-3 py-2 text-xs font-bold border border-[color:var(--border2,var(--border))] outline-none text-[var(--text)]">
                <option value="all">All Documents</option>
                {[...new Set(flashcards.map(f => f.docId))].map(id => { const doc = docs?.find(d => d.id === id); return doc ? <option key={id} value={id}>{doc.name.slice(0, 30)}</option> : null; })}
              </select>
            )}
          </>
        )}

        {!flashcards.length ? (
          <div className="glass border-dashed border-2 border-[color:var(--border2,var(--border))] rounded-3xl p-12 text-center">
            <Layers size={48} className="mx-auto mb-4 opacity-20" />
            <p className="text-lg font-black opacity-40">No flashcard sets yet</p>
            <p className="text-sm opacity-30 mt-1 mb-6">Generate cards from any document</p>
            <button onClick={() => setShowModal(true)} className="btn-accent px-6 py-3 rounded-2xl font-black shadow-xl flex items-center gap-2 mx-auto">
              <FilePlus size={16} /> Generate from File
            </button>
          </div>
        ) : (filteredSets.map(set => (
          <div key={set.id} className={`glass rounded-2xl p-5 border transition-all card-hover ${set.isBuiltin ? 'border-[var(--accent)]/30 bg-[var(--accent)]/3' : 'border-[color:var(--border2,var(--border))] hover:border-[var(--accent)]/20'}`}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-black text-sm truncate">{set.title}</h3>
                  {(set.isBuiltin || set.isBuiltIn) && <span className="text-xs font-black px-2 py-0.5 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/20 shrink-0">📚 Built-in</span>}
                </div>
                <p className="text-xs opacity-40 mt-0.5">{set.cards?.length} cards · {(set.isBuiltin || set.isBuiltIn) ? 'Always available' : new Date(set.createdAt).toLocaleDateString()}</p>
                {set.docId && docs?.find(d => d.id === set.docId) && (
                  <p className="text-xs opacity-30 mt-0.5 truncate">📄 {docs.find(d => d.id === set.docId).name}</p>
                )}
                {set.cards?.some(c => !c.nextReview || c.nextReview <= Date.now()) && (
                  <span className="text-xs font-black text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full mt-1 inline-block">
                    {set.cards.filter(c => !c.nextReview || c.nextReview <= Date.now()).length} due today
                  </span>
                )}
              </div>
              <div className="flex gap-2 shrink-0">
                <button onClick={() => handleExport(set)} disabled={exporting === set.id} title="Export PDF"
                  className="w-9 h-9 glass rounded-xl flex items-center justify-center hover:bg-blue-500/10 hover:text-blue-500 transition-colors">
                  {exporting === set.id ? <Loader2 size={14} className="animate-spin" /> : <Printer size={18} />}
                </button>
                <button onClick={() => startSetWithResumeCheck(set)}
                  className="btn-accent px-4 py-2 rounded-xl text-xs font-black shadow-md flex items-center gap-2">
                  <Layers size={16} /> Study
                </button>
                {!(set.isBuiltin || set.isBuiltIn) && <button onClick={() => setFlashcards(p => p.filter(f => f.id !== set.id))} className="w-9 h-9 glass rounded-xl flex items-center justify-center hover:bg-red-500/10 hover:text-red-500 transition-colors" style={{ display: set.isBuiltin ? 'none' : 'flex' }}><Trash2 size={14} /></button>}
              </div>
            </div>
          </div>
        )))}

      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   EXAMS VIEW
═══════════════════════════════════════════════════════════════════ */
function ExamsView({ exams, setExams, settings, addToast, docs, setFlashcards, setCases }) {
  const [selEx, setSelEx] = useState(null); const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState(null); const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null); const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [filterDocId, setFilterDocId] = useState('all');
  const [sortMode, setSortMode] = useState('newest');
  const [examMobileOpen, setExamMobileOpen] = useState(false);
  const [showResumePrompt, setShowResumePrompt] = useState(false);
  const [savedProgress, setSavedProgress] = useState(null);
  const [inlineCount, setInlineCount] = useState(20);
  const [inlineDiff, setInlineDiff] = useState('Medium');
  const [inlineInput, setInlineInput] = useState('');

  const startExamWithResumeCheck = async (ex) => {
    const shuffledEx = { ...ex, questions: shuffleOptions(ex.questions) };
    let saved = null; try { saved = await getSessionProgress(ex.id); } catch(e) { console.error('DB error:', e); }
    if (saved && saved.type === 'exam' && saved.index < ex.questions.length) {
      setSavedProgress(saved);
      setShowResumePrompt(true);
    } else {
      // No saved progress, start fresh with shuffled options
      setSelEx(shuffledEx); setQi(0); setSelected(null); setSubmitted(false); setScore(null); setAnswers([]); setReviewMode(false);
    }
  };

  const handleResume = () => {
    const foundEx = exams.find(e => e.id === savedProgress.setId);
    if (foundEx) setSelEx({ ...foundEx, questions: shuffleOptions(foundEx.questions) });
    setQi(savedProgress.index);
    setSelected(null);
    setSubmitted(false);
    setScore(null);
    setAnswers([]);
    setReviewMode(false);
    setShowResumePrompt(false);
    setSavedProgress(null);
  };

  const handleStartFresh = () => {
    const foundEx = exams.find(e => e.id === savedProgress.setId);
    if (foundEx) setSelEx({ ...foundEx, questions: shuffleOptions(foundEx.questions) });
    setQi(0);
    setSelected(null);
    setSubmitted(false);
    setScore(null);
    setAnswers([]);
    setReviewMode(false);
    deleteSessionProgress(savedProgress.setId);
    setShowResumePrompt(false);
    setSavedProgress(null);
  };

  const handleCancelResume = () => {
    setShowResumePrompt(false);
    setSavedProgress(null);
  };

  const submit = () => {
    if (selected === null) return;
    const correct = selEx.questions[qi].correct === selected;
    const newAnswers = [...answers, { qi, selected, correct }];
    setAnswers(newAnswers); setSubmitted(true);
    if (qi === selEx.questions.length - 1) {
      const sc = newAnswers.filter(a => a.correct).length;
      setScore(sc);
      trackStudy('exam', sc, selEx.questions.length);
    }
    // Save progress after each question
    saveSessionProgress(selEx.id, 'exam', qi);
  };
  const next = () => {
    if (qi < selEx.questions.length - 1) { setQi(i => i + 1); setSelected(null); setSubmitted(false); }
  };

  const handleExport = async (ex) => {
    setExporting(true);
    await exportToPDF('exam', ex.questions, ex.title, addToast);
    setExporting(false);
  };

  const filteredExams = useMemo(() => {
    let r = [...exams];
    if (filterDocId !== 'all') r = r.filter(e => e.docId === filterDocId);
    if (sortMode === 'newest') r.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    if (sortMode === 'oldest') r.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    if (sortMode === 'most') r.sort((a, b) => (b.questions?.length || 0) - (a.questions?.length || 0));
    return r;
  }, [exams, filterDocId, sortMode]);

  const [examTutorW, setExamTutorW] = useState(380);
  const handleExamTutorDrag = useCallback(x => { setExamTutorW(Math.max(280, Math.min(580, window.innerWidth - x))); }, []);
  const startExamTutorDrag = useDrag(handleExamTutorDrag, [handleExamTutorDrag]);

  if (selEx && score === null && !reviewMode) {
    const q = selEx.questions[qi];
    const progress = ((qi + 1) / selEx.questions.length) * 100;
    const tutorCtx = `Exam study session — FOCUS ONLY ON THIS QUESTION.\nExam: ${selEx.title}\nQuestion ${qi + 1}/${selEx.questions.length}\n\n--- CURRENT QUESTION (answer ONLY about this) ---\nQ: ${q?.q}\nOptions: ${(q?.options || []).join(' | ')}\nCorrect answer: ${q?.options?.[q?.correct]}\nExplanation: ${q?.explanation || 'N/A'}\n--- END OF CURRENT QUESTION ---\nDo NOT discuss other questions or topics outside this question.`;
    return (
      <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="h-14 glass flex items-center justify-between px-5 shrink-0 border-b border-[color:var(--border2,var(--border))] border-x-0 border-t-0">
          <button onClick={() => { setSelEx(null); setScore(null); setAnswers([]); }} className="glass px-4 py-2 rounded-xl text-sm font-black flex items-center gap-2"><ChevronLeft size={18} />Exit</button>
          <div className="text-center">
            <p className="text-sm font-black truncate max-w-xs">{selEx.title}</p>
            <p className="text-xs opacity-40">{qi + 1} / {selEx.questions.length} questions</p>
          </div>
          <button onClick={() => setReviewMode(true)} className="glass px-3 py-2 rounded-xl text-sm font-black opacity-60 hover:opacity-100">Review All</button>
        </div>
        {/* Progress */}
        <div className="h-1.5 bg-black/10 dark:bg-white/10 shrink-0">
          <div className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent2,var(--accent))] h-full transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
        {/* Two-panel row */}
        <div className="flex-1 min-h-0 flex overflow-hidden">
          {/* LEFT: question + options */}
          <div className="flex-1 min-w-0 overflow-y-auto custom-scrollbar p-4 pb-36 lg:p-8 space-y-4" style={{ touchAction: 'pan-y', WebkitOverflowScrolling: 'touch' }}>
            <div className="glass rounded-2xl p-4 lg:p-6 border border-[color:var(--border2,var(--border))]">
              {q.sourcePage && <p className="text-xs font-mono opacity-30 mb-3">Source: p.{q.sourcePage}</p>}
              <p className="text-base font-semibold leading-relaxed">{q.q}</p>
            </div>
            <div className="space-y-2.5">
              {(q.options || []).map((opt, oi) => (
                <button key={oi} disabled={submitted} onClick={() => setSelected(oi)}
                  className={`w-full text-left px-5 py-3.5 rounded-2xl text-sm font-medium transition-all border flex items-center gap-3
                    ${submitted && oi === q.correct ? 'bg-emerald-500/15 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold' :
                      submitted && oi === selected && oi !== q.correct ? 'bg-red-500/15 border-red-500 text-red-500' :
                        selected === oi ? 'bg-[var(--accent)]/10 border-[var(--accent)] font-bold' : 'glass border-[color:var(--border2,var(--border))] hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/5'}`}>
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 border transition-all
                    ${submitted && oi === q.correct ? 'bg-emerald-500 border-emerald-500 text-white' :
                      submitted && oi === selected && oi !== q.correct ? 'bg-red-500 border-red-500 text-white' :
                        selected === oi ? 'bg-[var(--accent)] border-[var(--accent)] text-white' : 'border-[color:var(--border2,var(--border))] opacity-50'}`}>
                    {String.fromCharCode(65 + oi)}
                  </span>
                  <span className="flex-1">{opt.replace(/^[A-E][).]\s+/i, '')}</span>
                  {submitted && oi === q.correct && <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />}
                </button>
              ))}
            </div>
            {submitted && (q.explanation || q.options?.[q.correct]) && (
              <div className="glass p-5 rounded-2xl border-l-4 border-[var(--accent)] bg-[var(--accent)]/5">
                <p className="text-xs font-black opacity-60 mb-2 uppercase tracking-widest">{q.explanation ? 'Explanation' : 'Correct Answer'}</p>
                <p className="text-sm leading-relaxed">{q.explanation || q.options?.[q.correct]}</p>
                {q.evidence && <p className="text-xs opacity-40 italic mt-3 pt-3 border-t border-[color:var(--border2,var(--border))]">"{q.evidence}"</p>}
              </div>
            )}
            {submitted && <DrugQuickRef detail={findDrugDetail(q.q, q.options, q.correct)} />}
            <div className="pb-4">
              {!submitted ?
                <button onClick={submit} disabled={selected === null} className="w-full py-4 btn-accent rounded-2xl text-base font-black disabled:opacity-40 shadow-xl">Submit Answer</button> :
                qi < selEx.questions.length - 1 ?
                  <button onClick={next} className="w-full py-4 btn-accent rounded-2xl text-base font-black shadow-xl">Next Question →</button> :
                  <button onClick={() => { const sc = answers.filter(a => a.correct).length; setScore(sc); trackStudy('exam', sc, selEx.questions.length); }} className="w-full py-4 btn-accent rounded-2xl text-base font-black shadow-xl">See Results →</button>
              }
            </div>

            {/* Inline AI Tutor Trigger */}
            <div className="lg:hidden mt-4 flex-shrink-0">
              <button onClick={() => setExamMobileOpen(true)} className="w-full glass py-3.5 rounded-2xl flex items-center justify-center gap-2 font-bold text-[var(--accent)] border border-[var(--accent)]/30 hover:bg-[var(--accent)]/10 transition-colors">
                <MessageSquare size={18} /> Ask AI Tutor
              </button>
            </div>
          </div>
          {/* Drag handle */}
          <div onMouseDown={startExamTutorDrag} onTouchStart={startExamTutorDrag}
            className="hidden lg:flex w-3 cursor-col-resize items-center justify-center bg-[var(--border)]/30 hover:bg-[var(--accent)]/40 shrink-0 touch-none transition-colors group" style={{ touchAction: 'none' }}>
            <GripVertical size={14} className="opacity-20 group-hover:opacity-70 text-[var(--text)]" />
          </div>
          {/* RIGHT: AI Tutor always open */}
          {/* MOBILE: AI Tutor modal triggered by inline Ask AI Tutor button */}
          {examMobileOpen && createPortal(
            <div className="lg:hidden fixed inset-0 z-[99999] flex flex-col justify-end backdrop-blur-sm" style={{ background: 'rgba(0,0,0,0.55)' }} onClick={e => e.target === e.currentTarget && setExamMobileOpen(false)}>
              <div className="glass rounded-t-[32px] flex flex-col overflow-hidden animate-slide-up" style={{ height: '85%', boxShadow: '0 -10px 50px rgba(0,0,0,0.4)' }} onClick={e => e.stopPropagation()}>
                <AiTutorPanel settings={settings} context={`Exam: ${selEx?.title}\nQ${qi + 1}: ${selEx?.questions?.[qi]?.q}\nOptions: ${selEx?.questions?.[qi]?.options?.join(' | ')}\nCorrect: ${selEx?.questions?.[qi]?.options?.[selEx?.questions?.[qi]?.correct]}`} onClose={() => setExamMobileOpen(false)} width={window.innerWidth} />
              </div>
            </div>, document.body
          )}
          <div className="hidden lg:flex flex-col border-l border-[color:var(--border2,var(--border))] shrink-0" style={{ width: examTutorW }}>
            <AiTutorPanel settings={settings} context={tutorCtx} onClose={null} width={examTutorW} onDragStart={startExamTutorDrag} alwaysOpen={true} />
          </div>
        </div>
      </div >
    );
  }

  // Review mode — all questions at once
  if (reviewMode && selEx) {
    return (
      <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar scroll-content" style={{ touchAction: "pan-y", WebkitOverflowScrolling: "touch" }}>
        <div className="w-full p-6 lg:p-8">
          <div className="flex items-center gap-3 mb-6">
            <button onClick={() => setReviewMode(false)} className="glass px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2"><ChevronLeft size={18} />Back</button>
            <h2 className="font-black text-lg">{selEx.title} — Review</h2>
            <button onClick={() => handleExport(selEx)} disabled={exporting}
              className="ml-auto btn-accent px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 shadow-md">
              {exporting ? <Loader2 size={16} className="animate-spin" /> : <Printer size={16} />}Print PDF
            </button>
          </div>
          <div className="space-y-4">
            {selEx.questions.map((q, i) => (
              <div key={i} className="glass rounded-2xl p-5 border border-[color:var(--border2,var(--border))]">
                <p className="text-xs font-black text-[var(--accent)] mb-2">Q{i + 1}</p>
                <p className="text-sm font-bold mb-3">{q.q}</p>
                <div className="space-y-1.5">
                  {(q.options || []).map((opt, oi) => (
                    <div key={oi} className={`px-3 py-2 rounded-xl text-xs font-medium ${oi === q.correct ? 'bg-emerald-500/15 text-emerald-600 font-bold border border-emerald-500/30' : 'opacity-50'}`}>
                      <span className="font-black mr-2">{String.fromCharCode(65 + oi)}.</span>{opt}
                      {oi === q.correct && <CheckCircle2 size={16} className="inline ml-2 text-emerald-500" />}
                    </div>
                  ))}
                </div>
                {q.explanation && <p className="text-xs opacity-50 mt-3 italic">{q.explanation}</p>}
                <DrugQuickRef detail={findDrugDetail(q.q, q.options, q.correct)} compact />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (score !== null && selEx) {
    const pct = Math.round((score / selEx.questions.length) * 100);
    const grade = pct >= 90 ? 'A' : pct >= 80 ? 'B' : pct >= 70 ? 'C' : pct >= 60 ? 'D' : 'F';
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 gap-6">
        <div className="glass rounded-3xl p-10 text-center max-w-sm w-full border border-[color:var(--border2,var(--border))]">
          <div className={`text-7xl font-black mb-1 ${pct >= 80 ? 'text-emerald-500' : pct >= 60 ? 'text-amber-500' : 'text-red-500'}`}>{pct}%</div>
          <div className={`text-3xl font-black mb-4 ${pct >= 80 ? 'text-emerald-500' : pct >= 60 ? 'text-amber-500' : 'text-red-500'}`}>Grade {grade}</div>
          <p className="text-sm font-black opacity-60 mb-1">{score} / {selEx.questions.length} correct</p>
          <p className="text-xs opacity-40">{pct >= 80 ? 'Outstanding! 🎉' : pct >= 60 ? 'Good effort! Keep studying 📚' : 'Need more review 💪'}</p>
          <div className="w-full bg-black/10 dark:bg-white/10 rounded-full h-3 mt-6 overflow-hidden">
            <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${pct}%`, background: pct >= 80 ? '#10b981' : pct >= 60 ? '#f59e0b' : '#ef4444' }} />
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={() => { setReviewMode(true); }} className="glass px-6 py-3 rounded-2xl font-black border border-[color:var(--border2,var(--border))]">Review Answers</button>
          <button onClick={() => { setSelEx(null); setScore(null); setAnswers([]); }} className="btn-accent px-6 py-3 rounded-2xl font-black shadow-xl">Back to Exams</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar scroll-content" style={{ touchAction: "pan-y", WebkitOverflowScrolling: "touch" }}>
      {showModal && <QuickGenerateModal type="exam" docs={docs || []} settings={settings}
        onClose={() => setShowModal(false)} addToast={addToast}
        setFlashcards={setFlashcards || ((fn) => { })} setExams={setExams} setCases={setCases || ((fn) => { })} />}
      <div className="w-full p-6 lg:p-8 space-y-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl lg:text-3xl font-black flex items-center gap-3"><CheckSquare size={26} className="opacity-40" /> Exams</h1>
          </div>
          {/* Inline generate bar */}
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
            <div className="flex items-center gap-2 glass rounded-2xl px-4 py-2.5 border border-[color:var(--border2,var(--border))] lg:flex-1">
              <Search size={15} className="opacity-30 shrink-0" />
              <input
                value={inlineInput} onChange={e => setInlineInput(e.target.value)}
                placeholder="Type a topic… e.g. 'cancer staging', 'diabetes management'"
                className="flex-1 bg-transparent text-sm outline-none placeholder:opacity-40 text-[var(--text)]"
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    const val = inlineInput.trim(); if (!val) return;
                    const taskId = 'task_' + Date.now();
                    runTopicGeneration({ taskId, topic: val, taskType: 'exam', count: inlineCount, difficultyLevel: inlineDiff, settings,
                      onSave: (data, tid) => { setExams(p => [...p, { id: taskId, docId: null, sourcePages: 'topic', title: `Exam — ${val.slice(0,30)}`, questions: data, createdAt: new Date().toISOString() }]); addToast(`${data.length} exam questions saved! ⚡`, 'success'); bgClear(tid); } });
                    addToast(`Generating ${inlineCount} ${inlineDiff} questions on "${val.slice(0,25)}…"`, 'info'); setInlineInput('');
                  }
                }}
              />
              <button onClick={() => { const val = inlineInput.trim(); if (!val) return; const taskId = 'task_' + Date.now(); runTopicGeneration({ taskId, topic: val, taskType: 'exam', count: inlineCount, difficultyLevel: inlineDiff, settings, onSave: (data, tid) => { setExams(p => [...p, { id: taskId, docId: null, sourcePages: 'topic', title: `Exam — ${val.slice(0,30)}`, questions: data, createdAt: new Date().toISOString() }]); addToast(`${data.length} exam questions saved! ⚡`, 'success'); bgClear(tid); } }); addToast(`Generating ${inlineCount} ${inlineDiff} questions on "${val.slice(0,25)}…"`, 'info'); setInlineInput(''); }}
                className="shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-xl text-[11px] font-black text-white btn-accent" title="Generate exam questions">
                <Zap size={11} /> Generate
              </button>
            </div>
            <div className="flex gap-2 lg:shrink-0">
              <button onClick={() => { const topic = MEDICAL_RANDOM_TOPICS[Math.floor(Math.random() * MEDICAL_RANDOM_TOPICS.length)]; const taskId = 'task_' + Date.now(); runTopicGeneration({ taskId, topic, taskType: 'exam', count: inlineCount, difficultyLevel: inlineDiff, settings, onSave: (data, tid) => { setExams(p => [...p, { id: taskId, docId: null, sourcePages: 'topic', title: `Exam — ${topic.split(':')[0].trim().slice(0,30)}`, questions: data, createdAt: new Date().toISOString() }]); addToast(`${data.length} exam questions saved! ⚡`, 'success'); bgClear(tid); } }); addToast('🎲 Generating random exam…', 'info'); }}
                className="flex-1 lg:flex-none lg:px-5 flex items-center justify-center gap-1.5 py-2.5 rounded-2xl text-xs font-black transition-all hover:scale-105 active:scale-95 shadow-sm"
                style={{ background: 'linear-gradient(135deg,#60a5fa,#3b82f6)', color: '#fff', boxShadow: '0 4px 14px #3b82f640' }}>
                <Shuffle size={12} /> Random
              </button>
              <button onClick={() => setShowModal(true)} className="flex-1 lg:flex-none lg:px-5 flex items-center justify-center gap-2 py-2.5 rounded-2xl text-xs font-black glass border border-[color:var(--border2,var(--border))] hover:opacity-80 opacity-60"><FilePlus size={13} /> From File</button>
            </div>
          </div>
          {/* Count + Difficulty controls */}
          <div className="flex gap-3 items-center flex-wrap">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-black uppercase tracking-widest opacity-40 shrink-0">Count:</span>
              {[5, 10, 20, 50, 100].map(n => (
                <button key={n} onClick={() => setInlineCount(n)}
                  className="px-2.5 py-1 rounded-lg text-xs font-black transition-all"
                  style={{ background: inlineCount === n ? '#3b82f6' : '#3b82f618', color: inlineCount === n ? '#fff' : '#3b82f6' }}>{n}</button>
              ))}
            </div>
            <div className="w-px h-4 opacity-20" style={{ background: 'var(--border)' }} />
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-black uppercase tracking-widest opacity-40 shrink-0">Level:</span>
              {[['Easy','#10b981'],['Medium','#f59e0b'],['Hard','#ef4444'],['Board','#7c3aed']].map(([d,col]) => (
                <button key={d} onClick={() => setInlineDiff(d)}
                  className="px-2.5 py-1 rounded-lg text-xs font-black transition-all"
                  style={{ background: inlineDiff === d ? col : col + '18', color: inlineDiff === d ? '#fff' : col }}>{d}</button>
              ))}
            </div>
          </div>
        </div>

        {exams.length > 0 && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                ['Total Exams', exams.length, '#3b82f6'],
                ['Questions', exams.reduce((s, e) => s + (e.questions?.length || 0), 0), '#6366f1'],
                ['Avg Score', ANALYTICS.scores.length ? `${Math.round(ANALYTICS.scores.reduce((s, r) => s + r.pct, 0) / ANALYTICS.scores.length)}%` : '—', '#10b981'],
                ['Attempts', ANALYTICS.scores.length, '#f59e0b'],
              ].map(([l, n, col]) => (
                <div key={l} className="glass rounded-2xl p-3 text-center border border-[color:var(--border2,var(--border))]">
                  <p className="text-xl font-black" style={{ color: col }}>{n}</p>
                  <p className="text-xs font-black uppercase tracking-widest opacity-50 mt-0.5">{l}</p>
                </div>
              ))}
            </div>
            {/* Filters */}
            <div className="flex gap-2 flex-wrap">
              <select value={filterDocId} onChange={e => setFilterDocId(e.target.value)}
                className="glass rounded-xl px-3 py-2 text-xs font-bold border border-[color:var(--border2,var(--border))] outline-none text-[var(--text)]">
                <option value="all">All Documents</option>
                {[...new Set(exams.map(e => e.docId))].map(id => { const doc = docs?.find(d => d.id === id); return doc ? <option key={id} value={id}>{doc.name.slice(0, 30)}</option> : null; })}
              </select>
              <select value={sortMode} onChange={e => setSortMode(e.target.value)}
                className="glass rounded-xl px-3 py-2 text-xs font-bold border border-[color:var(--border2,var(--border))] outline-none text-[var(--text)]">
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
                <option value="most">Most questions</option>
              </select>
            </div>
          </>
        )}

        {!exams.length ? (
          <div className="glass border-dashed border-2 border-[color:var(--border2,var(--border))] rounded-3xl p-12 text-center">
            <CheckSquare size={48} className="mx-auto mb-4 opacity-20" />
            <p className="text-lg font-black opacity-40">No exams yet</p>
            <p className="text-sm opacity-30 mt-1 mb-6">Generate exams from any document</p>
            <button onClick={() => setShowModal(true)} className="btn-accent px-6 py-3 rounded-2xl font-black shadow-xl flex items-center gap-2 mx-auto">
              <FilePlus size={16} /> Generate from File
            </button>
          </div>
        ) : (filteredExams.map(ex => (
          <div key={ex.id} className={`glass rounded-2xl p-5 border transition-all card-hover ${ex.isBuiltin ? 'border-emerald-500/30 bg-emerald-500/3' : 'border-[color:var(--border2,var(--border))] hover:border-[var(--accent)]/20'}`}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-black text-sm truncate">{ex.title}</h3>
                  {ex.isBuiltin && <span className="text-xs font-black px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">📚 Built-in</span>}
                </div>
                <p className="text-xs opacity-40 mt-0.5">{ex.questions?.length} questions · {ex.isBuiltin ? 'Always available' : new Date(ex.createdAt).toLocaleDateString()}</p>
                {ex.docId && docs?.find(d => d.id === ex.docId) && (
                  <p className="text-xs opacity-30 mt-0.5 truncate">📄 {docs.find(d => d.id === ex.docId).name}</p>
                )}
              </div>
              <div className="flex gap-2 shrink-0">
                <button onClick={() => handleExport(ex)} disabled={exporting} title="Export as PDF"
                  className="w-9 h-9 glass rounded-xl flex items-center justify-center hover:bg-blue-500/10 hover:text-blue-500 transition-colors" >
                  {exporting ? <Loader2 size={14} className="animate-spin" /> : <Printer size={18} />}
                </button>
                <button onClick={() => { setSelEx(ex); setReviewMode(true); }} title="Review all questions"
                  className="w-9 h-9 glass rounded-xl flex items-center justify-center hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] transition-colors">
                  <Eye size={18} />
                </button>
                <button onClick={() => startExamWithResumeCheck(ex)} className="btn-accent px-4 py-2 rounded-xl text-xs font-black shadow-md flex items-center gap-2"><Target size={18} /> Start</button>
                {!(ex.isBuiltin || ex.isBuiltIn) && <button onClick={() => setExams(p => p.filter(f => f.id !== ex.id))} className="w-9 h-9 glass rounded-xl flex items-center justify-center hover:bg-red-500/10 hover:text-red-500 transition-colors" style={{ display: ex.isBuiltin ? 'none' : 'flex' }}><Trash2 size={14} /></button>}
              </div>
            </div>
          </div>
        )))}

      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   CASES VIEW — v6 with Quick Generate
═══════════════════════════════════════════════════════════════════ */
function CasesView({ cases, setCases, settings, addToast, docs, setFlashcards, setExams }) {
  const [selSet, setSelSet] = useState(null); const [ci, setCi] = useState(0);
  const [casesMobileTutorOpen, setCasesMobileTutorOpen] = useState(false);
  const [stage, setStage] = useState('vignette'); const [selOpt, setSelOpt] = useState(null); const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [exporting, setExporting] = useState(null);
  const [inlineCount, setInlineCount] = useState(5);
  const [inlineDiff, setInlineDiff] = useState('Medium');
  const [inlineInput, setInlineInput] = useState('');

  const handleExport = async (set) => {
    setExporting(set.id);
    await exportToPDF('cases', set.questions, set.title, addToast);
    setExporting(null);
  };

  /* ── draggable panel widths ── */
  const [labW, setLabW] = useState(420);
  const [tutorW, setTutorW] = useState(360);
  const handleLabDrag = useCallback(x => { setLabW(Math.max(280, Math.min(600, window.innerWidth - x))); }, []);
  const handleTutorDrag = useCallback(x => { setTutorW(Math.max(260, Math.min(520, window.innerWidth - x))); }, []);
  const startLabDrag = useDrag(handleLabDrag, [handleLabDrag]);
  const startTutorDrag = useDrag(handleTutorDrag, [handleTutorDrag]);

  if (selSet) {
    const cas = selSet.questions[ci]; const q = cas.examQuestion || cas;
    const tutorCtx = `Clinical case study — FOCUS ONLY ON THIS CASE.\nCase: ${cas?.title || 'Untitled'}\n\n--- CURRENT CASE (answer ONLY about this) ---\nVignette: ${cas?.vignette || ''}\nDiagnosis: ${cas?.diagnosis || 'N/A'}\nQuestion: ${q?.q}\nCorrect answer: ${q?.options?.[q?.correct]}\nExplanation: ${q?.explanation || 'N/A'}\n--- END OF CURRENT CASE ---\nDo NOT discuss other cases, questions, or topics outside this case.`;
    return (
      /* ══ THREE-PANEL LAYOUT ══ */
      <div className="flex-1 min-h-0 flex flex-col overflow-hidden">

        {/* ── TOP BAR ── */}
        <div className="h-14 glass flex items-center justify-between px-5 shrink-0 border-b border-[color:var(--border2,var(--border))] border-x-0 border-t-0">
          <button onClick={() => { setSelSet(null); setCi(0); setSelOpt(null); setSubmitted(false); }}
            className="glass px-4 py-2 rounded-xl text-sm font-black flex items-center gap-2 hover:border-[var(--accent)]/40 transition-all">
            <ChevronLeft size={18} />Exit
          </button>
          <div className="text-center">
            {cas.title && <p className="text-base font-black truncate max-w-xs">{cas.title}</p>}
            <div className="flex items-center gap-2 justify-center mt-0.5">
              <p className="text-xs font-bold opacity-50">Case {ci + 1} / {selSet.questions.length}</p>
              <div className="flex gap-0.5">
                {selSet.questions.map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-full transition-all ${i === ci ? 'w-6 bg-[var(--accent)]' : i < ci ? 'w-2 bg-emerald-500' : 'w-2 bg-black/10 dark:bg-white/10'}`} />
                ))}
              </div>
            </div>
          </div>
          <button onClick={() => handleExport(selSet)} className="glass px-3 py-2 rounded-xl text-sm font-black opacity-60 hover:opacity-100 flex items-center gap-2">
            <Printer size={16} />PDF
          </button>
        </div>

        {/* ── MAIN THREE-PANEL ROW ── */}
        <div className="flex-1 min-h-0 flex overflow-hidden">

          {/* ═══ LEFT: Vignette + Question + Answers (scrollable) ═══ */}
          <div className="flex-1 min-w-0 overflow-y-auto custom-scrollbar p-5 pb-36 space-y-4" style={{ touchAction: 'pan-y', WebkitOverflowScrolling: 'touch' }}>

            {/* Patient Vignette */}
            <div className="glass rounded-2xl p-5 border border-[color:var(--border2,var(--border))]">
              <p className="text-xs font-black uppercase tracking-widest text-[var(--accent)] mb-3 flex items-center gap-2">
                <Stethoscope size={13} /> Patient Vignette
              </p>
              <p className="text-sm leading-[1.85]">{cas.vignette}</p>
            </div>

            {/* Mobile: Lab Results (inline inside scrollable column) */}
            {cas.labPanels?.length > 0 && (
              <div className="lg:hidden glass rounded-2xl border border-[color:var(--border2,var(--border))] overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[color:var(--border2,var(--border))]">
                  <Thermometer size={14} className="text-[var(--accent)] shrink-0" />
                  <span className="text-xs font-black uppercase tracking-widest text-[var(--accent)]">Laboratory Results</span>
                </div>
                {cas.labPanels.map((panel, pi) => (
                  <div key={pi} className="px-4 py-3 border-b border-[color:var(--border2,var(--border))]/50 last:border-0 overflow-x-auto">
                    <p className="text-[9px] font-black uppercase tracking-widest opacity-40 mb-2">{panel.panelName}</p>
                    <table className="w-full text-xs min-w-[280px]">
                      <thead>
                        <tr className="border-b border-[color:var(--border2,var(--border))]">
                          {['TEST', 'RESULT', 'RANGE', 'UNITS'].map(h => (
                            <th key={h} className="text-left py-1 px-2 text-[9px] font-black uppercase tracking-widest opacity-40">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {(panel.rows || []).map((row, ri) => (
                          <tr key={ri} className="border-b border-[color:var(--border2,var(--border))]/20 last:border-0">
                            <td className="py-1.5 px-2 font-bold">{row.test}</td>
                            <td className="py-1.5 px-2 font-black" style={{ color: row.flag === 'H' ? '#ef4444' : row.flag === 'L' ? '#3b82f6' : undefined }}>
                              {row.result}{row.flag && <span className="ml-0.5 text-[9px]">{row.flag}</span>}
                            </td>
                            <td className="py-1.5 px-2 opacity-40 font-mono">{row.range}</td>
                            <td className="py-1.5 px-2 opacity-30 font-mono">{row.units}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            )}

            {/* Question stem */}
            <div className="glass rounded-2xl p-5 border border-[color:var(--border2,var(--border))]">
              <p className="text-sm font-black uppercase tracking-widest opacity-40 mb-3 flex items-center gap-2"><CheckSquare size={13} />Question</p>
              <p className="text-base font-semibold leading-relaxed">{q.q}</p>
            </div>

            {/* Answer options */}
            <div className="space-y-2.5">
              {(q.options || []).map((opt, oi) => (
                <button key={oi} disabled={submitted} onClick={() => setSelOpt(oi)}
                  className={`w-full text-left px-5 py-3.5 rounded-2xl text-sm font-medium transition-all border flex items-center gap-3
                    ${submitted && oi === q.correct ? 'bg-emerald-500/15 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold' :
                      submitted && oi === selOpt && oi !== q.correct ? 'bg-red-500/15 border-red-500 text-red-500' :
                        selOpt === oi ? 'bg-[var(--accent)]/10 border-[var(--accent)] font-bold' : 'glass border-[color:var(--border2,var(--border))] hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/5'}`}>
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 border transition-all
                    ${submitted && oi === q.correct ? 'bg-emerald-500 border-emerald-500 text-white' :
                      submitted && oi === selOpt && oi !== q.correct ? 'bg-red-500 border-red-500 text-white' :
                        selOpt === oi ? 'bg-[var(--accent)] border-[var(--accent)] text-white' : 'border-[color:var(--border2,var(--border))] opacity-50'}`}>
                    {String.fromCharCode(65 + oi)}
                  </span>
                  <span className="flex-1">{opt.replace(/^[A-E][).]\s+/i, '')}</span>
                  {submitted && oi === q.correct && <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />}
                </button>
              ))}
            </div>

            {/* Explanation */}
            {submitted && (
              <div className="glass p-5 rounded-2xl border-l-4 border-emerald-500 bg-emerald-500/5 space-y-2">
                {cas.diagnosis && <p className="text-sm font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-2"><CheckCircle2 size={15} />Diagnosis: {cas.diagnosis}</p>}
                {(q.explanation || q.options?.[q.correct]) && <p className="text-sm leading-relaxed">{q.explanation || `Correct answer: ${(q.options?.[q.correct] || '').replace(/^[A-E][).]\s+/i, '')}`}</p>}
                {q.evidence && <p className="text-xs opacity-40 italic pt-3 border-t border-[color:var(--border2,var(--border))]">"{q.evidence}" — p.{q.sourcePage}</p>}
              </div>
            )}
            {submitted && <DrugQuickRef detail={findDrugDetail(q.q, q.options, q.correct)} />}

            {/* Action */}
            <div className="pb-4">
              {!submitted ?
                <button onClick={() => setSubmitted(true)} disabled={selOpt === null}
                  className="w-full py-4 btn-accent rounded-2xl text-base font-black disabled:opacity-40 shadow-xl">
                  Submit Answer
                </button> :
                ci < selSet.questions.length - 1 ?
                  <button onClick={() => { setCi(i => i + 1); setSelOpt(null); setSubmitted(false); }}
                    className="w-full py-4 btn-accent rounded-2xl text-base font-black shadow-xl flex items-center justify-center gap-2">
                    <ChevronRight size={20} />Next Case
                  </button> :
                  <button onClick={() => { setSelSet(null); setCi(0); addToast('All cases complete! 🏆', 'success'); }}
                    className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl text-base font-black shadow-xl">
                    Finish Session 🎉
                  </button>
              }
            </div>
            {/* Mobile: Ask AI Tutor button (visible because FAB was removed) */}
            <div className="lg:hidden">
              <button onClick={() => setCasesMobileTutorOpen(true)} className="w-full glass py-3.5 rounded-2xl flex items-center justify-center gap-2 font-bold text-[var(--accent)] border border-[var(--accent)]/30 hover:bg-[var(--accent)]/10 transition-colors">
                <MessageSquare size={18} /> Ask AI Tutor
              </button>
            </div>
          </div>

          {/* ═══ DRAG HANDLE: left ↔ lab ═══ */}
          <div onMouseDown={startLabDrag} onTouchStart={startLabDrag}
            className="hidden lg:flex w-3 cursor-col-resize items-center justify-center bg-[var(--border)]/30 hover:bg-[var(--accent)]/40 shrink-0 z-10 touch-none transition-colors group" style={{ touchAction: 'none' }}>
            <GripVertical size={14} className="opacity-20 group-hover:opacity-70 text-[var(--text)]" />
          </div>

          {/* ═══ MIDDLE: Lab Results (scrollable, draggable width) ═══ */}
          <div className="hidden lg:flex flex-col border-l border-[color:var(--border2,var(--border))] bg-[var(--surface,var(--card))] overflow-hidden shrink-0"
            style={{ width: labW }}>
            {/* Lab header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[color:var(--border2,var(--border))] shrink-0 cursor-grab select-none"
              onMouseDown={startLabDrag} onTouchStart={startLabDrag} style={{ touchAction: 'none' }}>
              <Thermometer size={15} className="text-[var(--accent)] shrink-0" />
              <span className="text-sm font-black uppercase tracking-widest text-[var(--accent)]">Laboratory Results</span>
              <GripVertical size={13} className="ml-auto opacity-20" />
            </div>
            {/* Lab content */}
            <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar p-4 space-y-5">
              {cas.labPanels?.length > 0 ? cas.labPanels.map((panel, pi) => (
                <div key={pi}>
                  <p className="text-xs font-black uppercase tracking-widest opacity-50 mb-2 px-1">{panel.panelName}</p>
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[color:var(--border2,var(--border))]">
                        {['TEST', 'RESULT', 'RANGE', 'UNITS'].map(h => (
                          <th key={h} className="text-left py-1.5 px-2 text-xs font-black uppercase tracking-wider opacity-40">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {(panel.rows || []).map((row, ri) => (
                        <tr key={ri} className="border-b border-[color:var(--border2,var(--border))]/20 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                          <td className="py-2 px-2 font-bold text-sm">{row.test}</td>
                          <td className="py-2 px-2 font-black text-sm">
                            <span className="flex items-center gap-1" style={{ color: row.flag === 'H' ? '#ef4444' : row.flag === 'L' ? '#3b82f6' : undefined }}>
                              {row.result}
                              {row.flag && <span className="text-xs font-black px-1 py-0.5 rounded" style={{ backgroundColor: row.flag === 'H' ? '#ef444420' : row.flag === 'L' ? '#3b82f620' : 'transparent' }}>{row.flag}</span>}
                            </span>
                          </td>
                          <td className="py-2 px-2 text-sm opacity-45 font-mono">{row.range}</td>
                          <td className="py-2 px-2 text-sm opacity-35 font-mono">{row.units}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )) : (
                <div className="flex flex-col items-center justify-center h-32 opacity-25">
                  <Thermometer size={28} className="mb-2" />
                  <p className="text-sm font-bold">No lab data</p>
                </div>
              )}
            </div>

          </div>

          {/* ═══ DRAG HANDLE: lab ↔ tutor ═══ */}
          <div onMouseDown={startTutorDrag} onTouchStart={startTutorDrag}
            className="hidden lg:flex w-3 cursor-col-resize items-center justify-center bg-[var(--border)]/30 hover:bg-[var(--accent)]/40 shrink-0 z-10 touch-none transition-colors group" style={{ touchAction: 'none' }}>
            <GripVertical size={14} className="opacity-20 group-hover:opacity-70 text-[var(--text)]" />
          </div>

          {/* ═══ RIGHT: AI Tutor (always open, draggable width) ═══ */}
          <div className="hidden lg:flex flex-col border-l border-[color:var(--border2,var(--border))] shrink-0 overflow-hidden"
            style={{ width: tutorW }}>
            <AiTutorPanel settings={settings} context={tutorCtx} onClose={null} width={tutorW} onDragStart={startTutorDrag} alwaysOpen={true} />
          </div>

        </div>

        {/* MOBILE: AI Tutor modal triggered by inline Ask AI Tutor button */}
        {casesMobileTutorOpen && createPortal(
          <div className="lg:hidden fixed inset-0 z-[99999] flex flex-col justify-end backdrop-blur-sm" style={{ background: 'rgba(0,0,0,0.55)' }} onClick={e => e.target === e.currentTarget && setCasesMobileTutorOpen(false)}>
            <div className="glass rounded-t-[32px] flex flex-col overflow-hidden animate-slide-up" style={{ height: '85%', boxShadow: '0 -10px 50px rgba(0,0,0,0.4)' }} onClick={e => e.stopPropagation()}>
              <AiTutorPanel settings={settings} context={tutorCtx} onClose={() => setCasesMobileTutorOpen(false)} width={window.innerWidth} />
            </div>
          </div>, document.body
        )}

      </div>
    );
  }

  return (
    <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar scroll-content" style={{ touchAction: "pan-y", WebkitOverflowScrolling: "touch" }}>
      {showModal && <QuickGenerateModal type="cases" docs={docs || []} settings={settings}
        onClose={() => setShowModal(false)} addToast={addToast}
        setFlashcards={setFlashcards || ((fn) => { })} setExams={setExams || ((fn) => { })} setCases={setCases} />}
      <div className="w-full p-6 lg:p-8 space-y-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl lg:text-3xl font-black flex items-center gap-3"><Activity size={26} className="opacity-40" /> Clinical Cases</h1>
          </div>
          {/* Inline generate bar */}
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
            <div className="flex items-center gap-2 glass rounded-2xl px-4 py-2.5 border border-[color:var(--border2,var(--border))] lg:flex-1">
              <Search size={15} className="opacity-30 shrink-0" />
              <input
                value={inlineInput} onChange={e => setInlineInput(e.target.value)}
                placeholder="Type a topic… e.g. 'septic shock', 'Tylenol OD'"
                className="flex-1 bg-transparent text-sm outline-none placeholder:opacity-40 text-[var(--text)]"
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    const val = inlineInput.trim(); if (!val) return;
                    const taskId = 'task_' + Date.now();
                    runTopicGeneration({ taskId, topic: val, taskType: 'cases', count: inlineCount, difficultyLevel: inlineDiff, settings,
                      onSave: (data, tid) => { setCases(p => [...p, { id: taskId, docId: null, sourcePages: 'topic', title: `Cases — ${val.slice(0,30)}`, questions: data, createdAt: new Date().toISOString() }]); addToast(`${data.length} cases saved! ⚡`, 'success'); bgClear(tid); } });
                    addToast(`Generating ${inlineCount} ${inlineDiff} cases on "${val.slice(0,25)}…"`, 'info'); setInlineInput('');
                  }
                }}
              />
              <button onClick={() => { const val = inlineInput.trim(); if (!val) return; const taskId = 'task_' + Date.now(); runTopicGeneration({ taskId, topic: val, taskType: 'cases', count: inlineCount, difficultyLevel: inlineDiff, settings, onSave: (data, tid) => { setCases(p => [...p, { id: taskId, docId: null, sourcePages: 'topic', title: `Cases — ${val.slice(0,30)}`, questions: data, createdAt: new Date().toISOString() }]); addToast(`${data.length} cases saved! ⚡`, 'success'); bgClear(tid); } }); addToast(`Generating ${inlineCount} ${inlineDiff} cases on "${val.slice(0,25)}…"`, 'info'); setInlineInput(''); }}
                className="shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-xl text-[11px] font-black text-white btn-accent" title="Generate cases">
                <Zap size={11} /> Generate
              </button>
            </div>
            <div className="flex gap-2 lg:shrink-0">
              <button onClick={() => { const topic = MEDICAL_RANDOM_TOPICS[Math.floor(Math.random() * MEDICAL_RANDOM_TOPICS.length)]; const taskId = 'task_' + Date.now(); runTopicGeneration({ taskId, topic, taskType: 'cases', count: inlineCount, difficultyLevel: inlineDiff, settings, onSave: (data, tid) => { setCases(p => [...p, { id: taskId, docId: null, sourcePages: 'topic', title: `Cases — ${topic.split(':')[0].trim().slice(0,30)}`, questions: data, createdAt: new Date().toISOString() }]); addToast(`${data.length} cases saved! ⚡`, 'success'); bgClear(tid); } }); addToast('🎲 Generating random cases…', 'info'); }}
                className="flex-1 lg:flex-none lg:px-5 flex items-center justify-center gap-1.5 py-2.5 rounded-2xl text-xs font-black transition-all hover:scale-105 active:scale-95 shadow-sm"
                style={{ background: 'linear-gradient(135deg,#c084fc,#8b5cf6)', color: '#fff', boxShadow: '0 4px 14px #8b5cf640' }}>
                <Shuffle size={12} /> Random
              </button>
              <button onClick={() => setShowModal(true)} className="flex-1 lg:flex-none lg:px-5 flex items-center justify-center gap-2 py-2.5 rounded-2xl text-xs font-black glass border border-[color:var(--border2,var(--border))] hover:opacity-80 opacity-60"><FilePlus size={13} /> From File</button>
            </div>
          </div>
          {/* Count + Difficulty controls */}
          <div className="flex gap-3 items-center flex-wrap">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-black uppercase tracking-widest opacity-40 shrink-0">Cases:</span>
              {[1, 3, 5, 10, 20].map(n => (
                <button key={n} onClick={() => setInlineCount(n)}
                  className="px-2.5 py-1 rounded-lg text-xs font-black transition-all"
                  style={{ background: inlineCount === n ? '#8b5cf6' : '#8b5cf618', color: inlineCount === n ? '#fff' : '#8b5cf6' }}>{n}</button>
              ))}
            </div>
            <div className="w-px h-4 opacity-20" style={{ background: 'var(--border)' }} />
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-black uppercase tracking-widest opacity-40 shrink-0">Level:</span>
              {[['Easy','#10b981'],['Medium','#f59e0b'],['Hard','#ef4444'],['Board','#7c3aed']].map(([d,col]) => (
                <button key={d} onClick={() => setInlineDiff(d)}
                  className="px-2.5 py-1 rounded-lg text-xs font-black transition-all"
                  style={{ background: inlineDiff === d ? col : col + '18', color: inlineDiff === d ? '#fff' : col }}>{d}</button>
              ))}
            </div>
          </div>
        </div>
        {cases.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              ['Case Sets', cases.length, '#8b5cf6'],
              ['Total Cases', cases.reduce((s, c) => s + (c.questions?.length || 0), 0), '#06b6d4'],
              ['Docs Used', [...new Set(cases.map(c => c.docId))].filter(Boolean).length, '#10b981'],
            ].map(([l, n, col]) => (
              <div key={l} className="glass rounded-2xl p-3 text-center border border-[color:var(--border2,var(--border))]">
                <p className="text-xl font-black" style={{ color: col }}>{n}</p>
                <p className="text-xs font-black uppercase tracking-widest opacity-50 mt-0.5">{l}</p>
              </div>
            ))}
          </div>
        )}
        {!cases.length ? (
          <div className="glass border-dashed border-2 border-[color:var(--border2,var(--border))] rounded-3xl p-12 text-center">
            <Activity size={48} className="mx-auto mb-4 opacity-20" />
            <p className="text-lg font-black opacity-40">No cases yet</p>
            <p className="text-sm opacity-30 mt-1 mb-6">Generate clinical cases from any medical document</p>
            <button onClick={() => setShowModal(true)} className="btn-accent px-6 py-3 rounded-2xl font-black shadow-xl flex items-center gap-2 mx-auto">
              <FilePlus size={16} /> Generate from File
            </button>
          </div>
        ) : (cases.map(set => (
          <div key={set.id} className="glass rounded-2xl p-5 border border-[color:var(--border2,var(--border))] hover:border-[var(--accent)]/20 transition-all card-hover">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <h3 className="font-black text-sm truncate">{set.title}</h3>
                <p className="text-xs opacity-40 mt-0.5">{set.questions?.length} cases · {new Date(set.createdAt || 0).toLocaleDateString()}</p>
                {set.docId && docs?.find(d => d.id === set.docId) && (
                  <p className="text-xs opacity-30 mt-0.5 truncate">📄 {docs.find(d => d.id === set.docId).name}</p>
                )}
              </div>
              <div className="flex gap-2 shrink-0">
                <button onClick={() => handleExport(set)} disabled={exporting === set.id} title="Export PDF"
                  className="w-9 h-9 glass rounded-xl flex items-center justify-center hover:bg-blue-500/10 hover:text-blue-500 transition-colors">
                  {exporting === set.id ? <Loader2 size={14} className="animate-spin" /> : <Printer size={18} />}
                </button>
                <button onClick={() => { const shuffledSet = { ...set, questions: shuffleOptions(set.questions.map(c => c.examQuestion ? { ...c, examQuestion: shuffleOptions([c.examQuestion])[0] } : c)) }; setSelSet(shuffledSet); setCi(0); setSelOpt(null); setSubmitted(false); }}
                  className="btn-accent px-4 py-2 rounded-xl text-xs font-black shadow-md flex items-center gap-2"><Stethoscope size={18} />Practice</button>
                {!(set.isBuiltin || set.isBuiltIn) && <button onClick={() => setCases(p => p.filter(x => x.id !== set.id))} className="w-9 h-9 glass rounded-xl flex items-center justify-center hover:bg-red-500/10 hover:text-red-500 transition-colors" style={{ display: set.isBuiltin ? 'none' : 'flex' }}><Trash2 size={14} /></button>}
              </div>
            </div>
          </div>
        )))}

      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   CHAT VIEW — global AI chat with streaming + voice
═══════════════════════════════════════════════════════════════════ */
function ChatView({ settings, sessions, setSessions, setView, docs, activeId, setActiveId, setOpenDocs }) {
  const [selSess, setSelSess] = useState(null);
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(() => window.innerWidth >= 1024);
  const [sessSearch, setSessSearch] = useState('');
  const [pinnedIds, setPinnedIds] = useState([]);
  const [contextMenu, setContextMenu] = useState(null);
  const [projects, setProjects] = useState([]);
  const [topics, setTopics] = useState([]);
  const [selProject, setSelProject] = useState(null);
  const [showNewProject, setShowNewProject] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectInstructions, setNewProjectInstructions] = useState('');
  const [showNewTopic, setShowNewTopic] = useState(false);
  const [newTopicName, setNewTopicName] = useState('');
  const [sidebarTab, setSidebarTab] = useState('chats');
  const [encSearch, setEncSearch] = useState('');
  const [encCat, setEncCat] = useState(null);
  const [encSub, setEncSub] = useState(null);
  const [encContent, setEncContent] = useState('');
  const [encLoading, setEncLoading] = useState(false);
  const [encCached, setEncCached] = useState(false);
  const [encFollowUp, setEncFollowUp] = useState('');
  const [inputRows, setInputRows] = useState(1);
  const [showNavSheet, setShowNavSheet] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const endRef = useRef(null);
  const recogRef = useRef(null);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [msgs, loading]);

  const STARTERS = [
    { icon: '🧬', text: 'Explain a complex pharmacology concept' },
    { icon: '📋', text: 'Create a study plan for my exam' },
    { icon: '❓', text: 'Quiz me on controlled substances law' },
    { icon: '🔍', text: 'Compare drug mechanisms of action' },
    { icon: '🏥', text: 'Walk me through a clinical case' },
    { icon: '💊', text: 'Explain drug interactions for warfarin' },
  ];

  const toggleVoice = () => {
    if (listening) { recogRef.current && recogRef.current.stop(); setListening(false); return; }
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { alert('Voice not supported in this browser.'); return; }
    const r = new SR(); r.continuous = false; r.interimResults = true;
    r.onresult = e => setInput(Array.from(e.results).map(r => r[0].transcript).join(''));
    r.onend = () => setListening(false); r.onerror = () => setListening(false);
    r.start(); recogRef.current = r; setListening(true);
  };

  const newChat = () => { setSelSess(null); setMsgs([]); setHasStarted(false); setTimeout(() => inputRef.current && inputRef.current.focus(), 50); };

  const saveSession = (ms, id) => {
    if (!ms.filter(m => m.role === 'user').length) return;
    const sessId = id || selSess || Date.now().toString();
    const title = (ms.find(m => m.role === 'user') || {}).content.slice(0, 60) || 'New Chat';
    const sess = { id: sessId, title, messages: ms, updatedAt: new Date().toISOString(), msgCount: ms.filter(m => m.role === 'user').length, projectId: selProject || null };
    setSessions(p => { const ex = p.findIndex(s => s.id === sessId); return ex >= 0 ? [...p.slice(0, ex), sess, ...p.slice(ex + 1)] : [sess, ...p]; });
    setSelSess(sessId);
  };

  const loadSession = s => {
    setSelSess(s.id); setMsgs(s.messages || []); setHasStarted(true);
    if (window.innerWidth < 1024) setSidebarOpen(false);
  };

  const deleteSession = id => {
    setSessions(p => p.filter(s => s.id !== id));
    setPinnedIds(p => p.filter(x => x !== id));
    if (selSess === id) { setSelSess(null); setMsgs([]); setHasStarted(false); }
    setContextMenu(null);
  };

  const createProject = () => {
    if (!newProjectName.trim()) return;
    const colors = ['#6366f1','#8b5cf6','#3b82f6','#10b981','#f59e0b','#ef4444'];
    const p = { id: Date.now().toString(), name: newProjectName.trim(), instructions: newProjectInstructions.trim(), color: colors[Math.floor(Math.random()*colors.length)], createdAt: new Date().toISOString() };
    setProjects(prev => [...prev, p]);
    setNewProjectName(''); setNewProjectInstructions(''); setShowNewProject(false);
  };

  const createTopic = () => {
    if (!newTopicName.trim()) return;
    const t = { id: Date.now().toString(), name: newTopicName.trim(), createdAt: new Date().toISOString() };
    setTopics(prev => [...prev, t]);
    setNewTopicName(''); setShowNewTopic(false);
  };

  const openEncycloTopic = (cat, sub, forceRefresh = false) => {
    setEncCat(cat); setEncSub(sub);
    if (window.innerWidth < 1024) setSidebarOpen(false);
    const cacheKey = 'enc:' + cat.id + ':' + sub.id;
    // Check IndexedDB cache first (skip if forceRefresh)
    if (!forceRefresh) {
      getTopicCache(cacheKey).then(cached => {
        if (cached && cached.data) {
          setEncContent(cached.data);
          setEncCached(true);
          setEncLoading(false);
          return;
        }
        // No cache — generate fresh
        setEncCached(false);
        generateEncycloContent(cat, sub, cacheKey);
      }).catch(() => { setEncCached(false); generateEncycloContent(cat, sub, cacheKey); });
    } else {
      generateEncycloContent(cat, sub, cacheKey);
    }
  };

  const generateEncycloContent = (cat, sub, cacheKey) => {
    setEncCached(false); setEncContent(''); setEncLoading(true);
    const prompt = [
      'You are MARIAM, a world-class medical educator. Generate a COMPREHENSIVE, beautifully structured reference entry.',
      '',
      'Topic: ' + sub.label,
      'Category: ' + cat.label,
      'Description: ' + sub.desc,
      '',
      'STRICT FORMAT REQUIREMENTS — follow every rule below:',
      '1. Start with a 2-3 sentence bold clinical overview',
      '2. Use ## headings for every major section',
      '3. Use Markdown TABLES (| Col | Col |) for: classifications, comparisons, dosing, monitoring — include at LEAST 2 tables',
      '4. Use bullet points for mechanisms, steps, and lists of facts',
      '5. For drug comparisons: always use a side-by-side comparison table',
      '6. Add Clinical Pearl boxes using > blockquote syntax',
      '7. Use **bold** for all drug names, medical terms, key values, doses',
      '8. Add emojis (💊 🧬 ⚠️ ✅ 🏥 🔬 📋 💉) as visual section markers',
      '9. End with a "High-Yield Board Points" section as a numbered list',
      '',
      'REQUIRED CONTENT SECTIONS (include all relevant ones):',
      '- Overview & Classification (with table)',
      '- Mechanism of Action / Pathophysiology',
      '- Key Drug/Condition Examples (table: name | class | MOA | indication | dose)',
      '- Clinical Presentation / Indications',
      '- Dosing Guidelines (table)',
      '- Monitoring Parameters & Side Effects (table)',
      '- Contraindications & Drug Interactions',
      '- Clinical Pearls (use > blockquotes)',
      '- High-Yield Board Exam Points',
      '',
      'Be exhaustive, clinically accurate, and NAPLEX/USMLE/NCLEX board-exam ready. Generate the complete reference now:',
    ].join('\n');
    let fullContent = '';
    callAIStreaming(prompt, chunk => { fullContent = chunk; setEncContent(chunk); }, settings, 10000)
      .then(() => { if (fullContent) saveTopicCache(cacheKey, fullContent).catch(() => {}); })
      .catch(e => setEncContent('\u26a0\ufe0f Error loading content: ' + e.message))
      .finally(() => setEncLoading(false));
  };

  const openTopic = (topic) => {
    setHasStarted(true); setMsgs([]); setSelSess(null);
    if (window.innerWidth < 1024) setSidebarOpen(false);
    const hiddenPrompt = [
      'You are MARIAM, an expert medical educator. The student wants a comprehensive deep-dive lesson on: "' + topic.name + '".',
      '',
      'Produce an outstanding, textbook-quality teaching response structured as a complete lesson:',
      '- Use ## headings for major sections',
      '- Use **bold** for key terms, drug names, and concepts',
      '- Use Markdown tables to compare mechanisms, classifications, or data',
      '- Use bullet points and numbered lists for key facts',
      '- Add clinical pearls with emojis',
      '- Include mnemonics or memory aids where useful',
      '',
      'Cover: Overview, Mechanism of Action, Classification (with table), Clinical Uses, Dosing (table), Pharmacokinetics, Side Effects, Contraindications, Drug Interactions, Monitoring, Clinical Pearls.',
      '',
      'Be thorough, accurate, richly formatted, and immediately useful for pharmacy/medical students.',
    ].join('\n');
    const userMsg = 'Teach me everything about: ' + topic.name;
    const sessId = Date.now().toString();
    setSelSess(sessId);
    const initMsgs = [
      { role: 'user', content: userMsg, timestamp: Date.now() },
      { role: 'assistant', content: '', timestamp: Date.now() }
    ];
    setMsgs(initMsgs);
    setLoading(true);
    callAIStreaming(hiddenPrompt + '\n\nUSER: ' + userMsg + '\n\nMARIAM:', chunk => {
      setMsgs(p => [...p.slice(0, -1), { role: 'assistant', content: chunk, timestamp: Date.now() }]);
    }, settings, 8000)
    .catch(e => setMsgs(p => [...p.slice(0, -1), { role: 'assistant', content: '⚠️ ' + e.message }]))
    .finally(() => setLoading(false));
  };

    const send = async (overrideMsg) => {
    const msg = (overrideMsg || input).trim();
    if (!msg || loading) return;
    setInput(''); setInputRows(1); setHasStarted(true);
    const sessId = selSess || Date.now().toString();
    if (!selSess) setSelSess(sessId);
    const proj = selProject ? projects.find(p => p.id === selProject) : null;
    const projCtx = proj
      ? '\n\nProject: ' + proj.name + (proj.instructions ? '\nInstructions: ' + proj.instructions : '')
      : '';
    const sysPrompt = 'You are MARIAM, a brilliant AI study assistant specialized in medicine and pharmacy. ' +
      'Format responses with **bold** for key terms, ## headings for long answers, bullet points, and tables when comparing items.' +
      projCtx;
    const newMsgs = [...msgs,
      { role: 'user', content: msg, timestamp: Date.now() },
      { role: 'assistant', content: '', timestamp: Date.now() }
    ];
    setMsgs(newMsgs); setLoading(true);
    try {
      const hist = newMsgs.slice(-13, -1)
        .map(m => (m.role === 'user' ? 'USER' : 'MARIAM') + ': ' + m.content)
        .join('\n');
      const prompt = sysPrompt + '\n\nConversation:\n' + hist + '\n\nUSER: ' + msg + '\n\nMARIAM:';
      await callAIStreaming(prompt, chunk => {
        setMsgs(p => [...p.slice(0, -1), { role: 'assistant', content: chunk, timestamp: Date.now() }]);
      }, settings, 6000);
      setTimeout(() => saveSession(newMsgs, sessId), 400);
    } catch (e) {
      setMsgs(p => [...p.slice(0, -1), { role: 'assistant', content: '⚠️ ' + e.message }]);
    } finally { setLoading(false); }
  };

    const filteredSessions = useMemo(() => {
    let s = [...sessions];
    if (sidebarTab === 'projects' && selProject) s = s.filter(x => x.projectId === selProject);
    const q = sessSearch.toLowerCase();
    if (q) s = s.filter(x => x.title.toLowerCase().includes(q));
    return s.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  }, [sessions, sessSearch, sidebarTab, selProject]);

  const pinned = filteredSessions.filter(s => pinnedIds.includes(s.id));
  const unpinned = filteredSessions.filter(s => !pinnedIds.includes(s.id));

  const groupByDate = items => {
    const now = new Date(); now.setHours(0,0,0,0);
    const yest = new Date(now); yest.setDate(yest.getDate()-1);
    const week = new Date(now); week.setDate(week.getDate()-7);
    const g = { Today: [], Yesterday: [], 'Last 7 Days': [], Older: [] };
    items.forEach(s => {
      const d = new Date(s.updatedAt);
      if (d >= now) g.Today.push(s);
      else if (d >= yest) g.Yesterday.push(s);
      else if (d >= week) g['Last 7 Days'].push(s);
      else g.Older.push(s);
    });
    return g;
  };
  const grouped = groupByDate(unpinned);

  const SessItem = ({ s }) => (
    <button className={'w-full flex items-start gap-2.5 px-3 py-2.5 rounded-xl text-left transition-all group relative ' + (selSess === s.id ? 'bg-[var(--accent)]/10 border border-[var(--accent)]/25' : 'hover:bg-black/5 dark:hover:bg-white/5 border border-transparent')}
      onClick={() => loadSession(s)}>
      {s.projectId && <div className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0" style={{ backgroundColor: (projects.find(p => p.id === s.projectId) || {}).color || '#6366f1' }} />}
      <div className="flex-1 min-w-0">
        <p className={'text-sm truncate font-semibold ' + (selSess === s.id ? 'text-[var(--accent)]' : '')}>{s.title}</p>
        <p className="text-[10px] opacity-35 mt-0.5">{new Date(s.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} · {s.msgCount || 0} msgs</p>
      </div>
      <button className="opacity-0 group-hover:opacity-60 hover:!opacity-100 shrink-0 p-1 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 mt-0.5"
        onClick={e => { e.stopPropagation(); setContextMenu({ id: s.id, x: e.clientX, y: e.clientY }); }}>
        <MoreVertical size={13} />
      </button>
    </button>
  );

  const curSess = sessions.find(s => s.id === selSess);
  const topicsFiltered = sessSearch ? topics.filter(t => t.name.toLowerCase().includes(sessSearch.toLowerCase())) : topics;

  return (
    <div className="flex h-full min-h-0 overflow-hidden" style={{ background: 'var(--bg)' }} onClick={() => contextMenu && setContextMenu(null)}>

      {/* Mobile Nav Sheet */}
      {showNavSheet && setView && (
        <>
          <div className="fixed inset-0 z-[9990] bg-black/50 lg:hidden" onClick={() => setShowNavSheet(false)} />
          <div className="fixed bottom-0 left-0 right-0 z-[9999] lg:hidden rounded-t-3xl border-t border-[color:var(--border2,var(--border))] pb-[env(safe-area-inset-bottom,12px)]" style={{ background: 'var(--bg)', backdropFilter: 'blur(40px)' }}>
            <div className="w-10 h-1 rounded-full bg-[var(--text)]/20 mx-auto mt-3 mb-4" />
            <p className="text-[10px] font-black uppercase tracking-widest opacity-40 px-5 mb-3">Navigate to</p>
            <div className="grid grid-cols-4 gap-2 px-4 pb-4">
              {[
                ['Library', FolderOpen, 'library'],
                ['Reader', BookMarked, 'reader'],
                ['Cards', Layers, 'flashcards'],
                ['Cases', Activity, 'cases'],
                ['Exams', CheckSquare, 'exams'],
                ['Encyclo', Globe, 'encyclopedia'],
                ['Chat', MessageSquare, 'chat'],
                ['Settings', Settings, 'settings'],
              ].map(([label, Icon, v]) => (
                <button key={v} onClick={() => { setShowNavSheet(false); setView(v); }}
                  className={`flex flex-col items-center gap-1.5 py-3 rounded-2xl transition-all ${
                    v === 'chat' ? 'bg-[var(--accent)]/15 text-[var(--accent)]' : 'glass opacity-70 hover:opacity-100 text-[var(--text)]'
                  }`}>
                  <Icon size={22} strokeWidth={v === 'chat' ? 2.5 : 2} />
                  <span className="text-[10px] font-bold">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Context Menu */}
      {contextMenu && (
        <div className="fixed z-[9999] glass rounded-xl shadow-2xl border border-[color:var(--border2,var(--border))] py-1 min-w-[180px]"
          style={{ left: Math.min(contextMenu.x, window.innerWidth - 210), top: Math.min(contextMenu.y, window.innerHeight - 150) }}>
          <button onClick={() => { setPinnedIds(p => p.includes(contextMenu.id) ? p.filter(x => x !== contextMenu.id) : [...p, contextMenu.id]); setContextMenu(null); }}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold hover:bg-[var(--accent)]/10 transition-colors">
            <Pin size={14} />{pinnedIds.includes(contextMenu.id) ? 'Unpin' : 'Pin to top'}
          </button>
          <button onClick={() => { const s = sessions.find(x => x.id === contextMenu.id); if (s) navigator.clipboard && navigator.clipboard.writeText(s.messages.map(m => (m.role === 'user' ? 'You' : 'MARIAM') + ': ' + m.content).join('\n\n')); setContextMenu(null); }}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold hover:bg-[var(--accent)]/10 transition-colors">
            <Copy size={14} />Copy transcript
          </button>
          <div className="my-1 border-t border-[color:var(--border2,var(--border))]" />
          <button onClick={() => deleteSession(contextMenu.id)}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-500/10 transition-colors">
            <Trash2 size={14} />Delete chat
          </button>
        </div>
      )}

      {/* Mobile backdrop */}
      {sidebarOpen && <div className="lg:hidden fixed inset-0 z-[290] bg-black/50" onClick={() => setSidebarOpen(false)} />}

      {/* ── SIDEBAR ────────────────────────────────────────────────── */}
      <div className={'flex flex-col border-r border-[color:var(--border2,var(--border))] transition-all duration-300 shrink-0 lg:relative lg:z-auto fixed inset-y-0 left-0 z-[300] ' + (sidebarOpen ? 'w-[320px]' : 'w-0 overflow-hidden')}
        style={{ background: 'var(--bg)', paddingTop: 'env(safe-area-inset-top, 0px)' }}>

        {/* Sidebar header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[color:var(--border2,var(--border))] shrink-0">
          <span className="text-base font-black tracking-tight">MARIAM</span>
          <div className="flex items-center gap-1.5">
            <button onClick={newChat} className="w-8 h-8 btn-accent rounded-xl flex items-center justify-center shadow-sm" title="New chat"><Plus size={17} /></button>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden w-8 h-8 glass rounded-xl flex items-center justify-center opacity-60"><X size={17} /></button>
          </div>
        </div>

        {/* Search */}
        <div className="px-3 py-2.5 shrink-0">
          <div className="relative">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40 pointer-events-none" />
            <input value={sessSearch} onChange={e => setSessSearch(e.target.value)} placeholder="Search…"
              className="w-full bg-black/5 dark:bg-white/5 rounded-xl pl-8 pr-3 py-2 text-sm outline-none border border-transparent focus:border-[var(--accent)]/40 text-[var(--text)]" />
          </div>
        </div>

        {/* Tabs – 2×2 grid */}
        <div className="grid grid-cols-2 shrink-0 border-b border-[color:var(--border2,var(--border))]">
          {[
            ['chats', 'Chats', MessageSquare],
            ['projects', 'Projects', FolderOpen],
            ['topics', 'Topics', BookA],
            ['encyclo', 'Encyclo', Globe],
          ].map(([id, lbl, Icon], i) => (
            <button key={id} onClick={() => setSidebarTab(id)}
              className={'flex items-center justify-center gap-1 py-2 text-[9px] font-bold uppercase tracking-wide transition-all border-b-2 ' +
                (i % 2 === 0 ? 'border-r border-r-[color:var(--border2,var(--border))] ' : '') +
                (sidebarTab === id
                  ? 'border-b-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/5'
                  : 'border-b-transparent opacity-40 hover:opacity-70 hover:bg-black/3 dark:hover:bg-white/3')}>
              <Icon size={10} />
              <span>{lbl}</span>
            </button>
          ))}
        </div>

        {/* ── CHATS TAB ── */}
        {sidebarTab === 'chats' && (
          <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar py-2 px-2">
            {pinned.length > 0 && (
              <div className="mb-2">
                <p className="text-[9px] font-black uppercase tracking-widest opacity-30 px-2 py-1 flex items-center gap-1"><Pin size={8} />Pinned</p>
                {pinned.map(s => <SessItem key={s.id} s={s} />)}
                <div className="mx-2 my-2 border-t border-[color:var(--border2,var(--border))]" />
              </div>
            )}
            {Object.entries(grouped).map(([grp, items]) => items.length > 0 && (
              <div key={grp} className="mb-3">
                <p className="text-[9px] font-black uppercase tracking-widest opacity-30 px-2 py-1">{grp}</p>
                {items.map(s => <SessItem key={s.id} s={s} />)}
              </div>
            ))}
            {!sessions.length && (
              <div className="text-center py-16 px-4 opacity-30">
                <MessageSquare size={28} className="mx-auto mb-3" />
                <p className="text-sm font-bold">No chats yet</p>
                <p className="text-xs mt-1 opacity-70">Start a conversation below</p>
              </div>
            )}
          </div>
        )}

        {/* ── PROJECTS TAB ── */}
        {sidebarTab === 'projects' && (
          <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar py-2">
            <button onClick={() => setShowNewProject(true)} className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-colors">
              <Plus size={15} />New Project
            </button>
            {showNewProject && (
              <div className="mx-3 mb-3 p-3 rounded-xl border border-[color:var(--border2,var(--border))] space-y-2.5" style={{ background: 'var(--card)' }}>
                <p className="text-[9px] font-black uppercase tracking-widest opacity-40">New Project</p>
                <input value={newProjectName} onChange={e => setNewProjectName(e.target.value)} placeholder="Project name…" autoFocus
                  className="w-full text-sm bg-transparent outline-none border-b border-[color:var(--border2,var(--border))] pb-1.5 font-bold text-[var(--text)] placeholder:font-normal placeholder:opacity-40" />
                <textarea value={newProjectInstructions} onChange={e => setNewProjectInstructions(e.target.value)}
                  placeholder="Custom instructions (optional)…" rows={3}
                  className="w-full text-xs bg-black/5 dark:bg-white/5 rounded-lg px-2.5 py-2 outline-none resize-none border border-[color:var(--border2,var(--border))] focus:border-[var(--accent)]/50 text-[var(--text)] placeholder:opacity-40" />
                <div className="flex gap-2">
                  <button onClick={createProject} className="flex-1 py-2 btn-accent rounded-lg text-xs font-black">Create</button>
                  <button onClick={() => { setShowNewProject(false); setNewProjectName(''); setNewProjectInstructions(''); }} className="flex-1 py-2 rounded-lg text-xs font-black glass opacity-70">Cancel</button>
                </div>
              </div>
            )}
            {[{ id: null, name: 'All Chats', color: '#6366f1' }, ...projects].map(p => (
              <button key={p.id || 'all'} onClick={() => { setSelProject(p.id); if (!p.id) setSidebarTab('chats'); }}
                className={'w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-left transition-all ' + (selProject === p.id ? 'bg-[var(--accent)]/10' : 'hover:bg-black/5 dark:hover:bg-white/5')}>
                <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: p.color }} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold truncate">{p.name}</p>
                  <p className="text-[10px] opacity-40">{sessions.filter(s => s.projectId === p.id).length} chats</p>
                </div>
              </button>
            ))}
            {!projects.length && !showNewProject && (
              <div className="text-center py-12 px-4 opacity-30"><FolderOpen size={28} className="mx-auto mb-3" /><p className="text-sm font-bold">No projects yet</p></div>
            )}
          </div>
        )}

        {/* ── TOPICS TAB ── */}
        {sidebarTab === 'topics' && (
          <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar py-2">
            <button onClick={() => setShowNewTopic(true)} className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-colors">
              <Plus size={15} />New Topic
            </button>
            {showNewTopic && (
              <div className="mx-3 mb-3 p-3 rounded-xl border border-[color:var(--border2,var(--border))] space-y-2.5" style={{ background: 'var(--card)' }}>
                <p className="text-[9px] font-black uppercase tracking-widest opacity-40">New Topic</p>
                <input value={newTopicName} onChange={e => setNewTopicName(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && createTopic()}
                  placeholder="e.g. Warfarin, Renal Dosing, Beta Blockers…" autoFocus
                  className="w-full text-sm bg-transparent outline-none border-b border-[color:var(--border2,var(--border))] pb-1.5 font-bold text-[var(--text)] placeholder:font-normal placeholder:opacity-40" />
                <div className="flex gap-2">
                  <button onClick={createTopic} className="flex-1 py-2 btn-accent rounded-lg text-xs font-black">Generate Lesson</button>
                  <button onClick={() => { setShowNewTopic(false); setNewTopicName(''); }} className="flex-1 py-2 rounded-lg text-xs font-black glass opacity-70">Cancel</button>
                </div>
              </div>
            )}
            {!topicsFiltered.length && !showNewTopic && (
              <div className="text-center py-12 px-4 opacity-30">
                <BookA size={28} className="mx-auto mb-3" />
                <p className="text-sm font-bold">No topics yet</p>
                <p className="text-xs mt-1 opacity-70">Add a drug or concept for a deep lesson</p>
              </div>
            )}
            {topicsFiltered.map(t => (
              <div key={t.id} className="group flex items-center px-3 py-0.5">
                <button onClick={() => openTopic(t)} className="flex-1 flex items-center gap-3 px-2 py-2.5 rounded-xl text-left hover:bg-[var(--accent)]/8 transition-all">
                  <div className="w-8 h-8 rounded-xl btn-accent flex items-center justify-center shrink-0 shadow-sm">
                    <BookA size={14} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold truncate">{t.name}</p>
                    <p className="text-[10px] opacity-40">Tap for full lesson</p>
                  </div>
                  <ChevronRight size={13} className="opacity-30 shrink-0" />
                </button>
                <button onClick={() => setTopics(p => p.filter(x => x.id !== t.id))}
                  className="opacity-0 group-hover:opacity-60 hover:!opacity-100 w-7 h-7 rounded-lg hover:bg-red-500/10 flex items-center justify-center ml-1 flex-shrink-0">
                  <Trash2 size={12} className="text-red-500" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* ── ENCYCLO TAB ── */}
        {sidebarTab === 'encyclo' && (
          <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
            {/* Search bar */}
            <div className="px-3 pt-2.5 pb-1.5 shrink-0">
              <div className="relative">
                <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40 pointer-events-none" />
                <input
                  value={encSearch}
                  onChange={e => { setEncSearch(e.target.value); if (e.target.value) { setEncCat(null); setEncSub(null); } }}
                  placeholder="Search drugs, diseases, topics…"
                  className="w-full bg-black/5 dark:bg-white/5 rounded-xl pl-7 pr-7 py-1.5 text-xs outline-none border border-transparent focus:border-[var(--accent)]/40 text-[var(--text)]"
                />
                {encSearch && (
                  <button onClick={() => setEncSearch('')} className="absolute right-2 top-1/2 -translate-y-1/2 opacity-40 hover:opacity-80">
                    <X size={11} />
                  </button>
                )}
              </div>
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar">
            {encSearch ? (
              /* ── SEARCH RESULTS ── */
              (() => {
                const q = encSearch.toLowerCase();
                const results = ENCYCLOPEDIA_CATEGORIES.flatMap(cat =>
                  cat.subcategories
                    .filter(sub => sub.label.toLowerCase().includes(q) || sub.desc.toLowerCase().includes(q) || cat.label.toLowerCase().includes(q))
                    .map(sub => ({ cat, sub }))
                );
                return results.length > 0 ? results.map(({ cat, sub }) => (
                  <button key={cat.id + ':' + sub.id}
                    onClick={() => { openEncycloTopic(cat, sub); setEncSearch(''); }}
                    className="w-full flex items-center gap-2.5 px-4 py-2.5 hover:bg-[var(--accent)]/6 transition-all text-left group">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0" style={{ background: cat.color + '20' }}>
                      <cat.icon size={10} style={{ color: cat.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold truncate">{sub.label}</p>
                      <p className="text-[9px] opacity-40 truncate">{cat.label} · {sub.desc}</p>
                    </div>
                  </button>
                )) : (
                  <div className="text-center py-8 px-4 opacity-30">
                    <Search size={20} className="mx-auto mb-2" />
                    <p className="text-xs font-bold">No results for "{encSearch}"</p>
                  </div>
                );
              })()
            ) : !encCat ? (
              <>
                <p className="text-[9px] font-black uppercase tracking-widest opacity-30 px-4 py-2 pt-3">Browse Categories</p>
                {ENCYCLOPEDIA_CATEGORIES.map(cat => (
                  <button key={cat.id} onClick={() => setEncCat(cat)}
                    className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-[var(--accent)]/6 transition-all text-left group">
                    <div className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                      style={{ background: cat.color + '18' }}>
                      <cat.icon size={13} style={{ color: cat.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-bold truncate">{cat.label}</p>
                      <p className="text-[9px] opacity-40">{cat.subcategories.length} topics</p>
                    </div>
                    <ChevronRight size={11} className="opacity-25 shrink-0" />
                  </button>
                ))}
              </>
            ) : !encSub ? (
              <>
                <div className="flex items-center gap-2 px-3 py-2 border-b border-[color:var(--border2,var(--border))] mb-1 sticky top-0" style={{ background: 'var(--bg)' }}>
                  <button onClick={() => setEncCat(null)} className="p-1 rounded-lg hover:bg-black/8 dark:hover:bg-white/8 opacity-60 hover:opacity-100 transition-colors">
                    <ChevronLeft size={14} />
                  </button>
                  <encCat.icon size={12} style={{ color: encCat.color }} />
                  <span className="text-xs font-black truncate flex-1" style={{ color: encCat.color }}>{encCat.label}</span>
                </div>
                {encCat.subcategories.map(sub => (
                  <button key={sub.id} onClick={() => openEncycloTopic(encCat, sub)}
                    className="w-full flex items-center gap-2.5 px-4 py-2.5 hover:bg-[var(--accent)]/6 transition-all text-left group">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: encCat.color + '99' }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold truncate">{sub.label}</p>
                      <p className="text-[9px] opacity-35 truncate">{sub.desc}</p>
                    </div>
                  </button>
                ))}
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 px-3 py-2 border-b border-[color:var(--border2,var(--border))] mb-1 sticky top-0" style={{ background: 'var(--bg)' }}>
                  <button onClick={() => setEncSub(null)} className="p-1 rounded-lg hover:bg-black/8 dark:hover:bg-white/8 opacity-60 hover:opacity-100 transition-colors">
                    <ChevronLeft size={14} />
                  </button>
                  <span className="text-[10px] font-black truncate flex-1">{encCat.label}</span>
                </div>
                {encCat.subcategories.map(sub => (
                  <button key={sub.id} onClick={() => openEncycloTopic(encCat, sub)}
                    className={'w-full flex items-center gap-2 px-4 py-2.5 text-left transition-all ' +
                      (encSub.id === sub.id
                        ? 'bg-[var(--accent)]/10 text-[var(--accent)]'
                        : 'hover:bg-[var(--accent)]/5 opacity-55 hover:opacity-90')}>
                    {encSub.id === sub.id && <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />}
                    <span className={'text-xs truncate ' + (encSub.id === sub.id ? 'font-black' : 'font-semibold')}>{sub.label}</span>
                  </button>
                ))}
              </>
            )}
            </div>
          </div>
        )}

        {/* Sidebar footer */}
        <div className="shrink-0 px-4 py-2.5 border-t border-[color:var(--border2,var(--border))]">
          <p className="text-[10px] opacity-30 font-bold flex items-center gap-1.5"><Brain size={11} />{sessions.length} chats · {topics.length} topics</p>
        </div>
      </div>

      {/* ── MAIN AREA ──────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-h-0 min-w-0">

        {/* Safe-area strip — fills iPhone notch/status-bar height (chat hides the global header) */}
        <div className="lg:hidden shrink-0" style={{ height: 'env(safe-area-inset-top, 0px)', background: 'var(--surface,var(--card))' }} />

        {/* Top bar */}
        <div className="flex items-center gap-3 px-4 py-2.5 border-b border-[color:var(--border2,var(--border))] shrink-0" style={{ backdropFilter: 'blur(20px)', background: 'var(--surface,var(--card))' }}>
          {/* Mobile: hamburger opens the left sidebar (chat history, topics…) */}
          <button onClick={() => setSidebarOpen(o => !o)}
            className="lg:hidden w-9 h-9 glass rounded-xl flex items-center justify-center opacity-70 hover:opacity-100 shrink-0 transition-all" title="Open sidebar">
            <Menu size={20} />
          </button>
          {/* Desktop: history icon toggle */}
          <button onClick={() => setSidebarOpen(o => !o)} className="hidden lg:flex w-9 h-9 glass rounded-xl items-center justify-center opacity-60 hover:opacity-100 shrink-0 transition-all" title="Toggle sidebar">
            <History size={17} />
          </button>
          <div className="flex-1 min-w-0">
            {curSess && curSess.projectId && (
              <div className="flex items-center gap-1.5 mb-0.5">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: (projects.find(p => p.id === curSess.projectId) || {}).color || '#6366f1' }} />
                <span className="text-[10px] opacity-40 font-bold">{(projects.find(p => p.id === curSess.projectId) || {}).name}</span>
              </div>
            )}
            <p className="text-sm font-black truncate">{curSess ? curSess.title : 'New Conversation'}</p>
          </div>
          <div className="flex items-center gap-1">
            {msgs.length > 0 && (
              <button onClick={() => navigator.clipboard && navigator.clipboard.writeText(msgs.map(m => (m.role === 'user' ? 'You' : 'MARIAM') + ': ' + m.content).join('\n\n'))}
                className="w-9 h-9 glass rounded-xl flex items-center justify-center opacity-50 hover:opacity-100 transition-all" title="Copy all">
                <Copy size={15} />
              </button>
            )}
            <button onClick={newChat} className="flex items-center gap-1.5 px-3 py-2 glass rounded-xl text-xs font-black opacity-60 hover:opacity-100 transition-all">
              <Plus size={13} />New
            </button>
          </div>
        </div>

        {/* Messages / Welcome */}
        <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar" ref={scrollRef}>
          {sidebarTab === 'encyclo' && (encSub || encLoading) ? (
            /* ── ENCYCLOPEDIA CONTENT VIEW ── */
            <div className="flex flex-col h-full">
              {encCat && encSub && (
                <div className="shrink-0 px-5 pt-5 pb-4 border-b border-[color:var(--border2,var(--border))]"
                  style={{ background: 'linear-gradient(135deg, ' + encCat.color + '08 0%, transparent 100%)' }}>
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-sm"
                      style={{ background: encCat.color + '20' }}>
                      <encCat.icon size={22} style={{ color: encCat.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] font-black uppercase tracking-widest opacity-40 mb-0.5">{encCat.label}</p>
                      <h2 className="text-lg font-black leading-tight">{encSub.label}</h2>
                      <p className="text-xs opacity-45 mt-0.5">{encSub.desc}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {encCached && !encLoading && (
                        <span className="text-[9px] font-black uppercase tracking-widest opacity-40 flex items-center gap-1">
                          <Database size={9} />Cached
                        </span>
                      )}
                      <button onClick={() => openEncycloTopic(encCat, encSub, true)}
                        className="shrink-0 p-2 rounded-xl hover:bg-black/8 dark:hover:bg-white/8 opacity-50 hover:opacity-100 transition-colors"
                        title={encCached ? 'Refresh (regenerate — uses AI)' : 'Regenerate'}>
                        <RotateCcw size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar px-5 py-4">
                {encLoading && !encContent && (
                  <div className="flex flex-col items-center gap-4 py-16 opacity-50">
                    <div className="w-8 h-8 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin" />
                    <p className="text-sm font-bold">Generating comprehensive reference…</p>
                    <p className="text-xs opacity-60">This may take a moment</p>
                  </div>
                )}
                {encContent && (
                  <div className="text-sm leading-relaxed prose-like">
                    {renderMarkdown(encContent)}
                    {encLoading && <span className="inline-block w-1.5 h-4 bg-[var(--accent)] opacity-70 animate-pulse ml-0.5 rounded-sm align-middle" />}
                  </div>
                )}
              </div>
              {encSub && (
                <div className="shrink-0 px-4 pb-4 pt-2 border-t border-[color:var(--border2,var(--border))]">
                  <div className="glass rounded-2xl border border-[color:var(--border2,var(--border))] focus-within:border-[var(--accent)]/50 transition-colors">
                    <textarea
                      value={encFollowUp}
                      onChange={e => setEncFollowUp(e.target.value)}
                      placeholder={'Ask a follow-up about ' + encSub.label + '…'}
                      enterKeyHint="send"
                      rows={2}
                      className="w-full bg-transparent px-4 pt-3 pb-1.5 text-sm outline-none resize-none text-[var(--text)]"
                      onKeyDown={e => {
                        if ((e.key === 'Enter' || e.keyCode === 13) && !e.shiftKey) {
                          e.preventDefault(); e.stopPropagation();
                          const q = encFollowUp.trim();
                          if (!q) return;
                          setEncFollowUp('');
                          setSidebarTab('chats');
                          setTimeout(() => send('[ENCYCLO: ' + encSub.label + '] ' + q), 50);
                        }
                      }}
                    />
                    <div className="flex items-center justify-between px-3 pb-3">
                      <p className="text-[10px] opacity-30 font-medium">Shift+Enter for new line</p>
                      <button
                        onClick={() => {
                          const q = encFollowUp.trim();
                          if (!q) return;
                          setEncFollowUp('');
                          setSidebarTab('chats');
                          setTimeout(() => send('[ENCYCLO: ' + encSub.label + '] ' + q), 50);
                        }}
                        disabled={!encFollowUp.trim()}
                        className="w-8 h-8 bg-[var(--accent)] disabled:opacity-30 rounded-xl text-white flex items-center justify-center transition-opacity">
                        <Send size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : sidebarTab === 'encyclo' ? (
            /* ── ENCYCLOPEDIA HOME ── */
            <div className="p-5 space-y-6 max-w-2xl mx-auto">
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🌍</div>
                <h2 className="text-2xl font-black">Medical Encyclopedia</h2>
                <p className="text-sm opacity-45 mt-2 max-w-sm mx-auto">Browse hundreds of topics across Pharmacy, Medicine, Nursing, and more — with AI-generated rich references</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {ENCYCLOPEDIA_CATEGORIES.map(cat => (
                  <button key={cat.id} onClick={() => setEncCat(cat)}
                    className="flex flex-col items-center gap-2.5 p-4 rounded-2xl border border-[color:var(--border2,var(--border))] hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/4 transition-all group text-center">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ background: cat.color + '18' }}>
                      <cat.icon size={22} style={{ color: cat.color }} />
                    </div>
                    <p className="text-[11px] font-black leading-snug">{cat.label}</p>
                    <p className="text-[9px] opacity-40">{cat.subcategories.length} topics</p>
                  </button>
                ))}
              </div>
            </div>
          ) : !hasStarted ? (
            <div className="flex flex-col items-center justify-center min-h-full p-6 gap-7 max-w-2xl mx-auto">
              <div className="text-center space-y-3">
                <div className="relative inline-block">
                  <img src={MARIAM_IMG} className="w-20 h-20 rounded-2xl object-cover shadow-2xl border-2 border-[color:var(--border2,var(--border))]" alt="MARIAM" />
                  <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 bg-emerald-500 rounded-full border-2 border-[var(--bg)] flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
                <h1 className="text-2xl font-black">What can I help you study?</h1>
                <p className="text-sm opacity-40 max-w-xs">Your AI study companion for pharmacy &amp; medicine</p>
              </div>

              {topics.length > 0 && (
                <div className="w-full">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-35 mb-2 flex items-center gap-1.5"><BookA size={10} />Your Topics</p>
                  <div className="flex flex-wrap gap-2">
                    {topics.map(t => (
                      <button key={t.id} onClick={() => openTopic(t)}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-bold border border-[var(--accent)]/20 bg-[var(--accent)]/5 hover:bg-[var(--accent)]/12 hover:border-[var(--accent)]/40 transition-all text-[var(--accent)]">
                        <BookA size={11} />{t.name}
                      </button>
                    ))}
                    <button onClick={() => { setSidebarOpen(true); setSidebarTab('topics'); setTimeout(() => setShowNewTopic(true), 200); }}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-bold border border-dashed border-[var(--accent)]/25 text-[var(--accent)]/50 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all">
                      <Plus size={11} />Add
                    </button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {STARTERS.map(s => (
                  <button key={s.text} onClick={() => send(s.text)}
                    className="glass rounded-2xl p-4 text-left hover:border-[var(--accent)]/35 hover:bg-[var(--accent)]/5 transition-all border border-[color:var(--border2,var(--border))] group">
                    <div className="text-xl mb-2">{s.icon}</div>
                    <p className="text-sm font-semibold group-hover:text-[var(--accent)] transition-colors leading-snug">{s.text}</p>
                  </button>
                ))}
              </div>

              {!topics.length && (
                <button onClick={() => { setSidebarOpen(true); setSidebarTab('topics'); setTimeout(() => setShowNewTopic(true), 200); }}
                  className="flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-black border-2 border-dashed border-[var(--accent)]/25 text-[var(--accent)]/50 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all">
                  <BookA size={17} />Add a Study Topic for deep AI lessons
                </button>
              )}
            </div>
          ) : (
            <div className="max-w-3xl mx-auto py-6 px-4 space-y-5">
              {msgs.map((m, i) => (
                <div key={i} className={'flex gap-3 ' + (m.role === 'user' ? 'flex-row-reverse' : '') + ' group'}>
                  <div className={'w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ' + (m.role === 'user' ? 'bg-[var(--accent)]' : 'overflow-hidden border border-[color:var(--border2,var(--border))]')}>
                    {m.role === 'user' ? <UserCircle2 size={17} className="text-white" /> : <img src={MARIAM_IMG} className="w-full h-full object-cover" />}
                  </div>
                  <div className={'flex-1 max-w-[88%] flex flex-col gap-1 ' + (m.role === 'user' ? 'items-end' : '')}>
                    <div className={'px-4 py-3 rounded-2xl text-sm leading-relaxed ' + (m.role === 'user' ? 'bg-[var(--accent)] text-white rounded-tr-sm max-w-[82%]' : 'glass rounded-tl-sm border border-[color:var(--border2,var(--border))]')}>
                      {m.role === 'assistant' ? (
                        <div>{m.content ? renderMarkdown(m.content) : <span className="opacity-30 text-lg animate-pulse">▊</span>}</div>
                      ) : <p className="whitespace-pre-wrap">{m.content}</p>}
                    </div>
                    <button onClick={() => navigator.clipboard && navigator.clipboard.writeText(m.content)}
                      className="opacity-0 group-hover:opacity-40 hover:!opacity-80 text-[10px] font-bold flex items-center gap-1 transition-opacity px-1">
                      <Copy size={10} />Copy
                    </button>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-xl overflow-hidden border border-[color:var(--border2,var(--border))] shrink-0 mt-0.5"><img src={MARIAM_IMG} className="w-full h-full object-cover" /></div>
                  <div className="glass rounded-2xl rounded-tl-sm px-4 py-3.5 flex items-center gap-1.5 border border-[color:var(--border2,var(--border))]">
                    {[0,1,2].map(i => <div key={i} className="w-2 h-2 bg-[var(--accent)] rounded-full animate-bounce" style={{ animationDelay: i * 0.15 + 's' }} />)}
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>
          )}
        </div>

        {/* Input — hidden when encyclopedia content is shown */}
        <div className={`shrink-0 px-4 pb-4 pt-3 border-t border-[color:var(--border2,var(--border))] ${sidebarTab === 'encyclo' ? 'hidden' : ''}`} style={{ backdropFilter: 'blur(20px)', background: 'var(--surface,var(--card))' }}>
          <div className="max-w-3xl mx-auto">
            {selProject && (() => { const p = projects.find(x => x.id === selProject); return p ? (
              <div className="flex items-center gap-2 mb-2 px-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
                <span className="text-xs font-bold opacity-50">{p.name}</span>
                <button onClick={() => setSelProject(null)} className="opacity-40 hover:opacity-80"><X size={11} /></button>
              </div>
            ) : null; })()}
            <div className="glass rounded-2xl border border-[color:var(--border2,var(--border))] focus-within:border-[var(--accent)]/50 transition-colors shadow-lg">
              <textarea ref={inputRef} value={input}
                onChange={e => { setInput(e.target.value); setInputRows(Math.min(8, e.target.value.split("\n").length + 1)); }}
                onKeyDown={e => { if ((e.key === 'Enter' || e.keyCode === 13) && !e.shiftKey) { e.preventDefault(); e.stopPropagation(); send(); } }}
                placeholder="Message MARIAM… (Shift+Enter for new line)"
                enterKeyHint="send" disabled={loading} rows={inputRows}
                className="w-full bg-transparent px-4 pt-3.5 pb-2 text-sm outline-none resize-none custom-scrollbar text-[var(--text)]" style={{ minHeight: 52 }} />
              <div className="flex items-center justify-between px-3 pb-3">
                <div className="flex items-center gap-1">
                  <button onClick={toggleVoice}
                    className={'w-8 h-8 rounded-xl flex items-center justify-center transition-all ' + (listening ? 'bg-red-500 text-white animate-pulse' : 'opacity-50 hover:opacity-100 hover:bg-black/8 dark:hover:bg-white/8')} title={listening ? 'Stop' : 'Voice input'}>
                    {listening ? <MicOff size={15} /> : <Mic size={15} />}
                  </button>
                  {topics.length > 0 && (
                    <div className="relative group/tpop">
                      <button className="w-8 h-8 rounded-xl flex items-center justify-center opacity-50 hover:opacity-100 hover:bg-black/8 dark:hover:bg-white/8 transition-all" title="Load topic lesson">
                        <BookA size={15} />
                      </button>
                      <div className="absolute bottom-10 left-0 hidden group-hover/tpop:flex flex-col glass rounded-xl border border-[color:var(--border2,var(--border))] shadow-xl min-w-[180px] py-1 z-50 max-h-48 overflow-y-auto">
                        {topics.map(t => (
                          <button key={t.id} onClick={() => openTopic(t)} className="flex items-center gap-2.5 px-3 py-2 text-sm hover:bg-[var(--accent)]/10 transition-colors text-left whitespace-nowrap">
                            <BookA size={12} className="text-[var(--accent)] shrink-0" />{t.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  {projects.length > 0 && (
                    <div className="relative group/ppop">
                      <button className="w-8 h-8 rounded-xl flex items-center justify-center opacity-50 hover:opacity-100 hover:bg-black/8 dark:hover:bg-white/8 transition-all" title="Select project">
                        <FolderOpen size={15} />
                      </button>
                      <div className="absolute bottom-10 left-0 hidden group-hover/ppop:flex flex-col glass rounded-xl border border-[color:var(--border2,var(--border))] shadow-xl min-w-[160px] py-1 z-50">
                        {projects.map(p => (
                          <button key={p.id} onClick={() => setSelProject(p.id)} className="flex items-center gap-2.5 px-3 py-2 text-sm hover:bg-[var(--accent)]/10 transition-colors whitespace-nowrap">
                            <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: p.color }} />{p.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <button onClick={() => send()} disabled={loading || !input.trim()}
                  className="w-9 h-9 bg-[var(--accent)] disabled:opacity-30 rounded-xl text-white flex items-center justify-center shadow-md transition-all hover:opacity-90 active:scale-95">
                  {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={15} />}
                </button>
              </div>
            </div>
            <p className="text-[10px] text-center opacity-20 font-medium mt-2">MARIAM may make errors. Always verify medical information.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════════
   SETTINGS VIEW
═══════════════════════════════════════════════════════════════════ */
function SettingsView({ settings, setSettings, installPrompt, onInstall }) {
  const pr = PROVIDERS[settings.provider] || PROVIDERS.anthropic;
  const themes = [
    { id: 'pure-white', label: 'White', icon: Sun, desc: 'Clean & bright' },
    { id: 'light', label: 'Soft Blue', icon: CloudSun, desc: 'Gentle blue tint' },
    { id: 'warm', label: 'Warm', icon: Flame, desc: 'Cozy amber tone' },
    { id: 'rose', label: 'Rose', icon: Heart, desc: 'Soft pink glow' },
    { id: 'forest', label: 'Forest', icon: Leaf, desc: 'Natural greens' },
    { id: 'dark', label: 'Dark', icon: Moon, desc: 'Easy on eyes' },
    { id: 'midnight', label: 'Midnight', icon: MoonStar, desc: 'Deep blue-black' },
    { id: 'slate', label: 'Slate', icon: Layers, desc: 'Modern grey' },
    { id: 'oled', label: 'OLED', icon: Zap, desc: 'Pure black' },
  ];
  const accents = [
    { id: 'indigo', hex: '#5046e5', label: 'Indigo' },
    { id: 'purple', hex: '#9333ea', label: 'Purple' },
    { id: 'blue', hex: '#2563eb', label: 'Blue' },
    { id: 'emerald', hex: '#059669', label: 'Emerald' },
    { id: 'rose', hex: '#e11d48', label: 'Rose' },
    { id: 'amber', hex: '#d97706', label: 'Amber' },
    { id: 'cyan', hex: '#0891b2', label: 'Cyan' },
    { id: 'teal', hex: '#0d9488', label: 'Teal' },
  ];
  const sizes = [{ id: 'small', label: 'S', px: 14 }, { id: 'medium', label: 'M', px: 16 }, { id: 'large', label: 'L', px: 20 }, { id: 'xl', label: 'XL', px: 23 }, { id: 'xxl', label: 'XXL', px: 26 }];
  const changeProvider = p => { const pr = PROVIDERS[p]; setSettings(s => ({ ...s, provider: p, baseUrl: pr.baseUrl, model: pr.defaultModel })); };

  return (
    <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar scroll-content" style={{ touchAction: "pan-y", WebkitOverflowScrolling: "touch" }}>
      <div className="w-full p-6 lg:p-8 space-y-6">
        <h1 className="text-3xl font-black flex items-center gap-3 mb-6"><Settings size={28} className="opacity-40" /> Settings</h1>

        {/* Install PWA */}
        {installPrompt && (
          <section className="glass rounded-2xl p-5 border border-[var(--accent)]/30 bg-[var(--accent)]/5">
            <h2 className="font-black text-sm mb-2 flex items-center gap-2 text-[var(--accent)]"><Smartphone size={16} /> Install as App</h2>
            <p className="text-xs opacity-60 mb-4">Install MARIAM PRO on your device for offline access, faster loading, and a native app experience.</p>
            <div className="flex gap-3">
              <button onClick={onInstall} className="btn-accent px-4 py-2.5 rounded-xl text-xs font-black flex items-center gap-2 shadow-lg"><Download size={18} /> Install Now</button>
            </div>
          </section>
        )}

        {/* AI Provider */}
        <section className="glass rounded-2xl p-5">
          <h2 className="font-black text-sm mb-4 flex items-center gap-2 opacity-70"><Globe size={16} /> AI Provider</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            {Object.entries(PROVIDERS).map(([id, { label }]) => (
              <button key={id} onClick={() => changeProvider(id)}
                className={`py-2.5 px-2 rounded-xl text-xs font-black leading-tight transition-all border
                  ${settings.provider === id ? 'bg-[var(--accent)] text-white border-transparent shadow-md scale-105' : 'glass opacity-60 hover:opacity-100 border-[color:var(--border2,var(--border))]'}`}>
                {label.split(' ')[0]}<br /><span className="opacity-70 font-normal normal-case text-xs">{label.split(' ').slice(1).join(' ')}</span>
              </button>
            ))}
          </div>
          <div className={`flex items-start gap-2 p-3 rounded-xl mb-4 text-xs font-medium ${pr.needsKey ? 'bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300' : 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300'}`}>
            {pr.needsKey ? <AlertCircle size={18} className="shrink-0 mt-0.5" /> : <CheckCircle2 size={14} className="shrink-0 mt-0.5" />}
            {pr.note}
          </div>
          {pr.needsKey && (
            <div className="mb-3">
              <label className="text-xs font-black uppercase tracking-widest opacity-40 block mb-1.5 flex items-center gap-1"><KeyRound size={10} />API Key</label>
              <input type="password" placeholder="Paste your API key…" value={settings.apiKey || ''}
                onChange={e => setSettings(s => ({ ...s, apiKey: e.target.value }))}
                className="w-full glass rounded-xl px-4 py-3 font-mono text-xs outline-none focus:border-[var(--accent)] border border-[color:var(--border2,var(--border))] text-[var(--text)]" />
            </div>
          )}
          {(settings.provider === 'custom' || settings.provider === 'ollama') && (
            <div className="mb-3">
              <label className="text-xs font-black uppercase tracking-widest opacity-40 block mb-1.5">Base URL</label>
              <input type="text" placeholder="https://your-api.com" value={settings.baseUrl || ''}
                onChange={e => setSettings(s => ({ ...s, baseUrl: e.target.value }))}
                className="w-full glass rounded-xl px-4 py-3 font-mono text-xs outline-none focus:border-[var(--accent)] border border-[color:var(--border2,var(--border))] text-[var(--text)]" />
            </div>
          )}
          <div>
            <label className="text-xs font-black uppercase tracking-widest opacity-40 block mb-1.5">Model (optional)</label>
            <input type="text" placeholder={pr.defaultModel || 'e.g. gpt-4o'} value={settings.model || ''}
              onChange={e => setSettings(s => ({ ...s, model: e.target.value }))}
              className="w-full glass rounded-xl px-4 py-3 font-mono text-xs outline-none focus:border-[var(--accent)] border border-[color:var(--border2,var(--border))] text-[var(--text)]" />
          </div>
        </section>

        {/* Theme */}
        <section className="glass rounded-2xl p-5">
          <h2 className="font-black text-sm mb-4 flex items-center gap-2 opacity-70"><Palette size={16} /> Appearance</h2>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {themes.map(t => (
              <button key={t.id} onClick={() => setSettings({ ...settings, theme: t.id })}
                className={`py-3 px-2 flex flex-col items-center gap-1.5 rounded-xl text-xs font-black border transition-all`}
                style={settings.theme === t.id ? { background: 'linear-gradient(135deg,rgba(var(--acc-rgb,99,102,241),.18),rgba(var(--acc-rgb,99,102,241),.08))', borderColor: 'rgba(var(--acc-rgb,99,102,241),.4)', color: 'var(--accent)', boxShadow: '0 4px 16px rgba(var(--acc-rgb,99,102,241),.18)' } : { background: 'var(--surface2,var(--card))', borderColor: 'var(--border)', opacity: .7 }}>
                <t.icon size={18} /><span>{t.label}</span>
                {t.desc && <span style={{ fontSize: 9, fontWeight: 500, opacity: .6 }}>{t.desc}</span>}
              </button>
            ))}
          </div>
          <div className="mb-5">
            <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: 'var(--text3)', opacity: .7 }}>Accent Color</p>
            <div className="flex flex-wrap gap-2">
              {accents.map(a => (
                <button key={a.id} onClick={() => setSettings({ ...settings, accentColor: a.id })}
                  title={a.label}
                  className="flex flex-col items-center gap-1 transition-all"
                  style={{}}>
                  <div className="w-8 h-8 rounded-xl transition-all flex items-center justify-center"
                    style={{ background: a.hex, boxShadow: settings.accentColor === a.id ? `0 0 0 3px rgba(255,255,255,.5), 0 0 0 5px ${a.hex}` : undefined, transform: settings.accentColor === a.id ? 'scale(1.2)' : 'scale(1)' }}>
                    {settings.accentColor === a.id && <CheckCircle2 size={14} className="text-white" />}
                  </div>
                  <span style={{ fontSize: 9, fontWeight: 700, color: 'var(--text3)', opacity: .7 }}>{a.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: 'var(--text3)', opacity: .7 }}>Font Size</span>
            <div className="flex gap-1.5 glass rounded-xl p-1.5">
              {sizes.map(sz => (
                <button key={sz.id} onClick={() => setSettings({ ...settings, fontSize: sz.id })}
                  className={`flex-1 py-2 rounded-lg font-black transition-all text-sm`}
                  style={settings.fontSize === sz.id ? { background: 'var(--accent)', color: '#fff' } : { opacity: .6 }}
                >{sz.label}<span style={{ fontSize: 9, display: 'block', opacity: .7 }}>{sz.px}px</span></button>
              ))}
            </div>
          </div>
        </section>

        {/* Display Settings */}
        <section className="glass rounded-2xl p-5">
          <h2 className="font-black text-sm mb-4 flex items-center gap-2 opacity-70"><Layout size={16} /> Display &amp; Layout</h2>

          {/* Line Spacing */}
          <div className="mb-5">
            <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: 'var(--text3)', opacity: .7 }}>Line Spacing</span>
            <div className="flex gap-1.5 glass rounded-xl p-1.5">
              {[['compact', 'Compact', 1.4], ['normal', 'Normal', 1.7], ['relaxed', 'Relaxed', 2.0], ['loose', 'Loose', 2.4]].map(([id, label, lh]) => (
                <button key={id} onClick={() => setSettings(s => ({ ...s, lineSpacing: id }))}
                  className="flex-1 py-2 rounded-lg font-black transition-all text-xs"
                  style={(settings.lineSpacing || 'normal') === id ? { background: 'var(--accent)', color: '#fff' } : { opacity: .6 }}
                >{label}<span style={{ fontSize: 8, display: 'block', opacity: .7 }}>×{lh}</span></button>
              ))}
            </div>
          </div>

          {/* Card Style */}
          <div className="mb-5">
            <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: 'var(--text3)', opacity: .7 }}>Card / Panel Density</span>
            <div className="flex gap-1.5 glass rounded-xl p-1.5">
              {[['compact', 'Compact'], ['comfortable', 'Comfortable'], ['spacious', 'Spacious']].map(([id, label]) => (
                <button key={id} onClick={() => setSettings(s => ({ ...s, cardStyle: id }))}
                  className="flex-1 py-2.5 rounded-lg font-black transition-all text-xs"
                  style={(settings.cardStyle || 'comfortable') === id ? { background: 'var(--accent)', color: '#fff' } : { opacity: .6 }}
                >{label}</button>
              ))}
            </div>
          </div>

          {/* Animations */}
          <label className="flex items-center justify-between cursor-pointer mb-5">
            <div>
              <p className="text-xs font-black">Animations &amp; Transitions</p>
              <p className="text-xs opacity-40 mt-0.5">Smooth motion effects throughout the app</p>
            </div>
            <div onClick={() => setSettings(s => ({ ...s, animations: !s.animations }))}
              className={`w-12 h-6 rounded-full transition-all cursor-pointer relative flex items-center px-1`}
              style={{ background: settings.animations !== false ? 'var(--accent)' : 'var(--border)' }}>
              <div className="w-4 h-4 bg-white rounded-full shadow transition-all"
                style={{ transform: settings.animations !== false ? 'translateX(24px)' : 'translateX(0)' }} />
            </div>
          </label>

          {/* Compact Sidebar */}
          <label className="flex items-center justify-between cursor-pointer">
            <div>
              <p className="text-xs font-black">Compact Sidebar</p>
              <p className="text-xs opacity-40 mt-0.5">Show icons only, hide labels</p>
            </div>
            <div onClick={() => setSettings(s => ({ ...s, compactSidebar: !s.compactSidebar }))}
              className="w-12 h-6 rounded-full transition-all cursor-pointer relative flex items-center px-1"
              style={{ background: settings.compactSidebar ? 'var(--accent)' : 'var(--border)' }}>
              <div className="w-4 h-4 bg-white rounded-full shadow transition-all"
                style={{ transform: settings.compactSidebar ? 'translateX(24px)' : 'translateX(0)' }} />
            </div>
          </label>
        </section>

        {/* Generation */}
        <section className="glass rounded-2xl p-5">
          <h2 className="font-black text-sm mb-4 flex items-center gap-2 opacity-70"><Brain size={16} /> Generation</h2>
          <label className="flex items-center justify-between cursor-pointer">
            <div>
              <span className="text-xs font-bold">Strict Mode</span>
              <p className="text-xs opacity-50 mt-0.5">Use ONLY document text, no outside knowledge</p>
            </div>
            <div onClick={() => setSettings(s => ({ ...s, strictMode: !s.strictMode }))}
              className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${settings.strictMode ? 'bg-[var(--accent)]' : 'bg-gray-300 dark:bg-zinc-600'}`}>
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${settings.strictMode ? 'translate-x-5' : 'translate-x-1'}`} />
            </div>
          </label>
        </section>

        {/* About */}
        <section className="glass rounded-2xl p-5 text-center">
          <img src={MARIAM_IMG} className="w-16 h-16 rounded-2xl object-cover mx-auto mb-3 shadow-lg" alt="MARIAM" />
          <h3 className="font-black text-sm">MARIAM PRO {APP_VER}</h3>
          <p className="text-xs opacity-40 mt-1">Universal AI Document Intelligence</p>
          <div className="flex justify-center gap-3 mt-3 text-xs font-black uppercase tracking-widest opacity-30">
            <span>PDF · Word · PowerPoint · Excel · Images · Code</span>
          </div>
        </section>
      </div>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════════
   MEDICAL ENCYCLOPEDIA — Comprehensive global reference hub with AI tutor
   All content is AI-generated on demand when a student opens a topic.
   Covers pharmacy, diseases, nursing, medical school, all world exams,
   dentistry, veterinary, public health, alternative medicine, and more.
═══════════════════════════════════════════════════════════════════ */

// ── Top-level encyclopedia categories ──
const ENCYCLOPEDIA_CATEGORIES = [
  // ──────────────── PHARMACY ────────────────
  {
    id: 'pharmacy', label: 'Pharmacy', icon: Pill, color: '#6366f1',
    subcategories: [
      { id: 'drug-classes', label: 'Drug Classes A–Z', desc: 'All major pharmacological drug classes with MOA' },
      { id: 'top200-drugs', label: 'Top 200 Drugs', desc: 'NAPLEX/board-exam top 200 drugs reference' },
      { id: 'otc-drugs', label: 'OTC Medications', desc: 'Over-the-counter medications full guide' },
      { id: 'rx-drugs', label: 'Rx Medications', desc: 'Prescription drug reference with dosing' },
      { id: 'controlled', label: 'Controlled Substances', desc: 'DEA schedules I–V with regulations' },
      { id: 'antibiotics', label: 'Antibiotics', desc: 'All antibiotic classes, spectrum, resistance' },
      { id: 'antihypertensives', label: 'Antihypertensives', desc: 'All BP drug classes, JNC guidelines' },
      { id: 'antidiabetics', label: 'Antidiabetics', desc: 'Insulin, oral agents, injectables — full table' },
      { id: 'cardiovascular-drugs', label: 'Cardiovascular Drugs', desc: 'Anticoagulants, antiarrhythmics, statins' },
      { id: 'cns-drugs', label: 'CNS Drugs', desc: 'Antidepressants, antipsychotics, anxiolytics' },
      { id: 'respiratory-drugs', label: 'Respiratory Drugs', desc: 'Inhalers, bronchodilators, corticosteroids' },
      { id: 'gi-drugs', label: 'GI Drugs', desc: 'PPIs, antiemetics, laxatives, IBD agents' },
      { id: 'oncology-drugs', label: 'Oncology Drugs', desc: 'Chemotherapy, targeted therapy, immunotherapy' },
      { id: 'immunosuppressants', label: 'Immunosuppressants', desc: 'Transplant, autoimmune, biologics' },
      { id: 'drug-interactions', label: 'Drug Interactions', desc: 'Major and critical drug-drug interactions' },
      { id: 'drug-food', label: 'Drug–Food Interactions', desc: 'Food, alcohol, grapefruit interactions' },
      { id: 'counseling-tips', label: 'Patient Counseling', desc: 'Counseling points for top prescribed drugs' },
      { id: 'compounding', label: 'Compounding', desc: 'Sterile & non-sterile compounding, USP 797/800' },
      { id: 'pharmacokinetics', label: 'Pharmacokinetics', desc: 'ADME, half-life, bioavailability, Vd' },
      { id: 'pharmacodynamics', label: 'Pharmacodynamics', desc: 'MOA, receptor theory, ED50, TI' },
      { id: 'toxicology', label: 'Toxicology & Antidotes', desc: 'Antidotes, overdose management, poison control' },
      { id: 'herbal-supplements', label: 'Herbal & Supplements', desc: 'Evidence-based herbs, drug-herb interactions' },
      { id: 'drug-calculations', label: 'Drug Calculations', desc: 'IV rates, dosing, renal adjustments, conversions' },
      { id: 'pregnancy-drugs', label: 'Drugs in Pregnancy', desc: 'Safety categories, teratogens, lactation' },
      { id: 'pediatric-drugs', label: 'Pediatric Dosing', desc: 'Weight-based dosing, age restrictions, safety' },
      { id: 'geriatric-drugs', label: 'Geriatric Pharmacology', desc: 'Beers Criteria, polypharmacy, dose adjustments' },
      { id: 'narrow-ti', label: 'Narrow Therapeutic Index', desc: 'Monitoring, toxicity signs, safe ranges' },
      { id: 'biosimilars', label: 'Biosimilars & Biologics', desc: 'FDA approval, interchangeability, coding' },
      { id: 'vaccines', label: 'Vaccines & Immunizations', desc: 'CDC schedule, types, storage, contraindications' },
      { id: 'ophthalmic-drugs', label: 'Ophthalmic Drugs', desc: 'Eye drops, glaucoma agents, mydriatics' },
      { id: 'derma-drugs', label: 'Dermatological Drugs', desc: 'Topical steroids, retinoids, antifungals' },
      { id: 'endocrine-drugs', label: 'Endocrine Drugs', desc: 'Thyroid, steroid, hormone replacement' },
      { id: 'renal-drugs', label: 'Renal Pharmacology', desc: 'Dose adjustments in CKD, dialysis drugs' },
      { id: 'mpje-law', label: 'Pharmacy Law (MPJE)', desc: 'Federal & state pharmacy law, DEA, HIPAA, OBRA' },
    ]
  },

  // ──────────────── DISEASES & CONDITIONS ────────────────
  {
    id: 'diseases', label: 'Diseases & Conditions', icon: Thermometer, color: '#ef4444',
    subcategories: [
      { id: 'cardiovascular', label: 'Cardiovascular', desc: 'HF, MI, HTN, arrhythmias, valve disease' },
      { id: 'respiratory', label: 'Respiratory', desc: 'COPD, asthma, pneumonia, TB, lung cancer' },
      { id: 'endocrine', label: 'Endocrine', desc: 'Diabetes, thyroid, adrenal, pituitary disorders' },
      { id: 'gastrointestinal', label: 'Gastrointestinal', desc: 'GERD, IBD, liver cirrhosis, pancreatitis, IBS' },
      { id: 'neurological', label: 'Neurological', desc: 'Stroke, epilepsy, Parkinson, Alzheimer, MS' },
      { id: 'infectious-dis', label: 'Infectious Diseases', desc: 'Bacterial, viral, fungal, parasitic, HIV/AIDS' },
      { id: 'musculoskeletal', label: 'Musculoskeletal', desc: 'Arthritis, osteoporosis, fractures, gout' },
      { id: 'renal', label: 'Renal / Urological', desc: 'CKD, AKI, nephrotic syndrome, UTI, stones' },
      { id: 'hematology-dis', label: 'Hematology', desc: 'Anemia, DVT, leukemia, hemophilia, sickle cell' },
      { id: 'oncology-dis', label: 'Oncology', desc: 'All cancer types: staging, screening, treatment' },
      { id: 'dermatology-dis', label: 'Dermatology', desc: 'Eczema, psoriasis, acne, skin cancer, rashes' },
      { id: 'psychiatry-dis', label: 'Psychiatry', desc: 'Depression, anxiety, schizophrenia, bipolar, PTSD' },
      { id: 'rheumatology-dis', label: 'Rheumatology', desc: 'Lupus, RA, vasculitis, spondylitis, Sjögren' },
      { id: 'ophthalmology-dis', label: 'Ophthalmology', desc: 'Glaucoma, diabetic retinopathy, cataracts, AMD' },
      { id: 'ent-dis', label: 'ENT Disorders', desc: 'Sinusitis, otitis media, vertigo, tonsillitis' },
      { id: 'obstetrics-dis', label: 'Obstetrics', desc: 'Preeclampsia, gestational diabetes, ectopic, PPROM' },
      { id: 'gynecology-dis', label: 'Gynecology', desc: 'PCOS, endometriosis, fibroids, cervical cancer' },
      { id: 'pediatric-dis', label: 'Pediatric Diseases', desc: 'Asthma, RSV, ADHD, congenital, febrile illness' },
      { id: 'geriatric-dis', label: 'Geriatric Conditions', desc: 'Falls, dementia, delirium, polypharmacy, frailty' },
      { id: 'immunology-dis', label: 'Immunological', desc: 'Primary immunodeficiencies, allergy, anaphylaxis' },
      { id: 'tropical-dis', label: 'Tropical Diseases', desc: 'Malaria, dengue, cholera, typhoid, Schistosomiasis' },
      { id: 'genetic-dis', label: 'Genetic Disorders', desc: 'Down syndrome, CF, PKU, Marfan, Wilson disease' },
      { id: 'sleep-dis', label: 'Sleep Disorders', desc: 'Insomnia, sleep apnea, narcolepsy, RLS' },
      { id: 'addiction', label: 'Addiction Medicine', desc: 'Alcohol, opioids, nicotine, substance use disorders' },
      { id: 'emergency-dis', label: 'Emergency Medicine', desc: 'Sepsis, shock, anaphylaxis, trauma, burns' },
      { id: 'rare-diseases', label: 'Rare Diseases', desc: 'Orphan diseases, genetic syndromes, lysosomal' },
      { id: 'sports-medicine', label: 'Sports Medicine', desc: 'Sprains, stress fractures, concussion, exercise' },
      { id: 'occupational', label: 'Occupational Diseases', desc: 'Asbestosis, silicosis, mesothelioma, noise-induced' },
      { id: 'environmental', label: 'Environmental Medicine', desc: 'Carbon monoxide, heat stroke, hypothermia, altitude' },
    ]
  },

  // ──────────────── NURSING ────────────────
  {
    id: 'nursing', label: 'Nursing', icon: Heart, color: '#ec4899',
    subcategories: [
      { id: 'fundamentals', label: 'Nursing Fundamentals', desc: 'Nursing process, safety, documentation, ethics' },
      { id: 'med-surg', label: 'Med-Surg Nursing', desc: 'Systems-based adult medical-surgical care' },
      { id: 'critical-care', label: 'Critical Care / ICU', desc: 'Ventilators, hemodynamics, vasopressors, CRRT' },
      { id: 'pediatric-nursing', label: 'Pediatric Nursing', desc: 'Child development, pediatric assessments, care' },
      { id: 'ob-nursing', label: 'OB/Maternity Nursing', desc: 'Prenatal, labor, delivery, postpartum, newborn' },
      { id: 'psych-nursing', label: 'Psychiatric Nursing', desc: 'Mental health interventions, therapeutic communication' },
      { id: 'community-nursing', label: 'Community Nursing', desc: 'Public health, school nursing, home health' },
      { id: 'nursing-pharm', label: 'Nursing Pharmacology', desc: 'Six rights, high-alert meds, patient teaching' },
      { id: 'nursing-procedures', label: 'Nursing Procedures', desc: 'IV, Foley, NG tube, wound care, suctioning' },
      { id: 'nursing-labs', label: 'Lab Values', desc: 'Complete reference: CBC, CMP, coagulation, cultures' },
      { id: 'nursing-vitals', label: 'Vital Signs', desc: 'Normal ranges by age, abnormal findings, monitoring' },
      { id: 'nursing-assessment', label: 'Physical Assessment', desc: 'Head-to-toe assessment, systems review' },
      { id: 'oncology-nursing', label: 'Oncology Nursing', desc: 'Chemo administration, side effects, supportive care' },
      { id: 'neuro-nursing', label: 'Neuro Nursing', desc: 'GCS, neuro checks, stroke protocol, ICP' },
      { id: 'cardiac-nursing', label: 'Cardiac Nursing', desc: 'Telemetry, dysrhythmias, post-cath care, LVAD' },
      { id: 'renal-nursing', label: 'Renal Nursing', desc: 'Dialysis types, fistula care, fluid management' },
      { id: 'surgical-nursing', label: 'Perioperative Nursing', desc: 'Pre-op, intra-op, post-op (PACU) nursing care' },
      { id: 'emergency-nursing', label: 'Emergency Nursing', desc: 'Triage, trauma, code blue, rapid assessment' },
      { id: 'gerontology-nursing', label: 'Gerontology Nursing', desc: 'Aging changes, falls prevention, dementia care' },
      { id: 'nursing-leadership', label: 'Nursing Leadership', desc: 'Delegation, conflict resolution, quality improvement' },
      { id: 'infection-control', label: 'Infection Control', desc: 'PPE, isolation precautions, HAI prevention' },
      { id: 'palliative-nursing', label: 'Palliative Care', desc: 'End-of-life, pain management, hospice principles' },
      { id: 'float-pool', label: 'Float Pool Competencies', desc: 'Multi-unit skills, cross-training essentials' },
      { id: 'travel-nursing', label: 'Travel Nursing', desc: 'Licensure, compact states, agency, tips for success' },
    ]
  },

  // ──────────────── MEDICAL SCHOOL ────────────────
  {
    id: 'medical-school', label: 'Medical School', icon: GraduationCap, color: '#8b5cf6',
    subcategories: [
      { id: 'anatomy', label: 'Gross Anatomy', desc: 'Regional anatomy: head, neck, thorax, abdomen, limbs' },
      { id: 'neuroanatomy', label: 'Neuroanatomy', desc: 'Brain, spinal cord, cranial nerves, pathways' },
      { id: 'physiology', label: 'Physiology', desc: 'Cardiac, renal, respiratory, neurological physiology' },
      { id: 'biochemistry', label: 'Biochemistry', desc: 'Metabolism, enzymes, molecular biology, genetics' },
      { id: 'histology', label: 'Histology', desc: 'Tissue types, cell biology, microscopy findings' },
      { id: 'pathology', label: 'Pathology', desc: 'General & systemic pathology, disease mechanisms' },
      { id: 'microbiology', label: 'Microbiology', desc: 'Bacteria, viruses, fungi, parasites, virology' },
      { id: 'immunology', label: 'Immunology', desc: 'Immune system, hypersensitivity, autoimmunity, vaccines' },
      { id: 'embryology', label: 'Embryology', desc: 'Germ layers, organogenesis, congenital anomalies' },
      { id: 'genetics-school', label: 'Medical Genetics', desc: 'Mendelian, chromosomal, molecular genetics in medicine' },
      { id: 'pharmacology-school', label: 'Pharmacology', desc: 'Drug mechanisms, receptors, kPK/PD, autonomic drugs' },
      { id: 'clinical-skills', label: 'Clinical Skills', desc: 'H&P, physical examination, clinical reasoning, SOAP' },
      { id: 'evidence-medicine', label: 'Evidence-Based Medicine', desc: 'Study design, statistics, NNT, bias, meta-analysis' },
      { id: 'biostatistics', label: 'Biostatistics', desc: 'Sensitivity, specificity, PPV, NPV, p-value, CI' },
      { id: 'medical-ethics', label: 'Medical Ethics', desc: 'Autonomy, beneficence, justice, informed consent' },
      { id: 'internal-med', label: 'Internal Medicine', desc: 'Clinical medicine: diagnosis and management' },
      { id: 'surgery-basics', label: 'Surgery Basics', desc: 'Preoperative care, common surgeries, post-op complications' },
      { id: 'radiology', label: 'Radiology Basics', desc: 'CXR, CT, MRI, ultrasound interpretation basics' },
      { id: 'sbar-practice', label: 'SBAR Practice', desc: 'Generate patient cases, fill SBAR communication forms, and get AI evaluation of your clinical reasoning' },
      { id: 'nutrition-med', label: 'Clinical Nutrition', desc: 'Malnutrition, TPN, enteral feeds, vitamins' },
    ]
  },

  // ──────────────── OSCE ────────────────
  {
    id: 'osce', label: 'OSCE', icon: Stethoscope, color: '#06b6d4',
    subcategories: [
      { id: 'osce-history', label: 'History Taking', desc: 'SOCRATES, ICE, systems-based structured history' },
      { id: 'osce-exam', label: 'Physical Examination', desc: 'Cardiovascular, respiratory, abdominal, neuro exam' },
      { id: 'osce-communication', label: 'Communication Skills', desc: 'Breaking bad news, consent, angry patient, empathy' },
      { id: 'osce-procedures', label: 'Clinical Procedures', desc: 'ECG, venipuncture, suturing, catheter, CPR' },
      { id: 'osce-emergency', label: 'Emergency Scenarios', desc: 'ABCDE, acute chest pain, anaphylaxis, seizure' },
      { id: 'osce-data', label: 'Data Interpretation', desc: 'ECG, CXR, ABG, bloods, MRI, ultrasound' },
      { id: 'osce-prescribing', label: 'Prescribing', desc: 'Drug charts, dose calculations, safe prescribing' },
      { id: 'osce-marking', label: 'Marking Criteria', desc: 'Domain-based OSCE marking schemes by station type' },
      { id: 'osce-counseling', label: 'Patient Counseling', desc: 'Lifestyle, contraception, smoking cessation, diet' },
      { id: 'osce-surgical', label: 'Surgical OSCE', desc: 'Wound assessment, suturing, instrument identification' },
      { id: 'osce-obstetric', label: 'Obstetric OSCE', desc: 'Antenatal, postnatal, fetal monitoring, CTG' },
      { id: 'osce-psychiatric', label: 'Psychiatric OSCE', desc: 'Mental state exam, risk assessment, cognitive testing' },
      { id: 'osce-pediatric', label: 'Pediatric OSCE', desc: 'Child examination, developmental milestones, vaccination' },
      { id: 'osce-scenarios', label: 'Practice Scenarios', desc: '50+ fully worked OSCE station scenarios with marking' },
      { id: 'sbar-practice', label: 'SBAR Practice', desc: 'Generate patient cases, fill SBAR communication forms, and get AI evaluation of your clinical reasoning' },
    ]
  },

  // ──────────────── NAPLEX / US PHARMACY EXAMS ────────────────
  {
    id: 'naplex', label: 'NAPLEX', icon: Award, color: '#f59e0b',
    subcategories: [
      { id: 'naplex-therapeutics', label: 'Pharmacotherapy', desc: 'Disease state management: all NAPLEX domains' },
      { id: 'naplex-calculations', label: 'Pharmacy Calculations', desc: 'Dosing, IV, compounding, alligation, conversions' },
      { id: 'naplex-law', label: 'Federal Pharmacy Law', desc: 'OBRA, DSCSA, DEA, CSA, HIPAA, REMS, PPPA' },
      { id: 'naplex-sterile', label: 'Sterile Compounding', desc: 'USP 797/800, CSTD, BUD, aseptic technique' },
      { id: 'naplex-counseling', label: 'Patient Counseling', desc: 'MTM, adherence, AIMS, patient education scripts' },
      { id: 'naplex-clinical', label: 'Clinical Pharmacy', desc: 'Labs, monitoring, adverse effects, therapeutic monitoring' },
      { id: 'naplex-top200', label: 'Top 200 Drugs', desc: 'Brand/generic, indication, class, counseling — full table' },
      { id: 'naplex-cardio', label: 'Cardiovascular Rx', desc: 'HTN, HF, CAD, dyslipidemia pharmacotherapy' },
      { id: 'naplex-infectious', label: 'Infectious Disease Rx', desc: 'Antibitics, antivirals, antifungals for NAPLEX' },
      { id: 'naplex-endo', label: 'Endocrine Rx', desc: 'Diabetes, thyroid, steroids for NAPLEX' },
      { id: 'naplex-cns', label: 'CNS Pharmacotherapy', desc: 'Depression, anxiety, seizures, Parkinson for NAPLEX' },
      { id: 'naplex-strategy', label: 'Exam Strategy', desc: 'Blueprint, scoring, time management, practice Qs' },
      { id: 'mpje-prep', label: 'MPJE Prep', desc: 'Federal vs state law, controlled substances, dispensing' },
      { id: 'ptce-prep', label: 'PTCE / ExCPT Prep', desc: 'Pharmacy technician certification review' },
    ]
  },

  // ──────────────── NCLEX ────────────────
  {
    id: 'nclex', label: 'NCLEX', icon: CheckSquare, color: '#10b981',
    subcategories: [
      { id: 'nclex-fundamentals', label: 'Fundamentals', desc: 'Safety, infection control, hygiene, positioning' },
      { id: 'nclex-pharm', label: 'Pharmacology', desc: 'High-yield drugs, nursing considerations, safe administration' },
      { id: 'nclex-medsurg', label: 'Med-Surg', desc: 'Adult health: cardiovascular, respiratory, renal, neuro' },
      { id: 'nclex-mental', label: 'Mental Health', desc: 'Psychiatric diagnoses, therapeutic communication, restraints' },
      { id: 'nclex-maternal', label: 'Maternal-Newborn', desc: 'OB, postpartum, APGAR, neonatal assessment' },
      { id: 'nclex-pediatric', label: 'Pediatrics', desc: 'Child growth, nutrition, immunizations, common illnesses' },
      { id: 'nclex-priority', label: 'Priority & Delegation', desc: 'Maslow, ABC, SATA, SMART, delegation 5-rights' },
      { id: 'nclex-next', label: 'Next Gen NCLEX (NGN)', desc: 'Clinical judgment items: CJ, bowtie, trend, matrix' },
      { id: 'nclex-labs', label: 'Critical Lab Values', desc: 'Panic values, nursing actions, reportable states' },
      { id: 'nclex-infection', label: 'Infection Control', desc: 'Standard, contact, droplet, airborne precautions' },
      { id: 'nclex-management', label: 'Management of Care', desc: 'Delegation, supervision, legal, ethical, advocacy' },
      { id: 'nclex-psychosocial', label: 'Psychosocial Integrity', desc: 'Therapeutic communication, grief, crisis, abuse' },
    ]
  },

  // ──────────────── USMLE ────────────────
  {
    id: 'usmle', label: 'USMLE', icon: Brain, color: '#7c3aed',
    subcategories: [
      { id: 'step1-anatomy', label: 'Step 1 — Anatomy', desc: 'High-yield gross + neuroanatomy for Step 1' },
      { id: 'step1-physio', label: 'Step 1 — Physiology', desc: 'Cardiac, renal, respiration, endocrine physiology HY' },
      { id: 'step1-biochem', label: 'Step 1 — Biochemistry', desc: 'Enzymes, vitamins, metabolism pathways for Step 1' },
      { id: 'step1-micro', label: 'Step 1 — Microbiology', desc: 'Bugs, virulence factors, antibiotics for Step 1' },
      { id: 'step1-pharm', label: 'Step 1 — Pharmacology', desc: 'Mechanisms, adverse effects, First Aid drugs' },
      { id: 'step1-path', label: 'Step 1 — Pathology', desc: 'Cellular injury, inflammation, neoplasia diseases' },
      { id: 'step1-immuno', label: 'Step 1 — Immunology', desc: 'Immune system, hypersensitivity, immunodeficiency' },
      { id: 'step2-medicine', label: 'Step 2 — Internal Med', desc: 'Diagnosis and clinical management vignettes' },
      { id: 'step2-surgery', label: 'Step 2 — Surgery', desc: 'Acute abdomen, trauma, surgical urgencies' },
      { id: 'step2-ob', label: 'Step 2 — OB/Gyn', desc: 'Obstetric complications, gynecologic emergencies' },
      { id: 'step2-pediatrics', label: 'Step 2 — Pediatrics', desc: 'Developmental milestones, pediatric illness' },
      { id: 'step2-psych', label: 'Step 2 — Psychiatry', desc: 'DSM-5 criteria, first-line treatments' },
      { id: 'step3-ccs', label: 'Step 3 — CCS Cases', desc: 'Clinical decision-making simulation strategies' },
      { id: 'step3-ethics', label: 'Step 3 — Ethics/Law', desc: 'Informed consent, competency, advance directives' },
      { id: 'step3-ambul', label: 'Step 3 — Ambulatory', desc: 'Preventive care, chronic disease management' },
      { id: 'usmle-biostats', label: 'Biostatistics/Epi', desc: 'Study design, sensitivity, NNT, p-value, OR' },
    ]
  },

  // ──────────────── GLOBAL EXAMS ────────────────
  {
    id: 'global-exams', label: 'Global Medical Exams', icon: Globe, color: '#0891b2',
    subcategories: [
      { id: 'mcat', label: 'MCAT (USA)', desc: 'Bio, Chem, Physics, CARS — pre-med entry exam' },
      { id: 'comlex', label: 'COMLEX (USA DO)', desc: 'Osteopathic boards Level 1, 2-CE, 2-PE, 3' },
      { id: 'pance', label: 'PANCE / PANRE (PA)', desc: 'Physician Assistant National Certifying Exam' },
      { id: 'dha', label: 'DHA (Dubai)', desc: 'Dubai Health Authority medical licensing exam' },
      { id: 'moh-uae', label: 'MOH (UAE)', desc: 'UAE Ministry of Health licensing for all professions' },
      { id: 'haad', label: 'HAAD (Abu Dhabi)', desc: 'Health Authority Abu Dhabi licensing exam prep' },
      { id: 'doh', label: 'DOH (Abu Dhabi 2023)', desc: 'Department of Health Abu Dhabi — new DOH exam' },
      { id: 'scfhs', label: 'SCFHS (Saudi Arabia)', desc: 'Saudi Commission for Health Specialties exams' },
      { id: 'prometric-gulf', label: 'Prometric Gulf Exams', desc: 'Oman, Qatar, Kuwait, Bahrain Prometric prep' },
      { id: 'plab', label: 'PLAB (UK)', desc: 'Professional & Linguistic Assessment Board Parts 1 & 2' },
      { id: 'mrcgp', label: 'MRCGP (UK GP)', desc: 'GP licensure: AKT, CSA/RCA, WPBA portfolio' },
      { id: 'mrcp', label: 'MRCP (UK Internal Med)', desc: 'Member Royal College Physicians Part 1, 2, PACES' },
      { id: 'frcs', label: 'FRCS (UK Surgery)', desc: 'Fellowship Royal College of Surgeons exam review' },
      { id: 'amc', label: 'AMC (Australia)', desc: 'Australian Medical Council MCQ & clinical exam' },
      { id: 'racs', label: 'RACS / RACGP (AUS)', desc: 'Australian GP and specialist fellowship exams' },
      { id: 'mci-nmc', label: 'NMC / FMGE (India)', desc: 'Indian FMGE screening, NMC licensing exam review' },
      { id: 'neet-pg', label: 'NEET PG (India)', desc: 'National Eligibility cum Entrance Test Postgraduate' },
      { id: 'usmle-img', label: 'IMG USMLE Pathway', desc: 'International grad guide: ECFMG, USMLE, Match' },
      { id: 'smle', label: 'SMLE (Saudi)', desc: 'Saudi Medical Licensing Exam for Saudi graduates' },
      { id: 'jmle', label: 'JMLE (Jordan)', desc: 'Jordanian Medical Licensing Exam review' },
      { id: 'egypat', label: 'Egyptian Medical Board', desc: 'Egyptian syndicate and specialty board exams' },
      { id: 'lmcc', label: 'LMCC (Canada)', desc: 'Licentiate Medical Council of Canada MCCQE1/2' },
      { id: 'mccqe', label: 'NAC OSCE (Canada)', desc: 'National Assessment Collaboration clinical OSCE' },
      { id: 'nzrex', label: 'NZREX (New Zealand)', desc: 'New Zealand Registration Exam for overseas doctors' },
      { id: 'hpcsa', label: 'HPCSA (South Africa)', desc: 'Health Professions Council of South Africa exams' },
      { id: 'knle', label: 'KNLE (Kenya)', desc: 'Kenya Nursing and Midwifery licensing exam prep' },
      { id: 'pmdc', label: 'PMDC (Pakistan)', desc: 'Pakistan Medical & Dental Council licensing review' },
      { id: 'bmdc', label: 'BMDC (Bangladesh)', desc: 'Bangladesh Medical Dental Council registration exam' },
    ]
  },

  // ──────────────── CLINICAL SKILLS & DIAGNOSTICS ────────────────
  {
    id: 'clinical-skills', label: 'Clinical Skills & Diagnostics', icon: Clipboard, color: '#f43f5e',
    subcategories: [
      { id: 'ecg', label: 'ECG Interpretation', desc: '12-lead ECG: rate, rhythm, intervals, STEMI, blocks' },
      { id: 'cxr', label: 'Chest X-Ray Reading', desc: 'Systematic CXR approach, pathological findings' },
      { id: 'ct-basics', label: 'CT Interpretation Basics', desc: 'Head CT, abdominal CT, lung CT findings' },
      { id: 'ultrasound', label: 'Ultrasound Basics', desc: 'Point-of-care, FAST, obstetric, abdominal ultrasound' },
      { id: 'abg', label: 'ABG & Acid-Base', desc: 'Metabolic, respiratory disorders, compensation rules' },
      { id: 'labs', label: 'Lab Values Reference', desc: 'CBC, BMP, CMP, LFT, TFT, coagulation, cultures' },
      { id: 'vitals', label: 'Vital Signs', desc: 'Normal ranges by age, abnormal interpretation, monitoring' },
      { id: 'differential', label: 'Differential Diagnosis', desc: 'Symptom-based DDx: chest pain, headache, dyspnea' },
      { id: 'algorithms', label: 'Clinical Algorithms', desc: 'ACLS, PALS, sepsis, chest pain, AKI algorithms' },
      { id: 'procedures', label: 'Bedside Procedures', desc: 'LP, thoracentesis, paracentesis, central line setup' },
      { id: 'scoring-tools', label: 'Scoring & Tools', desc: 'Wells, CURB-65, GCS, APACHE, MELD, CHA2DS2' },
      { id: 'neurology-skills', label: 'Neurology Assessment', desc: 'Cranial nerves, reflexes, GCS, NIHSS, Babinski' },
      { id: 'cardiac-monitors', label: 'Cardiac Monitoring', desc: 'Telemetry, Swan-Ganz, hemodynamic parameters' },
      { id: 'pulm-function', label: 'Pulmonary Function Tests', desc: 'Spirometry, DLCO, FEV1/FVC, obstructive vs restrictive' },
      { id: 'biopsy-path', label: 'Biopsy & Pathology', desc: 'Specimen handling, histology interpretation basics' },
    ]
  },

  // ──────────────── DENTISTRY ────────────────
  {
    id: 'dentistry', label: 'Dentistry', icon: Star, color: '#14b8a6',
    subcategories: [
      { id: 'oral-anatomy', label: 'Oral Anatomy', desc: 'Teeth, gingiva, maxilla, mandible, salivary glands' },
      { id: 'dental-caries', label: 'Dental Caries', desc: 'Pathophysiology, classification, prevention, treatment' },
      { id: 'periodontology', label: 'Periodontology', desc: 'Gingivitis, periodontitis, bone loss, perio treatment' },
      { id: 'endodontics', label: 'Endodontics', desc: 'Root canal treatment, pulp diseases, retreatment' },
      { id: 'oral-surgery', label: 'Oral Surgery', desc: 'Extractions, implants, cysts, impacted teeth, flaps' },
      { id: 'prosthodontics', label: 'Prosthodontics', desc: 'Dentures, crowns, bridges, implant restoration' },
      { id: 'orthodontics', label: 'Orthodontics', desc: 'Malocclusion, braces, Invisalign, cephalometrics' },
      { id: 'oral-medicine', label: 'Oral Medicine', desc: 'Aphthous ulcers, candidiasis, TMJ, oral lesions' },
      { id: 'dental-radiology', label: 'Dental Radiology', desc: 'Periapical, panoramic, CBCT interpretation' },
      { id: 'pediatric-dentistry', label: 'Pediatric Dentistry', desc: 'Primary teeth, fluoride, sealants, pediatric sedation' },
      { id: 'dental-pharmacology', label: 'Dental Pharmacology', desc: 'Local anesthetics, analgesics, antibiotics in dentistry' },
      { id: 'dental-exams', label: 'Dental Board Exams', desc: 'INBDE/NBDE, OSCE, DDS/BDS exam strategies' },
    ]
  },

  // ──────────────── PUBLIC HEALTH & EPIDEMIOLOGY ────────────────
  {
    id: 'public-health', label: 'Public Health', icon: Network, color: '#0d9488',
    subcategories: [
      { id: 'epidemiology', label: 'Epidemiology', desc: 'Study designs, measures of disease, outbreak investigation' },
      { id: 'biostatistics', label: 'Biostatistics', desc: 'RR, OR, NNT, CI, p-value, screening tests' },
      { id: 'preventive-medicine', label: 'Preventive Medicine', desc: 'Primary, secondary, tertiary prevention, screening' },
      { id: 'global-health', label: 'Global Health', desc: 'WHO priorities, NTDs, SDGs, global burden of disease' },
      { id: 'environmental-health', label: 'Environmental Health', desc: 'Air, water, occupational hazards, toxicology' },
      { id: 'maternal-health', label: 'Maternal & Child Health', desc: 'Antenatal care, neonatal mortality, MCH indicators' },
      { id: 'communicable-disease', label: 'Communicable Diseases', desc: 'Outbreak control, vaccination programs, quarantine' },
      { id: 'ncds', label: 'Non-Communicable Diseases', desc: 'CVD, cancer, diabetes prevention at population level' },
      { id: 'health-systems', label: 'Health Systems', desc: 'UHC, financing, workforce, service delivery models' },
      { id: 'nutrition-public', label: 'Public Nutrition', desc: 'Malnutrition, micronutrient deficiencies, food safety' },
      { id: 'research-methods', label: 'Research Methods', desc: 'RCT, cohort, case-control, systematic review, ethics' },
      { id: 'infection-prevention', label: 'Infection Prevention', desc: 'Hospital-acquired infections, sterilization, HAI metrics' },
    ]
  },

  // ──────────────── SURGERY ────────────────
  {
    id: 'surgery', label: 'Surgery', icon: Activity, color: '#f97316',
    subcategories: [
      { id: 'general-surgery', label: 'General Surgery', desc: 'Appendectomy, cholecystectomy, hernia, bowel resection' },
      { id: 'trauma-surgery', label: 'Trauma Surgery', desc: 'ATLS, polytrauma, abdominal injury, damage control' },
      { id: 'vascular-surgery', label: 'Vascular Surgery', desc: 'AAA, PAD, carotid endarterectomy, bypass' },
      { id: 'cardiac-surgery', label: 'Cardiac Surgery', desc: 'CABG, valve surgery, LVAD, cardiopulmonary bypass' },
      { id: 'thoracic-surgery', label: 'Thoracic Surgery', desc: 'Lobectomy, pneumonectomy, esophagectomy, mediastinum' },
      { id: 'neurosurgery', label: 'Neurosurgery', desc: 'Craniotomy, spinal surgery, VP shunt, tumor resection' },
      { id: 'ortho-surgery', label: 'Orthopedic Surgery', desc: 'Fractures, arthroplasty, spine, sports surgery' },
      { id: 'plastic-surgery', label: 'Plastic Surgery', desc: 'Reconstructive, burns, flaps, cosmetic procedures' },
      { id: 'urology-surgery', label: 'Urology', desc: 'TURP, nephrectomy, cystectomy, prostatectomy' },
      { id: 'gyn-surgery', label: 'Gynecologic Surgery', desc: 'Hysterectomy, myomectomy, laparoscopy, ovarian surgery' },
      { id: 'hepatobiliary', label: 'Hepatobiliary', desc: 'Hepatectomy, Whipple, ERCP, liver transplant' },
      { id: 'pediatric-surgery', label: 'Pediatric Surgery', desc: 'Congenital anomalies, pyloric stenosis, intussusception' },
      { id: 'robotic-surgery', label: 'Minimally Invasive', desc: 'Laparoscopy, robotic surgery, endoscopy' },
      { id: 'anesthesia', label: 'Anesthesia', desc: 'General, regional, spinal, epidural, airway management' },
      { id: 'pre-post-op', label: 'Pre/Post-Op Care', desc: 'Surgical risk, bowel prep, DVT prophylaxis, wound care' },
    ]
  },

  // ──────────────── ALTERNATIVE & COMPLEMENTARY MEDICINE ────────────────
  {
    id: 'alt-medicine', label: 'Alternative Medicine', icon: Leaf, color: '#22c55e',
    subcategories: [
      { id: 'tcm', label: 'Traditional Chinese Medicine', desc: 'Acupuncture, herbal medicine, Qi, meridians, cupping' },
      { id: 'ayurveda', label: 'Ayurvedic Medicine', desc: 'Doshas, Panchakarma, herbs, rasayana, diet' },
      { id: 'homeopathy', label: 'Homeopathy', desc: 'Principles, potentization, constitutional remedies, evidence' },
      { id: 'naturopathy', label: 'Naturopathy', desc: 'Natural therapies, hydrotherapy, lifestyle medicine' },
      { id: 'osteopathy', label: 'Osteopathy (OMT)', desc: 'Osteopathic principles, muscle energy, HVLA, counterstrain' },
      { id: 'chiropractic', label: 'Chiropractic', desc: 'Spinal manipulation, subluxation theory, evidence base' },
      { id: 'aromatherapy', label: 'Aromatherapy', desc: 'Essential oils, inhalation, topical use, safety' },
      { id: 'mind-body', label: 'Mind-Body Medicine', desc: 'Meditation, yoga, biofeedback, hypnotherapy, mindfulness' },
      { id: 'unani', label: 'Unani Medicine', desc: 'Greco-Arabic humoral medicine, mizaj, tibb, oils' },
      { id: 'integrative-med', label: 'Integrative Medicine', desc: 'Evidence-based complementary approaches in clinical care' },
    ]
  },

  // ──────────────── VETERINARY MEDICINE ────────────────
  {
    id: 'veterinary', label: 'Veterinary Medicine', icon: Heart, color: '#84cc16',
    subcategories: [
      { id: 'vet-anatomy', label: 'Veterinary Anatomy', desc: 'Canine, feline, equine, bovine comparative anatomy' },
      { id: 'vet-diseases', label: 'Animal Diseases', desc: 'Zoonotic diseases, companion animal, livestock diseases' },
      { id: 'vet-pharmacology', label: 'Veterinary Pharmacology', desc: 'Antibiotics, antiparasitics, anesthesia in animals' },
      { id: 'vet-surgery', label: 'Veterinary Surgery', desc: 'Spay, neuter, orthopedic surgery, wound closure' },
      { id: 'zoonoses', label: 'Zoonotic Diseases', desc: 'Rabies, toxoplasmosis, brucellosis, Lyme, SARS-CoV-2' },
      { id: 'food-animal', label: 'Food Animal Medicine', desc: 'Cattle, poultry, swine, sheep medicine and production' },
      { id: 'exotic-animals', label: 'Exotic Animal Medicine', desc: 'Reptiles, birds, small mammals, fish, amphibians' },
      { id: 'vet-exams', label: 'NAVLE / Vet Board Exams', desc: 'North American Veterinary Licensing Exam review' },
    ]
  },

  // ──────────────── MENTAL HEALTH & PSYCHOLOGY ────────────────
  {
    id: 'mental-health', label: 'Mental Health & Psychology', icon: Brain, color: '#a855f7',
    subcategories: [
      { id: 'dsm5-overview', label: 'DSM-5 Disorders', desc: 'All DSM-5 categories with diagnostic criteria' },
      { id: 'schizophrenia', label: 'Schizophrenia Spectrum', desc: 'Psychosis, schizoaffective, brief psychotic disorder' },
      { id: 'mood-disorders', label: 'Mood Disorders', desc: 'Major depression, bipolar I/II, cyclothymia, dysthymia' },
      { id: 'anxiety-disorders', label: 'Anxiety Disorders', desc: 'GAD, panic, phobias, agoraphobia, social anxiety' },
      { id: 'trauma-disorders', label: 'Trauma & Stress', desc: 'PTSD, acute stress disorder, adjustment disorder' },
      { id: 'ocd-related', label: 'OCD & Related', desc: 'OCD, BDD, hoarding, trichotillomania, excoriation' },
      { id: 'personality', label: 'Personality Disorders', desc: 'Cluster A, B, C personality disorders, borderline, NPD' },
      { id: 'eating-disorders', label: 'Eating Disorders', desc: 'Anorexia, bulimia, binge eating, avoidant restrictive' },
      { id: 'neurodevelopmental', label: 'Neurodevelopmental', desc: 'ADHD, autism spectrum, intellectual disability, tics' },
      { id: 'substance-use', label: 'Substance Use', desc: 'Alcohol, opioids, stimulants — DSM-5 criteria, treatment' },
      { id: 'psychotherapy', label: 'Psychotherapy Types', desc: 'CBT, DBT, psychodynamic, ACT, MI, exposure therapy' },
      { id: 'psych-meds', label: 'Psychiatric Medications', desc: 'Antidepressants, antipsychotics, mood stabilizers, anxiolytics' },
      { id: 'child-psych', label: 'Child Psychiatry', desc: 'ADHD, autism, conduct disorder, separation anxiety, school refusal' },
      { id: 'geriatric-psych', label: 'Geriatric Psychiatry', desc: 'Dementia, late-life depression, delirium differential' },
      { id: 'forensic-psych', label: 'Forensic Psychiatry', desc: 'Competency, insanity defense, civil commitment, malingering' },
    ]
  },

  // ──────────────── ALLIED HEALTH PROFESSIONS ────────────────
  {
    id: 'allied-health', label: 'Allied Health', icon: Stethoscope, color: '#6366f1',
    subcategories: [
      { id: 'physical-therapy', label: 'Physical Therapy', desc: 'Musculoskeletal rehab, neurological PT, gait, exercise' },
      { id: 'occupational-therapy', label: 'Occupational Therapy', desc: 'ADL, adaptive equipment, sensory processing, hand therapy' },
      { id: 'speech-therapy', label: 'Speech-Language Pathology', desc: 'Dysphagia, aphasia, fluency, voice, pediatric speech' },
      { id: 'respiratory-therapy', label: 'Respiratory Therapy', desc: 'Mechanical ventilation, ABG, CPAP, bronchial hygiene' },
      { id: 'medical-lab', label: 'Medical Laboratory Science', desc: 'Hematology, chemistry, microbiology, blood banking, QC' },
      { id: 'radiology-tech', label: 'Radiologic Technology', desc: 'X-ray, CT, MRI, radiation safety, positioning' },
      { id: 'nutrition-dietetics', label: 'Nutrition & Dietetics', desc: 'Clinical nutrition, enteral/parenteral, MNT, RDN exam' },
      { id: 'social-work', label: 'Medical Social Work', desc: 'Discharge planning, resources, ethics, counseling' },
      { id: 'health-informatics', label: 'Health Informatics', desc: 'EHR, clinical decision support, data analytics, interoperability' },
      { id: 'paramedic-ems', label: 'Paramedic / EMS', desc: 'BLS, ACLS, trauma protocols, field clinical skills' },
    ]
  },

  // ──────────────── MEDICAL SPECIALTIES ────────────────
  {
    id: 'specialties', label: 'Medical Specialties', icon: GraduationCap, color: '#0ea5e9',
    subcategories: [
      { id: 'cardiology', label: 'Cardiology', desc: 'Comprehensive cardiology: HF, IHD, electrophysiology' },
      { id: 'nephrology', label: 'Nephrology', desc: 'CKD staging, dialysis, glomerular diseases, AKI' },
      { id: 'gastroenterology', label: 'Gastroenterology', desc: 'IBD, liver disease, endoscopy, GI bleeding' },
      { id: 'pulmonology', label: 'Pulmonology', desc: 'COPD, asthma, ILD, sleep medicine, pulm HTN' },
      { id: 'endocrinology', label: 'Endocrinology', desc: 'Diabetes, thyroid, adrenal, pituitary, metabolic bone' },
      { id: 'hematology', label: 'Hematology', desc: 'Blood disorders, cancer, coagulation, transfusion' },
      { id: 'oncology', label: 'Oncology', desc: 'Solid tumors, hematological malignancies, therapy' },
      { id: 'neurology', label: 'Neurology', desc: 'Stroke, epilepsy, movement disorders, dementia, MS neuroimaging' },
      { id: 'rheumatology', label: 'Rheumatology', desc: 'RA, SLE, vasculitis, sero-negative, biologics' },
      { id: 'infectious-sp', label: 'Infectious Diseases', desc: 'HIV, TB, sepsis, parasitology, antimicrobial stewardship' },
      { id: 'geriatrics', label: 'Geriatrics', desc: 'Comprehensive geriatric assessment, frailty, falls' },
      { id: 'emergency-sp', label: 'Emergency Medicine', desc: 'Acute resuscitation, toxicology, acute care algorithms' },
      { id: 'pediatrics-sp', label: 'Pediatrics', desc: 'Developmental, neonatology, vaccinations, common pediatric illness' },
      { id: 'obs-gyn', label: 'Obstetrics & Gynecology', desc: 'High-risk OB, gynecology, reproductive endocrinology' },
      { id: 'dermatology-sp', label: 'Dermatology', desc: 'Eczema, skin cancer, autoimmune skin, cosmetic derm' },
      { id: 'ophthalmology-sp', label: 'Ophthalmology', desc: 'Retina, cornea, glaucoma, cataracts, neuro-ophthalmology' },
      { id: 'ent', label: 'ENT', desc: 'Sinusitis, hearing loss, head & neck cancer, thyroid' },
      { id: 'urology', label: 'Urology', desc: 'BPH, urolithiasis, bladder/prostate cancer, incontinence' },
      { id: 'psychiatry-sp', label: 'Psychiatry', desc: 'Comprehensive psychiatry: diagnosis, psychopharmacology' },
      { id: 'pm-r', label: 'Physical Medicine & Rehab', desc: 'Stroke rehab, SCI, TBI, pain management, prosthetics' },
    ]
  },

  // ──────────────── EMERGENCY MEDICINE & CRITICAL CARE ────────────────
  {
    id: 'emergency-critical', label: 'Emergency & Critical Care', icon: Activity, color: '#dc2626',
    subcategories: [
      { id: 'acls', label: 'ACLS', desc: 'Advanced Cardiovascular Life Support algorithms and drugs' },
      { id: 'pals', label: 'PALS', desc: 'Pediatric Advanced Life Support — algorithms, doses' },
      { id: 'atls', label: 'ATLS', desc: 'Advanced Trauma Life Support — primary/secondary survey' },
      { id: 'bls', label: 'BLS / CPR', desc: 'Basic Life Support, CPR quality, AED use, chain of survival' },
      { id: 'sepsis', label: 'Sepsis & Septic Shock', desc: 'Sepsis-3 definition, qSOFA, Surviving Sepsis Bundle' },
      { id: 'icu-monitoring', label: 'ICU Monitoring', desc: 'Hemodynamics, SwanGanz, arterial lines, CVP, CO' },
      { id: 'mechanical-ventilation', label: 'Mechanical Ventilation', desc: 'Modes, settings, weaning, ARDS, VAP prevention' },
      { id: 'vasopressors', label: 'Vasopressors & Inotropes', desc: 'Norepinephrine, dopamine, vasopressin, dobutamine' },
      { id: 'toxicology-em', label: 'Toxicology', desc: 'Overdoses, antidotes: acetaminophen, opioids, TCAs, cyanide' },
      { id: 'trauma-care', label: 'Trauma Care', desc: 'Hemorrhage control, damage control, massive transfusion' },
      { id: 'burns-em', label: 'Burns', desc: 'Burn classification, Parkland formula, fluid resuscitation' },
      { id: 'drowning-hypothermia', label: 'Drowning & Environmental', desc: 'Drowning, hypothermia, hyperthermia, altitude, diving' },
      { id: 'stroke-em', label: 'Acute Stroke', desc: 'tPA criteria, stroke mimics, NIH Stroke Scale, thrombectomy' },
      { id: 'arrhythmia-em', label: 'Arrhythmia Emergencies', desc: 'VT, VF, SVT, Afib with WPW, cardioversion, defibrillation' },
      { id: 'shock-types', label: 'Shock Types', desc: 'Hypovolemic, cardiogenic, distributive, obstructive shock' },
      { id: 'airway-management', label: 'Airway Management', desc: 'RSI drugs, intubation, surgical airway, cricothyrotomy' },
    ]
  },

  // ──────────────── PAIN MANAGEMENT ────────────────
  {
    id: 'pain-management', label: 'Pain Management', icon: Flame, color: '#f97316',
    subcategories: [
      { id: 'pain-assessment', label: 'Pain Assessment', desc: 'Pain scales, quantification, multidimensional assessment' },
      { id: 'analgesics', label: 'Analgesics', desc: 'WHO ladder, NSAIDs, opioids, adjuvants, ceiling effects' },
      { id: 'opioid-pharmacology', label: 'Opioid Pharmacology', desc: 'Mechanism, equianalgesic doses, conversion, tolerance' },
      { id: 'neuropathic-pain', label: 'Neuropathic Pain', desc: 'PHN, diabetic neuropathy, CRPS, fibromyalgia treatment' },
      { id: 'headache-pain', label: 'Headache Management', desc: 'Migraine, cluster, tension: acute and preventive therapy' },
      { id: 'cancer-pain', label: 'Cancer Pain', desc: 'WHO analgesic ladder, breakthrough doses, palliative meds' },
      { id: 'interventional-pain', label: 'Interventional Pain', desc: 'Epidural, nerve blocks, spinal cord stimulation, RF ablation' },
      { id: 'opioid-addiction', label: 'Opioid Use Disorder', desc: 'MAT — methadone, buprenorphine, naltrexone, PDMP' },
      { id: 'multimodal-analgesia', label: 'Multimodal Analgesia', desc: 'ERAS protocols, regional anesthesia, minimizing opioids' },
      { id: 'pediatric-pain', label: 'Pediatric Pain', desc: 'Pain scales for children, non-pharmacologic, weight-based dosing' },
    ]
  },

  // ──────────────── PHARMACOGENOMICS ────────────────
  {
    id: 'pharmacogenomics', label: 'Pharmacogenomics', icon: Database, color: '#7c3aed',
    subcategories: [
      { id: 'pgx-basics', label: 'PGx Fundamentals', desc: 'Genetic polymorphisms: PMs, IMs, NMs, UMs, RMs' },
      { id: 'cyp450-genetics', label: 'CYP450 Polymorphisms', desc: 'CYP2D6, CYP2C19, CYP2C9, CYP3A5 variants and clinical impact' },
      { id: 'warfarin-pgx', label: 'Warfarin PGx', desc: 'VKORC1, CYP2C9 — dosing algorithms, clinical use' },
      { id: 'clopidogrel-pgx', label: 'Clopidogrel & Antiplatelet PGx', desc: 'CYP2C19*2 loss of function, alternative antiplatelet agents' },
      { id: 'tamoxifen-pgx', label: 'Oncology PGx', desc: 'Tamoxifen-CYP2D6, 5-FU-DPYD, irinotecan-UGT1A1' },
      { id: 'antidepressants-pgx', label: 'Antidepressants & PGx', desc: 'SSRI, TCA pharmacogenomics — which SNPs matter clinically' },
      { id: 'opioids-pgx', label: 'Opioid PGx', desc: 'Codeine-CYP2D6 ultrarapid metabolizers — FDA warning, morphine' },
      { id: 'pgx-testing', label: 'PGx Testing', desc: 'FDA table of pharmacogenomic biomarkers, clinical utility, limitations' },
      { id: 'hla-markers', label: 'HLA Pharmacogenomics', desc: 'HLA-B*57:01 (abacavir), HLA-B*15:02 (carbamazepine), Stevens-Johnson' },
      { id: 'pgx-clinical', label: 'Clinical Implementation', desc: 'CPIC guidelines, EHR integration, pre-emptive PGx testing' },
    ]
  },

  // ──────────────── MEDICAL DEVICES & TECHNOLOGY ────────────────
  {
    id: 'medical-technology', label: 'Medical Technology', icon: Monitor, color: '#2563eb',
    subcategories: [
      { id: 'cardiac-devices', label: 'Cardiac Devices', desc: 'Pacemakers, ICDs, CRT, LVAD, TAVR, stents, balloon pumps' },
      { id: 'renal-devices', label: 'Renal Devices', desc: 'Hemodialysis machines, peritoneal dialysis, CRRT circuits' },
      { id: 'ventilator-tech', label: 'Ventilator Technology', desc: 'Ventilator types, circuit, modes, waveforms, alarms' },
      { id: 'infusion-devices', label: 'Infusion Technology', desc: 'Smart pumps, DERS, IV compatibility, PCA, epidural pumps' },
      { id: 'diagnostic-imaging', label: 'Diagnostic Imaging Devices', desc: 'X-ray, CT, MRI, PET, ultrasound machine types and principles' },
      { id: 'surgical-robots', label: 'Robotic Surgery', desc: 'da Vinci, robotic laparoscopy, NOTES, single-port surgery' },
      { id: 'wearables', label: 'Wearable Health Devices', desc: 'CGM, smartwatch, pulse oximetry, ECG patches, remote monitoring' },
      { id: 'ai-diagnostics', label: 'AI in Diagnostics', desc: 'AI pathology, radiology AI, sepsis prediction, drug discovery AI' },
      { id: 'ehr-systems', label: 'EHR / EMR Systems', desc: 'Epic, Cerner, CPOE, clinical decision support, FHIR standards' },
      { id: 'telemedicine', label: 'Telemedicine', desc: 'Telehealth platforms, RPM, regulatory considerations, prescribing' },
      { id: 'lab-automation', label: 'Laboratory Automation', desc: 'Point-of-care testing, automated analyzers, POCT quality control' },
      { id: 'drug-delivery', label: 'Drug Delivery Systems', desc: 'Transdermal, liposomes, nanoparticles, implants, depot injections' },
    ]
  },

  // ──────────────── LABORATORY MEDICINE ────────────────
  {
    id: 'laboratory-medicine', label: 'Laboratory Medicine', icon: FlaskConical, color: '#0891b2',
    subcategories: [
      { id: 'hematology-lab', label: 'Hematology Lab', desc: 'CBC interpretation, peripheral smear, RBC indices, reticulocytes' },
      { id: 'chemistry-lab', label: 'Clinical Chemistry', desc: 'Metabolic panels, enzymes, lipids, hormones, therapeutic drug monitoring' },
      { id: 'microbiology-lab', label: 'Clinical Microbiology', desc: 'Culture techniques, Gram stain, sensitivity, blood culture interpretation' },
      { id: 'immunology-lab', label: 'Immunology Lab', desc: 'Autoantibodies, flow cytometry, allergy testing, western blot' },
      { id: 'blood-banking', label: 'Blood Banking / Transfusion', desc: 'Blood typing, crossmatch, transfusion reactions, components' },
      { id: 'coagulation-lab', label: 'Coagulation Studies', desc: 'PT/INR, aPTT, TEG, platelet function, factor assays' },
      { id: 'urine-analysis', label: 'Urinalysis', desc: 'Dipstick, microscopy, casts, crystals, culture interpretation' },
      { id: 'csf-analysis', label: 'CSF Analysis', desc: 'LP technique, glucose, protein, cells, xanthochromia, oligoclonal bands' },
      { id: 'molecular-lab', label: 'Molecular Diagnostics', desc: 'PCR, NGS, FISH, multiplex panels, COVID testing, resistance genes' },
      { id: 'lab-quality', label: 'Lab Quality Control', desc: 'Levey-Jennings, Westgard rules, CLIA, CAP accreditation, delta checks' },
      { id: 'point-of-care', label: 'Point-of-Care Testing', desc: 'POCT devices, bedside troponin, glucose, ABG, BNP accuracy limits' },
      { id: 'lab-errors', label: 'Lab Errors & Interpretation', desc: 'Pre-analytical, analytical, post-analytical errors, critical values' },
    ]
  },

  // ──────────────── OPTOMETRY & EYE HEALTH ────────────────
  {
    id: 'optometry', label: 'Optometry & Eye Health', icon: Eye, color: '#0284c7',
    subcategories: [
      { id: 'eye-anatomy', label: 'Eye Anatomy', desc: 'Ocular structures, visual pathway, cranial nerves III/IV/VI' },
      { id: 'refraction', label: 'Refraction & Vision', desc: 'Myopia, hyperopia, astigmatism, presbyopia, correction' },
      { id: 'glaucoma', label: 'Glaucoma', desc: 'Open-angle, angle-closure, normal tension, IOP, treatment' },
      { id: 'cataracts-opt', label: 'Cataracts', desc: 'Nuclear sclerosis, phacoemulsification, IOL selection' },
      { id: 'retinal-diseases', label: 'Retinal Diseases', desc: 'AMD, diabetic retinopathy, RVO, retinal detachment' },
      { id: 'corneal-diseases', label: 'Corneal Diseases', desc: 'Keratoconus, corneal ulcer, dry eye syndrome, HSV keratitis' },
      { id: 'neuro-ophthalmology', label: 'Neuro-Ophthalmology', desc: 'Papilledema, CN palsies, visual field defects, optic neuritis' },
      { id: 'pediatric-eye', label: 'Pediatric Eye', desc: 'Amblyopia, strabismus, congenital cataracts, retinoblastoma' },
      { id: 'eye-pharmacology', label: 'Ocular Pharmacology', desc: 'Glaucoma drops, mydriatics, antivirals, anti-VEGF, steroids' },
      { id: 'eye-exams', label: 'Optometry Board Exams', desc: 'NBEO TMOD/OSCE, POPT, Commonwealth optometry exams' },
    ]
  },

  // ──────────────── PODIATRY ────────────────
  {
    id: 'podiatry', label: 'Podiatry', icon: Activity, color: '#16a34a',
    subcategories: [
      { id: 'foot-anatomy', label: 'Foot & Ankle Anatomy', desc: 'Bones, muscles, tendons, nerves, vascular supply of foot' },
      { id: 'diabetic-foot', label: 'Diabetic Foot', desc: 'Neuropathy, ulcer grading, Charcot, offloading, amputation prevention' },
      { id: 'foot-infections', label: 'Foot Infections', desc: 'Osteomyelitis, cellulitis, necrotizing fasciitis, fungal nails' },
      { id: 'heel-pain', label: 'Heel Pain', desc: 'Plantar fasciitis, calcaneal stress fractures, Haglund deformity' },
      { id: 'nail-disorders', label: 'Nail Disorders', desc: 'Ingrown nails, onychomycosis, nail matrix, avulsion' },
      { id: 'biomechanics', label: 'Foot Biomechanics', desc: 'Gait analysis, orthosis, pronation, supination, custom orthotics' },
      { id: 'bunions-deformities', label: 'Bunions & Deformities', desc: 'Hallux valgus, hammertoes, metatarsalgia, surgery options' },
      { id: 'podiatry-exams', label: 'Podiatry Board Exams', desc: 'APMLE/COMAT podiatry prep, CPME curriculum' },
    ]
  },

  // ──────────────── REPRODUCTIVE HEALTH ────────────────
  {
    id: 'reproductive-health', label: 'Reproductive Health', icon: Heart, color: '#db2777',
    subcategories: [
      { id: 'contraception', label: 'Contraception', desc: 'All methods: efficacy, MOA, advantages, disadvantages, counseling' },
      { id: 'fertility', label: 'Fertility & Infertility', desc: 'Causes, evaluation, IVF, IUI, ovulation induction, PCOS' },
      { id: 'prenatal-care', label: 'Prenatal Care', desc: 'ANC schedule, screenings, nutrition, teratogen counseling' },
      { id: 'pregnancy-complications', label: 'Pregnancy Complications', desc: 'Preeclampsia, GDM, PPROM, placenta previa, abruption' },
      { id: 'labor-delivery', label: 'Labor & Delivery', desc: 'Stages, partogram, induction, fetal monitoring, shoulder dystocia' },
      { id: 'postpartum', label: 'Postpartum Care', desc: 'Postpartum hemorrhage, depression, breastfeeding, involution' },
      { id: 'menstrual-disorders', label: 'Menstrual Disorders', desc: 'Dysmenorrhea, amenorrhea, AUB, DUB, PMDD' },
      { id: 'stis', label: 'STIs', desc: 'Chlamydia, gonorrhea, syphilis, HSV, HPV, HIV — diagnosis and treatment' },
      { id: 'menopause', label: 'Menopause', desc: 'Perimenopause, symptoms, HRT options, risks, alternatives' },
      { id: 'reproductive-oncology', label: 'Reproductive Oncology', desc: 'Cervical, ovarian, uterine cancer — screening, staging, treatment' },
    ]
  },

  // ──────────────── MEDICAL LAW, ETHICS & PROFESSIONALISM ────────────────
  {
    id: 'medical-law-ethics', label: 'Medical Law & Ethics', icon: BookA, color: '#64748b',
    subcategories: [
      { id: 'informed-consent', label: 'Informed Consent', desc: 'Elements, exceptions, capacity, documentation, surrogate' },
      { id: 'medical-liability', label: 'Medical Liability', desc: 'Negligence, malpractice, standard of care, tort reform' },
      { id: 'patient-rights', label: 'Patient Rights', desc: 'HIPAA, Privacy Rule, Security Rule, patient confidentiality' },
      { id: 'end-of-life', label: 'End-of-Life Ethics', desc: 'DNR, advance directives, PAD, withdrawal of care, hospice' },
      { id: 'research-ethics', label: 'Research Ethics', desc: 'Belmont Report, IRB, Helsinki Declaration, clinical trial phases' },
      { id: 'medical-professionalism', label: 'Professionalism', desc: 'ACGME core competencies, physician charter, professional behavior' },
      { id: 'international-health-law', label: 'International Health Law', desc: 'WHO IHR, global health governance, pandemic response frameworks' },
      { id: 'resource-allocation', label: 'Resource Allocation', desc: 'Triage, QALY, healthcare economics, ICU allocation principles' },
      { id: 'cultural-competency', label: 'Cultural Competency', desc: 'Health disparities, cultural humility, interpreter services, LGBTQ+ care' },
      { id: 'reporting-obligations', label: 'Mandatory Reporting', desc: 'Abuse, public health reporting, impaired physicians, FDA MedWatch' },
    ]
  },

  // ──────────────── HEALTHCARE EDUCATION & STUDY SKILLS ────────────────
  {
    id: 'study-skills', label: 'Healthcare Study Skills', icon: BookOpen, color: '#7c3aed',
    subcategories: [
      { id: 'active-recall', label: 'Active Recall & Spaced Repetition', desc: 'Anki, Leitner system, flashcard creation, retrieval practice' },
      { id: 'question-banks', label: 'Question Banks Guide', desc: 'UWorld, Amboss, Kaplan, Lecturio, Rx — how to use effectively' },
      { id: 'test-taking', label: 'Test-Taking Strategy', desc: 'Process of elimination, vignette analysis, timing for all exams' },
      { id: 'study-schedules', label: 'Study Schedules', desc: 'Dedicated study plans for USMLE, NAPLEX, NCLEX, PLAB, DHA' },
      { id: 'clinical-reasoning', label: 'Clinical Reasoning', desc: 'Pattern recognition, illness scripts, Bayesian thinking' },
      { id: 'mnemonics-collection', label: 'Medical Mnemonics A–Z', desc: '300+ verified medical mnemonics organized by system' },
      { id: 'note-taking', label: 'Note-Taking Methods', desc: 'Cornell, mind mapping, concept mapping, linear notes for medicine' },
      { id: 'burnout-wellness', label: 'Student Wellness', desc: 'Burnout prevention, resilience, sleep, exercise, time management' },
      { id: 'reading-ecg-guide', label: 'ECG Reading Guide', desc: 'Step-by-step systematic ECG reading for beginners to advanced' },
      { id: 'case-based-learning', label: 'Case-Based Learning', desc: 'PBL approach, SNAPPS framework, clinical case analysis' },
    ]
  },

  // ──────────────── GLOBAL DRUG DATABASE (Section 1) ────────────────
  {
    id: 'global-drug-db', label: 'Global Drug Database', icon: Database, color: '#1e40af',
    subcategories: [
      { id: 'fda-approved-all', label: 'All FDA-Approved Drugs A–Z', desc: 'Complete A–Z database: generic name, brand, drug class, indication, DEA schedule, approval year — 20,000+ entries' },
      { id: 'generic-brand-equivalents', label: 'Generic ↔ Brand Equivalents', desc: 'Comprehensive generic-to-brand and brand-to-generic cross-reference for all approved medications worldwide' },
      { id: 'biologics-biosimilars', label: 'All Biologics & Biosimilars', desc: 'FDA-approved biologics and biosimilar equivalents with interchangeability status, reference product, and savings data' },
      { id: 'monoclonal-antibodies', label: 'All Monoclonal Antibodies', desc: 'Complete mAb reference with suffix guide (-mab, -zumab, -ximab, -umab, -lumab), targets, indications, and immune adverse events' },
      { id: 'vaccines-worldwide', label: 'All Vaccines Worldwide', desc: 'Childhood, adult, travel, and occupational vaccines with global immunization schedules — CDC, WHO, ACIP, PHE, AIIMS' },
      { id: 'controlled-substances', label: 'All Controlled Substances', desc: 'DEA Schedules I–V complete drug lists with abuse potential, medical use, prescribing rules, and international equivalents' },
      { id: 'black-box-warnings', label: 'All Black Box Warning Drugs', desc: 'Complete FDA Black Box Warning reference organized by organ system, warning type, and monitoring requirements' },
      { id: 'orphan-drugs', label: 'All Orphan Drugs', desc: 'FDA-designated orphan drugs and rare disease medications with prevalence thresholds, designations, and patient assistance programs' },
      { id: 'chemotherapy-agents', label: 'All Cancer Chemotherapy Agents', desc: 'Alkylating agents, antimetabolites, taxanes, vinca alkaloids, platinum compounds, anthracyclines, topoisomerase inhibitors — full reference' },
      { id: 'targeted-cancer-therapies', label: 'All Targeted Cancer Therapies', desc: 'TKIs, CDK4/6 inhibitors, PARP inhibitors, VEGF inhibitors, BCR-ABL, EGFR, ALK, KRAS, HER2 targeted agents with resistance mechanisms' },
      { id: 'immunotherapy-checkpoint', label: 'All Immunotherapy & Checkpoint Inhibitors', desc: 'PD-1, PD-L1, CTLA-4, LAG-3, TIM-3 inhibitors with cancer indications, combinations, and irAE management' },
      { id: 'car-t-cell', label: 'All CAR-T Cell Therapies', desc: 'FDA-approved CAR-T therapies with indications, manufacturing process, toxicity management (CRS, ICANS), and eligibility criteria' },
      { id: 'gene-therapies', label: 'All Gene Therapies', desc: 'FDA-approved gene therapies with vector types, indications, one-time dosing, and long-term safety monitoring requirements' },
      { id: 'mrna-therapies', label: 'All mRNA-Based Therapies', desc: 'mRNA therapeutics including vaccines, cancer vaccines, and protein replacement therapies — pipeline and approved agents' },
      { id: 'antibiotics-all-classes', label: 'All Antibiotic Classes — Full List', desc: 'Penicillins, cephalosporins (gen 1–5), carbapenems, monobactams, aminoglycosides, macrolides, tetracyclines, fluoroquinolones, glycopeptides, lipopeptides, polymyxins, oxazolidinones' },
      { id: 'antifungals-all', label: 'All Antifungal Drugs', desc: 'Azoles, echinocandins, polyenes, allylamines, flucytosine — mechanisms, spectra, clinical uses, resistance, and dosing' },
      { id: 'antivirals-all', label: 'All Antiviral Drugs', desc: 'HIV, HBV, HCV, HSV, CMV, influenza, RSV, COVID-19, monkeypox, EBV, VZV antivirals — complete mechanisms and regimens' },
      { id: 'antiparasitics-all', label: 'All Antiparasitic Drugs', desc: 'Antimalarials (all species), anthelmintics, antiprotozoals — mechanisms, dosing, resistance patterns, and prophylaxis worldwide' },
      { id: 'cardiovascular-drugs-all', label: 'All Cardiovascular Drugs', desc: 'ACEi, ARBs, ARNIs, beta-blockers, CCBs, diuretics, nitrates, antiarrhythmics, antilipemics, anticoagulants, antiplatelets, fibrinolytics, inotropes, vasopressors' },
      { id: 'cns-drugs-all', label: 'All CNS Drugs', desc: 'Antidepressants, antipsychotics, anxiolytics, hypnotics, mood stabilizers, anticonvulsants, antiparkinsonian, dementia drugs, opioids, stimulants, anesthetics, migraine medications' },
      { id: 'respiratory-drugs-all', label: 'All Respiratory Drugs', desc: 'SABAs, LABAs, SAMAs, LAMAs, ICS, combination inhalers, leukotriene modifiers, biologics for asthma/COPD, antitussives, mucolytics, pulmonary vasodilators, surfactants' },
      { id: 'gi-drugs-all', label: 'All GI Drugs', desc: 'PPIs, H2 blockers, antacids, prokinetics, antiemetics, laxatives, antidiarrheals, IBD biologics, GI antispasmodics, pancreatic enzymes, bile acid sequestrants, GLP-1 agonists' },
      { id: 'endocrine-drugs-all', label: 'All Endocrine & Metabolic Drugs', desc: 'All insulins (all types/brands), oral antidiabetics (9 classes), thyroid drugs, corticosteroids, sex hormones, contraceptives, fertility drugs, osteoporosis, gout, obesity medications' },
      { id: 'renal-drugs-all', label: 'All Renal Drugs', desc: 'All diuretics by class, potassium binders, phosphate binders, erythropoiesis-stimulating agents, calcimimetics, urologic drugs — dosing in CKD' },
      { id: 'immunology-rheum-drugs-all', label: 'All Immunology & Rheumatology Drugs', desc: 'All DMARDs, biologics, JAK inhibitors, IL inhibitors, TNF inhibitors, B-cell depleting agents, complement inhibitors, immunosuppressants — complete reference' },
      { id: 'dermatology-drugs-all', label: 'All Dermatology Drugs', desc: 'Topical corticosteroids (all 7 potency classes), retinoids, calcineurin inhibitors, biologics for psoriasis/eczema/rosacea, acne drugs, wound care agents' },
      { id: 'ophthalmology-drugs-all', label: 'All Ophthalmology Drugs', desc: 'Glaucoma drops (all 5 classes), anti-VEGF intravitreal agents, mydriatics, miotics, lubricants, anti-infective eye drops — mechanisms and clinical use' },
      { id: 'ent-drugs-all', label: 'All ENT Drugs', desc: 'Nasal corticosteroids, decongestants, antihistamines (all generations), ear drops, salivary stimulants, local anesthetics for ENT procedures' },
      { id: 'hematology-drugs-all', label: 'All Hematology Drugs', desc: 'Anticoagulants (all classes), antiplatelets, thrombolytics, factor concentrates, iron supplements, G-CSF, EPO, hemophilia drugs, sickle cell, ITP treatments' },
      { id: 'neurology-drugs-all', label: 'All Neurology-Specific Drugs', desc: 'MS drugs (injectable/oral/infusion), epilepsy drugs by mechanism, migraine drugs, ALS drugs, SMA therapies, MG drugs, Huntington\'s, vertigo drugs' },
      { id: 'psychiatry-drugs-all', label: 'All Psychiatry Drugs', desc: 'SSRIs, SNRIs, TCAs, MAOIs, atypicals; all antipsychotics (typical/atypical); mood stabilizers; anxiolytics; ADHD drugs; addiction medicine; sleep drugs; eating disorder drugs' },
      { id: 'obgyn-drugs-all', label: 'All OB/GYN & Reproductive Drugs', desc: 'All contraceptives by type, tocolytics, uterotonics, fertility drugs, drug safety in pregnancy (FDA categories), lactation safety (LactMed), PPH drugs, cervical ripening' },
      { id: 'pediatric-drugs-all', label: 'All Pediatric Drugs', desc: 'Weight-based dosing for all pediatric conditions, neonatal drug formulary, off-label pediatric drugs, pediatric immunization schedule — global (CDC, WHO, AIIMS)' },
      { id: 'emergency-drugs-all', label: 'All Emergency & Critical Care Drugs', desc: 'ACLS drugs, RSI agents, vasopressors, ICU sedation/analgesia, antidotes, reversal agents, antiepileptic IV drugs, hypertensive emergency, eclampsia drugs' },
      { id: 'iv-parenteral-drugs', label: 'All IV & Parenteral Drugs', desc: 'Compatibility charts, reconstitution guides, stability data, infusion rates, and extravasation management for all IV medications' },
      { id: 'contrast-imaging-agents', label: 'All Contrast & Imaging Agents', desc: 'Iodinated contrast (ionic/non-ionic), gadolinium MRI agents, ultrasound contrast agents, nuclear medicine radiopharmaceuticals — safety and premedication' },
      { id: 'anesthesia-drugs-all', label: 'All Surgical & Anesthesia Drugs', desc: 'General anesthetics, regional anesthetics, neuromuscular blocking agents, reversal agents, pre-op medications, post-op pain management protocols' },
      { id: 'drug-antidotes-all', label: 'All Drug Antidotes & Toxin Reversal', desc: 'Complete toxin → antidote → dose → mechanism reference table for all poisonings, overdoses, and toxidromes' },
      { id: 'high-alert-meds', label: 'All High-Alert Medications', desc: 'ISMP complete high-alert medication list with look-alike/sound-alike pairs, safety measures, and error prevention strategies' },
      { id: 'who-essential-meds', label: 'All WHO Essential Medicines', desc: 'Complete WHO Essential Medicines List organized by therapeutic category with global access information and biosimilar availability' },
      { id: 'fda-approvals-tracker', label: 'FDA Drug Approvals Tracker 2020–2025', desc: 'New FDA drug approvals by year: drug name, indication, mechanism, manufacturer, approval date, and pivotal trial data' },
      { id: 'international-drug-names', label: 'International Drug Names', desc: 'US vs UK vs Australia vs Canada vs WHO INN naming conventions, proprietary name differences, and international prescribing/importing rules' },
    ]
  },

  // ──────────────── GLOBAL DISEASE DATABASE (Section 2) ────────────────
  {
    id: 'global-disease-db', label: 'Global Disease Database', icon: Thermometer, color: '#b91c1c',
    subcategories: [

      // ── INFECTIOUS DISEASES ──
      { id: 'bacterial-diseases-all', label: 'All Bacterial Diseases', desc: 'Gram-positive and gram-negative organisms, atypical bacteria, spirochetes, mycobacteria — tuberculosis, leprosy, NTM — with pathogenesis, diagnosis, and treatment' },
      { id: 'viral-diseases-all', label: 'All Viral Diseases', desc: 'RNA and DNA viruses, retroviruses (HIV/AIDS full management), arboviruses, hemorrhagic fevers, emerging viruses, respiratory, enteric, and neurotropic viruses' },
      { id: 'fungal-diseases-all', label: 'All Fungal Diseases', desc: 'Superficial, cutaneous, subcutaneous, and systemic fungal infections — Candida, Aspergillus, Cryptococcus, Histoplasma, Blastomyces, Coccidioides, Mucor, PCP' },
      { id: 'parasitic-diseases-all', label: 'All Parasitic Diseases', desc: 'Protozoa (malaria all species, Toxoplasma, Giardia, Leishmania, Trypanosoma), helminths (roundworms, tapeworms, flukes), ectoparasites (scabies, lice, ticks)' },
      { id: 'prion-diseases', label: 'All Prion Diseases', desc: 'CJD (sporadic, familial, iatrogenic), vCJD, fatal familial insomnia, Gerstmann-Sträussler-Scheinker syndrome, kuru — diagnosis, progression, biosafety' },
      { id: 'sti-cdc-guidelines', label: 'All Sexually Transmitted Infections', desc: 'Complete STI reference with CDC 2021 treatment guidelines: gonorrhea, chlamydia, syphilis all stages, HSV, HPV, HIV, trichomoniasis, BV, PID, LGV, chancroid' },
      { id: 'tropical-ntd-who', label: 'All Tropical & Neglected Tropical Diseases', desc: 'WHO NTD full list: dengue, Zika, chikungunya, yellow fever, rabies, leishmaniasis, Chagas, sleeping sickness, river blindness, lymphatic filariasis, schistosomiasis' },
      { id: 'hai-hcai', label: 'All Healthcare-Associated Infections', desc: 'MRSA, VRE, ESBL-producing organisms, CRE, C. difficile, CRAB, CRPA — epidemiology, prevention bundles, infection control, antibiotic stewardship' },
      { id: 'bioterrorism-agents', label: 'All Bioterrorism Agents (Cat A/B/C)', desc: 'Category A (anthrax, smallpox, plague, botulism, tularemia, viral hemorrhagic fevers), B, and C agents — clinical features, diagnosis, treatment, decontamination' },
      { id: 'zoonotic-diseases', label: 'All Zoonotic Diseases', desc: 'Animal-to-human transmission: brucellosis, leptospirosis, Q fever, toxoplasmosis, rabies, hantavirus, monkeypox, MERS, SARS, avian influenza — reservoir, vector, treatment' },
      { id: 'foodborne-illnesses', label: 'All Food-Borne Illnesses', desc: 'Complete reference: organism, implicated food, incubation period, symptoms, toxin mechanism, diagnosis, treatment — including Salmonella, Listeria, E. coli, Staph, Bacillus' },
      { id: 'waterborne-diseases', label: 'All Water-Borne Diseases', desc: 'Cholera, typhoid, cryptosporidiosis, giardiasis, hepatitis A/E, leptospirosis, amoebic dysentery, schistosomiasis — transmission, global burden, prevention, treatment' },
      { id: 'vector-borne-diseases', label: 'All Vector-Borne Diseases', desc: 'Mosquito (malaria, dengue, Zika, West Nile, yellow fever), tick (Lyme, RMSF, ehrlichiosis, babesiosis), flea (plague, typhus), fly (leishmaniasis, sleeping sickness), sandfly' },

      // ── CARDIOVASCULAR ──
      { id: 'heart-failure-types', label: 'All Heart Failure Types', desc: 'HFrEF, HFpEF, HFmrEF, acute vs chronic HF, biventricular, isolated right heart failure, cardiogenic shock — definitions, staging (NYHA/ACC/AHA), evidence-based treatment' },
      { id: 'cad-presentations', label: 'All Coronary Artery Disease Presentations', desc: 'Stable angina, unstable angina, NSTEMI, STEMI, silent ischemia, variant angina (Prinzmetal), microvascular angina — risk stratification, workup, revascularization' },
      { id: 'arrhythmias-all', label: 'All Cardiac Arrhythmias', desc: 'SVT all types (AVNRT, AVRT, AT, AFL, AF), VT all types, WPW, bradyarrhythmias, sinus node dysfunction, heart blocks (all degrees), Brugada, long QT, short QT' },
      { id: 'valvular-heart-disease', label: 'All Valvular Heart Diseases', desc: 'Aortic/mitral/tricuspid/pulmonary stenosis and regurgitation — etiology, murmur characteristics, echocardiography findings, surgery/TAVR/TEER indications, prosthetic valve complications' },
      { id: 'cardiomyopathies-all', label: 'All Cardiomyopathies', desc: 'Dilated, hypertrophic (obstructive/non-obstructive), restrictive (all causes), arrhythmogenic RV cardiomyopathy, Takotsubo, peripartum, ischemic, alcoholic, toxic, Chagas' },
      { id: 'pericardial-diseases', label: 'All Pericardial Diseases', desc: 'Acute pericarditis, recurrent pericarditis, pericardial effusion, cardiac tamponade (diagnosis and pericardiocentesis), constrictive pericarditis — etiology, Echo findings, management' },
      { id: 'vascular-diseases-all', label: 'All Vascular Diseases', desc: 'PAD (Fontaine/Rutherford staging), aortic aneurysm, aortic dissection (DeBakey/Stanford), mesenteric ischemia, renal artery stenosis, DVT, PE, chronic venous insufficiency, lymphedema' },
      { id: 'congenital-heart-disease', label: 'All Congenital Heart Diseases', desc: 'ASD, VSD, PDA, tetralogy of Fallot, TGA (d-TGA, l-TGA), coarctation, Eisenmenger, AVSD, truncus arteriosus, TAPVR, HLHS, Ebstein — anatomy, physiology, surgical repair' },
      { id: 'hypertension-all', label: 'All Hypertension & Secondary Causes', desc: 'Primary hypertension stages, secondary HTN (renal, endocrine, vascular, drug-induced), hypertensive urgency vs emergency, resistant HTN, white-coat, masked, ambulatory BP' },
      { id: 'pulmonary-hypertension', label: 'Pulmonary Hypertension — All WHO Groups', desc: 'Group 1 (PAH all subtypes), Group 2 (left heart disease), Group 3 (lung disease/hypoxia), Group 4 (CTEPH), Group 5 (unclear/multifactorial) — hemodynamics, RHC, targeted therapies' },

      // ── NEUROLOGY ──
      { id: 'stroke-syndromes', label: 'All Stroke Syndromes', desc: 'Anterior circulation (MCA, ACA, ICA), posterior circulation (PICA, AICA, basilar), lacunar infarcts, watershed, cerebral venous sinus thrombosis, TIA — NIHSS, imaging, tPA, thrombectomy' },
      { id: 'epilepsy-seizures', label: 'All Epilepsy & Seizure Disorders', desc: 'ILAE 2017 classification — all seizure types (focal, generalized, unknown), all epilepsy syndromes (absence, juvenile myoclonic, Lennox-Gastaut, ESES, Rasmussen), status epilepticus' },
      { id: 'dementia-all', label: 'All Dementia Types', desc: 'Alzheimer\'s (all stages, biomarkers, lecanemab/donanemab), Lewy body, FTD (all variants — bvFTD, PPA, PSP, CBD), vascular dementia, NPH, prion, reversible causes — neuropsychological testing' },
      { id: 'movement-disorders', label: 'All Movement Disorders', desc: 'Parkinson\'s (all stages, motor/non-motor), atypical parkinsonisms (PSP, MSA, CBD, DLB), essential tremor, dystonia (all types), Huntington\'s, chorea, myoclonus, tics, RLS, FMD' },
      { id: 'headache-disorders', label: 'All Headache Disorders (ICHD-3)', desc: 'Migraine (all subtypes including hemiplegic, vestibular, retinal), cluster, tension-type, trigeminal autonomic cephalalgias, new daily persistent headache, secondary headaches — red flags, CGRP therapies' },
      { id: 'ms-demyelinating', label: 'Multiple Sclerosis & Demyelinating Diseases', desc: 'RRMS, SPMS, PPMS, CIS, NMOSD (AQP4, MOG), ADEM, transverse myelitis — McDonald criteria, MRI phenotypes, disease-modifying therapies, progressive MS management' },
      { id: 'neuropathies-all', label: 'All Neuropathies', desc: 'GBS (all subtypes — AIDP, AMAN, AMSAN, MFS), CIDP, mononeuropathies (carpal tunnel, ulnar, peroneal), plexopathies, small fiber neuropathy, diabetic, alcoholic, hereditary (CMT, HSAN)' },
      { id: 'neuromuscular-junction', label: 'All Neuromuscular Junction Disorders', desc: 'Myasthenia gravis (all subtypes, AChR/MuSK/LRP4, thymic pathology), Lambert-Eaton, congenital MG, botulism (wound/foodborne/infant), organophosphate toxicity — SFEMG, treatment' },
      { id: 'myopathies-all', label: 'All Myopathies & Muscular Dystrophies', desc: 'Inflammatory myopathies (DM, PM, IBM, IMNM, antisynthetase), metabolic myopathies, mitochondrial, DMD, BMD, FSHD, LGMD all subtypes, myotonic dystrophy 1 and 2, congenital myopathies' },
      { id: 'cns-tumors-who2021', label: 'All CNS Tumors (WHO 2021)', desc: 'Glioblastoma, IDH-mutant gliomas all grades, oligodendroglioma, meningioma (all grades), pituitary tumors, acoustic neuroma, metastases, CNS lymphoma, medulloblastoma (all groups), ependymoma' },
      { id: 'spinal-cord-diseases', label: 'All Spinal Cord Diseases', desc: 'Cervical/thoracic/lumbar myelopathy, ALS, SMA (all types, nusinersen, onasemnogene, risdiplam), syringomyelia, Brown-Séquard, anterior cord, central cord syndrome, transverse myelitis' },
      { id: 'cns-infections-dis', label: 'All CNS Infections', desc: 'Bacterial meningitis (all organisms by age), viral meningitis/encephalitis (HSV, CMV, EBV, arboviruses), brain abscess, TB meningitis, cryptococcal, neurocysticercosis, cerebral malaria, prion' },
      { id: 'neurogenetic-diseases', label: 'All Neurogenetic Diseases', desc: 'Wilson\'s disease, Huntington\'s, Friedreich\'s ataxia, spinocerebellar ataxias (all SCAs), neurofibromatosis 1 and 2, tuberous sclerosis, Sturge-Weber, von Hippel-Lindau, phakomatoses' },
      { id: 'sleep-disorders-neuro', label: 'All Sleep Disorders', desc: 'Insomnia disorders, hypersomnia (idiopathic hypersomnia, Kleine-Levin), narcolepsy types 1 and 2, REM behavior disorder, sleepwalking, night terrors, circadian disorders, OSA, CSA, UARS' },
      { id: 'neurodevelopmental', label: 'All Neurodevelopmental Disorders', desc: 'Autism spectrum disorder (DSM-5 levels), ADHD (all presentations), intellectual disability (all causes), learning disorders, DCD, Tourette, Rett syndrome, Fragile X, Angelman, Prader-Willi' },
      { id: 'autonomic-disorders', label: 'All Autonomic Disorders', desc: 'POTS (all subtypes), multiple system atrophy, pure autonomic failure, familial dysautonomia, diabetic autonomic neuropathy, orthostatic hypotension, vasovagal syncope, autoimmune autonomic ganglionopathy' },

      // ── RESPIRATORY ──
      { id: 'ild-interstitial', label: 'All Interstitial Lung Diseases', desc: 'UIP/IPF, NSIP, COP, AIP (Hamman-Rich), DIP, RB-ILD, LIP, sarcoidosis, hypersensitivity pneumonitis (acute/chronic), pneumoconioses (asbestosis, silicosis, CWP, berylliosis) — HRCT patterns, PFT interpretation' },
      { id: 'pleural-airway-diseases', label: 'All Pleural & Airway Diseases', desc: 'Pleural effusion (transudate vs exudate, Light\'s criteria), pneumothorax types, mesothelioma, all airway diseases (bronchiectasis, tracheomalacia, tracheal stenosis), obstructive lung patterns' },
      { id: 'pulmonary-infections', label: 'All Pulmonary Infections', desc: 'CAP, HAP, VAP, aspiration pneumonia (all organisms), lung abscess, empyema, pulmonary TB (primary, post-primary, miliary), fungal pneumonias, viral pneumonias including COVID-19, PCP' },
      { id: 'lung-cancer-all', label: 'All Lung Cancers', desc: 'NSCLC (adenocarcinoma, SCC, LCLC), SCLC (limited/extensive), carcinoid tumors, mesothelioma — TNM staging, driver mutations (EGFR, ALK, ROS1, KRAS, BRAF, MET, RET, NTRK), immunotherapy eligibility' },
      { id: 'resp-failure-ards', label: 'Respiratory Failure & ARDS', desc: 'Type 1 (hypoxemic) and Type 2 (hypercapnic) respiratory failure, ARDS (Berlin definition all severity grades), high altitude illness, diving-related conditions, ventilator management principles' },
      { id: 'occupational-lung', label: 'All Occupational Lung Diseases', desc: 'Pneumoconioses (all types), occupational asthma (all agents), hypersensitivity pneumonitis (occupational), RADS, byssinosis, hard metal disease, flock worker\'s lung, office-related lung conditions' },

      // ── GASTROENTEROLOGY ──
      { id: 'esophageal-gastric-dis', label: 'All Esophageal & Gastric Diseases', desc: 'GERD, Barrett\'s esophagus, esophageal cancer (SCC and adenocarcinoma), achalasia, esophageal motility disorders, eosinophilic esophagitis, PUD, H. pylori, gastric cancer, gastroparesis' },
      { id: 'small-bowel-diseases', label: 'All Small Bowel Diseases', desc: 'Celiac disease, Crohn\'s disease (all phenotypes), SIBO, short bowel syndrome, intestinal obstruction, Meckel\'s diverticulum, small bowel tumors, malabsorption syndromes, tropical sprue, giardiasis' },
      { id: 'colon-diseases', label: 'All Colon Diseases', desc: 'Ulcerative colitis (all extents), Crohn\'s colitis, IBS (all subtypes), microscopic colitis, diverticular disease (diverticulosis/diverticulitis), colorectal cancer staging, polyp types, familial polyposis syndromes' },
      { id: 'liver-diseases-all', label: 'All Liver Diseases', desc: 'MASLD/MASH, cirrhosis (all causes), portal hypertension, hepatitis A–E, autoimmune hepatitis, PBC, PSC, alcoholic liver disease, genetic liver diseases (Wilson\'s, hemochromatosis, A1AT), HCC, ALF, DILI' },
      { id: 'biliary-pancreatic', label: 'All Biliary & Pancreatic Diseases', desc: 'Cholelithiasis, cholecystitis, cholangitis (acute and primary sclerosing), choledocholithiasis, biliary strictures, cholangiocarcinoma, acute/chronic pancreatitis, pancreatic cancer, cystic pancreatic lesions, exocrine pancreatic insufficiency' },
      { id: 'gi-bleeding-motility', label: 'GI Bleeding, Motility & Functional Disorders', desc: 'Upper and lower GI bleeding (all causes), obscure GI bleeding, GI motility disorders (achalasia, gastroparesis, Hirschsprung\'s), functional GI disorders (Rome IV: IBS, functional dyspepsia, functional constipation, anorectal disorders)' },

      // ── ENDOCRINOLOGY ──
      { id: 'diabetes-all-types', label: 'All Diabetes Types & Complications', desc: 'T1DM, T2DM, LADA, MODY 1–14, neonatal DM, secondary DM, steroid-induced DM — all diabetic complications (DKA, HHS, retinopathy, nephropathy, neuropathy, foot, macrovascular), ADA standards' },
      { id: 'thyroid-parathyroid-dis', label: 'All Thyroid & Parathyroid Disorders', desc: 'All hypothyroidism causes, all hyperthyroidism causes (Graves\', toxic MNG, toxic adenoma), thyroid cancers (papillary, follicular, medullary, anaplastic), thyroiditis all types, primary/secondary/tertiary hyper- and hypoparathyroidism' },
      { id: 'adrenal-pituitary-dis', label: 'All Adrenal & Pituitary Disorders', desc: 'Cushing\'s (all causes), Addison\'s disease, congenital adrenal hyperplasia, primary hyperaldosteronism, pheochromocytoma, paraganglioma; all pituitary adenomas, hypopituitarism, DI, SIADH, craniopharyngioma' },
      { id: 'metabolic-obesity-men', label: 'Metabolic, MEN Syndromes & Neuroendocrine Tumors', desc: 'Metabolic syndrome, all lipid disorders (primary and secondary), obesity-related conditions, all MEN syndromes (MEN1, MEN2A, MEN2B, MEN4), carcinoid, gastrinoma, insulinoma, glucagonoma, VIPoma, all NET classifications' },

      // ── NEPHROLOGY ──
      { id: 'aki-ckd-all', label: 'All AKI & CKD Causes & Management', desc: 'AKI (prerenal, intrinsic — ATN, AIN, GN, vascular; postrenal), CKD staging (KDIGO), CKD complications, cardiorenal syndrome, hepatorenal syndrome, CRRT vs IHD, dialysis access types' },
      { id: 'glomerular-tubular-dis', label: 'All Glomerular & Tubular Diseases', desc: 'Nephrotic syndromes (MCNS, FSGS, MN, amyloidosis), nephritic syndromes (IgAN, MPGN, ANCA vasculitis, anti-GBM, lupus nephritis), tubular disorders (RTA all types), Fanconi syndrome, interstitial nephritis' },
      { id: 'inherited-renal-dis', label: 'All Inherited Renal Disorders', desc: 'ADPKD, ARPKD, Alport syndrome, Fabry disease, cystinuria, Bartter syndrome (all variants), Gitelman syndrome, MCKD, nephronophthisis, congenital anomalies of kidney and urinary tract (CAKUT)' },
      { id: 'electrolytes-acid-base', label: 'All Electrolyte & Acid-Base Disorders', desc: 'All sodium disorders (hypo/hypernatremia — all types), potassium (hypo/hyperkalemia), calcium, magnesium, phosphate; all 8 primary acid-base disorders with Winter\'s formula, compensation rules, anion gap, delta-delta' },

      // ── HEMATOLOGY / ONCOLOGY ──
      { id: 'anemias-all', label: 'All Anemias', desc: 'Microcytic (iron deficiency, thalassemias all types, sideroblastic, ACD), macrocytic (B12, folate, hemolytic), normocytic; all hemolytic anemias (hereditary, acquired — AIHA warm/cold, microangiopathic); bone marrow failure' },
      { id: 'leukemia-lymphoma-all', label: 'All Leukemias & Lymphomas', desc: 'ALL, AML (all WHO subtypes, ELN risk), CLL (Rai/Binet), CML (phases), MPNs (PV, ET, MF, SM); Hodgkin lymphoma (all subtypes), all NHL (DLBCL, FL, MCL, MZL, BL, AITL, PTCL) — WHO 2022 classification' },
      { id: 'plasma-cell-bleeding-dis', label: 'All Plasma Cell & Bleeding Disorders', desc: 'Multiple myeloma (ISS/R-ISS), Waldenström\'s, AL amyloidosis, MGUS, SMM; hemophilia A/B (all severity), vWD (all types 1/2A/2B/2M/2N/3), platelet disorders (ITP, TTP, HUS, HIT, GT, BSS)' },
      { id: 'solid-tumors-all', label: 'All Solid Tumors by Organ', desc: 'Breast (molecular subtypes, staging, HER2, BRCA), lung, colorectal, prostate, bladder, renal, pancreatic, hepatic, gastric, esophageal, ovarian, cervical, endometrial, thyroid, head and neck cancers — TNM staging, biomarkers, treatment' },
      { id: 'oncologic-emergencies', label: 'All Oncologic Emergencies & HSCT', desc: 'SVC syndrome, tumor lysis syndrome, febrile neutropenia, hypercalcemia of malignancy, MSCC, DIC, CAR-T complications (CRS, ICANS, HLH); allogeneic and autologous HSCT — GVHD (acute/chronic), VOD, engraftment failure' },

      // ── RHEUMATOLOGY ──
      { id: 'inflammatory-arthritis', label: 'All Inflammatory Arthritides', desc: 'Rheumatoid arthritis (DAS28, treat-to-target), all spondyloarthropathies (AS/nr-axSpA, PsA, reactive arthritis, IBD-associated, undifferentiated SpA), JIA (all subtypes, ILAR classification)' },
      { id: 'connective-tissue-dis', label: 'All Connective Tissue Diseases', desc: 'SLE (SLICC/EULAR criteria, all organ manifestations), Sjögren\'s (primary/secondary), systemic sclerosis (limited/diffuse, SSc-PAH, SSc-ILD), MCTD, overlap syndromes; inflammatory myopathies (DM, PM, IBM, IMNM, antisynthetase)' },
      { id: 'vasculitides-all', label: 'All Vasculitides', desc: 'Large vessel (GCA, Takayasu), medium vessel (polyarteritis nodosa, Kawasaki disease), small vessel ANCA-associated (GPA, MPA, EGPA), small vessel immune complex (IgA vasculitis, cryoglobulinemic, urticarial vasculitis, anti-GBM)' },
      { id: 'crystal-bone-dis', label: 'Crystal Arthropathies & Bone Disease', desc: 'Gout (all stages, urate-lowering therapy, febuxostat vs allopurinol), pseudogout (CPPD disease), basic calcium phosphate arthropathy; osteoporosis (FRAX scoring, all treatments), Paget\'s disease, AVN — all sites' },

      // ── DERMATOLOGY ──
      { id: 'inflammatory-skin-dis', label: 'All Inflammatory Skin Diseases', desc: 'Psoriasis (all types: plaque, guttate, inverse, pustular, erythrodermic), atopic dermatitis, seborrheic dermatitis, contact dermatitis (allergic/irritant), lichen planus, pityriasis rosea, urticaria, angioedema, bullous pemphigoid, pemphigus' },
      { id: 'skin-infections-parasites', label: 'All Skin Infections & Infestations', desc: 'Bacterial (impetigo, cellulitis, erysipelas, MRSA, necrotizing fasciitis, SSSS), viral (HSV, VZV, molluscum, warts, orf, hand-foot-mouth), fungal (tinea all types, candidiasis, sporotrichosis), parasitic (scabies, pediculosis, cutaneous larva migrans)' },
      { id: 'skin-cancers', label: 'All Skin Cancers & Precancers', desc: 'Melanoma (all subtypes: superficial spreading, nodular, lentigo maligna, acral lentiginous) — AJCC staging, sentinel node; BCC (all subtypes), cSCC and precancers (AK, Bowen\'s), MCC, DFSP, angiosarcoma, CTCL (MF/SS), CBCL' },
      { id: 'drug-reactions-genetic-skin', label: 'Drug Reactions & Genetic Skin Disorders', desc: 'DRESS, SJS/TEN (SCORTEN), AGEP, morbilliform drug eruption, fixed drug eruption, serum sickness, phototoxic/photoallergic; genetic: all ichthyoses, epidermolysis bullosa types, keratodermas, phakomatoses, Darier\'s disease' },

      // ── PSYCHIATRY ──
      { id: 'mood-anxiety-disorders', label: 'All Mood & Anxiety Disorders', desc: 'MDD, persistent depressive disorder, PMDD, seasonal, postpartum depression; BD-I, BD-II, cyclothymia, mixed features, rapid cycling; GAD, panic disorder, social anxiety, specific phobias, separation anxiety; all OCD spectrum; all trauma/PTSD disorders' },
      { id: 'psychotic-personality-dis', label: 'All Psychotic & Personality Disorders', desc: 'Schizophrenia (all subtypes, positive/negative symptoms, prodrome), schizoaffective, schizophreniform, brief psychotic, delusional disorder, substance-induced psychosis; all 10 personality disorders (clusters A/B/C) — DSM-5-TR criteria and treatment' },
      { id: 'substance-use-dis', label: 'All Substance Use Disorders', desc: 'Alcohol (AUDIT, CIWA, withdrawal, Wernicke\'s, Korsakoff\'s, treatment — naltrexone, acamprosate, disulfiram), opioids (COWS, buprenorphine, methadone, naloxone), stimulants, cannabis, benzodiazepines, hallucinogens, tobacco, gambling disorder' },
      { id: 'psychiatric-emergencies', label: 'All Psychiatric Emergencies & Special Populations', desc: 'Suicidality (C-SSRS, safety planning), acute agitation, NMS (diagnosis, bromocriptine, dantrolene), serotonin syndrome (Hunter criteria), lithium toxicity, anticholinergic toxidrome, acute psychosis; child/adolescent, geriatric, perinatal psychiatry' },

      // ── PEDIATRICS ──
      { id: 'neonatal-diseases', label: 'All Neonatal Conditions', desc: 'RDS, TTN, MAS, PPHN, NEC (Bell staging), ROP (ICROP3), IVH (Papile grading), PVL, neonatal sepsis, neonatal jaundice (Bhutani nomogram), metabolic emergencies, TORCH infections — management and outcomes' },
      { id: 'metabolic-genetic-peds', label: 'All Inborn Errors & Pediatric Genetic Syndromes', desc: 'Amino acid disorders (PKU, MSUD, homocystinuria), OA, FAO disorders, lysosomal storage diseases, peroxisomal diseases, glycogen storage diseases, mitochondrial diseases, urea cycle disorders; Down, Turner, Klinefelter, Williams, DiGeorge, Angelman syndromes' },
      { id: 'pediatric-systemic-dis', label: 'All Pediatric Systemic Diseases by Organ', desc: 'Pediatric respiratory (croup, bronchiolitis, cystic fibrosis), cardiac (congenital heart disease), GI (intussusception, pyloric stenosis, Hirschsprung\'s), kidney (nephrotic, HSP, HUS), hematology (SCD, thalassemia, ITP), oncology (ALL, Wilm\'s, neuroblastoma, medulloblastoma)' },
      { id: 'pediatric-dev-behavioral', label: 'Pediatric Developmental & Behavioral Disorders', desc: 'Autism spectrum (all severity levels, intervention strategies), ADHD (presentations, stimulant vs non-stimulant treatment), intellectual disability, learning disorders, developmental coordination disorder, Tourette, Rett syndrome, selective mutism, eating disorders in youth' },

      // ── OB/GYN ──
      { id: 'obstetric-complications', label: 'All Obstetric Complications', desc: 'Early pregnancy (ectopic all locations, miscarriage types, molar pregnancy, hyperemesis gravidarum), antepartum (preeclampsia/eclampsia/HELLP, GDM, placenta previa, abruption, PPROM, IUGR, oligohydramnios, polyhydramnios, multiple gestation), intrapartum and postpartum complications' },
      { id: 'gynecologic-conditions', label: 'All Gynecologic Conditions', desc: 'All menstrual disorders (amenorrhea, AUB-PALM-COEIN, dysmenorrhea, PMS), all ovarian conditions (PCOS, ovarian cysts, POI), uterine conditions (fibroids, adenomyosis, endometriosis, Asherman\'s), cervical conditions, vulvovaginal conditions, pelvic floor disorders, all contraception methods and complications' },
      { id: 'gynecologic-cancers', label: 'All Gynecologic Cancers & Reproductive Endocrinology', desc: 'Cervical cancer (FIGO staging, HPV association, treatment), endometrial cancer (all histotypes, molecular classification), ovarian cancer (all subtypes), vulvar/vaginal cancer, GTD; infertility (male/female causes, all ART procedures), menopause management, HRT evidence' },

      // ── OPHTHALMOLOGY ──
      { id: 'external-corneal-glaucoma', label: 'All External Eye, Cornea & Glaucoma Diseases', desc: 'Blepharitis, chalazion, conjunctivitis (bacterial/viral/allergic), keratitis (HSV, fungal, Acanthamoeba, contact lens), corneal dystrophies, keratoconus, pterygium, scleritis, uveitis; POAG, PACG, normal tension, secondary glaucoma (all types)' },
      { id: 'retinal-diseases-all', label: 'All Retinal Diseases', desc: 'Diabetic retinopathy (ETDRS staging), AMD (drusen, atrophic, neovascular), CRVO, BRVO, CRAO, sickle cell retinopathy, retinal detachment (rhegmatogenous/tractional/exudative), all retinal dystrophies (RP, Stargardt, Best), macular hole' },
      { id: 'neuro-orbital-ophthal', label: 'All Neuro-Ophthalmic & Orbital Diseases', desc: 'Optic neuritis, NAION, papilledema from raised ICP, Horner\'s syndrome, all CN III/IV/VI palsies, nystagmus types, thyroid eye disease, orbital cellulitis, orbital tumors (capillary hemangioma, rhabdomyosarcoma, lymphoma), ocular manifestations of systemic diseases' },

      // ── ENT / HEAD & NECK ──
      { id: 'ear-vestibular-disorders', label: 'All Ear & Vestibular Disorders', desc: 'Otitis externa (including malignant), AOM, OME, chronic suppurative OM, cholesteatoma, otosclerosis; all sensorineural and conductive hearing loss causes; vestibular neuritis, Meniere\'s disease, BPPV all canal variants, labyrinthitis, acoustic neuroma' },
      { id: 'nasal-oral-pharyngeal', label: 'All Nasal, Oral, Pharyngeal & Laryngeal Diseases', desc: 'All rhinitis types, CRS with/without polyps, inverted papilloma, nasopharyngeal carcinoma; aphthous ulcers, leukoplakia, erythroplakia, oral cancer; tonsillitis, peritonsillar abscess, Ludwig\'s angina, oropharyngeal cancer; vocal cord polyps, nodules, cancer, laryngomalacia, epiglottitis' },
      { id: 'head-neck-cancers', label: 'All Head & Neck Cancers', desc: 'Oral cavity SCC, oropharyngeal (HPV+ vs HPV-), hypopharyngeal, laryngeal, nasopharyngeal, nasal/paranasal sinus cancers, salivary gland tumors (all histotypes: pleomorphic adenoma, Warthin, MEC, ACC), thyroid cancer (all subtypes), neck dissection levels, staging, treatment' },

      // ── ORTHOPEDICS ──
      { id: 'fractures-dislocations', label: 'All Fractures & Dislocations', desc: 'All fracture classifications by bone (AO/OTA, Salter-Harris for pediatric), dislocations by joint (shoulder, elbow, hip, knee, ankle), ligament injuries (ACL/PCL/MCL/LCL), tendon injuries (Achilles, rotator cuff, quadriceps), ORIF vs conservative indications' },
      { id: 'spine-soft-tissue', label: 'All Spine & Soft Tissue Disorders', desc: 'Disc herniation (all levels), cervical/lumbar spondylosis, spinal stenosis, spondylolisthesis (Meyerding grades), ankylosing spondylitis from orthopedic perspective; compartment syndrome, overuse injuries by sport, bursitis, tendinopathy, carpal/cubital/tarsal tunnel syndromes' },
      { id: 'bone-tumors-pediatric-ortho', label: 'All Bone Tumors & Pediatric Orthopedics', desc: 'Benign bone tumors (osteochondroma, giant cell tumor, enchondroma, ABC, UBC, osteoid osteoma), malignant (osteosarcoma, Ewing\'s, chondrosarcoma) — Enneking staging; pediatric ortho (DDH, Perthes, SCFE, club foot, scoliosis, osteogenesis imperfecta)' },

      // ── UROLOGY ──
      { id: 'kidney-bladder-prostate', label: 'All Kidney, Bladder & Prostate Conditions', desc: 'Urolithiasis (all stone types, ESWL vs URS vs PCNL), all bladder cancers (urothelial — NMIBC/MIBC, treatment pathways), all neurogenic bladder types, BPH (IPSS, medical/surgical management), prostatitis (all NIH categories), prostate cancer (Gleason/Grade Group, active surveillance, treatments)' },
      { id: 'urologic-oncology', label: 'All Urologic Oncology', desc: 'Renal cell carcinoma (clear cell, papillary, chromophobe, oncocytoma — IMDC risk, targeted therapy/immunotherapy), urothelial cancers (upper tract and bladder), penile cancer (Jackson staging), testicular cancer (non-seminomatous vs seminoma, IGCCCG risk, retroperitoneal LND)' },
      { id: 'male-female-urology', label: 'Male & Female Urology', desc: 'Erectile dysfunction (organic vs psychogenic, PDE5 inhibitors, ICI, implants), male hypogonadism, male infertility (azoospermia work-up, varicocele), epididymo-orchitis; female urinary incontinence (stress, urgency, mixed, overflow), pelvic organ prolapse (POP-Q staging), interstitial cystitis/bladder pain syndrome, urodynamics' },
    ]
  },

  // ──────────────── MEDICAL SPECIALTIES & SUBSPECIALTIES (Section 3) ────────────────
  {
    id: 'specialties-db', label: 'All Medical Specialties', icon: Stethoscope, color: '#0f766e',
    subcategories: [

      // ── INTERNAL MEDICINE SUBSPECIALTIES ──
      { id: 'allergy-immunology', label: 'Allergy & Immunology', desc: 'All allergic diseases (allergic rhinitis, asthma, food allergy, drug allergy, venom allergy), all primary and secondary immunodeficiencies, all hypersensitivity reactions (Type I–IV), allergen immunotherapy (SCIT/SLIT), biologics, anaphylaxis management — epinephrine protocols' },
      { id: 'clinical-pharmacology', label: 'Clinical Pharmacology & PK/PD', desc: 'All PK/PD equations with worked examples: PK/PD parameters (Vd, CL, half-life, AUC, Cmax), bioavailability, first-pass effect, hepatic clearance, renal clearance, therapeutic drug monitoring (vancomycin, aminoglycosides, lithium, digoxin, phenytoin, tacrolimus, cyclosporine, warfarin)' },
      { id: 'toxicology-all', label: 'Clinical Toxicology — All Poisonings', desc: 'All toxidromes (cholinergic, anticholinergic, sympathomimetic, opioid, sedative-hypnotic, serotonin, NMS), all drug overdoses (acetaminophen — NAC protocol, TCAs, salicylates, opioids, benzodiazepines, digoxin, iron, lithium), all envenomations, heavy metals, all antidotes reference table' },
      { id: 'palliative-medicine', label: 'Palliative Medicine & End-of-Life Care', desc: 'WHO analgesic ladder (Steps 1–3), complete opioid conversion table (morphine equivalents), symptom management (pain, dyspnea, nausea, delirium, secretions), palliative sedation, advance directives/POLST, prognostication, hospice eligibility, family communication' },
      { id: 'geriatrics-all', label: 'Geriatrics — All Geriatric Syndromes', desc: 'Frailty (Fried criteria, CFS), falls (risk factors, prevention, assessment), delirium (CAM, hyperactive/hypoactive/mixed, management), dementia care, polypharmacy, Beers Criteria 2023 full list, STOPP/START criteria, pressure injuries (NPUAP staging), urinary incontinence, malnutrition (MNA), elder abuse' },
      { id: 'travel-medicine', label: 'Travel Medicine', desc: 'Pre-travel vaccine schedule by destination (yellow fever, typhoid, JE, rabies, meningococcal, cholera, hepatitis A/B), malaria prophylaxis by region (chloroquine, atovaquone/proguanil, doxycycline, mefloquine), traveler\'s diarrhea, altitude sickness (AMS/HACE/HAPE), jet lag, heat illness, diving medicine, DEET safety' },
      { id: 'occupational-medicine', label: 'Occupational Medicine', desc: 'All occupational lung diseases (pneumoconioses, occupational asthma, RADS, HP), all occupational skin diseases (contact dermatitis, occupational acne, chrome ulcers), all occupational cancers (mesothelioma, bladder, sinonasal, angiosarcoma), all musculoskeletal occupational disorders, fitness-for-duty assessments, OSHA standards' },
      { id: 'sports-medicine', label: 'Sports Medicine', desc: 'All sports injuries by region (shoulder, knee, ankle, spine), concussion management (SCAT5, return-to-play protocol, CTE), overuse injuries (stress fractures, tendinopathies), performance optimization, sports cardiology (ECG criteria, sudden cardiac death prevention), WADA 2024 prohibited substances full list' },
      { id: 'sleep-medicine', label: 'Sleep Medicine — Complete Reference', desc: 'All sleep disorders (ICSD-3: insomnia, hypersomnia, parasomnias, circadian disorders, sleep-related movement disorders), polysomnography interpretation (AHI, arousal index, all sleep stages), CPAP/BiPAP/ASV settings, OSA treatment algorithm, all sleep medications (dosing, mechanism, tolerance, dependence)' },
      { id: 'pain-medicine', label: 'Pain Medicine — Complete Reference', desc: 'All pain types (nociceptive, neuropathic, nociplastic, mixed), pain assessment tools (NRS, VAS, FACS, BPI, Brief Fatigue Inventory), all analgesic classes (NSAIDs, COX-2, opioids, SNRIs, gabapentinoids, TCAs, ketamine), interventional procedures (epidurals, nerve blocks, neuromodulation), opioid prescribing guidelines (CDC 2022 revised)' },
      { id: 'pmr-rehabilitation', label: 'Physical Medicine & Rehabilitation', desc: 'All neurological rehab (post-stroke, TBI, SCI — ASIA classification, autonomic dysreflexia), all orthopedic rehab (joint replacement, fracture, amputation — prosthetics), cardiac rehab (all phases), pulmonary rehab (exercise prescription, dyspnea management), vocational rehab, assistive technology' },
      { id: 'addiction-medicine', label: 'Addiction Medicine', desc: 'All substance use disorders (DSM-5-TR criteria), all withdrawal syndromes (AWS — CIWA, opioid — COWS, benzodiazepines, stimulants), all MAT protocols (buprenorphine/naloxone — X-waiver, methadone OBOT, naltrexone IM), harm reduction strategies, SBIRT framework, all addiction medications with dosing' },

      // ── SURGERY SPECIALTIES ──
      { id: 'general-surgery', label: 'General Surgery — Complete Reference', desc: 'All abdominal emergencies (appendicitis — Alvarado, cholecystitis — Tokyo guidelines, bowel obstruction, perforation, mesenteric ischemia), all laparoscopic procedures, all hernia types (inguinal — Nyhus/Gilbert classification, femoral, umbilical, incisional, parastomal), all breast surgery, all thyroid/parathyroid surgery, trauma surgery, surgical nutrition' },
      { id: 'cardiothoracic-surgery', label: 'Cardiothoracic Surgery', desc: 'All cardiac procedures (CABG all grafts, valve repair/replacement, TAVR, TEER, LVAD, total artificial heart, heart transplant), all thoracic procedures (lobectomy, pneumonectomy, VATS, esophagectomy, thymectomy), ECMO (VA and VV), IABP, all MCS devices, lung transplant, heart-lung transplant' },
      { id: 'vascular-surgery', label: 'Vascular Surgery', desc: 'All open and endovascular procedures (EVAR, TEVAR, carotid endarterectomy vs stenting, fem-pop bypass, fem-distal bypass, mesenteric revascularization), AV fistula and graft creation, AAA all approaches, venous interventions (phlebectomy, EVLA, sclerotherapy, venoplasty), hemodialysis access complications' },
      { id: 'neurosurgery', label: 'Neurosurgery', desc: 'All cranial procedures (craniotomy, craniectomy, EVD, VP shunt, stereotactic biopsy, endoscopic procedures), all spinal procedures (ACDF, PCDF, lumbar fusion, laminectomy, discectomy), all neuro-oncology surgery (glioma resection principles, awake craniotomy, fluorescence-guided surgery), DBS targets by disease, epilepsy surgery (lesionectomy, temporal lobectomy, corpus callosotomy, RNS, VNS)' },
      { id: 'plastic-surgery', label: 'Plastic Surgery & Burns', desc: 'All reconstructive procedures (wound reconstruction ladder — primary, secondary, skin graft, local flap, regional flap, free flap), all flap types (TRAM, DIEP, latissimus dorsi, ALT, fibular free flap), all cosmet procedures, all burns management (Lund-Browder chart, Parkland formula, escharotomy, skin substitutes, Integra), all hand surgery (tendon repairs, Dupuytren\'s, replantation)' },
      { id: 'transplant-surgery', label: 'Transplant Surgery — All Organs', desc: 'All organ transplants (deceased and living donor): kidney (KDRI, KDPI), liver (MELD, split liver), heart (HCT, pVAD bridge), lung (LAS), pancreas (SPK, PAK), intestine, multivisceral; all rejection types (hyperacute, acute cellular, acute antibody-mediated, chronic); all immunosuppression protocols (triple therapy, CNI monitoring, DSA)' },
      { id: 'pediatric-surgery', label: 'Pediatric Surgery', desc: 'All congenital anomalies (CDH — ECMO bridge, EA/TEF all types, gastroschisis vs omphalocele, duodenal/jejunal atresia, malrotation, Meckel\'s, Hirschsprung\'s, anorectal malformations — Krickenbeck classification, biliary atresia, choledochal cyst, all neonatal masses), all pediatric surgical emergencies' },
      { id: 'surgical-oncology', label: 'Surgical Oncology', desc: 'Oncologic resection principles (R0/R1/R2, adequate margins by cancer type), all lymph node dissection techniques, sentinel lymph node biopsy (all cancer types), cytoreductive surgery (CRS+HIPEC for peritoneal malignancies), all surgical staging procedures, reconstructive oncology, immediate vs delayed reconstruction, neoadjuvant vs adjuvant surgery' },
      { id: 'trauma-surgery', label: 'Trauma Surgery — ATLS', desc: 'All trauma primary/secondary survey (ATLS 10th edition), ABCDE approach, all FAST/EFAST findings, damage control surgery (DCS1/2/3), damage control resuscitation (MTP 1:1:1), all trauma scoring systems (ISS, TRISS, RTS, GCS, NISS), all massive transfusion protocols (MTP activation criteria), all thoracic/abdominal/pelvic injuries management' },
      { id: 'bariatric-surgery', label: 'Bariatric Surgery', desc: 'All bariatric procedures (RYGB — mechanism, LSG, LAGB — complications, BPD-DS, SADI-S, endoscopic procedures), eligibility criteria (BMI cutoffs, comorbidities), operative weight loss mechanism for each procedure, nutritional deficiencies by procedure (iron, B12, vitamin D, thiamine, zinc, copper), dumping syndrome, short-term and long-term complications, weight regain management' },
    ]
  },

  // ──────────────── DIAGNOSTIC TOOLS & LABS (Section 4) ────────────────
  {
    id: 'diagnostics-labs', label: 'Diagnostics & Labs', icon: FlaskConical, color: '#0369a1',
    subcategories: [
      { id: 'lab-reference-complete', label: 'Complete Lab Reference', desc: 'All CBC components (WBC with differential, RBC indices, platelets), BMP/CMP all electrolytes and metabolic markers, LFTs, coagulation panel (PT/INR/aPTT/TT/fibrinogen/D-dimer), thyroid panel, inflammatory markers (CRP, ESR, ferritin, procalcitonin), cardiac markers (troponin I/T, BNP, NT-proBNP, CK-MB), tumor markers — all normal ranges by age and sex' },
      { id: 'body-fluids-labs', label: 'Body Fluids & Specialized Labs', desc: 'CSF analysis (all meningitis patterns: bacterial/viral/fungal/TB/malignant), synovial fluid analysis (all arthritis types: gout/pseudogout/septic/inflammatory/OA), pleural fluid (Light\'s criteria, all exudate causes), peritoneal fluid (SAAG calculation, SBP diagnosis), pericardial fluid, urine studies (UA, ACR, urine electrolytes, urine osmolality, FENa, FEUrea), ABG all patterns' },
      { id: 'hormonal-assays', label: 'All Hormonal Assays & Endocrine Labs', desc: 'Thyroid: TSH, free T4, free T3, TPO-Ab, TRAb, thyroglobulin; adrenal: cortisol (AM/PM, 1mg DST, 8mg DST, CRH stim), ACTH, aldosterone/renin ratio, 24h urine metanephrines, DHEA-S; pituitary: prolactin, GH, IGF-1, LH/FSH, GnRH stim; gonadal: testosterone, estradiol, progesterone, AMH — all interpretation guides' },
      { id: 'diagnostic-imaging-all', label: 'All Diagnostic Imaging', desc: 'X-ray findings by disease (chest X-ray patterns: all consolidation types, pneumothorax, effusion, cardiomegaly, interstitial patterns; abdominal X-ray signs; skeletal X-ray findings); CT chest/abdomen/pelvis/head findings by disease; MRI brain/spine/MSK findings; ultrasound by organ; nuclear medicine (V/Q, bone scan, thyroid scan, MIBG); PET-CT; radiation dose comparison; contrast safety (iodinated and gadolinium); imaging in pregnancy' },
      { id: 'ecg-complete', label: 'All Electrocardiography (ECG)', desc: 'Systematic ECG reading framework (rate, rhythm, axis, intervals, morphology, ischemia); all arrhythmia ECG patterns (AF, AFL, SVT types, WPW, VT, VF, heart blocks all degrees, BBBs); all STEMI patterns by territory (LAD, RCA, LCx, posterior, right-sided leads); all electrolyte ECG changes (hypo/hyperkalemia, hypo/hypercalcemia, hypomagnesemia); all drug effects on ECG (QTc prolongation, digoxin, TCA); Brugada/LQT/ARVC ECG criteria' },
      { id: 'pulmonary-function-tests', label: 'All Pulmonary Function Tests', desc: 'Spirometry interpretation (obstructive vs restrictive vs mixed — all diseases); all key PFT values (FEV1, FVC, FEV1/FVC, TLC, RV, FRC, ERV, IRV, IC, VC); DLCO significance (decreased in emphysema, ILD, pulmonary vascular disease; increased in asthma, polycythemia, intrapulmonary hemorrhage); bronchodilator response criteria; methacholine challenge; cardiopulmonary exercise test (CPET) interpretation; PSG all sleep stages and indices' },
      { id: 'pathology-histology', label: 'All Pathology & Histology', desc: 'All core biopsy and cytology findings by organ system; all cancer histological types (adenocarcinoma, SCC, TCC, RCC subtypes, sarcomas all histotypes, lymphoma histology, leukemia morphology); all special stains (PAS, Congo red, GMS, Ziehl-Neelsen, Giemsa, trichrome, reticulin); all immunohistochemistry panels by cancer type (ER/PR/HER2, TTF-1, CDX2, PSA, synaptophysin, chromogranin); flow cytometry panels for hematologic malignancies; Bethesda/Gleason/Fuhrman/Elston-Ellis grading systems' },
      { id: 'microbiology-techniques', label: 'All Microbiology Techniques', desc: 'All culture media and their organisms (blood agar, chocolate agar, MacConkey, BCYE, Thayer-Martin, Löwenstein-Jensen, Sabouraud); all staining techniques (Gram stain all morphologies, acid-fast, India ink, KOH prep, Giemsa, Tzanck, DFA); antimicrobial sensitivity testing (Kirby-Bauer, MIC, EUCAST vs CLSI breakpoints, E-test); all molecular methods (PCR, multiplex PCR, WGS, NAAT for STIs); all serology interpretation (IgM vs IgG, window period, false positives); all rapid tests and POCT; MALDI-TOF identification' },
      { id: 'poct-bedside-testing', label: 'All Point-of-Care Testing', desc: 'Bedside POCT devices: capillary blood glucose, urinalysis dipstick (all parameters, false positive/negatives), urine pregnancy test (hCG sensitivity), rapid strep A, rapid influenza, rapid RSV, rapid COVID-19 (antigen vs NAAT), rapid HIV, rapid hepatitis B/C, rapid malaria RDTs (all species), rapid STEMI cardiac troponin, BNP-POC, ABG machines (all analytes), coagulation POC (INR, ACT, thromboelastography — TEG/ROTEM interpretation)' },
      { id: 'genetic-testing-pgx', label: 'Genetic Testing & Pharmacogenomics', desc: 'All genetic testing types (karyotype, FISH, chromosomal microarray, targeted gene sequencing, gene panel, whole exome sequencing, whole genome sequencing, cell-free DNA/NIPT); all chromosomal disorders with karyotype (trisomies, monosomies, translocations, deletions, duplications); pharmacogenomics: CYP2D6 (codeine, tamoxifen, antidepressants), CYP2C19 (clopidogrel, PPIs, SSRIs), CYP2C9 (warfarin, NSAIDs, phenytoin), TPMT (azathioprine, 6-MP), DPYD (5-FU, capecitabine), UGT1A1 (irinotecan), HLA-B*5701 (abacavir), HLA-B*1502 (carbamazepine), G6PD (primaquine, rasburicase)' },
      { id: 'scoring-systems-all', label: 'All Clinical Scoring Systems & Scales', desc: 'Cardiology: CHADS₂-VASc, HAS-BLED, GRACE, TIMI (UA/NSTEMI and STEMI), HEART, Framingham, ASCVD, NYHA, ACC/AHA HF staging; Critical care: APACHE II/III/IV, SOFA, qSOFA, NEWS2, MEWS, SAPS; Neurology: GCS, NIHSS, mRS, Barthel, ABCD2, Hunt-Hess, WFNS, ICH score; Pulmonary: CURB-65, PSI/PORT, Wells DVT/PE, Geneva; Psychiatry: PHQ-9, GAD-7, CAGE, AUDIT-C, CIWA-Ar, COWS, Columbia Suicide Severity; GI: MELD-Na, Child-Pugh, ABIC, Rockall, Blatchford; Renal: Cockcroft-Gault, CKD-EPI, MDRD, FIB-4; Nutrition: NRS-2002, MUST, SGA, MNA; Scoring in OB: Bishop, APGAR, Silverman-Anderson, Ballard; Surgical/Anesthesia: ASA, Mallampati, Caprini; Wound: Braden, Norton, Waterlow; all cancer staging (TNM all cancers); all pain scales (NRS, FACS, Abbey, BPI); all functional scales' },
    ]
  },

  // ──────────────── ALL PHARMACY PRACTICE DOMAINS (Section 5) ────────────────
  {
    id: 'pharmacy-practice', label: 'Pharmacy Practice Domains', icon: Pill, color: '#7c3aed',
    subcategories: [
      { id: 'pharmacokinetics-complete', label: 'Complete Pharmacokinetics (PK)', desc: 'All PK equations with worked examples: zero-order vs first-order kinetics, linear vs nonlinear; one/two/three-compartment models; all PK parameters (Vd, CL, t½, AUC, Cmax, Cmin, Css); all bioavailability calculations (F, absolute vs relative BA); protein binding clinical significance; all loading dose, maintenance dose, infusion rate, and Css calculations; population PK; TDM interpretation (vancomycin AUC/MIC, aminoglycosides, phenytoin, lithium, digoxin, cyclosporine, tacrolimus)' },
      { id: 'pharmacodynamics-complete', label: 'Complete Pharmacodynamics (PD)', desc: 'All receptor types (GPCRs, ionotropic, tyrosine kinase, nuclear receptors) with full signaling pathways; all dose-response curves (Emax, EC50, Hill equation); full agonist vs partial agonist vs antagonist vs inverse agonist; competitive vs non-competitive antagonism; allosteric modulators; all tolerance mechanisms (receptor downregulation, desensitization, tachyphylaxis); therapeutic index/therapeutic window; all synergy and antagonism types (Loewe additivity, Bliss independence, Chou-Talalay)' },
      { id: 'compounding-usp', label: 'Complete Compounding — USP 795, 797, 800', desc: 'USP 797 sterile compounding: all CSP risk levels (low, medium, high — with beyond-use dating), all ISO cleanroom classifications (ISO 5/7/8), all primary engineering controls (BSC, CAI, CACI, LAFW), all garbing requirements, all environmental monitoring, all sterility testing; USP 795 non-sterile: all dosage form preparation, all beyond-use dating, all stability testing; USP 800 hazardous drugs: all NIOSH classification, all engineering controls, all PPE, all spill management' },
      { id: 'dispensing-rx-processing', label: 'Complete Dispensing & Prescription Processing', desc: 'All Rx components (valid prescription elements, forgery detection), all Latin abbreviations and sig codes, all days supply calculations (insulin, inhalers, eye drops, creams — with worked examples), all quantity calculations, all refill regulations by DEA schedule (C-II through C-V), all e-prescribing requirements (EPCS), all PDMP requirements by state, all DUR (prospective, retrospective, concurrent), all pharmacy dispensing workflows, medication error prevention' },
      { id: 'patient-counseling', label: 'Complete Patient Counseling', desc: 'Counseling scripts for every major drug class (what to say, how to take, storage, common side effects, serious adverse effects, monitoring parameters, drug interactions, what to avoid, pregnancy/lactation safety, when to call provider); all written medication information standards; all REMS programs complete list (iPLEDGE, THALOMID REMS, TIRF REMS, clozapine REMS, opioid REMS, ADDYI REMS, MAKENA REMS) — drug, risk, REMS requirement, counseling; motivational interviewing in pharmacy' },
      { id: 'drug-information-ebm', label: 'Complete Drug Information & Evidence-Based Medicine', desc: 'All primary literature study designs (RCT, cohort, case-control, cross-sectional, case series, systematic review, meta-analysis — hierarchy of evidence); all bias types (selection, performance, detection, attrition, reporting); all statistical concepts (NNT, NNH, ARR, RRR, OR, RR, HR, CI, p-value, type I/II error, power, sensitivity/specificity, PPV/NPV, LR+/LR-); all drug information databases (Lexicomp, Micromedex, Clinical Pharmacology, PubMed, UpToDate, Cochrane, DailyMed); all EBM frameworks (GRADE, PICO, critical appraisal tools)' },
      { id: 'pharmacy-law-federal', label: 'Complete Pharmacy Law — Federal', desc: 'All major pharmacy acts: Durham-Humphrey Amendment (Rx vs OTC), Kefauver-Harris Amendment, PPPA (childproof packaging), HIPAA (all 18 PHI identifiers, permitted disclosures, HITECH), OBRA-90 (drug counseling mandate), Drug Quality and Security Act (DSCSA track and trace), SUPPORT Act (opioid prescribing), Ryan Haight Act (telemedicine prescribing), Combat Methamphetamine Epidemic Act (pseudoephedrine limits); all DEA regulations (Schedules I–V, DEA Form 222, 106, 107, 222a); all FDA regulations (NDA, ANDA, BLA, OTC monographs); all Medicare Part D MTM requirements' },
      { id: 'pharmacy-management', label: 'Complete Pharmacy Management & Pharmacoeconomics', desc: 'MTM all components: CMR (comprehensive medication review) vs TMR (targeted medication review) — billing codes (CPT 99605/99606/99607), documentation standards; all quality metrics: PDC (proportion of days covered) calculation, MPR (medication possession ratio), all CMS Star Rating domains and measures; pharmacoeconomics: CEA (cost-effectiveness analysis), CBA (cost-benefit), CUA (cost-utility — QALYs/DALYs), CMA (cost-minimization); pharmacoepidemiology methods; pharmacy informatics (EHR, CPOE, CDS systems); medication reconciliation all settings' },
      { id: 'sterile-products-iv', label: 'Complete Sterile Products & IV Therapy', desc: 'All IV fluids: isotonic (NS, LR, D5W), hypotonic (0.45% NS, D5W at rest), hypertonic (3% NS, D10W, D50W, concentrated electrolytes) — tonicity, osmolarity, and clinical use; all TPN components and calculations (dextrose, amino acids, lipid, electrolytes, vitamins, trace elements — kcal/g calculations, GIR, protein goals); all electrolyte replacement protocols IV (potassium, magnesium, phosphate, calcium); all IV push drugs with rates; all continuous infusion titration protocols (vasopressors, insulin, heparin, nicardipine); all IV compatibility references (Y-site, admixture); all aseptic technique requirements' },
      { id: 'geriatric-pharmacy', label: 'Complete Geriatric Pharmacy', desc: 'Beers Criteria 2023 complete list (all drugs to avoid or use with caution in ≥65 — with rationale, severity, quality of evidence); STOPP/START criteria version 3 full list; all polypharmacy assessment tools (Medication Appropriateness Index, ARMOR tool); all renal dosing adjustments for common drugs in CrCl <60, <30, <15 mL/min; all hepatic dosing adjustments (Child-Pugh A/B/C); all medications causing cognitive impairment; all fall-risk medications; all anticholinergic burden scales (ARS, ACB, DBI) and high-risk drugs' },
      { id: 'pediatric-pharmacy', label: 'Complete Pediatric Pharmacy', desc: 'Weight-based dosing reference for all common pediatric conditions (loading doses, maintenance doses, max doses by age/weight); neonatal formulary (all drugs with gestational age and postnatal age dosing adjustments, renal/hepatic maturation effects); all off-label pediatric drug use (evidence levels); all excipients to avoid in neonates and infants (benzyl alcohol, propylene glycol, polysorbate 80); all PK differences by age (Vd changes, protein binding, CYP enzyme ontogeny); all pediatric compounding guidelines' },
      { id: 'oncology-pharmacy', label: 'Complete Oncology Pharmacy', desc: 'All chemotherapy preparation safety (USP 800 hazardous drug handling, BSC/CACI, PPE tiers, spill management, closed system transfer devices); all BSA calculation methods (Mosteller, DuBois); all AUC-based dosing (carboplatin Calvert formula, busulfan therapeutic drug monitoring); all dose capping controversies by drug; complete emetogenicity classification (HEC/MEC/LEC/minimal — all agents); all antiemetic protocols (ASCO/NCCN guidelines); all growth factor protocols (pegfilgrastim, filgrastim — primary/secondary prophylaxis criteria); mucositis protocols, oral chemotherapy counseling, extravasation management by vesicant vs irritant' },
    ]
  },
  {
    id: 'nursing-complete', label: 'Complete Nursing Reference', icon: Heart, color: '#be185d',
    subcategories: [
      { id: 'medsurg-nursing', label: 'Complete Med-Surg Nursing', desc: 'All conditions by organ system with full nursing process: nursing assessment (subjective/objective data, focused physical exam); all NANDA-I nursing diagnoses with defining characteristics and related factors; all nursing interventions (independent, dependent, collaborative) with rationales; all expected outcomes (NOC) and evaluation criteria; patient education for every major medical-surgical condition; all IV therapy nursing (line care, infusion monitoring, complication management); all wound care nursing (staging, dressing selection, debridement, negative pressure wound therapy); all ostomy nursing; all drain management; all urinary catheter care; post-surgical nursing by procedure type' },
      { id: 'critical-care-nursing', label: 'Complete Critical Care Nursing', desc: 'All hemodynamic monitoring parameters (arterial lines, CVP, PAC — PCWP/CO/CI/SVR/PVR/SvO2); all waveform interpretation; all vasopressor protocols (norepinephrine, epinephrine, vasopressin, phenylephrine, dopamine — dosing tiers, receptor selectivity, titration endpoints); all inotrope protocols (dobutamine, milrinone); complete mechanical ventilation nursing (all modes — AC/VC, AC/PC, PRVC, SIMV, PSV, APRV, HFOV; all settings — FiO2, PEEP, tidal volume, RR, I:E ratio; all weaning protocols; spontaneous awakening trials/spontaneous breathing trials — SAT/SBT bundle; all extubation criteria); RASS sedation scale (all levels −5 to +4 with clinical descriptors); CAM-ICU delirium assessment (all 4 features, RASS precondition, positive criteria); all sedation protocols (propofol, midazolam, dexmedetomidine, ketamine — ICU use); all ICU analgesia (fentanyl, morphine, hydromorphone, remifentanil — continuous vs PRN); all ICU procedures nursing (central line insertion assist, arterial line, bronchoscopy, CRRT, plasmapheresis, IABP, ECMO); rapid response criteria (MEWS/NEWS2, all early warning signs); complete ACLS nursing role; all code blue team nursing responsibilities; SEPSIS-3 nursing recognition (qSOFA, SOFA, Sepsis Bundle Hour-1)' },
      { id: 'pediatric-nursing', label: 'Complete Pediatric Nursing', desc: 'All growth and development milestones (Erikson, Piaget, Kohlberg — all stages with nursing implications); all pediatric vital sign normals by age group (neonate, infant, toddler, preschool, school-age, adolescent); all pediatric assessment tools (PEWS — Pediatric Early Warning Score, FLACC pain scale, Wong-Baker FACES, Oucher, CRIES, NIPS); all pediatric physical assessment (fontanelles, sutures, head circumference, developmental reflexes); all pediatric IV considerations (weight-based dosing calculations, maximum volume guidelines, osmolarity limits, scalp vein IVs); all pediatric dosing calculations (mg/kg and BSA methods, safe dose range verification); all pediatric fluid management (maintenance — Holliday-Segar, deficit, replacement); all child abuse assessment (physical indicators, behavioral indicators, Shaken Baby syndrome, mandatory reporting protocols); all immunization schedules (CDC ACIP — birth through 18 years); all pediatric respiratory emergencies (croup nursing, epiglottitis, RSV bronchiolitis, asthma exacerbation, foreign body aspiration); neonatal resuscitation nursing; all pediatric sepsis criteria (SIRS vs Sepsis-3); all congenital heart disease nursing implications; pediatric medication safety — 6 rights, smart pump use, high-alert meds' },
      { id: 'maternal-newborn-nursing', label: 'Complete Maternal-Newborn Nursing', desc: 'Complete antepartum nursing (all prenatal visit content, all prenatal labs and screening, all pregnancy discomforts and nursing interventions, all high-risk pregnancy conditions — gestational diabetes, preeclampsia/eclampsia/HELLP, placenta previa/abruption, preterm labor, PROM, multiple gestation); all fetal assessment nursing (NST interpretation, BPP scoring, contraction stress test, kick counts); all intrapartum nursing (all stages of labor nursing care, Leopold\'s maneuvers, all fetal heart rate monitoring — baseline, variability, all accelerations and decelerations NICHD classification, Category I/II/III); all labor support nursing (positioning, breathing techniques, hydrotherapy); all induction/augmentation nursing (oxytocin protocols, cervical ripening agents, amniotomy); all labor analgesia nursing (epidural care, spinal block, IV opioids); all complications of labor nursing (shoulder dystocia HELPERR, cord prolapse, uterine rupture, amniotic fluid embolism, fetal distress interventions); complete postpartum nursing (uterine involution assessment — BUBBLE-HE, lochia progression, perineal care, breastfeeding support — LATCH score, all breastfeeding problems, postpartum depression Edinburgh scale, postpartum hemorrhage nursing including uterotonic drug administration); complete newborn assessment (APGAR scoring 1/5 minutes, gestational age assessment — Ballard score, all newborn physical assessment, all newborn reflexes, newborn metabolic screening, hearing screening, all newborn thermoregulation)' },
      { id: 'mental-health-nursing', label: 'Complete Mental Health Nursing', desc: 'All therapeutic communication techniques (active listening, open-ended questions, reflection, clarification, confrontation, silence, summarizing — all with examples and contraindications); all non-therapeutic communication to avoid (false reassurance, giving advice, changing subject, clichés); complete mental status examination (appearance, behavior, speech, mood, affect, thought process, thought content, perceptions, cognition, insight, judgment — all with psychiatric descriptors); all milieu therapy principles (therapeutic environment components, limit-setting, group therapy nursing role, token economy); all psychiatric emergency nursing (acute agitation management — verbal de-escalation techniques, STAMP warning signs, CPI nonviolent crisis intervention); all seclusion and restraint nursing (indications, contraindications, 1:1 monitoring requirements, circulation/ROM checks q15 min, physician order requirements, documentation); all safety assessment tools (Columbia Suicide Severity Rating Scale C-SSRS, SAD PERSONS, violence risk assessment); all psychiatric disorders nursing care (schizophrenia, bipolar I/II, major depression, anxiety disorders, PTSD, OCD, eating disorders, personality disorders — borderline, antisocial); all psychotropic medication nursing implications (antipsychotics — EPS, tardive dyskinesia, NMS; lithium toxicity monitoring; SSRI/SNRI serotonin syndrome; MAOI dietary restrictions; benzodiazepine dependence); all mental health legislation nursing implications (involuntary holds, competency, informed consent)' },
      { id: 'community-public-health-nursing', label: 'Complete Community & Public Health Nursing', desc: 'All epidemiological concepts (incidence vs prevalence, attack rate, case fatality rate, R0/Rt, epidemic curve shapes, herd immunity thresholds, modes of transmission); all levels of prevention (primary/secondary/tertiary — specific examples by condition); all population health assessment frameworks (community needs assessment, windshield survey, community-as-client model); all health promotion models (Pender Health Promotion Model, Transtheoretical Model/Stages of Change, Health Belief Model, Social Cognitive Theory — nursing application); all communicable disease reporting requirements (notifiable diseases, chain of infection, isolation precautions by transmission type — contact/droplet/airborne/protective); all outbreak investigation steps (CDC 10-step epidemiological investigation); all disaster nursing (ICS — Incident Command System, ESF-8, Mass Casualty Incident nursing, shelter nursing, community emergency response); all environmental health nursing (toxicant exposure assessment, lead poisoning screening, occupational health screening); all home health nursing (OASIS assessment, Medicare home health criteria, telehealth nursing); all school nursing (IHP — individualized health plan, 504 plans, communicable disease exclusion criteria); all correctional nursing; all faith community nursing; vulnerable population care (homeless, migrant workers, refugees, human trafficking victims)' },
      { id: 'geriatric-nursing', label: 'Complete Geriatric Nursing', desc: 'All geriatric assessment tools (Mini-Cog, MMSE, MoCA — dementia screening; GDS-15 — geriatric depression; SPMSQ; Katz ADL index; Lawton IADL; Barthel index; Timed Up and Go — fall risk; Morse Fall Scale; Berg Balance Scale; PUSH tool — pressure injury; Braden Scale — pressure injury risk; MNA — malnutrition screening; AMTS); all dementia nursing care (person-centered care, reality orientation vs validation therapy, sundowning management, wandering prevention, behavioral symptoms management — non-pharmacological first); all delirium prevention and management (HELP protocol — Hospital Elder Life Program, ABCDEF bundle, identifying precipitating vs predisposing factors, pharmacological vs non-pharmacological management); complete fall prevention program (fall risk stratification, environmental modifications, hip protectors, bed alarms, safe patient handling); complete pressure injury prevention/management (turning schedules, support surfaces — foam/air/gel/low-air-loss/alternating pressure, moisture management, nutrition optimization); all polypharmacy nursing (Beers Criteria — all inappropriate medications in elderly, START/STOPP criteria, medication reconciliation, pill burden reduction); all end-of-life nursing (advance directives — living will/DPOA/POLST, goals of care conversations, comfort-focused care, symptom management in dying patient, signs of impending death, post-mortem care, grief support for family)' },
      { id: 'oncology-nursing', label: 'Complete Oncology Nursing', desc: 'Complete chemotherapy administration nursing (all routes — IV bolus, IV infusion, intrathecal, intraperitoneal, intravesical, topical; all IV access — PIV, PICC, implanted port, tunneled catheter; all pre-medication protocols; all infusion rate monitoring); all chemotherapy safe handling (USP 800, PPE requirements, closed system drug transfer devices, spill kit use, waste disposal); all cancer nursing symptom management (chemotherapy-induced nausea/vomiting — all antiemetic protocols ASCO/NCCN; mucositis — WHO grading, nursing interventions; alopecia; fatigue — Piper Fatigue Scale; peripheral neuropathy — nursing assessment and management; bone marrow suppression — neutropenia nursing — febrile neutropenia recognition and emergency response, thrombocytopenia — bleeding precautions, anemia — fatigue management, transfusion nursing); all oncologic emergencies nursing recognition (SVCS assessment, spinal cord compression — motor assessment priority, TLS monitoring — all labs, hypercalcemia of malignancy, DIC — all clotting labs, septic shock in immunocompromised); all palliative nursing (pain assessment tools — NRS/VAS/FACES/CPOT; all opioid equianalgesic conversions; all non-pharmacological pain strategies; dyspnea management; 10 principles of palliative nursing); all radiation therapy nursing (skin care — radiation dermatitis grading and management, fatigue, mucositis by radiation field, sexual health effects); all clinical trial nursing (IRB informed consent process, AE/SAE reporting, protocol adherence); all cancer screening nursing education (mammography, colonoscopy, Pap/HPV, PSA, lung CT — all USPSTF/ACS guidelines)' },
      { id: 'perioperative-nursing', label: 'Complete Perioperative Nursing', desc: 'Complete pre-operative nursing assessment (all pre-op labs and diagnostics by procedure type, ASA physical status classification I-VI with nursing implications, NPO guidelines — ASA 2017, all pre-op medication management — which to hold and which to continue, all pre-op teaching content, all surgical consent components, all pre-op skin preparation, surgical site infection prevention bundle); all intraoperative nursing roles (scrub nurse vs circulating nurse — all responsibilities, sterile field maintenance, surgical count procedures — all sharps/instruments/sponges — all time-outs WHO Surgical Safety Checklist, specimen handling, all positioning-related injury prevention — all surgical positions with associated nerve injury risks, all fire hazard prevention in OR, all electrosurgery nursing safety, anesthesia induction nursing role); complete PACU nursing (all Phase I recovery criteria — Aldrete/Modified Aldrete score, all Phase II discharge criteria — PADSS/PADDS; all post-anesthesia complications — PONV management, respiratory depression, emergence delirium, malignant hyperthermia recognition and nursing response — MH crisis protocol, all pain assessment and management in PACU); all surgical complication early detection nursing (wound dehiscence, evisceration, anastomotic leak, pulmonary embolism, DVT, ileus, infection — SSI, urinary retention, bleeding — classic early shock signs)' },
      { id: 'emergency-nursing', label: 'Complete Emergency Nursing', desc: 'Complete ESI triage system (all 5 levels with decision algorithm, all vital sign danger zones by level, all high-risk presentations mandating ESI Level 1/2, all resources-prediction decision point for ESI 3-5); all trauma nursing (primary survey ABCDE with nursing interventions at each step, secondary survey — head-to-toe with trauma-specific assessments, all massive hemorrhage control — tourniquet, hemostatic dressings, wound packing; all damage control resuscitation; permissive hypotension — targets by injury type; all trauma transfusion — 1:1:1 MTP; all trauma radiographic series; all focused assessment with sonography for trauma — FAST exam interpretation); all disaster triage nursing (START triage — all assessment steps RPM criteria; SALT triage — Sort-Assess-Lifesaving Interventions-Treatment/Transport; JumpSTART for pediatrics; all triage tag colors with criteria; all expectant category criteria); all toxicology nursing (all toxidrome recognition — anticholinergic/cholinergic/opioid/sedative-hypnotic/sympathomimetic — all classic signs/symptoms; all antidote nursing (naloxone, flumazenil, N-acetylcysteine, physostigmine, atropine, pralidoxime, activated charcoal — all indications/contraindications/dosing); all poisoning decontamination nursing; all overdose monitoring priorities); all psychiatric emergency nursing (acute psychosis, homicidal ideation, suicidal crisis — all nursing safety interventions, chemical restraint options); all stroke nursing (acute stroke recognition — BE-FAST, all NIHSS assessment, thrombolysis eligibility nursing screen, door-to-needle time targets, post-tPA monitoring — hemorrhagic transformation signs)' },
      { id: 'nclex-complete-ng', label: 'NCLEX Complete — RN & PN + NGN', desc: 'Complete NCLEX-RN content coverage (all 8 client needs categories: Safe/Effective Care Environment — Management of Care 17-23%, Infection Control 9-15%; Health Promotion 6-12%; Psychosocial Integrity 6-12%; Physiological Integrity — Basic Care 6-12%, Pharmacological Therapies 12-18%, Reduction of Risk 9-15%, Physiological Adaptation 11-17%); complete NCLEX-PN content by distribution; all Next Generation NCLEX (NGN) item types — Extended Multiple Response (select all, select N), Extended Drag and Drop, Cloze/Drop-Down (in table/rationale/in sentence), Enhanced Hot Spot, Matrix/Grid; all Clinical Judgment Measurement Model (CJMM) Layer 1–4 competencies (recognize cues, analyze cues, prioritize hypotheses, generate solutions, take actions, evaluate outcomes); all unfolding case study nursing (6-item case cluster structure, CJMM application across case progression); all SATA strategies (negative option elimination, 2+3 validation approach, absolute terms avoidance); all priority nursing questions frameworks (Maslow\'s hierarchy — physiological-safety-love-esteem-self-actualization, ABCs — airway beats breathing beats circulation, safety-first rule, acute vs chronic, unstable vs stable); all delegation/assignment frameworks (RN vs LPN/LVN scope, RN to UAP delegation 5 rights, charge nurse prioritization); all NCLEX test-taking strategies (positively worded vs negatively worded items, all-of-the-above avoidance, option comparison strategies)' },
      { id: 'nursing-pharmacology', label: 'Complete Nursing Pharmacology', desc: 'All high-alert medications with complete nursing implications (insulin — all types with onset/peak/duration, hypoglycemia protocol, pen vs vial safety; anticoagulants — heparin aPTT monitoring and reversal protamine, warfarin INR monitoring and vitamin K reversal, all DOACs with reversal agents; concentrated electrolytes — potassium chloride IV never undiluted, magnesium sulfate toxicity monitoring — respiratory rate/urine output/reflexes, calcium gluconate antidote; opioids — respiratory depression monitoring, naloxone dosing; neuromuscular blocking agents — must be intubated first, paralysis vs sedation distinction); all drug-laboratory interactions (what drugs alter which lab values — lithium affects thyroid, thiazides affect glucose/uric acid/potassium, steroids affect glucose/WBC, statins affect CK, antiepileptics affect folate/CBC); all drug-food interactions (warfarin-vitamin K foods, MAOIs-tyramine, tetracyclines-dairy, fluoroquinolones-divalent cations, grapefruit-CYP3A4 substrates list); all nursing-specific drug monitoring parameters (therapeutic ranges — digoxin 0.5-0.9 ng/mL HF, 0.8-2 ng/mL afib; lithium 0.6-1.2 mEq/L maintenance; phenytoin 10-20 mcg/mL; theophylline 10-20 mcg/mL; vancomycin AUC/MIC-guided 400-600 or trough 15-20 mcg/mL); all antidotes the nurse must know (acetaminophen — N-acetylcysteine Rumack-Matthew nomogram; opioids — naloxone; benzodiazepines — flumazenil; organophosphates — atropine + pralidoxime; digoxin — digoxin immune Fab; beta-blockers — glucagon; calcium channel blockers — calcium + glucagon + high-dose insulin; iron — deferoxamine; lead — dimercaprol/succimer; cyanide — hydroxocobalamin/sodium thiosulfate; methanol/ethylene glycol — fomepizole)' },
    ]
  },
  {
    id: 'med-school-complete', label: 'Complete Medical School Reference', icon: GraduationCap, color: '#0c4a6e',
    subcategories: [
      { id: 'anatomy-complete', label: 'Complete Anatomy', desc: 'All regional anatomy — head and neck (all cranial nerves with origin/course/branches/function/clinical testing/lesion effects; all skull foramina with contents; all triangles of neck with boundaries/contents; all fascial spaces; all carotid/vertebral artery supply; all venous drainage/dural sinuses; all lymphatic drainage head/neck); thorax (all mediastinal compartments/contents; heart anatomy — all chambers/valves/papillary muscles/chordae/coronary anatomy with dominance; all great vessels; all thoracic outlet anatomy; all breast anatomy lymphatic drainage); abdomen and pelvis (all peritoneal reflections; all retroperitoneal organs; all mesenteries and omenta; all abdominal wall layers; all inguinal canal anatomy; all pelvic floor muscles; all pelvic organ relationships; all perineal anatomy; all pelvic vasculature/innervation); upper limb (all brachial plexus — roots/trunks/divisions/cords/branches; all muscle compartments with nerve supply; all dermatomes; all common nerve injury patterns at specific sites — radial nerve Saturday night palsy, ulnar nerve claw hand, median nerve ape hand/carpal tunnel); lower limb (all lumbar/sacral plexus; all muscle compartments; all dermatomes; all hip/knee/ankle ligaments; all common nerve injuries — femoral, obturator, sciatic, common peroneal, tibial); all surface anatomy landmarks; all radiological anatomy (CXR, CT chest/abdomen/pelvis, MRI brain, plain radiograph landmarks); all anatomical variations with clinical significance; all embryology (all germ layer derivatives; all pharyngeal arch/pouch/groove/membrane derivatives; all congenital anomalies with embryological basis — VSD, ToF, TGA, CDH, TEF, omphalocele/gastroschisis, neural tube defects, cleft lip/palate, horseshoe kidney, Meckel diverticulum); all histology by organ system (epithelial types, glandular types, all specialized cells by organ)' },
      { id: 'physiology-complete', label: 'Complete Physiology', desc: 'All cardiovascular physiology (cardiac output = HR x SV; all determinants of SV — preload/afterload/contractility; Frank-Starling law with curve shifts; Fick principle for CO measurement; all pressure-volume loops; all cardiac cycle phases — all pressure/volume/sound events; all vascular resistance equations; all Starling forces for fluid exchange; all baroreceptor/chemoreceptor reflex arcs; all cardiac action potentials by cell type — phases 0-4 with ion channels; all ECG wave genesis); all renal physiology (GFR = Kf x net filtration pressure; all tubular transport maximums; all renal handling of specific substances — glucose, amino acids, urea, PAH, inulin clearance; all concentration/dilution mechanism — countercurrent multiplier/exchanger; all renin-angiotensin-aldosterone axis; all ADH/aquaporin physiology; all acid-base — Henderson-Hasselbalch, all compensatory responses, all anion gap/non-anion gap causes); all pulmonary physiology (all lung volumes and capacities with equations; all V/Q ratios — zones 1/2/3, all V/Q mismatch effects; all shunts — anatomical vs physiological; all compliance — static vs dynamic, hysteresis; all surfactant — type II pneumocytes, DPPC; all oxygen-hemoglobin dissociation curve — all shifting factors Bohr/Haldane; all CO2 transport; all Fick\'s law of diffusion); all GI physiology (all GI hormones — gastrin/CCK/secretin/GIP/motilin/VIP/somatostatin — stimulus/source/target/action; all digestive enzymes with activation; all GI motility patterns; all absorption sites by nutrient; all liver physiology — bile acid enterohepatic circulation, conjugation reactions); all endocrine physiology (all hypothalamic-pituitary axes; all feedback loop diagrams; all steroid hormone synthesis pathways; all thyroid hormone synthesis/secretion/action; all calcium-phosphate regulation — PTH/calcitonin/vitamin D axis); all neurophysiology (resting membrane potential — Goldman equation; action potential phases — all ion conductances; all synaptic transmission — all neurotransmitters with synthesis/degradation; all receptor types with signal transduction; all sensory physiology — all receptor adaptation; all motor physiology — UMN vs LMN signs; all cerebellar circuits; all basal ganglia direct/indirect pathways); all reproductive physiology (menstrual cycle all hormones day by day; all spermatogenesis stages; all pregnancy physiology changes by system); all exercise physiology; all high-altitude physiology; all diving physiology' },
      { id: 'biochemistry-complete', label: 'Complete Biochemistry', desc: 'All carbohydrate metabolism (glycolysis — all 10 steps with enzymes/cofactors/energy yield/regulation; TCA cycle — all 8 steps; oxidative phosphorylation — all complexes I-V; all electron carriers; all ATP yield calculations per glucose; glycogen synthesis/degradation — all enzymes and hormonal regulation; gluconeogenesis — all substrates/enzymes/regulation; pentose phosphate pathway — G6PD deficiency; all carbohydrate disorders — galactosemia, fructose intolerance, GLUT deficiency); all lipid metabolism (beta-oxidation — all steps per fatty acid type; fatty acid synthesis — all steps, all enzymes, all cofactors; ketogenesis and ketolysis; lipoprotein metabolism — all classes LDL/HDL/VLDL/IDL/chylomicrons with apo-proteins; all familial dyslipidemias; cholesterol synthesis — all steps, rate-limiting enzyme HMG-CoA reductase, all statin mechanism); all amino acid metabolism (all essential vs non-essential; all amino acid catabolism — transamination, deamination; urea cycle — all 6 steps with enzymes; all amino acid derivatives — dopamine/serotonin/histamine/GABA/NO/heme/creatine; all amino acid disorders — PKU, alkaptonuria, homocystinuria, maple syrup urine disease, albinism); all nucleotide metabolism (purine synthesis de novo and salvage — HGPRT deficiency causing Lesch-Nyhan; pyrimidine synthesis; all nucleotide antimetabolites mechanism); all vitamins complete (fat-soluble A/D/E/K — sources/functions/deficiency/toxicity; all water-soluble B1 thiamine/B2 riboflavin/B3 niacin/B5 pantothenic acid/B6 pyridoxine/B7 biotin/B9 folate/B12 cobalamin/C ascorbic acid — all coenzyme roles/deficiency syndromes/specific tests); all minerals; all enzyme kinetics (Michaelis-Menten — Km/Vmax interpretation; Lineweaver-Burk plot — competitive/non-competitive/uncompetitive/mixed inhibition patterns); all molecular biology (DNA replication — all enzymes/origins/Okazaki fragments; all DNA repair mechanisms — BER/NER/MMR/DSBR; all RNA types and functions; all transcription initiation/elongation/termination; all translation — all codons/anticodons/reading frame mutations; all mutation types — silent/missense/nonsense/frameshift/splice site; all genetic regulation — promoters/enhancers/silencers/operons); all inborn errors of metabolism' },
      { id: 'microbiology-complete', label: 'Complete Medical Microbiology', desc: 'All bacteria complete (all Gram-positive cocci — Staph aureus virulence factors/toxins/MRSA/MSSA/diseases; Strep pyogenes — M protein/emm typing/diseases/sequelae; Strep pneumoniae — capsule/quelling/diseases; Enterococci; all Gram-positive rods — Bacillus anthracis spores/toxin, Clostridium perfringens/tetani/botulinum/difficile all toxins and mechanisms; Listeria monocytogenes; Corynebacterium diphtheriae; all Gram-negative cocci — Neisseria gonorrhoeae/meningitidis; all Gram-negative rods — Enterobacteriaceae all species/virulence; Pseudomonas aeruginosa; Haemophilus influenzae; Legionella; Bordetella; Brucella; Francisella; Yersinia; all anaerobes; all spirochetes — Treponema/Borrelia/Leptospira; all mycobacteria — TB all stages/pathology, leprosy; all Rickettsia/Ehrlichia/Anaplasma; all Chlamydia/Mycoplasma); all viruses complete (all DNA viruses — poxvirus/herpesvirus/adenovirus/papovavirus/parvovirus/hepadnavirus with genome type/envelope/diseases/latency sites; all RNA viruses — orthomyxovirus/paramyxovirus/rhabdovirus/togavirus/flavivirus/coronavirus/retrovirus/reovirus/picornavirus all diseases/transmission/vaccine availability; all HIV virology — genome/replication cycle/CD4 count thresholds/all OIs/all ART drug classes); all fungi (all candida/aspergillus/cryptococcus/mucor/pneumocystis/histoplasma/blastomyces/coccidioides/sporothrix/dermatophytes — morphology/culture/antigen tests/treatment); all parasites (all protozoa — Plasmodium all species life cycle/morphology/treatment; Trypanosoma; Leishmania; Toxoplasma; Cryptosporidium; Giardia; Entamoeba; all helminths — all nematodes/trematodes/cestodes life cycle/clinical/treatment); all prions; all antimicrobial resistance mechanisms (all beta-lactamases — ESBLs/carbapenemases/AmpC; all efflux pumps; all target modifications; all enzymatic inactivation); all diagnostic microbiology (all culture media; all selective/differential agars; all serology tests; all molecular diagnostics)' },
      { id: 'immunology-complete', label: 'Complete Immunology', desc: 'All innate immunity (all pattern recognition receptors — all TLRs with ligands/signaling; all NLRs/RLRs/CLRs; all complement pathways — classical/lectin/alternative — all components C1-C9, all regulatory proteins, all complement deficiency diseases; all natural killer cell mechanisms — missing self hypothesis, all activating/inhibitory receptors; all innate immune cells — neutrophil, macrophage, DC, mast cell, basophil, eosinophil — all functions/activation/mediators; all physical/chemical barriers); all adaptive immunity (all T cell development — all thymic selection positive/negative; all T cell subsets — Th1/Th2/Th17/Treg/Tfh/Tc — all cytokines produced/function; all B cell development — all stages; all B cell activation — T-dependent/T-independent; all antibody class switching — all cytokines driving each isotype; all germinal center reaction; all somatic hypermutation/affinity maturation); all antibody structure/function (all Ig classes IgM/IgG/IgA/IgE/IgD — structure/serum levels/half-life/placental transfer/function); all MHC/HLA (all MHC I vs II genes/structure/expression/antigen presentation pathway; all HLA disease associations — HLA-B27 diseases, HLA-DR3/DR4, HLA-B5701 abacavir); all cytokines complete (IL-1 through IL-38, TNF-alpha, IFN-alpha/beta/gamma, TGF-beta, M-CSF, G-CSF — all with source/target/major action/therapeutic targeting); all vaccines immunology (live attenuated vs inactivated vs subunit vs conjugate vs mRNA vs viral vector — all mechanisms/advantages/contraindications; all adjuvants); all primary immunodeficiencies (all B cell defects including XLA/CVID; all T cell defects including DiGeorge/SCID; all combined; all phagocyte defects CGD/LAD; all complement deficiencies); all hypersensitivity types I-IV (all with mechanism/examples/mediators/timing/treatment); all autoimmunity mechanisms; all transplant immunology (HvGD, GvHD, all rejection types, all immunosuppression); all tumor immunology' },
      { id: 'pathology-complete', label: 'Complete Pathology', desc: 'All cellular pathology (all cell injury mechanisms — ATP depletion, free radical injury, calcium influx, membrane damage; all reversible vs irreversible injury markers — cellular swelling/eosinophilia/nuclear changes; all forms of necrosis — coagulative/liquefactive/caseous/fat/fibrinoid/gangrenous — all with classic examples; all forms of apoptosis — intrinsic/extrinsic pathways, all caspases, Bcl-2 family; all cell adaptations — hypertrophy/hyperplasia/atrophy/metaplasia/dysplasia with all classic examples); all inflammation (all acute inflammation — vascular changes, cellular events, all chemical mediators — histamine/serotonin/prostanoids/leukotrienes/PAF/complement/kinins/cytokines; all neutrophil recruitment steps — rolling/adhesion/transmigration; all patterns of acute inflammation; all sequelae; all chronic inflammation — all granuloma types caseating vs non-caseating with diseases; all giant cell types; all fibrosis mediators — TGF-beta); all healing and repair (all wound healing phases; all growth factors; all factors affecting wound healing); all thrombosis/embolism/infarction (Virchow triad; all thrombus types; all emboli types; all infarct types — red vs white with examples); all neoplasia (all hallmarks of cancer — Hanahan and Weinberg; all oncogenes vs tumor suppressors — all examples with associated cancers; all carcinogenesis — chemical/radiation/viral/genetic; all tumor staging vs grading; all paraneoplastic syndromes; all cancer epidemiology by type); all systemic pathology by organ (gross and microscopic findings for all major diseases of each organ system including cardiovascular/pulmonary/GI/hepatobiliary/renal/reproductive/endocrine/hematological/neurological/musculoskeletal/skin); all forensic pathology basics (manner vs cause of death, all asphyxia types, time of death estimation)' },
      { id: 'pharmacology-med-school', label: 'Complete Medical School Pharmacology', desc: 'All autonomic pharmacology (all parasympathomimetics — direct/indirect muscarinic agonists with all receptor subtypes M1-M5 and tissue effects; all parasympatholytics — all anticholinergics; all sympathomimetics — all alpha-1/2 and beta-1/2/3 agonists with tissue effects and clinical uses; all sympatholytics — all alpha-blockers/beta-blockers with selectivity; all ganglionic agents; all NMJ agents — depolarizing/non-depolarizing NMBs, reversal agents); all cardiovascular pharmacology (all antiarrhythmics — Vaughan Williams Classes I-IV with all drugs/ion channels/ECG effects; all antihypertensives — all classes with MOA/indications/contraindications/side effects; all heart failure pharmacology — all RAAS agents/diuretics/digoxin/ARNI/SGLT2i/hydralazine-nitrate; all antianginal drugs; all antiplatelet/anticoagulant/thrombolytic agents; all lipid-lowering drugs); all CNS pharmacology (all general anesthetics — mechanisms/MAC values; all local anesthetics — ester vs amide/mechanism/toxicity; all opioids — receptor types/all drugs/clinical uses/adverse effects; all sedative-hypnotics — benzodiazepines/barbiturates/Z-drugs/buspirone; all antiepileptics — mechanism/spectrum/drug interactions/teratogenicity; all antipsychotics — typical vs atypical/receptor profile/EPS/metabolic; all antidepressants — SSRIs/SNRIs/TCAs/MAOIs/atypicals; all mood stabilizers; all antidementia; all stimulants; all antiparkinson drugs); all anti-infective pharmacology (all antibiotic classes — mechanism/spectrum/resistance/adverse effects/clinical use; all antivirals; all antifungals; all antiparasitics); all cancer pharmacology (all alkylating agents/antimetabolites/antitumor antibiotics/topoisomerase inhibitors/mitotic spindle agents/targeted therapies/immunotherapy); all anti-inflammatory drugs (all NSAIDs/steroids/DMARDs/biologics MOA and adverse effects); all hormonal pharmacology (all thyroid/antithyroid/insulin/oral antidiabetics/steroid hormones/contraceptives); all toxicology (all antidotes; all drug overdose presentations)' },
      { id: 'epidemiology-biostatistics', label: 'Complete Epidemiology & Biostatistics', desc: 'All study designs (case report/case series; cross-sectional — prevalence; case-control — OR; cohort prospective/retrospective — RR/incidence; RCT — gold standard features: randomization/blinding/allocation concealment/ITT analysis; systematic review/meta-analysis — PRISMA; all quasi-experimental designs); all bias types (selection bias — Berkson bias/loss to follow-up/volunteer bias; information bias — recall bias/interviewer bias/reporting bias/misclassification; detection bias; lead-time bias; length-time bias; all with specific examples and how to minimize); all confounding (definition, how confounding differs from effect modification/interaction, all methods to control — randomization/restriction/matching/stratification/multivariable regression/propensity score); all statistical tests and when to use (chi-square test — 2 categorical; Fisher exact — small cells; t-test — 2 means; paired t-test — before/after; ANOVA — 3+ means; Mann-Whitney/Wilcoxon — non-parametric; Pearson/Spearman correlation; all regression types — linear/logistic/Cox proportional hazards; all survival analysis — Kaplan-Meier curves, log-rank test); all measures of association (OR, RR, HR, AR, ARR, NNT=1/ARR, NNH=1/ARI, PAR, PAR%); all screening concepts (sensitivity = TP/(TP+FN); specificity = TN/(TN+FP); PPV = TP/(TP+FP) — affected by prevalence; NPV = TN/(TN+FN); all 2x2 table calculations; LR+ = sensitivity/(1-specificity); LR- = (1-sensitivity)/specificity; pre-test probability → post-test probability via Fagan nomogram; ROC curves — AUC interpretation); all epidemiological measures (incidence rate; prevalence = incidence x duration; attack rate; secondary attack rate; case fatality rate vs mortality rate; all crude vs adjusted rates — direct/indirect standardization); all clinical trial phases I-IV with objectives; all meta-analysis concepts (forest plot reading — all components, heterogeneity I2 statistic, fixed vs random effects model, funnel plot asymmetry — publication bias); Bayesian statistics (prior/posterior probability, Bayes theorem application in clinical diagnosis)' },
      { id: 'ethics-medical-law', label: 'Complete Medical Ethics & Law', desc: 'All principlism (Beauchamp and Childress four principles — autonomy: self-determination, informed consent, truth-telling, confidentiality; beneficence: best interest standard, clinical equipoise; non-maleficence: do no harm, risk-benefit analysis, double effect doctrine; justice: distributive justice, resource allocation, healthcare equity); all informed consent (all elements — disclosure/understanding/voluntariness/decision-making capacity/authorization; all exceptions — emergency/waiver/therapeutic privilege/incompetence; all specific consent issues — consent for minors/mature minor doctrine/emancipated minor; consent for research); all capacity assessment (all 4 criteria — understanding/appreciation/reasoning/expression of choice; capacity vs competency distinction; all tools — ACE/MacCAT-T; all decision-making surrogates hierarchy; best interest vs substituted judgment standards); all advance directives (living will/durable power of attorney for healthcare/POLST/DNR/DNI orders — legal validity and clinical use; all physician obligations at end of life); all end-of-life ethics (withholding vs withdrawing treatment — ethical equivalence; all forms of euthanasia — active/passive/voluntary/involuntary/physician-assisted death/aid in dying — legal status by jurisdiction; all palliative sedation ethics; brain death criteria and declaration); all research ethics (Belmont Report — all 3 principles: respect for persons/beneficence/justice; all 3 applications: informed consent/risk-benefit/subject selection; Declaration of Helsinki — all key amendments; Tuskegee study ethical violations; all IRB functions and categories of review — exempt/expedited/full; all equipoise definition; all conflict of interest); all confidentiality (Tarasoff duty to warn; HIV confidentiality; all mandatory reporting obligations — child abuse/elder abuse/domestic violence/gunshot wounds/communicable diseases; all HIPAA — PHI/18 identifiers/all exceptions to minimum necessary; all HITECH); all malpractice (all 4 elements — duty/breach/causation/damages; res ipsa loquitur; respondeat superior; all defenses); all prescribing liability; all cultural competence frameworks (LEARN/ETHNIC/RESPECT models)' },
    ]
  },
  {
    id: 'board-exams-complete', label: 'Complete Board Exam Prep', icon: Award, color: '#92400e',
    subcategories: [
      { id: 'naplex-complete', label: 'NAPLEX Complete Prep', desc: 'Full NAPLEX blueprint coverage (all NABP competency areas: Area 1 — obtain/interpret/assess patient/medication information 35%; Area 2 — formulate/evaluate/implement/monitor pharmacotherapeutic plans 50%; Area 3 — compound/prepare/dispense/administer/deliver medications 15%); all calculation types with fully worked examples (doses by weight/BSA, IV flow rates, drip rates, dosing intervals, PK calculations, alligation, dilutions, powder volume, milliequivalents, osmolarity, percentage strength/ratio strength/proof conversions, beyond-use dating); all sterile/non-sterile compounding calculations; all patient case questions styled on NAPLEX format with full rationale; all drug counseling scenarios (all OTC medications, all high-alert medications, all common chronic disease state counseling); all drug information evaluation questions; all pharmacoeconomic calculations (cost-effectiveness, CER, ICER, NNT, NNH, budget impact); all NAPLEX-style SATA and select-all questions; scoring criteria (passing scaled score 75; all testing accommodations available; pass/fail policy); complete study timeline (12-week plan by content area); all high-yield NAPLEX drug classes with key points per class; all high-yield calculations with step-by-step solutions; all common NAPLEX mistakes to avoid' },
      { id: 'mpje-complete', label: 'MPJE Complete Prep', desc: 'Complete MPJE blueprint (federal pharmacy law 57%, state pharmacy law principles 43%); all federal law topics (all CSA — all 5 schedules with examples, all DEA forms 41/106/222/224/225/363, all emergency dispensing, all partial filling rules, all record-keeping requirements, all reverse distributor regulations, all in-office use regulations, all DEA registrant requirements, all quota system; all FDCA — all drug approval pathways NDA/ANDA/BLA/505(b)(2), all labeling requirements, all OTC vs Rx product criteria, all MedGuide requirements, all REMS requirements, all drug recall classes I-II-III, all FDCA violations; all HIPAA pharmacy provisions; all Plan 9 — all mailing rules; all Combat Methamphetamine Epidemic Act; all DSCSA drug supply chain); all state pharmacy law principles (all pharmacy practice act framework, all pharmacist-patient relationship duties, all collaborative practice agreement requirements, all pharmacist prescribing authority states, all prescription requirements — all elements, Schedule II vs III-V requirements; all drug product selection counseling laws; all patient records requirements; all pharmacy permit/license requirements; all disciplinary action processes; all impaired pharmacist programs; all pharmacy technician ratios and supervision); all professional standards (standard of care, good faith dispensing, drug utilization review); MPJE scoring (passing scaled score 75); complete MPJE question bank strategies' },
      { id: 'usmle-step1-complete', label: 'USMLE Step 1 Complete Prep', desc: 'Full Step 1 blueprint by discipline (Biochemistry/Genetics 14-24%; Immunology 6-11%; Microbiology 10-15%; Pathology 44-52%; Pharmacology 16-22%; Physiology 25-35%; Anatomy 3-7%; Behavioral Sciences 8-13%); all organ system integration content; all high-yield biochemistry (all metabolic pathways with rate-limiting enzymes, all vitamin deficiency syndromes, all enzyme kinetics, all molecular biology, all inborn errors of metabolism, all pharmacogenomics); all high-yield microbiology (all bacteria/virus/fungi/parasite rapid-fire facts, all antimicrobial mechanisms, all vaccine schedules immunology); all high-yield immunology (all complement, all cytokines, all immunodeficiencies, all hypersensitivity); all high-yield pathology (all necrosis types, all inflammation, all neoplasia hallmarks, all organ-specific pathological findings); all high-yield pharmacology (all autonomic drugs, all cardiovascular, all CNS, all antibiotics, all antiepileptics, all antipsychotics, all antidepressants); all high-yield anatomy (all nerve injuries, all hernia types, all embryological defects); all high-yield physiology (all cardiovascular equations, all renal equations, all pulmonary equations); Step 1 exam format (280 questions, 7 blocks of 40, 45-minute blocks, 45 minutes break; all question stem dissection strategies; all distractor-elimination techniques; all 2-step and 3-step question approaches); Step 1 scoring (Pass/Fail since January 2022; all remediation pathways); complete study timeline' },
      { id: 'usmle-step2-complete', label: 'USMLE Step 2 CK Complete Prep', desc: 'Full Step 2 CK blueprint by clinical domain (Internal Medicine 25-30%; Surgery 11-16%; Pediatrics 15-20%; OB/GYN 10-15%; Psychiatry 8-12%; Preventive Medicine/Ethics 6-10%; Emergency Medicine 6-8%; Dermatology/Ophthalmology/ENT/Orthopedics 8-10%); all next-best-step question frameworks (most likely diagnosis → best initial test → best confirmatory test → next best step in management — all in sequence); all clinical vignette dissection strategies (underline key findings, identify time frame, identify patient demographics, identify chief complaint, identify all abnormal labs/imaging); all high-yield internal medicine presentations for Step 2 (all diagnosis and management); all high-yield surgery (all pre-op/intra-op/post-op questions, all acute abdomen, all trauma); all high-yield pediatrics (all developmental milestone questions, all peds vaccinations, all growth disorders); all high-yield OB/GYN (all prenatal care, all labor complications, all postpartum complications, all contraception counseling steps); all ethics questions frameworks (all 4-principles application, all capacity scenario, all substitute decision-maker hierarchy, all research ethics); all biostatistics high-yield (sensitivity/specificity, NNT, OR vs RR in vignette context, how to read a forest plot in clinical question format); all emergency medicine high-yield (all immediate stabilization questions); Step 2 CK format (318 questions, 9 blocks of 40, 40 minutes each; all strategies); Step 2 CK scoring (3-digit score 1-300, mean ~247)' },
      { id: 'usmle-step3-complete', label: 'USMLE Step 3 Complete Prep', desc: 'Full Step 3 blueprint (Foundations of Independent Practice Day 1 — 232 MCQ: Applying Foundational Science 18%, Diagnosis 28%, Prognosis/Outcome 5%, Pharmacotherapy 28%, Clinical Interventions 12%, Mixed 9%; Advanced Clinical Medicine Day 2 — 180 MCQ + 13 CCS cases); all CCS case strategies (case management framework: stabilize → diagnose → treat → monitor → follow up; all order writing in CCS — how to order labs/imaging/medications/consultations/procedures in proper sequence; all time advancement strategies — know when to advance clock; all location changes — ER to ICU to floor to outpatient); all high-yield CCS diagnoses and management sequences; all ambulatory medicine content (all preventive care USPSTF Grade A/B recommendations by age/sex; all chronic disease management guidelines — hypertension/diabetes/hyperlipidemia/asthma/COPD/heart failure); all inpatient management (all hospitalist medicine high-yield); all epidemiology/biostatistics for Step 3 (all study design questions, all 2x2 table calculations, all screening test calculations in vignette format); all ethics for Step 3 (all clinical ethics scenarios with correct answers); all health promotion/disease prevention content; Step 3 format and scoring (two-day exam; score 1-300; passing 196; all IMGs Step 3 timing considerations)' },
      { id: 'comlex-complete', label: 'COMLEX Levels 1/2/3 Complete Prep', desc: 'Full COMLEX Level 1 blueprint (same basic science content as USMLE Step 1 plus Osteopathic Principles and Practice — OPP accounts for approximately 12-18% of exam); all osteopathic principles (all 4 osteopathic tenets — body unity, self-regulation, structure-function interrelationship, rational treatment; all osteopathic medical history milestones); all OMT techniques complete (HVLA — high-velocity low-amplitude thrust technique with indications/contraindications/all somatic dysfunction diagnosis; muscle energy technique — all principles and applications; counterstrain — all tender point locations by region; myofascial release; still technique; craniosacral therapy; lymphatic techniques — pedal pump/effleurage/thoracic pump; articulatory techniques; all OMT for specific conditions — lumbar, cervical, thoracic, rib, sacral, innominate); all somatic dysfunction diagnosis (all TART criteria — Tissue texture/Asymmetry/Restriction/Tenderness; all Chapman reflex points; all viscerosomatic reflexes; all segmental levels of viscerosomatic reflexes); COMLEX Level 2 CE clinical content (all clinical presentations matching USMLE Step 2 plus OMT clinical application by organ system); COMLEX Level 3 (all clinical management plus CCS equivalent case management plus OMT for acute and chronic conditions); all COMLEX question format strategies (clinical presentation format — chief complaint in bold, all OMT question distractors); scoring (pass level 400 for all levels); all COMLEX-USA vs USMLE dual exam strategy' },
      { id: 'mcat-complete', label: 'MCAT Complete Prep', desc: 'Full MCAT blueprint by section (Chemical and Physical Foundations of Biological Systems — 59 questions 95 min; Critical Analysis and Reasoning Skills CARS — 53 questions 90 min; Biological and Biochemical Foundations of Living Systems — 59 questions 95 min; Psychological, Social, and Biological Foundations of Behavior — 59 questions 95 min); all chemistry content (all general chemistry — periodic table trends, all bonding, all thermodynamics, all kinetics, all equilibrium, all electrochemistry, all acid-base; all organic chemistry — all functional groups, all reaction mechanisms SN1/SN2/E1/E2, all spectroscopy NMR/IR/MS, all carbohydrate chemistry, all amino acid chemistry, all lipid chemistry; all biochemistry — all metabolic pathways, all enzyme kinetics, all molecular biology); all biology content (all cell biology — all organelles/functions, all cell cycle/mitosis/meiosis, all signal transduction; all genetics — all Mendelian, all non-Mendelian, all molecular genetics, all hardy-Weinberg; all evolution concepts; all organ systems physiology); all psychology and sociology content (all learning theories — classical conditioning/operant conditioning/observational learning; all memory models; all personality theories; all social psychology — all concepts including attitude/stereotypes/prejudice/discrimination/social influence; all Sociological theories — structural functionalism/conflict theory/symbolic interactionism; all health disparities/social determinants of health; all research methods psychology); all CARS strategies (all passage types, all question types, all elimination strategies, tone/attitude identification); MCAT scoring (472-528 range, each section 118-132, total mean 511; CARS strategies for non-native English speakers; all test day logistics)' },
      { id: 'pance-panre-complete', label: 'PANCE/PANRE Complete Prep', desc: 'Full PANCE blueprint (all 5 clinical tasks — History Taking 16%, Physical Examination 16%, Using Diagnostic Studies 18%, Formulating Most Likely Diagnosis 18%, Health Maintenance/Patient Education 10%, Clinical Intervention 14%, Pharmaceutical Therapeutics 18% — wait, actual 2024 blueprint: Medical Knowledge application across all organ systems); all organ system content for PA boards (Cardiology 16%; Pulmonology 12%; GI/Nutrition 10%; Musculoskeletal 10%; EENT 9%; Reproductive 8%; Neurology 7%; Psychiatry/Behavioral 6%; Dermatology 6%; Hematology 6%; Infectious Disease 5%; Endocrine 5%; Genitourinary 5%; Emergency Medicine specialty questions); all PA-specific scope of practice questions (all states\' PA supervision requirements, all prescriptive authority PA regulations, all collaborative agreements); all high-yield PANCE diagnoses by organ system with most likely diagnosis/best initial test/best treatment pattern; all PANRE (recertification exam) differences from PANCE (10-year cycle, same blueprint format); all PA clinical year preparation; all PACKRAT exam (PA clinical rotation assessment); PANCE format (300 questions, 5 blocks of 60, 60 minutes each; scoring 800-person-specific mean — minimum passing 350 on each attempt); all PANCE study strategies (SmartyPANCE approach, all blueprint-weighted study plan); all common PANCE pitfalls' },
      { id: 'abim-boards-complete', label: 'ABIM & Specialty Boards Complete Prep', desc: 'Complete ABIM Internal Medicine Certification Exam (all blueprint content areas: Cardiovascular Disease 14%; Gastroenterology 9%; Pulmonary Disease 9%; Rheumatology 8%; Oncology/Hematology 8%; Infectious Disease 8%; Endocrinology/Metabolism/Diabetes 8%; Nephrology & Urology 7%; Neurology 6%; Psychiatry 4%; Dermatology; Ophthalmology; Allergy/Immunology 5% combined; General IM/Preventive/Geriatrics/Palliative 14%); all high-yield ABIM clinical management algorithms; all ABIM-style clinical vignettes with answer rationale; ABIM MOC requirements (10-year cycle, Knowledge Check-In every 2 years — 30 questions, all MOC activities points); complete ABEM Emergency Medicine Boards (all core EM content areas — resuscitation/obstetrics/pediatrics/toxicology/trauma/environmental/infectious disease/cardiology/neurology/orthopedics; all EM-specific procedures; all ABEM format — 305 questions, 5 hours); complete ABP Pediatrics Boards (all organ systems peds, all developmental peds, all neonatology, all peds subspecialties high-yield); complete ABOG OB/GYN Boards (all written exam content — reproductive endocrinology/infertility, maternal-fetal medicine, gynecology oncology, urogynecology, general OB/GYN, all oral exam simulation); complete ABN Neurology Boards (all neurological conditions, all neuro-imaging interpretation, all EEG interpretation, all EMG/NCS interpretation); complete ABS General Surgery Boards (all surgical knowledge, all anatomy, all pathophysiology, all operative techniques, all surgical complications); complete ABFM Family Medicine Boards (all life-span medicine, all IM content breadth, all preventive medicine, all behavioral health for FM)' },
      { id: 'osce-complete', label: 'OSCE Complete Prep', desc: 'All OSCE station types with full preparation (History-taking stations — all 15 systems systematic history approach: PC/HPC/PMH/DH/Allergies/FH/SH/ROS all mnemonics; all disease-specific history mnemonics — SOCRATES for pain, all cardiac/respiratory/GI/neuro specific histories; all Calgary-Cambridge communication model stages — initiating/gathering information/physical exam/explanation/closing; all ICE — Ideas/Concerns/Expectations elicitation; all agenda-setting; all active listening skills; all red flag recognition in history); all physical examination stations (all general examination techniques; all cardiovascular exam — all murmur grading/radiation/timing; all respiratory — all breath sound types; all abdominal — all organomegaly/ascites tests; all neurological — all power/sensation/coordination/reflexes; all MSK — all GALS screen; all ophthalmoscopy/otoscopy technique; all peripheral vascular exam; all thyroid exam; all lymph node exam); all communication skills stations (breaking bad news — SPIKES protocol all 6 steps; all angry patient de-escalation; all non-English speaker scenarios; all mental health history — risk assessment; all capacity assessment; all informed consent; all alcohol/drug history CAGE/AUDIT; all sexual history); all data interpretation stations (all ECG interpretation systematic approach — rate/rhythm/axis/intervals/morphology; all CXR systematic approach; all ABG interpretation; all basic blood results interpretation; all urinalysis; all imaging interpretation basics); all procedural skills stations (all CPR technique; all IV access; all urinary catheterization; all wound suturing; all nasogastric tube; all NG feed calculation; all peak flow; all inhaler technique); all prescribing safety stations; all ethics stations' },
    ]
  },
  {
    id: 'clinical-decision-support', label: 'Clinical Decision Support', icon: Network, color: '#065f46',
    subcategories: [
      { id: 'ddx-generator', label: 'Differential Diagnosis Generator', desc: 'AI-powered differential diagnosis tool: enter any combination of symptoms, signs, labs, and imaging findings to generate a ranked differential diagnosis list with probability estimates, key distinguishing features for each diagnosis, and next diagnostic steps; all common symptom-based differentials organized by chief complaint (chest pain — all 12 life-threatening causes first, then common causes; dyspnea — all cardiac vs pulmonary vs other; headache — all primary vs secondary with red flag recognition; abdominal pain by quadrant; altered mental status; fever of unknown origin; syncope; dizziness; weight loss; fatigue; edema; hematuria; hemoptysis; dysphagia; jaundice; back pain; joint pain; rash with fever); all age-specific differentials (pediatric vs adult vs geriatric differing presentations); all sex-specific differentials; all immune-compromised host differentials; complete probabilistic reasoning framework (prior probability + likelihood ratio → post-test probability); all must-not-miss diagnoses by symptom; all common mimics; complete diagnostic algorithm tables for all major presentations; all validated clinical decision rules integrated (Wells score for DVT/PE, HEART score, TIMI score, CURB-65, pneumonia severity index, Ottawa ankle/knee rules, PECARN pediatric head CT rules, Canadian CT head rule, Calgary syncope score, GRACE score, ABCD2 TIA score)' },
      { id: 'clinical-algorithms', label: 'Complete Clinical Algorithms', desc: 'All major clinical management algorithms with step-by-step decision trees: all ACLS algorithms (cardiac arrest — shockable VF/VT vs non-shockable PEA/asystole; all post-cardiac arrest care; bradycardia algorithm with AV block decision points; tachycardia algorithm — stable vs unstable, narrow vs wide complex; all peri-arrest arrhythmia algorithms; all pediatric BLS/PALS algorithms; all neonatal resuscitation NRP algorithm); all ATLS algorithms (primary survey ABCDE with concurrent interventions; all secondary survey; all massive hemorrhage — damage control; all trauma imaging decision trees; all specific injury algorithms — traumatic brain injury ICP management, spinal cord injury, penetrating chest, hemothorax/pneumothorax needle decompression/chest tube); all sepsis/shock algorithms (Sepsis-3 recognition → Hour-1 Bundle → reassessment; all shock type identification — distributive/obstructive/cardiogenic/hypovolemic; all vasopressor escalation algorithms; all ARDS Berlin criteria → lung-protective ventilation → prone positioning → VV-ECMO decision); all metabolic emergency algorithms (DKA — all fluid/insulin/electrolyte steps with hourly monitoring; HHS management; hyperosmolar crisis; hyperkalemia 7-step management; hyponatremia correction rate — all ODS prevention; hyper/hypo-calcemia; hypo/hyper-magnesemia; thyroid storm Burch-Wartofsky scoring → management; adrenal crisis; myxedema coma); all neurological emergency algorithms (status epilepticus — benzodiazepine → 2nd line → 3rd line → RSI; ischemic stroke — thrombolysis eligibility checklist → alteplase dosing → thrombectomy decision; hemorrhagic stroke — BP management, reversal; elevated ICP management — all tiers; bacterial meningitis — antibiotic choice by age/immune status, dexamethasone timing); all AHA/ACC cardiovascular guidelines algorithms (STEMI — door-to-balloon, fibrinolysis decision; NSTEMI/UA — GRACE score risk stratification; heart failure — GDMT initiation sequence; new-onset AF — rate vs rhythm, anticoagulation CHA2DS2-VASc/HAS-BLED); all IDSA infectious disease treatment algorithms (CAP, HAP/VAP, skin/soft tissue, bone/joint, CNS, endocarditis, UTI all spectra); all anaphylaxis treatment (epinephrine first → all adjuncts → all post-anaphylaxis monitoring)' },
      { id: 'drug-dosing-calculator', label: 'Drug Dosing Calculator & Reference', desc: 'Complete drug dosing reference with all major dose adjustment frameworks: all weight-based dosing (actual body weight vs ideal body weight vs adjusted body weight — which to use for which drug and why; all ABW calculation = IBW + 0.4 x (TBW-IBW); all IBW formulae Devine/Robinson/Miller/Hamwi); all renal dosing adjustments (all drugs requiring CrCl-based dose reduction — aminoglycosides/vancomycin/beta-lactams/quinolones/antivirals/antifungals/anticoagulants/direct oral anticoagulants/metformin/digoxin; all Cockcroft-Gault CrCl equation with all caveats for extremes of weight/age; all MDRD vs CKD-EPI eGFR equations; all dialysis dosing — all hemodialysis vs CRRT vs peritoneal dialysis supplemental dosing); all hepatic dosing adjustments (Child-Pugh score A/B/C implications for drug dosing; all hepatically metabolized drugs with dose adjustment guidance; all drugs contraindicated in severe hepatic impairment); all geriatric dosing (all Beers Criteria dose reductions; all START/STOPP criteria; all age-related PK changes applied to dosing — reduced CrCl/reduced volume of distribution/reduced protein binding/altered absorption); all pediatric dosing (all mg/kg dosing by age group; all maximum safe doses; all BSA-based dosing — Mosteller equation; all neonatal dosing — gestational age adjusted); all ICU-specific dosing (all continuous infusion protocols with concentration standards — norepinephrine/epinephrine/vasopressin/dobutamine/milrinone/dopamine/heparin/insulin/propofol/midazolam/dexmedetomidine/fentanyl/ketamine; all target-driven dosing — AUC/MIC vancomycin, aminoglycoside peak/trough, therapeutic drug monitoring table for all monitored drugs); all pregnancy dosing (all FDA pregnancy categories legacy + PLLR format; all safe vs contraindicated drugs in pregnancy and lactation — LactMed summary)' },
      { id: 'drug-interaction-checker', label: 'Drug Interaction Checker', desc: 'Complete drug-drug interaction reference: all major pharmacokinetic interactions (all CYP450 enzyme interactions — CYP1A2 inhibitors/inducers/substrates; CYP2C9 interactions; CYP2C19 interactions; CYP2D6 interactions — all poor metabolizer-relevant drugs; CYP3A4 interactions — the most common enzyme; all P-glycoprotein/ABCB1 interactions; all UGT interactions; all plasma protein binding displacement interactions — highly protein-bound drug list); all major pharmacodynamic interactions (all additive CNS depression combinations; all additive QT-prolonging combinations — all drugs with QTc prolongation risk CredibleMeds Risk Categories Known/Conditional/Possible; all additive bleeding risk combinations — anticoagulants + antiplatelets + NSAIDs + SSRIs/SNRIs; all additive hypotensive combinations; all additive serotonin syndrome risk — all serotonergic agents; all additive nephrotoxicity combinations; all additive ototoxicity; all additive bone marrow suppression); all high-severity interaction pairs (warfarin + all interacting drugs with direction of INR effect; digoxin + amiodarone/quinidine/verapamil; lithium + NSAIDs/thiazides/ACEi/ARBs; methotrexate + NSAIDs/PCN/sulfonamides; all MAOI combinations — all contraindicated foods and drugs; linezolid serotonin interactions; all contraindicated combinations); all drug-food interactions (all grapefruit CYP3A4 interactions with drug list; all tyramine-MAOI foods; all vitamin K-warfarin foods; all dairy-antibiotic chelation; all alcohol-drug combinations; all St. John\'s Wort interactions); all drug-lab test interactions (all drugs that falsely alter lab values); all drug-disease state interactions (contraindications by disease — beta-blockers in COPD/asthma/Raynaud\'s; NSAIDs in CKD/CHF/peptic ulcer; fluoroquinolones in tendinopathy; metformin in AKI/contrast dye; all absolute vs relative contraindications)' },
      { id: 'lab-interpretation-guide', label: 'Lab Interpretation & Next Steps', desc: 'Complete laboratory interpretation reference with clinical decision pathways: all CBC interpretation (all anemia workup — MCV-based approach: microcytic iron studies algorithm, normocytic reticulocyte count algorithm, macrocytic B12/folate algorithm; all neutropenia workup — absolute neutrophil count thresholds, all causes, all management by severity; all thrombocytopenia workup — all causes by mechanism, all urgency thresholds, HIT 4T score; all leukocytosis differential; all pancytopenia workup); all CMP/BMP interpretation (all sodium disorders — hyponatremia urine osmolality algorithm, hypernatremia free water deficit calculation; all potassium disorders — ECG changes per level, all causes, all treatment stepwise; all chloride/bicarbonate — all acid-base disorders stepwise — primary disorder → anion gap → compensation check Winter\'s formula/expected PCO2; all BUN/creatinine ratio interpretation; all hypocalcemia/hypercalcemia complete workup); all liver function test interpretation (all patterns — hepatocellular vs cholestatic vs mixed; all causes by pattern; R factor calculation; all synthetic function — PT/INR/albumin interpretation; all bilirubin — conjugated vs unconjugated differential); all coagulation panel interpretation (PT/aPTT/fibrinogen/D-dimer/thrombin time — all mixing studies; all factor deficiency patterns; all DIC diagnosis); all cardiac biomarkers (troponin I vs T — hs-cTn serial measurement algorithm; all delta troponin protocols; all BNP/NT-proBNP HF thresholds by age; all CK-MB timing); all urinalysis interpretation (all microscopy — all casts with diagnoses; dipstick interpretation — all false positives/negatives); all CSF interpretation (all opening pressure/appearance/cell count/glucose/protein — all diagnosis tables for meningitis/encephalitis/SAH/GBS); all body fluid interpretations (pleural — Light\'s criteria; ascites — SAAG; pericardial; synovial — all crystal identification); all thyroid function interpretation algorithms; all endocrine labs — aldosterone/renin/cortisol/ACTH interpretation algorithms; all tumor marker interpretation and limitations' },
    ]
  },
  {
    id: 'global-public-health', label: 'Global Health & Public Health', icon: Globe, color: '#166534',
    subcategories: [
      { id: 'who-disease-priorities', label: 'WHO Disease Priorities & Programs', desc: 'All WHO priority diseases and global health programs: all WHO R&D Blueprint priority pathogens (COVID-19, Ebola/Marburg, Lassa fever, MERS-CoV, Nipah/Henipavirus, Rift Valley fever, CCHF, Disease X — all with outbreak history/transmission/clinical features/current countermeasures status); all WHO essential medicines list 23rd edition — all categories and specific drugs; all WHO Expanded Programme on Immunization (EPI) — all vaccines in global schedule with coverage targets; all WHO health goals (all UN Sustainable Development Goals SDGs — SDG 3 health targets in detail: end AIDS/TB/malaria/NTDs, reduce maternal mortality to <70/100,000, reduce under-5 mortality to <25/1,000, reduce NCD premature mortality by one-third, all other SDG 3.x targets); Universal Health Coverage (UHC) — all 3 dimensions: population/services/financial protection; UHC service coverage index; all WHO frameworks — International Health Regulations 2005 all core capacities, all PHEIC declarations history, all one health framework components; all WHO FCTC tobacco control; all WHO global action plans (AMR global action plan 5 objectives; NCD global action plan 9 voluntary targets; mental health action plan); all WHO Patient Safety Global Challenges (medication safety — High 5s; surgical safety — surgical checklist; infection prevention — Clean Care is Safer Care); all WHO definitions and terminology (health/disease/disability/QALY/DALY/YLL/YLD)' },
      { id: 'global-disease-burden', label: 'Global Disease Burden & Statistics', desc: 'Complete Global Burden of Disease (GBD) study data and methodology: all disability-adjusted life years (DALY) calculations (DALY = YLL + YLD; YLL = number of deaths x standard life expectancy at age of death; YLD = prevalence x disability weight; all disability weights for major conditions); all GBD cause hierarchy (Level 1: communicable/maternal/neonatal/nutritional vs non-communicable vs injuries; all Level 2 and Level 3 causes with global ranking); all top 10 global causes of death by income group (high/upper-middle/lower-middle/low income — all disease rankings differ significantly); all top causes of DALYs globally and by region; all major epidemiological transitions by country income; all global mortality statistics (all-cause mortality rates by age/sex/region; under-5 mortality causes — pneumonia/diarrhea/malaria/neonatal causes; maternal mortality ratio by country; all MDG/SDG progress metrics); all global morbidity statistics (all prevalence estimates for major chronic diseases — hypertension 1.28 billion, diabetes 537 million, COPD, mental disorders 1 billion+; all global infectious disease burden — TB 10 million cases/year, malaria 240 million cases, HIV 38 million PLHIV, all NTDs); all global disability statistics (all WHO World Report on Disability — 1.3 billion people with disability; all ICF classification framework — body functions/structures/activities/participation/environmental factors); all health inequity data — all social determinants of health (CSDH framework — structural determinants/intermediary determinants); all global health financing — all DAH development assistance for health trends; all ODA official development assistance' },
      { id: 'epidemiology-outbreak', label: 'Epidemiology & Outbreak Investigation', desc: 'Complete outbreak investigation methodology and epidemiological methods: all 10 CDC steps for outbreak investigation (1-verify diagnosis; 2-confirm outbreak exists; 3-define case; 4-find cases systematically — case finding; 5-describe by person/place/time; 6-develop hypotheses; 7-evaluate hypotheses — analytical studies; 8-refine hypotheses with additional studies; 9-implement control and prevention; 10-communicate findings); all epidemic curve types (point source — bell-shaped with incubation period estimates; propagated — successive waves; continuous common source — plateau shape; mixed — all interpretation); all attack rate calculations (AR = cases/exposed x 100; food-specific attack rate tables; relative risk from case-control studies in outbreak settings); all herd immunity thresholds by disease (measles 92-95%, polio 80-85%, mumps 75-86%, rubella 83-85%, diphtheria 83-85%, smallpox 80-85%, COVID-19 variable); all R-naught values by pathogen (measles 12-18; mumps 4-7; rubella 5-7; influenza 2-3; COVID-19 original 2-3, Omicron 8-15; polio 5-7; diphtheria 6-7; pertussis 12-17); all surveillance types (passive/active/sentinel/syndromic/integrated disease surveillance); all screening program evaluation (Wilson-Jungner criteria all 10; all USPSTF evidence-grading framework A/B/C/D/I; all screening test evaluation — all sensitivity/specificity/PPV/NPV calculations with prevalence impact); all contact tracing methods; all quarantine vs isolation definitions and legal authority; all One Health surveillance framework; all molecular epidemiology methods (whole genome sequencing for outbreak investigation, phylogenetic analysis interpretation)' },
      { id: 'preventive-medicine-complete', label: 'Complete Preventive Medicine', desc: 'All levels of prevention with specific examples: primary prevention (all immunizations — complete ACIP adult and pediatric schedules; all chemoprophylaxis — aspirin primary prevention, statins primary prevention, PrEP HIV, isoniazid LTBI; all behavioral counseling — 5As framework smoking cessation, alcohol brief intervention AUDIT-C/FRAMES, physical activity counseling; all environmental prevention — fluoridation, lead abatement, UV protection, food safety); secondary prevention — all USPSTF Grade A and B screening recommendations 2022-2026 (colorectal cancer — colonoscopy/FIT/CT colonography with intervals; breast cancer — mammography all age/risk thresholds debate; cervical cancer — Pap/co-test/primary HPV intervals; lung cancer — annual LDCT criteria age 50-80, 20 pack-year; abdominal aortic aneurysm — one-time ultrasound men 65-75 who ever smoked; hypertension — all adults 18+ BP screening; diabetes — prediabetes screening criteria; HIV — all adults 15-65 at least once; HBV/HCV — birth cohort and risk-based screening; STI — chlamydia/gonorrhea/syphilis/HIV by risk group; depression — adults and adolescents; obesity — BMI screening and referral to intensive counseling; all lipid screening recommendations; all vision/hearing screening ages); tertiary prevention — all chronic disease management guidelines (all JNC/ACC/AHA hypertension; all ADA/AACE diabetes management; all GOLD COPD guidelines stages; all GINA asthma guidelines; all ACC/AHA heart failure GDMT); all quaternary prevention concepts (avoiding medicalization/overdiagnosis — all examples); complete immunization reference (all vaccine types, all schedules, all contraindications, all catch-up schedules, all special populations — immunocompromised/pregnancy/travel/occupational)' },
      { id: 'tropical-medicine-complete', label: 'Complete Tropical & Travel Medicine', desc: 'All 20 WHO neglected tropical diseases with complete clinical profiles (Buruli ulcer — Mycobacterium ulcerans, painless necrotizing skin ulcer; Chagas disease — Trypanosoma cruzi, all stages acute/indeterminate/chronic including cardiomyopathy/megacolon; dengue — all 4 serotypes, all phases febrile/critical/recovery, dengue warning signs, DHF/DSS criteria; dracunculiasis — Guinea worm eradication campaign; echinococcosis — cystic/alveolar, PAIR treatment; foodborne trematodes — clonorchiasis/opisthorchiasis/paragonimiasis; HAT — Human African Trypanosomiasis — T. brucei gambiense/rhodesiense, all stages; leishmaniasis — cutaneous/mucocutaneous/visceral kala-azar with all clinical features/diagnosis/treatment; leprosy — PB vs MB, all skin lesions, all nerve involvement, WHO MDT regimens; lymphatic filariasis — Wuchereria/Brugia, all stages, lymphedema management; mycetoma/chromoblastomycosis/sporotrichosis; onchocerciasis — river blindness; rabies — all exposure categories, all PEP protocols; scabies; schistosomiasis — all species and organ systems; soil-transmitted helminths — ascariasis/hookworm/trichuriasis/strongyloidiasis; taeniasis/cysticercosis; trachoma; yaws); all major tropical infectious diseases (malaria — all Plasmodium species, all clinical presentations, all diagnostic methods thick/thin smear, RDT, PCR, all treatment by species and severity, all chemoprophylaxis options for all regions; typhoid fever; cholera; yellow fever; leptospirosis; rickettsial diseases); complete travel medicine (all pre-travel assessment — destination risk stratification, all required vs recommended vaccines by destination, all malaria chemoprophylaxis by region, all traveler\'s diarrhea prevention and treatment, all altitude sickness prevention/treatment, all jet lag management, all travel health kit contents); immigration medicine (all immigrant health screening recommendations CDC); all geographic disease distribution maps by region' },
      { id: 'disaster-medicine-complete', label: 'Complete Disaster & Humanitarian Medicine', desc: 'All disaster types with complete medical response frameworks: natural disasters (earthquake medical response — crush injury/compartment syndrome/rhabdomyolysis management, field surgery priorities; flood — all waterborne disease risks, water purification methods; hurricane/tornado — trauma surge; tsunami — drowning management, infectious disease surge; volcanic — respiratory ash injury management; wildfire — all burn management field protocols); all mass casualty incident (MCI) management (all ICS roles — Incident Commander/Medical Branch Director/Triage Unit Leadership/Treatment Unit Leadership/Transport Unit Leadership; all NIMS framework; all HEICS hospital incident command; all MCI resource management — all SALT/START/JumpSTART/CESIRA/SIEVE triage integration; all patient tracking systems — all disaster tags/barcoding); chemical disaster medicine (all nerve agent toxidromes and field antidotes — CHEMPACK program; all vesicant/blister agents mustard/lewisite management; all pulmonary agents phosgene/chlorine; all blood agents cyanide; all riot control agents; all CBRN decontamination protocols — all 3 zones hot/warm/cold; all PPE levels A/B/C/D); biological disaster medicine (all Category A/B/C bioterrorism agents — anthrax inhalational/cutaneous presentation and post-exposure prophylaxis; smallpox recognition and ring vaccination; plague pneumonic presentation and prophylaxis; botulism wound/foodborne/inhalational; tularemia; viral hemorrhagic fevers; all SNS Strategic National Stockpile activation); radiation emergency medicine (all radiation types and penetrating power; all acute radiation syndrome ARS — all 4 phases/all 4 syndromes hematopoietic/GI/cardiovascular/CNS; all dose thresholds; all initial treatment priorities; potassium iodide — thyroid protection; all radiological dispersal device dirty bomb response); humanitarian medicine (all Sphere Standards minimum standards in health action; all UNHCR health guidelines; all MSF field medicine protocols; all refugee camp health priorities — all WASH/nutrition/shelter/health service integration)' },
    ]
  },
];

// ── Compact AI Tutor widget usable anywhere ──
function MiniAITutor({ context, settings, placeholder, chips }) {
  const [q, setQ] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const ctx = (context || '').toLowerCase();
  const defaultChips = ctx.includes('naplex') || ctx.includes('pharmacy') || ctx.includes('drug')
    ? ['Top side effects?', 'Drug interaction warnings', 'Brand vs generic names', 'Dosage & monitoring']
    : ctx.includes('nclex') || ctx.includes('nursing')
    ? ['Priority nursing action?', 'SATA question tips', 'Lab values to know', 'Patient education key points']
    : ctx.includes('usmle') || ctx.includes('step')
    ? ['High-yield mechanism?', 'Classic presentation', 'First-line treatment', 'Common USMLE pitfalls']
    : ctx.includes('osce') || ctx.includes('clinical skill')
    ? ['OSCE checklist tips', 'Common mistakes in OSCE', 'How to present findings', 'Communication framework']
    : ctx.includes('plab') || ctx.includes('uk')
    ? ['PLAB 2 scenario tips', 'UK-specific guidelines', 'GMC framework', 'Common PLAB pitfalls']
    : ctx.includes('dha') || ctx.includes('haad') || ctx.includes('gulf')
    ? ['DHA/HAAD key topics', 'Middle East guidelines', 'Common MOH questions', 'Exam format tips']
    : ctx.includes('amc') || ctx.includes('australia')
    ? ['AMC exam strategy', 'Australian guidelines', 'Common AMC pitfalls', 'MCQ vs clinical exam']
    : ctx.includes('exam') || ctx.includes('global')
    ? ['Give me 5 practice questions', 'Common exam pitfalls', 'High-yield topics list', 'Exam format explained']
    : ctx.includes('disease') || ctx.includes('condition')
    ? ['Pathophysiology explained', 'Classic presentation', 'First-line treatment', 'Diagnostic criteria']
    : ctx.includes('surgery') || ctx.includes('surgical')
    ? ['Pre-op assessment', 'Surgical complications', 'Post-op care pearls', 'Anatomy key points']
    : ctx.includes('mental') || ctx.includes('psych')
    ? ['DSM-5 criteria', 'First-line medications', 'Therapy approaches', 'Suicide risk factors']
    : ctx.includes('dental') || ctx.includes('oral')
    ? ['Common dental emergencies', 'Local anesthesia tips', 'NBDE high-yield topics', 'Anatomy landmarks']
    : ['Explain the mechanism', 'Give me a mnemonic', 'Clinical pearls', 'Common exam mistakes'];

  const suggestions = chips || defaultChips;

  const ask = async () => {
    if (!q.trim() || loading) return;
    setLoading(true); setAnswer('');
    try {
      const prompt = `You are an expert medical/pharmacy AI tutor. Topic context: "${context}".
Student question: "${q}"

Answer clearly and completely. Include:
- Direct answer
- Key mechanism or explanation
- Clinical relevance
- Memory trick if applicable

Format with clear sections. Be thorough but concise.`;
      await callAIStreaming(prompt, chunk => setAnswer(chunk), settings, 3000);
    } catch (e) {
      setAnswer('Error: ' + e.message + '. Please add an API key in Settings.');
    } finally { setLoading(false); }
  };

  if (!open) return (
    <button onClick={() => setOpen(true)}
      className="flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-black transition-all hover:scale-105"
      style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: '#fff', boxShadow: '0 4px 16px rgba(99,102,241,.35)' }}>
      <BotMessageSquare size={16} /> Ask AI Tutor
    </button>
  );

  return (
    <div className="card-lined rounded-2xl overflow-hidden" style={{ borderTopColor: 'rgba(99,102,241,.4)' }}>
      <div className="flex items-center justify-between px-4 py-3 border-b border-[color:var(--border2,var(--border))]"
        style={{ background: 'linear-gradient(135deg,rgba(99,102,241,.12),rgba(139,92,246,.08))' }}>
        <span className="flex items-center gap-2 text-sm font-black text-[var(--accent)]">
          <BotMessageSquare size={15} /> AI Tutor
        </span>
        <button onClick={() => setOpen(false)} className="opacity-40 hover:opacity-80"><X size={15} /></button>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex gap-2">
          <input value={q} onChange={e => setQ(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && ask()}
            placeholder={placeholder || `Ask anything about ${context}…`}
            className="flex-1 glass-input rounded-xl px-3 py-2.5 text-sm" />
          <button onClick={ask} disabled={loading || !q.trim()}
            className="btn-accent px-4 py-2 rounded-xl text-sm font-black disabled:opacity-40">
            {loading ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
          </button>
        </div>
        {answer && (
          <div className="text-sm rounded-xl p-3 max-h-64 overflow-y-auto custom-scrollbar"
            style={{ background: 'rgba(99,102,241,.05)', border: '1px solid rgba(99,102,241,.15)' }}>
            {renderMarkdown(answer)}
          </div>
        )}
        {!answer && !loading && (
          <div className="flex flex-wrap gap-1.5">
            {suggestions.map(s => (
              <button key={s} onClick={() => { setQ(s); }}
                className="text-xs px-3 py-1.5 rounded-lg font-semibold transition-all hover:scale-105"
                style={{ background: 'rgba(99,102,241,.1)', color: 'var(--accent)', border: '1px solid rgba(99,102,241,.2)' }}>
                {s}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── OSCE Provider Communication Form ──
function OsceCommunicationForm({ topicKey, category, settings }) {
  const storageKey = `osce-comm-form:${topicKey}`;
  const col = category.color;

  // ── Patient Case state ──
  const [caseInput, setCaseInput] = useState('');
  const [patientCase, setPatientCase] = useState(null);
  const [loadingCase, setLoadingCase] = useState(false);

  // ── SBAR Form state ──
  const blankForm = () => ({
    toProvider: '', date: new Date().toLocaleDateString(),
    fromName: '', pharmacistPhone: '',
    patientName: '', dob: '',
    situation: '', background: '', assessment: '', recommendations: '',
    physicianChoice: '', physicianChange: '', physicianOther: '', physicianSignature: '',
    savedAt: null,
  });
  const [form, setForm] = useState(() => {
    try { const s = localStorage.getItem(storageKey); return s ? JSON.parse(s) : blankForm(); } catch { return blankForm(); }
  });
  const [saved, setSaved] = useState(false);

  // ── AI Evaluation state ──
  const [evaluation, setEvaluation] = useState(null);
  const [loadingEval, setLoadingEval] = useState(false);

  useEffect(() => {
    try { const s = localStorage.getItem(storageKey); setForm(s ? JSON.parse(s) : blankForm()); } catch { setForm(blankForm()); }
    setSaved(false); setEvaluation(null); setPatientCase(null); setCaseInput('');
  }, [storageKey]);

  const update = (field, val) => setForm(f => ({ ...f, [field]: val }));

  const save = () => {
    const toSave = { ...form, savedAt: new Date().toLocaleString() };
    try { localStorage.setItem(storageKey, JSON.stringify(toSave)); setForm(toSave); setSaved(true); setTimeout(() => setSaved(false), 2500); } catch {}
  };

  const clear = () => {
    if (!window.confirm('Clear this SBAR form?')) return;
    const b = blankForm(); setForm(b); setEvaluation(null);
    try { localStorage.removeItem(storageKey); } catch {}
  };

  // ── Generate Patient Case ──
  const generateCase = async () => {
    if (!caseInput.trim()) return;
    setLoadingCase(true); setPatientCase(null);
    try {
      const prompt = `You are a clinical educator creating a realistic OSCE patient case for healthcare students.
Generate a detailed, clinically accurate patient case for: "${caseInput}"

Return ONLY valid JSON with this exact structure:
{
  "title": "Brief case title, e.g. Hypertensive Urgency with CKD",
  "setting": "Clinical setting (e.g. Medical ward, Emergency department, Community pharmacy)",
  "task": "The student's specific task — what they are asked to do as a pharmacist/nurse/clinician",
  "patient": {
    "name": "Realistic full name",
    "age": 55,
    "gender": "Male/Female",
    "weight": "82 kg",
    "height": "175 cm",
    "occupation": "e.g. Retired teacher"
  },
  "chiefComplaint": "One-sentence chief complaint",
  "hpi": "2-3 sentence history of presenting illness with timeline and relevant symptoms",
  "pmh": ["Past medical history condition 1", "condition 2", "condition 3"],
  "allergies": ["Drug name (reaction type)", "NKDA if none"],
  "socialHistory": "Brief social history: smoking, alcohol, occupation, relevant lifestyle",
  "familyHistory": "Relevant family history",
  "vitals": {
    "BP": "178/104 mmHg",
    "HR": "88 bpm",
    "RR": "18 breaths/min",
    "Temp": "37.1°C",
    "SpO2": "97% on room air",
    "Weight": "82 kg"
  },
  "medications": [
    { "name": "Drug Brand® (generic)", "dose": "10mg", "route": "PO", "frequency": "daily", "indication": "for HTN" }
  ],
  "labs": [
    { "test": "Test name", "value": "Result with units", "normalRange": "Normal range", "flag": "High/Low/Normal" }
  ],
  "physicalExam": "Relevant physical examination findings",
  "imagingOther": "Any relevant imaging or other test results (or 'None')",
  "clinicalQuestion": "The specific clinical question the student must address in their SBAR communication"
}

Make the case realistic and challenging — include clinically relevant comorbidities, realistic labs with some abnormalities, and a clear clinical problem requiring SBAR communication to a prescriber.`;
      const raw = await callAI(prompt, true, false, settings, 3000);
      setPatientCase(parseJson(raw));
    } catch (e) { setPatientCase({ error: e.message }); }
    finally { setLoadingCase(false); }
  };

  // ── Evaluate SBAR ──
  const evaluate = async () => {
    const hasContent = form.situation.trim() || form.background.trim() || form.assessment.trim() || form.recommendations.trim();
    if (!hasContent) { alert('Please fill in at least one SBAR section before evaluating.'); return; }
    setLoadingEval(true); setEvaluation(null);
    const caseContext = patientCase && !patientCase.error
      ? `PATIENT CASE PROVIDED TO STUDENT:\nTitle: ${patientCase.title}\nTask: ${patientCase.task}\nPatient: ${patientCase.patient?.name}, ${patientCase.patient?.age}yo ${patientCase.patient?.gender}\nChief Complaint: ${patientCase.chiefComplaint}\nHPI: ${patientCase.hpi}\nPMH: ${(patientCase.pmh||[]).join(', ')}\nAllergies: ${(patientCase.allergies||[]).join(', ')}\nVitals: ${JSON.stringify(patientCase.vitals||{})}\nMedications: ${(patientCase.medications||[]).map(m=>`${m.name} ${m.dose} ${m.route} ${m.frequency}`).join('; ')}\nLabs: ${(patientCase.labs||[]).map(l=>`${l.test}: ${l.value} (${l.flag})`).join(', ')}\nClinical Question: ${patientCase.clinicalQuestion}`
      : 'No specific patient case was generated — evaluate the SBAR based on general clinical accuracy.';
    try {
      const prompt = `You are an expert clinical educator evaluating a student's SBAR communication form.

${caseContext}

STUDENT'S SBAR SUBMISSION:
━━━━━━━━━━━━━━━━━━━━━━━
S — Situation:
${form.situation || '(left blank)'}

B — Background:
${form.background || '(left blank)'}

A — Assessment:
${form.assessment || '(left blank)'}

R — Recommendation(s):
${form.recommendations || '(left blank)'}
━━━━━━━━━━━━━━━━━━━━━━━

Evaluate the student's SBAR thoroughly. Return ONLY valid JSON:
{
  "overallScore": 82,
  "overallGrade": "B+",
  "overallSummary": "2-3 sentence overall assessment of the SBAR quality and clinical reasoning",
  "sections": {
    "situation": {
      "score": 85,
      "status": "Good/Needs Work/Excellent/Missing",
      "strengths": ["specific strength 1", "strength 2"],
      "issues": ["specific issue 1", "issue 2"],
      "missingElements": ["element that should have been included"],
      "modelAnswer": "What an ideal Situation section for this case would say"
    },
    "background": {
      "score": 75,
      "status": "Good/Needs Work/Excellent/Missing",
      "strengths": ["specific strength 1"],
      "issues": ["specific issue 1", "issue 2"],
      "missingElements": ["missing lab value", "missing allergy info"],
      "modelAnswer": "What an ideal Background section for this case would say"
    },
    "assessment": {
      "score": 80,
      "status": "Good/Needs Work/Excellent/Missing",
      "strengths": ["specific strength 1"],
      "issues": ["specific issue 1"],
      "missingElements": ["guideline reference missing", "goal BP not stated"],
      "modelAnswer": "What an ideal Assessment section for this case would say"
    },
    "recommendations": {
      "score": 88,
      "status": "Good/Needs Work/Excellent/Missing",
      "strengths": ["specific strength 1"],
      "issues": ["specific issue 1"],
      "missingElements": ["monitoring parameters not specified"],
      "modelAnswer": "What ideal Recommendations for this case would say"
    }
  },
  "criticalErrors": ["Any clinically dangerous or unacceptable errors — empty array if none"],
  "topStrengths": ["Best things the student did"],
  "priorityImprovements": ["Most important things to fix, in priority order"],
  "examTip": "One key exam/OSCE tip relevant to this SBAR scenario",
  "clinicalAccuracyNote": "Comment on clinical accuracy of drug choices, doses, guidelines cited"
}`;
      const raw = await callAI(prompt, true, false, settings, 4000);
      setEvaluation(parseJson(raw));
    } catch (e) { setEvaluation({ error: e.message }); }
    finally { setLoadingEval(false); }
  };

  const scoreColor = (score) => {
    if (score >= 85) return '#10b981';
    if (score >= 70) return '#f59e0b';
    return '#ef4444';
  };

  const statusIcon = (status) => {
    if (!status) return null;
    const s = status.toLowerCase();
    if (s === 'excellent') return '★';
    if (s === 'good') return '✓';
    if (s === 'needs work') return '△';
    return '✗';
  };

  const SbarTA = ({ field, rows, placeholder }) => (
    <textarea value={form[field] || ''} onChange={e => update(field, e.target.value)}
      rows={rows} placeholder={placeholder}
      className="glass-input rounded-xl px-3 py-2.5 text-sm outline-none resize-y w-full leading-relaxed"
      style={{ border: `1.5px solid ${col}25`, background: 'var(--card)', color: 'var(--text)' }} />
  );

  return (
    <div className="space-y-3">
      {/* ── Page header ── */}
      <div className="flex items-center gap-2 px-1">
        <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background: col + '20' }}>
          <FileText size={15} style={{ color: col }} />
        </div>
        <div className="flex-1">
          <p className="text-sm font-black" style={{ color: col }}>SBAR Practice Station</p>
          <p className="text-[10px] opacity-40">Generate a patient case → fill the SBAR form → get AI evaluation</p>
        </div>
      </div>

      {/* ── Two-panel layout ── */}
      <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', flexWrap: 'wrap' }}>

        {/* ═══════════════════════════════════════
            LEFT PANEL — Patient Case Generator
        ═══════════════════════════════════════ */}
        <div style={{ flex: '0 0 44%', minWidth: 280, maxWidth: '100%' }} className="space-y-3">
          {/* Case input */}
          <div className="card-lined rounded-2xl p-4 space-y-3" style={{ borderTopColor: col + '70' }}>
            <p className="text-xs font-black uppercase tracking-widest" style={{ color: col }}>
              Patient Case Generator
            </p>
            <p className="text-[11px] opacity-50 leading-relaxed">
              Enter a medication, disease, or clinical scenario. The AI will generate a full realistic patient case for you to practise your SBAR communication on.
            </p>
            <div className="flex flex-col gap-2">
              <input
                value={caseInput}
                onChange={e => setCaseInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') generateCase(); }}
                placeholder="e.g. Warfarin toxicity, Diabetic ketoacidosis, Vancomycin dosing…"
                className="glass-input rounded-xl px-4 py-2.5 text-sm outline-none w-full"
                style={{ border: `1.5px solid ${col}30`, background: 'var(--card)', color: 'var(--text)' }}
              />
              <button
                onClick={generateCase}
                disabled={loadingCase || !caseInput.trim()}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-black text-white transition-all disabled:opacity-40"
                style={{ background: `linear-gradient(135deg, ${col}, ${col}cc)` }}>
                {loadingCase ? <><Loader2 size={14} className="animate-spin" /> Generating case…</> : <><Sparkles size={14} /> Generate Patient Case</>}
              </button>
            </div>
          </div>

          {/* Generated case display */}
          {loadingCase && (
            <div className="card-lined rounded-2xl p-6 flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center animate-pulse" style={{ background: col + '20' }}>
                <Loader2 size={22} className="animate-spin" style={{ color: col }} />
              </div>
              <p className="text-xs font-black opacity-50">Creating patient case…</p>
            </div>
          )}

          {patientCase?.error && (
            <div className="card-lined rounded-2xl p-4 text-center space-y-2">
              <AlertCircle size={22} className="mx-auto text-red-400" />
              <p className="text-xs text-red-400">{patientCase.error}</p>
              <button onClick={generateCase} className="text-xs font-black px-3 py-1.5 rounded-xl glass opacity-60 hover:opacity-100">Retry</button>
            </div>
          )}

          {patientCase && !patientCase.error && (
            <div className="card-lined rounded-2xl overflow-hidden" style={{ borderTopColor: col + '60' }}>
              {/* Case header */}
              <div className="px-4 py-3" style={{ background: col + '12', borderBottom: `1px solid ${col}20` }}>
                <p className="text-xs font-black" style={{ color: col }}>{patientCase.title}</p>
                <p className="text-[10px] opacity-50 mt-0.5">{patientCase.setting}</p>
              </div>
              <div className="p-4 space-y-3">
                {/* Task banner */}
                <div className="rounded-xl p-3" style={{ background: col + '15', border: `1px solid ${col}30` }}>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Your Task</p>
                  <p className="text-xs font-semibold leading-relaxed">{patientCase.task}</p>
                </div>

                {/* Patient info grid */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    ['Patient', `${patientCase.patient?.name}, ${patientCase.patient?.age}yo ${patientCase.patient?.gender}`],
                    ['Weight / Height', `${patientCase.patient?.weight} / ${patientCase.patient?.height}`],
                    ['Chief Complaint', patientCase.chiefComplaint],
                    ['Occupation', patientCase.patient?.occupation],
                  ].map(([lbl, val]) => val ? (
                    <div key={lbl} className="rounded-xl p-2.5 col-span-1" style={{ background: 'var(--surface)' }}>
                      <p className="text-[9px] font-black uppercase tracking-widest opacity-40 mb-0.5">{lbl}</p>
                      <p className="text-xs font-semibold leading-snug">{val}</p>
                    </div>
                  ) : null)}
                </div>

                {/* HPI */}
                {patientCase.hpi && (
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest opacity-40 mb-1">History of Presenting Illness</p>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text2)' }}>{patientCase.hpi}</p>
                  </div>
                )}

                {/* PMH + Allergies */}
                <div className="grid grid-cols-2 gap-2">
                  {patientCase.pmh?.length > 0 && (
                    <div className="col-span-1">
                      <p className="text-[9px] font-black uppercase tracking-widest opacity-40 mb-1">PMH</p>
                      <ul className="space-y-0.5">
                        {patientCase.pmh.map((c, i) => <li key={i} className="text-xs" style={{ color: 'var(--text2)' }}>• {c}</li>)}
                      </ul>
                    </div>
                  )}
                  {patientCase.allergies?.length > 0 && (
                    <div className="col-span-1">
                      <p className="text-[9px] font-black uppercase tracking-widest opacity-40 mb-1">Allergies</p>
                      {patientCase.allergies.map((a, i) => (
                        <span key={i} className="inline-block text-[10px] font-black px-2 py-0.5 rounded-lg mr-1 mb-1 text-white" style={{ background: '#ef444490' }}>{a}</span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Vitals */}
                {patientCase.vitals && (
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest opacity-40 mb-1.5">Vitals</p>
                    <div className="grid grid-cols-3 gap-1.5">
                      {Object.entries(patientCase.vitals).map(([k, v]) => (
                        <div key={k} className="rounded-lg p-2 text-center" style={{ background: col + '10' }}>
                          <p className="text-[8px] font-black uppercase opacity-50">{k}</p>
                          <p className="text-[11px] font-black" style={{ color: col }}>{v}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Medications */}
                {patientCase.medications?.length > 0 && (
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest opacity-40 mb-1">Current Medications</p>
                    <div className="space-y-1">
                      {patientCase.medications.map((m, i) => (
                        <div key={i} className="flex items-baseline gap-2 text-xs rounded-lg px-2.5 py-1.5" style={{ background: 'var(--surface)' }}>
                          <span className="font-semibold shrink-0">{m.name}</span>
                          <span className="opacity-60">{m.dose} {m.route} {m.frequency}</span>
                          {m.indication && <span className="opacity-40 text-[10px] ml-auto shrink-0">{m.indication}</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Labs */}
                {patientCase.labs?.length > 0 && (
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest opacity-40 mb-1.5">Labs</p>
                    <div className="rounded-xl overflow-hidden border" style={{ borderColor: col + '20' }}>
                      <table className="w-full text-[11px]">
                        <thead>
                          <tr style={{ background: col + '12' }}>
                            <th className="px-2.5 py-1.5 text-left font-black opacity-60">Test</th>
                            <th className="px-2.5 py-1.5 text-left font-black opacity-60">Result</th>
                            <th className="px-2.5 py-1.5 text-left font-black opacity-60">Normal</th>
                            <th className="px-2.5 py-1.5 text-left font-black opacity-60">Flag</th>
                          </tr>
                        </thead>
                        <tbody>
                          {patientCase.labs.map((l, i) => (
                            <tr key={i} style={{ borderTop: `1px solid ${col}10` }}>
                              <td className="px-2.5 py-1 font-semibold">{l.test}</td>
                              <td className="px-2.5 py-1">{l.value}</td>
                              <td className="px-2.5 py-1 opacity-50">{l.normalRange}</td>
                              <td className="px-2.5 py-1">
                                <span className="font-black text-[10px]"
                                  style={{ color: l.flag?.toLowerCase() === 'normal' ? '#10b981' : '#ef4444' }}>
                                  {l.flag}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Physical exam + imaging */}
                {(patientCase.physicalExam || patientCase.imagingOther) && (
                  <div className="space-y-1.5">
                    {patientCase.physicalExam && (
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-widest opacity-40 mb-0.5">Physical Exam</p>
                        <p className="text-xs leading-relaxed" style={{ color: 'var(--text2)' }}>{patientCase.physicalExam}</p>
                      </div>
                    )}
                    {patientCase.imagingOther && patientCase.imagingOther !== 'None' && (
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-widest opacity-40 mb-0.5">Imaging / Other</p>
                        <p className="text-xs leading-relaxed" style={{ color: 'var(--text2)' }}>{patientCase.imagingOther}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Clinical question */}
                {patientCase.clinicalQuestion && (
                  <div className="rounded-xl p-3 mt-1" style={{ background: col + '18', border: `1.5px solid ${col}35` }}>
                    <p className="text-[9px] font-black uppercase tracking-widest mb-1" style={{ color: col }}>Clinical Question to Address in SBAR</p>
                    <p className="text-xs font-semibold leading-relaxed">{patientCase.clinicalQuestion}</p>
                  </div>
                )}

                <button
                  onClick={generateCase}
                  className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl text-[11px] font-black opacity-40 hover:opacity-70 glass">
                  <RefreshCw size={11} /> New Case
                </button>
              </div>
            </div>
          )}

          {/* Evaluation results (shown below case on left panel) */}
          {(evaluation || loadingEval) && (
            <div className="card-lined rounded-2xl overflow-hidden" style={{ borderTopColor: evaluation?.error ? '#ef4444' : col + '80' }}>
              <div className="px-4 py-3 flex items-center gap-2" style={{ background: col + '12', borderBottom: `1px solid ${col}20` }}>
                <Target size={13} style={{ color: col }} />
                <p className="text-xs font-black" style={{ color: col }}>AI Evaluation</p>
              </div>

              {loadingEval && (
                <div className="p-6 flex flex-col items-center gap-3">
                  <Loader2 size={22} className="animate-spin" style={{ color: col }} />
                  <p className="text-xs font-black opacity-50">Evaluating your SBAR…</p>
                </div>
              )}

              {evaluation?.error && (
                <div className="p-4 text-center space-y-2">
                  <AlertCircle size={20} className="mx-auto text-red-400" />
                  <p className="text-xs text-red-400">{evaluation.error}</p>
                </div>
              )}

              {evaluation && !evaluation.error && !loadingEval && (
                <div className="p-4 space-y-4">
                  {/* Overall score */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center shrink-0"
                      style={{ background: scoreColor(evaluation.overallScore || 0) + '20', border: `2px solid ${scoreColor(evaluation.overallScore || 0)}40` }}>
                      <span className="text-xl font-black" style={{ color: scoreColor(evaluation.overallScore || 0) }}>{evaluation.overallScore}</span>
                      <span className="text-[10px] font-black opacity-60">{evaluation.overallGrade}</span>
                    </div>
                    <p className="text-xs leading-relaxed flex-1" style={{ color: 'var(--text2)' }}>{evaluation.overallSummary}</p>
                  </div>

                  {/* Critical errors */}
                  {evaluation.criticalErrors?.length > 0 && (
                    <div className="rounded-xl p-3 space-y-1.5" style={{ background: '#ef444412', border: '1.5px solid #ef444430' }}>
                      <p className="text-[10px] font-black uppercase tracking-widest text-red-400">⚠ Critical Errors</p>
                      {evaluation.criticalErrors.map((e, i) => (
                        <p key={i} className="text-xs text-red-400">• {e}</p>
                      ))}
                    </div>
                  )}

                  {/* Sections */}
                  {evaluation.sections && Object.entries(evaluation.sections).map(([sec, data]) => (
                    <div key={sec} className="rounded-xl overflow-hidden" style={{ border: `1.5px solid ${col}20` }}>
                      <div className="px-3 py-2 flex items-center justify-between"
                        style={{ background: scoreColor(data.score || 0) + '12', borderBottom: `1px solid ${col}15` }}>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-black" style={{ color: col }}>{sec.charAt(0).toUpperCase()}</span>
                          <span className="text-xs font-black capitalize" style={{ color: 'var(--text)' }}>{sec}</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded-md font-black"
                            style={{ background: scoreColor(data.score || 0) + '20', color: scoreColor(data.score || 0) }}>
                            {statusIcon(data.status)} {data.status}
                          </span>
                        </div>
                        <span className="text-sm font-black" style={{ color: scoreColor(data.score || 0) }}>{data.score}</span>
                      </div>
                      <div className="p-3 space-y-2">
                        {data.strengths?.length > 0 && (
                          <div>
                            {data.strengths.map((s, i) => <p key={i} className="text-[11px] text-emerald-500">✓ {s}</p>)}
                          </div>
                        )}
                        {data.issues?.length > 0 && (
                          <div>
                            {data.issues.map((s, i) => <p key={i} className="text-[11px] text-amber-500">△ {s}</p>)}
                          </div>
                        )}
                        {data.missingElements?.length > 0 && (
                          <div>
                            {data.missingElements.map((s, i) => <p key={i} className="text-[11px] text-red-400">✗ Missing: {s}</p>)}
                          </div>
                        )}
                        {data.modelAnswer && (
                          <details className="mt-1">
                            <summary className="text-[10px] font-black cursor-pointer opacity-50 hover:opacity-80" style={{ color: col }}>Model answer →</summary>
                            <p className="text-[11px] mt-2 leading-relaxed p-2 rounded-lg"
                              style={{ background: col + '08', color: 'var(--text2)' }}>{data.modelAnswer}</p>
                          </details>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Top strengths + priority improvements */}
                  {evaluation.topStrengths?.length > 0 && (
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">What You Did Well</p>
                      {evaluation.topStrengths.map((s, i) => <p key={i} className="text-xs text-emerald-500 mb-0.5">★ {s}</p>)}
                    </div>
                  )}
                  {evaluation.priorityImprovements?.length > 0 && (
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">Priority Improvements</p>
                      {evaluation.priorityImprovements.map((s, i) => (
                        <p key={i} className="text-xs mb-0.5 flex items-start gap-1.5">
                          <span className="font-black shrink-0" style={{ color: col }}>#{i + 1}</span>
                          <span style={{ color: 'var(--text2)' }}>{s}</span>
                        </p>
                      ))}
                    </div>
                  )}
                  {evaluation.clinicalAccuracyNote && (
                    <div className="rounded-xl p-3" style={{ background: 'var(--surface)' }}>
                      <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">Clinical Accuracy</p>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--text2)' }}>{evaluation.clinicalAccuracyNote}</p>
                    </div>
                  )}
                  {evaluation.examTip && (
                    <div className="rounded-xl p-3" style={{ background: col + '10', border: `1px solid ${col}25` }}>
                      <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: col }}>OSCE Tip</p>
                      <p className="text-xs leading-relaxed">{evaluation.examTip}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* ═══════════════════════════════════════
            RIGHT PANEL — SBAR Form
        ═══════════════════════════════════════ */}
        <div style={{ flex: '1 1 50%', minWidth: 300 }}>
          <div className="card-lined rounded-2xl overflow-hidden" style={{ borderTopColor: col + '70' }}>
            {/* Form toolbar */}
            <div className="px-4 py-3 flex items-center justify-between gap-3 flex-wrap"
              style={{ background: col + '12', borderBottom: `1.5px solid ${col}25` }}>
              <div>
                <p className="text-xs font-black" style={{ color: col }}>SBAR Communication Form</p>
                <p className="text-[10px] opacity-40">Situation · Background · Assessment · Recommendation</p>
              </div>
              <div className="flex items-center gap-2">
                {form.savedAt && <span className="text-[10px] opacity-40 hidden sm:block">Saved {form.savedAt}</span>}
                <button onClick={clear} className="px-2.5 py-1.5 rounded-xl text-[11px] font-black opacity-40 hover:opacity-70 glass">Clear</button>
                <button onClick={save}
                  className="px-3 py-1.5 rounded-xl text-[11px] font-black text-white transition-all"
                  style={{ background: saved ? '#10b981' : col }}>
                  {saved ? '✓ Saved' : 'Save'}
                </button>
              </div>
            </div>

            <div className="p-4 space-y-4">
              {/* Header fields */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  ['To (Provider)', 'toProvider', 'Dr. Smith'],
                  ['Date', 'date', 'MM/DD/YYYY'],
                  ['From (Name & Credentials)', 'fromName', 'Jane Doe, PharmD'],
                  ['Contact Number', 'pharmacistPhone', '555-0000'],
                  ['Patient Name', 'patientName', 'Full name'],
                  ['Date of Birth', 'dob', 'MM/DD/YYYY'],
                ].map(([lbl, field, ph]) => (
                  <div key={field} className="flex flex-col gap-1">
                    <label className="text-[9px] font-black uppercase tracking-widest" style={{ color: col }}>{lbl}</label>
                    <input value={form[field] || ''} onChange={e => update(field, e.target.value)}
                      placeholder={ph}
                      className="glass-input rounded-xl px-3 py-2 text-xs outline-none w-full"
                      style={{ border: `1.5px solid ${col}20`, background: 'var(--card)', color: 'var(--text)' }} />
                  </div>
                ))}
              </div>

              <div className="border-t" style={{ borderColor: col + '15' }} />

              {/* S */}
              <div className="rounded-2xl p-3 space-y-2" style={{ background: col + '07', border: `1.5px solid ${col}18` }}>
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0" style={{ background: col + '25' }}>
                    <span className="text-xs font-black" style={{ color: col }}>S</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-black" style={{ color: col }}>Situation</p>
                    <p className="text-[10px] opacity-40 mt-0.5">Who is the patient, what is happening, and why are you calling?</p>
                  </div>
                </div>
                <SbarTA field="situation" rows={4}
                  placeholder="e.g. Mr. J.D. is a 62-year-old male admitted to the medical ward for hypertensive urgency. I am contacting you to recommend a change in his antihypertensive regimen…" />
              </div>

              {/* B */}
              <div className="rounded-2xl p-3 space-y-2" style={{ background: 'var(--surface)', border: `1.5px solid ${col}15` }}>
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0" style={{ background: col + '20' }}>
                    <span className="text-xs font-black" style={{ color: col }}>B</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-black" style={{ color: col }}>Background</p>
                    <p className="text-[10px] opacity-40 mt-0.5">PMH, allergies, vitals, labs, current medications, relevant history.</p>
                  </div>
                </div>
                <SbarTA field="background" rows={6}
                  placeholder="PMH: HTN, Type 2 DM, CKD stage 3&#10;Allergies: Penicillin (rash)&#10;Vitals: BP 178/104, HR 88, Temp 37.1°C&#10;Labs: SCr 1.4, eGFR 52, K+ 4.2&#10;Medications: Amlodipine 10mg daily…" />
              </div>

              {/* A */}
              <div className="rounded-2xl p-3 space-y-2" style={{ background: col + '07', border: `1.5px solid ${col}18` }}>
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0" style={{ background: col + '25' }}>
                    <span className="text-xs font-black" style={{ color: col }}>A</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-black" style={{ color: col }}>Assessment</p>
                    <p className="text-[10px] opacity-40 mt-0.5">Your clinical assessment — is the patient at goal? Reference guidelines.</p>
                  </div>
                </div>
                <SbarTA field="assessment" rows={4}
                  placeholder="e.g. Patient's BP is not at goal (target <130/80 per ACC/AHA 2023). Amlodipine 10mg is at maximum dose. CKD stage 3 (eGFR 52) restricts some agents but favours RAAS blockade…" />
              </div>

              {/* R */}
              <div className="rounded-2xl p-3 space-y-2" style={{ background: 'var(--surface)', border: `1.5px solid ${col}15` }}>
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0" style={{ background: col + '25' }}>
                    <span className="text-xs font-black" style={{ color: col }}>R</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-black" style={{ color: col }}>Recommendation(s)</p>
                    <p className="text-[10px] opacity-40 mt-0.5">Drug · dose · route · frequency. Monitoring for efficacy &amp; toxicity. Non-pharmacologic measures.</p>
                  </div>
                </div>
                <SbarTA field="recommendations" rows={6}
                  placeholder="1. Recommend initiating Losartan® (losartan) 50mg PO daily — ARB preferred in CKD. Titrate to 100mg based on response.&#10;2. Monitor BP weekly ×4 weeks.&#10;3. Check K+ and SCr 1–2 weeks after initiation.&#10;4. Non-pharm: DASH diet, Na⁺ <2g/day, aerobic exercise 30 min/day." />
              </div>

              {/* Physician Response */}
              <div className="rounded-2xl overflow-hidden" style={{ border: `1.5px solid ${col}25` }}>
                <div className="px-3 py-2 flex items-center gap-2" style={{ background: col + '12', borderBottom: `1px solid ${col}20` }}>
                  <Stethoscope size={12} style={{ color: col }} />
                  <span className="text-[11px] font-black" style={{ color: col }}>Physician Response</span>
                </div>
                <div className="p-3 space-y-2.5">
                  {[
                    { val: 'implement', label: 'Please implement proposed recommendation' },
                    { val: 'change', label: 'Please implement the following change:' },
                    { val: 'other', label: 'Other:' },
                  ].map(({ val, label }) => (
                    <label key={val} className="flex items-start gap-2.5 cursor-pointer">
                      <div onClick={() => update('physicianChoice', form.physicianChoice === val ? '' : val)}
                        className="w-4 h-4 rounded border-2 shrink-0 flex items-center justify-center transition-all mt-0.5"
                        style={{ borderColor: col, background: form.physicianChoice === val ? col : 'transparent' }}>
                        {form.physicianChoice === val && <span className="text-white text-[9px] font-black">✓</span>}
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-semibold">{label}</span>
                        {val === 'change' && form.physicianChoice === 'change' && (
                          <input value={form.physicianChange || ''} onChange={e => update('physicianChange', e.target.value)}
                            placeholder="Describe the change…"
                            className="glass-input rounded-xl px-3 py-1.5 text-xs outline-none w-full mt-1.5"
                            style={{ border: `1.5px solid ${col}25`, background: 'var(--card)', color: 'var(--text)' }} />
                        )}
                        {val === 'other' && form.physicianChoice === 'other' && (
                          <input value={form.physicianOther || ''} onChange={e => update('physicianOther', e.target.value)}
                            placeholder="Describe other response…"
                            className="glass-input rounded-xl px-3 py-1.5 text-xs outline-none w-full mt-1.5"
                            style={{ border: `1.5px solid ${col}25`, background: 'var(--card)', color: 'var(--text)' }} />
                        )}
                      </div>
                    </label>
                  ))}
                  <div className="pt-2 border-t" style={{ borderColor: col + '15' }}>
                    <label className="text-[9px] font-black uppercase tracking-widest" style={{ color: col }}>Physician Signature</label>
                    <input value={form.physicianSignature || ''} onChange={e => update('physicianSignature', e.target.value)}
                      placeholder="Physician signature / name"
                      className="glass-input rounded-xl px-3 py-2 text-xs outline-none w-full mt-1"
                      style={{ border: `1.5px solid ${col}20`, background: 'var(--card)', color: 'var(--text)', fontFamily: 'cursive' }} />
                  </div>
                </div>
              </div>

              {/* ── Evaluate button ── */}
              <button
                onClick={evaluate}
                disabled={loadingEval}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-black text-white transition-all disabled:opacity-50 shadow-lg"
                style={{ background: loadingEval ? col + '80' : `linear-gradient(135deg, ${col}, ${col}bb)` }}>
                {loadingEval
                  ? <><Loader2 size={15} className="animate-spin" /> Evaluating your SBAR…</>
                  : <><CheckCircle2 size={15} /> Evaluate My SBAR</>}
              </button>
              {!evaluation && !loadingEval && (
                <p className="text-[10px] text-center opacity-30">Fill in the SBAR sections above, then click Evaluate to get AI feedback on your clinical reasoning.</p>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ── AI-generated content table for a topic ──
function TopicContentPanel({ category, subcategory, settings }) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fromCache, setFromCache] = useState(false);
  const [searchQ, setSearchQ] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [practiceQs, setPracticeQs] = useState(null);
  const [loadingQs, setLoadingQs] = useState(false);
  const [revealedAnswers, setRevealedAnswers] = useState({});
  const [sortCol, setSortCol] = useState(null);
  const [sortDir, setSortDir] = useState('asc');
  const [practiceDifficulty, setPracticeDifficulty] = useState('mixed');
  const [practiceCount, setPracticeCount] = useState(10);
  const [rapidIdx, setRapidIdx] = useState(0);
  const [rapidFlipped, setRapidFlipped] = useState(false);
  const [tablePage, setTablePage] = useState(0);
  const TABLE_PAGE_SIZE = 50;

  const exportCSV = () => {
    if (!content?.tableData) return;
    const hdr = content.tableData.headers?.join(',') || '';
    const rows = (content.tableData.rows || []).map(r => r.map(c => `"${String(c).replace(/"/g,'""')}"`).join(',')).join('\n');
    const blob = new Blob([`${hdr}\n${rows}`], { type: 'text/csv' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
    a.download = `${subcategory.label.replace(/[^a-z0-9]/gi,'_')}.csv`; a.click();
  };

  const generateQuestions = async () => {
    setLoadingQs(true); setPracticeQs(null); setRevealedAnswers({});
    try {
      const diffRule = practiceDifficulty === 'easy' ? 'All Easy — straightforward recall and recognition'
        : practiceDifficulty === 'medium' ? 'All Medium — application and analysis level'
        : practiceDifficulty === 'hard' ? 'All Hard — synthesis and evaluation level'
        : practiceDifficulty === 'board' ? 'All Board-Level — complex clinical reasoning matching real USMLE/NAPLEX/NCLEX difficulty'
        : `Mixed: ${Math.max(1,Math.round(practiceCount*0.2))} Easy, ${Math.max(1,Math.round(practiceCount*0.5))} Medium, ${Math.max(1,Math.round(practiceCount*0.3))} Hard`;
      const prompt = `You are a world-class medical exam author. Generate ${practiceCount} high-yield board-exam style multiple choice questions for:

CATEGORY: ${category.label}
TOPIC: ${subcategory.label}

Return ONLY valid JSON array:
[
  {
    "question": "A 45-year-old patient presents with...",
    "options": [
      {"letter": "A", "text": "Option A text"},
      {"letter": "B", "text": "Option B text"},
      {"letter": "C", "text": "Option C text"},
      {"letter": "D", "text": "Option D text"}
    ],
    "answer": "B",
    "explanation": "Detailed explanation of why B is correct and why others are wrong. Include clinical reasoning, mechanism, and exam tip.",
    "difficulty": "Easy|Medium|Hard|Board",
    "examContext": "USMLE Step 1|NCLEX|NAPLEX|PLAB|DHA|AMC|General"
  }
]

RULES:
1. Generate exactly ${practiceCount} questions
2. Difficulty: ${diffRule}
3. Questions must be clinical-scenario based (vignette style)
4. Each explanation must be comprehensive (3-5 sentences) and teach the concept
5. Cover different aspects of ${subcategory.label} across the ${practiceCount} questions
6. Make globally relevant — suitable for USMLE, PLAB, NCLEX, NAPLEX, DHA, AMC exam takers`;

      const raw = await callAI(prompt, true, false, settings, Math.min(4000 + practiceCount * 400, 10000));
      const parsed = parseJson(raw);
      const qs = Array.isArray(parsed) ? parsed : parsed.questions || [];
      setPracticeQs(qs);
      // Persist so they are never lost on navigation or refresh
      try { localStorage.setItem(QS_CACHE_KEY, JSON.stringify(qs)); } catch {}
    } catch (e) {
      setPracticeQs({ error: e.message });
    } finally { setLoadingQs(false); }
  };

  const topicKey = `${category.id}::${subcategory.id}`;
  const QS_CACHE_KEY = `practiceQs:${topicKey}`;

  // Load from cache on mount / topic change; only call AI if not cached
  useEffect(() => {
    let cancelled = false;
    setContent(null); setFromCache(false); setLoading(true);
    setSearchQ(''); setSortCol(null); setSortDir('asc'); setTablePage(0); setActiveTab('overview');
    // Restore cached practice Qs for this topic
    try {
      const savedQs = localStorage.getItem(QS_CACHE_KEY);
      if (savedQs) { setPracticeQs(JSON.parse(savedQs)); } else { setPracticeQs(null); }
    } catch { setPracticeQs(null); }
    setRevealedAnswers({});
    (async () => {
      try {
        const cached = await getTopicCache(topicKey);
        if (cancelled) return;
        if (cached?.data) {
          setContent(cached.data);
          setFromCache(true);
          setLoading(false);
          return;
        }
      } catch { /* cache miss — continue to generate */ }
      if (!cancelled) generateAndCache();
    })();
    return () => { cancelled = true; };
  }, [topicKey]);

  const generateAndCache = async (forceRefresh = false) => {
    setLoading(true); setContent(null); setFromCache(false);
    try {
      const prompt = `You are a world-class medical and healthcare education AI. Your task is to generate the MOST COMPLETE, A-to-Z, exhaustive global reference for the topic below — as if writing the definitive international textbook chapter on it.

CATEGORY: ${category.label}
TOPIC: ${subcategory.label}
DESCRIPTION: ${subcategory.desc}

Return ONLY valid JSON with this exact structure:
{
  "overview": "6-8 paragraph EXHAUSTIVE overview covering: precise definition, global epidemiology with statistics, complete pathophysiology/mechanism of action, ALL clinical presentations and variants, ALL diagnostic criteria and gold-standard workup, ALL management guidelines (US/UK/AUS/Middle East/India/Canada), prognosis, and board-exam relevance",
  "keyPoints": [
    "High-yield point — must include specific numbers, doses, thresholds, or percentages",
    "...continue for EVERY high-yield fact that exists on this topic — do not stop until exhausted"
  ],
  "tableData": {
    "headers": ["Column1","Column2","Column3","Column4","Column5"],
    "rows": [
      ["data","data","data","data","data"]
    ]
  },
  "clinicalPearls": [
    "Pearl — specific, actionable, exam-tested",
    "...include EVERY pearl that exists for this topic worldwide"
  ],
  "mnemonics": [
    {"mnemonic":"ACRONYM","meaning":"A=First, C=Second, R=Third, O=Fourth, N=Fifth, Y=Sixth, M=Seventh","topic":"what concept this helps memorize"},
    {"mnemonic":"SECOND","meaning":"S=..., E=..., C=..., O=..., N=..., D=...","topic":"another concept"}
  ],
  "commonMistakes": [
    "Mistake — why students get this wrong on exams",
    "...include every known misconception on this topic"
  ],
  "examTips": [
    "Tip — specific strategy for USMLE/NAPLEX/NCLEX/PLAB/DHA",
    "...include every exam strategy relevant to this topic"
  ],
  "subtopics": [
    {"name":"Subtopic Name","summary":"3-4 sentence comprehensive clinical summary with specific facts, values, and management steps","keyFact":"The single most HY testable fact about this subtopic"}
  ]
}

═══════════════════════════════════════════════════════
IRON-CLAD CONTENT RULES — violation is not permitted:
═══════════════════════════════════════════════════════

RULE 1 — tableData: GENERATE EVERY ROW THAT EXISTS IN THE REAL WORLD.
Do NOT impose any row limit. If the topic has 200 drugs, list all 200. If there are 150 diseases, list all 150. If there are 80 lab tests, list all 80.
Think: "What is the complete, unabridged global list for this topic?" — then generate that list in full, from A to Z, leaving nothing out.
Every cell must contain REAL, accurate, specific medical data — no placeholders, no "see above", no "etc.".
Choose the correct column schema based on the topic:
   • DRUGS/PHARMACOLOGY → Drug Name (Brand® / generic) | Drug Class | Mechanism of Action | Key Indications | Side Effects, Monitoring & Antidote
   • DISEASES/CONDITIONS → Disease / Condition | Pathophysiology | Classic Presentation | Gold-Standard Diagnosis | First-Line Treatment (US/UK)
   • NURSING TOPICS → Topic | Assessment Findings | Priority Nursing Interventions | Patient Education Points | Delegation & Safety Notes
   • EXAMS/BOARDS → Domain/Topic | High-Yield Facts | Typical Question Stem | Key Test-Taking Strategy | Most Common Wrong Answer & Why
   • PROCEDURES/SKILLS → Procedure | Indication | Critical Steps | Complications | Clinical Pearl
   • PHARMACOKINETICS/PHARMACODYNAMICS → Drug | Route/Bioavailability | Half-Life | Metabolism (enzyme) | Renal/Hepatic Dose Adjustment
   • LAB/DIAGNOSTICS → Test Name | Normal Range (SI + conventional) | Clinical Significance | When to Order | Interpretation & Pitfalls
   • ANATOMY/PHYSIOLOGY → Structure/Concept | Location/Description | Function | Clinical Relevance | Board-Exam Fact
   • MICROBIOLOGY/INFECTIOUS → Pathogen | Gram/Type | Virulence Factors | Disease Caused | Treatment of Choice
   • PATHOLOGY → Disease | Gross Finding | Microscopic Finding | Immunostain/Marker | Classic Boards Buzzword

RULE 2 — keyPoints: List EVERY high-yield fact for this topic — do not stop at any number. Each must include specific values, drugs, doses, or diagnostic criteria.

RULE 3 — clinicalPearls: List EVERY real clinical pearl used in USMLE, PLAB, AMC, DHA, HAAD, SCFHS, NAPLEX, or NCLEX for this topic.

RULE 4 — subtopics: Cover EVERY distinct sub-area of this topic from A to Z. Do not stop at any fixed number — keep going until the topic is fully exhausted.

RULE 5 — mnemonics: Include EVERY well-known international mnemonic used by medical, nursing, and pharmacy students for this topic.

RULE 6 — commonMistakes: List every known misconception or exam trap related to this topic. Include the reason each one is wrong.

RULE 7 — examTips: Provide every actionable test-taking strategy for relevant exams (USMLE Step 1/2/3, NAPLEX, NCLEX-RN/PN, PLAB 1/2, AMC, DHA, HAAD, MCCQE, NEET-PG).

RULE 8 — ALL content must reflect INTERNATIONAL standards: US, UK, Australia, Middle East, India, Canada.

RULE 9 — For ALL drugs: always write Brand® (generic). Include both US and international brand names where they differ.

RULE 10 — Include specific quantitative data everywhere: exact doses, lab cutoffs, sensitivity/specificity %, survival rates, NNT, NNH, p-values where standard.`;

      const raw = await callAI(prompt, true, false, settings, 16000);
      const parsed = parseJson(raw);
      if (!parsed || parsed.error) throw new Error(parsed?.error || 'AI returned no data');
      setContent(parsed);
      setFromCache(false);
      // Persist to cache permanently
      try { await saveTopicCache(topicKey, parsed); } catch { /* non-critical */ }
    } catch (e) {
      setContent({ error: e.message });
    } finally { setLoading(false); }
  };

  const filteredRows = useMemo(() => {
    let rows = content?.tableData?.rows || [];
    if (searchQ) rows = rows.filter(row => row.some(cell => String(cell).toLowerCase().includes(searchQ.toLowerCase())));
    if (sortCol !== null) {
      rows = [...rows].sort((a, b) => {
        const av = String(a[sortCol] ?? '').toLowerCase();
        const bv = String(b[sortCol] ?? '').toLowerCase();
        return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
      });
    }
    return rows;
  }, [content, searchQ, sortCol, sortDir]);

  const totalTablePages = Math.ceil(filteredRows.length / TABLE_PAGE_SIZE);
  const pagedRows = filteredRows.slice(tablePage * TABLE_PAGE_SIZE, (tablePage + 1) * TABLE_PAGE_SIZE);

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center animate-pulse"
        style={{ background: category.color + '20' }}>
        <Loader2 size={28} className="animate-spin" style={{ color: category.color }} />
      </div>
      <p className="text-sm font-black" style={{ color: category.color }}>AI is generating {subcategory.label}…</p>
      <p className="text-xs opacity-40">Generating exhaustive A-to-Z reference — this may take up to a minute</p>
    </div>
  );

  if (content?.error) return (
    <div className="p-6 text-center space-y-4">
      <AlertCircle size={32} className="mx-auto text-red-400" />
      <p className="text-sm font-bold text-red-400">{content.error}</p>
      <p className="text-xs opacity-50">Add an API key in Settings to use the AI tutor</p>
      <button onClick={() => generateAndCache(false)} className="btn-accent px-4 py-2 rounded-xl text-sm font-black">Retry</button>
    </div>
  );

  if (!content) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    ...(category.id === 'osce' ? [{ id: 'comm-form', label: 'SBAR', icon: FileText }] : []),
    { id: 'table', label: `Reference Table${content?.tableData?.rows?.length ? ` (${content.tableData.rows.length})` : ''}`, icon: Table },
    { id: 'subtopics', label: 'Subtopics', icon: Layers3 },
    { id: 'pearls', label: 'Pearls & Tips', icon: Sparkles },
    { id: 'questions', label: 'Practice Qs', icon: CheckCircle2 },
    { id: 'rapid', label: 'Rapid Review', icon: Zap },
  ];

  return (
    <div className="space-y-4">
      {/* Tabs */}
      <div className="flex gap-1 p-1 glass rounded-2xl overflow-x-auto custom-scrollbar">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button key={id} onClick={() => setActiveTab(id)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all
              ${activeTab === id ? 'text-white shadow-md' : 'opacity-50 hover:opacity-80'}`}
            style={activeTab === id ? { background: category.color } : {}}>
            <Icon size={13} />{label}
          </button>
        ))}
        {fromCache && (
          <span className="ml-2 flex items-center gap-1 px-2 py-1 rounded-xl text-[10px] font-black"
            style={{ background: 'var(--surface)', color: 'var(--accent)', border: '1px solid var(--accent)22', opacity: 0.85 }}>
            <Database size={10} /> Cached
          </span>
        )}
        <button onClick={() => generateAndCache(true)} className="ml-auto flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black opacity-40 hover:opacity-80 whitespace-nowrap">
          <RefreshCw size={13} /> Regenerate
        </button>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-4">
          <div className="card-lined rounded-2xl p-5" style={{ borderTopColor: category.color + '60' }}>
            <h3 className="text-xs font-black uppercase tracking-widest mb-3 flex items-center gap-2"
              style={{ color: category.color }}>
              <BookOpen size={13} /> Overview
            </h3>
            <div className="text-sm leading-relaxed" style={{ color: 'var(--text2)' }}>
              {renderMarkdown(content.overview)}
            </div>
          </div>

          {content.keyPoints?.length > 0 && (
            <div className="card-lined rounded-2xl p-5">
              <h3 className="text-xs font-black uppercase tracking-widest mb-3 flex items-center gap-2"
                style={{ color: category.color }}>
                <Zap size={13} /> High-Yield Key Points
              </h3>
              <ul className="space-y-2">
                {content.keyPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-black shrink-0 mt-0.5"
                      style={{ background: category.color, fontSize: 10 }}>{i + 1}</span>
                    <span style={{ color: 'var(--text2)' }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {content.mnemonics?.length > 0 && (
            <div className="card-lined rounded-2xl p-5">
              <h3 className="text-xs font-black uppercase tracking-widest mb-3 flex items-center gap-2"
                style={{ color: category.color }}>
                <Brain size={13} /> Mnemonics
              </h3>
              <div className="space-y-3">
                {content.mnemonics.map((m, i) => (
                  <div key={i} className="rounded-xl p-4" style={{ background: category.color + '10', border: `1px solid ${category.color}25` }}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg font-black" style={{ color: category.color }}>{m.mnemonic}</span>
                      <span className="text-xs font-bold opacity-50">{m.topic}</span>
                    </div>
                    <p className="text-xs" style={{ color: 'var(--text2)' }}>{m.meaning}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Table Tab */}
      {activeTab === 'table' && content.tableData && (
        <div className="card-lined rounded-2xl overflow-hidden" style={{ borderTopColor: category.color + '60' }}>
          <div className="p-4 border-b border-[color:var(--border2,var(--border))] flex items-center gap-3 flex-wrap">
            <div className="flex-1 flex items-center gap-2 glass-input rounded-xl px-3 py-2" style={{ minWidth: 140 }}>
              <Search size={14} className="opacity-40 shrink-0" />
              <input value={searchQ} onChange={e => { setSearchQ(e.target.value); setTablePage(0); }}
                placeholder={`Search ${filteredRows.length} rows…`}
                className="flex-1 bg-transparent text-sm outline-none" />
              {searchQ && <button onClick={() => { setSearchQ(''); setTablePage(0); }} className="opacity-40 hover:opacity-80"><X size={13} /></button>}
            </div>
            <span className="text-xs font-black opacity-40">{filteredRows.length} rows total</span>
            <button onClick={exportCSV} title="Export as CSV"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black transition-all hover:opacity-80"
              style={{ background: category.color + '15', color: category.color }}>
              <Download size={13} /> CSV
            </button>
            {sortCol !== null && (
              <button onClick={() => { setSortCol(null); setSortDir('asc'); }}
                className="flex items-center gap-1 px-2.5 py-2 rounded-xl text-xs font-bold opacity-60 hover:opacity-100 glass">
                <X size={11} /> Sort
              </button>
            )}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: category.color + '15', borderBottom: `2px solid ${category.color}30` }}>
                  {content.tableData.headers?.map((h, i) => (
                    <th key={i}
                      className="px-4 py-3 text-left text-xs font-black uppercase tracking-wider cursor-pointer select-none hover:opacity-80 transition-opacity"
                      style={{ color: category.color }}
                      onClick={() => { if (sortCol === i) setSortDir(d => d === 'asc' ? 'desc' : 'asc'); else { setSortCol(i); setSortDir('asc'); } }}>
                      <span className="flex items-center gap-1">
                        {h}
                        <span className="text-[10px] opacity-60">{sortCol === i ? (sortDir === 'asc' ? '↑' : '↓') : '⇅'}</span>
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pagedRows.map((row, ri) => (
                  <tr key={ri} className="border-b border-[color:var(--border2,var(--border))] hover:bg-[var(--accent)]/5 transition-colors">
                    {row.map((cell, ci) => (
                      <td key={ci} className="px-4 py-2.5 text-sm" style={{ color: ci === 0 ? 'var(--text)' : 'var(--text2)' }}>
                        {ci === 0 ? <span className="font-semibold">{cell}</span> : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredRows.length === 0 && (
              <div className="py-12 text-center opacity-40">
                <Search size={24} className="mx-auto mb-2" />
                <p className="text-sm">No results for "{searchQ}"</p>
              </div>
            )}
          </div>
          {/* Pagination controls — shown when table has >50 rows */}
          {totalTablePages > 1 && (
            <div className="flex items-center justify-between gap-3 px-4 py-3 border-t" style={{ borderColor: 'var(--border)' }}>
              <span className="text-xs font-black opacity-40">
                Rows {tablePage * TABLE_PAGE_SIZE + 1}–{Math.min((tablePage + 1) * TABLE_PAGE_SIZE, filteredRows.length)} of {filteredRows.length}
              </span>
              <div className="flex items-center gap-1">
                <button onClick={() => setTablePage(0)} disabled={tablePage === 0}
                  className="px-2 py-1.5 rounded-lg text-xs font-black glass opacity-60 hover:opacity-100 disabled:opacity-20">«</button>
                <button onClick={() => setTablePage(p => Math.max(0, p - 1))} disabled={tablePage === 0}
                  className="px-3 py-1.5 rounded-lg text-xs font-black glass opacity-60 hover:opacity-100 disabled:opacity-20">‹ Prev</button>
                {Array.from({ length: Math.min(5, totalTablePages) }, (_, i) => {
                  const start = Math.max(0, Math.min(tablePage - 2, totalTablePages - 5));
                  const pg = start + i;
                  return (
                    <button key={pg} onClick={() => setTablePage(pg)}
                      className="w-8 h-8 rounded-lg text-xs font-black transition-all"
                      style={{ background: pg === tablePage ? category.color : 'transparent', color: pg === tablePage ? '#fff' : 'var(--text2)', opacity: pg === tablePage ? 1 : 0.5 }}>
                      {pg + 1}
                    </button>
                  );
                })}
                <button onClick={() => setTablePage(p => Math.min(totalTablePages - 1, p + 1))} disabled={tablePage === totalTablePages - 1}
                  className="px-3 py-1.5 rounded-lg text-xs font-black glass opacity-60 hover:opacity-100 disabled:opacity-20">Next ›</button>
                <button onClick={() => setTablePage(totalTablePages - 1)} disabled={tablePage === totalTablePages - 1}
                  className="px-2 py-1.5 rounded-lg text-xs font-black glass opacity-60 hover:opacity-100 disabled:opacity-20">»</button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Subtopics Tab */}
      {activeTab === 'subtopics' && content.subtopics?.length > 0 && (
        <div className="space-y-3">
          {content.subtopics.map((sub, i) => (
            <div key={i} className="card-lined rounded-2xl p-4" style={{ borderTopColor: category.color + '40' }}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h4 className="font-black text-sm mb-1" style={{ color: category.color }}>{sub.name}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text2)' }}>{sub.summary}</p>
                  {sub.keyFact && (
                    <div className="mt-2 flex items-start gap-2 text-xs rounded-lg p-2"
                      style={{ background: category.color + '10' }}>
                      <Zap size={11} className="shrink-0 mt-0.5" style={{ color: category.color }} />
                      <span className="font-semibold">{sub.keyFact}</span>
                    </div>
                  )}
                </div>
                <span className="text-xs font-black opacity-30">#{i + 1}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pearls Tab */}
      {activeTab === 'pearls' && (
        <div className="space-y-4">
          {content.clinicalPearls?.length > 0 && (
            <div className="card-lined rounded-2xl p-5">
              <h3 className="text-xs font-black uppercase tracking-widest mb-3 flex items-center gap-2"
                style={{ color: category.color }}>
                <Sparkles size={13} /> Clinical Pearls
              </h3>
              <ul className="space-y-2">
                {content.clinicalPearls.map((p, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <Star size={13} className="shrink-0 mt-1" style={{ color: '#f59e0b' }} />
                    <span style={{ color: 'var(--text2)' }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {content.examTips?.length > 0 && (
            <div className="card-lined rounded-2xl p-5">
              <h3 className="text-xs font-black uppercase tracking-widest mb-3 flex items-center gap-2"
                style={{ color: '#3b82f6' }}>
                <Target size={13} /> Exam Tips
              </h3>
              <ul className="space-y-2">
                {content.examTips.map((t, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 size={13} className="shrink-0 mt-1" style={{ color: '#10b981' }} />
                    <span style={{ color: 'var(--text2)' }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {content.commonMistakes?.length > 0 && (
            <div className="card-lined rounded-2xl p-5">
              <h3 className="text-xs font-black uppercase tracking-widest mb-3 flex items-center gap-2"
                style={{ color: '#ef4444' }}>
                <AlertCircle size={13} /> Common Mistakes to Avoid
              </h3>
              <ul className="space-y-2">
                {content.commonMistakes.map((m, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <X size={13} className="shrink-0 mt-1 text-red-400" />
                    <span style={{ color: 'var(--text2)' }}>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Practice Questions Tab */}
      {activeTab === 'questions' && (
        <div className="space-y-4">
          {!practiceQs && !loadingQs && (
            <div className="card-lined rounded-2xl p-6 space-y-5">
              <div className="text-center space-y-2">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto"
                  style={{ background: category.color + '20' }}>
                  <CheckCircle2 size={26} style={{ color: category.color }} />
                </div>
                <h3 className="text-lg font-black">Practice Mode</h3>
                <p className="text-sm opacity-50">AI-powered board-exam MCQs for {subcategory.label}</p>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest opacity-50 mb-2">Difficulty</p>
                <div className="flex flex-wrap gap-2">
                  {[['mixed','Mixed','#6366f1'],['easy','Easy','#10b981'],['medium','Medium','#f59e0b'],['hard','Hard','#ef4444'],['board','Board Level','#7c3aed']].map(([val,lbl,col]) => (
                    <button key={val} onClick={() => setPracticeDifficulty(val)}
                      className="px-3 py-1.5 rounded-xl text-xs font-black transition-all"
                      style={{ background: practiceDifficulty === val ? col : col + '18', color: practiceDifficulty === val ? '#fff' : col }}>
                      {lbl}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest opacity-50 mb-2">Number of Questions</p>
                <div className="flex gap-2">
                  {[5, 10, 15, 20].map(n => (
                    <button key={n} onClick={() => setPracticeCount(n)}
                      className="px-4 py-1.5 rounded-xl text-xs font-black transition-all"
                      style={{ background: practiceCount === n ? category.color : category.color + '15', color: practiceCount === n ? '#fff' : category.color }}>
                      {n}
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={generateQuestions}
                className="w-full px-6 py-3 rounded-2xl text-sm font-black"
                style={{ background: `linear-gradient(135deg,${category.color},${category.color}cc)`, color: '#fff' }}>
                Generate {practiceCount} Questions ✨
              </button>
            </div>
          )}

          {loadingQs && (
            <div className="flex flex-col items-center justify-center py-16 gap-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center animate-pulse"
                style={{ background: category.color + '20' }}>
                <Loader2 size={26} className="animate-spin" style={{ color: category.color }} />
              </div>
              <p className="text-sm font-black" style={{ color: category.color }}>Generating board-exam questions…</p>
              <p className="text-xs opacity-40">Writing clinical vignettes and detailed explanations</p>
            </div>
          )}

          {practiceQs?.error && (
            <div className="p-6 text-center space-y-3">
              <AlertCircle size={28} className="mx-auto text-red-400" />
              <p className="text-sm font-bold text-red-400">{practiceQs.error}</p>
              <button onClick={generateQuestions} className="btn-accent px-4 py-2 rounded-xl text-sm font-black">Retry</button>
            </div>
          )}

          {Array.isArray(practiceQs) && practiceQs.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <p className="text-xs font-black uppercase tracking-widest opacity-40">{practiceQs.length} Questions — {subcategory.label}</p>
                <div className="flex gap-2">
                  <button onClick={() => { setPracticeQs(null); setRevealedAnswers({}); }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black opacity-50 hover:opacity-80"
                    style={{ background: category.color + '15', color: category.color }}>
                    ⚙ Settings
                  </button>
                  <button onClick={generateQuestions}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black opacity-50 hover:opacity-80"
                    style={{ background: category.color + '15', color: category.color }}>
                    <RefreshCw size={11} /> New Set
                  </button>
                </div>
              </div>
              {practiceQs.map((q, qi) => {
                const revealed = revealedAnswers[qi];
                const diffColor = q.difficulty === 'Easy' ? '#10b981' : q.difficulty === 'Hard' ? '#ef4444' : '#f59e0b';
                return (
                  <div key={qi} className="card-lined rounded-2xl overflow-hidden" style={{ borderTopColor: revealed ? (revealedAnswers[qi]?.isCorrect === false ? '#ef444440' : '#10b98140') : category.color + '40' }}>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className="text-xs font-black px-2 py-0.5 rounded-lg"
                          style={{ background: diffColor + '20', color: diffColor }}>
                          {q.difficulty}
                        </span>
                        {q.examContext && (
                          <span className="text-xs font-bold px-2 py-0.5 rounded-lg opacity-60"
                            style={{ background: category.color + '10', color: category.color }}>
                            {q.examContext}
                          </span>
                        )}
                        <span className="text-xs opacity-30 ml-auto">Q{qi + 1}</span>
                      </div>
                      <p className="text-sm font-bold mb-4 leading-relaxed">{q.question}</p>
                      <div className="space-y-2">
                        {q.options?.map(opt => {
                          const isCorrect = opt.letter === q.answer;
                          const isRevealed = !!revealed;
                          let bg = 'var(--card)';
                          let border = 'var(--border)';
                          let textCol = 'var(--text)';
                          if (isRevealed && isCorrect) { bg = '#10b98120'; border = '#10b981'; textCol = '#10b981'; }
                          else if (isRevealed && revealed?.selected === opt.letter && !isCorrect) { bg = '#ef444420'; border = '#ef4444'; textCol = '#ef4444'; }
                          return (
                            <button key={opt.letter}
                              disabled={isRevealed}
                              onClick={() => setRevealedAnswers(r => ({ ...r, [qi]: { selected: opt.letter, isCorrect } }))}
                              className="w-full flex items-start gap-3 px-4 py-3 rounded-xl text-left text-sm transition-all font-medium"
                              style={{ background: bg, border: `1.5px solid ${border}`, color: textCol, opacity: isRevealed && !isCorrect && revealed?.selected !== opt.letter ? 0.45 : 1 }}>
                              <span className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black shrink-0"
                                style={{ background: isRevealed && isCorrect ? '#10b981' : isRevealed && revealed?.selected === opt.letter ? '#ef4444' : category.color + '20', color: isRevealed && (isCorrect || revealed?.selected === opt.letter) ? '#fff' : category.color }}>
                                {opt.letter}
                              </span>
                              <span className="flex-1">{opt.text}</span>
                              {isRevealed && isCorrect && <CheckCircle2 size={15} className="shrink-0 mt-0.5 text-green-500" />}
                              {isRevealed && revealed?.selected === opt.letter && !isCorrect && <X size={15} className="shrink-0 mt-0.5 text-red-400" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    {revealed && q.explanation && (
                      <div className="border-t px-4 py-4 space-y-2" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
                        <p className="text-xs font-black uppercase tracking-widest" style={{ color: category.color }}>Explanation</p>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text2)' }}>{q.explanation}</p>
                        <p className="text-xs font-bold mt-1" style={{ color: '#10b981' }}>✓ Correct answer: {q.answer}</p>
                      </div>
                    )}
                    {!revealed && (
                      <div className="border-t px-4 py-2 flex justify-center" style={{ borderColor: 'var(--border)' }}>
                        <button onClick={() => setRevealedAnswers(r => ({ ...r, [qi]: { selected: null, isCorrect: null } }))}
                          className="text-xs font-bold opacity-40 hover:opacity-70 py-1">
                          Skip — Show Answer
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="card-lined rounded-2xl p-4 text-center space-y-2">
                <p className="text-sm font-black opacity-60">
                  Score: {Object.values(revealedAnswers).filter(r => r?.isCorrect).length} / {Object.keys(revealedAnswers).length} answered
                </p>
                <div className="flex gap-2 justify-center">
                  <button onClick={() => { setPracticeQs(null); setRevealedAnswers({}); }}
                    className="px-4 py-2 rounded-xl text-xs font-black"
                    style={{ background: category.color + '15', color: category.color }}>
                    ⚙ Change Settings
                  </button>
                  <button onClick={generateQuestions}
                    className="px-4 py-2 rounded-xl text-xs font-black"
                    style={{ background: category.color + '20', color: category.color }}>
                    New Set
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Rapid Review Tab — flashcard mode from generated content */}
      {activeTab === 'rapid' && (
        <div className="space-y-4">
          <div className="card-lined rounded-2xl p-5" style={{ borderTopColor: category.color + '60' }}>
            <h3 className="text-xs font-black uppercase tracking-widest mb-1 flex items-center gap-2" style={{ color: category.color }}>
              <Zap size={13} /> Rapid Review — Flashcard Mode
            </h3>
            <p className="text-xs opacity-50 mb-4">Tap card to flip. Navigate with arrows. Works from your loaded Overview content.</p>
            {(() => {
              const cards = [
                ...(content?.keyPoints || []).map((pt, i) => ({ q: `High-Yield Point #${i+1}`, a: pt })),
                ...(content?.subtopics || []).map(s => ({ q: `Key fact: ${s.name}`, a: s.keyFact || s.summary })),
                ...(content?.clinicalPearls || []).map((p, i) => ({ q: `Clinical Pearl #${i+1}`, a: p })),
                ...(content?.examTips || []).map((t, i) => ({ q: `Exam Tip #${i+1}`, a: t })),
              ];
              if (cards.length === 0) return (
                <div className="text-center py-10 space-y-3">
                  <Zap size={28} className="mx-auto opacity-20" style={{ color: category.color }} />
                  <p className="text-sm opacity-40">Load the Overview tab first — flashcards are built from your generated content.</p>
                  <button onClick={() => setActiveTab('overview')} className="px-4 py-2 rounded-xl text-xs font-black" style={{ background: category.color + '20', color: category.color }}>Go to Overview →</button>
                </div>
              );
              const idx = rapidIdx % cards.length;
              const card = cards[idx];
              return (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-black opacity-50">
                    <span>{idx + 1} / {cards.length}</span>
                    <div className="flex-1 h-1.5 rounded-full" style={{ background: 'var(--border)' }}>
                      <div className="h-1.5 rounded-full transition-all" style={{ width: `${((idx+1)/cards.length)*100}%`, background: category.color }} />
                    </div>
                    <button onClick={() => { setRapidIdx(0); setRapidFlipped(false); }} className="opacity-40 hover:opacity-80 text-[10px]">Reset</button>
                  </div>
                  <button onClick={() => setRapidFlipped(f => !f)}
                    className="w-full rounded-2xl p-6 min-h-[180px] flex flex-col items-center justify-center gap-3 transition-all text-center"
                    style={{ background: rapidFlipped ? category.color + '18' : 'var(--card)', border: `2px solid ${category.color}${rapidFlipped ? '50' : '18'}`, cursor: 'pointer' }}>
                    <span className="text-xs font-black uppercase tracking-widest opacity-40">{rapidFlipped ? '✓ Answer' : `${card.q} — tap to flip`}</span>
                    <p className="text-sm font-bold leading-relaxed max-w-lg" style={{ color: rapidFlipped ? category.color : 'var(--text)' }}>
                      {rapidFlipped ? card.a : card.q}
                    </p>
                    {!rapidFlipped && <span className="text-xs opacity-25">👆 tap card to reveal</span>}
                  </button>
                  <div className="flex items-center gap-2">
                    <button onClick={() => { setRapidIdx(i => (i - 1 + cards.length) % cards.length); setRapidFlipped(false); }}
                      className="px-4 py-2.5 rounded-xl text-xs font-black glass opacity-60 hover:opacity-100 transition-opacity">
                      ← Prev
                    </button>
                    <button
                      onClick={() => { if (!rapidFlipped) { setRapidFlipped(true); } else { setRapidIdx(i => (i + 1) % cards.length); setRapidFlipped(false); } }}
                      className="flex-1 py-2.5 rounded-xl text-sm font-black text-white transition-all"
                      style={{ background: category.color }}>
                      {rapidFlipped ? 'Next Card →' : 'Flip / Reveal'}
                    </button>
                    <button onClick={() => { setRapidIdx(i => (i + 1) % cards.length); setRapidFlipped(false); }}
                      className="px-4 py-2.5 rounded-xl text-xs font-black glass opacity-60 hover:opacity-100 transition-opacity">
                      Skip →
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
      {activeTab === 'comm-form' && (
        <OsceCommunicationForm topicKey={topicKey} category={category} settings={settings} />
      )}
    </div>
  );
}

// ── Full Encyclopedia View ──
function MedicalEncyclopediaView({ settings }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSub, setSelectedSub] = useState(null);
  const [globalSearch, setGlobalSearch] = useState('');
  const [showTutor, setShowTutor] = useState(false);
  const [recentTopics, setRecentTopics] = useState(() => {
    try { return JSON.parse(localStorage.getItem('encyclo-recent') || '[]'); } catch { return []; }
  });
  const searchRef = useRef(null);

  const addRecent = (cat, sub) => {
    setRecentTopics(prev => {
      const key = `${cat.id}:${sub.id}`;
      const filtered = prev.filter(r => r.key !== key);
      const next = [{ key, catId: cat.id, subId: sub.id, label: sub.label, catLabel: cat.label, color: cat.color }, ...filtered].slice(0, 8);
      try { localStorage.setItem('encyclo-recent', JSON.stringify(next)); } catch {}
      return next;
    });
  };

  const navigateToTopic = (cat, sub) => {
    setSelectedCategory(cat);
    setSelectedSub(sub);
    setGlobalSearch('');
    addRecent(cat, sub);
  };

  const filteredCategories = useMemo(() => {
    if (!globalSearch.trim()) return ENCYCLOPEDIA_CATEGORIES;
    const lq = globalSearch.toLowerCase();
    return ENCYCLOPEDIA_CATEGORIES.map(cat => ({
      ...cat,
      subcategories: cat.subcategories.filter(s =>
        s.label.toLowerCase().includes(lq) || s.desc.toLowerCase().includes(lq) || cat.label.toLowerCase().includes(lq)
      )
    })).filter(cat => cat.subcategories.length > 0 || cat.label.toLowerCase().includes(lq));
  }, [globalSearch]);

  const allSubcategories = useMemo(() =>
    ENCYCLOPEDIA_CATEGORIES.flatMap(c => c.subcategories.map(s => ({ ...s, category: c }))),
    []
  );
  const searchResults = useMemo(() => {
    if (!globalSearch.trim() || globalSearch.length < 2) return [];
    const lq = globalSearch.toLowerCase();
    return allSubcategories.filter(s =>
      s.label.toLowerCase().includes(lq) || s.desc.toLowerCase().includes(lq) || s.category.label.toLowerCase().includes(lq)
    ).slice(0, 20);
  }, [globalSearch, allSubcategories]);

  // Back to category list
  if (selectedSub && selectedCategory) {
    // SBAR Practice gets a full-bleed layout (no max-width constraint)
    if (selectedSub.id === 'sbar-practice') {
      return (
        <div className="flex-1 min-h-0 flex flex-col overflow-hidden scroll-content">
          {/* Compact breadcrumb bar */}
          <div className="shrink-0 flex items-center gap-2 px-4 py-2.5 border-b text-xs flex-wrap"
            style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
            <button onClick={() => { setSelectedSub(null); setSelectedCategory(null); }}
              className="font-bold opacity-60 hover:opacity-100 transition-opacity">Encyclopedia</button>
            <ChevronRight size={12} className="opacity-30" />
            <button onClick={() => setSelectedSub(null)}
              className="font-bold opacity-60 hover:opacity-100 transition-opacity flex items-center gap-1">
              <selectedCategory.icon size={11} style={{ color: selectedCategory.color }} />
              {selectedCategory.label}
            </button>
            <ChevronRight size={12} className="opacity-30" />
            <span className="font-black" style={{ color: '#06b6d4' }}>SBAR Practice</span>
          </div>
          <SbarPageView settings={settings} />
        </div>
      );
    }

    return (
      <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar scroll-content">
        <div className="max-w-4xl mx-auto p-4 lg:p-6 space-y-5">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm flex-wrap">
            <button onClick={() => { setSelectedSub(null); setSelectedCategory(null); }}
              className="font-bold opacity-60 hover:opacity-100 transition-opacity">Encyclopedia</button>
            <ChevronRight size={14} className="opacity-30" />
            <button onClick={() => setSelectedSub(null)}
              className="font-bold opacity-60 hover:opacity-100 transition-opacity flex items-center gap-1.5">
              <selectedCategory.icon size={13} style={{ color: selectedCategory.color }} />
              {selectedCategory.label}
            </button>
            <ChevronRight size={14} className="opacity-30" />
            <span className="font-black" style={{ color: selectedCategory.color }}>{selectedSub.label}</span>
          </div>

          {/* Header */}
          <div className="card-lined rounded-2xl p-5" style={{ borderTopColor: selectedCategory.color + '80' }}>
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: selectedCategory.color + '20' }}>
                  <selectedCategory.icon size={22} style={{ color: selectedCategory.color }} />
                </div>
                <div>
                  <h1 className="text-xl font-black">{selectedSub.label}</h1>
                  <p className="text-sm opacity-50">{selectedCategory.label} · {selectedSub.desc}</p>
                </div>
              </div>
              <button onClick={() => setShowTutor(t => !t)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-black transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: '#fff', boxShadow: '0 4px 16px rgba(99,102,241,.35)' }}>
                <BotMessageSquare size={16} /> {showTutor ? 'Hide' : 'AI Tutor'}
              </button>
            </div>
          </div>

          {/* AI Tutor */}
          {showTutor && (
            <MiniAITutor
              context={`${selectedCategory.label} → ${selectedSub.label}: ${selectedSub.desc}`}
              settings={settings}
              placeholder={`Ask anything about ${selectedSub.label}…`}
            />
          )}

          {/* Content */}
          <TopicContentPanel
            category={selectedCategory}
            subcategory={selectedSub}
            settings={settings}
          />
        </div>
      </div>
    );
  }

  // Category detail (subcategory grid)
  if (selectedCategory && !selectedSub) {
    const cat = selectedCategory;
    return (
      <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar scroll-content">
        <div className="max-w-4xl mx-auto p-4 lg:p-6 space-y-5">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm">
            <button onClick={() => setSelectedCategory(null)}
              className="font-bold opacity-60 hover:opacity-100 transition-opacity">Encyclopedia</button>
            <ChevronRight size={14} className="opacity-30" />
            <span className="font-black" style={{ color: cat.color }}>{cat.label}</span>
          </div>

          {/* Category header */}
          <div className="card-lined rounded-2xl p-6" style={{ borderTopColor: cat.color + '80' }}>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: cat.color + '20' }}>
                <cat.icon size={30} style={{ color: cat.color }} />
              </div>
              <div>
                <h1 className="text-2xl font-black">{cat.label}</h1>
                <p className="text-sm opacity-50 mt-1">{cat.subcategories.length} topics available</p>
              </div>
            </div>
          </div>

          {/* Global AI Tutor for category */}
          <MiniAITutor
            context={`${cat.label} — comprehensive medical/pharmacy reference`}
            settings={settings}
            placeholder={`Ask anything about ${cat.label}…`}
          />

          {/* Subcategory grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {cat.subcategories.map(sub => (
              <button key={sub.id} onClick={() => navigateToTopic(selectedCategory, sub)}
                className="flex items-center gap-3 px-4 py-3.5 text-left hover:scale-[1.02] active:scale-[0.98] transition-all duration-150"
                style={{
                  background: 'var(--card, rgba(255,255,255,0.82))',
                  border: `1.5px solid ${cat.color}22`,
                  borderRadius: 999,
                  backdropFilter: 'blur(14px)',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                }}>
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: cat.color + '18' }}>
                  <cat.icon size={14} style={{ color: cat.color }} />
                </div>
                <span className="font-black leading-snug truncate" style={{ color: cat.color, fontSize: 15 }}>{sub.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Main Encyclopedia home
  const totalTopics = ENCYCLOPEDIA_CATEGORIES.reduce((s, c) => s + c.subcategories.length, 0);
  return (
    <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar scroll-content">
      <div className="max-w-5xl mx-auto p-4 lg:p-6 space-y-6">

        {/* ── Hero Banner ── */}
        <div className="rounded-2xl p-6 lg:p-8 text-center animate-slide-in"
          style={{ background: 'linear-gradient(135deg,rgba(99,102,241,.12),rgba(0,212,255,.06),rgba(0,255,179,.05))', border: '1px solid rgba(99,102,241,.2)' }}>
          <h1 className="text-2xl lg:text-4xl font-black tracking-tight mb-3">
            🌍 Global Medical Encyclopedia
          </h1>
          <p className="text-sm lg:text-base opacity-60 max-w-2xl mx-auto mb-6">
            AI-powered comprehensive reference for pharmacy, medical school, nursing, dentistry, surgery, allied health, and every board exam worldwide. Click any topic — AI generates full tables instantly.
          </p>
          <div className="flex justify-center gap-6 lg:gap-10 flex-wrap">
            {[
              { num: ENCYCLOPEDIA_CATEGORIES.length, lbl: 'Categories' },
              { num: totalTopics + '+', lbl: 'Topics' },
              { num: '25+', lbl: 'Exams Covered' },
              { num: 'AI', lbl: 'Tutor 24/7' },
              { num: '∞', lbl: 'Tables & Data' },
            ].map(({ num, lbl }) => (
              <div key={lbl} className="text-center">
                <div className="text-2xl lg:text-3xl font-black" style={{ color: 'var(--accent)' }}>{num}</div>
                <div className="text-xs opacity-40 mt-0.5">{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Global Search ── */}
        <div className="relative">
          <div className="flex items-center gap-3 glass rounded-2xl px-4 py-3.5 border border-[color:var(--border2,var(--border))]">
            <Search size={18} className="opacity-40 shrink-0" />
            <input
              ref={searchRef}
              value={globalSearch}
              onChange={e => setGlobalSearch(e.target.value)}
              placeholder="Search any drug, disease, exam, procedure, nursing topic…"
              className="flex-1 bg-transparent text-sm outline-none font-medium"
            />
            {globalSearch && (
              <button onClick={() => setGlobalSearch('')} className="opacity-40 hover:opacity-80"><X size={16} /></button>
            )}
          </div>
          {globalSearch.length >= 2 && (searchResults.length > 0 || globalSearch.length >= 3) && (
            <div className="absolute top-full left-0 right-0 mt-2 glass rounded-2xl shadow-2xl z-50 overflow-hidden border border-[color:var(--border2,var(--border))]" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
              {searchResults.map((s, i) => (
                <button key={i} onClick={() => navigateToTopic(s.category, s)}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[var(--accent)]/5 transition-colors text-left border-b border-[color:var(--border2,var(--border))]/50 last:border-0">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: s.category.color + '20' }}>
                    <s.category.icon size={14} style={{ color: s.category.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold truncate">{s.label}</p>
                    <p className="text-xs opacity-40 truncate">{s.category.label} · {s.desc}</p>
                  </div>
                  <ChevronRight size={12} className="opacity-30 shrink-0" />
                </button>
              ))}
              {searchResults.length === 0 && globalSearch.length >= 3 && (
                <div className="px-4 py-3 text-center border-b border-[color:var(--border2,var(--border))]/50">
                  <p className="text-xs font-bold opacity-40">No encyclopedia topics found for "{globalSearch}"</p>
                  <p className="text-xs opacity-25 mt-0.5">↓ Use the AI Tutor below to ask any medical question</p>
                </div>
              )}
              {globalSearch.length >= 3 && (
                <div className="px-4 py-3 flex items-center gap-3" style={{ background: 'rgba(99,102,241,0.04)' }}>
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#6366f115' }}>
                    <BotMessageSquare size={14} style={{ color: '#6366f1' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold" style={{ color: '#6366f1' }}>Ask AI: "{globalSearch}"</p>
                    <p className="text-xs opacity-40">Scroll down to the AI Tutor for a full answer</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── Global AI Tutor ── */}
        <MiniAITutor
          context="Global Medical Encyclopedia covering pharmacy, diseases, nursing, surgery, dentistry, mental health, public health, alternative medicine, all board exams worldwide (USMLE, PLAB, AMC, DHA, HAAD, NAPLEX, NCLEX, COMLEX, MCAT, NEET, SCFHS)"
          settings={settings}
          placeholder="Ask anything — drugs, diseases, exam strategy, clinical skills, global medical topics…"
        />

        {/* ── Recently Viewed ── */}
        {recentTopics.length > 0 && (
          <div>
            <p className="text-xs font-black uppercase tracking-widest opacity-40 mb-3">Recently Viewed</p>
            <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-1">
              {recentTopics.map(r => {
                const catObj = ENCYCLOPEDIA_CATEGORIES.find(c => c.id === r.catId);
                const subObj = catObj?.subcategories.find(s => s.id === r.subId);
                if (!catObj || !subObj) return null;
                return (
                  <button key={r.key} onClick={() => navigateToTopic(catObj, subObj)}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl shrink-0 transition-all hover:scale-105 text-left"
                    style={{ background: r.color + '12', border: `1.5px solid ${r.color}25`, color: r.color, minWidth: 140, maxWidth: 200 }}>
                    <catObj.icon size={13} style={{ color: r.color, shrink: 0 }} />
                    <div className="min-w-0">
                      <p className="text-xs font-black truncate">{r.label}</p>
                      <p className="text-[10px] opacity-50 truncate">{r.catLabel}</p>
                    </div>
                  </button>
                );
              })}
              <button onClick={() => { setRecentTopics([]); try { localStorage.removeItem('encyclo-recent'); } catch {} }}
                className="flex items-center gap-1 px-3 py-2 rounded-xl shrink-0 opacity-30 hover:opacity-60 text-xs font-bold">
                <X size={11} /> Clear
              </button>
            </div>
          </div>
        )}

        {/* ── Quick Links: Popular Topics ── */}
        <div>
          <p className="text-xs font-black uppercase tracking-widest opacity-40 mb-3">Popular Topics</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {[
              { cat: 'pharmacy', sub: 'top200-drugs', emoji: '💊', label: 'Top 200 Drugs', col: '#6366f1' },
              { cat: 'diseases', sub: 'cardiovascular', emoji: '❤️', label: 'Cardiology', col: '#ef4444' },
              { cat: 'nclex', sub: 'nclex-priority', emoji: '✅', label: 'NCLEX Priority', col: '#10b981' },
              { cat: 'usmle', sub: 'step1-micro', emoji: '🧫', label: 'USMLE Micro', col: '#7c3aed' },
              { cat: 'naplex', sub: 'naplex-calculations', emoji: '🔢', label: 'Pharm Calc', col: '#f59e0b' },
              { cat: 'global-exams', sub: 'dha', emoji: '🇦🇪', label: 'DHA Exam', col: '#0891b2' },
              { cat: 'global-exams', sub: 'plab', emoji: '🇬🇧', label: 'PLAB (UK)', col: '#0891b2' },
              { cat: 'osce', sub: 'osce-scenarios', emoji: '🩺', label: 'OSCE Scenarios', col: '#06b6d4' },
              { cat: 'diseases', sub: 'infectious-dis', emoji: '🔬', label: 'Infectious Dis.', col: '#ef4444' },
              { cat: 'clinical-skills', sub: 'ecg', emoji: '📊', label: 'ECG Reading', col: '#f43f5e' },
              { cat: 'nursing', sub: 'critical-care', emoji: '🏥', label: 'ICU Nursing', col: '#ec4899' },
              { cat: 'pharmacy', sub: 'drug-interactions', emoji: '⚠️', label: 'Drug Interactions', col: '#6366f1' },
            ].map(({ cat, sub, emoji, label, col }) => {
              const catObj = ENCYCLOPEDIA_CATEGORIES.find(c => c.id === cat);
              const subObj = catObj?.subcategories.find(s => s.id === sub);
              if (!catObj || !subObj) return null;
              return (
                <button key={sub} onClick={() => navigateToTopic(catObj, subObj)}
                  className="flex items-center gap-3 px-4 py-3.5 text-left hover:scale-[1.02] active:scale-[0.98] transition-all duration-150"
                  style={{
                    background: 'var(--card, rgba(255,255,255,0.82))',
                    border: `1.5px solid ${col}22`,
                    borderRadius: 999,
                    backdropFilter: 'blur(16px)',
                    boxShadow: '0 2px 14px rgba(0,0,0,0.07)',
                  }}>
                  <span className="text-[22px] leading-none shrink-0">{emoji}</span>
                  <span className="font-black leading-snug" style={{ color: col, fontSize: 15 }}>{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── All Categories ── */}
        <div className="space-y-4">
          <p className="text-xs font-black uppercase tracking-widest opacity-40">All Categories</p>
          {filteredCategories.map((cat, ci) => (
            <div key={cat.id} className="animate-slide-up" style={{ animationDelay: `${ci * 0.03}s` }}>
              {/* Category header */}
              <button className="w-full flex items-center gap-3 mb-2.5 text-left group"
                onClick={() => setSelectedCategory(cat)}>
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-sm"
                  style={{ background: `linear-gradient(135deg,${cat.color}22,${cat.color}12)`, border: `1.5px solid ${cat.color}30` }}>
                  <cat.icon size={18} style={{ color: cat.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-black text-sm" style={{ color: cat.color }}>{cat.label}</h2>
                  <p className="text-xs opacity-40 mt-0.5">{cat.subcategories.length} topics</p>
                </div>
                <ChevronRight size={14} className="opacity-25 group-hover:opacity-60 transition-opacity shrink-0" style={{ color: cat.color }} />
              </button>
              {/* Subcategory pill-cards grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {cat.subcategories.map(sub => (
                  <button key={sub.id}
                    onClick={() => navigateToTopic(cat, sub)}
                    className="flex items-center gap-3 px-4 py-3.5 text-left hover:scale-[1.02] active:scale-[0.98] transition-all duration-150"
                    style={{
                      background: 'var(--card, rgba(255,255,255,0.82))',
                      border: `1.5px solid ${cat.color}22`,
                      borderRadius: 999,
                      backdropFilter: 'blur(14px)',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                    }}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: cat.color + '18' }}>
                      <cat.icon size={14} style={{ color: cat.color }} />
                    </div>
                    <span className="font-black leading-snug truncate" style={{ color: cat.color, fontSize: 15 }}>{sub.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Standalone SBAR Practice Page ──
const SBAR_CAT = { id: 'sbar', label: 'SBAR Practice', color: '#06b6d4' };

function SbarPageView({ settings }) {
  const STORAGE_PREFIX = 'osce-comm-form:sbar-standalone::';

  const loadSessions = () => {
    try {
      return Object.keys(localStorage)
        .filter(k => k.startsWith(STORAGE_PREFIX))
        .map(k => {
          const name = k.slice(STORAGE_PREFIX.length);
          try { const d = JSON.parse(localStorage.getItem(k) || '{}'); return { id: name, savedAt: d.savedAt || null }; }
          catch { return { id: name, savedAt: null }; }
        })
        .sort((a, b) => (b.savedAt || '').localeCompare(a.savedAt || ''));
    } catch { return []; }
  };

  const [sessions, setSessions] = useState(loadSessions);
  const [activeSession, setActiveSession] = useState(null);
  const [newName, setNewName] = useState('');
  const [showNewForm, setShowNewForm] = useState(false);

  const refreshSessions = () => setSessions(loadSessions());

  const createSession = () => {
    if (!newName.trim()) return;
    const id = newName.trim();
    setSessions(prev => [{ id, savedAt: null }, ...prev.filter(s => s.id !== id)]);
    setActiveSession({ id, topicKey: `sbar-standalone::${id}` });
    setNewName(''); setShowNewForm(false);
  };

  const deleteSession = (id) => {
    if (!window.confirm(`Delete SBAR session "${id}"?`)) return;
    try { localStorage.removeItem(`${STORAGE_PREFIX}${id}`); } catch {}
    setSessions(prev => prev.filter(s => s.id !== id));
    if (activeSession?.id === id) setActiveSession(null);
  };

  // Refresh session list when a form saves (poll localStorage on focus)
  useEffect(() => {
    const onFocus = () => refreshSessions();
    window.addEventListener('focus', onFocus);
    return () => window.removeEventListener('focus', onFocus);
  }, []);

  return (
    <div className="flex flex-1 min-h-0" style={{ height: '100%', overflow: 'hidden' }}>
      {/* ── Left sidebar ── */}
      <div className="shrink-0 flex flex-col border-r overflow-y-auto custom-scrollbar"
        style={{ width: 240, borderColor: 'var(--border)', background: 'var(--surface)' }}>
        {/* Header */}
        <div className="px-3 py-4 border-b space-y-3" style={{ borderColor: 'var(--border)' }}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#06b6d420' }}>
              <FileText size={15} style={{ color: '#06b6d4' }} />
            </div>
            <div>
              <p className="text-sm font-black" style={{ color: '#06b6d4' }}>SBAR</p>
              <p className="text-[10px] opacity-40">Practice sessions</p>
            </div>
          </div>
          <button
            onClick={() => setShowNewForm(v => !v)}
            className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-black text-white"
            style={{ background: 'linear-gradient(135deg,#06b6d4,#0891b2)' }}>
            <Plus size={13} /> New Session
          </button>
          <button
            onClick={() => {
              const t = MEDICAL_RANDOM_TOPICS[Math.floor(Math.random() * MEDICAL_RANDOM_TOPICS.length)];
              setNewName(t.split(':')[0].trim()); setShowNewForm(true);
            }}
            className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-black border-2 border-dashed transition-all hover:opacity-80"
            style={{ borderColor: '#06b6d440', color: '#06b6d4', background: '#06b6d408' }}>
            🎲 Random Topic
          </button>
          {showNewForm && (
            <div className="space-y-2">
              <input
                value={newName}
                onChange={e => setNewName(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') createSession(); if (e.key === 'Escape') { setShowNewForm(false); setNewName(''); } }}
                placeholder="Topic: e.g. Warfarin, HTN, sepsis…"
                autoFocus
                className="glass-input rounded-xl px-3 py-2 text-xs outline-none w-full"
                style={{ border: '1.5px solid #06b6d430', background: 'var(--card)', color: 'var(--text)' }}
              />
              <div className="flex gap-2">
                <button onClick={createSession} disabled={!newName.trim()}
                  className="flex-1 py-1.5 rounded-xl text-xs font-black text-white disabled:opacity-40"
                  style={{ background: '#06b6d4' }}>Create</button>
                <button onClick={() => { setShowNewForm(false); setNewName(''); }}
                  className="px-3 py-1.5 rounded-xl text-xs font-black glass opacity-60 hover:opacity-100">✕</button>
              </div>
            </div>
          )}
        </div>

        {/* Session list */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
          {sessions.length === 0 && (
            <div className="py-8 text-center opacity-30">
              <FileText size={22} className="mx-auto mb-2" />
              <p className="text-xs">No sessions yet</p>
              <p className="text-[10px] mt-1">Click "New Session"</p>
            </div>
          )}
          {sessions.map(s => (
            <div key={s.id}
              className="group flex items-center gap-2 px-3 py-2.5 rounded-xl cursor-pointer transition-all"
              style={activeSession?.id === s.id
                ? { background: '#06b6d4', color: '#fff' }
                : { color: 'var(--text)' }}
              onClick={() => setActiveSession({ id: s.id, topicKey: `sbar-standalone::${s.id}` })}>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-black truncate">{s.id}</p>
                {s.savedAt && <p className={`text-[10px] truncate ${activeSession?.id === s.id ? 'opacity-70' : 'opacity-40'}`}>{s.savedAt}</p>}
              </div>
              <button
                onClick={e => { e.stopPropagation(); deleteSession(s.id); }}
                className="opacity-0 group-hover:opacity-50 hover:!opacity-100 shrink-0 transition-opacity"
                title="Delete session">
                <X size={13} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar scroll-content" style={{ padding: '16px 20px' }}>
        {!activeSession ? (
          /* Welcome screen */
          <div className="flex flex-col items-center justify-center min-h-[500px] gap-6 text-center">
            <div className="w-20 h-20 rounded-3xl flex items-center justify-center"
              style={{ background: '#06b6d415', border: '2px solid #06b6d425' }}>
              <FileText size={36} style={{ color: '#06b6d4' }} />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black" style={{ color: '#06b6d4' }}>SBAR Practice Station</h2>
              <p className="text-sm opacity-50 max-w-md leading-relaxed">
                Generate a realistic patient case for any medication or disease, fill in the SBAR form, then get detailed AI evaluation of your clinical reasoning.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-lg">
              {[
                { icon: '🏥', title: 'Case Generator', desc: 'AI creates a realistic patient scenario for any topic you choose' },
                { icon: '📋', title: 'Fillable SBAR', desc: 'Structured form: Situation, Background, Assessment, Recommendation' },
                { icon: '🎯', title: 'AI Evaluation', desc: 'Scored feedback per section with model answers and exam tips' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="rounded-2xl p-4 text-center space-y-2"
                  style={{ background: 'var(--card)', border: '1.5px solid #06b6d420' }}>
                  <span className="text-3xl">{icon}</span>
                  <p className="text-xs font-black" style={{ color: '#06b6d4' }}>{title}</p>
                  <p className="text-[10px] opacity-40 leading-snug">{desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowNewForm(true)}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-black text-white"
                style={{ background: 'linear-gradient(135deg,#06b6d4,#0891b2)' }}>
                <Plus size={15} /> Start New SBAR Session
              </button>
              <button
                onClick={() => {
                  const t = MEDICAL_RANDOM_TOPICS[Math.floor(Math.random() * MEDICAL_RANDOM_TOPICS.length)];
                  const name = t.split(':')[0].trim();
                  setSessions(prev => [{ id: name, savedAt: null }, ...prev.filter(s => s.id !== name)]);
                  setActiveSession({ id: name, topicKey: `sbar-standalone::${name}` });
                }}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-black border-2 border-dashed transition-all hover:opacity-80"
                style={{ borderColor: '#06b6d460', color: '#06b6d4', background: '#06b6d410' }}>
                🎲 Random Patient Case
              </button>
            </div>
            <div className="flex flex-wrap gap-2 justify-center max-w-lg">
              {['Sepsis', 'ACS / STEMI', 'DKA', 'Stroke', 'GI Bleed', 'PE', 'Hypertensive Crisis'].map(topic => (
                <button key={topic}
                  onClick={() => {
                    setSessions(prev => [{ id: topic, savedAt: null }, ...prev.filter(s => s.id !== topic)]);
                    setActiveSession({ id: topic, topicKey: `sbar-standalone::${topic}` });
                  }}
                  className="px-3 py-1.5 rounded-xl text-xs font-black transition-all hover:opacity-80"
                  style={{ background: '#06b6d415', color: '#06b6d4', border: '1px solid #06b6d430' }}>
                  {topic}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <OsceCommunicationForm
            key={activeSession.topicKey}
            topicKey={activeSession.topicKey}
            category={SBAR_CAT}
            settings={settings}
          />
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   NAVIGATION ITEMS — used by both desktop sidebar and mobile bottom nav
═══════════════════════════════════════════════════════════════════ */
const NAV_ITEMS = [
  { icon: LayoutDashboard, label: 'Home', v: 'dashboard', dis: false },
  { icon: FolderOpen, label: 'Library', v: 'library', dis: false },
  { icon: Layers, label: 'Cards', v: 'flashcards', dis: false },
  { icon: CheckSquare, label: 'Exams', v: 'exams', dis: false },
  { icon: Activity, label: 'Cases', v: 'cases', dis: false },
  { icon: Globe, label: 'Encyclo', v: 'encyclopedia', dis: false },
  { icon: MessageSquare, label: 'Tutor', v: 'chat', dis: false },
];


/* ═══════════════════════════════════════════════════════════════════
   MAIN APP
═══════════════════════════════════════════════════════════════════ */
function App() {
  const [loaded, setLoaded] = useState(false);
  const [bootError, setBootError] = useState(null); // Fix 9: surface DB failures to user
  const [docs, setDocs] = useState([]);
  const [openDocs, setOpenDocs] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [docPages, setDocPages] = useState({});
  const [flashcards, setFlashcards] = useState([]);
  const [exams, setExams] = useState([]);
  const [cases, setCases] = useState([]);
  const [notes, setNotes] = useState([]);
  const [chatSessions, setChatSessions] = useState([]);
  const [mindMaps, setMindMaps] = useState([]);
  const [timelines, setTimelines] = useState([]);
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [uploading, setUploading] = useState(false);
  const [uploadPct, setUploadPct] = useState(0);
  const [view, setView] = useState('library');
  const [rpTab, setRpTab] = useState('generate');
  const [rpOpen, setRpOpen] = useState(false);
  const [rpW, setRpW] = useState(420);
  const [bgTask, setBgTask] = useState(null);
  const [installPrompt, setInstallPrompt] = useState(null);
  const [showGlobalSearch, setShowGlobalSearch] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1024);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const { toasts, addToast } = useToast();

  useEffect(() => {
    // BUG-007 fix: expose nav height as a CSS var so scroll-content padding is always correct
    document.documentElement.style.setProperty('--nav-h', `${NAV_H}px`);
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Hide bottom nav when virtual keyboard is visible on mobile.
  useEffect(() => {
    if (!isMobile) {
      setIsKeyboardOpen(false);
      return;
    }

    const vv = window.visualViewport;
    let baseH = window.innerHeight; // tracks full height when keyboard is closed (Android fix)
    const updateKeyboardState = () => {
      const viewportHeight = vv?.height || window.innerHeight;
      const iosDelta = window.innerHeight - viewportHeight;   // iOS: vv shrinks, innerHeight stable
      const androidDelta = baseH - window.innerHeight;        // Android: innerHeight itself shrinks
      const delta = Math.max(iosDelta, androidDelta);
      const el = document.activeElement;
      const tag = (el?.tagName || '').toLowerCase();
      const isEditable = tag === 'input' || tag === 'textarea' || tag === 'select'
        || el?.isContentEditable || el?.getAttribute?.('contenteditable') === 'true';
      const open = delta > 100 && isEditable;
      setIsKeyboardOpen(open);
      if (!open && delta < 50) baseH = Math.max(baseH, window.innerHeight); // update base when keyboard closed
    };

    // Keyboard animation takes ~300ms; poll a few times after focus
    const onFocusIn = () => {
      setTimeout(updateKeyboardState, 50);
      setTimeout(updateKeyboardState, 200);
      setTimeout(updateKeyboardState, 450);
      setTimeout(updateKeyboardState, 700);
      setTimeout(updateKeyboardState, 1200);
    };
    const onFocusOut = () => {
      setTimeout(updateKeyboardState, 50);
      setTimeout(updateKeyboardState, 200);
      setTimeout(updateKeyboardState, 500);
    };

    vv?.addEventListener('resize', updateKeyboardState);
    window.addEventListener('resize', updateKeyboardState);
    window.addEventListener('focusin', onFocusIn);
    window.addEventListener('focusout', onFocusOut);
    updateKeyboardState();

    return () => {
      vv?.removeEventListener('resize', updateKeyboardState);
      window.removeEventListener('resize', updateKeyboardState);
      window.removeEventListener('focusin', onFocusIn);
      window.removeEventListener('focusout', onFocusOut);
    };
  }, [isMobile]);

  // (body background kept transparent — app div covers full screen)

  useKeyboardShortcuts([
    ['ctrl+k', () => setShowGlobalSearch(true)],
    ['ctrl+/', () => setShowGlobalSearch(true)],
    ['Escape', () => setShowGlobalSearch(false)],
    ['ctrl+1', () => setView('library')],
    ['ctrl+3', () => setView('flashcards')],
    ['ctrl+4', () => setView('exams')],
    ['ctrl+5', () => setView('cases')],
    ['ctrl+6', () => setView('chat')],
    ['ctrl+7', () => setView('encyclopedia')],
  ]);

  // PWA setup
  useEffect(() => {
    setupPWA();
    const handler = e => { e.preventDefault(); setInstallPrompt(e); };
    window.addEventListener('beforeinstallprompt', handler);
    window.addEventListener('appinstalled', () => { setInstallPrompt(null); addToast('App installed! 🎉', 'success'); });
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  // Viewport setup removed: handled statically in index.html to prevent iOS layout thrash

  // Load persisted state — show a clear error if IndexedDB is unavailable
  useEffect(() => {
    (async () => {
      try {
        const [d, fc, ex, ca, no, ch, st, od, dp, mm, tl, actId, savedView] = await Promise.all([
          getState('docs'), getState('flashcards'), getState('exams'), getState('cases'),
          getState('notes'), getState('chats'), getState('settings'), getState('openDocs'),
          getState('docPages'), getState('mindMaps'), getState('timelines'), getState('activeId'), getState('view')]);
        if (d) setDocs(d);
        // Merge built-in sets — always present, user sets follow after them
        const userFC = (fc || []).filter(f => !f.isBuiltin && !f.isBuiltIn);
        const userEx = (ex || []).filter(e => !e.isBuiltin && !e.isBuiltIn);
        const userCa = (ca || []).filter(c => !c.isBuiltin && !c.isBuiltIn);
        setFlashcards([...BUILTIN_FLASHCARD_SETS, ...userFC]);
        setExams([...BUILTIN_EXAM_SETS, ...userEx]);
        setCases([...BUILTIN_CASE_SETS, ...userCa]);
        if (no) setNotes(no); if (ch) setChatSessions(ch); if (od) setOpenDocs(od); if (dp) setDocPages(dp);
        if (mm) setMindMaps(mm); if (tl) setTimelines(tl);
        if (st) setSettings(p => ({ ...DEFAULT_SETTINGS, ...p, ...st }));
          if (actId) setActiveId(actId); else if (od && od.length > 0) setActiveId(od[od.length-1]);
          if (savedView && savedView === 'reader') { if (actId || (od && od.length>0)) setView(savedView); else setView('library'); }
      } catch (err) {
        logError('boot', err);
        // Non-fatal: still seed built-ins even if DB fails
        setFlashcards([...BUILTIN_FLASHCARD_SETS]);
        setExams([...BUILTIN_EXAM_SETS]);
        console.warn('Could not restore saved data. Starting fresh.', err.message);
        setBootError(err.message);
      } finally { setLoaded(true); }
    })();
  }, []);

  // Persist state to IndexedDB — debounced 800ms, silent failures (non-critical)
  useEffect(() => {
    if (!loaded) return;
    const t = setTimeout(async () => {
      try {
        const slim = docs.map(d => { const c = { ...d }; delete c.pagesText; delete c.buffer; return c; });
        // Exclude built-in sets from persistence — they are always seeded from code
        const userFC = flashcards.filter(f => !f.isBuiltin);
        const userEx = exams.filter(e => !e.isBuiltin);
        await Promise.all([saveState('docs', slim), saveState('flashcards', userFC),
        saveState('exams', userEx), saveState('cases', cases), saveState('notes', notes),
        saveState('chats', chatSessions), saveState('settings', settings),
        saveState('openDocs', openDocs), saveState('docPages', docPages),
        saveState('mindMaps', mindMaps), saveState('timelines', timelines), saveState('activeId', activeId), saveState('view', view)]);
      } catch (err) {
        logError('persist', err);
        // Don't interrupt the user — data is safe in memory for this session
      }
    }, 800);
    return () => clearTimeout(t);
  }, [docs, flashcards, exams, cases, notes, chatSessions, settings, openDocs, docPages, mindMaps, timelines, activeId, view, loaded]);

  // Theme
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('pure-white', 'light', 'dark', 'oled');
    let th = settings.theme;
    if (th === 'system') th = window.matchMedia?.('(prefers-color-scheme:dark)').matches ? 'dark' : 'pure-white';
    root.classList.add(th);
    root.style.setProperty('color-scheme', (th === 'dark' || th === 'oled') ? 'dark' : 'light');
    root.style.fontSize = { small: '14px', medium: '16px', large: '20px', xl: '23px', xxl: '26px' }[settings.fontSize] || '20px';
    root.style.setProperty('--line-height', { compact: '1.4', normal: '1.7', relaxed: '2.0', loose: '2.4' }[settings.lineSpacing || 'normal'] || '1.7');
    root.style.setProperty('--transition-speed', settings.animations === false ? '0s' : '0.2s');
    const clrs = {
      indigo: { hex: '#6366f1', rgb: '99,102,241', soft: '#4f46e5' },
      purple: { hex: '#a855f7', rgb: '168,85,247', soft: '#9333ea' },
      blue: { hex: '#3b82f6', rgb: '59,130,246', soft: '#2563eb' },
      emerald: { hex: '#10b981', rgb: '16,185,129', soft: '#059669' },
      rose: { hex: '#f43f5e', rgb: '244,63,94', soft: '#e11d48' },
    };
    const c = clrs[settings.accentColor] || clrs.indigo;
    root.style.setProperty('--accent', c.hex);
    root.style.setProperty('--acc-rgb', c.rgb);
    root.style.setProperty('--accent-soft', c.soft);
  }, [settings.theme, settings.fontSize, settings.accentColor]);

  // Right panel resize
  const handleRpDrag = useCallback(x => { setRpW(Math.max(320, Math.min(window.innerWidth - 300, window.innerWidth - x))); }, []);
  const startRpDrag = useDrag(handleRpDrag, [handleRpDrag]);

  // Universal upload
  const handleUpload = async (e) => {
    const files = Array.from(e.target?.files || e.dataTransfer?.files || []);
    if (!files.length) return;
    if (e.target) e.target.value = '';
    setUploading(true); setUploadPct(2);
    try {
      const newDocs = [], newIds = [], newPg = {}; let lastId = null;
      for (let fi = 0; fi < files.length; fi++) {
        const file = files[fi];
        const cat = getFileCategory(file);
        try {
          const data = await extractUniversal(file, pct => { setUploadPct(Math.round((fi / files.length * 100) + pct * (80 / files.length))); });
          const id = `${Date.now()}-${Math.random().toString(36).substr(2, 6)}`;
          // For images, store preview
          let imagePreview = null;
          if (cat === 'image' && data.imageBase64) { imagePreview = `data:${data.imageType || 'image/jpeg'};base64,${data.imageBase64.substring(0, 200)}`; }
          await saveFile(id, data);
          newDocs.push({ id, name: file.name, totalPages: data.totalPages, progress: 1, addedAt: new Date().toISOString(), fileCategory: cat, fileSize: file.size, imagePreview });
          newIds.push(id); newPg[id] = 1; lastId = id;
          addToast(`"${file.name}" imported!`, 'success');
        } catch (err) { addToast(`"${file.name}": ${err.message}`, 'error'); }
        setUploadPct(Math.round(((fi + 1) / files.length) * 95));
      }
      if (newDocs.length) {
        setDocs(p => [...p, ...newDocs]);
        setOpenDocs(p => [...new Set([...p, ...newIds])]);
        setDocPages(p => ({ ...p, ...newPg }));
        if (lastId) setTimeout(() => { setActiveId(lastId); setView('reader'); }, 60);
      }
    } catch (e) { addToast(`Upload failed: ${e.message}`, 'error'); }
    finally { setUploading(false); setUploadPct(0); }
  };

  const closeDoc = useCallback(id => {
    setOpenDocs(p => p.filter(d => d !== id));
    setActiveId(prev => {
      if (prev !== id) return prev;
      const next = openDocs.filter(d => d !== id)[0] || null;
      if (!next) setView('library'); return next;
    });
  }, [openDocs]);

  const deleteDoc = async (id, ev) => {
    if (ev) ev.stopPropagation();
    try { await delFile(id); } catch { }
    setDocs(p => p.filter(d => d.id !== id));
    setFlashcards(p => p.filter(f => f.docId !== id));
    setExams(p => p.filter(e => e.docId !== id));
    setCases(p => p.filter(c => c.docId !== id));
    setNotes(p => p.filter(n => n.docId !== id));
    setMindMaps(p => p.filter(m => m.docId !== id));
    setTimelines(p => p.filter(t => t.docId !== id));
    closeDoc(id); addToast('Document deleted', 'info');
  };

  const activeDoc = useMemo(() => docs.find(d => d.id === activeId) || null, [docs, activeId]);
  useEffect(() => { if (view === 'reader' && loaded && !activeDoc) { if (docs.length > 0) { setActiveId(docs[0].id); setOpenDocs(p => p.includes(docs[0].id) ? p : [...p, docs[0].id]); } else setView('library'); } }, [view, activeDoc, loaded, docs]);
  const setPage = useCallback(updater => setDocPages(p => ({ ...p, [activeId]: typeof updater === 'function' ? updater(p[activeId] || 1) : updater })), [activeId]);

  // Background AI generation
  const startGen = async (taskType, docId, startPage, endPage, params) => {
    if (bgTask) { addToast('A generation is already running', 'info'); return; }
    setBgTask({ title: `AI ${taskType.toUpperCase()}`, msg: 'Initializing…', done: 0, total: 1, isFinished: false });
    try {
      const fileData = await getFile(docId);
      const pagesText = fileData?.pagesText || {};
      const doc = docs.find(d => d.id === docId);

      // Handle image files with vision
      if (doc?.fileCategory === 'image' && fileData?.imageBase64) {
        setBgTask(p => ({ ...p, msg: 'Analyzing image with AI Vision…' }));
        const prompt = `Analyze this image and ${taskType === 'mindmap' ? 'create a mind map JSON' : 'provide detailed analysis'}.\n${taskType === 'mindmap' ? 'JSON: {"topic":"...","branches":[{"label":"...","subtopics":["..."]}]}' : ''}`;
        const result = await callAIWithVision(prompt, fileData.imageBase64, fileData.imageType, settings, 4000);
        if (taskType === 'mindmap') {
          try { setBgTask(p => ({ ...p, isFinished: true, result: { type: 'mindmap', data: parseJson(result), pages: 'image' }, msg: 'Done!' })); }
          catch { setBgTask(p => ({ ...p, isFinished: true, result: { type: 'summary', data: result, pages: 'image', title: 'Image Analysis' }, msg: 'Done!' })); }
        } else {
          setBgTask(p => ({ ...p, isFinished: true, result: { type: 'summary', data: result, pages: 'image', title: 'Image Analysis' }, msg: 'Done!' }));
        }
        addToast('Analysis complete!', 'success'); return;
      }

      let textContext = '';
      for (let i = Number(startPage); i <= Number(endPage); i++) {
        if (pagesText[i]) textContext += `\n[PAGE ${i}]\n${pagesText[i]}\n`;
      }
      if (!textContext.trim() || textContext.length < 10) throw new Error('No text found in selected page range.');
      const count = params.count || 10;
      const diff = params.difficultyLevel || 'Expert';
      const targetLang = params.targetLang || 'Spanish';

      const batchSize = taskType === 'cases' ? 5 : taskType === 'flashcards' ? 30 : 15;
      const isBatch = ['flashcards', 'exam', 'cases'].includes(taskType);
      const numBatches = isBatch ? Math.ceil(count / batchSize) : 1;
      setBgTask(p => ({ ...p, total: numBatches, msg: `Launching ${numBatches} parallel AI requests…` }));

      const MEDICINE_RULE_GEN = `\n\nMEDICINE RULE — MANDATORY: For every medication/drug, ALWAYS write brand name first then generic in parentheses. e.g. "Lasix (furosemide)", "Tylenol (acetaminophen)". Apply to ALL items.`;

      const makePrompt = (bc) => {
        const base = `Difficulty: ${diff}. USE ONLY provided text.${MEDICINE_RULE_GEN}\nDOCUMENT:\n${textContext}`;
        if (taskType === 'flashcards') return `${base}\nYOU MUST generate EXACTLY ${bc} expert flashcards — count carefully, the "items" array must have EXACTLY ${bc} entries.\nJSON: {"items":[{"q":"...","a":"...","evidence":"...","sourcePage":1}]}`;
        if (taskType === 'exam') return `${base}\nYOU MUST generate EXACTLY ${bc} exam questions — count carefully, the "items" array must have EXACTLY ${bc} entries.\nJSON: {"items":[{"q":"...","options":["A","B","C","D"],"correct":0,"explanation":"...","evidence":"...","sourcePage":1}]}`;
        if (taskType === 'cases') return `${base}\nGenerate exactly ${bc} richly detailed clinical cases from ONLY the document content. EACH case MUST have:\n- vignette: 6-10 sentences with demographics, chief complaint, HPI, PMH, meds, vitals, physical exam\n- labPanels: MINIMUM 3 panels (CBC, BMP, LFTs, others) with 5+ rows each (12-20 total lab values), flag abnormals H/L\n- examQuestion with 5 answer options (A-E), long stem, thorough explanation\nThe "cases" array MUST contain EXACTLY ${bc} entries.\nJSON ONLY: {"cases":[{"title":"descriptive title","vignette":"6-10 sentence detailed vignette","diagnosis":"specific ICD diagnosis","labPanels":[{"panelName":"COMPLETE BLOOD COUNT","rows":[{"test":"WBC","result":"15.2","flag":"H","range":"4.5-11.0","units":"K/uL"},{"test":"Hemoglobin","result":"11.5","flag":"L","range":"12.0-16.0","units":"g/dL"},{"test":"Hematocrit","result":"34.5","flag":"L","range":"36-46","units":"%"},{"test":"Platelets","result":"250","flag":"","range":"150-400","units":"K/uL"},{"test":"MCV","result":"80","flag":"","range":"80-100","units":"fL"},{"test":"Neutrophils","result":"85","flag":"H","range":"50-70","units":"%"}]},{"panelName":"BASIC METABOLIC PANEL","rows":[{"test":"Na","result":"138","flag":"","range":"135-145","units":"mEq/L"},{"test":"K","result":"3.2","flag":"L","range":"3.5-5.0","units":"mEq/L"},{"test":"Cl","result":"100","flag":"","range":"98-107","units":"mEq/L"},{"test":"CO2","result":"24","flag":"","range":"22-28","units":"mEq/L"},{"test":"BUN","result":"28","flag":"H","range":"7-20","units":"mg/dL"},{"test":"Creatinine","result":"1.5","flag":"H","range":"0.6-1.2","units":"mg/dL"}]},{"panelName":"LIVER FUNCTION TESTS","rows":[{"test":"AST","result":"150","flag":"H","range":"10-40","units":"U/L"},{"test":"ALT","result":"175","flag":"H","range":"7-56","units":"U/L"},{"test":"ALP","result":"90","flag":"","range":"44-147","units":"U/L"},{"test":"Total Bilirubin","result":"1.2","flag":"","range":"0.1-1.2","units":"mg/dL"},{"test":"Albumin","result":"3.0","flag":"L","range":"3.5-5.0","units":"g/dL"}]}],"examQuestion":{"q":"Detailed 2-3 sentence question stem about the case","options":["A) specific option","B) specific option","C) specific option","D) specific option","E) specific option"],"correct":0,"explanation":"Thorough 4-5 sentence explanation","evidence":"document quote","sourcePage":1}}]}`;
        if (taskType === 'mindmap') return `${base}\nCreate a comprehensive mind map.\nJSON: {"topic":"Central Topic","branches":[{"label":"Branch Name","subtopics":["sub1","sub2","sub3"]}]}`;
        if (taskType === 'concepts') return `${base}\nExtract key concepts with definitions.\nJSON: {"items":[{"concept":"...","definition":"...","example":"...","sourcePage":1}]}`;
        if (taskType === 'timeline') return `${base}\nExtract chronological events.\nJSON: {"events":[{"date":"...","event":"...","significance":"...","page":1}]}`;
        if (taskType === 'translate') return `${base}\nTranslate the content to ${targetLang}. Preserve structure. Provide the complete translation.`;
        if (taskType === 'summary') return `${base}\nProvide a comprehensive summary with key points, main themes, and critical details.`;
        if (taskType === 'smart-summary') return `${base}\n\nProvide 3-tier smart summary:\n## EXECUTIVE (2-3 sentences)\n## STANDARD (1 paragraph)\n## DETAILED (bullet points with key facts)`;
        if (taskType === 'clinical') return `${base}\nProvide a structured clinical summary with: Chief Complaint, History, Physical Findings, Assessment, Plan.`;
        if (taskType === 'differential') return `${base}\nProvide a ranked differential diagnosis with supporting evidence and key distinguishing features.`;
        if (taskType === 'treatment') return `${base}\nProvide a comprehensive treatment plan with first-line, second-line options, monitoring, and follow-up.`;
        if (taskType === 'labs') return `${base}\nInterpret all laboratory values mentioned. Provide clinical significance and action items.`;
        if (taskType === 'mnemonics') return `${base}\nCreate memorable mnemonics and memory aids for the key concepts in this content.`;
        if (taskType === 'eli5') return `${base}\nExplain this content simply, as if teaching a 10-year-old. Use analogies and simple language.`;
        if (taskType === 'code-explain') return `${base}\nExplain this code/technical content clearly. Cover: purpose, how it works, key concepts, practical applications.`;
        return `${base}\nProvide a detailed analysis of this content.`;
      };

      const isJson = ['flashcards', 'exam', 'cases', 'mindmap', 'concepts', 'timeline'].includes(taskType);
      const tasks = isBatch ? Array.from({ length: numBatches }, (_, i) => {
        // Exact batch size: last batch gets remainder, all others get batchSize
        const bc = i === numBatches - 1 ? (count % batchSize === 0 ? batchSize : count % batchSize) : batchSize;
        return () => callAI(makePrompt(bc), isJson, settings.strictMode, settings, 8000);
      }) : [() => callAI(makePrompt(count), isJson, settings.strictMode, settings, 8000)];

      let all = [];
      const exRes = await runParallel(tasks, 50, (done, total) => {
        setBgTask(p => ({ ...p, done, msg: `${done}/${total} batches complete…` }));
      });

      if (isJson) {
        for (const r of exRes) {
          if (r.status === 'fulfilled') {
            try {
              const p = parseJson(r.value);
              if (taskType === 'mindmap') { all = [p]; break; }
              if (taskType === 'timeline') { all = [p]; break; }
              all = [...all, ...(p.cases || p.items || p.questions || p.events || [])];
            }
            catch (e) { console.warn('Parse:', e.message); }
          }
        }
        if (!all.length) throw new Error('AI returned no parseable data.');
        const finalData = taskType === 'mindmap' ? all[0] : taskType === 'timeline' ? all[0] : all.slice(0, count);
        setBgTask(p => ({ ...p, isFinished: true, result: { type: taskType, data: finalData, pages: `${startPage}-${endPage}` }, msg: `Done! ${Array.isArray(finalData) ? finalData.length : 1} items.` }));
      } else {
        const raw = exRes[0]?.value || 'No content generated.';
        const titles = { summary: 'Summary', 'smart-summary': 'Smart Summary', clinical: 'Clinical Summary', differential: 'Differential Dx', treatment: 'Treatment Plan', labs: 'Lab Interpretation', eli5: 'Simplified Explanation', mnemonics: 'Mnemonics', translate: `${targetLang} Translation`, 'code-explain': 'Code Explanation' };
        setBgTask(p => ({ ...p, isFinished: true, result: { type: taskType, data: raw, pages: `${startPage}-${endPage}`, title: titles[taskType] || taskType }, msg: 'Complete!' }));
      }
      addToast('Generation complete! ⚡', 'success');
    } catch (e) { console.error(e); setBgTask(null); addToast(e.message, 'error'); }
  };

  const onInstall = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') setInstallPrompt(null);
  };

  if (!loaded) return (
    <div className="h-[100dvh] w-screen flex flex-col items-center justify-center bg-white gap-4">
      <style>{`
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
      `}</style>
      <div className="relative">
        <img src={MARIAM_IMG} className="w-16 h-16 rounded-2xl object-cover shadow-2xl" alt="MARIAM" />
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
          <Loader2 className="animate-spin text-white" size={14} />
        </div>
      </div>
      <div className="text-center">
        <p className="text-lg font-black text-indigo-500">MARIAM PRO</p>
        <p className="text-xs font-black uppercase tracking-[0.3em] opacity-30 mt-1">{APP_VER} · Loading</p>
      </div>
    </div>
  );

  const showReader = view === 'reader' && !!activeId && !!activeDoc;

  const NAV_ITEMS = [
    { icon: FolderOpen, label: 'Library', v: 'library' },
    { icon: BookMarked, label: 'Reader', v: 'reader' },
    { icon: Layers, label: 'Cards', v: 'flashcards' },
    { icon: Activity, label: 'Cases', v: 'cases' },
    { icon: CheckSquare, label: 'Exams', v: 'exams' },
    { icon: Globe, label: 'Encyclo', v: 'encyclopedia' },
    { icon: MessageSquare, label: 'Chat', v: 'chat' },
    { icon: Settings, label: 'Settings', v: 'settings' },
  ];

  return (
    <>
    <div className={`w-screen flex flex-col overflow-hidden text-[var(--text)] bg-mesh ${settings.theme || 'pure-white'} accent-${settings.accentColor || 'indigo'}`}
      style={{
        height: '100dvh',
        maxHeight: '100dvh',
        boxSizing: 'border-box',
      }}>
      <style>{`
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
          width: 100%; height: 100dvh;
          overflow: hidden;
          overscroll-behavior: none;
          background-color: var(--bg) !important;
        }
        #root { width: 100%; height: 100dvh; display: flex; flex-direction: column; }
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
      `}</style>
      <ToastContainer toasts={toasts} />
      {showGlobalSearch && <GlobalSearch docs={docs} flashcards={flashcards} exams={exams} cases={cases} notes={notes}
        onNavigate={(v, id) => { setView(v); if (id) { setActiveId(id); setOpenDocs(p => p.includes(id) ? p : [...p, id]); setDocPages(p => ({ ...p, [id]: 1 })); }; }}
        onClose={() => setShowGlobalSearch(false)} />}
      <GlobalTaskIndicator onViewResult={(id, task) => {
        // Auto-navigate to the right page when clicking a done task
        if (task.type === 'flashcards') setView('flashcards');
        else if (task.type === 'exam') setView('exams');
        else if (task.type === 'cases') setView('cases');
      }} />

      {/* Boot error banner — shown when IndexedDB failed to restore saved data */}
      {bootError && (
        <div className="shrink-0 bg-amber-500/10 border-b border-amber-500/30 px-4 py-2 flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-300">
          <AlertCircle size={16} className="shrink-0" />
          <span>Could not restore your previous session — starting fresh. ({bootError})</span>
          <button onClick={() => setBootError(null)} className="ml-auto opacity-60 hover:opacity-100"><X size={16} /></button>
        </div>
      )}

      <div className="design-top-glass" aria-hidden="true" />

      {/* HEADER — mobile: centered logo / desktop: full top nav bar */}
      <header className={`design-header shrink-0 relative${view === 'chat' ? ' chat-header-hide' : ''}`}>
        {/* Mobile: centered logo */}
        {/* logo hidden on mobile as requested */}
        {/* Mobile: search button (right) */}
        <button onClick={() => setShowGlobalSearch(true)}
          className="mobile-nav-only absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full items-center justify-center"
          style={{ background: 'rgba(255,255,255,0.15)' }}>
          <Search size={18} />
        </button>

        {/* Desktop: logo (left) */}
        <div className="desktop-only items-center gap-2 shrink-0">
          <img src={MARIAM_IMG} alt="" className="w-8 h-8 rounded-xl object-cover" />
          <span className="font-bold text-base whitespace-nowrap">MARIAM</span>
          <span className="text-[10px] font-black px-2 py-0.5 rounded-full text-white ml-0.5"
            style={{ background: 'linear-gradient(135deg,#10b981,#059669)' }}>PRO</span>
        </div>

        {/* Desktop: center pill nav */}
        <nav className="desktop-top-nav desktop-only">
          {NAV_ITEMS.map(({ icon: Icon, label, v, dis }) => (
            <button key={v} disabled={dis}
              onClick={() => { if (dis) return; if (v === 'reader') { if (activeId) setView('reader'); else if (docs && docs.length > 0) { const topDoc = docs[0]; setActiveId(topDoc.id); setOpenDocs(p => p.includes(topDoc.id) ? p : [...p, topDoc.id]); setView('reader'); } else setView('library'); } else setView(v); }}
              className={`desktop-top-nav-btn${view === v ? ' nav-active' : ''}`}
              title={label}>
              <Icon size={14} strokeWidth={view === v ? 2.5 : 2} />
              {label}
            </button>
          ))}
        </nav>

        {/* Desktop: right actions */}
        <div className="desktop-top-right desktop-only">
          <button onClick={() => setShowGlobalSearch(true)} className="desktop-icon-btn" title="Search (Ctrl+K)">
            <Search size={15} />
          </button>
          <button onClick={() => setView('chat')} className="desktop-ai-btn">
            <Sparkles size={13} />
            AI Studio
          </button>
        </div>
      </header>

      {/* BODY — no sidebar, bottom nav for all */}
      <div className="design-body flex flex-1 min-h-0 overflow-hidden relative">
        {/* MAIN CONTENT — gooddesign: padding-bottom for bottom nav */}
        <main className="design-main flex-1 flex flex-col min-h-0 overflow-hidden overflow-y-auto relative" style={{ paddingBottom: isMobile ? (isKeyboardOpen ? 8 : 120) : 24 }}>
          {uploading && (
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[var(--border)] z-50">
              <div className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2,var(--accent))] transition-all duration-300 animate-pulse" style={{ width: `${uploadPct}%` }} />
            </div>
          )}

          <ViewWrapper active={view === 'library'}>
            <LibraryMergedView docs={docs} uploading={uploading} onUpload={handleUpload}
              onOpen={id => { setOpenDocs(p => p.includes(id) ? p : [...p, id]); setActiveId(id); setView('reader'); }}
              onDelete={deleteDoc} flashcards={flashcards} exams={exams} cases={cases} notes={notes}
              setView={setView} setActiveId={id => { setActiveId(id); setOpenDocs(p => p.includes(id) ? p : [...p, id]); }} addToast={addToast} settings={settings} />
          </ViewWrapper>
          <ViewWrapper active={view === 'flashcards'}>
            <FlashcardsView flashcards={flashcards} setFlashcards={setFlashcards} settings={settings} addToast={addToast} docs={docs} setExams={setExams} setCases={setCases} />
          </ViewWrapper>
          <ViewWrapper active={view === 'exams'}>
            <ExamsView exams={exams} setExams={setExams} settings={settings} addToast={addToast} docs={docs} setFlashcards={setFlashcards} setCases={setCases} />
          </ViewWrapper>
          <ViewWrapper active={view === 'cases'}>
            <CasesView cases={cases} setCases={setCases} settings={settings} addToast={addToast} docs={docs} setFlashcards={setFlashcards} setExams={setExams} />
          </ViewWrapper>
          <ViewWrapper active={view === 'chat'}>
            <ChatView settings={settings} sessions={chatSessions} setSessions={setChatSessions}
              setView={setView} docs={docs} activeId={activeId} setActiveId={setActiveId} setOpenDocs={setOpenDocs} />
          </ViewWrapper>
          <ViewWrapper active={view === 'encyclopedia'}>
            <MedicalEncyclopediaView settings={settings} />
          </ViewWrapper>
          <ViewWrapper active={view === 'settings'}>
            <SettingsView settings={settings} setSettings={setSettings} installPrompt={installPrompt} onInstall={onInstall} />
          </ViewWrapper>
          <ViewWrapper active={showReader}>
            {activeDoc && (
              <DocWorkspace activeDoc={activeDoc} setDocs={setDocs}
                currentPage={docPages[activeId] || 1} setCurrentPage={setPage}
                openDocs={openDocs} closeTab={id => setOpenDocs(p => p.filter(d => d !== id))}
                setActiveId={setActiveId} docs={docs} onBack={() => setView('library')} rpOpen={rpOpen} setRpOpen={setRpOpen} />
            )}
          </ViewWrapper>
        </main>

        {/* AI STUDIO PANEL */}
        {showReader && rpOpen && (
          <>
            <div onMouseDown={startRpDrag} onTouchStart={startRpDrag}
              className="hidden lg:flex w-3 cursor-col-resize items-center justify-center bg-[var(--border)]/30 hover:bg-[var(--accent)]/30 shrink-0 z-[120] touch-none transition-colors group" style={{ touchAction: 'none' }}>
              <GripVertical size={16} className="text-[var(--text)] opacity-20 group-hover:opacity-60" />
            </div>
            <aside style={{ width: window.innerWidth >= 1024 ? `${rpW}px` : '100%' }}
              className="glass flex flex-col shrink-0 z-[100] lg:relative absolute inset-0 lg:inset-auto border-t-0 border-b-0 border-r-0 animate-slide-in h-full">
              <div className="h-14 lg:h-16 bg-gradient-to-r from-[var(--accent)] to-[var(--accent2,var(--accent))] text-white flex items-center justify-between px-4 shrink-0">
                <span className="font-black flex items-center gap-2 text-base"><Sparkles size={18} /> AI Studio</span>
                <button onClick={() => setRpOpen(false)} className="w-8 h-8 hover:bg-white/20 rounded-xl flex items-center justify-center"><X size={18} /></button>
              </div>
              <div className="flex shrink-0 border-b border-[color:var(--border2,var(--border))] bg-[var(--surface,var(--card))]">
                {[['generate', 'Generate', Zap], ['chat', 'Chat', MessageSquare], ['vault', 'Vault', Database]].map(([id, lbl, Icon]) => (
                  <button key={id} onClick={() => setRpTab(id)}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-black uppercase tracking-widest transition-colors border-b-2
                      ${rpTab === id ? 'border-[var(--accent)] text-[var(--accent)]' : 'border-transparent text-[var(--text)] opacity-50 hover:opacity-80'}`}>
                    <Icon size={16} />{lbl}
                  </button>
                ))}
              </div>
              <div className="flex-1 min-h-0 overflow-hidden">
                {activeDoc && rpTab === 'generate' && (
                  <GeneratePanel activeDoc={activeDoc} bgTask={bgTask} onStart={startGen}
                    onClear={() => setBgTask(null)} setFlashcards={setFlashcards} setExams={setExams}
                    setCases={setCases} setNotes={setNotes} onVault={() => setRpTab('vault')}
                    currentPage={docPages[activeId] || 1} addToast={addToast} settings={settings}
                    mindMaps={mindMaps} setMindMaps={setMindMaps}
                    timelines={timelines} setTimelines={setTimelines} />
                )}
                {activeDoc && rpTab === 'chat' && (
                  <ChatPanel activeDoc={activeDoc} settings={settings} currentPage={docPages[activeId] || 1} />
                )}
                {activeDoc && rpTab === 'vault' && (
                  <VaultPanel activeDocId={activeId} flashcards={flashcards} setFlashcards={setFlashcards}
                    exams={exams} setExams={setExams} cases={cases} setCases={setCases}
                    notes={notes} setNotes={setNotes} addToast={addToast}
                    setCurrentPage={setPage} setView={setView} settings={settings}
                    mindMaps={mindMaps} timelines={timelines} />
                )}
              </div>
            </aside>
          </>
        )}
      </div>


    </div>

    {/* BOTTOM NAV — outside overflow:hidden root so iOS PWA fixed positioning works correctly */}
    <nav className={`design-nav ${isMobile && isKeyboardOpen ? 'keyboard-open-hidden' : ''}`}>
      <div className="design-nav-inner">
        {NAV_ITEMS.map(({ icon: Icon, label, v, dis }) => (
          <button key={v} disabled={dis}
            onClick={() => { if (dis) return; if (v === 'reader') { if (activeId) setView('reader'); else if (docs && docs.length > 0) { const topDoc = docs[0]; setActiveId(topDoc.id); setOpenDocs(p => p.includes(topDoc.id) ? p : [...p, topDoc.id]); setView('reader'); } else setView('library'); } else setView(v); }}
            className={`design-nav-btn ${view === v ? 'active' : ''}`}
            title={label}>
            <Icon size={22} strokeWidth={view === v ? 2.5 : 2} />
            <span className="design-nav-label">{label}</span>
          </button>
        ))}
      </div>
    </nav>
    </>
  );
}

// Play icon polyfill
const Play = ({ size = 16, ...p }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}><polygon points="5 3 19 12 5 21 5 3" /></svg>;

class AppErrorBoundary extends React.Component {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error) { return { hasError: true, error }; }
  render() {
    if (this.state.hasError) return (
      <div style={{ padding: 40, textAlign: 'center', fontFamily: 'system-ui' }}>
        <h2>MARIAM PRO encountered an error</h2>
        <pre style={{ background: '#fee', padding: 16, borderRadius: 8, fontSize: 12, textAlign: 'left', overflowX: 'auto' }}>
          {this.state.error?.message}
        </pre>
        <button
          onClick={() => window.location.reload()}
          style={{ marginTop: 20, padding: '10px 20px', borderRadius: 8, background: 'var(--accent, #6366f1)', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          Reload App
        </button>
      </div>
    );
    return this.props.children;
  }
}

export default function AppWithBoundary() {
  return (
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  );
}
