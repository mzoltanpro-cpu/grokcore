/**
 * Hivatalos Grok Bot útmutatók (https://x.ai/bot/guides) saját magyar összefoglalóval.
 * Minden összefoglaló csak az adott útmutató saját oldalán olvasható tartalomból készült; nem fordítás.
 * A cím, a kategória és a dátum az x.ai oldaláról való, eredeti (angol) formában.
 */
export const guidesIndexUrl = "https://x.ai/bot/guides";
export const guidesFetched = "2026-10-18";

export type Guide = {
  slug: string;
  title: string;
  /** Az x.ai oldalon látható kategória (eredeti angol felirat). */
  category: string;
  /** Az útmutató oldalán látható dátum, ISO formában. */
  published: string;
  /** Az x.ai útmutató-listáján a „Featured guides” blokkban szerepel-e. */
  featured: boolean;
  summaryHu: string;
};

export const guides: Guide[] = [
  {
    slug: "grok-bot-for-marketing",
    title: "Grok Bot for Marketing",
    category: "Marketing",
    published: "2026-09-24",
    featured: true,
    summaryHu:
      "Hat marketingbotból álló csapat: Market Researcher, Product Marketer, Performance Marketer, Website Ops, Marketing Analyst és Project Manager. A szerző egy kitalált légitársaság (X-Air) példáján mutatja végig a folyamatot a versenytárs-kutatástól a Google Docs-beli pozicionáláson és a Google Ads kampányvázakon át a marketingoldalra nyitott PR-ig. A Marketing Analyst élő hirdetéshez, licithez vagy kerethez nem nyúl, a döntések az embernél maradnak.",
  },
  {
    slug: "grok-bot-for-founder-led-sales",
    title: "Grok Bot for Founder-Led Sales",
    category: "Sales",
    published: "2026-10-06",
    featured: true,
    summaryHu:
      "A Grok for Startups programban dolgozó szerző Founder Mode nevű csomagja korai startupok alapítóinak: egy chief of staff bot és 8 specialista bot, 16 szüneteltetett routine-nal. A beüzemelés kb. 20 kérdést tesz fel (cég, pitch, ICP, célügyfelek, versenytársak, connectorok), és minden routine szünetel, amíg meg nem erősíted az ütemezést. A botok kutatnak, vázlatot írnak és előkészítenek: ICP-kutatás, design-partner megkeresés, hívás-felkészítés, pipeline-előrejelzés.",
  },
  {
    slug: "grok-bot-for-performance-marketing",
    title: "Grok Bot for Performance Marketing",
    category: "Marketing",
    published: "2026-10-05",
    featured: true,
    summaryHu:
      "A Grok Bot fizetett hirdetéseiért felelős szerző leírja, hogyan építettek fel botcsapattal egy teljesen új hirdetési programot a Grok Bot saját indulásához. Botok végzik a keresletkutatást, a büdzsé- és médiamix-javaslatot, a kampánystruktúrát, az első szövegváltozatokat, a konverziókövetést és a riportlapot; a stratégiai döntés és a jóváhagyás az emberé. A szerző szerint a botok nem helyettesítik a media buyert.",
  },
  {
    slug: "grok-bot-for-post-sales",
    title: "Grok Bot for Post-Sales",
    category: "Sales",
    published: "2026-09-24",
    featured: true,
    summaryHu:
      "Egy ügyfélfelelős az onboardingtól a megújításig tartó munkáját egyetlen chief of staff bottal (Gus) viszi, amely a többi botot irányítja. Mögötte ügyfelenként egy account-specialista bot, egy follow-up-vázlatokat őrző bot, egy az ő hangján író bot és egy a dokumentációhoz kötött kérdés-bot dolgozik, a routine-ok pedig előkészítik a hívásokat. A szerző előbb húsz botot próbált közvetlenül kezelni, és az túl sok volt.",
  },
  {
    slug: "grok-bot-for-recruiting",
    title: "Grok Bot for Recruiting",
    category: "Recruiting",
    published: "2026-09-24",
    featured: true,
    summaryHu:
      "A SpaceXSI toborzócsapata interjú-felkészítésre, scorecardokra, sourcingra és interjúkör-elemzésre használja a Grok Botot az ATS-en keresztül, akár hangüzemmódban, útközben. Egy offsite-on saját botokat építettek, például a Preppy-t, amely interjú előtt egyetlen Slack-üzenetben összefoglalja a jelöltet, és a Pulse-t, amely az interjú átiratát a scorecardhoz illeszti.",
  },
  {
    slug: "grok-bot-for-sdrs",
    title: "Grok Bot for SDRs",
    category: "Sales",
    published: "2026-09-24",
    featured: false,
    summaryHu:
      "Egy SDR öt lépésben írja le a Cursor és a Grok Bot közös outbound-folyamatát: kutatás, prospektálás, vázlat, intake, véglegesítés. A Cursor készíti a kutatási csomagot és az első üzenet szövegét, a Grok Bot pedig ellenőrzi az értékesítési eszközökben, hogy a kontakt már aktív-e: a CLEAR kontaktok elküldetlenül felvehetők, a FLAG-esek rá várnak. Semmi nem megy ki automatikusan.",
  },
  {
    slug: "grok-bot-for-work",
    title: "Grok Bot for Work",
    category: "Getting started",
    published: "2026-09-24",
    featured: false,
    summaryHu:
      "Négy bot, amely a szerző szerint megváltoztatta a munkáját: Inbox Manager, Calendar EA, Intel Scout és Bot Boss, ez utóbbi egyetlen belépési pontként fogja össze a többit. Az Inbox Manager e-mailt, Slacket és DM-et olvas, csak a fontos és sürgős ügyeket emeli ki, és alapból csak olvas. Mind a négy bot promptját közli a cikk.",
  },
  {
    slug: "grok-bot-for-legal-ops",
    title: "Grok Bot for Legal Ops",
    category: "Legal",
    published: "2026-09-24",
    featured: false,
    summaryHu:
      "A Legal Ops csapat valós munkafolyamatai: ügyvédi 1:1-ek előkészítése és a döntések visszaírása Notionbe, jogi Slack-kérdések triázsa, Legal Review tracker frissítése Slack- és Salesforce-kontextussal, szerződéses munkafolyamatok (Ironclad) támogatása és heti vezetői összefoglalók vázlata. Minden kimenő üzenetet ember ellenőriz.",
  },
  {
    slug: "grok-bot-101",
    title: "Grok Bot 101",
    category: "Getting started",
    published: "2026-09-11",
    featured: false,
    summaryHu:
      "Alapozó: a Grok Bot egy ügynök saját felhős számítógéppel (asztal, fájlrendszer, terminál, appok), amelyet telefonról és asztali gépről is ugyanúgy elérsz. A szerző bemutatja egy bot felépítését (név, cím, leírás), a bottal való kommunikáció három módját (chat, routine-ok és triggerek, más botok), a jogosultságokat és az allow/block listákat, valamint a botláncokat. Szerinte egy bot beállítása 10–15 perc.",
  },
  {
    slug: "grok-bot-for-engineering",
    title: "Grok Bot for Engineering",
    category: "Engineering",
    published: "2026-09-10",
    featured: false,
    summaryHu:
      "Egy Grok Botot fejlesztő mérnök öt mérnökbotja (Quill, Baltata, Shaoruru, Craig, Hogan) más-más területért felel, a mobil rétegtől a desktop kliensen és az infrastruktúrán át a harnessig. Mindegyik tud Cursor cloud agenteket indítani, átiratokat olvasni, a PR-okhoz csatolt bizonyítékokat átnézni és follow-upot küldeni. A szerző szerint a botok egy területre fókuszálva teljesítenek a legjobban.",
  },
  {
    slug: "grok-bot-for-support",
    title: "Grok Bot for Support",
    category: "Support",
    published: "2026-09-09",
    featured: false,
    summaryHu:
      "Napi több ezer support ticket feldolgozása Grok Bottal, connectorokon keresztül bekötött eszközökkel. A cikk öt feladatot ad a botnak: release-követés és visszajelzés-figyelés, hibareprodukció videóval és lépésekkel, lemorzsolódás-elemzés, visszatérítések elbírálása a szabályzat alapján, jóváhagyással, és egyedi riportok.",
  },
  {
    slug: "templates-for-grok-bot",
    title: "Templates for Grok Bot",
    category: "Getting started",
    published: "2026-09-08",
    featured: false,
    summaryHu:
      "A sablon (template) a bot receptje, nem a klónja: az utasításokat, a releváns memóriákat, skilleket és pluginokat csomagolja, a személyes adatokat, titkokat és egyedi kódot nem. A cikk bemutatja a Share as Template gombot, a csapaton belüli vagy nyilvános megosztást, és azt, hogyan adod hozzá más sablonját az Add to Grok Bot gombbal. Figyelmeztet: telepítés előtt nézd át a sablon részleteit.",
  },
  {
    slug: "how-i-run-multiple-teams-of-grok-bots",
    title: "How I run multiple teams of Grok Bots",
    category: "Engineering",
    published: "2026-08-27",
    featured: false,
    summaryHu:
      "Kísérleti minta: projektenként egy Grok Bot-csatorna, egy botcsapat (roster) és egy bejegyzés egy Notion-adatbázisban. Egy Manager bot hozza létre a projektet, nyitja meg a csatornát és jelöli ki a botokat. Szabály, hogy előbb a meglévő botokat használja, csatornánként legfeljebb hat bot legyen, és új bot csak jóváhagyással készüljön; az elakadt bot Blocked-ra állítja a feladatát és szól.",
  },
  {
    slug: "grok-bot-for-mobile-app-development",
    title: "Grok Bot for mobile app development",
    category: "Engineering",
    published: "2026-08-25",
    featured: false,
    summaryHu:
      "Hat bot, egy mobiljáték-stúdió: a szerző így építi, adja ki és fejleszti a Rank'em nevű játékát. A cikk szerint maga a játék a munkának csak kb. 15%-a, a többi user acquisition, hirdetési kreatív, backend és live ops, kiadáskezelés és QA. Ezekre kapnak a botok saját szerepet, saját számítógépet és teendőlistát.",
  },
  {
    slug: "designing-grok-bot-with-grok-bot",
    title: "Designing Grok Bot with Grok Bot",
    category: "Design",
    published: "2026-08-24",
    featured: false,
    summaryHu:
      "Egy designer mindig működő AI-tervezőbotokkal tervezi a Grok Botot: Figma Bro (ismétlődő Figma-munka), Motion God (interakciós prototípusok), Experiments (ötletek kézzelfoghatóvá tétele) és Devbot (mérnöki kérdések), amelyek egymásnak is delegálnak. A szerző szerint a meglévő eszközeit nem váltották ki, de több ötletet mer kipróbálni, és a döntés nála marad.",
  },
  {
    slug: "grok-bot-for-gtm",
    title: "Grok Bot for GTM",
    category: "Sales",
    published: "2026-08-16",
    featured: false,
    summaryHu:
      "A SpaceXSI enterprise GTM-csapatának belső útmutatója nyilvános változatban. Tanácsai: kösd be a napi eszközeidet (például Salesforce, Gmail, naptár, Slack, Notion), hagyd, hogy a bot megtanulja az írási stílusodat, és használd a mobilappot hangbevitellel. Bemutatja a Chief of Staff botot, a napi meeting-felkészítő routine-t és a prospecting botot.",
  },
  {
    slug: "grok-bot-for-pms",
    title: "Grok Bot for PMs",
    category: "Product",
    published: "2026-08-15",
    featured: false,
    summaryHu:
      "Egy SpaceXSI product manager szerint a Grok Bottal a PM-nek először lehet olyan „csapata” (ügynökökből), amely neki jelent. Statikus prioritáslista helyett a bot a Slack, az e-mail és a meetingek (Granola) alapján „attention listet” készít arról, mivel foglalkozik ténylegesen. A szerző szerint van tanulási görbe, de utána nagyon hasznos.",
  },
];

