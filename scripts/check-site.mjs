import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { HtmlValidate } from "html-validate";

const root = process.cwd();
const dist = path.join(root, "dist");

const required = [
  "index.html",
  "5-nap/index.html",
  "5-nap/1-nap-letoltes-belepes/index.html",
  "5-nap/2-nap-appok-bekotese/index.html",
  "5-nap/3-nap-elso-feladat/index.html",
  "5-nap/4-nap-skill-routine/index.html",
  "5-nap/5-nap-masodik-bot-biztonsag/index.html",
  "gyakorlolapok/index.html",
  "gyakorlolapok/1-nap-letoltes-belepes/index.html",
  "gyakorlolapok/2-nap-appok-bekotese/index.html",
  "gyakorlolapok/3-nap-elso-feladat/index.html",
  "gyakorlolapok/4-nap-skill-routine/index.html",
  "gyakorlolapok/5-nap-masodik-bot-biztonsag/index.html",
  "gyakorlolapok/1-nap-letoltes-belepes.md",
  "gyakorlolapok/2-nap-appok-bekotese.md",
  "gyakorlolapok/3-nap-elso-feladat.md",
  "gyakorlolapok/4-nap-skill-routine.md",
  "gyakorlolapok/5-nap-masodik-bot-biztonsag.md",
  "marketplace/index.html",
  "hivatalos-sablonok/index.html",
  "sablonok/index.html",
  "utmutatok/index.html",
  "halado/index.html",
  "halado/botcsapat/index.html",
  "halado/rutinok-ritmusa/index.html",
  "halado/masodik-agy/index.html",
  "forrasok/index.html",
  "rolunk/index.html",
  "szponzoracio/index.html",
  "hirlevel/index.html",
  "impresszum/index.html",
  "adatkezeles/index.html",
  "404.html",
  "sitemap.xml",
  "robots.txt",
  "llms.txt",
  "llms-full.txt",
  "favicon.svg",
  "og.png",
];

const htmlvalidate = new HtmlValidate({
  root: true,
  extends: ["html-validate:recommended"],
  elements: ["html5"],
  rules: {
    "no-trailing-whitespace": "off",
    "void-style": "off",
    "tel-non-breaking": "off",
    "long-title": "off",
    "no-inline-style": "error",
    "prefer-native-element": "off",
  },
});

const errors = [];
const fail = (message) => errors.push(message);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

function stripHash(url) {
  const parsed = new URL(url);
  parsed.hash = "";
  return parsed.toString();
}

const files = await walk(dist);
const htmlFiles = files.filter((file) => file.endsWith(".html"));
const byRel = new Map(files.map((file) => [path.relative(dist, file).split(path.sep).join("/"), file]));

for (const rel of required) {
  if (!byRel.has(rel)) fail(`Hiányzó kimenet: ${rel}`);
}

// A régi 7 napos útvonal megszűnt: nem lehet kimenete, és a vercel.json-ban át kell irányítani.
for (const rel of byRel.keys()) {
  if (rel.startsWith("7-nap/")) fail(`Régi 7 napos oldal maradt a kimenetben: ${rel}`);
}
const vercel = JSON.parse(await readFile(path.join(root, "vercel.json"), "utf8"));
const redirected = new Set((vercel.redirects ?? []).map((item) => item.source));
for (const old of [
  "/7-nap/",
  "/7-nap/1-nap-telepites/",
  "/7-nap/2-nap-elso-bot/",
  "/7-nap/3-nap-elso-feladat/",
  "/7-nap/4-nap-appok/",
  "/7-nap/5-nap-skill/",
  "/7-nap/6-nap-routine/",
  "/7-nap/7-nap-jovahagyasok/",
]) {
  if (!redirected.has(old)) fail(`Hiányzó átirányítás a vercel.json-ban: ${old}`);
}
for (const item of vercel.redirects ?? []) {
  const target = item.destination.endsWith("/") ? `${item.destination.slice(1)}index.html` : item.destination.slice(1);
  if (!byRel.has(target)) fail(`Az átirányítás célja nem létezik: ${item.source} → ${item.destination}`);
}

