import type { APIRoute } from "astro";
import { worksheetMarkdown, worksheets } from "../../content/worksheets";
import { siteOrigin } from "../../lib/site";

export function getStaticPaths() {
  return worksheets.map((sheet) => ({ params: { slug: sheet.slug } }));
}

export const GET: APIRoute = ({ params, site }) => {
  const sheet = worksheets.find((item) => item.slug === params.slug);
  if (!sheet) return new Response("Nincs ilyen gyakorlólap", { status: 404 });
  return new Response(worksheetMarkdown(sheet, siteOrigin(site)), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};