export function guideUrl(slug: string): string {
  return `${guidesIndexUrl}/${slug}`;
}

export function guideAnchor(slug: string): string {
  return `/utmutatok/#${slug}`;
}

/** Az x.ai útmutató-oldalán látható kategóriaszűrők, eredeti sorrendben. */
export const guideCategories = ["Design", "Product", "Engineering", "Getting started", "Support", "Marketing", "Recruiting", "Sales", "Legal"];

/**
 * Kezdő 5 nap: melyik naphoz melyik útmutató illik, a nap tartalma alapján.
 * A noteHu azt mondja meg, az útmutató melyik része kapcsolódik a naphoz.
 */
export const dayGuides: { day: number; slug: string; noteHu: string }[] = [
  { day: 1, slug: "grok-bot-101", noteHu: "mi a Grok Bot, és miből áll egy bot (név, cím, leírás)" },
  { day: 2, slug: "grok-bot-101", noteHu: "több fiók bekötése szolgáltatásonként (például Gmail, Google Calendar, Google Drive)" },
  { day: 3, slug: "grok-bot-for-work", noteHu: "Inbox Manager: csak olvas, kiemeli a fontosat, vázlatot ír, magától nem küld" },
  { day: 4, slug: "grok-bot-for-gtm", noteHu: "napi meeting-felkészítő routine, rövid, telefonon is olvasható összefoglalóval" },
  { day: 5, slug: "templates-for-grok-bot", noteHu: "második bot sablonból, és mit nézz át telepítés előtt" },
  { day: 5, slug: "how-i-run-multiple-teams-of-grok-bots", noteHu: "előbb a meglévő botot használd, új bot csak jóváhagyással" },
];

