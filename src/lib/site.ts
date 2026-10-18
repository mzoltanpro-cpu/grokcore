import { siteConfig } from "../../site.config.mjs";
import { days } from "../content/days";
import { marketplaceBots, marketplacePath } from "../content/marketplace";
import { communityTemplates, templatePath } from "../content/templates";

const providers = ["noop", "mailerlite", "brevo"] as const;
export type NewsletterProviderId = (typeof providers)[number];

function providerId(value: string): NewsletterProviderId {
  if ((providers as readonly string[]).includes(value)) return value as NewsletterProviderId;
  throw new Error(`Ismeretlen hírlevél-szolgáltató a site.config.mjs fájlban: ${value}`);
}

export const newsletter = {
  provider: providerId(siteConfig.newsletter.provider),
  formAction: siteConfig.newsletter.formAction.trim(),
  emailField: siteConfig.newsletter.emailField.trim() || "email",
};

/** Noop, üres vagy nem https cím: az űrlap nem továbbíthat. */
export function newsletterTransmits(): boolean {
  return newsletter.provider !== "noop" && newsletter.formAction.startsWith("https://");
}

export { siteConfig };

export function siteOrigin(site: URL | undefined): string {
  if (site) return site.origin;
  return new URL(siteConfig.defaultUrl).origin;
}

export function absUrl(origin: string, path: string): string {
  if (!path || path === "/") return `${origin}/`;
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  if (/\.[a-z0-9]+$/i.test(withSlash)) return `${origin}${withSlash}`;
  return `${origin}${withSlash.endsWith("/") ? withSlash : `${withSlash}/`}`;
}

export function dayPath(slug: string): string {
  return `/5-nap/${slug}/`;
}

export function indexablePaths(): string[] {
  return [
    "/",
    "/5-nap/",
    ...days.map((day) => dayPath(day.slug)),
    "/gyakorlolapok/",
    ...days.map((day) => `/gyakorlolapok/${day.slug}/`),
    "/marketplace/",
    ...marketplaceBots.map((bot) => marketplacePath(bot.slug)),
    "/sablonok/",
    ...communityTemplates.map((item) => templatePath(item.slug)),
    "/forrasok/",
    "/rolunk/",
    "/szponzoracio/",
    "/hirlevel/",
    "/impresszum/",
    "/adatkezeles/",
  ];
}

export const primaryNav = [
  { href: "/5-nap/", label: "Az 5 nap", id: "course" },
  { href: "/gyakorlolapok/", label: "Gyakorlólapok", id: "worksheets" },
  { href: "/marketplace/", label: "Marketplace", id: "marketplace" },
  { href: "/sablonok/", label: "Sablonok", id: "templates" },
  { href: "/forrasok/", label: "Források", id: "resources" },
  { href: "/rolunk/", label: "Rólunk", id: "about" },
  { href: "/szponzoracio/", label: "Szponzoráció", id: "sponsors" },
] as const;
