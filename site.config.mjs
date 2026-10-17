/**
 * Botkezdő – az egyetlen hely, ahol az oldal nevét és a hírlevelet állítod.
 *
 * Átnevezés: a `name` mező. A domain NEM itt van, hanem a PUBLIC_SITE_URL
 * környezeti változóban (lásd .env.example). Üresen a helyőrző example.com marad.
 *
 * Hírlevél: alapból `noop`. Nem küld és nem tárol címet. Bekötés: README.md.
 * API-kulcsot ide ne írj. Csak a szolgáltató nyilvános űrlap-URL-je kerülhet ide,
 * és csak az üzemeltető jóváhagyása után.
 */
export const siteConfig = {
  name: "Botkezdő",
  courseName: "Kezdő 7 nap",
  tagline: "Az első saját Grok Botod, napi egy rövid lépésben",
  description:
    "Magyar, lépésről lépésre útmutató az első saját Grok Botig, hét napra bontva. Ellenőrzött, forrásolt tartalom.",
  locale: "hu_HU",
  lang: "hu",
  updated: "2026-10-17",
  defaultUrl: "https://www.example.com",
  themeStorageKey: "botkezdo-theme",
  newsletter: {
    /** @type {"noop" | "mailerlite" | "brevo"} */
    provider: "noop",
    /** Nyilvános űrlapvégpont (https). Üresen semmit nem küldünk. */
    formAction: "",
    /** A szolgáltató beágyazott űrlapjának e-mail mezőneve. Noopnál mindegy. */
    emailField: "email",
  },
};