export function guidesForDay(n: number) {
  return dayGuides
    .filter((entry) => entry.day === n)
    .map((entry) => ({ ...entry, guide: guides.find((g) => g.slug === entry.slug)! }));
}

/** https://x.ai/grok/use-cases – általános Grok-felhasználások (nem Grok Bot). */
export const useCasesUrl = "https://x.ai/grok/use-cases";
export const useCasesFetched = "2026-10-18";

export const useCases: { group: string; groupHu: string; items: { title: string; hu: string; url: string }[] }[] = [
  {
    group: "Research & Analysis",
    groupHu: "Kutatás és elemzés",
    items: [
      { title: "Synthesize research across sources", hu: "több forrás összefoglalása hivatkozásokkal", url: "https://x.ai/grok/use-cases/research-synthesis" },
      { title: "Monitor news and market signals", hu: "hírek és piaci jelek valós idejű követése a weben és az X-en", url: "https://x.ai/grok/use-cases/market-monitoring" },
      { title: "Analyze financial data and filings", hu: "gyorsjelentések, SEC-beadványok, pénzügyi modellek elemzése", url: "https://x.ai/grok/use-cases/financial-analysis" },
    ],
  },
  {
    group: "Engineering",
    groupHu: "Fejlesztés",
    items: [
      { title: "Plan and implement code changes", hu: "kódváltoztatás tervezése plan mode-ban, megvalósítás a Grok Builddel", url: "https://x.ai/grok/use-cases/code-planning" },
      { title: "Debug production issues faster", hu: "hibakeresés logokban, kódban és stack trace-ekben", url: "https://x.ai/grok/use-cases/debugging" },
      { title: "Write and review technical docs", hu: "architektúra-leírás, API-referencia, runbook a kódbázisból", url: "https://x.ai/grok/use-cases/technical-docs" },
    ],
  },
  {
    group: "Content",
    groupHu: "Tartalom",
    items: [
      { title: "Draft and iterate on long-form content", hu: "blogposzt, riport, ajánlat vázlattal és iterálással", url: "https://x.ai/grok/use-cases/long-form-writing" },
      { title: "Create marketing copy across channels", hu: "hirdetésszöveg, e-mail-sorozat, közösségi poszt a márka hangján", url: "https://x.ai/grok/use-cases/marketing-copy" },
      { title: "Translate and localize content", hu: "fordítás és lokalizáció más piacokra", url: "https://x.ai/grok/use-cases/translation" },
    ],
  },
  {
    group: "Operations",
    groupHu: "Működés",
    items: [
      { title: "Automate workflows with voice agents", hu: "hangalapú ügynök ügyfélkérdésekhez és hívásirányításhoz", url: "https://x.ai/grok/use-cases/voice-agents" },
      { title: "Process and extract from documents", hu: "szerződések, számlák, űrlapok adatainak kinyerése", url: "https://x.ai/grok/use-cases/document-processing" },
      { title: "Build internal tools with the API", hu: "belső eszközök és automatizálások az API-val", url: "https://x.ai/grok/use-cases/internal-tools" },
    ],
  },
  {
    group: "Creative",
    groupHu: "Kreatív munka",
    items: [
      { title: "Generate images from descriptions", hu: "képgenerálás leírásból az Imagine API-val", url: "https://x.ai/grok/use-cases/image-generation" },
      { title: "Edit and restyle existing images", hu: "meglévő képek szerkesztése és átstílusozása", url: "https://x.ai/grok/use-cases/image-editing" },
      { title: "Create short videos from prompts", hu: "rövid videó szinkron hanggal promptból", url: "https://x.ai/grok/use-cases/video-generation" },
    ],
  },
];

export const addIns: { title: string; kind: string; hu: string; url: string }[] = [
  { title: "Grok for Excel", kind: "Microsoft 365 add-in", hu: "kérdések az adatokról, képletek, forgatókönyvek a nyitott munkafüzetben", url: "https://x.ai/grok/excel" },
  { title: "Grok for Word", kind: "Microsoft 365 add-in", hu: "jegyzetek rendezése, helyben szerkesztés, hosszú dokumentumok egységesítése", url: "https://x.ai/grok/word" },
  { title: "Grok for PowerPoint", kind: "Microsoft 365 add-in", hu: "vázlatból diák, a prezentáció bővítése és feszesítése", url: "https://x.ai/grok/powerpoint" },
  { title: "Grok for Outlook", kind: "Microsoft 365 add-in", hu: "szálak összefoglalása, válaszvázlat a te hangodon, inbox-triázs", url: "https://x.ai/grok/outlook" },
  { title: "Grok for Google Workspace", kind: "Google Workspace add-on", hu: "egy add-on a Sheetshez, Slideshoz és Docshoz: elemzés, építés, vázlat helyben", url: "https://x.ai/grok/workspace" },
];
