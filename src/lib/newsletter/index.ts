import { newsletter, newsletterTransmits } from "../site";
import { createFormPostAdapter } from "./form-post";
import { noopAdapter } from "./noop";
import type { NewsletterAdapter } from "./types";

/** A site.config.mjs provider mezője választ. Alapból a noop, hálózat nélkül. */
export function getNewsletterAdapter(): NewsletterAdapter {
  if (!newsletterTransmits()) return noopAdapter;
  if (newsletter.provider === "mailerlite" || newsletter.provider === "brevo") {
    return createFormPostAdapter({ id: newsletter.provider, action: newsletter.formAction });
  }
  return noopAdapter;
}
