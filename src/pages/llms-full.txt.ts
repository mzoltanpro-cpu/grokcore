import type { APIRoute } from "astro";
import { days } from "../content/days";
import { worksheetMdPath } from "../content/worksheets";
import { faq } from "../content/faq";
import { appName, categoryLabel, dayLabel, marketplaceBots, marketplaceFetched, marketplacePath, nonAffiliation } from "../content/marketplace";
import { budapestTime, communityTemplates, templateMissing, templateNonAffiliation, templatePath } from "../content/templates";
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

  parts.push(
    "## Marketplace magyarul (nem hivatalos katalógus)",
    "",
    `${nonAffiliation} Forrás: https://x.ai/bot/marketplace, lekérve: ${marketplaceFetched}. A magyar összefoglaló a sajátunk; a skill-, routine- és integrációnevek eredetiben.`,
    "",
  );
  for (const bot of marketplaceBots) {
    parts.push(
      `### ${bot.name}`,
      "",
      `Készítő: ${bot.author}. Kategória: ${bot.categories.map(categoryLabel).join(", ") || "–"}.`,
      `Leírás: ${bot.summaryHu}`,
      `Memória: ${bot.memory.count ? `${bot.memory.count} bejegyzés; témák: ${bot.memory.themes.map((t) => t.label).join("; ")}` : "A listing nem tartalmaz erről adatot."}`,
      `Skillek: ${bot.skills.map((s) => s.name).join(", ") || "A listing nem tartalmaz erről adatot."}`,
      `Rutinok: ${bot.routines.map((r) => (r.schedule.length ? `${r.name} (${r.schedule.join(", ")})` : r.name)).join("; ") || "A listing nem tartalmaz erről adatot."}`,
      `Integrációk: ${[...new Set(bot.integrations.map((i) => appName(i.name)))].join(", ") || "A listing nem tartalmaz erről adatot."}`,
      `Melyik naphoz illik: ${bot.days.map(dayLabel).join(", ") || "haladó, külön nem ajánljuk"}`,
      `Oldal: ${absUrl(origin, marketplacePath(bot.slug))}`,
      `Forrás: ${bot.sourceUrl} (lekérve: ${bot.fetched})`,
      "",
    );
  }

  parts.push(
    "## Közösségi botsablonok (nem hivatalos gyűjtemény)",
    "",
    `${templateNonAffiliation} Oldal: ${absUrl(origin, "/sablonok/")}`,
    "",
  );
  for (const item of communityTemplates) {
    parts.push(
      `### ${item.name}`,
      "",
      `Készítő: ${item.author} (${item.handle}).`,
      `Leírás: ${item.summaryHu}`,
      `Memória: ${item.memory.map((m) => m.labelHu).join("; ") || templateMissing}`,
      `Skillek: ${item.skills.map((s) => s.name).join(", ") || templateMissing}`,
      `Rutinok: ${item.routines.length ? `${item.routines.map((r) => r.labelHu).join("; ")} (a forrás nem nevez meg routine-t; név és ütemezés: ${templateMissing})` : templateMissing}`,
      `Integrációk: ${item.integrations.map((i) => i.name).join(", ") || templateMissing}`,
      `Oldal: ${absUrl(origin, templatePath(item.slug))}`,
      `Forrás: X-poszt ${item.postUrl} (${item.handle}, közzétéve ${budapestTime(item.postedAt)} budapesti idő szerint); sablon ${item.templateUrl}; lekérve: ${item.fetched}`,
      "",
    );
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
