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

const counselingFlashcards$1 = [{
  id: "builtin_counseling",
  title: "Counseling Flashcards",
  icon: "Layers",
  color: "#8b5cf6",
  isBuiltIn: true,
  cards: [
  {
    "id": "counseling_fc_0",
    "q": "Acetaminophen",
    "a": "Relief of mild to moderate pain and reduction of fever.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_1",
    "q": "Acetaminophen/Codeine",
    "a": "Short-term treatment of moderate pain when non-opioid therapy is inadequate.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_2",
    "q": "Acyclovir",
    "a": "Treatment and suppression of herpes simplex and varicella zoster infections.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_3",
    "q": "Adalimumab",
    "a": "Autoimmune conditions such as rheumatoid arthritis, psoriasis, and inflammatory bowel disease.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_4",
    "q": "Albuterol sulfate (HFA)",
    "a": "Rapid relief of bronchospasm in asthma or chronic obstructive pulmonary disease.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_5",
    "q": "Alendronate",
    "a": "Treatment and prevention of osteoporosis.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_6",
    "q": "Allopurinol",
    "a": "Prevention of gout flares and management of hyperuricemia.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_7",
    "q": "Alprazolam",
    "a": "Short-term management of anxiety and panic disorders.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_8",
    "q": "Amiodarone",
    "a": "Management of life-threatening ventricular and atrial arrhythmias.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_9",
    "q": "Amitriptyline",
    "a": "Treatment of depression and chronic neuropathic pain syndromes.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_10",
    "q": "Amlodipine",
    "a": "Management of hypertension and chronic stable angina.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_11",
    "q": "Amlodipine/Benazepril",
    "a": "Treatment of hypertension when monotherapy is insufficient.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_12",
    "q": "Amoxicillin",
    "a": "Treatment of susceptible bacterial infections including ear, sinus, and lower respiratory infections.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_13",
    "q": "Amoxicillin/Clavulanate",
    "a": "Treatment of infections caused by beta-lactamase producing bacteria, such as sinusitis and otitis media.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_14",
    "q": "Amphetamine/Dextroamphetamine",
    "a": "Attention-deficit/hyperactivity disorder and narcolepsy.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_15",
    "q": "Anastrozole",
    "a": "Adjuvant therapy for hormone receptor positive breast cancer in postmenopausal individuals.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_16",
    "q": "Apixaban",
    "a": "Prevention of stroke in atrial fibrillation and treatment or prevention of venous thromboembolism.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_17",
    "q": "Aripiprazole",
    "a": "Schizophrenia, bipolar disorder, adjunctive treatment for major depressive disorder, and irritability in autism.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_18",
    "q": "Aspirin 81 mg",
    "a": "Secondary prevention of cardiovascular events and certain post-stent regimens.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_19",
    "q": "Atenolol",
    "a": "Hypertension, post-myocardial infarction care, and chronic angina.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_20",
    "q": "Atenolol/Chlorthalidone",
    "a": "Management of hypertension requiring dual therapy.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_21",
    "q": "Atorvastatin",
    "a": "Reduction of LDL cholesterol and cardiovascular risk.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_22",
    "q": "Azelastine nasal",
    "a": "Relief of allergic rhinitis symptoms.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_23",
    "q": "Azithromycin",
    "a": "Treatment of susceptible respiratory, skin, and sexually transmitted infections.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_24",
    "q": "Baclofen",
    "a": "Relief of spasticity due to multiple sclerosis, spinal cord injury, or other neurologic conditions.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_25",
    "q": "Beclomethasone inhalation",
    "a": "Maintenance therapy for persistent asthma.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_26",
    "q": "Benazepril",
    "a": "Management of hypertension and adjunct in heart failure.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_27",
    "q": "Benazepril/Hydrochlorothiazide",
    "a": "Treatment of hypertension when monotherapy is inadequate.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_28",
    "q": "Benzonatate",
    "a": "Relief of cough due to colds or bronchitis.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_29",
    "q": "Betamethasone dipropionate topical",
    "a": "Inflammatory and pruritic dermatoses responsive to steroids.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_30",
    "q": "Bisacodyl",
    "a": "Short-term relief of occasional constipation.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_31",
    "q": "Bisoprolol",
    "a": "Hypertension and chronic heart failure (often with other agents).",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_32",
    "q": "Bisoprolol/Hydrochlorothiazide",
    "a": "Treatment of hypertension requiring combination therapy.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_33",
    "q": "Brimonidine ophthalmic",
    "a": "Lowering intraocular pressure in open-angle glaucoma or ocular hypertension.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_34",
    "q": "Budesonide inhalation",
    "a": "Maintenance therapy for persistent asthma.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_35",
    "q": "Budesonide/Formoterol",
    "a": "Maintenance treatment of asthma and COPD.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_36",
    "q": "Bumetanide",
    "a": "Edema associated with heart failure, liver disease, or kidney disease.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_37",
    "q": "Buprenorphine sublingual",
    "a": "Medication-assisted treatment of opioid use disorder and chronic pain in select cases.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_38",
    "q": "Buprenorphine/Naloxone",
    "a": "Maintenance therapy for opioid use disorder.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_39",
    "q": "Bupropion XL",
    "a": "Treatment of major depressive disorder and seasonal affective disorder; smoking cessation adjunct (other formulation).",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_40",
    "q": "Buspirone",
    "a": "Management of generalized anxiety disorder.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_41",
    "q": "Butalbital/Acetaminophen/Caffeine",
    "a": "Tension headaches when other options fail.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_42",
    "q": "Canagliflozin",
    "a": "Type 2 diabetes mellitus and cardiovascular/renal risk reduction in select patients.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_43",
    "q": "Candesartan",
    "a": "Treatment of hypertension and heart failure.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_44",
    "q": "Candesartan/Hydrochlorothiazide",
    "a": "Hypertension not controlled with single-agent therapy.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_45",
    "q": "Carbidopa/Levodopa",
    "a": "Management of Parkinson's disease symptoms.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_46",
    "q": "Tamsulosin",
    "a": "Lower urinary tract symptoms due to benign prostatic hyperplasia.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_47",
    "q": "Carvedilol",
    "a": "Heart failure with reduced ejection fraction, hypertension, and post-MI management.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_48",
    "q": "Cefdinir",
    "a": "Treatment of susceptible respiratory and skin infections.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_49",
    "q": "Cephalexin",
    "a": "Treatment of susceptible skin, respiratory, urinary, and bone infections.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_50",
    "q": "Celecoxib",
    "a": "Relief of pain and inflammation in osteoarthritis, rheumatoid arthritis, and dysmenorrhea.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_51",
    "q": "Cetirizine",
    "a": "Relief of allergic rhinitis and chronic urticaria symptoms.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_52",
    "q": "Chlorhexidine oral rinse",
    "a": "Management of gingivitis and reduction of oral bacterial load.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_53",
    "q": "Chlorthalidone",
    "a": "Treatment of hypertension and edema.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_54",
    "q": "Cholecalciferol high-dose",
    "a": "Correction of vitamin D deficiency.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_55",
    "q": "Ciprofloxacin",
    "a": "Treatment of susceptible urinary, gastrointestinal, and respiratory infections.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_56",
    "q": "Citalopram",
    "a": "Treatment of major depressive disorder and anxiety disorders.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_57",
    "q": "Clarithromycin",
    "a": "Treatment of susceptible respiratory and Helicobacter pylori infections.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_58",
    "q": "Clindamycin oral",
    "a": "Treatment of susceptible skin, soft tissue, and anaerobic infections.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_59",
    "q": "Clindamycin topical",
    "a": "Management of acne vulgaris.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_60",
    "q": "Clobetasol topical",
    "a": "Short-term treatment of inflammatory and pruritic dermatoses.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_61",
    "q": "Clonazepam",
    "a": "Seizure disorders and panic disorder.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_62",
    "q": "Clonidine",
    "a": "Hypertension and off-label use for withdrawal symptoms or ADHD.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_63",
    "q": "Clopidogrel",
    "a": "Prevention of thrombotic events after myocardial infarction, stroke, or stent placement.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_64",
    "q": "Clotrimazole/Betamethasone",
    "a": "Inflammatory tinea infections responsive to topical therapy.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_65",
    "q": "Colchicine",
    "a": "Treatment and prevention of gout flares and familial Mediterranean fever.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_66",
    "q": "Conjugated estrogens",
    "a": "Management of moderate to severe vasomotor symptoms of menopause and hypoestrogenism.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_67",
    "q": "Cyanocobalamin injection",
    "a": "Treatment of vitamin B12 deficiency and pernicious anemia.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_68",
    "q": "Cyclobenzaprine",
    "a": "Short-term treatment of muscle spasm associated with acute musculoskeletal conditions.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_69",
    "q": "Cyclosporine ophthalmic",
    "a": "Increase tear production in chronic dry eye disease.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_70",
    "q": "Dabigatran",
    "a": "Prevention of stroke in nonvalvular atrial fibrillation and treatment/prevention of venous thromboembolism.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_71",
    "q": "Dapagliflozin",
    "a": "Type 2 diabetes, heart failure with reduced ejection fraction, and chronic kidney disease risk reduction.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_72",
    "q": "Dapagliflozin/Metformin ER",
    "a": "Type 2 diabetes mellitus when dual therapy is appropriate.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_73",
    "q": "Tolterodine LA",
    "a": "Overactive bladder with urinary urgency, frequency, or urge incontinence.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_74",
    "q": "Desvenlafaxine",
    "a": "Treatment of major depressive disorder.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_75",
    "q": "Dexlansoprazole",
    "a": "Treatment of erosive esophagitis and symptomatic gastroesophageal reflux disease.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_76",
    "q": "Dexmethylphenidate ER",
    "a": "Treatment of attention-deficit/hyperactivity disorder.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_77",
    "q": "Diazepam",
    "a": "Anxiety, muscle spasm, seizure adjunct, and acute alcohol withdrawal.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_78",
    "q": "Diclofenac oral",
    "a": "Pain and inflammation due to arthritis or acute injury.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_79",
    "q": "Diclofenac topical gel",
    "a": "Relief of joint pain associated with osteoarthritis in hands, wrists, elbows, knees, ankles, or feet.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_80",
    "q": "Dicyclomine",
    "a": "Irritable bowel syndrome symptom relief.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_81",
    "q": "Digoxin",
    "a": "Heart failure with reduced ejection fraction and rate control in atrial fibrillation.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_82",
    "q": "Diltiazem ER",
    "a": "Hypertension, angina, and certain arrhythmias.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_83",
    "q": "Diphenoxylate/Atropine",
    "a": "Adjunctive treatment of acute diarrhea.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_84",
    "q": "Dipyridamole/Aspirin",
    "a": "Stroke prophylaxis in patients with a history of transient ischemic attack or completed ischemic stroke.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_85",
    "q": "Divalproex ER",
    "a": "Seizure disorders, bipolar disorder, and migraine prophylaxis.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_86",
    "q": "Donepezil",
    "a": "Management of mild to severe Alzheimer's dementia.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_87",
    "q": "Dorzolamide/Timolol",
    "a": "Reduction of intraocular pressure in glaucoma.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_88",
    "q": "Doxycycline",
    "a": "Treatment of acne, respiratory infections, Lyme disease, and other susceptible infections.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_89",
    "q": "Trazodone",
    "a": "Major depressive disorder and off-label for insomnia.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_90",
    "q": "Doxazosin",
    "a": "Treatment of benign prostatic hyperplasia and hypertension.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_91",
    "q": "Topiramate",
    "a": "Seizure control and migraine prophylaxis.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_92",
    "q": "Dulaglutide",
    "a": "Type 2 diabetes mellitus and cardiovascular risk reduction in select patients.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_93",
    "q": "Duloxetine",
    "a": "Major depressive disorder, generalized anxiety, diabetic neuropathy, fibromyalgia, and chronic musculoskeletal pain.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_94",
    "q": "Dutasteride",
    "a": "Treatment of benign prostatic hyperplasia.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_95",
    "q": "Edoxaban",
    "a": "Prevention of stroke in atrial fibrillation and treatment of venous thromboembolism after initial parenteral therapy.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_96",
    "q": "Emtricitabine/Tenofovir disoproxil fumarate",
    "a": "Treatment of HIV infection in combination therapy and pre-exposure prophylaxis (PrEP).",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_97",
    "q": "Empagliflozin",
    "a": "Type 2 diabetes and cardiovascular/renal risk reduction.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_98",
    "q": "Empagliflozin/Metformin",
    "a": "Type 2 diabetes mellitus when dual therapy is needed.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_99",
    "q": "Enalapril",
    "a": "Hypertension and symptomatic heart failure.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_100",
    "q": "Enoxaparin",
    "a": "Prevention and treatment of venous thromboembolism and acute coronary syndromes.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_101",
    "q": "Eplerenone",
    "a": "Heart failure post-myocardial infarction and resistant hypertension.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_102",
    "q": "Erenumab",
    "a": "Preventive treatment of migraine in adults.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_103",
    "q": "Escitalopram",
    "a": "Treatment of major depressive disorder and generalized anxiety disorder.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_104",
    "q": "Esomeprazole",
    "a": "Gastroesophageal reflux disease, erosive esophagitis, and peptic ulcer disease.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_105",
    "q": "Estradiol oral",
    "a": "Management of menopausal vasomotor symptoms and hypoestrogenism.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_106",
    "q": "Estradiol transdermal patch",
    "a": "Menopausal symptom management and hypoestrogenism.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_107",
    "q": "Ethinyl estradiol/Desogestrel",
    "a": "Prevention of pregnancy and cycle regulation.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_108",
    "q": "Ethinyl estradiol/Drospirenone",
    "a": "Contraception and treatment of premenstrual dysphoric disorder or acne.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_109",
    "q": "Ethinyl estradiol/Levonorgestrel",
    "a": "Prevention of pregnancy.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_110",
    "q": "Ethinyl estradiol/Norgestimate",
    "a": "Contraception and acne treatment.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_111",
    "q": "Etonogestrel/Ethinyl estradiol vaginal ring",
    "a": "Prevention of pregnancy.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_112",
    "q": "Ezetimibe",
    "a": "Reduction of LDL cholesterol, often in combination with statins.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_113",
    "q": "Famotidine",
    "a": "Relief of heartburn, gastroesophageal reflux, and prevention of ulcers.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_114",
    "q": "Fenofibrate",
    "a": "Reduction of triglycerides and improvement of HDL cholesterol.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_115",
    "q": "Fentanyl transdermal patch",
    "a": "Chronic severe pain in opioid-tolerant patients.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_116",
    "q": "Ferrous sulfate",
    "a": "Treatment and prevention of iron deficiency anemia.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_117",
    "q": "Finasteride",
    "a": "Treatment of benign prostatic hyperplasia.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_118",
    "q": "Fluconazole",
    "a": "Treatment of candidiasis, cryptococcal meningitis, and antifungal prophylaxis.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_119",
    "q": "Fluoxetine",
    "a": "Depression, obsessive-compulsive disorder, panic disorder, bulimia nervosa, and PMDD.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_120",
    "q": "Fluticasone nasal spray",
    "a": "Allergic rhinitis and non-allergic nasal inflammation.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_121",
    "q": "Fluticasone propionate HFA",
    "a": "Maintenance treatment of persistent asthma.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_122",
    "q": "Fluticasone/Salmeterol",
    "a": "Maintenance treatment of asthma and COPD (Diskus).",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_123",
    "q": "Fluticasone/Vilanterol",
    "a": "Once-daily maintenance therapy for asthma and COPD.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_124",
    "q": "Folic acid",
    "a": "Prevention and treatment of folate deficiency and during pregnancy to prevent neural tube defects.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_125",
    "q": "Furosemide",
    "a": "Edema due to heart failure, liver disease, or kidney disease; hypertension.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_126",
    "q": "Gabapentin",
    "a": "Seizure adjunct therapy, neuropathic pain, and restless legs syndrome (other formulations).",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_127",
    "q": "Gemfibrozil",
    "a": "Reduction of triglycerides in severe hypertriglyceridemia.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_128",
    "q": "Glimepiride",
    "a": "Type 2 diabetes mellitus.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_129",
    "q": "Glipizide",
    "a": "Type 2 diabetes mellitus.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_130",
    "q": "Glucagon emergency kit",
    "a": "Treatment of severe hypoglycemia when the patient cannot take oral carbohydrates.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_131",
    "q": "Glyburide",
    "a": "Type 2 diabetes mellitus.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_132",
    "q": "Guaifenesin",
    "a": "Relief of chest congestion by loosening mucus.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_133",
    "q": "Triamterene/Hydrochlorothiazide",
    "a": "Treatment of hypertension and edema while minimizing potassium loss.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_134",
    "q": "Guanfacine ER",
    "a": "Treatment of attention-deficit/hyperactivity disorder.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_135",
    "q": "Haloperidol",
    "a": "Schizophrenia, acute psychosis, and Tourette disorder.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_136",
    "q": "Hydralazine",
    "a": "Hypertension and heart failure (often with nitrates).",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_137",
    "q": "Hydrochlorothiazide",
    "a": "Hypertension and edema.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_138",
    "q": "Hydrocodone/Acetaminophen",
    "a": "Short-term management of moderate pain.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_139",
    "q": "Hydrocortisone rectal",
    "a": "Inflammatory conditions of the distal colon and rectum, including hemorrhoids.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_140",
    "q": "Hydroxychloroquine",
    "a": "Rheumatoid arthritis, lupus, and malaria prophylaxis/treatment.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_141",
    "q": "Hydroxyzine",
    "a": "Anxiety, pruritus, and adjunct anesthesia.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_142",
    "q": "Ibandronate",
    "a": "Treatment and prevention of postmenopausal osteoporosis.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_143",
    "q": "Ibuprofen",
    "a": "Relief of pain, fever, and inflammation.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_144",
    "q": "Icosapent ethyl",
    "a": "Reduction of triglycerides and cardiovascular risk in select patients.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_145",
    "q": "Tramadol",
    "a": "Short-term treatment of moderate pain.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_146",
    "q": "Indomethacin",
    "a": "Treatment of acute gout, ankylosing spondylitis, and other inflammatory conditions.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_147",
    "q": "Insulin aspart",
    "a": "Postprandial glucose control in diabetes mellitus.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_148",
    "q": "Insulin degludec",
    "a": "Basal insulin therapy for type 1 and type 2 diabetes.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_149",
    "q": "Insulin detemir",
    "a": "Basal insulin therapy for type 1 and type 2 diabetes.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_150",
    "q": "Insulin glargine",
    "a": "Basal insulin coverage for type 1 and type 2 diabetes.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_151",
    "q": "Insulin glulisine",
    "a": "Mealtime insulin for type 1 and type 2 diabetes.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_152",
    "q": "Insulin lispro",
    "a": "Control of post-meal blood glucose in diabetes.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_153",
    "q": "Insulin regular",
    "a": "Mealtime insulin for type 1 and type 2 diabetes.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_154",
    "q": "Ipilimumab",
    "a": "Treatment of metastatic melanoma and other advanced cancers.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_155",
    "q": "Ipratropium bromide",
    "a": "Maintenance treatment of COPD and adjunct for acute asthma.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_156",
    "q": "Irbesartan",
    "a": "Hypertension and diabetic nephropathy.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_157",
    "q": "Isosorbide dinitrate",
    "a": "Prevention of angina pectoris; adjunct in heart failure.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_158",
    "q": "Isosorbide mononitrate",
    "a": "Prevention of angina pectoris.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_159",
    "q": "Isotretinoin",
    "a": "Severe recalcitrant nodular acne.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_160",
    "q": "Itraconazole",
    "a": "Systemic fungal infections and onychomycosis.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_161",
    "q": "Ivabradine",
    "a": "Chronic heart failure with reduced ejection fraction to reduce hospitalization risk.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_162",
    "q": "Ixekizumab",
    "a": "Moderate to severe plaque psoriasis and psoriatic arthritis.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_163",
    "q": "Ketoconazole topical",
    "a": "Treatment of fungal skin infections and seborrheic dermatitis.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_164",
    "q": "Ketorolac",
    "a": "Short-term management of moderate to severe acute pain.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_165",
    "q": "Labetalol",
    "a": "Hypertension, including during pregnancy, and hypertensive emergencies (IV).",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_166",
    "q": "Lacosamide",
    "a": "Partial-onset seizures in epilepsy.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_167",
    "q": "Lactulose",
    "a": "Treatment of chronic constipation and hepatic encephalopathy.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_168",
    "q": "Lamotrigine",
    "a": "Seizure disorders and maintenance treatment of bipolar disorder.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_169",
    "q": "Lansoprazole",
    "a": "GERD, peptic ulcer disease, and erosive esophagitis.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_170",
    "q": "Latanoprost",
    "a": "Reduction of intraocular pressure in glaucoma and ocular hypertension.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_171",
    "q": "Ledipasvir/Sofosbuvir",
    "a": "Treatment of chronic hepatitis C virus infection.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_172",
    "q": "Levothyroxine",
    "a": "Hypothyroidism.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_173",
    "q": "Levetiracetam",
    "a": "Adjunct therapy for seizure disorders.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_174",
    "q": "Levofloxacin",
    "a": "Treatment of bacterial infections including pneumonia and urinary tract infections.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_175",
    "q": "Levonorgestrel emergency contraception",
    "a": "Emergency contraception within 72 hours of unprotected intercourse.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_176",
    "q": "Levonorgestrel intrauterine system",
    "a": "Long-term contraception and heavy menstrual bleeding (Mirena).",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_177",
    "q": "Levothyroxine/Liothyronine",
    "a": "Hypothyroidism in selected patients.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_178",
    "q": "Lidocaine patch",
    "a": "Relief of postherpetic neuralgia pain and localized neuropathic pain.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_179",
    "q": "Linaclotide",
    "a": "Irritable bowel syndrome with constipation and chronic idiopathic constipation.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_180",
    "q": "Linezolid",
    "a": "Treatment of resistant Gram-positive infections including MRSA and VRE.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_181",
    "q": "Linagliptin",
    "a": "Type 2 diabetes mellitus.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_182",
    "q": "Liraglutide",
    "a": "Type 2 diabetes and chronic weight management (Saxenda formulation).",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_183",
    "q": "Lisdexamfetamine",
    "a": "Attention-deficit/hyperactivity disorder and binge eating disorder.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_184",
    "q": "Lisinopril",
    "a": "Hypertension, heart failure, and post-myocardial infarction management.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_185",
    "q": "Lithium carbonate",
    "a": "Treatment of bipolar disorder.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_186",
    "q": "Loperamide",
    "a": "Control of acute nonspecific diarrhea and chronic diarrhea associated with inflammatory bowel disease.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_187",
    "q": "Lorazepam",
    "a": "Anxiety disorders, sedation, and status epilepticus (IV).",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_188",
    "q": "Losartan",
    "a": "Hypertension and diabetic nephropathy.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_189",
    "q": "Lovastatin",
    "a": "Reduction of LDL cholesterol and prevention of cardiovascular events.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_190",
    "q": "Lurasidone",
    "a": "Schizophrenia and bipolar depression.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_191",
    "q": "Macitentan",
    "a": "Pulmonary arterial hypertension.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_192",
    "q": "Magnesium oxide",
    "a": "Magnesium deficiency, indigestion, and constipation (higher doses).",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_193",
    "q": "Medroxyprogesterone acetate",
    "a": "Oral: abnormal uterine bleeding and amenorrhea; injectable: contraception and endometriosis.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_194",
    "q": "Melatonin",
    "a": "Management of insomnia and circadian rhythm disorders.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_195",
    "q": "Meloxicam",
    "a": "Osteoarthritis and rheumatoid arthritis pain and inflammation.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_196",
    "q": "Metformin",
    "a": "First-line therapy for type 2 diabetes mellitus.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_197",
    "q": "Metoclopramide",
    "a": "Gastroparesis and short-term relief of nausea/vomiting.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_198",
    "q": "Metolazone",
    "a": "Edema in heart failure and kidney disease, often combined with loop diuretics.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_199",
    "q": "Metoprolol succinate",
    "a": "Hypertension, angina, and heart failure with reduced ejection fraction.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_200",
    "q": "Metoprolol tartrate",
    "a": "Hypertension, angina, arrhythmias, and rate control.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_201",
    "q": "Metronidazole",
    "a": "Treatment of anaerobic bacterial infections and protozoal infections.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_202",
    "q": "Mexiletine",
    "a": "Treatment of ventricular arrhythmias.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_203",
    "q": "Miconazole topical",
    "a": "Vulvovaginal candidiasis and other cutaneous fungal infections.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_204",
    "q": "Midazolam",
    "a": "Procedural sedation, seizure clusters, and anesthesia induction.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_205",
    "q": "Midodrine",
    "a": "Orthostatic hypotension.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_206",
    "q": "Miglitol",
    "a": "Type 2 diabetes mellitus (postprandial glucose control).",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_207",
    "q": "Milnacipran",
    "a": "Management of fibromyalgia.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_208",
    "q": "Minocycline",
    "a": "Treatment of acne and various bacterial infections.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_209",
    "q": "Minoxidil oral",
    "a": "Resistant hypertension.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_210",
    "q": "Mirtazapine",
    "a": "Major depressive disorder.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_211",
    "q": "Mirabegron",
    "a": "Overactive bladder with urge urinary incontinence and frequency.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_212",
    "q": "Misoprostol",
    "a": "Prevention of NSAID-induced gastric ulcers and medical termination of pregnancy with mifepristone.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_213",
    "q": "Mometasone inhalation",
    "a": "Maintenance treatment of asthma.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_214",
    "q": "Montelukast",
    "a": "Asthma maintenance and allergic rhinitis.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_215",
    "q": "Morphine extended-release",
    "a": "Chronic severe pain requiring continuous opioid therapy.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_216",
    "q": "Moxifloxacin",
    "a": "Treatment of respiratory and skin infections.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_217",
    "q": "Mupirocin topical",
    "a": "Treatment of impetigo and nasal MRSA colonization (intranasal ointment).",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_218",
    "q": "Mycophenolate mofetil",
    "a": "Prevention of organ transplant rejection.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_219",
    "q": "Nabumetone",
    "a": "Osteoarthritis and rheumatoid arthritis pain.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_220",
    "q": "Nadolol",
    "a": "Hypertension, angina, and arrhythmias; prophylaxis of variceal bleeding.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_221",
    "q": "Naloxone nasal spray",
    "a": "Emergency reversal of opioid overdose.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_222",
    "q": "Naltrexone",
    "a": "Treatment of opioid and alcohol dependence.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_223",
    "q": "Naproxen",
    "a": "Pain, inflammation, and fever.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_224",
    "q": "Nebivolol",
    "a": "Treatment of hypertension.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_225",
    "q": "Nefazodone",
    "a": "Major depressive disorder (limited use due to hepatotoxicity).",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_226",
    "q": "Nelfinavir",
    "a": "Antiretroviral therapy for HIV infection.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_227",
    "q": "Neomycin/Polymyxin B/Hydrocortisone otic",
    "a": "Treatment of external otitis (swimmer's ear).",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_228",
    "q": "Neostigmine",
    "a": "Myasthenia gravis and reversal of nondepolarizing neuromuscular blockade.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_229",
    "q": "Nicardipine",
    "a": "Hypertension and angina; IV form for hypertensive emergencies.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_230",
    "q": "Nicotine transdermal patch",
    "a": "Nicotine replacement therapy for smoking cessation.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_231",
    "q": "Nifedipine extended-release",
    "a": "Chronic hypertension and angina.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_232",
    "q": "Nitrofurantoin",
    "a": "Treatment and prophylaxis of uncomplicated urinary tract infections.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_233",
    "q": "Nitroglycerin sublingual",
    "a": "Acute relief of angina pectoris.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_234",
    "q": "Nitroglycerin transdermal",
    "a": "Prevention of chronic angina.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_235",
    "q": "Nivolumab",
    "a": "Treatment of various advanced cancers including melanoma, lung, and renal cell carcinoma.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_236",
    "q": "Norethindrone",
    "a": "Prevention of pregnancy in individuals who cannot take estrogen.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_237",
    "q": "Nortriptyline",
    "a": "Depression and off-label for neuropathic pain.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_238",
    "q": "Nystatin oral suspension",
    "a": "Treatment of oral candidiasis (thrush).",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_239",
    "q": "Octreotide",
    "a": "Management of acromegaly and severe diarrhea/flushing from carcinoid tumors.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_240",
    "q": "Olanzapine",
    "a": "Schizophrenia and bipolar disorder.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_241",
    "q": "Olmesartan",
    "a": "Hypertension.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_242",
    "q": "Omega-3-acid ethyl esters",
    "a": "Severe hypertriglyceridemia.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_243",
    "q": "Omeprazole",
    "a": "GERD, erosive esophagitis, and peptic ulcer disease.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_244",
    "q": "Ondansetron",
    "a": "Prevention and treatment of nausea and vomiting.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_245",
    "q": "Oseltamivir",
    "a": "Treatment and prophylaxis of influenza A and B.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_246",
    "q": "Oxcarbazepine",
    "a": "Partial seizures in epilepsy.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_247",
    "q": "Oxybutynin",
    "a": "Overactive bladder with urge urinary incontinence and urgency.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_248",
    "q": "Oxycodone extended-release",
    "a": "Chronic severe pain requiring continuous opioid therapy.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_249",
    "q": "Oxycodone/Acetaminophen",
    "a": "Short-term management of moderate to severe pain.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_250",
    "q": "Paliperidone",
    "a": "Schizophrenia and schizoaffective disorder.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_251",
    "q": "Pancrelipase",
    "a": "Exocrine pancreatic insufficiency due to cystic fibrosis, chronic pancreatitis, or pancreatectomy.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_252",
    "q": "Pantoprazole",
    "a": "GERD, erosive esophagitis, and Zollinger-Ellison syndrome.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_253",
    "q": "Paroxetine",
    "a": "Depression, anxiety disorders, OCD, and PTSD.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_254",
    "q": "Penicillin V potassium",
    "a": "Treatment of streptococcal pharyngitis and other susceptible infections.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_255",
    "q": "Pentoxifylline",
    "a": "Intermittent claudication due to peripheral artery disease.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_256",
    "q": "Permethrin topical",
    "a": "Treatment of scabies and head lice.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_257",
    "q": "Phenazopyridine",
    "a": "Symptomatic relief of dysuria associated with urinary tract infections.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_258",
    "q": "Phenobarbital",
    "a": "Seizure disorders and sedation.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_259",
    "q": "Phentermine",
    "a": "Short-term management of obesity in conjunction with diet and exercise.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_260",
    "q": "Phenytoin",
    "a": "Control of tonic-clonic and focal seizures and prevention of seizures post-neurosurgery.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_261",
    "q": "Pioglitazone",
    "a": "Type 2 diabetes mellitus.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_262",
    "q": "Piperacillin/Tazobactam",
    "a": "Serious intra-abdominal, skin, and pulmonary infections in hospital settings.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_263",
    "q": "Polyethylene glycol 3350",
    "a": "Occasional constipation.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_264",
    "q": "Potassium chloride",
    "a": "Treatment or prevention of hypokalemia.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_265",
    "q": "Pramipexole",
    "a": "Parkinson disease and restless legs syndrome.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_266",
    "q": "Pravastatin",
    "a": "Reduction of LDL cholesterol and cardiovascular risk.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_267",
    "q": "Prazosin",
    "a": "Hypertension and off-label for PTSD-related nightmares.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_268",
    "q": "Prednisone",
    "a": "Inflammatory and autoimmune conditions, asthma exacerbations, and allergic reactions.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_269",
    "q": "Pregabalin",
    "a": "Neuropathic pain, fibromyalgia, and adjunctive therapy for partial seizures.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_270",
    "q": "Probenecid",
    "a": "Chronic management of gout by increasing uric acid excretion.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_271",
    "q": "Procainamide",
    "a": "Management of ventricular and supraventricular arrhythmias.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_272",
    "q": "Promethazine",
    "a": "Treatment of nausea, vomiting, allergies, and motion sickness.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_273",
    "q": "Propranolol",
    "a": "Hypertension, arrhythmias, migraine prophylaxis, and performance anxiety.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_274",
    "q": "Quetiapine",
    "a": "Schizophrenia, bipolar disorder, and adjunctive treatment of major depressive disorder.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_275",
    "q": "Quinapril",
    "a": "Hypertension and heart failure.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_276",
    "q": "Raloxifene",
    "a": "Prevention and treatment of osteoporosis in postmenopausal women and reduction of invasive breast cancer risk.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_277",
    "q": "Rivaroxaban",
    "a": "Prevention and treatment of venous thromboembolism and stroke prevention in atrial fibrillation.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_278",
    "q": "Risperidone",
    "a": "Schizophrenia, bipolar disorder, and irritability associated with autism.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_279",
    "q": "Rituximab",
    "a": "Treatment of non-Hodgkin lymphoma, chronic lymphocytic leukemia, and autoimmune diseases such as rheumatoid arthritis.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_280",
    "q": "Ropinirole",
    "a": "Parkinson disease and restless legs syndrome.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_281",
    "q": "Rosuvastatin",
    "a": "Reduction of LDL cholesterol and cardiovascular risk.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_282",
    "q": "Sacubitril/Valsartan",
    "a": "Heart failure with reduced ejection fraction.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_283",
    "q": "Saxagliptin",
    "a": "Type 2 diabetes mellitus.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_284",
    "q": "Secukinumab",
    "a": "Moderate to severe plaque psoriasis, psoriatic arthritis, and ankylosing spondylitis.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_285",
    "q": "Semaglutide",
    "a": "Type 2 diabetes (Ozempic, Rybelsus) and chronic weight management (Wegovy).",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_286",
    "q": "Sildenafil",
    "a": "Erectile dysfunction (Viagra) and pulmonary arterial hypertension (Revatio).",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_287",
    "q": "Simvastatin",
    "a": "Reduction of LDL cholesterol and cardiovascular risk.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_288",
    "q": "Sitagliptin",
    "a": "Type 2 diabetes mellitus.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_289",
    "q": "Sofosbuvir/Velpatasvir",
    "a": "Treatment of chronic hepatitis C virus infection across all major genotypes.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_290",
    "q": "Spironolactone",
    "a": "Heart failure, resistant hypertension, primary hyperaldosteronism, and acne/hirsutism off-label.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_291",
    "q": "Sucralfate",
    "a": "Treatment and prevention of duodenal ulcers.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_292",
    "q": "Sulfamethoxazole/Trimethoprim",
    "a": "Treatment of urinary, respiratory, and skin infections, as well as Pneumocystis prophylaxis.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_293",
    "q": "Sumatriptan",
    "a": "Acute treatment of migraine and cluster headaches.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_294",
    "q": "Tacrolimus",
    "a": "Prevention of organ transplant rejection and treatment of atopic dermatitis (topical).",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_295",
    "q": "Tamoxifen",
    "a": "Treatment and prevention of estrogen receptor-positive breast cancer.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_296",
    "q": "Tamsulosin",
    "a": "Benign prostatic hyperplasia.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_297",
    "q": "Terbinafine",
    "a": "Onychomycosis and fungal skin infections.",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_298",
    "q": "Tiotropium",
    "a": "Maintenance therapy for COPD and asthma (Respimat).",
    "nextReview": 0
  },
  {
    "id": "counseling_fc_299",
    "q": "Warfarin",
    "a": "Prevention and treatment of thromboembolism in atrial fibrillation, DVT/PE, and mechanical heart valves.",
    "nextReview": 0
  }
]
}];

const counselingExams$1 = [{
  id: "builtin_exam_counseling",
  title: "Counseling Exam",
  icon: "CheckSquare",
  color: "#8b5cf6",
  isBuiltIn: true,
  isBuiltin: true,
  questions: [
  {
    "id": "counseling_ex_0",
    "q": "What is a key point regarding Acetaminophen?",
    "options": [
      "Relief of mild to moderate pain and reduction of fever.",
      "Treatment and suppression of herpes simplex and varicella zoster infections.",
      "Prevention of gout flares and management of hyperuricemia.",
      "Management of hypertension and chronic stable angina."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_1",
    "q": "What is a key point regarding Acetaminophen/Codeine?",
    "options": [
      "Short-term treatment of moderate pain when non-opioid therapy is inadequate.",
      "Treatment of depression and chronic neuropathic pain syndromes.",
      "Schizophrenia, bipolar disorder, adjunctive treatment for major depressive disorder, and irritability in autism.",
      "Treatment of susceptible respiratory, skin, and sexually transmitted infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_2",
    "q": "What is a key point regarding Acyclovir?",
    "options": [
      "Treatment and suppression of herpes simplex and varicella zoster infections.",
      "Prevention of stroke in atrial fibrillation and treatment or prevention of venous thromboembolism.",
      "Relief of cough due to colds or bronchitis.",
      "Edema associated with heart failure, liver disease, or kidney disease."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_3",
    "q": "What is a key point regarding Adalimumab?",
    "options": [
      "Autoimmune conditions such as rheumatoid arthritis, psoriasis, and inflammatory bowel disease.",
      "Treatment of susceptible respiratory, skin, and sexually transmitted infections.",
      "Treatment of major depressive disorder and seasonal affective disorder; smoking cessation adjunct (other formulation).",
      "Treatment of susceptible skin, respiratory, urinary, and bone infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_4",
    "q": "What is a key point regarding Albuterol sulfate (HFA)?",
    "options": [
      "Rapid relief of bronchospasm in asthma or chronic obstructive pulmonary disease.",
      "Short-term relief of occasional constipation.",
      "Relief of pain and inflammation in osteoarthritis, rheumatoid arthritis, and dysmenorrhea.",
      "Hypertension and off-label use for withdrawal symptoms or ADHD."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_5",
    "q": "What is a key point regarding Alendronate?",
    "options": [
      "Treatment and prevention of osteoporosis.",
      "Medication-assisted treatment of opioid use disorder and chronic pain in select cases.",
      "Seizure disorders and panic disorder.",
      "Treatment of erosive esophagitis and symptomatic gastroesophageal reflux disease."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_6",
    "q": "What is a key point regarding Allopurinol?",
    "options": [
      "Prevention of gout flares and management of hyperuricemia.",
      "Hypertension not controlled with single-agent therapy.",
      "Type 2 diabetes mellitus when dual therapy is appropriate.",
      "Treatment of acne, respiratory infections, Lyme disease, and other susceptible infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_7",
    "q": "What is a key point regarding Alprazolam?",
    "options": [
      "Short-term management of anxiety and panic disorders.",
      "Relief of allergic rhinitis and chronic urticaria symptoms.",
      "Adjunctive treatment of acute diarrhea.",
      "Heart failure post-myocardial infarction and resistant hypertension."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_8",
    "q": "What is a key point regarding Amiodarone?",
    "options": [
      "Management of life-threatening ventricular and atrial arrhythmias.",
      "Treatment of susceptible skin, soft tissue, and anaerobic infections.",
      "Treatment of benign prostatic hyperplasia.",
      "Reduction of triglycerides and improvement of HDL cholesterol."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_9",
    "q": "What is a key point regarding Amitriptyline?",
    "options": [
      "Treatment of depression and chronic neuropathic pain syndromes.",
      "Treatment and prevention of gout flares and familial Mediterranean fever.",
      "Management of menopausal vasomotor symptoms and hypoestrogenism.",
      "Reduction of triglycerides in severe hypertriglyceridemia."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_10",
    "q": "What is a key point regarding Amlodipine?",
    "options": [
      "Management of hypertension and chronic stable angina.",
      "Type 2 diabetes mellitus when dual therapy is appropriate.",
      "Treatment and prevention of iron deficiency anemia.",
      "Rheumatoid arthritis, lupus, and malaria prophylaxis/treatment."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_11",
    "q": "What is a key point regarding Amlodipine/Benazepril?",
    "options": [
      "Treatment of hypertension when monotherapy is insufficient.",
      "Relief of joint pain associated with osteoarthritis in hands, wrists, elbows, knees, ankles, or feet.",
      "Reduction of triglycerides in severe hypertriglyceridemia.",
      "Mealtime insulin for type 1 and type 2 diabetes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_12",
    "q": "What is a key point regarding Amoxicillin?",
    "options": [
      "Treatment of susceptible bacterial infections including ear, sinus, and lower respiratory infections.",
      "Management of mild to severe Alzheimer's dementia.",
      "Short-term management of moderate pain.",
      "Partial-onset seizures in epilepsy."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_13",
    "q": "What is a key point regarding Amoxicillin/Clavulanate?",
    "options": [
      "Treatment of infections caused by beta-lactamase producing bacteria, such as sinusitis and otitis media.",
      "Major depressive disorder, generalized anxiety, diabetic neuropathy, fibromyalgia, and chronic musculoskeletal pain.",
      "Basal insulin therapy for type 1 and type 2 diabetes.",
      "Irritable bowel syndrome with constipation and chronic idiopathic constipation."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_14",
    "q": "What is a key point regarding Amphetamine/Dextroamphetamine?",
    "options": [
      "Attention-deficit/hyperactivity disorder and narcolepsy.",
      "Prevention and treatment of venous thromboembolism and acute coronary syndromes.",
      "Systemic fungal infections and onychomycosis.",
      "Magnesium deficiency, indigestion, and constipation (higher doses)."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_15",
    "q": "What is a key point regarding Anastrozole?",
    "options": [
      "Adjuvant therapy for hormone receptor positive breast cancer in postmenopausal individuals.",
      "Prevention of pregnancy and cycle regulation.",
      "Treatment of chronic hepatitis C virus infection.",
      "Orthostatic hypotension."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_16",
    "q": "What is a key point regarding Apixaban?",
    "options": [
      "Prevention of stroke in atrial fibrillation and treatment or prevention of venous thromboembolism.",
      "Reduction of triglycerides and improvement of HDL cholesterol.",
      "Type 2 diabetes and chronic weight management (Saxenda formulation).",
      "Prevention of organ transplant rejection."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_17",
    "q": "What is a key point regarding Aripiprazole?",
    "options": [
      "Schizophrenia, bipolar disorder, adjunctive treatment for major depressive disorder, and irritability in autism.",
      "Maintenance treatment of persistent asthma.",
      "Oral: abnormal uterine bleeding and amenorrhea; injectable: contraception and endometriosis.",
      "Chronic hypertension and angina."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_18",
    "q": "What is a key point regarding Aspirin 81 mg?",
    "options": [
      "Secondary prevention of cardiovascular events and certain post-stent regimens.",
      "Type 2 diabetes mellitus.",
      "Procedural sedation, seizure clusters, and anesthesia induction.",
      "Prevention and treatment of nausea and vomiting."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_19",
    "q": "What is a key point regarding Atenolol?",
    "options": [
      "Hypertension, post-myocardial infarction care, and chronic angina.",
      "Schizophrenia, acute psychosis, and Tourette disorder.",
      "Chronic severe pain requiring continuous opioid therapy.",
      "Symptomatic relief of dysuria associated with urinary tract infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_20",
    "q": "What is a key point regarding Atenolol/Chlorthalidone?",
    "options": [
      "Management of hypertension requiring dual therapy.",
      "Treatment and prevention of postmenopausal osteoporosis.",
      "Antiretroviral therapy for HIV infection.",
      "Chronic management of gout by increasing uric acid excretion."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_21",
    "q": "What is a key point regarding Atorvastatin?",
    "options": [
      "Reduction of LDL cholesterol and cardiovascular risk.",
      "Basal insulin therapy for type 1 and type 2 diabetes.",
      "Depression and off-label for neuropathic pain.",
      "Type 2 diabetes mellitus."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_22",
    "q": "What is a key point regarding Azelastine nasal?",
    "options": [
      "Relief of allergic rhinitis symptoms.",
      "Hypertension and diabetic nephropathy.",
      "Chronic severe pain requiring continuous opioid therapy.",
      "Benign prostatic hyperplasia."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_23",
    "q": "What is a key point regarding Azithromycin?",
    "options": [
      "Treatment of susceptible respiratory, skin, and sexually transmitted infections.",
      "Treatment of fungal skin infections and seborrheic dermatitis.",
      "Short-term management of obesity in conjunction with diet and exercise.",
      "Treatment of depression and chronic neuropathic pain syndromes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_24",
    "q": "What is a key point regarding Baclofen?",
    "options": [
      "Relief of spasticity due to multiple sclerosis, spinal cord injury, or other neurologic conditions.",
      "Reduction of intraocular pressure in glaucoma and ocular hypertension.",
      "Chronic management of gout by increasing uric acid excretion.",
      "Relief of allergic rhinitis symptoms."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_25",
    "q": "What is a key point regarding Beclomethasone inhalation?",
    "options": [
      "Maintenance therapy for persistent asthma.",
      "Hypothyroidism in selected patients.",
      "Reduction of LDL cholesterol and cardiovascular risk.",
      "Edema associated with heart failure, liver disease, or kidney disease."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_26",
    "q": "What is a key point regarding Benazepril?",
    "options": [
      "Management of hypertension and adjunct in heart failure.",
      "Hypertension, heart failure, and post-myocardial infarction management.",
      "Treatment of urinary, respiratory, and skin infections, as well as Pneumocystis prophylaxis.",
      "Treatment of susceptible skin, respiratory, urinary, and bone infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_27",
    "q": "What is a key point regarding Benazepril/Hydrochlorothiazide?",
    "options": [
      "Treatment of hypertension when monotherapy is inadequate.",
      "Pulmonary arterial hypertension.",
      "Autoimmune conditions such as rheumatoid arthritis, psoriasis, and inflammatory bowel disease.",
      "Hypertension and off-label use for withdrawal symptoms or ADHD."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_28",
    "q": "What is a key point regarding Benzonatate?",
    "options": [
      "Relief of cough due to colds or bronchitis.",
      "Edema in heart failure and kidney disease, often combined with loop diuretics.",
      "Attention-deficit/hyperactivity disorder and narcolepsy.",
      "Treatment of erosive esophagitis and symptomatic gastroesophageal reflux disease."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_29",
    "q": "What is a key point regarding Betamethasone dipropionate topical?",
    "options": [
      "Inflammatory and pruritic dermatoses responsive to steroids.",
      "Orthostatic hypotension.",
      "Maintenance therapy for persistent asthma.",
      "Treatment of acne, respiratory infections, Lyme disease, and other susceptible infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_30",
    "q": "What is a key point regarding Bisacodyl?",
    "options": [
      "Short-term relief of occasional constipation.",
      "Prevention of NSAID-induced gastric ulcers and medical termination of pregnancy with mifepristone.",
      "Medication-assisted treatment of opioid use disorder and chronic pain in select cases.",
      "Heart failure post-myocardial infarction and resistant hypertension."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_31",
    "q": "What is a key point regarding Bisoprolol?",
    "options": [
      "Hypertension and chronic heart failure (often with other agents).",
      "Osteoarthritis and rheumatoid arthritis pain.",
      "Treatment of susceptible respiratory and skin infections.",
      "Reduction of triglycerides and improvement of HDL cholesterol."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_32",
    "q": "What is a key point regarding Bisoprolol/Hydrochlorothiazide?",
    "options": [
      "Treatment of hypertension requiring combination therapy.",
      "Antiretroviral therapy for HIV infection.",
      "Management of acne vulgaris.",
      "Reduction of triglycerides in severe hypertriglyceridemia."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_33",
    "q": "What is a key point regarding Brimonidine ophthalmic?",
    "options": [
      "Lowering intraocular pressure in open-angle glaucoma or ocular hypertension.",
      "Acute relief of angina pectoris.",
      "Prevention of stroke in nonvalvular atrial fibrillation and treatment/prevention of venous thromboembolism.",
      "Rheumatoid arthritis, lupus, and malaria prophylaxis/treatment."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_34",
    "q": "What is a key point regarding Budesonide inhalation?",
    "options": [
      "Maintenance therapy for persistent asthma.",
      "Schizophrenia and bipolar disorder.",
      "Heart failure with reduced ejection fraction and rate control in atrial fibrillation.",
      "Mealtime insulin for type 1 and type 2 diabetes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_35",
    "q": "What is a key point regarding Budesonide/Formoterol?",
    "options": [
      "Maintenance treatment of asthma and COPD.",
      "Overactive bladder with urge urinary incontinence and urgency.",
      "Type 2 diabetes mellitus and cardiovascular risk reduction in select patients.",
      "Partial-onset seizures in epilepsy."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_36",
    "q": "What is a key point regarding Bumetanide?",
    "options": [
      "Edema associated with heart failure, liver disease, or kidney disease.",
      "Treatment of streptococcal pharyngitis and other susceptible infections.",
      "Treatment of major depressive disorder and generalized anxiety disorder.",
      "Irritable bowel syndrome with constipation and chronic idiopathic constipation."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_37",
    "q": "What is a key point regarding Buprenorphine sublingual?",
    "options": [
      "Medication-assisted treatment of opioid use disorder and chronic pain in select cases.",
      "Type 2 diabetes mellitus.",
      "Reduction of triglycerides and improvement of HDL cholesterol.",
      "Magnesium deficiency, indigestion, and constipation (higher doses)."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_38",
    "q": "What is a key point regarding Buprenorphine/Naloxone?",
    "options": [
      "Maintenance therapy for opioid use disorder.",
      "Inflammatory and autoimmune conditions, asthma exacerbations, and allergic reactions.",
      "Edema due to heart failure, liver disease, or kidney disease; hypertension.",
      "Orthostatic hypotension."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_39",
    "q": "What is a key point regarding Bupropion XL?",
    "options": [
      "Treatment of major depressive disorder and seasonal affective disorder; smoking cessation adjunct (other formulation).",
      "Hypertension and heart failure.",
      "Hypertension and heart failure (often with nitrates).",
      "Prevention of organ transplant rejection."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_40",
    "q": "What is a key point regarding Buspirone?",
    "options": [
      "Management of generalized anxiety disorder.",
      "Heart failure with reduced ejection fraction.",
      "Postprandial glucose control in diabetes mellitus.",
      "Chronic hypertension and angina."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_41",
    "q": "What is a key point regarding Butalbital/Acetaminophen/Caffeine?",
    "options": [
      "Tension headaches when other options fail.",
      "Treatment of chronic hepatitis C virus infection across all major genotypes.",
      "Prevention of angina pectoris.",
      "Prevention and treatment of nausea and vomiting."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_42",
    "q": "What is a key point regarding Canagliflozin?",
    "options": [
      "Type 2 diabetes mellitus and cardiovascular/renal risk reduction in select patients.",
      "Benign prostatic hyperplasia.",
      "GERD, peptic ulcer disease, and erosive esophagitis.",
      "Symptomatic relief of dysuria associated with urinary tract infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_43",
    "q": "What is a key point regarding Candesartan?",
    "options": [
      "Treatment of hypertension and heart failure.",
      "Autoimmune conditions such as rheumatoid arthritis, psoriasis, and inflammatory bowel disease.",
      "Treatment of resistant Gram-positive infections including MRSA and VRE.",
      "Chronic management of gout by increasing uric acid excretion."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_44",
    "q": "What is a key point regarding Candesartan/Hydrochlorothiazide?",
    "options": [
      "Hypertension not controlled with single-agent therapy.",
      "Management of hypertension and chronic stable angina.",
      "Pulmonary arterial hypertension.",
      "Type 2 diabetes mellitus."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_45",
    "q": "What is a key point regarding Carbidopa/Levodopa?",
    "options": [
      "Management of Parkinson's disease symptoms.",
      "Schizophrenia, bipolar disorder, adjunctive treatment for major depressive disorder, and irritability in autism.",
      "Treatment of ventricular arrhythmias.",
      "Benign prostatic hyperplasia."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_46",
    "q": "What is a key point regarding Tamsulosin?",
    "options": [
      "Lower urinary tract symptoms due to benign prostatic hyperplasia.",
      "Relief of spasticity due to multiple sclerosis, spinal cord injury, or other neurologic conditions.",
      "Maintenance treatment of asthma.",
      "Treatment of depression and chronic neuropathic pain syndromes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_47",
    "q": "What is a key point regarding Carvedilol?",
    "options": [
      "Heart failure with reduced ejection fraction, hypertension, and post-MI management.",
      "Hypertension and chronic heart failure (often with other agents).",
      "Treatment of hypertension.",
      "Relief of allergic rhinitis symptoms."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_48",
    "q": "What is a key point regarding Cefdinir?",
    "options": [
      "Treatment of susceptible respiratory and skin infections.",
      "Maintenance therapy for opioid use disorder.",
      "Treatment of various advanced cancers including melanoma, lung, and renal cell carcinoma.",
      "Maintenance treatment of asthma and COPD."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_49",
    "q": "What is a key point regarding Cephalexin?",
    "options": [
      "Treatment of susceptible skin, respiratory, urinary, and bone infections.",
      "Management of Parkinson's disease symptoms.",
      "Partial seizures in epilepsy.",
      "Treatment of susceptible respiratory and skin infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_50",
    "q": "What is a key point regarding Celecoxib?",
    "options": [
      "Relief of pain and inflammation in osteoarthritis, rheumatoid arthritis, and dysmenorrhea.",
      "Treatment of hypertension and edema.",
      "Symptomatic relief of dysuria associated with urinary tract infections.",
      "Hypertension and off-label use for withdrawal symptoms or ADHD."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_51",
    "q": "What is a key point regarding Cetirizine?",
    "options": [
      "Relief of allergic rhinitis and chronic urticaria symptoms.",
      "Short-term treatment of inflammatory and pruritic dermatoses.",
      "Inflammatory and autoimmune conditions, asthma exacerbations, and allergic reactions.",
      "Treatment of erosive esophagitis and symptomatic gastroesophageal reflux disease."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_52",
    "q": "What is a key point regarding Chlorhexidine oral rinse?",
    "options": [
      "Management of gingivitis and reduction of oral bacterial load.",
      "Treatment of vitamin B12 deficiency and pernicious anemia.",
      "Treatment of non-Hodgkin lymphoma, chronic lymphocytic leukemia, and autoimmune diseases such as rheumatoid arthritis.",
      "Treatment of acne, respiratory infections, Lyme disease, and other susceptible infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_53",
    "q": "What is a key point regarding Chlorthalidone?",
    "options": [
      "Treatment of hypertension and edema.",
      "Treatment of major depressive disorder.",
      "Heart failure, resistant hypertension, primary hyperaldosteronism, and acne/hirsutism off-label.",
      "Heart failure post-myocardial infarction and resistant hypertension."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_54",
    "q": "What is a key point regarding Cholecalciferol high-dose?",
    "options": [
      "Correction of vitamin D deficiency.",
      "Heart failure with reduced ejection fraction and rate control in atrial fibrillation.",
      "Short-term treatment of moderate pain when non-opioid therapy is inadequate.",
      "Reduction of triglycerides and improvement of HDL cholesterol."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_55",
    "q": "What is a key point regarding Ciprofloxacin?",
    "options": [
      "Treatment of susceptible urinary, gastrointestinal, and respiratory infections.",
      "Treatment of acne, respiratory infections, Lyme disease, and other susceptible infections.",
      "Treatment of susceptible bacterial infections including ear, sinus, and lower respiratory infections.",
      "Reduction of triglycerides in severe hypertriglyceridemia."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_56",
    "q": "What is a key point regarding Citalopram?",
    "options": [
      "Treatment of major depressive disorder and anxiety disorders.",
      "Prevention of stroke in atrial fibrillation and treatment of venous thromboembolism after initial parenteral therapy.",
      "Treatment of susceptible respiratory, skin, and sexually transmitted infections.",
      "Rheumatoid arthritis, lupus, and malaria prophylaxis/treatment."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_57",
    "q": "What is a key point regarding Clarithromycin?",
    "options": [
      "Treatment of susceptible respiratory and Helicobacter pylori infections.",
      "Preventive treatment of migraine in adults.",
      "Maintenance therapy for persistent asthma.",
      "Mealtime insulin for type 1 and type 2 diabetes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_58",
    "q": "What is a key point regarding Clindamycin oral?",
    "options": [
      "Treatment of susceptible skin, soft tissue, and anaerobic infections.",
      "Prevention of pregnancy.",
      "Management of Parkinson's disease symptoms.",
      "Partial-onset seizures in epilepsy."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_59",
    "q": "What is a key point regarding Clindamycin topical?",
    "options": [
      "Management of acne vulgaris.",
      "Treatment and prevention of iron deficiency anemia.",
      "Treatment of major depressive disorder and anxiety disorders.",
      "Irritable bowel syndrome with constipation and chronic idiopathic constipation."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_60",
    "q": "What is a key point regarding Clobetasol topical?",
    "options": [
      "Short-term treatment of inflammatory and pruritic dermatoses.",
      "Once-daily maintenance therapy for asthma and COPD.",
      "Short-term treatment of muscle spasm associated with acute musculoskeletal conditions.",
      "Magnesium deficiency, indigestion, and constipation (higher doses)."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_61",
    "q": "What is a key point regarding Clonazepam?",
    "options": [
      "Seizure disorders and panic disorder.",
      "Treatment of severe hypoglycemia when the patient cannot take oral carbohydrates.",
      "Relief of joint pain associated with osteoarthritis in hands, wrists, elbows, knees, ankles, or feet.",
      "Orthostatic hypotension."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_62",
    "q": "What is a key point regarding Clonidine?",
    "options": [
      "Hypertension and off-label use for withdrawal symptoms or ADHD.",
      "Hypertension and edema.",
      "Treatment of benign prostatic hyperplasia and hypertension.",
      "Prevention of organ transplant rejection."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_63",
    "q": "What is a key point regarding Clopidogrel?",
    "options": [
      "Prevention of thrombotic events after myocardial infarction, stroke, or stent placement.",
      "Reduction of triglycerides and cardiovascular risk in select patients.",
      "Heart failure post-myocardial infarction and resistant hypertension.",
      "Chronic hypertension and angina."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_64",
    "q": "What is a key point regarding Clotrimazole/Betamethasone?",
    "options": [
      "Inflammatory tinea infections responsive to topical therapy.",
      "Mealtime insulin for type 1 and type 2 diabetes.",
      "Reduction of LDL cholesterol, often in combination with statins.",
      "Prevention and treatment of nausea and vomiting."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_65",
    "q": "What is a key point regarding Colchicine?",
    "options": [
      "Treatment and prevention of gout flares and familial Mediterranean fever.",
      "Prevention of angina pectoris.",
      "Once-daily maintenance therapy for asthma and COPD.",
      "Symptomatic relief of dysuria associated with urinary tract infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_66",
    "q": "What is a key point regarding Conjugated estrogens?",
    "options": [
      "Management of moderate to severe vasomotor symptoms of menopause and hypoestrogenism.",
      "Hypertension, including during pregnancy, and hypertensive emergencies (IV).",
      "Treatment of attention-deficit/hyperactivity disorder.",
      "Chronic management of gout by increasing uric acid excretion."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_67",
    "q": "What is a key point regarding Cyanocobalamin injection?",
    "options": [
      "Treatment of vitamin B12 deficiency and pernicious anemia.",
      "Hypothyroidism.",
      "Short-term treatment of moderate pain.",
      "Type 2 diabetes mellitus."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_68",
    "q": "What is a key point regarding Cyclobenzaprine?",
    "options": [
      "Short-term treatment of muscle spasm associated with acute musculoskeletal conditions.",
      "Irritable bowel syndrome with constipation and chronic idiopathic constipation.",
      "Hypertension and diabetic nephropathy.",
      "Benign prostatic hyperplasia."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_69",
    "q": "What is a key point regarding Cyclosporine ophthalmic?",
    "options": [
      "Increase tear production in chronic dry eye disease.",
      "Control of acute nonspecific diarrhea and chronic diarrhea associated with inflammatory bowel disease.",
      "Treatment of chronic constipation and hepatic encephalopathy.",
      "Treatment of depression and chronic neuropathic pain syndromes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_70",
    "q": "What is a key point regarding Dabigatran?",
    "options": [
      "Prevention of stroke in nonvalvular atrial fibrillation and treatment/prevention of venous thromboembolism.",
      "Oral: abnormal uterine bleeding and amenorrhea; injectable: contraception and endometriosis.",
      "Relief of postherpetic neuralgia pain and localized neuropathic pain.",
      "Relief of allergic rhinitis symptoms."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_71",
    "q": "What is a key point regarding Dapagliflozin?",
    "options": [
      "Type 2 diabetes, heart failure with reduced ejection fraction, and chronic kidney disease risk reduction.",
      "Hypertension, angina, arrhythmias, and rate control.",
      "Reduction of LDL cholesterol and prevention of cardiovascular events.",
      "Maintenance treatment of asthma and COPD."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_72",
    "q": "What is a key point regarding Dapagliflozin/Metformin ER?",
    "options": [
      "Type 2 diabetes mellitus when dual therapy is appropriate.",
      "Management of fibromyalgia.",
      "Hypertension, angina, arrhythmias, and rate control.",
      "Treatment of susceptible respiratory and skin infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_73",
    "q": "What is a key point regarding Tolterodine LA?",
    "options": [
      "Overactive bladder with urinary urgency, frequency, or urge incontinence.",
      "Asthma maintenance and allergic rhinitis.",
      "Overactive bladder with urge urinary incontinence and frequency.",
      "Seizure disorders and panic disorder."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_74",
    "q": "What is a key point regarding Desvenlafaxine?",
    "options": [
      "Treatment of major depressive disorder.",
      "Emergency reversal of opioid overdose.",
      "Treatment of opioid and alcohol dependence.",
      "Treatment of erosive esophagitis and symptomatic gastroesophageal reflux disease."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_75",
    "q": "What is a key point regarding Dexlansoprazole?",
    "options": [
      "Treatment of erosive esophagitis and symptomatic gastroesophageal reflux disease.",
      "Myasthenia gravis and reversal of nondepolarizing neuromuscular blockade.",
      "Acute relief of angina pectoris.",
      "Treatment of acne, respiratory infections, Lyme disease, and other susceptible infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_76",
    "q": "What is a key point regarding Dexmethylphenidate ER?",
    "options": [
      "Treatment of attention-deficit/hyperactivity disorder.",
      "Treatment of various advanced cancers including melanoma, lung, and renal cell carcinoma.",
      "Prevention and treatment of nausea and vomiting.",
      "Heart failure post-myocardial infarction and resistant hypertension."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_77",
    "q": "What is a key point regarding Diazepam?",
    "options": [
      "Anxiety, muscle spasm, seizure adjunct, and acute alcohol withdrawal.",
      "Severe hypertriglyceridemia.",
      "Intermittent claudication due to peripheral artery disease.",
      "Reduction of triglycerides and improvement of HDL cholesterol."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_78",
    "q": "What is a key point regarding Diclofenac oral?",
    "options": [
      "Pain and inflammation due to arthritis or acute injury.",
      "Short-term management of moderate to severe pain.",
      "Reduction of LDL cholesterol and cardiovascular risk.",
      "Reduction of triglycerides in severe hypertriglyceridemia."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_79",
    "q": "What is a key point regarding Diclofenac topical gel?",
    "options": [
      "Relief of joint pain associated with osteoarthritis in hands, wrists, elbows, knees, ankles, or feet.",
      "Treatment of scabies and head lice.",
      "Prevention and treatment of venous thromboembolism and stroke prevention in atrial fibrillation.",
      "Rheumatoid arthritis, lupus, and malaria prophylaxis/treatment."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_80",
    "q": "What is a key point regarding Dicyclomine?",
    "options": [
      "Irritable bowel syndrome symptom relief.",
      "Occasional constipation.",
      "Type 2 diabetes mellitus.",
      "Mealtime insulin for type 1 and type 2 diabetes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_81",
    "q": "What is a key point regarding Digoxin?",
    "options": [
      "Heart failure with reduced ejection fraction and rate control in atrial fibrillation.",
      "Chronic management of gout by increasing uric acid excretion.",
      "Prevention and treatment of thromboembolism in atrial fibrillation, DVT/PE, and mechanical heart valves.",
      "Partial-onset seizures in epilepsy."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_82",
    "q": "What is a key point regarding Diltiazem ER?",
    "options": [
      "Hypertension, angina, and certain arrhythmias.",
      "Prevention and treatment of venous thromboembolism and stroke prevention in atrial fibrillation.",
      "Management of hypertension and chronic stable angina.",
      "Irritable bowel syndrome with constipation and chronic idiopathic constipation."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_83",
    "q": "What is a key point regarding Diphenoxylate/Atropine?",
    "options": [
      "Adjunctive treatment of acute diarrhea.",
      "Moderate to severe plaque psoriasis, psoriatic arthritis, and ankylosing spondylitis.",
      "Reduction of LDL cholesterol and cardiovascular risk.",
      "Magnesium deficiency, indigestion, and constipation (higher doses)."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_84",
    "q": "What is a key point regarding Dipyridamole/Aspirin?",
    "options": [
      "Stroke prophylaxis in patients with a history of transient ischemic attack or completed ischemic stroke.",
      "Treatment and prevention of duodenal ulcers.",
      "Treatment of hypertension requiring combination therapy.",
      "Orthostatic hypotension."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_85",
    "q": "What is a key point regarding Divalproex ER?",
    "options": [
      "Seizure disorders, bipolar disorder, and migraine prophylaxis.",
      "Maintenance therapy for COPD and asthma (Respimat).",
      "Treatment of hypertension and heart failure.",
      "Prevention of organ transplant rejection."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_86",
    "q": "What is a key point regarding Donepezil?",
    "options": [
      "Management of mild to severe Alzheimer's dementia.",
      "Treatment and prevention of osteoporosis.",
      "Correction of vitamin D deficiency.",
      "Chronic hypertension and angina."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_87",
    "q": "What is a key point regarding Dorzolamide/Timolol?",
    "options": [
      "Reduction of intraocular pressure in glaucoma.",
      "Treatment of susceptible bacterial infections including ear, sinus, and lower respiratory infections.",
      "Treatment and prevention of gout flares and familial Mediterranean fever.",
      "Prevention and treatment of nausea and vomiting."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_88",
    "q": "What is a key point regarding Doxycycline?",
    "options": [
      "Treatment of acne, respiratory infections, Lyme disease, and other susceptible infections.",
      "Hypertension, post-myocardial infarction care, and chronic angina.",
      "Treatment of attention-deficit/hyperactivity disorder.",
      "Symptomatic relief of dysuria associated with urinary tract infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_89",
    "q": "What is a key point regarding Trazodone?",
    "options": [
      "Major depressive disorder and off-label for insomnia.",
      "Management of hypertension and adjunct in heart failure.",
      "Reduction of intraocular pressure in glaucoma.",
      "Chronic management of gout by increasing uric acid excretion."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_90",
    "q": "What is a key point regarding Doxazosin?",
    "options": [
      "Treatment of benign prostatic hyperplasia and hypertension.",
      "Lowering intraocular pressure in open-angle glaucoma or ocular hypertension.",
      "Hypertension and symptomatic heart failure.",
      "Type 2 diabetes mellitus."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_91",
    "q": "What is a key point regarding Topiramate?",
    "options": [
      "Seizure control and migraine prophylaxis.",
      "Management of generalized anxiety disorder.",
      "Contraception and acne treatment.",
      "Benign prostatic hyperplasia."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_92",
    "q": "What is a key point regarding Dulaglutide?",
    "options": [
      "Type 2 diabetes mellitus and cardiovascular risk reduction in select patients.",
      "Heart failure with reduced ejection fraction, hypertension, and post-MI management.",
      "Maintenance treatment of persistent asthma.",
      "Treatment of depression and chronic neuropathic pain syndromes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_93",
    "q": "What is a key point regarding Duloxetine?",
    "options": [
      "Major depressive disorder, generalized anxiety, diabetic neuropathy, fibromyalgia, and chronic musculoskeletal pain.",
      "Correction of vitamin D deficiency.",
      "Relief of chest congestion by loosening mucus.",
      "Relief of allergic rhinitis symptoms."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_94",
    "q": "What is a key point regarding Dutasteride?",
    "options": [
      "Treatment of benign prostatic hyperplasia.",
      "Seizure disorders and panic disorder.",
      "Relief of pain, fever, and inflammation.",
      "Maintenance treatment of asthma and COPD."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_95",
    "q": "What is a key point regarding Edoxaban?",
    "options": [
      "Prevention of stroke in atrial fibrillation and treatment of venous thromboembolism after initial parenteral therapy.",
      "Short-term treatment of muscle spasm associated with acute musculoskeletal conditions.",
      "Treatment of metastatic melanoma and other advanced cancers.",
      "Treatment of susceptible respiratory and skin infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_96",
    "q": "What is a key point regarding Emtricitabine/Tenofovir disoproxil fumarate?",
    "options": [
      "Treatment of HIV infection in combination therapy and pre-exposure prophylaxis (PrEP).",
      "Treatment of erosive esophagitis and symptomatic gastroesophageal reflux disease.",
      "Hypertension, including during pregnancy, and hypertensive emergencies (IV).",
      "Seizure disorders and panic disorder."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_97",
    "q": "What is a key point regarding Empagliflozin?",
    "options": [
      "Type 2 diabetes and cardiovascular/renal risk reduction.",
      "Hypertension, angina, and certain arrhythmias.",
      "Long-term contraception and heavy menstrual bleeding (Mirena).",
      "Treatment of major depressive disorder."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_98",
    "q": "What is a key point regarding Empagliflozin/Metformin?",
    "options": [
      "Type 2 diabetes mellitus when dual therapy is needed.",
      "Major depressive disorder and off-label for insomnia.",
      "Anxiety disorders, sedation, and status epilepticus (IV).",
      "Reduction of intraocular pressure in glaucoma."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_99",
    "q": "What is a key point regarding Enalapril?",
    "options": [
      "Hypertension and symptomatic heart failure.",
      "Treatment of HIV infection in combination therapy and pre-exposure prophylaxis (PrEP).",
      "Edema in heart failure and kidney disease, often combined with loop diuretics.",
      "Heart failure post-myocardial infarction and resistant hypertension."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_100",
    "q": "What is a key point regarding Enoxaparin?",
    "options": [
      "Prevention and treatment of venous thromboembolism and acute coronary syndromes.",
      "Gastroesophageal reflux disease, erosive esophagitis, and peptic ulcer disease.",
      "Resistant hypertension.",
      "Reduction of triglycerides and improvement of HDL cholesterol."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_101",
    "q": "What is a key point regarding Eplerenone?",
    "options": [
      "Heart failure post-myocardial infarction and resistant hypertension.",
      "Prevention of pregnancy.",
      "Hypertension, angina, and arrhythmias; prophylaxis of variceal bleeding.",
      "Reduction of triglycerides in severe hypertriglyceridemia."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_102",
    "q": "What is a key point regarding Erenumab?",
    "options": [
      "Preventive treatment of migraine in adults.",
      "Treatment of candidiasis, cryptococcal meningitis, and antifungal prophylaxis.",
      "Chronic hypertension and angina.",
      "Rheumatoid arthritis, lupus, and malaria prophylaxis/treatment."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_103",
    "q": "What is a key point regarding Escitalopram?",
    "options": [
      "Treatment of major depressive disorder and generalized anxiety disorder.",
      "Edema due to heart failure, liver disease, or kidney disease; hypertension.",
      "Severe hypertriglyceridemia.",
      "Mealtime insulin for type 1 and type 2 diabetes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_104",
    "q": "What is a key point regarding Esomeprazole?",
    "options": [
      "Gastroesophageal reflux disease, erosive esophagitis, and peptic ulcer disease.",
      "Relief of chest congestion by loosening mucus.",
      "Depression, anxiety disorders, OCD, and PTSD.",
      "Partial-onset seizures in epilepsy."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_105",
    "q": "What is a key point regarding Estradiol oral?",
    "options": [
      "Management of menopausal vasomotor symptoms and hypoestrogenism.",
      "Inflammatory conditions of the distal colon and rectum, including hemorrhoids.",
      "Treatment or prevention of hypokalemia.",
      "Irritable bowel syndrome with constipation and chronic idiopathic constipation."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_106",
    "q": "What is a key point regarding Estradiol transdermal patch?",
    "options": [
      "Menopausal symptom management and hypoestrogenism.",
      "Treatment of acute gout, ankylosing spondylitis, and other inflammatory conditions.",
      "Hypertension and heart failure.",
      "Magnesium deficiency, indigestion, and constipation (higher doses)."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_107",
    "q": "What is a key point regarding Ethinyl estradiol/Desogestrel?",
    "options": [
      "Prevention of pregnancy and cycle regulation.",
      "Mealtime insulin for type 1 and type 2 diabetes.",
      "Erectile dysfunction (Viagra) and pulmonary arterial hypertension (Revatio).",
      "Orthostatic hypotension."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_108",
    "q": "What is a key point regarding Ethinyl estradiol/Drospirenone?",
    "options": [
      "Contraception and treatment of premenstrual dysphoric disorder or acne.",
      "Systemic fungal infections and onychomycosis.",
      "Onychomycosis and fungal skin infections.",
      "Prevention of organ transplant rejection."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_109",
    "q": "What is a key point regarding Ethinyl estradiol/Levonorgestrel?",
    "options": [
      "Prevention of pregnancy.",
      "Treatment of chronic constipation and hepatic encephalopathy.",
      "Management of life-threatening ventricular and atrial arrhythmias.",
      "Chronic hypertension and angina."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_110",
    "q": "What is a key point regarding Ethinyl estradiol/Norgestimate?",
    "options": [
      "Contraception and acne treatment.",
      "Treatment of bacterial infections including pneumonia and urinary tract infections.",
      "Hypertension, post-myocardial infarction care, and chronic angina.",
      "Prevention and treatment of nausea and vomiting."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_111",
    "q": "What is a key point regarding Etonogestrel/Ethinyl estradiol vaginal ring?",
    "options": [
      "Prevention of pregnancy.",
      "Type 2 diabetes mellitus.",
      "Short-term relief of occasional constipation.",
      "Symptomatic relief of dysuria associated with urinary tract infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_112",
    "q": "What is a key point regarding Ezetimibe?",
    "options": [
      "Reduction of LDL cholesterol, often in combination with statins.",
      "Hypertension and diabetic nephropathy.",
      "Tension headaches when other options fail.",
      "Chronic management of gout by increasing uric acid excretion."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_113",
    "q": "What is a key point regarding Famotidine?",
    "options": [
      "Relief of heartburn, gastroesophageal reflux, and prevention of ulcers.",
      "Osteoarthritis and rheumatoid arthritis pain and inflammation.",
      "Management of gingivitis and reduction of oral bacterial load.",
      "Type 2 diabetes mellitus."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_114",
    "q": "What is a key point regarding Fenofibrate?",
    "options": [
      "Reduction of triglycerides and improvement of HDL cholesterol.",
      "Treatment of ventricular arrhythmias.",
      "Prevention of thrombotic events after myocardial infarction, stroke, or stent placement.",
      "Benign prostatic hyperplasia."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_115",
    "q": "What is a key point regarding Fentanyl transdermal patch?",
    "options": [
      "Chronic severe pain in opioid-tolerant patients.",
      "Resistant hypertension.",
      "Treatment of major depressive disorder.",
      "Treatment of depression and chronic neuropathic pain syndromes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_116",
    "q": "What is a key point regarding Ferrous sulfate?",
    "options": [
      "Treatment and prevention of iron deficiency anemia.",
      "Treatment of respiratory and skin infections.",
      "Seizure disorders, bipolar disorder, and migraine prophylaxis.",
      "Relief of allergic rhinitis symptoms."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_117",
    "q": "What is a key point regarding Finasteride?",
    "options": [
      "Treatment of benign prostatic hyperplasia.",
      "Pain, inflammation, and fever.",
      "Treatment of HIV infection in combination therapy and pre-exposure prophylaxis (PrEP).",
      "Maintenance treatment of asthma and COPD."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_118",
    "q": "What is a key point regarding Fluconazole?",
    "options": [
      "Treatment of candidiasis, cryptococcal meningitis, and antifungal prophylaxis.",
      "Nicotine replacement therapy for smoking cessation.",
      "Prevention of pregnancy and cycle regulation.",
      "Treatment of susceptible respiratory and skin infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_119",
    "q": "What is a key point regarding Fluoxetine?",
    "options": [
      "Depression, obsessive-compulsive disorder, panic disorder, bulimia nervosa, and PMDD.",
      "Depression and off-label for neuropathic pain.",
      "Treatment of candidiasis, cryptococcal meningitis, and antifungal prophylaxis.",
      "Seizure disorders and panic disorder."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_120",
    "q": "What is a key point regarding Fluticasone nasal spray?",
    "options": [
      "Allergic rhinitis and non-allergic nasal inflammation.",
      "Prevention and treatment of nausea and vomiting.",
      "Treatment of severe hypoglycemia when the patient cannot take oral carbohydrates.",
      "Treatment of major depressive disorder."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_121",
    "q": "What is a key point regarding Fluticasone propionate HFA?",
    "options": [
      "Maintenance treatment of persistent asthma.",
      "Exocrine pancreatic insufficiency due to cystic fibrosis, chronic pancreatitis, or pancreatectomy.",
      "Anxiety, pruritus, and adjunct anesthesia.",
      "Reduction of intraocular pressure in glaucoma."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_122",
    "q": "What is a key point regarding Fluticasone/Salmeterol?",
    "options": [
      "Maintenance treatment of asthma and COPD (Diskus).",
      "Seizure disorders and sedation.",
      "Control of post-meal blood glucose in diabetes.",
      "Prevention and treatment of venous thromboembolism and acute coronary syndromes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_123",
    "q": "What is a key point regarding Fluticasone/Vilanterol?",
    "options": [
      "Once-daily maintenance therapy for asthma and COPD.",
      "Parkinson disease and restless legs syndrome.",
      "Treatment of fungal skin infections and seborrheic dermatitis.",
      "Relief of heartburn, gastroesophageal reflux, and prevention of ulcers."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_124",
    "q": "What is a key point regarding Folic acid?",
    "options": [
      "Prevention and treatment of folate deficiency and during pregnancy to prevent neural tube defects.",
      "Treatment of nausea, vomiting, allergies, and motion sickness.",
      "Treatment of bacterial infections including pneumonia and urinary tract infections.",
      "Reduction of triglycerides in severe hypertriglyceridemia."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_125",
    "q": "What is a key point regarding Furosemide?",
    "options": [
      "Edema due to heart failure, liver disease, or kidney disease; hypertension.",
      "Treatment of non-Hodgkin lymphoma, chronic lymphocytic leukemia, and autoimmune diseases such as rheumatoid arthritis.",
      "Treatment of bipolar disorder.",
      "Rheumatoid arthritis, lupus, and malaria prophylaxis/treatment."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_126",
    "q": "What is a key point regarding Gabapentin?",
    "options": [
      "Seizure adjunct therapy, neuropathic pain, and restless legs syndrome (other formulations).",
      "Erectile dysfunction (Viagra) and pulmonary arterial hypertension (Revatio).",
      "First-line therapy for type 2 diabetes mellitus.",
      "Mealtime insulin for type 1 and type 2 diabetes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_127",
    "q": "What is a key point regarding Gemfibrozil?",
    "options": [
      "Reduction of triglycerides in severe hypertriglyceridemia.",
      "Acute treatment of migraine and cluster headaches.",
      "Management of fibromyalgia.",
      "Partial-onset seizures in epilepsy."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_128",
    "q": "What is a key point regarding Glimepiride?",
    "options": [
      "Type 2 diabetes mellitus.",
      "Relief of mild to moderate pain and reduction of fever.",
      "Prevention of organ transplant rejection.",
      "Irritable bowel syndrome with constipation and chronic idiopathic constipation."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_129",
    "q": "What is a key point regarding Glipizide?",
    "options": [
      "Type 2 diabetes mellitus.",
      "Short-term management of anxiety and panic disorders.",
      "Hypertension and angina; IV form for hypertensive emergencies.",
      "Magnesium deficiency, indigestion, and constipation (higher doses)."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_130",
    "q": "What is a key point regarding Glucagon emergency kit?",
    "options": [
      "Treatment of severe hypoglycemia when the patient cannot take oral carbohydrates.",
      "Attention-deficit/hyperactivity disorder and narcolepsy.",
      "Schizophrenia and bipolar disorder.",
      "Orthostatic hypotension."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_131",
    "q": "What is a key point regarding Glyburide?",
    "options": [
      "Type 2 diabetes mellitus.",
      "Reduction of LDL cholesterol and cardiovascular risk.",
      "Exocrine pancreatic insufficiency due to cystic fibrosis, chronic pancreatitis, or pancreatectomy.",
      "Prevention of organ transplant rejection."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_132",
    "q": "What is a key point regarding Guaifenesin?",
    "options": [
      "Relief of chest congestion by loosening mucus.",
      "Relief of cough due to colds or bronchitis.",
      "Serious intra-abdominal, skin, and pulmonary infections in hospital settings.",
      "Chronic hypertension and angina."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_133",
    "q": "What is a key point regarding Triamterene/Hydrochlorothiazide?",
    "options": [
      "Treatment of hypertension and edema while minimizing potassium loss.",
      "Maintenance treatment of asthma and COPD.",
      "Hypertension, arrhythmias, migraine prophylaxis, and performance anxiety.",
      "Prevention and treatment of nausea and vomiting."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_134",
    "q": "What is a key point regarding Guanfacine ER?",
    "options": [
      "Treatment of attention-deficit/hyperactivity disorder.",
      "Type 2 diabetes mellitus and cardiovascular/renal risk reduction in select patients.",
      "Moderate to severe plaque psoriasis, psoriatic arthritis, and ankylosing spondylitis.",
      "Symptomatic relief of dysuria associated with urinary tract infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_135",
    "q": "What is a key point regarding Haloperidol?",
    "options": [
      "Schizophrenia, acute psychosis, and Tourette disorder.",
      "Treatment of susceptible skin, respiratory, urinary, and bone infections.",
      "Treatment and prevention of estrogen receptor-positive breast cancer.",
      "Chronic management of gout by increasing uric acid excretion."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_136",
    "q": "What is a key point regarding Hydralazine?",
    "options": [
      "Hypertension and heart failure (often with nitrates).",
      "Treatment of major depressive disorder and anxiety disorders.",
      "Prevention of gout flares and management of hyperuricemia.",
      "Type 2 diabetes mellitus."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_137",
    "q": "What is a key point regarding Hydrochlorothiazide?",
    "options": [
      "Hypertension and edema.",
      "Prevention of thrombotic events after myocardial infarction, stroke, or stent placement.",
      "Schizophrenia, bipolar disorder, adjunctive treatment for major depressive disorder, and irritability in autism.",
      "Benign prostatic hyperplasia."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_138",
    "q": "What is a key point regarding Hydrocodone/Acetaminophen?",
    "options": [
      "Short-term management of moderate pain.",
      "Prevention of stroke in nonvalvular atrial fibrillation and treatment/prevention of venous thromboembolism.",
      "Relief of cough due to colds or bronchitis.",
      "Treatment of depression and chronic neuropathic pain syndromes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_139",
    "q": "What is a key point regarding Hydrocortisone rectal?",
    "options": [
      "Inflammatory conditions of the distal colon and rectum, including hemorrhoids.",
      "Anxiety, muscle spasm, seizure adjunct, and acute alcohol withdrawal.",
      "Treatment of major depressive disorder and seasonal affective disorder; smoking cessation adjunct (other formulation).",
      "Relief of allergic rhinitis symptoms."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_140",
    "q": "What is a key point regarding Hydroxychloroquine?",
    "options": [
      "Rheumatoid arthritis, lupus, and malaria prophylaxis/treatment.",
      "Stroke prophylaxis in patients with a history of transient ischemic attack or completed ischemic stroke.",
      "Relief of pain and inflammation in osteoarthritis, rheumatoid arthritis, and dysmenorrhea.",
      "Maintenance treatment of asthma and COPD."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_141",
    "q": "What is a key point regarding Hydroxyzine?",
    "options": [
      "Anxiety, pruritus, and adjunct anesthesia.",
      "Seizure control and migraine prophylaxis.",
      "Seizure disorders and panic disorder.",
      "Treatment of susceptible respiratory and skin infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_142",
    "q": "What is a key point regarding Ibandronate?",
    "options": [
      "Treatment and prevention of postmenopausal osteoporosis.",
      "Type 2 diabetes mellitus when dual therapy is needed.",
      "Type 2 diabetes mellitus when dual therapy is appropriate.",
      "Seizure disorders and panic disorder."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_143",
    "q": "What is a key point regarding Ibuprofen?",
    "options": [
      "Relief of pain, fever, and inflammation.",
      "Management of menopausal vasomotor symptoms and hypoestrogenism.",
      "Adjunctive treatment of acute diarrhea.",
      "Treatment of major depressive disorder."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_144",
    "q": "What is a key point regarding Icosapent ethyl?",
    "options": [
      "Reduction of triglycerides and cardiovascular risk in select patients.",
      "Reduction of LDL cholesterol, often in combination with statins.",
      "Treatment of benign prostatic hyperplasia.",
      "Reduction of intraocular pressure in glaucoma."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_145",
    "q": "What is a key point regarding Tramadol?",
    "options": [
      "Short-term treatment of moderate pain.",
      "Depression, obsessive-compulsive disorder, panic disorder, bulimia nervosa, and PMDD.",
      "Management of menopausal vasomotor symptoms and hypoestrogenism.",
      "Prevention and treatment of venous thromboembolism and acute coronary syndromes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_146",
    "q": "What is a key point regarding Indomethacin?",
    "options": [
      "Treatment of acute gout, ankylosing spondylitis, and other inflammatory conditions.",
      "Seizure adjunct therapy, neuropathic pain, and restless legs syndrome (other formulations).",
      "Treatment and prevention of iron deficiency anemia.",
      "Relief of heartburn, gastroesophageal reflux, and prevention of ulcers."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_147",
    "q": "What is a key point regarding Insulin aspart?",
    "options": [
      "Postprandial glucose control in diabetes mellitus.",
      "Treatment of hypertension and edema while minimizing potassium loss.",
      "Reduction of triglycerides in severe hypertriglyceridemia.",
      "Seizure adjunct therapy, neuropathic pain, and restless legs syndrome (other formulations)."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_148",
    "q": "What is a key point regarding Insulin degludec?",
    "options": [
      "Basal insulin therapy for type 1 and type 2 diabetes.",
      "Rheumatoid arthritis, lupus, and malaria prophylaxis/treatment.",
      "Short-term management of moderate pain.",
      "Inflammatory conditions of the distal colon and rectum, including hemorrhoids."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_149",
    "q": "What is a key point regarding Insulin detemir?",
    "options": [
      "Basal insulin therapy for type 1 and type 2 diabetes.",
      "Postprandial glucose control in diabetes mellitus.",
      "Basal insulin coverage for type 1 and type 2 diabetes.",
      "Mealtime insulin for type 1 and type 2 diabetes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_150",
    "q": "What is a key point regarding Insulin glargine?",
    "options": [
      "Basal insulin coverage for type 1 and type 2 diabetes.",
      "Maintenance treatment of COPD and adjunct for acute asthma.",
      "Chronic heart failure with reduced ejection fraction to reduce hospitalization risk.",
      "Partial-onset seizures in epilepsy."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_151",
    "q": "What is a key point regarding Insulin glulisine?",
    "options": [
      "Mealtime insulin for type 1 and type 2 diabetes.",
      "Moderate to severe plaque psoriasis and psoriatic arthritis.",
      "Hypothyroidism.",
      "Irritable bowel syndrome with constipation and chronic idiopathic constipation."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_152",
    "q": "What is a key point regarding Insulin lispro?",
    "options": [
      "Control of post-meal blood glucose in diabetes.",
      "GERD, peptic ulcer disease, and erosive esophagitis.",
      "Attention-deficit/hyperactivity disorder and binge eating disorder.",
      "Magnesium deficiency, indigestion, and constipation (higher doses)."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_153",
    "q": "What is a key point regarding Insulin regular?",
    "options": [
      "Mealtime insulin for type 1 and type 2 diabetes.",
      "Long-term contraception and heavy menstrual bleeding (Mirena).",
      "Management of insomnia and circadian rhythm disorders.",
      "Orthostatic hypotension."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_154",
    "q": "What is a key point regarding Ipilimumab?",
    "options": [
      "Treatment of metastatic melanoma and other advanced cancers.",
      "Attention-deficit/hyperactivity disorder and binge eating disorder.",
      "Orthostatic hypotension.",
      "Prevention of organ transplant rejection."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_155",
    "q": "What is a key point regarding Ipratropium bromide?",
    "options": [
      "Maintenance treatment of COPD and adjunct for acute asthma.",
      "Schizophrenia and bipolar depression.",
      "Treatment of respiratory and skin infections.",
      "Chronic hypertension and angina."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_156",
    "q": "What is a key point regarding Irbesartan?",
    "options": [
      "Hypertension and diabetic nephropathy.",
      "Gastroparesis and short-term relief of nausea/vomiting.",
      "Treatment of external otitis (swimmer's ear).",
      "Prevention and treatment of nausea and vomiting."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_157",
    "q": "What is a key point regarding Isosorbide dinitrate?",
    "options": [
      "Prevention of angina pectoris; adjunct in heart failure.",
      "Procedural sedation, seizure clusters, and anesthesia induction.",
      "Treatment of oral candidiasis (thrush).",
      "Symptomatic relief of dysuria associated with urinary tract infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_158",
    "q": "What is a key point regarding Isosorbide mononitrate?",
    "options": [
      "Prevention of angina pectoris.",
      "Overactive bladder with urge urinary incontinence and frequency.",
      "Short-term management of moderate to severe pain.",
      "Chronic management of gout by increasing uric acid excretion."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_159",
    "q": "What is a key point regarding Isotretinoin?",
    "options": [
      "Severe recalcitrant nodular acne.",
      "Prevention of organ transplant rejection.",
      "Control of tonic-clonic and focal seizures and prevention of seizures post-neurosurgery.",
      "Type 2 diabetes mellitus."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_160",
    "q": "What is a key point regarding Itraconazole?",
    "options": [
      "Systemic fungal infections and onychomycosis.",
      "Major depressive disorder (limited use due to hepatotoxicity).",
      "Management of ventricular and supraventricular arrhythmias.",
      "Benign prostatic hyperplasia."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_161",
    "q": "What is a key point regarding Ivabradine?",
    "options": [
      "Chronic heart failure with reduced ejection fraction to reduce hospitalization risk.",
      "Treatment and prophylaxis of uncomplicated urinary tract infections.",
      "Heart failure with reduced ejection fraction.",
      "Treatment of depression and chronic neuropathic pain syndromes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_162",
    "q": "What is a key point regarding Ixekizumab?",
    "options": [
      "Moderate to severe plaque psoriasis and psoriatic arthritis.",
      "Management of acromegaly and severe diarrhea/flushing from carcinoid tumors.",
      "Acute treatment of migraine and cluster headaches.",
      "Relief of allergic rhinitis symptoms."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_163",
    "q": "What is a key point regarding Ketoconazole topical?",
    "options": [
      "Treatment of fungal skin infections and seborrheic dermatitis.",
      "Partial seizures in epilepsy.",
      "Rapid relief of bronchospasm in asthma or chronic obstructive pulmonary disease.",
      "Maintenance treatment of asthma and COPD."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_164",
    "q": "What is a key point regarding Ketorolac?",
    "options": [
      "Short-term management of moderate to severe acute pain.",
      "Depression, anxiety disorders, OCD, and PTSD.",
      "Adjuvant therapy for hormone receptor positive breast cancer in postmenopausal individuals.",
      "Treatment of susceptible respiratory and skin infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_165",
    "q": "What is a key point regarding Labetalol?",
    "options": [
      "Hypertension, including during pregnancy, and hypertensive emergencies (IV).",
      "Control of tonic-clonic and focal seizures and prevention of seizures post-neurosurgery.",
      "Management of hypertension and adjunct in heart failure.",
      "Seizure disorders and panic disorder."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_166",
    "q": "What is a key point regarding Lacosamide?",
    "options": [
      "Partial-onset seizures in epilepsy.",
      "Hypertension and off-label for PTSD-related nightmares.",
      "Medication-assisted treatment of opioid use disorder and chronic pain in select cases.",
      "Treatment of major depressive disorder."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_167",
    "q": "What is a key point regarding Lactulose?",
    "options": [
      "Treatment of chronic constipation and hepatic encephalopathy.",
      "Schizophrenia, bipolar disorder, and adjunctive treatment of major depressive disorder.",
      "Treatment of susceptible respiratory and skin infections.",
      "Reduction of intraocular pressure in glaucoma."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_168",
    "q": "What is a key point regarding Lamotrigine?",
    "options": [
      "Seizure disorders and maintenance treatment of bipolar disorder.",
      "Reduction of LDL cholesterol and cardiovascular risk.",
      "Management of acne vulgaris.",
      "Prevention and treatment of venous thromboembolism and acute coronary syndromes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_169",
    "q": "What is a key point regarding Lansoprazole?",
    "options": [
      "GERD, peptic ulcer disease, and erosive esophagitis.",
      "Type 2 diabetes mellitus.",
      "Prevention of stroke in nonvalvular atrial fibrillation and treatment/prevention of venous thromboembolism.",
      "Relief of heartburn, gastroesophageal reflux, and prevention of ulcers."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_170",
    "q": "What is a key point regarding Latanoprost?",
    "options": [
      "Reduction of intraocular pressure in glaucoma and ocular hypertension.",
      "Treatment and prevention of estrogen receptor-positive breast cancer.",
      "Heart failure with reduced ejection fraction and rate control in atrial fibrillation.",
      "Seizure adjunct therapy, neuropathic pain, and restless legs syndrome (other formulations)."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_171",
    "q": "What is a key point regarding Ledipasvir/Sofosbuvir?",
    "options": [
      "Treatment of chronic hepatitis C virus infection.",
      "Treatment and suppression of herpes simplex and varicella zoster infections.",
      "Type 2 diabetes mellitus and cardiovascular risk reduction in select patients.",
      "Inflammatory conditions of the distal colon and rectum, including hemorrhoids."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_172",
    "q": "What is a key point regarding Levothyroxine?",
    "options": [
      "Hypothyroidism.",
      "Treatment of depression and chronic neuropathic pain syndromes.",
      "Treatment of major depressive disorder and generalized anxiety disorder.",
      "Control of post-meal blood glucose in diabetes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_173",
    "q": "What is a key point regarding Levetiracetam?",
    "options": [
      "Adjunct therapy for seizure disorders.",
      "Prevention of stroke in atrial fibrillation and treatment or prevention of venous thromboembolism.",
      "Reduction of triglycerides and improvement of HDL cholesterol.",
      "Hypertension, including during pregnancy, and hypertensive emergencies (IV)."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_174",
    "q": "What is a key point regarding Levofloxacin?",
    "options": [
      "Treatment of bacterial infections including pneumonia and urinary tract infections.",
      "Treatment of susceptible respiratory, skin, and sexually transmitted infections.",
      "Edema due to heart failure, liver disease, or kidney disease; hypertension.",
      "Irritable bowel syndrome with constipation and chronic idiopathic constipation."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_175",
    "q": "What is a key point regarding Levonorgestrel emergency contraception?",
    "options": [
      "Emergency contraception within 72 hours of unprotected intercourse.",
      "Short-term relief of occasional constipation.",
      "Hypertension and heart failure (often with nitrates).",
      "Magnesium deficiency, indigestion, and constipation (higher doses)."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_176",
    "q": "What is a key point regarding Levonorgestrel intrauterine system?",
    "options": [
      "Long-term contraception and heavy menstrual bleeding (Mirena).",
      "Medication-assisted treatment of opioid use disorder and chronic pain in select cases.",
      "Postprandial glucose control in diabetes mellitus.",
      "Orthostatic hypotension."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_177",
    "q": "What is a key point regarding Levothyroxine/Liothyronine?",
    "options": [
      "Hypothyroidism in selected patients.",
      "Hypertension not controlled with single-agent therapy.",
      "Prevention of angina pectoris.",
      "Prevention of organ transplant rejection."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_178",
    "q": "What is a key point regarding Lidocaine patch?",
    "options": [
      "Relief of postherpetic neuralgia pain and localized neuropathic pain.",
      "Relief of allergic rhinitis and chronic urticaria symptoms.",
      "GERD, peptic ulcer disease, and erosive esophagitis.",
      "Chronic hypertension and angina."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_179",
    "q": "What is a key point regarding Linaclotide?",
    "options": [
      "Irritable bowel syndrome with constipation and chronic idiopathic constipation.",
      "Treatment of susceptible skin, soft tissue, and anaerobic infections.",
      "Type 2 diabetes mellitus.",
      "Prevention and treatment of nausea and vomiting."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_180",
    "q": "What is a key point regarding Linezolid?",
    "options": [
      "Treatment of resistant Gram-positive infections including MRSA and VRE.",
      "Treatment and prevention of gout flares and familial Mediterranean fever.",
      "Magnesium deficiency, indigestion, and constipation (higher doses).",
      "Symptomatic relief of dysuria associated with urinary tract infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_181",
    "q": "What is a key point regarding Linagliptin?",
    "options": [
      "Type 2 diabetes mellitus.",
      "Type 2 diabetes mellitus when dual therapy is appropriate.",
      "Vulvovaginal candidiasis and other cutaneous fungal infections.",
      "Chronic management of gout by increasing uric acid excretion."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_182",
    "q": "What is a key point regarding Liraglutide?",
    "options": [
      "Type 2 diabetes and chronic weight management (Saxenda formulation).",
      "Relief of joint pain associated with osteoarthritis in hands, wrists, elbows, knees, ankles, or feet.",
      "Asthma maintenance and allergic rhinitis.",
      "Type 2 diabetes mellitus."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_183",
    "q": "What is a key point regarding Lisdexamfetamine?",
    "options": [
      "Attention-deficit/hyperactivity disorder and binge eating disorder.",
      "Management of mild to severe Alzheimer's dementia.",
      "Major depressive disorder (limited use due to hepatotoxicity).",
      "Benign prostatic hyperplasia."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_184",
    "q": "What is a key point regarding Lisinopril?",
    "options": [
      "Hypertension, heart failure, and post-myocardial infarction management.",
      "Major depressive disorder, generalized anxiety, diabetic neuropathy, fibromyalgia, and chronic musculoskeletal pain.",
      "Prevention of pregnancy in individuals who cannot take estrogen.",
      "Treatment of depression and chronic neuropathic pain syndromes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_185",
    "q": "What is a key point regarding Lithium carbonate?",
    "options": [
      "Treatment of bipolar disorder.",
      "Prevention and treatment of venous thromboembolism and acute coronary syndromes.",
      "Overactive bladder with urge urinary incontinence and urgency.",
      "Relief of allergic rhinitis symptoms."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_186",
    "q": "What is a key point regarding Loperamide?",
    "options": [
      "Control of acute nonspecific diarrhea and chronic diarrhea associated with inflammatory bowel disease.",
      "Prevention of pregnancy and cycle regulation.",
      "Seizure disorders and sedation.",
      "Maintenance treatment of asthma and COPD."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_187",
    "q": "What is a key point regarding Lorazepam?",
    "options": [
      "Anxiety disorders, sedation, and status epilepticus (IV).",
      "Reduction of triglycerides and improvement of HDL cholesterol.",
      "Neuropathic pain, fibromyalgia, and adjunctive therapy for partial seizures.",
      "Treatment of susceptible respiratory and skin infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_188",
    "q": "What is a key point regarding Losartan?",
    "options": [
      "Hypertension and diabetic nephropathy.",
      "Maintenance treatment of persistent asthma.",
      "Parkinson disease and restless legs syndrome.",
      "Seizure disorders and panic disorder."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_189",
    "q": "What is a key point regarding Lovastatin?",
    "options": [
      "Reduction of LDL cholesterol and prevention of cardiovascular events.",
      "Type 2 diabetes mellitus.",
      "Treatment and prevention of duodenal ulcers.",
      "Treatment of major depressive disorder."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_190",
    "q": "What is a key point regarding Lurasidone?",
    "options": [
      "Schizophrenia and bipolar depression.",
      "Schizophrenia, acute psychosis, and Tourette disorder.",
      "Treatment and suppression of herpes simplex and varicella zoster infections.",
      "Reduction of intraocular pressure in glaucoma."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_191",
    "q": "What is a key point regarding Macitentan?",
    "options": [
      "Pulmonary arterial hypertension.",
      "Treatment and prevention of postmenopausal osteoporosis.",
      "Treatment of infections caused by beta-lactamase producing bacteria, such as sinusitis and otitis media.",
      "Prevention and treatment of venous thromboembolism and acute coronary syndromes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_192",
    "q": "What is a key point regarding Magnesium oxide?",
    "options": [
      "Magnesium deficiency, indigestion, and constipation (higher doses).",
      "Basal insulin therapy for type 1 and type 2 diabetes.",
      "Relief of spasticity due to multiple sclerosis, spinal cord injury, or other neurologic conditions.",
      "Relief of heartburn, gastroesophageal reflux, and prevention of ulcers."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_193",
    "q": "What is a key point regarding Medroxyprogesterone acetate?",
    "options": [
      "Oral: abnormal uterine bleeding and amenorrhea; injectable: contraception and endometriosis.",
      "Hypertension and diabetic nephropathy.",
      "Maintenance treatment of asthma and COPD.",
      "Seizure adjunct therapy, neuropathic pain, and restless legs syndrome (other formulations)."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_194",
    "q": "What is a key point regarding Melatonin?",
    "options": [
      "Management of insomnia and circadian rhythm disorders.",
      "Treatment of fungal skin infections and seborrheic dermatitis.",
      "Lower urinary tract symptoms due to benign prostatic hyperplasia.",
      "Inflammatory conditions of the distal colon and rectum, including hemorrhoids."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_195",
    "q": "What is a key point regarding Meloxicam?",
    "options": [
      "Osteoarthritis and rheumatoid arthritis pain and inflammation.",
      "Reduction of intraocular pressure in glaucoma and ocular hypertension.",
      "Treatment of susceptible respiratory and Helicobacter pylori infections.",
      "Control of post-meal blood glucose in diabetes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_196",
    "q": "What is a key point regarding Metformin?",
    "options": [
      "First-line therapy for type 2 diabetes mellitus.",
      "Hypothyroidism in selected patients.",
      "Short-term treatment of muscle spasm associated with acute musculoskeletal conditions.",
      "Hypertension, including during pregnancy, and hypertensive emergencies (IV)."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_197",
    "q": "What is a key point regarding Metoclopramide?",
    "options": [
      "Gastroparesis and short-term relief of nausea/vomiting.",
      "Hypertension, heart failure, and post-myocardial infarction management.",
      "Relief of joint pain associated with osteoarthritis in hands, wrists, elbows, knees, ankles, or feet.",
      "Relief of postherpetic neuralgia pain and localized neuropathic pain."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_198",
    "q": "What is a key point regarding Metolazone?",
    "options": [
      "Edema in heart failure and kidney disease, often combined with loop diuretics.",
      "Pulmonary arterial hypertension.",
      "Treatment of benign prostatic hyperplasia and hypertension.",
      "Oral: abnormal uterine bleeding and amenorrhea; injectable: contraception and endometriosis."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_199",
    "q": "What is a key point regarding Metoprolol succinate?",
    "options": [
      "Hypertension, angina, and heart failure with reduced ejection fraction.",
      "Edema in heart failure and kidney disease, often combined with loop diuretics.",
      "Heart failure post-myocardial infarction and resistant hypertension.",
      "Orthostatic hypotension."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_200",
    "q": "What is a key point regarding Metoprolol tartrate?",
    "options": [
      "Hypertension, angina, arrhythmias, and rate control.",
      "Type 2 diabetes mellitus (postprandial glucose control).",
      "Reduction of LDL cholesterol, often in combination with statins.",
      "Prevention of organ transplant rejection."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_201",
    "q": "What is a key point regarding Metronidazole?",
    "options": [
      "Treatment of anaerobic bacterial infections and protozoal infections.",
      "Maintenance treatment of asthma.",
      "Once-daily maintenance therapy for asthma and COPD.",
      "Chronic hypertension and angina."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_202",
    "q": "What is a key point regarding Mexiletine?",
    "options": [
      "Treatment of ventricular arrhythmias.",
      "Hypertension, angina, and arrhythmias; prophylaxis of variceal bleeding.",
      "Treatment of attention-deficit/hyperactivity disorder.",
      "Prevention and treatment of nausea and vomiting."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_203",
    "q": "What is a key point regarding Miconazole topical?",
    "options": [
      "Vulvovaginal candidiasis and other cutaneous fungal infections.",
      "Treatment of external otitis (swimmer's ear).",
      "Short-term treatment of moderate pain.",
      "Symptomatic relief of dysuria associated with urinary tract infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_204",
    "q": "What is a key point regarding Midazolam?",
    "options": [
      "Procedural sedation, seizure clusters, and anesthesia induction.",
      "Prevention of chronic angina.",
      "Hypertension and diabetic nephropathy.",
      "Chronic management of gout by increasing uric acid excretion."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_205",
    "q": "What is a key point regarding Midodrine?",
    "options": [
      "Orthostatic hypotension.",
      "Hypertension.",
      "Treatment of chronic constipation and hepatic encephalopathy.",
      "Type 2 diabetes mellitus."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_206",
    "q": "What is a key point regarding Miglitol?",
    "options": [
      "Type 2 diabetes mellitus (postprandial glucose control).",
      "Chronic severe pain requiring continuous opioid therapy.",
      "Relief of postherpetic neuralgia pain and localized neuropathic pain.",
      "Benign prostatic hyperplasia."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_207",
    "q": "What is a key point regarding Milnacipran?",
    "options": [
      "Management of fibromyalgia.",
      "Intermittent claudication due to peripheral artery disease.",
      "Reduction of LDL cholesterol and prevention of cardiovascular events.",
      "Treatment of depression and chronic neuropathic pain syndromes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_208",
    "q": "What is a key point regarding Minocycline?",
    "options": [
      "Treatment of acne and various bacterial infections.",
      "Serious intra-abdominal, skin, and pulmonary infections in hospital settings.",
      "Hypertension, angina, arrhythmias, and rate control.",
      "Relief of allergic rhinitis symptoms."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_209",
    "q": "What is a key point regarding Minoxidil oral?",
    "options": [
      "Resistant hypertension.",
      "Neuropathic pain, fibromyalgia, and adjunctive therapy for partial seizures.",
      "Prevention of NSAID-induced gastric ulcers and medical termination of pregnancy with mifepristone.",
      "Maintenance treatment of asthma and COPD."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_210",
    "q": "What is a key point regarding Mirtazapine?",
    "options": [
      "Major depressive disorder.",
      "Prevention and treatment of osteoporosis in postmenopausal women and reduction of invasive breast cancer risk.",
      "Pain, inflammation, and fever.",
      "Treatment of susceptible respiratory and skin infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_211",
    "q": "What is a key point regarding Mirabegron?",
    "options": [
      "Overactive bladder with urge urinary incontinence and frequency.",
      "Type 2 diabetes mellitus.",
      "Prevention of chronic angina.",
      "Seizure disorders and panic disorder."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_212",
    "q": "What is a key point regarding Misoprostol?",
    "options": [
      "Prevention of NSAID-induced gastric ulcers and medical termination of pregnancy with mifepristone.",
      "Heart failure, resistant hypertension, primary hyperaldosteronism, and acne/hirsutism off-label.",
      "Treatment and prophylaxis of influenza A and B.",
      "Treatment of major depressive disorder."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_213",
    "q": "What is a key point regarding Mometasone inhalation?",
    "options": [
      "Maintenance treatment of asthma.",
      "Onychomycosis and fungal skin infections.",
      "Treatment of scabies and head lice.",
      "Reduction of intraocular pressure in glaucoma."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_214",
    "q": "What is a key point regarding Montelukast?",
    "options": [
      "Asthma maintenance and allergic rhinitis.",
      "Rapid relief of bronchospasm in asthma or chronic obstructive pulmonary disease.",
      "Hypertension and off-label for PTSD-related nightmares.",
      "Prevention and treatment of venous thromboembolism and acute coronary syndromes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_215",
    "q": "What is a key point regarding Morphine extended-release?",
    "options": [
      "Chronic severe pain requiring continuous opioid therapy.",
      "Treatment of hypertension when monotherapy is insufficient.",
      "Schizophrenia, bipolar disorder, and irritability associated with autism.",
      "Relief of heartburn, gastroesophageal reflux, and prevention of ulcers."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_216",
    "q": "What is a key point regarding Moxifloxacin?",
    "options": [
      "Treatment of respiratory and skin infections.",
      "Secondary prevention of cardiovascular events and certain post-stent regimens.",
      "Treatment of chronic hepatitis C virus infection across all major genotypes.",
      "Seizure adjunct therapy, neuropathic pain, and restless legs syndrome (other formulations)."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_217",
    "q": "What is a key point regarding Mupirocin topical?",
    "options": [
      "Treatment of impetigo and nasal MRSA colonization (intranasal ointment).",
      "Maintenance therapy for persistent asthma.",
      "Relief of mild to moderate pain and reduction of fever.",
      "Inflammatory conditions of the distal colon and rectum, including hemorrhoids."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_218",
    "q": "What is a key point regarding Mycophenolate mofetil?",
    "options": [
      "Prevention of organ transplant rejection.",
      "Treatment of hypertension requiring combination therapy.",
      "Treatment of hypertension when monotherapy is insufficient.",
      "Control of post-meal blood glucose in diabetes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_219",
    "q": "What is a key point regarding Nabumetone?",
    "options": [
      "Osteoarthritis and rheumatoid arthritis pain.",
      "Treatment of major depressive disorder and seasonal affective disorder; smoking cessation adjunct (other formulation).",
      "Relief of allergic rhinitis symptoms.",
      "Hypertension, including during pregnancy, and hypertensive emergencies (IV)."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_220",
    "q": "What is a key point regarding Nadolol?",
    "options": [
      "Hypertension, angina, and arrhythmias; prophylaxis of variceal bleeding.",
      "Lower urinary tract symptoms due to benign prostatic hyperplasia.",
      "Lowering intraocular pressure in open-angle glaucoma or ocular hypertension.",
      "Relief of postherpetic neuralgia pain and localized neuropathic pain."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_221",
    "q": "What is a key point regarding Naloxone nasal spray?",
    "options": [
      "Emergency reversal of opioid overdose.",
      "Treatment of hypertension and edema.",
      "Hypertension not controlled with single-agent therapy.",
      "Pulmonary arterial hypertension."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_222",
    "q": "What is a key point regarding Naltrexone?",
    "options": [
      "Treatment of opioid and alcohol dependence.",
      "Short-term treatment of inflammatory and pruritic dermatoses.",
      "Treatment of susceptible urinary, gastrointestinal, and respiratory infections.",
      "Procedural sedation, seizure clusters, and anesthesia induction."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_223",
    "q": "What is a key point regarding Naproxen?",
    "options": [
      "Pain, inflammation, and fever.",
      "Treatment of vitamin B12 deficiency and pernicious anemia.",
      "Management of moderate to severe vasomotor symptoms of menopause and hypoestrogenism.",
      "Treatment of impetigo and nasal MRSA colonization (intranasal ointment)."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_224",
    "q": "What is a key point regarding Nebivolol?",
    "options": [
      "Treatment of hypertension.",
      "Treatment of major depressive disorder.",
      "Anxiety, muscle spasm, seizure adjunct, and acute alcohol withdrawal.",
      "Chronic hypertension and angina."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_225",
    "q": "What is a key point regarding Nefazodone?",
    "options": [
      "Major depressive disorder (limited use due to hepatotoxicity).",
      "Heart failure with reduced ejection fraction and rate control in atrial fibrillation.",
      "Treatment of acne, respiratory infections, Lyme disease, and other susceptible infections.",
      "Prevention and treatment of nausea and vomiting."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_226",
    "q": "What is a key point regarding Nelfinavir?",
    "options": [
      "Antiretroviral therapy for HIV infection.",
      "Treatment of acne, respiratory infections, Lyme disease, and other susceptible infections.",
      "Hypertension and symptomatic heart failure.",
      "Symptomatic relief of dysuria associated with urinary tract infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_227",
    "q": "What is a key point regarding Neomycin/Polymyxin B/Hydrocortisone otic?",
    "options": [
      "Treatment of external otitis (swimmer's ear).",
      "Prevention of stroke in atrial fibrillation and treatment of venous thromboembolism after initial parenteral therapy.",
      "Contraception and acne treatment.",
      "Chronic management of gout by increasing uric acid excretion."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_228",
    "q": "What is a key point regarding Neostigmine?",
    "options": [
      "Myasthenia gravis and reversal of nondepolarizing neuromuscular blockade.",
      "Preventive treatment of migraine in adults.",
      "Maintenance treatment of persistent asthma.",
      "Type 2 diabetes mellitus."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_229",
    "q": "What is a key point regarding Nicardipine?",
    "options": [
      "Hypertension and angina; IV form for hypertensive emergencies.",
      "Prevention of pregnancy.",
      "Relief of chest congestion by loosening mucus.",
      "Benign prostatic hyperplasia."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_230",
    "q": "What is a key point regarding Nicotine transdermal patch?",
    "options": [
      "Nicotine replacement therapy for smoking cessation.",
      "Treatment and prevention of iron deficiency anemia.",
      "Relief of pain, fever, and inflammation.",
      "Treatment of depression and chronic neuropathic pain syndromes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_231",
    "q": "What is a key point regarding Nifedipine extended-release?",
    "options": [
      "Chronic hypertension and angina.",
      "Once-daily maintenance therapy for asthma and COPD.",
      "Treatment of metastatic melanoma and other advanced cancers.",
      "Relief of allergic rhinitis symptoms."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_232",
    "q": "What is a key point regarding Nitrofurantoin?",
    "options": [
      "Treatment and prophylaxis of uncomplicated urinary tract infections.",
      "Treatment of severe hypoglycemia when the patient cannot take oral carbohydrates.",
      "Hypertension, including during pregnancy, and hypertensive emergencies (IV).",
      "Maintenance treatment of asthma and COPD."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_233",
    "q": "What is a key point regarding Nitroglycerin sublingual?",
    "options": [
      "Acute relief of angina pectoris.",
      "Hypertension and edema.",
      "Long-term contraception and heavy menstrual bleeding (Mirena).",
      "Treatment of susceptible respiratory and skin infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_234",
    "q": "What is a key point regarding Nitroglycerin transdermal?",
    "options": [
      "Prevention of chronic angina.",
      "Reduction of triglycerides and cardiovascular risk in select patients.",
      "Anxiety disorders, sedation, and status epilepticus (IV).",
      "Seizure disorders and panic disorder."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_235",
    "q": "What is a key point regarding Nivolumab?",
    "options": [
      "Treatment of various advanced cancers including melanoma, lung, and renal cell carcinoma.",
      "Mealtime insulin for type 1 and type 2 diabetes.",
      "Edema in heart failure and kidney disease, often combined with loop diuretics.",
      "Treatment of major depressive disorder."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_236",
    "q": "What is a key point regarding Norethindrone?",
    "options": [
      "Prevention of pregnancy in individuals who cannot take estrogen.",
      "Prevention of angina pectoris.",
      "Resistant hypertension.",
      "Reduction of intraocular pressure in glaucoma."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_237",
    "q": "What is a key point regarding Nortriptyline?",
    "options": [
      "Depression and off-label for neuropathic pain.",
      "Hypertension, including during pregnancy, and hypertensive emergencies (IV).",
      "Hypertension, angina, and arrhythmias; prophylaxis of variceal bleeding.",
      "Prevention and treatment of venous thromboembolism and acute coronary syndromes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_238",
    "q": "What is a key point regarding Nystatin oral suspension?",
    "options": [
      "Treatment of oral candidiasis (thrush).",
      "Hypothyroidism.",
      "Chronic hypertension and angina.",
      "Relief of heartburn, gastroesophageal reflux, and prevention of ulcers."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_239",
    "q": "What is a key point regarding Octreotide?",
    "options": [
      "Management of acromegaly and severe diarrhea/flushing from carcinoid tumors.",
      "Irritable bowel syndrome with constipation and chronic idiopathic constipation.",
      "GERD, erosive esophagitis, and peptic ulcer disease.",
      "Seizure adjunct therapy, neuropathic pain, and restless legs syndrome (other formulations)."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_240",
    "q": "What is a key point regarding Olanzapine?",
    "options": [
      "Schizophrenia and bipolar disorder.",
      "Control of acute nonspecific diarrhea and chronic diarrhea associated with inflammatory bowel disease.",
      "Treatment of streptococcal pharyngitis and other susceptible infections.",
      "Inflammatory conditions of the distal colon and rectum, including hemorrhoids."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_241",
    "q": "What is a key point regarding Olmesartan?",
    "options": [
      "Hypertension.",
      "Oral: abnormal uterine bleeding and amenorrhea; injectable: contraception and endometriosis.",
      "Parkinson disease and restless legs syndrome.",
      "Control of post-meal blood glucose in diabetes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_242",
    "q": "What is a key point regarding Omega-3-acid ethyl esters?",
    "options": [
      "Severe hypertriglyceridemia.",
      "Hypertension, angina, arrhythmias, and rate control.",
      "Prevention and treatment of osteoporosis in postmenopausal women and reduction of invasive breast cancer risk.",
      "Hypertension, including during pregnancy, and hypertensive emergencies (IV)."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_243",
    "q": "What is a key point regarding Omeprazole?",
    "options": [
      "GERD, erosive esophagitis, and peptic ulcer disease.",
      "Management of fibromyalgia.",
      "Reduction of LDL cholesterol and cardiovascular risk.",
      "Relief of postherpetic neuralgia pain and localized neuropathic pain."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_244",
    "q": "What is a key point regarding Ondansetron?",
    "options": [
      "Prevention and treatment of nausea and vomiting.",
      "Asthma maintenance and allergic rhinitis.",
      "Maintenance therapy for COPD and asthma (Respimat).",
      "Pulmonary arterial hypertension."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_245",
    "q": "What is a key point regarding Oseltamivir?",
    "options": [
      "Treatment and prophylaxis of influenza A and B.",
      "Emergency reversal of opioid overdose.",
      "Treatment of depression and chronic neuropathic pain syndromes.",
      "Procedural sedation, seizure clusters, and anesthesia induction."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_246",
    "q": "What is a key point regarding Oxcarbazepine?",
    "options": [
      "Partial seizures in epilepsy.",
      "Myasthenia gravis and reversal of nondepolarizing neuromuscular blockade.",
      "Management of hypertension requiring dual therapy.",
      "Treatment of impetigo and nasal MRSA colonization (intranasal ointment)."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_247",
    "q": "What is a key point regarding Oxybutynin?",
    "options": [
      "Overactive bladder with urge urinary incontinence and urgency.",
      "Treatment of various advanced cancers including melanoma, lung, and renal cell carcinoma.",
      "Hypertension and chronic heart failure (often with other agents).",
      "Nicotine replacement therapy for smoking cessation."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_248",
    "q": "What is a key point regarding Oxycodone extended-release?",
    "options": [
      "Chronic severe pain requiring continuous opioid therapy.",
      "Severe hypertriglyceridemia.",
      "Type 2 diabetes mellitus and cardiovascular/renal risk reduction in select patients.",
      "GERD, erosive esophagitis, and peptic ulcer disease."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_249",
    "q": "What is a key point regarding Oxycodone/Acetaminophen?",
    "options": [
      "Short-term management of moderate to severe pain.",
      "Schizophrenia and schizoaffective disorder.",
      "Treatment of hypertension and edema.",
      "Symptomatic relief of dysuria associated with urinary tract infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_250",
    "q": "What is a key point regarding Paliperidone?",
    "options": [
      "Schizophrenia and schizoaffective disorder.",
      "Symptomatic relief of dysuria associated with urinary tract infections.",
      "Inflammatory tinea infections responsive to topical therapy.",
      "Chronic management of gout by increasing uric acid excretion."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_251",
    "q": "What is a key point regarding Pancrelipase?",
    "options": [
      "Exocrine pancreatic insufficiency due to cystic fibrosis, chronic pancreatitis, or pancreatectomy.",
      "Treatment or prevention of hypokalemia.",
      "Treatment of erosive esophagitis and symptomatic gastroesophageal reflux disease.",
      "Type 2 diabetes mellitus."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_252",
    "q": "What is a key point regarding Pantoprazole?",
    "options": [
      "GERD, erosive esophagitis, and Zollinger-Ellison syndrome.",
      "Management of ventricular and supraventricular arrhythmias.",
      "Management of mild to severe Alzheimer's dementia.",
      "Benign prostatic hyperplasia."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_253",
    "q": "What is a key point regarding Paroxetine?",
    "options": [
      "Depression, anxiety disorders, OCD, and PTSD.",
      "Schizophrenia, bipolar disorder, and irritability associated with autism.",
      "Type 2 diabetes and cardiovascular/renal risk reduction.",
      "Treatment of depression and chronic neuropathic pain syndromes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_254",
    "q": "What is a key point regarding Penicillin V potassium?",
    "options": [
      "Treatment of streptococcal pharyngitis and other susceptible infections.",
      "Type 2 diabetes (Ozempic, Rybelsus) and chronic weight management (Wegovy).",
      "Contraception and treatment of premenstrual dysphoric disorder or acne.",
      "Relief of allergic rhinitis symptoms."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_255",
    "q": "What is a key point regarding Pentoxifylline?",
    "options": [
      "Intermittent claudication due to peripheral artery disease.",
      "Treatment of urinary, respiratory, and skin infections, as well as Pneumocystis prophylaxis.",
      "Depression, obsessive-compulsive disorder, panic disorder, bulimia nervosa, and PMDD.",
      "Maintenance treatment of asthma and COPD."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_256",
    "q": "What is a key point regarding Permethrin topical?",
    "options": [
      "Treatment of scabies and head lice.",
      "Prevention and treatment of thromboembolism in atrial fibrillation, DVT/PE, and mechanical heart valves.",
      "Treatment of severe hypoglycemia when the patient cannot take oral carbohydrates.",
      "Treatment of susceptible respiratory and skin infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_257",
    "q": "What is a key point regarding Phenazopyridine?",
    "options": [
      "Symptomatic relief of dysuria associated with urinary tract infections.",
      "Prevention of gout flares and management of hyperuricemia.",
      "Anxiety, pruritus, and adjunct anesthesia.",
      "Seizure disorders and panic disorder."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_258",
    "q": "What is a key point regarding Phenobarbital?",
    "options": [
      "Seizure disorders and sedation.",
      "Treatment of infections caused by beta-lactamase producing bacteria, such as sinusitis and otitis media.",
      "Control of post-meal blood glucose in diabetes.",
      "Treatment of major depressive disorder."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_259",
    "q": "What is a key point regarding Phentermine?",
    "options": [
      "Short-term management of obesity in conjunction with diet and exercise.",
      "Management of hypertension requiring dual therapy.",
      "Treatment of fungal skin infections and seborrheic dermatitis.",
      "Reduction of intraocular pressure in glaucoma."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_260",
    "q": "What is a key point regarding Phenytoin?",
    "options": [
      "Control of tonic-clonic and focal seizures and prevention of seizures post-neurosurgery.",
      "Treatment of hypertension when monotherapy is inadequate.",
      "Treatment of bacterial infections including pneumonia and urinary tract infections.",
      "Prevention and treatment of venous thromboembolism and acute coronary syndromes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_261",
    "q": "What is a key point regarding Pioglitazone?",
    "options": [
      "Type 2 diabetes mellitus.",
      "Maintenance therapy for persistent asthma.",
      "Treatment of bipolar disorder.",
      "Relief of heartburn, gastroesophageal reflux, and prevention of ulcers."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_262",
    "q": "What is a key point regarding Piperacillin/Tazobactam?",
    "options": [
      "Serious intra-abdominal, skin, and pulmonary infections in hospital settings.",
      "Tension headaches when other options fail.",
      "First-line therapy for type 2 diabetes mellitus.",
      "Seizure adjunct therapy, neuropathic pain, and restless legs syndrome (other formulations)."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_263",
    "q": "What is a key point regarding Polyethylene glycol 3350?",
    "options": [
      "Occasional constipation.",
      "Treatment of susceptible respiratory and skin infections.",
      "Management of fibromyalgia.",
      "Inflammatory conditions of the distal colon and rectum, including hemorrhoids."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_264",
    "q": "What is a key point regarding Potassium chloride?",
    "options": [
      "Treatment or prevention of hypokalemia.",
      "Treatment of susceptible urinary, gastrointestinal, and respiratory infections.",
      "Prevention of organ transplant rejection.",
      "Control of post-meal blood glucose in diabetes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_265",
    "q": "What is a key point regarding Pramipexole?",
    "options": [
      "Parkinson disease and restless legs syndrome.",
      "Hypertension and off-label use for withdrawal symptoms or ADHD.",
      "Hypertension and angina; IV form for hypertensive emergencies.",
      "Hypertension, including during pregnancy, and hypertensive emergencies (IV)."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_266",
    "q": "What is a key point regarding Pravastatin?",
    "options": [
      "Reduction of LDL cholesterol and cardiovascular risk.",
      "Increase tear production in chronic dry eye disease.",
      "Schizophrenia and bipolar disorder.",
      "Relief of postherpetic neuralgia pain and localized neuropathic pain."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_267",
    "q": "What is a key point regarding Prazosin?",
    "options": [
      "Hypertension and off-label for PTSD-related nightmares.",
      "Treatment of attention-deficit/hyperactivity disorder.",
      "Exocrine pancreatic insufficiency due to cystic fibrosis, chronic pancreatitis, or pancreatectomy.",
      "Pulmonary arterial hypertension."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_268",
    "q": "What is a key point regarding Prednisone?",
    "options": [
      "Inflammatory and autoimmune conditions, asthma exacerbations, and allergic reactions.",
      "Adjunctive treatment of acute diarrhea.",
      "Serious intra-abdominal, skin, and pulmonary infections in hospital settings.",
      "Procedural sedation, seizure clusters, and anesthesia induction."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_269",
    "q": "What is a key point regarding Pregabalin?",
    "options": [
      "Neuropathic pain, fibromyalgia, and adjunctive therapy for partial seizures.",
      "Treatment of benign prostatic hyperplasia and hypertension.",
      "Schizophrenia, bipolar disorder, and adjunctive treatment of major depressive disorder.",
      "Treatment of impetigo and nasal MRSA colonization (intranasal ointment)."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_270",
    "q": "What is a key point regarding Probenecid?",
    "options": [
      "Chronic management of gout by increasing uric acid excretion.",
      "Type 2 diabetes and cardiovascular/renal risk reduction.",
      "Type 2 diabetes (Ozempic, Rybelsus) and chronic weight management (Wegovy).",
      "Nicotine replacement therapy for smoking cessation."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_271",
    "q": "What is a key point regarding Procainamide?",
    "options": [
      "Management of ventricular and supraventricular arrhythmias.",
      "Gastroesophageal reflux disease, erosive esophagitis, and peptic ulcer disease.",
      "Benign prostatic hyperplasia.",
      "GERD, erosive esophagitis, and peptic ulcer disease."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_272",
    "q": "What is a key point regarding Promethazine?",
    "options": [
      "Treatment of nausea, vomiting, allergies, and motion sickness.",
      "Prevention of pregnancy.",
      "Short-term management of anxiety and panic disorders.",
      "Treatment of scabies and head lice."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_273",
    "q": "What is a key point regarding Propranolol?",
    "options": [
      "Hypertension, arrhythmias, migraine prophylaxis, and performance anxiety.",
      "Treatment of candidiasis, cryptococcal meningitis, and antifungal prophylaxis.",
      "Secondary prevention of cardiovascular events and certain post-stent regimens.",
      "Neuropathic pain, fibromyalgia, and adjunctive therapy for partial seizures."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_274",
    "q": "What is a key point regarding Quetiapine?",
    "options": [
      "Schizophrenia, bipolar disorder, and adjunctive treatment of major depressive disorder.",
      "Edema due to heart failure, liver disease, or kidney disease; hypertension.",
      "Inflammatory and pruritic dermatoses responsive to steroids.",
      "Type 2 diabetes mellitus."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_275",
    "q": "What is a key point regarding Quinapril?",
    "options": [
      "Hypertension and heart failure.",
      "Relief of chest congestion by loosening mucus.",
      "Management of generalized anxiety disorder.",
      "Benign prostatic hyperplasia."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_276",
    "q": "What is a key point regarding Raloxifene?",
    "options": [
      "Prevention and treatment of osteoporosis in postmenopausal women and reduction of invasive breast cancer risk.",
      "Inflammatory conditions of the distal colon and rectum, including hemorrhoids.",
      "Relief of allergic rhinitis and chronic urticaria symptoms.",
      "Treatment of depression and chronic neuropathic pain syndromes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_277",
    "q": "What is a key point regarding Rivaroxaban?",
    "options": [
      "Prevention and treatment of venous thromboembolism and stroke prevention in atrial fibrillation.",
      "Treatment of acute gout, ankylosing spondylitis, and other inflammatory conditions.",
      "Hypertension and off-label use for withdrawal symptoms or ADHD.",
      "Relief of allergic rhinitis symptoms."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_278",
    "q": "What is a key point regarding Risperidone?",
    "options": [
      "Schizophrenia, bipolar disorder, and irritability associated with autism.",
      "Mealtime insulin for type 1 and type 2 diabetes.",
      "Overactive bladder with urinary urgency, frequency, or urge incontinence.",
      "Maintenance treatment of asthma and COPD."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_279",
    "q": "What is a key point regarding Rituximab?",
    "options": [
      "Treatment of non-Hodgkin lymphoma, chronic lymphocytic leukemia, and autoimmune diseases such as rheumatoid arthritis.",
      "Systemic fungal infections and onychomycosis.",
      "Stroke prophylaxis in patients with a history of transient ischemic attack or completed ischemic stroke.",
      "Treatment of susceptible respiratory and skin infections."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_280",
    "q": "What is a key point regarding Ropinirole?",
    "options": [
      "Parkinson disease and restless legs syndrome.",
      "Treatment of chronic constipation and hepatic encephalopathy.",
      "Prevention of stroke in atrial fibrillation and treatment of venous thromboembolism after initial parenteral therapy.",
      "Seizure disorders and panic disorder."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_281",
    "q": "What is a key point regarding Rosuvastatin?",
    "options": [
      "Reduction of LDL cholesterol and cardiovascular risk.",
      "Treatment of bacterial infections including pneumonia and urinary tract infections.",
      "Menopausal symptom management and hypoestrogenism.",
      "Treatment of major depressive disorder."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_282",
    "q": "What is a key point regarding Sacubitril/Valsartan?",
    "options": [
      "Heart failure with reduced ejection fraction.",
      "Type 2 diabetes mellitus.",
      "Treatment of benign prostatic hyperplasia.",
      "Reduction of intraocular pressure in glaucoma."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_283",
    "q": "What is a key point regarding Saxagliptin?",
    "options": [
      "Type 2 diabetes mellitus.",
      "Hypertension and diabetic nephropathy.",
      "Type 2 diabetes mellitus.",
      "Prevention and treatment of venous thromboembolism and acute coronary syndromes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_284",
    "q": "What is a key point regarding Secukinumab?",
    "options": [
      "Moderate to severe plaque psoriasis, psoriatic arthritis, and ankylosing spondylitis.",
      "Osteoarthritis and rheumatoid arthritis pain and inflammation.",
      "Inflammatory conditions of the distal colon and rectum, including hemorrhoids.",
      "Relief of heartburn, gastroesophageal reflux, and prevention of ulcers."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_285",
    "q": "What is a key point regarding Semaglutide?",
    "options": [
      "Type 2 diabetes (Ozempic, Rybelsus) and chronic weight management (Wegovy).",
      "Treatment of ventricular arrhythmias.",
      "Basal insulin coverage for type 1 and type 2 diabetes.",
      "Seizure adjunct therapy, neuropathic pain, and restless legs syndrome (other formulations)."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_286",
    "q": "What is a key point regarding Sildenafil?",
    "options": [
      "Erectile dysfunction (Viagra) and pulmonary arterial hypertension (Revatio).",
      "Resistant hypertension.",
      "Chronic heart failure with reduced ejection fraction to reduce hospitalization risk.",
      "Inflammatory conditions of the distal colon and rectum, including hemorrhoids."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_287",
    "q": "What is a key point regarding Simvastatin?",
    "options": [
      "Reduction of LDL cholesterol and cardiovascular risk.",
      "Treatment of respiratory and skin infections.",
      "Hypothyroidism.",
      "Control of post-meal blood glucose in diabetes."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_288",
    "q": "What is a key point regarding Sitagliptin?",
    "options": [
      "Type 2 diabetes mellitus.",
      "Pain, inflammation, and fever.",
      "Attention-deficit/hyperactivity disorder and binge eating disorder.",
      "Hypertension, including during pregnancy, and hypertensive emergencies (IV)."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_289",
    "q": "What is a key point regarding Sofosbuvir/Velpatasvir?",
    "options": [
      "Treatment of chronic hepatitis C virus infection across all major genotypes.",
      "Nicotine replacement therapy for smoking cessation.",
      "Management of insomnia and circadian rhythm disorders.",
      "Relief of postherpetic neuralgia pain and localized neuropathic pain."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_290",
    "q": "What is a key point regarding Spironolactone?",
    "options": [
      "Heart failure, resistant hypertension, primary hyperaldosteronism, and acne/hirsutism off-label.",
      "Depression and off-label for neuropathic pain.",
      "Orthostatic hypotension.",
      "Pulmonary arterial hypertension."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_291",
    "q": "What is a key point regarding Sucralfate?",
    "options": [
      "Treatment and prevention of duodenal ulcers.",
      "Prevention and treatment of nausea and vomiting.",
      "Treatment of respiratory and skin infections.",
      "Procedural sedation, seizure clusters, and anesthesia induction."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_292",
    "q": "What is a key point regarding Sulfamethoxazole/Trimethoprim?",
    "options": [
      "Treatment of urinary, respiratory, and skin infections, as well as Pneumocystis prophylaxis.",
      "Exocrine pancreatic insufficiency due to cystic fibrosis, chronic pancreatitis, or pancreatectomy.",
      "Treatment of external otitis (swimmer's ear).",
      "Treatment of impetigo and nasal MRSA colonization (intranasal ointment)."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_293",
    "q": "What is a key point regarding Sumatriptan?",
    "options": [
      "Acute treatment of migraine and cluster headaches.",
      "Seizure disorders and sedation.",
      "Treatment of oral candidiasis (thrush).",
      "Nicotine replacement therapy for smoking cessation."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_294",
    "q": "What is a key point regarding Tacrolimus?",
    "options": [
      "Prevention of organ transplant rejection and treatment of atopic dermatitis (topical).",
      "Parkinson disease and restless legs syndrome.",
      "Short-term management of moderate to severe pain.",
      "GERD, erosive esophagitis, and peptic ulcer disease."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_295",
    "q": "What is a key point regarding Tamoxifen?",
    "options": [
      "Treatment and prevention of estrogen receptor-positive breast cancer.",
      "Treatment of nausea, vomiting, allergies, and motion sickness.",
      "Control of tonic-clonic and focal seizures and prevention of seizures post-neurosurgery.",
      "Treatment of scabies and head lice."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_296",
    "q": "What is a key point regarding Tamsulosin?",
    "options": [
      "Benign prostatic hyperplasia.",
      "Treatment of non-Hodgkin lymphoma, chronic lymphocytic leukemia, and autoimmune diseases such as rheumatoid arthritis.",
      "Management of ventricular and supraventricular arrhythmias.",
      "Neuropathic pain, fibromyalgia, and adjunctive therapy for partial seizures."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_297",
    "q": "What is a key point regarding Terbinafine?",
    "options": [
      "Onychomycosis and fungal skin infections.",
      "Erectile dysfunction (Viagra) and pulmonary arterial hypertension (Revatio).",
      "Heart failure with reduced ejection fraction.",
      "Moderate to severe plaque psoriasis, psoriatic arthritis, and ankylosing spondylitis."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_298",
    "q": "What is a key point regarding Tiotropium?",
    "options": [
      "Maintenance therapy for COPD and asthma (Respimat).",
      "Acute treatment of migraine and cluster headaches.",
      "Prevention of organ transplant rejection and treatment of atopic dermatitis (topical).",
      "Treatment and prevention of estrogen receptor-positive breast cancer."
    ],
    "correct": 0
  },
  {
    "id": "counseling_ex_299",
    "q": "What is a key point regarding Warfarin?",
    "options": [
      "Prevention and treatment of thromboembolism in atrial fibrillation, DVT/PE, and mechanical heart valves.",
      "Short-term treatment of moderate pain when non-opioid therapy is inadequate.",
      "Treatment and prevention of osteoporosis.",
      "Treatment of depression and chronic neuropathic pain syndromes."
    ],
    "correct": 0
  }
]
}];

const counselingCases$1 = [];

const diseasesFlashcards$1 = [{
  id: "builtin_diseases",
  title: "Medical Sciences Flashcards",
  icon: "Layers",
  color: "#06b6d4",
  isBuiltIn: true,
  isBuiltin: true,
  cards: [
  {
    "id": "diseases_fc_0",
    "q": "What is hypertension?",
    "a": "Persistently elevated blood pressure ≥130/80 mmHg. Primary (essential) has no identifiable cause; secondary has an underlying cause (renal disease, hyperaldosteronism, etc.).",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_1",
    "q": "First-line medications for hypertension",
    "a": "Thiazide diuretics, ACE inhibitors, ARBs, or calcium channel blockers. In diabetes or CKD: ACE inhibitors or ARBs preferred.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_2",
    "q": "What is heart failure?",
    "a": "Inability of the heart to pump sufficient blood to meet metabolic needs. Classified by ejection fraction: HFrEF (<40%) or HFpEF (≥50%).",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_3",
    "q": "Mainstay treatment for HFrEF",
    "a": "ACE inhibitor (or ARNI), beta-blocker, MRA (spironolactone), and SGLT2 inhibitor. Loop diuretics for symptom relief.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_4",
    "q": "What is atrial fibrillation?",
    "a": "Irregular, often rapid heart rhythm from chaotic atrial electrical activity. Causes: HTN, valve disease, HF, thyrotoxicosis. Risk: stroke.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_5",
    "q": "CHA₂DS₂-VASc score",
    "a": "Stroke risk calculator in AFib. Score ≥2 in men or ≥3 in women → anticoagulation recommended (warfarin or DOAC).",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_6",
    "q": "What is angina pectoris?",
    "a": "Chest pain/pressure from myocardial ischemia due to reduced coronary blood flow. Stable: predictable with exertion. Unstable: at rest, more dangerous.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_7",
    "q": "Pathophysiology of acute MI",
    "a": "Rupture of atherosclerotic plaque → thrombus formation → coronary artery occlusion → myocardial necrosis. STEMI: complete occlusion. NSTEMI: partial.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_8",
    "q": "What is deep vein thrombosis (DVT)?",
    "a": "Blood clot in deep vein (usually leg). Risk: Virchow's triad — stasis, endothelial injury, hypercoagulability. Complication: pulmonary embolism.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_9",
    "q": "What is hyperlipidemia?",
    "a": "Elevated blood lipids (LDL, triglycerides, total cholesterol) or low HDL. Major risk factor for atherosclerosis and cardiovascular disease.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_10",
    "q": "What is asthma?",
    "a": "Chronic inflammatory airway disease with reversible bronchoconstriction. Triggers: allergens, exercise, cold air, infections. Characterized by wheezing, SOB, cough.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_11",
    "q": "Asthma controller vs. reliever medications",
    "a": "Controllers: inhaled corticosteroids (ICS), LABAs. Reliever (rescue): SABAs (albuterol). Severe: oral steroids, biologics (omalizumab).",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_12",
    "q": "What is COPD?",
    "a": "Progressive, irreversible airflow obstruction from emphysema and/or chronic bronchitis. Caused primarily by smoking. FEV1/FVC <0.7 on spirometry.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_13",
    "q": "COPD pharmacotherapy stepwise approach",
    "a": "SABA/SAMA PRN → LAMA (tiotropium) → LAMA+LABA → LAMA+LABA+ICS. Roflumilast for frequent exacerbators.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_14",
    "q": "What is pneumonia?",
    "a": "Infection of lung parenchyma (alveoli). Community-acquired (CAP): Streptococcus pneumoniae most common. HAP/VAP: gram-negatives and MRSA.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_15",
    "q": "What is pulmonary embolism (PE)?",
    "a": "Blood clot in pulmonary artery, usually from DVT. Symptoms: sudden dyspnea, plupeuritic chest pain, tachycardia. Life-threatening emergency.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_16",
    "q": "What is tuberculosis (TB)?",
    "a": "Infection by Mycobacterium tuberculosis. Latent TB: no symptoms, not contagious. Active TB: fever, night sweats, bloody cough. Treated with RIPE regimen.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_17",
    "q": "What is type 1 diabetes mellitus?",
    "a": "Autoimmune destruction of pancreatic β-cells → absolute insulin deficiency. Requires lifelong insulin therapy. DKA is life-threatening complication.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_18",
    "q": "What is type 2 diabetes mellitus?",
    "a": "Insulin resistance + relative insulin deficiency. Most common form. Risk factors: obesity, inactivity, family history. HbA1c target typically <7%.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_19",
    "q": "Mechanism of action of metformin",
    "a": "Decreases hepatic glucose production (inhibits gluconeogenesis), improves insulin sensitivity. First-line for T2DM. Does not cause hypoglycemia alone.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_20",
    "q": "What is diabetic ketoacidosis (DKA)?",
    "a": "Complication of T1DM (or T2DM). Absolute insulin deficiency → lipolysis → ketone production → anion gap metabolic acidosis. Treat: IV fluids, insulin, K⁺ replacement.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_21",
    "q": "What is hyperthyroidism?",
    "a": "Excess thyroid hormone. Causes: Graves' disease (most common), toxic nodule, thyroiditis. Symptoms: tachycardia, weight loss, heat intolerance, tremor.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_22",
    "q": "What is hypothyroidism?",
    "a": "Insufficient thyroid hormone. Most common cause: Hashimoto's thyroiditis. Symptoms: fatigue, weight gain, cold intolerance, bradycardia, constipation.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_23",
    "q": "What is Cushing's syndrome?",
    "a": "Excess cortisol. Causes: exogenous corticosteroids (most common), pituitary adenoma (Cushing's disease), adrenal tumor. Features: moon face, buffalo hump, striae.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_24",
    "q": "What is Addison's disease?",
    "a": "Primary adrenal insufficiency — destruction of adrenal cortex → deficiency of cortisol and aldosterone. Crisis: hypotension, hyponatremia, hyperkalemia.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_25",
    "q": "What is gout?",
    "a": "Monosodium urate crystal deposition in joints from hyperuricemia. Acute: extreme joint pain (great toe most common). Chronic: tophi, kidney stones.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_26",
    "q": "Acute gout treatment vs. urate-lowering therapy",
    "a": "Acute: NSAIDs, colchicine, or corticosteroids. Chronic prevention: allopurinol or febuxostat (xanthine oxidase inhibitors). Start after acute attack resolves.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_27",
    "q": "What is epilepsy?",
    "a": "Recurrent, unprovoked seizures from abnormal neuronal activity. Focal seizures: one brain area. Generalized: both hemispheres (tonic-clonic, absence).",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_28",
    "q": "First-line anticonvulsants by seizure type",
    "a": "Focal: lamotrigine, levetiracetam, carbamazepine. Generalized tonic-clonic: valproate (caution in women), levetiracetam, lamotrigine. Absence: ethosuximide.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_29",
    "q": "What is Parkinson's disease?",
    "a": "Progressive dopamine neuron loss in substantia nigra. Cardinal features: bradykinesia, resting tremor, rigidity, postural instability. Non-motor: dementia, depression.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_30",
    "q": "Parkinson's disease pharmacotherapy",
    "a": "Levodopa/carbidopa = gold standard. Also: dopamine agonists (pramipexole, ropinirole), MAO-B inhibitors (rasagiline, selegiline), COMT inhibitors.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_31",
    "q": "What is Alzheimer's disease?",
    "a": "Most common dementia. Progressive neurodegeneration with amyloid plaques and neurofibrillary tangles. Symptoms: memory loss, confusion, personality changes.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_32",
    "q": "Pharmacotherapy for Alzheimer's disease",
    "a": "Mild-moderate: cholinesterase inhibitors (donepezil, rivastigmine, galantamine). Moderate-severe: memantine (NMDA antagonist). Lecanemab for early AD.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_33",
    "q": "What is a stroke?",
    "a": "Ischemic (87%): clot blocks brain artery → infarction. Hemorrhagic: bleeding into brain. Time-sensitive: 'time is brain'. IV tPA within 4.5h for ischemic.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_34",
    "q": "What is migraine?",
    "a": "Recurrent severe headache, often unilateral, with nausea/vomiting, photophobia. Triggered by stress, hormones, foods. Aura in ~25%.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_35",
    "q": "Migraine acute vs. preventive treatment",
    "a": "Acute: triptans (first-line), NSAIDs, anti-emetics. Preventive (≥4/mo): beta-blockers (propranolol), topiramate, valproate, amitriptyline, CGRP antagonists.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_36",
    "q": "What is multiple sclerosis (MS)?",
    "a": "Autoimmune demyelination of CNS. Relapsing-remitting most common. Symptoms: visual disturbances (optic neuritis), weakness, fatigue, spasticity, bladder dysfunction.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_37",
    "q": "What is GERD?",
    "a": "Gastroesophageal reflux disease — acid reflux causing heartburn, regurgitation. Complications: esophagitis, Barrett's esophagus, adenocarcinoma.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_38",
    "q": "GERD pharmacotherapy stepwise approach",
    "a": "Lifestyle changes → antacids PRN → H2 blockers (famotidine) → PPIs (omeprazole, pantoprazole). PPIs most effective; use lowest effective dose.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_39",
    "q": "What is peptic ulcer disease (PUD)?",
    "a": "Ulcers in stomach (gastric) or duodenum. Most common causes: H. pylori infection, NSAID use. Symptoms: epigastric pain, nausea, GI bleeding.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_40",
    "q": "H. pylori eradication regimen",
    "a": "Triple therapy: PPI + clarithromycin + amoxicillin × 14 days. Quadruple (if clarithromycin resistance): PPI + bismuth + metronidazole + tetracycline.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_41",
    "q": "What is Crohn's disease?",
    "a": "Transmural inflammation anywhere in GI tract (mouth to anus), most commonly terminal ileum. Skip lesions, cobblestone appearance, fistulas, granulomas.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_42",
    "q": "What is ulcerative colitis (UC)?",
    "a": "Continuous mucosal inflammation of colon only, starting from rectum. Symptoms: bloody diarrhea, urgency. Complications: toxic megacolon, colon cancer.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_43",
    "q": "IBD pharmacotherapy overview",
    "a": "Mild-moderate: mesalamine (UC only), budesonide. Moderate-severe: corticosteroids, azathioprine/6-MP, biologics (TNF-α inhibitors: infliximab, adalimumab).",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_44",
    "q": "What is irritable bowel syndrome (IBS)?",
    "a": "Functional GI disorder with abdominal pain + altered bowel habits (IBS-C, IBS-D, or mixed) without structural abnormality. Diagnosis of exclusion.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_45",
    "q": "What is cirrhosis?",
    "a": "End-stage liver fibrosis from chronic damage (alcohol, NAFLD, hepatitis B/C). Complications: portal hypertension, ascites, varices, hepatic encephalopathy, HCC.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_46",
    "q": "What is chronic kidney disease (CKD)?",
    "a": "Progressive loss of kidney function. Classified by GFR (stages 1-5). Causes: DM, HTN most common. Complications: anemia, hyperkalemia, metabolic acidosis, bone disease.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_47",
    "q": "How does CKD affect drug dosing?",
    "a": "Renally cleared drugs accumulate → reduce dose or extend interval. Use eGFR to adjust. Avoid NSAIDs, contrast dye. Monitor metformin (hold if GFR<30), digoxin.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_48",
    "q": "What is acute kidney injury (AKI)?",
    "a": "Sudden ↓ in kidney function. Pre-renal (volume depletion, most common), intrinsic renal (ATN, nephritis), post-renal (obstruction). Diagnose by ↑ creatinine.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_49",
    "q": "What is nephrotic syndrome?",
    "a": "Massive proteinuria (>3.5g/day), hypoalbuminemia, edema, hyperlipidemia. Causes: minimal change disease (children), focal segmental glomerulosclerosis (adults).",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_50",
    "q": "What is a urinary tract infection (UTI)?",
    "a": "Bacterial infection of urinary tract. Cystitis (lower): dysuria, frequency, urgency. Pyelonephritis (upper): fever, flank pain, systemic illness. Most common: E. coli.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_51",
    "q": "UTI treatment by type",
    "a": "Uncomplicated cystitis: nitrofurantoin or TMP-SMX × 3 days. Pyelonephritis: fluoroquinolone × 7-14 days or IV ceftriaxone. Consider culture/sensitivity.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_52",
    "q": "What is sepsis?",
    "a": "Life-threatening organ dysfunction caused by dysregulated host response to infection. Septic shock: sepsis + vasopressors needed + lactate >2 mmol/L despite fluids.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_53",
    "q": "Sepsis management (Surviving Sepsis Bundle)",
    "a": "Hour-1: blood cultures → broad-spectrum antibiotics → 30 mL/kg IV crystalloid if hypotensive → vasopressors if needed → lactate measurement.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_54",
    "q": "What is MRSA?",
    "a": "Methicillin-resistant Staphylococcus aureus — resistant to beta-lactams. Skin/soft tissue: TMP-SMX or doxycycline. Serious infections: vancomycin, linezolid, or daptomycin.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_55",
    "q": "What is Clostridioides difficile (C. diff) infection?",
    "a": "Colitis from C. diff toxin, often after antibiotic use (disrupts gut flora). Symptoms: watery diarrhea, abdominal pain. Treatment: fidaxomicin or vancomycin oral. Stop offending antibiotic.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_56",
    "q": "What is HIV/AIDS?",
    "a": "HIV destroys CD4+ T-cells → immunodeficiency → AIDS (CD4 <200/μL). Transmitted via blood, sex, mother-to-child. Treated with ART (antiretroviral therapy).",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_57",
    "q": "Antiretroviral therapy (ART) backbone",
    "a": "2 NRTIs + 1 INSTI (integrase inhibitor, e.g., dolutegravir). Bictegravir/TAF/FTC (Biktarvy) or dolutegravir/abacavir/3TC (Triumeq) common options.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_58",
    "q": "What is hepatitis B?",
    "a": "Viral liver infection (HBV). Acute: usually resolves. Chronic (HBsAg >6 months): cirrhosis, HCC risk. Vaccine-preventable. Treat: tenofovir or entecavir.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_59",
    "q": "What is hepatitis C?",
    "a": "Bloodborne RNA virus (HCV). Most become chronic. Curable with direct-acting antivirals (DAAs): sofosbuvir/velpatasvir (Epclusa) × 12 weeks, >95% cure rates.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_60",
    "q": "What is major depressive disorder (MDD)?",
    "a": "Persistent depressed mood or anhedonia × ≥2 weeks + ≥4 somatic symptoms. Treated with SSRIs/SNRIs first-line. Severe: add therapy, consider TMS or ECT.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_61",
    "q": "SSRI mechanism of action",
    "a": "Selectively inhibit serotonin reuptake transporter (SERT) → ↑ synaptic serotonin. Examples: fluoxetine, sertraline, escitalopram. First-line for depression and anxiety.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_62",
    "q": "What is bipolar disorder?",
    "a": "Mood disorder with episodes of mania/hypomania alternating with depression. Bipolar I: full mania. Bipolar II: hypomania + depression. Risk: suicide especially during depression.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_63",
    "q": "Bipolar disorder pharmacotherapy",
    "a": "Mood stabilizers: lithium (evidence for suicide reduction), valproate, lamotrigine (bipolar depression). Atypical antipsychotics: quetiapine, olanzapine, aripiprazole.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_64",
    "q": "What is schizophrenia?",
    "a": "Psychotic disorder with positive symptoms (hallucinations, delusions, disorganized speech) and negative symptoms (flat affect, alogia, avolition, anhedonia).",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_65",
    "q": "Antipsychotic medications: first vs. second generation",
    "a": "FGA (typical): haloperidol, chlorpromazine — high EPS risk. SGA (atypical): risperidone, olanzapine, quetiapine — lower EPS but metabolic side effects.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_66",
    "q": "What is generalized anxiety disorder (GAD)?",
    "a": "Excessive, uncontrollable worry about multiple topics ≥6 months + physical symptoms (muscle tension, insomnia, fatigue). First-line: SSRIs, SNRIs, buspirone.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_67",
    "q": "What is PTSD?",
    "a": "Post-traumatic stress disorder after trauma exposure. Symptoms: flashbacks, nightmares, avoidance, hypervigilance, negative cognitions. First-line: trauma-focused psychotherapy + SSRI/SNRI.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_68",
    "q": "What is ADHD?",
    "a": "Attention-deficit/hyperactivity disorder. Inattentive, hyperactive-impulsive, or combined type. First-line pharmacotherapy: stimulants (methylphenidate, amphetamines). Non-stimulant: atomoxetine.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_69",
    "q": "What is insomnia disorder?",
    "a": "Difficulty initiating/maintaining sleep ≥3 nights/week causing daytime impairment. First-line: CBT-I. Pharmacotherapy: melatonin receptor agonist (ramelteon), Z-drugs, doxepin.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_70",
    "q": "What is iron deficiency anemia?",
    "a": "Most common anemia worldwide. Cause: blood loss (women), malabsorption, poor diet. Labs: ↓ Hgb, ↓ MCV (microcytic), ↓ ferritin, ↑ TIBC. Treat: oral iron.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_71",
    "q": "What is vitamin B12 deficiency anemia?",
    "a": "Macrocytic (megaloblastic) anemia + neurological symptoms (subacute combined degeneration). Cause: pernicious anemia (anti-intrinsic factor Ab), malabsorption. Treat: B12 IM or high-dose oral.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_72",
    "q": "What is sickle cell disease?",
    "a": "Autosomal recessive HbS mutation → red cell sickling under hypoxia → hemolysis, vaso-occlusion. Painful crises, organ damage, stroke. Treat: hydroxyurea, transfusions, SCT.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_73",
    "q": "What is deep vein thrombosis — anticoagulation overview?",
    "a": "Initial: LMWH, fondaparinux, or DOAC. Long-term: DOAC (rivaroxaban, apixaban) or warfarin. Duration: 3 months for provoked; indefinite for unprovoked or high-risk.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_74",
    "q": "What is rheumatoid arthritis (RA)?",
    "a": "Autoimmune symmetric polyarthritis primarily affecting small joints. Positive RF and anti-CCP. Systemic: fatigue, nodules, vasculitis. Treat: DMARDs (methotrexate first-line) + biologics.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_75",
    "q": "What is osteoarthritis (OA)?",
    "a": "Degenerative joint disease — cartilage loss, bone changes. Weight-bearing joints: knees, hips. Non-pharmacologic: exercise, weight loss. Pharmacologic: acetaminophen, NSAIDs, intra-articular steroids.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_76",
    "q": "What is osteoporosis?",
    "a": "Low bone density → fracture risk. T-score ≤ -2.5. Risk: postmenopausal women, corticosteroids, age. Screen with DEXA. Treat: bisphosphonates, calcium + vitamin D.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_77",
    "q": "What is systemic lupus erythematosus (SLE)?",
    "a": "Multi-system autoimmune disease. Butterfly rash, arthritis, nephritis, serositis, positive ANA. Drug-induced lupus: hydralazine, procainamide, isoniazid.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_78",
    "q": "What is psoriasis?",
    "a": "Chronic autoimmune skin condition. Plaques: well-demarcated, silvery-scaled, erythematous, commonly on elbows/knees/scalp. Treat: topical steroids, vitamin D analogs; severe: biologics.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_79",
    "q": "What is atopic dermatitis (eczema)?",
    "a": "Chronic inflammatory skin disease with pruritic lesions. Associated with asthma, allergic rhinitis. Treat: emollients, topical steroids, topical calcineurin inhibitors, dupilumab (severe).",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_80",
    "q": "What is cellulitis?",
    "a": "Bacterial skin/soft tissue infection (non-purulent). Most common: Streptococcus pyogenes, S. aureus. Treatment: dicloxacillin or cephalexin; MRSA suspected: TMP-SMX or doxycycline.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_81",
    "q": "What are the hallmarks of cancer?",
    "a": "Sustained proliferative signaling, evading growth suppressors, resisting cell death, enabling replicative immortality, inducing angiogenesis, activating invasion/metastasis, avoiding immune destruction.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_82",
    "q": "Common chemotherapy side effects by category",
    "a": "Myelosuppression (neutropenia → infection risk), nausea/vomiting (5-HT3 antagonists for prevention), alopecia, mucositis, peripheral neuropathy, cardiotoxicity (anthracyclines).",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_83",
    "q": "What are the common hormone-driven cancers?",
    "a": "Breast cancer (ER+/PR+: tamoxifen or aromatase inhibitors), prostate cancer (androgen deprivation therapy: GnRH agonists + anti-androgens), endometrial cancer.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_84",
    "q": "Drug pharmacokinetics — 4 key processes (ADME)",
    "a": "Absorption: drug enters systemic circulation. Distribution: spreads to tissues (affected by protein binding, lipophilicity). Metabolism: liver (CYP450). Excretion: kidney (GFR, tubular secretion).",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_85",
    "q": "What is the therapeutic index (TI)?",
    "a": "TI = TD50/ED50. Narrow TI drugs require close monitoring (lithium, warfarin, digoxin, phenytoin, aminoglycosides). Small dose changes can cause toxicity or subtherapeutic effect.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_86",
    "q": "What is cytochrome P450 (CYP450)?",
    "a": "Major drug-metabolizing enzyme system in liver. CYP3A4: metabolizes ~50% of drugs. Inducers ↓ drug levels (rifampin, carbamazepine). Inhibitors ↑ drug levels (azole antifungals, macrolides).",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_87",
    "q": "What is a drug-drug interaction?",
    "a": "Pharmacokinetic: one drug alters absorption, distribution, metabolism, or excretion of another. Pharmacodynamic: additive, synergistic, or antagonistic effects on target.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_88",
    "q": "What is nephrotoxicity from drugs?",
    "a": "Drug-induced kidney injury. Common culprits: NSAIDs (afferent arteriole constriction), aminoglycosides (proximal tubule damage), contrast dye, vancomycin. Monitor SCr/BUN.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_89",
    "q": "What is QT prolongation?",
    "a": "Delayed ventricular repolarization on ECG. Risk: torsades de pointes (potentially fatal arrhythmia). Common culprits: fluoroquinolones, macrolides, antipsychotics, methadone, antiarrhythmics.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_90",
    "q": "What are anticholinergic side effects?",
    "a": "Urinary retention, constipation, dry mouth, blurred vision, confusion/delirium, tachycardia. Anticholinergic drugs: diphenhydramine, tricyclics, oxybutynin, benztropine, some antipsychotics.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_91",
    "q": "What is serotonin syndrome?",
    "a": "Excess serotonergic activity. Triad: mental status changes, autonomic instability (hyperthermia, tachycardia), neuromuscular abnormalities (clonus, hyperreflexia). Causes: SSRIs + MAOIs, linezolid, tramadol.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_92",
    "q": "What is Stevens-Johnson syndrome (SJS)?",
    "a": "Severe cutaneous drug reaction with mucosal involvement, epidermal detachment <10% BSA. TEN: >30% BSA. Common culprits: allopurinol, anticonvulsants (carbamazepine, lamotrigine), sulfonamides.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_93",
    "q": "What is pharmacogenomics?",
    "a": "Study of genetic variation affecting drug response. Example: CYP2D6 poor metabolizers → ↑ codeine toxicity. HLA-B*5701 → abacavir hypersensitivity. TPMT testing before thiopurines.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_94",
    "q": "What is the minimum inhibitory concentration (MIC)?",
    "a": "Lowest antibiotic concentration that inhibits visible bacterial growth. Used to determine susceptibility: susceptible (S), intermediate (I), or resistant (R). PK/PD determines dosing strategy.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_95",
    "q": "Time-dependent vs. concentration-dependent antibiotics",
    "a": "Time-dependent (β-lactams): efficacy from time above MIC → frequent dosing or extended infusion. Concentration-dependent (aminoglycosides, fluoroquinolones): efficacy from Cmax/MIC → once-daily dosing.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_96",
    "q": "What are beta-lactam antibiotics?",
    "a": "Penicillins, cephalosporins, carbapenems, monobactams. Inhibit cell wall synthesis (PBP binding). Beta-lactamases inactivate them. Combination with beta-lactamase inhibitors (clavulanate, tazobactam) overcomes.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_97",
    "q": "What is the renin-angiotensin-aldosterone system (RAAS)?",
    "a": "Kidney releases renin → cleaves angiotensinogen to Ang I → ACE converts to Ang II → vasoconstriction + aldosterone release → Na/water retention. ACE inhibitors and ARBs block this.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_98",
    "q": "What is the difference between ACE inhibitors and ARBs?",
    "a": "ACE inhibitors: block conversion of Ang I → Ang II; cause dry cough (bradykinin). ARBs: block Ang II at AT1 receptor; no cough. Both avoid in pregnancy (teratogenic).",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_99",
    "q": "What is HbA1c and its clinical significance?",
    "a": "Glycated hemoglobin reflecting average blood glucose over 2-3 months. Target <7% for most diabetics. Higher targets (7.5-8%) for elderly or those with frequent hypoglycemia.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_100",
    "q": "What is the insulin sliding scale concept?",
    "a": "Reactive insulin dosing based on current blood glucose. Replaced by basal-bolus regimen: basal insulin (glargine/detemir) 24h + rapid-acting (lispro/aspart) with meals + correction doses.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_101",
    "q": "What is opioid-induced constipation (OIC)?",
    "a": "Opioids bind μ-receptors in GI tract → reduced motility, increased sphincter tone → constipation. Unlike other opioid side effects, tolerance does NOT develop. Treat: stimulant laxatives (senna).",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_102",
    "q": "What is naloxone and how does it work?",
    "a": "Opioid antagonist — competitively blocks μ, κ, and δ receptors. Reverses opioid overdose (respiratory depression). Short half-life → may need repeat doses. Available as Narcan nasal spray.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_103",
    "q": "What is drug tolerance?",
    "a": "Reduced response to a drug after repeated exposure, requiring higher doses. Pharmacokinetic tolerance: increased metabolism. Pharmacodynamic tolerance: receptor downregulation or desensitization.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_104",
    "q": "What is physical dependence vs. addiction?",
    "a": "Physical dependence: physiological adaptation requiring drug to avoid withdrawal. Addiction: compulsive drug-seeking behavior despite harm. Physical dependence can occur WITHOUT addiction.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_105",
    "q": "What is the role of prostaglandins in inflammation?",
    "a": "COX-1 and COX-2 convert arachidonic acid to prostaglandins → pain, fever, inflammation. NSAIDs inhibit COX → anti-inflammatory, analgesic, antipyretic. COX-1 inhibition → GI and platelet effects.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_106",
    "q": "What is the mechanism of statin drugs?",
    "a": "HMG-CoA reductase inhibitors → ↓ cholesterol synthesis in liver → upregulation of LDL receptors → ↓ LDL. Also pleiotropic effects: anti-inflammatory, plaque stabilization.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_107",
    "q": "What is warfarin's mechanism and monitoring?",
    "a": "Vitamin K antagonist → inhibits clotting factors II, VII, IX, X (and protein C, S). Monitored with INR (target 2-3 for most indications). Many drug and food interactions (vitamin K-rich foods).",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_108",
    "q": "What are direct oral anticoagulants (DOACs)?",
    "a": "Apixaban/rivaroxaban: Factor Xa inhibitors. Dabigatran: direct thrombin inhibitor. Advantages over warfarin: predictable dosing, fewer interactions, no INR monitoring. Reversal agents available.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_109",
    "q": "What is the mechanism of loop diuretics?",
    "a": "Block Na-K-2Cl cotransporter in thick ascending loop of Henle → prevent Na/water reabsorption → diuresis. Examples: furosemide, bumetanide, torsemide. Also lose K⁺ and Mg²⁺.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_110",
    "q": "What is the mechanism of thiazide diuretics?",
    "a": "Block Na-Cl cotransporter in distal convoluted tubule. Less potent than loop diuretics. Examples: hydrochlorothiazide, chlorthalidone. First-line for HTN; also for hypercalciuria (calcium stones).",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_111",
    "q": "What is hypokalemia?",
    "a": "Serum K⁺ <3.5 mEq/L. Causes: loop/thiazide diuretics, vomiting, diarrhea, hyperaldosteronism. Symptoms: muscle weakness, cramps, arrhythmias (↑ digoxin toxicity risk). Treat: KCl supplementation.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_112",
    "q": "What is digoxin toxicity?",
    "a": "Narrow TI. Toxicity: nausea, visual disturbances (yellow-green halos), bradycardia, heart block, arrhythmias. Worsened by hypokalemia, renal failure, hypomagnesemia. Treat: digoxin-immune Fab.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_113",
    "q": "What are bisphosphonate counseling key points?",
    "a": "For osteoporosis: take on empty stomach with 8oz water, remain upright ≥30 min, avoid food/meds for 30 min. Adverse effects: esophageal irritation, osteonecrosis of jaw (rare), atypical femur fractures.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_114",
    "q": "What is proton pump inhibitor (PPI) long-term concerns?",
    "a": "Chronic use risks: C. diff infection, community-acquired pneumonia, Mg²⁺ deficiency, osteoporosis/fractures, B12 deficiency, chronic kidney disease. Use lowest effective dose.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_115",
    "q": "What is the opioid conversion concept?",
    "a": "Converting between opioids using morphine milligram equivalents (MME). Example: 30 mg oral morphine = 20 mg oral oxycodone = 7.5mg oral hydromorphone. Reduce 25-50% for incomplete cross-tolerance.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_116",
    "q": "What is benzodiazepine withdrawal?",
    "a": "Life-threatening: seizures, delirium tremens. Never abrupt discontinuation. Symptoms: anxiety, insomnia, tremor, diaphoresis. Long-acting benzo (chlordiazepoxide, diazepam) tapering for alcohol withdrawal.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_117",
    "q": "What is the mechanism of beta-blockers?",
    "a": "Competitively block β1 (cardiac: ↓ HR, contractility), β2 (bronchospasm in asthmatics), or both. Uses: HTN, heart failure, angina, arrhythmias, post-MI, migraine prophylaxis, tremor, anxiety.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_118",
    "q": "What is the mechanism of calcium channel blockers (CCBs)?",
    "a": "Dihydropyridines (amlodipine, nifedipine): selective vascular smooth muscle → vasodilation → ↓ BP. Non-DHPs (diltiazem, verapamil): also cardiac → ↓ HR + contractility.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_119",
    "q": "What is pharmacovigilance?",
    "a": "Ongoing monitoring of medication safety after approval (post-marketing surveillance). Pharmacists report adverse events via MedWatch (FDA). Identifies rare/delayed adverse effects not seen in trials.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_120",
    "q": "What is a boxed (black box) warning?",
    "a": "FDA's strongest drug warning in prescribing information. Indicates serious or life-threatening risks. Example: fluoroquinolones → tendonitis/tendon rupture; SSRIs → suicidality in pediatric patients.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_121",
    "q": "What is pharmacokinetics in special populations?",
    "a": "Elderly: ↓ renal clearance, ↑ fat, ↓ albumin → drug accumulation. Pediatrics: different metabolism (immature CYP). Pregnancy: ↑ renal clearance, ↑ plasma volume. Obese: ↑ Vd for lipophilic drugs.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_122",
    "q": "What is the mechanism of ACE inhibitors in heart failure?",
    "a": "Block ACE → ↓ Ang II → vasodilation (↓ afterload), ↓ aldosterone → ↓ preload. Prevent ventricular remodeling, reducing hospitalizations and mortality in HFrEF.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_123",
    "q": "What is cardiogenic shock?",
    "a": "Severe heart failure causing ↓ cardiac output → end-organ hypoperfusion despite adequate volume. Most common cause: massive MI. Treat: inotropes, vasopressors, mechanical support (IABP), revascularization.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_124",
    "q": "What is anaphylaxis?",
    "a": "Severe, life-threatening systemic allergic reaction. Triggers: drugs (penicillin), food (peanuts), insect venom. Symptoms: urticaria, angioedema, bronchospasm, hypotension. Treatment: epinephrine IM immediately.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_125",
    "q": "What is drug-induced lupus (DIL)?",
    "a": "Lupus-like syndrome from drugs: hydralazine (most common), procainamide, isoniazid, minocycline, TNF-α inhibitors. Anti-histone antibodies. Resolves on discontinuation.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_126",
    "q": "What are ADRs (adverse drug reactions)?",
    "a": "Type A (predictable): dose-dependent, extension of pharmacologic effect (e.g., bleeding from anticoagulants). Type B (unpredictable): idiosyncratic, immune-mediated (allergies, SJS). Type C/D/E also described.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_127",
    "q": "What is polypharmacy and its risks?",
    "a": "Use of ≥5 medications simultaneously. Risks: drug-drug interactions, additive ADRs, non-adherence, falls (especially in elderly), inappropriate prescribing. Regular medication reconciliation essential.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_128",
    "q": "What is the Beers Criteria?",
    "a": "AGS list of medications potentially inappropriate in adults ≥65 years. Includes benzodiazepines, diphenhydramine, NSAIDs, tricyclics, muscle relaxants. Associated with falls, delirium, ADRs.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_129",
    "q": "What is medication adherence?",
    "a": "Extent to which patient takes medication as prescribed. Factors: side effects, cost, complexity, beliefs, forgetfulness. Poor adherence is major cause of treatment failure. Pharmacist counseling improves adherence.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_130",
    "q": "What is immunotherapy in cancer?",
    "a": "Harnessing immune system to fight cancer. Checkpoint inhibitors (PD-1/PD-L1, CTLA-4 blockers: pembrolizumab, nivolumab) remove 'brakes' on T-cells. Immune-related adverse events (irAEs): colitis, pneumonitis, endocrinopathies.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_131",
    "q": "What is targeted therapy in cancer?",
    "a": "Drugs targeting specific cancer mutations (e.g., imatinib for BCR-ABL in CML, trastuzumab for HER2+ breast cancer, erlotinib for EGFR-mutant NSCLC). More selective than chemotherapy.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_132",
    "q": "What is the difference between bacterial and viral infections?",
    "a": "Bacteria: prokaryotes, treated with antibiotics. Viruses: intracellular parasites using host machinery, treated with antivirals. Antibiotics do NOT treat viral infections. Misuse contributes to antimicrobial resistance.",
    "nextReview": 0
  },
  {
    "id": "diseases_fc_133",
    "q": "What is antimicrobial stewardship?",
    "a": "Program to optimize antibiotic use, reduce resistance, and minimize adverse effects. Key: right antibiotic, dose, route, duration. De-escalate based on culture; avoid broad-spectrum when narrow-spectrum appropriate.",
    "nextReview": 0
  }
]
}];


const diseasesExams$1 = [{
  id: "builtin_exam_diseases",
  title: "Medical Sciences Exam",
  icon: "CheckSquare",
  color: "#06b6d4",
  isBuiltIn: true,
  isBuiltin: true,
  questions: [
  {
    "id": "diseases_ex_0",
    "q": "What is hypertension?",
    "options": [
      "Persistently elevated blood pressure ≥130/80 mmHg. Primary (essential) has no identifiable cause; secondary has an underlying cause (renal disease, hyperaldosteronism, etc.).",
      "Inability of the heart to pump sufficient blood to meet metabolic needs. Classified by ejection fraction: HFrEF (<40%) or HFpEF (≥50%).",
      "Chest pain/pressure from myocardial ischemia due to reduced coronary blood flow. Stable: predictable with exertion. Unstable: at rest, more dangerous.",
      "Chronic inflammatory airway disease with reversible bronchoconstriction. Triggers: allergens, exercise, cold air, infections. Characterized by wheezing, SOB, cough."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_1",
    "q": "First-line medications for hypertension",
    "options": [
      "Thiazide diuretics, ACE inhibitors, ARBs, or calcium channel blockers. In diabetes or CKD: ACE inhibitors or ARBs preferred.",
      "Elevated blood lipids (LDL, triglycerides, total cholesterol) or low HDL. Major risk factor for atherosclerosis and cardiovascular disease.",
      "Autoimmune destruction of pancreatic β-cells → absolute insulin deficiency. Requires lifelong insulin therapy. DKA is life-threatening complication.",
      "Excess cortisol. Causes: exogenous corticosteroids (most common), pituitary adenoma (Cushing's disease), adrenal tumor. Features: moon face, buffalo hump, striae."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_2",
    "q": "What is heart failure?",
    "options": [
      "Inability of the heart to pump sufficient blood to meet metabolic needs. Classified by ejection fraction: HFrEF (<40%) or HFpEF (≥50%).",
      "Infection by Mycobacterium tuberculosis. Latent TB: no symptoms, not contagious. Active TB: fever, night sweats, bloody cough. Treated with RIPE regimen.",
      "Focal: lamotrigine, levetiracetam, carbamazepine. Generalized tonic-clonic: valproate (caution in women), levetiracetam, lamotrigine. Absence: ethosuximide.",
      "Autoimmune demyelination of CNS. Relapsing-remitting most common. Symptoms: visual disturbances (optic neuritis), weakness, fatigue, spasticity, bladder dysfunction."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_3",
    "q": "Mainstay treatment for HFrEF",
    "options": [
      "ACE inhibitor (or ARNI), beta-blocker, MRA (spironolactone), and SGLT2 inhibitor. Loop diuretics for symptom relief.",
      "Excess cortisol. Causes: exogenous corticosteroids (most common), pituitary adenoma (Cushing's disease), adrenal tumor. Features: moon face, buffalo hump, striae.",
      "Ulcers in stomach (gastric) or duodenum. Most common causes: H. pylori infection, NSAID use. Symptoms: epigastric pain, nausea, GI bleeding.",
      "Massive proteinuria (>3.5g/day), hypoalbuminemia, edema, hyperlipidemia. Causes: minimal change disease (children), focal segmental glomerulosclerosis (adults)."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_4",
    "q": "What is atrial fibrillation?",
    "options": [
      "Irregular, often rapid heart rhythm from chaotic atrial electrical activity. Causes: HTN, valve disease, HF, thyrotoxicosis. Risk: stroke.",
      "Levodopa/carbidopa = gold standard. Also: dopamine agonists (pramipexole, ropinirole), MAO-B inhibitors (rasagiline, selegiline), COMT inhibitors.",
      "Bacterial infection of urinary tract. Cystitis (lower): dysuria, frequency, urgency. Pyelonephritis (upper): fever, flank pain, systemic illness. Most common: E. coli.",
      "Mood disorder with episodes of mania/hypomania alternating with depression. Bipolar I: full mania. Bipolar II: hypomania + depression. Risk: suicide especially during depression."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_5",
    "q": "CHA₂DS₂-VASc score",
    "options": [
      "Stroke risk calculator in AFib. Score ≥2 in men or ≥3 in women → anticoagulation recommended (warfarin or DOAC).",
      "Gastroesophageal reflux disease — acid reflux causing heartburn, regurgitation. Complications: esophagitis, Barrett's esophagus, adenocarcinoma.",
      "Selectively inhibit serotonin reuptake transporter (SERT) → ↑ synaptic serotonin. Examples: fluoxetine, sertraline, escitalopram. First-line for depression and anxiety.",
      "Degenerative joint disease — cartilage loss, bone changes. Weight-bearing joints: knees, hips. Non-pharmacologic: exercise, weight loss. Pharmacologic: acetaminophen, NSAIDs, intra-articular steroids."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_6",
    "q": "What is angina pectoris?",
    "options": [
      "Chest pain/pressure from myocardial ischemia due to reduced coronary blood flow. Stable: predictable with exertion. Unstable: at rest, more dangerous.",
      "Functional GI disorder with abdominal pain + altered bowel habits (IBS-C, IBS-D, or mixed) without structural abnormality. Diagnosis of exclusion.",
      "Autosomal recessive HbS mutation → red cell sickling under hypoxia → hemolysis, vaso-occlusion. Painful crises, organ damage, stroke. Treat: hydroxyurea, transfusions, SCT.",
      "Drug-induced kidney injury. Common culprits: NSAIDs (afferent arteriole constriction), aminoglycosides (proximal tubule damage), contrast dye, vancomycin. Monitor SCr/BUN."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_7",
    "q": "Pathophysiology of acute MI",
    "options": [
      "Rupture of atherosclerotic plaque → thrombus formation → coronary artery occlusion → myocardial necrosis. STEMI: complete occlusion. NSTEMI: partial.",
      "Uncomplicated cystitis: nitrofurantoin or TMP-SMX × 3 days. Pyelonephritis: fluoroquinolone × 7-14 days or IV ceftriaxone. Consider culture/sensitivity.",
      "Breast cancer (ER+/PR+: tamoxifen or aromatase inhibitors), prostate cancer (androgen deprivation therapy: GnRH agonists + anti-androgens), endometrial cancer.",
      "Opioids bind μ-receptors in GI tract → reduced motility, increased sphincter tone → constipation. Unlike other opioid side effects, tolerance does NOT develop. Treat: stimulant laxatives (senna)."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_8",
    "q": "What is deep vein thrombosis (DVT)?",
    "options": [
      "Blood clot in deep vein (usually leg). Risk: Virchow's triad — stasis, endothelial injury, hypercoagulability. Complication: pulmonary embolism.",
      "Viral liver infection (HBV). Acute: usually resolves. Chronic (HBsAg >6 months): cirrhosis, HCC risk. Vaccine-preventable. Treat: tenofovir or entecavir.",
      "Lowest antibiotic concentration that inhibits visible bacterial growth. Used to determine susceptibility: susceptible (S), intermediate (I), or resistant (R). PK/PD determines dosing strategy.",
      "Chronic use risks: C. diff infection, community-acquired pneumonia, Mg²⁺ deficiency, osteoporosis/fractures, B12 deficiency, chronic kidney disease. Use lowest effective dose."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_9",
    "q": "What is hyperlipidemia?",
    "options": [
      "Elevated blood lipids (LDL, triglycerides, total cholesterol) or low HDL. Major risk factor for atherosclerosis and cardiovascular disease.",
      "FGA (typical): haloperidol, chlorpromazine — high EPS risk. SGA (atypical): risperidone, olanzapine, quetiapine — lower EPS but metabolic side effects.",
      "COX-1 and COX-2 convert arachidonic acid to prostaglandins → pain, fever, inflammation. NSAIDs inhibit COX → anti-inflammatory, analgesic, antipyretic. COX-1 inhibition → GI and platelet effects.",
      "Use of ≥5 medications simultaneously. Risks: drug-drug interactions, additive ADRs, non-adherence, falls (especially in elderly), inappropriate prescribing. Regular medication reconciliation essential."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_10",
    "q": "What is asthma?",
    "options": [
      "Chronic inflammatory airway disease with reversible bronchoconstriction. Triggers: allergens, exercise, cold air, infections. Characterized by wheezing, SOB, cough.",
      "Autosomal recessive HbS mutation → red cell sickling under hypoxia → hemolysis, vaso-occlusion. Painful crises, organ damage, stroke. Treat: hydroxyurea, transfusions, SCT.",
      "Life-threatening: seizures, delirium tremens. Never abrupt discontinuation. Symptoms: anxiety, insomnia, tremor, diaphoresis. Long-acting benzo (chlordiazepoxide, diazepam) tapering for alcohol withdrawal.",
      "Chest pain/pressure from myocardial ischemia due to reduced coronary blood flow. Stable: predictable with exertion. Unstable: at rest, more dangerous."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_11",
    "q": "Asthma controller vs. reliever medications",
    "options": [
      "Controllers: inhaled corticosteroids (ICS), LABAs. Reliever (rescue): SABAs (albuterol). Severe: oral steroids, biologics (omalizumab).",
      "Chronic inflammatory skin disease with pruritic lesions. Associated with asthma, allergic rhinitis. Treat: emollients, topical steroids, topical calcineurin inhibitors, dupilumab (severe).",
      "Use of ≥5 medications simultaneously. Risks: drug-drug interactions, additive ADRs, non-adherence, falls (especially in elderly), inappropriate prescribing. Regular medication reconciliation essential.",
      "Complication of T1DM (or T2DM). Absolute insulin deficiency → lipolysis → ketone production → anion gap metabolic acidosis. Treat: IV fluids, insulin, K⁺ replacement."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_12",
    "q": "What is COPD?",
    "options": [
      "Progressive, irreversible airflow obstruction from emphysema and/or chronic bronchitis. Caused primarily by smoking. FEV1/FVC <0.7 on spirometry.",
      "Major drug-metabolizing enzyme system in liver. CYP3A4: metabolizes ~50% of drugs. Inducers ↓ drug levels (rifampin, carbamazepine). Inhibitors ↑ drug levels (azole antifungals, macrolides).",
      "Irregular, often rapid heart rhythm from chaotic atrial electrical activity. Causes: HTN, valve disease, HF, thyrotoxicosis. Risk: stroke.",
      "Ischemic (87%): clot blocks brain artery → infarction. Hemorrhagic: bleeding into brain. Time-sensitive: 'time is brain'. IV tPA within 4.5h for ischemic."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_13",
    "q": "COPD pharmacotherapy stepwise approach",
    "options": [
      "SABA/SAMA PRN → LAMA (tiotropium) → LAMA+LABA → LAMA+LABA+ICS. Roflumilast for frequent exacerbators.",
      "Study of genetic variation affecting drug response. Example: CYP2D6 poor metabolizers → ↑ codeine toxicity. HLA-B*5701 → abacavir hypersensitivity. TPMT testing before thiopurines.",
      "Infection by Mycobacterium tuberculosis. Latent TB: no symptoms, not contagious. Active TB: fever, night sweats, bloody cough. Treated with RIPE regimen.",
      "Progressive loss of kidney function. Classified by GFR (stages 1-5). Causes: DM, HTN most common. Complications: anemia, hyperkalemia, metabolic acidosis, bone disease."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_14",
    "q": "What is pneumonia?",
    "options": [
      "Infection of lung parenchyma (alveoli). Community-acquired (CAP): Streptococcus pneumoniae most common. HAP/VAP: gram-negatives and MRSA.",
      "Reactive insulin dosing based on current blood glucose. Replaced by basal-bolus regimen: basal insulin (glargine/detemir) 24h + rapid-acting (lispro/aspart) with meals + correction doses.",
      "Recurrent, unprovoked seizures from abnormal neuronal activity. Focal seizures: one brain area. Generalized: both hemispheres (tonic-clonic, absence).",
      "Bloodborne RNA virus (HCV). Most become chronic. Curable with direct-acting antivirals (DAAs): sofosbuvir/velpatasvir (Epclusa) × 12 weeks, >95% cure rates."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_15",
    "q": "What is pulmonary embolism (PE)?",
    "options": [
      "Blood clot in pulmonary artery, usually from DVT. Symptoms: sudden dyspnea, plupeuritic chest pain, tachycardia. Life-threatening emergency.",
      "Vitamin K antagonist → inhibits clotting factors II, VII, IX, X (and protein C, S). Monitored with INR (target 2-3 for most indications). Many drug and food interactions (vitamin K-rich foods).",
      "Lifestyle changes → antacids PRN → H2 blockers (famotidine) → PPIs (omeprazole, pantoprazole). PPIs most effective; use lowest effective dose.",
      "Autosomal recessive HbS mutation → red cell sickling under hypoxia → hemolysis, vaso-occlusion. Painful crises, organ damage, stroke. Treat: hydroxyurea, transfusions, SCT."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_16",
    "q": "What is tuberculosis (TB)?",
    "options": [
      "Infection by Mycobacterium tuberculosis. Latent TB: no symptoms, not contagious. Active TB: fever, night sweats, bloody cough. Treated with RIPE regimen.",
      "Chronic use risks: C. diff infection, community-acquired pneumonia, Mg²⁺ deficiency, osteoporosis/fractures, B12 deficiency, chronic kidney disease. Use lowest effective dose.",
      "Massive proteinuria (>3.5g/day), hypoalbuminemia, edema, hyperlipidemia. Causes: minimal change disease (children), focal segmental glomerulosclerosis (adults).",
      "TI = TD50/ED50. Narrow TI drugs require close monitoring (lithium, warfarin, digoxin, phenytoin, aminoglycosides). Small dose changes can cause toxicity or subtherapeutic effect."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_17",
    "q": "What is type 1 diabetes mellitus?",
    "options": [
      "Autoimmune destruction of pancreatic β-cells → absolute insulin deficiency. Requires lifelong insulin therapy. DKA is life-threatening complication.",
      "Elderly: ↓ renal clearance, ↑ fat, ↓ albumin → drug accumulation. Pediatrics: different metabolism (immature CYP). Pregnancy: ↑ renal clearance, ↑ plasma volume. Obese: ↑ Vd for lipophilic drugs.",
      "Persistent depressed mood or anhedonia × ≥2 weeks + ≥4 somatic symptoms. Treated with SSRIs/SNRIs first-line. Severe: add therapy, consider TMS or ECT.",
      "ACE inhibitors: block conversion of Ang I → Ang II; cause dry cough (bradykinin). ARBs: block Ang II at AT1 receptor; no cough. Both avoid in pregnancy (teratogenic)."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_18",
    "q": "What is type 2 diabetes mellitus?",
    "options": [
      "Insulin resistance + relative insulin deficiency. Most common form. Risk factors: obesity, inactivity, family history. HbA1c target typically <7%.",
      "AGS list of medications potentially inappropriate in adults ≥65 years. Includes benzodiazepines, diphenhydramine, NSAIDs, tricyclics, muscle relaxants. Associated with falls, delirium, ADRs.",
      "Macrocytic (megaloblastic) anemia + neurological symptoms (subacute combined degeneration). Cause: pernicious anemia (anti-intrinsic factor Ab), malabsorption. Treat: B12 IM or high-dose oral.",
      "Serum K⁺ <3.5 mEq/L. Causes: loop/thiazide diuretics, vomiting, diarrhea, hyperaldosteronism. Symptoms: muscle weakness, cramps, arrhythmias (↑ digoxin toxicity risk). Treat: KCl supplementation."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_19",
    "q": "Mechanism of action of metformin",
    "options": [
      "Decreases hepatic glucose production (inhibits gluconeogenesis), improves insulin sensitivity. First-line for T2DM. Does not cause hypoglycemia alone.",
      "Thiazide diuretics, ACE inhibitors, ARBs, or calcium channel blockers. In diabetes or CKD: ACE inhibitors or ARBs preferred.",
      "Myelosuppression (neutropenia → infection risk), nausea/vomiting (5-HT3 antagonists for prevention), alopecia, mucositis, peripheral neuropathy, cardiotoxicity (anthracyclines).",
      "Severe, life-threatening systemic allergic reaction. Triggers: drugs (penicillin), food (peanuts), insect venom. Symptoms: urticaria, angioedema, bronchospasm, hypotension. Treatment: epinephrine IM immediately."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_20",
    "q": "What is diabetic ketoacidosis (DKA)?",
    "options": [
      "Complication of T1DM (or T2DM). Absolute insulin deficiency → lipolysis → ketone production → anion gap metabolic acidosis. Treat: IV fluids, insulin, K⁺ replacement.",
      "Blood clot in deep vein (usually leg). Risk: Virchow's triad — stasis, endothelial injury, hypercoagulability. Complication: pulmonary embolism.",
      "Study of genetic variation affecting drug response. Example: CYP2D6 poor metabolizers → ↑ codeine toxicity. HLA-B*5701 → abacavir hypersensitivity. TPMT testing before thiopurines.",
      "ACE inhibitor (or ARNI), beta-blocker, MRA (spironolactone), and SGLT2 inhibitor. Loop diuretics for symptom relief."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_21",
    "q": "What is hyperthyroidism?",
    "options": [
      "Excess thyroid hormone. Causes: Graves' disease (most common), toxic nodule, thyroiditis. Symptoms: tachycardia, weight loss, heat intolerance, tremor.",
      "Blood clot in pulmonary artery, usually from DVT. Symptoms: sudden dyspnea, plupeuritic chest pain, tachycardia. Life-threatening emergency.",
      "Physical dependence: physiological adaptation requiring drug to avoid withdrawal. Addiction: compulsive drug-seeking behavior despite harm. Physical dependence can occur WITHOUT addiction.",
      "Infection by Mycobacterium tuberculosis. Latent TB: no symptoms, not contagious. Active TB: fever, night sweats, bloody cough. Treated with RIPE regimen."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_22",
    "q": "What is hypothyroidism?",
    "options": [
      "Insufficient thyroid hormone. Most common cause: Hashimoto's thyroiditis. Symptoms: fatigue, weight gain, cold intolerance, bradycardia, constipation.",
      "Excess cortisol. Causes: exogenous corticosteroids (most common), pituitary adenoma (Cushing's disease), adrenal tumor. Features: moon face, buffalo hump, striae.",
      "Converting between opioids using morphine milligram equivalents (MME). Example: 30 mg oral morphine = 20 mg oral oxycodone = 7.5mg oral hydromorphone. Reduce 25-50% for incomplete cross-tolerance.",
      "Levodopa/carbidopa = gold standard. Also: dopamine agonists (pramipexole, ropinirole), MAO-B inhibitors (rasagiline, selegiline), COMT inhibitors."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_23",
    "q": "What is Cushing's syndrome?",
    "options": [
      "Excess cortisol. Causes: exogenous corticosteroids (most common), pituitary adenoma (Cushing's disease), adrenal tumor. Features: moon face, buffalo hump, striae.",
      "Levodopa/carbidopa = gold standard. Also: dopamine agonists (pramipexole, ropinirole), MAO-B inhibitors (rasagiline, selegiline), COMT inhibitors.",
      "Type A (predictable): dose-dependent, extension of pharmacologic effect (e.g., bleeding from anticoagulants). Type B (unpredictable): idiosyncratic, immune-mediated (allergies, SJS). Type C/D/E also described.",
      "Mild-moderate: mesalamine (UC only), budesonide. Moderate-severe: corticosteroids, azathioprine/6-MP, biologics (TNF-α inhibitors: infliximab, adalimumab)."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_24",
    "q": "What is Addison's disease?",
    "options": [
      "Primary adrenal insufficiency — destruction of adrenal cortex → deficiency of cortisol and aldosterone. Crisis: hypotension, hyponatremia, hyperkalemia.",
      "Gastroesophageal reflux disease — acid reflux causing heartburn, regurgitation. Complications: esophagitis, Barrett's esophagus, adenocarcinoma.",
      "ACE inhibitor (or ARNI), beta-blocker, MRA (spironolactone), and SGLT2 inhibitor. Loop diuretics for symptom relief.",
      "HIV destroys CD4+ T-cells → immunodeficiency → AIDS (CD4 <200/μL). Transmitted via blood, sex, mother-to-child. Treated with ART (antiretroviral therapy)."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_25",
    "q": "What is gout?",
    "options": [
      "Monosodium urate crystal deposition in joints from hyperuricemia. Acute: extreme joint pain (great toe most common). Chronic: tophi, kidney stones.",
      "Functional GI disorder with abdominal pain + altered bowel habits (IBS-C, IBS-D, or mixed) without structural abnormality. Diagnosis of exclusion.",
      "Infection of lung parenchyma (alveoli). Community-acquired (CAP): Streptococcus pneumoniae most common. HAP/VAP: gram-negatives and MRSA.",
      "Difficulty initiating/maintaining sleep ≥3 nights/week causing daytime impairment. First-line: CBT-I. Pharmacotherapy: melatonin receptor agonist (ramelteon), Z-drugs, doxepin."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_26",
    "q": "Acute gout treatment vs. urate-lowering therapy",
    "options": [
      "Acute: NSAIDs, colchicine, or corticosteroids. Chronic prevention: allopurinol or febuxostat (xanthine oxidase inhibitors). Start after acute attack resolves.",
      "Uncomplicated cystitis: nitrofurantoin or TMP-SMX × 3 days. Pyelonephritis: fluoroquinolone × 7-14 days or IV ceftriaxone. Consider culture/sensitivity.",
      "Monosodium urate crystal deposition in joints from hyperuricemia. Acute: extreme joint pain (great toe most common). Chronic: tophi, kidney stones.",
      "Myelosuppression (neutropenia → infection risk), nausea/vomiting (5-HT3 antagonists for prevention), alopecia, mucositis, peripheral neuropathy, cardiotoxicity (anthracyclines)."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_27",
    "q": "What is epilepsy?",
    "options": [
      "Recurrent, unprovoked seizures from abnormal neuronal activity. Focal seizures: one brain area. Generalized: both hemispheres (tonic-clonic, absence).",
      "Viral liver infection (HBV). Acute: usually resolves. Chronic (HBsAg >6 months): cirrhosis, HCC risk. Vaccine-preventable. Treat: tenofovir or entecavir.",
      "Gastroesophageal reflux disease — acid reflux causing heartburn, regurgitation. Complications: esophagitis, Barrett's esophagus, adenocarcinoma.",
      "Time-dependent (β-lactams): efficacy from time above MIC → frequent dosing or extended infusion. Concentration-dependent (aminoglycosides, fluoroquinolones): efficacy from Cmax/MIC → once-daily dosing."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_28",
    "q": "First-line anticonvulsants by seizure type",
    "options": [
      "Focal: lamotrigine, levetiracetam, carbamazepine. Generalized tonic-clonic: valproate (caution in women), levetiracetam, lamotrigine. Absence: ethosuximide.",
      "FGA (typical): haloperidol, chlorpromazine — high EPS risk. SGA (atypical): risperidone, olanzapine, quetiapine — lower EPS but metabolic side effects.",
      "Sudden ↓ in kidney function. Pre-renal (volume depletion, most common), intrinsic renal (ATN, nephritis), post-renal (obstruction). Diagnose by ↑ creatinine.",
      "Apixaban/rivaroxaban: Factor Xa inhibitors. Dabigatran: direct thrombin inhibitor. Advantages over warfarin: predictable dosing, fewer interactions, no INR monitoring. Reversal agents available."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_29",
    "q": "What is Parkinson's disease?",
    "options": [
      "Progressive dopamine neuron loss in substantia nigra. Cardinal features: bradykinesia, resting tremor, rigidity, postural instability. Non-motor: dementia, depression.",
      "Autosomal recessive HbS mutation → red cell sickling under hypoxia → hemolysis, vaso-occlusion. Painful crises, organ damage, stroke. Treat: hydroxyurea, transfusions, SCT.",
      "Bloodborne RNA virus (HCV). Most become chronic. Curable with direct-acting antivirals (DAAs): sofosbuvir/velpatasvir (Epclusa) × 12 weeks, >95% cure rates.",
      "Elderly: ↓ renal clearance, ↑ fat, ↓ albumin → drug accumulation. Pediatrics: different metabolism (immature CYP). Pregnancy: ↑ renal clearance, ↑ plasma volume. Obese: ↑ Vd for lipophilic drugs."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_30",
    "q": "Parkinson's disease pharmacotherapy",
    "options": [
      "Levodopa/carbidopa = gold standard. Also: dopamine agonists (pramipexole, ropinirole), MAO-B inhibitors (rasagiline, selegiline), COMT inhibitors.",
      "Chronic inflammatory skin disease with pruritic lesions. Associated with asthma, allergic rhinitis. Treat: emollients, topical steroids, topical calcineurin inhibitors, dupilumab (severe).",
      "Most common anemia worldwide. Cause: blood loss (women), malabsorption, poor diet. Labs: ↓ Hgb, ↓ MCV (microcytic), ↓ ferritin, ↑ TIBC. Treat: oral iron.",
      "Persistently elevated blood pressure ≥130/80 mmHg. Primary (essential) has no identifiable cause; secondary has an underlying cause (renal disease, hyperaldosteronism, etc.)."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_31",
    "q": "What is Alzheimer's disease?",
    "options": [
      "Most common dementia. Progressive neurodegeneration with amyloid plaques and neurofibrillary tangles. Symptoms: memory loss, confusion, personality changes.",
      "Major drug-metabolizing enzyme system in liver. CYP3A4: metabolizes ~50% of drugs. Inducers ↓ drug levels (rifampin, carbamazepine). Inhibitors ↑ drug levels (azole antifungals, macrolides).",
      "Sustained proliferative signaling, evading growth suppressors, resisting cell death, enabling replicative immortality, inducing angiogenesis, activating invasion/metastasis, avoiding immune destruction.",
      "SABA/SAMA PRN → LAMA (tiotropium) → LAMA+LABA → LAMA+LABA+ICS. Roflumilast for frequent exacerbators."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_32",
    "q": "Pharmacotherapy for Alzheimer's disease",
    "options": [
      "Mild-moderate: cholinesterase inhibitors (donepezil, rivastigmine, galantamine). Moderate-severe: memantine (NMDA antagonist). Lecanemab for early AD.",
      "Study of genetic variation affecting drug response. Example: CYP2D6 poor metabolizers → ↑ codeine toxicity. HLA-B*5701 → abacavir hypersensitivity. TPMT testing before thiopurines.",
      "Severe cutaneous drug reaction with mucosal involvement, epidermal detachment <10% BSA. TEN: >30% BSA. Common culprits: allopurinol, anticonvulsants (carbamazepine, lamotrigine), sulfonamides.",
      "Acute: NSAIDs, colchicine, or corticosteroids. Chronic prevention: allopurinol or febuxostat (xanthine oxidase inhibitors). Start after acute attack resolves."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_33",
    "q": "What is a stroke?",
    "options": [
      "Ischemic (87%): clot blocks brain artery → infarction. Hemorrhagic: bleeding into brain. Time-sensitive: 'time is brain'. IV tPA within 4.5h for ischemic.",
      "Reactive insulin dosing based on current blood glucose. Replaced by basal-bolus regimen: basal insulin (glargine/detemir) 24h + rapid-acting (lispro/aspart) with meals + correction doses.",
      "Reduced response to a drug after repeated exposure, requiring higher doses. Pharmacokinetic tolerance: increased metabolism. Pharmacodynamic tolerance: receptor downregulation or desensitization.",
      "Triple therapy: PPI + clarithromycin + amoxicillin × 14 days. Quadruple (if clarithromycin resistance): PPI + bismuth + metronidazole + tetracycline."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_34",
    "q": "What is migraine?",
    "options": [
      "Recurrent severe headache, often unilateral, with nausea/vomiting, photophobia. Triggered by stress, hormones, foods. Aura in ~25%.",
      "Vitamin K antagonist → inhibits clotting factors II, VII, IX, X (and protein C, S). Monitored with INR (target 2-3 for most indications). Many drug and food interactions (vitamin K-rich foods).",
      "Chronic use risks: C. diff infection, community-acquired pneumonia, Mg²⁺ deficiency, osteoporosis/fractures, B12 deficiency, chronic kidney disease. Use lowest effective dose.",
      "Hour-1: blood cultures → broad-spectrum antibiotics → 30 mL/kg IV crystalloid if hypotensive → vasopressors if needed → lactate measurement."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_35",
    "q": "Migraine acute vs. preventive treatment",
    "options": [
      "Acute: triptans (first-line), NSAIDs, anti-emetics. Preventive (≥4/mo): beta-blockers (propranolol), topiramate, valproate, amitriptyline, CGRP antagonists.",
      "Chronic use risks: C. diff infection, community-acquired pneumonia, Mg²⁺ deficiency, osteoporosis/fractures, B12 deficiency, chronic kidney disease. Use lowest effective dose.",
      "Lupus-like syndrome from drugs: hydralazine (most common), procainamide, isoniazid, minocycline, TNF-α inhibitors. Anti-histone antibodies. Resolves on discontinuation.",
      "Excessive, uncontrollable worry about multiple topics ≥6 months + physical symptoms (muscle tension, insomnia, fatigue). First-line: SSRIs, SNRIs, buspirone."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_36",
    "q": "What is multiple sclerosis (MS)?",
    "options": [
      "Autoimmune demyelination of CNS. Relapsing-remitting most common. Symptoms: visual disturbances (optic neuritis), weakness, fatigue, spasticity, bladder dysfunction.",
      "Elderly: ↓ renal clearance, ↑ fat, ↓ albumin → drug accumulation. Pediatrics: different metabolism (immature CYP). Pregnancy: ↑ renal clearance, ↑ plasma volume. Obese: ↑ Vd for lipophilic drugs.",
      "Inability of the heart to pump sufficient blood to meet metabolic needs. Classified by ejection fraction: HFrEF (<40%) or HFpEF (≥50%).",
      "Chronic inflammatory skin disease with pruritic lesions. Associated with asthma, allergic rhinitis. Treat: emollients, topical steroids, topical calcineurin inhibitors, dupilumab (severe)."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_37",
    "q": "What is GERD?",
    "options": [
      "Gastroesophageal reflux disease — acid reflux causing heartburn, regurgitation. Complications: esophagitis, Barrett's esophagus, adenocarcinoma.",
      "AGS list of medications potentially inappropriate in adults ≥65 years. Includes benzodiazepines, diphenhydramine, NSAIDs, tricyclics, muscle relaxants. Associated with falls, delirium, ADRs.",
      "SABA/SAMA PRN → LAMA (tiotropium) → LAMA+LABA → LAMA+LABA+ICS. Roflumilast for frequent exacerbators.",
      "Severe cutaneous drug reaction with mucosal involvement, epidermal detachment <10% BSA. TEN: >30% BSA. Common culprits: allopurinol, anticonvulsants (carbamazepine, lamotrigine), sulfonamides."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_38",
    "q": "GERD pharmacotherapy stepwise approach",
    "options": [
      "Lifestyle changes → antacids PRN → H2 blockers (famotidine) → PPIs (omeprazole, pantoprazole). PPIs most effective; use lowest effective dose.",
      "Thiazide diuretics, ACE inhibitors, ARBs, or calcium channel blockers. In diabetes or CKD: ACE inhibitors or ARBs preferred.",
      "Primary adrenal insufficiency — destruction of adrenal cortex → deficiency of cortisol and aldosterone. Crisis: hypotension, hyponatremia, hyperkalemia.",
      "COX-1 and COX-2 convert arachidonic acid to prostaglandins → pain, fever, inflammation. NSAIDs inhibit COX → anti-inflammatory, analgesic, antipyretic. COX-1 inhibition → GI and platelet effects."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_39",
    "q": "What is peptic ulcer disease (PUD)?",
    "options": [
      "Ulcers in stomach (gastric) or duodenum. Most common causes: H. pylori infection, NSAID use. Symptoms: epigastric pain, nausea, GI bleeding.",
      "Blood clot in deep vein (usually leg). Risk: Virchow's triad — stasis, endothelial injury, hypercoagulability. Complication: pulmonary embolism.",
      "Acute: triptans (first-line), NSAIDs, anti-emetics. Preventive (≥4/mo): beta-blockers (propranolol), topiramate, valproate, amitriptyline, CGRP antagonists.",
      "Dihydropyridines (amlodipine, nifedipine): selective vascular smooth muscle → vasodilation → ↓ BP. Non-DHPs (diltiazem, verapamil): also cardiac → ↓ HR + contractility."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_40",
    "q": "H. pylori eradication regimen",
    "options": [
      "Triple therapy: PPI + clarithromycin + amoxicillin × 14 days. Quadruple (if clarithromycin resistance): PPI + bismuth + metronidazole + tetracycline.",
      "Blood clot in pulmonary artery, usually from DVT. Symptoms: sudden dyspnea, plupeuritic chest pain, tachycardia. Life-threatening emergency.",
      "Renally cleared drugs accumulate → reduce dose or extend interval. Use eGFR to adjust. Avoid NSAIDs, contrast dye. Monitor metformin (hold if GFR<30), digoxin.",
      "Drugs targeting specific cancer mutations (e.g., imatinib for BCR-ABL in CML, trastuzumab for HER2+ breast cancer, erlotinib for EGFR-mutant NSCLC). More selective than chemotherapy."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_41",
    "q": "What is Crohn's disease?",
    "options": [
      "Transmural inflammation anywhere in GI tract (mouth to anus), most commonly terminal ileum. Skip lesions, cobblestone appearance, fistulas, granulomas.",
      "Insufficient thyroid hormone. Most common cause: Hashimoto's thyroiditis. Symptoms: fatigue, weight gain, cold intolerance, bradycardia, constipation.",
      "Viral liver infection (HBV). Acute: usually resolves. Chronic (HBsAg >6 months): cirrhosis, HCC risk. Vaccine-preventable. Treat: tenofovir or entecavir.",
      "Chronic inflammatory airway disease with reversible bronchoconstriction. Triggers: allergens, exercise, cold air, infections. Characterized by wheezing, SOB, cough."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_42",
    "q": "What is ulcerative colitis (UC)?",
    "options": [
      "Continuous mucosal inflammation of colon only, starting from rectum. Symptoms: bloody diarrhea, urgency. Complications: toxic megacolon, colon cancer.",
      "Progressive dopamine neuron loss in substantia nigra. Cardinal features: bradykinesia, resting tremor, rigidity, postural instability. Non-motor: dementia, depression.",
      "Difficulty initiating/maintaining sleep ≥3 nights/week causing daytime impairment. First-line: CBT-I. Pharmacotherapy: melatonin receptor agonist (ramelteon), Z-drugs, doxepin.",
      "Excess cortisol. Causes: exogenous corticosteroids (most common), pituitary adenoma (Cushing's disease), adrenal tumor. Features: moon face, buffalo hump, striae."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_43",
    "q": "IBD pharmacotherapy overview",
    "options": [
      "Mild-moderate: mesalamine (UC only), budesonide. Moderate-severe: corticosteroids, azathioprine/6-MP, biologics (TNF-α inhibitors: infliximab, adalimumab).",
      "Autoimmune demyelination of CNS. Relapsing-remitting most common. Symptoms: visual disturbances (optic neuritis), weakness, fatigue, spasticity, bladder dysfunction.",
      "Bacterial skin/soft tissue infection (non-purulent). Most common: Streptococcus pyogenes, S. aureus. Treatment: dicloxacillin or cephalexin; MRSA suspected: TMP-SMX or doxycycline.",
      "Lifestyle changes → antacids PRN → H2 blockers (famotidine) → PPIs (omeprazole, pantoprazole). PPIs most effective; use lowest effective dose."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_44",
    "q": "What is irritable bowel syndrome (IBS)?",
    "options": [
      "Functional GI disorder with abdominal pain + altered bowel habits (IBS-C, IBS-D, or mixed) without structural abnormality. Diagnosis of exclusion.",
      "Mild-moderate: mesalamine (UC only), budesonide. Moderate-severe: corticosteroids, azathioprine/6-MP, biologics (TNF-α inhibitors: infliximab, adalimumab).",
      "Excess serotonergic activity. Triad: mental status changes, autonomic instability (hyperthermia, tachycardia), neuromuscular abnormalities (clonus, hyperreflexia). Causes: SSRIs + MAOIs, linezolid, tramadol.",
      "Bacterial infection of urinary tract. Cystitis (lower): dysuria, frequency, urgency. Pyelonephritis (upper): fever, flank pain, systemic illness. Most common: E. coli."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_45",
    "q": "What is cirrhosis?",
    "options": [
      "End-stage liver fibrosis from chronic damage (alcohol, NAFLD, hepatitis B/C). Complications: portal hypertension, ascites, varices, hepatic encephalopathy, HCC.",
      "Uncomplicated cystitis: nitrofurantoin or TMP-SMX × 3 days. Pyelonephritis: fluoroquinolone × 7-14 days or IV ceftriaxone. Consider culture/sensitivity.",
      "Opioid antagonist — competitively blocks μ, κ, and δ receptors. Reverses opioid overdose (respiratory depression). Short half-life → may need repeat doses. Available as Narcan nasal spray.",
      "Mood stabilizers: lithium (evidence for suicide reduction), valproate, lamotrigine (bipolar depression). Atypical antipsychotics: quetiapine, olanzapine, aripiprazole."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_46",
    "q": "What is chronic kidney disease (CKD)?",
    "options": [
      "Progressive loss of kidney function. Classified by GFR (stages 1-5). Causes: DM, HTN most common. Complications: anemia, hyperkalemia, metabolic acidosis, bone disease.",
      "Viral liver infection (HBV). Acute: usually resolves. Chronic (HBsAg >6 months): cirrhosis, HCC risk. Vaccine-preventable. Treat: tenofovir or entecavir.",
      "For osteoporosis: take on empty stomach with 8oz water, remain upright ≥30 min, avoid food/meds for 30 min. Adverse effects: esophageal irritation, osteonecrosis of jaw (rare), atypical femur fractures.",
      "Low bone density → fracture risk. T-score ≤ -2.5. Risk: postmenopausal women, corticosteroids, age. Screen with DEXA. Treat: bisphosphonates, calcium + vitamin D."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_47",
    "q": "How does CKD affect drug dosing?",
    "options": [
      "Renally cleared drugs accumulate → reduce dose or extend interval. Use eGFR to adjust. Avoid NSAIDs, contrast dye. Monitor metformin (hold if GFR<30), digoxin.",
      "FGA (typical): haloperidol, chlorpromazine — high EPS risk. SGA (atypical): risperidone, olanzapine, quetiapine — lower EPS but metabolic side effects.",
      "Severe, life-threatening systemic allergic reaction. Triggers: drugs (penicillin), food (peanuts), insect venom. Symptoms: urticaria, angioedema, bronchospasm, hypotension. Treatment: epinephrine IM immediately.",
      "Delayed ventricular repolarization on ECG. Risk: torsades de pointes (potentially fatal arrhythmia). Common culprits: fluoroquinolones, macrolides, antipsychotics, methadone, antiarrhythmics."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_48",
    "q": "What is acute kidney injury (AKI)?",
    "options": [
      "Sudden ↓ in kidney function. Pre-renal (volume depletion, most common), intrinsic renal (ATN, nephritis), post-renal (obstruction). Diagnose by ↑ creatinine.",
      "Autosomal recessive HbS mutation → red cell sickling under hypoxia → hemolysis, vaso-occlusion. Painful crises, organ damage, stroke. Treat: hydroxyurea, transfusions, SCT.",
      "Thiazide diuretics, ACE inhibitors, ARBs, or calcium channel blockers. In diabetes or CKD: ACE inhibitors or ARBs preferred.",
      "Opioid antagonist — competitively blocks μ, κ, and δ receptors. Reverses opioid overdose (respiratory depression). Short half-life → may need repeat doses. Available as Narcan nasal spray."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_49",
    "q": "What is nephrotic syndrome?",
    "options": [
      "Massive proteinuria (>3.5g/day), hypoalbuminemia, edema, hyperlipidemia. Causes: minimal change disease (children), focal segmental glomerulosclerosis (adults).",
      "Chronic inflammatory skin disease with pruritic lesions. Associated with asthma, allergic rhinitis. Treat: emollients, topical steroids, topical calcineurin inhibitors, dupilumab (severe).",
      "Progressive, irreversible airflow obstruction from emphysema and/or chronic bronchitis. Caused primarily by smoking. FEV1/FVC <0.7 on spirometry.",
      "Converting between opioids using morphine milligram equivalents (MME). Example: 30 mg oral morphine = 20 mg oral oxycodone = 7.5mg oral hydromorphone. Reduce 25-50% for incomplete cross-tolerance."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_50",
    "q": "What is a urinary tract infection (UTI)?",
    "options": [
      "Bacterial infection of urinary tract. Cystitis (lower): dysuria, frequency, urgency. Pyelonephritis (upper): fever, flank pain, systemic illness. Most common: E. coli.",
      "Major drug-metabolizing enzyme system in liver. CYP3A4: metabolizes ~50% of drugs. Inducers ↓ drug levels (rifampin, carbamazepine). Inhibitors ↑ drug levels (azole antifungals, macrolides).",
      "Excess cortisol. Causes: exogenous corticosteroids (most common), pituitary adenoma (Cushing's disease), adrenal tumor. Features: moon face, buffalo hump, striae.",
      "AGS list of medications potentially inappropriate in adults ≥65 years. Includes benzodiazepines, diphenhydramine, NSAIDs, tricyclics, muscle relaxants. Associated with falls, delirium, ADRs."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_51",
    "q": "UTI treatment by type",
    "options": [
      "Uncomplicated cystitis: nitrofurantoin or TMP-SMX × 3 days. Pyelonephritis: fluoroquinolone × 7-14 days or IV ceftriaxone. Consider culture/sensitivity.",
      "Study of genetic variation affecting drug response. Example: CYP2D6 poor metabolizers → ↑ codeine toxicity. HLA-B*5701 → abacavir hypersensitivity. TPMT testing before thiopurines.",
      "Recurrent severe headache, often unilateral, with nausea/vomiting, photophobia. Triggered by stress, hormones, foods. Aura in ~25%.",
      "Rupture of atherosclerotic plaque → thrombus formation → coronary artery occlusion → myocardial necrosis. STEMI: complete occlusion. NSTEMI: partial."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_52",
    "q": "What is sepsis?",
    "options": [
      "Life-threatening organ dysfunction caused by dysregulated host response to infection. Septic shock: sepsis + vasopressors needed + lactate >2 mmol/L despite fluids.",
      "Reactive insulin dosing based on current blood glucose. Replaced by basal-bolus regimen: basal insulin (glargine/detemir) 24h + rapid-acting (lispro/aspart) with meals + correction doses.",
      "End-stage liver fibrosis from chronic damage (alcohol, NAFLD, hepatitis B/C). Complications: portal hypertension, ascites, varices, hepatic encephalopathy, HCC.",
      "Complication of T1DM (or T2DM). Absolute insulin deficiency → lipolysis → ketone production → anion gap metabolic acidosis. Treat: IV fluids, insulin, K⁺ replacement."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_53",
    "q": "Sepsis management (Surviving Sepsis Bundle)",
    "options": [
      "Hour-1: blood cultures → broad-spectrum antibiotics → 30 mL/kg IV crystalloid if hypotensive → vasopressors if needed → lactate measurement.",
      "Vitamin K antagonist → inhibits clotting factors II, VII, IX, X (and protein C, S). Monitored with INR (target 2-3 for most indications). Many drug and food interactions (vitamin K-rich foods).",
      "2 NRTIs + 1 INSTI (integrase inhibitor, e.g., dolutegravir). Bictegravir/TAF/FTC (Biktarvy) or dolutegravir/abacavir/3TC (Triumeq) common options.",
      "Ischemic (87%): clot blocks brain artery → infarction. Hemorrhagic: bleeding into brain. Time-sensitive: 'time is brain'. IV tPA within 4.5h for ischemic."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_54",
    "q": "What is MRSA?",
    "options": [
      "Methicillin-resistant Staphylococcus aureus — resistant to beta-lactams. Skin/soft tissue: TMP-SMX or doxycycline. Serious infections: vancomycin, linezolid, or daptomycin.",
      "Chronic use risks: C. diff infection, community-acquired pneumonia, Mg²⁺ deficiency, osteoporosis/fractures, B12 deficiency, chronic kidney disease. Use lowest effective dose.",
      "Attention-deficit/hyperactivity disorder. Inattentive, hyperactive-impulsive, or combined type. First-line pharmacotherapy: stimulants (methylphenidate, amphetamines). Non-stimulant: atomoxetine.",
      "Progressive loss of kidney function. Classified by GFR (stages 1-5). Causes: DM, HTN most common. Complications: anemia, hyperkalemia, metabolic acidosis, bone disease."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_55",
    "q": "What is Clostridioides difficile (C. diff) infection?",
    "options": [
      "Colitis from C. diff toxin, often after antibiotic use (disrupts gut flora). Symptoms: watery diarrhea, abdominal pain. Treatment: fidaxomicin or vancomycin oral. Stop offending antibiotic.",
      "Elderly: ↓ renal clearance, ↑ fat, ↓ albumin → drug accumulation. Pediatrics: different metabolism (immature CYP). Pregnancy: ↑ renal clearance, ↑ plasma volume. Obese: ↑ Vd for lipophilic drugs.",
      "Chronic inflammatory skin disease with pruritic lesions. Associated with asthma, allergic rhinitis. Treat: emollients, topical steroids, topical calcineurin inhibitors, dupilumab (severe).",
      "Persistent depressed mood or anhedonia × ≥2 weeks + ≥4 somatic symptoms. Treated with SSRIs/SNRIs first-line. Severe: add therapy, consider TMS or ECT."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_56",
    "q": "What is HIV/AIDS?",
    "options": [
      "HIV destroys CD4+ T-cells → immunodeficiency → AIDS (CD4 <200/μL). Transmitted via blood, sex, mother-to-child. Treated with ART (antiretroviral therapy).",
      "AGS list of medications potentially inappropriate in adults ≥65 years. Includes benzodiazepines, diphenhydramine, NSAIDs, tricyclics, muscle relaxants. Associated with falls, delirium, ADRs.",
      "Urinary retention, constipation, dry mouth, blurred vision, confusion/delirium, tachycardia. Anticholinergic drugs: diphenhydramine, tricyclics, oxybutynin, benztropine, some antipsychotics.",
      "Initial: LMWH, fondaparinux, or DOAC. Long-term: DOAC (rivaroxaban, apixaban) or warfarin. Duration: 3 months for provoked; indefinite for unprovoked or high-risk."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_57",
    "q": "Antiretroviral therapy (ART) backbone",
    "options": [
      "2 NRTIs + 1 INSTI (integrase inhibitor, e.g., dolutegravir). Bictegravir/TAF/FTC (Biktarvy) or dolutegravir/abacavir/3TC (Triumeq) common options.",
      "Thiazide diuretics, ACE inhibitors, ARBs, or calcium channel blockers. In diabetes or CKD: ACE inhibitors or ARBs preferred.",
      "Opioids bind μ-receptors in GI tract → reduced motility, increased sphincter tone → constipation. Unlike other opioid side effects, tolerance does NOT develop. Treat: stimulant laxatives (senna).",
      "Major drug-metabolizing enzyme system in liver. CYP3A4: metabolizes ~50% of drugs. Inducers ↓ drug levels (rifampin, carbamazepine). Inhibitors ↑ drug levels (azole antifungals, macrolides)."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_58",
    "q": "What is hepatitis B?",
    "options": [
      "Viral liver infection (HBV). Acute: usually resolves. Chronic (HBsAg >6 months): cirrhosis, HCC risk. Vaccine-preventable. Treat: tenofovir or entecavir.",
      "Blood clot in deep vein (usually leg). Risk: Virchow's triad — stasis, endothelial injury, hypercoagulability. Complication: pulmonary embolism.",
      "Narrow TI. Toxicity: nausea, visual disturbances (yellow-green halos), bradycardia, heart block, arrhythmias. Worsened by hypokalemia, renal failure, hypomagnesemia. Treat: digoxin-immune Fab.",
      "Glycated hemoglobin reflecting average blood glucose over 2-3 months. Target <7% for most diabetics. Higher targets (7.5-8%) for elderly or those with frequent hypoglycemia."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_59",
    "q": "What is hepatitis C?",
    "options": [
      "Bloodborne RNA virus (HCV). Most become chronic. Curable with direct-acting antivirals (DAAs): sofosbuvir/velpatasvir (Epclusa) × 12 weeks, >95% cure rates.",
      "Blood clot in pulmonary artery, usually from DVT. Symptoms: sudden dyspnea, plupeuritic chest pain, tachycardia. Life-threatening emergency.",
      "Severe heart failure causing ↓ cardiac output → end-organ hypoperfusion despite adequate volume. Most common cause: massive MI. Treat: inotropes, vasopressors, mechanical support (IABP), revascularization.",
      "Narrow TI. Toxicity: nausea, visual disturbances (yellow-green halos), bradycardia, heart block, arrhythmias. Worsened by hypokalemia, renal failure, hypomagnesemia. Treat: digoxin-immune Fab."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_60",
    "q": "What is major depressive disorder (MDD)?",
    "options": [
      "Persistent depressed mood or anhedonia × ≥2 weeks + ≥4 somatic symptoms. Treated with SSRIs/SNRIs first-line. Severe: add therapy, consider TMS or ECT.",
      "Insufficient thyroid hormone. Most common cause: Hashimoto's thyroiditis. Symptoms: fatigue, weight gain, cold intolerance, bradycardia, constipation.",
      "Persistently elevated blood pressure ≥130/80 mmHg. Primary (essential) has no identifiable cause; secondary has an underlying cause (renal disease, hyperaldosteronism, etc.).",
      "Lupus-like syndrome from drugs: hydralazine (most common), procainamide, isoniazid, minocycline, TNF-α inhibitors. Anti-histone antibodies. Resolves on discontinuation."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_61",
    "q": "SSRI mechanism of action",
    "options": [
      "Selectively inhibit serotonin reuptake transporter (SERT) → ↑ synaptic serotonin. Examples: fluoxetine, sertraline, escitalopram. First-line for depression and anxiety.",
      "Progressive dopamine neuron loss in substantia nigra. Cardinal features: bradykinesia, resting tremor, rigidity, postural instability. Non-motor: dementia, depression.",
      "Controllers: inhaled corticosteroids (ICS), LABAs. Reliever (rescue): SABAs (albuterol). Severe: oral steroids, biologics (omalizumab).",
      "Irregular, often rapid heart rhythm from chaotic atrial electrical activity. Causes: HTN, valve disease, HF, thyrotoxicosis. Risk: stroke."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_62",
    "q": "What is bipolar disorder?",
    "options": [
      "Mood disorder with episodes of mania/hypomania alternating with depression. Bipolar I: full mania. Bipolar II: hypomania + depression. Risk: suicide especially during depression.",
      "Autoimmune demyelination of CNS. Relapsing-remitting most common. Symptoms: visual disturbances (optic neuritis), weakness, fatigue, spasticity, bladder dysfunction.",
      "Insufficient thyroid hormone. Most common cause: Hashimoto's thyroiditis. Symptoms: fatigue, weight gain, cold intolerance, bradycardia, constipation.",
      "Autoimmune destruction of pancreatic β-cells → absolute insulin deficiency. Requires lifelong insulin therapy. DKA is life-threatening complication."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_63",
    "q": "Bipolar disorder pharmacotherapy",
    "options": [
      "Mood stabilizers: lithium (evidence for suicide reduction), valproate, lamotrigine (bipolar depression). Atypical antipsychotics: quetiapine, olanzapine, aripiprazole.",
      "Mild-moderate: mesalamine (UC only), budesonide. Moderate-severe: corticosteroids, azathioprine/6-MP, biologics (TNF-α inhibitors: infliximab, adalimumab).",
      "Ischemic (87%): clot blocks brain artery → infarction. Hemorrhagic: bleeding into brain. Time-sensitive: 'time is brain'. IV tPA within 4.5h for ischemic.",
      "Levodopa/carbidopa = gold standard. Also: dopamine agonists (pramipexole, ropinirole), MAO-B inhibitors (rasagiline, selegiline), COMT inhibitors."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_64",
    "q": "What is schizophrenia?",
    "options": [
      "Psychotic disorder with positive symptoms (hallucinations, delusions, disorganized speech) and negative symptoms (flat affect, alogia, avolition, anhedonia).",
      "Bacterial infection of urinary tract. Cystitis (lower): dysuria, frequency, urgency. Pyelonephritis (upper): fever, flank pain, systemic illness. Most common: E. coli.",
      "Functional GI disorder with abdominal pain + altered bowel habits (IBS-C, IBS-D, or mixed) without structural abnormality. Diagnosis of exclusion.",
      "Mild-moderate: mesalamine (UC only), budesonide. Moderate-severe: corticosteroids, azathioprine/6-MP, biologics (TNF-α inhibitors: infliximab, adalimumab)."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_65",
    "q": "Antipsychotic medications: first vs. second generation",
    "options": [
      "FGA (typical): haloperidol, chlorpromazine — high EPS risk. SGA (atypical): risperidone, olanzapine, quetiapine — lower EPS but metabolic side effects.",
      "2 NRTIs + 1 INSTI (integrase inhibitor, e.g., dolutegravir). Bictegravir/TAF/FTC (Biktarvy) or dolutegravir/abacavir/3TC (Triumeq) common options.",
      "Colitis from C. diff toxin, often after antibiotic use (disrupts gut flora). Symptoms: watery diarrhea, abdominal pain. Treatment: fidaxomicin or vancomycin oral. Stop offending antibiotic.",
      "HIV destroys CD4+ T-cells → immunodeficiency → AIDS (CD4 <200/μL). Transmitted via blood, sex, mother-to-child. Treated with ART (antiretroviral therapy)."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_66",
    "q": "What is generalized anxiety disorder (GAD)?",
    "options": [
      "Excessive, uncontrollable worry about multiple topics ≥6 months + physical symptoms (muscle tension, insomnia, fatigue). First-line: SSRIs, SNRIs, buspirone.",
      "Psychotic disorder with positive symptoms (hallucinations, delusions, disorganized speech) and negative symptoms (flat affect, alogia, avolition, anhedonia).",
      "Post-traumatic stress disorder after trauma exposure. Symptoms: flashbacks, nightmares, avoidance, hypervigilance, negative cognitions. First-line: trauma-focused psychotherapy + SSRI/SNRI.",
      "Most common anemia worldwide. Cause: blood loss (women), malabsorption, poor diet. Labs: ↓ Hgb, ↓ MCV (microcytic), ↓ ferritin, ↑ TIBC. Treat: oral iron."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_67",
    "q": "What is PTSD?",
    "options": [
      "Post-traumatic stress disorder after trauma exposure. Symptoms: flashbacks, nightmares, avoidance, hypervigilance, negative cognitions. First-line: trauma-focused psychotherapy + SSRI/SNRI.",
      "Autosomal recessive HbS mutation → red cell sickling under hypoxia → hemolysis, vaso-occlusion. Painful crises, organ damage, stroke. Treat: hydroxyurea, transfusions, SCT.",
      "Chronic autoimmune skin condition. Plaques: well-demarcated, silvery-scaled, erythematous, commonly on elbows/knees/scalp. Treat: topical steroids, vitamin D analogs; severe: biologics.",
      "Breast cancer (ER+/PR+: tamoxifen or aromatase inhibitors), prostate cancer (androgen deprivation therapy: GnRH agonists + anti-androgens), endometrial cancer."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_68",
    "q": "What is ADHD?",
    "options": [
      "Attention-deficit/hyperactivity disorder. Inattentive, hyperactive-impulsive, or combined type. First-line pharmacotherapy: stimulants (methylphenidate, amphetamines). Non-stimulant: atomoxetine.",
      "Chronic inflammatory skin disease with pruritic lesions. Associated with asthma, allergic rhinitis. Treat: emollients, topical steroids, topical calcineurin inhibitors, dupilumab (severe).",
      "Delayed ventricular repolarization on ECG. Risk: torsades de pointes (potentially fatal arrhythmia). Common culprits: fluoroquinolones, macrolides, antipsychotics, methadone, antiarrhythmics.",
      "Penicillins, cephalosporins, carbapenems, monobactams. Inhibit cell wall synthesis (PBP binding). Beta-lactamases inactivate them. Combination with beta-lactamase inhibitors (clavulanate, tazobactam) overcomes."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_69",
    "q": "What is insomnia disorder?",
    "options": [
      "Difficulty initiating/maintaining sleep ≥3 nights/week causing daytime impairment. First-line: CBT-I. Pharmacotherapy: melatonin receptor agonist (ramelteon), Z-drugs, doxepin.",
      "Major drug-metabolizing enzyme system in liver. CYP3A4: metabolizes ~50% of drugs. Inducers ↓ drug levels (rifampin, carbamazepine). Inhibitors ↑ drug levels (azole antifungals, macrolides).",
      "Reactive insulin dosing based on current blood glucose. Replaced by basal-bolus regimen: basal insulin (glargine/detemir) 24h + rapid-acting (lispro/aspart) with meals + correction doses.",
      "Block Na-K-2Cl cotransporter in thick ascending loop of Henle → prevent Na/water reabsorption → diuresis. Examples: furosemide, bumetanide, torsemide. Also lose K⁺ and Mg²⁺."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_70",
    "q": "What is iron deficiency anemia?",
    "options": [
      "Most common anemia worldwide. Cause: blood loss (women), malabsorption, poor diet. Labs: ↓ Hgb, ↓ MCV (microcytic), ↓ ferritin, ↑ TIBC. Treat: oral iron.",
      "Study of genetic variation affecting drug response. Example: CYP2D6 poor metabolizers → ↑ codeine toxicity. HLA-B*5701 → abacavir hypersensitivity. TPMT testing before thiopurines.",
      "Serum K⁺ <3.5 mEq/L. Causes: loop/thiazide diuretics, vomiting, diarrhea, hyperaldosteronism. Symptoms: muscle weakness, cramps, arrhythmias (↑ digoxin toxicity risk). Treat: KCl supplementation.",
      "Block ACE → ↓ Ang II → vasodilation (↓ afterload), ↓ aldosterone → ↓ preload. Prevent ventricular remodeling, reducing hospitalizations and mortality in HFrEF."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_71",
    "q": "What is vitamin B12 deficiency anemia?",
    "options": [
      "Macrocytic (megaloblastic) anemia + neurological symptoms (subacute combined degeneration). Cause: pernicious anemia (anti-intrinsic factor Ab), malabsorption. Treat: B12 IM or high-dose oral.",
      "Reactive insulin dosing based on current blood glucose. Replaced by basal-bolus regimen: basal insulin (glargine/detemir) 24h + rapid-acting (lispro/aspart) with meals + correction doses.",
      "Block ACE → ↓ Ang II → vasodilation (↓ afterload), ↓ aldosterone → ↓ preload. Prevent ventricular remodeling, reducing hospitalizations and mortality in HFrEF.",
      "Thiazide diuretics, ACE inhibitors, ARBs, or calcium channel blockers. In diabetes or CKD: ACE inhibitors or ARBs preferred."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_72",
    "q": "What is sickle cell disease?",
    "options": [
      "Autosomal recessive HbS mutation → red cell sickling under hypoxia → hemolysis, vaso-occlusion. Painful crises, organ damage, stroke. Treat: hydroxyurea, transfusions, SCT.",
      "Vitamin K antagonist → inhibits clotting factors II, VII, IX, X (and protein C, S). Monitored with INR (target 2-3 for most indications). Many drug and food interactions (vitamin K-rich foods).",
      "Program to optimize antibiotic use, reduce resistance, and minimize adverse effects. Key: right antibiotic, dose, route, duration. De-escalate based on culture; avoid broad-spectrum when narrow-spectrum appropriate.",
      "Infection of lung parenchyma (alveoli). Community-acquired (CAP): Streptococcus pneumoniae most common. HAP/VAP: gram-negatives and MRSA."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_73",
    "q": "What is deep vein thrombosis — anticoagulation overview?",
    "options": [
      "Initial: LMWH, fondaparinux, or DOAC. Long-term: DOAC (rivaroxaban, apixaban) or warfarin. Duration: 3 months for provoked; indefinite for unprovoked or high-risk.",
      "Chronic use risks: C. diff infection, community-acquired pneumonia, Mg²⁺ deficiency, osteoporosis/fractures, B12 deficiency, chronic kidney disease. Use lowest effective dose.",
      "Chronic inflammatory airway disease with reversible bronchoconstriction. Triggers: allergens, exercise, cold air, infections. Characterized by wheezing, SOB, cough.",
      "Recurrent, unprovoked seizures from abnormal neuronal activity. Focal seizures: one brain area. Generalized: both hemispheres (tonic-clonic, absence)."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_74",
    "q": "What is rheumatoid arthritis (RA)?",
    "options": [
      "Autoimmune symmetric polyarthritis primarily affecting small joints. Positive RF and anti-CCP. Systemic: fatigue, nodules, vasculitis. Treat: DMARDs (methotrexate first-line) + biologics.",
      "Elderly: ↓ renal clearance, ↑ fat, ↓ albumin → drug accumulation. Pediatrics: different metabolism (immature CYP). Pregnancy: ↑ renal clearance, ↑ plasma volume. Obese: ↑ Vd for lipophilic drugs.",
      "Excess thyroid hormone. Causes: Graves' disease (most common), toxic nodule, thyroiditis. Symptoms: tachycardia, weight loss, heat intolerance, tremor.",
      "Triple therapy: PPI + clarithromycin + amoxicillin × 14 days. Quadruple (if clarithromycin resistance): PPI + bismuth + metronidazole + tetracycline."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_75",
    "q": "What is osteoarthritis (OA)?",
    "options": [
      "Degenerative joint disease — cartilage loss, bone changes. Weight-bearing joints: knees, hips. Non-pharmacologic: exercise, weight loss. Pharmacologic: acetaminophen, NSAIDs, intra-articular steroids.",
      "AGS list of medications potentially inappropriate in adults ≥65 years. Includes benzodiazepines, diphenhydramine, NSAIDs, tricyclics, muscle relaxants. Associated with falls, delirium, ADRs.",
      "Mild-moderate: cholinesterase inhibitors (donepezil, rivastigmine, galantamine). Moderate-severe: memantine (NMDA antagonist). Lecanemab for early AD.",
      "Hour-1: blood cultures → broad-spectrum antibiotics → 30 mL/kg IV crystalloid if hypotensive → vasopressors if needed → lactate measurement."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_76",
    "q": "What is osteoporosis?",
    "options": [
      "Low bone density → fracture risk. T-score ≤ -2.5. Risk: postmenopausal women, corticosteroids, age. Screen with DEXA. Treat: bisphosphonates, calcium + vitamin D.",
      "Thiazide diuretics, ACE inhibitors, ARBs, or calcium channel blockers. In diabetes or CKD: ACE inhibitors or ARBs preferred.",
      "Mild-moderate: mesalamine (UC only), budesonide. Moderate-severe: corticosteroids, azathioprine/6-MP, biologics (TNF-α inhibitors: infliximab, adalimumab).",
      "Excessive, uncontrollable worry about multiple topics ≥6 months + physical symptoms (muscle tension, insomnia, fatigue). First-line: SSRIs, SNRIs, buspirone."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_77",
    "q": "What is systemic lupus erythematosus (SLE)?",
    "options": [
      "Multi-system autoimmune disease. Butterfly rash, arthritis, nephritis, serositis, positive ANA. Drug-induced lupus: hydralazine, procainamide, isoniazid.",
      "Blood clot in deep vein (usually leg). Risk: Virchow's triad — stasis, endothelial injury, hypercoagulability. Complication: pulmonary embolism.",
      "Methicillin-resistant Staphylococcus aureus — resistant to beta-lactams. Skin/soft tissue: TMP-SMX or doxycycline. Serious infections: vancomycin, linezolid, or daptomycin.",
      "Bacterial skin/soft tissue infection (non-purulent). Most common: Streptococcus pyogenes, S. aureus. Treatment: dicloxacillin or cephalexin; MRSA suspected: TMP-SMX or doxycycline."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_78",
    "q": "What is psoriasis?",
    "options": [
      "Chronic autoimmune skin condition. Plaques: well-demarcated, silvery-scaled, erythematous, commonly on elbows/knees/scalp. Treat: topical steroids, vitamin D analogs; severe: biologics.",
      "Blood clot in pulmonary artery, usually from DVT. Symptoms: sudden dyspnea, plupeuritic chest pain, tachycardia. Life-threatening emergency.",
      "FGA (typical): haloperidol, chlorpromazine — high EPS risk. SGA (atypical): risperidone, olanzapine, quetiapine — lower EPS but metabolic side effects.",
      "Study of genetic variation affecting drug response. Example: CYP2D6 poor metabolizers → ↑ codeine toxicity. HLA-B*5701 → abacavir hypersensitivity. TPMT testing before thiopurines."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_79",
    "q": "What is atopic dermatitis (eczema)?",
    "options": [
      "Chronic inflammatory skin disease with pruritic lesions. Associated with asthma, allergic rhinitis. Treat: emollients, topical steroids, topical calcineurin inhibitors, dupilumab (severe).",
      "Insufficient thyroid hormone. Most common cause: Hashimoto's thyroiditis. Symptoms: fatigue, weight gain, cold intolerance, bradycardia, constipation.",
      "Low bone density → fracture risk. T-score ≤ -2.5. Risk: postmenopausal women, corticosteroids, age. Screen with DEXA. Treat: bisphosphonates, calcium + vitamin D.",
      "HMG-CoA reductase inhibitors → ↓ cholesterol synthesis in liver → upregulation of LDL receptors → ↓ LDL. Also pleiotropic effects: anti-inflammatory, plaque stabilization."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_80",
    "q": "What is cellulitis?",
    "options": [
      "Bacterial skin/soft tissue infection (non-purulent). Most common: Streptococcus pyogenes, S. aureus. Treatment: dicloxacillin or cephalexin; MRSA suspected: TMP-SMX or doxycycline.",
      "Progressive dopamine neuron loss in substantia nigra. Cardinal features: bradykinesia, resting tremor, rigidity, postural instability. Non-motor: dementia, depression.",
      "Drug-induced kidney injury. Common culprits: NSAIDs (afferent arteriole constriction), aminoglycosides (proximal tubule damage), contrast dye, vancomycin. Monitor SCr/BUN.",
      "Ongoing monitoring of medication safety after approval (post-marketing surveillance). Pharmacists report adverse events via MedWatch (FDA). Identifies rare/delayed adverse effects not seen in trials."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_81",
    "q": "What are the hallmarks of cancer?",
    "options": [
      "Sustained proliferative signaling, evading growth suppressors, resisting cell death, enabling replicative immortality, inducing angiogenesis, activating invasion/metastasis, avoiding immune destruction.",
      "Autoimmune demyelination of CNS. Relapsing-remitting most common. Symptoms: visual disturbances (optic neuritis), weakness, fatigue, spasticity, bladder dysfunction.",
      "Glycated hemoglobin reflecting average blood glucose over 2-3 months. Target <7% for most diabetics. Higher targets (7.5-8%) for elderly or those with frequent hypoglycemia.",
      "Bacteria: prokaryotes, treated with antibiotics. Viruses: intracellular parasites using host machinery, treated with antivirals. Antibiotics do NOT treat viral infections. Misuse contributes to antimicrobial resistance."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_82",
    "q": "Common chemotherapy side effects by category",
    "options": [
      "Myelosuppression (neutropenia → infection risk), nausea/vomiting (5-HT3 antagonists for prevention), alopecia, mucositis, peripheral neuropathy, cardiotoxicity (anthracyclines).",
      "Mild-moderate: mesalamine (UC only), budesonide. Moderate-severe: corticosteroids, azathioprine/6-MP, biologics (TNF-α inhibitors: infliximab, adalimumab).",
      "Block Na-Cl cotransporter in distal convoluted tubule. Less potent than loop diuretics. Examples: hydrochlorothiazide, chlorthalidone. First-line for HTN; also for hypercalciuria (calcium stones).",
      "Controllers: inhaled corticosteroids (ICS), LABAs. Reliever (rescue): SABAs (albuterol). Severe: oral steroids, biologics (omalizumab)."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_83",
    "q": "What are the common hormone-driven cancers?",
    "options": [
      "Breast cancer (ER+/PR+: tamoxifen or aromatase inhibitors), prostate cancer (androgen deprivation therapy: GnRH agonists + anti-androgens), endometrial cancer.",
      "Bacterial infection of urinary tract. Cystitis (lower): dysuria, frequency, urgency. Pyelonephritis (upper): fever, flank pain, systemic illness. Most common: E. coli.",
      "Elderly: ↓ renal clearance, ↑ fat, ↓ albumin → drug accumulation. Pediatrics: different metabolism (immature CYP). Pregnancy: ↑ renal clearance, ↑ plasma volume. Obese: ↑ Vd for lipophilic drugs.",
      "Primary adrenal insufficiency — destruction of adrenal cortex → deficiency of cortisol and aldosterone. Crisis: hypotension, hyponatremia, hyperkalemia."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_84",
    "q": "Drug pharmacokinetics — 4 key processes (ADME)",
    "options": [
      "Absorption: drug enters systemic circulation. Distribution: spreads to tissues (affected by protein binding, lipophilicity). Metabolism: liver (CYP450). Excretion: kidney (GFR, tubular secretion).",
      "2 NRTIs + 1 INSTI (integrase inhibitor, e.g., dolutegravir). Bictegravir/TAF/FTC (Biktarvy) or dolutegravir/abacavir/3TC (Triumeq) common options.",
      "Bacteria: prokaryotes, treated with antibiotics. Viruses: intracellular parasites using host machinery, treated with antivirals. Antibiotics do NOT treat viral infections. Misuse contributes to antimicrobial resistance.",
      "Gastroesophageal reflux disease — acid reflux causing heartburn, regurgitation. Complications: esophagitis, Barrett's esophagus, adenocarcinoma."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_85",
    "q": "What is the therapeutic index (TI)?",
    "options": [
      "TI = TD50/ED50. Narrow TI drugs require close monitoring (lithium, warfarin, digoxin, phenytoin, aminoglycosides). Small dose changes can cause toxicity or subtherapeutic effect.",
      "Psychotic disorder with positive symptoms (hallucinations, delusions, disorganized speech) and negative symptoms (flat affect, alogia, avolition, anhedonia).",
      "Elevated blood lipids (LDL, triglycerides, total cholesterol) or low HDL. Major risk factor for atherosclerosis and cardiovascular disease.",
      "Bacterial infection of urinary tract. Cystitis (lower): dysuria, frequency, urgency. Pyelonephritis (upper): fever, flank pain, systemic illness. Most common: E. coli."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_86",
    "q": "What is cytochrome P450 (CYP450)?",
    "options": [
      "Major drug-metabolizing enzyme system in liver. CYP3A4: metabolizes ~50% of drugs. Inducers ↓ drug levels (rifampin, carbamazepine). Inhibitors ↑ drug levels (azole antifungals, macrolides).",
      "Macrocytic (megaloblastic) anemia + neurological symptoms (subacute combined degeneration). Cause: pernicious anemia (anti-intrinsic factor Ab), malabsorption. Treat: B12 IM or high-dose oral.",
      "Complication of T1DM (or T2DM). Absolute insulin deficiency → lipolysis → ketone production → anion gap metabolic acidosis. Treat: IV fluids, insulin, K⁺ replacement.",
      "Mood stabilizers: lithium (evidence for suicide reduction), valproate, lamotrigine (bipolar depression). Atypical antipsychotics: quetiapine, olanzapine, aripiprazole."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_87",
    "q": "What is a drug-drug interaction?",
    "options": [
      "Pharmacokinetic: one drug alters absorption, distribution, metabolism, or excretion of another. Pharmacodynamic: additive, synergistic, or antagonistic effects on target.",
      "Chronic autoimmune skin condition. Plaques: well-demarcated, silvery-scaled, erythematous, commonly on elbows/knees/scalp. Treat: topical steroids, vitamin D analogs; severe: biologics.",
      "Most common dementia. Progressive neurodegeneration with amyloid plaques and neurofibrillary tangles. Symptoms: memory loss, confusion, personality changes.",
      "Low bone density → fracture risk. T-score ≤ -2.5. Risk: postmenopausal women, corticosteroids, age. Screen with DEXA. Treat: bisphosphonates, calcium + vitamin D."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_88",
    "q": "What is nephrotoxicity from drugs?",
    "options": [
      "Drug-induced kidney injury. Common culprits: NSAIDs (afferent arteriole constriction), aminoglycosides (proximal tubule damage), contrast dye, vancomycin. Monitor SCr/BUN.",
      "TI = TD50/ED50. Narrow TI drugs require close monitoring (lithium, warfarin, digoxin, phenytoin, aminoglycosides). Small dose changes can cause toxicity or subtherapeutic effect.",
      "Continuous mucosal inflammation of colon only, starting from rectum. Symptoms: bloody diarrhea, urgency. Complications: toxic megacolon, colon cancer.",
      "Urinary retention, constipation, dry mouth, blurred vision, confusion/delirium, tachycardia. Anticholinergic drugs: diphenhydramine, tricyclics, oxybutynin, benztropine, some antipsychotics."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_89",
    "q": "What is QT prolongation?",
    "options": [
      "Delayed ventricular repolarization on ECG. Risk: torsades de pointes (potentially fatal arrhythmia). Common culprits: fluoroquinolones, macrolides, antipsychotics, methadone, antiarrhythmics.",
      "Study of genetic variation affecting drug response. Example: CYP2D6 poor metabolizers → ↑ codeine toxicity. HLA-B*5701 → abacavir hypersensitivity. TPMT testing before thiopurines.",
      "Hour-1: blood cultures → broad-spectrum antibiotics → 30 mL/kg IV crystalloid if hypotensive → vasopressors if needed → lactate measurement.",
      "Reduced response to a drug after repeated exposure, requiring higher doses. Pharmacokinetic tolerance: increased metabolism. Pharmacodynamic tolerance: receptor downregulation or desensitization."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_90",
    "q": "What are anticholinergic side effects?",
    "options": [
      "Urinary retention, constipation, dry mouth, blurred vision, confusion/delirium, tachycardia. Anticholinergic drugs: diphenhydramine, tricyclics, oxybutynin, benztropine, some antipsychotics.",
      "Reactive insulin dosing based on current blood glucose. Replaced by basal-bolus regimen: basal insulin (glargine/detemir) 24h + rapid-acting (lispro/aspart) with meals + correction doses.",
      "Psychotic disorder with positive symptoms (hallucinations, delusions, disorganized speech) and negative symptoms (flat affect, alogia, avolition, anhedonia).",
      "Life-threatening: seizures, delirium tremens. Never abrupt discontinuation. Symptoms: anxiety, insomnia, tremor, diaphoresis. Long-acting benzo (chlordiazepoxide, diazepam) tapering for alcohol withdrawal."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_91",
    "q": "What is serotonin syndrome?",
    "options": [
      "Excess serotonergic activity. Triad: mental status changes, autonomic instability (hyperthermia, tachycardia), neuromuscular abnormalities (clonus, hyperreflexia). Causes: SSRIs + MAOIs, linezolid, tramadol.",
      "Vitamin K antagonist → inhibits clotting factors II, VII, IX, X (and protein C, S). Monitored with INR (target 2-3 for most indications). Many drug and food interactions (vitamin K-rich foods).",
      "Degenerative joint disease — cartilage loss, bone changes. Weight-bearing joints: knees, hips. Non-pharmacologic: exercise, weight loss. Pharmacologic: acetaminophen, NSAIDs, intra-articular steroids.",
      "Extent to which patient takes medication as prescribed. Factors: side effects, cost, complexity, beliefs, forgetfulness. Poor adherence is major cause of treatment failure. Pharmacist counseling improves adherence."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_92",
    "q": "What is Stevens-Johnson syndrome (SJS)?",
    "options": [
      "Severe cutaneous drug reaction with mucosal involvement, epidermal detachment <10% BSA. TEN: >30% BSA. Common culprits: allopurinol, anticonvulsants (carbamazepine, lamotrigine), sulfonamides.",
      "Chronic use risks: C. diff infection, community-acquired pneumonia, Mg²⁺ deficiency, osteoporosis/fractures, B12 deficiency, chronic kidney disease. Use lowest effective dose.",
      "Major drug-metabolizing enzyme system in liver. CYP3A4: metabolizes ~50% of drugs. Inducers ↓ drug levels (rifampin, carbamazepine). Inhibitors ↑ drug levels (azole antifungals, macrolides).",
      "Blood clot in deep vein (usually leg). Risk: Virchow's triad — stasis, endothelial injury, hypercoagulability. Complication: pulmonary embolism."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_93",
    "q": "What is pharmacogenomics?",
    "options": [
      "Study of genetic variation affecting drug response. Example: CYP2D6 poor metabolizers → ↑ codeine toxicity. HLA-B*5701 → abacavir hypersensitivity. TPMT testing before thiopurines.",
      "Elderly: ↓ renal clearance, ↑ fat, ↓ albumin → drug accumulation. Pediatrics: different metabolism (immature CYP). Pregnancy: ↑ renal clearance, ↑ plasma volume. Obese: ↑ Vd for lipophilic drugs.",
      "ACE inhibitors: block conversion of Ang I → Ang II; cause dry cough (bradykinin). ARBs: block Ang II at AT1 receptor; no cough. Both avoid in pregnancy (teratogenic).",
      "Excess thyroid hormone. Causes: Graves' disease (most common), toxic nodule, thyroiditis. Symptoms: tachycardia, weight loss, heat intolerance, tremor."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_94",
    "q": "What is the minimum inhibitory concentration (MIC)?",
    "options": [
      "Lowest antibiotic concentration that inhibits visible bacterial growth. Used to determine susceptibility: susceptible (S), intermediate (I), or resistant (R). PK/PD determines dosing strategy.",
      "AGS list of medications potentially inappropriate in adults ≥65 years. Includes benzodiazepines, diphenhydramine, NSAIDs, tricyclics, muscle relaxants. Associated with falls, delirium, ADRs.",
      "Block Na-K-2Cl cotransporter in thick ascending loop of Henle → prevent Na/water reabsorption → diuresis. Examples: furosemide, bumetanide, torsemide. Also lose K⁺ and Mg²⁺.",
      "Recurrent severe headache, often unilateral, with nausea/vomiting, photophobia. Triggered by stress, hormones, foods. Aura in ~25%."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_95",
    "q": "Time-dependent vs. concentration-dependent antibiotics",
    "options": [
      "Time-dependent (β-lactams): efficacy from time above MIC → frequent dosing or extended infusion. Concentration-dependent (aminoglycosides, fluoroquinolones): efficacy from Cmax/MIC → once-daily dosing.",
      "Thiazide diuretics, ACE inhibitors, ARBs, or calcium channel blockers. In diabetes or CKD: ACE inhibitors or ARBs preferred.",
      "FDA's strongest drug warning in prescribing information. Indicates serious or life-threatening risks. Example: fluoroquinolones → tendonitis/tendon rupture; SSRIs → suicidality in pediatric patients.",
      "Renally cleared drugs accumulate → reduce dose or extend interval. Use eGFR to adjust. Avoid NSAIDs, contrast dye. Monitor metformin (hold if GFR<30), digoxin."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_96",
    "q": "What are beta-lactam antibiotics?",
    "options": [
      "Penicillins, cephalosporins, carbapenems, monobactams. Inhibit cell wall synthesis (PBP binding). Beta-lactamases inactivate them. Combination with beta-lactamase inhibitors (clavulanate, tazobactam) overcomes.",
      "Blood clot in deep vein (usually leg). Risk: Virchow's triad — stasis, endothelial injury, hypercoagulability. Complication: pulmonary embolism.",
      "Drugs targeting specific cancer mutations (e.g., imatinib for BCR-ABL in CML, trastuzumab for HER2+ breast cancer, erlotinib for EGFR-mutant NSCLC). More selective than chemotherapy.",
      "Persistent depressed mood or anhedonia × ≥2 weeks + ≥4 somatic symptoms. Treated with SSRIs/SNRIs first-line. Severe: add therapy, consider TMS or ECT."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_97",
    "q": "What is the renin-angiotensin-aldosterone system (RAAS)?",
    "options": [
      "Kidney releases renin → cleaves angiotensinogen to Ang I → ACE converts to Ang II → vasoconstriction + aldosterone release → Na/water retention. ACE inhibitors and ARBs block this.",
      "Blood clot in pulmonary artery, usually from DVT. Symptoms: sudden dyspnea, plupeuritic chest pain, tachycardia. Life-threatening emergency.",
      "Blood clot in deep vein (usually leg). Risk: Virchow's triad — stasis, endothelial injury, hypercoagulability. Complication: pulmonary embolism.",
      "Initial: LMWH, fondaparinux, or DOAC. Long-term: DOAC (rivaroxaban, apixaban) or warfarin. Duration: 3 months for provoked; indefinite for unprovoked or high-risk."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_98",
    "q": "What is the difference between ACE inhibitors and ARBs?",
    "options": [
      "ACE inhibitors: block conversion of Ang I → Ang II; cause dry cough (bradykinin). ARBs: block Ang II at AT1 receptor; no cough. Both avoid in pregnancy (teratogenic).",
      "Insufficient thyroid hormone. Most common cause: Hashimoto's thyroiditis. Symptoms: fatigue, weight gain, cold intolerance, bradycardia, constipation.",
      "Decreases hepatic glucose production (inhibits gluconeogenesis), improves insulin sensitivity. First-line for T2DM. Does not cause hypoglycemia alone.",
      "Major drug-metabolizing enzyme system in liver. CYP3A4: metabolizes ~50% of drugs. Inducers ↓ drug levels (rifampin, carbamazepine). Inhibitors ↑ drug levels (azole antifungals, macrolides)."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_99",
    "q": "What is HbA1c and its clinical significance?",
    "options": [
      "Glycated hemoglobin reflecting average blood glucose over 2-3 months. Target <7% for most diabetics. Higher targets (7.5-8%) for elderly or those with frequent hypoglycemia.",
      "Progressive dopamine neuron loss in substantia nigra. Cardinal features: bradykinesia, resting tremor, rigidity, postural instability. Non-motor: dementia, depression.",
      "Levodopa/carbidopa = gold standard. Also: dopamine agonists (pramipexole, ropinirole), MAO-B inhibitors (rasagiline, selegiline), COMT inhibitors.",
      "Reactive insulin dosing based on current blood glucose. Replaced by basal-bolus regimen: basal insulin (glargine/detemir) 24h + rapid-acting (lispro/aspart) with meals + correction doses."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_100",
    "q": "What is the insulin sliding scale concept?",
    "options": [
      "Reactive insulin dosing based on current blood glucose. Replaced by basal-bolus regimen: basal insulin (glargine/detemir) 24h + rapid-acting (lispro/aspart) with meals + correction doses.",
      "Autoimmune demyelination of CNS. Relapsing-remitting most common. Symptoms: visual disturbances (optic neuritis), weakness, fatigue, spasticity, bladder dysfunction.",
      "Transmural inflammation anywhere in GI tract (mouth to anus), most commonly terminal ileum. Skip lesions, cobblestone appearance, fistulas, granulomas.",
      "For osteoporosis: take on empty stomach with 8oz water, remain upright ≥30 min, avoid food/meds for 30 min. Adverse effects: esophageal irritation, osteonecrosis of jaw (rare), atypical femur fractures."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_101",
    "q": "What is opioid-induced constipation (OIC)?",
    "options": [
      "Opioids bind μ-receptors in GI tract → reduced motility, increased sphincter tone → constipation. Unlike other opioid side effects, tolerance does NOT develop. Treat: stimulant laxatives (senna).",
      "Mild-moderate: mesalamine (UC only), budesonide. Moderate-severe: corticosteroids, azathioprine/6-MP, biologics (TNF-α inhibitors: infliximab, adalimumab).",
      "Life-threatening organ dysfunction caused by dysregulated host response to infection. Septic shock: sepsis + vasopressors needed + lactate >2 mmol/L despite fluids.",
      "Type A (predictable): dose-dependent, extension of pharmacologic effect (e.g., bleeding from anticoagulants). Type B (unpredictable): idiosyncratic, immune-mediated (allergies, SJS). Type C/D/E also described."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_102",
    "q": "What is naloxone and how does it work?",
    "options": [
      "Opioid antagonist — competitively blocks μ, κ, and δ receptors. Reverses opioid overdose (respiratory depression). Short half-life → may need repeat doses. Available as Narcan nasal spray.",
      "Bacterial infection of urinary tract. Cystitis (lower): dysuria, frequency, urgency. Pyelonephritis (upper): fever, flank pain, systemic illness. Most common: E. coli.",
      "Mood stabilizers: lithium (evidence for suicide reduction), valproate, lamotrigine (bipolar depression). Atypical antipsychotics: quetiapine, olanzapine, aripiprazole.",
      "Stroke risk calculator in AFib. Score ≥2 in men or ≥3 in women → anticoagulation recommended (warfarin or DOAC)."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_103",
    "q": "What is drug tolerance?",
    "options": [
      "Reduced response to a drug after repeated exposure, requiring higher doses. Pharmacokinetic tolerance: increased metabolism. Pharmacodynamic tolerance: receptor downregulation or desensitization.",
      "2 NRTIs + 1 INSTI (integrase inhibitor, e.g., dolutegravir). Bictegravir/TAF/FTC (Biktarvy) or dolutegravir/abacavir/3TC (Triumeq) common options.",
      "Autoimmune symmetric polyarthritis primarily affecting small joints. Positive RF and anti-CCP. Systemic: fatigue, nodules, vasculitis. Treat: DMARDs (methotrexate first-line) + biologics.",
      "Insulin resistance + relative insulin deficiency. Most common form. Risk factors: obesity, inactivity, family history. HbA1c target typically <7%."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_104",
    "q": "What is physical dependence vs. addiction?",
    "options": [
      "Physical dependence: physiological adaptation requiring drug to avoid withdrawal. Addiction: compulsive drug-seeking behavior despite harm. Physical dependence can occur WITHOUT addiction.",
      "Psychotic disorder with positive symptoms (hallucinations, delusions, disorganized speech) and negative symptoms (flat affect, alogia, avolition, anhedonia).",
      "TI = TD50/ED50. Narrow TI drugs require close monitoring (lithium, warfarin, digoxin, phenytoin, aminoglycosides). Small dose changes can cause toxicity or subtherapeutic effect.",
      "Most common dementia. Progressive neurodegeneration with amyloid plaques and neurofibrillary tangles. Symptoms: memory loss, confusion, personality changes."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_105",
    "q": "What is the role of prostaglandins in inflammation?",
    "options": [
      "COX-1 and COX-2 convert arachidonic acid to prostaglandins → pain, fever, inflammation. NSAIDs inhibit COX → anti-inflammatory, analgesic, antipyretic. COX-1 inhibition → GI and platelet effects.",
      "Macrocytic (megaloblastic) anemia + neurological symptoms (subacute combined degeneration). Cause: pernicious anemia (anti-intrinsic factor Ab), malabsorption. Treat: B12 IM or high-dose oral.",
      "Penicillins, cephalosporins, carbapenems, monobactams. Inhibit cell wall synthesis (PBP binding). Beta-lactamases inactivate them. Combination with beta-lactamase inhibitors (clavulanate, tazobactam) overcomes.",
      "Functional GI disorder with abdominal pain + altered bowel habits (IBS-C, IBS-D, or mixed) without structural abnormality. Diagnosis of exclusion."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_106",
    "q": "What is the mechanism of statin drugs?",
    "options": [
      "HMG-CoA reductase inhibitors → ↓ cholesterol synthesis in liver → upregulation of LDL receptors → ↓ LDL. Also pleiotropic effects: anti-inflammatory, plaque stabilization.",
      "Chronic autoimmune skin condition. Plaques: well-demarcated, silvery-scaled, erythematous, commonly on elbows/knees/scalp. Treat: topical steroids, vitamin D analogs; severe: biologics.",
      "Apixaban/rivaroxaban: Factor Xa inhibitors. Dabigatran: direct thrombin inhibitor. Advantages over warfarin: predictable dosing, fewer interactions, no INR monitoring. Reversal agents available.",
      "2 NRTIs + 1 INSTI (integrase inhibitor, e.g., dolutegravir). Bictegravir/TAF/FTC (Biktarvy) or dolutegravir/abacavir/3TC (Triumeq) common options."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_107",
    "q": "What is warfarin's mechanism and monitoring?",
    "options": [
      "Vitamin K antagonist → inhibits clotting factors II, VII, IX, X (and protein C, S). Monitored with INR (target 2-3 for most indications). Many drug and food interactions (vitamin K-rich foods).",
      "TI = TD50/ED50. Narrow TI drugs require close monitoring (lithium, warfarin, digoxin, phenytoin, aminoglycosides). Small dose changes can cause toxicity or subtherapeutic effect.",
      "Ongoing monitoring of medication safety after approval (post-marketing surveillance). Pharmacists report adverse events via MedWatch (FDA). Identifies rare/delayed adverse effects not seen in trials.",
      "Most common anemia worldwide. Cause: blood loss (women), malabsorption, poor diet. Labs: ↓ Hgb, ↓ MCV (microcytic), ↓ ferritin, ↑ TIBC. Treat: oral iron."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_108",
    "q": "What are direct oral anticoagulants (DOACs)?",
    "options": [
      "Apixaban/rivaroxaban: Factor Xa inhibitors. Dabigatran: direct thrombin inhibitor. Advantages over warfarin: predictable dosing, fewer interactions, no INR monitoring. Reversal agents available.",
      "Severe cutaneous drug reaction with mucosal involvement, epidermal detachment <10% BSA. TEN: >30% BSA. Common culprits: allopurinol, anticonvulsants (carbamazepine, lamotrigine), sulfonamides.",
      "Harnessing immune system to fight cancer. Checkpoint inhibitors (PD-1/PD-L1, CTLA-4 blockers: pembrolizumab, nivolumab) remove 'brakes' on T-cells. Immune-related adverse events (irAEs): colitis, pneumonitis, endocrinopathies.",
      "Breast cancer (ER+/PR+: tamoxifen or aromatase inhibitors), prostate cancer (androgen deprivation therapy: GnRH agonists + anti-androgens), endometrial cancer."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_109",
    "q": "What is the mechanism of loop diuretics?",
    "options": [
      "Block Na-K-2Cl cotransporter in thick ascending loop of Henle → prevent Na/water reabsorption → diuresis. Examples: furosemide, bumetanide, torsemide. Also lose K⁺ and Mg²⁺.",
      "Glycated hemoglobin reflecting average blood glucose over 2-3 months. Target <7% for most diabetics. Higher targets (7.5-8%) for elderly or those with frequent hypoglycemia.",
      "Rupture of atherosclerotic plaque → thrombus formation → coronary artery occlusion → myocardial necrosis. STEMI: complete occlusion. NSTEMI: partial.",
      "Penicillins, cephalosporins, carbapenems, monobactams. Inhibit cell wall synthesis (PBP binding). Beta-lactamases inactivate them. Combination with beta-lactamase inhibitors (clavulanate, tazobactam) overcomes."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_110",
    "q": "What is the mechanism of thiazide diuretics?",
    "options": [
      "Block Na-Cl cotransporter in distal convoluted tubule. Less potent than loop diuretics. Examples: hydrochlorothiazide, chlorthalidone. First-line for HTN; also for hypercalciuria (calcium stones).",
      "HMG-CoA reductase inhibitors → ↓ cholesterol synthesis in liver → upregulation of LDL receptors → ↓ LDL. Also pleiotropic effects: anti-inflammatory, plaque stabilization.",
      "Insulin resistance + relative insulin deficiency. Most common form. Risk factors: obesity, inactivity, family history. HbA1c target typically <7%.",
      "Block Na-K-2Cl cotransporter in thick ascending loop of Henle → prevent Na/water reabsorption → diuresis. Examples: furosemide, bumetanide, torsemide. Also lose K⁺ and Mg²⁺."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_111",
    "q": "What is hypokalemia?",
    "options": [
      "Serum K⁺ <3.5 mEq/L. Causes: loop/thiazide diuretics, vomiting, diarrhea, hyperaldosteronism. Symptoms: muscle weakness, cramps, arrhythmias (↑ digoxin toxicity risk). Treat: KCl supplementation.",
      "Chronic use risks: C. diff infection, community-acquired pneumonia, Mg²⁺ deficiency, osteoporosis/fractures, B12 deficiency, chronic kidney disease. Use lowest effective dose.",
      "Progressive dopamine neuron loss in substantia nigra. Cardinal features: bradykinesia, resting tremor, rigidity, postural instability. Non-motor: dementia, depression.",
      "Severe heart failure causing ↓ cardiac output → end-organ hypoperfusion despite adequate volume. Most common cause: massive MI. Treat: inotropes, vasopressors, mechanical support (IABP), revascularization."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_112",
    "q": "What is digoxin toxicity?",
    "options": [
      "Narrow TI. Toxicity: nausea, visual disturbances (yellow-green halos), bradycardia, heart block, arrhythmias. Worsened by hypokalemia, renal failure, hypomagnesemia. Treat: digoxin-immune Fab.",
      "Elderly: ↓ renal clearance, ↑ fat, ↓ albumin → drug accumulation. Pediatrics: different metabolism (immature CYP). Pregnancy: ↑ renal clearance, ↑ plasma volume. Obese: ↑ Vd for lipophilic drugs.",
      "Triple therapy: PPI + clarithromycin + amoxicillin × 14 days. Quadruple (if clarithromycin resistance): PPI + bismuth + metronidazole + tetracycline.",
      "Inability of the heart to pump sufficient blood to meet metabolic needs. Classified by ejection fraction: HFrEF (<40%) or HFpEF (≥50%)."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_113",
    "q": "What are bisphosphonate counseling key points?",
    "options": [
      "For osteoporosis: take on empty stomach with 8oz water, remain upright ≥30 min, avoid food/meds for 30 min. Adverse effects: esophageal irritation, osteonecrosis of jaw (rare), atypical femur fractures.",
      "AGS list of medications potentially inappropriate in adults ≥65 years. Includes benzodiazepines, diphenhydramine, NSAIDs, tricyclics, muscle relaxants. Associated with falls, delirium, ADRs.",
      "Uncomplicated cystitis: nitrofurantoin or TMP-SMX × 3 days. Pyelonephritis: fluoroquinolone × 7-14 days or IV ceftriaxone. Consider culture/sensitivity.",
      "Blood clot in pulmonary artery, usually from DVT. Symptoms: sudden dyspnea, plupeuritic chest pain, tachycardia. Life-threatening emergency."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_114",
    "q": "What is proton pump inhibitor (PPI) long-term concerns?",
    "options": [
      "Chronic use risks: C. diff infection, community-acquired pneumonia, Mg²⁺ deficiency, osteoporosis/fractures, B12 deficiency, chronic kidney disease. Use lowest effective dose.",
      "Thiazide diuretics, ACE inhibitors, ARBs, or calcium channel blockers. In diabetes or CKD: ACE inhibitors or ARBs preferred.",
      "Mood disorder with episodes of mania/hypomania alternating with depression. Bipolar I: full mania. Bipolar II: hypomania + depression. Risk: suicide especially during depression.",
      "Focal: lamotrigine, levetiracetam, carbamazepine. Generalized tonic-clonic: valproate (caution in women), levetiracetam, lamotrigine. Absence: ethosuximide."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_115",
    "q": "What is the opioid conversion concept?",
    "options": [
      "Converting between opioids using morphine milligram equivalents (MME). Example: 30 mg oral morphine = 20 mg oral oxycodone = 7.5mg oral hydromorphone. Reduce 25-50% for incomplete cross-tolerance.",
      "Blood clot in deep vein (usually leg). Risk: Virchow's triad — stasis, endothelial injury, hypercoagulability. Complication: pulmonary embolism.",
      "Initial: LMWH, fondaparinux, or DOAC. Long-term: DOAC (rivaroxaban, apixaban) or warfarin. Duration: 3 months for provoked; indefinite for unprovoked or high-risk.",
      "Transmural inflammation anywhere in GI tract (mouth to anus), most commonly terminal ileum. Skip lesions, cobblestone appearance, fistulas, granulomas."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_116",
    "q": "What is benzodiazepine withdrawal?",
    "options": [
      "Life-threatening: seizures, delirium tremens. Never abrupt discontinuation. Symptoms: anxiety, insomnia, tremor, diaphoresis. Long-acting benzo (chlordiazepoxide, diazepam) tapering for alcohol withdrawal.",
      "Blood clot in pulmonary artery, usually from DVT. Symptoms: sudden dyspnea, plupeuritic chest pain, tachycardia. Life-threatening emergency.",
      "Absorption: drug enters systemic circulation. Distribution: spreads to tissues (affected by protein binding, lipophilicity). Metabolism: liver (CYP450). Excretion: kidney (GFR, tubular secretion).",
      "Methicillin-resistant Staphylococcus aureus — resistant to beta-lactams. Skin/soft tissue: TMP-SMX or doxycycline. Serious infections: vancomycin, linezolid, or daptomycin."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_117",
    "q": "What is the mechanism of beta-blockers?",
    "options": [
      "Competitively block β1 (cardiac: ↓ HR, contractility), β2 (bronchospasm in asthmatics), or both. Uses: HTN, heart failure, angina, arrhythmias, post-MI, migraine prophylaxis, tremor, anxiety.",
      "Insufficient thyroid hormone. Most common cause: Hashimoto's thyroiditis. Symptoms: fatigue, weight gain, cold intolerance, bradycardia, constipation.",
      "Time-dependent (β-lactams): efficacy from time above MIC → frequent dosing or extended infusion. Concentration-dependent (aminoglycosides, fluoroquinolones): efficacy from Cmax/MIC → once-daily dosing.",
      "Post-traumatic stress disorder after trauma exposure. Symptoms: flashbacks, nightmares, avoidance, hypervigilance, negative cognitions. First-line: trauma-focused psychotherapy + SSRI/SNRI."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_118",
    "q": "What is the mechanism of calcium channel blockers (CCBs)?",
    "options": [
      "Dihydropyridines (amlodipine, nifedipine): selective vascular smooth muscle → vasodilation → ↓ BP. Non-DHPs (diltiazem, verapamil): also cardiac → ↓ HR + contractility.",
      "Progressive dopamine neuron loss in substantia nigra. Cardinal features: bradykinesia, resting tremor, rigidity, postural instability. Non-motor: dementia, depression.",
      "HMG-CoA reductase inhibitors → ↓ cholesterol synthesis in liver → upregulation of LDL receptors → ↓ LDL. Also pleiotropic effects: anti-inflammatory, plaque stabilization.",
      "Bacterial skin/soft tissue infection (non-purulent). Most common: Streptococcus pyogenes, S. aureus. Treatment: dicloxacillin or cephalexin; MRSA suspected: TMP-SMX or doxycycline."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_119",
    "q": "What is pharmacovigilance?",
    "options": [
      "Ongoing monitoring of medication safety after approval (post-marketing surveillance). Pharmacists report adverse events via MedWatch (FDA). Identifies rare/delayed adverse effects not seen in trials.",
      "Autoimmune demyelination of CNS. Relapsing-remitting most common. Symptoms: visual disturbances (optic neuritis), weakness, fatigue, spasticity, bladder dysfunction.",
      "Competitively block β1 (cardiac: ↓ HR, contractility), β2 (bronchospasm in asthmatics), or both. Uses: HTN, heart failure, angina, arrhythmias, post-MI, migraine prophylaxis, tremor, anxiety.",
      "Study of genetic variation affecting drug response. Example: CYP2D6 poor metabolizers → ↑ codeine toxicity. HLA-B*5701 → abacavir hypersensitivity. TPMT testing before thiopurines."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_120",
    "q": "What is a boxed (black box) warning?",
    "options": [
      "FDA's strongest drug warning in prescribing information. Indicates serious or life-threatening risks. Example: fluoroquinolones → tendonitis/tendon rupture; SSRIs → suicidality in pediatric patients.",
      "Mild-moderate: mesalamine (UC only), budesonide. Moderate-severe: corticosteroids, azathioprine/6-MP, biologics (TNF-α inhibitors: infliximab, adalimumab).",
      "Extent to which patient takes medication as prescribed. Factors: side effects, cost, complexity, beliefs, forgetfulness. Poor adherence is major cause of treatment failure. Pharmacist counseling improves adherence.",
      "HMG-CoA reductase inhibitors → ↓ cholesterol synthesis in liver → upregulation of LDL receptors → ↓ LDL. Also pleiotropic effects: anti-inflammatory, plaque stabilization."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_121",
    "q": "What is pharmacokinetics in special populations?",
    "options": [
      "Elderly: ↓ renal clearance, ↑ fat, ↓ albumin → drug accumulation. Pediatrics: different metabolism (immature CYP). Pregnancy: ↑ renal clearance, ↑ plasma volume. Obese: ↑ Vd for lipophilic drugs.",
      "Bacterial infection of urinary tract. Cystitis (lower): dysuria, frequency, urgency. Pyelonephritis (upper): fever, flank pain, systemic illness. Most common: E. coli.",
      "Chest pain/pressure from myocardial ischemia due to reduced coronary blood flow. Stable: predictable with exertion. Unstable: at rest, more dangerous.",
      "Ongoing monitoring of medication safety after approval (post-marketing surveillance). Pharmacists report adverse events via MedWatch (FDA). Identifies rare/delayed adverse effects not seen in trials."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_122",
    "q": "What is the mechanism of ACE inhibitors in heart failure?",
    "options": [
      "Block ACE → ↓ Ang II → vasodilation (↓ afterload), ↓ aldosterone → ↓ preload. Prevent ventricular remodeling, reducing hospitalizations and mortality in HFrEF.",
      "2 NRTIs + 1 INSTI (integrase inhibitor, e.g., dolutegravir). Bictegravir/TAF/FTC (Biktarvy) or dolutegravir/abacavir/3TC (Triumeq) common options.",
      "Autoimmune destruction of pancreatic β-cells → absolute insulin deficiency. Requires lifelong insulin therapy. DKA is life-threatening complication.",
      "Program to optimize antibiotic use, reduce resistance, and minimize adverse effects. Key: right antibiotic, dose, route, duration. De-escalate based on culture; avoid broad-spectrum when narrow-spectrum appropriate."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_123",
    "q": "What is cardiogenic shock?",
    "options": [
      "Severe heart failure causing ↓ cardiac output → end-organ hypoperfusion despite adequate volume. Most common cause: massive MI. Treat: inotropes, vasopressors, mechanical support (IABP), revascularization.",
      "Psychotic disorder with positive symptoms (hallucinations, delusions, disorganized speech) and negative symptoms (flat affect, alogia, avolition, anhedonia).",
      "Focal: lamotrigine, levetiracetam, carbamazepine. Generalized tonic-clonic: valproate (caution in women), levetiracetam, lamotrigine. Absence: ethosuximide.",
      "Progressive, irreversible airflow obstruction from emphysema and/or chronic bronchitis. Caused primarily by smoking. FEV1/FVC <0.7 on spirometry."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_124",
    "q": "What is anaphylaxis?",
    "options": [
      "Severe, life-threatening systemic allergic reaction. Triggers: drugs (penicillin), food (peanuts), insect venom. Symptoms: urticaria, angioedema, bronchospasm, hypotension. Treatment: epinephrine IM immediately.",
      "Macrocytic (megaloblastic) anemia + neurological symptoms (subacute combined degeneration). Cause: pernicious anemia (anti-intrinsic factor Ab), malabsorption. Treat: B12 IM or high-dose oral.",
      "Ulcers in stomach (gastric) or duodenum. Most common causes: H. pylori infection, NSAID use. Symptoms: epigastric pain, nausea, GI bleeding.",
      "Monosodium urate crystal deposition in joints from hyperuricemia. Acute: extreme joint pain (great toe most common). Chronic: tophi, kidney stones."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_125",
    "q": "What is drug-induced lupus (DIL)?",
    "options": [
      "Lupus-like syndrome from drugs: hydralazine (most common), procainamide, isoniazid, minocycline, TNF-α inhibitors. Anti-histone antibodies. Resolves on discontinuation.",
      "Chronic autoimmune skin condition. Plaques: well-demarcated, silvery-scaled, erythematous, commonly on elbows/knees/scalp. Treat: topical steroids, vitamin D analogs; severe: biologics.",
      "Bacterial infection of urinary tract. Cystitis (lower): dysuria, frequency, urgency. Pyelonephritis (upper): fever, flank pain, systemic illness. Most common: E. coli.",
      "Lifestyle changes → antacids PRN → H2 blockers (famotidine) → PPIs (omeprazole, pantoprazole). PPIs most effective; use lowest effective dose."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_126",
    "q": "What are ADRs (adverse drug reactions)?",
    "options": [
      "Type A (predictable): dose-dependent, extension of pharmacologic effect (e.g., bleeding from anticoagulants). Type B (unpredictable): idiosyncratic, immune-mediated (allergies, SJS). Type C/D/E also described.",
      "TI = TD50/ED50. Narrow TI drugs require close monitoring (lithium, warfarin, digoxin, phenytoin, aminoglycosides). Small dose changes can cause toxicity or subtherapeutic effect.",
      "Selectively inhibit serotonin reuptake transporter (SERT) → ↑ synaptic serotonin. Examples: fluoxetine, sertraline, escitalopram. First-line for depression and anxiety.",
      "Uncomplicated cystitis: nitrofurantoin or TMP-SMX × 3 days. Pyelonephritis: fluoroquinolone × 7-14 days or IV ceftriaxone. Consider culture/sensitivity."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_127",
    "q": "What is polypharmacy and its risks?",
    "options": [
      "Use of ≥5 medications simultaneously. Risks: drug-drug interactions, additive ADRs, non-adherence, falls (especially in elderly), inappropriate prescribing. Regular medication reconciliation essential.",
      "Severe cutaneous drug reaction with mucosal involvement, epidermal detachment <10% BSA. TEN: >30% BSA. Common culprits: allopurinol, anticonvulsants (carbamazepine, lamotrigine), sulfonamides.",
      "Autosomal recessive HbS mutation → red cell sickling under hypoxia → hemolysis, vaso-occlusion. Painful crises, organ damage, stroke. Treat: hydroxyurea, transfusions, SCT.",
      "Psychotic disorder with positive symptoms (hallucinations, delusions, disorganized speech) and negative symptoms (flat affect, alogia, avolition, anhedonia)."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_128",
    "q": "What is the Beers Criteria?",
    "options": [
      "AGS list of medications potentially inappropriate in adults ≥65 years. Includes benzodiazepines, diphenhydramine, NSAIDs, tricyclics, muscle relaxants. Associated with falls, delirium, ADRs.",
      "Glycated hemoglobin reflecting average blood glucose over 2-3 months. Target <7% for most diabetics. Higher targets (7.5-8%) for elderly or those with frequent hypoglycemia.",
      "Breast cancer (ER+/PR+: tamoxifen or aromatase inhibitors), prostate cancer (androgen deprivation therapy: GnRH agonists + anti-androgens), endometrial cancer.",
      "Multi-system autoimmune disease. Butterfly rash, arthritis, nephritis, serositis, positive ANA. Drug-induced lupus: hydralazine, procainamide, isoniazid."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_129",
    "q": "What is medication adherence?",
    "options": [
      "Extent to which patient takes medication as prescribed. Factors: side effects, cost, complexity, beliefs, forgetfulness. Poor adherence is major cause of treatment failure. Pharmacist counseling improves adherence.",
      "HMG-CoA reductase inhibitors → ↓ cholesterol synthesis in liver → upregulation of LDL receptors → ↓ LDL. Also pleiotropic effects: anti-inflammatory, plaque stabilization.",
      "Lowest antibiotic concentration that inhibits visible bacterial growth. Used to determine susceptibility: susceptible (S), intermediate (I), or resistant (R). PK/PD determines dosing strategy.",
      "Urinary retention, constipation, dry mouth, blurred vision, confusion/delirium, tachycardia. Anticholinergic drugs: diphenhydramine, tricyclics, oxybutynin, benztropine, some antipsychotics."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_130",
    "q": "What is immunotherapy in cancer?",
    "options": [
      "Harnessing immune system to fight cancer. Checkpoint inhibitors (PD-1/PD-L1, CTLA-4 blockers: pembrolizumab, nivolumab) remove 'brakes' on T-cells. Immune-related adverse events (irAEs): colitis, pneumonitis, endocrinopathies.",
      "For osteoporosis: take on empty stomach with 8oz water, remain upright ≥30 min, avoid food/meds for 30 min. Adverse effects: esophageal irritation, osteonecrosis of jaw (rare), atypical femur fractures.",
      "COX-1 and COX-2 convert arachidonic acid to prostaglandins → pain, fever, inflammation. NSAIDs inhibit COX → anti-inflammatory, analgesic, antipyretic. COX-1 inhibition → GI and platelet effects.",
      "Reduced response to a drug after repeated exposure, requiring higher doses. Pharmacokinetic tolerance: increased metabolism. Pharmacodynamic tolerance: receptor downregulation or desensitization."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_131",
    "q": "What is targeted therapy in cancer?",
    "options": [
      "Drugs targeting specific cancer mutations (e.g., imatinib for BCR-ABL in CML, trastuzumab for HER2+ breast cancer, erlotinib for EGFR-mutant NSCLC). More selective than chemotherapy.",
      "FDA's strongest drug warning in prescribing information. Indicates serious or life-threatening risks. Example: fluoroquinolones → tendonitis/tendon rupture; SSRIs → suicidality in pediatric patients.",
      "Life-threatening: seizures, delirium tremens. Never abrupt discontinuation. Symptoms: anxiety, insomnia, tremor, diaphoresis. Long-acting benzo (chlordiazepoxide, diazepam) tapering for alcohol withdrawal.",
      "Dihydropyridines (amlodipine, nifedipine): selective vascular smooth muscle → vasodilation → ↓ BP. Non-DHPs (diltiazem, verapamil): also cardiac → ↓ HR + contractility."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_132",
    "q": "What is the difference between bacterial and viral infections?",
    "options": [
      "Bacteria: prokaryotes, treated with antibiotics. Viruses: intracellular parasites using host machinery, treated with antivirals. Antibiotics do NOT treat viral infections. Misuse contributes to antimicrobial resistance.",
      "Use of ≥5 medications simultaneously. Risks: drug-drug interactions, additive ADRs, non-adherence, falls (especially in elderly), inappropriate prescribing. Regular medication reconciliation essential.",
      "AGS list of medications potentially inappropriate in adults ≥65 years. Includes benzodiazepines, diphenhydramine, NSAIDs, tricyclics, muscle relaxants. Associated with falls, delirium, ADRs.",
      "Extent to which patient takes medication as prescribed. Factors: side effects, cost, complexity, beliefs, forgetfulness. Poor adherence is major cause of treatment failure. Pharmacist counseling improves adherence."
    ],
    "correct": 0
  },
  {
    "id": "diseases_ex_133",
    "q": "What is antimicrobial stewardship?",
    "options": [
      "Program to optimize antibiotic use, reduce resistance, and minimize adverse effects. Key: right antibiotic, dose, route, duration. De-escalate based on culture; avoid broad-spectrum when narrow-spectrum appropriate.",
      "Thiazide diuretics, ACE inhibitors, ARBs, or calcium channel blockers. In diabetes or CKD: ACE inhibitors or ARBs preferred.",
      "Stroke risk calculator in AFib. Score ≥2 in men or ≥3 in women → anticoagulation recommended (warfarin or DOAC).",
      "Elevated blood lipids (LDL, triglycerides, total cholesterol) or low HDL. Major risk factor for atherosclerosis and cardiovascular disease."
    ],
    "correct": 0
  }
]
}];
const diseasesCases$1 = [];

const drugFlashcards$1 = [{
  id: "builtin_drug",
  title: "Drug Counseling Flashcards",
  icon: "Layers",
  color: "#f59e0b",
  isBuiltIn: true,
  isBuiltin: true,
  cards: [
  {
    "id": "drug_fc_0",
    "q": "Acetaminophen",
    "a": "Brand: Tylenol\nIndication: pain\nClass: Analgesic\nCounseling Points:\n- Do not exceed recommended daily dose of 3g OTC (max of 4g if prescribed)\n- Avoid 3 or more alcoholic drinks/day",
    "nextReview": 0
  },
  {
    "id": "drug_fc_1",
    "q": "Acyclovir",
    "a": "Brand: Zovirax\nIndication: herpes\nClass: Viral DNA polymerase inhibitor\nCounseling Points:\n- Complete full course of therapy\n- Symptoms should improve within 2-3 days; if they don't or worsen, seek medical attention\n- Take at first signs of symptoms for best efficacy",
    "nextReview": 0
  },
  {
    "id": "drug_fc_2",
    "q": "Adalimumab",
    "a": "Brand: Humira\nIndication: Crohn's disease\nClass: Antirheumatic biologic DMARD\nCounseling Points:\n- Store in refrigerator; may be stored at room temp for up to 14 days\n- Rotate injection sites\n- Notify provider if develop SOB or infection\n- Ensure vaccinations are up-to-date BEFORE starting therapy",
    "nextReview": 0
  },
  {
    "id": "drug_fc_3",
    "q": "Albuterol sulfate (HFA)",
    "a": "Brand: ProAir HFA, Proventil HFA, Ventolin HFA, ProAir RespiClick\nIndication: COPD\nClass: Selective B2-adrenergic agonist\nCounseling Points:\n- Instruct patient on proper inhaler technique\n- Wash the mouthpiece and thoroughly dry once a week\n- Do not use more frequently than prescribed\n- DPI does not require shaking or priming but does require deep inhalation\n- When inhaling, hold breath for 10 seconds, if able",
    "nextReview": 0
  },
  {
    "id": "drug_fc_4",
    "q": "Alendronate",
    "a": "Brand: Fosamax\nIndication: osteoporosis\nClass: Biphosphonate\nCounseling Points:\n- Remain upright at least 30 minutes after you swallow the tablet\n- Do not eat or drink anything or take other medications for at least 30 minutes after taking alendronate\n- Swallow the non-effervescent tablet whole with a large glass of water",
    "nextReview": 0
  },
  {
    "id": "drug_fc_5",
    "q": "Allopurinol",
    "a": "Brand: Zyloprim\nIndication: gout\nClass: Xanthine oxidase inhibitor; antigout\nCounseling Points:\n- Take after meals to lessen gastric irritation\n- Maintain adequate hydration to prevent kidney stones\n- Avoid alcohol and caffeine\n- Seek medical attention if you experience flulike symptoms, spreading red rash, skin blistering",
    "nextReview": 0
  },
  {
    "id": "drug_fc_6",
    "q": "Alprazolam",
    "a": "Brand: Xanax\nIndication: anxiety\nClass: Benzodiazepine, short or intermediate acting, C-IV\nCounseling Points:\n- May cause drowsiness\n- Avoid alcohol\n- Do not crush or break extended release product\n- Allow ODT to dissolve on your tongue\n- Do not abruptly discontinue use or self-increase dose",
    "nextReview": 0
  },
  {
    "id": "drug_fc_7",
    "q": "Amiodarone",
    "a": "Brand: Pacerone\nIndication: arrhythmias\nClass: antiarrhythmic\nCounseling Points:\n- avoid prolonged sun exposure/tanning beds and use sunscreen\n- take consistently with regard to meals\n- avoid grapefruit\n- multiple drug interactions",
    "nextReview": 0
  },
  {
    "id": "drug_fc_8",
    "q": "Amitriptyline",
    "a": "Brand: Elavil\nIndication: depression\nClass: Tricyclic antidepressant\nCounseling Points:\n- May cause drowsiness\n- Avoid alcohol\n- Improvement in symptoms may take a few weeks\n- Avoid sudden discontinuation",
    "nextReview": 0
  },
  {
    "id": "drug_fc_9",
    "q": "Amlodipine",
    "a": "Brand: Norvasc\nIndication: hypertension\nClass: calcium channel blocker\nCounseling Points:\n- avoid alcohol\n- this medicine may cause dizziness\n- report peripheral edema, fatigue, hypotension",
    "nextReview": 0
  },
  {
    "id": "drug_fc_10",
    "q": "Amoxicillin",
    "a": "Brand: N/A (Amoxil, Moxatag)\nIndication: infection\nClass: B-lactam antiobiotic\nCounseling Points:\n- Complete full course of therapy\n- Store the suspension in the refrigerator, shake well before use\n- Can take with food if stomach upset\n- If symptoms don't improve within 2-3 days or worsen, follow-up with healthcare provider\n- May decrease effectiveness of oral contraceptives; use backup contraceptive",
    "nextReview": 0
  },
  {
    "id": "drug_fc_11",
    "q": "Amoxicillin/Clavulanate",
    "a": "Brand: Augmentin\nIndication: infection\nClass: B-lactam antibiotic\nCounseling Points:\n- Complete full course of therapy\n- If symptoms don't improve within 2-3 days or worsen, follow-up with healthcare provider\n- Take dose with food\n- For suspension, store in refrigerator and shake well\n- May decrease effectiveness of oral contraceptives; use backup contraceptive\n- May cause diarrhea",
    "nextReview": 0
  },
  {
    "id": "drug_fc_12",
    "q": "Anastrozole",
    "a": "Brand: Arimidex\nIndication: cancer\nClass: aromatase inhibitor\nCounseling Points:\n- seek medical attention if you experience shortness of breath, swelling, chest pain, vaginal bleeding, blistering rash, rapid weight gain, severe nausea and vomiting, yellowing of the eyes or skin\n- take with or without food\n- can cause loss of bone mass density and increased fracture risk",
    "nextReview": 0
  },
  {
    "id": "drug_fc_13",
    "q": "Apixaban",
    "a": "Brand: Eliquis\nIndication: anticoagulation\nClass: factor Xa inhibitor\nCounseling Points:\n- take with or without food\n- seek medical attention if having bleeding or trouble breathing\n- do not stop without talking with your doctor\n- avoid NSAIDs and high-dose aspirin\n- do not abruptly stop this medication due to increased risk of thrombotic events (stroke or clots)",
    "nextReview": 0
  },
  {
    "id": "drug_fc_14",
    "q": "Aripiprazole",
    "a": "Brand: Abilify\nIndication: schizophrenia\nClass: Second generation antipsychotic\nCounseling Points:\n- May impair heat regulation\n- May lower seizure threshold\n- Report worsening depression, suicidal ideation, or unusual changes in behavior, especially at initiation of therapy or with dose changes\n- Avoid sudden discontinuation\n- Avoid alcohol",
    "nextReview": 0
  },
  {
    "id": "drug_fc_15",
    "q": "Aspirin 81 mg",
    "a": "Brand: N/A (Bayer, Ecotrin)\nIndication: cardiovascular protection, pain\nClass: Salicylate\nCounseling Points:\n- Avoid additional aspirin/NSAID products\n- Avoid 3 or more alcoholic drinks/day\n- Not recommended for children <18 years of age",
    "nextReview": 0
  },
  {
    "id": "drug_fc_16",
    "q": "Atenolol",
    "a": "Brand: Tenormin\nIndication: hypertension\nClass: B-adrenergic blocker, cardioselective\nCounseling Points:\n- take on an empty stomach\n- avoid abrupt discontinuation\n- may cause dizziness or drowsiness\n- may mask symptoms of hypoglycemia\n- may cause sexual side effects, fatigue, and depression",
    "nextReview": 0
  },
  {
    "id": "drug_fc_17",
    "q": "Atorvastatin",
    "a": "Brand: Lipitor\nIndication: dyslipidemia\nClass: HMG-CoA reductase inhibitor\nCounseling Points:\n- avoid excessive alcohol and grapefruit\n- notify prescriber if having unexplained muscle tenderness or weakness\n- this medication does not replace lifestyle changes (diet, exercise)",
    "nextReview": 0
  },
  {
    "id": "drug_fc_18",
    "q": "Azelastine nasal",
    "a": "Brand: Astelin\nIndication: allergic rhinitis\nClass: Nasal antihistamine\nCounseling Points:\n- Priming required with initial use and if not used for 3 days or longer\n- Blow nose prior to use\n- Do not spray into septum\n- Keep tip of nose spray clean",
    "nextReview": 0
  },
  {
    "id": "drug_fc_19",
    "q": "Azithromycin",
    "a": "Brand: Zithromax, Z-Pak\nIndication: infection\nClass: Macrolide antibiotic\nCounseling Points:\n- Continue full course of therapy\n- May cause Gl upset\n- Take with or without food\n- If symptoms don't improve within 2-3 days or worsen, follow-up with healthcare provider",
    "nextReview": 0
  },
  {
    "id": "drug_fc_20",
    "q": "Baclofen",
    "a": "Brand: N/A (Lioresal)\nIndication: pain, spasticity\nClass: Centrally acting skeletal muscle relaxant\nCounseling Points:\n- Caution that sedation is possible\n- CNS effects may be additive to those of alcohol",
    "nextReview": 0
  },
  {
    "id": "drug_fc_21",
    "q": "Benazepril",
    "a": "Brand: N/A (Lotensin)\nIndication: hypertension\nClass: ACE-inhibitor, antihypertensive\nCounseling Points:\n- avoid pregnancy\n- seek medical attention if you experience any facial swelling\n- dry cough is common\n- dizziness may worsen if dehydrated\n- take at the same time each day",
    "nextReview": 0
  },
  {
    "id": "drug_fc_22",
    "q": "Benzonatate",
    "a": "Brand: Tessalon, Perles\nIndication: cough\nClass: Antitussive\nCounseling Points:\n- Do not crush or chew capsules\n- Take with food or milk if Gl upset occurs\n- Keep out of reach of children",
    "nextReview": 0
  },
  {
    "id": "drug_fc_23",
    "q": "Bisoprolol/Hydrochlorothiazide",
    "a": "Brand: N/A\nIndication: hypertension\nClass: cardioselective B-adrenergic blocker\nCounseling Points:\n- may cause drowsiness, depression, or sexual dysfunction\n- may mask signs of low blood sugar\n- may cause orthostatic hypotension\n- do not abruptly discontinue",
    "nextReview": 0
  },
  {
    "id": "drug_fc_24",
    "q": "Budesonide/Formoterol",
    "a": "Brand: Symbicort\nIndication: asthma\nClass: Inhaled corticosteroid/bronchodilator combination\nCounseling Points:\n- Wait 1 minute after initial inhalation and shake inhaler again before next inhalation, if more than 1 inhalation required\n- After inhalation, rinse mouth with water and spit\n- Wash mouthpiece and air-dry once weekly",
    "nextReview": 0
  },
  {
    "id": "drug_fc_25",
    "q": "Buprenorphine/Naloxone",
    "a": "Brand: Suboxone, Zubsolv\nIndication: opioid dependence\nClass: Opioid partial agonist and antagonist combination, C-III\nCounseling Points:\n- Use a stool softener/laxative for preventing constipation\n- May cause drowsiness\n- Do not crush or swallow SL tablet\n- Do not chew, swallow, or move film after placing it under tongue",
    "nextReview": 0
  },
  {
    "id": "drug_fc_26",
    "q": "Bupropion XL",
    "a": "Brand: Aplenzin, Wellbutrin SR, Wellbutrin XL Zyban\nIndication: depression, smoking cessation\nClass: Monocyclic antidepressant\nCounseling Points:\n- Avoid alcohol and activities requiring mental alertness\n- Take at the same time each day\n- If taking the ER tablet, shell may remain intact and be visible in the stool\n- Symptomatic improvement may not be seen for several weeks\n- Report worsening depression, suicidal ideation, unusual changes in behavior, or unusual bleeding",
    "nextReview": 0
  },
  {
    "id": "drug_fc_27",
    "q": "Buspirone",
    "a": "Brand: BuSpar\nIndication: anxiety\nClass: Antianxiety\nCounseling Points:\n- Avoid activities requiring mental alertness until effects are realized\n- Symptomatic improvement might not be seen for a few weeks\n- Do not suddenly discontinue\n- May take with or without food, but be consistent\n- Avoid alcohol and grapefruit",
    "nextReview": 0
  },
  {
    "id": "drug_fc_28",
    "q": "Canagliflozin",
    "a": "Brand: Invokana\nIndication: diabetes\nClass: Antidiabetic agent, sodium glucose cotransporter 2 (SGLT 2) inhibitor\nCounseling Points:\n- Take before the first meal of the day\n- Can cause vaginal infections",
    "nextReview": 0
  },
  {
    "id": "drug_fc_29",
    "q": "Carbamazepine",
    "a": "Brand: Tegretol\nIndication: seizures\nClass: Anticonvulsant\nCounseling Points:\n- May decrease effectiveness of oral contraceptives; use an alternative form of birth control\n- Take with food\n- Avoid alcohol and grapefruit\n- Avoid abrupt discontinuation",
    "nextReview": 0
  },
  {
    "id": "drug_fc_30",
    "q": "Carvedilol",
    "a": "Brand: Coreg, Coreg CR\nIndication: hypertension\nClass: a/B-adrenergic blocker\nCounseling Points:\n- take with food or milk\n- avoid abrupt discontinuation\n- can mask symptoms of hypoglycemia",
    "nextReview": 0
  },
  {
    "id": "drug_fc_31",
    "q": "Cefdinir",
    "a": "Brand: Omnicef\nIndication: infection\nClass: Third-generation cephalosporin\nCounseling Points:\n- Complete full course of therapy\n- Shake suspension well, must store at room temperature\n- If symptoms don't improve within 2-3 days or worsen, follow-up with healthcare provider\n- Separate administration of antacids, iron, and vitamins by 2 hours",
    "nextReview": 0
  },
  {
    "id": "drug_fc_32",
    "q": "Celecoxib",
    "a": "Brand: Celebrex\nIndication: pain, arthritis\nClass: Cyclooxygenase-2 inhibitor\nCounseling Points:\n- May take with food or milk to decrease Gl upset",
    "nextReview": 0
  },
  {
    "id": "drug_fc_33",
    "q": "Cephalexin",
    "a": "Brand: Keflex\nIndication: infection\nClass: First-generation cephalosporin\nCounseling Points:\n- Seek medical attentions if rash develops\n- Complete full course of therapy\n- For suspension, shake well and store in the refrigerator\n- If symptoms don't improve within 2-3 days or worsen, follow-up with healthcare provider",
    "nextReview": 0
  },
  {
    "id": "drug_fc_34",
    "q": "Cetirizine",
    "a": "Brand: Zyrtec\nIndication: allergies\nClass: Antihistamine\nCounseling Points:\n- Avoid activities requiring mental alertness until drug effects known\n- May cause dizziness or sedative effects",
    "nextReview": 0
  },
  {
    "id": "drug_fc_35",
    "q": "Chlorthalidone",
    "a": "Brand: N/A\nIndication: hypertension\nClass: thiazide diuretic\nCounseling Points:\n- take in the morning with food\n- avoid alcohol and NSAIDs\n- may cause dizziness or blurred vision",
    "nextReview": 0
  },
  {
    "id": "drug_fc_36",
    "q": "Cholecalciferol (Vitamin D3)",
    "a": "Brand: Vitamin D3, D-Vi-Sol\nIndication: vitamin deficiency\nClass: dietary supplement\nCounseling Points:\n- some formulations contain sodium or glucose",
    "nextReview": 0
  },
  {
    "id": "drug_fc_37",
    "q": "Ciprofloxacin",
    "a": "Brand: Cipro, Cipro XR\nIndication: infection\nClass: Fluoroquinolone antibiotic\nCounseling Points:\n- May cause tendon pain\n- Take 2 hours before or 6 hours after milk, antacids, sucralfate or mineral supplements/multivitamins with calcium/iron/zinc",
    "nextReview": 0
  },
  {
    "id": "drug_fc_38",
    "q": "Citalopram",
    "a": "Brand: Celexa\nIndication: depression\nClass: SSRI antidepressant\nCounseling Points:\n- Avoid activities requiring mental alertness or coordination until drug effects known\n- Symptomatic improvement may not be seen for several weeks\n- Report worsening depression, suicidal ideation, unusual changes in behavior, or unusual bleeding\n- Avoid abrupt discontinuation\n- Do not drink alcohol or use NSAIDs or aspirin",
    "nextReview": 0
  },
  {
    "id": "drug_fc_39",
    "q": "Clindamycin oral",
    "a": "Brand: Cleocin\nIndication: infection\nClass: Lincosamide antibiotic\nCounseling Points:\n- Complete full course of therapy\n- If symptoms don't improve within 2-3 days or worsen, follow-up with healthcare provider\n- Take with full glass of water\n- Remain upright for 30 minutes after dose to minimize Gl ulceration",
    "nextReview": 0
  },
  {
    "id": "drug_fc_40",
    "q": "Clobetasol topical",
    "a": "Brand: Temovate\nIndication: rash\nClass: topical corticosteroid\nCounseling Points:\n- apply thin layer to affected skin\n- wash hands after administration\n- apply to clean, intact skin\n- avoid contact with eyes and mouth\n- avoid tight fitting clothes/dressing over affected site",
    "nextReview": 0
  },
  {
    "id": "drug_fc_41",
    "q": "Clonazepam",
    "a": "Brand: Klonopin\nIndication: anxiety\nClass: Benzodiazepine, C-IV\nCounseling Points:\n- May cause drowsiness; avoid driving\n- Avoid concomitant administration with opioids\n- Avoid alcohol",
    "nextReview": 0
  },
  {
    "id": "drug_fc_42",
    "q": "Clonidine",
    "a": "Brand: Catapres, Kapvay\nIndication: hypertension\nClass: a2-adrenergic agonist\nCounseling Points:\n- avoid alcohol\n- may cause nausea, vomiting, insomnia, constipation, fatigue, or dry mouth\n- apply patch to hairless area of intact skin on upper outer arm or chest\n- rotate patch location\n- avoid abrupt discontinuation",
    "nextReview": 0
  },
  {
    "id": "drug_fc_43",
    "q": "Clopidogrel",
    "a": "Brand: Plavix\nIndication: antiplatelet\nClass: platelet aggregation inhibitor\nCounseling Points:\n- report signs/symptoms of bleeding\n- do not abruptly stop therapy",
    "nextReview": 0
  },
  {
    "id": "drug_fc_44",
    "q": "Acetaminophen",
    "a": "Brand: N/A (Tylenol with Codeine)\nIndication: pain\nClass: Opioid, C-II (when in combination with acetaminophen, C-III for tablets, C-V for liquid)\nCounseling Points:\n- If using chronically, use laxative for preventing constipation\n- May cause drowsiness; avoid driving\n- Avoid alcohol",
    "nextReview": 0
  },
  {
    "id": "drug_fc_45",
    "q": "Question 46",
    "a": "Brand: (Vitamin B12)\nIndication: vitamin deficiency\nClass: essential B vitamin (B12)\nCounseling Points:\n- may require several weeks for maximum effect\n- take ER products with food\n- avoid alcohol",
    "nextReview": 0
  },
  {
    "id": "drug_fc_46",
    "q": "Cyclobenzaprine",
    "a": "Brand: Flexeril\nIndication: pain\nClass: Centrally acting skeletal muscle relaxant\nCounseling Points:\n- May cause drowsiness and/or dizziness\n- Take ER capsule same time each day",
    "nextReview": 0
  },
  {
    "id": "drug_fc_47",
    "q": "Cyclosporine ophthalmic",
    "a": "Brand: Restasis\nIndication: ocular issues\nClass: Calcineurin inhibitor\nCounseling Points:\n- Comes in single-use package\n- Remove contact lenses before using\n- Wait at least 15 minutes before inserting contact lenses after use\n- May be used with artificial tears, 15 minutes before/after use",
    "nextReview": 0
  },
  {
    "id": "drug_fc_48",
    "q": "Dabigatran",
    "a": "Brand: Pradaxa\nIndication: anticoagulation\nClass: direct oral anticoagulant (DOAC)\nCounseling Points:\n- may be given with or without food\n- do not open capsules\n- increased risk of stroke on discontinuation",
    "nextReview": 0
  },
  {
    "id": "drug_fc_49",
    "q": "Dapagliflozin",
    "a": "Brand: Farxiga\nIndication: diabetes\nClass: Antidiabetic agent, sodium-glucose cotransporter 2 (SGLT2) inhibitor\nCounseling Points:\n- Rake before the first meal of the day\n- Can cause UTIs",
    "nextReview": 0
  },
  {
    "id": "drug_fc_50",
    "q": "Desvenlafaxine",
    "a": "Brand: Pristiq\nIndication: depression\nClass: Serotonin/norepinephrine reuptake inhibitor\nCounseling Points:\n- Take with or without food\n- Avoid alcohol\n- Symptomatic improvement may not be seen for a few weeks\n- Do not discontinue abruptly\n- Avoid activities requiring mental alertness until drug effects seen",
    "nextReview": 0
  },
  {
    "id": "drug_fc_51",
    "q": "Dexmethylphenidate ER",
    "a": "Brand: Focalin\nIndication: ADHD\nClass: CNS stimulant, C-II\nCounseling Points:\n- Avoid late evening doses due to insomnia\n- May open ER capsule and pour into small amount of food such as applesauce; swallow without chewing",
    "nextReview": 0
  },
  {
    "id": "drug_fc_52",
    "q": "Diazepam",
    "a": "Brand: Valium\nIndication: anxiety\nClass: Benzodiazepine, C-IV\nCounseling Points:\n- May cause drowsiness\n- Avoid driving until effects known\n- Avoid alcohol",
    "nextReview": 0
  },
  {
    "id": "drug_fc_53",
    "q": "Diclofenac oral",
    "a": "Brand: Voltaren\nIndication: pain\nClass: NSAID\nCounseling Points:\n- Take with food or milk to decrease Gl upset",
    "nextReview": 0
  },
  {
    "id": "drug_fc_54",
    "q": "Dicyclomine",
    "a": "Brand: Bentyl\nIndication: irritable bowel syndrome\nClass: Antimuscarinic\nCounseling Points:\n- May cause drowsiness\n- Heat exhaustion/stroke can occur due to decreased sweating",
    "nextReview": 0
  },
  {
    "id": "drug_fc_55",
    "q": "Diltiazem ER",
    "a": "Brand: Cardizem, Cartia XT, Dilacor XR, Dilt-XR, Taztia XT, Tiazac\nIndication: hypertension\nClass: calcium channel blocker\nCounseling Points:\n- do not drink alcohol\n- some products may be opened and sprinkled in applesauce; do not chew; follow with a glass of water\n- administer at the same time of day, either morning or evening\n- follow specific product administration instructions with regards to meals and timing",
    "nextReview": 0
  },
  {
    "id": "drug_fc_56",
    "q": "Docusate sodium",
    "a": "Brand: Colace\nIndication: constipation\nClass: Stool softener\nCounseling Points:\n- May require several days of treatment before effects seen\n- May take in single dose or divided doses\n- Discontinue and notify provider if rectal bleeding occurs",
    "nextReview": 0
  },
  {
    "id": "drug_fc_57",
    "q": "Donepezil",
    "a": "Brand: Aricept\nIndication: dementia\nClass: Central cholinesterase inhibitor\nCounseling Points:\n- Take at bedtime with or without food\n- Allow ODT tablet to dissolve on tongue and follow with a glass of water\n- Adverse effects seen more commonly at dose escalation but resolve with continued use",
    "nextReview": 0
  },
  {
    "id": "drug_fc_58",
    "q": "Doxazosin",
    "a": "Brand: Cardura, Cardura XL\nIndication: BPH (benign prostatic hyperplasia,) HTN (hypertension)\nClass: al-adreneric blocker\nCounseling Points:\n- may cause dizziness or vertigo\n- rise slowly from sitting or lying position (causes orthostatic hypotension)\n- may cause priapism\n- initial dose should be taken with breakfast",
    "nextReview": 0
  },
  {
    "id": "drug_fc_59",
    "q": "Doxycycline",
    "a": "Brand: Vibramycin, Doxy 100\nIndication: infection\nClass: Tetracycline antibiotic\nCounseling Points:\n- May take with food that does not contain calcium\n- Complete full course of therapy\n- Symptoms should improve within 2-3 days\n- May cause photosensitivity, wear sunscreen and avoid prolonged sun exposure/UV light",
    "nextReview": 0
  },
  {
    "id": "drug_fc_60",
    "q": "Dulaglutide",
    "a": "Brand: Trulicity\nIndication: diabetes\nClass: Antidiabetic agent, glucagon-like peptide-1-receptor agonist\nCounseling Points:\n- Inject subcutaneously into arm, thigh, or abdomen; rotate injection sites\n- Administer once weekly on the same day each week without regard to meals or time of day\n- Do not mix with insulin\n- Keep refrigerated, stable at room temperature for 14 days\n- May cause decreased urination, blood in urine",
    "nextReview": 0
  },
  {
    "id": "drug_fc_61",
    "q": "Duloxetine",
    "a": "Brand: Cymbalta\nIndication: depression, (anxiety)\nClass: Serotonin/norepinephrine reuptake inhibitor\nCounseling Points:\n- Do not abruptly discontinue\n- May cause increased risk of bleeding\n- Symptomatic improvement may not be seen for 1-4 weeks\n- Report worsening depression, suicidal ideation, or unusual changes in behavior",
    "nextReview": 0
  },
  {
    "id": "drug_fc_62",
    "q": "Enalapril",
    "a": "Brand: N/A (Vasotec)\nIndication: hypertension\nClass: ACEI, antihypertensive\nCounseling Points:\n- may cause angioedema (facial, throat, genital swelling)\n- may cause dizziness, especially if dehydrated\n- use cation when rising from sitting or lying position\n- hyperkalemia is possible",
    "nextReview": 0
  },
  {
    "id": "drug_fc_63",
    "q": "Docusate sodium (Colace)",
    "a": "Brand: Auvi-Q, EpiPen, EpiPen Jr\nIndication: anaphylaxis\nClass: alpha/beta agonist, anaphylaxis agent\nCounseling Points:\n- must seek medical attention after use, even if you feel better\n- inject into thigh\n- IM or SQ only; do not administer IV",
    "nextReview": 0
  },
  {
    "id": "drug_fc_64",
    "q": "Escitalopram",
    "a": "Brand: Lexapro\nIndication: depression\nClass: SSRI antidepressant\nCounseling Points:\n- Contact provider if you experience worsening depression, suicidality, or unusual changes in behavior\n- Contact provider if you experience unusual bleeding\n- Symptomatic improvement may not be seen for 4-6 weeks\n- Avoid abrupt discontinuation\n- Do not drink alcohol or use NSAIDs or aspirin",
    "nextReview": 0
  },
  {
    "id": "drug_fc_65",
    "q": "Esomeprazole",
    "a": "Brand: Nexium\nIndication: GERD\nClass: Proton pump inhibitor\nCounseling Points:\n- Take 1 hour before meals",
    "nextReview": 0
  },
  {
    "id": "drug_fc_66",
    "q": "Estradiol oral",
    "a": "Brand: Estrace\nIndication: menopause\nClass: Estrogen\nCounseling Points:\n- Report abnormal vaginal bleeding\n- Do not smoke as this could cause a blood clot",
    "nextReview": 0
  },
  {
    "id": "drug_fc_67",
    "q": "Etonogestrel/Ethinyl estradiol vaginal ring",
    "a": "Brand: NuvaRing\nIndication: contraception\nClass: Contraceptive\nCounseling Points:\n- If vaginal ring is expelled may rinse with lukewarm water and reinsert as soon as possible but within 3 hours\n- If the ring-free interval has been extended beyond 7 days or if the vaginal ring has been left in place for >4 weeks, an additional form of contraception must be used until ring has been used continuously for 7 days",
    "nextReview": 0
  },
  {
    "id": "drug_fc_68",
    "q": "Ezetimibe",
    "a": "Brand: Zetia\nIndication: dyslipidemia\nClass: antihyperlipidemic, cholesterol absorption inhibitor\nCounseling Points:\n- take with or without food\n- may take at the same time as a statin\n- take 2 hours before or 4 hours after taking a bile acid sequestrant",
    "nextReview": 0
  },
  {
    "id": "drug_fc_69",
    "q": "Famotidine",
    "a": "Brand: Pepcid\nIndication: GERD\nClass: Histamine H2 antagonist\nCounseling Points:\n- May take with food or antacids, if needed\n- Shake suspension well before use",
    "nextReview": 0
  },
  {
    "id": "drug_fc_70",
    "q": "Fenofibrate",
    "a": "Brand: Tricor\nIndication: dyslipidemia\nClass: antihyperlipidemic\nCounseling Points:\n- may be taken with or without food depending on the brand\n- take 1 hour before or 4-6 hours after a bile acid binding resin\n- do not use if you have severe kidney or liver disease",
    "nextReview": 0
  },
  {
    "id": "drug_fc_71",
    "q": "Ferrous sulfate",
    "a": "Brand: N/A\nIndication: iron deficiency\nClass: mineral supplement\nCounseling Points:\n- may require several weeks for maximal effectiveness\n- vitamin C enhances absorption\n- black stools are common\n- take on empty stomach if possible; may take with food if unable to tolerate nausea\n- avoid calcium containing foods",
    "nextReview": 0
  },
  {
    "id": "drug_fc_72",
    "q": "Finasteride",
    "a": "Brand: Proscar, Propecia\nIndication: BPH (benign prostatic hyperplasia)\nClass: 5a-reductase inhibitor\nCounseling Points:\n- you may need to take up to 6 months to see full effect\n- women who are pregnant or may become pregnant should avoid touching this medicine\n- this drug can get into the body through skin and may prevent development of genitalia in an unborn male baby\n- report shortness of breath, breast swelling, or breast mass to provider",
    "nextReview": 0
  },
  {
    "id": "drug_fc_73",
    "q": "Fluconazole",
    "a": "Brand: Diflucan\nIndication: fungal infection\nClass: Imidazole antifungal\nCounseling Points:\n- Do not take any new medications without consulting your doctor or pharmacist\n- If taking a weekly dose, take on same day and time each week",
    "nextReview": 0
  },
  {
    "id": "drug_fc_74",
    "q": "Fluoxetine",
    "a": "Brand: Prozac\nIndication: depression\nClass: SSRI antidepressant\nCounseling Points:\n- Take with or without meals and in the morning\n- Symptomatic improvement may not be seen for several weeks\n- Report worsening depression, suicidal ideation, unusual changes in behavior or unusual bleeding\n- Do not drink or use NSAIDs or aspirin",
    "nextReview": 0
  },
  {
    "id": "drug_fc_75",
    "q": "Fluticasone nasal",
    "a": "Brand: Flonase\nIndication: rhinitis, (asthma)\nClass: Intranasal adrenal glucocorticosteroid\nCounseling Points:\n- Relief and/or adverse effects may not occur for several days after initiation\n- Advise patient on proper administration technique",
    "nextReview": 0
  },
  {
    "id": "drug_fc_76",
    "q": "Question 77",
    "a": "Brand: Arnuity Ellipta, Flovent Diskus\nIndication: asthma\nClass: Inhaled adrenal corticosteroid\nCounseling Points:\n- Instruct patient on proper inhaler technique\n- Rinse mouth with water after each use to prevent oral infections",
    "nextReview": 0
  },
  {
    "id": "drug_fc_77",
    "q": "Fluticasone/Salmeterol",
    "a": "Brand: Advair Diskus, Advair HFA, AirDuo RespiClick, Wixela Inhub\nIndication: asthma\nClass: Inhaled corticosteroid and long-acting B2-adrenergic agonist combination\nCounseling Points:\n- Instruct patient on proper inhaler technique\n- Rinse mouth with water after each use to prevent oral infections",
    "nextReview": 0
  },
  {
    "id": "drug_fc_78",
    "q": "Folic acid",
    "a": "Brand: N/A\nIndication: folic acid deficiency\nClass: essential B vitamin\nCounseling Points:\n- may require several weeks for maximum effect\n- avoid alcohol as it inhibits absorption of folic acid",
    "nextReview": 0
  },
  {
    "id": "drug_fc_79",
    "q": "Furosemide",
    "a": "Brand: Lasix\nIndication: edema\nClass: loop diuretic\nCounseling Points:\n- avoid alcohol and NSAIDs\n- take in the morning or last dose before 4pm\n- increased risk of sun sensitivity; use sunscreen and avoid tanning\n- may cause dizziness, vertigo, or blurred vision\n- report low blood pressure, decreased urine output, vision problems, and severe skin reactions",
    "nextReview": 0
  },
  {
    "id": "drug_fc_80",
    "q": "Gabapentin",
    "a": "Brand: Neurontin, Gralise\nIndication: seizures\nClass: Gamma aminobutyric acid analog, anticonvulsant\nCounseling Points:\n- First dose on first day should be taken at bedtime\n- ER formulation taken with evening meal\n- May cause dizziness and somnolence; avoid activities requiring mental alertness until effects known\n- Report worsening depression, suicidal ideation, or unusual changes in behavior\n- Avoid sudden discontinuation of drug\n- Wait 2 hours after antacid before taking",
    "nextReview": 0
  },
  {
    "id": "drug_fc_81",
    "q": "Glimepiride",
    "a": "Brand: Amaryl\nIndication: diabetes\nClass: Second-generation sulfonylurea, antidiabetic\nCounseling Points:\n- Monitor blood glucose 2-4 times per day\n- If blood glucose <70 mg/dL, eat candy/sugar and contact prescriber\n- Use sunscreen and avoid sunlamps/tanning beds\n- Do not drink alcohol; may cause disulfram reaction\n- Take with food or milk in the morning",
    "nextReview": 0
  },
  {
    "id": "drug_fc_82",
    "q": "Glipizide",
    "a": "Brand: Glucotrol\nIndication: diabetes\nClass: Second-generation sulfonylurea, antidiabetic\nCounseling Points:\n- Monitor blood glucose 2-4 times per day\n- If blood glucose <70 mg/dL, eat candy/sugar and contact prescriber\n- Use sunscreen and avoid sunlamps/tanning beds\n- Do not drink alcohol; may cause disulfram reaction\n- Take 30 minutes before morning meal\n- Do not crush or chew ER formulation",
    "nextReview": 0
  },
  {
    "id": "drug_fc_83",
    "q": "Guanfacine ER",
    "a": "Brand: Intuniv\nIndication: ADHD\nClass: a2-adrenergic agonist\nCounseling Points:\n- Avoid alcohol\n- Avoid driving until effects are known\n- Swallow ER tablet whole; may be taken with or without food\n- Report low blood pressure, edema, fatigue\n- Avoid abrupt discontinuation",
    "nextReview": 0
  },
  {
    "id": "drug_fc_84",
    "q": "Hydralazine",
    "a": "Brand: N/A\nIndication: hypertension\nClass: peripheral vasodilator\nCounseling Points:\n- do not drink alcohol\n- may cause dizziness\n- do not abruptly discontinue\n- report chest pain, palpitations, low blood pressure, and fast heart rate",
    "nextReview": 0
  },
  {
    "id": "drug_fc_85",
    "q": "Hydrochlorothiazide",
    "a": "Brand: N/A\nIndication: hypertension\nClass: thiazide diuretic, antihypertensive\nCounseling Points:\n- may be taken with or without food\n- take early in the day to avoid nocturia (last dose early afternoon if taking BID)\n- may cause dizziness\n- avoid alcohol and using NSAIDs",
    "nextReview": 0
  },
  {
    "id": "drug_fc_86",
    "q": "Hydrocodone",
    "a": "Brand: Norco, Vicodin, Hysingla ER\nIndication: pain\nClass: Opioid analgesic, C-II\nCounseling Points:\n- Use a stool softener/laxative for preventing constipation with chronic use\n- May cause drowsiness\n- Avoid alcohol",
    "nextReview": 0
  },
  {
    "id": "drug_fc_87",
    "q": "Question 88",
    "a": "Brand: N/A\nIndication: skin disorders\nClass: topical corticosteroid\nCounseling Points:\n- apply a thin layer to affected skin\n- wash hands after administration\n- apply to clean, intact skin\n- avoid contact with eyes and mouth\n- avoid tight fitting clothes/dressings over affected site",
    "nextReview": 0
  },
  {
    "id": "drug_fc_88",
    "q": "Hydroxychloroquine",
    "a": "Brand: Plaquenil\nIndication: rheumatoid arthritis, lupus\nClass: aminoquinoline\nCounseling Points:\n- take with food or milk\n- if taking weekly, take on the same day each week",
    "nextReview": 0
  },
  {
    "id": "drug_fc_89",
    "q": "Hydroxyzine",
    "a": "Brand: Atarax, Vistaril\nIndication: itching\nClass: Histamine H1 antagonist, first generation piperazine derivative\nCounseling Points:\n- May cause dizziness or sedative effects; limit activity until effects known",
    "nextReview": 0
  },
  {
    "id": "drug_fc_90",
    "q": "Ibuprofen",
    "a": "Brand: Motrin, Advil\nIndication: pain\nClass: NSAID\nCounseling Points:\n- Take with food or milk to decrease Gl upset",
    "nextReview": 0
  },
  {
    "id": "drug_fc_91",
    "q": "Indomethacin",
    "a": "Brand: Indocin\nIndication: pain\nClass: NSAID\nCounseling Points:\n- Take with food or milk to decrease Gl upset",
    "nextReview": 0
  },
  {
    "id": "drug_fc_92",
    "q": "Insulin aspart",
    "a": "Brand: NovoLOG, (various)\nIndication: diabetes\nClass: Antidiabetic, insulin, rapid-acting\nCounseling Points:\n- Monitor blood sugar 2-4 times a day\n- Store unopened vials/pens in refrigerator\n- Keep opened vial/pens at room temperature\n- Dispose needles in sharps container\n- Rotate injection sites\n- Do not share needles\n- Monitor for low blood sugar",
    "nextReview": 0
  },
  {
    "id": "drug_fc_93",
    "q": "Insulin degludec",
    "a": "Brand: Tresiba\nIndication: diabetes\nClass: Insulin analogs, long-acting\nCounseling Points:\n- Monitor blood sugar 2-4 times a day\n- Store unopened vials/pens in refrigerator\n- Keep opened vial/pens at room temperature\n- Dispose needles in sharps container\n- Rotate injection sites\n- Do not share needles\n- Monitor for low blood sugar",
    "nextReview": 0
  },
  {
    "id": "drug_fc_94",
    "q": "Insulin glargine",
    "a": "Brand: Lantus, Basaglar, Toujeo\nIndication: diabetes\nClass: Insulin analogs, long-acting\nCounseling Points:\n- Monitor blood sugar 2-4 times a day\n- Store unopened vials/pens in refrigerator\n- Keep opened vial/pens at room temperature\n- Dispose needles in sharps container\n- Rotate injection sites\n- Do not share needles\n- Monitor for low blood sugar",
    "nextReview": 0
  },
  {
    "id": "drug_fc_95",
    "q": "Insulin lispro",
    "a": "Brand: Humalog, Admelog, (various)\nIndication: diabetes\nClass: Insulin analogs, rapid-acting\nCounseling Points:\n- Monitor blood sugar 2-4 times a day\n- Store unopened vials/pens in refrigerator\n- Keep opened vial/pens at room temperature\n- Dispose needles in sharps container\n- Rotate injection sites\n- Do not share needles\n- Monitor for low blood sugar",
    "nextReview": 0
  },
  {
    "id": "drug_fc_96",
    "q": "Ipratropium/Albuterol",
    "a": "Brand: Combivent Respimat\nIndication: COPD\nClass: Anticholinergic/selective B2-agonist combination\nCounseling Points:\n- Instruct patient on appropriate inhaler technique\n- Wash mouthpiece in warm water and air dry daily\n- Store at room temperature\n- Nebulizer: use entire contents immediately after opening to avoid contamination; deliver over 5-15 minutes",
    "nextReview": 0
  },
  {
    "id": "drug_fc_97",
    "q": "Irbesartan",
    "a": "Brand: Avapro\nIndication: hypertension\nClass: angiotensin II receptor antagonist\nCounseling Points:\n- may cause swelling of the face, eyes, lips, tongue, or throat\n- can cause excessive fluid loss, reduction in urine output, yellowing of skin, or skin rash\n- may cause dizziness\n- avoid pregnancy\n- do not abruptly discontinue",
    "nextReview": 0
  },
  {
    "id": "drug_fc_98",
    "q": "Isosorbide mononitrate",
    "a": "Brand: Imdur\nIndication: angina\nClass: long-acting nitrate, antianginal\nCounseling Points:\n- take on an empty stomach with half a glass of water\n- swallow ER tablet whole; do not break, crush, or chew\n- can cause headaches; may use acetaminophen\n- can cause dizziness; stand slowly from sitting or lying position",
    "nextReview": 0
  },
  {
    "id": "drug_fc_99",
    "q": "Ketoconazole topical",
    "a": "Brand: Nizoral\nIndication: fungal infection\nClass: Imidazole antifungal\nCounseling Points:\n- Apply a thin layer to the affected skin\n- Do not wash areas for at least 3 hours after application\n- Wait 20 minutes after application to apply cosmetics\n- Apply to clean, intact skin\n- Avoid contact with eyes, nose, mouth, and vagina\n- Flammable",
    "nextReview": 0
  },
  {
    "id": "drug_fc_100",
    "q": "Labetalol",
    "a": "Brand: N/A\nIndication: hypertension\nClass: α/β-adrenergic blocker\nCounseling Points:\n- may cause low blood pressure\n- may cause dizziness; rise slowly from sitting or lying position\n- avoid alcohol\n- may mask symptoms of low blood sugar\n- do not suddenly discontinue",
    "nextReview": 0
  },
  {
    "id": "drug_fc_101",
    "q": "Lamotrigine",
    "a": "Brand: Lamictal\nIndication: seizures\nClass: Phenyltriazine anticonvulsant\nCounseling Points:\n- May cause blistering rash, yellowing of eyes or skin, unusual bruising/bleeding, shortness of breath, or suicidal thoughts; report to provider\n- Estrogen containing birth controls increase metabolism, need higher dose of lamotrigine\n- Avoid alcohol\n- Talk to provider if you plan to become pregnant\n- Allow ODT tablet to dissolve on tongue",
    "nextReview": 0
  },
  {
    "id": "drug_fc_102",
    "q": "Lansoprazole",
    "a": "Brand: Prevacid\nIndication: GERD\nClass: Proton pump inhibitor\nCounseling Points:\n- Take on empty stomach 1 hour before eating\n- More effective if taken scheduled instead of PRN\n- Capsules may be opened and sprinkled on 1 tablespoon of applesauce\n- Separate administration by 1 hour with concurrent antacid administration",
    "nextReview": 0
  },
  {
    "id": "drug_fc_103",
    "q": "Latanoprost",
    "a": "Brand: Xalatan\nIndication: glaucoma\nClass: Postaglandin, antiglaucoma agent\nCounseling Points:\n- Wash hands and remove contact lenses before using this medication\n- Lie down or tilt head back for administration; pull down lower lid of eye to form a pocket and with other hand hold dropper close to eye and administer directed number of drops into pocket; close eyes and hold index finger over inner corner of eye for 1 minute\n- Do not rinse or wipe the dropper or allow anything to touch it including your eye; put the cap on the bottle when not in use",
    "nextReview": 0
  },
  {
    "id": "drug_fc_104",
    "q": "Levetiracetam",
    "a": "Brand: Keppra, Keppra XR\nIndication: seizures\nClass: Anticonvulsant\nCounseling Points:\n- Swallow ER tablet whole\n- Do not chew, break, or crush\n- Avoid activities requiring mental alertness until effects known\n- Report mood swings, agitation, hostile behavior, suicidal ideation, or unusual changes in behavior\n- Avoid sudden discontinuation",
    "nextReview": 0
  },
  {
    "id": "drug_fc_105",
    "q": "Levocetirizine",
    "a": "Brand: Xyzal\nIndication: allergic rhinitis\nClass: Antihistamine\nCounseling Points:\n- May cause dizziness or sedative effects; limit activity until effects known",
    "nextReview": 0
  },
  {
    "id": "drug_fc_106",
    "q": "Levofloxacin",
    "a": "Brand: Levaquin\nIndication: infection\nClass: Fluoroquinolone antibiotic\nCounseling Points:\n- May cause decreased urination, yellowing of eyes, blistering skin rash, extreme fatigue, unusual bruising/bleeding, tendon pain, muscle weakness\n- Take with or without food but not with milk or other dairy products\n- Take 2 hours before or 6 hours after antacids, sucralfate, or mineral supplements/multivitamins with calcium/iron/zinc",
    "nextReview": 0
  },
  {
    "id": "drug_fc_107",
    "q": "Levothyroxine",
    "a": "Brand: Synthroid\nIndication: hypothyroidism\nClass: Thyroid supplement\nCounseling Points:\n- May require 6-8 weeks for symptomatic improvement\n- Avoid abrupt discontinuation\n- Take on an empty stomach with water at least 30 minutes before food\n- Avoid antacids and iron within 4 hours of dose",
    "nextReview": 0
  },
  {
    "id": "drug_fc_108",
    "q": "Lidocaine patch",
    "a": "Brand: Lidoderm\nIndication: pain\nClass: Local anesthetic\nCounseling Points:\n- Don't leave patches on for longer than 12 hours within a 24 hour period\n- Apply to intact skin\n- Don't cover with tight clothing",
    "nextReview": 0
  },
  {
    "id": "drug_fc_109",
    "q": "Linagliptin",
    "a": "Brand: Tradjenta\nIndication: diabetes\nClass: Dipeptidyl peptidase IV inhibitor\nCounseling Points:\n- Monitor glucose at least daily\n- Take with or without food but at same time daily\n- Medication guide must be dispensed with this medication\n- Counsel on hypoglycemia",
    "nextReview": 0
  },
  {
    "id": "drug_fc_110",
    "q": "Liraglutide",
    "a": "Brand: Victoza, Saxenda\nIndication: diabetes\nClass: Glucagon-like peptide-1-receptor agonist\nCounseling Points:\n- Inject subcutaneously into arm, thigh, or abdomen; rotate injection sites\n- Administer once weekly on the same day each week without regard to meals or time of day\n- Do not mix with insulin\n- Keep refrigerated, stable at room temperature for 14 days\n- May cause decreased urination, blood in urine",
    "nextReview": 0
  },
  {
    "id": "drug_fc_111",
    "q": "Lisdexamfetamine",
    "a": "Brand: Vyvanse\nIndication: ADHD\nClass: Amphetamine, CNS stimulant, C-II\nCounseling Points:\n- Take dose in the morning with or without food\n- May open capsule and dissolve in water, yogurt, or orange juice and consume immediately\n- Monitor growth rate and weight in children\n- Report new or worsening psychiatric problems\n- Report chest pain, palpitations, dyspnea",
    "nextReview": 0
  },
  {
    "id": "drug_fc_112",
    "q": "Lisinopril",
    "a": "Brand: Prinivil, Zestril\nIndication: hypertension\nClass: ACEI, antihypertensive\nCounseling Points:\n- avoid pregnancy\n- seek medical attention if you experience any facial swelling\n- dry cough is common\n- dizziness may worsen if dehydrated",
    "nextReview": 0
  },
  {
    "id": "drug_fc_113",
    "q": "Loratadine",
    "a": "Brand: Claritin, Alavert\nIndication: allergies\nClass: Antihistamine\nCounseling Points:\n- Avoid allergic triggers\n- Use scheduled dosed instead of PRN; symptom improvement seen in 2-3 days but maximal benefit in 14 days\n- May cause dizziness or sedative effects; avoid driving until effects are known",
    "nextReview": 0
  },
  {
    "id": "drug_fc_114",
    "q": "Lorazepam",
    "a": "Brand: Ativan\nIndication: anxiety\nClass: Benzodiazepine, short or intermediate acting, C-IV\nCounseling Points:\n- May cause drowsiness; avoid driving until effects known\n- Should not be given with opioids\n- Avoid alcohol",
    "nextReview": 0
  },
  {
    "id": "drug_fc_115",
    "q": "Losartan",
    "a": "Brand: Cozaar\nIndication: hypertension\nClass: angiotensin II receptor antagonist, antihypertensive\nCounseling Points:\n- avoid pregnancy\n- avoid abrupt discontinuation\n- may cause dizziness that may worsen if dehydrated\n- report facial swelling, edema, reduced urination or yellowing of skin/eyes",
    "nextReview": 0
  },
  {
    "id": "drug_fc_116",
    "q": "Question 117",
    "a": "Brand: N/A\nIndication: dyslipidemia\nClass: HMG-CoA reductase inhibitor\nCounseling Points:\n- take in the evening or at bedtime\n- swallow ER tablets whole; do not crush, break, or chew\n- avoid alcohol and grapefruit\n- consult provider before starting new prescription or OTC medications\n- does not take the place of lifestyle changes",
    "nextReview": 0
  },
  {
    "id": "drug_fc_117",
    "q": "Meclizine",
    "a": "Brand: Antivert, Bonine, Dramamine\nIndication: antiemetic\nClass: Antihistamine, antiemetic\nCounseling Points:\n- May cause drowsiness; avoid driving until effects known\n- Avoid alcohol\n- Take with food to decrease Gl symptoms\n- Do not crush or chew unless identified as chewable",
    "nextReview": 0
  },
  {
    "id": "drug_fc_118",
    "q": "Meloxicam",
    "a": "Brand: Mobic\nIndication: pain\nClass: NSAID\nCounseling Points:\n- Take with food or milk to decrease Gl upset\n- For suspension, shake gently before using\n- Pregnant women should consult provider before using",
    "nextReview": 0
  },
  {
    "id": "drug_fc_119",
    "q": "Metformin",
    "a": "Brand: Glucophage\nIndication: diabetes\nClass: Biguanide, hypoglycemic\nCounseling Points:\n- Take with meals\n- Drink plenty of liquids\n- Avoid alcohol\n- Will cause diarrhea",
    "nextReview": 0
  },
  {
    "id": "drug_fc_120",
    "q": "Methocarbamol",
    "a": "Brand: Robaxin\nIndication: pain\nClass: Centrally acting skeletal muscle relaxant\nCounseling Points:\n- Avoid activities requiring mental alertness until effects known\n- May cause dizziness or sedative effects",
    "nextReview": 0
  },
  {
    "id": "drug_fc_121",
    "q": "Methotrexate",
    "a": "Brand: Trexall\nIndication: cancer\nClass: antimetabolite\nCounseling Points:\n- emphasize appropriate dosing scheduling (weekly vs daily)\n- avoid pregnancy\n- may cause nausea and vomiting\n- avoid sun exposure\n- may take with food",
    "nextReview": 0
  },
  {
    "id": "drug_fc_122",
    "q": "Methylphenidate",
    "a": "Brand: Ritalin, Concerta\nIndication: ADHD\nClass: CNS stimulant, C-II\nCounseling Points:\n- May cause insomnia; avoid late evening doses\n- Swallow ER capsule whole; do not break, chew or crush\n- May open and pour into small amount of food like yogurt; swallow without chewing\n- Avoid abrupt discontinuation\n- For patch, apply same time each day, alternating hips, remove after 9 hours",
    "nextReview": 0
  },
  {
    "id": "drug_fc_123",
    "q": "Methylprednisolone",
    "a": "Brand: Medrol\nIndication: inflammatory reactions\nClass: adrenal corticosteroid\nCounseling Points:\n- take doses with meals to minimize Gl upset\n- may cause psychiatric disturbances including mood swings, insomnia, and severe depression\n- for high dose or chronic treatment, monitor for high blood sugar, osteoporosis, and infection",
    "nextReview": 0
  },
  {
    "id": "drug_fc_124",
    "q": "Metoprolol",
    "a": "Brand: Lopressor, Toprol XL\nIndication: hypertension\nClass: β-adrenergic blocker, cardioselective\nCounseling Points:\n- take on empty stomach\n- bradycardia can occur\n- avoid alcohol\n- avoid abrupt discontinuation\n- may mask signs of hypoglycemia",
    "nextReview": 0
  },
  {
    "id": "drug_fc_125",
    "q": "Metronidazole",
    "a": "Brand: Flagyl\nIndication: infection\nClass: Nitroimidazole antibiotic, antiprotozoal\nCounseling Points:\n- Avoid alcohol while taking and for 3 days after\n- Complete full course of therapy\n- Symptoms should improve within 2-3 days; if worsen follow-up with healthcare provider\n- May be administered with food to minimize Gl upset",
    "nextReview": 0
  },
  {
    "id": "drug_fc_126",
    "q": "Mirabegron",
    "a": "Brand: Myrbetriq\nIndication: overactive bladder\nClass: beta-3 agonist\nCounseling Points:\n- monitor blood pressure and heart rate\n- contact provider for fast heartbeat, elevated blood pressure, or difficulty urinating",
    "nextReview": 0
  },
  {
    "id": "drug_fc_127",
    "q": "Mirtazapine",
    "a": "Brand: Remeron\nIndication: depression\nClass: Antidepressant, a2-antagonist\nCounseling Points:\n- Let ODT dissolve on tongue without water\n- Use immediately after removed from package; do not store\n- Avoid activities requiring mental alertness until effects known\n- Report worsening depression, suicidal ideation, or unusual changes in behavior\n- Do not drink alcohol\n- Take in the evening prior to sleep",
    "nextReview": 0
  },
  {
    "id": "drug_fc_128",
    "q": "Mometasone nasal",
    "a": "Brand: Nasonex\nIndication: rhinitis\nClass: Intranasal corticosteroid\nCounseling Points:\n- Advise patients on proper administration techniques for product\n- Needs to be primed before 1st use or if not used for 1 week",
    "nextReview": 0
  },
  {
    "id": "drug_fc_129",
    "q": "Montelukast",
    "a": "Brand: Singulair\nIndication: asthma\nClass: Leukotriene receptor antagonist\nCounseling Points:\n- Not indicated for acute asthma attacks\n- Take dose in the evening\n- Do not change dose or frequency of other asthma inhalers without provider instruction",
    "nextReview": 0
  },
  {
    "id": "drug_fc_130",
    "q": "Morphine ER",
    "a": "Brand: MS Contin, Avinza, Kadian\nIndication: pain\nClass: Opioid analgesic, C-II\nCounseling Points:\n- Use a stimulant laxative to prevent opioid-induced constipation\n- Do not use with benzodiazepines\n- May cause drowsiness\n- Avoid alcohol\n- Do not crush or chew ER tablet; may be opened and sprinkled on soft food but must be swallowed whole, not chewed",
    "nextReview": 0
  },
  {
    "id": "drug_fc_131",
    "q": "Mupirocin",
    "a": "Brand: Bactroban\nIndication: skin disorders\nClass: topical antibacterial\nCounseling Points:\n- avoid exposure to open wounds, burns, or eyes",
    "nextReview": 0
  },
  {
    "id": "drug_fc_132",
    "q": "Naproxen",
    "a": "Brand: Naprosyn\nIndication: pain\nClass: NSAID\nCounseling Points:\n- Take with food or milk to decrease GI upset",
    "nextReview": 0
  },
  {
    "id": "drug_fc_133",
    "q": "Nebivolol",
    "a": "Brand: Bystolic\nIndication: hypertension\nClass: β-adrenergic blocker, cardioselective, B1 selective\nCounseling Points:\n- may mask symptoms of hypoglycemia\n- do not discontinue abruptly, may cause rebound angina",
    "nextReview": 0
  },
  {
    "id": "drug_fc_134",
    "q": "Nifedipine",
    "a": "Brand: Adalat CC, Procardia XL\nIndication: hypertension\nClass: dihydropyridine calcium channel blocker\nCounseling Points:\n- take Adalat CC on an empty stomach\n- avoid sudden discontinuation, may cause rebound hypertension\n- may cause dizziness\n- avoid grapefruit\n- may find tablet or shell in stool",
    "nextReview": 0
  },
  {
    "id": "drug_fc_135",
    "q": "Nitrofurantoin",
    "a": "Brand: Macrodantin, Macrobid\nIndication: urinary infection\nClass: Nitrofuran antibiotic\nCounseling Points:\n- May make urine brown\n- Complete full course of therapy\n- For suspension, shake well and store at room temperature\n- Avoid mixing suspension with food or beverages\n- Symptoms should improve within 2-3 days, if worsen follow-up with healthcare provider",
    "nextReview": 0
  },
  {
    "id": "drug_fc_136",
    "q": "Nitroglycerin",
    "a": "Brand: Nitro-Dur, Nitrostat\nIndication: angina\nClass: nitrate, antianginal\nCounseling Points:\n- sit prior to using sublingual tablets, lingual aerosol, or spray\n- use at first sign of angina\n- headaches are common\n- do not swallow or chew\n- do not eat or drink\n- spray under tongue; do not inhale; do not spit or rinse mouth",
    "nextReview": 0
  },
  {
    "id": "drug_fc_137",
    "q": "Nortriptyline",
    "a": "Brand: Pamelor\nIndication: depression\nClass: Tricyclic antidepressant\nCounseling Points:\n- Avoid activities requiring mental alertness until effects known\n- May cause dizziness or somnolence\n- Report worsening depression, suicidal ideation, unusual changes in behavior or unusual bleeding\n- Avoid abrupt discontinuation\n- Do not drink alcohol",
    "nextReview": 0
  },
  {
    "id": "drug_fc_138",
    "q": "Nystatin topical",
    "a": "Brand: Mycostatin, Nystop\nIndication: fungal infection\nClass: Polyene antifungal\nCounseling Points:\n- Apply to affected area of skin\n- Apply to intact skin\n- Do not get in eyes, nose or mouth\n- Avoid tight dressings",
    "nextReview": 0
  },
  {
    "id": "drug_fc_139",
    "q": "Olanzapine",
    "a": "Brand: Zyprexa\nIndication: schizophrenia\nClass: Thienobenzodiazepine, atypical antipsychotic\nCounseling Points:\n- Avoid activities requiring mental alertness until effects known\n- May impair heat regulation\n- Rise slowly from a sitting/laying position\n- Diabetic patients should monitor for hyperglycemia\n- Avoid alcohol",
    "nextReview": 0
  },
  {
    "id": "drug_fc_140",
    "q": "Olmesartan",
    "a": "Brand: Benicar\nIndication: hypertension\nClass: angiotensin II receptor antagonist\nCounseling Points:\n- avoid pregnancy\n- may cause dizziness that is worsened by dehydration\n- seek care if swelling of face, reduced urine output, or yellowing of skin/eyes",
    "nextReview": 0
  },
  {
    "id": "drug_fc_141",
    "q": "Omeprazole",
    "a": "Brand: Prilosec\nIndication: GERD\nClass: Proton pump inhibitor\nCounseling Points:\n- Should be taken 1 hour before meals",
    "nextReview": 0
  },
  {
    "id": "drug_fc_142",
    "q": "Ondansetron",
    "a": "Brand: Zofran\nIndication: antiemetic\nClass: Antiemetic\nCounseling Points:\n- Dry hands before handing ODT\n- Do not open blister pack until ready to use; do not push ODT through foil",
    "nextReview": 0
  },
  {
    "id": "drug_fc_143",
    "q": "Oseltamivir",
    "a": "Brand: Tamiflu\nIndication: influenza\nClass: Neuraminidase inhibitor, antiviral\nCounseling Points:\n- Complete full course of therapy\n- Treatment must be started within 48 hours of the onset of symptoms/exposure\n- Symptoms should improve within 2-3 days, if they worsen seek care\n- Provide appropriate syringe for dosing, specific to patient (i.e adult vs. child)\n- Take with food to minimize Gi irritation\n- Take missed dose as soon as possible, if next dose is within 2 hours, skip missed dose",
    "nextReview": 0
  },
  {
    "id": "drug_fc_144",
    "q": "Oxcarbazepine",
    "a": "Brand: Trileptal\nIndication: seizures\nClass: Dibenzazepine carboxamide, anticonvulsant\nCounseling Points:\n- Shake suspension well and prepare dose immediately after shaking\n- May mix suspension in small glass of water prior to administration or take from syringe\n- Avoid activities requiring mental alertness until effects known\n- Take with food but not alcohol or grapefruit\n- Avoid abrupt discontinuation",
    "nextReview": 0
  },
  {
    "id": "drug_fc_145",
    "q": "Oxybutynin",
    "a": "Brand: Ditropan\nIndication: overactive bladder\nClass: urinary antispasmodic\nCounseling Points:\n- this drug may cause anticholinergic effects, including constipation, urinary retention or blurred vision\n- heat exhaustion/stroke may occur when used in a hot environment",
    "nextReview": 0
  },
  {
    "id": "drug_fc_146",
    "q": "Oxycodone",
    "a": "Brand: OxyContin\nIndication: pain\nClass: Opioid analgesic, C-II\nCounseling Points:\n- Use laxative for preventing constipation\n- May cause drowsiness; avoid driving until effects known\n- Avoid alcohol",
    "nextReview": 0
  },
  {
    "id": "drug_fc_147",
    "q": "Pantoprazole",
    "a": "Brand: Protonix\nIndication: GERD\nClass: Proton pump inhibitor\nCounseling Points:\n- Should be taken 1 hours before meals",
    "nextReview": 0
  },
  {
    "id": "drug_fc_148",
    "q": "Paroxetine",
    "a": "Brand: Paxil, Paxil CR\nIndication: depression\nClass: SSRI antidepressant\nCounseling Points:\n- Do not crush or chew CR tablets\n- Shake suspension well before use\n- Avoid activities requiring mental alertness until effects known\n- Symptomatic improvement may not be seen for several weeks\n- Avoid abrupt discontinuation\n- Do not drink alcohol\n- Use caution with NSAIDs or aspirin",
    "nextReview": 0
  },
  {
    "id": "drug_fc_149",
    "q": "Lovastatin",
    "a": "Brand: N/A\nIndication: infection\nClass: Antibiotic\nCounseling Points:\n- Complete full course of therapy\n- Symptoms should improve within 2-3 days, if they worsen seek care\n- Take on an empty stomach\n- Seek care for severe diarrhea, dark urine, yellowing of skin/eyes, unusual bruising/bleeding, blistering skin rash or shortness of breath",
    "nextReview": 0
  },
  {
    "id": "drug_fc_150",
    "q": "Phentermine",
    "a": "Brand: Adipex-P\nIndication: obesity\nClass: Centrally acting appetite suppressant, C-IV\nCounseling Points:\n- May impair ability to operate a vehicle or machinery\n- Take during the day to avoid insomnia",
    "nextReview": 0
  },
  {
    "id": "drug_fc_151",
    "q": "Pioglitazone",
    "a": "Brand: Actos\nIndication: diabetes\nClass: Thiazolidinedione antidiabetic\nCounseling Points:\n- Monitor blood sugar 2-4 times a day\n- May take without regard to food\n- May require several weeks for maximum effect\n- Tell provider if you experience bone pain, yellowing of skin/eyes, eye pain, or shortness of breath",
    "nextReview": 0
  },
  {
    "id": "drug_fc_152",
    "q": "Potassium chloride",
    "a": "Brand: Klor-Con\nIndication: hypokalemia\nClass: electrolyte, potassium\nCounseling Points:\n- take with food\n- capsules may be opened and sprinkled on applesauce\n- only crush or break if confirmed by provider/pharmacist",
    "nextReview": 0
  },
  {
    "id": "drug_fc_153",
    "q": "Pramipexole",
    "a": "Brand: Mirapex, Mirapex ER\nIndication: Parkinson's disease\nClass: Dopamine agonist, antiparkinson\nCounseling Points:\n- Take with food is nausea occurs\n- Avoid activities requiring mental alertness until effects known\n- Rise slowly from sitting/laying position\n- Report new or increased gambling urges, sexual urges, compulsive eating or buying\n- Do not discontinue abruptly\n- Do not drink alcohol",
    "nextReview": 0
  },
  {
    "id": "drug_fc_154",
    "q": "Pravastatin",
    "a": "Brand: Pravachol\nIndication: dyslipidemia\nClass: HMG-CoA reductase inhibitor\nCounseling Points:\n- take in the evening\n- avoid concurrent heavy alcohol use\n- does not take the place of diet and exercise",
    "nextReview": 0
  },
  {
    "id": "drug_fc_155",
    "q": "Prednisolone",
    "a": "Brand: Orapred, Pediapred\nIndication: inflammatory reactions\nClass: adrenal glucocorticosteroid\nCounseling Points:\n- take with food or milk to decrease DI upset\n- take in the morning to help prevent insomnia\n- for high-dose or long-term treatment, monitor for high blood sugar, osteoporosis and infection",
    "nextReview": 0
  },
  {
    "id": "drug_fc_156",
    "q": "Prednisone",
    "a": "Brand: N/A (Deltasone)\nIndication: inflammatory reactions\nClass: adrenal corticosteroid\nCounseling Points:\n- take with food or milk to decrease GI upset\n- take in the morning to help prevent insomnia\n- for high-dose or long-term treatment, monitor for high blood sugar, osteoporosis, and infection",
    "nextReview": 0
  },
  {
    "id": "drug_fc_157",
    "q": "Pregabalin",
    "a": "Brand: Lyrica\nIndication: neuropathic pain\nClass: Analgesic, anticonvulsant, C-V\nCounseling Points:\n- May cause drowsiness\n- Avoid sudden discontinuation\n- Avoid use of alcohol",
    "nextReview": 0
  },
  {
    "id": "drug_fc_158",
    "q": "Progesterone",
    "a": "Brand: Prometrium\nIndication: women's health\nClass: Progestin hormone\nCounseling Points:\n- Menstrual bleeding should occur 3-7 days after last dose; tell provider if it does not occur\n- For vaginal formulation, avoid using other vaginal drugs within 6 hours before or 6 hours after",
    "nextReview": 0
  },
  {
    "id": "drug_fc_159",
    "q": "Promethazine",
    "a": "Brand: Phenergan\nIndication: antiemetic\nClass: Phenothiazine antihistamine\nCounseling Points:\n- May cause drowsiness\n- Avoid alcohol",
    "nextReview": 0
  },
  {
    "id": "drug_fc_160",
    "q": "Propranolol",
    "a": "Brand: Inderal, Inderal LA, Inderal XL\nIndication: hypertension\nClass: β-adrenergic blocker, nonselective\nCounseling Points:\n- taking IR tablets on an empty stomach; ER can be taken with or without food but consistently\n- avoid alcohol\n- avoid abrupt discontinuation\n- may cause dizziness\n- may mask symptoms of hypoglycemia",
    "nextReview": 0
  },
  {
    "id": "drug_fc_161",
    "q": "Quetiapine",
    "a": "Brand: Seroquel, Seroquel XR\nIndication: schizophrenia\nClass: Antipsychotic (atypical)\nCounseling Points:\n- Take with food but avoid alcohol\n- Avoid activities requiring mental alertness until effects known\n- May cause drowsiness\n- Rise slowly from sitting/laying position\n- Use caution with activities leading to an increased core temperature",
    "nextReview": 0
  },
  {
    "id": "drug_fc_162",
    "q": "Ramipril",
    "a": "Brand: Altace\nIndication: hypertension\nClass: ACEI, antihypertensive\nCounseling Points:\n- avoid pregnancy\n- may cause dizziness that is worsened by dehydration\n- seek care if swelling of face, eyes, nose, or lips",
    "nextReview": 0
  },
  {
    "id": "drug_fc_163",
    "q": "Risperidone",
    "a": "Brand: Risperdal\nIndication: schizophrenia\nClass: Benzisoxazole, antipsychotic\nCounseling Points:\n- Take with food\n- Avoid alcohol\n- Avoid activities requiring mental alertness until effects are known\n- Use caution during activities leading to an increased core temperature\n- Rise slowly from sitting/laying position\n- Keep ODT tablet in blister pack until ready to use; place on tongue until dissolved\n- Do not mix oral solution with cola or tea",
    "nextReview": 0
  },
  {
    "id": "drug_fc_164",
    "q": "Rivaroxaban",
    "a": "Brand: Xarelto\nIndication: anticoagulation\nClass: anticoagulant, factor Xa inhibitor\nCounseling Points:\n- watch for signs/symptoms of bleeding\n- doses 15 mg or higher should be taken with food\n- if taking for nonvalvular afib, take with evening meal",
    "nextReview": 0
  },
  {
    "id": "drug_fc_165",
    "q": "Rizatriptan",
    "a": "Brand: Maxalt\nIndication: migraine\nClass: Antimigraine, serotonin receptor agonist\nCounseling Points:\n- Avoid alcohol\n- Caution driving until effects are known\n- Allow ODT tablet to dissolve on tongue, do not chew",
    "nextReview": 0
  },
  {
    "id": "drug_fc_166",
    "q": "Ropinirole",
    "a": "Brand: Requip, Requip XL\nIndication: Parkinson's disease\nClass: Dopamine agonist\nCounseling Points:\n- Take with food to reduce nausea\n- Avoid driving until effects are known\n- Rise slowly from sitting/standing position\n- Avoid sudden discontinuation\n- Do not drink alcohol",
    "nextReview": 0
  },
  {
    "id": "drug_fc_167",
    "q": "Rosuvastatin",
    "a": "Brand: Crestor\nIndication: dyslipidemia\nClass: HMG-CoA reductase inhibitor\nCounseling Points:\n- do not drink alcohol\n- does not take the place of diet and exercise",
    "nextReview": 0
  },
  {
    "id": "drug_fc_168",
    "q": "Sertraline",
    "a": "Brand: Zoloft\nIndication: depression\nClass: SSRI antidepressant\nCounseling Points:\n- Avoid activities requiring mental alertness until effects known\n- Symptomatic improvement may not be seen for several weeks\n- Report worsening depression, suicidal ideation, unusual changes in behavior or unusual bleeding\n- Avoid abrupt discontinuation\n- Do not drink alcohol or use NSAIDs or aspirin",
    "nextReview": 0
  },
  {
    "id": "drug_fc_169",
    "q": "Sildenafil",
    "a": "Brand: Viagra, Revatio\nIndication: erectile dysfunction\nClass: erectile dysfunction agent, pulmonary hypertensive agent\nCounseling Points:\n- take 30 minutes-4 hours prior to anticipated sexual activity (not Revatio)\n- do not take more than once in a 24-hour period",
    "nextReview": 0
  },
  {
    "id": "drug_fc_170",
    "q": "Simvastatin",
    "a": "Brand: Zocor\nIndication: dyslipidemia\nClass: HMG-CoA reductase inhibitor\nCounseling Points:\n- avoid excessive alcohol\n- take in the evening\n- consult provider/pharmacist before starting any new medications\n- does not take the place of diet and lifestyle changes",
    "nextReview": 0
  },
  {
    "id": "drug_fc_171",
    "q": "Sitagliptin",
    "a": "Brand: Januvia\nIndication: diabetes\nClass: Dipeptidyl peptidase-4 inhibitor, antidiabetic\nCounseling Points:\n- Monitor blood glucose 2-4 times a day\n- Take with morning meal if once a day dosing; take with morning and evening meal if twice daily dosing\n- Take with food",
    "nextReview": 0
  },
  {
    "id": "drug_fc_172",
    "q": "Spironolactone",
    "a": "Brand: Aldactone, CaroSpir\nIndication: heart failure\nClass: potassium-sparing diuretic; selective aldosterone blocker\nCounseling Points:\n- may cause dizziness\n- avoid driving until effects are known\n- report muscle weakness, fatigue, or slowed heart rate, confusion, dry mouth thirst, decreased urination\n- avoid foods high in potassium\n- avoid alcohol and NSAIDs",
    "nextReview": 0
  },
  {
    "id": "drug_fc_173",
    "q": "Sucralfate",
    "a": "Brand: Carafate\nIndication: duodenal ulcer\nClass: Gastrointestinal agent, miscellaneous\nCounseling Points:\n- Take on an empty stomach\n- Do not take other medications within 2-4 hours of this medication\n- Shake suspension well before use; store at room temperature",
    "nextReview": 0
  },
  {
    "id": "drug_fc_174",
    "q": "Sumatriptan",
    "a": "Brand: Imitrex\nIndication: migraine\nClass: Antimigraine, serotonin receptor agonist\nCounseling Points:\n- May cause dizziness or somnolence; avoid activities requiring mental alertness until effects known\n- Take immediately at headache onset\n- May repeat x1 dose",
    "nextReview": 0
  },
  {
    "id": "drug_fc_175",
    "q": "Tamsulosin",
    "a": "Brand: Flomax\nIndication: BPH (benign prostatic hyperplasia)\nClass: α1-adrenergic blocker\nCounseling Points:\n- administer 30 minutes after same meal daily\n- may cause vertigo or dizziness; avoid driving until effects known\n- rise slowly from a sitting or lying position\n- syncope is possible with first dose or dose increases",
    "nextReview": 0
  },
  {
    "id": "drug_fc_176",
    "q": "Penicillin VK",
    "a": "Brand: N/A\nIndication: BPH (benign prostatic hyperplasia, HTN (hypertension)\nClass: α1-adrenergic blocker\nCounseling Points:\n- avoid abrupt discontinuation\n- may cause vertigo or dizziness; avoid driving until effects known\n- rise slowly from a sitting or lying position\n- syncope is possible with first dose or dose increases",
    "nextReview": 0
  },
  {
    "id": "drug_fc_177",
    "q": "Testosterone",
    "a": "Brand: AndroGel, Androderm\nIndication: androgen replacement\nClass: Androgen, C-III\nCounseling Points:\n- Apply to clean, dry, intact skin of shoulders, upper arms and/or abdomen\n- Do not apply to genitals\n- Allow to dry\n- Avoid swimming/showering for 5-6 hours after application\n- Keep site covered as direct skin-skin contact can transfer drug\n- Report too frequent or persistent erections\n- Female sexual partners should report male-like changes\n- Seek medical attention for chest pain, SOB, stroke symptoms or behavioral changes",
    "nextReview": 0
  },
  {
    "id": "drug_fc_178",
    "q": "Thyroid desiccated",
    "a": "Brand: Armour Thyroid\nIndication: hypothyroidism\nClass: Thyroid supplement\nCounseling Points:\n- May require 6-8 weeks before symptomatic improvement seen\n- Do not abruptly discontinue\n- Take on an empty stomach with water",
    "nextReview": 0
  },
  {
    "id": "drug_fc_179",
    "q": "Timolol ophthalmic",
    "a": "Brand: Betimol, Timoptic\nIndication: ocular issues\nClass: Beta-blocker, antiglaucoma agent\nCounseling Points:\n- Wash hands and remove contact lenses before using\n- Lie down or tilt head back for administration; pull down lower lid of eye to form a pocket and with other hand hold dropper close to eye and administer directed number of drops into pocket; close eyes and hold index finger over inner corner of eye for 1 minute\n- Do not rinse or wipe the dropper or allow anything to touch it including your eye; put the cap on the bottle when not in use\n- Separate from other eye drops by 5 minutes, wait 15 minutes before putting contacts back in",
    "nextReview": 0
  },
  {
    "id": "drug_fc_180",
    "q": "Tiotropium",
    "a": "Brand: Spiriva HandiHaler, Spiriva Respimat\nIndication: COPD\nClass: Anticholinergic bronchodilator\nCounseling Points:\n- Not indicated for rescue therapy\n- May cause increased HR, dry mouth, constipation, urinary difficulty, respiratory tract infection, sinusitis\n- Drug capsules are for inhalation only, do not swallow\n- When using HandiHaler, inhale contents twice to ensure drug delivery\n- Maximum benefit may not be seen for 1-2 months",
    "nextReview": 0
  },
  {
    "id": "drug_fc_181",
    "q": "Tizanidine",
    "a": "Brand: Zanaflex\nIndication: pain\nClass: Centrally acting skeletal muscle relaxant, α2-agonist\nCounseling Points:\n- May cause dizziness and somnolence; avoid driving until effects known\n- May cause dry mouth and weakness\n- Rise slowly from sitting/standing position",
    "nextReview": 0
  },
  {
    "id": "drug_fc_182",
    "q": "Topiramate",
    "a": "Brand: Topamax\nIndication: seizures\nClass: Anticonvulsant\nCounseling Points:\n- May cause dizziness and somnolence; avoid driving until effects known\n- May cause nervousness and confusion\n- Do not abruptly discontinue\n- Seek care for new eye problems or high body temperature\n- May decrease sweating; avoid hot temperatures\n- Stay hydrated\n- May decrease effectiveness of contraceptive; use alternative form\n- Take missed dose as soon as possible, if more than 1 missed dose consult provider",
    "nextReview": 0
  },
  {
    "id": "drug_fc_183",
    "q": "Tramadol",
    "a": "Brand: Ultram\nIndication: pain\nClass: Opioid analgesic, C-IV\nCounseling Points:\n- For chronic use, use a laxative to prevent constipation\n- May cause drowsiness; avoid driving until effects known\n- Do not crush or chew ER products; may be taken with or without food but be consistent\n- Avoid alcohol",
    "nextReview": 0
  },
  {
    "id": "drug_fc_184",
    "q": "Trazodone",
    "a": "Brand: Desyrel\nIndication: depression\nClass: Antidepressant\nCounseling Points:\n- Avoid driving until effects known\n- May cause priapism\n- Avoid sudden discontinuation\n- Do not drink alcohol",
    "nextReview": 0
  },
  {
    "id": "drug_fc_185",
    "q": "Triamcinolone nasal",
    "a": "Brand: Nasacort AQ\nIndication: allergic rhinitis\nClass: Intranasal adrenal glucocorticosteroid\nCounseling Points:\n- Use proper administration technique",
    "nextReview": 0
  },
  {
    "id": "drug_fc_186",
    "q": "Terazosin",
    "a": "Brand: N/A\nIndication: skin disorders\nClass: Topical corticosteroid\nCounseling Points:\n- Apply thin layer to affected area of skin\n- Apply to clean, intact area\n- Wash hands before and after application\n- Avoid contact with eyes and mouth\n- Avoid tight dressings",
    "nextReview": 0
  },
  {
    "id": "drug_fc_187",
    "q": "Triamterene/Hydrochlorothiazide",
    "a": "Brand: Dyazide, Maxzide\nIndication: hypertension\nClass: potassium sparing/thiazide diuretic combination\nCounseling Points:\n- may cause dizziness; rise slowly from a sitting/lying position\n- avoid foods high in potassium\n- avoid alcohol and NSAIDs\n- may cause photosensitivity; use sunscreen",
    "nextReview": 0
  },
  {
    "id": "drug_fc_188",
    "q": "Trimethoprim/Sulfamethoxazole",
    "a": "Brand: Bactrim, Septra\nIndication: infection\nClass: Sulfonamide antibiotic\nCounseling Points:\n- Complete full course of therapy\n- For suspension, shake well, store at room temperature, and protect from light\n- Symptoms should improve within 2-3 days, if worsen seek care\n- May cause photosensitivity; use sunscreen\n- Maintain adequate hydration\n- Seek medical attention for severe diarrhea, dark urine, yellowing of eyes/skin, unusual bruising/bleeding, blistering skin rash, SOB",
    "nextReview": 0
  },
  {
    "id": "drug_fc_189",
    "q": "Valacyclovir",
    "a": "Brand: Valtrex\nIndication: herpes\nClass: Viral DNA polymerase inhibitor\nCounseling Points:\n- Complete full course of therapy\n- Stay hydrated\n- Symptoms should improve within 2-3 days; if they don't or worsen seek medical attention\n- Take at first sign of symptoms for best efficacy",
    "nextReview": 0
  },
  {
    "id": "drug_fc_190",
    "q": "Valsartan",
    "a": "Brand: Diovan\nIndication: hypertension\nClass: angiotensin II receptor antagonist\nCounseling Points:\n- do not discontinue abruptly\n- may cause dizziness; avoid driving until effects known\n- avoid alcohol and NSAIDs",
    "nextReview": 0
  },
  {
    "id": "drug_fc_191",
    "q": "Varenicline",
    "a": "Brand: Chantix\nIndication: smoking cessation\nClass: Smoking cessation agent\nCounseling Points:\n- Take after eating with a full glass of water\n- Contact provider if experience sleepwalking, seizures, SOB, mental status changes/suicidal ideation\n- May use with other nicotine replacement products\n- May cause sleep disturbances and vivid dreams\n- Avoid alcohol",
    "nextReview": 0
  },
  {
    "id": "drug_fc_192",
    "q": "Venlafaxine",
    "a": "Brand: Effexor, Effexor XR\nIndication: depression\nClass: Antidepressant, serotonin/norepinephrine reuptake inhibitor\nCounseling Points:\n- Take with food, avoid alcohol\n- Swallow ER formulations whole; may open and sprinkle on food but swallow without chewing followed by water\n- Symptomatic improvement may not be seen for a few weeks\n- Do not discontinue abruptly\n- May cause dizziness and somnolence, avoid driving until effects known",
    "nextReview": 0
  },
  {
    "id": "drug_fc_193",
    "q": "Verapamil",
    "a": "Brand: Calan SR\nIndication: hypertension\nClass: calcium channel blocker\nCounseling Points:\n- do not crush or chew ER products; may sprinkle on food and swallow without chewing followed by water\n- report syncope, hypotension, edema\n- avoid sudden discontinuation of drug\n- rise slowly from a sitting or lying position to avoid dizziness\n- avoid alcohol and grapefruit",
    "nextReview": 0
  },
  {
    "id": "drug_fc_194",
    "q": "Warfarin",
    "a": "Brand: Coumadin\nIndication: anticoagulation\nClass: anticoagulant, vitamin K antagonist\nCounseling Points:\n- report signs of bleeding\n- consult provider/pharmacist before starting new medications\n- keep diet consistent in the amount of vitamin K (green leafy vegetables)\n- *these are three of the most important points that every patient must know for safety; please note that there are MANY more important counseling points that providers should educate patients on when starting warfarin",
    "nextReview": 0
  },
  {
    "id": "drug_fc_195",
    "q": "Zolpidem",
    "a": "Brand: Ambien\nIndication: insomnia\nClass: Nonbarbiturate hypnotic, C-IV\nCounseling Points:\n- Take on an empty stomach\n- May cause daytime drowsiness; avoid driving\n- Avoid alcohol\n- Take immediately prior to bedtime\n- May experience complex behaviors while not full awake (i.e. sleep driving)\n- Should plan to get 7-8 hours of sleep when taking",
    "nextReview": 0
  }
]
}];

const drugExams$1 = [{
  id: "builtin_exam_drug",
  title: "Drug Counseling Exam",
  icon: "CheckSquare",
  color: "#f59e0b",
  isBuiltIn: true,
  isBuiltin: true,
  questions: [
  {
    "id": "drug_ex_0",
    "q": "Which medication is indicated for pain and is classified as a(n) analgesic?",
    "options": [
      "Isosorbide mononitrate",
      "Amoxicillin",
      "Acetaminophen",
      "Sitagliptin"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_1",
    "q": "Which medication is indicated for herpes and is classified as a(n) viral dna polymerase inhibitor?",
    "options": [
      "Allopurinol",
      "Acyclovir",
      "Labetalol",
      "Cyclobenzaprine"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_2",
    "q": "Which medication is indicated for crohn's disease and is classified as a(n) antirheumatic biologic dmard?",
    "options": [
      "Rivaroxaban",
      "Omeprazole",
      "Benazepril",
      "Adalimumab"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_3",
    "q": "Which medication is indicated for copd and is classified as a(n) selective b2-adrenergic agonist?",
    "options": [
      "Albuterol sulfate (HFA)",
      "Valacyclovir",
      "Quetiapine",
      "Clopidogrel"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_4",
    "q": "Which medication is indicated for osteoporosis and is classified as a(n) biphosphonate?",
    "options": [
      "Ropinirole",
      "Lamotrigine",
      "Alendronate",
      "Ezetimibe"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_5",
    "q": "Which medication is indicated for gout and is classified as a(n) xanthine oxidase inhibitor; antigout?",
    "options": [
      "Timolol ophthalmic",
      "Allopurinol",
      "Acetaminophen",
      "Acyclovir"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_6",
    "q": "Which medication is indicated for anxiety and is classified as a(n) benzodiazepine, short or intermediate acting, c-iv?",
    "options": [
      "Alprazolam",
      "Clonazepam",
      "Clindamycin oral",
      "Aspirin 81 mg"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_7",
    "q": "Which medication is indicated for arrhythmias and is classified as a(n) antiarrhythmic?",
    "options": [
      "Amoxicillin/Clavulanate",
      "Enalapril",
      "Oxcarbazepine",
      "Amiodarone"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_8",
    "q": "Which medication is indicated for depression and is classified as a(n) tricyclic antidepressant?",
    "options": [
      "Aspirin 81 mg",
      "Amitriptyline",
      "Baclofen",
      "Fluconazole"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_9",
    "q": "Which medication is indicated for hypertension and is classified as a(n) calcium channel blocker?",
    "options": [
      "Loratadine",
      "Amlodipine",
      "Ferrous sulfate",
      "Losartan"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_10",
    "q": "Which medication is indicated for infection and is classified as a(n) b-lactam antiobiotic?",
    "options": [
      "Phentermine",
      "Propranolol",
      "Amoxicillin",
      "Acetaminophen"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_11",
    "q": "Which medication is indicated for infection and is classified as a(n) b-lactam antibiotic?",
    "options": [
      "Lansoprazole",
      "Montelukast",
      "Warfarin",
      "Amoxicillin/Clavulanate"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_12",
    "q": "Which medication is indicated for cancer and is classified as a(n) aromatase inhibitor?",
    "options": [
      "Anastrozole",
      "Paroxetine",
      "Rosuvastatin",
      "Irbesartan"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_13",
    "q": "Which medication is indicated for anticoagulation and is classified as a(n) factor xa inhibitor?",
    "options": [
      "Levothyroxine",
      "Amitriptyline",
      "Famotidine",
      "Apixaban"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_14",
    "q": "Which medication is indicated for schizophrenia and is classified as a(n) second generation antipsychotic?",
    "options": [
      "Naproxen",
      "Hydralazine",
      "Aripiprazole",
      "Estradiol oral"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_15",
    "q": "Which medication is indicated for cardiovascular protection, pain and is classified as a(n) salicylate?",
    "options": [
      "Fluoxetine",
      "Atenolol",
      "Etonogestrel/Ethinyl estradiol vaginal ring",
      "Aspirin 81 mg"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_16",
    "q": "Which medication is indicated for hypertension and is classified as a(n) b-adrenergic blocker, cardioselective?",
    "options": [
      "Atenolol",
      "Pioglitazone",
      "Oseltamivir",
      "Loratadine"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_17",
    "q": "Which medication is indicated for dyslipidemia and is classified as a(n) hmg-coa reductase inhibitor?",
    "options": [
      "Atorvastatin",
      "Question 117",
      "Levothyroxine",
      "Benazepril"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_18",
    "q": "Which medication is indicated for allergic rhinitis and is classified as a(n) nasal antihistamine?",
    "options": [
      "Azelastine nasal",
      "Topiramate",
      "Duloxetine",
      "Loratadine"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_19",
    "q": "Which medication is indicated for infection and is classified as a(n) macrolide antibiotic?",
    "options": [
      "Amitriptyline",
      "Azithromycin",
      "Paroxetine",
      "Meclizine"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_20",
    "q": "Which medication is indicated for pain, spasticity and is classified as a(n) centrally acting skeletal muscle relaxant?",
    "options": [
      "Baclofen",
      "Rosuvastatin",
      "Pregabalin",
      "Irbesartan"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_21",
    "q": "Which medication is indicated for hypertension and is classified as a(n) ace-inhibitor, antihypertensive?",
    "options": [
      "Benazepril",
      "Linagliptin",
      "Bupropion XL",
      "Liraglutide"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_22",
    "q": "Which medication is indicated for cough and is classified as a(n) antitussive?",
    "options": [
      "Celecoxib",
      "Olanzapine",
      "Methylprednisolone",
      "Benzonatate"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_23",
    "q": "Which medication is indicated for hypertension and is classified as a(n) cardioselective b-adrenergic blocker?",
    "options": [
      "Bisoprolol/Hydrochlorothiazide",
      "Escitalopram",
      "Atorvastatin",
      "Pioglitazone"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_24",
    "q": "Which medication is indicated for asthma and is classified as a(n) inhaled corticosteroid/bronchodilator combination?",
    "options": [
      "Albuterol sulfate (HFA)",
      "Ezetimibe",
      "Budesonide/Formoterol",
      "Apixaban"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_25",
    "q": "Which medication is indicated for opioid dependence and is classified as a(n) opioid partial agonist and antagonist combination, c-iii?",
    "options": [
      "Diltiazem ER",
      "Mometasone nasal",
      "Prednisone",
      "Buprenorphine/Naloxone"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_26",
    "q": "Which medication is indicated for depression, smoking cessation and is classified as a(n) monocyclic antidepressant?",
    "options": [
      "Acetaminophen",
      "Oxycodone",
      "Bupropion XL",
      "Ciprofloxacin"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_27",
    "q": "Which medication is indicated for anxiety and is classified as a(n) antianxiety?",
    "options": [
      "Carbamazepine",
      "Acetaminophen",
      "Cyclobenzaprine",
      "Buspirone"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_28",
    "q": "Which medication is indicated for diabetes and is classified as a(n) antidiabetic agent, sodium glucose cotransporter 2 (sglt 2) inhibitor?",
    "options": [
      "Zolpidem",
      "Canagliflozin",
      "Prednisone",
      "Insulin aspart"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_29",
    "q": "Which medication is indicated for seizures and is classified as a(n) anticonvulsant?",
    "options": [
      "Promethazine",
      "Estradiol oral",
      "Bisoprolol/Hydrochlorothiazide",
      "Carbamazepine"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_30",
    "q": "Which medication is indicated for hypertension and is classified as a(n) a/b-adrenergic blocker?",
    "options": [
      "Testosterone",
      "Adalimumab",
      "Nortriptyline",
      "Carvedilol"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_31",
    "q": "Which medication is indicated for infection and is classified as a(n) third-generation cephalosporin?",
    "options": [
      "Cefdinir",
      "Benzonatate",
      "Lisdexamfetamine",
      "Clonazepam"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_32",
    "q": "Which medication is indicated for pain, arthritis and is classified as a(n) cyclooxygenase-2 inhibitor?",
    "options": [
      "Nitrofurantoin",
      "Clonazepam",
      "Testosterone",
      "Celecoxib"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_33",
    "q": "Which medication is indicated for infection and is classified as a(n) first-generation cephalosporin?",
    "options": [
      "Pregabalin",
      "Naproxen",
      "Triamcinolone nasal",
      "Cephalexin"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_34",
    "q": "Which medication is indicated for allergies and is classified as a(n) antihistamine?",
    "options": [
      "Hydroxyzine",
      "Acetaminophen",
      "Lovastatin",
      "Cetirizine"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_35",
    "q": "Which medication is indicated for hypertension and is classified as a(n) thiazide diuretic?",
    "options": [
      "Question 77",
      "Furosemide",
      "Chlorthalidone",
      "Cetirizine"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_36",
    "q": "Which medication is indicated for vitamin deficiency and is classified as a(n) dietary supplement?",
    "options": [
      "Cyclobenzaprine",
      "Lamotrigine",
      "Cholecalciferol (Vitamin D3)",
      "Budesonide/Formoterol"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_37",
    "q": "Which medication is indicated for infection and is classified as a(n) fluoroquinolone antibiotic?",
    "options": [
      "Buspirone",
      "Fenofibrate",
      "Nebivolol",
      "Ciprofloxacin"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_38",
    "q": "Which medication is indicated for depression and is classified as a(n) ssri antidepressant?",
    "options": [
      "Glipizide",
      "Mupirocin",
      "Citalopram",
      "Nebivolol"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_39",
    "q": "Which medication is indicated for infection and is classified as a(n) lincosamide antibiotic?",
    "options": [
      "Clindamycin oral",
      "Methotrexate",
      "Triamcinolone nasal",
      "Trimethoprim/Sulfamethoxazole"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_40",
    "q": "Which medication is indicated for rash and is classified as a(n) topical corticosteroid?",
    "options": [
      "Clobetasol topical",
      "Anastrozole",
      "Insulin degludec",
      "Cholecalciferol (Vitamin D3)"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_41",
    "q": "Which medication is indicated for anxiety and is classified as a(n) benzodiazepine, c-iv?",
    "options": [
      "Question 46",
      "Fluticasone/Salmeterol",
      "Clonazepam",
      "Labetalol"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_42",
    "q": "Which medication is indicated for hypertension and is classified as a(n) a2-adrenergic agonist?",
    "options": [
      "Clonidine",
      "Fenofibrate",
      "Trimethoprim/Sulfamethoxazole",
      "Lisinopril"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_43",
    "q": "Which medication is indicated for antiplatelet and is classified as a(n) platelet aggregation inhibitor?",
    "options": [
      "Olmesartan",
      "Ketoconazole topical",
      "Fenofibrate",
      "Clopidogrel"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_44",
    "q": "Which medication is indicated for pain and is classified as a(n) opioid, c-ii (when in combination with acetaminophen, c-iii for tablets, c-v for liquid)?",
    "options": [
      "Acetaminophen",
      "Buspirone",
      "Rizatriptan",
      "Ferrous sulfate"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_45",
    "q": "Which medication is indicated for vitamin deficiency and is classified as a(n) essential b vitamin (b12)?",
    "options": [
      "Docusate sodium",
      "Clonidine",
      "Acetaminophen",
      "Question 46"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_46",
    "q": "Which medication is indicated for pain and is classified as a(n) centrally acting skeletal muscle relaxant?",
    "options": [
      "Cyclobenzaprine",
      "Promethazine",
      "Etonogestrel/Ethinyl estradiol vaginal ring",
      "Levofloxacin"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_47",
    "q": "Which medication is indicated for ocular issues and is classified as a(n) calcineurin inhibitor?",
    "options": [
      "Guanfacine ER",
      "Cyclosporine ophthalmic",
      "Ketoconazole topical",
      "Olanzapine"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_48",
    "q": "Which medication is indicated for anticoagulation and is classified as a(n) direct oral anticoagulant (doac)?",
    "options": [
      "Diclofenac oral",
      "Amlodipine",
      "Dabigatran",
      "Sitagliptin"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_49",
    "q": "Which medication is indicated for diabetes and is classified as a(n) antidiabetic agent, sodium-glucose cotransporter 2 (sglt2) inhibitor?",
    "options": [
      "Dapagliflozin",
      "Doxycycline",
      "Irbesartan",
      "Chlorthalidone"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_50",
    "q": "Which medication is indicated for depression and is classified as a(n) serotonin/norepinephrine reuptake inhibitor?",
    "options": [
      "Liraglutide",
      "Amoxicillin/Clavulanate",
      "Prednisone",
      "Desvenlafaxine"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_51",
    "q": "Which medication is indicated for adhd and is classified as a(n) cns stimulant, c-ii?",
    "options": [
      "Irbesartan",
      "Isosorbide mononitrate",
      "Tramadol",
      "Dexmethylphenidate ER"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_52",
    "q": "Which medication is indicated for anxiety and is classified as a(n) benzodiazepine, c-iv?",
    "options": [
      "Trazodone",
      "Diazepam",
      "Ipratropium/Albuterol",
      "Irbesartan"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_53",
    "q": "Which medication is indicated for pain and is classified as a(n) nsaid?",
    "options": [
      "Gabapentin",
      "Levocetirizine",
      "Diclofenac oral",
      "Aripiprazole"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_54",
    "q": "Which medication is indicated for irritable bowel syndrome and is classified as a(n) antimuscarinic?",
    "options": [
      "Desvenlafaxine",
      "Dicyclomine",
      "Warfarin",
      "Varenicline"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_55",
    "q": "Which medication is indicated for hypertension and is classified as a(n) calcium channel blocker?",
    "options": [
      "Quetiapine",
      "Amiodarone",
      "Diltiazem ER",
      "Canagliflozin"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_56",
    "q": "Which medication is indicated for constipation and is classified as a(n) stool softener?",
    "options": [
      "Isosorbide mononitrate",
      "Docusate sodium",
      "Topiramate",
      "Rivaroxaban"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_57",
    "q": "Which medication is indicated for dementia and is classified as a(n) central cholinesterase inhibitor?",
    "options": [
      "Fluticasone nasal",
      "Oxycodone",
      "Donepezil",
      "Nifedipine"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_58",
    "q": "Which medication is indicated for bph (benign prostatic hyperplasia,) htn (hypertension) and is classified as a(n) al-adreneric blocker?",
    "options": [
      "Doxazosin",
      "Cyclosporine ophthalmic",
      "Venlafaxine",
      "Cefdinir"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_59",
    "q": "Which medication is indicated for infection and is classified as a(n) tetracycline antibiotic?",
    "options": [
      "Finasteride",
      "Doxycycline",
      "Question 46",
      "Testosterone"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_60",
    "q": "Which medication is indicated for diabetes and is classified as a(n) antidiabetic agent, glucagon-like peptide-1-receptor agonist?",
    "options": [
      "Dexmethylphenidate ER",
      "Quetiapine",
      "Dulaglutide",
      "Metoprolol"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_61",
    "q": "Which medication is indicated for depression, (anxiety) and is classified as a(n) serotonin/norepinephrine reuptake inhibitor?",
    "options": [
      "Montelukast",
      "Duloxetine",
      "Triamcinolone nasal",
      "Fluconazole"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_62",
    "q": "Which medication is indicated for hypertension and is classified as a(n) acei, antihypertensive?",
    "options": [
      "Enalapril",
      "Question 117",
      "Lisdexamfetamine",
      "Fenofibrate"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_63",
    "q": "Which medication is indicated for anaphylaxis and is classified as a(n) alpha/beta agonist, anaphylaxis agent?",
    "options": [
      "Venlafaxine",
      "Docusate sodium (Colace)",
      "Latanoprost",
      "Cyclosporine ophthalmic"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_64",
    "q": "Which medication is indicated for depression and is classified as a(n) ssri antidepressant?",
    "options": [
      "Nebivolol",
      "Lisinopril",
      "Question 77",
      "Escitalopram"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_65",
    "q": "Which medication is indicated for gerd and is classified as a(n) proton pump inhibitor?",
    "options": [
      "Amoxicillin/Clavulanate",
      "Paroxetine",
      "Esomeprazole",
      "Insulin aspart"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_66",
    "q": "Which medication is indicated for menopause and is classified as a(n) estrogen?",
    "options": [
      "Adalimumab",
      "Nitroglycerin",
      "Enalapril",
      "Estradiol oral"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_67",
    "q": "Which medication is indicated for contraception and is classified as a(n) contraceptive?",
    "options": [
      "Gabapentin",
      "Buspirone",
      "Etonogestrel/Ethinyl estradiol vaginal ring",
      "Meloxicam"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_68",
    "q": "Which medication is indicated for dyslipidemia and is classified as a(n) antihyperlipidemic, cholesterol absorption inhibitor?",
    "options": [
      "Oxcarbazepine",
      "Hydrocodone",
      "Ezetimibe",
      "Clonazepam"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_69",
    "q": "Which medication is indicated for gerd and is classified as a(n) histamine h2 antagonist?",
    "options": [
      "Famotidine",
      "Esomeprazole",
      "Ramipril",
      "Lisinopril"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_70",
    "q": "Which medication is indicated for dyslipidemia and is classified as a(n) antihyperlipidemic?",
    "options": [
      "Question 117",
      "Pioglitazone",
      "Hydrocodone",
      "Fenofibrate"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_71",
    "q": "Which medication is indicated for iron deficiency and is classified as a(n) mineral supplement?",
    "options": [
      "Naproxen",
      "Albuterol sulfate (HFA)",
      "Valacyclovir",
      "Ferrous sulfate"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_72",
    "q": "Which medication is indicated for bph (benign prostatic hyperplasia) and is classified as a(n) 5a-reductase inhibitor?",
    "options": [
      "Finasteride",
      "Insulin glargine",
      "Docusate sodium",
      "Lorazepam"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_73",
    "q": "Which medication is indicated for fungal infection and is classified as a(n) imidazole antifungal?",
    "options": [
      "Apixaban",
      "Cholecalciferol (Vitamin D3)",
      "Oxcarbazepine",
      "Fluconazole"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_74",
    "q": "Which medication is indicated for depression and is classified as a(n) ssri antidepressant?",
    "options": [
      "Glimepiride",
      "Budesonide/Formoterol",
      "Fluoxetine",
      "Olanzapine"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_75",
    "q": "Which medication is indicated for rhinitis, (asthma) and is classified as a(n) intranasal adrenal glucocorticosteroid?",
    "options": [
      "Mirtazapine",
      "Ramipril",
      "Fluoxetine",
      "Fluticasone nasal"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_76",
    "q": "Which medication is indicated for asthma and is classified as a(n) inhaled adrenal corticosteroid?",
    "options": [
      "Docusate sodium",
      "Lamotrigine",
      "Mometasone nasal",
      "Question 77"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_77",
    "q": "Which medication is indicated for asthma and is classified as a(n) inhaled corticosteroid and long-acting b2-adrenergic agonist combination?",
    "options": [
      "Mirtazapine",
      "Ramipril",
      "Indomethacin",
      "Fluticasone/Salmeterol"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_78",
    "q": "Which medication is indicated for folic acid deficiency and is classified as a(n) essential b vitamin?",
    "options": [
      "Loratadine",
      "Question 46",
      "Levofloxacin",
      "Folic acid"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_79",
    "q": "Which medication is indicated for edema and is classified as a(n) loop diuretic?",
    "options": [
      "Irbesartan",
      "Furosemide",
      "Valsartan",
      "Testosterone"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_80",
    "q": "Which medication is indicated for seizures and is classified as a(n) gamma aminobutyric acid analog, anticonvulsant?",
    "options": [
      "Meclizine",
      "Mirtazapine",
      "Pregabalin",
      "Gabapentin"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_81",
    "q": "Which medication is indicated for diabetes and is classified as a(n) second-generation sulfonylurea, antidiabetic?",
    "options": [
      "Celecoxib",
      "Glimepiride",
      "Insulin glargine",
      "Trazodone"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_82",
    "q": "Which medication is indicated for diabetes and is classified as a(n) second-generation sulfonylurea, antidiabetic?",
    "options": [
      "Rivaroxaban",
      "Escitalopram",
      "Sucralfate",
      "Glipizide"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_83",
    "q": "Which medication is indicated for adhd and is classified as a(n) a2-adrenergic agonist?",
    "options": [
      "Nortriptyline",
      "Trazodone",
      "Mirabegron",
      "Guanfacine ER"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_84",
    "q": "Which medication is indicated for hypertension and is classified as a(n) peripheral vasodilator?",
    "options": [
      "Verapamil",
      "Mometasone nasal",
      "Hydralazine",
      "Cyclobenzaprine"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_85",
    "q": "Which medication is indicated for hypertension and is classified as a(n) thiazide diuretic, antihypertensive?",
    "options": [
      "Spironolactone",
      "Ondansetron",
      "Hydrochlorothiazide",
      "Clonazepam"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_86",
    "q": "Which medication is indicated for pain and is classified as a(n) opioid analgesic, c-ii?",
    "options": [
      "Fluconazole",
      "Sitagliptin",
      "Mirtazapine",
      "Hydrocodone"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_87",
    "q": "Which medication is indicated for skin disorders and is classified as a(n) topical corticosteroid?",
    "options": [
      "Question 88",
      "Oxcarbazepine",
      "Losartan",
      "Tamsulosin"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_88",
    "q": "Which medication is indicated for rheumatoid arthritis, lupus and is classified as a(n) aminoquinoline?",
    "options": [
      "Clonidine",
      "Thyroid desiccated",
      "Budesonide/Formoterol",
      "Hydroxychloroquine"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_89",
    "q": "Which medication is indicated for itching and is classified as a(n) histamine h1 antagonist, first generation piperazine derivative?",
    "options": [
      "Rizatriptan",
      "Sildenafil",
      "Levocetirizine",
      "Hydroxyzine"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_90",
    "q": "Which medication is indicated for pain and is classified as a(n) nsaid?",
    "options": [
      "Ibuprofen",
      "Promethazine",
      "Losartan",
      "Acetaminophen"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_91",
    "q": "Which medication is indicated for pain and is classified as a(n) nsaid?",
    "options": [
      "Indomethacin",
      "Tamsulosin",
      "Loratadine",
      "Levetiracetam"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_92",
    "q": "Which medication is indicated for diabetes and is classified as a(n) antidiabetic, insulin, rapid-acting?",
    "options": [
      "Losartan",
      "Insulin aspart",
      "Ropinirole",
      "Oseltamivir"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_93",
    "q": "Which medication is indicated for diabetes and is classified as a(n) insulin analogs, long-acting?",
    "options": [
      "Insulin degludec",
      "Cholecalciferol (Vitamin D3)",
      "Linagliptin",
      "Metformin"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_94",
    "q": "Which medication is indicated for diabetes and is classified as a(n) insulin analogs, long-acting?",
    "options": [
      "Buspirone",
      "Insulin glargine",
      "Folic acid",
      "Methocarbamol"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_95",
    "q": "Which medication is indicated for diabetes and is classified as a(n) insulin analogs, rapid-acting?",
    "options": [
      "Insulin lispro",
      "Guanfacine ER",
      "Amlodipine",
      "Ezetimibe"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_96",
    "q": "Which medication is indicated for copd and is classified as a(n) anticholinergic/selective b2-agonist combination?",
    "options": [
      "Topiramate",
      "Nystatin topical",
      "Fluconazole",
      "Ipratropium/Albuterol"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_97",
    "q": "Which medication is indicated for hypertension and is classified as a(n) angiotensin ii receptor antagonist?",
    "options": [
      "Irbesartan",
      "Ferrous sulfate",
      "Estradiol oral",
      "Verapamil"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_98",
    "q": "Which medication is indicated for angina and is classified as a(n) long-acting nitrate, antianginal?",
    "options": [
      "Mirabegron",
      "Isosorbide mononitrate",
      "Bisoprolol/Hydrochlorothiazide",
      "Trazodone"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_99",
    "q": "Which medication is indicated for fungal infection and is classified as a(n) imidazole antifungal?",
    "options": [
      "Promethazine",
      "Spironolactone",
      "Pregabalin",
      "Ketoconazole topical"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_100",
    "q": "Which medication is indicated for hypertension and is classified as a(n) α/β-adrenergic blocker?",
    "options": [
      "Diltiazem ER",
      "Morphine ER",
      "Labetalol",
      "Lovastatin"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_101",
    "q": "Which medication is indicated for seizures and is classified as a(n) phenyltriazine anticonvulsant?",
    "options": [
      "Labetalol",
      "Lamotrigine",
      "Prednisolone",
      "Atenolol"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_102",
    "q": "Which medication is indicated for gerd and is classified as a(n) proton pump inhibitor?",
    "options": [
      "Metoprolol",
      "Metformin",
      "Lansoprazole",
      "Prednisolone"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_103",
    "q": "Which medication is indicated for glaucoma and is classified as a(n) postaglandin, antiglaucoma agent?",
    "options": [
      "Oxybutynin",
      "Clonidine",
      "Latanoprost",
      "Tramadol"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_104",
    "q": "Which medication is indicated for seizures and is classified as a(n) anticonvulsant?",
    "options": [
      "Potassium chloride",
      "Levetiracetam",
      "Lorazepam",
      "Oxycodone"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_105",
    "q": "Which medication is indicated for allergic rhinitis and is classified as a(n) antihistamine?",
    "options": [
      "Buprenorphine/Naloxone",
      "Cyclobenzaprine",
      "Levocetirizine",
      "Acetaminophen"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_106",
    "q": "Which medication is indicated for infection and is classified as a(n) fluoroquinolone antibiotic?",
    "options": [
      "Levofloxacin",
      "Lisdexamfetamine",
      "Finasteride",
      "Bisoprolol/Hydrochlorothiazide"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_107",
    "q": "Which medication is indicated for hypothyroidism and is classified as a(n) thyroid supplement?",
    "options": [
      "Olmesartan",
      "Paroxetine",
      "Doxazosin",
      "Levothyroxine"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_108",
    "q": "Which medication is indicated for pain and is classified as a(n) local anesthetic?",
    "options": [
      "Lidocaine patch",
      "Fluticasone nasal",
      "Acyclovir",
      "Esomeprazole"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_109",
    "q": "Which medication is indicated for diabetes and is classified as a(n) dipeptidyl peptidase iv inhibitor?",
    "options": [
      "Linagliptin",
      "Mometasone nasal",
      "Irbesartan",
      "Famotidine"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_110",
    "q": "Which medication is indicated for diabetes and is classified as a(n) glucagon-like peptide-1-receptor agonist?",
    "options": [
      "Liraglutide",
      "Buprenorphine/Naloxone",
      "Oseltamivir",
      "Carbamazepine"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_111",
    "q": "Which medication is indicated for adhd and is classified as a(n) amphetamine, cns stimulant, c-ii?",
    "options": [
      "Lisdexamfetamine",
      "Lovastatin",
      "Ibuprofen",
      "Levothyroxine"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_112",
    "q": "Which medication is indicated for hypertension and is classified as a(n) acei, antihypertensive?",
    "options": [
      "Clobetasol topical",
      "Naproxen",
      "Oxycodone",
      "Lisinopril"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_113",
    "q": "Which medication is indicated for allergies and is classified as a(n) antihistamine?",
    "options": [
      "Prednisolone",
      "Loratadine",
      "Bisoprolol/Hydrochlorothiazide",
      "Insulin aspart"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_114",
    "q": "Which medication is indicated for anxiety and is classified as a(n) benzodiazepine, short or intermediate acting, c-iv?",
    "options": [
      "Dabigatran",
      "Lorazepam",
      "Pravastatin",
      "Cefdinir"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_115",
    "q": "Which medication is indicated for hypertension and is classified as a(n) angiotensin ii receptor antagonist, antihypertensive?",
    "options": [
      "Losartan",
      "Budesonide/Formoterol",
      "Montelukast",
      "Amoxicillin"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_116",
    "q": "Which medication is indicated for dyslipidemia and is classified as a(n) hmg-coa reductase inhibitor?",
    "options": [
      "Question 117",
      "Quetiapine",
      "Oxcarbazepine",
      "Progesterone"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_117",
    "q": "Which medication is indicated for antiemetic and is classified as a(n) antihistamine, antiemetic?",
    "options": [
      "Metronidazole",
      "Anastrozole",
      "Tizanidine",
      "Meclizine"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_118",
    "q": "Which medication is indicated for pain and is classified as a(n) nsaid?",
    "options": [
      "Meloxicam",
      "Doxycycline",
      "Oseltamivir",
      "Question 88"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_119",
    "q": "Which medication is indicated for diabetes and is classified as a(n) biguanide, hypoglycemic?",
    "options": [
      "Olmesartan",
      "Lisdexamfetamine",
      "Nitrofurantoin",
      "Metformin"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_120",
    "q": "Which medication is indicated for pain and is classified as a(n) centrally acting skeletal muscle relaxant?",
    "options": [
      "Methocarbamol",
      "Progesterone",
      "Insulin lispro",
      "Cyclobenzaprine"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_121",
    "q": "Which medication is indicated for cancer and is classified as a(n) antimetabolite?",
    "options": [
      "Allopurinol",
      "Methotrexate",
      "Atenolol",
      "Fluticasone/Salmeterol"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_122",
    "q": "Which medication is indicated for adhd and is classified as a(n) cns stimulant, c-ii?",
    "options": [
      "Valsartan",
      "Methylphenidate",
      "Tiotropium",
      "Benazepril"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_123",
    "q": "Which medication is indicated for inflammatory reactions and is classified as a(n) adrenal corticosteroid?",
    "options": [
      "Labetalol",
      "Enalapril",
      "Ropinirole",
      "Methylprednisolone"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_124",
    "q": "Which medication is indicated for hypertension and is classified as a(n) β-adrenergic blocker, cardioselective?",
    "options": [
      "Ibuprofen",
      "Etonogestrel/Ethinyl estradiol vaginal ring",
      "Metoprolol",
      "Lovastatin"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_125",
    "q": "Which medication is indicated for infection and is classified as a(n) nitroimidazole antibiotic, antiprotozoal?",
    "options": [
      "Metronidazole",
      "Isosorbide mononitrate",
      "Fluconazole",
      "Fenofibrate"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_126",
    "q": "Which medication is indicated for overactive bladder and is classified as a(n) beta-3 agonist?",
    "options": [
      "Rizatriptan",
      "Mirabegron",
      "Ezetimibe",
      "Famotidine"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_127",
    "q": "Which medication is indicated for depression and is classified as a(n) antidepressant, a2-antagonist?",
    "options": [
      "Nortriptyline",
      "Allopurinol",
      "Isosorbide mononitrate",
      "Mirtazapine"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_128",
    "q": "Which medication is indicated for rhinitis and is classified as a(n) intranasal corticosteroid?",
    "options": [
      "Lovastatin",
      "Mometasone nasal",
      "Baclofen",
      "Clopidogrel"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_129",
    "q": "Which medication is indicated for asthma and is classified as a(n) leukotriene receptor antagonist?",
    "options": [
      "Montelukast",
      "Gabapentin",
      "Sertraline",
      "Etonogestrel/Ethinyl estradiol vaginal ring"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_130",
    "q": "Which medication is indicated for pain and is classified as a(n) opioid analgesic, c-ii?",
    "options": [
      "Clonidine",
      "Nitroglycerin",
      "Timolol ophthalmic",
      "Morphine ER"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_131",
    "q": "Which medication is indicated for skin disorders and is classified as a(n) topical antibacterial?",
    "options": [
      "Losartan",
      "Mupirocin",
      "Loratadine",
      "Donepezil"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_132",
    "q": "Which medication is indicated for pain and is classified as a(n) nsaid?",
    "options": [
      "Penicillin VK",
      "Bisoprolol/Hydrochlorothiazide",
      "Guanfacine ER",
      "Naproxen"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_133",
    "q": "Which medication is indicated for hypertension and is classified as a(n) β-adrenergic blocker, cardioselective, b1 selective?",
    "options": [
      "Methotrexate",
      "Cetirizine",
      "Nebivolol",
      "Gabapentin"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_134",
    "q": "Which medication is indicated for hypertension and is classified as a(n) dihydropyridine calcium channel blocker?",
    "options": [
      "Nifedipine",
      "Rizatriptan",
      "Famotidine",
      "Dulaglutide"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_135",
    "q": "Which medication is indicated for urinary infection and is classified as a(n) nitrofuran antibiotic?",
    "options": [
      "Methocarbamol",
      "Paroxetine",
      "Nitrofurantoin",
      "Linagliptin"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_136",
    "q": "Which medication is indicated for angina and is classified as a(n) nitrate, antianginal?",
    "options": [
      "Meclizine",
      "Simvastatin",
      "Promethazine",
      "Nitroglycerin"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_137",
    "q": "Which medication is indicated for depression and is classified as a(n) tricyclic antidepressant?",
    "options": [
      "Cetirizine",
      "Fluconazole",
      "Nortriptyline",
      "Mirtazapine"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_138",
    "q": "Which medication is indicated for fungal infection and is classified as a(n) polyene antifungal?",
    "options": [
      "Zolpidem",
      "Nystatin topical",
      "Allopurinol",
      "Oseltamivir"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_139",
    "q": "Which medication is indicated for schizophrenia and is classified as a(n) thienobenzodiazepine, atypical antipsychotic?",
    "options": [
      "Hydrochlorothiazide",
      "Celecoxib",
      "Olanzapine",
      "Amlodipine"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_140",
    "q": "Which medication is indicated for hypertension and is classified as a(n) angiotensin ii receptor antagonist?",
    "options": [
      "Triamcinolone nasal",
      "Olmesartan",
      "Terazosin",
      "Valacyclovir"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_141",
    "q": "Which medication is indicated for gerd and is classified as a(n) proton pump inhibitor?",
    "options": [
      "Omeprazole",
      "Fenofibrate",
      "Pioglitazone",
      "Diclofenac oral"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_142",
    "q": "Which medication is indicated for antiemetic and is classified as a(n) antiemetic?",
    "options": [
      "Ondansetron",
      "Cholecalciferol (Vitamin D3)",
      "Acyclovir",
      "Cyclobenzaprine"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_143",
    "q": "Which medication is indicated for influenza and is classified as a(n) neuraminidase inhibitor, antiviral?",
    "options": [
      "Fluticasone/Salmeterol",
      "Oseltamivir",
      "Ciprofloxacin",
      "Sildenafil"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_144",
    "q": "Which medication is indicated for seizures and is classified as a(n) dibenzazepine carboxamide, anticonvulsant?",
    "options": [
      "Aspirin 81 mg",
      "Diazepam",
      "Famotidine",
      "Oxcarbazepine"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_145",
    "q": "Which medication is indicated for overactive bladder and is classified as a(n) urinary antispasmodic?",
    "options": [
      "Question 77",
      "Oxybutynin",
      "Labetalol",
      "Diltiazem ER"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_146",
    "q": "Which medication is indicated for pain and is classified as a(n) opioid analgesic, c-ii?",
    "options": [
      "Verapamil",
      "Metoprolol",
      "Pioglitazone",
      "Oxycodone"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_147",
    "q": "Which medication is indicated for gerd and is classified as a(n) proton pump inhibitor?",
    "options": [
      "Pantoprazole",
      "Pravastatin",
      "Paroxetine",
      "Anastrozole"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_148",
    "q": "Which medication is indicated for depression and is classified as a(n) ssri antidepressant?",
    "options": [
      "Fluoxetine",
      "Carvedilol",
      "Etonogestrel/Ethinyl estradiol vaginal ring",
      "Paroxetine"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_149",
    "q": "Which medication is indicated for infection and is classified as a(n) antibiotic?",
    "options": [
      "Diazepam",
      "Lovastatin",
      "Spironolactone",
      "Acyclovir"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_150",
    "q": "Which medication is indicated for obesity and is classified as a(n) centrally acting appetite suppressant, c-iv?",
    "options": [
      "Hydrochlorothiazide",
      "Meloxicam",
      "Cyclobenzaprine",
      "Phentermine"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_151",
    "q": "Which medication is indicated for diabetes and is classified as a(n) thiazolidinedione antidiabetic?",
    "options": [
      "Celecoxib",
      "Nystatin topical",
      "Pioglitazone",
      "Trimethoprim/Sulfamethoxazole"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_152",
    "q": "Which medication is indicated for hypokalemia and is classified as a(n) electrolyte, potassium?",
    "options": [
      "Furosemide",
      "Rizatriptan",
      "Mirabegron",
      "Potassium chloride"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_153",
    "q": "Which medication is indicated for parkinson's disease and is classified as a(n) dopamine agonist, antiparkinson?",
    "options": [
      "Risperidone",
      "Pramipexole",
      "Sucralfate",
      "Warfarin"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_154",
    "q": "Which medication is indicated for dyslipidemia and is classified as a(n) hmg-coa reductase inhibitor?",
    "options": [
      "Pravastatin",
      "Linagliptin",
      "Losartan",
      "Simvastatin"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_155",
    "q": "Which medication is indicated for inflammatory reactions and is classified as a(n) adrenal glucocorticosteroid?",
    "options": [
      "Citalopram",
      "Prednisolone",
      "Ciprofloxacin",
      "Alendronate"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_156",
    "q": "Which medication is indicated for inflammatory reactions and is classified as a(n) adrenal corticosteroid?",
    "options": [
      "Prednisone",
      "Verapamil",
      "Trazodone",
      "Topiramate"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_157",
    "q": "Which medication is indicated for neuropathic pain and is classified as a(n) analgesic, anticonvulsant, c-v?",
    "options": [
      "Triamcinolone nasal",
      "Dapagliflozin",
      "Duloxetine",
      "Pregabalin"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_158",
    "q": "Which medication is indicated for women's health and is classified as a(n) progestin hormone?",
    "options": [
      "Progesterone",
      "Tamsulosin",
      "Aripiprazole",
      "Pioglitazone"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_159",
    "q": "Which medication is indicated for antiemetic and is classified as a(n) phenothiazine antihistamine?",
    "options": [
      "Amitriptyline",
      "Promethazine",
      "Trimethoprim/Sulfamethoxazole",
      "Simvastatin"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_160",
    "q": "Which medication is indicated for hypertension and is classified as a(n) β-adrenergic blocker, nonselective?",
    "options": [
      "Naproxen",
      "Lovastatin",
      "Propranolol",
      "Methotrexate"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_161",
    "q": "Which medication is indicated for schizophrenia and is classified as a(n) antipsychotic (atypical)?",
    "options": [
      "Amlodipine",
      "Insulin lispro",
      "Methylphenidate",
      "Quetiapine"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_162",
    "q": "Which medication is indicated for hypertension and is classified as a(n) acei, antihypertensive?",
    "options": [
      "Omeprazole",
      "Amlodipine",
      "Ramipril",
      "Oxcarbazepine"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_163",
    "q": "Which medication is indicated for schizophrenia and is classified as a(n) benzisoxazole, antipsychotic?",
    "options": [
      "Omeprazole",
      "Risperidone",
      "Simvastatin",
      "Lamotrigine"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_164",
    "q": "Which medication is indicated for anticoagulation and is classified as a(n) anticoagulant, factor xa inhibitor?",
    "options": [
      "Levofloxacin",
      "Rivaroxaban",
      "Baclofen",
      "Mirtazapine"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_165",
    "q": "Which medication is indicated for migraine and is classified as a(n) antimigraine, serotonin receptor agonist?",
    "options": [
      "Rizatriptan",
      "Buprenorphine/Naloxone",
      "Sildenafil",
      "Nebivolol"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_166",
    "q": "Which medication is indicated for parkinson's disease and is classified as a(n) dopamine agonist?",
    "options": [
      "Ropinirole",
      "Tizanidine",
      "Nortriptyline",
      "Dulaglutide"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_167",
    "q": "Which medication is indicated for dyslipidemia and is classified as a(n) hmg-coa reductase inhibitor?",
    "options": [
      "Rosuvastatin",
      "Lamotrigine",
      "Ropinirole",
      "Celecoxib"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_168",
    "q": "Which medication is indicated for depression and is classified as a(n) ssri antidepressant?",
    "options": [
      "Sertraline",
      "Citalopram",
      "Azithromycin",
      "Progesterone"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_169",
    "q": "Which medication is indicated for erectile dysfunction and is classified as a(n) erectile dysfunction agent, pulmonary hypertensive agent?",
    "options": [
      "Sildenafil",
      "Acetaminophen",
      "Nystatin topical",
      "Oxycodone"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_170",
    "q": "Which medication is indicated for dyslipidemia and is classified as a(n) hmg-coa reductase inhibitor?",
    "options": [
      "Simvastatin",
      "Rosuvastatin",
      "Alprazolam",
      "Baclofen"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_171",
    "q": "Which medication is indicated for diabetes and is classified as a(n) dipeptidyl peptidase-4 inhibitor, antidiabetic?",
    "options": [
      "Dicyclomine",
      "Alendronate",
      "Sitagliptin",
      "Chlorthalidone"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_172",
    "q": "Which medication is indicated for heart failure and is classified as a(n) potassium-sparing diuretic; selective aldosterone blocker?",
    "options": [
      "Fluoxetine",
      "Spironolactone",
      "Methylprednisolone",
      "Cephalexin"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_173",
    "q": "Which medication is indicated for duodenal ulcer and is classified as a(n) gastrointestinal agent, miscellaneous?",
    "options": [
      "Question 46",
      "Metformin",
      "Sucralfate",
      "Celecoxib"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_174",
    "q": "Which medication is indicated for migraine and is classified as a(n) antimigraine, serotonin receptor agonist?",
    "options": [
      "Rosuvastatin",
      "Loratadine",
      "Dicyclomine",
      "Sumatriptan"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_175",
    "q": "Which medication is indicated for bph (benign prostatic hyperplasia) and is classified as a(n) α1-adrenergic blocker?",
    "options": [
      "Mirtazapine",
      "Tamsulosin",
      "Triamcinolone nasal",
      "Canagliflozin"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_176",
    "q": "Which medication is indicated for bph (benign prostatic hyperplasia, htn (hypertension) and is classified as a(n) α1-adrenergic blocker?",
    "options": [
      "Penicillin VK",
      "Meloxicam",
      "Rosuvastatin",
      "Ibuprofen"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_177",
    "q": "Which medication is indicated for androgen replacement and is classified as a(n) androgen, c-iii?",
    "options": [
      "Baclofen",
      "Losartan",
      "Morphine ER",
      "Testosterone"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_178",
    "q": "Which medication is indicated for hypothyroidism and is classified as a(n) thyroid supplement?",
    "options": [
      "Folic acid",
      "Fenofibrate",
      "Warfarin",
      "Thyroid desiccated"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_179",
    "q": "Which medication is indicated for ocular issues and is classified as a(n) beta-blocker, antiglaucoma agent?",
    "options": [
      "Amoxicillin",
      "Thyroid desiccated",
      "Timolol ophthalmic",
      "Latanoprost"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_180",
    "q": "Which medication is indicated for copd and is classified as a(n) anticholinergic bronchodilator?",
    "options": [
      "Tiotropium",
      "Methocarbamol",
      "Timolol ophthalmic",
      "Montelukast"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_181",
    "q": "Which medication is indicated for pain and is classified as a(n) centrally acting skeletal muscle relaxant, α2-agonist?",
    "options": [
      "Cefdinir",
      "Etonogestrel/Ethinyl estradiol vaginal ring",
      "Hydrochlorothiazide",
      "Tizanidine"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_182",
    "q": "Which medication is indicated for seizures and is classified as a(n) anticonvulsant?",
    "options": [
      "Question 88",
      "Topiramate",
      "Levothyroxine",
      "Apixaban"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_183",
    "q": "Which medication is indicated for pain and is classified as a(n) opioid analgesic, c-iv?",
    "options": [
      "Lamotrigine",
      "Losartan",
      "Tramadol",
      "Diclofenac oral"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_184",
    "q": "Which medication is indicated for depression and is classified as a(n) antidepressant?",
    "options": [
      "Alendronate",
      "Celecoxib",
      "Trazodone",
      "Ropinirole"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_185",
    "q": "Which medication is indicated for allergic rhinitis and is classified as a(n) intranasal adrenal glucocorticosteroid?",
    "options": [
      "Ketoconazole topical",
      "Triamcinolone nasal",
      "Canagliflozin",
      "Esomeprazole"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_186",
    "q": "Which medication is indicated for skin disorders and is classified as a(n) topical corticosteroid?",
    "options": [
      "Fluticasone/Salmeterol",
      "Linagliptin",
      "Terazosin",
      "Ropinirole"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_187",
    "q": "Which medication is indicated for hypertension and is classified as a(n) potassium sparing/thiazide diuretic combination?",
    "options": [
      "Triamterene/Hydrochlorothiazide",
      "Indomethacin",
      "Tizanidine",
      "Ferrous sulfate"
    ],
    "correct": 0
  },
  {
    "id": "drug_ex_188",
    "q": "Which medication is indicated for infection and is classified as a(n) sulfonamide antibiotic?",
    "options": [
      "Tizanidine",
      "Trimethoprim/Sulfamethoxazole",
      "Mirtazapine",
      "Fluticasone nasal"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_189",
    "q": "Which medication is indicated for herpes and is classified as a(n) viral dna polymerase inhibitor?",
    "options": [
      "Chlorthalidone",
      "Valacyclovir",
      "Famotidine",
      "Amitriptyline"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_190",
    "q": "Which medication is indicated for hypertension and is classified as a(n) angiotensin ii receptor antagonist?",
    "options": [
      "Oxycodone",
      "Ropinirole",
      "Insulin aspart",
      "Valsartan"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_191",
    "q": "Which medication is indicated for smoking cessation and is classified as a(n) smoking cessation agent?",
    "options": [
      "Tiotropium",
      "Nystatin topical",
      "Varenicline",
      "Clopidogrel"
    ],
    "correct": 2
  },
  {
    "id": "drug_ex_192",
    "q": "Which medication is indicated for depression and is classified as a(n) antidepressant, serotonin/norepinephrine reuptake inhibitor?",
    "options": [
      "Acetaminophen",
      "Venlafaxine",
      "Progesterone",
      "Dicyclomine"
    ],
    "correct": 1
  },
  {
    "id": "drug_ex_193",
    "q": "Which medication is indicated for hypertension and is classified as a(n) calcium channel blocker?",
    "options": [
      "Triamterene/Hydrochlorothiazide",
      "Labetalol",
      "Irbesartan",
      "Verapamil"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_194",
    "q": "Which medication is indicated for anticoagulation and is classified as a(n) anticoagulant, vitamin k antagonist?",
    "options": [
      "Phentermine",
      "Albuterol sulfate (HFA)",
      "Bupropion XL",
      "Warfarin"
    ],
    "correct": 3
  },
  {
    "id": "drug_ex_195",
    "q": "Which medication is indicated for insomnia and is classified as a(n) nonbarbiturate hypnotic, c-iv?",
    "options": [
      "Zolpidem",
      "Pioglitazone",
      "Metoprolol",
      "Sertraline"
    ],
    "correct": 0
  }
]
}];

const drugCases$1 = [];

const lawFlashcards$1 = [{
  id: "builtin_law",
  title: "Pharmacy Law Flashcards",
  icon: "Layers",
  color: "#10b981",
  isBuiltIn: true,
  isBuiltin: true,
  cards: [
  {
    "id": "law_fc_0",
    "q": "Question 1",
    "a": "Federal law regulating controlled substances and creating a closed system for manufacture, distribution, and dispensing",
    "nextReview": 0
  },
  {
    "id": "law_fc_1",
    "q": "Question 2",
    "a": "DEA (Drug Enforcement Administration) under the Department of Justice",
    "nextReview": 0
  },
  {
    "id": "law_fc_2",
    "q": "Question 3",
    "a": "High abuse potential\nNo accepted medical use\nLack of safety even under supervision",
    "nextReview": 0
  },
  {
    "id": "law_fc_3",
    "q": "Question 4",
    "a": "Heroin, LSD, marijuana, MDMA, psilocybin, peyote",
    "nextReview": 0
  },
  {
    "id": "law_fc_4",
    "q": "Question 5",
    "a": "High abuse potential\nAccepted medical use (with restrictions)\nSevere dependence risk",
    "nextReview": 0
  },
  {
    "id": "law_fc_5",
    "q": "Question 6",
    "a": "Morphine, oxycodone, fentanyl, hydrocodone combos, amphetamine, methylphenidate, methadone",
    "nextReview": 0
  },
  {
    "id": "law_fc_6",
    "q": "Question 7",
    "a": "Less abuse than I & II, accepted medical use, moderate/low physical dependence or high psychological dependence",
    "nextReview": 0
  },
  {
    "id": "law_fc_7",
    "q": "Question 8",
    "a": "Tylenol #3, buprenorphine, ketamine, anabolic steroids, dronabinol",
    "nextReview": 0
  },
  {
    "id": "law_fc_8",
    "q": "Question 9",
    "a": "Low abuse potential relative to III\nAccepted medical use\nLimited dependence risk",
    "nextReview": 0
  },
  {
    "id": "law_fc_9",
    "q": "Question 10",
    "a": "Benzodiazepines, zolpidem, tramadol, carisoprodol",
    "nextReview": 0
  },
  {
    "id": "law_fc_10",
    "q": "Question 11",
    "a": "Lowest abuse potential\nAccepted medical use\nLimited dependence risk",
    "nextReview": 0
  },
  {
    "id": "law_fc_11",
    "q": "Question 12",
    "a": "Codeine cough syrups, pregabalin, diphenoxylate/atropine",
    "nextReview": 0
  },
  {
    "id": "law_fc_12",
    "q": "Question 13",
    "a": "≤1.8 g per 100 mL OR ≤90 mg per dosage unit",
    "nextReview": 0
  },
  {
    "id": "law_fc_13",
    "q": "Question 14",
    "a": "≤200 mg per 100 mL",
    "nextReview": 0
  },
  {
    "id": "law_fc_14",
    "q": "Question 15",
    "a": "Quantities divisible by 3",
    "nextReview": 0
  },
  {
    "id": "law_fc_15",
    "q": "Question 16",
    "a": "Quantities divisible by 5",
    "nextReview": 0
  },
  {
    "id": "law_fc_16",
    "q": "Question 17",
    "a": "2 letters + 7 numbers\nLast digit = check digit",
    "nextReview": 0
  },
  {
    "id": "law_fc_17",
    "q": "Question 18",
    "a": "1. Add digits 1, 3, 5\n2. Add digits 2, 4, 6 then x 2\n3. Add both totals\n4. Last digit must equal check digit",
    "nextReview": 0
  },
  {
    "id": "law_fc_18",
    "q": "Question 19",
    "a": "Certificate of registration",
    "nextReview": 0
  },
  {
    "id": "law_fc_19",
    "q": "Question 20",
    "a": "New application (pharmacy/practitioner)",
    "nextReview": 0
  },
  {
    "id": "law_fc_20",
    "q": "Question 21",
    "a": "Renewal application",
    "nextReview": 0
  },
  {
    "id": "law_fc_21",
    "q": "Question 22",
    "a": "Chain pharmacy renewal affidavit",
    "nextReview": 0
  },
  {
    "id": "law_fc_22",
    "q": "Question 23",
    "a": "Manufacturer/distributor/researcher application",
    "nextReview": 0
  },
  {
    "id": "law_fc_23",
    "q": "Question 24",
    "a": "Narcotic treatment program application",
    "nextReview": 0
  },
  {
    "id": "law_fc_24",
    "q": "Question 25",
    "a": "Ordering Schedule I & II drugs",
    "nextReview": 0
  },
  {
    "id": "law_fc_25",
    "q": "Question 26",
    "a": "Single-sheet form (replaced triplicate)",
    "nextReview": 0
  },
  {
    "id": "law_fc_26",
    "q": "Question 27",
    "a": "20 items per form",
    "nextReview": 0
  },
  {
    "id": "law_fc_27",
    "q": "Question 28",
    "a": "Keep copy for 2 years",
    "nextReview": 0
  },
  {
    "id": "law_fc_28",
    "q": "Question 29",
    "a": "60 days",
    "nextReview": 0
  },
  {
    "id": "law_fc_29",
    "q": "Question 30",
    "a": "Cannot correct - must replace and keep defective form for 4 years",
    "nextReview": 0
  },
  {
    "id": "law_fc_30",
    "q": "Question 31",
    "a": "Execute new form\nAttach statement with order # and date\nNotify DEA if stolen",
    "nextReview": 0
  },
  {
    "id": "law_fc_31",
    "q": "Question 32",
    "a": "Allows someone to sign DEA Form 222 on registrant's behalf",
    "nextReview": 0
  },
  {
    "id": "law_fc_32",
    "q": "Question 33",
    "a": "Registrant signature\nPerson granted signature\n2 witnesses",
    "nextReview": 0
  },
  {
    "id": "law_fc_33",
    "q": "Question 34",
    "a": "Signature of registrant (or last registrant signer)\n2 witnesses",
    "nextReview": 0
  },
  {
    "id": "law_fc_34",
    "q": "Question 35",
    "a": "Yes, DEA Form 363",
    "nextReview": 0
  },
  {
    "id": "law_fc_35",
    "q": "Question 36",
    "a": "Patient name & address\nDrug name, strength, dosage form, quantity\nDirections\nDate issued\nPrescriber name, address, DEA #\nSignature",
    "nextReview": 0
  },
  {
    "id": "law_fc_36",
    "q": "Question 37",
    "a": "Manual signature\nElectronic (per DEA rules)",
    "nextReview": 0
  },
  {
    "id": "law_fc_37",
    "q": "Question 38",
    "a": "Pharmacist and prescriber share responsibility for validity and legitimacy of controlled prescription",
    "nextReview": 0
  },
  {
    "id": "law_fc_38",
    "q": "Question 39",
    "a": "Altered Rx\nEarly refill requests\nCash payment for expensive opioids\nDoctor shopping\nUnusual quantities\nTraveling long distance\nMultiple prescribers/pharmacies",
    "nextReview": 0
  },
  {
    "id": "law_fc_39",
    "q": "Question 40",
    "a": "Non-narcotics",
    "nextReview": 0
  },
  {
    "id": "law_fc_40",
    "q": "Question 41",
    "a": "3 years (36 months)",
    "nextReview": 0
  },
  {
    "id": "law_fc_41",
    "q": "Question 42",
    "a": "1 year (12 months)",
    "nextReview": 0
  },
  {
    "id": "law_fc_42",
    "q": "Question 43",
    "a": "Yes, they may prescribe under the hospital's DEA registration if:\nLicensed by the state to prescribe\nActing within scope of employment\nAuthorized by hospital\nAssigned internal code suffix to institutional DEA number",
    "nextReview": 0
  },
  {
    "id": "law_fc_43",
    "q": "Question 44",
    "a": "New application for chemical registrants, including entities distributing listed chemicals used in the manufacture of controlled substances",
    "nextReview": 0
  },
  {
    "id": "law_fc_44",
    "q": "Question 45",
    "a": "DEA must be notified to terminate registration. The registrant must:\nReturn DEA registration certificate\nReturn executed DEA Form 222s\nDispose of controlled substances per DEA rules\nMaintain records for at least 2 years",
    "nextReview": 0
  },
  {
    "id": "law_fc_45",
    "q": "Question 46",
    "a": "No. Hospital medication orders are not defined as prescriptions under federal law and do not need to be written on a security prescription blank because the medication is administered within the institution",
    "nextReview": 0
  },
  {
    "id": "law_fc_46",
    "q": "Question 47",
    "a": "Prescription prepared by staff but personally signed by the prescriber\nPrescription prepared & signed by the prescriber",
    "nextReview": 0
  },
  {
    "id": "law_fc_47",
    "q": "Question 48",
    "a": "Staff signing prescriber's name (even with consent)\nRubber stamp signature\nPre-printed signature on prescription blank",
    "nextReview": 0
  },
  {
    "id": "law_fc_48",
    "q": "Question 49",
    "a": "Multistate Pharmacy Jurisprudence Examination",
    "nextReview": 0
  },
  {
    "id": "law_fc_49",
    "q": "Question 50",
    "a": "NABP (National Association of Boards of Pharmacy)",
    "nextReview": 0
  },
  {
    "id": "law_fc_50",
    "q": "Question 51",
    "a": "120 total questions (100 scored, 20 unscored)",
    "nextReview": 0
  },
  {
    "id": "law_fc_51",
    "q": "Question 52",
    "a": "2.5 hours (150 minutes)",
    "nextReview": 0
  },
  {
    "id": "law_fc_52",
    "q": "Question 53",
    "a": "At least 107 questions",
    "nextReview": 0
  },
  {
    "id": "law_fc_53",
    "q": "Question 54",
    "a": "Pass/Fail only (no numerical score reported)",
    "nextReview": 0
  },
  {
    "id": "law_fc_54",
    "q": "Question 55",
    "a": "Yes, question difficulty adapts based on answers",
    "nextReview": 0
  },
  {
    "id": "law_fc_55",
    "q": "Question 56",
    "a": "No, questions must be answered in order with no review",
    "nextReview": 0
  },
  {
    "id": "law_fc_56",
    "q": "Question 57",
    "a": "5 attempts per state",
    "nextReview": 0
  },
  {
    "id": "law_fc_57",
    "q": "Question 58",
    "a": "Multiple choice, Select All That Apply, K-type questions",
    "nextReview": 0
  },
  {
    "id": "law_fc_58",
    "q": "Question 59",
    "a": "No, they are mixed together unless specifically stated",
    "nextReview": 0
  },
  {
    "id": "law_fc_59",
    "q": "Question 60",
    "a": "No, citations are not tested",
    "nextReview": 0
  },
  {
    "id": "law_fc_60",
    "q": "Question 61",
    "a": "A standardized national jurisprudence exam covering laws common to all states",
    "nextReview": 0
  },
  {
    "id": "law_fc_61",
    "q": "Question 62",
    "a": "No, pharmacists are still responsible for individual state laws",
    "nextReview": 0
  },
  {
    "id": "law_fc_62",
    "q": "Question 63",
    "a": "100 scored questions",
    "nextReview": 0
  },
  {
    "id": "law_fc_63",
    "q": "Question 64",
    "a": "Only 3 answer choices per questions",
    "nextReview": 0
  },
  {
    "id": "law_fc_64",
    "q": "Question 65",
    "a": "The U.S. Constitution",
    "nextReview": 0
  },
  {
    "id": "law_fc_65",
    "q": "Question 66",
    "a": "Supremacy Clause (Article VI)",
    "nextReview": 0
  },
  {
    "id": "law_fc_66",
    "q": "Question 67",
    "a": "Police powers under the 10th Amendment",
    "nextReview": 0
  },
  {
    "id": "law_fc_67",
    "q": "Question 68",
    "a": "10th Amendment",
    "nextReview": 0
  },
  {
    "id": "law_fc_68",
    "q": "Question 69",
    "a": "Legislatures (Congress or state legislatures)",
    "nextReview": 0
  },
  {
    "id": "law_fc_69",
    "q": "Question 70",
    "a": "Administrative agencies (e.g., Board of Pharmacy, FDA, DEA)",
    "nextReview": 0
  },
  {
    "id": "law_fc_70",
    "q": "Question 71",
    "a": "No",
    "nextReview": 0
  },
  {
    "id": "law_fc_71",
    "q": "Question 72",
    "a": "Yes",
    "nextReview": 0
  },
  {
    "id": "law_fc_72",
    "q": "Question 73",
    "a": "United States Code (USC)",
    "nextReview": 0
  },
  {
    "id": "law_fc_73",
    "q": "Question 74",
    "a": "Code of Federal Regulations (CFR)",
    "nextReview": 0
  },
  {
    "id": "law_fc_74",
    "q": "Question 75",
    "a": "Indiana Code (IC)",
    "nextReview": 0
  },
  {
    "id": "law_fc_75",
    "q": "Question 76",
    "a": "Indiana Administrative Code (IAC)",
    "nextReview": 0
  },
  {
    "id": "law_fc_76",
    "q": "Question 77",
    "a": "Notice and Comment Rulemaking",
    "nextReview": 0
  },
  {
    "id": "law_fc_77",
    "q": "Question 78",
    "a": "Federal Register",
    "nextReview": 0
  },
  {
    "id": "law_fc_78",
    "q": "Question 79",
    "a": "regulations.gov",
    "nextReview": 0
  },
  {
    "id": "law_fc_79",
    "q": "Question 80",
    "a": "Agency issues a final rule or abandons rulemaking",
    "nextReview": 0
  },
  {
    "id": "law_fc_80",
    "q": "Question 81",
    "a": "Government must follow fair procedures before depriving life, liberty, or property",
    "nextReview": 0
  },
  {
    "id": "law_fc_81",
    "q": "Question 82",
    "a": "5th Amendment",
    "nextReview": 0
  },
  {
    "id": "law_fc_82",
    "q": "Question 83",
    "a": "14th Amendment",
    "nextReview": 0
  },
  {
    "id": "law_fc_83",
    "q": "Question 84",
    "a": "Fair procedures (notice and hearing)",
    "nextReview": 0
  },
  {
    "id": "law_fc_84",
    "q": "Question 85",
    "a": "Protection of fundamental rights from government interference",
    "nextReview": 0
  },
  {
    "id": "law_fc_85",
    "q": "Question 86",
    "a": "Strict scrutiny",
    "nextReview": 0
  },
  {
    "id": "law_fc_86",
    "q": "Question 87",
    "a": "Religion, Speech, Press, Assembly, Petition",
    "nextReview": 0
  },
  {
    "id": "law_fc_87",
    "q": "Question 88",
    "a": "Declared the 13 colonies independent from Great Britain (July 4, 1776)",
    "nextReview": 0
  },
  {
    "id": "law_fc_88",
    "q": "Question 89",
    "a": "No, it states principles but is not legally binding law",
    "nextReview": 0
  },
  {
    "id": "law_fc_89",
    "q": "Question 90",
    "a": "Common Sense by Thomas Paine",
    "nextReview": 0
  },
  {
    "id": "law_fc_90",
    "q": "Question 91",
    "a": "Life, Liberty, and the Pursuit of Happiness",
    "nextReview": 0
  },
  {
    "id": "law_fc_91",
    "q": "Question 92",
    "a": "1787",
    "nextReview": 0
  },
  {
    "id": "law_fc_92",
    "q": "Question 93",
    "a": "The Bill of Rights (added in 1791)",
    "nextReview": 0
  },
  {
    "id": "law_fc_93",
    "q": "Question 94",
    "a": "27",
    "nextReview": 0
  },
  {
    "id": "law_fc_94",
    "q": "Question 95",
    "a": "Legislative Branch (Congress)",
    "nextReview": 0
  },
  {
    "id": "law_fc_95",
    "q": "Question 96",
    "a": "Executive Branch (President)",
    "nextReview": 0
  },
  {
    "id": "law_fc_96",
    "q": "Question 97",
    "a": "Judicial Branch (Courts)",
    "nextReview": 0
  },
  {
    "id": "law_fc_97",
    "q": "Question 98",
    "a": "2/3 of Congress + 3/4 of states",
    "nextReview": 0
  },
  {
    "id": "law_fc_98",
    "q": "Question 99",
    "a": "Right to bear arms",
    "nextReview": 0
  },
  {
    "id": "law_fc_99",
    "q": "Question 100",
    "a": "No quartering soldiers in homes",
    "nextReview": 0
  },
  {
    "id": "law_fc_100",
    "q": "Question 101",
    "a": "Protection against unreasonable searches and seizures",
    "nextReview": 0
  },
  {
    "id": "law_fc_101",
    "q": "Question 102",
    "a": "Double jeopardy, self-incrimination, due process, takings clause",
    "nextReview": 0
  },
  {
    "id": "law_fc_102",
    "q": "Question 103",
    "a": "Speedy trial, impartial jury, right to attorney",
    "nextReview": 0
  },
  {
    "id": "law_fc_103",
    "q": "Question 104",
    "a": "No cruel and unusual punishment; no excessive fines/bails",
    "nextReview": 0
  },
  {
    "id": "law_fc_104",
    "q": "Question 105",
    "a": "Rights not listed still exist",
    "nextReview": 0
  },
  {
    "id": "law_fc_105",
    "q": "Question 106",
    "a": "Powers not given to federal government belong to states or people",
    "nextReview": 0
  },
  {
    "id": "law_fc_106",
    "q": "Question 107",
    "a": "Abolished slavery",
    "nextReview": 0
  },
  {
    "id": "law_fc_107",
    "q": "Question 108",
    "a": "Applies due process and equal protection to states",
    "nextReview": 0
  },
  {
    "id": "law_fc_108",
    "q": "Question 109",
    "a": "Race cannot be used to deny voting",
    "nextReview": 0
  },
  {
    "id": "law_fc_109",
    "q": "Question 110",
    "a": "Federal income tax",
    "nextReview": 0
  },
  {
    "id": "law_fc_110",
    "q": "Question 111",
    "a": "Direct election of Senators",
    "nextReview": 0
  },
  {
    "id": "law_fc_111",
    "q": "Question 112",
    "a": "Prohibition (later repealed)",
    "nextReview": 0
  },
  {
    "id": "law_fc_112",
    "q": "Question 113",
    "a": "Women's right to vote",
    "nextReview": 0
  },
  {
    "id": "law_fc_113",
    "q": "Question 114",
    "a": "Repealed Prohibition",
    "nextReview": 0
  },
  {
    "id": "law_fc_114",
    "q": "Question 115",
    "a": "President limited to two terms",
    "nextReview": 0
  },
  {
    "id": "law_fc_115",
    "q": "Question 116",
    "a": "Presidential succession and disability procedures",
    "nextReview": 0
  },
  {
    "id": "law_fc_116",
    "q": "Question 117",
    "a": "Voting age of 18",
    "nextReview": 0
  },
  {
    "id": "law_fc_117",
    "q": "Question 118",
    "a": "The President",
    "nextReview": 0
  },
  {
    "id": "law_fc_118",
    "q": "Question 119",
    "a": "4 years",
    "nextReview": 0
  },
  {
    "id": "law_fc_119",
    "q": "Question 120",
    "a": "Sign/veto bills, appoint judges, make treaties, pardon criminals",
    "nextReview": 0
  },
  {
    "id": "law_fc_120",
    "q": "Question 121",
    "a": "Senate",
    "nextReview": 0
  },
  {
    "id": "law_fc_121",
    "q": "Question 122",
    "a": "Vice President",
    "nextReview": 0
  },
  {
    "id": "law_fc_122",
    "q": "Question 123",
    "a": "Speaker of the House",
    "nextReview": 0
  },
  {
    "id": "law_fc_123",
    "q": "Question 124",
    "a": "President Pro Tempore of the Senate",
    "nextReview": 0
  },
  {
    "id": "law_fc_124",
    "q": "Question 125",
    "a": "Secretary of State",
    "nextReview": 0
  },
  {
    "id": "law_fc_125",
    "q": "Question 126",
    "a": "Two chambers (House and Senate)",
    "nextReview": 0
  },
  {
    "id": "law_fc_126",
    "q": "Question 127",
    "a": "100 (2 per state)",
    "nextReview": 0
  },
  {
    "id": "law_fc_127",
    "q": "Question 128",
    "a": "6 years",
    "nextReview": 0
  },
  {
    "id": "law_fc_128",
    "q": "Question 129",
    "a": "435",
    "nextReview": 0
  },
  {
    "id": "law_fc_129",
    "q": "Question 130",
    "a": "2 years",
    "nextReview": 0
  },
  {
    "id": "law_fc_130",
    "q": "Question 131",
    "a": "218 (simple majority)",
    "nextReview": 0
  },
  {
    "id": "law_fc_131",
    "q": "Question 132",
    "a": "51 (simple majority)",
    "nextReview": 0
  },
  {
    "id": "law_fc_132",
    "q": "Question 133",
    "a": "A Senator or Representative (sponsor)",
    "nextReview": 0
  },
  {
    "id": "law_fc_133",
    "q": "Question 134",
    "a": "Committee/Subcommittee",
    "nextReview": 0
  },
  {
    "id": "law_fc_134",
    "q": "Question 135",
    "a": "Conference Committee",
    "nextReview": 0
  },
  {
    "id": "law_fc_135",
    "q": "Question 136",
    "a": "Sign, Veto, Pocket Veto, Take no action (becomes law in 10 days)",
    "nextReview": 0
  },
  {
    "id": "law_fc_136",
    "q": "Question 137",
    "a": "2/3 vote in both chambers",
    "nextReview": 0
  },
  {
    "id": "law_fc_137",
    "q": "Question 138",
    "a": "Article III",
    "nextReview": 0
  },
  {
    "id": "law_fc_138",
    "q": "Question 139",
    "a": "District Courts, Courts of Appeals, Supreme Court",
    "nextReview": 0
  },
  {
    "id": "law_fc_139",
    "q": "Question 140",
    "a": "Trial courts (federal question and diversity jurisdiction)",
    "nextReview": 0
  },
  {
    "id": "law_fc_140",
    "q": "Question 141",
    "a": "Cases involving the U.S. Constitution or federal law",
    "nextReview": 0
  },
  {
    "id": "law_fc_141",
    "q": "Question 142",
    "a": "Cases between citizens of different states where amount exceeds $75,000",
    "nextReview": 0
  },
  {
    "id": "law_fc_142",
    "q": "Question 143",
    "a": "9",
    "nextReview": 0
  },
  {
    "id": "law_fc_143",
    "q": "Question 144",
    "a": "Lifetime appointments",
    "nextReview": 0
  },
  {
    "id": "law_fc_144",
    "q": "Question 145",
    "a": "A request asking the Supreme Court to hear a case",
    "nextReview": 0
  },
  {
    "id": "law_fc_145",
    "q": "Question 146",
    "a": "~10,000 petitions; hears ~75-80 cases",
    "nextReview": 0
  },
  {
    "id": "law_fc_146",
    "q": "Question 147",
    "a": "Judge-made law created through court decisions",
    "nextReview": 0
  },
  {
    "id": "law_fc_147",
    "q": "Question 148",
    "a": "A prior court decision that is binding on lower courts",
    "nextReview": 0
  },
  {
    "id": "law_fc_148",
    "q": "Question 149",
    "a": "\"To stand by things decided\" (follow precedent)",
    "nextReview": 0
  },
  {
    "id": "law_fc_149",
    "q": "Question 150",
    "a": "The daily journal/newspaper of the federal government",
    "nextReview": 0
  },
  {
    "id": "law_fc_150",
    "q": "Question 151",
    "a": "1. Within agency authority\n2. Based on statutory authority\n3. Reasonably related to public health, safety, welfare",
    "nextReview": 0
  },
  {
    "id": "law_fc_151",
    "q": "Question 152",
    "a": "Issue guidance, policy statements, interpretive rules",
    "nextReview": 0
  },
  {
    "id": "law_fc_152",
    "q": "Question 153",
    "a": "Inspections, recalls, fines, injunctions, seizure, prosecution",
    "nextReview": 0
  },
  {
    "id": "law_fc_153",
    "q": "Question 154",
    "a": "Courts (Judicial Review)",
    "nextReview": 0
  },
  {
    "id": "law_fc_154",
    "q": "Question 155",
    "a": "Standing, exhaustion of remedies, ripeness",
    "nextReview": 0
  },
  {
    "id": "law_fc_155",
    "q": "Question 156",
    "a": "Department of Health and Human Services",
    "nextReview": 0
  },
  {
    "id": "law_fc_156",
    "q": "Question 157",
    "a": "FDA, CMS, CDC, NIH, HRSA, SAMHSA",
    "nextReview": 0
  },
  {
    "id": "law_fc_157",
    "q": "Question 158",
    "a": "Safety and efficacy of drugs, food, medical devices",
    "nextReview": 0
  },
  {
    "id": "law_fc_158",
    "q": "Question 159",
    "a": "Controlled substances",
    "nextReview": 0
  },
  {
    "id": "law_fc_159",
    "q": "Question 160",
    "a": "Medicare and Medicaid",
    "nextReview": 0
  },
  {
    "id": "law_fc_160",
    "q": "Question 161",
    "a": "Trade practices and consumer protection",
    "nextReview": 0
  },
  {
    "id": "law_fc_161",
    "q": "Question 162",
    "a": "Interstate Commerce Clause (Article I, Section 8)",
    "nextReview": 0
  },
  {
    "id": "law_fc_162",
    "q": "Question 163",
    "a": "Federal govenment",
    "nextReview": 0
  },
  {
    "id": "law_fc_163",
    "q": "Question 164",
    "a": "States",
    "nextReview": 0
  },
  {
    "id": "law_fc_164",
    "q": "Question 165",
    "a": "Statute (broad framework)",
    "nextReview": 0
  },
  {
    "id": "law_fc_165",
    "q": "Question 166",
    "a": "Regulation (specific implementation details)",
    "nextReview": 0
  },
  {
    "id": "law_fc_166",
    "q": "Question 167",
    "a": "A statute",
    "nextReview": 0
  },
  {
    "id": "law_fc_167",
    "q": "Question 168",
    "a": "The codified database of all general and permanent federal statutes",
    "nextReview": 0
  },
  {
    "id": "law_fc_168",
    "q": "Question 169",
    "a": "51 titles",
    "nextReview": 0
  },
  {
    "id": "law_fc_169",
    "q": "Question 170",
    "a": "Title 21",
    "nextReview": 0
  },
  {
    "id": "law_fc_170",
    "q": "Question 171",
    "a": "The Title number",
    "nextReview": 0
  },
  {
    "id": "law_fc_171",
    "q": "Question 172",
    "a": "Section",
    "nextReview": 0
  },
  {
    "id": "law_fc_172",
    "q": "Question 173",
    "a": "A specific paragraph within the section",
    "nextReview": 0
  },
  {
    "id": "law_fc_173",
    "q": "Question 174",
    "a": "The codified collection of federal agency regulations",
    "nextReview": 0
  },
  {
    "id": "law_fc_174",
    "q": "Question 175",
    "a": "50 titles",
    "nextReview": 0
  },
  {
    "id": "law_fc_175",
    "q": "Question 176",
    "a": "Food and Drugs",
    "nextReview": 0
  },
  {
    "id": "law_fc_176",
    "q": "Question 177",
    "a": "The Part number",
    "nextReview": 0
  },
  {
    "id": "law_fc_177",
    "q": "Question 178",
    "a": "The Section number",
    "nextReview": 0
  },
  {
    "id": "law_fc_178",
    "q": "Question 179",
    "a": "Federal Register",
    "nextReview": 0
  },
  {
    "id": "law_fc_179",
    "q": "Question 180",
    "a": "Indiana Code (state statutes)",
    "nextReview": 0
  },
  {
    "id": "law_fc_180",
    "q": "Question 181",
    "a": "Indiana Administrative Code (state regulations)",
    "nextReview": 0
  },
  {
    "id": "law_fc_181",
    "q": "Question 182",
    "a": "Title",
    "nextReview": 0
  },
  {
    "id": "law_fc_182",
    "q": "Question 183",
    "a": "Title number for Indiana Administrative Code (Board of Pharmacy)",
    "nextReview": 0
  },
  {
    "id": "law_fc_183",
    "q": "Question 184",
    "a": "Indiana Board of Pharmacy",
    "nextReview": 0
  },
  {
    "id": "law_fc_184",
    "q": "Question 185",
    "a": "Indiana Register",
    "nextReview": 0
  },
  {
    "id": "law_fc_185",
    "q": "Question 186",
    "a": "Statutory authority granted by the legislature",
    "nextReview": 0
  },
  {
    "id": "law_fc_186",
    "q": "Question 187",
    "a": "No",
    "nextReview": 0
  },
  {
    "id": "law_fc_187",
    "q": "Question 188",
    "a": "It must be within agency authority, based on statute, and reasonably related to public health, safety, and welfare",
    "nextReview": 0
  },
  {
    "id": "law_fc_188",
    "q": "Question 189",
    "a": "Federal government (under Interstate Commerce Clause)",
    "nextReview": 0
  },
  {
    "id": "law_fc_189",
    "q": "Question 190",
    "a": "States (under police powers/10th Amendment)",
    "nextReview": 0
  },
  {
    "id": "law_fc_190",
    "q": "Question 191",
    "a": "DEA",
    "nextReview": 0
  },
  {
    "id": "law_fc_191",
    "q": "Question 192",
    "a": "Indiana Register (IR)",
    "nextReview": 0
  },
  {
    "id": "law_fc_192",
    "q": "Question 193",
    "a": "Indiana Register",
    "nextReview": 0
  },
  {
    "id": "law_fc_193",
    "q": "Question 194",
    "a": "Members of the public and interested parties",
    "nextReview": 0
  },
  {
    "id": "law_fc_194",
    "q": "Question 195",
    "a": "Indiana Professional Licensing Agency (PLA) website",
    "nextReview": 0
  },
  {
    "id": "law_fc_195",
    "q": "Question 196",
    "a": "A preliminary notice asking for public input before proposing a formal rule",
    "nextReview": 0
  },
  {
    "id": "law_fc_196",
    "q": "Question 197",
    "a": "The official published proposed rule during notice and comment",
    "nextReview": 0
  },
  {
    "id": "law_fc_197",
    "q": "Question 198",
    "a": "A Final Rule",
    "nextReview": 0
  },
  {
    "id": "law_fc_198",
    "q": "Question 199",
    "a": "Code of Federal Regulations (CFR)",
    "nextReview": 0
  },
  {
    "id": "law_fc_199",
    "q": "Question 200",
    "a": "Yes, through a resolution of disapproval (rare)",
    "nextReview": 0
  },
  {
    "id": "law_fc_200",
    "q": "Question 201",
    "a": "Yes, if unconstitutional, exceeds authority, or arbitrary/capricious",
    "nextReview": 0
  },
  {
    "id": "law_fc_201",
    "q": "Question 202",
    "a": "An official who presides over agency hearings",
    "nextReview": 0
  },
  {
    "id": "law_fc_202",
    "q": "Question 203",
    "a": "Administrative Order",
    "nextReview": 0
  },
  {
    "id": "law_fc_203",
    "q": "Question 204",
    "a": "Court review of an agency's actions",
    "nextReview": 0
  },
  {
    "id": "law_fc_204",
    "q": "Question 205",
    "a": "Creates or establishes a government program",
    "nextReview": 0
  },
  {
    "id": "law_fc_205",
    "q": "Question 206",
    "a": "Provides funding for the program",
    "nextReview": 0
  },
  {
    "id": "law_fc_206",
    "q": "Question 207",
    "a": "No, it must be funded",
    "nextReview": 0
  },
  {
    "id": "law_fc_207",
    "q": "Question 208",
    "a": "Senate: HELP and Finance\nHouse: Energy and Commerce and Ways and Means",
    "nextReview": 0
  },
  {
    "id": "law_fc_208",
    "q": "Question 209",
    "a": "Health, Education, Labor and Pensions",
    "nextReview": 0
  },
  {
    "id": "law_fc_209",
    "q": "Question 210",
    "a": "Whether agency exceeded authority?\nWhether proper procedures were followed?\nWhether decision was arbitrary or capricious?",
    "nextReview": 0
  },
  {
    "id": "law_fc_210",
    "q": "Question 211",
    "a": "Procedural due process and substantive due process",
    "nextReview": 0
  },
  {
    "id": "law_fc_211",
    "q": "Question 212",
    "a": "It must be issued for a legitimate medical purpose by a practitioner acting in the usual course of professional practice",
    "nextReview": 0
  },
  {
    "id": "law_fc_212",
    "q": "Question 213",
    "a": "The pharmacist",
    "nextReview": 0
  },
  {
    "id": "law_fc_213",
    "q": "Question 214",
    "a": "DEA Form 222 (or its electronic equivalent via CSOS)",
    "nextReview": 0
  },
  {
    "id": "law_fc_214",
    "q": "Question 215",
    "a": "Initially upon registration and at least every 2 years thereafter",
    "nextReview": 0
  },
  {
    "id": "law_fc_215",
    "q": "Question 216",
    "a": "They must be maintained separately from all other records",
    "nextReview": 0
  },
  {
    "id": "law_fc_216",
    "q": "Question 217",
    "a": "Limited quantity sufficient to treat during the emergency period (oral authorization allowed; written prescription required within 7 days)",
    "nextReview": 0
  },
  {
    "id": "law_fc_217",
    "q": "Question 218",
    "a": "To track controlled substance dispensing and detect misuse or diversion",
    "nextReview": 0
  },
  {
    "id": "law_fc_218",
    "q": "Question 219",
    "a": "Authorized prescribers, pharmacists, regulatory boards, and sometimes law enforcement (depending on state law)",
    "nextReview": 0
  },
  {
    "id": "law_fc_219",
    "q": "Question 220",
    "a": "Up to 5 refills within 6 months of the issue date",
    "nextReview": 0
  },
  {
    "id": "law_fc_220",
    "q": "Question 221",
    "a": "No",
    "nextReview": 0
  },
  {
    "id": "law_fc_221",
    "q": "Question 222",
    "a": "Once (unless pharmacies share a real-time electronic database)",
    "nextReview": 0
  },
  {
    "id": "law_fc_222",
    "q": "Question 223",
    "a": "Only in limited circumstances (e.g., pharmacy closure) and under strict federal guidelines",
    "nextReview": 0
  },
  {
    "id": "law_fc_223",
    "q": "Question 224",
    "a": "<795> governs nonsterile compounding; <797> governs sterile compounding",
    "nextReview": 0
  },
  {
    "id": "law_fc_224",
    "q": "Question 225",
    "a": "Handling of hazardous drugs to minimize exposure risk",
    "nextReview": 0
  },
  {
    "id": "law_fc_225",
    "q": "Question 226",
    "a": "Proper training, environmental controls, and appropriate engineering controls (e.g., cleanroom standards)",
    "nextReview": 0
  },
  {
    "id": "law_fc_226",
    "q": "Question 227",
    "a": "Professional negligence that causes harm to a patient",
    "nextReview": 0
  },
  {
    "id": "law_fc_227",
    "q": "Question 228",
    "a": "Duty, breach, causation, damages",
    "nextReview": 0
  },
  {
    "id": "law_fc_228",
    "q": "Question 229",
    "a": "When an employer is legally responsible for the actions of an employee",
    "nextReview": 0
  },
  {
    "id": "law_fc_229",
    "q": "Question 230",
    "a": "Liability without needing to prove negligence (defective product cases)",
    "nextReview": 0
  },
  {
    "id": "law_fc_230",
    "q": "Question 231",
    "a": "Protected Health Information (PHI)",
    "nextReview": 0
  },
  {
    "id": "law_fc_231",
    "q": "Question 232",
    "a": "Privacy Rule and Security Rule",
    "nextReview": 0
  },
  {
    "id": "law_fc_232",
    "q": "Question 233",
    "a": "For treatment, payment, healthcare operations (TPO)",
    "nextReview": 0
  },
  {
    "id": "law_fc_233",
    "q": "Question 234",
    "a": "Review of records, inventory, security, and compliance procedures",
    "nextReview": 0
  },
  {
    "id": "law_fc_234",
    "q": "Question 235",
    "a": "Presiding over agency hearings",
    "nextReview": 0
  },
  {
    "id": "law_fc_235",
    "q": "Question 236",
    "a": "The final decision issued by an agency after a hearing",
    "nextReview": 0
  },
  {
    "id": "law_fc_236",
    "q": "Question 237",
    "a": "The activities professionals are legally authorized to perform",
    "nextReview": 0
  },
  {
    "id": "law_fc_237",
    "q": "Question 238",
    "a": "No",
    "nextReview": 0
  },
  {
    "id": "law_fc_238",
    "q": "Question 239",
    "a": "State law and Board of Pharmacy regulations",
    "nextReview": 0
  },
  {
    "id": "law_fc_239",
    "q": "Question 240",
    "a": "Proper labeling, security, and patient confidentiality",
    "nextReview": 0
  },
  {
    "id": "law_fc_240",
    "q": "Question 241",
    "a": "Prompt notification to DEA and completion of DEA Form 106",
    "nextReview": 0
  },
  {
    "id": "law_fc_241",
    "q": "Question 242",
    "a": "A drug that fails purity, strength, or quality standards",
    "nextReview": 0
  },
  {
    "id": "law_fc_242",
    "q": "Question 243",
    "a": "False or misleading labeling or inadequate directions for use",
    "nextReview": 0
  },
  {
    "id": "law_fc_243",
    "q": "Question 244",
    "a": "When the President takes no action and Congress adjourns within 10 days, causing the bill to die",
    "nextReview": 0
  },
  {
    "id": "law_fc_244",
    "q": "Question 245",
    "a": "A committee formed to reconcile differences between House and Senate versions of a bill",
    "nextReview": 0
  },
  {
    "id": "law_fc_245",
    "q": "Question 246",
    "a": "Dispensing a different drug than prescribed, usually within the same class (requires authorization)",
    "nextReview": 0
  },
  {
    "id": "law_fc_246",
    "q": "Question 247",
    "a": "Dispensing an FDA-approved equivalent product in place of the brand-name drug",
    "nextReview": 0
  },
  {
    "id": "law_fc_247",
    "q": "Question 248",
    "a": "Manufacturer/supplier intent controls - not how the consumer uses the product",
    "nextReview": 0
  },
  {
    "id": "law_fc_248",
    "q": "Question 249",
    "a": "Preventing misbranding and adulteration of food and drugs",
    "nextReview": 0
  },
  {
    "id": "law_fc_249",
    "q": "Question 250",
    "a": "No",
    "nextReview": 0
  },
  {
    "id": "law_fc_250",
    "q": "Question 251",
    "a": "The FDA",
    "nextReview": 0
  },
  {
    "id": "law_fc_251",
    "q": "Question 252",
    "a": "The sulfanilamide elixir tragedy (diethylene glycol poisoning)",
    "nextReview": 0
  },
  {
    "id": "law_fc_252",
    "q": "Question 253",
    "a": "Drugs must be proven safe before marketing",
    "nextReview": 0
  },
  {
    "id": "law_fc_253",
    "q": "Question 254",
    "a": "Authority to inspect manufacturing facilities",
    "nextReview": 0
  },
  {
    "id": "law_fc_254",
    "q": "Question 255",
    "a": "Medical devices and cosmetics",
    "nextReview": 0
  },
  {
    "id": "law_fc_255",
    "q": "Question 256",
    "a": "The distinction between prescription (Rx only) and OTC drugs",
    "nextReview": 0
  },
  {
    "id": "law_fc_256",
    "q": "Question 257",
    "a": "\"Caution: Federal law prohibits dispensing without a prescription\"",
    "nextReview": 0
  },
  {
    "id": "law_fc_257",
    "q": "Question 258",
    "a": "Yes - authorized refills",
    "nextReview": 0
  },
  {
    "id": "law_fc_258",
    "q": "Question 259",
    "a": "Thalidomide causing birth defects (phocomelia)",
    "nextReview": 0
  },
  {
    "id": "law_fc_259",
    "q": "Question 260",
    "a": "Drugs must be proven effective (not just safe) before approval",
    "nextReview": 0
  },
  {
    "id": "law_fc_260",
    "q": "Question 261",
    "a": "Well-controlled clinical trials",
    "nextReview": 0
  },
  {
    "id": "law_fc_261",
    "q": "Question 262",
    "a": "Required informed consent from clinical trial participants",
    "nextReview": 0
  },
  {
    "id": "law_fc_262",
    "q": "Question 263",
    "a": "Good Manufacturing Practices (GMPs)",
    "nextReview": 0
  },
  {
    "id": "law_fc_263",
    "q": "Question 264",
    "a": "Yes - efficacy review of previously approved drugs began",
    "nextReview": 0
  },
  {
    "id": "law_fc_264",
    "q": "Question 265",
    "a": "The 5-schedule classification system",
    "nextReview": 0
  },
  {
    "id": "law_fc_265",
    "q": "Question 266",
    "a": "Abuse potential, medical use, and safety/dependence risk",
    "nextReview": 0
  },
  {
    "id": "law_fc_266",
    "q": "Question 267",
    "a": "DEA",
    "nextReview": 0
  },
  {
    "id": "law_fc_267",
    "q": "Question 268",
    "a": "Kefauver-Harris Amendment",
    "nextReview": 0
  },
  {
    "id": "law_fc_268",
    "q": "Question 269",
    "a": "Hatch-Waxman",
    "nextReview": 0
  },
  {
    "id": "law_fc_269",
    "q": "Question 270",
    "a": "The Abbreviated New Drug Application (ANDA) pathway",
    "nextReview": 0
  },
  {
    "id": "law_fc_270",
    "q": "Question 271",
    "a": "Bioequivalence - not full clinical trials",
    "nextReview": 0
  },
  {
    "id": "law_fc_271",
    "q": "Question 272",
    "a": "Generic access and brand patent protections",
    "nextReview": 0
  },
  {
    "id": "law_fc_272",
    "q": "Question 273",
    "a": "Prevent accidental pediatric poisionings",
    "nextReview": 0
  },
  {
    "id": "law_fc_273",
    "q": "Question 274",
    "a": "Yes, via written request (blanket waivers allowed)",
    "nextReview": 0
  },
  {
    "id": "law_fc_274",
    "q": "Question 275",
    "a": "Prospective drug utilization review (DUR)",
    "nextReview": 0
  },
  {
    "id": "law_fc_275",
    "q": "Question 276",
    "a": "Offer to counsel Medicaid patients (later expanded by states)",
    "nextReview": 0
  },
  {
    "id": "law_fc_276",
    "q": "Question 277",
    "a": "Yes, but most states extended it to all patients",
    "nextReview": 0
  },
  {
    "id": "law_fc_277",
    "q": "Question 278",
    "a": "Track-and-trace system for prescription drugs in the supply chain",
    "nextReview": 0
  },
  {
    "id": "law_fc_278",
    "q": "Question 279",
    "a": "Transaction information, history, and statement",
    "nextReview": 0
  },
  {
    "id": "law_fc_279",
    "q": "Question 280",
    "a": "Dissemination of certain off-label information to providers",
    "nextReview": 0
  },
  {
    "id": "law_fc_280",
    "q": "Question 281",
    "a": "Risk Evaluation and Mitigation Strategies (REMS)",
    "nextReview": 0
  },
  {
    "id": "law_fc_281",
    "q": "Question 282",
    "a": "Yes, under FDAAA",
    "nextReview": 0
  },
  {
    "id": "law_fc_282",
    "q": "Question 283",
    "a": "By examining labeling, advertising, promotional materials, and marketing format",
    "nextReview": 0
  },
  {
    "id": "law_fc_283",
    "q": "Question 284",
    "a": "Yes, if it is intended to affect the structure or function of the body (unless properly regulated as a dietary supplement)",
    "nextReview": 0
  },
  {
    "id": "law_fc_284",
    "q": "Question 285",
    "a": "Yes, if it is marketed for both cosmetic and therapeutic purposes",
    "nextReview": 0
  },
  {
    "id": "law_fc_285",
    "q": "Question 286",
    "a": "No - it must be classified as one or the other (unless it is a combination product)",
    "nextReview": 0
  },
  {
    "id": "law_fc_286",
    "q": "Question 287",
    "a": "No. Medicare eligibility is not based on income.",
    "nextReview": 0
  },
  {
    "id": "law_fc_287",
    "q": "Question 288",
    "a": "Part A: Inpatient (hospital insurance)\nPart B: Outpatient/medical insurance\nPart C: Medicare Advantage (managed care plans)\nPart D: Prescription drug benefit",
    "nextReview": 0
  },
  {
    "id": "law_fc_288",
    "q": "Question 289",
    "a": "$35 per month supply (no deductible required)",
    "nextReview": 0
  },
  {
    "id": "law_fc_289",
    "q": "Question 290",
    "a": "$2,100 annual cap",
    "nextReview": 0
  },
  {
    "id": "law_fc_290",
    "q": "Question 291",
    "a": "Antidepressants, antipsychotics, anticonvulsants, antiretrovirals, antineoplastics, immunosuppressants",
    "nextReview": 0
  },
  {
    "id": "law_fc_291",
    "q": "Question 292",
    "a": "Plans must accept participation from any pharmacy that agrees to plan terms and conditions",
    "nextReview": 0
  },
  {
    "id": "law_fc_292",
    "q": "Question 293",
    "a": "10 years",
    "nextReview": 0
  },
  {
    "id": "law_fc_293",
    "q": "Question 294",
    "a": "1% premium increase per month of delay",
    "nextReview": 0
  },
  {
    "id": "law_fc_294",
    "q": "Question 295",
    "a": "A low-income subsidy (≤150% FPL) that reduces Part D costs (e.g., low copays for generics and brands)",
    "nextReview": 0
  },
  {
    "id": "law_fc_295",
    "q": "Question 296",
    "a": "Caremark (CVS Health), Express Scripts (Cigna), Optum Rx (UnitedHealth Group)",
    "nextReview": 0
  },
  {
    "id": "law_fc_296",
    "q": "Question 297",
    "a": "HMO: Must stay in network, usually need PCP + referrals\nPPO: More flexibility, high cost out-of-network, no referral needed",
    "nextReview": 0
  },
  {
    "id": "law_fc_297",
    "q": "Question 298",
    "a": "Offering or receiving remuneration to generate federal healthcare business",
    "nextReview": 0
  },
  {
    "id": "law_fc_298",
    "q": "Question 299",
    "a": "Yes",
    "nextReview": 0
  },
  {
    "id": "law_fc_299",
    "q": "Question 300",
    "a": "No. They're considered illegal kickbacks",
    "nextReview": 0
  },
  {
    "id": "law_fc_300",
    "q": "Question 301",
    "a": "Office of Inspector General (OIG)",
    "nextReview": 0
  },
  {
    "id": "law_fc_301",
    "q": "Question 302",
    "a": "Exceptions protecting certain arrangements from Anti-Kickback violations",
    "nextReview": 0
  },
  {
    "id": "law_fc_302",
    "q": "Question 303",
    "a": "Physician self-referrals for designated health services to entities where they have a financial relationship",
    "nextReview": 0
  },
  {
    "id": "law_fc_303",
    "q": "Question 304",
    "a": "No",
    "nextReview": 0
  },
  {
    "id": "law_fc_304",
    "q": "Question 305",
    "a": "Lab, radiology, DME, outpatient drugs, PT/OT, home health, hospital services, etc",
    "nextReview": 0
  },
  {
    "id": "law_fc_305",
    "q": "Question 306",
    "a": "Submitting false or fraudulent claims to the federal government",
    "nextReview": 0
  },
  {
    "id": "law_fc_306",
    "q": "Question 307",
    "a": "Treble (3x) damages",
    "nextReview": 0
  },
  {
    "id": "law_fc_307",
    "q": "Question 308",
    "a": "Whistleblower suits where private individuals can recover 15-25% of recovered funds",
    "nextReview": 0
  },
  {
    "id": "law_fc_308",
    "q": "Question 309",
    "a": "It mandated prospective DUR, counseling, and documentation as a condition of Medicaid participation",
    "nextReview": 0
  },
  {
    "id": "law_fc_309",
    "q": "Question 310",
    "a": "Therapeutic duplication, drug-disease contraindications, drug-drug interactions, incorrect dosage/duration, drug-allergy interactions, misuse/abuse, over/under utilization",
    "nextReview": 0
  },
  {
    "id": "law_fc_310",
    "q": "Question 311",
    "a": "1. Drug Utilization Review (DUR)\n2. Rebates (Best Price requirement)\n3. Demonstration projects",
    "nextReview": 0
  },
  {
    "id": "law_fc_311",
    "q": "Question 312",
    "a": "It requires an offer to counsel (not forced counseling)",
    "nextReview": 0
  },
  {
    "id": "law_fc_312",
    "q": "Question 313",
    "a": "Yes. Must be informed and voluntary; document refusal",
    "nextReview": 0
  },
  {
    "id": "law_fc_313",
    "q": "Question 314",
    "a": "Patient demographics, disease states, allergies, medication list, pharmacist interventions, refusals",
    "nextReview": 0
  },
  {
    "id": "law_fc_314",
    "q": "Question 315",
    "a": "1996",
    "nextReview": 0
  },
  {
    "id": "law_fc_315",
    "q": "Question 316",
    "a": "Individually identifiable health information related to condition, treatment, or payment",
    "nextReview": 0
  },
  {
    "id": "law_fc_316",
    "q": "Question 317",
    "a": "Only disclose the minimum PHI necessary to accomplish the purpose",
    "nextReview": 0
  },
  {
    "id": "law_fc_317",
    "q": "Question 318",
    "a": "Health plans, clearinghouses, and healthcare providers transmitting electronic health information",
    "nextReview": 0
  },
  {
    "id": "law_fc_318",
    "q": "Question 319",
    "a": "Office for Civil Rights (OCR)",
    "nextReview": 0
  },
  {
    "id": "law_fc_319",
    "q": "Question 320",
    "a": "6 years",
    "nextReview": 0
  },
  {
    "id": "law_fc_320",
    "q": "Question 321",
    "a": "Notify affects individuals within 60 days and notify media + HHS",
    "nextReview": 0
  },
  {
    "id": "law_fc_321",
    "q": "Question 322",
    "a": "Yes",
    "nextReview": 0
  },
  {
    "id": "law_fc_322",
    "q": "Question 323",
    "a": "Allows refill/adherence communications about currently prescribed drugs if remuneration is reasonably related to cost",
    "nextReview": 0
  },
  {
    "id": "law_fc_323",
    "q": "Question 324",
    "a": "State and federal government (minimum 50% federal match)",
    "nextReview": 0
  },
  {
    "id": "law_fc_324",
    "q": "Question 325",
    "a": "Yes",
    "nextReview": 0
  },
  {
    "id": "law_fc_325",
    "q": "Question 326",
    "a": "Individuals eligible for both Medicare and Medicaid",
    "nextReview": 0
  },
  {
    "id": "law_fc_326",
    "q": "Question 327",
    "a": "No",
    "nextReview": 0
  },
  {
    "id": "law_fc_327",
    "q": "Question 328",
    "a": "Yes",
    "nextReview": 0
  },
  {
    "id": "law_fc_328",
    "q": "Question 329",
    "a": "Yes",
    "nextReview": 0
  },
  {
    "id": "law_fc_329",
    "q": "Question 330",
    "a": "Individuals ≥65 years of age, individuals with permanent disabilities, individuals with ESRD, individuals exposed to environmental hazards",
    "nextReview": 0
  },
  {
    "id": "law_fc_330",
    "q": "Question 331",
    "a": "Private insurance companies often follow Medicare coverage policies",
    "nextReview": 0
  },
  {
    "id": "law_fc_331",
    "q": "Question 332",
    "a": "1. Deductible phase\n2. Initial coverage phase\n3. Catastrophic coverage phase",
    "nextReview": 0
  },
  {
    "id": "law_fc_332",
    "q": "Question 333",
    "a": "25% coinsurance",
    "nextReview": 0
  },
  {
    "id": "law_fc_333",
    "q": "Question 334",
    "a": "Part D plan, manufacturer, Medicare",
    "nextReview": 0
  },
  {
    "id": "law_fc_334",
    "q": "Question 335",
    "a": "Part D plan, Medicare",
    "nextReview": 0
  },
  {
    "id": "law_fc_335",
    "q": "Question 336",
    "a": "Medication Therapy Management - pharmacist-provided services to optimize therapeutic outcomes",
    "nextReview": 0
  },
  {
    "id": "law_fc_336",
    "q": "Question 337",
    "a": "1. Medication therapy review\n2. Personal medication record\n3. Medication-related action plan\n4. Intervention/referral\n5. Documentation and follow-up",
    "nextReview": 0
  },
  {
    "id": "law_fc_337",
    "q": "Question 338",
    "a": "All commercially available vaccines not covered under Part B",
    "nextReview": 0
  },
  {
    "id": "law_fc_338",
    "q": "Question 339",
    "a": "Weight loss drugs, fertility drugs, cosmetic/hair growth drugs, OTC drugs, DESI drugs, non-FDA approved drugs",
    "nextReview": 0
  },
  {
    "id": "law_fc_339",
    "q": "Question 340",
    "a": "Hoosier Healthwise, Hoosier Care Connect, Healthy Indiana Plan (HIP), Traditional Medicaid, Indiana PathWays for Aging, HoosierRx",
    "nextReview": 0
  },
  {
    "id": "law_fc_340",
    "q": "Question 341",
    "a": "Children ≤19 and pregnant women",
    "nextReview": 0
  },
  {
    "id": "law_fc_341",
    "q": "Question 342",
    "a": "Ages 19-64 with income ≤ ~138% FPL",
    "nextReview": 0
  },
  {
    "id": "law_fc_342",
    "q": "Question 343",
    "a": "Indiana residents ≥65 with income <150% FPL and enrolled in Part D",
    "nextReview": 0
  },
  {
    "id": "law_fc_343",
    "q": "Question 344",
    "a": "Drug interactions, duplication, incorrect dose/duration, drug-disease, allergies, misuse/abuse",
    "nextReview": 0
  },
  {
    "id": "law_fc_344",
    "q": "Question 345",
    "a": "Patient demographics, medication list, allergies, pharmacist interventions",
    "nextReview": 0
  },
  {
    "id": "law_fc_345",
    "q": "Question 346",
    "a": "Electronic healthcare transactions, privacy standards, security standards, NPI numbers",
    "nextReview": 0
  },
  {
    "id": "law_fc_346",
    "q": "Question 347",
    "a": "Health plans, clearinghouses, healthcare providers transmitting electronic data",
    "nextReview": 0
  },
  {
    "id": "law_fc_347",
    "q": "Question 348",
    "a": "No, if reasonable safeguards are in place",
    "nextReview": 0
  },
  {
    "id": "law_fc_348",
    "q": "Question 349",
    "a": "Administrative, technical, and physical protections to limit PHI exposure",
    "nextReview": 0
  },
  {
    "id": "law_fc_349",
    "q": "Question 350",
    "a": "Name, address, DOB, SSN, medical record number, email, photos",
    "nextReview": 0
  },
  {
    "id": "law_fc_350",
    "q": "Question 351",
    "a": "Provide notice, attempt to obtain written acknowledgement, document good faith effort, keep record for 6 years",
    "nextReview": 0
  },
  {
    "id": "law_fc_351",
    "q": "Question 352",
    "a": "Within 60 days if breach poses significant risk",
    "nextReview": 0
  }
]
}];

const lawExams$1 = [{
  id: "builtin_exam_law",
  title: "Pharmacy Law Exam",
  icon: "CheckSquare",
  color: "#10b981",
  isBuiltIn: true,
  isBuiltin: true,
  questions: [
  {
    "id": "law_ex_0",
    "q": "What is a key point regarding this item?",
    "options": [
      "Federal law regulating controlled substances and creating a closed system for manufacture, distribution, and dispensing",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_1",
    "q": "What is a key point regarding this item?",
    "options": [
      "DEA (Drug Enforcement Administration) under the Department of Justice",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_2",
    "q": "What is a key point regarding this item?",
    "options": [
      "High abuse potential\nNo accepted medical use\nLack of safety even under supervision",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_3",
    "q": "What is a key point regarding this item?",
    "options": [
      "Heroin, LSD, marijuana, MDMA, psilocybin, peyote",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_4",
    "q": "What is a key point regarding this item?",
    "options": [
      "High abuse potential\nAccepted medical use (with restrictions)\nSevere dependence risk",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_5",
    "q": "What is a key point regarding this item?",
    "options": [
      "Morphine, oxycodone, fentanyl, hydrocodone combos, amphetamine, methylphenidate, methadone",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_6",
    "q": "What is a key point regarding this item?",
    "options": [
      "Less abuse than I & II, accepted medical use, moderate/low physical dependence or high psychological dependence",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_7",
    "q": "What is a key point regarding this item?",
    "options": [
      "Tylenol #3, buprenorphine, ketamine, anabolic steroids, dronabinol",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_8",
    "q": "What is a key point regarding this item?",
    "options": [
      "Low abuse potential relative to III\nAccepted medical use\nLimited dependence risk",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_9",
    "q": "What is a key point regarding this item?",
    "options": [
      "Benzodiazepines, zolpidem, tramadol, carisoprodol",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_10",
    "q": "What is a key point regarding this item?",
    "options": [
      "Lowest abuse potential\nAccepted medical use\nLimited dependence risk",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_11",
    "q": "What is a key point regarding this item?",
    "options": [
      "Codeine cough syrups, pregabalin, diphenoxylate/atropine",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_12",
    "q": "What is a key point regarding this item?",
    "options": [
      "≤1.8 g per 100 mL OR ≤90 mg per dosage unit",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_13",
    "q": "What is a key point regarding this item?",
    "options": [
      "≤200 mg per 100 mL",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_14",
    "q": "What is a key point regarding this item?",
    "options": [
      "Quantities divisible by 3",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_15",
    "q": "What is a key point regarding this item?",
    "options": [
      "Quantities divisible by 5",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_16",
    "q": "What is a key point regarding this item?",
    "options": [
      "2 letters + 7 numbers\nLast digit = check digit",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_17",
    "q": "What is a key point regarding this item?",
    "options": [
      "1. Add digits 1, 3, 5\n2. Add digits 2, 4, 6 then x 2\n3. Add both totals\n4. Last digit must equal check digit",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_18",
    "q": "What is a key point regarding this item?",
    "options": [
      "Certificate of registration",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_19",
    "q": "What is a key point regarding this item?",
    "options": [
      "New application (pharmacy/practitioner)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_20",
    "q": "What is a key point regarding this item?",
    "options": [
      "Renewal application",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_21",
    "q": "What is a key point regarding this item?",
    "options": [
      "Chain pharmacy renewal affidavit",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_22",
    "q": "What is a key point regarding this item?",
    "options": [
      "Manufacturer/distributor/researcher application",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_23",
    "q": "What is a key point regarding this item?",
    "options": [
      "Narcotic treatment program application",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_24",
    "q": "What is a key point regarding this item?",
    "options": [
      "Ordering Schedule I & II drugs",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_25",
    "q": "What is a key point regarding this item?",
    "options": [
      "Single-sheet form (replaced triplicate)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_26",
    "q": "What is a key point regarding this item?",
    "options": [
      "20 items per form",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_27",
    "q": "What is a key point regarding this item?",
    "options": [
      "Keep copy for 2 years",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_28",
    "q": "What is a key point regarding this item?",
    "options": [
      "60 days",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_29",
    "q": "What is a key point regarding this item?",
    "options": [
      "Cannot correct - must replace and keep defective form for 4 years",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_30",
    "q": "What is a key point regarding this item?",
    "options": [
      "Execute new form\nAttach statement with order # and date\nNotify DEA if stolen",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_31",
    "q": "What is a key point regarding this item?",
    "options": [
      "Allows someone to sign DEA Form 222 on registrant's behalf",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_32",
    "q": "What is a key point regarding this item?",
    "options": [
      "Registrant signature\nPerson granted signature\n2 witnesses",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_33",
    "q": "What is a key point regarding this item?",
    "options": [
      "Signature of registrant (or last registrant signer)\n2 witnesses",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_34",
    "q": "What is a key point regarding this item?",
    "options": [
      "Yes, DEA Form 363",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_35",
    "q": "What is a key point regarding this item?",
    "options": [
      "Patient name & address\nDrug name, strength, dosage form, quantity\nDirections\nDate issued\nPrescriber name, address, DEA #\nSignature",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_36",
    "q": "What is a key point regarding this item?",
    "options": [
      "Manual signature\nElectronic (per DEA rules)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_37",
    "q": "What is a key point regarding this item?",
    "options": [
      "Pharmacist and prescriber share responsibility for validity and legitimacy of controlled prescription",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_38",
    "q": "What is a key point regarding this item?",
    "options": [
      "Altered Rx\nEarly refill requests\nCash payment for expensive opioids\nDoctor shopping\nUnusual quantities\nTraveling long distance\nMultiple prescribers/pharmacies",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_39",
    "q": "What is a key point regarding this item?",
    "options": [
      "Non-narcotics",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_40",
    "q": "What is a key point regarding this item?",
    "options": [
      "3 years (36 months)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_41",
    "q": "What is a key point regarding this item?",
    "options": [
      "1 year (12 months)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_42",
    "q": "What is a key point regarding this item?",
    "options": [
      "Yes, they may prescribe under the hospital's DEA registration if:\nLicensed by the state to prescribe\nActing within scope of employment\nAuthorized by hospital\nAssigned internal code suffix to institutional DEA number",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_43",
    "q": "What is a key point regarding this item?",
    "options": [
      "New application for chemical registrants, including entities distributing listed chemicals used in the manufacture of controlled substances",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_44",
    "q": "What is a key point regarding this item?",
    "options": [
      "DEA must be notified to terminate registration. The registrant must:\nReturn DEA registration certificate\nReturn executed DEA Form 222s\nDispose of controlled substances per DEA rules\nMaintain records for at least 2 years",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_45",
    "q": "What is a key point regarding this item?",
    "options": [
      "No. Hospital medication orders are not defined as prescriptions under federal law and do not need to be written on a security prescription blank because the medication is administered within the institution",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_46",
    "q": "What is a key point regarding this item?",
    "options": [
      "Prescription prepared by staff but personally signed by the prescriber\nPrescription prepared & signed by the prescriber",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_47",
    "q": "What is a key point regarding this item?",
    "options": [
      "Staff signing prescriber's name (even with consent)\nRubber stamp signature\nPre-printed signature on prescription blank",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_48",
    "q": "What is a key point regarding this item?",
    "options": [
      "Multistate Pharmacy Jurisprudence Examination",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_49",
    "q": "What is a key point regarding this item?",
    "options": [
      "NABP (National Association of Boards of Pharmacy)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_50",
    "q": "What is a key point regarding this item?",
    "options": [
      "120 total questions (100 scored, 20 unscored)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_51",
    "q": "What is a key point regarding this item?",
    "options": [
      "2.5 hours (150 minutes)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_52",
    "q": "What is a key point regarding this item?",
    "options": [
      "At least 107 questions",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_53",
    "q": "What is a key point regarding this item?",
    "options": [
      "Pass/Fail only (no numerical score reported)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_54",
    "q": "What is a key point regarding this item?",
    "options": [
      "Yes, question difficulty adapts based on answers",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_55",
    "q": "What is a key point regarding this item?",
    "options": [
      "No, questions must be answered in order with no review",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_56",
    "q": "What is a key point regarding this item?",
    "options": [
      "5 attempts per state",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_57",
    "q": "What is a key point regarding this item?",
    "options": [
      "Multiple choice, Select All That Apply, K-type questions",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_58",
    "q": "What is a key point regarding this item?",
    "options": [
      "No, they are mixed together unless specifically stated",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_59",
    "q": "What is a key point regarding this item?",
    "options": [
      "No, citations are not tested",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_60",
    "q": "What is a key point regarding this item?",
    "options": [
      "A standardized national jurisprudence exam covering laws common to all states",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_61",
    "q": "What is a key point regarding this item?",
    "options": [
      "No, pharmacists are still responsible for individual state laws",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_62",
    "q": "What is a key point regarding this item?",
    "options": [
      "100 scored questions",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_63",
    "q": "What is a key point regarding this item?",
    "options": [
      "Only 3 answer choices per questions",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_64",
    "q": "What is a key point regarding this item?",
    "options": [
      "The U.S. Constitution",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_65",
    "q": "What is a key point regarding this item?",
    "options": [
      "Supremacy Clause (Article VI)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_66",
    "q": "What is a key point regarding this item?",
    "options": [
      "Police powers under the 10th Amendment",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_67",
    "q": "What is a key point regarding this item?",
    "options": [
      "10th Amendment",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_68",
    "q": "What is a key point regarding this item?",
    "options": [
      "Legislatures (Congress or state legislatures)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_69",
    "q": "What is a key point regarding this item?",
    "options": [
      "Administrative agencies (e.g., Board of Pharmacy, FDA, DEA)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_70",
    "q": "What is a key point regarding this item?",
    "options": [
      "No",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_71",
    "q": "What is a key point regarding this item?",
    "options": [
      "Yes",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_72",
    "q": "What is a key point regarding this item?",
    "options": [
      "United States Code (USC)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_73",
    "q": "What is a key point regarding this item?",
    "options": [
      "Code of Federal Regulations (CFR)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_74",
    "q": "What is a key point regarding this item?",
    "options": [
      "Indiana Code (IC)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_75",
    "q": "What is a key point regarding this item?",
    "options": [
      "Indiana Administrative Code (IAC)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_76",
    "q": "What is a key point regarding this item?",
    "options": [
      "Notice and Comment Rulemaking",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_77",
    "q": "What is a key point regarding this item?",
    "options": [
      "Federal Register",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_78",
    "q": "What is a key point regarding this item?",
    "options": [
      "regulations.gov",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_79",
    "q": "What is a key point regarding this item?",
    "options": [
      "Agency issues a final rule or abandons rulemaking",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_80",
    "q": "What is a key point regarding this item?",
    "options": [
      "Government must follow fair procedures before depriving life, liberty, or property",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_81",
    "q": "What is a key point regarding this item?",
    "options": [
      "5th Amendment",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_82",
    "q": "What is a key point regarding this item?",
    "options": [
      "14th Amendment",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_83",
    "q": "What is a key point regarding this item?",
    "options": [
      "Fair procedures (notice and hearing)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_84",
    "q": "What is a key point regarding this item?",
    "options": [
      "Protection of fundamental rights from government interference",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_85",
    "q": "What is a key point regarding this item?",
    "options": [
      "Strict scrutiny",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_86",
    "q": "What is a key point regarding this item?",
    "options": [
      "Religion, Speech, Press, Assembly, Petition",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_87",
    "q": "What is a key point regarding this item?",
    "options": [
      "Declared the 13 colonies independent from Great Britain (July 4, 1776)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_88",
    "q": "What is a key point regarding this item?",
    "options": [
      "No, it states principles but is not legally binding law",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_89",
    "q": "What is a key point regarding this item?",
    "options": [
      "Common Sense by Thomas Paine",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_90",
    "q": "What is a key point regarding this item?",
    "options": [
      "Life, Liberty, and the Pursuit of Happiness",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_91",
    "q": "What is a key point regarding this item?",
    "options": [
      "1787",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_92",
    "q": "What is a key point regarding this item?",
    "options": [
      "The Bill of Rights (added in 1791)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_93",
    "q": "What is a key point regarding this item?",
    "options": [
      "27",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_94",
    "q": "What is a key point regarding this item?",
    "options": [
      "Legislative Branch (Congress)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_95",
    "q": "What is a key point regarding this item?",
    "options": [
      "Executive Branch (President)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_96",
    "q": "What is a key point regarding this item?",
    "options": [
      "Judicial Branch (Courts)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_97",
    "q": "What is a key point regarding this item?",
    "options": [
      "2/3 of Congress + 3/4 of states",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_98",
    "q": "What is a key point regarding this item?",
    "options": [
      "Right to bear arms",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_99",
    "q": "What is a key point regarding this item?",
    "options": [
      "No quartering soldiers in homes",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_100",
    "q": "What is a key point regarding this item?",
    "options": [
      "Protection against unreasonable searches and seizures",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_101",
    "q": "What is a key point regarding this item?",
    "options": [
      "Double jeopardy, self-incrimination, due process, takings clause",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_102",
    "q": "What is a key point regarding this item?",
    "options": [
      "Speedy trial, impartial jury, right to attorney",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_103",
    "q": "What is a key point regarding this item?",
    "options": [
      "No cruel and unusual punishment; no excessive fines/bails",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_104",
    "q": "What is a key point regarding this item?",
    "options": [
      "Rights not listed still exist",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_105",
    "q": "What is a key point regarding this item?",
    "options": [
      "Powers not given to federal government belong to states or people",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_106",
    "q": "What is a key point regarding this item?",
    "options": [
      "Abolished slavery",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_107",
    "q": "What is a key point regarding this item?",
    "options": [
      "Applies due process and equal protection to states",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_108",
    "q": "What is a key point regarding this item?",
    "options": [
      "Race cannot be used to deny voting",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_109",
    "q": "What is a key point regarding this item?",
    "options": [
      "Federal income tax",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_110",
    "q": "What is a key point regarding this item?",
    "options": [
      "Direct election of Senators",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_111",
    "q": "What is a key point regarding this item?",
    "options": [
      "Prohibition (later repealed)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_112",
    "q": "What is a key point regarding this item?",
    "options": [
      "Women's right to vote",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_113",
    "q": "What is a key point regarding this item?",
    "options": [
      "Repealed Prohibition",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_114",
    "q": "What is a key point regarding this item?",
    "options": [
      "President limited to two terms",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_115",
    "q": "What is a key point regarding this item?",
    "options": [
      "Presidential succession and disability procedures",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_116",
    "q": "What is a key point regarding this item?",
    "options": [
      "Voting age of 18",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_117",
    "q": "What is a key point regarding this item?",
    "options": [
      "The President",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_118",
    "q": "What is a key point regarding this item?",
    "options": [
      "4 years",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_119",
    "q": "What is a key point regarding this item?",
    "options": [
      "Sign/veto bills, appoint judges, make treaties, pardon criminals",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_120",
    "q": "What is a key point regarding this item?",
    "options": [
      "Senate",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_121",
    "q": "What is a key point regarding this item?",
    "options": [
      "Vice President",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_122",
    "q": "What is a key point regarding this item?",
    "options": [
      "Speaker of the House",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_123",
    "q": "What is a key point regarding this item?",
    "options": [
      "President Pro Tempore of the Senate",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_124",
    "q": "What is a key point regarding this item?",
    "options": [
      "Secretary of State",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_125",
    "q": "What is a key point regarding this item?",
    "options": [
      "Two chambers (House and Senate)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_126",
    "q": "What is a key point regarding this item?",
    "options": [
      "100 (2 per state)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_127",
    "q": "What is a key point regarding this item?",
    "options": [
      "6 years",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_128",
    "q": "What is a key point regarding this item?",
    "options": [
      "435",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_129",
    "q": "What is a key point regarding this item?",
    "options": [
      "2 years",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_130",
    "q": "What is a key point regarding this item?",
    "options": [
      "218 (simple majority)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_131",
    "q": "What is a key point regarding this item?",
    "options": [
      "51 (simple majority)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_132",
    "q": "What is a key point regarding this item?",
    "options": [
      "A Senator or Representative (sponsor)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_133",
    "q": "What is a key point regarding this item?",
    "options": [
      "Committee/Subcommittee",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_134",
    "q": "What is a key point regarding this item?",
    "options": [
      "Conference Committee",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_135",
    "q": "What is a key point regarding this item?",
    "options": [
      "Sign, Veto, Pocket Veto, Take no action (becomes law in 10 days)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_136",
    "q": "What is a key point regarding this item?",
    "options": [
      "2/3 vote in both chambers",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_137",
    "q": "What is a key point regarding this item?",
    "options": [
      "Article III",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_138",
    "q": "What is a key point regarding this item?",
    "options": [
      "District Courts, Courts of Appeals, Supreme Court",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_139",
    "q": "What is a key point regarding this item?",
    "options": [
      "Trial courts (federal question and diversity jurisdiction)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_140",
    "q": "What is a key point regarding this item?",
    "options": [
      "Cases involving the U.S. Constitution or federal law",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_141",
    "q": "What is a key point regarding this item?",
    "options": [
      "Cases between citizens of different states where amount exceeds $75,000",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_142",
    "q": "What is a key point regarding this item?",
    "options": [
      "9",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_143",
    "q": "What is a key point regarding this item?",
    "options": [
      "Lifetime appointments",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_144",
    "q": "What is a key point regarding this item?",
    "options": [
      "A request asking the Supreme Court to hear a case",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_145",
    "q": "What is a key point regarding this item?",
    "options": [
      "~10,000 petitions; hears ~75-80 cases",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_146",
    "q": "What is a key point regarding this item?",
    "options": [
      "Judge-made law created through court decisions",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_147",
    "q": "What is a key point regarding this item?",
    "options": [
      "A prior court decision that is binding on lower courts",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_148",
    "q": "What is a key point regarding this item?",
    "options": [
      "\"To stand by things decided\" (follow precedent)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_149",
    "q": "What is a key point regarding this item?",
    "options": [
      "The daily journal/newspaper of the federal government",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_150",
    "q": "What is a key point regarding this item?",
    "options": [
      "1. Within agency authority\n2. Based on statutory authority\n3. Reasonably related to public health, safety, welfare",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_151",
    "q": "What is a key point regarding this item?",
    "options": [
      "Issue guidance, policy statements, interpretive rules",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_152",
    "q": "What is a key point regarding this item?",
    "options": [
      "Inspections, recalls, fines, injunctions, seizure, prosecution",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_153",
    "q": "What is a key point regarding this item?",
    "options": [
      "Courts (Judicial Review)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_154",
    "q": "What is a key point regarding this item?",
    "options": [
      "Standing, exhaustion of remedies, ripeness",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_155",
    "q": "What is a key point regarding this item?",
    "options": [
      "Department of Health and Human Services",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_156",
    "q": "What is a key point regarding this item?",
    "options": [
      "FDA, CMS, CDC, NIH, HRSA, SAMHSA",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_157",
    "q": "What is a key point regarding this item?",
    "options": [
      "Safety and efficacy of drugs, food, medical devices",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_158",
    "q": "What is a key point regarding this item?",
    "options": [
      "Controlled substances",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_159",
    "q": "What is a key point regarding this item?",
    "options": [
      "Medicare and Medicaid",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_160",
    "q": "What is a key point regarding this item?",
    "options": [
      "Trade practices and consumer protection",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_161",
    "q": "What is a key point regarding this item?",
    "options": [
      "Interstate Commerce Clause (Article I, Section 8)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_162",
    "q": "What is a key point regarding this item?",
    "options": [
      "Federal govenment",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_163",
    "q": "What is a key point regarding this item?",
    "options": [
      "States",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_164",
    "q": "What is a key point regarding this item?",
    "options": [
      "Statute (broad framework)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_165",
    "q": "What is a key point regarding this item?",
    "options": [
      "Regulation (specific implementation details)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_166",
    "q": "What is a key point regarding this item?",
    "options": [
      "A statute",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_167",
    "q": "What is a key point regarding this item?",
    "options": [
      "The codified database of all general and permanent federal statutes",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_168",
    "q": "What is a key point regarding this item?",
    "options": [
      "51 titles",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_169",
    "q": "What is a key point regarding this item?",
    "options": [
      "Title 21",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_170",
    "q": "What is a key point regarding this item?",
    "options": [
      "The Title number",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_171",
    "q": "What is a key point regarding this item?",
    "options": [
      "Section",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_172",
    "q": "What is a key point regarding this item?",
    "options": [
      "A specific paragraph within the section",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_173",
    "q": "What is a key point regarding this item?",
    "options": [
      "The codified collection of federal agency regulations",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_174",
    "q": "What is a key point regarding this item?",
    "options": [
      "50 titles",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_175",
    "q": "What is a key point regarding this item?",
    "options": [
      "Food and Drugs",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_176",
    "q": "What is a key point regarding this item?",
    "options": [
      "The Part number",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_177",
    "q": "What is a key point regarding this item?",
    "options": [
      "The Section number",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_178",
    "q": "What is a key point regarding this item?",
    "options": [
      "Federal Register",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_179",
    "q": "What is a key point regarding this item?",
    "options": [
      "Indiana Code (state statutes)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_180",
    "q": "What is a key point regarding this item?",
    "options": [
      "Indiana Administrative Code (state regulations)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_181",
    "q": "What is a key point regarding this item?",
    "options": [
      "Title",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_182",
    "q": "What is a key point regarding this item?",
    "options": [
      "Title number for Indiana Administrative Code (Board of Pharmacy)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_183",
    "q": "What is a key point regarding this item?",
    "options": [
      "Indiana Board of Pharmacy",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_184",
    "q": "What is a key point regarding this item?",
    "options": [
      "Indiana Register",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_185",
    "q": "What is a key point regarding this item?",
    "options": [
      "Statutory authority granted by the legislature",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_186",
    "q": "What is a key point regarding this item?",
    "options": [
      "No",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_187",
    "q": "What is a key point regarding this item?",
    "options": [
      "It must be within agency authority, based on statute, and reasonably related to public health, safety, and welfare",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_188",
    "q": "What is a key point regarding this item?",
    "options": [
      "Federal government (under Interstate Commerce Clause)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_189",
    "q": "What is a key point regarding this item?",
    "options": [
      "States (under police powers/10th Amendment)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_190",
    "q": "What is a key point regarding this item?",
    "options": [
      "DEA",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_191",
    "q": "What is a key point regarding this item?",
    "options": [
      "Indiana Register (IR)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_192",
    "q": "What is a key point regarding this item?",
    "options": [
      "Indiana Register",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_193",
    "q": "What is a key point regarding this item?",
    "options": [
      "Members of the public and interested parties",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_194",
    "q": "What is a key point regarding this item?",
    "options": [
      "Indiana Professional Licensing Agency (PLA) website",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_195",
    "q": "What is a key point regarding this item?",
    "options": [
      "A preliminary notice asking for public input before proposing a formal rule",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_196",
    "q": "What is a key point regarding this item?",
    "options": [
      "The official published proposed rule during notice and comment",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_197",
    "q": "What is a key point regarding this item?",
    "options": [
      "A Final Rule",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_198",
    "q": "What is a key point regarding this item?",
    "options": [
      "Code of Federal Regulations (CFR)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_199",
    "q": "What is a key point regarding this item?",
    "options": [
      "Yes, through a resolution of disapproval (rare)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_200",
    "q": "What is a key point regarding this item?",
    "options": [
      "Yes, if unconstitutional, exceeds authority, or arbitrary/capricious",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_201",
    "q": "What is a key point regarding this item?",
    "options": [
      "An official who presides over agency hearings",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_202",
    "q": "What is a key point regarding this item?",
    "options": [
      "Administrative Order",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_203",
    "q": "What is a key point regarding this item?",
    "options": [
      "Court review of an agency's actions",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_204",
    "q": "What is a key point regarding this item?",
    "options": [
      "Creates or establishes a government program",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_205",
    "q": "What is a key point regarding this item?",
    "options": [
      "Provides funding for the program",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_206",
    "q": "What is a key point regarding this item?",
    "options": [
      "No, it must be funded",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_207",
    "q": "What is a key point regarding this item?",
    "options": [
      "Senate: HELP and Finance\nHouse: Energy and Commerce and Ways and Means",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_208",
    "q": "What is a key point regarding this item?",
    "options": [
      "Health, Education, Labor and Pensions",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_209",
    "q": "What is a key point regarding this item?",
    "options": [
      "Whether agency exceeded authority?\nWhether proper procedures were followed?\nWhether decision was arbitrary or capricious?",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_210",
    "q": "What is a key point regarding this item?",
    "options": [
      "Procedural due process and substantive due process",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_211",
    "q": "What is a key point regarding this item?",
    "options": [
      "It must be issued for a legitimate medical purpose by a practitioner acting in the usual course of professional practice",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_212",
    "q": "What is a key point regarding this item?",
    "options": [
      "The pharmacist",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_213",
    "q": "What is a key point regarding this item?",
    "options": [
      "DEA Form 222 (or its electronic equivalent via CSOS)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_214",
    "q": "What is a key point regarding this item?",
    "options": [
      "Initially upon registration and at least every 2 years thereafter",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_215",
    "q": "What is a key point regarding this item?",
    "options": [
      "They must be maintained separately from all other records",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_216",
    "q": "What is a key point regarding this item?",
    "options": [
      "Limited quantity sufficient to treat during the emergency period (oral authorization allowed; written prescription required within 7 days)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_217",
    "q": "What is a key point regarding this item?",
    "options": [
      "To track controlled substance dispensing and detect misuse or diversion",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_218",
    "q": "What is a key point regarding this item?",
    "options": [
      "Authorized prescribers, pharmacists, regulatory boards, and sometimes law enforcement (depending on state law)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_219",
    "q": "What is a key point regarding this item?",
    "options": [
      "Up to 5 refills within 6 months of the issue date",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_220",
    "q": "What is a key point regarding this item?",
    "options": [
      "No",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_221",
    "q": "What is a key point regarding this item?",
    "options": [
      "Once (unless pharmacies share a real-time electronic database)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_222",
    "q": "What is a key point regarding this item?",
    "options": [
      "Only in limited circumstances (e.g., pharmacy closure) and under strict federal guidelines",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_223",
    "q": "What is a key point regarding this item?",
    "options": [
      "<795> governs nonsterile compounding; <797> governs sterile compounding",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_224",
    "q": "What is a key point regarding this item?",
    "options": [
      "Handling of hazardous drugs to minimize exposure risk",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_225",
    "q": "What is a key point regarding this item?",
    "options": [
      "Proper training, environmental controls, and appropriate engineering controls (e.g., cleanroom standards)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_226",
    "q": "What is a key point regarding this item?",
    "options": [
      "Professional negligence that causes harm to a patient",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_227",
    "q": "What is a key point regarding this item?",
    "options": [
      "Duty, breach, causation, damages",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_228",
    "q": "What is a key point regarding this item?",
    "options": [
      "When an employer is legally responsible for the actions of an employee",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_229",
    "q": "What is a key point regarding this item?",
    "options": [
      "Liability without needing to prove negligence (defective product cases)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_230",
    "q": "What is a key point regarding this item?",
    "options": [
      "Protected Health Information (PHI)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_231",
    "q": "What is a key point regarding this item?",
    "options": [
      "Privacy Rule and Security Rule",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_232",
    "q": "What is a key point regarding this item?",
    "options": [
      "For treatment, payment, healthcare operations (TPO)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_233",
    "q": "What is a key point regarding this item?",
    "options": [
      "Review of records, inventory, security, and compliance procedures",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_234",
    "q": "What is a key point regarding this item?",
    "options": [
      "Presiding over agency hearings",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_235",
    "q": "What is a key point regarding this item?",
    "options": [
      "The final decision issued by an agency after a hearing",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_236",
    "q": "What is a key point regarding this item?",
    "options": [
      "The activities professionals are legally authorized to perform",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_237",
    "q": "What is a key point regarding this item?",
    "options": [
      "No",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_238",
    "q": "What is a key point regarding this item?",
    "options": [
      "State law and Board of Pharmacy regulations",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_239",
    "q": "What is a key point regarding this item?",
    "options": [
      "Proper labeling, security, and patient confidentiality",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_240",
    "q": "What is a key point regarding this item?",
    "options": [
      "Prompt notification to DEA and completion of DEA Form 106",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_241",
    "q": "What is a key point regarding this item?",
    "options": [
      "A drug that fails purity, strength, or quality standards",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_242",
    "q": "What is a key point regarding this item?",
    "options": [
      "False or misleading labeling or inadequate directions for use",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_243",
    "q": "What is a key point regarding this item?",
    "options": [
      "When the President takes no action and Congress adjourns within 10 days, causing the bill to die",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_244",
    "q": "What is a key point regarding this item?",
    "options": [
      "A committee formed to reconcile differences between House and Senate versions of a bill",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_245",
    "q": "What is a key point regarding this item?",
    "options": [
      "Dispensing a different drug than prescribed, usually within the same class (requires authorization)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_246",
    "q": "What is a key point regarding this item?",
    "options": [
      "Dispensing an FDA-approved equivalent product in place of the brand-name drug",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_247",
    "q": "What is a key point regarding this item?",
    "options": [
      "Manufacturer/supplier intent controls - not how the consumer uses the product",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_248",
    "q": "What is a key point regarding this item?",
    "options": [
      "Preventing misbranding and adulteration of food and drugs",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_249",
    "q": "What is a key point regarding this item?",
    "options": [
      "No",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_250",
    "q": "What is a key point regarding this item?",
    "options": [
      "The FDA",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_251",
    "q": "What is a key point regarding this item?",
    "options": [
      "The sulfanilamide elixir tragedy (diethylene glycol poisoning)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_252",
    "q": "What is a key point regarding this item?",
    "options": [
      "Drugs must be proven safe before marketing",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_253",
    "q": "What is a key point regarding this item?",
    "options": [
      "Authority to inspect manufacturing facilities",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_254",
    "q": "What is a key point regarding this item?",
    "options": [
      "Medical devices and cosmetics",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_255",
    "q": "What is a key point regarding this item?",
    "options": [
      "The distinction between prescription (Rx only) and OTC drugs",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_256",
    "q": "What is a key point regarding this item?",
    "options": [
      "\"Caution: Federal law prohibits dispensing without a prescription\"",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_257",
    "q": "What is a key point regarding this item?",
    "options": [
      "Yes - authorized refills",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_258",
    "q": "What is a key point regarding this item?",
    "options": [
      "Thalidomide causing birth defects (phocomelia)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_259",
    "q": "What is a key point regarding this item?",
    "options": [
      "Drugs must be proven effective (not just safe) before approval",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_260",
    "q": "What is a key point regarding this item?",
    "options": [
      "Well-controlled clinical trials",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_261",
    "q": "What is a key point regarding this item?",
    "options": [
      "Required informed consent from clinical trial participants",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_262",
    "q": "What is a key point regarding this item?",
    "options": [
      "Good Manufacturing Practices (GMPs)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_263",
    "q": "What is a key point regarding this item?",
    "options": [
      "Yes - efficacy review of previously approved drugs began",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_264",
    "q": "What is a key point regarding this item?",
    "options": [
      "The 5-schedule classification system",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_265",
    "q": "What is a key point regarding this item?",
    "options": [
      "Abuse potential, medical use, and safety/dependence risk",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_266",
    "q": "What is a key point regarding this item?",
    "options": [
      "DEA",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_267",
    "q": "What is a key point regarding this item?",
    "options": [
      "Kefauver-Harris Amendment",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_268",
    "q": "What is a key point regarding this item?",
    "options": [
      "Hatch-Waxman",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_269",
    "q": "What is a key point regarding this item?",
    "options": [
      "The Abbreviated New Drug Application (ANDA) pathway",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_270",
    "q": "What is a key point regarding this item?",
    "options": [
      "Bioequivalence - not full clinical trials",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_271",
    "q": "What is a key point regarding this item?",
    "options": [
      "Generic access and brand patent protections",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_272",
    "q": "What is a key point regarding this item?",
    "options": [
      "Prevent accidental pediatric poisionings",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_273",
    "q": "What is a key point regarding this item?",
    "options": [
      "Yes, via written request (blanket waivers allowed)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_274",
    "q": "What is a key point regarding this item?",
    "options": [
      "Prospective drug utilization review (DUR)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_275",
    "q": "What is a key point regarding this item?",
    "options": [
      "Offer to counsel Medicaid patients (later expanded by states)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_276",
    "q": "What is a key point regarding this item?",
    "options": [
      "Yes, but most states extended it to all patients",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_277",
    "q": "What is a key point regarding this item?",
    "options": [
      "Track-and-trace system for prescription drugs in the supply chain",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_278",
    "q": "What is a key point regarding this item?",
    "options": [
      "Transaction information, history, and statement",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_279",
    "q": "What is a key point regarding this item?",
    "options": [
      "Dissemination of certain off-label information to providers",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_280",
    "q": "What is a key point regarding this item?",
    "options": [
      "Risk Evaluation and Mitigation Strategies (REMS)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_281",
    "q": "What is a key point regarding this item?",
    "options": [
      "Yes, under FDAAA",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_282",
    "q": "What is a key point regarding this item?",
    "options": [
      "By examining labeling, advertising, promotional materials, and marketing format",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_283",
    "q": "What is a key point regarding this item?",
    "options": [
      "Yes, if it is intended to affect the structure or function of the body (unless properly regulated as a dietary supplement)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_284",
    "q": "What is a key point regarding this item?",
    "options": [
      "Yes, if it is marketed for both cosmetic and therapeutic purposes",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_285",
    "q": "What is a key point regarding this item?",
    "options": [
      "No - it must be classified as one or the other (unless it is a combination product)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_286",
    "q": "What is a key point regarding this item?",
    "options": [
      "No. Medicare eligibility is not based on income.",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_287",
    "q": "What is a key point regarding this item?",
    "options": [
      "Part A: Inpatient (hospital insurance)\nPart B: Outpatient/medical insurance\nPart C: Medicare Advantage (managed care plans)\nPart D: Prescription drug benefit",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_288",
    "q": "What is a key point regarding this item?",
    "options": [
      "$35 per month supply (no deductible required)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_289",
    "q": "What is a key point regarding this item?",
    "options": [
      "$2,100 annual cap",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_290",
    "q": "What is a key point regarding this item?",
    "options": [
      "Antidepressants, antipsychotics, anticonvulsants, antiretrovirals, antineoplastics, immunosuppressants",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_291",
    "q": "What is a key point regarding this item?",
    "options": [
      "Plans must accept participation from any pharmacy that agrees to plan terms and conditions",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_292",
    "q": "What is a key point regarding this item?",
    "options": [
      "10 years",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_293",
    "q": "What is a key point regarding this item?",
    "options": [
      "1% premium increase per month of delay",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_294",
    "q": "What is a key point regarding this item?",
    "options": [
      "A low-income subsidy (≤150% FPL) that reduces Part D costs (e.g., low copays for generics and brands)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_295",
    "q": "What is a key point regarding this item?",
    "options": [
      "Caremark (CVS Health), Express Scripts (Cigna), Optum Rx (UnitedHealth Group)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_296",
    "q": "What is a key point regarding this item?",
    "options": [
      "HMO: Must stay in network, usually need PCP + referrals\nPPO: More flexibility, high cost out-of-network, no referral needed",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_297",
    "q": "What is a key point regarding this item?",
    "options": [
      "Offering or receiving remuneration to generate federal healthcare business",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_298",
    "q": "What is a key point regarding this item?",
    "options": [
      "Yes",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_299",
    "q": "What is a key point regarding this item?",
    "options": [
      "No. They're considered illegal kickbacks",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_300",
    "q": "What is a key point regarding this item?",
    "options": [
      "Office of Inspector General (OIG)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_301",
    "q": "What is a key point regarding this item?",
    "options": [
      "Exceptions protecting certain arrangements from Anti-Kickback violations",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_302",
    "q": "What is a key point regarding this item?",
    "options": [
      "Physician self-referrals for designated health services to entities where they have a financial relationship",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_303",
    "q": "What is a key point regarding this item?",
    "options": [
      "No",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_304",
    "q": "What is a key point regarding this item?",
    "options": [
      "Lab, radiology, DME, outpatient drugs, PT/OT, home health, hospital services, etc",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_305",
    "q": "What is a key point regarding this item?",
    "options": [
      "Submitting false or fraudulent claims to the federal government",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_306",
    "q": "What is a key point regarding this item?",
    "options": [
      "Treble (3x) damages",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_307",
    "q": "What is a key point regarding this item?",
    "options": [
      "Whistleblower suits where private individuals can recover 15-25% of recovered funds",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_308",
    "q": "What is a key point regarding this item?",
    "options": [
      "It mandated prospective DUR, counseling, and documentation as a condition of Medicaid participation",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_309",
    "q": "What is a key point regarding this item?",
    "options": [
      "Therapeutic duplication, drug-disease contraindications, drug-drug interactions, incorrect dosage/duration, drug-allergy interactions, misuse/abuse, over/under utilization",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_310",
    "q": "What is a key point regarding this item?",
    "options": [
      "1. Drug Utilization Review (DUR)\n2. Rebates (Best Price requirement)\n3. Demonstration projects",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_311",
    "q": "What is a key point regarding this item?",
    "options": [
      "It requires an offer to counsel (not forced counseling)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_312",
    "q": "What is a key point regarding this item?",
    "options": [
      "Yes. Must be informed and voluntary; document refusal",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_313",
    "q": "What is a key point regarding this item?",
    "options": [
      "Patient demographics, disease states, allergies, medication list, pharmacist interventions, refusals",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_314",
    "q": "What is a key point regarding this item?",
    "options": [
      "1996",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_315",
    "q": "What is a key point regarding this item?",
    "options": [
      "Individually identifiable health information related to condition, treatment, or payment",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_316",
    "q": "What is a key point regarding this item?",
    "options": [
      "Only disclose the minimum PHI necessary to accomplish the purpose",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_317",
    "q": "What is a key point regarding this item?",
    "options": [
      "Health plans, clearinghouses, and healthcare providers transmitting electronic health information",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_318",
    "q": "What is a key point regarding this item?",
    "options": [
      "Office for Civil Rights (OCR)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_319",
    "q": "What is a key point regarding this item?",
    "options": [
      "6 years",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_320",
    "q": "What is a key point regarding this item?",
    "options": [
      "Notify affects individuals within 60 days and notify media + HHS",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_321",
    "q": "What is a key point regarding this item?",
    "options": [
      "Yes",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_322",
    "q": "What is a key point regarding this item?",
    "options": [
      "Allows refill/adherence communications about currently prescribed drugs if remuneration is reasonably related to cost",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_323",
    "q": "What is a key point regarding this item?",
    "options": [
      "State and federal government (minimum 50% federal match)",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_324",
    "q": "What is a key point regarding this item?",
    "options": [
      "Yes",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_325",
    "q": "What is a key point regarding this item?",
    "options": [
      "Individuals eligible for both Medicare and Medicaid",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_326",
    "q": "What is a key point regarding this item?",
    "options": [
      "No",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_327",
    "q": "What is a key point regarding this item?",
    "options": [
      "Yes",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_328",
    "q": "What is a key point regarding this item?",
    "options": [
      "Yes",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_329",
    "q": "What is a key point regarding this item?",
    "options": [
      "Individuals ≥65 years of age, individuals with permanent disabilities, individuals with ESRD, individuals exposed to environmental hazards",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_330",
    "q": "What is a key point regarding this item?",
    "options": [
      "Private insurance companies often follow Medicare coverage policies",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_331",
    "q": "What is a key point regarding this item?",
    "options": [
      "1. Deductible phase\n2. Initial coverage phase\n3. Catastrophic coverage phase",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_332",
    "q": "What is a key point regarding this item?",
    "options": [
      "25% coinsurance",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_333",
    "q": "What is a key point regarding this item?",
    "options": [
      "Part D plan, manufacturer, Medicare",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_334",
    "q": "What is a key point regarding this item?",
    "options": [
      "Part D plan, Medicare",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_335",
    "q": "What is a key point regarding this item?",
    "options": [
      "Medication Therapy Management - pharmacist-provided services to optimize therapeutic outcomes",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_336",
    "q": "What is a key point regarding this item?",
    "options": [
      "1. Medication therapy review\n2. Personal medication record\n3. Medication-related action plan\n4. Intervention/referral\n5. Documentation and follow-up",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_337",
    "q": "What is a key point regarding this item?",
    "options": [
      "All commercially available vaccines not covered under Part B",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_338",
    "q": "What is a key point regarding this item?",
    "options": [
      "Weight loss drugs, fertility drugs, cosmetic/hair growth drugs, OTC drugs, DESI drugs, non-FDA approved drugs",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_339",
    "q": "What is a key point regarding this item?",
    "options": [
      "Hoosier Healthwise, Hoosier Care Connect, Healthy Indiana Plan (HIP), Traditional Medicaid, Indiana PathWays for Aging, HoosierRx",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_340",
    "q": "What is a key point regarding this item?",
    "options": [
      "Children ≤19 and pregnant women",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_341",
    "q": "What is a key point regarding this item?",
    "options": [
      "Ages 19-64 with income ≤ ~138% FPL",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_342",
    "q": "What is a key point regarding this item?",
    "options": [
      "Indiana residents ≥65 with income <150% FPL and enrolled in Part D",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_343",
    "q": "What is a key point regarding this item?",
    "options": [
      "Drug interactions, duplication, incorrect dose/duration, drug-disease, allergies, misuse/abuse",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_344",
    "q": "What is a key point regarding this item?",
    "options": [
      "Patient demographics, medication list, allergies, pharmacist interventions",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_345",
    "q": "What is a key point regarding this item?",
    "options": [
      "Electronic healthcare transactions, privacy standards, security standards, NPI numbers",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_346",
    "q": "What is a key point regarding this item?",
    "options": [
      "Health plans, clearinghouses, healthcare providers transmitting electronic data",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_347",
    "q": "What is a key point regarding this item?",
    "options": [
      "No, if reasonable safeguards are in place",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_348",
    "q": "What is a key point regarding this item?",
    "options": [
      "Administrative, technical, and physical protections to limit PHI exposure",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_349",
    "q": "What is a key point regarding this item?",
    "options": [
      "Name, address, DOB, SSN, medical record number, email, photos",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_350",
    "q": "What is a key point regarding this item?",
    "options": [
      "Provide notice, attempt to obtain written acknowledgement, document good faith effort, keep record for 6 years",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  },
  {
    "id": "law_ex_351",
    "q": "What is a key point regarding this item?",
    "options": [
      "Within 60 days if breach poses significant risk",
      "Incorrect Option A",
      "Incorrect Option B",
      "Incorrect Option C"
    ],
    "correct": 0
  }
]
}];

const lawCases$1 = [];

let counselingFlashcards = [], counselingExams = [], counselingCases = [];
let diseasesFlashcards = [], diseasesExams = [], diseasesCases = [];
let drugFlashcards = [], drugExams = [], drugCases = [];
let lawFlashcards = [], lawExams = [], lawCases = [];
try {
  counselingFlashcards = counselingFlashcards$1 || [];
  counselingExams = counselingExams$1 || [];
  counselingCases = counselingCases$1 || [];
} catch (e) {
  console.warn("[MARIAM] Counseling data failed to load:", e.message);
}
try {
  diseasesFlashcards = diseasesFlashcards$1 || [];
  diseasesExams = diseasesExams$1 || [];
  diseasesCases = diseasesCases$1 || [];
} catch (e) {
  console.warn("[MARIAM] Diseases data failed to load:", e.message);
}
try {
  drugFlashcards = drugFlashcards$1 || [];
  drugExams = drugExams$1 || [];
  drugCases = drugCases$1 || [];
} catch (e) {
  console.warn("[MARIAM] Drug data failed to load:", e.message);
}
try {
  lawFlashcards = lawFlashcards$1 || [];
  lawExams = lawExams$1 || [];
  lawCases = lawCases$1 || [];
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
const streamTextAsTyping = async (fullText, onChunk, speedMs = 12) => {
  const text = String(fullText || "");
  if (!text) {
    onChunk("");
    return "";
  }
  let rendered = "";
  let i = 0;
  while (i < text.length) {
    const chunkLen = text[i] === "\n" ? 1 : Math.max(2, Math.min(8, Math.floor(Math.random() * 6) + 2));
    rendered += text.slice(i, i + chunkLen);
    i += chunkLen;
    onChunk(rendered);
    await new Promise((r) => setTimeout(r, speedMs));
  }
  return rendered;
};
const renderMdInline = (text) => {
  if (!text) return [];
  const parts = [];
  const re = /\*\*\*(.+?)\*\*\*|\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+)`/g;
  let last = 0, k = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1]) parts.push(/* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: m[1] }) }, k++));
    else if (m[2]) parts.push(/* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: m[2] }, k++));
    else if (m[3]) parts.push(/* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: m[3] }, k++));
    else if (m[4]) parts.push(/* @__PURE__ */ jsxRuntimeExports.jsx("code", { style: { background: "rgba(0,0,0,0.1)", padding: "1px 5px", borderRadius: 4, fontFamily: "monospace", fontSize: "0.88em" }, children: m[4] }, k++));
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length ? parts : [text];
};
const renderMarkdown = (text) => {
  if (!text) return null;
  const lines = text.split("\n");
  const out = [];
  let listItems = [];
  const flushList = () => {
    if (!listItems.length) return;
    out.push(/* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: { paddingLeft: 18, margin: "4px 0", listStyle: "disc" }, children: listItems.splice(0) }, `ul${out.length}`));
  };
  lines.forEach((line, idx) => {
    const h3 = line.match(/^### (.+)$/);
    if (h3) {
      flushList();
      out.push(/* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontWeight: 800, margin: "10px 0 2px" }, children: renderMdInline(h3[1]) }, idx));
      return;
    }
    const h2 = line.match(/^## (.+)$/);
    if (h2) {
      flushList();
      out.push(/* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontWeight: 800, fontSize: "1.05em", margin: "10px 0 3px" }, children: renderMdInline(h2[1]) }, idx));
      return;
    }
    const h1 = line.match(/^# (.+)$/);
    if (h1) {
      flushList();
      out.push(/* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontWeight: 900, fontSize: "1.1em", margin: "12px 0 4px" }, children: renderMdInline(h1[1]) }, idx));
      return;
    }
    const li = line.match(/^\s*[-*•+] (.+)$/) || line.match(/^\s*\d+\.\s+(.+)$/);
    if (li) {
      listItems.push(/* @__PURE__ */ jsxRuntimeExports.jsx("li", { style: { marginBottom: 2, lineHeight: 1.5 }, children: renderMdInline(li[1]) }, idx));
      return;
    }
    if (/^---+$/.test(line.trim())) {
      flushList();
      out.push(/* @__PURE__ */ jsxRuntimeExports.jsx("hr", { style: { border: "none", borderTop: "1px solid rgba(0,0,0,0.15)", margin: "8px 0" } }, idx));
      return;
    }
    if (!line.trim()) {
      flushList();
      if (out.length) out.push(/* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: 6 } }, idx));
      return;
    }
    flushList();
    out.push(/* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { lineHeight: 1.6 }, children: renderMdInline(line) }, idx));
  });
  flushList();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: out });
};
const callAIStreaming = async (prompt, onChunk, settings = {}, maxTokens = 4e3) => {
  const { provider = "anthropic", apiKey = "", model = "" } = settings;
  if (provider !== "anthropic") {
    const full = await callAI(prompt, false, false, settings, maxTokens);
    await streamTextAsTyping(full, onChunk, 10);
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
      className: "library-view flex-1 min-h-0 overflow-y-auto custom-scrollbar scroll-content app-view",
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
          ] }) : viewMode === "grid" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3", children: filtered.map((doc) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => onOpen(doc.id), className: "design-card cursor-pointer", children: [
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
  const scrollContainerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
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
        await streamTextAsTyping(result, (chunk) => {
          setMsgs((p) => [...p.slice(0, -1), { role: "assistant", content: chunk }]);
        }, 10);
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 overflow-y-auto custom-scrollbar p-4 space-y-3", ref: scrollContainerRef, children: [
      msgs.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex gap-2.5 ${m.role === "user" ? "flex-row-reverse" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${m.role === "user" ? "bg-[var(--accent)]" : "overflow-hidden glass"}`, children: m.role === "user" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleUserRound, { size: 16, className: "text-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: MARIAM_IMG, className: "w-full h-full object-cover", alt: "AI" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `px-3.5 py-2.5 text-xs leading-relaxed max-w-[84%] rounded-2xl
              ${m.role === "user" ? "bg-[var(--accent)] text-white rounded-tr-sm" : "glass rounded-tl-sm"}`, children: m.content ? renderMarkdown(m.content) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-30", children: "▊" }) })
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
  const [showQuicks, setShowQuicks] = reactExports.useState(true);
  const endRef = reactExports.useRef(null);
  const scrollContainerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, loading]);
  const send = async (override) => {
    const msg = override || input;
    if (!msg.trim() || loading) return;
    setInput("");
    setShowQuicks(false);
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 overflow-y-auto custom-scrollbar p-3 space-y-3", ref: scrollContainerRef, children: [
      msgs.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex gap-2 ${m.role === "user" ? "flex-row-reverse" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-black ${m.role === "user" ? "bg-[var(--accent)] text-white" : "bg-gradient-to-br from-[var(--accent)] to-[var(--accent2,var(--accent))] text-white"}`, children: m.role === "user" ? "You" : "AI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `px-3 py-2.5 text-sm leading-relaxed rounded-2xl max-w-[85%]
              ${m.role === "user" ? "bg-[var(--accent)] text-white rounded-tr-sm" : "glass border border-[color:var(--border2,var(--border))] rounded-tl-sm"}`, children: m.content ? renderMarkdown(m.content) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-30 animate-pulse", children: "▊" }) })
      ] }, i)),
      loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent2,var(--accent))] text-white flex items-center justify-center text-xs font-black shrink-0", children: "AI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5 border border-[color:var(--border2,var(--border))]", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-[var(--accent)] rounded-full animate-bounce", style: { animationDelay: `${i * 0.15}s` } }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: endRef })
    ] }),
    showQuicks && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-2 flex gap-1.5 flex-wrap shrink-0 border-t border-[color:var(--border2,var(--border))]", children: QUICK.map((q) => /* @__PURE__ */ jsxRuntimeExports.jsx(
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
  const [sidebarOpen, setSidebarOpen] = reactExports.useState(() => window.innerWidth >= 1024);
  const [sessSearch, setSessSearch] = reactExports.useState("");
  const [pinnedIds, setPinnedIds] = reactExports.useState([]);
  const [contextMenu, setContextMenu] = reactExports.useState(null);
  const [projects, setProjects] = reactExports.useState([]);
  const [selProject, setSelProject] = reactExports.useState(null);
  const [showNewProject, setShowNewProject] = reactExports.useState(false);
  const [newProjectName, setNewProjectName] = reactExports.useState("");
  const [sidebarTab, setSidebarTab] = reactExports.useState("chats");
  const [inputRows, setInputRows] = reactExports.useState(1);
  const [hasStarted, setHasStarted] = reactExports.useState(false);
  const endRef = reactExports.useRef(null);
  const recogRef = reactExports.useRef(null);
  const inputRef = reactExports.useRef(null);
  const scrollContainerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
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
    setHasStarted(false);
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
    setHasStarted(true);
    if (window.innerWidth < 1024) setSidebarOpen(false);
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
    setHasStarted(true);
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-y-auto custom-scrollbar", ref: scrollContainerRef, children: !hasStarted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center min-h-full p-6 gap-8", children: [
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `px-4 py-3 rounded-2xl text-sm leading-relaxed
                      ${m.role === "user" ? "bg-[var(--accent)] text-white rounded-tr-sm max-w-[80%]" : "rounded-tl-sm"}`, children: m.role === "assistant" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose-custom", children: m.content ? renderMarkdown(m.content) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-30 animate-pulse", children: "▊" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-wrap", children: m.content }) }),
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
  const [isKeyboardOpen, setIsKeyboardOpen] = reactExports.useState(false);
  const { toasts, addToast } = useToast();
  reactExports.useEffect(() => {
    document.documentElement.style.setProperty("--nav-h", `${NAV_H}px`);
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  reactExports.useEffect(() => {
    if (!isMobile) {
      setIsKeyboardOpen(false);
      return;
    }
    const vv = window.visualViewport;
    const updateKeyboardState = () => {
      const viewportHeight = vv?.height || window.innerHeight;
      const delta = window.innerHeight - viewportHeight;
      const el = document.activeElement;
      const tag = (el?.tagName || "").toLowerCase();
      const isEditable = tag === "input" || tag === "textarea" || tag === "select" || el?.isContentEditable || el?.getAttribute?.("contenteditable") === "true";
      setIsKeyboardOpen(delta > 100 && isEditable);
    };
    const onFocusIn = () => {
      setTimeout(updateKeyboardState, 100);
      setTimeout(updateKeyboardState, 350);
      setTimeout(updateKeyboardState, 600);
    };
    const onFocusOut = () => setTimeout(updateKeyboardState, 200);
    vv?.addEventListener("resize", updateKeyboardState);
    window.addEventListener("resize", updateKeyboardState);
    window.addEventListener("focusin", onFocusIn);
    window.addEventListener("focusout", onFocusOut);
    updateKeyboardState();
    return () => {
      vv?.removeEventListener("resize", updateKeyboardState);
      window.removeEventListener("resize", updateKeyboardState);
      window.removeEventListener("focusin", onFocusIn);
      window.removeEventListener("focusout", onFocusOut);
    };
  }, [isMobile]);
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "design-top-glass", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "design-header shrink-0 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: MARIAM_IMG, alt: "", className: "w-9 h-9 rounded-xl object-cover" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[1.5rem]", children: "MARIAM" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowGlobalSearch(true), className: "absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center", style: { background: "rgba(255,255,255,0.15)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 18 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "design-body flex flex-1 min-h-0 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "design-main flex-1 flex flex-col min-h-0 overflow-hidden overflow-y-auto relative", style: { paddingBottom: 120 }, children: [
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: `design-nav ${isMobile && isKeyboardOpen ? "keyboard-open-hidden" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "design-nav-inner", children: NAV_ITEMS2.map(({ icon: Icon, label, v, dis }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
