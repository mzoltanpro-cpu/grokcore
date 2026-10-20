import { docs, marker } from "./docs";
import type { Block, Step } from "./types";

/**
 * Haladó útmutatók a Kezdő 5 nap után. Saját magyar szöveg; nem fordítás.
 * Minden állítás egy itt felsorolt forrásból jön; a forrást mi magunk nyitottuk meg (2026-10-19).
 * Eredeti promptot csak ott idézünk, ahol a forrás maga közli, szó szerint.
 * Ami a hivatalos dokumentációban nem szerepel, és mi sem próbáltuk ki, marker()-t kap.
 */
export const advancedFetched = "2026-10-19";
const seoFetched = "2026-10-20";

export type AdvancedSource = {
  title: string;
  url: string;
  /** Szerző vagy kiadó, ahogy a forráson szerepel. */
  author: string;
  /** Közzététel napja (X-posztnál budapesti idővel). */
  date: string;
  /** gyartoi: xAI-munkatárs írta; hivatalos: docs.x.ai; kozossegi: nem gyártói felhasználó. */
  kind: "gyartoi" | "hivatalos" | "kozossegi";
};

export type AdvancedGuide = {
  slug: string;
  title: string;
  nav: string;
  card: string;
  description: string;
  lead: string;
  audience: string;
  minutes: string;
  /** Ha az útmutató forrásait nem az advancedFetched napon kértük le. */
  fetched?: string;
  steps: Step[];
  blocks: Block[];
  sources: AdvancedSource[];
};

export const sourceKindLabel: Record<AdvancedSource["kind"], string> = {
  gyartoi: "Gyártói forrás: xAI-munkatárs írta",
  hivatalos: "Hivatalos dokumentáció",
  kozossegi: "Közösségi forrás, nem gyártói",
};

const src = {
  pms: {
    title: "Grok Bot for PMs (x.ai, angol)",
    url: "https://x.ai/bot/guides/grok-bot-for-pms",
    author: "Kevin Niparko",
    date: "2026-08-15",
    kind: "gyartoi",
  },
  teams: {
    title: "How I run multiple teams of Grok Bots (x.ai, angol)",
    url: "https://x.ai/bot/guides/how-i-run-multiple-teams-of-grok-bots",
    author: "Eric Zakariasson",
    date: "2026-08-27",
    kind: "gyartoi",
  },
  work: {
    title: "Grok Bot for Work (x.ai, angol)",
    url: "https://x.ai/bot/guides/grok-bot-for-work",
    author: "Josh Kim",
    date: "2026-09-24",
    kind: "gyartoi",
  },
  eng: {
    title: "Grok Bot for Engineering (x.ai, angol)",
    url: "https://x.ai/bot/guides/grok-bot-for-engineering",
    author: "Lingxi Li",
    date: "2026-09-10",
    kind: "gyartoi",
  },
  team: {
    title: "„Grok Bot: How to Build Your First AI Team (Full Guide)” (X-cikk, angol)",
    url: "https://x.com/distortgeekin/status/2108897917729738810",
    author: "@distortgeekin",
    date: "2026-10-10 14:30 (budapesti idő)",
    kind: "kozossegi",
  },
  handoff: {
    title: "„How to Build Anything with Grok Bot (Full Course)” (X-cikk, angol)",
    url: "https://x.com/Av1dlive/status/2111125320590074017",
    author: "@Av1dlive",
    date: "2026-10-16 18:01 (budapesti idő)",
    kind: "kozossegi",
  },
  clock: {
    title: "„Grok Bot: A Routine Every 5 Minutes…” (X-cikk, angol)",
    url: "https://x.com/gippp69/status/2109235458383216811",
    author: "@gippp69",
    date: "2026-10-11 12:51 (budapesti idő)",
    kind: "kozossegi",
  },
  brain: {
    title: "„How to build a Second Brain that actually does the work (Grok Bot full course)” (X-cikk, angol)",
    url: "https://x.com/Argona0x/status/2110045296902164532",
    author: "@Argona0x",
    date: "2026-10-13 18:29 (budapesti idő)",
    kind: "kozossegi",
  },
  seo: {
    title: "„Top 20 Grok Bot Prompts For SEO - The Only Stack You'll Ever Need” (X-cikk, angol)",
    url: "https://x.com/bloggersarvesh/status/2090071557590900974",
    author: "Sarvesh Shrivastava (@bloggersarvesh)",
    date: "2026-08-19",
    kind: "kozossegi",
  },
  dBots: { title: "Create and manage Bots (docs.x.ai)", url: docs.bots, author: "docs.x.ai", date: "lekérve 2026-10-19", kind: "hivatalos" },
  dSkills: { title: "Skills and routines (docs.x.ai)", url: docs.skills, author: "docs.x.ai", date: "lekérve 2026-10-19", kind: "hivatalos" },
  dApprove: { title: "Approvals, security, and privacy (docs.x.ai)", url: docs.approve, author: "docs.x.ai", date: "lekérve 2026-10-19", kind: "hivatalos" },
  dApps: { title: "Use the computer and apps (docs.x.ai)", url: docs.apps, author: "docs.x.ai", date: "lekérve 2026-10-19", kind: "hivatalos" },
  dSettings: { title: "Settings and notifications (docs.x.ai)", url: docs.settings, author: "docs.x.ai", date: "lekérve 2026-10-19", kind: "hivatalos" },
  dFaq: { title: "Frequently asked questions (docs.x.ai)", url: docs.faq, author: "docs.x.ai", date: "lekérve 2026-10-19", kind: "hivatalos" },
  dAppsSeo: { title: "Use the computer and apps (docs.x.ai)", url: docs.apps, author: "docs.x.ai", date: `lekérve ${seoFetched}`, kind: "hivatalos" },
  dFaqSeo: { title: "Frequently asked questions (docs.x.ai)", url: docs.faq, author: "docs.x.ai", date: `lekérve ${seoFetched}`, kind: "hivatalos" },
} satisfies Record<string, AdvancedSource>;

/** Rövid hivatkozás a szövegben: szerző + link. */
function c(key: keyof typeof src): string {
  const s = src[key];
  return `<a href="${s.url}">${s.author}</a>`;
}
const vendor = "gyártói forrás";

