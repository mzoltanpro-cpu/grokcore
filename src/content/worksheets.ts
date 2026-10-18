import { community } from "./community";
import { days } from "./days";
import { docs } from "./docs";
import type { Worksheet } from "./types";

/**
 * Letölthető gyakorlólapok, naponta egy. Ugyanebből az adatból készül a nyomtatható
 * HTML (/gyakorlolapok/<slug>/) és a Markdown (/gyakorlolapok/<slug>.md).
 * Szabály: a saját promptjaink „sajat” jelölést kapnak; felhasználói idézet csak
 * szerzővel és linkkel; a hivatalos dokumentáció szövege „hivatalos”.
 */
const user = (key: keyof typeof community) => ({ author: community[key].handle, url: community[key].url });

const raw: Omit<Worksheet, "slug" | "title">[] = [
  {
    day: 1,
    intro: "Telepítési ellenőrzőlista és belépési hibaelhárítás. Pipáld ki, ami kész.",
    checklist: [
      {
        heading: "Mielőtt letöltöd",
        items: [
          "Megnéztem, hogy a csomagom tartalmazza-e a Grok Botot (Cursor GYIK: X Subscription Premium, Super, Ultra; régebbi Cursor Pro, Pro+, Ultra, Teams).",
          "Tudom, hogy a próba egy kreditösszeg, és egy nagy feladat elviheti (Cursor GYIK).",
          "[ELLENŐRIZENDŐ: forintár, ÁFA; az „X Unified” csomag pontos neve és letöltési linkje]",
        ],
      },
      {
        heading: "Telepítés és belépés",
        items: [
          "Letöltöttem a desktop appot (termékoldal: x.ai/bot; a Cursor GYIK szerint a telepítő: cursor.com/dashboard/bot).",
          "Telepítettem: macOS → Applications; Windows → telepítő; Linux → .deb, .rpm vagy AppImage.",
          "Sign in → a böngészőben befejeztem a hitelesítést (a Cursor-fiókommal).",
          "Settings → Language → Hungarian (0.58.0 óta; mobil: [ELLENŐRIZENDŐ]).",
          "Feltettem az első kérdést.",
        ],
      },
    ],
    prompts: [
      {
        origin: "sajat",
        label: "Első kérdés",
        code: `Mire tudsz nekem segíteni? Röviden rólam: [mivel foglalkozol].
Naponta ezeket az appokat használom: [pl. Gmail, Google Naptár].
Javasolj három kis, biztonságos első feladatot, amit ma kipróbálhatok.`,
      },
    ],
    troubleshooting: [
      {
        problem: "A belépés visszadob a bejelentkező oldalra, vagy „Access blocked” jön.",
        fix: "A Cursor GYIK szerint: frissítsd az appot, jelentkezz ki és be; töröld a cursor.com és az x.ai sütijeit, és próbáld privát ablakban; ha a telefon hurkol, előbb asztali gépen lépj be; új hibánál várj 30–60 percet. Az újratelepítés általában nem segít.",
      },
      {
        problem: "Nem találom a magyar nyelvet.",
        fix: "Settings → Language. A changelog szerint a 0.58.0-s verziótól (2026-09-22) érhető el; ha nincs, frissíts.",
      },
    ],
    sources: [
      { title: "Grok Bot GYIK (cursor.com)", url: docs.faqCursor },
      { title: "Get started (cursor.com)", url: docs.startCursor },
      { title: "x.ai/bot", url: docs.productCanonical },
      { title: "Grok Bot changelog", url: docs.changelog },
      { title: `${community.alyce.handle} – belépési hurok`, url: community.alyce.url },
      { title: "r/GrokBot – Access Blocked", url: community.redditBlocked.url },
    ],
  },
  {
    day: 2,
    intro: "Öt első kérés appokkal. Mind csak olvas vagy vázlatot ír: semmit nem küld és nem töröl.",
    checklist: [
      {
        heading: "Bekötés",
        items: [
          "Connect apps → Gmail → Add → hitelesítés a böngészőben.",
          "Connect apps → Google Naptár → Add.",
          "Egy Botnál maradok; a connectorok úgyis az egész fiókra szólnak.",
          "Ha egy weboldal jelszót kér: Take over → beírom → I'm done. A jelszót nem írom a chatbe.",
        ],
      },
    ],
    prompts: [
      {
        origin: "sajat",
        label: "1. Mai levelek",
        code: `@Gmail Foglald össze a mai leveleimet öt pontban: ki írt, mit kér, és kell-e
válaszolnom. Csak olvass: ne küldj, ne törölj, ne archiválj semmit.`,
      },
      {
        origin: "sajat",
        label: "2. Mai naptár",
        code: `@Google Calendar Mi van ma a naptáramban? Jelezd, ha két esemény ütközik,
vagy ha két megbeszélés között nincs szünet. Semmit ne módosíts.`,
      },
      {
        origin: "sajat",
        label: "3. Válaszvázlat",
        code: `Keresd meg a legfontosabb megválaszolatlan levelemet, és írj rá rövid,
udvarias válaszvázlatot magyarul. Ne küldd el; mutasd meg nekem.`,
      },
      {
        origin: "sajat",
        label: "4. Heti előretekintés",
        code: `Nézd át a jövő heti naptáramat és az ehhez kapcsolódó leveleket. Sorold fel,
mire kell felkészülnöm, megbeszélésenként egy sorban.`,
      },
      {
        origin: "felhasznalo",
        label: "5. Saját e-mail-cím a Botnak",
        code: `Claim an email inbox for me.`,
        ...user("debs"),
      },
    ],
    troubleshooting: [
      {
        problem: "A Bot böngészője nem tud belépni a Google-fiókba (pl. 1Passworddel).",
        fix: "A Cursor fórum szálában a támogatás azt javasolta: egyszer lépj be kézzel a Google-ba a Bot képernyőjén; a Bot böngészője általában megtartja ezt a munkamenetet. Ahol van connector, azt használd böngészés helyett.",
      },
    ],
    sources: [
      { title: "Use the computer and apps (docs.x.ai)", url: docs.apps },
      { title: `${community.poteto.handle} – először a napi appok`, url: community.poteto.url },
      { title: `${community.texas.handle} – előbb plugin`, url: community.texas.url },
      { title: "Cursor fórum – Google-belépés 1Passworddel", url: community.cursorForum1p.url },
      { title: `${community.debs.handle} – e-mail-cím a Botnak`, url: community.debs.url },
    ],
  },
  {
    day: 3,
    intro: "Három példa-feladat kész prompttal, plusz egy hivatalos, kockázatmentes első próba. Válassz egyet.",
    checklist: [
      {
        heading: "A jó kérés öt eleme (docs.x.ai, Get started)",
        items: [
          "Outcome – mi legyen kész?",
          "Sources – mely appok, oldalak, fájlok számítanak?",
          "Constraints – mit kerüljön, mi előtt kérdezzen?",
          "Deliverable – mit adjon vissza?",
          "Review point – hol álljon meg, hogy átnézd?",
        ],
      },
    ],
    prompts: [
      {
        origin: "felhasznalo",
        label: "A) Inbox-rendrakás – az ötlet egy felhasználótól",
        code: `sort my inbox every morning and draft replies for me to approve.`,
        ...user("binbin"),
      },
      {
        origin: "sajat",
        label: "A) Inbox-rendrakás – a mi magyar változatunk, egyszeri próbára",
        code: `Nézd át a beérkezett leveleimet az elmúlt 24 órából. Csoportosítsd őket:
sürgős, válaszolni kell, csak tájékoztató, hírlevél. A „válaszolni kell”
csoportba írj rövid válaszvázlatot. Semmit ne küldj el, ne törölj és ne
archiválj; a végén állj meg, és mutasd meg a listát.`,
      },
      {
        origin: "sajat",
        label: "B) Marketplace-figyelés – a mi mintánk",
        code: `Keress a Facebook Marketplace-en [termék] hirdetéseket [város] környékén,
[összeg] Ft alatt. Adj vissza legfeljebb 5 találatot: ár, állapot, link, és
egy mondat, miért jó ajánlat. Eladónak ne írj; ha érdemes, írj üzenetvázlatot,
és azt én küldöm el.`,
      },
      {
        origin: "sajat",
        label: "C) X-fiók elemzés – a mi mintánk",
        code: `Elemezd az X-fiókom (@[felhasználónév]) utolsó 100 bejegyzését. Mekkora
arányban vannak válaszok és saját posztok? Melyik öt hozta a legtöbb
megjelenést, és mi a közös bennük? Adj három konkrét javaslatot.
Ne posztolj, ne kedvelj és ne válaszolj semmire.`,
      },
      {
        origin: "hivatalos",
        label: "D) Dokumentum-összefoglaló – hivatalos első próba",
        code: `Summarize this document in five bullets. List every date, decision, and
open question in a separate section, and cite the section for each item.
Don't change the source file.`,
        url: docs.startCursor,
      },
    ],
    troubleshooting: [
      {
        problem: "Túl sokat akartam egyszerre, és szétesett.",
        fix: `${community.binbin.handle}: „Start with step 1 for a week before adding more.” Egy feladat, vázlattal, és csak utána a következő.`,
      },
    ],
    sources: [
      { title: "Get started (docs.x.ai)", url: docs.start },
      { title: "Get started (cursor.com)", url: docs.startCursor },
      { title: `${community.binbin.handle} – inbox-rendrakás`, url: community.binbin.url },
      { title: `${community.offred.handle} – Marketplace-figyelés`, url: community.offred.url },
      { title: `${community.lizhenrong.handle} – X-fiók elemzés`, url: community.lizhenrong.url },
    ],
  },
  {
    day: 4,
    intro: "Routine-recept és kerettakarékos tippek. Előbb kézzel, utána teszt, csak aztán ütemezés.",
    checklist: [
      {
        heading: "Routine-recept",
        items: [
          "1. Egyszer kézzel lefuttattam a chatben, és jó lett.",
          "2. Skillként elmentettem (a / jellel hívom elő).",
          "3. Megadtam: időpont, időzóna, elvárt eredmény, mi legyen, ha nincs új adat.",
          "4. Test run biztonságos bemenettel (a teszt valódi munkát végez).",
          "5. Csak ezután kapcsoltam be az ütemezést.",
        ],
      },
      {
        heading: "Kerettakarékos tippek",
        items: [
          "Kevés, ritkább routine-nal kezdek (@gusmacca: „go easy on routines”).",
          "Az első napokban futásonként megnézem, mennyit fogyott. [ELLENŐRIZENDŐ: a keret pontos menüpontja]",
          "Ha a Bot nem válaszol, először a keretet nézem meg (r/GrokBot).",
          "A próba egy kreditösszeg; egy nagy feladat elviheti (Cursor GYIK).",
        ],
      },
    ],
    prompts: [
      {
        origin: "felhasznalo",
        label: "Reggeli AI-hír routine (Daily → 08:00, majd Run now once)",
        code: `Search web + X for last 24h AI news. 5–8 items. Headline, why it matters,
link. Primary sources only. Impact > virality. 3-bullet must-know on top.
Under 400 words.`,
        ...user("rachit"),
      },
      {
        origin: "sajat",
        label: "Magyar reggeli összefoglaló – a mi mintánk",
        code: `Most egyszer, kézzel: keresd meg a weben és az X-en az elmúlt 24 óra
[téma] híreit. 5 tétel: cím, egy mondat, miért fontos, link. Csak elsődleges
forrás. Ha nincs új, írd egy sorban, hogy nincs. Ha jó lett, mentsd el
skillként „Reggeli összefoglaló” néven, de még ne ütemezd.`,
      },
      {
        origin: "felhasznalo",
        label: "Haladó: brief minden értékesítési hívás előtt (részlet)",
        code: `Before every sales call in my calendar, automatically prepare and send me a
pre-call brief 15 minutes before the meeting. Review the CRM, previous emails,
meeting history and any other relevant information you have access to. …
Keep it concise. Only include information that will help me on the call.`,
        ...user("fenech"),
      },
    ],
    troubleshooting: [
      {
        problem: "Az ütemezett futás rossz eredményt ad.",
        fix: `${community.cyb3r.handle}: „Most Grok Bot automations break because they get scheduled before they've ever worked once by hand.” Állítsd szünetre, futtasd kézzel, javítsd, és csak utána kapcsold vissza.`,
      },
    ],
    sources: [
      { title: "Skills and routines (docs.x.ai)", url: docs.skills },
      { title: "Grok Bot GYIK (cursor.com)", url: docs.faqCursor },
      { title: `${community.rachit.handle} – reggeli AI-hír prompt`, url: community.rachit.url },
      { title: `${community.cyb3r.handle} – előbb kézzel`, url: community.cyb3r.url },
      { title: `${community.fenech.handle} – pre-call brief`, url: community.fenech.url },
      { title: `${community.gusmacca.handle} – keret és routine-ok`, url: community.gusmacca.url },
      { title: "r/GrokBot – My Grok Bot is unresponsive", url: community.redditUnresponsive.url },
    ],
  },
  {
    day: 5,
    intro: "„Kell-e új Bot?” döntési lap és biztonsági ellenőrzőlista.",
    checklist: [
      {
        heading: "Kell-e új Bot? (docs.x.ai, Create and manage Bots)",
        items: [
          "Más a célja, mint a meglévő Botjaimnak?",
          "Más eszközök kellenek hozzá?",
          "Más munkastílust vagy jóváhagyási határt kér?",
          "Saját ismétlődő ütemezése van?",
          "Ha mind nem: maradok a meglévő Botnál. Ha igen: előbb megnézem, nem fedi-e le már egy meglévő Bot (duplikátum).",
        ],
      },
      {
        heading: "Biztonsági ellenőrzőlista",
        items: [
          "Settings → General → Auto-review: van legalább egy szűk Ask first szabályom (pl. külső e-mail előtt kérdezzen).",
          "Küldés, publikálás, vásárlás, törlés előtt a Bot jóváhagyást kér.",
          "Tudom: a Botok közös gépet, böngészőt és belépéseket használnak, a külön Bot nem biztonsági határ.",
          "Csak oda lépek be a Bot gépén, ahol minden Botomban megbízom.",
          "A már nem használt connectort eltávolítom.",
        ],
      },
    ],
    prompts: [
      {
        origin: "felhasznalo",
        label: "Új Bot dr eggbottal (Grok Bot > Marketplace > add \"dr eggbot\")",
        code: `make me a bot to help with <category of thing>`,
        ...user("mana"),
      },
      {
        origin: "sajat",
        label: "Duplikátum-ellenőrzés – a mi mintánk",
        code: `Szeretnék egy új Botot erre: [feladat]. Mielőtt létrehoznánk: van-e már
olyan Botom, amelyik ezt lefedi? Ha van, javasold, hogyan bővítsük azt.
Ha nincs, írj az új Botnak rövid nevet, egy fő feladatot és egy leírást,
benne egy „jóváhagyásom nélkül soha” szabállyal.`,
      },
      {
        origin: "hivatalos",
        label: "Szűk szabály-példák a dokumentációból",
        code: `Ask first before sending any external email.
Ask first before changing a production dashboard.`,
        url: docs.approve,
      },
    ],
    troubleshooting: [
      {
        problem: "Minden apróságra jóváhagyást kér, és megakad a munka.",
        fix: "A dokumentáció szerint egy szűk, ismert lépésre szóló Allow automatically szabály segít; ha egy Ask first és egy Allow automatically is illeszkedik, az Ask first nyer.",
      },
    ],
    sources: [
      { title: "Create and manage Bots (docs.x.ai)", url: docs.bots },
      { title: "Approvals, security, and privacy (docs.x.ai)", url: docs.approve },
      { title: "Use the computer and apps (docs.x.ai)", url: docs.apps },
      { title: `${community.mana.handle} – dr eggbot`, url: community.mana.url },
      { title: `${community.dhivagar.handle} – duplikátum`, url: community.dhivagar.url },
      { title: `${community.pgenius.handle} – túl sok jóváhagyás`, url: community.pgenius.url },
    ],
  },
];

