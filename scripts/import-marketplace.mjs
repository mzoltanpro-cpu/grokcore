/**
 * A Marketplace-katalógus adatainak egyetlen forrása a COO munkaterület bots.json fájlja
 * (lekérve a https://x.ai/bot/marketplace oldalról). Ez a szkript abból állítja elő a
 * src/content/marketplace-bots.json fájlt. Kézzel ne szerkeszd a kimenetet: futtasd újra.
 *
 *   node scripts/import-marketplace.mjs /workspace/GrokCore/coo/marketplace/bots.json
 *
 * Szabály: a teljes eredeti szöveget nem másoljuk át. A magyar összefoglaló a sajátunk;
 * angolul csak rövid, idézetként jelölt részlet kerül át (QUOTE_MAX karakterig).
 */
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const source = process.argv[2];
if (!source) {
  console.error("Használat: node scripts/import-marketplace.mjs <bots.json>");
  process.exit(1);
}
const QUOTE_MAX = 160;
const FETCHED = "2026-10-17";

function quote(text, max = QUOTE_MAX) {
  if (!text) return "";
  const clean = String(text).replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const sentence = cut.lastIndexOf(". ");
  if (sentence > max * 0.5) return cut.slice(0, sentence + 1);
  return `${cut.slice(0, cut.lastIndexOf(" "))} …`;
}

// A memóriabejegyzések témái. Csak kulcsszó-egyezés: a címke azt jelzi, miről szól a bejegyzés.
const MEMORY_THEMES = [
  ["szerep", "Szerep és feladat (mit csinál, mit nem)", /\b(one job|job:|job is|i am |i'm |you are |this bot (is|controls)|operating (model|principle|instructions)|owns?:|lane:|job boundary|wants (a|the|an)\b)/i],
  ["beallitas", "Beállítások, amelyeket az első beszélgetésben kérdez ki", /(user prefs|fill during getting started|= unset)/i],
  ["indulas", "Első indítás és bevezető (onboarding)", /(first[- ]run|first[- ]chat|first conversation|cold-start|on first use|getting started)/i],
  ["masodiknap", "Mit tesz a második naptól", /day[- ]two/i],
  ["fajlok", "Munkaállapot fájlokban, nem a memóriában", /(working (state|files)|workspace is|lives in files|folder|ledger)/i],
  ["konvencio", "Rögzített értéklisták és konvenciók", /(fixed (value lists|conventions|defaults)|value list)/i],
  ["kuldes", "Küldési szabály: csak tervezet, küldés csak jóváhagyással", /(never[- ]send|never send|drafts? only|without (the owner|the user|your|their)|explicit (yes|ok|approval))/i],
  ["penz", "Pénz és költés: semmi a jóváhagyásod nélkül", /(spend money|never (spend|buys?|pays?)|budget|payment)/i],
  ["forras", "Forráskezelés, nem talál ki adatot", /(source policy|sources? of truth|never invents?|do not invent|cites?|verbatim)/i],
  ["utemezes", "Ütemezés és routine-szabályok", /(routine|cron|weekdays|every (monday|friday|weekday)|\d{1,2}(:\d\d)?\s?(am|pm))/i],
  ["egyuttmukodes", "Együttműködés más botokkal", /(handoff|sibling|teammates|orchestrat|other desks|cloud agents?|sendtoagent)/i],
  ["hangnem", "Hangnem és stílus", /(voice|talk plain|tone|em dash|style)/i],
  ["biztonsag", "Biztonság és titkok kezelése", /(credential|token|secret|safety|privacy|private)/i],
];

function memoryThemes(memories) {
  const found = [];
  for (const [id, label, re] of MEMORY_THEMES) {
    if (memories.some((m) => re.test(m))) found.push({ id, label });
  }
  if (memories.length && !found.length) found.push({ id: "szabaly", label: "Működési szabályok (lásd az idézetet)" });
  return found;
}

// Ütemezés a routine leírásából: csak az, ami szó szerint ott áll.
function scheduleTags(text) {
  const t = text ?? "";
  const tags = [];
  if (/disabled by default|ships paused|lands paused|paused/i.test(t)) tags.push("Alapból kikapcsolva");
  if (/hourly|every 30 minutes|through the (working )?day|through the workday/i.test(t)) tags.push("Napközben többször");
  if (/every weekday|each weekday|weekdays?|weekday (morning|evening|afternoon|intra-day)|1-5\)/i.test(t)) tags.push("Hétköznaponként");
  else if (/every day|daily|all seven days|once a day/i.test(t)) tags.push("Naponta");
  if (/(every|on) (monday|tuesday|wednesday|thursday|friday|saturday|sunday)|mondays|fridays|sunday \d|friday:|monday,|once a week|every week\b|\bweekly\b|twice a week/i.test(t)) tags.push("Hetente");
  if (/month|1st of|first business day|quarterly/i.test(t)) tags.push(/quarterly/i.test(t) ? "Negyedévente" : "Havonta");
  const time = t.match(/\b(\d{1,2}(?::\d{2})?\s?(?:am|pm|AM|PM))\b|\b(\d{1,2}:\d{2})\b/);
  if (time) tags.push(`Időpont a listingben: ${time[0]}`);
  if (/when (a|the) |after a meeting|on (personal-site )?pr|the evening before|on the morning of|two days after/i.test(t)) tags.push("Eseményre indul");
  return [...new Set(tags)];
}

function integrationStatus(text) {
  const t = (text ?? "").trim();
  if (/^required/i.test(t)) return "Kötelező";
  if (/^recommended/i.test(t)) return "Ajánlott";
  if (/^optional/i.test(t)) return "Opcionális";
  return "";
}

const bots = JSON.parse(await readFile(source, "utf8"));
const out = bots.map((b) => {
  const memories = (b.memories ?? []).filter(Boolean);
  return {
    slug: b.slug,
    name: b.name,
    author: b.author,
    categories: b.categories ?? [],
    categoriesHu: b.categories_hu ?? [],
    featured: Boolean(b.featured),
    summaryHu: b.hu_summary,
    forWhomHu: b.hu_kinek ?? null,
    days: b.hu_days ?? [],
    descriptionQuote: quote(b.description_en, 200),
    memory: {
      count: memories.length,
      themes: memoryThemes(memories),
      quote: memories.length ? quote(memories[0]) : "",
    },
    skills: (b.skills ?? []).map((s) => ({ name: s.name, quote: quote(s.description, 140) })),
    routines: (b.routines ?? []).map((r) => ({
      name: r.name,
      quote: r.summary && r.summary !== r.name ? quote(r.summary, 160) : "",
      schedule: scheduleTags(`${r.name} ${r.summary ?? ""}`),
    })),
    integrations: (b.integrations ?? []).map((i) => ({
      name: i.name,
      status: integrationStatus(i.description),
      quote: quote(i.description, 140),
    })),
    sourceUrl: b.detail_url,
    updatedAt: b.updatedAt ?? null,
    fetched: b.fetched ?? FETCHED,
  };
});
out.sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));
const target = path.join(process.cwd(), "src/content/marketplace-bots.json");
await writeFile(target, `${JSON.stringify(out, null, 1)}\n`);
console.log(`${out.length} bot → ${path.relative(process.cwd(), target)}`);
