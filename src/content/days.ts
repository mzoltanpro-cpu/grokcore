import { docs, marker } from "./docs";
import type { Day } from "./types";

const fetched = "2026-10-17";

export const days: Day[] = [
  {
    n: 1,
    slug: "1-nap-telepites",
    title: "1. nap: Mi kell hozzá, telepítés és bejelentkezés",
    nav: "Telepítés",
    card: "Előfizetés, desktop app, bejelentkezés. A végére az app fut, és látod a Meet a future teammate képernyőt.",
    description:
      "Mi kell a Grok Bothoz, hogyan telepítsd macOS-re, Windowsra vagy Linuxra, és hogyan jelentkezz be. A Kezdő 7 nap 1. napja.",
    lead: "Ma csak annyi a cél, hogy a Grok Bot fusson a gépeden, és be legyél jelentkezve. Kb. 15 perc, ez a mi becslésünk.",
    steps: [
      {
        name: "Nézd meg, jogosult-e az előfizetésed",
        text: "A hivatalos leírás szerint jogosult minden fizetős egyéni Cursor csomag, a Cursor Teams csomag, illetve a Cursor-fiókhoz kapcsolt egyéni SuperGrok, SuperGrok Plus vagy SuperGrok Heavy előfizetés.",
      },
      {
        name: "Töltsd le a desktop appot",
        text: "Az x.ai/bot oldalon válaszd a gépednek megfelelőt. macOS: Apple silicon vagy Intel. Windows: x64 vagy Arm64. Linux: a More downloads alatt .deb, .rpm vagy AppImage, x64 vagy Arm64.",
      },
      {
        name: "Telepítsd",
        text: "macOS: nyisd meg a lemezképet, húzd a Grok Botot az Applications mappába, és ha a rendszer kéri, válaszd az Open lehetőséget. Windows: futtasd a telepítőt, majd nyisd meg az appot a Start menüből. Linux: telepítsd a csomagkezelővel, vagy tedd futtathatóvá az AppImage-et, és indítsd az alkalmazásindítóból.",
      },
      {
        name: "Jelentkezz be",
        text: "A kezdőképernyőn válaszd a Sign in gombot. Ha már az appban vagy, a Settings alatt a Sign In with Cursor pontot. Fejezd be a hitelesítést a megnyíló böngészőben, majd térj vissza az appba. SuperGrok-hozzáférésnél az app kéri a fiók összekapcsolását.",
      },
      {
        name: "Menj végig a bevezetőn",
        text: "Első indításkor az app bemutatja a Botokat, a közös gépet (shared computer) és a routine-okat, és megkérdezi, milyen eszközöket használsz. A válaszok csak a javaslatokat alakítják, semmit nem kapcsolnak be. A végén megnyílik a Meet a future teammate képernyő.",
      },
    ],
    blocks: [
      {
        type: "p",
        html: `A hivatalos oldal szerint a Botok olyan AI-csapattársak, akiknek feladatot adhatsz; saját felhős gépük van, az appjaidon belül is dolgozhatnak, és ha jóváhagyásod kell, visszajönnek hozzád. (<a href="${docs.product}">grokbot.com</a>, <a href="${docs.start}">Get started</a>)`,
      },
      { type: "h2", text: "Mi kell hozzá?" },
      {
        type: "ul",
        items: [
          `<strong>Jogosult előfizetés.</strong> Minden fizetős egyéni Cursor csomag vagy a Cursor Teams csomag, vagy a Cursor-fiókodhoz kapcsolt egyéni SuperGrok, SuperGrok Plus vagy SuperGrok Heavy előfizetés. (<a href="${docs.start}">Get started</a>)`,
          `<strong>A desktop app</strong> macOS-re, Windowsra vagy Linuxra. Mobilon is beállítható és használható. (<a href="${docs.start}">Get started</a>)`,
          "<strong>Egy app vagy weboldal</strong>, ahol az első Botod hasznos munkát végezhet.",
        ],
      },
      {
        type: "note",
        html: `<strong>Árak, lekérve ${fetched}-én.</strong> A grokbot.com a lekéréskor a <a href="${docs.productCanonical}">x.ai/bot</a> oldalra vitt. Az ott látható havi, dolláros árak: Premium 30 USD/hó, Super 100 USD/hó, Ultra 200 USD/hó. A szöveg szerint a Grok Bot benne van az arra jogosult Premium, Super, Ultra, Teams és Enterprise csomagban. A dokumentáció máshogy fogalmaz: fizetős egyéni Cursor-csomag, Cursor Teams, vagy a fiókhoz kapcsolt SuperGrok / SuperGrok Plus / SuperGrok Heavy. A két leírás pontos megfeleltetése, a forintár és az ÁFA: ${marker("forintár, ÁFA, csomagok megfeleltetése")}. (<a href="${docs.productCanonical}">x.ai/bot</a>, <a href="${docs.faq}">FAQ</a>, <a href="${docs.start}">Get started</a>)`,
      },
      {
        type: "note",
        html: `<strong>Adatvédelmi beállítás.</strong> A Grok Bot felhős adattárolást igényel, a Legacy Privacy Mode nem támogatott. Ha ezt használod, előbb a Cursor adatvédelmi beállításában kell váltanod. A dokumentáció a Cursor privacy settings oldalára mutat. (<a href="${docs.start}">Get started</a>)`,
      },
      { type: "h2", text: "Lépések" },
      { type: "steps" },
      {
        type: "p",
        html: `Szervezeti fióknál, ha kötelező az egyszeri bejelentkezés (SSO), a szokásos szervezeti belépést kell végigcsinálni. SuperGrok-előfizetésnél asztalon a <strong>Settings → Usage &amp; Billing</strong> alatt a <strong>Link SuperGrok Heavy</strong> felirat jelenik meg; a dokumentáció szerint a felirat a fiókodhoz tartozó SuperGrok-szintet nevezi meg. iPhone-on és Androidon a <strong>Link Grok Account</strong>, majd a <strong>Finished Linking? Refresh My Status</strong> gomb van. (<a href="${docs.start}">Get started</a>)`,
      },
      { type: "h2", text: "Melyik letöltés kell nekem?" },
      {
        type: "ul",
        items: [
          "<strong>Mac:</strong> Apple menü → About This Mac. Ha Chip mezőt látsz, Apple silicon; ha Processor, Intel.",
          "<strong>Windows:</strong> Settings → System → About → System type.",
          "<strong>Linux:</strong> terminálban <code>uname -m</code>. Az <code>x86_64</code> x64, az <code>aarch64</code> Arm64. A Linux-csomagok a stabil kiadásokkal jelennek meg, a <strong>More downloads</strong> alatt, a x.ai/bot oldalon. Debian és Ubuntu: <code>.deb</code>. Fedora és RHEL: <code>.rpm</code>. Más disztribúció: AppImage.",
        ],
      },
      {
        type: "p",
        html: `Frissítés: a Grok Bot automatikusan keresi a frissítéseket. Kézzel a <strong>Settings → Updates</strong> alatt, a <strong>Check for Updates</strong> gombbal. (<a href="${docs.start}">Get started</a>)`,
      },
      { type: "h2", text: "Asztal vagy mobil?" },
      {
        type: "p",
        html: `A hét nap a desktop appot követi, mert a hivatalos kezdő útmutató is azt veszi sorra. A GYIK szerint a támogatott felületek: macOS Apple silicon és Intel, Windows x64 és Arm64, Linux x64 és Arm64 (<code>.deb</code>, <code>.rpm</code> vagy AppImage), iPhone iOS 18 vagy újabb, iPad iPadOS 18 vagy újabb, Android 9 vagy újabb. Ugyanazok a Botok és beszélgetések szinkronban vannak a bejelentkezett eszközök között. (<a href="${docs.faq}">FAQ</a>)`,
      },
      {
        type: "done",
        items: [
          "Az app fut, be vagy jelentkezve, és látod a Meet a future teammate képernyőt. Holnap ezen hozod létre az első Botot.",
        ],
      },
    ],
    sources: [
      { title: "Get started (docs.x.ai)", url: docs.start },
      { title: "Frequently asked questions (docs.x.ai)", url: docs.faq },
      { title: "Grok Bot termékoldal (grokbot.com → x.ai/bot)", url: docs.productCanonical },
    ],
  },
  {
    n: 2,
    slug: "2-nap-elso-bot",
    title: "2. nap: Hozd létre az első Botodat",
    nav: "Első Bot",
    card: "Egy Bot, egy feladat, rövid leírás. A leírásba kerül, ami mindig igaz marad.",
    description:
      "Hogyan hozz létre egy Grok Botot, mit írj a nevéhez és a leírásához, és miért jobb egy fókuszált Bot. A Kezdő 7 nap 2. napja.",
    lead: "Ma létrehozod az első Botodat, és kapsz egy jó leírást. A leírás határozza meg, hogyan dolgozik később.",
    steps: [
      {
        name: "Nyiss új chatet",
        text: "Válaszd a New gombot az oldalsávban, vagy nyomd meg a Cmd/Ctrl+N billentyűt.",
      },
      {
        name: "Hozd létre a Botot",
        text: "A New chat képernyőn válaszd a Create new Bot lehetőséget, vagy írj be egy nevet, és válaszd a Create „name” Bot opciót. Létrejön egy New Bot nevű Bot.",
      },
      {
        name: "Állítsd be a profilt",
        text: "Nyisd meg a Bot menüjét, vagy válaszd az Edit Profile pontot. Itt adod meg a nevet, a címkét (label), a leírást (description) és az avatart.",
      },
      {
        name: "Írj fókuszált leírást",
        text: "Egy Botnak egy fő feladata legyen. A leírásba azok a szabályok kerülnek, amelyeknek mindig igaznak kell maradniuk.",
      },
      {
        name: "Adj neki egy konkrét feladatot",
        text: "Indíts vele beszélgetést egy valódi, kis feladattal. A jó kérés öt elemét holnap vesszük.",
      },
    ],
    blocks: [
      { type: "h2", text: "Miért egy Bot, egy feladat?" },
      {
        type: "p",
        html: `A dokumentáció szerint akkor érdemes külön Botot létrehozni, ha a munkának saját célja, eszközei, munkastílusa, jóváhagyási határa vagy ismétlődő ütemezése van. Jó feladatnév például a Talent Scout, az Expense Manager vagy a Bug Reproduction. A General Helper kevesebb útmutatást ad, és a mentett kontextust is nehezebb újrahasználni. (<a href="${docs.bots}">Create and manage Bots</a>)`,
      },
      {
        type: "p",
        html: `Első indításkor választhatsz egy javasolt csapattársat a <em>Meet a future teammate</em> képernyőn, vagy a <em>Create your own</em> opcióval adhatsz egy rövid nevet, egy fő feladatot és egy leírást. Később a <strong>New → Create new Bot</strong> úton hozhatsz létre újat, amikor a munka külön szerepekre válik. (<a href="${docs.start}">Get started</a>)`,
      },
      { type: "h2", text: "Lépések" },
      { type: "steps" },
      {
        type: "note",
        html: `A 2026-10-12-i dokumentáció a <strong>Create new Bot</strong> és a <strong>Create „name” Bot</strong> feliratot használja. Ha az appban mást látsz, a felirat verziófüggő lehet. ${marker("az aktuális app felirata")}`,
      },
      { type: "h2", text: "Leírás vagy üzenet?" },
      {
        type: "p",
        html: `A beszélgetésbe az aktuális feladat kerül. A leírásba az a szabály, amelynek később is igaznak kell maradnia. A dokumentáció példája:`,
      },
      {
        type: "table",
        caption: "Leírás és üzenet a hivatalos példában",
        headers: ["Leírásba (állandó szabály)", "Üzenetbe (aktuális feladat)"],
        rows: [["Never send external messages without approval.", "Draft follow-ups for these twelve accounts."]],
      },
      {
        type: "p",
        html: `Forrás: <a href="${docs.bots}">Create and manage Bots</a>. A leírást akkor frissítsd, ha tartós preferenciát, határt vagy felelősséget ismersz fel.`,
      },
      { type: "h2", text: "Minta a hivatalos dokumentációból" },
      {
        type: "prompt",
        label: "Eredeti példa, Get started",
        code: `Name: Piper
Job: Product performance
Description: Investigate product-performance questions using our
observability tools. Preserve links and screenshots, separate evidence from
hypotheses, and return a short summary with the highest-impact issue first.
Never change production settings.`,
        caption: `Forrás: <a href="${docs.start}">Get started</a>.`,
      },
      { type: "h2", text: "Saját magyar sablon" },
      {
        type: "prompt",
        label: "A mi javaslatunk, nem hivatalos",
        code: `Név: Hírfigyelő
Feladat: Hetente összegyűjti a [téma] legfontosabb nyilvános híreit.
Leírás: Csak nyilvános oldalakat használj, sehova ne jelentkezz be.
Minden állításhoz adj forráslinket. Az eredmény: 5 pont, pontonként
egy mondat és egy link. Ha valami nem egyértelmű, jelezd.
Jóváhagyásom nélkül soha ne küldj üzenetet, ne vásárolj, ne törölj.`,
        caption:
          "Ez a Botkezdő saját példája a fenti hivatalos elvek alapján: fókuszált feladat, kimeneti formátum, jóváhagyási határ. Nem a dokumentáció szövege.",
      },
      {
        type: "p",
        html: `A Bot emlékezhet stabil preferenciákra, fontos tényekre és a munka összefoglalóira. Az emlékezet nem helyettesíti a forrást: a változó adatot a forrásrendszerben tartsd, és a leírásba tedd a biztonsági határt. A Botok külön beszélgetést visznek, de a gépet közösen használják. Erről a 4. és a 7. nap szól. (<a href="${docs.bots}">Create and manage Bots</a>)`,
      },
      {
        type: "done",
        items: [
          "Van egy Botod saját névvel és néhány soros leírással, benne legalább egy „jóváhagyás nélkül soha” szabállyal.",
        ],
      },
    ],
    sources: [
      { title: "Create and manage Bots (docs.x.ai)", url: docs.bots },
      { title: "Get started (docs.x.ai)", url: docs.start },
    ],
  },
  {
    n: 3,
    slug: "3-nap-elso-feladat",
    title: "3. nap: Az első valódi feladat",
    nav: "Első feladat",
    card: "A jó kérés öt eleme: eredmény, forrás, korlát, leadandó, ellenőrzési pont.",
    description:
      "Hogyan adj a Grok Botnak jól megfogalmazott első feladatot: eredmény, források, korlátok, leadandó, ellenőrzési pont. A Kezdő 7 nap 3. napja.",
    lead: "Ma az első Botod elvégzi az első valódi munkáját. A jó kérésnek a dokumentáció szerint öt eleme van.",
    steps: [
      {
        name: "Válassz egy kis, valódi feladatot",
        text: "Olyat, amit pár perc alatt ellenőrizni tudsz. Az első próbához nem kell connector vagy bejelentkezés: csatolj egy dokumentumot.",
      },
      {
        name: "Írd meg a kérést az öt elemmel",
        text: "Eredmény, források, korlátok, leadandó, ellenőrzési pont. A minták lent vannak.",
      },
      {
        name: "Küldd el írva vagy diktálva",
        text: "Gépelj a szövegmezőbe, vagy diktálj a Start voice input funkcióval. Desktopon a billentyű Cmd/Ctrl+D. Élő beszélgetéshez a Start voice chat gomb van, ehhez nincs billentyű.",
      },
      {
        name: "Nézd át, és javíttasd",
        text: "Ha valami hiányos vagy rossz formátumú, kérd a javítását.",
      },
      {
        name: "Mondd ki a tartós preferenciát",
        text: "Ha egy formátum bevált, kérd, hogy a jövőben is így dolgozzon. Ami mindig igaz marad, kerüljön a leírásba is.",
      },
    ],
    blocks: [
      { type: "h2", text: "A jó kérés öt eleme" },
      {
        type: "ol",
        items: [
          "<strong>Outcome (eredmény):</strong> mi legyen kész?",
          "<strong>Sources (források):</strong> mely appok, weboldalak, fájlok vagy beszélgetések számítanak?",
          "<strong>Constraints (korlátok):</strong> mit kerüljön, vagy mi előtt kérdezzen?",
          "<strong>Deliverable (leadandó):</strong> mit adjon vissza?",
          "<strong>Review point (ellenőrzési pont):</strong> mikor álljon meg, hogy átnézd?",
        ],
      },
      {
        type: "p",
        html: `Forrás: <a href="${docs.start}">Get started, 4. lépés</a>. A nevek szándékosan angolul maradnak, mert így szerepelnek a dokumentációban.`,
      },
      { type: "h2", text: "Lépések" },
      { type: "steps" },
      { type: "h2", text: "Első próba, bejelentkezés nélkül" },
      {
        type: "p",
        html: "A hivatalos útmutató egy csatolt dokumentummal javasolja az ötperces első próbát. Eredeti prompt:",
      },
      {
        type: "prompt",
        label: "Eredeti prompt, Get started",
        code: `Summarize this document in five bullets. List every date, decision, and open
question in a separate section. Cite the page or section for each item. Do not
change the source file.`,
        caption: `Forrás: <a href="${docs.start}">Get started</a>.`,
      },
      {
        type: "prompt",
        label: "Saját fordításunk",
        code: `Foglald össze ezt a dokumentumot öt pontban. Külön szakaszban sorold fel az
összes dátumot, döntést és nyitott kérdést. Minden tételnél hivatkozz az
oldalra vagy szakaszra. A forrásfájlt ne módosítsd.`,
        caption: "A Botkezdő fordítása, nem a dokumentáció szövege.",
      },
      { type: "h2", text: "Ha már van egy eszközöd" },
      {
        type: "p",
        html: "A dokumentáció második példája egy eszközben végzett feladat, változtatás nélkül. Eredeti prompt:",
      },
      {
        type: "prompt",
        label: "Eredeti prompt, Get started",
        code: `Open our analytics dashboard and compare new-user activation for this week
with the previous four weeks. Identify the largest step-level change and
draft a short investigation plan with links to the relevant charts. Do not
change any dashboards. Ask me to sign in if needed.`,
        caption: `Forrás: <a href="${docs.start}">Get started</a>. A bejelentkezést a 4. nap veszi át. Külső változtatás előtt olvasd el a <a href="/7-nap/7-nap-jovahagyasok/">7. napot</a>.`,
      },
      { type: "h2", text: "Ha bevált: tartós preferencia" },
      {
        type: "prompt",
        label: "Eredeti prompt, Get started, 6. lépés",
        code: `Use this format for future weekly reports: five bullets, source links inline,
and a final section called “Decisions needed.”`,
        caption: `Forrás: <a href="${docs.start}">Get started</a>.`,
      },
      {
        type: "p",
        html: `iPhoneon és Androidon a diktálás felirata <strong>Start dictation</strong>. A <strong>Start voice chat</strong> desktopon, iPhoneon és Androidon is élő beszélgetést indít. A Bot a leiratban lejátszható voice memót is küldhet. (<a href="${docs.faq}">FAQ</a>)`,
      },
      {
        type: "done",
        items: [
          "A Botod visszaadott egy eredményt, amit átnéztél, és legalább egyszer kértél tőle javítást vagy tartós formátumot.",
        ],
      },
    ],
    sources: [
      { title: "Get started (docs.x.ai)", url: docs.start },
      { title: "Frequently asked questions (docs.x.ai)", url: docs.faq },
      { title: "Approvals, security, and privacy (docs.x.ai)", url: docs.approve },
    ],
  },
  {
    n: 4,
    slug: "4-nap-appok",
    title: "4. nap: Appok és bejelentkezés",
    nav: "Appok",
    card: "Take over a jelszóhoz, Connect apps a connectorhoz. A munkamenet a közös gépen marad.",
    description:
      "Hogyan jelentkezel be a Grok Bot gépen: Take over, megmaradó munkamenet, és connector a Connect apps menüből. A Kezdő 7 nap 4. napja.",
    lead: "Ma a Bot belép oda, ahol a munka van. A jelszót, a kódot és a CAPTCHA-t te írod be. Kb. 15 perc, a mi becslésünk.",
    steps: [
      {
        name: "Várd meg a Take over kérést",
        text: "Ha a Bot olyan apphoz ér, ami hitelesítést kér, a beszélgetésben megjelenhet a Take over. Ezt te választod ki.",
      },
      {
        name: "A titkot te írod be",
        text: "Jelszó, passkey, kétfaktoros kód vagy CAPTCHA csak a gépen, a te kezedben. Ne másold be a chatbe.",
      },
      {
        name: "Add vissza a vezérlést",
        text: "Ha kész vagy, válaszd az I'm done lehetőséget. A böngésző-munkamenet a közös gépen megmarad.",
      },
      {
        name: "Nyisd meg a Connect apps menüt",
        text: "Az oldalsávban böngészd a plugineket, és válaszd az Add gombot. Ha kéri, hitelesíts a böngészőben.",
      },
      {
        name: "Hivatkozz a connectorra",
        text: "A chatben a @ jellel csatolod a connectort a feladathoz. A / jellel mentett skillre hivatkozol. Ha van connector, azt részesítsd előnyben a weboldal kattintgatásával szemben.",
      },
    ],
    blocks: [
      { type: "h2", text: "Egy gép, az összes Botodnak" },
      {
        type: "p",
        html: `A Grok Bot egy állandó felhős gépről dolgozik: böngésző, parancssor, fájlok és bekötött eszközök, anélkül hogy a laptopod nyitva maradna. A fiókod minden Botja ugyanazt a gépet használja. Közösek a böngésző sütijei és a bejelentkezett munkamenetek, a fájlok és a parancssori hitelesítő adatok. A gép a felhasználói fiókodhoz tartozik, nem egy Botodhoz. Ne tegyél rá olyan jelszót vagy fájlt, amit egy másik Botodnak nem szabadna látnia. (<a href="${docs.apps}">Use the computer and apps</a>)`,
      },
      {
        type: "p",
        html: `Minden Bot saját képernyőt kap ezen a közös gépen, ezért több Bot párhuzamosan használhat böngészőt. Egy Bot a saját képernyőjén egyszerre egy computer-use feladatot futtat. A képernyők külön munkafelületek, nem külön biztonsági határok. A laptop vagy az app becsukása nem állítja le a felhős munkát. (<a href="${docs.apps}">Use the computer and apps</a>, <a href="${docs.faq}">FAQ</a>)`,
      },
      { type: "h2", text: "Lépések" },
      { type: "steps" },
      { type: "h2", text: "Bejelentkezés: Take over" },
      {
        type: "p",
        html: `A dokumentáció szerint a Bot átveheti veled a gépet jelszóhoz, passkeyhez, kétfaktoros kódhoz, CAPTCHA-hoz, fizetéshez, személyazonosság-ellenőrzéshez, vagy ha az oldal kifejezetten embert kér. A beszélgetésben a <strong>Take over</strong>, a gépen a <strong>Take control</strong> felirat is előfordul. Csak a blokkolt lépést csináld meg, majd <strong>I'm done</strong>, és szólj a Botnak, hogy folytassa. (<a href="${docs.start}">Get started, 5. lépés</a>, <a href="${docs.approve}">Approvals</a>)`,
      },
      {
        type: "p",
        html: `A munkamenet megmarad, ezért általában nem kell minden feladathoz újra belépni. Mivel a böngésző közös, az egyik Bot belépését a többi Botod is elérheti. Vannak oldalak, amelyek lejáratják a munkamenetet vagy újra ellenőrzést kérnek. Ilyenkor kérd, hogy a Bot álljon meg és szóljon, ne pedig megkerülje az ellenőrzést. (<a href="${docs.apps}">Use the computer and apps</a>)`,
      },
      {
        type: "note",
        html: `Ha egy támogatott kapcsolat maszkolt secret kérést mutat, oda írd az értéket. A dokumentáció szerint ez nem általános jelszókezelő: az érték rejtett, nem kerül a leiratba, és a modell sem látja. Ha egy oldal hétköznapi mezőt kér, például címet vagy telefonszámot, a Bot lépésenként egy űrlapot mutathat a chatben, és a válaszaidat beírja az oldalra. Jelszót és egyszer használatos kódot oda se írj. (<a href="${docs.approve}">Approvals</a>)`,
      },
      { type: "h2", text: "Connector: Connect apps" },
      {
        type: "ol",
        items: [
          "Nyisd meg a <strong>Connect apps</strong> menüt az oldalsávban.",
          "Böngészd a plugineket.",
          "Válaszd az <strong>Add</strong> gombot.",
          "Ha kéri, fejezd be a hitelesítést a böngészőben.",
          "A chatben a <strong>@</strong> jellel csatold a connectort. A <strong>/</strong> jellel skillre hivatkozol.",
        ],
      },
      {
        type: "p",
        html: `A dokumentáció szerint a connector gyakran megbízhatóbb, mint végigkattintani egy weboldalt. Böngészőt akkor használj, ha nincs connector, vagy a connector nem mutatja a vizuális lépést. A telepített connectorok a teljes fiókra szólnak, nem egy Botra. (<a href="${docs.apps}">Use the computer and apps</a>)`,
      },
      { type: "h2", text: "Ha X-et olvasnál" },
      {
        type: "p",
        html: `A Botok a dokumentáció szerint X-fiók nélkül is kereshetik és olvashatják az X nyilvános tartalmát: bejegyzés, fiók bejegyzései és említései, idézések és repostok, egy téma friss darabszáma, trendek és hírek. Ez olvasás, nem a te nevedben való belépés. Az üzeneteidhez, a könyvjelzőkhöz, a saját idővonaladhoz vagy ahhoz, hogy ki kedvelte a bejegyzéseidet, az X plugint kell hozzáadni a Connect appsból, és be kell jelentkezni. (<a href="${docs.apps}">Use the computer and apps</a>)`,
      },
      { type: "h2", text: "A saját laptopod külön van" },
      {
        type: "p",
        html: `A felhős gép nem a Mac vagy a Windows, ami előtted van. A Bot csak akkor futtat parancsot a helyi gépeden, ha ez a képesség be van kapcsolva, és a helyi szabályod szerint jóváhagyod. A tartós projektfájlokat a közös <code>/workspace</code> mappába érdemes tenni. A részletes jóváhagyás a <a href="/7-nap/7-nap-jovahagyasok/">7. nap</a>. (<a href="${docs.apps}">Use the computer and apps</a>)`,
      },
      {
        type: "prompt",
        label: "Saját minta, nem hivatalos",
        code: `Nyisd meg a [szolgáltatás] bejelentkező oldalát. Ha jelszó, kétfaktoros kód
vagy CAPTCHA kell, állj meg, és kérj Take overt. Semmit ne változtass, amíg
vissza nem adom a vezérlést az I'm done után.`,
        caption:
          "A Botkezdő példája a dokumentált Take over folyamatra. A feliratokat a hivatalos oldalról vettük, a mondatot mi írtuk.",
      },
      {
        type: "done",
        items: [
          "Beléptél egy oldalra Take overrel, vagy hozzáadtál egy connectort, és meg tudod mondani, hogy ez a munkamenet a többi Botod számára is elérhető.",
        ],
      },
    ],
    sources: [
      { title: "Get started, 5. lépés (docs.x.ai)", url: docs.start },
      { title: "Use the computer and apps (docs.x.ai)", url: docs.apps },
      { title: "Approvals, security, and privacy (docs.x.ai)", url: docs.approve },
      { title: "Frequently asked questions (docs.x.ai)", url: docs.faq },
    ],
  },
  {
    n: 5,
    slug: "5-nap-skill",
    title: "5. nap: Mentsd el skillként",
    nav: "Skill",
    card: "A bevált lépéssor újrahasználható utasítás. Előbb skill, csak utána routine.",
    description:
      "Hogyan ments el egy bevált Grok Bot munkafolyamatot skillként, és hogyan hivatkozz rá a / jellel. A Kezdő 7 nap 5. napja.",
    lead: "Ha egy feladat egyszer már jól sikerült, a módszert skillként elmented, hogy ne kelljen újra elmagyarázni. Kb. 15 perc, a mi becslésünk.",
    steps: [
      {
        name: "Csináld meg egyszer, megbízhatóan",
        text: "A dokumentáció sorrendje: előbb egyszeri feladat, utána a módszer skillként, és csak ezután az automatizálás.",
      },
      {
        name: "Kérd, hogy mentse skillként",
        text: "Mondd meg a nevet, a forrásokat, a kimenet formátumát és azt, hogy mi kér jóváhagyást. Lent van egy hivatalos minta.",
      },
      {
        name: "Ellenőrizd a hat elemet",
        text: "Mikor kell, mi kell hozzá, lépéssor, hogyan ellenőrzöd, mit ad vissza, és mi kér jóváhagyást.",
      },
      {
        name: "Hivatkozz rá a perjellel",
        text: "Desktopon a szövegmezőben a / jellel egy mentett skillre hivatkozol. A @ Botokra, csoportokra, routine-okra és connectorokra való.",
      },
      {
        name: "Ha nem látod a menüben",
        text: "Nyisd meg a Connect apps → Your plugins → Manage plugins and skills útvonalat, és nézd meg, szerepel-e a Private skills alatt.",
      },
    ],
    blocks: [
      { type: "h2", text: "Skill, nem routine" },
      {
        type: "p",
        html: `A skill újrahasználható utasítás arra, hogyan kell elvégezni egy feladatot. A routine azt mondja meg egy Botnak, hogy mikor futtasson egy munkafolyamatot: ütemezve, vagy ahol támogatott, egy esemény után. A skill a fiókod Botjai között elérhető, bár egy Botnak kellhet hozzá a megfelelő connector vagy belépés. A privát skillek egy közös könyvtárat alkotnak. (<a href="${docs.skills}">Skills and routines</a>, <a href="${docs.faq}">FAQ</a>)`,
      },
      { type: "h2", text: "A hasznos skill hat pontja" },
      {
        type: "ol",
        items: [
          "Mikor használd.",
          "Milyen bemenet és hozzáférés kell.",
          "A munka sorrendje.",
          "Hogyan ellenőrzöd az eredményt.",
          "Mit adjon vissza.",
          "Mi kér jóváhagyást.",
        ],
      },
      {
        type: "p",
        html: `Forrás: <a href="${docs.skills}">Skills and routines</a>.`,
      },
      { type: "h2", text: "Lépések" },
      { type: "steps" },
      { type: "h2", text: "Mintaüzenet" },
      {
        type: "prompt",
        label: "Eredeti prompt a dokumentációból",
        code: `Save the process we just used as a skill called “Weekly account health.”
Include the source systems, risk definitions, output format, and the rule that
customer contact always requires approval.`,
        caption: `Forrás: <a href="${docs.skills}">Skills and routines</a>.`,
      },
      {
        type: "prompt",
        label: "Saját fordításunk",
        code: `Mentsd el a most használt folyamatot skillként „Weekly account health” néven.
Tartalmazza a forrásrendszereket, a kockázat definícióit, a kimenet formátumát,
és azt a szabályt, hogy az ügyfél megkeresése mindig jóváhagyáshoz kötött.`,
        caption: "A Botkezdő fordítása. A skill nevét szándékosan eredeti nyelven hagytuk.",
      },
      { type: "h2", text: "Bemutatással tanítani" },
      {
        type: "p",
        html: `Ha elérhető a <strong>Teach a task</strong>, a böngészős munkát be is mutathatod, nem csak leírhatod. A dokumentáció lépései:`,
      },
      {
        type: "ol",
        items: [
          "Nyiss egy kettesben folytatott Bot-beszélgetést és a computer nézetet.",
          "Válaszd a <strong>Teach a task</strong> lehetőséget.",
          "Írd le, milyen eredményt fogsz bemutatni.",
          "Csináld meg a munkafolyamatot egyszer.",
          "Állítsd le a felvételt, és nézd át a skillt, amit a Bot készít.",
          "Teszteld egy biztonságos példán, mielőtt ütemeznéd.",
        ],
      },
      {
        type: "p",
        html: `A tanítás a látható számítógépes interakciót rögzíti, legfeljebb tíz percig. Mikrofont nem rögzít. Titkot ne mutass a bemutatón; hitelesítő adathoz a biztonságos átadás való. A megtanult skill vázlat: tedd hozzá a döntési szabályt, a hibakezelést és a jóváhagyási határt, ami egyetlen példából nem látszik. A bemutatásos tanítást fokozatosan kapcsolhatják be. Ha a gomb nem látszik, kérd a Botot, hogy írott utasításból és az elvégzett feladatból készítsen skillt. (<a href="${docs.skills}">Skills and routines</a>, <a href="${docs.faq}">FAQ</a>)`,
      },
      {
        type: "p",
        html: `A kész skillből holnap routine lehet. Addig ne ütemezd, amíg egy egyszeri feladaton nem láttad az eredményt. (<a href="/7-nap/6-nap-routine/">6. nap</a>)`,
      },
      {
        type: "done",
        items: [
          "Van egy mentett skilled, vagy kész a mentést kérő üzeneted, és tudod, hogy a / jellel kell előhívni.",
        ],
      },
    ],
    sources: [
      { title: "Skills and routines (docs.x.ai)", url: docs.skills },
      { title: "Frequently asked questions (docs.x.ai)", url: docs.faq },
    ],
  },
  {
    n: 6,
    slug: "6-nap-routine",
    title: "6. nap: Első routine",
    nav: "Routine",
    card: "Ütemezés, időzóna, teszt. A Test run valódi munkát végez, biztonságos bemenettel próbáld.",
    description:
      "Hogyan ütemezz egy Grok Bot routine-t, hogyan teszteld, és milyen korlátok vannak. A Kezdő 7 nap 6. napja.",
    lead: "A routine nem új tudás, hanem időzítés: megmondod, melyik Bot mikor futtassa a már bevált munkát. Kb. 15 perc, a mi becslésünk.",
    steps: [
      {
        name: "Válaszd ki a Botot",
        text: "Azt a Botot kérd meg, amelyiké a visszatérő feladat. A routine egy Bothoz tartozik.",
      },
      {
        name: "Írd meg az ütemezést és a határt",
        text: "Szerepeljen benne az időpont, az időzóna, a bemenet, az elvárt eredmény, a jóváhagyási határ, és hogy mi történjen, ha nincs adat.",
      },
      {
        name: "Erősítsd meg a hat pontot",
        text: "Tulajdonos Bot, ütemezés és időzóna, bemenet, elvárt eredmény, jóváhagyási határ, hiányzó forrás kezelése. A Bot létrehozza a routine-t, és mutatja a következő futást.",
      },
      {
        name: "Futtass Test runt biztonságos bemenettel",
        text: "A teszt valódi munkát végez: weboldalt nyithat, fájlt módosíthat, csatolt eszközt hívhat. Írás előtt maradjon a jóváhagyás.",
      },
      {
        name: "Nézd át, és hagyd szünetelve, amíg nem jó",
        text: "A mi javaslatunk, a dokumentáció „test before enabling” sorrendje alapján: az első routine maradjon szünetelve, amíg az eredmény formátuma, a források és a megállási pont rendben nincs.",
      },
    ],
    blocks: [
      { type: "h2", text: "Mit időzít, és mit nem" },
      {
        type: "p",
        html: `A skill azt írja le, hogyan kell csinálni. A routine egy Bothoz rendeli a munkafolyamatot, és megmondja, mikor fusson: ütemezve, vagy ahol támogatott, egy esemény után. Előbb a skillt próbáld ki egy egyszeri feladaton. (<a href="${docs.faq}">FAQ</a>, <a href="${docs.skills}">Skills and routines</a>)`,
      },
      { type: "h2", text: "Lépések" },
      { type: "steps" },
      { type: "h2", text: "Mintaüzenet" },
      {
        type: "prompt",
        label: "Eredeti prompt a dokumentációból",
        code: `Every weekday at 8:00 AM, run the Daily customer-risk skill against the
current account list. Post a linked watch list in this conversation. Do not
contact customers. If the source data is unavailable, report the failure
instead of using old data.`,
        caption: `Forrás: <a href="${docs.skills}">Skills and routines</a>.`,
      },
      {
        type: "prompt",
        label: "Saját fordításunk",
        code: `Minden hétköznap reggel 8:00-kor futtasd a Daily customer-risk skillt az
aktuális fióklistán. Ebben a beszélgetésben tegyél közzé egy linkelt figyelőlistát.
Ne keresd meg az ügyfeleket. Ha a forrásadat nem érhető el, a hibát jelentsd,
ne használj régi adatot.`,
        caption: "A Botkezdő fordítása. Az időzónát a megerősítéskor kell egyeztetni, a dokumentáció külön kéri.",
      },
      { type: "h2", text: "A teszt valódi munka" },
      {
        type: "p",
        html: "A dokumentáció figyelmeztetése, eredeti nyelven, majd a fordításunk:",
      },
      {
        type: "prompt",
        label: "Eredeti figyelmeztetés",
        code: `A test run performs real work. It can navigate websites, change files, and
call connected tools. Use safe inputs and keep write actions behind approval.`,
        caption: `Forrás: <a href="${docs.skills}">Skills and routines, Test before enabling</a>.`,
      },
      {
        type: "p",
        html: "Saját fordításunk: a Test run valódi munkát végez. Weboldalakat nyithat, fájlokat módosíthat, és hívhatja a csatolt eszközöket. Biztonságos bemenetet használj, és az írást tartsd jóváhagyás mögött.",
      },
      {
        type: "p",
        html: "A dokumentáció szerint a teszt után ezt nézd át: aktuális bemenetet választott-e, megvan-e a kért formátum, minden lépésnek van-e forrása vagy nyoma, megállt-e a tervezett jóváhagyásnál, és egyértelmű-e a hibás állapot.",
      },
      { type: "h2", text: "Hol kezeled, és meddig" },
      {
        type: "ul",
        items: [
          "Nyisd meg a Botot, válaszd a <strong>View conversation details</strong> pontot, majd a <strong>Routines</strong> listát. Itt látod a routine-okat és a friss futásokat.",
          "Bekapcsolhatod vagy szüneteltetheted, tesztet futtathatsz, szerkesztheted az ütemezést vagy az utasítást, megnézheted a sikerek és hibák előzményét, és törölheted.",
          "Egy Botnak legfeljebb 50 routine-ja lehet. Routinenként a 20 legutóbbi futás rekordja marad meg.",
          "Két ütemezett futás között legalább öt percnek kell eltelnie.",
          "A törlés azonnali, és nincs visszavonás. A Bot törlése a Bot routine-jait is törli.",
          "A háttérben futó routine akkor is futhat, ha a laptopod csukva van.",
          "Hosszabb távollét után a Grok Bot megkérdezheti, fussanak-e tovább a routine-ok, és ha nincs válasz, szüneteltetheti őket. Visszatérve nézd át a szüneteltetetteket.",
        ],
      },
      {
        type: "p",
        html: `Forrás: <a href="${docs.skills}">Skills and routines</a>. Az időzóna és a használati keret a <a href="${docs.settings}">Settings and notifications</a> oldalon van; ennek a lapnak a tartalmát itt nem részletezzük, csak a hivatalos címét adjuk meg.`,
      },
      { type: "h2", text: "Megbízható routine, a dokumentáció listája" },
      {
        type: "ul",
        items: [
          "Előbb az előkészítést automatizáld, ne a végrehajtást.",
          "A Bot először vázoljon, egyeztessen vagy javasoljon.",
          "Küldés, vásárlás, törlés, publikálás és éles rendszer módosítása maradjon jóváhagyás mögött.",
          "Legyen szabály arra is, ha nincs adat, vagy az adat régi.",
          "Az újrapróbálás legyen idempotens, ahol lehet.",
          "Mondd meg, hova jelentse a részleges készültséget.",
          "Teszteld újra, ha a weboldal, a connector vagy a forrás formátuma változik.",
        ],
      },
      { type: "h2", text: "Eseményre induló routine" },
      {
        type: "p",
        html: `A Cursor-fiók integrációi eseményből is indíthatnak routine-t, például Slack-üzenetből vagy GitHub-értesítésből. Ezek külön állnak a Slack- vagy GitHub-pluginektől, és külön csatlakozás kellhet hozzájuk. A dokumentáció szűk szabályt kér, és óv a túl tág figyelőtől, például az „every new message” típusútól: zajt kelt, használatot fogyaszt, és könnyebben cselekszik lényegtelen bemenetre. (<a href="${docs.skills}">Skills and routines</a>)`,
      },
      {
        type: "prompt",
        label: "Eredeti példa, eseményre",
        code: "When a message in `#customer-escalations` contains a support ticket link and\nthe phrase “needs repro,” open the ticket, reproduce the issue in staging,\nand post a repro pack in this conversation. Never post back to Slack without\napproval.",
        caption: `Forrás: <a href="${docs.skills}">Skills and routines</a>. Az első routine-odhoz nem kötelező. A jóváhagyási határt a <a href="/7-nap/7-nap-jovahagyasok/">7. nap</a> veszi át.`,
      },
      {
        type: "done",
        items: [
          "Létrehoztál egy routine-t, Test runnal, biztonságos bemenettel megnézted, és amíg az eredmény nem jó, szüneteltetve hagyod.",
        ],
      },
    ],
    sources: [
      { title: "Skills and routines (docs.x.ai)", url: docs.skills },
      { title: "Frequently asked questions (docs.x.ai)", url: docs.faq },
      { title: "Settings and notifications (docs.x.ai) – csak hivatkozás", url: docs.settings },
    ],
  },
  {
    n: 7,
    slug: "7-nap-jovahagyasok",
    title: "7. nap: Jóváhagyások és biztonság",
    nav: "Jóváhagyás",
    card: "Allow once, Always allow, Deny. Auto Review: ütközésnél az Ask first nyer.",
    description:
      "Jóváhagyások, Auto Review, a közös gép határa és a helyi gép beállítása a Grok Botban. A Kezdő 7 nap 7. napja.",
    lead: "A Bot akkor hasznos, ha a kockázatos lépésnél megáll. Ma ezt a határt állítod be. Kb. 15 perc, a mi becslésünk.",
    steps: [
      {
        name: "Írj határt a kérésbe és a Bot leírásába",
        text: "Mondd meg, mit csinálhat, és hol álljon meg. Küldés, publikálás, vásárlás, törlés és éles módosítás előtt kérdezzen.",
      },
      {
        name: "Ismerd fel a három választ",
        text: "Allow once az adott lépést engedi. Always allow egyező szabályt menthet. Deny megállítja. A jóváhagyás a javasolt lépésre szól, a már elvégzett munkát nem vonja vissza.",
      },
      {
        name: "Nyisd meg az Auto Review szabályokat",
        text: "Settings → General → Auto-review. Az Ask first mindig megállít. Az Allow automatically csak akkor enged, ha az automatikus vizsgálat nem talál másik okot a megállásra. Ha mindkettő illeszkedik, az Ask first nyer.",
      },
      {
        name: "Vegyél fel egy szűk Ask first szabályt",
        text: "Például: kérdezzen, mielőtt külső e-mailt küld. Kerüld a tág szabályt, például hogy a böngészőben minden szabad.",
      },
      {
        name: "A helyi gépet hagyd szigorún",
        text: "A felhős gép külön áll. A helyi végrehajtás alapértéke Ask every time. A dokumentáció szerint Never allow, hacsak egy Botnak nincs konkrét oka a helyi fájljaidon dolgozni.",
      },
    ],
    blocks: [
      { type: "h2", text: "Határ a kérésben" },
      {
        type: "p",
        html: `A dokumentáció ezeknél kér kifejezett határt: üzenet vagy meghívó küldése, tartalom publikálása, vásárlás és pénzmozgás, törlés vagy felülírás, jogosultság módosítása, éles változtatás, jogi feltétel elfogadása. A jóváhagyás a javasolt lépést szabályozza. A már elvégzett munkát nem csinálja vissza. (<a href="${docs.approve}">Approvals, security, and privacy</a>)`,
      },
      {
        type: "prompt",
        label: "Eredeti prompt a dokumentációból",
        code: `Reconcile the campaign data and draft a recommended budget change. Do not
change the campaign or message the agency. Ask for approval after showing the
current value, proposed value, and expected impact.`,
        caption: `Forrás: <a href="${docs.approve}">Approvals, security, and privacy</a>.`,
      },
      { type: "h2", text: "Lépések" },
      { type: "steps" },
      { type: "h2", text: "Allow once, Always allow, Deny" },
      {
        type: "p",
        html: `Ha egy lépés jóváhagyást kér, a beszélgetés mutatja a javasolt műveletet és a bemeneteit. Nézd meg a célt, a terjedelmet és az értékeket. Az <strong>Allow once</strong> azzal a lépéssel enged tovább. Az <strong>Always allow</strong> egyező szabályt menthet. A <strong>Deny</strong> megállítja. Ugyanezek a gombok iPhone-on is. Ne hagyj jóvá olyat, aminek a célját vagy a hatását nem tudod megnevezni: kérd el előbb egyszerű nyelven, vagy vázlatként. (<a href="${docs.approve}">Approvals</a>)`,
      },
      { type: "h2", text: "Ha nem vagy ott" },
      {
        type: "p",
        html: `Egy chat jóváhagyása, ahol benne vagy, megvár. A felügyelet nélkül indult munka jóváhagyása, például routine, trigger vagy egy másik Bot üzenete, a dokumentáció szerint körülbelül 10 perc után lejár. A kártya ekkor <strong>Expired</strong>, és a lépés nem fut le. A lejárt kártya felajánlhatja az <strong>Always allow this in the future</strong> lehetőséget: ez a javasolt szabályt az Allow automatically listádba teszi, de a lejárt lépést nem futtatja. A feladat befejezéséhez kérd meg a Botot, hogy próbálja újra. (<a href="${docs.approve}">Approvals</a>)`,
      },
      { type: "h2", text: "Auto Review" },
      {
        type: "p",
        html: `Bekapcsolt Auto Review mellett a Grok Bot a dokumentáció szerint értékeli az eszközhívásokat és a számítógépes lépéseket, mielőtt lefutnának. A szabályok helye: <strong>Settings → General → Auto-review</strong>.`,
      },
      {
        type: "ul",
        items: [
          "<strong>Ask first:</strong> az illeszkedő lépést mindig megállítja, hogy te dönts.",
          "<strong>Allow automatically:</strong> az illeszkedő lépés csak akkor mehet tovább, ha az automatikus vizsgálat nem talál másik okot a megállásra.",
          "Ha mindkét fajta szabály illeszkedik, az <strong>Ask first</strong> nyer.",
        ],
      },
      {
        type: "p",
        html: `A dokumentáció szűk szabályt kér, ismert lépésre és terjedelemre. A példái eredeti nyelven:`,
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
        html: `Saját fordításunk: kérdezzen, mielőtt bármilyen külső e-mailt küld; kérdezzen, mielőtt éles irányítópultot módosít; automatikusan engedheti a <code>git status</code> futtatását a <code>/workspace/reports</code> mappában. A tág szabályt, például hogy a böngészőben minden szabad, a dokumentáció kerülendőnek írja. Az Auto Review modellalapú: kiegészíti a legkisebb jogosultságot és a kifejezett határt, nem helyettesíti. A személyes szabályok az aktuális desktopon tárolódnak, és szinkronban vannak annak Grok Bot gépével, ezért egy másik desktop-telepítésnek saját szabály kell. (<a href="${docs.approve}">Approvals</a>)`,
      },
      {
        type: "p",
        html: `Ha a csapat adminja kikényszeríti az Auto Reviewt, ugyanabban a táblában zárolt csapatszabályok is látszanak. Ezeket nem tudod szerkeszteni vagy törölni. A saját szabályaid felül csak szigorúbbá tehetik a viselkedést. (<a href="${docs.approve}">Approvals</a>)`,
      },
      { type: "h2", text: "A saját géped" },
      {
        type: "p",
        html: `A közös Grok Bot gép a felhőben fut. A előtted lévő Mac vagy Windows elérése külön képesség. A <strong>Settings → General → Bot → Execution on Local Computer</strong> alatt az <strong>Ask every time</strong>, az <strong>Always allow</strong> vagy a <strong>Never allow</strong> választható. Az alapérték az Ask every time. Ha a fiókodnak már van regisztrált gépe, a választás a <strong>Settings → Computer → Computers</strong> alá kerül, gépenként külön <strong>Execution on this computer</strong> beállítással. A dokumentáció szerint használj Never allowt, hacsak egy Botnak nincs konkrét oka a helyi fájlokon dolgozni. Ezek a kapcsolók a felhős gépet nem tiltják le. (<a href="${docs.approve}">Approvals</a>)`,
      },
      {
        type: "p",
        html: `Amikor egy Bot először kér helyi parancsot, a beszélgetés megkérdezi: <strong>Allow Grok Bot and all Bots to run commands on your local computer?</strong> A válaszok: <strong>Always allow</strong>, <strong>Allow once</strong>, <strong>Never</strong> és <strong>Deny once</strong> (Esc). Az Always allow és a Never minden Botra állítja az Execution on Local Computer értéket, később a Settingsben módosítható. Ha a csapat szabálya szigorúbb, az Always allow nem elérhető, és a szigorúbb csapatszabály érvényes. (<a href="${docs.approve}">Approvals</a>)`,
      },
      {
        type: "p",
        html: `Hardveres biztonsági kulcsnál, például YubiKey, a Bot böngészője használhatja a desktopodba dugott kulcsot, ha a <strong>Settings → General → Security Key</strong> alatt a <strong>Use hardware security keys</strong> be van kapcsolva. A dokumentáció szerint macOS-en és Windowson ez az alapérték, Linuxon még nincs támogatva, és minden használat előtt jóváhagyást kér. (<a href="${docs.approve}">Approvals</a>)`,
      },
      { type: "h2", text: "A közös gép nem biztonsági határ" },
      {
        type: "ul",
        items: [
          "Ne tekintsd a külön Botot biztonsági határnak.",
          "Jelentkezz ki egy szolgáltatásból, ha többé nem szabad elérhetőnek lennie.",
          "A munka végén szedd le az érzékeny ideiglenes fájlokat.",
          "Ha a hozzáférés már nem kell, töröld a connectort, és vond vissza a jogosultságot a forrásszolgáltatásnál is.",
          "A Bot törlése nem törli a közös gép fájljait és a böngésző munkameneteit.",
        ],
      },
      {
        type: "p",
        html: `A dokumentáció legkisebb jogosultságú rendje: csak a kellő eszközt kösd be, kezdj olvasással és vázlattal, a küldést és a törlést tartsd jóváhagyás mögött, és rendszeresen nézd át a connectorokat meg az aktív routine-okat. A megosztott Bot sablonja sem a te géped és a te belépéseid: nyilvános link a konfigurációt mutatja, a számítógépet nem. Titkot, ügyféladatot és belső URL-t ne tegyél olyan Botba, amit megosztasz. (<a href="${docs.approve}">Approvals</a>, <a href="${docs.bots}">Create and manage Bots</a>)`,
      },
      {
        type: "p",
        html: `A Grok Bot a Cursor hitelesítését és adatbeállításait használja. Felhős tárolás kell hozzá, a Legacy Privacy Mode nem támogatott. A tanulásból való kilépés a Cursor-fiók és az adatvédelmi beállítások szerint megy. A szerződéses részleteket a dokumentáció a Cursor adatvédelmi és biztonsági oldalára bízza. (<a href="${docs.approve}">Approvals</a>, <a href="${docs.privacyCursor}">Cursor Privacy Policy</a>, <a href="${docs.securityCursor}">Cursor security</a>)`,
      },
      {
        type: "done",
        items: [
          "A Bot leírásában van egy „jóváhagyás nélkül soha” szabály, feliratál vagy leírtál egy szűk Ask first szabályt, és tudod, hogy a helyi gép alapértéke Ask every time.",
        ],
      },
    ],
    sources: [
      { title: "Approvals, security, and privacy (docs.x.ai)", url: docs.approve },
      { title: "Frequently asked questions (docs.x.ai)", url: docs.faq },
      { title: "Create and manage Bots (docs.x.ai)", url: docs.bots },
      { title: "Use the computer and apps (docs.x.ai)", url: docs.apps },
    ],
  },
];

export function getDay(slug: string): Day {
  const day = days.find((item) => item.slug === slug);
  if (!day) throw new Error(`Ismeretlen nap: ${slug}`);
  return day;
}
