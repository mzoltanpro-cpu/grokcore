import { siteConfig } from "./site";

export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function organizationNode(origin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${origin}/#organization`,
    name: siteConfig.name,
    url: `${origin}/`,
    description:
      "Független, nem hivatalos magyar útmutató a Grok Bothoz. Az üzemeltető jogi adatai az impresszumban még helyőrzők.",
  };
}

export function websiteNode(origin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${origin}/#website`,
    name: siteConfig.name,
    url: `${origin}/`,
    inLanguage: "hu",
    description: siteConfig.description,
    publisher: { "@id": `${origin}/#organization` },
  };
}

export function breadcrumbNode(origin: string, items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? `${origin}/` : `${origin}${item.path}`,
    })),
  };
}