// Gyakorlólap-szabály: felhasználói idézet csak szerzővel és linkkel; saját példa jelölve.
for (const rel of byRel.keys()) {
  if (!rel.startsWith("gyakorlolapok/") || !rel.endsWith(".md")) continue;
  const md = await readFile(byRel.get(rel), "utf8");
  for (const line of md.split("\n")) {
    if (line.startsWith("_Felhasználói idézet") && !/@\S+: https:\/\//.test(line)) {
      fail(`${rel}: felhasználói idézet szerző vagy link nélkül: ${line}`);
    }
  }
  if (!md.includes("Saját példánk")) fail(`${rel}: nincs jelölt saját példa`);
}

// Marketplace-katalógus: minden botnak saját oldal, minden kötelező blokkal és forráslinkkel.
const marketplace = JSON.parse(await readFile(path.join(root, "src/content/marketplace-bots.json"), "utf8"));
const mpBlocks = ["leiras", "memoria", "skillek", "rutinok", "integraciok", "keszito", "kategoria", "nap", "forras"];
if (marketplace.length === 0) fail("A marketplace-bots.json üres.");
const mpIndex = byRel.has("marketplace/index.html") ? await readFile(byRel.get("marketplace/index.html"), "utf8") : "";
if (!mpIndex.includes("Nem hivatalos")) fail("marketplace/index.html: hiányzik a nem hivatalos jelölés");
if (!mpIndex.includes('"@type":"ItemList"')) fail("marketplace/index.html: hiányzik az ItemList JSON-LD");
for (const bot of marketplace) {
  const rel = `marketplace/${bot.slug}/index.html`;
  if (!byRel.has(rel)) {
    fail(`Hiányzó bot-oldal: ${rel}`);
    continue;
  }
  if (!mpIndex.includes(`href="/marketplace/${bot.slug}/"`)) fail(`marketplace/index.html: nem linkeli: ${bot.slug}`);
  const html = await readFile(byRel.get(rel), "utf8");
  for (const block of mpBlocks) {
    const section = html.match(new RegExp(`<section[^>]*data-block="${block}"[^>]*>([\\s\\S]*?)</section>`));
    if (!section) fail(`${rel}: hiányzó blokk: ${block}`);
    else if (!/<h2[\s>]/.test(section[1])) fail(`${rel}: a(z) ${block} blokknak nincs címe`);
  }
  if (!bot.sourceUrl?.startsWith("https://x.ai/bot/marketplace/bots/")) fail(`${rel}: hibás forrás-URL a JSON-ban`);
  if (!html.includes(`href="${bot.sourceUrl}" data-source-link`)) fail(`${rel}: nincs forráslink a Forrás blokkban`);
  if (!html.includes(`lekérve: ${bot.fetched}`)) fail(`${rel}: nincs lekérési dátum`);
  if (!html.includes("Nem hivatalos")) fail(`${rel}: hiányzik a nem hivatalos jelölés`);
  if (/<img\b/.test(html)) fail(`${rel}: kép (logó/avatár) nem kerülhet a bot-oldalra`);
  if (!bot.memory.count && !html.includes("A listing nem tartalmaz erről adatot.")) fail(`${rel}: a hiányzó memória nincs jelölve`);
  if (!bot.summaryHu) fail(`${rel}: nincs magyar összefoglaló`);
}
// Napoldalak: a naphoz kézzel címkézett (bot.days) összes bot linkje kint van, felső korlát nélkül.
// Nem minden botnak kell napoldalon szerepelnie: a címke nélküli botok csak a katalógusban vannak.
const dayPages = [...byRel.keys()]
  .map((rel) => rel.match(/^5-nap\/(\d)-nap-[^/]+\/index\.html$/))
  .filter(Boolean);
