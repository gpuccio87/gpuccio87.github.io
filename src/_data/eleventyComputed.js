// Per-language data: every file in _data/testi/ holds one block per language
// ({ it: ..., en: ... }, the format the admin panel writes). Here each page gets
// the block for its own language, with the Italian one filling any gap.
const SEZIONI = ["site", "home", "about", "resume", "portfolio", "contact", "ui"];

function unisci(base, sopra) {
  if (sopra === undefined || sopra === null) return base;
  if (Array.isArray(sopra) || typeof sopra !== "object" || typeof base !== "object" || Array.isArray(base)) return sopra;
  const out = { ...base };
  for (const k of Object.keys(sopra)) out[k] = unisci(base[k], sopra[k]);
  return out;
}

const computed = {};
for (const s of SEZIONI) {
  computed[s] = (data) => {
    const testi = data.testi[s] || {};
    const lang = data.lang || "it";
    return lang === "it" ? testi.it : unisci(testi.it, testi[lang]);
  };
}
module.exports = computed;
