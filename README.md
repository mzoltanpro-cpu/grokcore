# Botkezdő

Független, nem hivatalos magyar útmutató az első saját Grok Botig. A termék a **Kezdő 5 nap**: öt rövid lecke, naponta egy feladattal és egy letölthető gyakorlólappal (`/gyakorlolapok/`, nyomtatható HTML és Markdown). A repó statikus oldalt ad; a `vercel.json` csak a régi `/7-nap/` útvonalak átirányítását tartalmazza.

Az oldal neve és a repó neve két dolog. A publikus név egy helyen cserélhető.

## Átnevezés

Nyisd meg a `site.config.mjs` fájlt, és írd át a `name` mezőt. A `courseName` a tananyag neve (`Kezdő 5 nap`), azt csak akkor módosítsd, ha a kurzust is átnevezed. A címkék, a lábléc és a séma innen olvasnak.

## Domain

A kanonikus cím a `PUBLIC_SITE_URL` környezeti változó. Helyben:

```bash
cp .env.example .env
```

A `.env` fájlban, záró perjel nélkül:

```bash
PUBLIC_SITE_URL=https://www.example.com
```

Amíg nincs saját domain, maradjon a `https://www.example.com` helyőrző. Domaint ebből a repóból ne vásárolj. Élesítéskor a tárhely build-környezetében állítsd be ugyanezt a változót, majd buildelj újra: a canonical, az Open Graph, a `sitemap.xml`, a `robots.txt` és az `llms.txt` ezt a címet kapja.

## Helyi futtatás

Node.js 22 kell.

```bash
npm install
npm run dev
```

A kész oldal:

```bash
npm run build
npm run preview
```

A build kimenete a `dist/` mappa. Telepített függőségen kívül nincs külső betű, szkript, cookie vagy követő.

## Hírlevél bekötése

A feliratkozás egy adapter mögött van. Alapból a szolgáltató `noop`: az űrlap nem `<form>` beküldés, nincs `fetch`, az e-mail-cím nem hagyja el a böngészőt.

Bekötés, ha már van jóváhagyott MailerLite- vagy Brevo-fiók, és a szolgáltatónál a dupla megerősítés be van kapcsolva:

1. A szolgáltató beágyazott űrlapjából másold ki a nyilvános űrlapcímet (https). API-kulcsot ne írj a repóba.
2. A `site.config.mjs` `newsletter` objektumában:
   - `provider`: `"mailerlite"` vagy `"brevo"`
   - `formAction`: a nyilvános űrlapcím
   - `emailField`: az űrlap e-mail mezőjének neve, ahogy a szolgáltató aktuális beágyazókódja kéri
3. `npm run build`, majd egy saját címmel próbáld ki. Levelet csak az üzemeltető jóváhagyásával küldj.

Üres `formAction` vagy `noop` mellett a build akkor sem továbbít, ha a másik mező ki van töltve. A mezőneveket a bekötés előtt ellenőrizd a szolgáltatónál: a pontos név változik, ezért nincs beégetve.

## Ellenőrzés

```bash
npm run build
npm run check
```

A `check` a legenerált HTML-t nézi: kötelező oldalak, belső linkek, egy `h1`, canonical, JSON-LD, a noop űrlap nem küld, HTML-lint, és hogy a forrásban nincs titok. A hivatalos külső linkek állapotát is lekéri. A 404 és a többi elérhetetlenség hibának számít. A 401, 403 és 429 nem: a GitHub-hosztolt futó IP-jét egyes oldalak (a grokbot.com botvédelme) elutasítják, miközben a link böngészőből él.

## Élesítés

Az Astro `output: 'static'`. A Vercel a repóból, külön adapter nélkül felismeri. A `vercel.json` csak átirányításokat tartalmaz (régi 7 napos útvonalak → 5 nap). Az impresszumban a tárhelyszolgáltató addig helyőrző, amíg a választás meg nem születik.

## Helyőrzők

Az impresszum és az adatkezelési tájékoztató nem tartalmaz kitalált üzemeltetői adatot. Ahol egy Grok Bot-állítás nem ellenőrizhető a nyilvános dokumentációból, a szövegben `[ELLENŐRIZENDŐ]` áll. A források a leckék alján és a Források oldalon vannak.