export const advancedGuides: AdvancedGuide[] = [
  {
    slug: "botcsapat",
    title: "Első botcsapatod: bejárati bot, szakértők, közös tábla",
    nav: "Botcsapat",
    card: "Több Botból csapat: egy Bot, akivel beszélsz, néhány szakértő, egy tábla és egy jóváhagyási kapu.",
    description:
      "Hogyan szervezd csapattá a Grok Botjaidat: bejárati bot, szakértő botok, közös tábla, rutinok és jóváhagyási kapu, az xAI-munkatársak útmutatói alapján. Haladó útmutató a Kezdő 5 nap után.",
    lead: "Ha már két-három Botod van, és egyre több chatablakot kell végigolvasnod, itt az ideje csapattá szervezni őket. Ez az oldal azt foglalja össze, hogyan építik fel a saját botcsapatukat a Grok Bot fejlesztői, és hogyan rakhatod össze ugyanezt kicsiben.",
    audience: "Annak szól, aki végigment a Kezdő 5 napon, és már legalább két Botot használ.",
    minutes: "Kb. 45 perc, a mi becslésünk",
    steps: [
      {
        name: "Nevezz ki egy bejárati Botot",
        text: "A legtöbbet használt Botod lesz az egyetlen, akivel beszélsz. A leírásába írd bele, hogy továbbítja a kéréseket a megfelelő szakértőnek, ellenőrzi az eredményt, és csendben marad, ha nincs újdonság.",
      },
      {
        name: "Válogasd szét a munkát terület szerint",
        text: "Írd fel, mi mindent csinál most a fő Botod, és csoportosítsd terület szerint. A két legnagyobb csoportból lesz az első két szakértő. Egy új feladatra elég egy skill, saját Bot csak egy új területnek kell, saját memóriával.",
      },
      {
        name: "Készíts egy közös táblát",
        text: "Egy táblázat vagy fájl a Bot gépén: feladat, felelős, állapot (Todo, Working, Blocked, Ready for Review, Done). Mondd meg minden Botnak, hogy egy feladat csak akkor kész, ha a táblán is az, és ha elakad, Blockedra állítja és szól.",
      },
      {
        name: "Indíts kevés rutint",
        text: "Kezdetben elég egy reggeli összefoglaló a bejárati Bottól és egy ritka táblaátnézés. Mindegyiket előbb Test runnal próbáld ki biztonságos adaton.",
      },
      {
        name: "Írd le a kapu szabályait",
        text: "Settings → General → Auto-review: Ask first a küldésre, vásárlásra, törlésre, közzétételre és az éles rendszerek módosítására. Allow automatically csak egy szűk, már sokszor jóváhagyott lépésre kerüljön.",
      },
    ],
    blocks: [
      { type: "h2", text: "Mikor kell egyáltalán csapat?" },
      {
        type: "p",
        html: `Az 5. napon már láttad a dokumentáció ökölszabályát: akkor kell külön Bot, ha a munkának saját célja, eszközei, munkastílusa, jóváhagyási határa vagy ütemezése van. A dokumentáció ehhez hozzáteszi, hogy a legkisebb hasznos csapattal kezdj: egy Bot feleljen egy teljes eredményért, és újat csak akkor vegyél fel, ha a munkában tartósan van egy külön szakértői szerep. (<a href="${docs.bots}">Create and manage Bots</a>)`,
      },
      {
        type: "p",
        html: `${c("pms")} (${vendor}) három okot ír a szétosztásra: tudod, ki mit csinál, a Botok párhuzamosan dolgoznak, és mindegyiknek a saját munkájához illő memóriája van. A harmadikat egy mondattal szemlélteti: „Chief of Staff should not be debugging computer-use evals.” ${c("eng")} (${vendor}) szerint a Botjai akkor a legjobbak, ha egyetlen területre figyelnek.`,
      },
      {
        type: "p",
        html: `Egy hasznos próba ${c("team")} (közösségi) cikkéből: egy új <em>feladatra</em> elég egy skill, egy új <em>terület</em> saját memóriával már Botot kíván. Ez összhangban van a dokumentációval: a privát skillek egyetlen közös könyvtárat alkotnak, amelyet minden Botod használhat. (<a href="${docs.skills}">Skills and routines</a>)`,
      },
      { type: "h2", text: "A csapat öt része" },
      {
        type: "p",
        html: `A felosztás ${c("team")} cikkéből való, aki az xAI-munkatársak nyilvános útmutatóiból rakta össze. A példákat ezért az eredeti útmutatókból idézzük.`,
      },
      {
        type: "table",
        caption: "A botcsapat öt része és példák a forrásokból",
        headers: ["Rész", "Mit csinál", "Példa a forrásokban"],
        rows: [
          [
            "Bejárati Bot",
            "Az egyetlen Bot, akivel beszélsz. Továbbít és ellenőriz, a munkát nem ő végzi.",
            `${c("work")} Bot Bossa („single front door”), ${c("pms")} Chief of Staffja („The only generalist. Stays quiet if nothing changed.”) (mindkettő ${vendor})`,
          ],
          [
            "Szakértők",
            "Mindegyiknek egy területe és saját memóriája van.",
            `${c("pms")}: egy mérnökvezető Bot, amely nem kódol, csak lebontja és kiosztja a munkát öt mérnök Botnak, valamint adatelemző, PM- és toborzó Bot. ${c("eng")}: öt mérnök Bot felületenként és egy nem kódoló operatív Bot. (${vendor})`,
          ],
          [
            "Közös tábla",
            "A munka állapota egy helyen van, nem a chatben görgetve.",
            `${c("teams")}: két Notion-adatbázis (Projects, Tasks), projektenként egy csatorna. Az elakadt Bot Blockedra állítja a feladatot és szól. (${vendor})`,
          ],
          [
            "Óra",
            "Rutinok viszik előre a munkát, akkor is, ha nem vagy gépnél.",
            `${c("eng")}: hajnali 5-kor az operatív Bot egyenként átnézi a szabálykönyvet minden Bottal. (${vendor}) A ritmusról külön oldal szól: <a href="/halado/rutinok-ritmusa/">Rutinok okosan</a>.`,
          ],
          [
            "Kapu",
            "Te döntöd el, mi hagyhatja el a rendszert.",
            `${c("pms")}: külső e-mail, vásárlás és törlés előtt ő nézi át. ${c("work")}: az Inbox Manager csak olvas, és csak akkor küld, ha abban a pillanatban begépeli, hogy „send”. (${vendor})`,
          ],
        ],
      },
      { type: "h2", text: "Lépések" },
      { type: "steps" },
      { type: "h2", text: "Hány Bot legyen egy csapatban?" },
      {
        type: "p",
        html: `${c("teams")} (${vendor}) projektenként egy menedzser Botot használ, és ezeket a szabályokat adta neki: előbb a meglévő Botokat (kódoló, kutató, író) kell bevonni, a menedzser mellett legfeljebb öt Bot lehet egy csatornában, új Bot pedig csak akkor készül, ha egyik sem illik a feladathoz, és ő igent mondott. A hatos plafont maga is önkényes számnak nevezi. Új Botot a New → Create new Bot menüvel vagy a dr eggbottal hozhatsz létre, ahogy az <a href="/5-nap/5-nap-masodik-bot-biztonsag/">5. napon</a> láttad.`,
      },
      {
        type: "p",
        html: `Tapasztalata szerint minél tovább építi, annál jobban hasonlít egy emberekre tervezett szervezetre: tábla, vezető, feladatokat vállaló szakértők, Blocked oszlop, csatorna.`,
      },
      {
        type: "p",
        html: `Tábla helyett egy fájl is elég lehet: ${c("handoff")} (közösségi forrás, a módszert nem próbáltuk ki) egy közös HANDOFF.md fájlon adatja át a munkát, amelyet minden Bot elolvas, kiegészít a saját részével, és elakadáskor BLOCKED jelzést ír bele, majd szól.`,
      },
      { type: "h2", text: "Eredeti promptok a forrásokból" },
      {
        type: "prompt",
        label: "Kevin Niparko: figyelemlista (attention list), eredeti",
        code: "Create an attention list: every hour, review email, Slack, Granola, and calendar and create a succinct set of projects I'm focused on and their current state, what needs to happen next.",
        caption: `Forrás: ${c("pms")}, ${src.pms.date} (${vendor}). A figyelemlista azt tartja frissen, mivel foglalkozol ténylegesen, és a bejárati Bot ezzel szűri a beérkezőket. A prompt nem ír jóváhagyásról; a szerző máshol rögzíti, hogy külső e-mail, vásárlás és törlés előtt ő dönt.`,
      },
      {
        type: "prompt",
        label: "Josh Kim: Bot Boss, eredeti",
        code: "You are Bot Boss, the single front door for my bot team: route my asks and the specialists' reports through one stream (Inbox Manager, Calendar EA, Intel Scout) so I never talk to them directly; never invent urgency, never invent facts; QG every artifact before it ships; quiet on noop; draft then wait for my approval on any send or calendar write; morning board is themes, priorities, and one impact play, afternoon is non-obvious only; clocks stay Disabled until I hit Enable; you are hub and spoke EA, not a builder and not an auditor.",
        caption: `Forrás: ${c("work")}, ${src.work.date} (${vendor}). Az útmutató az Inbox Manager, a Calendar EA és az Intel Scout teljes promptját is közli.`,
      },
      {
        type: "prompt",
        label: "@distortgeekin: bejárati Bot, eredeti",
        code: "You are my Chief of Staff and the only bot I talk to. Route every request to the specialist that owns it, collect the result, check it against what I asked for, and report back in five lines. Stay silent if nothing changed.",
        caption: `Forrás: ${c("team")}, ${src.team.date} (közösségi forrás). Jóváhagyási szabályt nem tartalmaz; a cikk ezt egy későbbi lépésben, külön szabályként adja hozzá.`,
      },
      {
        type: "prompt",
        label: "Saját példánk, nem a forrásokból",
        code: "Mostantól te vagy a csapatom bejárati Botja. Minden kérésemnél írd le egy mondatban, melyik Botom felel érte, add át neki, majd ellenőrizd az eredményt azzal szemben, amit kértem. A feladatokat vezesd a /workspace/csapat/tabla.md fájlban (Feladat, Felelős, Állapot). Semmit ne küldj el, ne vásárolj, ne törölj és ne tegyél közzé az igenem nélkül. Ha nincs újdonság, ne írj.",
      },
      {
        type: "note",
        html: `<strong>A külön Bot nem biztonsági határ.</strong> A dokumentáció szerint minden Botod ugyanazt a felhős gépet, fájlokat, böngészőt és belépéseket használja. A szétosztás a fókuszt és a memóriát szolgálja, a biztonságot a jóváhagyási szabályok adják. (<a href="${docs.approve}">Approvals</a>, <a href="${docs.faq}">FAQ</a>)`,
      },
      { type: "h2", text: "Tipikus buktatók" },
      {
        type: "ul",
        items: [
          `<strong>Ugyanaz a Bot ötször.</strong> Öt egyforma általános Bot nem csapat: nincs külön terület és memória, csak több a fogyasztás. (${c("team")})`,
          `<strong>A bejárati Bot maga kezd dolgozni.</strong> Akkor senki nem irányít és senki nem ellenőriz. Josh Kim promptja ki is mondja: „not a builder and not an auditor”. (${c("work")})`,
          `<strong>Túl tág indító esemény.</strong> A dokumentáció óv az olyan triggertől, amely minden új üzenetre elindul: zajt csap, és fogyasztja a keretet. (<a href="${docs.skills}">Skills and routines</a>)`,
        ],
      },
      {
        type: "p",
        html: `<strong>Az eredményekről.</strong> A gyártói útmutatók számai a szerzők saját beszámolói: ${src.pms.author} szerint a Grok Bot a csapatuk összefésült belső PR-jainak két számjegyű százalékát adja, ${src.eng.author} szerint 15 helyett most már több mint 200 felhőágenst kezel egyszerre. Független mérés egyikről sincs.`,
      },
      {
        type: "done",
        items: [
          "Van egy bejárati Botod, legfeljebb két-három szakértőd, egy közös táblád, és leírtad, mi nem mehet ki a rendszerből az igened nélkül.",
        ],
      },
    ],
    sources: [src.pms, src.teams, src.work, src.eng, src.team, src.handoff, src.dBots, src.dSkills, src.dApprove, src.dFaq],
  },
  {
    slug: "rutinok-ritmusa",
    title: "Rutinok okosan: ritmus, változásfigyelés, éjszakai futás",
    nav: "Rutinok ritmusa",
    card: "Milyen gyakran fusson egy rutin, mikor jobb egy esemény, és mi lesz éjjel a jóváhagyásokkal.",
    description:
      "Grok Bot routine-ok ütemezése: esemény vagy ütemezés, olcsó változásellenőrzés, éjszakai futás jóváhagyás nélkül, saját futásnapló. A docs.x.ai-n ellenőrzött tényekkel. Haladó útmutató a Kezdő 5 nap után.",
    lead: "A 4. napon láttad, hogy minden futás fogyasztja a keretet. Ez az oldal abban segít, hogy eldöntsd, milyen gyakran fusson egy rutin, mikor ne is ütemezd, és mi történjen, ha éjjel a jóváhagyásodra lenne szükség.",
    audience: "Annak szól, akinek már van legalább egy működő routine-ja (a 4. napról).",
    minutes: "Kb. 30 perc, a mi becslésünk",
    steps: [
      {
        name: "Nézd meg, mi indíthatná eseményből",
        text: "Ha a forrás tud jelezni (Slack-üzenet, GitHub-értesítés), ütemezés helyett egy szűk feltételű triggert használj.",
      },
      {
        name: "Válaszd a leglassabb elfogadható ütemet",
        text: "Gyorsítani csak akkor gyorsíts, ha egy valódi lemaradás bebizonyította, hogy túl lassú.",
      },
      {
        name: "A gyakori rutin elé tegyél egy gyors ellenőrzést",
        text: "Először csak azt nézze meg, változott-e valami. A teljes munka csak akkor induljon, ha igen.",
      },
      {
        name: "Döntsd el előre az éjszakai befejezést",
        text: "Vagy szűk Allow automatically szabály, vagy piszkozatnál megáll. Arra ne építs, hogy éjjel majd megvárja az igened.",
      },
      {
        name: "Vezettess futásnaplót",
        text: "Minden futás írjon egy sort egy fájlba a /workspace mappában. Hetente nézd át, melyik rutin fut szinte mindig változás nélkül.",
      },
    ],
    blocks: [
      {
        type: "p",
        html: `A fő forrás ${c("clock")} közösségi cikke (nem gyártói). Minden Grok Bot-tényt a hivatalos dokumentációban is megkerestünk. Amit nem találtunk meg benne, azt jelöltük.`,
      },
      { type: "h2", text: "Miért számít az ütemezés?" },
      {
        type: "p",
        html: `Egy chat egyszer fogyaszt, egy routine viszont minden indulásnál, akkor is, ha semmi nem történt. A legtöbb rutin ellenőrzés (változott-e egy oldal, eltört-e a build, válaszolt-e valaki), és a válasz többnyire nem. Ha kétszer olyan gyakran fut, kétszer annyit fogyaszt, de ritkán ér kétszer annyit. Ez ${c("clock")} gondolatmenete. A cikkben szereplő költségszámokat nem vesszük át, mert a szerző saját becslései API-árak alapján, nem mért Grok Bot-számlák.`,
      },
      {
        type: "p",
        html: `A tényleges fogyasztást a beállításokban látod: a Usage &amp; Billing a heti keretet mutatja, és a fiókmenüben a Weekly usage is megjelenhet. (<a href="${docs.settings}">Settings and notifications</a>)`,
      },
      { type: "h2", text: "Esemény vagy ütemezés?" },
      {
        type: "p",
        html: `A dokumentáció szerint egy routine ütemezve indul, vagy ahol ez támogatott, egy esemény után. Eseményt a Cursor-fiók integrációi tudnak küldeni, például egy Slack-üzenetnél vagy egy GitHub-értesítésnél. Ezek nem azonosak a Slack- és GitHub-pluginnal, és saját bekötést igényelhetnek. A feltétel legyen szűk, és a dokumentáció kifejezetten óv a tág figyelőktől: „Avoid broad listeners such as “every new message.”” (<a href="${docs.skills}">Skills and routines</a>)`,
      },
      {
        type: "prompt",
        label: "Hivatalos dokumentáció: szűk eseményindító, eredeti",
        code: "When a message in #customer-escalations contains a support ticket link and the phrase “needs repro,” open the ticket, reproduce the issue in staging, and post a repro pack in this conversation. Never post back to Slack without approval.",
        caption: `Forrás: <a href="${docs.skills}">Skills and routines</a> (docs.x.ai), lekérve ${advancedFetched}.`,
      },
      {
        type: "p",
        html: `A cikk további eseményforrásokat is említ: webhookot saját URL-lel és kulccsal, valamint e-mailt a Bot saját címére. Azt is írja, hogy egyetlen pull requestet figyelő GitHub-rutin a merge vagy a lezárás után magától megszűnik. ${marker("webhook- és e-mail-trigger, valamint az egy PR-t figyelő rutin önálló megszűnése: a docs.x.ai Skills and routines oldalán nem találtuk")}`,
      },
      { type: "h2", text: "Milyen gyakran?" },
      {
        type: "p",
        html: `A dokumentáció keretei: egy Botnak legfeljebb 50 routine-ja lehet, és két ütemezett futás között legalább öt percnek el kell telnie. (<a href="${docs.skills}">Skills and routines</a>) A cikk szerzőjének kiinduló javaslatai, nem hivatalos ajánlás:`,
      },
      {
        type: "table",
        caption: "Kiinduló ütemek @gippp69 javaslata szerint",
        headers: ["Feladat", "Javasolt ütem"],
        rows: [
          ["CI- és PR-állapot egy aktív repóban", "15 percenként"],
          ["Beérkezők átnézése", "óránként"],
          ["Versenytársak oldalai, dokumentáció", "naponta egyszer"],
          ["Riportok, táblaátnézés", "egyszer, a megszokott időpontban"],
          ["Auditok", "éjjel egyszer"],
        ],
      },
      { type: "h2", text: "Gyors ellenőrzés a gyakori rutin előtt" },
      {
        type: "p",
        html: `Ha tényleg gyakran kell futnia, és nincs esemény, amire várhatna, bontsd két lépésre. Az első lépés csak egy apró jelet olvas (hash, darabszám, időbélyeg), és egy szóval válaszol. A második, a valódi munka, csak akkor indul, ha az első változást talált. A szerző szerint fontos kimondani, hogy az első lépésben a Bot ne nézzen körül, különben minden futás teljes futás lesz. Hozzáteszi, hogy azt maga sem tesztelte, mennyire tartja magát ehhez a Bot, ezért pár napig a naplóban érdemes ellenőrizni. (${c("clock")})`,
      },
      {
        type: "prompt",
        label: "Saját példánk, nem a forrásból",
        code: "Ez a routine két részből áll. 1) Nyisd meg a https://pelda.hu/arak oldalt, és csak az oldal fő táblázatának sorait számold meg. Hasonlítsd össze a /workspace/figyeles/arak-utolso.txt fájlban lévő számmal, és válaszolj egy szóval: VÁLTOZOTT vagy UGYANAZ. Mást ne nézz meg. 2) Csak ha VÁLTOZOTT: írd le három sorban, mi lett más, és mentsd piszkozatként nekem. Semmit ne küldj el. Minden futás végén írj egy sort a /workspace/figyeles/naplo.txt fájlba: időpont, eredmény.",
        caption: "A pelda.hu a saját figyelt oldalad helyére kerül. Előbb Test runnal próbáld ki.",
      },
      { type: "h2", text: "Éjjel nincs, aki jóváhagyjon" },
      {
        type: "p",
        html: `A dokumentáció szerint az olyan munkából érkező jóváhagyás, amelyet nem te indítottál (routine, trigger vagy egy másik Bot üzenete), kb. 10 perc után lejár. A kártyán ekkor Expired áll, és a művelet nem fut le. Egy lejárt kártya felajánlhatja az <strong>Always allow this in the future</strong> lehetőséget: ez felveszi a szabályt az Allow automatically szabályok közé, de a lejárt műveletet nem futtatja le. (<a href="${docs.approve}">Approvals</a>)`,
      },
      {
        type: "p",
        html: `Ezért minden rutinnál, amely nélküled fut, előre döntsd el a befejezést. Ha a lépés biztonságos és visszafordítható, kapjon egy szűk Allow automatically szabályt. Ha nem, a rutin piszkozatnál álljon meg, és reggel te döntesz. A szabályok beállítását az <a href="/5-nap/5-nap-masodik-bot-biztonsag/">5. napon</a> mutattuk meg.`,
      },
      { type: "h2", text: "Saját futásnapló" },
      {
        type: "p",
        html: `Az app routine-onként a 20 legutóbbi futás adatait őrzi meg. (<a href="${docs.skills}">Skills and routines</a>) Egy ötpercenkénti rutinnál ez másfél óránál alig több, így egy éjszakai hiba nyoma reggelre eltűnhet. A szerző ezért azt javasolja, hogy minden rutin a végén írjon egy sort a saját naplófájljába. Tartós fájlokat a dokumentáció szerint a közös <code>/workspace</code> mappába érdemes tenni. (<a href="${docs.apps}">Use the computer and apps</a>) Hetente nézd át: ami szinte mindig „nincs változás”, azt ritkítsd vagy töröld.`,
      },
      { type: "h2", text: "Mi igazolt, mi nem?" },
      {
        type: "table",
        caption: "A cikk állításai a hivatalos dokumentációval összevetve (lekérve 2026-10-19)",
        headers: ["Állítás", "Állapot"],
        rows: [
          [`A Test run valódi munkát végez: weboldalakat nyit, fájlokat módosít, csatolt eszközöket hív.`, `Igazolt (<a href="${docs.skills}">Skills and routines</a>)`],
          [`Botonként legfeljebb 50 routine, futások között min. 5 perc, routine-onként 20 futásrekord.`, `Igazolt (<a href="${docs.skills}">Skills and routines</a>)`],
          [`Hosszabb távollét után a Grok Bot megkérdezheti, futtassa-e tovább a rutinokat, és válasz nélkül szüneteltetheti őket.`, `Igazolt (<a href="${docs.skills}">Skills and routines</a>)`],
          [`A háttérből érkező jóváhagyás kb. 10 perc után lejár.`, `Igazolt (<a href="${docs.approve}">Approvals</a>)`],
          [`Ha routine futása közben üzensz a Botnak, a routine utána még egyszer lefut.`, marker("a szerző a changelogra hivatkozik, a docs.x.ai-n nem találtuk")],
          [`Az óránkénti, időközönkénti és napi ütemezés a létrehozás időpontjától számít.`, marker("a docs.x.ai-n nem találtuk")],
          [`Kimaradt futást ne várj pótlásra; minden futás az utolsó sikeres óta történteket dolgozza fel.`, `A szerző saját tervezési szabálya. A dokumentáció ehhez hasonlót ajánl: ahol lehet, legyen az újrapróbálás megismételhető (idempotens). (<a href="${docs.skills}">Skills and routines</a>)`],
        ],
      },
      {
        type: "done",
        items: [
          "Minden rutinodról tudod, miért ilyen gyakran fut, a gyakoriak előtt van egy gyors ellenőrzés, az éjszakaiak befejezése előre el van döntve, és van futásnaplód.",
        ],
      },
    ],
    sources: [src.clock, src.dSkills, src.dApprove, src.dApps, src.dSettings],
  },
  {
    slug: "masodik-agy",
    title: "Második agy fájlokból, reggeli oldallal",
    nav: "Második agy",
    card: "Egy Bot, amely fájlokban tartja, amit rólad és a munkádról tudnia kell, és reggel egy oldalon összefoglal.",
    description:
      "Személyes tudásbázis Grok Bottal: fájl rólad, mappaszerkezet, éjszakai iktatás, reggeli oldal, skillek és szabályfájl. Adatvédelmi figyelmeztetéssel. Haladó útmutató a Kezdő 5 nap után.",
    lead: "A Bot memóriája rövid összefoglalókat őriz. Ami hosszabb távon kell, azt érdemes fájlba írni a Bot gépén, mert az szó szerint megmarad, és minden Botod el tudja olvasni. @Argona0x közösségi cikke hét lépésben építi fel egy „Brain” nevű Botból a személyes tudásbázist. Itt röviden, magyarul vesszük végig, a dokumentációval összevetve.",
    audience: "Annak szól, aki a 2. napon már bekötötte a levelezését és a naptárát, és egy Botot személyes asszisztensként használ.",
    minutes: "Kb. 45 perc az első lépésekre, a mi becslésünk",
    steps: [
      {
        name: "Egy fájl rólad",
        text: "A Bot leírja, kikkel dolgozol, miket szoktál vállalni, és hogyan írsz. A szerző ehhez húsz elküldött levelet ad a Botnak; adatvédelmi szempontból kíméletesebb, ha a Bot inkább kikérdez téged (lásd a saját példánkat).",
      },
      {
        name: "Mappaszerkezet",
        text: "A lassan változó tények (ki kicsoda, hogyan dolgozol) fájlba kerülnek. A gyorsan változókat (állapot, dátum, összeg) a Bot minden futáskor a forrásban nézi meg újra.",
      },
      {
        name: "Iktatás",
        text: "A Gmailben egy címkével jelölöd, amit érdemes megtartani, és egy éjszakai rutin besorolja ezeket a mappába.",
      },
      {
        name: "Reggeli oldal",
        text: "Naponta egy oldal a naptárral és azzal, amivel ténylegesen foglalkozol, a beérkezők helyett.",
      },
      {
        name: "Skillek",
        text: "Ami egyszer jól sikerült (egy terv, egy válaszlevél), azt skillként menteni, és a / jellel újra elővenni.",
      },
      {
        name: "Szabályfájl",
        text: "Minden javításod egy fájlba kerül, amelyet a Bot minden feladat előtt újraolvas. A szerző heti egy összefoglalót is kér arról, mit döntöttél el.",
      },
      {
        name: "Egyben",
        text: "A cikk utolsó lépése egyetlen üzenettel építteti fel az egészet, és minden routine előtt a te igenedet kéri.",
      },
    ],
    blocks: [
      {
        type: "note",
        html: `<strong>Adatvédelem (GDPR) előre.</strong> Az elküldött és a címkézett leveleidben más emberek, például ügyfelek és kollégák személyes adatai is benne vannak. Ha ezeket a Bot fájlokba gyűjti, az adatkezelés. Munkahelyi postafióknál előbb nézd meg a munkáltatód szabályait, ügyfelek adatait pedig csak akkor dolgoztasd fel, ha erre jogalapod van. Különleges adat (egészség, jelszó, bankkártya) ne kerüljön a fájlokba. A fájlok a közös felhős gépen vannak, és minden Botod látja őket. (<a href="${docs.apps}">Use the computer and apps</a>, <a href="${docs.approve}">Approvals</a>) Ez nem jogi tanács; kétség esetén kérdezd meg az adatvédelmi tisztviselőt, vagy nézd meg a <a href="${docs.naih}">NAIH</a> oldalát.`,
      },
      { type: "h2", text: "Miért fájl, és nem memória?" },
      {
        type: "p",
        html: `A dokumentáció szerint a Bot megjegyzi a tartós beállításokat, a fontos tényeket és a korábbi munkák összefoglalóit, de a memória nem helyettesíti a hiteles forrást. A változó tények maradjanak a forrásrendszerben, és fontos döntésnél a Bot nyissa meg újra az aktuális adatot. (<a href="${docs.bots}">Create and manage Bots</a>) A tartós fájlokat a közös <code>/workspace</code> mappába érdemes tenni, és minden Botod olvashatja őket. (<a href="${docs.apps}">Use the computer and apps</a>) A cikk erre épít: a „második agy” egy mappa, nem a chat.`,
      },
      { type: "h2", text: "A hét lépés" },
      { type: "steps" },
      {
        type: "p",
        html: `Az 1. lépés ötlete ${c("pms")} (${vendor}) útmutatójából jön, aki ezt tartja a leghasznosabb utasításnak, amit kipróbált: „Read my past Slack messages and develop a Slack style guide for me”. Az 5. lépés sorrendje a dokumentációé: előbb egyszer elvégezni, megbízhatóvá tenni, skillként menteni, és csak utána automatizálni. (<a href="${docs.skills}">Skills and routines</a>) A 6. lépés ${c("eng")} (${vendor}) szabálykönyvére hasonlít, amelyet az operatív Botja minden reggel átnéz a többiekkel.`,
      },
      { type: "h2", text: "Takarékosan a rutinokkal" },
      {
        type: "p",
        html: `A szerző szerint naponta csak néhány futás legyen, mert egy óránkénti rutin akár egy nap alatt elhasználhatja a heti keret jelentős részét. Ez a szerző állítása, nem mért adat. A fogyasztást a Usage &amp; Billing alatt követheted. (<a href="${docs.settings}">Settings and notifications</a>) Az ütemezésről bővebben: <a href="/halado/rutinok-ritmusa/">Rutinok okosan</a>.`,
      },
      { type: "h2", text: "Eredeti és saját promptok" },
      {
        type: "prompt",
        label: "@Argona0x: az egész egyben, eredeti",
        code: "build the second brain this article describes, and wait for my yes before each routine.",
        caption: `Forrás: ${c("brain")}, ${src.brain.date} (közösségi forrás). A szerző ezt a sort a teljes cikk elé írva javasolja beilleszteni. A cikk többi promptja beágyazott blokkban van, ezeket nem tudtuk szövegként kiolvasni, ezért nem közöljük.`,
      },
      {
        type: "prompt",
        label: "Saját példánk, nem a forrásból",
        code: "Kérdezz ki engem egyenként, legfeljebb tíz kérdésben: miben dolgozom, kikkel (csak szerepkör, név nélkül), milyen visszatérő feladataim vannak, és hogyan szoktam írni (hossz, megszólítás, elköszönés, hangnem). A válaszaimból írd meg a /workspace/agy/rolam.md és a /workspace/agy/stilus.md fájlt. Mutasd meg mindkettőt, és állj meg. Rutint csak akkor hozz létre, ha előtte megkérdeztél, és igent mondtam.",
        caption: "Ez a változat nem kér leveleket, így kevesebb harmadik személyről szóló adat kerül a gépre.",
      },
      { type: "h2", text: "Amit nem ellenőriztünk" },
      {
        type: "ul",
        items: [
          `A cikk útmutató, nem beszámoló: a szerző nem közöl saját mért eredményt, mi sem próbáltuk ki a teljes felépítést.`,
          `A Main Bot cseréje a sidebar csillagos Botjára jobb kattintással (Replace with different Bot): ${marker("felület, a docs.x.ai-n nem találtuk")}`,
          `Megosztás iPhone-ról bármely appból a Brain chatbe (share menü → Grok Bot → Attach): ${marker("mobil megosztás menete")}`,
          `A cikk ár- és próbaidő-adatait nem vesszük át; ezekről az <a href="/5-nap/1-nap-letoltes-belepes/">1. nap</a> szól, forrással.`,
        ],
      },
      {
        type: "done",
        items: [
          "Van egy rolam.md és egy stilus.md fájlod, tudod, mi kerül fájlba és mit néz meg a Bot mindig a forrásban, és csak a te igeneddel indult rutin.",
        ],
      },
    ],
    sources: [src.brain, src.pms, src.eng, src.dBots, src.dApps, src.dSkills, src.dApprove, src.dSettings],
  },
  {
    slug: "seo-promptok",
    title: "Helyi SEO-promptok: egyszer az üzleti háttér, utána célzott feladatok",
    nav: "SEO-promptok",
    card: "Egy közösségi X-cikk összefoglalója: a vállalkozásod adatait egyszer adod meg, utána egyenként futtatsz helyi SEO-promptokat.",
    description:
      "Helyi SEO Grok Bottal: Sarvesh Shrivastava (@bloggersarvesh) 20 promptos X-cikkének magyar összefoglalója. Üzleti háttér egyszer, utána Google Business Profile, weboldal, backlinkek, tartalom és mérés. Haladó útmutató a Kezdő 5 nap után.",
    lead: "Ez az oldal egy más által írt cikk rövid magyar összefoglalója, nem saját módszer. Sarvesh Shrivastava (@bloggersarvesh) 2026-08-19-én közzétett X-cikke 20 promptot ad helyi vállalkozások keresőoptimalizálásához (local SEO). A lényeg: a vállalkozásod adatait egyszer adod meg a Botnak, utána egyenként, célzott feladatokat futtatsz.",
    audience: "Annak szól, akinek helyi vállalkozása van, vagy ilyennek intézi a keresőoptimalizálást, és már végigment a Kezdő 5 napon.",
    minutes: "Kb. 20 perc az oldal elolvasására, a mi becslésünk",
    fetched: seoFetched,
    steps: [
      {
        name: "Töltsd be egyszer az üzleti hátteret",
        text: "Másold ki a szerző business context promptját, a szögletes zárójeles részeket cseréld ki a saját adataidra, és küldd el a Botnak, mielőtt bármelyik SEO-promptot futtatnád.",
      },
      {
        name: "Egyszerre egy promptot futtass",
        text: "A szerző szerint ne futtasd mind a 20-at egyszerre. Az ő sorrendjében az első héten a háttér után az 1. és a 2. prompt jön (GBP-kategóriák és -attribútumok).",
      },
      {
        name: "Készítsd elő a böngészőt és a fiókokat",
        text: "Nézd meg, mit nyit meg a prompt. Ahol a saját fiókodba kell belépni (például Semrush, Ahrefs, Google Search Console), ott saját hozzáférés kell; a fizetős eszközökhöz saját előfizetés.",
      },
      {
        name: "Nézd át az eredményt, mielőtt változtatsz",
        text: "A promptok táblázatot, rangsorolt teendőlistát és szövegjavaslatot kérnek. Hogy ebből mi kerül ki a profilodra vagy a weboldaladra, azt te döntöd el.",
      },
    ],
    blocks: [
      {
        type: "note",
        html: `<strong>Összefoglaló, nem saját anyag.</strong> Ez az oldal ${c("seo")} „Top 20 Grok Bot Prompts For SEO - The Only Stack You'll Ever Need” című X-cikkét foglalja össze magyarul. Közzétéve: ${src.seo.date}. A 20 prompt teljes szövegét az <a href="${src.seo.url}">eredeti posztban</a> találod; itt négyet idézünk szó szerint, angolul. Lekérve: ${seoFetched}.`,
      },
      { type: "h2", text: "A módszer: egyszer a háttér, utána célzott promptok" },
      {
        type: "p",
        html: `A szerző azzal kezd, hogy mielőtt egyetlen SEO-promptot futtatnál, add meg a Botnak a vállalkozásod hátterét („load your business context”). Ehhez egy hosszú sablont ad, szögletes zárójeles kitöltendő részekkel: alapadatok (név, cím, telefon, weboldal, Google Business Profile), szolgáltatások és szolgáltatási területek, az öt fő kulcsszó, a jelenlegi helyzet (értékelések, látogatottság, map pack), három versenytárs, az eddigi SEO-munka, végül az, hogyan dolgozzon a Bot. Ez utóbbiban a gyors eredményeket kéri előre, minden javaslatnál hatásszintet és várható időt, a versenytársak összevetését táblázatban, és hogy a Bot szóljon, ha bizonytalan, ne találgasson.`,
      },
      {
        type: "p",
        html: `A szerző szerint ezután minden prompt pontosabb lesz, mert a Bot már a te vállalkozásodra válaszol, nem egy ismeretlen ember SEO-kérdésére. A célzott promptok mindegyike egyetlen feladatot végez (például egy kategória-auditot vagy egy profilleírás átírását), és a legtöbb összehasonlító táblázatot és rangsorolt teendőlistát kér.`,
      },
      {
        type: "prompt",
        label: "Sarvesh Shrivastava: üzleti háttér (business context), eredeti",
        code: "Here is everything you need to know about my business before we start any SEO work. Reference this every time I ask you to run an audit, build a strategy, or analyze competitors. Never ask me for this information again.  BUSINESS BASICS: Business name: [your business name] Address: [full address] Phone: [phone number] Website: [website URL] Google Business Profile: [GBP URL] Years in business: [X years]   Team size: [solo / small team / large team]  SERVICES + MARKET: Primary service: [what you do]   Secondary services: [service 2], [service 3], [service 4]   Service areas: [city 1], [city 2], [city 3], [city 4], [city 5]   Target customer: [who your best customer is] Average job value: [$X]  SEO GOALS: Top 5 keywords I want to rank for: [keyword 1], [keyword 2], [keyword 3], [keyword 4], [keyword 5]   Keywords I currently rank for: [keyword 1], [keyword 2] Keywords I should rank for but don't: [keyword 1], [keyword 2]  CURRENT STANDINGS: Google reviews: [X] total, [X] star rating, [X] new reviews per month   GBP monthly views: [X impressions if known] Monthly website traffic: [X visits if known] Current map pack status: [ranking for X, not ranking for Y] Biggest SEO problem right now: [one sentence - be honest]  COMPETITORS: [competitor name] - [GBP URL] - [website] - [why they're beating you if you know] [competitor name] - [GBP URL] - [website] - [why they're beating you if you know] [competitor name] - [GBP URL] - [website] - [why they're beating you if you know]  WHAT I'VE ALREADY TRIED: [List any SEO work already done - agency, DIY, tools used, what worked, what didn't]  HOW I WANT YOU TO WORK: Always prioritize quick wins over long-term plays unless i ask otherwise.   When you give me a recommendation, tell me the impact level (high/medium/low) and how long it will take to see results. Always output data in spreadsheet format when comparing competitors. When you're unsure about something, tell me - don't guess. Never ask me for this information again. Use it as the base for everything we do together.",
        caption: `Forrás: ${c("seo")}, ${src.seo.date} (közösségi forrás). A szögletes zárójeles részeket a saját adataiddal cseréld ki.`,
      },
      {
        type: "p",
        html: `A sablon azt kéri, hogy a Bot soha többé ne kérdezze meg ezeket az adatokat. A dokumentáció szerint fontos döntésnél érdemes a Botot az aktuális forrás ellenőrzésére kérni, ahelyett hogy a memóriájára hagyatkozna. (<a href="${docs.faq}">FAQ</a>) Saját javaslatunk: a gyorsan változó számokat (értékelések, helyezések) frissítsd, mielőtt egy újabb auditot futtatsz.`,
      },
      { type: "h2", text: "A négy rész röviden" },
      {
        type: "p",
        html: `A 20 prompt négy részre oszlik. Az alábbi összefoglalás a sajátunk, nem fordítás; a promptok szövege az eredeti cikkben van.`,
      },
      {
        type: "p",
        html: `<strong>1. rész: Google Business Profile (1–8. prompt).</strong> A Bot böngészőben megnyitja a versenytársak és többnyire a te Google Business Profile-odat (GBP), összehasonlító táblázatot készít, majd teendőlistát vagy kész szöveget ad.`,
      },
      {
        type: "ul",
        items: [
          `<strong>GBP category audit:</strong> három kulcsszóra megnézi a Google Mapsen, kik vannak a Map Packben, kigyűjti a fő és másodlagos kategóriáikat, és rangsorolja, melyiket érdemes felvenned.`,
          `<strong>GBP attributes audit:</strong> a profilokon látható attribútumok (például „free estimates”, „24/7 availability”) összevetése, a hiányzók három csoportban.`,
          `<strong>Competitor review teardown:</strong> a versenytársak utolsó 50 értékeléséből a friss értékelések száma 30, 60 és 90 napra, a gyakori szolgáltatások, helyek és panaszok, valamint olyan kifejezések, amelyeket érdemes az ügyfeleidtől kérni.`,
          `<strong>Review response strategy:</strong> a tulajdonosi válaszok elemzése, majd válaszsablonok csillagszám szerint, 40–80 szóban.`,
          `<strong>GBP posts strategy:</strong> a versenytársak posztolási szokásai, majd 8 hetes posztnaptár heti 2–3 poszttal.`,
          `<strong>Services section optimization:</strong> a szolgáltatások szakasz összevetése a versenytársakéval és a weboldaladdal, majd szolgáltatásleírások 40–60 szóban.`,
          `<strong>GBP description optimization:</strong> a profilleírások elemzése, majd három, 750 karakter alatti változat (kulcsszó-, konverzió- és bizalomközpontú).`,
          `<strong>GBP photo audit:</strong> a fotók száma, típusa és feltöltési üteme, majd 8 hetes fotóterv fotólistával, elnevezési szabállyal és geotagelési útmutatóval.`,
        ],
      },
      {
        type: "p",
        html: `<strong>2. rész: weboldal (9–13. prompt).</strong> Kulcsszavak, meglévő és hiányzó oldalak, a Google Search Console adatai és az ügyfelek nyelvezete.`,
      },
      {
        type: "ul",
        items: [
          `<strong>Keyword gap audit:</strong> a Semrush Keyword Gap eszközével azok a kulcsszavak, amelyekre a versenytársak rangsorolnak, te nem, szűrve és rangsorolva, mindegyiknél azzal, hogy meglévő oldalt kell javítani vagy újat írni.`,
          `<strong>Money page audit:</strong> a Google Search Console háromhavi adataiból oldalanként a kulcsszavak és helyezések, majd prioritási lista rövid, közepes és hosszú távra.`,
          `<strong>Service + city page builder:</strong> megnézi, mely szolgáltatás–város oldalak hiányoznak a weboldaladról, és mindegyikhez teljes oldalt ír (SEO-cím, meta description, H1, szakaszok, FAQ, CTA).`,
          `<strong>Google Search Console analysis:</strong> a 11–20. helyen álló kulcsszavak felderítése, és 30 napos javítási terv kész title tagekkel, H1-ekkel és meta descriptionökkel.`,
          `<strong>Review sentiment analysis:</strong> versenytársanként az utolsó 100 értékelés nyelvezete összevetve a tieiddel, majd ebből a GBP-leírás, a főoldali címsor és az értékeléskérő szöveg átírása.`,
        ],
      },
      {
        type: "p",
        html: `<strong>3. rész: backlinkek és tekintély (14–16. prompt).</strong> Honnan kapnak linket a versenytársak, egyeznek-e a cégadataid a könyvtárakban, és milyen szándékkal keresnek az ügyfelek.`,
      },
      {
        type: "ul",
        items: [
          `<strong>Competitor backlink audit:</strong> az Ahrefs Site Explorerrel a három versenytárs szűrt backlinkjei, azok a domainek, amelyek őket linkelik, téged nem, majd 90 napos linképítési terv megkereső levelekkel.`,
          `<strong>Local citation audit:</strong> a cégneved, címed és telefonszámod (NAP) egyezése sorban több könyvtárban (például Yelp, Bing Places, Apple Maps, Facebook), az eltérések táblázatban, javítási lista és havi ellenőrzőlista.`,
          `<strong>Local search intent mapping:</strong> a Semrushban a szakmád kulcsszavai négy vásárlói szakaszba sorolva, a problémáját még meg sem nevezőtől a most megrendelőig, szakaszonként tartalomstratégiával.`,
        ],
      },
      {
        type: "p",
        html: `<strong>4. rész: tartalom és mérés (17–20. prompt).</strong> Hiányzó tartalmak, a vállalkozás mint entitás, posztolási minták és havi riport.`,
      },
      {
        type: "ul",
        items: [
          `<strong>Content gap analysis:</strong> a Semrush Content Gap eszközével kérdőszót tartalmazó kulcsszavak, amelyekre a versenytársaknak van tartalma, neked nincs, a top 20-hoz cím, URL slug és content brief.`,
          `<strong>Entity optimisation:</strong> Knowledge Panel, Wikidata és schema-ellenőrzés, majd terv kész LocalBusiness JSON-LD kóddal, profilokkal és márkaemlítésekkel.`,
          `<strong>Competitor GBP posting pattern analysis:</strong> a versenytársak látható posztolási előzményei soronként, a mintázatok (nap, időpont, típus, szezon), és ebből posztolási stratégia az első négy hét posztjaival.`,
          `<strong>Monthly SEO performance report:</strong> a Google Search Console, a Google Business Profile és a Google Analytics 4 adataiból egyoldalas havi riport az előző 30 nappal összevetve.`,
        ],
      },
      {
        type: "p",
        html: `A szerző a cikk végén sorrendet is ad: ne futtasd mind a 20-at egyszerre, az első héten a háttér és az 1–2. prompt jön, a többi hetekre bontva követi, a 11–12. héten a havi riporttal. A pontos ütemezés az <a href="${src.seo.url}">eredeti cikkben</a> van.`,
      },
      { type: "h2", text: "Lépések" },
      { type: "steps" },
      { type: "h2", text: "Három további eredeti prompt" },
      {
        type: "prompt",
        label: "1. prompt: GBP category audit, eredeti",
        code: "Open Chrome and go to Google Maps. Search '[service] in [city]' for these 3 keywords: [keyword1], [keyword2], [keyword3]. For each search, note which of my competitors show up in the Map Pack. Then open each competitor's GBP listing and extract their primary category and all secondary categories.  Put everything in a spreadsheet. One tab per keyword. Columns: business name, primary category, secondary categories, star rating, review count, ranking position. Highlight any categories my competitors have that I'm missing from my GBP.  Then give me a prioritized list of categories I should add, ranked by how many top competitors have them. Start with the ones all 3 competitors share - those are non-negotiable. End with the ones only 1 competitor has - those are differentiation opportunities.",
        caption: `Forrás: ${c("seo")}, ${src.seo.date} (közösségi forrás). A szerző ezzel kezd minden ügyfélnél.`,
      },
      {
        type: "prompt",
        label: "11. prompt: service + city page builder, eredeti",
        code: "I need to build location-specific service pages for my website. My primary service is [your main service], the cities I serve are [city1], [city2], [city3], [city4], [city5], my website is [URL], and my target keyword pattern is [service] + [city], [service] near [city], best [service] in [city].   First open Chrome and check my website at [URL] and tell me which city plus service combination pages already exist and which are missing.   Then for each missing combination write a fully optimized page that includes: an SEO title under 60 characters that naturally includes service and city, a meta description under 155 characters that includes service and city and a compelling reason to click, an H1 heading with service and city written naturally, an opening paragraph of 100 words that addresses the specific pain point of someone in that city needing this service right now, a why choose us section of 150 words specific to that city mentioning local landmarks or neighborhoods or area-specific challenges where relevant, a service details section of 200 words covering what the service includes and what the process looks like and what the customer gets, a social proof section with a placeholder for reviews from that city, a FAQ section with 3 questions specific to customers in that city, and a CTA with phone number and 'Call now for same-day service in [city]'.   For each page also give me the exact URL slug, 3 internal linking opportunities from existing pages on my site, and 2 local citations or directories where I should list this specific city plus service combination.",
        caption: `Forrás: ${c("seo")}, ${src.seo.date} (közösségi forrás).`,
      },
      {
        type: "prompt",
        label: "15. prompt: local citation audit, eredeti",
        code: "My business information is: Name: [exact business name], Address: [exact address including suite or unit if applicable], Phone: [phone number], Website: [URL]. Open Chrome and search for my business name across these platforms one by one:   Google Business Profile, Yelp, Bing Places, Apple Maps, Facebook, BBB, Angi, HomeAdvisor, Thumbtack, Houzz, Yellow Pages, Manta, Foursquare, Superpages, Citysearch, and any industry-specific directories for [your industry]. For each platform record whether my listing exists, the business name as listed (exact), the address as listed (exact), the phone number as listed (exact), the website URL as listed, whether there are duplicate listings, and the star rating and review count if applicable.   Create a spreadsheet with all findings and flag every inconsistency in red. Then give me a priority fix list showing which inconsistencies are most damaging to local rankings, step-by-step instructions for correcting each one, a list of high-value directories where I have no listing at all and should create one immediately, and a monthly citation maintenance checklist so this problem never comes back.",
        caption: `Forrás: ${c("seo")}, ${src.seo.date} (közösségi forrás). A felsorolt könyvtárak a szerző listája.`,
      },
      { type: "h2", text: "Böngésző és saját fiókok" },
      {
        type: "note",
        html: `<strong>A promptok nagy része böngészőt feltételez.</strong> A legtöbb „Open Chrome” utasítással indul: a Bot weboldalakat nyit meg, például a Google Mapset, a versenytársak profiljait vagy a Semrusht és az Ahrefst. A dokumentáció szerint a Bot egy állandó felhős gépen böngészőt használhat, és sok böngészős eszközt kezel külön csatlakozó nélkül is. (<a href="${docs.apps}">Use the computer and apps</a>, <a href="${docs.faq}">FAQ</a>) A fizetős eszközökhöz (Semrush, Ahrefs) saját fiók kell: a prompt a te fiókodba lép be, előfizetést nem pótol. Ugyanez igaz a Google Search Console-ra, a Google Business Profile statisztikáira és a Google Analyticsre.`,
      },
      {
        type: "p",
        html: `A böngésző közös: a dokumentáció szerint ha egy Botnál belépsz, a munkamenet a többi Botod számára is elérhető. (<a href="${docs.apps}">Use the computer and apps</a>) Belépés előtt ezért gondold át, hogy a belépett fiókot az összes Botod használhatja, és ellenőrizd a jóváhagyási szabályaidat, ahogy az <a href="/5-nap/5-nap-masodik-bot-biztonsag/">5. napon</a> láttad.`,
      },
      { type: "h2", text: "Amit nem ellenőriztünk" },
      {
        type: "ul",
        items: [
          `A promptokat nem próbáltuk ki; azt sem, hogy a Bot mindegyik oldalt ki tudja-e olvasni úgy, ahogy a prompt kéri.`,
          `A cikkben szereplő eredményeket és számokat a szerző saját tapasztalataként közli; ezeket nem vesszük át, és független mérés nincs róluk.`,
          `A cikk végén a szerző a saját marketingügynöksége szolgáltatását ajánlja.`,
        ],
      },
      {
        type: "note",
        html: `<strong>Forrás és szerző.</strong> Ez az oldal Sarvesh Shrivastava (@bloggersarvesh) „Top 20 Grok Bot Prompts For SEO - The Only Stack You'll Ever Need” című, ${src.seo.date}-én közzétett X-cikkének rövid magyar összefoglalója, nem saját módszer és nem fordítás. A 20 prompt teljes angol szövegét és a szerző ajánlott sorrendjét az eredeti posztban olvashatod: <a href="${src.seo.url}">${src.seo.url}</a>`,
      },
      {
        type: "done",
        items: [
          "Egyszer betöltötted az üzleti hátteredet, futtattál egy célzott promptot, és tudod, melyik prompthoz kell böngészős belépés vagy saját fizetős fiók.",
        ],
      },
    ],
    sources: [src.seo, src.dAppsSeo, src.dFaqSeo],
  },
];

export function advancedPath(slug: string): string {
  return `/halado/${slug}/`;
}

export function getAdvanced(slug: string): AdvancedGuide {
  const guide = advancedGuides.find((item) => item.slug === slug);
  if (!guide) throw new Error(`Ismeretlen haladó útmutató: ${slug}`);
  return guide;
}

/** Az összes haladó útmutató lekérési napjai, időrendben, ismétlés nélkül. */
export const advancedFetchedDates = [...new Set(advancedGuides.map((guide) => guide.fetched ?? advancedFetched))].sort().join(", ");
