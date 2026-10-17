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
