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
const printerFetched = "2026-10-21";
const woodFetched = "2026-10-22";
const templateFetched = "2026-10-22";
const kanikaFetched = "2026-10-22";

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
  printer: {
    title: "„grok bot just took over my printer...” (X-poszt, angol)",
    url: "https://x.com/Av1dlive/status/2112152148045943113",
    author: "Avid (@Av1dlive)",
    date: "2026-10-19 14:01 (budapesti idő)",
    kind: "kozossegi",
  },
  printerPrompt: {
    title: "„full prompt:” – a teljes prompt a szerző első válaszában (X-válasz, angol)",
    url: "https://x.com/Av1dlive/status/2112152151460020238",
    author: "Avid (@Av1dlive)",
    date: "2026-10-19 14:01 (budapesti idő)",
    kind: "kozossegi",
  },
  dAppsPrinter: { title: "Use the computer and apps (docs.x.ai)", url: docs.apps, author: "docs.x.ai", date: `lekérve ${printerFetched}`, kind: "hivatalos" },
  dApprovePrinter: { title: "Approvals, security, and privacy (docs.x.ai)", url: docs.approve, author: "docs.x.ai", date: `lekérve ${printerFetched}`, kind: "hivatalos" },
  dAppsSeo: { title: "Use the computer and apps (docs.x.ai)", url: docs.apps, author: "docs.x.ai", date: `lekérve ${seoFetched}`, kind: "hivatalos" },
  dFaqSeo: { title: "Frequently asked questions (docs.x.ai)", url: docs.faq, author: "docs.x.ai", date: `lekérve ${seoFetched}`, kind: "hivatalos" },
  wood: {
    title: "„Grok Bot: A Practical Guide to Getting Work Done” (blogcikk, angol)",
    url: "https://www.tonywood.org/writing/how-to-use-grok-bot-a-practical-guide/",
    author: "Tony Wood",
    date: "2026-10-17",
    kind: "kozossegi",
  },
  dBotsWood: { title: "Create and manage Bots (docs.x.ai)", url: docs.bots, author: "docs.x.ai", date: `lekérve ${woodFetched}`, kind: "hivatalos" },
  dAppsWood: { title: "Use the computer and apps (docs.x.ai)", url: docs.apps, author: "docs.x.ai", date: `lekérve ${woodFetched}`, kind: "hivatalos" },
  dSkillsWood: { title: "Skills and routines (docs.x.ai)", url: docs.skills, author: "docs.x.ai", date: `lekérve ${woodFetched}`, kind: "hivatalos" },
  dApproveWood: { title: "Approvals, security, and privacy (docs.x.ai)", url: docs.approve, author: "docs.x.ai", date: `lekérve ${woodFetched}`, kind: "hivatalos" },
  dTeamsWood: { title: "Teams and enterprises (docs.x.ai)", url: docs.teamsEnterprise, author: "docs.x.ai", date: `lekérve ${woodFetched}`, kind: "hivatalos" },
  dSettingsWood: { title: "Settings and notifications (docs.x.ai)", url: docs.settings, author: "docs.x.ai", date: `lekérve ${woodFetched}`, kind: "hivatalos" },
  plansWood: { title: "Grok Bot plans (cursor.com)", url: docs.plans, author: "cursor.com", date: `lekérve ${woodFetched}`, kind: "hivatalos" },
  tplPost: {
    title: "„When you fork our AEO/SEO Bot…” (X-poszt, angol)",
    url: "https://x.com/ericosiu/status/2110370150272692621",
    author: "@ericosiu",
    date: "2026-10-14 16:00 (budapesti idő)",
    kind: "kozossegi",
  },
  tplPage: {
    title: "AEO/SEO Bot by Eric (x.ai sablonoldal, angol)",
    url: "https://x.ai/bot/Jyx1Lg-VzYgyjDc-y-GQi",
    author: "@ericosiu",
    date: `lekérve ${templateFetched}`,
    kind: "kozossegi",
  },
  dBotsTpl: { title: "Create and manage Bots (docs.x.ai)", url: docs.bots, author: "docs.x.ai", date: `lekérve ${templateFetched}`, kind: "hivatalos" },
  dFaqTpl: { title: "Frequently asked questions (docs.x.ai)", url: docs.faq, author: "docs.x.ai", date: `lekérve ${templateFetched}`, kind: "hivatalos" },
  dTeamBotsTpl: { title: "Team Bots (docs.x.ai)", url: docs.teamBots, author: "docs.x.ai", date: `lekérve ${templateFetched}`, kind: "hivatalos" },
  dApproveTpl: { title: "Approvals, security, and privacy (docs.x.ai)", url: docs.approve, author: "docs.x.ai", date: `lekérve ${templateFetched}`, kind: "hivatalos" },
  dAppsTpl: { title: "Use the computer and apps (docs.x.ai)", url: docs.apps, author: "docs.x.ai", date: `lekérve ${templateFetched}`, kind: "hivatalos" },
  dSkillsTpl: { title: "Skills and routines (docs.x.ai)", url: docs.skills, author: "docs.x.ai", date: `lekérve ${templateFetched}`, kind: "hivatalos" },
  kanika: {
    title: "„How To Make Your Grok Bot Weekly Limit Last 8x Longer (Full Setup + Prompts)” (X-cikk, angol)",
    url: "https://x.com/KanikaBK/status/2112829012515160139",
    author: "Kanika (@KanikaBK)",
    date: "2026-10-21 10:51 (budapesti idő)",
    kind: "kozossegi",
  },
  xsPricingK: { title: "The X Subscription: Pricing (docs.x.ai)", url: docs.xsPricing, author: "docs.x.ai", date: `lekérve ${kanikaFetched}`, kind: "hivatalos" },
  xsGrokBotK: { title: "The X Subscription: Grok Bot (docs.x.ai)", url: docs.xsGrokBot, author: "docs.x.ai", date: `lekérve ${kanikaFetched}`, kind: "hivatalos" },
  xsSpendingCapsK: { title: "The X Subscription: Spending caps (docs.x.ai)", url: docs.xsSpendingCaps, author: "docs.x.ai", date: `lekérve ${kanikaFetched}`, kind: "hivatalos" },
  xsExtraUsageK: { title: "The X Subscription: Extra usage (docs.x.ai)", url: docs.xsExtraUsage, author: "docs.x.ai", date: `lekérve ${kanikaFetched}`, kind: "hivatalos" },
  plansK: { title: "Grok Bot plans (cursor.com)", url: docs.plans, author: "cursor.com", date: `lekérve ${kanikaFetched}`, kind: "hivatalos" },
  faqCursorK: { title: "Grok Bot FAQs (cursor.com)", url: docs.faqCursor, author: "cursor.com", date: `lekérve ${kanikaFetched}`, kind: "hivatalos" },
  routinesHelpK: { title: "Grok Bot routines (cursor.com)", url: docs.routinesHelp, author: "cursor.com", date: `lekérve ${kanikaFetched}`, kind: "hivatalos" },
  modelsHelpK: { title: "Grok Bot models (cursor.com)", url: docs.modelsHelp, author: "cursor.com", date: `lekérve ${kanikaFetched}`, kind: "hivatalos" },
  dOverviewK: { title: "Grok Bot overview (docs.x.ai)", url: docs.overview, author: "docs.x.ai", date: `lekérve ${kanikaFetched}`, kind: "hivatalos" },
  dSettingsK: { title: "Settings and notifications (docs.x.ai)", url: docs.settings, author: "docs.x.ai", date: `lekérve ${kanikaFetched}`, kind: "hivatalos" },
  dAppsK: { title: "Use the computer and apps (docs.x.ai)", url: docs.apps, author: "docs.x.ai", date: `lekérve ${kanikaFetched}`, kind: "hivatalos" },
  dFaqK: { title: "Frequently asked questions (docs.x.ai)", url: docs.faq, author: "docs.x.ai", date: `lekérve ${kanikaFetched}`, kind: "hivatalos" },
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
  {
    slug: "nyomtato-beallitas",
    title: "Nyomtató rendbetétele egy prompttal: driverless nyomtatás és szkennelés mappába",
    nav: "Nyomtató beállítása",
    card: "Egy közösségi X-poszt összefoglalója: a Bot megkeresi az otthoni nyomtatót, menti a beállításait, rendet tesz, és beállítja a driverless nyomtatást és a szkennelést mappába.",
    description:
      "Otthoni nyomtató rendbetétele Grok Bottal: Avid (@Av1dlive) X-posztjának magyar összefoglalója hat lépésben, a teljes eredeti prompttal. Driverless nyomtatás (IPP Everywhere, AirPrint, Mopria) és szkennelés mappába, felhős fiók nélkül. Előfeltétel: asztali app helyi futtatással. Haladó útmutató a Kezdő 5 nap után.",
    lead: "Ez az oldal egy más által írt X-poszt rövid magyar összefoglalója, nem saját módszer. Avid (@Av1dlive) 2026-10-19-én hat lépésben írta le, hogyan tetette rendbe egy prompttal az otthoni nyomtatóját: a Bot megkeresi a hálózaton, elmenti a beállításait, a jóváhagyásával rendet tesz, majd beállítja a driverless nyomtatást és a szkennelést egy mappába. A prompt teljes, eredeti szövegét is közöljük.",
    audience: "Annak szól, akinek Wi-Fi-re kötött otthoni nyomtatója van, Mac vagy Windows gépen használja a Grok Bot asztali appját, és már végigment a Kezdő 5 napon.",
    minutes: "Kb. 15 perc az oldal elolvasására, a mi becslésünk",
    fetched: printerFetched,
    steps: [
      {
        name: "Egy hálózaton",
        text: "A számítógéped és a nyomtató ugyanarra a Wi-Fi-re csatlakozzon.",
      },
      {
        name: "Prompt és fotó",
        text: "Másold be az alábbi promptot a Grok Botba, és csatolj mellé egy fotót a nyomtató típuscímkéjéről.",
      },
      {
        name: "Az admin oldal",
        text: "A Bot megkeresi a hálózaton a nyomtató beépített, rejtett admin weboldalát. Neked csak egyszer kell megnyitnod.",
      },
      {
        name: "Igen a takarításra",
        text: "Jóváhagyod a javasolt takarítást: az automatikus firmware-frissítés és a tintareklámok kikapcsolását, valamint az alvás beállításának javítását. A szerző szerint mindez visszafordítható.",
      },
      {
        name: "Driverless nyomtatás",
        text: "A Bot beállítja a driver nélküli nyomtatást, így az otthoni laptopok és telefonok külön program nélkül tudnak nyomtatni.",
      },
      {
        name: "Szkennelés mappába",
        text: "A szkennelt anyag egy mappába kerül a számítógépeden, felhős fiók nélkül.",
      },
    ],
    blocks: [
      {
        type: "note",
        html: `<strong>Összefoglaló, nem saját anyag.</strong> Ez az oldal ${c("printer")} X-posztját foglalja össze magyarul. Közzétéve: ${src.printer.date}. A teljes prompt a szerző első válaszában van, ugyanekkor közzétéve. Poszt: <a href="${src.printer.url}">${src.printer.url}</a>. Válasz a prompttal: <a href="${src.printerPrompt.url}">${src.printerPrompt.url}</a>. Lekérve: ${printerFetched}.`,
      },
      {
        type: "note",
        html: `<strong>Előfeltétel: a Bot felhős gépe nem látja az otthoni hálózatodat.</strong> Ez a mi következtetésünk: a Grok Bot egy felhős gépen dolgozik, a nyomtatód viszont az otthoni Wi-Fi-den van. A dokumentáció ennyit mond: „The Grok Bot cloud computer is separate from the Mac or Windows computer in front of you. A Bot only runs commands on your local computer when that capability is enabled and you approve it under your local-computer policy.” (<a href="${docs.apps}">Use the computer and apps</a>, „Your local computer is separate” szakasz) Ehhez tehát a Grok Bot asztali appja kell a Mac vagy Windows gépeden, bekapcsolt helyi futtatással, és a helyi futtatást a beállításod szerint jóvá kell hagynod. A beállítás helye: Settings → General → Bot → Execution on Local Computer; ha már van regisztrált géped, a Settings → Computer → Computers alatt, gépenként. Az alapértelmezett <strong>Ask every time</strong> minden alkalommal rákérdez. A dokumentáció a <strong>Never allow</strong> beállítást javasolja, hacsak egy Botnak nincs konkrét oka a helyi gépen dolgozni; a beállítás később is módosítható, így a munka után visszaállíthatod. (<a href="${docs.approve}">Approvals, security, and privacy</a>, „Control access to your local computer” szakasz)`,
      },
      { type: "h2", text: "Mit ígér a poszt?" },
      {
        type: "p",
        html: `A szerző szerint egy prompt és öt perc után nincs több tintás nyaggatás, nincs „printer offline”, és a ház bármely pontjáról tud nyomtatni és szkennelni. Az ő nyomtatója 2024-es. A végeredményt úgy foglalja össze, hogy a meglévő nyomtató végre úgy működik, ahogy kellene. Ezeket az állításokat nem ellenőriztük (lásd lent).`,
      },
      { type: "h2", text: "A hat lépés" },
      { type: "steps" },
      { type: "h2", text: "Mit kér a prompt a Bottól?" },
      {
        type: "p",
        html: `A prompt azzal kezdődik, hogy a nyomtató a tiéd, a saját otthoni hálózatodon van, és felhatalmazod a Botot, hogy megkeresse, kiolvassa a beállításait és elvégezze a felsorolt módosításokat; minden módosításnak visszafordíthatónak kell lennie. Utána megadja, mikor van kész a munka, majd sorra kéri: a típus azonosítását a fotóról és a hivatalos kézikönyv megkeresését; a nyomtató megkeresését a hálózaton (Bonjour/mDNS vagy a router eszközlistája) és fix IP-címet, hogy ne legyen „offline”; a beépített admin weboldal (Embedded Web Server) megnyitását, jelszónál pedig csak azt, hogy a Bot megmondja, hol van az alapértelmezett jelszó, találgatás nélkül; a beállítások és a visszaállítás lépéseinek mentését minden módosítás előtt; a takarítás javaslatát, és várakozást a te jóváhagyásodra; driverless nyomtatást (IPP Everywhere / AirPrint / Mopria) a gépen, és útmutatót a telefonokhoz; hálózati szkennelést mappába, felhős fiók nélkül; végül lépésenkénti beszámolót, puskát (cheat sheet) és a visszaállítás lépéseit.`,
      },
      {
        type: "p",
        html: `Három tiltással zárul: a Bot ne kerülje meg a patron- vagy tintaellenőrzést, ne telepítsen harmadik féltől származó firmware-t, és ne lépjen be helyetted fiókokba.`,
      },
      {
        type: "prompt",
        label: "Avid (@Av1dlive): a teljes prompt, eredeti",
        code: `"This is my own printer on my own home network. It keeps showing ink upsells, going "offline", and it only scans through the maker's cloud app. I want it clean, reliable and controlled from this computer. I authorize you to find it on my network, read its settings and make the changes below. Every change must be reversible.

I've attached a photo of the printer's model label.

Done means: the printer is found, its settings are backed up, the cleanup is done, every device on my Wi-Fi can print to it without installing the maker's software, and I can scan to a folder on this computer.

- Identify the model from the photo and look up its official manual.
- Find the printer on my network (Bonjour/mDNS or the router's device list) and give it a fixed IP so it stops going "offline".
- Open its built-in admin web page (the Embedded Web Server). If it asks for a password, tell me where the default one is printed. Never guess or brute-force it.
- Before changing anything, save every setting you'll touch and the undo steps.
- Propose the cleanup and wait for my OK: turn off automatic firmware updates, turn off marketing, ink-subscription and "offer" prompts, fix the sleep timer, turn off any services I don't use.
- Set up driverless printing (IPP Everywhere / AirPrint / Mopria) on this computer and tell me how to add it on phones.
- Set up scan-to-folder or scan from this computer over the network, without a cloud account.
- Show me each step as you go and end with a cheat sheet and the undo steps.

Never bypass cartridge or ink checks, never flash third-party firmware, never sign in to accounts for me."`,
        caption: `Forrás: <a href="${src.printerPrompt.url}">${src.printer.author} első válasza</a>, ${src.printerPrompt.date}, közösségi forrás. Szó szerint, a szerző idézőjeleivel együtt. Küldés előtt csatold a típuscímke fotóját.`,
      },
      {
        type: "note",
        html: `<strong>Saját megjegyzésünk, nem a forrásból: a firmware-frissítés a biztonsági javításokat is hozza.</strong> Ha kikapcsolod az automatikus firmware-frissítést, azzal a biztonsági javítások is elmaradnak. Ilyenkor a frissítéseket magadnak kell figyelned.`,
      },
      { type: "h2", text: "Amit nem ellenőriztünk" },
      {
        type: "ul",
        items: [
          `Az „1 prompt + 5 perc” a szerző állítása, nem mértük. Hogy mennyi idő és hány kör kell, a nyomtató gyártójától és típusától függ.`,
          `A „minden visszafordítható” (all reversible) állítást sem ellenőriztük. Hogy egy beállítás visszaállítható-e, a nyomtató gyártójától és típusától függ.`,
          `A promptot egyetlen nyomtatón sem próbáltuk ki, így azt sem, hogy a driverless nyomtatás és a hálózati szkennelés minden típuson beállítható-e.`,
          `A poszthoz csatolt 20 másodperces videót nem írtuk át.`,
        ],
      },
      {
        type: "note",
        html: `<strong>Forrás és szerző.</strong> Ez az oldal a Botkezdő saját útmutatója, nem hivatalos x.ai anyag: Avid (@Av1dlive) 2026-10-19-én 14:01-kor (budapesti idő) közzétett X-posztjának rövid magyar összefoglalója, nem saját módszer és nem fordítás. A hat lépést saját szavainkkal írtuk le; a prompt a szerző első válaszából való, szó szerint. Poszt: <a href="${src.printer.url}">${src.printer.url}</a>. Válasz a prompttal: <a href="${src.printerPrompt.url}">${src.printerPrompt.url}</a>. Lekérve: ${printerFetched}.`,
      },
      {
        type: "done",
        items: [
          "Tudod, hogy ehhez az asztali app és bekapcsolt, jóváhagyásos helyi futtatás kell, a beállítások mentése után jóváhagytad a takarítást, és a nyomtató driver nélkül nyomtat, szkennelni pedig egy mappába tud.",
        ],
      },
    ],
    sources: [src.printer, src.printerPrompt, src.dAppsPrinter, src.dApprovePrinter],
  },
  {
    slug: "feladattol-rutinig",
    title: "Egy feladattól a rutinig: megbeszélés-előkészítés lépésről lépésre",
    nav: "Feladattól rutinig",
    card: "Egy közösségi blogcikk összefoglalója: egy Bot egy feladattal, saját ellenőrzés és javítás, majd skill és routine, egy megbeszélés-előkészítő példán.",
    description:
      "Egy feladattól a routine-ig Grok Bottal: Tony Wood blogcikkének magyar összefoglalója egy megbeszélés-előkészítő példán. Bot és leírás, háttér és memória, közös gép és connectorok, skill, routine és eseményindítás, négy eredeti prompttal. Haladó útmutató a Kezdő 5 nap után.",
    lead: "Ez az oldal egy más által írt blogcikk rövid magyar összefoglalója, nem saját módszer. Tony Wood 2026-10-17-én megjelent cikkének kiindulópontja: adj a Botnak egyetlen hasznos feladatot, kapj egy eredményt, amelyet ellenőrizni tudsz, és csak utána tanítsd meg jobban csinálni. A példa végig ugyanaz: egy partnertárgyalás előtti, egyoldalas összefoglaló (brief), amelyből lépésenként skill, majd routine lesz.",
    audience: "Annak szól, aki végigment a Kezdő 5 napon, és egy már működő feladatból megbízható, ismételhető folyamatot szeretne.",
    minutes: "Kb. 20 perc az oldal elolvasására, a mi becslésünk",
    fetched: woodFetched,
    steps: [
      {
        name: "Egy Bot, egy feladat",
        text: "Hozz létre egy Botot egyetlen feladatra (a cikkben: megbeszélések előkészítése), és a leírásába írd bele a felelősségét, a várt eredményt és azt, hol áll meg.",
      },
      {
        name: "Kevés, jóváhagyott forrás",
        text: "Az első körhöz néhány általad jóváhagyott jegyzet és nyilvános link elég. Az adott megbeszélés dátuma, résztvevői és célja a kérésbe kerül, nem a leírásba.",
      },
      {
        name: "Első futtatás, saját ellenőrzés",
        text: "Futtasd le egyszer, olvasd el az eredményt, nyiss meg néhány forrást, és nézd meg, hogy ami megállapodásként szerepel, tényleg az volt-e.",
      },
      {
        name: "Konkrét javítások",
        text: "Konkrét visszajelzést adj (például: mindegyik forrásnál legyen ott a dátum), és gyűjtsd össze a javításokat, mielőtt újra futtatnád.",
      },
      {
        name: "A bevált módszer skillként",
        text: "Mentsd skillként a javított módszert, olvasd el, mit mentett a Bot, és próbáld ki egy másik megbeszélésen is.",
      },
      {
        name: "Routine csak a megbízható folyamatból",
        text: "Ütemezést csak a bevált skillre kérj. Nézd meg az ütemezést, az időzónát és a következő futást, és előbb biztonságos adaton próbáld ki, mert a tesztfuttatás valódi munkát végez.",
      },
    ],
    blocks: [
      {
        type: "note",
        html: `<strong>Összefoglaló, nem saját anyag.</strong> Ez az oldal ${c("wood")} „Grok Bot: A Practical Guide to Getting Work Done” című blogcikkét foglalja össze magyarul, saját szavainkkal; nem fordítás. Közzétéve: ${src.wood.date}. A cikkből négy promptot idézünk szó szerint, angolul. A szerző a cikket Nate Herk egy YouTube-videójára építette, a termékadatokat a dokumentációval vetette össze, és azt írja, hogy új, saját kipróbálásról nem számol be: a promptok és a munkafolyamat szerkesztői javaslatok. Cikk: <a href="${src.wood.url}">${src.wood.url}</a>. Lekérve: ${woodFetched}.`,
      },
      { type: "h2", text: "Mit javasol a cikk?" },
      {
        type: "p",
        html: `A szerző azt javasolja, hogy ne szerepekkel és címekkel kezdj, hanem egy hasznos feladattal: adj a Botnak egy munkát, kapj egy ellenőrizhető eredményt, és utána tanítsd meg, hogyan csinálja jobban. A példája egy partnertárgyalás előtti, egyoldalas összefoglaló. Ebből lesz előbb egy kijavított első futás, aztán egy skill, végül egy routine.`,
      },
      {
        type: "p",
        html: `Az alapokat itt nem ismételjük. A Bot létrehozását, az appok bekötését, a skillt és a routine-t a <a href="/5-nap/">Kezdő 5 napon</a> mutattuk meg (<a href="/5-nap/2-nap-appok-bekotese/">2. nap</a>: appok, <a href="/5-nap/3-nap-elso-feladat/">3. nap</a>: első feladat, <a href="/5-nap/4-nap-skill-routine/">4. nap</a>: skill és routine, <a href="/5-nap/5-nap-masodik-bot-biztonsag/">5. nap</a>: második Bot és jóváhagyások). Hogy milyen gyakran fusson egy routine, és mi legyen éjjel a jóváhagyásokkal, arról a <a href="/halado/rutinok-ritmusa/">Rutinok okosan</a> oldal szól. Ez az oldal egyetlen, végigvitt példán mutatja meg, hogyan jut el egy feladat a routine-ig.`,
      },
      { type: "h2", text: "Lépések" },
      { type: "steps" },
      { type: "h2", text: "A részek röviden" },
      {
        type: "table",
        caption: "A cikk áttekintése a részekről, saját szavainkkal",
        headers: ["Rész", "Mit jelent", "A megbeszélés-példában"],
        rows: [
          ["Bot", "Egy elnevezett segítő, tartós szereppel.", "Készítsen fel a partnertárgyalásaimra."],
          ["Háttér és memória", "Ami az adott feladathoz elérhető, és ami hosszabb távon megmarad.", "Az aktuális megbeszélés anyagai, és hogy rövid összefoglalót szeretnél."],
          ["Gép és connectorok", "Weboldalak, fájlok és alkalmazások használata.", "A jóváhagyott jegyzetek olvasása és a partner nyilvános weboldalának megnézése."],
          ["Skill", "Egy elmentett módszer egy feladatra.", "A közösen kialakított megbeszélés-előkészítés."],
          ["Routine", "Ütemezett vagy egy támogatott eseményre induló munkafolyamat.", "Az összefoglaló elkészítése egy rendszeres megbeszélés előtt."],
        ],
      },
      { type: "h2", text: "Bot és leírás" },
      {
        type: "p",
        html: `A Botot a New → Create new Bot menüvel hozod létre, a nevét és a leírását a profiljában (Edit Profile) állítod be. A dokumentáció szerint ami tartósan igaz, az a leírásba kerül, az adott feladat részletei a beszélgetésbe. (<a href="${docs.bots}">Create and manage Bots</a>) A szerző Botja a Meeting Preparation nevet kapja, és a leírásában három dolog áll: mi a felelőssége, milyen eredményt vársz, és hol áll meg. Az indoka: ha egy megbeszélés dátuma és résztvevői a leírásba kerülnek, a következő havi megbeszélés örökli az előző feltevéseit.`,
      },
      {
        type: "prompt",
        label: "Tony Wood: a Bot leírása, eredeti",
        code: "Prepare concise briefs for my partnership meetings. Use the sources I approve, show what has changed and identify questions worth asking. Link important claims to their sources. Leave unknowns visible. Prepare drafts for my review; ask before sending messages or changing shared records.",
        caption: `Forrás: ${c("wood")}, ${src.wood.date} (közösségi forrás), a cikk 1. szakasza. Szó szerint.`,
      },
      { type: "h2", text: "Háttér és memória" },
      {
        type: "p",
        html: `Az első próbához a szerző néhány jóváhagyott jegyzetet és nyilvános linket ad, a megbeszélés céljával, résztvevőivel és a várt döntéssel. A dokumentáció szerint a Bot megjegyzi a tartós munkamódszert, a fontos tényeket és a korábbi munkái összefoglalóit, de fontos döntésnél érdemes megkérni, hogy idézze vagy nyissa meg újra az aktuális adatot. (<a href="${docs.bots}">Create and manage Bots</a>)`,
      },
      {
        type: "p",
        html: `A szerző példájával: hogy egyoldalas összefoglalót szeretnél, az jó tartós beállítás; az viszont, hogy „a szerződés jövő hónapban lejár”, egy aktuális szerződést és egy valódi dátumot kíván. Ezért azt javasolja, hogy az aktuális összefoglaló, a döntések és a megállapodott teendők egy általad kezelt dokumentumban legyenek, és minden új futás azt olvassa el. Ezt te is meg tudod nézni, ki tudod javítani, és át tudod vinni egy másik eszközbe.`,
      },
      { type: "h2", text: "A közös gép és a connectorok" },
      {
        type: "p",
        html: `A dokumentáció szerint minden Bot egy állandó felhős gépen dolgozik, böngészővel, fájlrendszerrel és terminállal, és a felhős munka akkor sem áll le, ha bezárod az appot vagy a laptopodat. A Botjaidnak külön képernyőjük van, de a gép közös: a böngésző sütijei és belépései, a fájlok és a parancssori hitelesítők minden Botodnál elérhetők. A képernyők külön munkafelületek, nem külön biztonsági határok, és a dokumentáció kifejezetten kéri, hogy a külön Botokat ne használd biztonsági határként. (<a href="${docs.apps}">Use the computer and apps</a>, <a href="${docs.approve}">Approvals</a>) A szerző ebből azt vonja le, hogy ha az egyik Botot „A cég”, a másikat „B cég” névre kereszteled, attól a két cég adatai még nem válnak szét.`,
      },
      {
        type: "p",
        html: `A saját laptopod elérése külön képesség: a dokumentáció szerint a Bot csak akkor futtat parancsot a helyi gépeden, ha ez be van kapcsolva, és a beállításod szerint jóváhagyod. (<a href="${docs.apps}">Use the computer and apps</a>) A szerző következtetése, hogy egy helyi fájlútvonal megadása önmagában még nem ad hozzáférést; ő egy szándékosan kiválasztott csatolmánnyal vagy egy jóváhagyott mappával kezdene.`,
      },
      {
        type: "p",
        html: `A connectorokat a Connect apps alatt pluginként telepíted. A dokumentáció azt javasolja, hogy ahol van connector, azt használd, máshol a böngészőt; a telepített connector fiókszintű, vagyis minden személyes Botodnál elérhető. (<a href="${docs.apps}">Use the computer and apps</a>) A szerző csak azt kötné be, amire a feladatnak éppen szüksége van, és megnézné, hogy a hozzáférés csak olvas vagy módosíthat is, és személyes vagy céges adatot ér-e el. Jelszóhoz az átadást (handover) vagy a támogatott biztonságos bevitelt javasolja; a dokumentáció is azt kéri, hogy jelszót és egyszer használatos kódot ne másolj a chatbe, és jelzi, hogy egyes oldalak lejáratják a munkamenetet. (<a href="${docs.apps}">Use the computer and apps</a>, <a href="${docs.approve}">Approvals</a>)`,
      },
      {
        type: "note",
        html: `<strong>Saját megjegyzésünk, nem a forrásból: a közös gép minden Botodé.</strong> Amit egy Botnak megadsz (belépés, fájl, connector), azt a többi Botod is eléri. Bizalmas céges anyag előtt nézd meg a Cursor adatkezelési feltételeit: a megnyitott dokumentáció nem ígér EU-n belüli adattárolást. A Grok Bot adattárolást igényel, az adatvédelmi beállításokat a Cursor-fiókodban kezeled (<a href="${docs.approve}">Approvals</a>), az adattárolási vállalásokról (residency commitments) pedig a dokumentáció a Cursor-fiókcsapathoz irányít (<a href="${docs.teamsEnterprise}">Teams and enterprises</a>). A Cursor biztonsági oldala: <a href="${docs.securityCursor}">cursor.com/security</a>.`,
      },
      { type: "h2", text: "Első futtatás és javítás" },
      {
        type: "p",
        html: `Ha megvannak a jóváhagyott források, a szerző ezzel a kéréssel indítaná az első futást:`,
      },
      {
        type: "prompt",
        label: "Tony Wood: az első feladat, eredeti",
        code: "Prepare a one-page brief for Thursday's partnership meeting. Use the notes and links I have supplied. Cover the meeting's purpose, what we agreed last time, relevant changes since then, three questions worth asking and any information we still need. Link each important observation to its source. Distinguish facts from your suggestions. Save the brief in our agreed meeting folder and show it to me here. Do not send anything or change the action list.",
        caption: `Forrás: ${c("wood")}, ${src.wood.date} (közösségi forrás), a cikk 5. szakasza. Szó szerint.`,
      },
      {
        type: "p",
        html: `Utána olvasd el az eredményt. A szerző azt javasolja, hogy kövess néhány linket, nézd meg, hogy ami megállapodásként szerepel, tényleg megállapodás volt-e, és gondold végig, segítenek-e a javasolt kérdések. A visszajelzés legyen konkrét, például: ez csak lehetőség volt, nem vállalás; mindegyik forrásnál legyen ott a dátum; a nyitott üzleti kérdés kerüljön a tetejére. Ezekből derül ki, milyen a jó eredmény, ezért gyűjtsd össze őket, mielőtt újra futtatnád.`,
      },
      { type: "h2", text: "A bevált módszer skillként" },
      {
        type: "p",
        html: `A dokumentáció szerint a skill egy újrahasználható utasításkészlet. Az asztali app szövegmezőjében a <code>/</code> jellel hivatkozol egy mentett skillre, a <code>@</code> jellel Botokra, csoportokra, routine-okra és connectorokra. (<a href="${docs.skills}">Skills and routines</a>) A kijavított összefoglaló után a szerző ezt kérné:`,
      },
      {
        type: "prompt",
        label: "Tony Wood: a módszer mentése skillként, eredeti",
        code: "Save the meeting-preparation method we have agreed as a skill. Include the approved sources, how to identify the right meeting, the brief's structure and our corrections. Require source dates and links. If notes conflict, show both accounts. If something essential is unavailable, say what is missing. Keep messages and record changes for my approval.",
        caption: `Forrás: ${c("wood")}, ${src.wood.date} (közösségi forrás), a cikk 6. szakasza. Szó szerint.`,
      },
      {
        type: "p",
        html: `Olvasd el, mit mentett a Bot. A szerző szerint egy jó skillből a jó eredményt és a hibát is fel lehet ismerni, és érdemes beleírni, mi legyen, ha egy forrás üres, ha egy cégnév kétértelmű, vagy ha egy korábbinak hitt megbeszélés meg sem történt. Ha egy futás csalódást okoz, a mentett módszert javítsd, különben hétről hétre ugyanazt a javítást adod.`,
      },
      {
        type: "p",
        html: `Ahol a kattintások számítanak (a szerző példájában egy nehézkes riportfelület), a Teach a task funkcióval meg is mutathatod a Botnak a böngészős lépéseket, és átnézheted a belőle készült skillt. A dokumentáció szerint ezt fokozatosan kapcsolják be; ha nem látod, kérd meg a Botot, hogy írásos utasításból és az elvégzett feladatból készítsen skillt. (<a href="${docs.skills}">Skills and routines</a>) A szerző szerint egy sikeres bemutató csak kiinduló módszer, ezért próbáld ki egy másik, biztonságos példán is.`,
      },
      { type: "h2", text: "Routine a megbízható folyamatból" },
      {
        type: "p",
        html: `A dokumentáció szerint a routine-t attól a Bottól kérd, amelyiknek a feladat a dolga, és nézd meg az ütemezést, az időzónát és a következő futást. A háttérben futó routine-ok akkor is futhatnak, ha a laptopod le van csukva. (<a href="${docs.skills}">Skills and routines</a>) A szerző routine-kérése:`,
      },
      {
        type: "prompt",
        label: "Tony Wood: a routine, eredeti",
        code: "Every weekday at 07:30 Europe/London, check for partnership meetings in the next two working days. Run our meeting-preparation skill for meetings without a current brief. Leave the result in this conversation and our agreed folder. Report missing sources. Keep any messages or changes to shared records for my approval.",
        caption: `Forrás: ${c("wood")}, ${src.wood.date} (közösségi forrás), a cikk 8. szakasza. Szó szerint. <strong>Időzóna: a szerző Europe/London időzónát ír; magyar használatnál írd helyette, hogy Europe/Budapest.</strong>`,
      },
      {
        type: "p",
        html: `A szerző szerint az aktuális összefoglaló (current brief) fogalmát a skillben pontosan meg kell határozni: melyik megbeszélésről van szó, mikor készült az összefoglaló, és mi változott azóta. Így nem gyűlnek egymás mellé ismétlődő összefoglalók.`,
      },
      {
        type: "p",
        html: `Mielőtt az ütemezésre hagyatkoznál, nézz meg egy tesztfuttatást. A dokumentáció szerint a tesztfuttatás valódi munkát végez, ezért biztonságos bemenettel próbáld. Két ütemezett futás között legalább öt percnek el kell telnie, és routine-onként a 20 legutóbbi futás adatai maradnak meg, a sikertelenekkel együtt. (<a href="${docs.skills}">Skills and routines</a>) A routine létrehozását a <a href="/5-nap/4-nap-skill-routine/">4. napon</a> mutattuk meg, a gyakoriságról a <a href="/halado/rutinok-ritmusa/">Rutinok okosan</a> oldal szól.`,
      },
      { type: "h2", text: "Ha egy esemény indítja" },
      {
        type: "p",
        html: `Az ütemezés egy adott időpontban indít, az esemény akkor, amikor valami történik. A dokumentáció szerint a Cursor-fiók integrációi egy eseményre, például egy Slack-üzenetre vagy egy GitHub-értesítésre is elindíthatnak egy routine-t; ezek nem azonosak a Slack- és GitHub-pluginnal, és saját bekötést kérhetnek. (<a href="${docs.skills}">Skills and routines</a>) A szerző két óvatossági szabályt ad: minden beérkező kérés kapjon állandó azonosítót, és új munka előtt a Bot nézze meg, van-e már ilyen; a beérkező szöveget pedig adatként kell kezelni, nem utasításként, vagyis egy űrlapon beküldött szöveg ne adhasson a Botnak új utasítást vagy hozzáférést.`,
      },
      { type: "h2", text: "Másolás, törlés, elrejtés" },
      {
        type: "p",
        html: `A cikk arra is figyelmeztet, hogy nézd meg, mit viszel át, amikor egy Botot másolsz vagy megosztasz. A dokumentáció szerint egy megosztott Bot hozzáadása másolatot készít a fogadó fiókjában, de nem adja át a gépedet, a belépéseidet és a beszélgetéseidet. A Duplicate más: a profilt, a beállításokat, a bekapcsolt skilleket, a routine-okat és az avatart viszi, a beszélgetést, a tanult memóriát és a csatolmányokat nem. (<a href="${docs.bots}">Create and manage Bots</a>) Hogy egy megosztott sablonból mi jön át, arról külön oldalunk szól: <a href="/halado/sablon-mi-jon-at/">Mi jön át egy sablonból?</a>`,
      },
      {
        type: "p",
        html: `A dokumentáció szerint a közös gép fájljai és belépései nincsenek Botonként elkülönítve, és egy Bot törlése után is a gépen maradhatnak; egy Bot elrejtése pedig nem szünetelteti sem a Botot, sem a routine-jait. (<a href="${docs.bots}">Create and manage Bots</a>) A szerző ezért azt javasolja, hogy amikor egy munka véget ér, a kapcsolatokat szándékosan bontsd, a munkaadatokat pedig szándékosan töröld.`,
      },
      { type: "h2", text: "Jóváhagyás, nyilvántartás és költség" },
      {
        type: "p",
        html: `A szerző szerint a fontos határok ne csak a kérésben, hanem a beállításokban is szerepeljenek. A dokumentáció szerint az Ask first szabályok mindig megállítják a rájuk illő műveleteket, az Auto Review pedig modellalapú, és a legkisebb jogosultság elvét kiegészíti, nem helyettesíti. (<a href="${docs.approve}">Approvals</a>) A szerző a külső üzeneteket, a költést és a fontos nyilvántartások módosítását emberi jóváhagyáshoz kötné. A szabályok beállítását az <a href="/5-nap/5-nap-masodik-bot-biztonsag/">5. napon</a> mutattuk meg.`,
      },
      {
        type: "p",
        html: `A fontos munkák mellé a szerző egy egyszerű nyilvántartást is vezetne: kérés, felelős, források, állapot, link az eredményre, és ami rád vár. Az állapotok legyenek pontosak: a „brief kész” nem ugyanaz, mint a „brief ellenőrizve”, és az „előkészített válasz” sem ugyanaz, mint az „elküldött levél”.`,
      },
      {
        type: "p",
        html: `Költség: a Cursor leírása szerint a keret hetente frissül, utána a többlethasználat az előre fizetett kreditből megy, vagy ha be van kapcsolva, on-demand használatként folytatódhat. (<a href="${docs.plans}">Grok Bot plans</a>) A szerző azt javasolja, hogy gyakori routine-ok előtt állítsd be a költéskorlátot. Értesítést Botonként kapcsolhatsz be arra az esetre, ha a Bot végzett vagy válaszra vár. (<a href="${docs.settings}">Settings and notifications</a>)`,
      },
      { type: "h2", text: "Amit nem ellenőriztünk" },
      {
        type: "ul",
        items: [
          `A promptokat és a megbeszélés-előkészítő folyamatot nem próbáltuk ki; a szerző szerint ezek szerkesztői javaslatok, nem tesztelt eredmények.`,
          `Nate Herk videóját nem néztük meg. A cikk a videó alapján a közös és az egyéni memóriát, valamint a hosszú beszélgetések automatikus rövidítését (compaction) is említi; ezt a dokumentációban nem találtuk, és nem ellenőriztük.`,
          `Hogy a Teach a task a te fiókodban elérhető-e: a dokumentáció szerint fokozatosan kapcsolják be.`,
          `Hogy mennyi heti keretet fogyaszt egy hétköznaponként futó routine: ez fióktól és csomagtól függ.`,
        ],
      },
      {
        type: "note",
        html: `<strong>Forrás és szerző.</strong> Ez az oldal a Botkezdő saját útmutatója, nem hivatalos x.ai anyag: Tony Wood 2026-10-17-én közzétett, „Grok Bot: A Practical Guide to Getting Work Done” című blogcikkének rövid magyar összefoglalója, nem saját módszer és nem fordítás. A cikk minden joga a szerzőé (© 2026 Tony Wood. All rights reserved.), ezért saját szavainkkal foglaljuk össze, és csak négy promptot idézünk szó szerint. A teljes cikket az eredeti oldalon olvashatod: <a href="${src.wood.url}">${src.wood.url}</a>. Lekérve: ${woodFetched}.`,
      },
      {
        type: "done",
        items: [
          "Van egy Botod egyetlen feladatra, a leírásában a határokkal; egyszer lefuttattad és kijavítottad, a bevált módszert skillként mentetted, és routine-t csak tesztfuttatás után, Europe/Budapest időzónával állítottál be.",
        ],
      },
    ],
    sources: [src.wood, src.dBotsWood, src.dAppsWood, src.dSkillsWood, src.dApproveWood, src.dTeamsWood, src.dSettingsWood, src.plansWood],
  },
  {
    slug: "sablon-mi-jon-at",
    title: "Sablon átvétele: mi jön át egy megosztott Botból, és mi marad a készítőnél",
    nav: "Mi jön át egy sablonból?",
    card: "Egy közösségi X-poszt és a dokumentáció alapján: mit visz át egy megosztott Bot-sablon, mit nem, és mit kell magadnak beállítanod.",
    description:
      "Megosztott Grok Bot-sablon átvétele: @ericosiu X-posztjának magyar összefoglalója a hivatalos dokumentációval összevetve. Mi jön át (leírás, skillek, routine-ok), mi nem (gép, belépések, beszélgetés), mi a helyzet a memóriával és a jóváhagyásokkal, saját ellenőrzőlistával. Haladó útmutató a Kezdő 5 nap után.",
    lead: "Ez az oldal egy más által írt X-poszt rövid magyar összefoglalója, a hivatalos dokumentációval kiegészítve. @ericosiu 2026-10-14-én azt írta le, mi jön át, amikor valaki átveszi az általuk nyilvánosan megosztott AEO/SEO Bot sablonját, és mi marad náluk. Itt azt nézzük meg, mit mond erről a dokumentáció, és mit érdemes magadnak beállítanod.",
    audience: "Annak szól, aki egy más által megosztott Bot-sablont venne át, vagy a saját Botját osztaná meg, és már végigment a Kezdő 5 napon.",
    minutes: "Kb. 10 perc az oldal elolvasására, a mi becslésünk",
    fetched: templateFetched,
    steps: [
      {
        name: "Nézd meg az előnézetet",
        text: "A sablon x.ai-oldalán olvasd el a nevet, a leírást, a skilleket és a routine-okat, mielőtt bármit hozzáadnál.",
      },
      {
        name: "Add to Grok Bot: saját másolat",
        text: "A hozzáadás másolatot készít a fiókodban. Más által készített sablonnál a gombbal a harmadik féltől származó Botokra vonatkozó feltételeket is elfogadod.",
      },
      {
        name: "A saját forrásaid, csak a szükséges connectorral",
        text: "A sablon nem hozza a készítő belépéseit: a saját oldaladat és forrásaidat neked kell bekötnöd. Csak azt a connectort kapcsold be, amelyre a munkához szükség van.",
      },
      {
        name: "Routine-ok és saját Ask first szabály",
        text: "Nézd át az átjött routine-okat, mielőtt futni hagynád őket (a tesztfuttatás valódi munkát végez), és állíts be saját Ask first szabályt a küldésre, az írásra és a közzétételre.",
      },
      {
        name: "Ha te osztasz meg",
        text: "Mielőtt a saját Botodat megosztanád, vedd ki a leírásból és a skillekből az API-kulcsokat, a belső URL-eket és az ügyféladatokat.",
      },
    ],
    blocks: [
      {
        type: "note",
        html: `<strong>Összefoglaló, nem saját anyag.</strong> Ez az oldal ${c("tplPost")} X-posztját foglalja össze magyarul, saját szavainkkal; nem fordítás. Közzétéve: ${src.tplPost.date}. A posztban nincs prompt, ezért ezen az oldalon sem idézünk promptot; helyette egy saját ellenőrzőlistát adunk. A poszt állításait a hivatalos dokumentációval vetettük össze. Poszt: <a href="${src.tplPost.url}">${src.tplPost.url}</a>. Lekérve: ${templateFetched}.`,
      },
      { type: "h2", text: "Mit mond a poszt?" },
      {
        type: "p",
        html: `A szerző szerint aki átveszi az AEO/SEO Botjukat, az a munkamódszerüket kapja meg, a hozzáféréseiket nem. Egy Grok Bot-sablon négy dolgot visz át: a Bot nevét és munkaleírását, a skilljeit (a lépésről lépésre követett módszereket), a routine-jait (az ütemezetten, kérés nélkül futó feladatokat) és az identitását. Nem viszi át a számítógép-hozzáférésüket, a belépéseiket, a beszélgetéseiket és azt, amit az eredeti Bot megjegyzett. A saját oldaladat és forrásaidat te kötöd be, így a Bot a te tartalmadból tanul, nem az övékből.`,
      },
      {
        type: "p",
        html: `A szerző azt írja, ezért meri nyilvánossá tenni a sablont: a folyamat és a korlátai átmennek, köztük az a szabály, hogy egy oldal sem kerül ki, amíg egy szerkesztő jóvá nem hagyja, a privát adat pedig náluk marad. Azt is írja, hogy egy kipróbált folyamatból gyorsabb indulni, mint egy üres promptból; ez a véleménye, nem mért adat.`,
      },
      {
        type: "p",
        html: `A szerző a „fork” szót használja. A dokumentáció ehelyett sablonról (template), hozzáadásról (Add to Grok Bot), importálásról és másolásról (Duplicate) beszél, ezért mi is ezeket a kifejezéseket használjuk. A poszt képén szereplő, parancssorra emlékeztető sor díszítés: a dokumentáció nem ír ilyen parancsról. A sablont a hivatalos x.ai-oldalán, az Add to Grok Bot gombbal lehet hozzáadni: <a href="${src.tplPage.url}">AEO/SEO Bot by Eric</a>. Az oldal maga figyelmeztet: „This AI bot was created by a third-party user, not by SpaceXSI. It may act on your behalf.”`,
      },
      { type: "h2", text: "Mit mond a dokumentáció?" },
      {
        type: "p",
        html: `A dokumentáció szerint a megosztási link előnézete a Bot megosztott beállításait mutatja: az identitását, a leírását, a skilljeit és a routine-jait. A hozzáadásról ezt írja: „Adding a shared Bot creates a copy on the recipient's account. It does not give them your computer, logins, or conversation history.” A GYIK ugyanezt mondja, és hozzáteszi, hogy a hozzáadással a fogadó elfogadja a harmadik féltől származó Botokra vonatkozó feltételeket. (<a href="${docs.bots}">Create and manage Bots</a>, <a href="${docs.faq}">FAQ</a>) A saját Bot másolása (Duplicate) más szabályokkal működik:`,
      },
      {
        type: "table",
        caption: "Mi jön át és mi nem, a dokumentáció szerint (lekérve 2026-10-22)",
        headers: ["Mód", "Átjön", "Nem jön át"],
        rows: [
          [
            "Megosztott sablon (Add to Grok Bot)",
            `Identitás, leírás, skillek, routine-ok; a fogadó fiókjában saját másolat készül. (<a href="${docs.bots}">Bots</a>)`,
            `A készítő gépe, belépései és beszélgetései. (<a href="${docs.bots}">Bots</a>, <a href="${docs.faq}">FAQ</a>)`,
          ],
          [
            "Duplicate (saját Bot másolása)",
            `Profil, beállítások, bekapcsolt skillek, routine-ok, avatar. (<a href="${docs.bots}">Bots</a>)`,
            `Beszélgetés, tanult memória, csatolmányok. (<a href="${docs.bots}">Bots</a>)`,
          ],
        ],
      },
      {
        type: "p",
        html: `A Team Bots oldal táblázata szerint egy nyilvános sablon minden másolatát az új tulajdonosa tartja karban, külön-külön. (<a href="${docs.teamBots}">Team Bots</a>)`,
      },
      { type: "h2", text: "A memória pontosítása" },
      {
        type: "p",
        html: `A poszt szerint semmi nem jön át abból, amit az eredeti Bot megjegyzett. A dokumentáció ezt sablonra szó szerint nem mondja ki: a tanult memória kizárását a Duplicate-nél írja. A Team Bots oldal táblázata szerint nyilvános sablonnál a memória „Starts from what the template shares, then separate per copy”, vagyis abból indul, amit a sablon megoszt, és utána másolatonként külön él. (<a href="${docs.teamBots}">Team Bots</a>) Ami a sablon leírásában és skilljeiben szövegként benne van, az tehát átjön; hogy a készítő Botjának tanult memóriájából pontosan mennyi, azt nem tudjuk (lásd lent).`,
      },
      { type: "h2", text: "A leírt szabály átjön, a beállított védelem nem" },
      {
        type: "p",
        html: `A szerző szerint a korlátok is átmennek, például hogy egy oldal sem kerül ki szerkesztői jóváhagyás nélkül. A sablonoldal leírása szerint a Bot a piszkozatokat közzététel nélkül hagyja, amíg be nem gépelsz egy pontos közzétételi sort („leaves drafts unpublished until you type an exact publish line”). (<a href="${src.tplPage.url}">AEO/SEO Bot by Eric</a>) Ami így, szövegként a leírásban vagy egy skillben szerepel, az a sablonnal együtt átjön.`,
      },
      {
        type: "note",
        html: `<strong>Ez a mi következtetésünk:</strong> a leírt szabály még nem beállított védelem. A dokumentáció szerint „Personal Auto-review rules are stored on the current desktop and synced to its Grok Bot computer”, vagyis a személyes Auto-review szabályok az asztali gépen és a Grok Bot-gépen vannak, nem a Botban. Ebből arra következtetünk, hogy egy sablon nem hozza magával a készítő jóváhagyási szabályait: az Auto-review szabályokat (például Ask first) az átvevőnek magának kell beállítania. Az Ask first szabályok a dokumentáció szerint mindig megállítják a rájuk illő műveleteket. (<a href="${docs.approve}">Approvals</a>) A beállításukat az <a href="/5-nap/5-nap-masodik-bot-biztonsag/">5. napon</a> mutattuk meg.`,
      },
      { type: "h2", text: "Lépések" },
      { type: "steps" },
      { type: "h2", text: "Ellenőrzőlista egy sablon átvételéhez" },
      {
        type: "p",
        html: `<strong>Saját ellenőrzőlistánk, nem a posztból és nem a dokumentációból.</strong> A fenti, dokumentált tényekből raktuk össze; a sablont magát nem vettük át.`,
      },
      { type: "p", html: `<strong>Ami átjön: nézd át, mielőtt használod.</strong>` },
      {
        type: "ul",
        items: [
          `A leírás: kinek dolgozik a Bot, mit csinál, hol áll meg. Igaz-e ez rád is?`,
          `A skillek: milyen lépéseket követ, és melyik ír, küld vagy tesz közzé valamit.`,
          `A routine-ok: mikor futnak, milyen időzónában, és mit csinálnak.`,
        ],
      },
      { type: "p", html: `<strong>Ami nem jön át: ezt neked kell pótolnod.</strong>` },
      {
        type: "ul",
        items: [
          `A készítő belépései és connectorai. A saját oldaladhoz és forrásaidhoz a te fiókodban kell bekötnöd a connectort vagy belépned.`,
          `A készítő beszélgetései és gépe. A Bot a korábbi munkájukat nem ismeri, csak azt, ami a leírásban és a skillekben szerepel.`,
          `A készítő jóváhagyási beállításai (ez a mi következtetésünk, lásd fent).`,
        ],
      },
      { type: "p", html: `<strong>Amit magadnak kell beállítanod.</strong>` },
      {
        type: "ul",
        items: [
          `Csak a szükséges connectort kapcsold be. A telepített connector fiókszintű, vagyis minden személyes Botodnál elérhető. (<a href="${docs.apps}">Use the computer and apps</a>)`,
          `Ask first szabályt a küldésre, az írásra és a közzétételre, mielőtt a routine-ok futni kezdenek.`,
          `Egy tesztfuttatást biztonságos bemenettel: a dokumentáció szerint ez valódi munkát végez. (<a href="${docs.skills}">Skills and routines</a>)`,
        ],
      },
      {
        type: "note",
        html: `<strong>Saját megjegyzésünk, nem a forrásból: az átvett routine a te fiókodban fut.</strong> Egy átvett sablon routine-jai az átvétel után a te fiókodban, a te connectoraiddal futhatnak. Mielőtt bekapcsolod őket, nézd át, mit csinálnak, és az írási, küldési és közzétételi lépésekhez kérj jóváhagyást. A sablonoldal is jelzi: „It may act on your behalf.”`,
      },
      { type: "h2", text: "Ha te osztod meg a saját Botodat" },
      {
        type: "p",
        html: `A dokumentáció szerint a megosztási linknél választhatsz, ki nyithatja meg: Public link vagy Team-only. Megosztás előtt pedig ezt kéri: „Remove API keys, internal URLs, customer data, and anything else you would not put in a public document before you share.” (<a href="${docs.bots}">Create and manage Bots</a>) A poszt szerzője ugyanezt a szétválasztást írja le: a folyamatot megosztotta, a hozzáféréseket és az adatokat nem.`,
      },
      { type: "h2", text: "Amit nem ellenőriztünk" },
      {
        type: "ul",
        items: [
          `Nem vettük át az AEO/SEO Bot sablont, így azt sem láttuk, pontosan mi jön át vele.`,
          `Hogy az átvett routine-ok bekapcsolva vagy szüneteltetve érkeznek-e: a dokumentáció erről nem ír.`,
          `A „so it behaves the way ours does” állítást: a viselkedés a saját forrásaidtól és connectoraidtól is függ.`,
          `Hogy a sablon pontosan mennyit visz át a készítő Botjának tanult memóriájából: a dokumentáció szerint a másolat memóriája abból indul, amit a sablon megoszt.`,
        ],
      },
      {
        type: "note",
        html: `<strong>Forrás és szerző.</strong> Ez az oldal a Botkezdő saját útmutatója, nem hivatalos x.ai anyag: @ericosiu 2026-10-14-én 16:00-kor (budapesti idő) közzétett X-posztjának rövid magyar összefoglalója, a hivatalos dokumentációval kiegészítve; nem saját módszer és nem fordítás. A szerző válaszában egy webinár-regisztráció és egy harmadik féltől származó sablonoldal linkje is szerepel; ezeket nem linkeljük, a sablont a hivatalos x.ai-oldalán találod. Poszt: <a href="${src.tplPost.url}">${src.tplPost.url}</a>. Sablonoldal: <a href="${src.tplPage.url}">${src.tplPage.url}</a>. Lekérve: ${templateFetched}.`,
      },
      {
        type: "done",
        items: [
          "Átnézted a sablon leírását, skilljeit és routine-jait, a saját forrásaidat kötötted be, a küldéshez, az íráshoz és a közzétételhez saját Ask first szabályt állítottál be, és tudod, mi marad a készítőnél.",
        ],
      },
    ],
    sources: [src.tplPost, src.tplPage, src.dBotsTpl, src.dFaqTpl, src.dTeamBotsTpl, src.dApproveTpl, src.dAppsTpl, src.dSkillsTpl],
  },
  {
    slug: "heti-keret-sporolas",
    title: "Spórolj a heti kerettel: mérés, pontos első üzenet, takarékos routine-ok",
    nav: "Heti keret spórolás",
    card: "Egy közösségi X-cikk összefoglalója: hogyan mérd, mennyit fogyaszt egy feladat, és hogyan fogyasszon kevesebbet pontos első üzenettel, rövid chatekkel, takarékos routine-okkal és connectorokkal.",
    description:
      "Grok Bot heti keret takarékosan: Kanika (@KanikaBK) X-cikkének magyar összefoglalója a hivatalos dokumentációval összevetve. Mérés előtte és utána, pontos első üzenet, egy chat egy munka, routine-ok átnézése, connector a böngésző előtt, költéskorlát. Négy eredeti prompttal. Haladó útmutató a Kezdő 5 nap után.",
    lead: "Ez az oldal egy más által írt X-cikk rövid magyar összefoglalója, nem saját módszer. Kanika (@KanikaBK) 2026-10-21-én azt írta le, hogyan fogyasztott ugyanaz a feladat kevesebbet a heti keretéből, miután megváltoztatta, hogyan adja ki a munkát a Botnak. A cikk címe 8x hosszabb keretet ígér, de a szerző saját számai (75% helyett 37%) egyetlen feladaton nagyjából kétszeres különbséget mutatnak. Mi szorzót nem ígérünk, és saját mérést nem végeztünk.",
    audience: "Annak szól, akinek a heti kerete a hét vége előtt elfogy, vagy aki tudni szeretné, mennyit fogyasztanak a feladatai, és már végigment a Kezdő 5 napon.",
    minutes: "Kb. 15 perc az oldal elolvasására, a mi becslésünk",
    fetched: kanikaFetched,
    steps: [
      {
        name: "Nézd meg a heti keretedet",
        text: "A Grok Botban a Settings → Usage & Billing alatt, weben a grok.com/dashboard oldal Usage részén. Régebbi előfizetésnél a cursor.com/dashboard oldalon.",
      },
      {
        name: "Mérj egy valódi feladaton",
        text: "Válassz egy hetente ismétlődő feladatot, és jegyezd fel a keret állását előtte és utána, előbb a megszokott módon, aztán a lenti beállításokkal. Mérés előtt szüneteltesd a routine-okat, és csak piszkozatot kérj.",
      },
      {
        name: "Egy pontos első üzenet",
        text: "Mondd meg az első üzenetben, mit csináljon, hol, milyen háttérrel, és mi számít késznek.",
      },
      {
        name: "Egy chat, egy munka",
        text: "Egy munka végén mentesd el egy fájlba a rövid összefoglalóját, és a következő munkát új chatben kezdd, ezzel a fájllal.",
      },
      {
        name: "Nézd át a routine-okat",
        text: "Kérj listát a routine-jaidról, ritkítsd őket, szűkítsd a triggereket, és szüneteltesd, amire ezen a héten nincs szükséged.",
      },
      {
        name: "Connector a böngésző előtt, és költéskorlát",
        text: "Ahol van connector, azt használja a Bot, ne a böngészőt. A fizetős többlethasználatra állíts havi korlátot, vagy hagyd kikapcsolva az Auto Top-upot.",
      },
    ],
    blocks: [
      {
        type: "note",
        html: `<strong>Összefoglaló, nem saját anyag.</strong> Ez az oldal ${c("kanika")} „How To Make Your Grok Bot Weekly Limit Last 8x Longer (Full Setup + Prompts)” című X-cikkét foglalja össze magyarul, saját szavainkkal; nem fordítás. Közzétéve: ${src.kanika.date}. A cikkből négy promptot (és egy rövid kiegészítőt) idézünk szó szerint, angolul. <strong>A címben szereplő 8x-et nem vesszük át:</strong> a szerző saját mérése szerint ugyanaz a feladat a heti keret 75%-a helyett 37%-ot fogyasztott, ami nagyjából kétszeres különbség, egyetlen feladaton. A cikk maga is azt írja, hogy mérés nélkül a „8x” csak találgatás. Cikk: <a href="${src.kanika.url}">${src.kanika.url}</a>. Lekérve: ${kanikaFetched}.`,
      },
      { type: "h2", text: "Hogyan működik a heti keret?" },
      {
        type: "p",
        html: `Az alábbiak csak a The X Subscriptionre igazak. A dokumentáció szerint a Grok Bot a Premium, a Super és az Ultra csomagban van benne, a Plusban nincs. Listaárak: Premium 30 USD/hó, Super 100 USD/hó, Ultra 200 USD/hó; éves fizetésnél havonta 25, 84, illetve 167 USD. A listaár nem tartalmazza az adót („List prices do not include sales tax”), és az árak változhatnak; a pontos, aktuális árat a <a href="${docs.xsPricing}">Pricing</a> oldalon nézd meg. (lekérve ${kanikaFetched}) A régebbi Cursor-, SuperGrok- és X Premium-előfizetések tovább élnek, és ezeknél a keret és a használat felülete eltér: a dokumentáció szerint váltás előtt a használatot a cursor.com/dashboard oldalon nézed. (<a href="${docs.xsGrokBot}">The X Subscription: Grok Bot</a>)`,
      },
      {
        type: "p",
        html: `A Cursor súgója szerint a Grok Bot ugyanabból a heti keretből fogyaszt, mint a Cursor és a Grok appok („not a separate Grok Bot meter”), és a keret hetente frissül. Ha elfogy, a többlethasználat az előre fizetett kreditből megy. (<a href="${docs.plans}">Grok Bot plans</a>) A próbakeretnél a súgó ki is mondja, hogy a fogyasztást a lépések és a tokenek mérik, nem az elküldött üzenetek száma; általánosabban pedig azt írja, hogy a fogyasztás attól függ, milyen munkát adsz a Botnak, és mennyi erőfeszítést kíván egy feladat. (<a href="${docs.plans}">Grok Bot plans</a>, <a href="${docs.modelsHelp}">Grok Bot models</a>) Modellt nem választhatsz: „Cursor manages model selection, so there is no model picker.” (<a href="${docs.settings}">Settings and notifications</a>) A szerző ebből azt vonja le, hogy minden megtakarítás abból jön, hogyan adod ki a munkát.`,
      },
      { type: "h2", text: "Lépések" },
      { type: "steps" },
      { type: "h2", text: "Először mérj" },
      {
        type: "p",
        html: `A szerző szerint ezt a lépést szokták kihagyni. A használatot a Grok Botban a Settings → Usage &amp; Billing alatt látod, amely a dokumentáció szerint a heti keretet és a jogosult fiókoknál az on-demand használatot mutatja (<a href="${docs.settings}">Settings and notifications</a>); weben a grok.com/dashboard oldal Usage részén (<a href="${docs.plans}">Grok Bot plans</a>).`,
      },
      {
        type: "p",
        html: `A módszere: válassz egy valódi, hetente ismétlődő feladatot (az ő példája az olvasatlan levelek összefoglalása és válaszpiszkozatok). Jegyezd fel a keret állását, futtasd a feladatot a megszokott módon (egy régi, hosszú chatben, homályos kéréssel), és jegyezd fel újra; a különbség a feladat ára (a táblázatban: Alap). Utána ugyanezt a lenti beállításokkal (a táblázatban: Új). Mindkettőt háromszor, és vedd az átlagot, mert egy futás félrevezethet. Mérés előtt szüneteltesd a routine-jaidat, különben más munka is belekeveredik a számokba.`,
      },
      {
        type: "table",
        caption: "Mérőtáblázat a szerző táblázata alapján, magyar fejlécekkel, üresen; az értékek a heti keret százalékában. Saját mérést nem végeztünk.",
        headers: ["Futás", "Mód", "Előtte", "Utána", "Fogyott"],
        rows: [
          ["1", "Alap", "", "", ""],
          ["2", "Alap", "", "", ""],
          ["3", "Alap", "", "", ""],
          ["1", "Új", "", "", ""],
          ["2", "Új", "", "", ""],
          ["3", "Új", "", "", ""],
          ["Átlag", "Alap ÷ Új", "", "", "…x"],
        ],
      },
      {
        type: "p",
        html: `A szerző szerint az eredmény a táblázat utolsó cellája, nem a cikk címe. Az ő száma, egyetlen feladatra: 75% helyett 37%, vagyis kb. 2x. Hogy ezt egy vagy három futásból számolta, a cikkből nem derül ki.`,
      },
      {
        type: "note",
        html: `<strong>Saját megjegyzésünk, nem a forrásból: a mérés valódi munka.</strong> A mérés maga is fogyasztja a keretet, és a Bot közben valódi munkát végez. Tesztnél csak piszkozatot kérj, küldést ne (a szerző példájában a válaszokból is csak piszkozat legyen). A routine-ok tesztfuttatásáról a súgó is azt írja: „A routine that never runs doesn't spend usage. Test does, because it performs the work.” (<a href="${docs.routinesHelp}">Grok Bot routines</a>) A connectorok minden Botodnál elérhetők, ezért csak azt kösd be, amire a feladathoz szükség van, és ha elég, csak olvasási hozzáféréssel. (<a href="${docs.apps}">Use the computer and apps</a>)`,
      },
      { type: "h2", text: "Egy pontos első üzenet" },
      {
        type: "p",
        html: `A dokumentáció szerint egy jó feladat megmondja, mit csináljon a Bot, hol dolgozzon, milyen háttérrel, és milyen a kész munka: „This tells the Bot what to do, where to work, what context to pull in, and what finished work looks like.” (<a href="${docs.overview}">Overview</a>) A szerző szerint a homályos kérés kalandozásra készteti a Botot, a kalandozás pedig lépés, vagyis fogyasztás. Az ő sablonja:`,
      },
      {
        type: "prompt",
        label: "Kanika (@KanikaBK): első üzenet sablon, eredeti",
        code: `Task: [what to do, in one line]
Where: [which app or file, e.g. my Gmail, last 24 hours only]
Use: [the context it needs, nothing more]
Done when: [the exact output, e.g. a list of max 10 items, 1 line each]
Stop after that. Don't research anything extra.
If you get stuck twice, stop and ask me.`,
        caption: `Forrás: ${c("kanika")}, ${src.kanika.date} (közösségi forrás), a cikk 2. lépése. Szó szerint. A szögletes zárójeles részeket cseréld ki a saját feladatodra.`,
      },
      { type: "h2", text: "Egy chat, egy munka" },
      {
        type: "p",
        html: `A dokumentáció szerint a Bot megőrzi a tartós beállításokat, a szerepedet és a korábbi munkák összefoglalóit („Stable preferences, role context, and summaries of prior work.”). (<a href="${docs.overview}">Overview</a>) A szerző ebből arra jut, hogy a Botnak nincs szüksége a teljes régi chatre: egy chat, egy munka. Saját hibájaként írja, hogy egy hétig egyetlen óriási chatet használt. Egy munka végén ezt kéri:`,
      },
      {
        type: "prompt",
        label: "Kanika (@KanikaBK): munka-összefoglaló fájlba, eredeti",
        code: `Save a short summary of this job to a file:
what we did, the decisions, the file names, and the next step.
Max 10 lines. Then tell me the file name.`,
        caption: `Forrás: ${c("kanika")}, ${src.kanika.date} (közösségi forrás), a cikk 3. lépése. Szó szerint.`,
      },
      {
        type: "prompt",
        label: "Kanika (@KanikaBK): új chat a fájllal, eredeti",
        code: `New job. Read [file name] first. That's all the context you need.
Next step: [what to do now].`,
        caption: `Forrás: ${c("kanika")}, ugyanott. Szó szerint; ezt az új chat első üzeneteként küldi.`,
      },
      {
        type: "p",
        html: `A szerző maga írja, hogy a dokumentáció nem ígéri meg, mennyit spórol egy új chat; ezért kell mérni. Hogy fájlba írt összefoglalóval hogyan építhetsz hosszabb távú tudásbázist, arról a <a href="/halado/masodik-agy/">Második agy</a> oldal szól.`,
      },
      { type: "h2", text: "Routine-ok: a csendes fogyasztás" },
      {
        type: "p",
        html: `A Cursor súgója egyenesen kimondja: „Each run spends usage, so a routine that runs often spends more than one that runs rarely. An hourly schedule, a short interval, or a Slack trigger on a busy channel can use a week of usage in a day.” A Slack-triggernél azt kéri: „Keep the channel and phrase narrow.” Ha a heti keret a vártnál gyorsabban fogy, a súgó szerint szüneteltesd a nem szükséges routine-okat, mert ami nem fut, az nem fogyaszt. (<a href="${docs.routinesHelp}">Grok Bot routines</a>) A szerző konkrét ütemet is javasol (2–3 óránként vagy napi háromszor, nem tízpercenként); ez az ő javaslata, a dokumentáció ilyen számot nem ad. Hogy milyen gyakran fusson egy routine, mikor jobb egy esemény, és hogyan legyen a gyakori rutin előtt egy olcsó ellenőrzés, arról a <a href="/halado/rutinok-ritmusa/">Rutinok okosan</a> oldal szól részletesen.`,
      },
      {
        type: "prompt",
        label: "Kanika (@KanikaBK): routine-ok átnézése, eredeti",
        code: `List all my routines. For each one show: what it does, how often it runs,
and whether it actually found something useful in its last few runs.
Then suggest a slower schedule or a narrow trigger for each one.
Don't change anything until I say yes.`,
        caption: `Forrás: ${c("kanika")}, ${src.kanika.date} (közösségi forrás), a cikk 4. lépése. Szó szerint. Az utolsó sor miatt a Bot csak javasol, a változtatásról te döntesz.`,
      },
      { type: "h2", text: "Connector a böngésző előtt" },
      {
        type: "p",
        html: `A dokumentáció szerint ahol van connector, azt érdemes használni: „Prefer a connector when one is available: it is often more reliable than clicking through a website.” (<a href="${docs.apps}">Use the computer and apps</a>) A GYIK is strukturáltabbnak és megbízhatóbbnak nevezi („more structured and reliable”). (<a href="${docs.faq}">FAQ</a>) Hogy ez kevesebb lépést és így kevesebb fogyasztást jelent, az a szerző következtetése; a dokumentáció csak a megbízhatóságról ír. A connectorok bekötését a <a href="/5-nap/2-nap-appok-bekotese/">2. napon</a> mutattuk meg.`,
      },
      {
        type: "prompt",
        label: "Kanika (@KanikaBK): connector előbb, eredeti",
        code: `For every task: use a connected app first.
Only open the browser if there's no connector for it.
Tell me when you had to use the browser, and why.`,
        caption: `Forrás: ${c("kanika")}, ${src.kanika.date} (közösségi forrás), a cikk 6. lépése. Szó szerint.`,
      },
      { type: "h2", text: "Költéskorlát" },
      {
        type: "p",
        html: `A szerző azt javasolja, hogy egy rosszul sikerült hét ne okozzon meglepetést a bankkártyádon. A Cursor GYIK-je szerint a The X Subscriptionön „leave Auto Top-up off or set a monthly additional usage limit under Additional usage credits at grok.com/dashboard/billing”. (<a href="${docs.faqCursor}">Grok Bot FAQs</a>) A dokumentáció szerint az Auto Top-up nem kötelező, és csak akkor fut, ha bekapcsolod („Auto Top-up is optional and only runs after you enable it.”). (<a href="${docs.xsExtraUsage}">Extra usage</a>)`,
      },
      {
        type: "p",
        html: `Hogy a korlát megállítja-e a már futó feladatot, arról a két forrás mást mond, és mi nem döntjük el. A Cursor GYIK-je ugyanabban a válaszban, a régebbi Cursor-csomagok on-demand limitjéről szóló rész után ezt írja: „The cap does not stop a Bot in the middle of a run, so a running task can go a little past it.” (<a href="${docs.faqCursor}">Grok Bot FAQs</a>) A The X Subscription dokumentációja viszont így fogalmaz: „To put a hard stop on paid Additional Usage, set a monthly additional usage limit.” (<a href="${docs.xsSpendingCaps}">Spending caps</a>) A szerző a Cursor-súgót követi: szerinte egy futó munka kicsit túlmehet a korláton.`,
      },
      {
        type: "p",
        html: `A szerző pénzben is kiszámolja: ha ugyanabból a keretből kétszer annyi munka jön ki, nem kell a 30 dolláros Premiumról a 100 dolláros Superre váltania. Ez az ő saját döntése és számítása.`,
      },
      { type: "h2", text: "Amit nem ellenőriztünk" },
      {
        type: "ul",
        items: [
          `A szerző 75% → 37%-os mérését: egyetlen feladaton mérte, és nem derül ki, hány futásból. Azt sem, hogy a módszer nálad mennyit spórol; saját mérést nem végeztünk.`,
          `Hogy egy új chat ténylegesen mennyivel kevesebbet fogyaszt: a dokumentáció erről nem ír.`,
          `Hogy a connector használata mennyivel kevesebb lépést jelent, mint a böngésző: a dokumentáció csak megbízhatóbbnak nevezi.`,
          `Hogy a The X Subscriptionön a havi additional usage limit megállítja-e a már futó feladatot: a Cursor-súgó szerint nem, a docs.x.ai „hard stop”-ot ír.`,
          `A javasolt gyakoriságot (2–3 óránként, napi háromszor): ez a szerző javaslata.`,
          `A magyarországi adóval növelt végösszeget: az árak listaárak, adó nélkül.`,
        ],
      },
      {
        type: "note",
        html: `<strong>Forrás és szerző.</strong> Ez az oldal a Botkezdő saját útmutatója, nem hivatalos x.ai anyag: Kanika (@KanikaBK) 2026-10-21-én 10:51-kor (budapesti idő) közzétett X-cikkének rövid magyar összefoglalója, a hivatalos dokumentációval és a Cursor súgójával összevetve; nem saját módszer és nem fordítás. A teljes cikket és az összes promptot az eredeti posztban olvashatod: <a href="${src.kanika.url}">${src.kanika.url}</a>. Lekérve: ${kanikaFetched}.`,
      },
      {
        type: "done",
        items: [
          "Tudod, hol látod a heti keretedet, kitöltötted a mérőtáblázatot egy valódi feladaton (piszkozatokkal), pontos első üzenettel és munkánként új chattel dolgozol, átnézted a routine-jaidat, és beállítottad a költéskorlátot.",
        ],
      },
    ],
    sources: [
      src.kanika,
      src.xsPricingK,
      src.xsGrokBotK,
      src.plansK,
      src.modelsHelpK,
      src.dSettingsK,
      src.dOverviewK,
      src.routinesHelpK,
      src.dAppsK,
      src.dFaqK,
      src.faqCursorK,
      src.xsExtraUsageK,
      src.xsSpendingCapsK,
    ],
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