for (const m of dayPages) {
  const n = Number(m[1]);
  const html = await readFile(byRel.get(m[0]), "utf8");
  const section = html.match(/<section[^>]*aria-labelledby="ajanlott-botok"[^>]*>([\s\S]*?)<\/section>/);
  const expected = marketplace.filter((bot) => bot.days.includes(n));
  if (!expected.length) continue;
  if (!section) {
    fail(`${m[0]}: hiányzik az ajánlott botok blokkja`);
    continue;
  }
  const linked = new Set([...section[1].matchAll(/href="\/marketplace\/([^"/]+)\/"/g)].map((x) => x[1]));
  for (const bot of expected) if (!linked.has(bot.slug)) fail(`${m[0]}: nem linkeli a naphoz ajánlott botot: ${bot.slug}`);
  for (const slug of linked) {
    const bot = marketplace.find((b) => b.slug === slug);
    if (bot && !bot.days.includes(n)) fail(`${m[0]}: olyan botot linkel, amely nincs ehhez a naphoz címkézve: ${slug}`);
  }
}
for (const bot of marketplace) {
  for (const n of bot.days) {
    if (!dayPages.some((m) => Number(m[1]) === n)) fail(`${bot.slug}: nem létező napra címkézve: ${n}`);
  }
}

for (const rel of byRel.keys()) {
  const m = rel.match(/^marketplace\/([^/]+)\/index\.html$/);
  if (m && !marketplace.some((bot) => bot.slug === m[1])) fail(`Árva bot-oldal: ${rel}`);
}

// Közösségi botsablonok: minden sablonnak saját oldal, a kötelező blokkokkal és mindkét forráslinkkel.
const templates = JSON.parse(await readFile(path.join(root, "src/content/community-templates.json"), "utf8"));
const tplBlocks = ["leiras", "memoria", "skillek", "rutinok", "integraciok", "forras"];
const tplMissing = "A listing nem tartalmaz erről adatot.";
const tplIndex = byRel.has("sablonok/index.html") ? await readFile(byRel.get("sablonok/index.html"), "utf8") : "";
if (!tplIndex.includes("Nem hivatalos")) fail("sablonok/index.html: hiányzik a nem hivatalos jelölés");
if (!tplIndex.includes('"@type":"ItemList"')) fail("sablonok/index.html: hiányzik az ItemList JSON-LD");
const slugs = new Set();
for (const item of templates) {
  const rel = `sablonok/${item.slug}/index.html`;
  if (slugs.has(item.slug)) fail(`Ismétlődő sablon-slug: ${item.slug}`);
  slugs.add(item.slug);
  if (/grok/i.test(item.slug)) fail(`${rel}: a slugban nem szerepelhet a Grok szó`);
  if (!byRel.has(rel)) {
    fail(`Hiányzó sablon-oldal: ${rel}`);
    continue;
  }
  if (!tplIndex.includes(`href="/sablonok/${item.slug}/"`)) fail(`sablonok/index.html: nem linkeli: ${item.slug}`);
  const html = await readFile(byRel.get(rel), "utf8");
  for (const block of tplBlocks) {
    const section = html.match(new RegExp(`<section[^>]*data-block="${block}"[^>]*>([\\s\\S]*?)</section>`));
    if (!section) fail(`${rel}: hiányzó blokk: ${block}`);
    else if (!/<h2[\s>]/.test(section[1])) fail(`${rel}: a(z) ${block} blokknak nincs címe`);
  }
  if (!/^https:\/\/x\.com\/[^/]+\/status\/\d+$/.test(item.postUrl ?? "")) fail(`${rel}: hibás X-poszt URL a JSON-ban`);
  if (!item.templateUrl?.startsWith("https://x.ai/bot/")) fail(`${rel}: hibás sablon-URL a JSON-ban`);
  if (!/^@\w+$/.test(item.handle ?? "")) fail(`${rel}: hibás handle a JSON-ban`);
  if (Number.isNaN(Date.parse(item.postedAt))) fail(`${rel}: hibás közzétételi időpont a JSON-ban`);
  if (!html.includes(`href="${item.templateUrl}" data-source-link`)) fail(`${rel}: nincs sablonlink a Forrás blokkban`);
  if (!html.includes(`href="${item.postUrl}" data-post-link`)) fail(`${rel}: nincs X-poszt link a Forrás blokkban`);
  if (!html.includes(`lekérve: ${item.fetched}`)) fail(`${rel}: nincs lekérési dátum`);
  if (!html.includes("budapesti idő")) fail(`${rel}: a közzététel ideje nincs budapesti időben jelölve`);
  if (!html.includes("Nem hivatalos")) fail(`${rel}: hiányzik a nem hivatalos jelölés`);
  if (/<img\b/.test(html)) fail(`${rel}: kép (logó/avatár) nem kerülhet a sablon-oldalra`);
  for (const field of ["memory", "skills", "routines", "integrations"]) {
    if (!(item[field]?.length) && !html.includes(tplMissing)) fail(`${rel}: a hiányzó ${field} nincs jelölve`);
  }
  if (!item.summaryHu) fail(`${rel}: nincs magyar összefoglaló`);
}
for (const rel of byRel.keys()) {
  const m = rel.match(/^sablonok\/([^/]+)\/index\.html$/);
  if (m && !templates.some((item) => item.slug === m[1])) fail(`Árva sablon-oldal: ${rel}`);
}

// Hivatalos x.ai sablonok: minden JSON-elem kártyaként kint van, valódi x.ai telepítő linkkel vagy „hiányzik” jelöléssel,
// forráslinkkel, ismert kategóriában; a két sablonoldal egymásra mutat.
const officialCats = [
  "General",
  "Sales",
  "Marketing",
  "Customer Success & Support",
  "Recruiting & People",
  "Operations & Finance",
  "Product",
  "Engineering",
  "Life & Leverage",
];
const official = JSON.parse(await readFile(path.join(root, "src/content/official-templates.json"), "utf8"));
const offHtml = byRel.has("hivatalos-sablonok/index.html") ? await readFile(byRel.get("hivatalos-sablonok/index.html"), "utf8") : "";
if (official.length === 0) fail("Az official-templates.json üres.");
if (!offHtml.includes("data-official-note") || !offHtml.includes("Nem hivatalos")) fail("hivatalos-sablonok/index.html: hiányzik a nem hivatalos összefoglaló jelölés");
if (!offHtml.includes('"@type":"ItemList"')) fail("hivatalos-sablonok/index.html: hiányzik az ItemList JSON-LD");
if (!offHtml.includes('href="/sablonok/"')) fail("hivatalos-sablonok/index.html: nem linkeli a közösségi sablonokat");
if (!tplIndex.includes('href="/hivatalos-sablonok/"')) fail("sablonok/index.html: nem linkeli a hivatalos sablonokat");
const offSlugs = new Set();
for (const item of official) {
  const where = `hivatalos-sablonok: ${item.slug}`;
  if (offSlugs.has(item.slug)) fail(`${where}: ismétlődő slug`);
  offSlugs.add(item.slug);
  if (/grok/i.test(item.slug)) fail(`${where}: a slugban nem szerepelhet a Grok szó`);
  if (!officialCats.includes(item.category)) fail(`${where}: ismeretlen kategória: ${item.category}`);
  if (!item.summaryHu || !item.descriptionQuote) fail(`${where}: hiányzó összefoglaló vagy eredeti leírás`);
  if (!item.sourceUrl?.startsWith("https://x.ai/bot/")) fail(`${where}: hibás forrás-URL`);
  const card = offHtml.match(new RegExp(`<li[^>]*data-official="${item.slug}"[^>]*>([\\s\\S]*?)</li>`));
  if (!card) {
    fail(`${where}: nincs kártya az oldalon`);
    continue;
  }
  if (item.installUrl) {
    if (!/^https:\/\/x\.ai\/bot\/[A-Za-z0-9_-]+$/.test(item.installUrl)) fail(`${where}: hibás telepítő URL`);
    if (!card[1].includes(`href="${item.installUrl}" data-install-link`)) fail(`${where}: nincs telepítő link a kártyán`);
  } else if (!card[1].includes("Telepítő link: hiányzik")) fail(`${where}: a hiányzó telepítő link nincs jelölve`);
  if (!card[1].includes("data-source-link")) fail(`${where}: nincs forráslink a kártyán`);
  for (const rel of item.relatedMarketplace ?? []) {
    if (!marketplace.some((bot) => bot.slug === rel.slug)) fail(`${where}: nem létező Marketplace-bot: ${rel.slug}`);
  }
}

// Tiltott kifejezés: a „use case” / „use-case” / „felhasználási eset” nem szerepelhet a megjelenő szövegben.
// Kivétel: URL-ek, HTML-attribútumok és a szó szerinti (blockquote) idézetek.
const bannedTerm = /\buse[\s-]?cases?\b|felhasználási\s+eset/i;
for (const [rel, file] of byRel) {
  if (!/\.(html|txt|xml|md)$/.test(rel)) continue;
  let text = await readFile(file, "utf8");
  text = text
    .replace(/<blockquote[\s\S]*?<\/blockquote>/g, " ")
    .replace(/\s[a-z-]+="[^"]*"/gi, " ")
    .replace(/https?:\/\/\S+/g, " ");
  const hit = text.match(bannedTerm);
  if (hit) fail(`${rel}: tiltott kifejezés a szövegben: „${hit[0]}”`);
}

// Hivatalos útmutatók: minden kártya az eredeti x.ai útmutatóra linkel, és a Grok-blokk jelöli, hogy nem Grok Bot.
const guidesHtml = byRel.has("utmutatok/index.html") ? await readFile(byRel.get("utmutatok/index.html"), "utf8") : "";
const guideCards = [...guidesHtml.matchAll(/data-guide="([^"]+)"/g)].map((m) => m[1]);
if (guideCards.length === 0) fail("utmutatok/index.html: nincs útmutató-kártya");
if (new Set(guideCards).size !== guideCards.length) fail("utmutatok/index.html: ismétlődő útmutató");
for (const slug of guideCards) {
  if (!guidesHtml.includes(`href="https://x.ai/bot/guides/${slug}" data-guide-link`)) fail(`utmutatok/index.html: nincs eredeti link: ${slug}`);
}
if (!guidesHtml.includes("Nem hivatalos")) fail("utmutatok/index.html: hiányzik a nem hivatalos jelölés");
if (!guidesHtml.includes("nem a Grok Botról")) fail("utmutatok/index.html: a Grok use-case blokk nincs elkülönítve a Grok Bottól");
if (!guidesHtml.includes("lekérve")) fail("utmutatok/index.html: nincs lekérési dátum");

// Haladó útmutatók: minden oldalon forráslista szerzővel, dátummal és forrástípussal; belinkelve az 5. napról; külön menüpont, NEM a hivatalos /utmutatok/ oldalon.
const advancedHtml = byRel.has("halado/index.html") ? await readFile(byRel.get("halado/index.html"), "utf8") : "";
const advancedSlugs = [...advancedHtml.matchAll(/data-advanced="([^"]+)"/g)].map((m) => m[1]);
if (advancedSlugs.length === 0) fail("halado/index.html: nincs haladó útmutató-kártya");
for (const slug of advancedSlugs) {
  const rel = `halado/${slug}/index.html`;
  if (!byRel.has(rel)) {
    fail(`Hiányzó haladó oldal: ${rel}`);
    continue;
  }
  const html = await readFile(byRel.get(rel), "utf8");
  const section = html.match(/<section[^>]*data-advanced-sources[^>]*>([\s\S]*?)<\/section>/);
  if (!section) {
    fail(`${rel}: nincs forráslista`);
    continue;
  }
  const items = [...section[1].matchAll(/<li data-source-kind="(gyartoi|hivatalos|kozossegi)"[^>]*>([\s\S]*?)<\/li>/g)];
  if (items.length === 0) fail(`${rel}: a forrásoknak nincs típusjelölése`);
  for (const item of items) {
    if (!/href="https:\/\//.test(item[2])) fail(`${rel}: forrás link nélkül`);
    if (!/\d{4}-\d{2}-\d{2}/.test(item[2])) fail(`${rel}: forrás dátum nélkül`);
  }
  if (!items.some((item) => item[1] !== "hivatalos")) fail(`${rel}: nincs szerzői (gyártói vagy közösségi) forrás`);
  if (/agentcore/i.test(html)) fail(`${rel}: AgentCore-hivatkozás nem kerülhet az oldalra`);
  if (!html.includes("data-own-guides") || !html.includes("nem hivatalos x.ai anyagok")) fail(`${rel}: hiányzik a „saját, nem hivatalos x.ai” jelölés`);
}
const day5 = byRel.get("5-nap/5-nap-masodik-bot-biztonsag/index.html");
if (day5 && !(await readFile(day5, "utf8")).includes('href="/halado/"')) fail("Az 5. nap nem linkeli a haladó útmutatókat");
if (!advancedHtml.includes("data-own-guides") || !advancedHtml.includes("nem hivatalos x.ai anyagok")) fail("halado/index.html: hiányzik a „saját, nem hivatalos x.ai” jelölés");
const guidesMain = (guidesHtml.match(/<main[^>]*>([\s\S]*?)<\/main>/) || ["", guidesHtml])[1];
if (/href="\/halado\/|data-advanced-block/.test(guidesMain)) fail("utmutatok/index.html: a hivatalos útmutatók oldalán nem lehet haladó (saját) útmutató-blokk vagy link");
if (!/<nav class="nav"[^>]*>[\s\S]*?<a href="\/halado\/" aria-current="page">\s*Haladó\s*<\/a>[\s\S]*?<\/nav>/.test(advancedHtml)) fail("halado/index.html: nincs „Haladó” menüpont a fő navigációban");

let canonicalOrigin = "";
const external = new Set();

for (const file of htmlFiles) {
  const rel = path.relative(dist, file).split(path.sep).join("/");
  const html = await readFile(file, "utf8");
  const report = await htmlvalidate.validateString(html, file);
  if (!report.valid) {
    for (const result of report.results) {
      for (const message of result.messages) {
        fail(`${rel}:${message.line}:${message.column} ${message.ruleId} ${message.message}`);
      }
    }
  }

  if (!html.includes('lang="hu"')) fail(`${rel}: hiányzik a lang="hu"`);
  const h1 = html.match(/<h1[\s>]/g) ?? [];
  if (h1.length !== 1) fail(`${rel}: ${h1.length} db h1`);
  if (!html.includes("<title>") || !html.includes('name="description"')) fail(`${rel}: cím vagy leírás hiányzik`);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  if (!canonical) fail(`${rel}: nincs canonical`);
  else {
    const origin = new URL(canonical[1]).origin;
    canonicalOrigin ||= origin;
    if (origin !== canonicalOrigin) fail(`${rel}: eltérő canonical origin`);
  }

  if (rel !== "404.html") {
    const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    if (blocks.length === 0) fail(`${rel}: nincs JSON-LD`);
    for (const block of blocks) {
      try {
        const data = JSON.parse(block[1]);
        if (!data["@type"]) fail(`${rel}: JSON-LD @type nélkül`);
      } catch {
        fail(`${rel}: a JSON-LD nem értelmezhető`);
      }
    }
  }

  if (html.includes("fonts.googleapis") || html.includes("googletagmanager") || html.includes("google-analytics")) {
    fail(`${rel}: külső betű vagy követő`);
  }

  if (html.includes('data-newsletter-provider="noop"')) {
    if (!html.includes("még nincs bekötve")) fail(`${rel}: a noop magyarázat hiányzik`);
    if (/<form\b[^>]*data-newsletter-provider="noop"/.test(html)) fail(`${rel}: a noop űrlap form elemet küldene`);
    const consent = html.match(/<input[^>]*name="consent"[^>]*>/);
    if (!consent) fail(`${rel}: nincs hozzájáruló négyzet`);
    else if (/\schecked(?:=|\s|>)/.test(consent[0])) fail(`${rel}: a hozzájárulás előre be van jelölve`);
  }

  for (const match of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const href = match[1];
    if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) continue;
    if (href.startsWith("http://") || href.startsWith("https://")) {
      let parsed;
      try {
        parsed = new URL(href);
      } catch {
        fail(`${rel}: érvénytelen URL: ${href}`);
        continue;
      }
      if (canonicalOrigin && parsed.origin === canonicalOrigin) {
        const pathname = parsed.pathname;
        const target =
          pathname === "/" ? "index.html" : pathname.endsWith("/") ? `${pathname.slice(1)}index.html` : pathname.slice(1);
        if (!byRel.has(target)) fail(`${rel}: törött belső link ${href} → ${target}`);
        continue;
      }
      external.add(stripHash(href));
      continue;
    }
    if (!href.startsWith("/")) {
      fail(`${rel}: nem gyökér-abszolút link: ${href}`);
      continue;
    }
    const pathname = href.split("#")[0].split("?")[0];
    const target = pathname === "/" ? "index.html" : pathname.endsWith("/") ? `${pathname.slice(1)}index.html` : pathname.slice(1);
    if (!byRel.has(target)) fail(`${rel}: törött belső link ${href} → ${target}`);
  }
}

const secretFiles = files.filter((file) => !file.includes(`${path.sep}og.png`));
for (const file of secretFiles) {
  const text = await readFile(file, "utf8");
  if (/BEGIN (RSA |OPENSSH )?PRIVATE KEY/.test(text) || /api[_-]?key\s*[:=]\s*['"][^'"]+['"]/i.test(text)) {
    fail(`Gyanús titok a kimenetben: ${path.relative(dist, file)}`);
  }
}

const source = await readFile(path.join(root, "site.config.mjs"), "utf8");
if (!source.includes('provider: "noop"') || !source.includes('formAction: ""')) {
  fail("A site.config.mjs nem a noop, üres űrlapcímes alapállapot.");
}

const queue = [...external];
const blocked = [];
// A GitHub-hosztolt futó IP-jét néhány hivatalos oldal (pl. a grokbot.com Vercel
// botvédelme) 403-mal utasítja el, miközben a link böngészőből él. Ez nem törött
// link: a 401/403/429 figyelmeztetés, a 404 és a többi 4xx/5xx hiba marad.
const refusedStatuses = new Set(["401", "403", "429"]);

async function probe(url) {
  let last = "nincs válasz";
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const response = await fetch(url, {
        redirect: "follow",
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
          accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "accept-language": "hu,en;q=0.8",
        },
        signal: AbortSignal.timeout(20000),
      });
      if (response.status < 400) return;
      last = String(response.status);
    } catch (error) {
      last = error instanceof Error ? error.message : "hiba";
    }
  }
  if (refusedStatuses.has(last)) {
    blocked.push(`${last} ${url}`);
    return;
  }
  fail(`Külső link nem érhető el (${last}): ${url}`);
}

for (let index = 0; index < queue.length; index += 4) {
  await Promise.all(queue.slice(index, index + 4).map((url) => probe(url)));
}

if (errors.length) {
  console.error(errors.join("\n"));
  console.error(`\n${errors.length} hiba.`);
  process.exit(1);
}

if (blocked.length) {
  console.warn(`A futó környezetét a hoszt elutasította, a link ettől még a lapokon marad:\n${blocked.join("\n")}`);
}

console.log(
  `Rendben: ${htmlFiles.length} HTML, ${external.size} külső link, ${blocked.length} elutasított ellenőrzés, origin ${canonicalOrigin}.`,
);
