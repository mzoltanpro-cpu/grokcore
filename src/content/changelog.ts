/**
 * Grok Bot changelog (https://x.ai/changelog/bot) nem hivatalos magyar fordításban.
 * Csak a Grok Bot kiadásai (a Grok Build nem). A hiteles szöveg az eredeti, angol oldal.
 *
 * Új kiadás felvétele: egyetlen új elem a `changelog` tömb ELEJÉRE, a forrás minden adatával.
 * - `version`: a kiadás verziója a forrás horgonyából (https://x.ai/changelog/bot#v0.75.2 → "0.75.2").
 * - `date`: a kiadás napja ISO formában (RSS pubDate, UTC).
 * - `title`: magyar fordítás (`hu`) és az eredeti cím (`en`), a zárójeles verzió nélkül.
 * - `alsoIncludes`: az „Also includes …” sor verziói, sorrendben; ha nincs ilyen sor, üres tömb.
 * - `sections`: a forrás szakaszai a forrás sorrendjében (New → "new", Improved → "improved", Fixed → "fixed").
 *   Minden tétel: `hu` (fordítás), `en` (eredeti), és `label`, ha a forrás Teams vagy Enterprise jelölést tesz rá.
 *   Inline jelölés mindkét nyelven: `kód` (a forrás <code> eleme) és [szöveg](https://…) (a forrás linkje).
 * - Állítsd át a `changelogChecked` dátumát a lekérés napjára.
 * A sorrendet, az ismétlődő verziót és a dátumokat a build ellenőrzi (lásd lent), a megjelenítés innen olvas.
 *
 * Fordítási szabály: csak az, ami a forrásban áll. Termék-, felület-, funkció- és connectornevek,
 * billentyűparancsok és linkek eredetiben maradnak (Pages, Routines, Library, Auto-review, Shop Pay, ⌘/ …).
 */
export const changelogSourceUrl = "https://x.ai/changelog/bot";
export const changelogRssUrl = "https://x.ai/changelog/bot/rss.xml";
/** A forrás utolsó ellenőrzésének napja (ISO). */
export const changelogChecked = "2026-10-27";

export type ChangelogLabel = "Teams" | "Enterprise";
export type ChangelogSectionKind = "new" | "improved" | "fixed";

export type ChangelogItem = {
  /** Magyar fordítás. */
  hu: string;
  /** Az eredeti angol tétel, a fordítás ellenőrzéséhez. */
  en: string;
  /** Csak ha a forrás így jelöli. */
  label?: ChangelogLabel;
};

export type ChangelogSection = {
  kind: ChangelogSectionKind;
  items: ChangelogItem[];
};

export type ChangelogRelease = {
  version: string;
  /** ISO dátum (ÉÉÉÉ-HH-NN). */
  date: string;
  title: { hu: string; en: string };
  /** Az „Also includes …” sor verziói; üres, ha a forrásban nincs ilyen sor. */
  alsoIncludes: string[];
  sections: ChangelogSection[];
};

