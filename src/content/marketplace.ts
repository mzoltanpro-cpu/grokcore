import raw from "./marketplace-bots.json";
import { days } from "./days";

/**
 * Magyar Marketplace-katalógus. Az adat egyetlen forrása a src/content/marketplace-bots.json,
 * amelyet a scripts/import-marketplace.mjs állít elő a COO munkaterület bots.json fájljából.
 * Kézzel ne szerkeszd: futtasd újra az importot.
 */
export type MarketplaceBot = {
  slug: string;
  name: string;
  author: string;
  categories: string[];
  categoriesHu: string[];
  featured: boolean;
  summaryHu: string;
  forWhomHu: string | null;
  days: number[];
  descriptionQuote: string;
  memory: { count: number; themes: { id: string; label: string }[]; quote: string };
  skills: { name: string; quote: string }[];
  routines: { name: string; quote: string; schedule: string[] }[];
  integrations: { name: string; status: string; quote: string }[];
  sourceUrl: string;
  updatedAt: string | null;
  fetched: string;
};

export const marketplaceBots = raw as MarketplaceBot[];
export const marketplaceFetched = "2026-10-17";
export const marketplaceOfficialUrl = "https://x.ai/bot/marketplace";
export const brandGuidelinesUrl = "https://x.ai/legal/brand-guidelines";

/** Néhány app kisbetűs azonosítóval szerepel a listingben; a szűrő és a címke egységes nevet kap. */
const appNames: Record<string, string> = {
  slack: "Slack",
  "notion-workspace": "Notion",
  linear: "Linear",
  hex: "Hex",
  figma: "Figma",
  datadog: "Datadog",
  sentry: "Sentry",
};
export function appName(name: string): string {
  return appNames[name] ?? name;
}
export function appKey(name: string): string {
  return appName(name)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const categoryOrder = [
  "From Grok Bot Team",
  "Engineering",
  "Sales",
  "Marketing",
  "Design",
  "Personal",
  "Recruiting & People",
  "Product",
  "Operations",
] as const;
const categoryHu: Record<string, string> = {
  "From Grok Bot Team": "A Grok Bot csapattól",
  Engineering: "Fejlesztés",
  Sales: "Értékesítés",
  Marketing: "Marketing",
  Design: "Design",
  Personal: "Személyes",
  "Recruiting & People": "Toborzás és HR",
  Product: "Termék",
  Operations: "Működés (Operations)",
};
export function categoryLabel(category: string): string {
  return categoryHu[category] ?? category;
}
export function categoryKey(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function marketplacePath(slug?: string): string {
  return slug ? `/marketplace/${slug}/` : "/marketplace/";
}

export function botsForDay(n: number): MarketplaceBot[] {
  return marketplaceBots.filter((bot) => bot.days.includes(n));
}

export const beginnerBots = marketplaceBots
  .filter((bot) => bot.days.length > 0)
  .sort((a, b) => a.days[0] - b.days[0] || a.name.localeCompare(b.name, "en"));

export function dayLabel(n: number): string {
  const day = days.find((item) => item.n === n);
  return day ? `${n}. nap: ${day.nav}` : `${n}. nap`;
}

export function categoryCounts(): { category: string; count: number }[] {
  return categoryOrder.map((category) => ({
    category,
    count: marketplaceBots.filter((bot) => bot.categories.includes(category)).length,
  }));
}

export function allApps(): { key: string; name: string; count: number }[] {
  const map = new Map<string, { key: string; name: string; count: number }>();
  for (const bot of marketplaceBots) {
    const seen = new Set<string>();
    for (const integration of bot.integrations) {
      const key = appKey(integration.name);
      if (seen.has(key)) continue;
      seen.add(key);
      const entry = map.get(key) ?? { key, name: appName(integration.name), count: 0 };
      entry.count += 1;
      map.set(key, entry);
    }
  }
  return [...map.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, "en"));
}

export const nonAffiliation =
  "Ez a Botkezdő saját, nem hivatalos magyar összefoglalója. Nem állunk kapcsolatban a SpaceXSI-vel, az X-szel vagy a botok készítőivel, és ők nem támogatják ezt az oldalt. A botok neve és eredeti leírása a készítőké; a pontos, aktuális adat mindig a hivatalos Marketplace-oldalon van.";
