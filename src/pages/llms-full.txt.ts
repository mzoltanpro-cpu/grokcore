import type { APIRoute } from "astro";
import { days } from "../content/days";
import { worksheetMdPath } from "../content/worksheets";
import { faq } from "../content/faq";
import { absUrl, dayPath, siteConfig, siteOrigin } from "../lib/site";

export const GET: APIRoute = ({ site }) => {
  const origin = siteOrigin(site);
  const parts: string[] = [
    `# ${siteConfig.name} – teljes kivonat`,
    "",
    `${siteConfig.tagline}.`,
    "",
    "Független, nem hivatalos magyar útmutató. Ez a kivonat a honlap saját szövege. Ahol a honlap [ELLENŐRIZENDŐ] jelölést használ, azt a lap szövegében kell olvasni; a jelölés hiánya ebben a kivonatban nem jelent megerősített adatot.",
    "",
    `Utolsó frissítés: ${siteConfig.updated}.`,
    "",
  ];

  for (const day of days) {
    parts.push(
      `## ${day.title}`,
      "",
      day.lead,
      "",
      `A mai feladat: ${day.task}`,
      "",
      `Tipikus buktató: ${day.pitfall.replace(/<[^>]+>/g, "")}`,
      "",
      `Oldal: ${absUrl(origin, dayPath(day.slug))}`,
      `Gyakorlólap (Markdown): ${absUrl(origin, worksheetMdPath(day.slug))}`,
      "",
    );
    day.steps.forEach((step, index) => {
      parts.push(`${index + 1}. ${step.name}. ${step.text}`);
    });
    parts.push("", "Források:");
    for (const source of day.sources) parts.push(`- ${source.title}: ${source.url}`);
    parts.push("");
  }

  parts.push("## Gyakori kérdések", "");
  for (const item of faq) {
    parts.push(`### ${item.question}`, "", item.answerText, "");
  }

  parts.push(
    "## Hírlevél",
    "",
    "A feliratkozás a honlap része, nem külön termék. A szolgáltató nincs bekötve: az űrlap nem továbbít és nem tárol e-mail-címet. Bekötés után dupla megerősítés, külön hozzájáruló négyzet, leiratkozás minden levél alján.",
    "",
    "## Üzemeltető",
    "",
    "Az impresszum és az adatkezelési tájékoztató helyőrzőket tartalmaz. Nevet, címet, adószámot és e-mail-címet ez a kivonat sem talál ki.",
    "",
  );

  return new Response(parts.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
