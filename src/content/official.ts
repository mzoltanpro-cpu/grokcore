import raw from "./official-templates.json";

/**
 * Hivatalos x.ai sablonok: az x.ai hivatalos sablonoldalának (https://x.ai/bot/use-cases) 56 kártyája,
 * saját magyar összefoglalóval. Az adat egyetlen forrása a src/content/official-templates.json.
 *
 * Szabály: a magyar összefoglaló csak a hivatalos angol leírásból készül, semmit nem teszünk hozzá.
 * A telepítő link (installUrl) a kártya „Add to Grok Bot” gombjának valódi href-je; ha nincs, null,
 * és az oldal „Telepítő link: hiányzik” jelölést mutat. URL-t soha nem találunk ki.
 */
export type OfficialTemplate = {
  slug: string;
  name: string;
  /** Az x.ai eredeti kategórianeve (angol). */
  category: string;
  installUrl: string | null;
  /** A sablonlapon látható készítő („by …”). */
  pageAuthor: string;
  descriptionQuote: string;
  summaryHu: string;
  sourceUrl: string;
  fetched: string;
  /** Azonos nevű vagy hasonló témájú, de más Marketplace-bot. */
  relatedMarketplace?: { slug: string; name: string; noteHu: string }[];
};

export const officialTemplates = raw as OfficialTemplate[];

export const officialSourceUrl = "https://x.ai/bot/use-cases";
export const officialFetched = "2026-10-19";
export const installMissing = "Telepítő link: hiányzik";

/** Az x.ai oldal kategóriái, az ott látható sorrendben, magyar címkével. */
export const officialCategories = [
  { category: "General", hu: "Általános" },
  { category: "Sales", hu: "Értékesítés" },
  { category: "Marketing", hu: "Marketing" },
  { category: "Customer Success & Support", hu: "Ügyfélsiker és támogatás" },
  { category: "Recruiting & People", hu: "Toborzás és HR" },
  { category: "Operations & Finance", hu: "Működés és pénzügy" },
  { category: "Product", hu: "Termék" },
  { category: "Engineering", hu: "Fejlesztés" },
  { category: "Life & Leverage", hu: "Magánélet és hatékonyság" },
] as const;

export function officialCategoryLabel(category: string): string {
  return officialCategories.find((item) => item.category === category)?.hu ?? category;
}

export function officialCategoryKey(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function officialAnchor(slug: string): string {
  return `/hivatalos-sablonok/#${slug}`;
}

export function officialByCategory(): { category: string; hu: string; items: OfficialTemplate[] }[] {
  return officialCategories.map((cat) => ({
    category: cat.category,
    hu: cat.hu,
    items: officialTemplates.filter((item) => item.category === cat.category),
  }));
}
