import type { NewsletterAdapter, NewsletterInput, NewsletterResult } from "./types";

export const NOOP_MESSAGE =
  "A hírlevél-szolgáltató még nincs bekötve. Az e-mail-címet nem küldtük el, és nem tároltuk sehol.";

/**
 * Alapértelmezett adapter. Szándékosan nincs benne fetch, beacon, kép vagy
 * bármilyen hálózat. Az e-mail paramétert nem olvassa és nem naplózza.
 */
export async function submitNoop(_input?: NewsletterInput): Promise<NewsletterResult> {
  return { ok: false, code: "disabled", message: NOOP_MESSAGE };
}

export const noopAdapter: NewsletterAdapter = {
  id: "noop",
  transmits: false,
  submit: submitNoop,
};