/**
 * A forrásszövegben csak olvashatóság miatt tördeltük a promptokat. Másoláshoz a
 * puszta sortörést szóközre cseréljük, a mondatvégi sortörés (külön tétel) marad.
 */
function unwrap(code: string): string {
  return code.replace(/([^.?!…:\n])\n(?=\S)/g, "$1 ");
}

export const worksheets: Worksheet[] = raw.map((sheet) => {
  const day = days.find((item) => item.n === sheet.day);
  if (!day) throw new Error(`Nincs ${sheet.day}. nap a gyakorlólaphoz`);
  return {
    ...sheet,
    prompts: sheet.prompts.map((prompt) => ({ ...prompt, code: unwrap(prompt.code) })),
    slug: day.slug,
    title: `Gyakorlólap – ${day.title}`,
  };
});

export function worksheetPath(slug: string): string {
  return `/gyakorlolapok/${slug}/`;
}

export function worksheetMdPath(slug: string): string {
  return `/gyakorlolapok/${slug}.md`;
}

export const originLabel = {
  sajat: "Saját példánk, nem felhasználói idézet",
  felhasznalo: "Felhasználói idézet, eredeti nyelven",
  hivatalos: "Hivatalos dokumentáció, eredeti nyelven",
} as const;

export function worksheetMarkdown(sheet: Worksheet, origin: string): string {
  const day = days.find((item) => item.n === sheet.day)!;
  const out: string[] = [
    `# ${sheet.title}`,
    "",
    `Botkezdő – Kezdő 5 nap. Független, nem hivatalos magyar útmutató. Oldal: ${origin}/5-nap/${day.slug}/`,
    "",
    `**A mai feladat:** ${day.task}`,
    "",
    sheet.intro,
    "",
  ];
  for (const group of sheet.checklist) {
    out.push(`## ${group.heading}`, "");
    for (const item of group.items) out.push(`- [ ] ${item}`);
    out.push("");
  }
  out.push("## Kész promptok", "");
  for (const prompt of sheet.prompts) {
    out.push(`### ${prompt.label}`, "", `_${originLabel[prompt.origin]}${prompt.author ? ` – ${prompt.author}` : ""}${prompt.url ? `: ${prompt.url}` : ""}_`, "");
    out.push("```", prompt.code, "```", "");
  }
  out.push("## Ha elakadsz", "");
  for (const item of sheet.troubleshooting) out.push(`- **${item.problem}** ${item.fix}`);
  out.push("", "## Források", "");
  for (const source of sheet.sources) out.push(`- ${source.title}: ${source.url}`);
  out.push(
    "",
    "A [ELLENŐRIZENDŐ] jelölésű pontokat még nem tudtuk nyilvános forrásból megerősíteni. A felület feliratai változhatnak.",
    "",
  );
  return out.join("\n");
}
