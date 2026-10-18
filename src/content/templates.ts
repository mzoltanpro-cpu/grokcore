import raw from "./community-templates.json";

/**
 * Közösségi botsablonok: X-en megosztott, x.ai/bot/… linkes sablonok saját magyar összefoglalóval.
 * Az adat egyetlen forrása a src/content/community-templates.json. Új sablon = új elem a tömbben.
 *
 * Szabály: csak az kerülhet a JSON-ba, amit a forrás (az X-poszt vagy a sablon x.ai lapja)
 * ténylegesen kimond. Ami nincs benne, az üres tömb marad, és az oldal a hiányjelölést mutatja.
 * A "from" mező jelzi, honnan való az adat: "post" (X-poszt) vagy "template" (x.ai sablonlap).
 */
type From = "post" | "template";

export type CommunityTemplate = {
  slug: string;
  name: string;
  author: string;
  handle: string;
  postUrl: string;
  /** UTC ISO időbélyeg, az oldal budapesti időre váltja. */
  postedAt: string;
  templateUrl: string;
  /** Olvasható volt-e a sablon x.ai lapja a lekéréskor. */
  templatePageReadable: boolean;
  fetched: string;
  summaryHu: string;
  postQuote: string;
  templateQuote: string;
  memory: { labelHu: string; quote: string; from: From }[];
  skills: { name: string; quote: string; from: From }[];
  routines: { labelHu: string; quote: string; from: From }[];
  integrations: { name: string; quote: string; from: From }[];
  /** Hol bukkantunk rá (pl. egy válogatás vagy szál); nem forrás, csak jelzés. */
  discoveredVia?: { labelHu: string; url: string }[];
  /** Hasonló témájú, de más hivatalos Marketplace-bot. */
  relatedMarketplace?: { slug: string; name: string; noteHu: string }[];
};

export const communityTemplates = raw as CommunityTemplate[];

/** Ugyanaz a hiányjelölés, mint a Marketplace bot-oldalain. */
export const templateMissing = "A listing nem tartalmaz erről adatot.";

export const templateNonAffiliation =
  "Ez a Botkezdő saját, nem hivatalos magyar összefoglalója. Nem állunk kapcsolatban az x.ai-t üzemeltető SpaceXSI-vel, az X-szel vagy a sablonok készítőivel, és ők nem támogatják ezt az oldalt. A sablonok neve és eredeti leírása a készítőké; a pontos, aktuális adat mindig az eredeti sablonlinken van.";

export function templatePath(slug: string): string {
  return `/sablonok/${slug}/`;
}

/** „2026-10-17 21:57” formában, Europe/Budapest időzónában. */
export function budapestTime(iso: string): string {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Budapest",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date(iso));
  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? "";
  return `${get("year")}-${get("month")}-${get("day")} ${get("hour")}:${get("minute")}`;
}

export function fromLabel(from: From): string {
  return from === "post" ? "az X-poszt szerint" : "a sablon x.ai lapja szerint";
}
