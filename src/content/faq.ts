import { docs, marker } from "./docs";
import type { FaqItem } from "./types";

const pricingHtml = `A dokumentáció szerint a Grok Bot minden fizetős egyéni Cursor-csomaggal és a Cursor Teams csomaggal jár, és összeköthető egyéni SuperGrok, SuperGrok Plus vagy SuperGrok Heavy előfizetéssel. A használat és a számlázás a fióktól és a csomagtól függ; a leírás heti keretet említ, és azt, hogy a jogosult fiókok igény szerinti használatot adhatnak hozzá. Ha Cursor- és SuperGrok-előfizetésed is van, a Grok Bot azt használja, amelyiknek több a kerete. (<a href="${docs.faq}">FAQ</a>, <a href="${docs.start}">Get started</a>) A termékoldalon 2026-10-17-én ezek a havi dollárárak látszottak: Premium 30 USD, Super 100 USD, Ultra 200 USD, és a szöveg szerint a Grok Bot benne van az arra jogosult Premium, Super, Ultra, Teams és Enterprise csomagban. A forintár, az ÁFA és a két leírás pontos megfeleltetése: ${marker("forintár, ÁFA, csomagok megfeleltetése")}. (<a href="${docs.productCanonical}">x.ai/bot</a>)`;

const pricingText =
  "A dokumentáció szerint a Grok Bot minden fizetős egyéni Cursor-csomaggal és a Cursor Teams csomaggal jár, és összeköthető egyéni SuperGrok, SuperGrok Plus vagy SuperGrok Heavy előfizetéssel. A termékoldalon 2026-10-17-én Premium 30 USD/hó, Super 100 USD/hó és Ultra 200 USD/hó szerepelt. A forintár, az ÁFA és a két leírás pontos megfeleltetése [ELLENŐRIZENDŐ].";

