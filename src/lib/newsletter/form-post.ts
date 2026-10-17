import type { NewsletterAdapter, NewsletterResult } from "./types";

/**
 * Későbbi bekötés MailerLite-hoz vagy Brevohoz.
 * Nem hív API-t és nem tárol kulcsot. Ha a site.config.mjs-ben a provider nem
 * noop ÉS a formAction https URL, az űrlap natívan, a böngészőből POSTol
 * erre a nyilvános űrlapcímre. A dupla megerősítést a szolgáltatónál kell
 * bekapcsolni. Üres címnél ez a függvény semmit nem küld.
 */
export function createFormPostAdapter(opts: {
  id: "mailerlite" | "brevo";
  action: string;
}): NewsletterAdapter {
  const action = opts.action.trim();
  const transmits = action.startsWith("https://");
  return {
    id: opts.id,
    transmits,
    async submit(): Promise<NewsletterResult> {
      if (!transmits) {
        return {
          ok: false,
          code: "unconfigured",
          message:
            "A szolgáltató ki van választva, de nincs érvényes https űrlapcím. Az e-mail-címet nem küldtük el.",
        };
      }
      return {
        ok: true,
        code: "accepted",
        message: "Az űrlap a szolgáltató címére küldi a feliratkozást. Erősítsd meg a postafiókodban.",
      };
    },
  };
}
