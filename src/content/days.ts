import { cite, communitySource } from "./community";
import { docs, marker } from "./docs";
import type { Day } from "./types";

const fetched = "2026-10-17";

/**
 * Kezdő 5 nap. Forrás: a GrokCore 5 napos terv (2026-10-17), a hivatalos dokumentáció
 * és a terv forráslistáján szereplő közösségi bejegyzések. Új forrást csak akkor
 * vegyél fel, ha a kutatás ténylegesen megnyitotta.
 */
export const days: Day[] = [
  {
    n: 1,
    slug: "1-nap-letoltes-belepes",
    title: "1. nap: Letöltés és belépés",
    nav: "Letöltés",
    card: "Töltsd le, lépj be, állítsd magyarra, és kérdezd meg a Botodat, miben tud segíteni.",
    description:
      "Honnan töltsd le a Grok Botot, milyen előfizetés kell hozzá, hogyan lépj be, és hogyan állítsd magyarra. A Kezdő 5 nap 1. napja.",
    lead: "Ma csak annyi a cél, hogy a Grok Bot fusson, be legyél jelentkezve, és feltedd neki az első kérdést. Kb. 15 perc, ez a mi becslésünk.",
    task: "Töltsd le a Grok Botot, lépj be, állítsd magyarra, és kérdezd meg tőle: „Mire tudsz nekem segíteni?”",
    pitfall: `<strong>Belépési hurok.</strong> Többen azt írják, hogy a belépés újra és újra a bejelentkező oldalra dob, vagy „Access blocked” üzenet jön (${cite("alyce")}: „it keeps looping back to log in page”; ${cite("redditBlocked")}). A hivatalos GYIK javaslata: frissítsd az appot, jelentkezz ki és be; töröld a cursor.com és az x.ai sütijeit, és próbáld privát ablakban; ha a telefon hurkol, előbb asztali gépen lépj be; új hibánál várj 30–60 percet. A GYIK szerint az újratelepítés általában nem segít. (<a href="${docs.faqCursor}">Cursor GYIK</a>)`,
    steps: [
      {
        name: "Nézd meg, benne van-e a csomagodban",
        text: "A Cursor GYIK szerint nem kell külön Grok Bot-előfizetés: az X Subscription Premium, Super és Ultra csomagja tartalmazza, és a régebbi Cursor Pro, Pro+, Ultra és self-serve Teams csomag is. Régebbi Cursor-fiókhoz SuperGrok-előfizetés is köthető.",
      },
      {
        name: "Töltsd le az appot",
        text: "A termékoldal az x.ai/bot. A Cursor GYIK és a Get started szerint a desktop telepítő a Cursor dashboard Grok Bot oldaláról jön (cursor.com/dashboard/bot, Download Grok Bot sor). A desktop app Macen, Windowson és Linuxon fut, a telefonos app iPhone-on és Androidon.",
      },
      {
        name: "Telepítsd és indítsd el",
        text: "macOS: húzd a Grok Botot az Applications mappába. Windows: futtasd a telepítőt. Linux: .deb, .rpm vagy AppImage.",
      },
      {
        name: "Jelentkezz be",
        text: "A kezdőképernyőn válaszd a Sign in gombot, és fejezd be a hitelesítést a böngészőben. A hivatalos leírás szerint a Grok Bot a Cursor-fiókodat használja, nincs külön Grok Bot-belépés.",
      },
      {
        name: "Állítsd magyarra",
        text: "A changelog szerint a 2026-09-22-i (0.58.0) verzió óta a Settings → Language alatt a Hungarian is választható.",
      },
      {
        name: "Tedd fel az első kérdést",
        text: "Írd be az első Botodnak: „Mire tudsz nekem segíteni?” Mondd el pár mondatban, mivel foglalkozol, és milyen appokat használsz naponta.",
      },
    ],
    blocks: [
      {
        type: "p",
        html: `A hivatalos oldal szerint a Botok olyan AI-csapattársak, akiknek feladatot adhatsz; saját felhős gépük van, az appjaidban is dolgozhatnak, és ha jóváhagyásod kell, visszajönnek hozzád. (<a href="${docs.productCanonical}">x.ai/bot</a>, <a href="${docs.start}">Get started</a>)`,
      },
      { type: "h2", text: "Lépések" },
      { type: "steps" },
      { type: "h2", text: "Honnan töltsem le?" },
      {
        type: "note",
        html: `A termékoldal: <a href="${docs.productCanonical}">x.ai/bot</a>. A Cursor GYIK szerint: „Get the desktop app from the Grok Bot page at cursor.com/dashboard/bot.” (<a href="${docs.faqCursor}">Cursor GYIK</a>, <a href="${docs.startCursor}">Get started</a>) A pontos letöltési link és az „X Unified” csomag elnevezése: ${marker("pontos letöltési link, „X Unified” csomagnév – nyilvános forrást még nem találtunk rá")}.`,
      },
      {
        type: "p",
        html: `Egy felhasználó tapasztalata a kezdésről: „1. get a plan that includes grok bot. the basic @X paid plan works” (${cite("kial")}). Ez felhasználói beszámoló, nem hivatalos árinformáció.`,
      },
      {
        type: "note",
        html: `<strong>Árak és próbaidő, lekérve ${fetched}-én.</strong> Az x.ai/bot oldalon dolláros havi árak szerepelnek (Premium 30 USD, Super 100 USD, Ultra 200 USD). A Cursor GYIK szerint a próba egy kreditösszeg: „The trial is a usage credit, and one big task can use all of it.” A forintár és az ÁFA: ${marker("forintár, ÁFA")}. (<a href="${docs.productCanonical}">x.ai/bot</a>, <a href="${docs.faqCursor}">Cursor GYIK</a>)`,
      },
      { type: "h2", text: "Magyar felület" },
      {
        type: "p",
        html: `A changelog 0.58.0-s (2026-09-22) bejegyzése szerint a Settings → Language alatt a Hungarian is választható, és a Follow System is magyarra vált, ha a géped magyar. (<a href="${docs.changelog}">changelog</a>) Hogy a telefonos appokban is magyar-e a felület: ${marker("mobil magyar felület")}.`,
      },
      { type: "h2", text: "Tipikus buktató" },
      { type: "p", html: "__PITFALL__" },
      {
        type: "prompt",
        label: "Saját példánk, nem felhasználói idézet",
        code: `Mire tudsz nekem segíteni? Röviden rólam: [mivel foglalkozol].
Naponta ezeket az appokat használom: [pl. Gmail, Google Naptár].
Javasolj három kis, biztonságos első feladatot, amit ma kipróbálhatok.`,
        caption: "A Botkezdő saját mintája. Bátran írd át a saját helyzetedre.",
      },
      {
        type: "done",
        items: ["Az app fut, be vagy jelentkezve, a felület magyar (ha a verziód már tudja), és a Botod válaszolt az első kérdésedre."],
      },
    ],
    sources: [
      { title: "Grok Bot termékoldal (x.ai/bot)", url: docs.productCanonical, kind: "hivatalos" },
      { title: "Grok Bot GYIK (cursor.com)", url: docs.faqCursor, kind: "hivatalos" },
      { title: "Get started (cursor.com)", url: docs.startCursor, kind: "hivatalos" },
      { title: "Get started (docs.x.ai)", url: docs.start, kind: "hivatalos" },
      { title: "Grok Bot changelog – magyar nyelv, 0.58.0", url: docs.changelog, kind: "hivatalos" },
      communitySource("kial", "melyik csomaggal indult"),
      communitySource("alyce", "belépési hurok iOS-en"),
      communitySource("redditBlocked", "„Access Blocked” belépéskor"),
    ],
  },
  {
    n: 2,
    slug: "2-nap-appok-bekotese",
    title: "2. nap: Kösd be a napi appjaidat",
    nav: "Appok",
    card: "Gmail és naptár egyetlen Botodhoz, aztán az első kérés: foglalja össze a mai leveleidet.",
    description:
      "Hogyan kösd be a Gmailt és a naptárat a Grok Botba a Connect apps menüből, és mire figyelj a bejelentkezésnél. A Kezdő 5 nap 2. napja.",
    lead: "Ma a Botod megkapja azokat az appokat, amelyekben a munkád van. Elég egy Bot. Kb. 15 perc, a mi becslésünk.",
    task: "Kösd be a Gmailt és a naptárat az első Botodhoz, majd kérd meg: „Foglald össze a mai leveleimet.”",
    pitfall: `<strong>Nem marad meg a Google-bejelentkezés.</strong> A Cursor fórumon egy felhasználó azt írta, hogy a Bot böngészője nem tud belépni a Google-fiókjába 1Passworddel (${cite("cursorForum1p")}). A szálban a támogatás azt javasolta, hogy egyszer kézzel lépj be a Google-ba a Bot képernyőjén; a Bot böngészője általában megtartja ezt a munkamenetet. Ahol van connector, azt használd böngészés helyett (${cite("texas")}: „Before you let the bot brows on web, see if there is plugins.”).`,
    steps: [
      {
        name: "Nyisd meg a Connect apps menüt",
        text: "Az oldalsávban válaszd a Connect apps pontot, keresd meg a Gmail connectort, és válaszd az Add gombot.",
      },
      {
        name: "Jelentkezz be a böngészőben",
        text: "A hitelesítést a megnyíló böngészőben fejezed be. A Google Naptárat ugyanígy adod hozzá.",
      },
      {
        name: "Maradj egy Botnál",
        text: "A connectorok a teljes fiókra szólnak, nem egy Botra. Az első napokban elég az első Botod.",
      },
      {
        name: "Hivatkozz a connectorra",
        text: "A chatben a @ jellel csatolod a connectort a feladathoz.",
      },
      {
        name: "Kérd az első összefoglalót",
        text: "Kérd meg, hogy foglalja össze a mai leveleidet. Ma csak olvasson: ne küldjön, ne töröljön, ne archiváljon.",
      },
    ],
    blocks: [
      {
        type: "p",
        html: `A Grok Bot csapatából @poteto azt javasolja az első napra, hogy előbb a rendszeresen használt appjaidat kösd be, hogy a Botnak legyen kontextusa és eszköze: „I suggest first connecting apps that you use regularly so that your bot has enough context about the work you do, and the tools it needs to do the job.” Ugyanott: nem kell rögtön több Botot csinálni (${cite("poteto")}).`,
      },
      {
        type: "p",
        html: `Egy felhasználó lépései: „open "connect apps" in the sidebar, add the gmail connector and sign in in your browser.” (${cite("kial")})`,
      },
      { type: "h2", text: "Lépések" },
      { type: "steps" },
      { type: "h2", text: "Ha egy oldal jelszót kér" },
      {
        type: "p",
        html: `Ha nincs connector, és a Bot egy weboldalon akad el a belépésnél, a dokumentáció szerint átadja neked a gépet: Take over, beírod a jelszót vagy a kétfaktoros kódot, majd I'm done. A titkot ne másold be a chatbe. A böngésző-munkamenet a közös gépen megmarad. (<a href="${docs.start}">Get started</a>, <a href="${docs.apps}">Use the computer and apps</a>)`,
      },
      {
        type: "note",
        html: `<strong>Egy gép, az összes Botodnak.</strong> A fiókod minden Botja ugyanazt a felhős gépet használja: közösek a böngésző sütijei, a belépett munkamenetek és a fájlok. Ahová belépsz, oda a többi Botod is elérhet. (<a href="${docs.apps}">Use the computer and apps</a>)`,
      },
      { type: "h2", text: "Tipikus buktató" },
      { type: "p", html: "__PITFALL__" },
      {
        type: "prompt",
        label: "Saját példánk, nem felhasználói idézet",
        code: `@Gmail Foglald össze a mai leveleimet öt pontban: ki írt, mit kér, és kell-e
válaszolnom. A végén külön sorold fel, ami ma határidős.
Csak olvass: ne küldj, ne törölj, ne archiválj semmit.`,
        caption: "A Botkezdő saját mintája. A @Gmail helyére a nálad megjelenő connector neve kerül.",
      },
      {
        type: "done",
        items: ["A Gmail és a naptár be van kötve, és a Botod összefoglalta a mai leveleidet úgy, hogy semmit nem változtatott."],
      },
    ],
    sources: [
      { title: "Use the computer and apps (docs.x.ai)", url: docs.apps, kind: "hivatalos" },
      { title: "Get started (docs.x.ai)", url: docs.start, kind: "hivatalos" },
      communitySource("poteto", "először a napi appokat kösd be"),
      communitySource("texas", "előbb plugin, csak utána böngészés"),
      communitySource("kial", "Gmail connector a Connect appsból"),
      communitySource("cursorForum1p", "Google-belépés 1Passworddel"),
    ],
  },
  {
    n: 3,
    slug: "3-nap-elso-feladat",
    title: "3. nap: Első valódi feladat",
    nav: "Első feladat",
    card: "Három valós példa közül választasz egyet: inbox-rendrakás, Marketplace-figyelés vagy X-fiók elemzés.",
    description:
      "Három valós, kezdőknek való első Grok Bot feladat, a jó kérés öt elemével és vázlat-első szabállyal. A Kezdő 5 nap 3. napja.",
    lead: "Ma a Botod elvégzi az első valódi munkáját. Kicsiben kezdj, és kérj vázlatot, ne kész küldést. Kb. 15 perc, a mi becslésünk.",
    task: "Válassz egyet, és végeztesd el: inbox-rendrakás vázlatokkal, Marketplace-figyelés, vagy az X-fiókod elemzése.",
    pitfall: `<strong>Túl nagy első feladat.</strong> Egy felhasználó azt javasolja, hogy az első lépéssel egy hétig dolgozz, mielőtt újat adsz hozzá: „Start with step 1 for a week before adding more.” (${cite("binbin")}) A dokumentáció is kis, ellenőrizhető első feladatot ajánl, egy csatolt dokumentummal. (<a href="${docs.startCursor}">Get started</a>)`,
    steps: [
      {
        name: "Válassz egy példát",
        text: "Inbox-rendrakás, Marketplace-figyelés vagy X-fiók elemzés. Ha egyik sem illik, csatolj egy dokumentumot, és kérj róla összefoglalót.",
      },
      {
        name: "Írd meg a kérést az öt elemmel",
        text: "Eredmény, források, korlátok, leadandó, ellenőrzési pont. A dokumentáció ezt az öt elemet kéri.",
      },
      {
        name: "Kérj vázlatot",
        text: "Az első alkalommal a Bot ne küldjön és ne változtasson: vázlatot, listát vagy javaslatot adjon vissza.",
      },
      {
        name: "Nézd át, és javíttasd",
        text: "Ha valami hiányos vagy rossz formátumú, kérd a javítását.",
      },
      {
        name: "Mondd ki, ha bevált",
        text: "Ha egy formátum jó, kérd, hogy a jövőben is így dolgozzon.",
      },
    ],
    blocks: [
      { type: "h2", text: "Három valós példa" },
      {
        type: "ul",
        items: [
          `<strong>Inbox-rendrakás vázlatokkal.</strong> Egy felhasználó javaslata: „Connect email and calendar, then tell it in plain English: "sort my inbox every morning and draft replies for me to approve."” (${cite("binbin")}) Más is így használja: „I use it to clean my emails from time to time” (${cite("emanuele")}).`,
          `<strong>Marketplace-figyelés.</strong> „first routine was a Facebook Marketplace agent that finds absurd tech deals every morning and messages sellers for me.” (${cite("offred")}) Mi azt javasoljuk, hogy kezdetben az eladóknak szóló üzenet is csak vázlat legyen, és te küldd el.`,
          `<strong>X-fiók elemzés.</strong> Egy felhasználó azt írja, hogy a Botja első lépésként elolvasta 378 bejegyzését, és a válaszok arányát meg a megjelenéseket elemezte (${cite("lizhenrong")}).`,
        ],
      },
      { type: "h2", text: "A jó kérés öt eleme" },
      {
        type: "ol",
        items: [
          "<strong>Outcome (eredmény):</strong> mi legyen kész?",
          "<strong>Sources (források):</strong> mely appok, weboldalak, fájlok számítanak?",
          "<strong>Constraints (korlátok):</strong> mit kerüljön, vagy mi előtt kérdezzen?",
          "<strong>Deliverable (leadandó):</strong> mit adjon vissza?",
          "<strong>Review point (ellenőrzési pont):</strong> mikor álljon meg, hogy átnézd?",
        ],
      },
      {
        type: "p",
        html: `Forrás: <a href="${docs.start}">Get started</a>. A nevek angolul maradnak, mert így szerepelnek a dokumentációban.`,
      },
      { type: "h2", text: "Lépések" },
      { type: "steps" },
      { type: "h2", text: "Ha egyik példa sem illik: dokumentum-összefoglaló" },
      {
        type: "prompt",
        label: "Eredeti prompt, hivatalos Get started",
        code: `Summarize this document in five bullets. List every date, decision, and
open question in a separate section, and cite the section for each item.
Don't change the source file.`,
        caption: `Forrás: <a href="${docs.startCursor}">Get started (cursor.com)</a>. Csatolj egy dokumentumot, és küldd el így.`,
      },
      { type: "h2", text: "Tipikus buktató" },
      { type: "p", html: "__PITFALL__" },
      {
        type: "done",
        items: ["A Botod visszaadott egy vázlatot vagy listát, amit átnéztél, és legalább egyszer kérted a javítását."],
      },
    ],
    sources: [
      { title: "Get started (cursor.com)", url: docs.startCursor, kind: "hivatalos" },
      { title: "Get started (docs.x.ai)", url: docs.start, kind: "hivatalos" },
      communitySource("binbin", "inbox-rendrakás, egy lépés egy hétig"),
      communitySource("offred", "Facebook Marketplace-figyelés"),
      communitySource("lizhenrong", "X-fiók elemzés"),
      communitySource("emanuele", "e-mail-takarítás"),
    ],
  },
  {
    n: 4,
    slug: "4-nap-skill-routine",
    title: "4. nap: Tedd automatikussá – skill és routine",
    nav: "Automatizálás",
    card: "Egy reggeli összefoglaló routine, előbb kézzel tesztelve. Közben figyeled a keretet.",
    description:
      "Hogyan lesz egy bevált Grok Bot feladatból skill és ütemezett routine, és miért kell közben figyelni a használati keretet. A Kezdő 5 nap 4. napja.",
    lead: "A routine időzítés: megmondod, melyik Bot mikor futtassa a már bevált munkát. Előbb kézzel, csak utána ütemezve. Kb. 15 perc, a mi becslésünk.",
    task: "Készíts egy reggeli összefoglaló routine-t: futtasd le egyszer kézzel, és csak utána ütemezd. Közben nézd meg, mennyi keretet vitt el.",
    pitfall: `<strong>Elfogy a keret, és a Bot elhallgat.</strong> „In 5 days, I've used 97% of my Grok @bot weekly usage … I know now: - to go easy on routines in Grok bot.” (${cite("gusmacca")}) A Redditen egy felhasználó azt írta, hogy a Botja azért nem válaszolt, mert elérte a keretet, és a felület nem jelezte (${cite("redditUnresponsive")}). A Cursor GYIK figyelmeztet: a próba egy kreditösszeg, és egyetlen nagy feladat elviheti. (<a href="${docs.faqCursor}">Cursor GYIK</a>) A keret pontos helye a felületen: ${marker("a keret menüpontja az appban")}.`,
    steps: [
      {
        name: "Csináld meg egyszer kézzel",
        text: "Kérd meg a Botot a chatben, hogy most azonnal készítse el a reggeli összefoglalót. Nézd át az eredményt.",
      },
      {
        name: "Mentsd el skillként",
        text: "Ha bevált, kérd, hogy mentse a folyamatot skillként. A skill azt írja le, hogyan kell csinálni; a / jellel hivatkozol rá.",
      },
      {
        name: "Ütemezd routine-ként",
        text: "Add meg az időpontot, az időzónát, az elvárt eredményt, és hogy mi legyen, ha nincs új adat.",
      },
      {
        name: "Futtass Test runt",
        text: "A dokumentáció szerint a teszt valódi munkát végez, ezért biztonságos bemenettel próbáld, és az írást tartsd jóváhagyás mögött.",
      },
      {
        name: "Figyeld a keretet",
        text: "Az első napokban nézd meg, mennyit fogy egy futás. Kevés, ritkább routine-nal kezdj.",
      },
    ],
    blocks: [
      {
        type: "p",
        html: `A dokumentáció szerint egyszeri feladattal kezdj, tedd megbízhatóvá, mentsd el skillként, és csak utána automatizáld: „Start with a one-time task. Make it reliable, save the method as a skill, and only then automate it.” (<a href="${docs.skills}">Skills and routines</a>) Egy felhasználó első hete: „Day 1: one bot, one job. Day 2: connect read-only. Day 3: schedule it. Day 7: keep, tune or retire.” (${cite("gannotti")})`,
      },
      { type: "h2", text: "Skill vagy routine?" },
      {
        type: "p",
        html: `A skill újrahasználható utasítás arra, hogyan kell elvégezni egy feladatot. A routine azt mondja meg egy Botnak, hogy mikor futtassa: ütemezve, vagy ahol támogatott, egy esemény után. Egy Botnak legfeljebb 50 routine-ja lehet, és két ütemezett futás között legalább öt percnek el kell telnie. (<a href="${docs.skills}">Skills and routines</a>, <a href="${docs.faq}">FAQ</a>)`,
      },
      { type: "h2", text: "Lépések" },
      { type: "steps" },
      { type: "h2", text: "Kész prompt egy felhasználótól" },
      {
        type: "prompt",
        label: "Felhasználói idézet, eredeti nyelven – @Rachitjoshi12",
        code: `Search web + X for last 24h AI news. 5–8 items. Headline, why it matters,
link. Primary sources only. Impact > virality. 3-bullet must-know on top.
Under 400 words.`,
        caption: `Forrás: ${cite("rachit")}. A szerző leírása szerint a routine beállítása: Daily → 08:00, majd „Run now once.” A téma (AI-hírek) helyére a sajátodat írhatod.`,
      },
      {
        type: "prompt",
        label: "Eredeti prompt a dokumentációból",
        code: `Every weekday at 8:00 AM, run the Daily customer-risk skill against the
current account list. Post a linked watch list in this conversation. Do not
contact customers. If the source data is unavailable, report the failure
instead of using old data.`,
        caption: `Forrás: <a href="${docs.skills}">Skills and routines</a>. Az időzónát a megerősítéskor egyeztesd.`,
      },
      { type: "h2", text: "Tipikus buktató" },
      { type: "p", html: "__PITFALL__" },
      {
        type: "done",
        items: ["Van egy routine-od, amit előbb kézzel és Test runnal kipróbáltál, és tudod, mennyit fogyaszt egy futása."],
      },
    ],
    sources: [
      { title: "Skills and routines (docs.x.ai)", url: docs.skills, kind: "hivatalos" },
      { title: "Frequently asked questions (docs.x.ai)", url: docs.faq, kind: "hivatalos" },
      { title: "Grok Bot GYIK (cursor.com) – próbakredit", url: docs.faqCursor, kind: "hivatalos" },
      communitySource("rachit", "reggeli AI-hír routine, kész prompttal"),
      communitySource("gannotti", "első hét: egy Bot, egy feladat"),
      communitySource("gusmacca", "a routine-ok gyorsan fogyasztják a keretet"),
      communitySource("redditUnresponsive", "némán leálló Bot a keret miatt"),
    ],
  },
  {
    n: 5,
    slug: "5-nap-masodik-bot-biztonsag",
    title: "5. nap: Második Bot és biztonságos rend",
    nav: "Bot és biztonság",
    card: "Eldöntöd, kell-e második Bot, és beállítod, hol álljon meg a Bot jóváhagyásért.",
    description:
      "Mikor érdemes második Grok Botot létrehozni, hogyan kerüld a duplikátumot, és hogyan állítsd be a jóváhagyásokat. A Kezdő 5 nap 5. napja.",
    lead: "Ma rendet raksz: eldöntöd, kell-e új Bot, és kimondod, mit csinálhat a Bot magától, és hol kérdezzen. Kb. 15 perc, a mi becslésünk.",
    task: "Döntsd el a gyakorlólap kérdéseivel, kell-e második Bot, és vegyél fel egy szűk jóváhagyási szabályt.",
    pitfall: `<strong>Túl sok apró jóváhagyás.</strong> „it keeps asking me for trivial permissions (like filing Linear tickets), brings everything to a halt.” (${cite("pgenius")}) A dokumentáció szerint ilyenkor egy szűk, ismert lépésre szóló Allow automatically szabály segít, a kockázatos lépések pedig Ask first alatt maradnak. (<a href="${docs.approve}">Approvals</a>)`,
    steps: [
      {
        name: "Tedd fel a gyakorlólap négy kérdését",
        text: "A dokumentáció szerint akkor kell külön Bot, ha a munkának saját célja, eszközei, munkastílusa, jóváhagyási határa vagy ütemezése van. Ha egyik sem, maradj egy Botnál.",
      },
      {
        name: "Ha kell, hozd létre",
        text: "New → Create new Bot, vagy egy felhasználó módszere szerint a Marketplace-ből hozzáadott dr eggbottal.",
      },
      {
        name: "Ne csinálj duplikátumot",
        text: "Ha egy meglévő Bot már ellátja a feladatot, azt használd.",
      },
      {
        name: "Állíts be egy szűk Ask first szabályt",
        text: "Settings → General → Auto-review. Például: kérdezzen, mielőtt külső e-mailt küld.",
      },
      {
        name: "Gondold át a közös gépet",
        text: "Minden Botod ugyanazt a gépet és belépéseket használja. Csak oda lépj be, ahol minden Botodban megbízol.",
      },
    ],
    blocks: [
      { type: "h2", text: "Kell-e második Bot?" },
      {
        type: "p",
        html: `A dokumentáció példái a jó feladatnévre: Talent Scout, Expense Manager, Bug Reproduction. A General Helper kevesebb útmutatást ad. (<a href="${docs.bots}">Create and manage Bots</a>) Egy felhasználó módszere új Botra: „Grok Bot &gt; Marketplace &gt; add "dr eggbot" &gt; tell egg "make me a bot to help with &lt;category of thing&gt;"” (${cite("mana")}).`,
      },
      {
        type: "p",
        html: `A duplikátumra a Botod is figyelmeztethet: egy felhasználó azt írta, hogy amikor hozzá akarta adni a dr eggbotot, a fő Botja jelezte, hogy ugyanezt a feladatot már ő végzi, és megkérdezte, tényleg kell-e még egy (${cite("dhivagar")}).`,
      },
      { type: "h2", text: "Lépések" },
      { type: "steps" },
      { type: "h2", text: "Allow once, Always allow, Deny" },
      {
        type: "p",
        html: `Ha egy lépés jóváhagyást kér, az <strong>Allow once</strong> azt az egy lépést engedi, az <strong>Always allow</strong> egyező szabályt menthet, a <strong>Deny</strong> megállítja. A Settings → General → Auto-review alatt az <strong>Ask first</strong> mindig megállít; az <strong>Allow automatically</strong> csak akkor enged, ha az automatikus vizsgálat nem talál más okot a megállásra. Ha mindkettő illeszkedik, az Ask first nyer. (<a href="${docs.approve}">Approvals</a>)`,
      },
      {
        type: "ul",
        items: [
          "Ask first before sending any external email.",
          "Ask first before changing a production dashboard.",
          "Allow automatically when running <code>git status</code> in <code>/workspace/reports</code>.",
        ],
      },
      {
        type: "p",
        html: `A fenti szabálypéldák eredeti nyelven a dokumentációból valók. (<a href="${docs.approve}">Approvals</a>)`,
      },
      {
        type: "note",
        html: `<strong>A külön Bot nem biztonsági határ.</strong> A fiókod minden Botja ugyanazt a felhős gépet, böngészőt és belépéseket használja. Ne tegyél a gépre olyan jelszót vagy fájlt, amit egy másik Botodnak nem szabadna látnia. (<a href="${docs.apps}">Use the computer and apps</a>, <a href="${docs.approve}">Approvals</a>)`,
      },
      { type: "h2", text: "Tipikus buktató" },
      { type: "p", html: "__PITFALL__" },
      {
        type: "done",
        items: [
          "Tudod, kell-e második Bot, és miért. Van legalább egy szűk Ask first szabályod, és tudod, hogy a Botok közös gépen dolgoznak.",
        ],
      },
    ],
    sources: [
      { title: "Create and manage Bots (docs.x.ai)", url: docs.bots, kind: "hivatalos" },
      { title: "Approvals, security, and privacy (docs.x.ai)", url: docs.approve, kind: "hivatalos" },
      { title: "Use the computer and apps (docs.x.ai)", url: docs.apps, kind: "hivatalos" },
      communitySource("mana", "új Bot dr eggbottal a Marketplace-ből"),
      communitySource("dhivagar", "a fő Bot jelezte a duplikátumot"),
      communitySource("pgenius", "túl sok apró jóváhagyás"),
    ],
  },
];

// A „Tipikus buktató” bekezdés a nap `pitfall` mezőjéből jön, hogy egy helyen legyen.
for (const day of days) {
  for (const block of day.blocks) {
    if (block.type === "p" && block.html === "__PITFALL__") block.html = day.pitfall;
  }
}

export function getDay(slug: string): Day {
  const day = days.find((item) => item.slug === slug);
  if (!day) throw new Error(`Ismeretlen nap: ${slug}`);
  return day;
}
