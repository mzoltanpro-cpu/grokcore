import { docs, marker } from "./docs";
import type { Block, Step } from "./types";

/**
 * Haladó útmutatók a Kezdő 5 nap után. Saját magyar szöveg; nem fordítás.
 * Minden állítás egy itt felsorolt forrásból jön; a forrást mi magunk nyitottuk meg (2026-10-19).
 * Eredeti promptot csak ott idézünk, ahol a forrás maga közli, szó szerint.
 * Ami a hivatalos dokumentációban nem szerepel, és mi sem próbáltuk ki, marker()-t kap.
 */
export const advancedFetched = "2026-10-19";

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
  dBots: { title: "Create and manage Bots (docs.x.ai)", url: docs.bots, author: "docs.x.ai", date: "lekérve 2026-10-19", kind: "hivatalos" },
  dSkills: { title: "Skills and routines (docs.x.ai)", url: docs.skills, author: "docs.x.ai", date: "lekérve 2026-10-19", kind: "hivatalos" },
  dApprove: { title: "Approvals, security, and privacy (docs.x.ai)", url: docs.approve, author: "docs.x.ai", date: "lekérve 2026-10-19", kind: "hivatalos" },
  dApps: { title: "Use the computer and apps (docs.x.ai)", url: docs.apps, author: "docs.x.ai", date: "lekérve 2026-10-19", kind: "hivatalos" },
  dSettings: { title: "Settings and notifications (docs.x.ai)", url: docs.settings, author: "docs.x.ai", date: "lekérve 2026-10-19", kind: "hivatalos" },
  dFaq: { title: "Frequently asked questions (docs.x.ai)", url: docs.faq, author: "docs.x.ai", date: "lekérve 2026-10-19", kind: "hivatalos" },
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
];

export function advancedPath(slug: string): string {
  return `/halado/${slug}/`;
}

export function getAdvanced(slug: string): AdvancedGuide {
  const guide = advancedGuides.find((item) => item.slug === slug);
  if (!guide) throw new Error(`Ismeretlen haladó útmutató: ${slug}`);
  return guide;
}
