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
  courseName: "Kezdő 5 nap",
  tagline: "Az első saját Grok Botod, napi egy rövid lépésben",
  description:
    "Magyar, lépésről lépésre útmutató a Grok Bothoz, öt napra bontva, letölthető gyakorlólapokkal. Forrásolt tartalom.",
  /**
   * Ideiglenes: az egész oldal noindex, nofollow (meta robots + X-Robots-Tag a
   * vercel.json-ban, a robots.txt-ből kimarad a Sitemap sor).
   * Töröld (vagy állítsd false-ra), amint az impresszumban a valós adatok vannak,
   * és vedd ki a vercel.json "headers" blokkját is.
   */
  noindex: true,
  locale: "hu_HU",
  lang: "hu",
  updated: "2026-10-17",
  defaultUrl: "https://grokcore.vercel.app",
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