export const changelog: ChangelogRelease[] = [
  {
    version: "0.75.8",
    date: "2026-10-24",
    title: { hu: "Auto-review szabálykártyák és okosabb connectorok", en: "Auto-review rule cards and smarter connectors" },
    alsoIncludes: ["0.75.6", "0.75.7"],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "Az appban a Bot felajánlhatja, hogy egy általad jóváhagyott kártyán hozzáad, módosít vagy eltávolít egyet az [Auto-review rules](https://docs.x.ai/grok-bot/approvals-security-and-privacy#configure-auto-review) közül. Grok Bot 0.75.2 vagy újabb szükséges.", en: "In the app, a Bot can offer to add, change, or remove one of your [Auto-review rules](https://docs.x.ai/grok-bot/approvals-security-and-privacy#configure-auto-review) on a card you confirm. Requires Grok Bot 0.75.2 or later." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "Az Auto-review még egyszer átnézi a műveletet, mielőtt jóváhagyási kártyát mutatna, így kevesebb biztonságos művelethez kell kártya.", en: "Auto-review takes a second look before showing an approval card, so fewer safe actions need one." },
          { hu: "A Bot állapotsora rögtön a küldés után megjelenik, gyors válaszoknál is.", en: "A Bot's status line shows up right after you send, even for quick replies." },
          { hu: "Amikor a háttérmunka befejeződik, a Bot elvégzi, amit kértél, azokkal a lépésekkel együtt, amelyeket a befejezés utánra kértél, és elmondja, mit tenne ezután, ahelyett hogy magától vagy egy másik ágens jóváhagyására cselekedne. Grok Bot 0.75.2 vagy újabb szükséges.", en: "When background work finishes, the Bot completes what you asked, including steps you said to take once it was done, and says what it would do next instead of acting on its own or on another agent's approval. Requires Grok Bot 0.75.2 or later." },
          { hu: "Az Auto-review már nem tekinti önmagában kockázatosnak, ha a Bot elment vagy szerkeszt egyet a routine-jai közül.", en: "Auto-review no longer counts a Bot saving or editing one of its routines as risky by itself." },
          { hu: "A Slackben megjelenő Auto-review jóváhagyási kártyák leírják a műveletet, ahogy az appban is.", en: "Auto-review approval cards in Slack describe the action, as they do in the app." },
          { hu: "Az időpont-egyeztetés a bekötött naptáradat használja, a Google Calendart vagy az Outlook Calendart, és csak akkor ajánlja fel egy bekötését, ha egyik sincs bekötve.", en: "Scheduling uses the calendar you've connected, Google Calendar or Outlook Calendar, and offers to connect one only when neither is." },
          { hu: "Egy csak általad látható chatben a Bot kérdezés nélkül olvassa a saját privát fájljaidat.", en: "In a chat only you can see, a Bot reads your own private files without asking first." },
          { hu: "Ha a Bot munka közben telepít egy plugint, azonnal használhatja a plugin skilljeit.", en: "When a Bot installs a plugin while working, it can use the plugin's skills right away." },
          { label: "Teams", hu: "Akik nincsenek rajta egy Team Bot megosztási listáján, a csapattagokat is beleértve, már nem férnek hozzá, amíg egy tulajdonos meg nem osztja velük.", en: "People not on a Team Bot's share list, including teammates, no longer have access to it until an owner shares it with them." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "Ha egy connector, például az X, új eszközöket vagy mezőket kap, a Botok újrabekötés nélkül használhatják őket.", en: "When a connector such as X adds tools or fields, Bots can use them without you reconnecting it." },
          { hu: "Az a connector, amelynek lejárt a bejelentkezése, az appban Authenticate állapotot mutat Connected helyett, egyezően azzal, amit a Bot mond. Grok Bot 0.71.2 vagy újabb szükséges.", en: "A connector whose sign-in expired shows Authenticate in the app instead of Connected, matching what the Bot says. Requires Grok Bot 0.71.2 or later." },
          { hu: "A connector által fájlként visszaadott képek képként jutnak el a Bothoz, a többi bináris fájlt pedig már nem olvassa olvashatatlan szövegként.", en: "Images a connector returns as files reach the Bot as images, and other binary files are no longer read as garbled text." },
          { hu: "Az X Money több X-fióknál egy koppintással bekötődik, és ha a tiédet nem tudja bekötni, a Bot ezt megmondja, ahelyett hogy bejelentkezést ajánlana fel.", en: "X Money connects in one tap for more X accounts, and if it can't connect yours, the Bot says so instead of offering a sign-in." },
          { hu: "Ha a Bot helyetted posztol a Slackbe, például egy routine-ból, a telefonod nem kap értesítést, és az olvasatlan-jelvény száma sem nő.", en: "When a Bot posts to Slack for you, such as from a routine, your phone isn't notified and its unread badge doesn't go up." },
          { hu: "Ha a Slackben egy biztonsági ellenőrzés blokkolja a Bot válaszát, a Bot ezt jelzi, és azt javasolja, próbálkozz egy másik üzenettel.", en: "In Slack, when a safety check blocks a Bot's reply, the Bot says so and suggests trying a different message." },
          { hu: "A legtöbb fióknál, ha be van kapcsolva a [Route traffic through this computer](https://docs.x.ai/grok-bot/private-networks#route-through-a-members-desktop), a kapcsolat azonnal helyreáll, amint a Bot gépe felébred.", en: "For most accounts, with [Route traffic through this computer](https://docs.x.ai/grok-bot/private-networks#route-through-a-members-desktop) on, the connection comes back as soon as the Bot's computer wakes." },
          { label: "Teams", hu: "Egy Team Bot routine-jai olvashatják azokat a Slack-csatornákat, amelyekben te és a Bot is benne vagytok, ahelyett hogy minden olvasást elutasítanának.", en: "A Team Bot's routines can read Slack channels you and the Bot are both in, instead of refusing every read." },
          { label: "Teams", hu: "Amikor egy Team Bot szerkeszti az egyik saját Slack-üzenetét, az üzeneten halvány (edited) címke látszik.", en: "When a Team Bot edits one of its own Slack messages, the message shows a muted (edited) label." },
        ],
      },
    ],
  },
  {
    version: "0.75.5",
    date: "2026-10-23",
    title: { hu: "Vault, e-mail-továbbítás és kevesebb jóváhagyási kártya", en: "Vault, email forwarding, and fewer approval cards" },
    alsoIncludes: ["0.75.3", "0.75.4"],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "A Botok a Settingsben egy Vaultba menthetik a bejelentkezési adataidat, a kártyáidat és az elérhetőségeidet, és kitölthetik őket bejelentkezéskor vagy fizetéskor. Grok Bot 0.75.2 vagy újabb szükséges.", en: "Bots can save your logins, cards, and contact info to a Vault in Settings and fill them in to sign in or check out. Requires Grok Bot 0.75.2 or later." },
          { hu: "A Botok a saját postafiókjukból továbbíthatnak egy e-mailt az eredeti formázásával, képeivel és mellékleteivel. Grok Bot 0.75.2 vagy újabb szükséges.", en: "Bots can forward an email from their own inbox with its original formatting, images, and attachments. Requires Grok Bot 0.75.2 or later." },
          { hu: "A Botok rögzítik, ki kérte az egyes üzeneteket, amelyeket a Slackben közzétesznek, így a szálban bárki megkérdezheti, ki kérte őket.", en: "Bots record who asked for each message they post in Slack, so anyone in the thread can ask who requested it." },
          { hu: "Halloweenre tök alakot adhatsz egy Botnak, amikor létrehozod, vagy amikor megváltoztatod az avatarját. Grok Bot 0.75.2 vagy újabb szükséges.", en: "For Halloween, you can give a Bot a pumpkin shape when you create it or change its avatar. Requires Grok Bot 0.75.2 or later." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "Az Auto-review ritkábban kérdez rá egy olyan műveletre, amelyet a saját szavaiddal kértél.", en: "Auto-review asks less often for an action you asked for in your own words." },
          { hu: "Ha elutasítasz egy jóváhagyási kártyát, a Bot leáll, és addig nem próbálja újra azt a műveletet, amíg nem küldesz egy újabb üzenetet.", en: "After you deny an approval card, the Bot stops and doesn't try that action again until you send another message." },
          { hu: "Az e-mailek és Slack-üzenetek, amelyeket a Bottal küldetsz el, elmennek, amint az Auto-review engedélyezi őket, a routine-okban és más körökben indított küldések viszont továbbra is vázlatként várnak.", en: "Emails and Slack messages you ask a Bot to send go out once Auto-review allows them, while sends on routine and other turns still wait as drafts." },
          { hu: "Amikor a Bot átadja neked a gépét, hogy bejelentkezz egy olyan oldalra, amelyhez van connector, annak a connectornak a bekötőkártyáját is felajánlja.", en: "When the Bot hands you its computer to sign in to a site that has a connector, it also offers that connector's connect card." },
          { hu: "Ha az X-fiókodról kérdezed a Botot, az X a csatolt X-fiókodon keresztül kapcsolódik be, akkor is, ha eltávolítottad az X plugint.", en: "Asking a Bot about your X account connects X through your linked X account, even if you removed the X plugin." },
          { hu: "Az X bekötése ugyanazon a fiókon keresztül az X Moneyt is beköti, és ha az X Money-egyenlegedről, -tevékenységedről vagy -kártyádról kérdezel, az telepíti az X Moneyt.", en: "Connecting X also connects X Money through the same account, and asking about your X Money balance, activity, or card installs X Money." },
          { hu: "A routine-jaid összesen óránként legfeljebb 300-szor futhatnak 100 helyett, egy-egy routine pedig legfeljebb 200-szor.", en: "Your routines can run up to 300 times an hour in total instead of 100, and each routine up to 200 times." },
          { hu: "Ha be van kapcsolva a Route traffic through this computer, a Settings megmutatja, hány oldalt tiltott le, mert privát vagy VPN-címre oldódik fel.", en: "With Route traffic through this computer on, Settings shows how many sites were blocked because they resolve to a private or VPN address." },
          { label: "Teams", hu: "A csapattagok a Team Bottal folytatott saját közvetlen üzenetükben reagálhatnak az üzenetekre, idézhetnek az Add to chat segítségével, és válaszolhatnak a kártyákra.", en: "Teammates in their own DM with a Team Bot can react to messages, quote with Add to chat, and answer cards." },
          { label: "Teams", hu: "A Team Botok úgy nevezik meg a connectorokat, ahogy a pluginlistád, például Google Slides, amikor engedélyt kérnek egy használatára, vagy elmondják, kiét használták.", en: "Team Bots name connectors as your plugin list does, such as Google Slides, when they ask to use one or say whose they used." },
          { hu: "Ha a Grok Business seated még nem terjed ki a Grok Botra, a használati korlátról szóló üzenet azt írja, hogy kérd meg a Grok Business-adminodat, hogy kösse be a csapatodat.", en: "If your Grok Business seat doesn't cover Grok Bot yet, the usage limit message says to ask your Grok Business admin to connect your team." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "Az Auto-review ritkábban tér át jóváhagyási kártyára: újrapróbálja a sikertelen ellenőrzést, és a hosszú chateket is átnézi ahelyett, hogy leállna.", en: "Auto-review falls back to an approval card less often, retrying a check that fails and reviewing long chats instead of stopping." },
          { hu: "Az Auto-review már nem enged át egy olyan műveletet, amely előtt a kérésed szerint meg kellett állni, például egy üzenet elküldését, amikor csak vázlatot kértél.", en: "Auto-review no longer waves through an action your request said to stop before, such as sending a message you asked only to draft." },
          { hu: "Ha az X-követőidről kérdezed a Botot, egyenes választ kapsz arról, hogy az X ezt nem kínálja, ahelyett hogy egy böngészős X-bejelentkezés indulna.", en: "Asking a Bot about your X followers gets a plain answer that X doesn't offer it, instead of a browser sign-in to X." },
          { hu: "Egy fiókegyesítés után továbbra is kezelheted az általad létrehozott Botokat, és megoszthatod őket a csapatoddal.", en: "After an account merge, you keep managing the Bots you created and can share them with your team." },
          { hu: "A több szerverből álló pluginek, például a Salesforce, minden szervert külön sorban mutatnak, így mindegyiket láthatod, és mindegyikbe bejelentkezhetsz.", en: "Plugins with several servers, such as Salesforce, show each server as its own row, so you can see and sign in to every one." },
          { hu: "A Slackben a Botok azokra a szálválaszokra is felelnek, amelyeket a csatornába is elküldtek, ugyanúgy, mint a többi szálválaszra.", en: "In Slack, Bots answer thread replies that were also sent to the channel, as they do other thread replies." },
          { label: "Teams", hu: "Egy Team Bot Share this Bot kártyáján az, aki egy csoporton keresztül kezeli a Botot, Manager szerepkörrel látja magát.", en: "On a Team Bot's Share this Bot card, someone who manages the Bot through a group sees their role as Manager." },
          { label: "Teams", hu: "Az a munka, amelyet egy Team Bot egy megosztott chatben továbbad, használhatja az általad engedélyezett connectorokat, és a válasza megmondja, kinek a connectorát használta.", en: "Work a Team Bot hands off in a shared chat can use the connectors you allowed, and its reply says whose connector it used." },
          { label: "Teams", hu: "Amikor egy Team Bot routine-ja egy Slack-szálban válaszol, a Bot követi a szálat, és @mention nélkül is felel a későbbi válaszokra.", en: "When a Team Bot's routine replies in a Slack thread, the Bot follows the thread and answers later replies without an @mention." },
          { hu: "Ha visszaállítasz egy chatet, amelynek az első üzenetét letiltották, az új üzenetekre hiba helyett válasz érkezik.", en: "After you reset a chat whose first message was blocked, new messages get replies instead of an error." },
        ],
      },
    ],
  },
  {
    version: "0.75.2",
    date: "2026-10-22",
    title: { hu: "Pages, új chatkártyák és videókészítés", en: "Pages, new chat cards, and video creation" },
    alsoIncludes: ["0.72.0", "0.72.1", "0.73.0", "0.73.1", "0.74.0", "0.75.0", "0.75.1"],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "A Botok Page-eket, például riportokat, feljegyzéseket és dashboardokat készíthetnek, amelyeket közösen szerkesztetek, vagy amelyeket a Bot naprakészen tart.", en: "Bots can build Pages, such as reports, memos, and dashboards, that you edit together or have the Bot keep up to date." },
          { hu: "A Botok videót készíthetnek leírásból vagy egy általad megosztott képből.", en: "Bots can create videos from a description or from an image you share." },
          { hu: "A Library oldalait, fájljait és linkjeit kitűzheted egy Pinned szakaszba, amely legfelül marad, és szinkronizálódik az eszközeid között.", en: "You can pin Library pages, files, and links to a Pinned section that stays at the top and syncs across your devices." },
          { hu: "A dashboard Pages szakasza listázza az általad megosztott Page-eket, ahol visszavonhatod a megosztásukat, vagy törölheted őket.", en: "The dashboard's Pages section lists the Pages you've shared, where you can unshare or delete them." },
          { hu: "Ha egy Library-sor fölé viszed az egeret, vagy fókuszba kerül, egy előnézet mutatja, ki küldte az elemet, mikor, és ki láthat egy Page-et.", en: "Hovering over or focusing a Library row shows a preview with who sent the item, when, and who can see a Page." },
          { hu: "A Botok fizethetnek Shop Pay-jel: Shop checkouttal ott, ahol az üzlet elfogadja, máshol pedig egy egyszer használatos Shop carddal.", en: "Bots can pay with Shop Pay, through Shop checkout where a store accepts it and with a one-time Shop card elsewhere." },
          { hu: "Az X Moneyt egy koppintással bekötheted egy chatből, a connector oldaláról vagy a fizetésnél, miután bejelentkeztél az X-be, ha nincs X-fiók csatolva.", en: "You can connect X Money in one tap from a chat, the connector page, or checkout, after signing in to X if no X account is linked." },
          { label: "Teams", hu: "A Page-tulajdonosok megoszthatnak egy Page-et a teljes szervezetükkel vagy a szervezeten belül egy másik csapattal.", en: "Page owners can share a Page with their whole organization or with another team in it." },
          { label: "Teams", hu: "A csapatadminok korlátozhatják, ki oszthat meg Page-eket a csapat minden tagjával.", en: "Team admins can limit who can share Pages with everyone on the team." },
          { label: "Teams", hu: "A csapatadminok bekapcsolhatják a linkelőnézeteket, amelyek egy Team Bot nevét, leírását, színét és alakját mutatják mindenhol, ahová a linkjét beküldik.", en: "Team admins can turn on link previews that show a Team Bot's name, description, color, and shape wherever its link is posted." },
          { hu: "A billentyűparancsok lapja a ⌘/ kombinációval, valamint a Help, a profilmenü és a parancspaletta felől nyílik meg.", en: "A keyboard shortcuts sheet opens with ⌘/ and from Help, the profile menu, and the command palette." },
          { hu: "Ha az üzenetszerkesztő egy sorának elején `>` jelet írsz, idézetblokk kezdődik, és az idézett sor elején a Backspace visszaveszi a sort az idézetből.", en: "Typing `>` at the start of a composer line starts a block quote, and Backspace at the start of a quoted line lifts it back out." },
          { hu: "A mellékleteket az üzenetszerkesztőben húzással vagy az Alt és a nyílbillentyűk lenyomásával rendezheted át.", en: "You can reorder attachments in the composer by dragging them or by pressing Alt with the arrow keys." },
          { hu: "Bekötheted a Zoho CRM-et, és a bejelentkezés előtt kiválaszthatod a fiókod regionális adatközpontját.", en: "You can connect Zoho CRM and choose your account's regional data center before you sign in." },
          { label: "Teams", hu: "A csapatadminok feltölthetnek egy csapatikont, amely a munkaterület-választókban és a Team Botokon jelenik meg.", en: "Team admins can upload a team icon, shown in workspace selectors and on Team Bots." },
          { label: "Teams", hu: "A Team Bot-tulajdonosok és -kezelők engedélyezhetik, hogy a közreműködők a Configure felől routine-okat hozzanak létre.", en: "Team Bot owners and managers can let collaborators create routines from Configure." },
          { hu: "A Page-ek elfoghatják az egérmutatót, és kitölthetik a képernyőt.", en: "Pages can capture the pointer and fill the screen." },
          { hu: "A GitHub connector listázhatja a repositoryjaidat, összehasonlíthat commitokat, listázhatja egy pull request commitjait, és olvashatja a branch- és issue-kommenteket.", en: "The GitHub connector can list your repositories, compare commits, list a pull request's commits, and read branch and issue comments." },
          { hu: "A beépített Gmail-kapcsolat fájlokat csatolhat a vázlatokhoz és a küldésekhez, válaszolhat mindenkinek, megjegyzést fűzhet a továbbításhoz, és beállíthatja a címkék színét.", en: "The built-in Gmail connection can attach files to drafts and sends, reply all, add a note when forwarding, and set label colors." },
          { hu: "A Botok egy lépésben több Google Calendar-eseményt hozhatnak létre, frissíthetnek vagy törölhetnek, és a szerkesztett események már nem csúsznak át másik időpontra.", en: "Bots can create, update, or delete several Google Calendar events in one step, and edited events no longer shift to a different time." },
          { hu: "A routine-ok olvashatják a Bot postafiókjait.", en: "Routines can read the Bot's inboxes." },
          { hu: "Egy feladat, amelyet a Bot továbbad, képeket és videókat készíthet a chatbe.", en: "A task the Bot hands off can create images and videos for the chat." },
          { label: "Teams", hu: "Egy megosztott Team Bot üdvözlése csapat- vagy csoportchatben tartalmaz egy Chat with me linket, a csak a tulajdonosának elérhető Bot pedig csak a tulajdonosát üdvözli.", en: "A shared Team Bot's welcome in a team or group chat includes a Chat with me link, and an owner-only Bot greets only its owner." },
          { label: "Enterprise", hu: "Az Enterprise-csapatadminok véglegesen törölhetik egy tag Grok Bot-adatait a Security & Compliance Manage Member Computers and Data részéből vagy az Admin API-n keresztül.", en: "Enterprise team admins can permanently delete a member's Grok Bot data from Manage Member Computers and Data in Security & Compliance, or through the Admin API." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "A chatben megjelenő kártyák, a jóváhagyásoktól és kérdésektől a fájlokig, linkekig és táblázatokig, új dizájnt kaptak.", en: "Cards in chat have a new design, from approvals and questions to files, links, and tables." },
          { hu: "A Bot részletek panelje egyoszlopos: felül a profil, amelyre kattintva szerkesztheted, alatta a Media, a Computer és a Routines fül.", en: "The Bot details pane is one column, with a profile you click to edit above Media, Computer, and Routines tabs." },
          { hu: "A hanghívások támaszkodhatnak a korábbi hívásaidra és a Bottal folytatott friss chatre.", en: "Voice calls can draw on your earlier calls and recent chat with the Bot." },
          { hu: "A Bot megnyitja a linkeket, mielőtt elküldené őket, és kihagyja a nem működőket.", en: "The Bot opens links before sending them and leaves out broken ones." },
          { hu: "Az Auto-review jóváhagyási kártyák egy mondatban írják le a műveletet, logóval megnevezik az appot, és megjelölik a visszafordíthatatlan vagy érzékeny módosításokat.", en: "Auto-review approval cards describe the action in one sentence, name the app with its logo, and flag irreversible or sensitive changes." },
          { hu: "Ha megnevezel egy szolgáltatást, a Bot az első válaszában megmutatja annak a connectornak a bekötőkártyáját.", en: "When you name a service, the Bot shows that connector's connect card in its first reply." },
          { hu: "Ha egy connector kijelentkeztet, vagy elutasít egy bejelentkezést, a Bot megmondja, miért (például korlátozott Google-fiók), és hogyan javíthatod.", en: "When a connector signs you out or rejects a sign-in, the Bot says why, such as a restricted Google account, and how to fix it." },
          { hu: "Ha egy routine kijelentkezett connectorba ütközik, a chat megmutatja annak a connectornak a Reconnect kártyáját, legfeljebb naponta egyszer.", en: "When a routine hits a signed-out connector, the chat shows that connector's Reconnect card, at most once a day." },
          { hu: "Egy néhány perces böngésző- vagy asztali feladat előtt a Bot jelzi, hogy ez eltart egy ideig.", en: "Before a browser or desktop task that takes a few minutes, the Bot tells you it will take a while." },
          { hu: "Ha már megosztottál egy jelszót vagy kódot a chatben, a Bot azt használja, ahelyett hogy megtagadná a folytatást.", en: "If you already shared a password or code in the chat, the Bot uses it instead of refusing to continue." },
          { hu: "A válaszokban említett pull requestek, issue-k és repositoryk linkek.", en: "Pull requests, issues, and repositories mentioned in replies are links." },
          { hu: "Amikor a Bot megkérdezi, hogyan fizessen, egy kártyán választasz.", en: "When the Bot asks how to pay, you choose on a card." },
          { hu: "Amit egy személyes Bot egy chatben a memóriájába ment, arra az összes vele folytatott chatedben emlékszik, és csak te módosíthatod.", en: "What a personal Bot saves to memory in one chat is remembered in all your chats with it, and only you can change it." },
          { hu: "Egy Bot törlése véglegesen eltávolítja a beszélgetéseit, a memóriáját, a routine-jait és a mellékleteit, és eltávolítja a Slack-appját.", en: "Deleting a Bot permanently erases its conversations, memory, routines, and attachments, and removes its Slack app." },
          { hu: "Az első e-mail, amelyet egy Bot egy új címzettnek küld, egykattintásos leiratkozási linket tartalmaz.", en: "The first email a Bot sends to someone new includes a one-click unsubscribe link." },
          { hu: "Ha a Slackben arra kéred a Botot, hogy vizsgáljon ki, kutasson utána vagy ellenőrizzen valamit, gyors válasz helyett kutatáson alapuló választ kapsz.", en: "In Slack, asking the Bot to investigate, research, or check something gets a researched answer instead of a quick reply." },
          { hu: "A fiókod törlése előtt megjelenik, mit veszítenél el, egy már egyesített Grok-fiók csatolásakor pedig hiba helyett felajánlja, hogy beleolvasztja a fiókodat.", en: "Deleting your account first lists what you'd lose, and linking an already unified Grok account offers to merge into it instead of failing." },
          { hu: "A válaszokban a forráslinkek kompakt hivatkozáscímkékként, a cégnevek pedig tickerjelvényként jelennek meg.", en: "Source links in replies show as compact citation chips, and company names as ticker pills." },
          { hu: "A chat-táblázatok számoszlopai a tizedesvesszőhöz igazodnak, fejléc-alsorokkal, összesítő sorokkal és lábjegyzetekkel.", en: "Number columns in chat tables line up on the decimal point, with header sublines, summary rows, and footnotes." },
          { hu: "Az általad küldött fájlok kártyaként jelennek meg a típusukkal, nevükkel és méretükkel, a feliratos képeknél pedig egérrámutatásra megjelenik a Copy és a Download.", en: "Files you send show as cards with their type, name, and size, and captioned images offer Copy and Download on hover." },
          { hu: "A reakcióid a koppintás pillanatában megjelennek, és az üzenet már nem mozdul el az egérmutató alatt.", en: "Your reactions show the moment you tap them, and the message no longer shifts under your pointer." },
          { hu: "A Library gyorsabban nyílik meg azoknak, akiknek sok Team Botjuk van.", en: "The Library opens faster for people with many Team Bots." },
          { label: "Teams", hu: "A veled megosztott Team Botok egyenesen a mentett beszélgetésükre nyílnak.", en: "Team Bots shared with you open straight to their saved conversation." },
          { hu: "A böngészős bejelentkezés legfeljebb 20 percig vár, és felajánlja a Copy link lehetőséget, a Reopen link pedig ugyanazt a bejelentkezést folytatja, ahelyett hogy elölről kezdené.", en: "Browser sign-in waits up to 20 minutes and offers Copy link, and Reopen link resumes the same sign-in instead of starting over." },
          { hu: "A Connect Apps minden pluginnál a plugin saját logóját mutatja, és ha saját OAuth-klienssel állítasz be egy plugint, listázza a regisztrálandó callback URL-eket.", en: "Connect Apps shows each plugin's own logo, and setting up a plugin with your own OAuth client lists the callback URLs to register." },
          { hu: "Egy webhook-routine menüje mutatja az URL-jét és a kulcsát, a kulcs pedig rejtve marad, amíg fel nem feded.", en: "A webhook routine's menu shows its URL and key, and the key stays hidden until you reveal it." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "Egy hosszú chatben gyorsan visszagörgetve a görgetés már nem akad meg a régebbi üzenetek betöltése előtt.", en: "Scrolling back quickly through a long chat no longer stalls before older messages load." },
          { hu: "A chat régebbi részéből származó keresési találatok a megfelelő üzenetnél nyílnak meg, közvetlenül indítás után is.", en: "Search results from further back in a chat open on the right message, even right after launch." },
          { hu: "Az asztali értesítések a Bot válaszait egyszerű szövegként, teljes linkekkel mutatják, és kihagyják azokat a válaszokat, amelyeket már elolvastál egy másik eszközön.", en: "Desktop notifications show Bot replies as plain text with full links, and skip replies you already read on another device." },
          { hu: "A hanghívások túlélik a hálózati kimaradásokat és az összeomlásokat, újracsatlakozáskor újra felveszik a mikrofonodat, és a Bot akkor is tud válaszolni, ha le vagy némítva.", en: "Voice calls survive network drops and crashes, pick your microphone back up when it reconnects, and the Bot can answer while you're muted." },
          { hu: "Ha hangüzenet felvétele közben egyszer megnyomod az Entert, az üzenet elküldődik.", en: "Pressing Enter once while recording a voice note sends it." },
          { hu: "A billentyűparancsok, köztük a ⌘F és a parancspaletta, működnek, amíg egy Page nyitva van, és a paletta már nem zárja be a Page-et.", en: "Keyboard shortcuts, including ⌘F and the command palette, work while a Page is open, and the palette no longer closes the Page." },
          { hu: "Ha egy nyitott Page mellett a Back gombot nyomod meg, a Page bezárul, és a Botjánál maradsz, ahelyett hogy a korábban nézett Botra ugranál.", en: "Pressing Back while a Page is open closes the Page and stays on its Bot, instead of jumping to the Bot you viewed before." },
          { hu: "Egy Page Share menüje a jelenlegi láthatóságát mutatja, akkor is, ha az egy másik eszközön vagy a dashboardon módosult.", en: "A Page's Share menu shows its current visibility, even after it changed on another device or the dashboard." },
          { hu: "Ha egy üzenetet nem lehet menteni, az app megmondja, hogy elfogyott-e a szabad lemezterület a gépeden.", en: "When a message can't be saved, the app says whether your computer is out of disk space." },
          { hu: "Az asztali app közvetlenül csatlakozik, hacsak nem kapcsoltál be rendszerproxyt; ez javítja a betöltést egyes vállalati proxyk mögött.", en: "The desktop app connects directly unless you've turned on a system proxy, which fixes loading behind some corporate proxies." },
          { hu: "Ha a bejelentkezés nem tud csatlakozni, az app arra kér, hogy ellenőrizd a kapcsolatodat, ahelyett hogy azt írná, abbahagyta a böngésződre várást.", en: "When sign-in can't connect, the app asks you to check your connection instead of saying it stopped waiting for your browser." },
          { hu: "Egy új vagy újratelepített asztali app kihagyja az onboardingot olyan fióknál, amely már végigment rajta.", en: "A new or reinstalled desktop app skips onboarding for an account that already finished it." },
          { hu: "Ha egy követő üzenetet írsz be, egy nyitott kérdéskártya megválaszolatlan marad, ahelyett hogy az üzeneted válaszolna rá.", en: "Typing a follow-up leaves an open question card unanswered instead of answering it." },
          { hu: "A válaszban @-tal említett Botnevek az adott Bot chatjét nyitják meg.", en: "Bot names mentioned with @ in a reply open that Bot's chat." },
          { hu: "Egy Bot eszközének be- vagy kikapcsolása azt az állapotot alkalmazza, amelyet láttál, így egy elavult lista nem kapcsolhat vissza egy letiltott eszközt.", en: "Turning a Bot's tool on or off applies the state you saw, so an outdated list can't turn a blocked tool back on." },
          { hu: "Ha egy Bot létrehozását vagy egy Botsablon közzétételét elutasítják, az app megmutatja az okát.", en: "When creating a Bot or publishing a Bot template is refused, the app shows the reason." },
          { hu: "A Page-kártyák és -címek azonnal frissülnek, amint a Bot átnevez egy Page-et, a régebbi Page-kártyák pedig a legfrissebb változatát nyitják meg.", en: "Page cards and titles update as soon as the Bot renames a Page, and older Page cards open its latest version." },
          { hu: "A Connect Apps tovább vár a pluginjaidra, ahelyett hogy a Couldn't refresh üzenetet mutatná, a beépített pluginok pedig már nem kínálnak fel egy sikertelenül végződő Uninstallt.", en: "Connect Apps waits longer for your plugins instead of showing Couldn't refresh, and built-in plugins no longer offer an Uninstall that failed." },
          { hu: "A kreditvásárlás, az automatikus feltöltés bekapcsolása és a költéskorlát mentése megerősítést vagy hibát mutat az asztali appban.", en: "Buying credits, turning on auto top-up, and saving a spend limit show a confirmation or an error in the desktop app." },
          { hu: "Azok a reakciók és kártyaválaszok, amelyeket egy Bot munkája közben adsz hozzá, megmaradnak a köre végeztével is.", en: "Reactions and card answers you add while a Bot is working stay after its turn ends." },
          { hu: "Egy jóváhagyás, amelyre nem válaszolsz időben, egy chatsort hagy maga után, amely megnevezi, mi járt le.", en: "An approval you don't answer in time leaves a chat line that names what expired." },
          { hu: "A nagy Google Slides-szerkesztések frissítik az élő diasort.", en: "Large Google Slides edits update the live deck." },
          { hu: "A Bot által Gmailen keresztül küldött e-mailek a nevedet és az adott címhez mentett aláírást mutatják, a válaszvázlatok pedig a szálukban maradnak.", en: "Emails a Bot sends through Gmail show your name and the signature saved for that address, and reply drafts stay in their thread." },
          { hu: "A nagyjából 3 MB-nál nagyobb Botképek már mentődnek.", en: "Bot pictures larger than about 3 MB now save." },
          { hu: "Egy routine eredménye akkor is eljut hozzád, ha üzenetet küldesz, mielőtt a Bot befejezné az átadását.", en: "A routine's result still reaches you if you send a message before the Bot finishes handing it off." },
          { hu: "Egy routine szüneteltetése és folytatása megtartja az utolsó választásodat, akkor is, ha két eszközről koppintasz.", en: "Pausing and resuming a routine keeps your last choice, even when you tap from two devices." },
          { hu: "Egy fiókegyesítés után a megmaradó fiók megtartja a Grok Bot e-mail-postafiókját és a connector-beállításait.", en: "After an account merge, the remaining account keeps its Grok Bot email inbox and connector settings." },
        ],
      },
    ],
  },
  {
    version: "0.71.2",
    date: "2026-10-14",
    title: { hu: "Okosabb értesítések és nagyobb fájlmellékletek", en: "Smarter notifications and larger file attachments" },
    alsoIncludes: ["0.71.0", "0.71.1"],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "A Botok az e-mail-címük címkézett változatáról is küldhetnek, például name+shop@, és egy erre a címkére beállított routine csak az ahhoz érkező levelekre fut.", en: "Bots can send from a tagged form of their email address, like name+shop@, and a routine on that tag runs only for its mail." },
          { hu: "Azok az űrlapok, amelyeket egy Bot kitöltésre kér tőled, megérkezhetnek az ismert mezők kitöltésével, és beküldés előtt szerkesztheted őket.", en: "Forms a Bot asks you to fill in can arrive with known fields filled in, and you can edit them before you submit." },
          { hu: "Amíg egy fizetős fiókegyesítés még mozgatja ennek a fióknak az adatait, a Settings a Your accounts are being merged feliratot mutatja, és ha sokáig tart, a Contact Support lehetőséget.", en: "While a paid account merge is still moving this account's data, Settings shows Your accounts are being merged, with Contact Support if it runs long." },
          { label: "Teams", hu: "A csapatadminok a dashboardon a Bot capabilities alatt kikapcsolhatják a Messaging between Bots funkciót, így a tagok Botjai nem üzenhetnek más Botoknak, és nem adhatnak át nekik munkát.", en: "Team admins can turn off Messaging between Bots under Bot capabilities on the dashboard, so members' Bots can't message or hand work to other Bots." },
          { label: "Enterprise", hu: "Az Enterprise-csapatadminok újra létrehozhatják, leállíthatják vagy törölhetik a tagok Grok Bot-gépeit a dashboard Manage Bot Computers részéből vagy az Admin API-n keresztül.", en: "Enterprise team admins can recreate, terminate, or delete members' Grok Bot computers from Manage Bot Computers on the dashboard or through the Admin API." },
          { hu: "Ha egy Bot gépén kevés a szabad lemezterület, a Bot egyszer szól, megnevezi a legnagyobb fájlokat, és csak akkor törli őket, ha beleegyezel.", en: "When a Bot's computer runs low on disk, the Bot tells you once, names the biggest files, and deletes them only if you agree." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "Amíg Macen vagy Windowsos PC-n használod a Grok Botot, a Bot válaszairól és kérdéseiről ott kapsz értesítést, nem a telefonodon. Grok Bot 0.70.2 vagy újabb szükséges.", en: "While you use Grok Bot on a Mac or Windows PC, Bot replies and questions notify you there instead of your phone. Requires Grok Bot 0.70.2 or later." },
          { hu: "Legfeljebb 250 MB-os fájlokat és legfeljebb 1 GB-os videókat csatolhatsz, és a Bot szól, ha egy videó túl nagy ahhoz, hogy megnézze. Grok Bot 0.70.2 vagy újabb szükséges.", en: "You can attach files up to 250 MB and videos up to 1 GB, and the Bot says when a video is too large to watch. Requires Grok Bot 0.70.2 or later." },
          { hu: "Egy üzenet 6 helyett legfeljebb 20 mellékletet vihet, és egy értesítés jelzi, hány melléklet maradt ki a 200 MB-os összméreten felül.", en: "One message can carry up to 20 attachments instead of 6, and a notice says how many weren't added past the 200 MB total." },
          { hu: "A Bot által készített vagy rögzített képek, valamint az általa indított cloud agentek fájljai akkor is betöltődnek a chatben, amikor a gépe alszik.", en: "Images a Bot creates or captures, and files from cloud agents it started, load in the chat while its computer is asleep." },
          { hu: "Ha egy hangos chat kapcsolata megszakad, a hívás újracsatlakozik, és ugyanazt a beszélgetést folytatja, ahelyett hogy véget érne.", en: "If a voice chat's connection drops, the call reconnects and continues the same conversation instead of ending." },
          { hu: "A Botok 24 helyett legfeljebb 200 skillt használhatnak a telepített pluginjaidból, így az általad hozzáadott pluginok skilljei már nem maradnak ki.", en: "Bots can use up to 200 skills from your installed plugins instead of 24, so skills from plugins you add are no longer left out." },
          { hu: "Amikor egy Bot gépe alszik, a Computer is asleep előnézetre kattintva helyben felébreszted, ez váltja a külön Wake gombot.", en: "When a Bot's computer is asleep, clicking the Computer is asleep preview wakes it in place, replacing the separate Wake button." },
          { hu: "A Grok Bot már akkor megnyílik, amikor a Bot gépe még indul, ahelyett hogy egy teljes ablakos Setting up Grok Bot's computer képernyő mögött várna.", en: "Grok Bot opens while the Bot's computer is still starting, instead of waiting behind a full-window Setting up Grok Bot's computer screen." },
          { hu: "Ha a Bot gépének ébredése közben küldesz, már nem jelenik meg a Waiting to send… felirat az üzeneted alatt, sem a Waking your computer… az üzenetmezőben.", en: "Sending while the Bot's computer wakes no longer shows Waiting to send… under your message or Waking your computer… in the message box." },
          { hu: "A Botok egy lépésben archiválhatnak, áthelyezhetnek, törölhetnek, megjelölhetnek, vagy olvasottnak, illetve olvasatlannak jelölhetnek sok Outlook-üzenetet, nem egyenként.", en: "Bots can archive, move, delete, flag, or mark many Outlook messages as read or unread in one step instead of one at a time." },
          { hu: "A fizetésnél a Botok a chatben küldött kártyaadatokat vagy fotókat használják, és csak a hiányzó mezőket vagy egy ellenőrző kódot kérik egy Secure Formban.", en: "At checkout, Bots use card details or photos you send in chat, asking only for missing fields or a verification code in a Secure Form." },
          { hu: "Ha a GitHub nem lát egy repositoryt, a Bot abbahagyja az újrapróbálkozást, és linket ad arra a GitHub-oldalra, ahol hozzáférést adhatsz.", en: "When GitHub can't see a repository, the Bot stops retrying and gives you a link to the GitHub page where you grant access." },
          { hu: "A Botok olyan X-keresései, amelyek dátumkorlátot, minimális like- vagy repostszámot, vagy az X által nem támogatott szűrőt tartalmaznak, mostantól posztokat adnak vissza, ahelyett hogy elutasításra kerülnének.", en: "Bot searches on X with date limits, minimum likes or reposts, or filters X doesn't support now return posts instead of being rejected." },
          { hu: "Ha egy Bot kérdéskártyával kér választást, már nem ismétli meg a kérdést és a lehetőségeket egy mellette lévő üzenetben.", en: "When a Bot asks you to choose with a question card, it no longer repeats the question and options in a message beside it." },
          { hu: "Egy Bot saját címéről készült e-mail-vázlatok fájlkártyaként mutatják a mellékleteket, megjelölve, ha nem küldhetők el, csatolás óta módosultak, túl nagyok, vagy nem lettek átvizsgálva.", en: "Email drafts from a Bot's own address show attachments as file cards, marked when they can't be sent, changed since attached, are too large, or weren't scanned." },
          { hu: "A fiókok egyesítése akkor is befejeződik, ha mindkét fióknak vannak fájljai a Bot gépén: mindkét készlet megmarad, és az ütköző fájlnevek a (from transferred account) kiegészítést kapják.", en: "Merging accounts finishes when both accounts have files on the Bot's computer, keeping both sets and adding (from transferred account) to clashing file names." },
          { label: "Teams", hu: "A Team Bot Slack-beállításában a Connect egyenesen a Slackre visz, az Awaiting admin approval állapot felajánlja a Resubmit lehetőséget, egy elutasított kérésnél pedig látszik, mikor utasították el.", en: "In Team Bot Slack setup, Connect goes straight to Slack, Awaiting admin approval offers Resubmit, and a denied request shows when it was denied." },
          { label: "Teams", hu: "Ha egy Team Bot a csatlakoztatott fiókod használatát kéri, a kártya elmagyarázza, hogy a hozzáférés csak a saját üzeneteidre vonatkozik, és mások nem használhatják.", en: "When a Team Bot asks to use your connected account, the card explains the access covers only your own messages and others can't use it." },
          { hu: "A teljes képernyős képnézegetőben a feliratok formázással és kattintható linkekkel jelennek meg, a képek pedig megtartják a méretüket, ahogy lapozol köztük.", en: "Captions in the full-screen image viewer show formatting and clickable links, and images keep their size as you page between them." },
          { hu: "Egy Bot info paneljén a név egyszerű szövegként jelenik meg, amíg rá nem viszed az egeret, vagy rá nem kattintasz az átnevezéshez, és a képernyőolvasók szerkeszthetőként jelentik be.", en: "In a Bot's info pane, the name reads as plain text until you hover or click to rename it, and screen readers announce it as editable." },
          { hu: "A jóváhagyási kártyákon a címkék, például a Paused by your Ask first rule alatti szabály egyszerű szövegként jelenik meg, keret és idézőjelek nélkül.", en: "On approval cards, the rule under labels such as Paused by your Ask first rule shows as plain text, without a box or quotation marks." },
          { hu: "Az animált Bot-avatarok az oldalsávban és egy chat tevékenységsorában simábban mozognak.", en: "Animated Bot avatars in the sidebar and a chat's activity line move more smoothly." },
          { hu: "Ha a GitHub nincs bekötve, a Bot egyetlen Connect GitHub műveletet kínál fel, ahelyett hogy az összes GitHub-eszközt felsorolná.", en: "When GitHub isn't connected, the Bot offers a single Connect GitHub action instead of listing every GitHub tool." },
          { hu: "A telefonodról indított hanghívás felébreszti a Bot alvó gépét, így a Bot a hívás után dolgozhat azzal, amit mondtál.", en: "A voice call from your phone wakes the Bot's sleeping computer, so the Bot can work with what you said after the call." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "Amíg a Bot gépe alszik, a Grok Bot megtartja, amit betöltött, és a Your computer is asleep feliratot mutatja a Couldn't refresh vagy kapcsolódási hibák helyett.", en: "While the Bot's computer is asleep, Grok Bot keeps what it loaded and says Your computer is asleep instead of showing Couldn't refresh or connection errors." },
          { hu: "Amikor a Bot gépe frissül, egy éppen dolgozó Bot újracsatlakozik az új géphez, és folytatja a munkát.", en: "When the Bot's computer updates, a working Bot reconnects to the new computer and keeps going." },
          { hu: "Ha a Bot gépe nem ébred fel, a Bot közli, hogy nem tudott elindulni, ahelyett hogy újrapróbálkozna, mintha még indulna.", en: "When the Bot's computer fails to wake, the Bot says it couldn't start instead of retrying as if it were still starting up." },
          { hu: "A Bot által a gépéről megosztott képek és fájlok akkor is betöltődnek a chatben, ha az app nem tudja őket közvetlenül arról a gépről lekérni.", en: "Images and files a Bot shares from its computer still load in the chat when the app can't fetch them from that computer directly." },
          { hu: "Ha közvetlenül a küldés után megnyitsz egy fájlt, a tartalma jelenik meg a File unavailable helyett.", en: "Opening a file right after you send it shows its contents instead of File unavailable." },
          { hu: "Ha a szerver hibával utasítja el egy melléklet feltöltését, a Grok Bot a Couldn't upload an attachment üzenetet mutatja, és megtartja a piszkozatodat, ahelyett hogy a kapcsolatod ellenőrzésére kérne.", en: "When the server fails an attachment upload, Grok Bot says Couldn't upload an attachment and keeps your draft, instead of asking you to check your connection." },
          { hu: "Amikor a géped alvó állapotba kerül, a Botok két percen belül lecsatlakozottnak tekintik, és ezt azonnal közlik, ahelyett hogy megvárnák, amíg a parancsok túllépik az időkorlátot.", en: "When your computer sleeps, Bots treat it as disconnected within two minutes and say so right away, instead of waiting for commands to time out." },
          { hu: "Wi-Fi-, VPN- vagy más hálózatváltás után a Botok azonnal futtathatnak feladatokat a gépeden, ahelyett hogy elérhetetlennek találnák.", en: "After a Wi-Fi, VPN, or other network change, Bots can run tasks on your computer right away instead of finding it unreachable." },
          { hu: "A Bot által a gépeden futtatott parancsok rövid kapcsolati akadásokon és hosszú várakozásokon át is folytatódnak, ahelyett hogy átmenetileg elérhetetlenként meghiúsulnának.", en: "Commands a Bot runs on your computer keep going through brief connection stalls and long waits instead of failing as temporarily unreachable." },
          { hu: "Ha egy munkát az egyik offline gépedre szántak, a Bot szól neked, ahelyett hogy kérdezés nélkül egy másik gépen futtatná.", en: "If work is meant for one of your computers that's offline, the Bot tells you instead of running it on another computer without asking." },
          { hu: "A Bot által a Maceden indított háttérfolyamatok, például egy helyi szerver, a parancs visszatérése után is tovább futnak.", en: "Background jobs a Bot starts on your Mac, such as a local server, keep running after the command returns." },
          { hu: "A plugin- és Auto-review-beállítások módosításai a Grok Bot újracsatlakozása után is eljutnak a Bot gépére, ahelyett hogy egy újraindításig elakadnának.", en: "Plugin and Auto-review settings changes keep reaching the Bot's computer after Grok Bot reconnects, instead of stalling until a restart." },
          { hu: "Ha egy Bot az időkorlátnál tovább várna egy parancsra, azonnal közlik vele a korlátot, ahelyett hogy túllépné az időkorlátot.", en: "When a Bot asks to wait on a command longer than the time limit, it's told the limit right away instead of timing out." },
          { hu: "Ha egy biztonsági ellenőrzés blokkolja egy Bot válaszát, a chat a Blocked by a safety check és a Try a different message feliratot mutatja egy általános hiba helyett.", en: "When a safety check blocks a Bot's reply, the chat shows Blocked by a safety check and Try a different message instead of a generic error." },
          { hu: "A Bot válaszaiban a táblázatok a válasz szélességén belül maradnak, és oldalra görgethetők, ha több helyre van szükségük.", en: "Tables in Bot replies stay within the reply's width and scroll sideways when they need more room." },
          { hu: "Egy üzenetben az azonos nevű mellékletek sorszámot kapnak, például report.pdf (2), így a megfelelőt nyithatod meg vagy távolíthatod el.", en: "Attachments in one message that share a file name are numbered, such as report.pdf (2), so you can open or remove the right one." },
          { hu: "Windowson egy listából másolt szöveg beillesztése az üzenetmezőbe a sorban tartja a szöveget, ahelyett hogy további bekezdésekre bontaná.", en: "On Windows, pasting text copied from a list into the message box keeps it inline instead of splitting it into extra paragraphs." },
          { hu: "Windowson és Linuxon a chatből másolt szöveg más appokba illesztve megtartja a nem angol karaktereket és a görbe idézőjeleket.", en: "On Windows and Linux, text copied from a chat pastes into other apps with non-English characters and curly quotes intact." },
          { hu: "Ha a Grok Botot egy visszaállított chatre nyitod meg, már nem villan fel egy Couldn't refresh sáv az üzenetmező fölött.", en: "Opening Grok Bot to a restored chat no longer flashes a Couldn't refresh bar above the message box." },
          { hu: "Fiókváltáskor vagy újbóli bejelentkezéskor az app betöltőkerete jelenik meg egy üres fehér ablak helyett.", en: "Switching accounts or signing back in shows the app's loading frame instead of a blank white window." },
          { hu: "Ha fiókot váltasz, miközben egy sorban álló üzenetet visszavonnak vagy elutasítanak, annak szövege és mellékletei már nem kerülnek a másik fiók üzenetmezőjébe.", en: "Switching accounts while a queued message is canceled or refused no longer puts its text and attachments in the other account's message box." },
          { hu: "A Grok Bot-hozzáférés nélküli fiókok befejezik a beállítást, és csak a hozzáférési értesítést látják, beállítási vagy betöltési hibák nélkül.", en: "Accounts without Grok Bot access finish setup and see just the access notice, without setup or load errors." },
          { hu: "Ha a megnyitott Botodat egy másik eszközön törlik, a Grok Bot egy másik Botodat nyitja meg egy üres panel helyett.", en: "When the Bot you had open is deleted on another device, Grok Bot opens another of your Bots instead of an empty pane." },
          { hu: "Ha egyszerre több Botot törölsz, és egy törlése sikertelen, a többi akkor is törlődik, a figyelmeztetés pedig csak a sikertelen Botot nevezi meg.", en: "Deleting several Bots at once still deletes the rest when one fails, and the alert names only the Bot that failed." },
          { hu: "Az oldalsáv szakaszainak módosításai, amelyeket nem lehet menteni, a helyükön maradnak a Can't reach your computer és a Retry felirattal, majd mentődnek, amint a géped elérhető.", en: "Sidebar section changes that can't be saved stay put with Can't reach your computer and Retry, then save once your computer is reachable." },
          { hu: "Az összecsukott oldalsávban egy be nem tölthető Botlista figyelmeztető ikont mutat újrapróbálással, betűnként összenyomott szöveg helyett.", en: "In the collapsed sidebar, a Bot list that can't load shows a warning icon with retry instead of text squeezed letter by letter." },
          { hu: "A teljes képernyős gépnézet már nem mutat egy subagent utasításaiból levágott részletet, sem Couldn't load subagents sort.", en: "The full-screen computer view no longer shows a cut-off snippet of a subagent's instructions or a Couldn't load subagents line." },
          { hu: "Ha egy Bot routine-jai nem töltődnek be, a Couldn't load routines a részletek paneljének Routines szakaszában jelenik meg.", en: "When a Bot's routines fail to load, Couldn't load routines appears inside the Routines section of its details pane." },
          { hu: "Nyitott részletek panelnél, kiválasztott Bot nélkül, egy sikertelen elsődleges Bot-betöltés a Couldn't load és a Try again feliratot mutatja.", en: "With the details pane open and no Bot selected, a failed primary Bot load shows Couldn't load and Try again." },
          { hu: "Ha egy Bot skilljei nem tölthetők be, az @ menü már nem mutat Couldn't load skills sort.", en: "When a Bot's skills can't be loaded, the @ menu no longer shows a Couldn't load skills row." },
          { hu: "Az oldalsáv számozott gyorsbillentyű-jelvényei már nem maradnak a képernyőn, miután Cmd vagy Ctrl segítségével módosítod a nagyítást.", en: "The sidebar's number shortcut badges no longer stay on screen after you change zoom with Cmd or Ctrl." },
          { hu: "Az összecsukott oldalsávban a More unreads gomb kör alakú, a nyila középen van.", en: "In the collapsed sidebar, the More unreads button is a circle with its arrow centered." },
          { hu: "Ha az oldalsávban Botokat vagy szakaszokat húzol, a képernyőolvasók bejelentik a nevüket és azt, hová kerülnek.", en: "When you drag Bots or sections in the sidebar, screen readers announce their names and where they land." },
          { hu: "A képernyőolvasók egy Bot válaszát akkor is bejelentik, ha az azután érkezik, hogy bejelentették, hogy a Bot leállt.", en: "Screen readers announce a Bot's reply even when it arrives after the announcement that the Bot stopped." },
          { hu: "Ha Tabbal egy linkre lépsz, és megnyílik az előnézeti kártyája, a billentyűzetfókusz a kártyába kerül.", en: "When you Tab to a link and its preview card opens, keyboard focus moves into the card." },
          { hu: "Ha egy Bot módosít egy routine-t, miközben az app rövid ideig nincs kapcsolatban, a Routines lista újracsatlakozáskor frissül, újratöltés nélkül.", en: "When a Bot changes a routine while the app is briefly disconnected, the Routines list updates once it reconnects, without a reload." },
          { hu: "Miután az onboarding létrehozta az elsődleges Botodat, az Introducing your primary Bot választó már nem kér újra választást.", en: "After onboarding creates your primary Bot, the Introducing your primary Bot chooser no longer asks you to pick one again." },
          { hu: "Miután válaszoltál egy kérésre a géped használatáról, a Bot oldalsávsora az Allowed, a Denied vagy az Expired állapotot mutatja a Permission required helyett.", en: "After you answer a request to use your computer, the Bot's sidebar row shows Allowed, Denied, or Expired instead of Permission required." },
          { hu: "Ha egy hangos chatben szünetet tartasz, majd folytatod a beszédet, az átirat a sorodat bővíti, ahelyett hogy megismételné, és kihagyja a zajcímkéket.", en: "When you pause and keep talking in a voice chat, the transcript extends your line instead of repeating it, and leaves out noise tags." },
          { hu: "A connector-hívások már nem lépik túl az időkorlátot egy perc után: legfeljebb két percig várnak a válaszra, és tovább, amíg a connector előrehaladást jelez.", en: "Connector calls no longer time out after one minute: they wait up to two minutes for a reply, and longer while the connector reports progress." },
          { hu: "A Botok látják a Groktól származó connectorok eszközeinek teljes paramétereit, így helyesen hívják ezeket az eszközöket, találgatás helyett.", en: "Bots see the full parameters of tools on connectors from Grok, so they call those tools correctly instead of guessing." },
          { hu: "A Botok ritkábban ütköznek az X sebességkorlátjába, amikor az X-en keresnek vagy posztokat olvasnak, és egy sebességkorlátozott hívás már nem számít bele az X olvasási korlátodba.", en: "Bots hit X's rate limit less often when searching X or reading posts, and a rate-limited call no longer counts toward your X read limit." },
          { hu: "A Botok egy adott Stripe-ügyféllel, -számlával, -előfizetéssel vagy -fizetéssel elsőre dolgoznak, ahelyett hogy hiányzó paraméter hibába ütköznének.", en: "Bots work with a specific Stripe customer, invoice, subscription, or payment on the first try instead of hitting a missing parameter error." },
          { hu: "A Stop a Bot háttérben futó subagentjeit is leállítja, így azok eredményei utána már nem ébresztik fel a Botot, a függőben lévő jóváhagyási kártyáik pedig lejárnak.", en: "Stop also ends a Bot's background subagents, so their results no longer wake the Bot afterward, and their pending approval cards expire." },
          { hu: "Ha az I'm done vagy a Skip választásával visszaadod a Bot gépét, a Bot a chatben közzéteszi a válaszát, ahelyett hogy néha hallgatna.", en: "When you hand the Bot's computer back with I'm done or Skip, the Bot posts its answer in the chat instead of sometimes staying silent." },
          { hu: "A Bot által a böngészőjében futtatott szkriptek már nem hiúsulnak meg felesleges vagy tartományon kívüli beállítások miatt, így a böngészős feladatok gyakrabban fejeződnek be.", en: "Scripts a Bot runs in its browser no longer fail over extra or out-of-range settings, so browser tasks finish more often." },
          { hu: "A Secure Form több weboldalon tölti ki a mezőket, a más oldalakról beágyazott keretekben is, ahelyett hogy üresen hagyná őket.", en: "Secure Form fills fields on more websites, including inside embedded frames from other sites, instead of leaving them empty." },
          { hu: "Ha egy routine-nak be kell jelentkeznie egy oldalra, az adott lépésnél a chatben megkérdez téged, ahelyett hogy csendben leállna.", en: "When a routine needs to sign in to a site, it asks you in chat at that step instead of quietly stopping." },
          { hu: "A Botok a bejelentkezési adatokat és más több mezőből álló adatokat egyetlen Secure Formon kérik, egy egyetlen értéket tartalmazó titokkérő kártya helyett.", en: "Bots ask for logins and other multi-field details on one Secure Form instead of a secret request card that holds a single value." },
          { hu: "A képernyőkép-, gép- és böngészőműveletek akkor is működnek, ha nem kötötted be az 1Passwordöt, ahelyett hogy egy mentett belépési adatokra vonatkozó ellenőrzésen meghiúsulnának.", en: "Screenshot, computer, and browser actions keep working when you haven't connected 1Password, instead of failing on a saved-login check." },
          { hu: "Ha egy másik időzónából üzensz, az azonnal frissíti azt a zónát, amelyet a Bot az ütemezésekhez és az emlékeztetőkhöz használ, hacsak nem választottál egyet a Settings Timezone részében.", en: "Messaging from another time zone updates the zone the Bot uses for schedules and reminders right away, unless you chose one under Timezone in Settings." },
          { hu: "Az avatarszerkesztő által kínált bármely alakú Botok, például a szikra vagy a csillag, sablonként megoszthatók anélkül, hogy a Bot kinézete megváltozna.", en: "Bots with any shape the avatar editor offers, such as sparkle or star, can be shared as templates without the Bot changing its look." },
          { hu: "Egy Bot saját postafiókjába érkező e-mailek megtartják minden link webcímét, így a Bot megnyithatja az ellenőrző és bejelentkezési linkeket.", en: "Emails that arrive in a Bot's own inbox keep each link's web address, so the Bot can open verification and sign-in links." },
          { hu: "A Bot saját címére küldött e-mail akkor is megérkezik, ha a tárgya, a feladó címe vagy a szálhivatkozásai nagyon hosszúak.", en: "Email sent to a Bot's own address arrives even when its subject, sender address, or thread references are very long." },
          { hu: "Miután egy Botnál a Disable drafts lehetőséget választod, azonnal a saját címéről küld e-mailt, vázlatkártya nélkül.", en: "After you choose Disable drafts for a Bot, it sends email from its own address right away, without a draft card." },
          { hu: "Miután egy Bot igényelt egy e-mail-címet, az Email vagy a Plugins megnyitásakor Connected állapotot mutat, ahelyett hogy továbbra is a Connectet kínálná.", en: "After a Bot claims an email address, opening Email or Plugins shows it as Connected instead of still offering Connect." },
          { label: "Teams", hu: "Ha engedélyezed, hogy egy Team Bot az egyik pluginodat használja, az eszközei azonnal működnek, ahelyett hogy a Bot nem találná őket.", en: "When you allow a Team Bot to use one of your plugins, its tools work right away instead of the Bot failing to find them." },
          { label: "Teams", hu: "Egy Team Bot pluginjai a csapatadminod által megadott beállításokat használják, például egy Datadog-site-ot, ha a Botnak nincs sajátja.", en: "Plugins on a Team Bot use the settings your team admin entered, such as a Datadog site, when the Bot has none of its own." },
          { label: "Teams", hu: "Az a Team Bot, amely még mindig a New team bot nevet viseli leírás nélkül, Draft állapotot mutat, nem a Published to your team állapotot, amíg át nem nevezed, vagy nem adsz hozzá leírást.", en: "A Team Bot still named New team bot with no description shows Draft, not Published to your team, until you rename it or add a description." },
          { hu: "A Grok Bot a kiválasztott csapatod alatt akkor is működik, ha egy másik csapatod Privacy Mode (Legacy) beállítást használ, feltéve, hogy a kiválasztott csapat nem.", en: "Grok Bot works under your selected team even when another team you're on uses Privacy Mode (Legacy), as long as the selected team doesn't." },
          { hu: "A sok Botot áthelyező fiókegyesítések egy menetben befejeződnek, ahelyett hogy meghiúsulnának, és a Your account merge is taking longer than usual üzenetet mutatnák.", en: "Account merges that move many Bots finish in one go instead of failing and showing Your account merge is taking longer than usual." },
          { hu: "Ha egy letöltött frissítést visszavonnak, a Restart to Update eltűnik, és a Grok Bot megtartja a jelenlegi verziódat, akkor is, ha Macen kilépsz.", en: "When a downloaded update is withdrawn, Restart to Update goes away and Grok Bot keeps your current version, even when you quit on a Mac." },
          { hu: "Az a frissítésletöltés, amely folyton elölről indul, a próbálkozások között vár, majd hibával leáll, ahelyett hogy megállás nélkül újrapróbálkozna.", en: "An update download that keeps restarting from the beginning waits between tries and then stops with an error instead of retrying nonstop." },
          { hu: "Ha a frissítési szerver hibás választ küld, a Settings a The update server returned an invalid response üzenetet mutatja, ahelyett hogy a kapcsolatodat okolná.", en: "When the update server sends a broken response, Settings says The update server returned an invalid response instead of blaming your connection." },
          { hu: "A Restart to Update a Restarting… feliratot mutatja, és legfeljebb két percig vár, hogy befejeződjenek a Bot által a gépeden futtatott parancsok.", en: "Restart to Update shows Restarting… and waits up to two minutes for commands a Bot is running on your computer to finish." },
          { hu: "Ha egy frissítés futás közben lecseréli a Grok Bot fájljait, az újratöltés vagy az összeomlás utáni helyreállítás újraindítja az appot egy üres ablak helyett.", en: "When an update replaces Grok Bot's files while it runs, reloading or crash recovery relaunches the app instead of showing a blank window." },
          { hu: "Linuxos deb- és rpm-telepítéseknél az Update required a legújabb csomagra linkel, és azzal kezd, ha a csomagtárolóban még nincs meg a frissítés.", en: "On Linux deb and rpm installs, Update required links the latest package, leading with it when the package repository doesn't have the update yet." },
          { hu: "Windowson és Linuxon, ha a Grok Botot még a kilépés közben nyitod meg, a kilépés után újra megnyílik, ahelyett hogy semmi sem maradna nyitva.", en: "On Windows and Linux, opening Grok Bot while it's still quitting reopens it after the quit instead of leaving nothing open." },
          { hu: "A GitHub-eszközök egy kapcsolati blokkolás után is elérhetők maradnak, és az újracsatlakozás után működnek, új chat indítása nélkül.", en: "GitHub tools stay available after a connection block and work once you reconnect, without starting a new chat." },
          { hu: "Ha a Gmail megtagadja egy teljes szál megnyitását, a Bot a szál első üzenete alapján akkor is válaszol.", en: "When Gmail refuses to open a full thread, the Bot still answers from the thread's first message." },
          { hu: "Egy connector, amelynél még szükség van az Allow-ra, megtartja a nevét, így a Bot az engedélyezésére kér, ahelyett hogy azt mondaná, nem találja.", en: "A connector that still needs Allow keeps its name, so the Bot asks you to allow it instead of saying it can't find it." },
          { hu: "Egy Bot megtartja a connector-eszközeit, amíg a gépe alszik, indul vagy még nincs létrehozva, ahelyett hogy arra a körre elveszítené őket.", en: "A Bot keeps its connector tools while its computer is asleep, starting up, or not created yet, instead of losing them for that turn." },
        ],
      },
    ],
  },
  {
    version: "0.70.2",
    date: "2026-10-11",
    title: { hu: "Bot e-mail-címek, X-keresés és appok a chatben", en: "Bot email addresses, X search, and in-chat apps" },
    alsoIncludes: ["0.69.0", "0.69.1", "0.70.0", "0.70.1"],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "A Botok saját e-mail-címet igényelhetnek, és ott leveleket fogadhatnak, az onnan küldött e-mailjeik pedig egy vázlatkártyán várják a jóváhagyásodat.", en: "Bots can claim their own email address and receive mail there, and email they send from it waits for your approval on a draft card." },
          { hu: "A Botok kereshetnek az X-en, és olvashatnak posztokat és profilokat anélkül, hogy X-fiókot kötnél be.", en: "Bots can search X and read posts and profiles without you connecting an X account." },
          { hu: "Az apppal együtt érkező connectorok, például a Figma, a Notion és a Canva, interaktív kártyaként jeleníthetik meg az appot a chatben.", en: "Connectors that come with an app, such as Figma, Notion, and Canva, can show it as an interactive card in the chat." },
          { hu: "A Botok fizethetnek X Moneyval vagy Stripe Linkkel.", en: "Bots can pay with X Money or Stripe Link." },
          { hu: "A Botok találhatnak egy, a leírásodhoz illő Botsablont, és belinkelhetik a chatben.", en: "Bots can find a Bot template that fits what you describe and link it in the chat." },
          { hu: "Macen a View menü View Unread pontja csak az olvasatlan üzenetekkel rendelkező Botokat mutatja az oldalsávban.", en: "On Mac, View Unread in the View menu shows only Bots with unread messages in the sidebar." },
          { hu: "Egy nyitott oldalon a Cmd+F vagy a Ctrl+F lenyomásával egy Find in page sávban kereshetsz rajta.", en: "Press Cmd+F or Ctrl+F on an open page to search it in a Find in page bar." },
          { hu: "Egy oldalt átnevezhetsz a címéből, és az új név mindenhol megjelenik.", en: "You can rename a page from its title, and the new name shows everywhere." },
          { hu: "A megosztott oldalaknak címsoruk van a Download gombbal, amely PDF-et ment, valamint a látogatóknak a Try Grok Bot, a tulajdonosnak a Share lehetőséggel.", en: "Shared pages have a title bar with Download, which saves a PDF, plus Try Grok Bot for visitors and Share for the owner." },
          { hu: "A Glean hozzáadása elkéri a Glean MCP URL-edet, és beköti, miután a böngésződben bejelentkeztél a Gleanbe.", en: "Adding Glean asks for your Glean MCP URL and connects it after you sign in to Glean in your browser." },
          { hu: "A QuickBooks Online beköthető.", en: "QuickBooks Online is available to connect." },
          { hu: "A Botok a böngészőjükből PDF-ként menthetnek egy weboldalt, és hangfájlokat, például MP3-at, M4A-t és WAV-ot küldhetnek.", en: "Bots can save a web page as a PDF from their browser and send audio files such as MP3, M4A, and WAV." },
          { hu: "A teljes képernyős videólejátszóban sebességmenü van, a hanghívások pedig 0,5x sebességet kínálnak.", en: "The full-screen video player has a speed menu, and voice calls offer 0.5x speed." },
          { label: "Teams", hu: "A csapattagok a Team Bottal folytatott saját közvetlen üzenetükből jóváhagyhatják az Auto-review kéréseket, az Always allow lehetőséget is beleértve.", en: "Teammates can approve Auto-review requests, including Always allow, from their own direct message with a Team Bot." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "Egy visszavonhatatlan művelet, például küldés, közzététel, vásárlás vagy törlés előtt a Bot a saját üzeneteidben ellenőrzi a jóváhagyást.", en: "Before an action it can't undo, such as sending, posting, buying, or deleting, a Bot checks your own messages for approval." },
          { hu: "A böngészős jóváhagyási kártyák egyszerű szavakkal írják le a műveleteket, például Open a new tab in Grok Bot's browser, és egy mentett Allow szabály minden eszközön ugyanúgy érvényes.", en: "Browser approval cards describe actions in plain words, such as Open a new tab in Grok Bot's browser, and a saved Allow rule applies the same way on every tool." },
          { hu: "Ha több fiók is küldhetne egy e-mailt, a Bot megkérdezi, melyik címet használja, majd közli, melyik címről küldte.", en: "When more than one account could send an email, the Bot asks which address to use, then tells you the address it sent from." },
          { hu: "Ha egy bejelentkezés kódot vagy linket küld e-mailben, a Bot kiolvassa a bekötött Gmailből vagy Outlookból, vagy a saját postafiókjából, ahelyett hogy tőled kérné.", en: "When a sign-in emails a code or link, the Bot reads it from your connected Gmail or Outlook, or its own inbox, instead of asking you." },
          { hu: "Miután egy bank- vagy brókerconnector adatot ad vissza, a Bot megkérdez, mielőtt bárhol máshol megosztaná.", en: "After a bank or brokerage connector returns data, the Bot asks before sharing it anywhere else." },
          { hu: "A Botok visszajeleznek az üzenetedre, mielőtt hosszabb munkába kezdenének.", en: "Bots acknowledge your message before they start longer work." },
          { hu: "A reakciók az üzenetbuborékon ülnek, a gyorssor tartalmazza a legutóbbi emojijaidat, és mindenkinél csak a legutóbbi reakciója látszik.", en: "Reactions sit on the message bubble, the quick row includes your recent emoji, and each person shows only their latest reaction." },
          { hu: "A válaszidézetek mutatják az idézett szöveget, és kattintásra a megválaszolt üzenetre ugranak, szöveg kijelölésekor pedig megjelenik egy Add to chat címke.", en: "Reply quotes show the quoted text and jump to the replied message when clicked, and selecting text shows an Add to chat pill." },
          { hu: "Amíg egy Bot dolgozik, és nincs mit jelentenie, egy 1:1 chat csak az animált avatarját mutatja.", en: "While a Bot works with nothing to report, a 1:1 chat shows just its animated avatar." },
          { hu: "Amíg a mellékletek feltöltődnek, az üzenetednél egy Sending… sáv jelenik meg, amely a fájlok feltöltésével telik.", en: "While attachments upload, your message shows a Sending… bar that fills as the files upload." },
          { hu: "A teljes képernyős gépnézet Watching módban nyílik meg, amíg meg nem nyomod a Take controlt.", en: "The full-screen computer view opens in Watching until you press Take control." },
          { hu: "Amikor egy Bot gépe alszik, a Computer fülön egy Wake gomb jelenik meg, amely helyben felébreszti.", en: "When a Bot's computer is asleep, the Computer tab shows a Wake button that wakes it in place." },
          { hu: "A gépbeállítások elkülönítik a Your computert a Bot gépétől, az Updates pedig csak az appfrissítéseket mutatja.", en: "Computer settings separate Your computer from the Bot's computer, and Updates shows only app updates." },
          { hu: "A Grok Bot gépének frissítései állapotjelvények nélkül futnak az oldalsávban; csak akkor látsz értesítést, ha egy frissítés elérhetetlenné teszi a gépet.", en: "Updates to Grok Bot's computer run without status pills in the sidebar; you see a notice only if one leaves the computer unreachable." },
          { hu: "Egy routine mentése után a Bot összefoglalja, mit csinál, és ki kapja meg az eredményt, és minden futás oda kézbesít.", en: "After saving a routine, the Bot sums up what it does and who receives the result, and each run delivers there." },
          { hu: "Ha connectorlinket adsz egy Botnak, az telepíti a katalógusból a megfelelő plugint, ha van ilyen.", en: "When you give a Bot a connector link, it installs the matching plugin from the catalog when there is one." },
          { hu: "A Connect Apps a legtöbbször telepített pluginokat listázza elsőként, a keresés azokat a pluginokat is megtalálja, amelyek leírása egyezik, és a találat nélküli keresés ezt jelzi is.", en: "Connect Apps lists the most-installed plugins first, search also finds plugins whose description matches, and a search with no results says so." },
          { hu: "A Botok megvárhatják, amíg egy háttérparancs befejeződik a gépükön; ez Waiting on results feliratként látszik.", en: "Bots can wait for a background command on their computer to finish, shown as Waiting on results." },
          { hu: "Ha a GitHub elutasít egy repositoryt, vagy a Vercel egy csapatot, a Bot olyanokat javasol, amelyeket elér, vagy újracsatlakozásra kér.", en: "When GitHub refuses a repository or Vercel a team, the Bot suggests ones it can reach or asks you to reconnect." },
          { hu: "Egy privát Tailscale-hálózaton lévő MCP-szerver hozzáadása mostantól elmagyarázza, hogy a Grok Bot még nem éri el, és javasolja, hogy tedd elérhetővé a Tailscale Funnellel.", en: "Adding an MCP server on a private Tailscale network now explains that Grok Bot can't reach it yet and suggests exposing it with Tailscale Funnel." },
          { hu: "A canvasok és a dokumentumok egyaránt Page címkét kapnak.", en: "Canvases and documents are both labeled Page." },
          { hu: "Ha # jelet írsz az üzenetszerkesztőbe, már nem nyílik meg a pull request-választó.", en: "Typing # in the composer no longer opens the pull request picker." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A connector-hívások ritkábban hiúsulnak meg: a Botok küldés előtt kijavítják a rossz formájú argumentumokat, és elfogadják a Notion-linkeket és a Slack-csatornaneveket.", en: "Connector calls fail less often: Bots fix wrongly shaped arguments and accept Notion links and Slack channel names before sending." },
          { hu: "Ha egy connector sebességkorlátot alkalmaz a fiókodra, a Botok kivárják az újrapróbálási késleltetést, ahelyett hogy ciklusban hívnák.", en: "When a connector rate-limits your account, Bots wait for the retry delay instead of calling it in a loop." },
          { hu: "Bekötött 1Password mellett a böngésző- és gépműveletek a rövid kapcsolati hibák után újrapróbálkoznak, ahelyett hogy leállnának.", en: "With 1Password connected, browser and computer actions retry through brief connection errors instead of stopping." },
          { hu: "A Slack-, Gmail- és Outlook-vázlatok az átmeneti sebességkorlátok után újrapróbálkoznak, és jelzik, ha így sem sikerült elküldeni őket.", en: "Slack, Gmail, and Outlook drafts retry through temporary rate limits and say if they still couldn't send." },
          { hu: "A Bot által megírt Slack-üzenetek küldéskor már nem alakulnak egyetlen nyers kódblokká.", en: "Slack messages a Bot drafts no longer turn into one raw code block when sent." },
          { hu: "A Gmail-vázlatok az alapértelmezett send-as címedet használják, és a saját aláírásodat adják hozzá, nem egy valaki mástól idézettet.", en: "Gmail drafts use your default send-as address and add your own signature, not one quoted from someone else." },
          { hu: "A nem angol nevű vagy tárgyú Bot-e-mailek már nem pattannak vissza, a rájuk adott válaszok ugyanabban a szálban maradnak, és a beérkező levelekben lévő kis képek megmaradnak.", en: "Bot emails with non-English names or subjects no longer bounce, replies to them stay in the same thread, and small images in incoming mail are kept." },
          { hu: "Ha az Agent email ki van kapcsolva a csapatodnál vagy a fiókodnál, a Bot ezt közli, ahelyett hogy átmeneti problémának nevezné.", en: "When Agent email is off for your team or account, the Bot says so instead of calling it a temporary problem." },
          { hu: "A Botok által a gépükről küldött fájlok és képek megérkeznek a chatbe, minden kérdéskártya előtt.", en: "Files and images Bots send from their computer arrive in the chat, ahead of any question card." },
          { hu: "Ha egy fájlt akkor nyitsz meg, amikor a Bot gépe alszik, a gép felébred, és a fájl megnyílik.", en: "Opening a file while the Bot's computer is asleep wakes it and opens the file." },
          { hu: "Ha a chatek, oldalak, skillek, routine-ok vagy pluginok nem töltődnek be, az app a Try again lehetőséggel mutatja a hibát, és megtartja, amit utoljára betöltött.", en: "When chats, pages, skills, routines, or plugins fail to load, the app shows the error with Try again and keeps what it last loaded." },
          { hu: "A keresés minden chatben megtalálja az üzenetszöveget és a mellékletneveket, a nyitott chatet is beleértve.", en: "Search finds message text and attachment names in all chats, including the open one." },
          { hu: "A nyitott chat olvasottnak jelölődik, amikor újraindítod az appot, visszatérsz a gépedhez, vagy újra rákattintasz a sorára.", en: "The open chat is marked read when you relaunch the app, come back to your computer, or click its row again." },
          { hu: "Amíg egy Bot a weben keres vagy oldalakat olvas, a chat és a Slack mutatja, mit csinál, például Digging around, a Working in Cursor helyett.", en: "While a Bot searches the web or reads pages, the chat and Slack show what it's doing, such as Digging around, instead of Working in Cursor." },
          { hu: "A Bot böngészője a letöltéseket a saját fájlnevükön tartja, és a profilmappája eltávolítása után újraindul.", en: "The Bot's browser keeps downloads under their own file names and starts again after its profile folder is removed." },
          { hu: "Az Outlook megmutatja az Authorize kártyáját, ha egy módosításhoz több jogosultság kell, a Botok pedig abbahagyják az újrapróbálkozást a törölt vagy védett elemeken.", en: "Outlook shows its Authorize card when a change needs more permission, and Bots stop retrying on deleted or protected items." },
          { hu: "Az egész napos naptáresemények a megfelelő dátumon maradnak, és a Botok megnézik a többi naptáradat is, mielőtt azt mondanák, hogy egy esemény hiányzik.", en: "All-day calendar events stay on the right date, and Bots check your other calendars before saying an event is missing." },
          { hu: "A chatből vagy a webről telepített pluginok készen állnak a Bot gépén, a helyi pluginok, például a Xero, pedig megkapják az általad megadott beállításokat.", en: "Plugins installed from chat or the web are ready on the Bot's computer, and local plugins such as Xero get the settings you entered." },
          { hu: "A hosszú üzeneteknél azonnal megjelenik a Show more, így egy chat megnyitásakor már nem ugrik a nézet.", en: "Long messages show Show more right away, so opening a chat no longer jumps." },
          { hu: "Egy Bot közzététele, megosztása vagy törlése, illetve sablonból való hozzáadása akkor is működik, ha a gépe alszik vagy elérhetetlen.", en: "Publishing, sharing, or deleting a Bot, and adding one from a template, work while its computer is asleep or unreachable." },
          { hu: "A chatek közötti váltás vagy az ablak fókuszba helyezése már nem ébreszt fel egy alvó gépet.", en: "Switching chats or focusing the window no longer wakes a sleeping computer." },
          { hu: "A fiókváltás másodperceken belül az új fiókra visz, akkor is, ha egy másik gép alszik.", en: "Switching accounts lands on the new account within seconds, even when another computer is asleep." },
          { hu: "A kitűzött Botok szinkronban maradnak az asztali gép és a telefon között.", en: "Pinned Bots stay in sync between the desktop and the phone." },
          { hu: "Ha az ablak folyton összeomlik, a Grok Bot felajánlja az újratöltést vagy a kilépést, a frissítés után üresen maradt ablak pedig újraindul.", en: "If the window keeps crashing, Grok Bot offers to reload it or quit, and a window left blank after an update relaunches." },
          { hu: "A Botok már nem jelentkeztetnek ki egy connectorból, miközben javítják, és egy connector-fiók, amelyből kijelentkezel, kijelentkezve marad.", en: "Bots no longer sign you out of a connector while repairing it, and a connector account you sign out of stays signed out." },
          { hu: "Ha egy modell nem érhető el a régiódban, a kör leáll, és elmagyarázza, miért, a Botok pedig visszaváltanak a Grokra.", en: "When a model isn't available in your region, the turn stops and explains why, and Bots fall back to Grok." },
          { hu: "A Slackben a Botok azokra az üzenetekre is válaszolnak, amelyeknek a szálát nem tudják olvasni, és ha egy csapattárs Botját kérdezed, az már nem kerül be az oldalsávodba.", en: "In Slack, Bots answer messages whose thread they can't read, and asking a teammate's Bot no longer adds it to your sidebar." },
          { hu: "Ha a grok.com dashboardjáról kötöd be a Slacket, mostantól visszakerülsz oda, hogy befejezd a Slack-fiókod összekapcsolását.", en: "Connecting Slack from the dashboard on grok.com now brings you back there to finish linking your Slack account." },
          { hu: "Hanghívásokban a Bot tudja a mai dátumot a te időzónádban, ahelyett hogy néha a holnapit használná.", en: "In voice calls, the Bot knows today's date in your time zone instead of sometimes using tomorrow's." },
          { hu: "Linuxon az app továbbra is reagál, és ki lehet lépni belőle, amíg egy értesítés látszik.", en: "On Linux, the app stays responsive and can quit while a notification is showing." },
          { hu: "A Usage & Billing a Current plan alatt mutatja a csomagod nevét, a használatmérő pedig felhasználtként jelöli a százalékát.", en: "Usage & Billing shows your plan name on Current plan, and the usage meter labels its percentage as used." },
        ],
      },
    ],
  },
  {
    version: "0.68.1",
    date: "2026-10-07",
    title: { hu: "Diasorok és Bot-színű chatek", en: "Slide decks and Bot-colored chats" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "Az 1:1 Bot-chatben az üzeneteid az adott Bot színét veszik fel; a kikapcsoláshoz a Settings → General alatt állítsd az Accentet Blackre. Grok Bot 0.64.0 vagy újabb szükséges.", en: "Your messages in a 1:1 Bot chat take that Bot's color; set Accent to Black in Settings → General to turn it off. Requires Grok Bot 0.64.0 or later." },
          { hu: "A Botok veled együtt készíthetnek diasorokat, mintadiákat mutatva, amelyek közül választhatsz, és PowerPoint-fájlként vagy Google Slidesként adják át őket.", en: "Bots can build slide decks with you, showing sample slides to choose from, and deliver them as PowerPoint files or Google Slides." },
          { hu: "A Botok formázott e-maileket küldhetnek egy vázlatkártyáról, így a címzettek látják a címsorokat, a félkövér szöveget és a listákat.", en: "Bots can send formatted emails from a draft card, so recipients see headings, bold text, and lists." },
          { hu: "A Botok kereshetnek a Gmail Spam mappádban, és visszahelyezhetnek egy üzenetet a beérkező leveleid közé.", en: "Bots can search your Gmail Spam folder and move a message back to your inbox." },
          { label: "Teams", hu: "A Team Botok megemlíthetnek egy Slack-felhasználócsoportot, hogy a tagjai értesítést kapjanak, a @here és a @channel pedig továbbra sem pingel senkit.", en: "Team Bots can mention a Slack user group so its members get notified, while @here and @channel still don't ping anyone." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "Ha / jelet írsz az üzenetszerkesztőbe, már nem nyílik meg a skillek és műveletek menüje.", en: "Typing / in the composer no longer opens a menu of skills and actions." },
          { hu: "A Botok gyorsabban dolgoznak a gépükön: a műveletek hamarabb lezárulnak, a képernyőképek gyorsabban visszaérkeznek, és az új ablakok kihagynak egy ötmásodperces várakozást.", en: "Bots work faster on their computer: actions settle sooner, screenshots come back quicker, and new windows skip a five-second wait." },
          { hu: "A Bot gépének képernyője 1920 × 1200-as az eddigi 1280 × 800 helyett, így több hely van, amikor figyeled, vagy átveszed az irányítást.", en: "The Bot's computer has a 1920 × 1200 screen, up from 1280 × 800, giving more room when you watch it or take over." },
          { label: "Teams", hu: "Az általa követett Slack-szálakban egy Team Bot nem reagál azokra a címkézetlen válaszokra, amelyekhez nincs rá szükség, például a csak emojis válaszokra.", en: "In Slack threads it follows, a Team Bot stays quiet on untagged replies that don't need it, such as emoji-only replies." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A Gmail-műveletek ritkábban hiúsulnak meg: a küldés és a válasz már nem jelez hiányzó eszközt, és a Botok kivárják a Google sebességkorlátjait.", en: "Gmail actions fail less often: send and reply no longer report a missing tool, and Bots wait out Google's rate limits." },
          { hu: "Az e-mail-vázlatok kártyaként jelennek meg a chatben, a Stoppal megszakított Send is kimegy, és a mellékletek megtartják a fájlnevüket.", en: "Email drafts show up as a card in the chat, a Send cut off by Stop still goes out, and attachments keep their file names." },
          { hu: "A Bot böngészője helyreáll egy összeomlott lapból, kezeli a nagy feltöltéseket, és 25 másodperc után lemond egy elakadt oldalról.", en: "The Bot's browser recovers from a crashed tab, handles large uploads, and gives up on a stuck page after 25 seconds." },
          { hu: "A Stop vagy egy új üzenet nagyjából 30 másodpercen belül leállítja azt a Botot, amely egy nem reagáló lépésen akadt el.", en: "Stop or a new message ends a Bot that's stuck on an unresponsive step within about 30 seconds." },
          { hu: "A Secure Formok a Bot által megnyitott oldalon töltik ki a mezőket, a fizetési kártyamezők pedig Secure Formot kapnak képernyőátadás helyett.", en: "Secure Forms fill into the page the Bot has open, and checkout card fields get a Secure Form instead of a screen handoff." },
          { hu: "Ha az X-nek vagy a Vercelnek újra be kell jelentkezned, a Bot újracsatlakozási kártyát mutat, ahelyett hogy újrapróbálkozna vagy feladná.", en: "When X or Vercel needs you to sign in again, the Bot shows a reconnect card instead of retrying or giving up." },
          { hu: "Ha az app ablaka összeomlik, a Grok Bot újratölti, ahelyett hogy üresen hagyná.", en: "If the app's window crashes, Grok Bot reloads it instead of leaving it blank." },
        ],
      },
    ],
  },
  {
    version: "0.68.0",
    date: "2026-10-05",
    title: { hu: "Új nyelvek és gép eltávolítása", en: "New languages and computer removal" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "A Settings Language beállításai között megjelent a marathi, a tamil, a telugu, a szuahéli és a hausza.", en: "Marathi, Tamil, Telugu, Swahili, and Hausa join the Language options in Settings." },
          { hu: "A Settings → Computer a többi gépednél a Remove lehetőséget mutatja, egy eltávolított gép pedig közli, hogy az újbóli hozzáadásához indítsd újra a Grok Botot.", en: "Settings → Computer shows Remove for your other computers, and a removed computer tells you to restart Grok Bot to add it back." },
          { hu: "Az e-mail-vázlatok egy ellenőrzött Gmail send-as címről is kimehetnek, és ha egynél több ilyen címed van, From választó jelenik meg.", en: "Email drafts can go out from a verified Gmail send-as address, with a From picker when you have more than one." },
          { hu: "A parancspalettában a keresés pluginokat is talál, és az Enter megnyitja a plugin oldalát.", en: "Searching the command palette also finds plugins, and Enter opens the plugin's page." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "A jóváhagyási kártyák név szerint kérdezik meg, hogy engedélyezed-e a Botot, és idézik az utasítását, a Settings pedig Custom Rules néven hívja a mentett szabályokat.", en: "Approval cards ask whether to allow the Bot by name and quote its instruction, and Settings calls saved rules Custom Rules." },
          { hu: "Az értesítések és a Botonkénti értesítéskapcsoló most azt írják, hogy a Bot rád vár.", en: "Notifications and the per-Bot notification switch now say the Bot is waiting for you." },
          { hu: "Egy routine-ra jobb gombbal kattintva a részletek panelen megjelenik a Pause, a Resume, a Test, az Edit és a Delete; egy routine-ra kattintva már nem nyílik meg a részletes nézete.", en: "Right-click a routine in the details pane for Pause, Resume, Test, Edit, and Delete; clicking a routine no longer opens its detail view." },
          { hu: "Ha egy pull request-link fölé viszed az egeret, egyszerű tooltip helyett egy előnézeti kártya jelenik meg az állapotával és a címével.", en: "Hovering a pull request link shows a preview card with its status and title instead of a plain tooltip." },
          { hu: "Ha a gépet teljes képernyőn nyitod meg, azonnal az élő nézet jelenik meg egy második Connecting képernyő helyett.", en: "Opening the computer full screen shows the live view right away instead of a second Connecting screen." },
          { hu: "Az oldalsáv Unassigned szakasza húzható, vagy a Move up és a Move down segítségével mozgatható, mint a saját szakaszaid.", en: "The Unassigned section in the sidebar can be dragged, or moved with Move up and Move down, like your own sections." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "Egy nagy kép másolása vagy mentése, illetve egy nagy JSON- vagy Markdown-fájl megnyitása már nem fagyasztja le az appot.", en: "Copying or saving a large image, or opening a large JSON or Markdown file, no longer freezes the app." },
          { hu: "A chatek közötti váltáskor már nem villan fel üres átirat, és a régebbi üzenetek, amelyekhez visszagörgettél, megmaradnak, amikor az app újracsatlakozik.", en: "Switching chats no longer flashes an empty transcript, and older messages you scrolled back to stay when the app reconnects." },
          { hu: "A Gmail-vázlatkártyák tartalmazzák az aláírásodat, a logóval együtt, és a Couldn't send this draft üzenetet mutatják, ha a Send nem megy át.", en: "Gmail draft cards include your signature, logo included, and say Couldn't send this draft when Send doesn't go through." },
          { hu: "A kimásolt válaszok megtartják a sortöréseiket és a link-URL-jeiket, amikor e-mailbe, Slackbe vagy egyszerű szövegbe illeszted őket.", en: "Copied replies keep their line breaks and link URLs when you paste them into email, Slack, or plain text." },
          { label: "Teams", hu: "A Team Botok már nem jelennek meg az elsődleges Bot választójában, egy elutasított módosítás pedig közli, hogy Team Bot nem lehet elsődleges Bot.", en: "Team Bots no longer appear in the primary Bot picker, and a refused change says Team Bots can't be a primary Bot." },
        ],
      },
    ],
  },
  {
    version: "0.67.0",
    date: "2026-10-02",
    title: { hu: "Connect Apps és új munkaállapot", en: "Connect Apps and new working status" },
    alsoIncludes: [],
    sections: [
      {
        kind: "improved",
        items: [
          { hu: "A Marketplace mostantól Connect Apps: a keresés alatt kategóriacímkék vannak, elöl a Recommended for you, a weben pedig a Botsablonok.", en: "Marketplace is now Connect Apps, with category chips under the search, Recommended for you first, and Bot templates on the web." },
          { hu: "Amíg egy Bot dolgozik, az állapota új kifejezéseket használ, például Thinking it through és Working on your computer, a Bot neve nélkül.", en: "While a Bot works, its status uses new phrases like Thinking it through and Working on your computer, without the Bot's name in front." },
          { hu: "A jóváhagyási kártyák jelzik, ha az Ask first szabályod szüneteltetett egy műveletet, vagy az Always allow hozzáadott egy szabályt, az Edit rule lehetőséggel pedig a Settingsben módosíthatod.", en: "Approval cards show when your Ask first rule paused an action or Always allow added a rule, with Edit rule to change it in Settings." },
          { hu: "A bekötött Google-fiókok a default helyett az e-mail-címüket mutatják a connectorkártyákon és a fióklistában.", en: "Connected Google accounts show their email address instead of default on connector cards and in the account list." },
          { hu: "Windowson a Use hardware acceleration mostantól alapból be van kapcsolva, ahogy Macen is, és a korábban meghozott döntésed megmarad.", en: "On Windows, Use hardware acceleration is now on by default, as on Mac, and a choice you already made is kept." },
          { label: "Teams", hu: "Egy Team Bot Copy link lehetősége x.ai-linket oszt meg, a már megosztott linkjeid pedig továbbra is működnek.", en: "Copy link on a Team Bot shares an x.ai link, and links you already shared keep working." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "Egy app bekötése akkor is befejeződik, ha egy másik app használja a bejelentkezési portját, és egy sikertelen bejelentkezési oldal elmagyarázza, miért.", en: "Connecting an app finishes even when another app is using its sign-in port, and a failed sign-in page explains why." },
          { hu: "Azok a connectorkártyák, amelyek újbóli bejelentkezést vagy egy második fiók hozzáadását kérik, az adott fióknál az Authorize lehetőséget kínálják az Added felirat helyett.", en: "Connector cards that ask you to sign in again, or to add a second account, offer Authorize for that account instead of showing Added." },
          { hu: "Ha egy Gmail-es reply-all meghiúsul, a vázlatkártya a Message not delivered üzenetet mutatja, ahelyett hogy elküldöttként jelenítené meg.", en: "When a Gmail reply-all fails, the draft card says Message not delivered instead of showing it as sent." },
          { hu: "A Settingsben a Stop minden futó chatet leállít, így az Update feloldódik, egy frissítés után hibára futó Settings-oldal pedig felajánlja a Restartot.", en: "Stop in Settings stops every running chat so Update unlocks, and a Settings page that fails after an update offers Restart." },
          { hu: "A routine-ütemezések már nem tüntetnek fel olyan intervallumot, amely nem ismétlődik, egy sikertelen szüneteltetés vagy folytatás hibát mutat, a törölt routine-ok címkéi pedig a (deleted) jelölést mutatják.", en: "Routine schedules no longer claim an interval that doesn't repeat, a failed pause or resume shows an error, and deleted routines' chips show (deleted)." },
          { hu: "A dock jelvénye már nem számolja a törölt Botok olvasatlan üzeneteit.", en: "The dock badge no longer counts unread messages from Bots that were deleted." },
          { hu: "Macen a Logitech egerek Back és Forward gombjai mostantól működnek.", en: "On Mac, the Back and Forward buttons on Logitech mice now work." },
          { hu: "Az oldalsáv avatarjai már nem fagynak le úgy, hogy az egyik szemük nagyobb a másiknál.", en: "Sidebar avatars no longer freeze with one eye bigger than the other." },
          { label: "Teams", hu: "Ha egy csapatadmin kikapcsolja a Route traffic through this computer beállítást, a Settings → Computer ezt jelzi, a csapatod beállításainak sikertelen betöltése pedig felajánlja a Retryt.", en: "When a team admin turns off Route traffic through this computer, Settings → Computer says so, and a failed load of your team's settings offers Retry." },
        ],
      },
    ],
  },
  {
    version: "0.66.0",
    date: "2026-10-02",
    title: { hu: "Proaktivitás, elsődleges Bot és megbízhatóbb frissítések", en: "Proactivity, primary Bot and more reliable updates" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "Az elsődleges Botod, amelyet csillag jelöl, mostantól észreveszi azt a munkát, amelyet levehet a válladról, és felajánlja, hogy elintézi. Grok Bot 0.59.0 vagy újabb szükséges.", en: "Your primary Bot, marked with a star, will now spot work it can take off your plate and offer to handle it. Requires Grok Bot 0.59.0 or later." },
        ],
      },
      {
        kind: "improved",
        items: [
          { label: "Teams", hu: "A Slack-szálakban a Bot állapotsora mutatja, min dolgozik, és a hosszú lépések alatt is látható marad.", en: "In Slack threads, the Bot's status line shows what it's working on and stays up during long steps." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A frissítések letöltése folytatódik, miután a géped felébred az alvásból, Macen pedig egy lemezképről vagy a Downloads mappából futó példány felajánlja a Move to Applications lehetőséget.", en: "Update downloads resume after your computer sleeps, and on Mac a copy running from a disk image or Downloads offers Move to Applications." },
          { hu: "Az a Bot, amely egy nem reagáló parancson vagy gépen akad el, egy megjegyzéssel leállítja magát, és a következő üzeneted ott folytatja, ahol abbamaradt.", en: "A Bot that hangs on an unresponsive command or computer stops itself with a note, and your next message picks up where it left off." },
          { hu: "A telefonod minden Bot-válaszról csak egyszer értesít, a törölt Bot-chatekről pedig soha.", en: "Your phone notifies you about each Bot reply only once, and never for Bot chats you've deleted." },
        ],
      },
    ],
  },
  {
    version: "0.65.0",
    date: "2026-09-30",
    title: { hu: "Hangos chat Team Botokkal és automatikus frissítések", en: "Team Bot voice chat and automatic updates" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { label: "Teams", hu: "A csapattagok hangos chatet indíthatnak egy Team Bottal, és a hívás a vele folytatott saját beszélgetésükben marad.", en: "Teammates can start a voice chat with a Team Bot, and the call stays in their own conversation with it." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "Az Automatic Updates alapból be van kapcsolva, így a Grok Bot újraindul a frissítések alkalmazásához, amíg nem vagy a gépnél; a Settings → Updates alatt kapcsolhatod ki.", en: "Automatic Updates is on by default, so Grok Bot restarts to apply updates while you're away; turn it off in Settings → Updates." },
          { hu: "A telefonod kihagyja az értesítéseket arról a Botról, amelyet éppen a gépeden nézel, és akkor folytatja őket, amikor a gép zárolódik, alvó állapotba kerül vagy tétlen.", en: "Your phone skips notifications for a Bot you're viewing on your computer, and resumes them once the computer locks, sleeps, or sits idle." },
          { label: "Teams", hu: "A Team Bot beállítása kártyáról kártyára halad, közbülső Bot-üzenetek nélkül, és minden kártya mutatja a lépését, például Step 2 of 5.", en: "Team Bot setup goes card to card with no Bot messages in between, and each card shows its step, like Step 2 of 5." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "Ha bekötsz egy appot, a bejelentkezés megmutatja, miért nem sikerült, vagy hogy lejárt a linkje, a Reopen vagy a Retry pedig új bejelentkezést indít.", en: "When you connect an app, sign-in shows why it failed or that its link expired, and Reopen or Retry starts a fresh sign-in." },
        ],
      },
    ],
  },
  {
    version: "0.64.0",
    date: "2026-09-30",
    title: { hu: "Team Bot-kezelők és megújult avatarok", en: "Team Bot managers and refreshed avatars" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "Az e-mail- és Slack-vázlatkártyák felkínálják a Disable drafts for this Bot lehetőséget, így az a Bot közvetlenül küldi az üzeneteket; a vázlatok visszakapcsolását a Bottól kérheted.", en: "Email and Slack draft cards offer Disable drafts for this Bot, so that Bot sends messages directly; ask the Bot to turn drafts back on." },
          { label: "Teams", hu: "Egy közzétett Team Bot létrehozója a Managers alatt hozzáadhat csapattagokat, akik ezután módosíthatják a profilját, a skilljeit, a pluginjait, a titkait és a Slack-appját.", en: "The creator of a published Team Bot can add teammates under Managers, who can then change its profile, skills, plugins, secrets, and Slack app." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "A Bot-avatarok megújult külsőt kaptak nagyobb szemekkel, az avatarszerkesztő pedig négyzet, szikra, lóhere, virág, szív, ház és csillag alakkal bővült.", en: "Bot avatars have a refreshed look with bigger eyes, and the avatar editor adds square, sparkle, clover, flower, heart, house, and star shapes." },
          { hu: "A Bot-üzenetekben a linkek az aláhúzott linkszöveg mellett mutatják az oldal ikonját.", en: "Links in Bot messages show the site's icon next to the underlined link text." },
          { hu: "Ha egy Botnak bejelentkezésre vagy más űrlap kitöltésére van szüksége, a chatkártyája egy Secure Form ablakot nyit meg, amely mutatja az oldal nevét és ikonját.", en: "When a Bot needs a login or other form filled, its chat card opens a Secure Form window showing the site's name and icon." },
        ],
      },
    ],
  },
  {
    version: "0.63.0",
    date: "2026-09-29",
    title: { hu: "Slack-jóváhagyások és gyorsabb böngészés", en: "Slack approvals and faster browsing" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { label: "Teams", hu: "A Slack-szálakban az a Bot, amelynek a jóváhagyásodra van szüksége, egy Review an action kártyát tesz közzé, amelyre csak te válaszolhatsz, ahelyett hogy elejtené a műveletet.", en: "In Slack threads, a Bot that needs your approval posts a Review an action card only you can answer, instead of dropping the action." },
          { label: "Teams", hu: "Megkérhetsz egy Team Botot a Slackben, hogy üzenjen az egyik saját Botodnak, és a válasz privátban érkezik hozzád a Grok Botban.", en: "You can ask a Team Bot in Slack to message one of your own Bots, and the reply comes to you privately in Grok Bot." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "Ha a Marketplace-ből olyan plugint adsz hozzá, amelyhez bejelentkezés kell, például a Gmailt, a bejelentkezése azonnal elindul, ahelyett hogy az Added állapotnál megállna.", en: "Adding a plugin that needs sign-in, such as Gmail, from Marketplace starts its sign-in right away instead of stopping at Added." },
          { hu: "A Botok gyorsabban haladnak végig a weboldalakon, rövidebb várakozással, amíg az oldalak minden kattintás vagy űrlapküldés után beállnak.", en: "Bots move through websites faster, with shorter waits for pages to settle after each click or form submission." },
          { hu: "A Marketplace a pluginokra összpontosít: a Featured Bots és a Bot-keresési találatok már nem jelennek meg, a keresőmezőben pedig a Search plugins felirat áll.", en: "Marketplace focuses on plugins: Featured Bots and Bot search results no longer appear, and the search box reads Search plugins." },
          { label: "Teams", hu: "Az általad birtokolt, közzétételre kész Team Bot a részletek panelje tetején a Publish lehetőséget mutatja, ez váltja a Publish to team kártyát.", en: "A Team Bot you own that's ready to publish shows Publish at the top of its details pane, replacing the Publish to team card." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A Grok Bot TLS-vizsgáló proxyval működő hálózatokon is bejelentkezik és csatlakozik, a gépedre telepített gyökértanúsítványokat használva.", en: "Grok Bot signs in and connects on networks with a TLS-inspecting proxy, using root certificates installed on your computer." },
          { hu: "Ha elhasználod a csomagodban foglalt használatot, a Grok Bot a használati korlátról szóló értesítést mutatja a Bot failed to respond helyett.", en: "When you use up your plan's included usage, Grok Bot shows the usage limit notice instead of Bot failed to respond." },
          { hu: "Miután egy Bot közli, hogy foglalkozik a kéréseddel, és elvégzi a munkát, elküldi neked az eredményt, ahelyett hogy elhallgatna.", en: "After a Bot says it's on your request and does the work, it sends you the result instead of going quiet." },
          { hu: "A Settings → Usage & Billing mutatja a csomagodban foglalt használatot, és azt, mikor nullázódik, ahelyett hogy azt írná, a csomagodban nincs ilyen.", en: "Settings → Usage & Billing shows your included usage and when it resets, instead of saying your plan has none." },
          { hu: "Egy Bot megtartja a hangot, a sebességet és a nyelvet, amelyet beállítottál neki, ahelyett hogy visszaállítaná őket az alapértékekre.", en: "A Bot keeps the voice, speed, and language you set for it instead of resetting them to the defaults." },
          { hu: "Egy Bot részletek paneljének Tasks fülén a törölt vagy lejárt cloud agent-futások lekerülnek a Coding listáról, az elakadt állapotok pedig a Status unavailable feliratot mutatják.", en: "In the Tasks tab of a Bot's details pane, deleted or expired cloud agent runs leave the Coding list, and stalled statuses show Status unavailable." },
          { hu: "Az a Bot, amelyet nyitott app mellett hozol létre, azonnal mutatja a legutóbbi üzenete előnézetét és az olvasatlan pöttyöt az oldalsávban.", en: "A Bot you create while the app is open shows its latest message preview and unread dot in the sidebar right away." },
          { label: "Teams", hu: "Azok a Team Botok, amelyek nevét a Slack elutasítja, például emojis vagy nem latin betűs neveket, egy Slack számára elfogadható néven továbbra is hozzáadhatók a Slackhez.", en: "Team Bots with names Slack rejects, such as emoji or non-Latin names, can still be added to Slack under a Slack-safe name." },
        ],
      },
    ],
  },
  {
    version: "0.62.0",
    date: "2026-09-28",
    title: { hu: "Idézetek, listák és helyesírás-ellenőrzés", en: "Quotes, lists, and spell check" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "Jelölj ki szöveget egy chatben, és nyomd meg a Cmd/Ctrl+L billentyűt, vagy válaszd az Add to prompt lehetőséget, hogy a következő üzenetedben idézd.", en: "Select text in a chat and press Cmd/Ctrl+L, or choose Add to prompt, to quote it in your next message." },
          { hu: "Írj `-` vagy `1.` jelet, hogy felsorolásos vagy számozott listát kezdj az üzenetszerkesztőben; a Shift+Enter új elemet ad hozzá, a Tab beljebb húzza, az Enter pedig továbbra is küld.", en: "Type `-` or `1.` to start a bulleted or numbered list in the composer; Shift+Enter adds an item, Tab nests it, and Enter still sends." },
          { hu: "A Grok Bot gépelés közben aláhúzza az elírt szavakat, jobb kattintásra javaslatokat és az Add to Dictionary lehetőséget kínálja; a Check Spelling While Typing beállítással kapcsolhatod ki.", en: "Grok Bot underlines misspelled words as you type and offers suggestions and Add to Dictionary on right-click; turn it off with Check Spelling While Typing." },
          { label: "Teams", hu: "A dashboard Manage Team Bots oldalán a csapatadminok Bot- vagy létrehozónév szerint kereshetnek, és törölhetik egy csapattárs Team Botját.", en: "On the Manage Team Bots page in the dashboard, team admins can search by Bot or creator name and delete a teammate's Team Bot." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "Egy Bot info paneljén Library fül van, amely listázza az általa megosztott oldalakat, fájlokat és linkeket Today, This week és Older csoportokba rendezve.", en: "A Bot's info pane has a Library tab listing the pages, files, and links it has shared, grouped into Today, This week, and Older." },
          { hu: "Ha az 1Password nincs bekötve, a Botok a chatben egy űrlappal kérik el az oldalak belépési adatait, és csak akkor kínálják a Connect 1Password lehetőséget, ha megvan az app.", en: "When 1Password isn't connected, Bots ask for site logins with a form in the chat, offering Connect 1Password only if you have the app." },
          { label: "Teams", hu: "Egy Team Bot info panelje mutatja, hány pluginja, titka, skillje és fájlja van, és amint kész, egy Publish to team kártyát.", en: "A Team Bot's info pane shows how many plugins, secrets, skills, and files it has, and a Publish to team card once it's ready." },
          { label: "Teams", hu: "Ha a Slack-munkaterületed admin-jóváhagyást igényel, az Add to Slack párbeszédablak arra kér, hogy a Send request in Slack lehetőséggel küldj kérést, mielőtt az Awaiting admin approval állapotot mutatná.", en: "When your Slack workspace needs admin approval, the Add to Slack dialog asks you to Send request in Slack before showing Awaiting admin approval." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "Ha egy Bot a chatben arra kér, hogy köss be egy appot, a bejelentkezés befejezése után magától folytatja a feladatot.", en: "When a Bot asks you to connect an app in chat, it resumes the task on its own once you finish signing in." },
          { hu: "Egy üzenet, amely nem ment át, a Failed to send feliratot mutatja a Resend és a Delete lehetőséggel, ahelyett hogy a Not delivered yet állapotnál ragadna.", en: "A message that didn't go through shows Failed to send with Resend and Delete, instead of being stuck on Not delivered yet." },
          { hu: "Az asztali és telefonos értesítések azonnal megérkeznek, amint egy Bot üzenetet küld, nem csak akkor, amikor befejezi a munkát.", en: "Desktop and phone notifications arrive as soon as a Bot sends a message, instead of only when it finishes working." },
          { hu: "A Bot által Gmailen keresztül küldött e-mailek az általa megnevezett címzetteknek mennek, nem egy mentett vázlat eredeti címzettjeinek.", en: "Emails a Bot sends through Gmail go to the recipients it names, not to a saved draft's original recipients." },
          { hu: "A törölt Botok felszabadítják a képernyőiket a közös gépen, így a többi Bot böngészőműveletei már nem hiúsulnak meg amiatt, hogy minden képernyő foglalt.", en: "Deleted Bots free their screens on the shared computer, so other Bots' browser actions no longer fail because every screen is taken." },
          { hu: "Ha egy Bot több képet küld a Slackbe, mindegyik kép megjelenik, nem csak az első.", en: "When a Bot sends several images to Slack, every image is posted, not just the first." },
          { hu: "Egy Bot bejelentkezve marad a weboldalakon, amikor a gépének böngészője újraindul.", en: "A Bot stays signed in to websites when its computer's browser restarts." },
        ],
      },
    ],
  },
  {
    version: "0.61.0",
    date: "2026-09-26",
    title: { hu: "Team Bots", en: "Team Bots" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { label: "Teams", hu: "A [Team Bots](https://docs.x.ai/grok-bot/team-bots) segítségével egyetlen Botot tehetsz közzé az egész csapatodnak, a csapattagok pedig az appban vagy a Slackben chatelnek vele, mindenki a saját beszélgetésében.", en: "[Team Bots](https://docs.x.ai/grok-bot/team-bots) let you publish one Bot for your whole team, and teammates chat with it in the app or Slack, each in their own conversation." },
          { label: "Teams", hu: "Egy Bot Share menüjében a Publish to Team választásával csapatpéldányt készíthetsz a chatjével és az emlékeivel, vagy a Start fresh lehetőséggel tiszta lappal kezdhetsz; az eredeti Botod privát marad.", en: "Choose Publish to Team in a Bot's Share menu to make a team copy with its chat and memories, or Start fresh; your original Bot stays private." },
          { label: "Teams", hu: "Egy új Team Bot kártyánként végigvezet a pluginokon, a titkokon, a skilleken és a fájlokon, és csak te látod, amíg nem választod a Publish to team lehetőséget.", en: "A new Team Bot walks you through plugins, secrets, skills, and files one card at a time, and only you can see it until you choose Publish to team." },
          { label: "Teams", hu: "A tulajdonosok a részletekből szerkesztik egy Team Bot nevét, leírását, pluginjait, titkait, skilljeit, fájljait és Slack-appját, az Unpublish pedig elveszi a csapattagoktól.", en: "Owners edit a Team Bot's name, description, plugins, secrets, skills, files, and Slack app from its details, and Unpublish takes it away from teammates." },
          { label: "Teams", hu: "A csapattagok a New chat Team Bots részében találják a Team Botokat, az általuk hozzáadottakat az oldalsávban látják, és Try asking javaslatokat tartalmazó üdvözlést kapnak.", en: "Teammates find Team Bots under Team Bots in New chat, see the ones they add in the sidebar, and get a greeting with Try asking suggestions." },
          { label: "Teams", hu: "Egy Team Bot megkérdez, mielőtt a bekötött pluginjaidat használná; az Always allow az adott Botra vagy minden Team Botra érvényes, amíg nem választod a Clear connector preferences lehetőséget.", en: "A Team Bot asks before using your connected plugins; Always allow covers that Bot or every Team Bot until you choose Clear connector preferences." },
          { label: "Teams", hu: "A csapattagok Team Bot-használata a saját keretükből fogy, és a Bot mindenkiről külön privát jegyzeteket vezet az appban, a Slackben és a routine-okban.", en: "Teammates' use of a Team Bot counts against their own allowance, and the Bot keeps private notes for each person across the app, Slack, and routines." },
          { label: "Teams", hu: "A Team Botok működnek a Slackben: szálakban válaszolnak, olvassák azokat a csatornákat, amelyekhez csatlakoztak, válaszolnak a workflow-említésekre, új posztokat indítanak, és épen hagyják a linkeket, a kódot és a táblázatokat.", en: "Team Bots work in Slack: they reply in threads, read channels they've joined, answer workflow mentions, start new posts, and keep links, code, and tables intact." },
          { label: "Teams", hu: "Kérj meg egy Team Botot a Slackben, hogy állítsa be, módosítsa, szüneteltesse vagy törölje a routine-jaidat; a Slack-fiókodat a Settings → General → Team Bots alatt kapcsolhatod össze.", en: "Ask a Team Bot in Slack to set up, change, pause, or delete your routines; link your Slack account under Settings → General → Team Bots." },
          { label: "Teams", hu: "A csapatadminok a dashboard Manage team bots részéből Team Botot adhatnak hozzá az egész csapatnak vagy kiválasztott csoportoknak, és a tagok nem rejthetik el.", en: "Team admins can add a Team Bot for the whole team or chosen groups from Manage team bots on the dashboard, and members can't hide it." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "Azok a fájlok, amelyekről egy Bot azt mondja, hogy elküldi neked, megbízhatóbban érkeznek meg a chatbe, ahelyett hogy csendben elvesznének.", en: "Files a Bot says it's sending you reach the chat more reliably instead of silently going missing." },
        ],
      },
    ],
  },
  {
    version: "0.60.0",
    date: "2026-09-26",
    title: { hu: "Outlook-vázlatok és megbízhatóbb válaszok", en: "Outlook drafts and more reliable replies" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "A szerkeszthető e-mail-vázlatok az Outlookkal is működnek: nézd át a Bot új e-mailjét a chatben, majd a Send email választásával küldd el az Outlook-fiókodból.", en: "Editable email drafts work with Outlook: review a Bot's new email in chat, then choose Send email to send it from your Outlook account." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "Az oldalsáv Marketplace gombja mostantól Connect apps, mellette a kiemelt pluginok logóival.", en: "The sidebar's Marketplace button is now Connect apps, with logos of featured plugins beside it." },
          { hu: "A Bot-üzenetekben a széles táblázatok keskeny ablakokban is megtartják a teljes elrendezésüket, és oldalra görgethetők, ahelyett hogy magas oszlopokba préselődnének.", en: "Wide tables in Bot messages keep their full layout in narrow windows and scroll sideways instead of squeezing into tall columns." },
          { hu: "Az üzenetekre adott emojireakciók egy rövid animációval érkeznek, amely a helyére pattintja az emojit.", en: "Emoji reactions on messages arrive with a short animation that pops the emoji into place." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A Botok megbízhatóbban válaszolnak, ahelyett hogy csendben zárnának le egy kört, eszközhasználat után és akkor is, amikor befejeződik egy háttérmunka, amelyre vársz.", en: "Bots reply more reliably instead of ending a turn silently, including after using tools or when background work you're waiting on finishes." },
          { hu: "A Bot-üzenetek valódi sortöréseket és idézőjeleket mutatnak kóbor fordított perjelek helyett, és a sor végén álló linkek a megfelelő oldalt nyitják meg.", en: "Bot messages show real line breaks and quotation marks instead of stray backslashes, and links at the end of a line open the right page." },
          { hu: "Ha egy kifizetetlen számla vagy egy Grok Bot nélküli csomag megállítja egy Bot válaszát, az app és a Slack egy általános hiba helyett közli, miért.", en: "If an unpaid invoice or a plan without Grok Bot stops a Bot's reply, the app and Slack say why instead of a generic error." },
          { hu: "Ha egy Botot név szerint keresel a New chatben, a Searchben vagy @említésekben, azok a Botok is megjelennek, amelyek neve tartalmazza, amit beírtál, elöl a pontos egyezésekkel.", en: "Searching for a Bot by name in New chat, Search, or @mentions finds Bots whose names contain what you typed, with exact matches first." },
          { hu: "Ha a képszolgáltató elutasít egy avatarleírást, az avatarszerkesztő elmagyarázza, miért, és javasolja az átfogalmazását.", en: "When the image provider declines an avatar description, the avatar editor explains why and suggests rewording it." },
          { hu: "Ha a New chatből hozol létre Botot, megbízhatóan megnyílik az új Bot, ahelyett hogy a létrehozása után néha elakadna.", en: "Creating a Bot from New chat reliably opens the new Bot instead of sometimes stalling after it's created." },
        ],
      },
    ],
  },
  {
    version: "0.59.0",
    date: "2026-09-25",
    title: { hu: "Team Secrets és középre igazított elrendezés", en: "Team Secrets and a centered layout" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "A lejárt Auto-review kártyák felkínálják az Always allow this in the future lehetőséget, így arról a műveletről nem kérdeznek meg újra.", en: "Expired Auto-review cards offer Always allow this in the future, so you aren't asked about that action again." },
          { label: "Enterprise", hu: "Az adminok Team Secreteket tárolhatnak a Grok Bot dashboardon, és a Team Setup szkriptek környezeti változóként kapják meg őket.", en: "Admins can store Team Secrets on the Grok Bot dashboard, and Team Setup scripts receive them as environment variables." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "Ha egy elfoglalt Botnak üzensz, előbb neked válaszol, mielőtt feldolgozná a más Botoktól, Cloud Agentektől és háttérfeladatoktól sorban álló frissítéseket.", en: "When you message a busy Bot, it answers you before working through queued updates from other Bots, Cloud Agents, and background tasks." },
          { hu: "Széles ablakokban a chatek és az üzenetmező egy középre igazított oszlopban maradnak, a válaszokban lévő széles táblázatok pedig kitölthetik az oszlop teljes szélességét.", en: "On wide windows, chats and the message box stay in a centered column, and wide tables in replies can stretch across it." },
          { hu: "Ha eléred a használati vagy költéskorlátot, a teljes korlátsáv jelenik meg olyan gombokkal, mint az Upgrade, a Set Spend Limit vagy a Request Upgrade, amellyel az adminjaidhoz fordulhatsz.", en: "Hitting a usage or spend limit shows the full limit banner, with buttons like Upgrade, Set Spend Limit, or Request Upgrade to ask your admins." },
          { hu: "A Botok beépített útmutatókat használnak közvetlen linkekkel és lépésekkel a népszerű utazási, étel-, vásárlási és szállítási oldalakhoz.", en: "Bots use built-in guides with direct links and steps for popular travel, food, shopping, and shipping sites." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "Ha gyors egymásutánban több üzenetet küldesz, a Bot mindegyikre válaszol, az elsőre is.", en: "When you send several messages in quick succession, the Bot answers all of them, including the first." },
          { hu: "A sok mentett memóriával vagy skillel rendelkező Botok többmásodperces szünet nélkül válaszolnak, és megbízhatóan mentik és felejtik el az emlékeket.", en: "Bots with a lot of saved memory or skills reply without a several-second pause, and save and forget memories reliably." },
          { hu: "A hosszú chatekben a Bot válaszai láthatók maradnak, ahelyett hogy a chat megnyitásakor vagy újratöltésekor felvillannának, majd eltűnnének.", en: "Bot replies in long chats stay visible instead of flickering in and then disappearing when you open or reload the chat." },
          { hu: "Ha a Bot gépe rövid ideig elérhetetlen, vagy egy automatikus gépfrissítés meghiúsul, a chat tovább működik anélkül, hogy egy párbeszédablakkal megszakítana.", en: "When the Bot's computer is briefly unreachable or an automatic computer update fails, chat keeps working without interrupting you with a dialog." },
          { hu: "Windowson a letöltött frissítés kilépéskor települ, macOS-en pedig egy sikertelen frissítéstelepítést az app újrapróbál, ahelyett hogy megtartaná a régi verziót.", en: "On Windows, a downloaded update installs when you quit, and on macOS, a failed update install is retried instead of keeping the old version." },
        ],
      },
    ],
  },
  {
    version: "0.58.0",
    date: "2026-09-22",
    title: { hu: "Új nyelvek, oldalsáv és akadálymentesség", en: "New languages, sidebar, and accessibility" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "A Settings Language részében választhatod a cseh, a dán, a finn, a magyar vagy a norvég (bokmål) nyelvet, és a Follow System ezeket választja, ha a géped valamelyiket használja.", en: "You can choose Czech, Danish, Finnish, Hungarian, or Norwegian Bokmål under Language in Settings, and Follow System selects them when your computer uses one." },
          { label: "Enterprise", hu: "Bekapcsolt Terminate Inactive Computers mellett a tagok Grok Bot-gépei 30 nap használat nélkül megszűnnek.", en: "With Terminate Inactive Computers on, members' Grok Bot computers are terminated after 30 days without use." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "A Search és a New chat kerek gombok az oldalsáv tetején, a Marketplace az oldalsáv alján van, a chat fejlécében a Bot nevére kattintva pedig a beszélgetés részletei nyílnak meg.", en: "Search and New chat are round buttons atop the sidebar, Marketplace sits in its footer, and the Bot's name in the chat header opens conversation details." },
          { hu: "A Grok Bot alvás vagy hálózatváltás után gyorsabban újracsatlakozik, a rövid újracsatlakozások vagy gépfrissítések pedig már nem jelenítenek meg sávot az ablak teljes szélességében.", en: "Grok Bot reconnects faster after sleep or a network change, and brief reconnects or computer updates no longer put a banner across the window." },
          { label: "Enterprise", hu: "Az Action Recording több Bot-tevékenységet naplóz, köztük az eszközök eredményeit, valamint a subagenteknek és cloud agenteknek való átadásokat, és kitakarja a kártyaszámokat és a hozzáférési tokeneket.", en: "Action Recording logs more Bot activity, including tool results and handoffs to subagents and cloud agents, and redacts card numbers and access tokens." },
          { hu: "A képernyőolvasók az app nagyobb részét jelentik be, köztük a javaslatokat, az új kérdéseket és az üzenetek szerzőit, a billentyűzetfókusz pedig látható, és a teljes képernyős nézegetőkön belül marad.", en: "Screen readers announce more of the app, including suggestions, new questions, and message authors, and keyboard focus is visible and stays inside full-screen viewers." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "Ha egy Bot használati korlát, sebességkorlát vagy időtúllépés miatt nem tud válaszolni, a chat egy kártyát mutat, amely megmondja, miért.", en: "When a Bot can't reply because of a usage limit, rate limit, or timeout, the chat shows a card that says why." },
          { hu: "Bárki, akinek van Grok Bot-hozzáférése, lejátszhatja egy Bot hangjegyzeteit anélkül, hogy a csomagja bővítésére kérnék.", en: "Anyone with Grok Bot access can play a Bot's voice memos without being asked to upgrade their plan." },
          { hu: "Azok az Auto-review szabályok, amelyeket egy Bot munkája közben adsz hozzá, például az Always allow segítségével, mentve maradnak.", en: "Auto-review rules you add while a Bot is working, such as with Always allow, stay saved." },
          { hu: "Ha bontod a hangos chatet, miközben egy Bot még a kéréseden dolgozik, befejezi, és közzéteszi az eredményt a chatben.", en: "If you hang up a voice chat while a Bot is still working on your request, it finishes and posts the result in the chat." },
          { hu: "Egy Bot használhat olyan plugint, amelynek egyetlen bekötött fiókja címkével rendelkezik, például egy címkézett Outlook-fiók.", en: "A Bot can use a plugin whose only connected account has a label, such as a labeled Outlook account." },
          { hu: "Az oldalsáv újratöltéseken és újraindításokon át is ugyanabban a sorrendben tartja a Botjaidat, és egy Bot megnyitása a helyén hagyja.", en: "The sidebar keeps your Bots in the same order through reloads and relaunches, and opening a Bot leaves it in place." },
          { hu: "A hangos chatek a Settings Microphone részében választott mikrofont használják, és az alapértelmezett mikrofonodra váltanak, ha az nem érhető el.", en: "Voice chats use the microphone you choose under Microphone in Settings, and fall back to your default microphone if it's unavailable." },
          { hu: "A Botok újraindítás után újracsatlakoznak a helyi gépedhez, ahelyett hogy azt jelentenék, hogy nincs csatlakoztatva.", en: "Bots reconnect to your local computer after a reboot instead of reporting that it isn't connected." },
        ],
      },
    ],
  },
  {
    version: "0.57.0",
    date: "2026-09-18",
    title: { hu: "Projects és gazdagabb linkelőnézetek", en: "Projects and richer link previews" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "Egy Bot Projectet indíthat, ha kérsz egyet: egy Cloud Agentet, amely megtervezi a munkát, és saját agenteket futtat.", en: "A Bot can start a Project when you ask for one: a Cloud Agent that plans the work and runs its own agents." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "A linkkártyák és -előnézetek a bekötött fiókjaid segítségével valódi címeket mutatnak a privát Notion-oldalaknál, a GitHub-issue-knál és -pull requesteknél, valamint a Slack-üzeneteknél.", en: "Link cards and previews show real titles for private Notion pages, GitHub issues and pull requests, and Slack messages using your connected accounts." },
          { hu: "Amíg egy Bot hangjegyzete szól, az átirat a hanggal szinkronban kiemeli az egyes szavakat, és egy szóra kattintva oda ugrik a lejátszás.", en: "While a Bot's voice memo plays, its transcript highlights each word in sync with the audio, and clicking a word jumps playback there." },
          { hu: "A Hidden Bots egy összecsukható szakasz az oldalsáv alján, egy rejtett Bot menüje pedig a Show in sidebar lehetőséget kínálja a visszahozásához.", en: "Hidden Bots is a collapsible section at the bottom of the sidebar, and a hidden Bot's menu offers Show in sidebar to bring it back." },
          { hu: "Az általad küldött üzenetek azonnal elküldöttként jelennek meg, és csak akkor jelenik meg egy kis folyamatjelző sáv, ha valamelyiknek két másodpercnél tovább tart eljutnia a Bothoz.", en: "Messages you send show as sent right away, and a small progress bar appears only if one takes over two seconds to reach the Bot." },
          { hu: "Egy Bot oldalsávmenüjéből kikerültek az Edit Profile, a Duplicate és a sablonokkal kapcsolatos elemek; a profil szerkesztéséhez a View conversation details, a sablonokhoz a megosztás menü használható.", en: "A Bot's sidebar menu drops Edit Profile, Duplicate, and template items; use View conversation details to edit the profile and the share menu for templates." },
          { label: "Enterprise", hu: "Az Audit Logs több Grok Bot-tevékenységet rögzít, köztük a gépeket, a csoportchateket, a sablonokat, a skilleket, a pluginokat, a routine-okat, valamint egy Bot törlését vagy megosztását.", en: "Audit Logs record more Grok Bot activity, including computers, group chats, templates, skills, plugins, routines, and deleting or sharing a Bot." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A Botok válaszolnak azokra a kérdésekre, amelyeket a saját tudásukból meg tudnak válaszolni, ahelyett hogy néha válasz nélkül leállnának.", en: "Bots reply to questions they can answer from their own knowledge instead of sometimes stopping without replying." },
          { hu: "Egy Bot böngészője csatlakozva marad, amikor ugyanazon a gépen más Botok is a sajátjukat használják, tovább vár a lassú oldalakra, és újracsatlakozik, ha a kapcsolat megszakad.", en: "A Bot's browser stays connected when other Bots on the same computer use theirs, waits longer for slow pages, and reconnects if it drops." },
          { hu: "Egy Bot Waiting for you állapota az oldalsávban eltűnik, amint már nem vár, ahelyett hogy beragadna.", en: "A Bot's Waiting for you status in the sidebar clears once it's no longer waiting, instead of getting stuck." },
          { hu: "Egy Bot oldalsáv-előnézete akkor is a legutóbbi üzenetét mutatja, ha az egy űrlap, fotó, widget vagy jóváhagyási kérés, ahelyett hogy üres maradna.", en: "A Bot's sidebar preview shows its latest message even when it's a form, photo, widget, or approval request, instead of going blank." },
        ],
      },
    ],
  },
  {
    version: "0.56.0",
    date: "2026-09-17",
    title: { hu: "GitHub, táblázatok és érthetőbb jóváhagyások", en: "GitHub, spreadsheets, and clearer approvals" },
    alsoIncludes: [],
    sections: [
      {
        kind: "improved",
        items: [
          { hu: "A Botok dolgozhatnak GitHub-releasekkel, -tagekkel, -címkékkel, -sub-issue-kkal, -discussionökkel és -közreműködőkkel, létrehozhatnak brancheket, és beküldhetnek egyetlen, több fájlra kiterjedő pull request-review-t.", en: "Bots can work with GitHub releases, tags, labels, sub-issues, discussions, and collaborators, create branches, and submit one pull request review covering several files." },
          { hu: "A Review an action kártyák egy mondatban megmondják, mit akar tenni a Bot, a parancsot és az indoklást pedig a View the full request mögött tartják.", en: "Review an action cards say in one sentence what the Bot wants to do and keep the command and reasoning behind View the full request." },
          { hu: "A táblázat-előnézetekben kijelölhetsz cellákat és tartományokat, a nyílbillentyűkkel mozoghatsz, Cmd/Ctrl+C-vel másolhatsz, és legfeljebb 10 000 sor jelenik meg.", en: "Spreadsheet previews let you select cells and ranges, move with the arrow keys, copy with Cmd/Ctrl+C, and show up to 10,000 rows." },
          { hu: "Ha leállítasz egy Botot, az a többi Botot is leállítja, amelynek munkát adott át, és az általa indított Cloud Agenteket is.", en: "When you tell a Bot to stop, it also stops the other Bots it handed work to and the Cloud Agents it started." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A Marketplace azonnal mutatja a pluginmódosításokat, például a bekötést, a lecsatlakoztatást, az eltávolítást vagy a bejelentkezést, amint befejeződnek.", en: "Marketplace shows plugin changes, such as connecting, disconnecting, removing, or signing in, as soon as they finish." },
          { hu: "Az egyetlen GitHub-pull requestet figyelő routine-ok csak az adott pull request eseményeire futnak.", en: "Routines that watch a single GitHub pull request run only for events on that pull request." },
          { hu: "Egy Bot avataralakjának és -színének módosításakor minden választás azonnal érvényesül, akkor is, ha gyorsan kattintasz végig rajtuk.", en: "Changing a Bot's avatar shape and color applies every pick right away, even when you click through them quickly." },
          { hu: "Az egyszeri emlékeztető routine-ok a dátumukkal és az időpontjukkal együtt a Once jelölést mutatják.", en: "One-time reminder routines show Once with their date and time." },
          { label: "Enterprise", hu: "Az alvó Bot-gépek a következő ébredéskor alkalmazzák az admin legfrissebb Network Controls beállításait.", en: "Bot computers that are asleep apply an admin's latest Network Controls when they next wake." },
        ],
      },
    ],
  },
  {
    version: "0.55.0",
    date: "2026-09-16",
    title: { hu: "Setup Checklist és űrlapkitöltés", en: "Setup Checklist and form filling" },
    alsoIncludes: [],
    sections: [
      {
        kind: "improved",
        items: [
          { label: "Teams", hu: "A Grok Bot dashboard Setup Checklistje Recommended és Optional csoportokba rendezi a lépéseket, és lépésekkel bővül a pluginokhoz, a Slackhez vagy a Microsoft Teamshez, valamint a hálózati beállításokhoz.", en: "The Grok Bot dashboard's Setup Checklist groups steps into Recommended and Optional and adds steps for plugins, Slack or Microsoft Teams, and network settings." },
          { hu: "Az About párbeszédablak mutatja, mikor készült az app példányod, és a Copy version info tartalmazza a build dátumát.", en: "The About dialog shows when your copy of the app was built, and Copy version info includes the build date." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A beépített GitHub-plugin Disconnect lehetősége akkor is működik, ha a Grok Bot-géped nem érhető el, vagy régebbi verziót futtat.", en: "Disconnect on the built-in GitHub plugin works even when your Grok Bot computer is unavailable or running an older version." },
          { hu: "Amikor egy Bot egy chatűrlapból kitölti a válaszaidat egy oldalon, a címet és azokat a többi mezőt is kitölti, amelyek csak kattintásra válnak elérhetővé.", en: "When a Bot fills your answers from a chat form into a page, it also fills address and other fields that unlock only when clicked." },
          { hu: "Azokon a bejelentkezési oldalakon, amelyek a bejelentkeztetés közben kitöltve tartják a mezőket, a Bot ellenőrzi, hogy sikerült-e az 1Passwordös bejelentkezés, ahelyett hogy átadná neked a képernyőt.", en: "On sign-in pages that keep fields filled while logging you in, the Bot checks whether a 1Password sign-in worked instead of handing you the screen." },
        ],
      },
    ],
  },
  {
    version: "0.54.0",
    date: "2026-09-16",
    title: { hu: "Keresés, HEIC-fotók és 1Password", en: "Search, HEIC photos, and 1Password" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { label: "Enterprise", hu: "A szervezeti adminok a Manage selected alatt a Delete VMs and Data választásával eltávolíthatják a tagok Grok Bot-gépeit a tárolt adataikkal együtt.", en: "Organization admins can choose Delete VMs and Data under Manage selected to remove members' Grok Bot computers along with their stored data." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "A keresőpaletta (Cmd/Ctrl+K) az üzenetek előtt mutatja a találó Botokat, beállításokat, műveleteket és routine-okat; tedd idézőjelbe a keresést, hogy minden találó üzenetet láss.", en: "The search palette (Cmd/Ctrl+K) shows matching Bots, settings, actions, and routines before messages; wrap your search in quotes to see every matching message." },
          { hu: "Egy sablonból létrehozott Bot az app nyelvén köszönt, nem mindig angolul.", en: "A Bot you create from a template greets you in your app language instead of always in English." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A HEIC- és HEIF-fotók, például az iPhone-ról származók, képként jelennek meg a beszélgetésben, a médianézegetőben és a Media fülön, fájlmelléklet helyett.", en: "HEIC and HEIF photos, like those from an iPhone, show as images in the conversation, media viewer, and Media tab instead of as file attachments." },
          { hu: "A Botok több oldalon jelentkeznek be 1Passworddel, és hagyják, hogy az 1Password töltse ki az egyszeri kódokat és jelszavakat, ahelyett hogy tőled kérnék a begépelésüket.", en: "Bots sign in with 1Password on more sites and let 1Password fill one-time codes and passwords instead of asking you to type them." },
          { hu: "A beépített GitHub-plugin Connect gombbal megjelenik a Marketplace-keresésben, az oldala pedig listázza az eszközeit, így mindegyiket külön kikapcsolhatod.", en: "The built-in GitHub plugin appears in Marketplace search with a Connect button, and its page lists its tools so you can turn each one off." },
          { hu: "A titokkérő kártyák megmondják, miért nem sikerült egy mentés, és megtartják, amit beírtál, így újra megpróbálhatod.", en: "Secret request cards say why a save failed and keep what you typed so you can try again." },
        ],
      },
    ],
  },
  {
    version: "0.53.0",
    date: "2026-09-15",
    title: { hu: "1Password, fájlfeltöltés és időzónák", en: "1Password, file uploads, and time zones" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "Macen kösd be az 1Passwordöt a Marketplace-ből, hogy a Botod a mentett belépési adataiddal jelentkezhessen be; előbb megkérdez, hacsak nem kapcsolod be az Auto fillt.", en: "On a Mac, connect 1Password from the Marketplace so your Bot can sign in with your saved logins, asking you first unless you turn on Auto fill." },
          { hu: "A Botok fájlokat tölthetnek fel a Google Drive-ra vagy a OneDrive-ra, vagy csatolhatják őket egy Gmail-vázlathoz.", en: "Bots can upload files to Google Drive or OneDrive, or attach them to a Gmail draft." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "A Botod gépe a te időzónádat használja, így a weboldalak és az órája ahhoz igazodnak, ahol vagy.", en: "Your Bot's computer uses your time zone, so websites and its clock match where you are." },
          { hu: "Egy megnyitott képre kattintva nagyíthatsz, a nézegetőt pedig az Escape-pel, a bezárás gombbal vagy a képen kívülre kattintva zárhatod be.", en: "Click an open image to zoom in, and close the viewer with Escape, the close button, or a click outside the image." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A Botod leállítása mindazt is leállítja, ami még fut a gépén.", en: "Stopping your Bot also stops anything still running on its computer." },
          { hu: "A Botok akkor is kitöltik a bejelentkezési mezőket, ha azok részben kilógnak a képernyőről.", en: "Bots fill sign-in fields even when they sit partly off the screen." },
          { hu: "A telefonos értesítések a Botod képét mutatják.", en: "Phone notifications show your Bot's picture." },
          { hu: "A Bitbucket bekötését befejezheted a Grok Botból.", en: "You can finish connecting Bitbucket from Grok Bot." },
          { hu: "Egy másik Bot által létrehozott Bot mostantól megjelenik az oldalsávodban.", en: "A Bot created by another Bot now shows up in your sidebar." },
        ],
      },
    ],
  },
  {
    version: "0.52.0",
    date: "2026-09-15",
    title: { hu: "GitHub-kapcsolat és routine-ok szüneteltetése", en: "GitHub connection and routine pausing" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "Egy routine-t szüneteltethetsz, és később folytathatod.", en: "You can pause a routine and resume it later." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "A Marketplace beépített GitHub-kapcsolata mutatja, hogy a fiókod be van-e kötve, és ha nincs, a Connect GitHub lehetőséget.", en: "The built-in GitHub connection in the Marketplace shows whether your account is connected, with Connect GitHub when it isn't." },
          { hu: "Az oldalsáv sorai már nem mutatják az utolsó üzenet idejét, az összecsukott oldalsávban pedig van egy Marketplace-parancsikon.", en: "Sidebar rows no longer show the time of the last message, and the collapsed sidebar has a Marketplace shortcut." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A Botok már nem küldenek második visszaigazolást, miután már válaszoltak.", en: "Bots no longer send a second acknowledgment after they've already replied." },
          { hu: "A kattintások és a gépelés a Botod gépén akkor is működnek, ha a Grok Bot nem tudja előbb ellenőrizni az oldalt.", en: "Clicks and typing on your Bot's computer still work when Grok Bot can't check the page first." },
          { hu: "Egy kódblokkban oldalra görgetve már nem csúszik el az egész üzenet.", en: "Scrolling sideways in a code block no longer slides the whole message." },
          { hu: "A Botod böngészője bejelentkezés után már nem ajánlja fel a jelszavak mentését.", en: "Your Bot's browser no longer offers to save passwords after it signs in." },
          { hu: "A jóváhagyási kártyák bezárulnak, amikor lejár az idejük.", en: "Approval cards close when their time runs out." },
          { hu: "Az Update ready mellett az Enter lenyomása újraindítja az appot a frissítéshez.", en: "Pressing Enter on Update ready restarts to update." },
        ],
      },
    ],
  },
  {
    version: "0.51.0",
    date: "2026-09-14",
    title: { hu: "Az első Bot beállítása, routine-ok és görgetés", en: "First Bot setup, routines, and scrolling" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "A beállítás mostantól létrehozza helyetted az első Botodat.", en: "Setup now creates your first Bot for you." },
          { hu: "Törölhetsz egy routine-t, ez a jövőbeli futásait is leállítja.", en: "You can delete a routine, which also stops its future runs." },
          { hu: "A Botod módosíthatja a saját címét, valamint az avatarja alakját és színét.", en: "Your Bot can change its own title and the shape and color of its avatar." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "Minden Bot azon a fülön nyílik meg újra, amely utoljára nyitva volt, újraindítás után is.", en: "Each Bot reopens on the tab you last had open, even after a restart." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A hosszú beszélgetések egészen az elejükig visszagörgethetők, és a görgetősávot a tetejéig húzhatod.", en: "Long conversations scroll all the way back, and you can drag the scrollbar to the top." },
          { hu: "Egy új fiók mutatja az általad létrehozott Botot, és az utolsó Botod törlése eltávolítja a listából.", en: "A new account shows the Bot you created, and deleting your last Bot removes it from the list." },
          { hu: "A Take over azt a képernyőt mutatja, amelyet a Botod ténylegesen használ.", en: "Take over shows the screen your Bot is actually using." },
        ],
      },
    ],
  },
  {
    version: "0.50.0",
    date: "2026-09-11",
    title: { hu: "Webes forgalom a saját gépeden keresztül", en: "Route web traffic through your computer" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "A Settingsben kapcsold be a Route egress through this desktop beállítást, hogy a Botod gépének webes forgalma a felhő helyett a saját gépeden keresztül menjen.", en: "Turn on Route egress through this desktop in Settings to send web traffic from your Bot's computer through your own computer instead of the cloud." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A géped használatára vonatkozó kérések nyitva tartják a parancsot és a részleteket, így elolvashatod őket, mielőtt válaszolsz.", en: "Requests to use your computer keep the command and details open, so you can read them before you answer." },
        ],
      },
    ],
  },
  {
    version: "0.49.0",
    date: "2026-09-11",
    title: { hu: "Repository-hozzáférés, keresés és fájllinkek", en: "Repository access, search, and file links" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "Ha a Botodnak hozzáférés kell egy repositoryhoz, egy kártyán bekötheted a GitHubot, a GitLabet, a Bitbucketet vagy az Azure DevOpsot, és a Bot a hozzáférés megadása után folytatja.", en: "When your Bot needs access to a repository, a card lets you connect GitHub, GitLab, Bitbucket, or Azure DevOps, and the Bot continues once access is granted." },
          { hu: "Egy üzenetben egy fájlútvonalra kattintva megnyithatod azt a fájlt a Botod gépéről.", en: "Click a file path in a message to open that file from your Bot's computer." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "A keresés mindent egy listában mutat, a fájlok, linkek és routine-ok pedig gépelés közben jelennek meg.", en: "Search shows everything in one list, with files, links, and routines appearing once you type." },
          { hu: "A képek és videók teljes képernyőn nyílnak meg, letöltési, bezárási és lejátszási vezérlőkkel.", en: "Pictures and videos open full screen, with download, close, and playback controls." },
          { hu: "A Botod gépe újraindításkor megtartja a böngészős bejelentkezéseit.", en: "Your Bot's computer keeps its browser sign-ins when it restarts." },
          { label: "Teams", hu: "A nem admin csapattagok is meghívhatnak embereket a Grok Botba.", en: "Teammates who aren't admins can invite people to Grok Bot." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "Az üzenetek megtartják a bekezdés- és listasortöréseiket.", en: "Messages keep their paragraph and list line breaks." },
          { hu: "Egy szolgáltatás bekötése után visszakerülsz a Grok Botba, egy elutasított kapcsolat pedig megnevezi a szolgáltatást.", en: "Connecting a service brings you back to Grok Bot, and a declined connection names the service." },
          { hu: "A némított Botok már nem növelik a dock jelvényét.", en: "Muted Bots no longer add to the dock badge." },
        ],
      },
    ],
  },
  {
    version: "0.48.0",
    date: "2026-09-09",
    title: { hu: "Több fiók és új Marketplace", en: "Multiple accounts and a new Marketplace" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "Adj hozzá egynél több fiókot, és válts közöttük a fiókmenüből; mindegyik megtartja a saját Botjait és adatait ezen a gépen.", en: "Add more than one account and switch between them from the account menu; each keeps its own Bots and data on this computer." },
          { hu: "Adj hozzá egy Botot közvetlenül a Marketplace-ben lévő sorából.", en: "Add a Bot straight from its row in the Marketplace." },
          { label: "Enterprise", hu: "A Conversation Insightsszal rendelkező Enterprise-adminok a Grok Bot oldalon látják a csapatuk leggyakoribb Grok Bot-felhasználási módjait, a teljes bontásra mutató linkkel.", en: "Enterprise admins with Conversation Insights see their team's top Grok Bot use cases on the Grok Bot page, with a link to the full breakdown." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "A Marketplace-nek egy kezdőlapja van a pluginoknak és a Botoknak, kiemelt ajánlásokkal, a csapatodnál népszerű pluginokkal és böngészhető kategóriákkal.", en: "The Marketplace has one homepage for plugins and Bots, with featured picks, plugins popular with your team, and categories to browse." },
          { hu: "A Marketplace-keresés gépelés közben találja meg a pluginokat, a Botokat és a kategóriákat.", en: "Marketplace search finds plugins, Bots, and categories as you type." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "Az API-kulcsot használó connectorok Connected állapotot mutatnak, amint be vannak kötve.", en: "Connectors that use an API key show Connected once they're connected." },
          { hu: "Egy már nem elérhető Botra mutató link ezt jelzi, a Back pedig visszavisz a Marketplace-be.", en: "A link to a Bot that's no longer available says so, and Back returns to the Marketplace." },
        ],
      },
    ],
  },
  {
    version: "0.46.0",
    date: "2026-09-09",
    title: { hu: "Usage & Billing és chatek átnevezése", en: "Usage & Billing and chat renaming" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "Kattints jobb gombbal egy chatre az átnevezéséhez.", en: "Right-click a chat to rename it." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "A Usage & Billing mutatja a heti használatodat és a csomagodat, a chat figyelmeztet, ha a heti korlátod közelében jársz, és beállíthatsz havi on-demand korlátot.", en: "Usage & Billing shows your weekly usage and plan, the chat warns you near your weekly limit, and you can set a monthly on-demand limit." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A Usage & Billing frissíti az on-demand korlátodat, amikor egy fizetési mód hozzáadása után visszatérsz.", en: "Usage & Billing updates your on-demand limit when you come back from adding a payment method." },
          { hu: "Egy e-mail-vázlatban a linkek megtartják a szövegüket, amikor az üzenet elmegy.", en: "Links in an email draft keep their wording when the message is sent." },
          { hu: "Ha a Botod gépén kevés a memória, a bezárt böngészőlapok bezárva maradnak, ahelyett hogy mind újratöltődnének.", en: "When your Bot's computer runs low on memory, closed browser tabs stay closed instead of all reloading." },
          { hu: "A visszamaradt böngészőlapok már nem kérik biztonsági kulcs használatát.", en: "Leftover browser tabs no longer ask you to use a security key." },
          { hu: "A Botod akkor is kitölt egy bejelentkezési űrlapot, ha az oldal más sorrendben fogalmazza meg a címkéit.", en: "Your Bot fills a sign-in form even when the page words its labels in a different order." },
        ],
      },
    ],
  },
  {
    version: "0.45.0",
    date: "2026-09-08",
    title: { hu: "E-mail- és Slack-vázlatok, valamint admin Auto-review", en: "Email and Slack drafts, and admin Auto-review" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "A Botod megírhat egy e-mailt vagy Slack-üzenetet vázlatként, amelyet átnézhetsz, majd a Send vagy a Discard választásával elküldhetsz vagy elvethetsz.", en: "Your Bot can write an email or Slack message as a draft for you to review, then Send or Discard it." },
          { label: "Enterprise", hu: "Az Enterprise-adminok kötelezővé tehetik az Auto-review-t, és csapatszintű Auto-Review Rules szabályokat adhatnak hozzá; a tagok ezt Required by your admin jelöléssel látják.", en: "Enterprise admins can require Auto-review and add team-wide Auto-Review Rules; members see it marked Required by your admin." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "Miután beküldesz egy űrlapot, a Botod kitölti a látható mezőket, és egy oldalváltás miatt már nem kell újra begépelned őket.", en: "After you submit a form, your Bot fills the visible fields, and a page change no longer makes you type them again." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "Egy új Bot bemutatkozik, ahelyett hogy üresen hagyná a chatet.", en: "A new Bot introduces itself instead of leaving the chat empty." },
          { hu: "Miután visszaállítod a Botod gépét, az az újracsatlakozás után azonnal kész, és minden, amit beírtál, megmarad.", en: "After you reset your Bot's computer, it's ready as soon as it reconnects, and anything you typed is still there." },
          { hu: "A Botok minden üzenetet elolvasnak a többi Botodtól, akkor is, ha több is érkezik, amíg el vannak foglalva.", en: "Bots read every message from your other Bots, even when several arrive while they're busy." },
          { hu: "A linuxos deb- és rpm-telepítések jelzik, ha frissítés érhető el, és arra kérnek, hogy a csomagkezelődön keresztül frissíts.", en: "Linux deb and rpm installs show when an update is available and tell you to update through your package manager." },
        ],
      },
    ],
  },
  {
    version: "0.44.0",
    date: "2026-09-06",
    title: { hu: "Chatűrlapok, időbélyegek és AutoFill", en: "Chat forms, timestamps, and AutoFill" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "Ha a Botodnak valamire, például egy bejelentkezésre van szüksége, egy chatbeli űrlappal kérdez, és kitölti helyetted az oldalt, ahelyett hogy átadná neked a gépét.", en: "When your Bot needs something like a sign-in, it asks with a form in the chat and fills the page for you, instead of handing you its computer." },
          { hu: "Vidd az egeret a Botod egy üzenete fölé, hogy lásd, mikor küldte.", en: "Hover over a message from your Bot to see when it was sent." },
          { hu: "Macen kattints jobb gombbal egy szövegmezőre az AutoFill használatához.", en: "On a Mac, right-click a text field to use AutoFill." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "A géped használatára vonatkozó kérések mostantól a chatben jelennek meg.", en: "Requests to use your computer now appear in the chat." },
          { hu: "Mielőtt a nevedben visszajelzést küldene, a Botod megkérdezi, szeretnél-e választ a support csapattól.", en: "Before sending feedback for you, your Bot asks whether you'd like a reply from the support team." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A Tab tabulátort szúr be az üzenetmezőbe, a többsoros beillesztések pedig megtartják a behúzásukat.", en: "Tab inserts a tab in the message box, and multi-line pastes keep their indentation." },
          { hu: "A rövid kapcsolati problémák már nem jelentkeztetnek ki, és nem mutatják a gépedet lecsatlakozottként.", en: "Brief connection problems no longer sign you out or show your computer as disconnected." },
          { hu: "A Botod gépéről érkező videók és fájlok már nem állnak meg az első 4 MB után.", en: "Videos and files from your Bot's computer no longer stop after the first 4 MB." },
          { hu: "Kijelentkezett állapotban egy kapcsolati probléma már nem takarja el a bejelentkezési képernyőt.", en: "When you're signed out, a connection problem no longer covers the sign-in screen." },
        ],
      },
    ],
  },
  {
    version: "0.41.0",
    date: "2026-09-04",
    title: { hu: "Botok a Marketplace-ben és pluginbeállítás", en: "Bots in the Marketplace and plugin setup" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "A Marketplace mostantól a pluginok mellett hozzáadható Botokat is listáz, kategóriákkal, kereséssel és minden Botnak saját oldallal.", en: "The Marketplace now lists Bots you can add as well as plugins, with categories, search, and a page for each Bot." },
          { hu: "A Grok Bot csapata által készített Botok Verified jelvényt viselnek a Marketplace-ben.", en: "Bots made by the Grok Bot team carry a Verified badge in the Marketplace." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "Amikor a Botod gépe csatlakozik, a Connecting felirat látszik, amíg a képernyő készen nem áll.", en: "While your Bot's computer connects, Connecting shows until the screen is ready." },
          { label: "Enterprise", hu: "Ha a Grok Bot-hozzáférés bizonyos csoportokra korlátozódik, a meghívók elmagyarázzák, hogy nem adnak hozzáférést, és a Manage Accessre linkelnek.", en: "When Grok Bot access is limited to certain groups, invites explain that they don't grant access and link to Manage Access." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A pluginbeállítás jelölőnégyzeteket, menüket és számmezőket mutat, ha egy plugin ezt kéri, a mentett titkok pedig pöttyökként jelennek meg.", en: "Plugin setup shows checkboxes, menus, and number fields when a plugin asks for them, and saved secrets appear as dots." },
          { hu: "A Bot létrehozása közben beírt szöveg az adott Bot chatjében marad.", en: "Text you type while creating a Bot stays in that Bot's chat." },
          { hu: "A pull request-linkek megtartják az általad nekik írt szöveget.", en: "Pull request links keep the words you wrote for them." },
        ],
      },
    ],
  },
  {
    version: "0.40.0",
    date: "2026-09-03",
    title: { hu: "Enterprise-hozzáférés, nyelvek és Support menü", en: "Enterprise access, languages, and Support menu" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { label: "Enterprise", hu: "A Grok Bot mostantól minden Enterprise-csapat számára elérhető, nem csak a korai hozzáférésű szervezeteknek.", en: "Grok Bot is now available to every Enterprise team, not only early-access organizations." },
          { hu: "A Grok Bot urdu, thai és bengáli nyelven is elérhető.", en: "Grok Bot is available in Urdu, Thai, and Bengali." },
          { label: "Enterprise", hu: "Az Audit Logs rögzíti, mikor jönnek létre Botok, mikor változik a Grok Bot-hozzáférés, valamint a csapatbeállítások módosításait.", en: "Audit Logs record when Bots are created, when Grok Bot access changes, and team setup changes." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "A Help Center, a Send Feedback és az About mostantól a fiókmenü Support pontja alatt található, a Get Grok Bot for mobile mellett.", en: "Help Center, Send Feedback, and About now sit under Support in the account menu, next to Get Grok Bot for mobile." },
          { hu: "Egy Bot létrehozása közben a sorában a Creating… felirat látszik, te pedig a jelenlegi chatedben maradsz.", en: "Creating a Bot shows Creating… on its row while you stay in your current chat." },
          { hu: "A kártyás kérések az Approve feliratot mutatják, egy elutasított, sikertelen vagy lejárt kérés pedig közli, hogy nem történt terhelés.", en: "Card requests say Approve, and a declined, failed, or expired request says no charge was made." },
        ],
      },
    ],
  },
  {
    version: "0.39.0",
    date: "2026-09-03",
    title: { hu: "Vietnami, indonéz és köszöntések", en: "Vietnamese, Indonesian, and greetings" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "A Grok Bot vietnami és indonéz nyelven is elérhető.", en: "Grok Bot is available in Vietnamese and Indonesian." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "Egy új Bot azon a nyelven köszönt, amelyre a Grok Bot be van állítva.", en: "A new Bot greets you in the language Grok Bot is set to." },
          { hu: "A Language lista minden nyelv nevét a jelenlegi nyelveden és a saját nyelvén is mutatja.", en: "The Language list shows each language's name both in your current language and in its own." },
          { hu: "A pluginkategóriák a te nyelveden jelennek meg.", en: "Plugin categories appear in your language." },
          { hu: "A Botod gépének újranyitásakor az utolsó képernyő látszik, amíg a gép újra nem csatlakozik.", en: "Reopening your Bot's computer keeps showing the last screen until it reconnects." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A Botjaid és a fájljaik a helyükön maradnak, ha a Botod gépe akkor indul újra, amikor nem tudja olvasni őket.", en: "Your Bots and their files stay put when your Bot's computer restarts while it can't read them." },
          { hu: "Egy routine szüneteltetése vagy törlése a várakozó futásokat is törli.", en: "Pausing or deleting a routine also cancels runs that were waiting." },
          { hu: "A fiókmenü akkor is mutatja a heti használatodat és a fiókjaidat, ha egy frissítés sikertelen.", en: "The account menu keeps showing your weekly usage and accounts when a refresh fails." },
          { hu: "A Follow System a kantoni nyelvhez a megfelelő kínait választja, a hagyományost vagy az egyszerűsítettet.", en: "Follow System picks the right Chinese for Cantonese, Traditional or Simplified." },
        ],
      },
    ],
  },
  {
    version: "0.38.0",
    date: "2026-09-03",
    title: { hu: "Group Access és nevek az oldalsávban", en: "Group Access and sidebar names" },
    alsoIncludes: [],
    sections: [
      {
        kind: "improved",
        items: [
          { label: "Enterprise", hu: "A Manage Group Access a Grok Botot bekapcsoló kapcsoló mellett található, és a mentett csoportkorlátok azonnal érvényesek, amint a Grok Bot újra be van kapcsolva.", en: "Manage Group Access sits next to the switch that turns Grok Bot on, and group limits you save apply as soon as it's back on." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "Az oldalsáv megtartja a nevedet, ha a profilod nem tölthető be.", en: "The sidebar keeps your name when your profile can't be loaded." },
        ],
      },
    ],
  },
  {
    version: "0.37.0",
    date: "2026-09-03",
    title: { hu: "Beállítási lehetőségek, megosztás menü és követő üzenetek", en: "Setup choices, sharing menu, and follow-ups" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "A beállítás megkérdezi, mely eszközöket használod naponta, köztük a Cursort.", en: "Setup asks which tools you use every day, including Cursor." },
          { label: "Enterprise", hu: "Az Enterprise-adminok a dashboard Overview oldalán látják, hány nap van hátra a Grok Bot-próbaidőszakukból.", en: "Enterprise admins see how many days are left in their Grok Bot trial on the dashboard Overview." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "A Share as template, az Update template és a View template details a chat fejlécében lévő megosztás menüben található.", en: "Share as template, Update template, and View template details are in the share menu in the chat header." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A Botod tevékenysége látható marad, ha követő üzenetet küldesz, miközben még dolgozik.", en: "Your Bot's activity stays visible when you send a follow-up while it's still working." },
          { hu: "A már elolvasott chatek egy frissítés után is olvasottak maradnak.", en: "Chats you've already read stay read after an update." },
          { hu: "Egy sablonból hozzáadott Bot neve csak egyszer jelenik meg az oldalsávban.", en: "A Bot added from a template shows its name only once in the sidebar." },
          { hu: "Az Allow once akkor is működik, ha az Execution on this computer beállítás Never allow értékre van állítva.", en: "Allow once works even when Execution on this computer is set to Never allow." },
          { hu: "Egyszerre csak egy biztonsági kulcsos kérés nyílik meg, és a bezárása után zárva marad.", en: "Only one security-key prompt opens at a time, and closing it keeps it closed." },
          { hu: "Az Auto-review kérheti, hogy hagyd jóvá a Mac-automatizálási parancsokat.", en: "Auto-review can ask you to approve Mac automation commands." },
          { hu: "A Grok Bot akkor is működik, ha a csapatod korlátozza, ki használhat Cloud Agenteket.", en: "Grok Bot works when your team limits who can use Cloud Agents." },
        ],
      },
    ],
  },
  {
    version: "0.36.0",
    date: "2026-09-02",
    title: { hu: "Linkek másolása, routine-chatek és Always allow", en: "Copy links, routine chats, and Always allow" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "Kattints jobb gombbal egy pull requestre a chatben a linkje másolásához.", en: "Right-click a pull request in the chat to copy its link." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "Egy routine futásai a saját chatjükben nyílnak meg, a Close Chat pedig visszavisz.", en: "A routine's runs open in their own chat, and Close Chat brings you back." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "Az Execution on this computer alatti Always allow mostantól lehetővé teszi, hogy a Botod kérdezés nélkül használja a gépedet.", en: "Always allow under Execution on this computer now lets your Bot use your computer without asking." },
          { hu: "A Hide from sidebar minden kiválasztott Botot elrejt.", en: "Hide from sidebar hides every Bot you've selected." },
        ],
      },
    ],
  },
  {
    version: "0.35.0",
    date: "2026-09-02",
    title: { hu: "Hosszabb feladatok, vásárlások és megosztott Botok", en: "Longer tasks, purchases, and shared Bots" },
    alsoIncludes: [],
    sections: [
      {
        kind: "improved",
        items: [
          { hu: "A Botod a hosszú munkákon és az oldalról oldalra haladó böngészésen is végigdolgozik, ahelyett hogy idő előtt leállna.", en: "Your Bot keeps working through long jobs and page-by-page browsing instead of stopping early." },
          { label: "Teams", hu: "A csapatadminok küldhetnek egy linket, amely megnyitja az Invite Your Team to Grok Bot részt.", en: "Team admins can send a link that opens Invite Your Team to Grok Bot." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "Az általad elutasított vásárlások Declined állapotban maradnak, a megválaszolatlanok pedig Expired jelölést kapnak.", en: "Purchases you decline stay Declined, and unanswered ones are marked Expired." },
          { hu: "Egy megosztott Bot újbóli megnyitása a legfrissebb változatát mutatja, az integrációival együtt.", en: "Opening a shared Bot again shows its latest version, including its integrations." },
          { hu: "A routine-ok, a visszajelzések és az értesítések a kiválasztott csapatodnál maradnak.", en: "Routines, feedback, and notifications stay on the team you selected." },
        ],
      },
    ],
  },
  {
    version: "0.34.0",
    date: "2026-09-01",
    title: { hu: "Pull request-előnézetek és Botok a szakaszokban", en: "Pull request previews and Bots in sections" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "Az üzenetekben a pull request-linkek mutatják a számot, a címet, és azt, hogy nyitott, piszkozat, egyesített vagy lezárt állapotú-e.", en: "Pull request links in messages show the number, title, and whether it's open, draft, merged, or closed." },
          { hu: "A Botod létrehozhat egy új Botot az egyik oldalsávszakaszodban.", en: "Your Bot can create a new Bot inside one of your sidebar sections." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "Egy megosztott Bot minden routine-ja leírja, mit csinál, ahelyett hogy a nevét ismételné.", en: "Each routine on a shared Bot describes what it does instead of repeating its name." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A New Bot billentyűparancs előbb bezárja a Searchöt, így a kettő már nem kerül egymásra.", en: "The New Bot shortcut closes Search first, so the two no longer stack." },
          { hu: "Egy Bot avatarja azonnal frissül az oldalsávban, amint megváltozik.", en: "A Bot's avatar updates in the sidebar as soon as it changes." },
          { hu: "Egy lejárt vásárlás jóváhagyása új vásárlást kér, egy új vásárlás pedig felváltja azt, amely még válaszra vár.", en: "Approving an expired purchase asks for a fresh one, and a new purchase replaces one still waiting for an answer." },
        ],
      },
    ],
  },
  {
    version: "0.33.0",
    date: "2026-09-01",
    title: { hu: "Group Access, csapatos próbaidőszakok és Link-kártyák", en: "Group Access, team trials, and Link cards" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { label: "Enterprise", hu: "Az Enterprise-adminok a Group Access segítségével engedélyezhetik a Grok Botot a csapat minden tagjának, vagy korlátozhatják meghatározott csoportokra.", en: "Enterprise admins can let every team member use Grok Bot or limit it to specific groups with Group Access." },
          { label: "Enterprise", hu: "Az Enterprise-adminok a dashboardról Grok Bot-próbaidőszakot indíthatnak a csapatuknak, a Bot-beállítások pedig mutatják, mikor ér véget a próbaidőszak.", en: "Enterprise admins can start a Grok Bot trial for their team from the dashboard, and Bot settings show when the trial ends." },
          { hu: "Amikor jóváhagysz egy vásárlást, a Pay with segítségével választhatsz egy mentett kártyát a Link-tárcádból.", en: "When you approve a purchase, Pay with lets you choose a saved card from your Link wallet." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A számozott listák megtartják a számozásukat, ha egy bekezdés áll az elemek között, és az üzenetekben és táblázatokban lévő sortörések megjelennek.", en: "Numbered lists keep their numbering when a paragraph sits between items, and line breaks in messages and tables show up." },
          { hu: "Egy chat, amely egy kapcsolati probléma után nem töltődik be, magától újrapróbálkozik.", en: "A chat that fails to load after a connection problem tries again on its own." },
          { hu: "Ha nem vagy csapat tagja, a Grok Bot a fiókod adatvédelmi beállítását követi.", en: "When you're not on a team, Grok Bot follows your account's privacy setting." },
          { hu: "Ha egy Botot másik oldalsávszakaszba helyezel át, ott is marad.", en: "Moving a Bot into another sidebar section keeps it there." },
          { hu: "Egy értesítés jelzi, ha routine-ok szüneteltek, amíg távol voltál.", en: "A notice tells you when routines were paused while you were away." },
        ],
      },
    ],
  },
  {
    version: "0.32.0",
    date: "2026-09-01",
    title: { hu: "Nemzetközi gépelés és csapatbeállítás", en: "International typing and team setup" },
    alsoIncludes: [],
    sections: [
      {
        kind: "improved",
        items: [
          { label: "Teams", hu: "A csapatoldal a Set up Grok Bot lehetőséget kínálja, amíg a csapatod be nem kapcsolja, utána pedig egy kezdő útmutatóra és a használatra linkel.", en: "The team page offers Set up Grok Bot until your team turns it on, then links to a getting started guide and usage." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A Botod gépén a gépelés a beviteli módszeredet követi, így a koreai, a japán, a kínai és az ékezetes betűk úgy jelennek meg, ahogy megírtad őket.", en: "Typing on your Bot's computer follows your input method, so Korean, Japanese, Chinese, and accented letters come through as you composed them." },
        ],
      },
    ],
  },
  {
    version: "0.31.0",
    date: "2026-09-01",
    title: { hu: "Onboarding, csapatmeghívók és HTML-előnézetek", en: "Onboarding, team invites, and HTML previews" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "Az onboarding megkérdezi, min fogsz a legtöbbet dolgozni, és ahhoz a munkához javasol Botokat.", en: "Onboarding asks what you'll be working on most and suggests Bots for that kind of work." },
          { label: "Teams", hu: "A csapatadminok meghívhatják a teljes csapatukat a Grok Botba, vagy kiválaszthatnak meghatározott csoportokat és tagokat.", en: "Team admins can invite their whole team to Grok Bot, or pick specific groups and members." },
          { label: "Teams", hu: "A dashboardon egy Setup Checklist végigvezeti az adminokat a pluginokon, a Slacken, a GitHubon, a bejelentkezésen és a csapattagok meghívásán.", en: "A Setup Checklist on the dashboard walks admins through plugins, Slack, GitHub, sign-in, and inviting teammates." },
          { hu: "Egy, a Botod által készített HTML-fájl megnyitásakor előnézet jelenik meg, a kódhoz a Source lehetőséggel, a benne lévő linkek pedig a böngésződben nyílnak meg.", en: "Opening an HTML file your Bot made shows a preview, with Source for the code, and links in it open in your browser." },
          { hu: "Egy Cloud Agent megnyitógombjával az Open in Web vagy az Open in Cursor közül választhatsz, és az app megjegyzi a választásodat.", en: "A Cloud Agent's open button lets you choose Open in Web or Open in Cursor, and remembers your choice." },
          { hu: "Ha egy tűzfal vagy VPN blokkolja a Botod gépét, a Grok Bot közli, hogy nem éri el, és felajánlja a Retryt.", en: "When a firewall or VPN blocks your Bot's computer, Grok Bot says it can't reach it and offers Retry." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "Több mint 50 Botot is létrehozhatsz.", en: "You can create more than 50 Bots." },
          { hu: "Az óránkénti, intervallumos és napi routine-ok a létrehozásuk időpontjától számított ütemezés szerint futnak.", en: "Hourly, interval, and daily routines run on a schedule counted from when you create them." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A csatolt fájlok és a diktálás annál a Botnál maradnak, amelynél elkezdted őket, akkor is, ha Botot váltasz.", en: "Files you attach and dictation stay with the Bot you started them in, even if you switch Bots." },
          { hu: "A Botod által indított Cloud Agent nem indul el kétszer, ha egy indítást újrapróbálnak, és a Botod értesül, amikor befejeződik.", en: "A Cloud Agent your Bot started isn't launched twice when a launch is retried, and your Bot hears when it finishes." },
          { hu: "Linuxon a Grok Botot megnyitó linkek elindítják az appot.", en: "On Linux, links that open Grok Bot launch the app." },
          { hu: "A csatolt képek Windowson bélyegképet mutatnak.", en: "Images you attach show thumbnails on Windows." },
        ],
      },
    ],
  },
  {
    version: "0.30.0",
    date: "2026-08-28",
    title: { hu: "Sablonmegosztás, Link-vásárlások és nyelvek", en: "Template sharing, Link purchases, and languages" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "Oszd meg a Botot sablonként: válaszd ki, hogy a csapatod vagy bárki használhatja-e, a többiek pedig a linkről adják hozzá a saját példányukat.", en: "Share a Bot as a template: choose whether your team or anyone can use it, and others add their own copy from the link." },
          { hu: "Ha a Botod vásárolni szeretne valamit, egy kártya mutatja az összeget, hogy az Allow vagy a Deny lehetőséget válaszd, majd a Link elvégzi a fizetést.", en: "When your Bot wants to buy something, a card shows the amount for you to Allow or Deny, then Link completes the payment." },
          { label: "Teams", hu: "A csapatadminok eldönthetik, hogy a tagok nyilvánosan vagy csak a csapaton belül oszthatnak-e meg sablonokat.", en: "Team admins choose whether members can share templates publicly or only within the team." },
          { label: "Enterprise", hu: "A dashboard Action Recording funkciója a tagok Grok Bot-műveleteit a csapatod auditnaplójába rögzíti.", en: "Action Recording on the dashboard records members' Grok Bot actions to your team's audit log." },
          { hu: "A Grok Bot arab, ukrán, holland, görög, afrikaans és héber nyelven is elérhető, az arabhoz és a héberhez jobbról balra haladó elrendezéssel.", en: "Grok Bot is available in Arabic, Ukrainian, Dutch, Greek, Afrikaans, and Hebrew, with right-to-left layouts for Arabic and Hebrew." },
          { hu: "A Command-Shift-V vagy a Ctrl-Shift-V formázás nélkül illeszti be a szöveget az üzenetmezőbe.", en: "Command-Shift-V, or Ctrl-Shift-V, pastes text into the message box without formatting." },
          { hu: "Az egyik gépeden futó feladatot egy másik gépről is jóváhagyhatod, ahol be vagy jelentkezve.", en: "You can approve a task on one computer from another computer where you're signed in." },
          { label: "Enterprise", hu: "Az Enterprise-használati beállítások egy Personal Usage diagramot mutatnak a költésedről az előző hónaphoz és a korlátodhoz képest.", en: "Enterprise usage settings show a Personal Usage chart of your spend against last month and your limit." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "A Jump to a találó Botokat a műveletek és az üzenetek előtt listázza.", en: "Jump to lists matching Bots above actions and messages." },
          { hu: "A Send Feedback segítségével választ is kérhetsz.", en: "Send Feedback lets you ask for a response." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "Egy kép beillesztése fájlként csatolja azt, és egy hosszú üzenet beillesztése után a kurzor látható marad.", en: "Pasting an image attaches it as a file, and the cursor stays in view after you paste a long message." },
          { hu: "A Botod böngészője átvált arra a lapra, amelyet kiválaszt, és újratölti azokat az oldalakat, amelyeket nem sikerül megnyitni.", en: "Your Bot's browser switches to the tab it picks and reloads pages that fail to open." },
        ],
      },
    ],
  },
  {
    version: "0.29.0",
    date: "2026-08-27",
    title: { hu: "Gépek a Settingsben és válaszok a telefonon", en: "Computers in Settings and phone replies" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "A Settingsben van egy Computer szakasz, amely listázza a gépeidet, és ahol mindegyiknél az Always allow, az Ask every time vagy a Never allow közül választhatsz a műveletekhez.", en: "Settings has a Computer section listing your computers, where you choose Always allow, Ask every time, or Never allow for actions on each one." },
          { hu: "A telefonodon a Grok app értesítései a Botod válaszát mutatják.", en: "Notifications from the Grok app on your phone show your Bot's reply." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "A részletek panelt szélesebbre húzhatod, egészen a chat minimális szélességéig.", en: "You can drag the details pane wider, up to the chat's minimum width." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A Botod gépe akkor is elindul, ha több csapatnak is tagja vagy.", en: "Your Bot's computer starts when you belong to more than one team." },
        ],
      },
    ],
  },
  {
    version: "0.28.0",
    date: "2026-08-26",
    title: { hu: "Orosz, török, olasz és svéd", en: "Russian, Turkish, Italian, and Swedish" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "A Grok Bot orosz, török, olasz és svéd nyelven is elérhető, és követi a géped nyelvét.", en: "Grok Bot is available in Russian, Turkish, Italian, and Swedish, and follows your computer's language." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "A Botod által írt beállítás- és pluginlinkek a beállítás vagy a plugin valódi nevét mutatják.", en: "Settings and plugin links your Bot writes show the real name of the setting or plugin." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A bejelentkezés öt perc után abbahagyja a várakozást, így újra megpróbálhatod.", en: "Signing in stops waiting after five minutes, so you can try again." },
        ],
      },
    ],
  },
  {
    version: "0.27.0",
    date: "2026-08-25",
    title: { hu: "Pro- és SuperGrok-hozzáférés, valamint webhook-adatok", en: "Pro and SuperGrok access, and webhook data" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "A Cursor Pro-előfizetők mostantól használhatják a Grok Botot, ahogy a SuperGrok- és X Premium+-előfizetők is, ha összekapcsolják a fiókjukat.", en: "Cursor Pro subscribers can now use Grok Bot, as can SuperGrok and X Premium+ subscribers who link their account." },
        ],
      },
      {
        kind: "improved",
        items: [
          { label: "Teams", hu: "A dashboardon az admin beállítás az Enabled állapotot mutatja, amint a csapatod befejezte a Grok Bot beállítását.", en: "Admin setup on the dashboard shows Enabled once your team finishes setting up Grok Bot." },
          { hu: "A webhook által indított routine-ok megkapják a kérés törzsét, így a Botod az elküldött tartalom alapján cselekedhet.", en: "Routines started by a webhook receive the request body, so your Bot can act on what was sent." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "Ha egy chat nem töltődik be, a Grok Bot ezt közli, és felajánlja a Retryt.", en: "If a chat can't load, Grok Bot says so and offers Retry." },
        ],
      },
    ],
  },
  {
    version: "0.26.0",
    date: "2026-08-25",
    title: { hu: "Appmenü, jobbról balra gépelés és frissítések", en: "App menu, right-to-left typing, and updates" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "Az appmenüben megtalálható a Settings…, a Check for Updates és, ha egy frissítés készen áll, a Restart to Update.", en: "The app menu has Settings…, Check for Updates, and Restart to Update when an update is ready." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "Arab, héber és más jobbról balra író nyelveken a gépelés jobbról indul, a vegyes írásirányú válaszokban pedig minden bekezdés elrendezése helyes.", en: "Typing in Arabic, Hebrew, and other right-to-left languages starts on the right, and replies that mix directions lay out each paragraph correctly." },
          { hu: "Az olvasatlan Botok jelennek meg elsőként a keresőpalettában.", en: "Unread Bots appear first in the search palette." },
          { hu: "Az Update Grok Bot's Computer elmagyarázza, ha egy frissítés csak azt a szoftvert érinti, amelyen a Botjaid futnak, így a telepített appok megmaradnak.", en: "Update Grok Bot's Computer explains when an update only touches the software your Bots run on, so installed apps stay." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A Grok Bot a csapataid első betöltésekor a bejelentkezéskor kiválasztott csapatot használja.", en: "Grok Bot uses the team you picked at sign-in the first time it loads your teams." },
          { hu: "A figyelmeztetések, a visszajelzés és az About a Settings fölött nyílnak meg.", en: "Alerts, feedback, and About open on top of Settings." },
          { hu: "Ha frissítés szükséges, az Update required képernyő a teljes ablakot lefedi.", en: "When an update is required, the Update required screen covers the whole window." },
        ],
      },
    ],
  },
  {
    version: "0.25.0",
    date: "2026-08-25",
    title: { hu: "Többválasztós kérdések és on-demand korlátok", en: "Multi-select questions and on-demand limits" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "Ha a Botod olyan kérdést tesz fel, amelyre több válasz is adható, jelöld ki azokat, amelyeket szeretnél, és nyomd meg a Submit gombot.", en: "When your Bot asks a question that allows several answers, select the ones you want and press Submit." },
          { hu: "Egyéni csomagnál a Usage & Billing alatt a havi on-demand korlátodat None, Fixed vagy Unlimited értékre állíthatod.", en: "On an individual plan, set your monthly on-demand limit to None, Fixed, or Unlimited in Usage & Billing." },
          { hu: "Egy GitHub-routine figyelhet egyetlen pull requestet, a lezárását is beleértve, és eltávolítja magát, amint a pull request merge-elődik vagy lezárul.", en: "A GitHub routine can watch a single pull request, including when it closes, and removes itself once the pull request merges or closes." },
          { hu: "Tölts le egy diagramot a chatből PNG-képként.", en: "Download a diagram in the chat as a PNG image." },
          { hu: "Egy beszélgetésben említett Botra kattintva megnyithatod.", en: "Click a Bot mentioned in a conversation to open it." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "Ha elfogy a csomagodban foglalt használat, a csapattagok Premium seatre válthatnak, az Ultra és a SuperGrok Heavy mellett.", en: "When your included usage runs out, team members can upgrade to a Premium seat, alongside Ultra and SuperGrok Heavy." },
          { hu: "Egy törölt Bot a megerősítés után azonnal eltűnik az oldalsávból, és értesítést kapsz, ha a törlés nem sikerül.", en: "A Bot you delete disappears from the sidebar as soon as you confirm, and you're told if deleting fails." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "Az üzenetmezőbe beillesztett szöveg egyszerű szöveg marad, és minden, amit közvetlenül a küldés után begépelsz, megmarad.", en: "Text you paste into the message box stays plain, and anything you type right after sending is kept." },
          { hu: "A linkkel kezdődő üzenetek a szövegük többi részét is mutatják, és a link kattintható marad.", en: "Messages that start with a link show the rest of their text, and the link stays clickable." },
          { hu: "A Grok Bot a kiválasztott csapatodat használja a szabályokhoz, a Usage & Billinghez és a Computershez, és olyan csapatra vált, amelyet még használhatsz, ha a tiéd megszűnt.", en: "Grok Bot uses the team you selected for rules, Usage & Billing, and Computers, and switches to a team you can still use if yours is gone." },
          { hu: "A Privacy Mode távol tart egy beszélgetést a Botod gépétől, ha azt nem szabad tárolni.", en: "Privacy Mode keeps a conversation off your Bot's computer when it must not be stored." },
          { hu: "A Botod gépe befejezi a fájljai visszaállítását, a hosszú nevűekét is.", en: "Your Bot's computer finishes restoring its files, including ones with long names." },
        ],
      },
    ],
  },
  {
    version: "0.24.0",
    date: "2026-08-21",
    title: { hu: "Beállításlinkek, csapatos bejelentkezés és hangbevitel", en: "Setting links, team sign-in, and voice input" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "Vidd az egeret egy beállítás- vagy plugincím fölé, és válaszd a Copy link lehetőséget, hogy közvetlen linket ossz meg hozzá.", en: "Hover a settings or plugin title and choose Copy link to share a direct link to it." },
          { hu: "Kattints jobb gombbal egy videóra, és válaszd a Save video… lehetőséget a megtartásához.", en: "Right-click a video and choose Save video… to keep it." },
          { hu: "Ha több csapatnak is tagja vagy, a bejelentkezés arra kér, hogy válassz egyet.", en: "If you belong to more than one team, sign-in asks you to pick one." },
          { hu: "Az onboarding és a hozzáférési képernyő mutatja az e-mail-címet, amellyel be vagy jelentkezve, a Log out lehetőséggel.", en: "Onboarding and the access screen show the email you're signed in with, with Log out." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "A hangbevitel felismeri a nyelvet, amelyen beszélsz, ahelyett hogy az app vagy a rendszer nyelvét feltételezné.", en: "Voice input detects the language you speak instead of assuming your app or system language." },
          { hu: "A Sign out elmagyarázza, hogy eltávolítja a fiókot és annak helyi adatait erről a gépről, a Botjaid és a chateid pedig visszatérnek, amikor újra bejelentkezel.", en: "Sign out explains that it removes the account and its local data from this computer, and your Bots and chats return when you sign in again." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A Today és a Yesterday éjfél után frissül, a mellékletek pedig azon a napon maradnak, amikor elküldted őket.", en: "Today and Yesterday update after midnight, and attachments stay on the day you sent them." },
          { hu: "A Grok Botba mutató linkek a megfelelő oldalt nyitják meg, ahelyett hogy csak előtérbe hoznák az ablakot.", en: "Links into Grok Bot open the right page instead of only bringing the window forward." },
          { hu: "Ha üzensz a Botodnak, miközben egy routine fut, a routine utána újra lefut.", en: "If you message your Bot while a routine is running, the routine runs again afterward." },
        ],
      },
    ],
  },
  {
    version: "0.22.0",
    date: "2026-08-20",
    title: { hu: "Csapatbeállítás és fordítási javítások", en: "Team setup and translation fixes" },
    alsoIncludes: [],
    sections: [
      {
        kind: "fixed",
        items: [
          { label: "Teams", hu: "A Grok Bot beállítása a dashboardon a kiválasztott csapatot használja.", en: "Setting up Grok Bot on the dashboard uses the team you selected." },
          { hu: "A pluginszámok, a routine-ütemezések és a figyelmeztetési állapotok spanyol és francia fordítása helyesen jelenik meg.", en: "Spanish and French translations of plugin counts, routine schedules, and alert statuses read correctly." },
        ],
      },
    ],
  },
  {
    version: "0.21.0",
    date: "2026-08-19",
    title: { hu: "Appnyelvek, emojik és webhook-routine-ok", en: "App languages, emoji, and webhook routines" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "Az Appearance alatt választhatod ki az app nyelvét, köztük az egyszerűsített és a hagyományos kínait, a japánt, a koreait, a hindit, a spanyolt, a portugált, a franciát, a németet és a lengyelt.", en: "Pick the app's language under Appearance, including Simplified and Traditional Chinese, Japanese, Korean, Hindi, Spanish, Portuguese, French, German, and Polish." },
          { hu: "Írj `:` jelet az üzenetmezőbe egy emoji kiválasztásához, vagy zárj le egy rövid nevet `:` jellel a beszúrásához.", en: "Type `:` in the message box to pick an emoji, or finish a short name with `:` to insert it." },
          { hu: "A routine-ok webhookról is indulhatnak, saját Webhook URL-lel és Webhook keyjel.", en: "Routines can start from a webhook, with their own Webhook URL and Webhook key." },
          { hu: "Tölts le egy mellékletet az üzenetmenüből, vagy használd a Download all lehetőséget, ha egy üzenetnek több melléklete van.", en: "Download an attachment from the message menu, or use Download all when a message has several." },
          { label: "Enterprise", hu: "Az Enterprise-adminok a dashboardon Team Setup szkripteket menthetnek, amelyek minden tag Bot-gépén lefutnak.", en: "Enterprise admins can save Team Setup scripts on the dashboard that run on every member's Bot computer." },
          { label: "Enterprise", hu: "Az Enterprise-adminok a dashboardról hálózati hozzáférési szabályzatot állíthatnak be a csapatuk Botjainak.", en: "Enterprise admins can set a network access policy for their team's Bots from the dashboard." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "A diktálás a rendszer nyelvét követi, és az Enter leállítja a felvételt.", en: "Dictation follows your system language, and Enter stops a recording." },
          { hu: "A Botod gépének frissítése vagy újra létrehozása elmagyarázza, hogy a fájlok és a belépések megmaradnak, a telepített appok és csomagok viszont eltávolításra kerülnek.", en: "Updating or recreating your Bot's computer explains that files and logins stay while installed apps and packages are removed." },
          { hu: "A Plugins a pluginjaiddal, kategóriaszűrőkkel és egy Team Plugins szakasszal nyílik meg.", en: "Plugins opens with your plugins, category filters, and a Team Plugins section." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A Files keresés megtalálja a fájlokat a Botod gépén, és a Search unavailable üzenetet mutatja, ha nem tud lefutni.", en: "Files search finds files on your Bot's computer, and says Search unavailable when it can't run." },
          { hu: "A Grok Bot alvás vagy megszakadt kapcsolat után újracsatlakozik a gépedhez, így a rajta végzett műveletek tovább működnek.", en: "Grok Bot reconnects to your computer after sleep or a dropped connection, so actions on it keep working." },
          { hu: "Ha lejár a bejelentkezésed, a Grok Bot újbóli bejelentkezésre kér.", en: "When your sign-in expires, Grok Bot asks you to sign in again." },
        ],
      },
    ],
  },
  {
    version: "0.20.0",
    date: "2026-08-14",
    title: { hu: "Diktálás, formázás és érthetőbb hibaüzenetek", en: "Dictation, formatting, and clearer errors" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "Nyomd meg vagy tartsd lenyomva a ⌘D billentyűt (Windowson és Linuxon a Ctrl+D-t), hogy az üzenetmezőbe diktálj, a Send message pedig azonnal elküldi az átiratot, amint kész.", en: "Press or hold ⌘D (Ctrl+D on Windows and Linux) to dictate into the message field, and Send message sends the transcript as soon as it's ready." },
          { hu: "Egy plugin alapértelmezett fiókját az Edit default account segítségével nevezheted át.", en: "Rename a plugin's default account with Edit default account." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "A Botod gépe kattintás, húzás és görgetés közben lenyomva tarthatja a Shift, a Ctrl, az Alt vagy a Command billentyűt.", en: "Your Bot's computer can hold Shift, Ctrl, Alt, or Command while it clicks, drags, and scrolls." },
          { hu: "Ha egy válasz meghiúsul, a Grok Bot közérthetően elmagyarázza, mi történt.", en: "When a reply fails, Grok Bot explains what happened in plain language." },
          { hu: "A Botod azonnal megszakítja, archiválja és visszaállítja az archívumból a Cloud Agenteket, amint kéred.", en: "Your Bot cancels, archives, and unarchives Cloud Agents as soon as you ask." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A válaszok megjelenítik az aláhúzott, alsó indexes, felső indexes és kiemelt formázást.", en: "Replies show underline, subscript, superscript, and highlight formatting." },
        ],
      },
    ],
  },
  {
    version: "0.19.0",
    date: "2026-08-14",
    title: { hu: "Manage Plan, görgetés és Botok elnevezése", en: "Manage Plan, scrolling, and Bot naming" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "A Settingsben van Manage Plan, amely a fiókod bővítési lehetőségeit mutatja.", en: "Settings has Manage Plan, showing the upgrade options for your account." },
          { hu: "Ha elfogy a csomagodban foglalt használat, Ultrára válthatsz, vagy összekapcsolhatsz egy SuperGrok Heavy-előfizetést.", en: "When your included usage runs out, you can upgrade to Ultra or link a SuperGrok Heavy subscription." },
          { hu: "Ha felfelé görgetsz, egy Scroll to bottom gomb jelenik meg az üzenetmező fölött.", en: "A Scroll to bottom button appears above the message field when you scroll up." },
          { hu: "A Settingsben a General → System alatt van Use hardware acceleration, amely Macen alapból be van kapcsolva, a Restart to Apply lehetőséggel.", en: "Settings has Use hardware acceleration under General → System, on by default on a Mac, with Restart to Apply." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "A Settings, a keresés és a megerősítések Agent helyett Botot írnak.", en: "Settings, search, and confirmations say Bot instead of Agent." },
          { hu: "Az üzenetmező a chat alján marad, akkor is, ha a chat üres.", en: "The message field stays at the bottom of the chat, even when the chat is empty." },
          { hu: "Egy gépfrissítést a Settingsből indíthatsz az Update Grok Bot's Computer segítségével.", en: "Start a computer update from Settings with Update Grok Bot's Computer." },
          { hu: "A géped parancsfuttatási kérései elrejtik a parancsot, amíg nem választod a Show the command lehetőséget.", en: "Requests to run a command on your computer hide the command until you choose Show the command." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "A Help Center a Grok Bot dokumentációját nyitja meg.", en: "Help Center opens the Grok Bot docs." },
          { hu: "A ⌘V beilleszt a Botod gépén lévő terminálba.", en: "⌘V pastes into a terminal on your Bot's computer." },
          { hu: "Az Allow, a Never és a Deny mostantól feloldja a géped parancsfuttatására vonatkozó, beragadt kérést.", en: "Allow, Never, and Deny now clear a stuck request to run commands on your computer." },
        ],
      },
    ],
  },
  {
    version: "0.18.0",
    date: "2026-08-12",
    title: { hu: "Cancel Trial a Usage & Billingben", en: "Cancel Trial in Usage & Billing" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { hu: "Az ingyenes próbaidőszakot a Usage & Billing Cancel Trial lehetőségével idő előtt befejezheted, ez eltávolítja a megmaradt próbakrediteket.", en: "You can end a free trial early with Cancel Trial in Usage & Billing, which removes any remaining trial credits." },
        ],
      },
    ],
  },
  {
    version: "0.17.0",
    date: "2026-08-12",
    title: { hu: "Több routine-indító és pull request-linkek", en: "More routine triggers and pull request links" },
    alsoIncludes: [],
    sections: [
      {
        kind: "new",
        items: [
          { label: "Teams", hu: "A self-serve csapatok Standard seattel rendelkező tagjai egy összekapcsolt SuperGrok Heavy-előfizetéssel használhatják a Grok Botot.", en: "Members with a Standard seat on a self-serve team can use Grok Bot through a linked SuperGrok Heavy subscription." },
        ],
      },
      {
        kind: "improved",
        items: [
          { hu: "A Botod olyan routine-okat hozhat létre, amelyek egy Microsoft Teams-üzenetre, egy Linear-issue-ra, egy Sentry-riasztásra vagy egy PagerDuty-incidensre indulnak.", en: "Your Bot can create routines that start from a Microsoft Teams message, a Linear issue, a Sentry alert, or a PagerDuty incident." },
          { hu: "Az Auto-review megkérdez, mielőtt a Botod olyan feladatot futtatna, amelyet nem kértél.", en: "Auto-review asks before your Bot runs a task you didn't ask for." },
          { hu: "A pull request-linkek ott nyílnak meg, ahol te vagy a csapatod választotta, vagy a GitHubon, ha egyikőtök sem választott.", en: "Pull request links open where you or your team chose, or on GitHub if neither has chosen." },
        ],
      },
      {
        kind: "fixed",
        items: [
          { hu: "Az oldalsáv fióksora megnyitja a fiókmenüt, a beállítás közben is.", en: "The account row in the sidebar opens the account menu, even during setup." },
          { hu: "A Botod nem mutatja tovább, hogy dolgozik, amint egy háttérfeladat befejeződik.", en: "Your Bot stops showing that it's working once a background task finishes." },
          { hu: "Az a connector, amely már nem válaszol, három perc után túllépi az időkorlátot, így a Botod folytathatja.", en: "A connector that stops responding times out after three minutes, so your Bot can carry on." },
          { hu: "Az Update Grok Bot's Computer befejeződik, és megtartja a fájljogosultságokat és a parancsikonokat.", en: "Update Grok Bot's Computer finishes and keeps file permissions and shortcuts." },
          { hu: "Ha alakot vagy színt választasz, a hozzáadott kép megmarad, amíg meg nem nyomod a Set avatar gombot.", en: "Choosing a shape or color keeps a picture you added until you press Set avatar." },
        ],
      },
    ],
  },
];

