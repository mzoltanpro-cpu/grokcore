import type { APIRoute } from "astro";
import { absUrl, siteOrigin } from "../lib/site";

export const GET: APIRoute = ({ site }) => {
  const origin = siteOrigin(site);
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${absUrl(origin, "/sitemap.xml")}\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
