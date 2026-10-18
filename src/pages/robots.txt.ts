import type { APIRoute } from "astro";
import { absUrl, siteConfig, siteOrigin } from "../lib/site";

export const GET: APIRoute = ({ site }) => {
  const origin = siteOrigin(site);
  // Noindex alatt engedő marad (hogy a robotok lássák a noindexet), de Sitemap nélkül.
  const sitemap = siteConfig.noindex ? "" : `\nSitemap: ${absUrl(origin, "/sitemap.xml")}\n`;
  const body = `User-agent: *\nAllow: /\n${sitemap}`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