export function sectionHeading(kind: ChangelogSectionKind): string {
  switch (kind) {
    case "new":
      return "Új";
    case "improved":
      return "Fejlesztve";
    case "fixed":
      return "Javítva";
    default: {
      const unhandled: never = kind;
      throw new Error(`Ismeretlen changelog-szakasz: ${String(unhandled)}`);
    }
  }
}

const huMonths = [
  "január",
  "február",
  "március",
  "április",
  "május",
  "június",
  "július",
  "augusztus",
  "szeptember",
  "október",
  "november",
  "december",
];

/** "2026-10-22" → "2026. október 22." */
export function huDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return `${year}. ${huMonths[month - 1]} ${day}.`;
}

/** Helyi horgony ("0.75.2" → "v0-75-2"): a HTML-azonosítóban nem lehet pont. */
export function releaseAnchor(version: string): string {
  return `v${version.replace(/\./g, "-")}`;
}

/** Az eredeti bejegyzés: a forrás horgonya pontokkal ("#v0.75.2"). */
export function releaseSourceUrl(version: string): string {
  return `${changelogSourceUrl}#v${version}`;
}

export function formatAlsoIncludes(versions: string[]): string {
  if (versions.length < 2) return versions.join("");
  return `${versions.slice(0, -1).join(", ")} és ${versions[versions.length - 1]}`;
}