export const faq: FaqItem[] = [
  {
    question: "Mi az a Grok Bot, egy mondatban?",
    answerHtml: `A termékoldal szerint olyan AI-csapattársak, akiknek valódi munkát adhatsz: bejelentkezhetnek az eszközeidbe, és kész munkával jöhetnek vissza. A dokumentáció szerint a Bot tartós csapattárs, névvel, feladattal, saját beszélgetéssel és idővel épülő munkakontextussal. (<a href="${docs.product}">grokbot.com</a>, <a href="${docs.bots}">Create and manage Bots</a>)`,
    answerText:
      "A termékoldal szerint olyan AI-csapattársak, akiknek valódi munkát adhatsz. A dokumentáció szerint a Bot tartós csapattárs, névvel, feladattal, saját beszélgetéssel és idővel épülő munkakontextussal.",
  },
  {
    question: "Miben más, mint egy chatasszisztens?",
    answerHtml: `A GYIK szerint a Botok állandó felhős gépet, csatolt eszközöket, weboldalakat és fájlokat használhatnak, tehát nem csak kérdésekre válaszolnak. Dolgozhatnak a háttérben, szerepenkénti kontextust tarthatnak, és egyeztethetnek más Botokkal. (<a href="${docs.faq}">FAQ</a>)`,
    answerText:
      "A GYIK szerint a Botok állandó felhős gépet, csatolt eszközöket, weboldalakat és fájlokat használhatnak, dolgozhatnak a háttérben, és egyeztethetnek más Botokkal.",
  },
  {
    question: "Hol tudom használni?",
    answerHtml: `Desktop app macOS-en, Windowson és Linuxon, valamint kísérő app iOS-en és Androidon. A támogatott verziók a GYIK szerint: macOS Apple silicon és Intel; Windows x64 és Arm64; Linux x64 és Arm64 <code>.deb</code>, <code>.rpm</code> vagy AppImage formában; iPhone iOS 18 vagy újabb; iPad iPadOS 18 vagy újabb; Android 9 vagy újabb. A bejelentkezett eszközök között a Botok és a beszélgetések szinkronban vannak. (<a href="${docs.faq}">FAQ</a>, <a href="${docs.start}">Get started</a>)`,
    answerText:
      "Desktop app macOS-en, Windowson és Linuxon, valamint kísérő app iOS-en és Androidon. A GYIK iOS 18-at, iPadOS 18-at és Android 9-et vagy újabbat ír.",
  },
  {
    question: "Kell hozzá előfizetés, és mennyibe kerül?",
    answerHtml: pricingHtml,
    answerText: pricingText,
  },
  {
    question: "Közös gépet használnak a Botok?",
    answerHtml: `Igen. A fiókod minden Botja egy állandó felhős gépet használ: fájlok, böngészős munkamenetek és belépések közösek, hogy átadhassák a munkát. A gép felhasználónként van kiosztva, Botonként nem. A külön Bot nem biztonsági határ. Minden Bot saját képernyőt kap; egy Bot a saját képernyőjén egyszerre egy computer-use feladatot futtat. (<a href="${docs.faq}">FAQ</a>, <a href="${docs.apps}">Use the computer and apps</a>)`,
    answerText:
      "Igen. A fiók minden Botja egy állandó felhős gépet használ, közös fájlokkal és belépésekkel. A külön Bot nem biztonsági határ.",
  },
  {
    question: "Dolgozik tovább, ha becsukom a laptopot?",
    answerHtml: `Igen. A munka a felhős gépen fut. Az app, a laptop vagy a telefon becsukása nem állít le egy háttérben futó kört vagy routine-t. (<a href="${docs.faq}">FAQ</a>)`,
    answerText:
      "Igen. A munka a felhős gépen fut. Az app, a laptop vagy a telefon becsukása nem állít le egy háttérben futó kört vagy routine-t.",
  },
  {
    question: "Mi a különbség a skill és a routine között?",
    answerHtml: `A skill azt írja le, hogyan kell elvégezni egy feladatot. A routine egy Bothoz rendeli a munkafolyamatot, és megmondja, mikor fusson: ütemezve, vagy ahol támogatott, egy esemény után. Előbb a skillt próbáld ki egy egyszeri feladaton. (<a href="${docs.faq}">FAQ</a>, <a href="${docs.skills}">Skills and routines</a>)`,
    answerText:
      "A skill azt írja le, hogyan kell elvégezni egy feladatot. A routine azt mondja meg egy Botnak, mikor futtassa a munkafolyamatot.",
  },
  {
    question: "Mikor kér jóváhagyást?",
    answerHtml: `A GYIK szerint ez az eszköztől, a lépés kockázatától és az Auto Review szabályaidtól függ, ha a kikényszerítés be van kapcsolva. Az érzékeny vagy következménnyel járó lépés megállhat jóváhagyásra. A jelszó, a kétfaktoros kód, a CAPTCHA és a hasonló, csak ember által végezhető lépés a gép átvételével (takeover) megy. Az állandó határt a Bot leírásába érdemes tenni, és szűk Ask first szabályt felvenni küldés, publikálás, törlés, vásárlás vagy éles módosítás elé. (<a href="${docs.faq}">FAQ</a>, <a href="${docs.approve}">Approvals</a>)`,
    answerText:
      "Az eszköztől, a kockázattól és az Auto Review szabályoktól függ. A jelszó és a CAPTCHA a gép átvételével megy. Az állandó határ a Bot leírásába való.",
  },
  {
    question: "Magyar nyelvű a Grok Bot felülete?",
    answerHtml: `A dokumentáció szerint a Settingsben van Language választó. Desktopon a lista tartalmazza a Follow System lehetőséget és több mint 20 nyelvet. iPhoneon és Androidon a rendszerkövető felirat System, és a lista rövidebb. Azt, hogy a magyar szerepel-e, a nyilvános oldal nem sorolja fel. ${marker("szerepel-e a magyar a nyelvválasztóban")}. (<a href="${docs.faq}">FAQ</a>)`,
    answerText:
      "A Settingsben van Language választó, desktopon Follow System és több mint 20 nyelv. Azt, hogy a magyar szerepel-e, a nyilvános oldal nem sorolja fel. [ELLENŐRIZENDŐ].",
  },
  {
    question: "Mi történik, ha törlök egy Botot?",
    answerHtml: `A törlés eltávolítja a Bot aktív profilját, beszélgetését és routine-jait. Mivel a Botok közös gépet használnak, a gépen lévő fájlok és belépések megmaradhatnak. A háttértár megőrzése a vonatkozó Cursor-feltételeket követi. Ha a munkára később szükség lehet, a dokumentáció a törlés helyett az elrejtést javasolja. Az elrejtés nem szünetelteti a Botot vagy a routine-jait. (<a href="${docs.faq}">FAQ</a>, <a href="${docs.bots}">Create and manage Bots</a>)`,
    answerText:
      "A törlés eltávolítja a profilt, a beszélgetést és a routine-okat. A közös gép fájljai és belépései megmaradhatnak. Ha később kell a munka, a dokumentáció az elrejtést javasolja.",
  },
  {
    question: "Ez az oldal hivatalos?",
    answerHtml:
      "Nem. A Botkezdő független, nem hivatalos magyar útmutató. A Grok Bot név és védjegy a jogosultjáé. Az oldal nem áll kapcsolatban a termék készítőjével, és nem a hivatalos dokumentáció helyett, hanem mellé készült.",
    answerText:
      "Nem. A Botkezdő független, nem hivatalos magyar útmutató. A Grok Bot név a jogosultjáé, az oldal nem áll kapcsolatban a termék készítőjével.",
  },
  {
    question: "Használ az oldal cookie-t vagy követőt?",
    answerHtml:
      "Nem. Nincs cookie, nincs analitika, nincs külső betű vagy külső szkript. A téma választását a böngésződ helyi tárolója (localStorage, botkezdo-theme kulcs) őrizheti, és ez nem megy el sehova. A hírlevél űrlapja addig nem továbbít e-mail-címet, amíg nincs bekötött szolgáltató.",
    answerText:
      "Nem. Nincs cookie, analitika, külső betű vagy külső szkript. A témaválasztás csak a böngésző helyi tárolójában lehet, és nem megy el sehova.",
  },
];