function escapeHtml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

const inlinePattern = /`([^`]+)`|\[([^\]]+)\]\((https:\/\/[^)\s]+)\)/g;

/** A tétel inline jelölése HTML-ként: `kód` → <code>, [szöveg](https://…) → <a>. Minden más escape-elve. */
export function inlineHtml(text: string): string {
  let html = "";
  let last = 0;
  for (const match of text.matchAll(inlinePattern)) {
    html += escapeHtml(text.slice(last, match.index));
    html += match[1] !== undefined ? `<code>${escapeHtml(match[1])}</code>` : `<a href="${escapeHtml(match[3])}">${escapeHtml(match[2])}</a>`;
    last = match.index + match[0].length;
  }
  return html + escapeHtml(text.slice(last));
}

/** Szöveges kimenethez (llms.txt): `kód` → kód, [szöveg](url) → szöveg (url). */
export function inlineText(text: string): string {
  return text.replace(inlinePattern, (_all, code, label, url) => (code !== undefined ? code : `${label} (${url})`));
}

function compareVersions(a: string, b: string): number {
  const pa = a.split(".").map(Number);
  const pb = b.split(".").map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i += 1) {
    const diff = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (diff) return diff;
  }
  return 0;
}

function validate(releases: ChangelogRelease[]): ChangelogRelease[] {
  const seen = new Set<string>();
  const sorted = [...releases].sort((a, b) => compareVersions(b.version, a.version));
  for (const [index, release] of sorted.entries()) {
    const where = `changelog.ts ${release.version}`;
    if (!/^\d+\.\d+\.\d+$/.test(release.version)) throw new Error(`${where}: hibás verzió`);
    if (seen.has(release.version)) throw new Error(`${where}: ismétlődő verzió`);
    seen.add(release.version);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(release.date) || Number.isNaN(Date.parse(release.date))) {
      throw new Error(`${where}: hibás dátum: ${release.date}`);
    }
    const older = sorted[index + 1];
    if (older && older.date > release.date) throw new Error(`${where}: korábbi dátum, mint a(z) ${older.version}`);
    if (!release.title.hu || !release.title.en) throw new Error(`${where}: hiányzó cím`);
    if (release.sections.length === 0) throw new Error(`${where}: nincs szakasz`);
    const kinds = release.sections.map((section) => section.kind);
    if (new Set(kinds).size !== kinds.length) throw new Error(`${where}: ismétlődő szakasz`);
    for (const section of release.sections) {
      if (section.items.length === 0) throw new Error(`${where}: üres szakasz: ${section.kind}`);
      for (const item of section.items) {
        if (!item.hu || !item.en) throw new Error(`${where}: hiányzó fordítás vagy eredeti szöveg`);
      }
    }
    for (const version of release.alsoIncludes) {
      if (!/^\d+\.\d+\.\d+$/.test(version)) throw new Error(`${where}: hibás „Also includes” verzió: ${version}`);
    }
  }
  return sorted;
}

/** Az összes kiadás, a legújabb elöl. */
export const changelogReleases = validate(changelog);
export const latestRelease = changelogReleases[0];
export const changelogItemCount = changelogReleases.reduce(
  (sum, release) => sum + release.sections.reduce((n, section) => n + section.items.length, 0),
  0,
);
