import type { APIRoute } from "astro";
import { days } from "../content/days";
import { worksheetMdPath, worksheetPath } from "../content/worksheets";
import { docs } from "../content/docs";
import { marketplaceBots, marketplaceFetched, marketplacePath } from "../content/marketplace";
import { budapestTime, communityTemplates, templatePath } from "../content/templates";
import { guides, guidesFetched, guidesIndexUrl, guideUrl, useCasesUrl } from "../content/guides";
import { advancedFetched, advancedGuides, advancedPath } from "../content/advanced";
import { absUrl, dayPath, siteConfig, siteOrigin } from "../lib/site";

export const GET: APIRoute = ({ site }) => {
  const origin = siteOrigin(site);
  const lines = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.tagline}. Független, nem hivatalos magyar útmutató. A Grok Bot-funkciókra vonatkozó állítások a hivatalos dokumentációra (docs.x.ai/grok-bot, cursor.com) hivatkoznak; a felhasználói tapasztalatok szerzővel és linkkel szerepelnek. A nem ellenőrzött állítás a honlapon [ELLENŐRIZENDŐ] jelölést kap.`,
    "",
    "A részletes kivonat: " + absUrl(origin, "/llms-full.txt"),
    "",
    "## Az 5 nap",
    "",
    ...days.map((day) => `- [${day.title}](${absUrl(origin, dayPath(day.slug))}): ${day.description} Feladat: ${day.task}`),
    "",
    "## Gyakorlólapok",
    "",
    ...days.map(
      (day) =>
        `- [${day.n}. nap gyakorlólap](${absUrl(origin, worksheetPath(day.slug))}) – Markdown: ${absUrl(origin, worksheetMdPath(day.slug))}`,
    ),
    "",
    "## Marketplace magyarul (nem hivatalos katalógus)",
    "",
    `A hivatalos Grok Bot Marketplace (https://x.ai/bot/marketplace) ${marketplaceBots.length} botja saját magyar összefoglalóval, lekérve: ${marketplaceFetched}. Nem állunk kapcsolatban a SpaceXSI-vel vagy a botok készítőivel.`,
    "",
    `- [Katalógus](${absUrl(origin, "/marketplace/")})`,
    ...marketplaceBots.map((bot) => `- [${bot.name}](${absUrl(origin, marketplacePath(bot.slug))}): ${bot.summaryHu} Forrás: ${bot.sourceUrl}`),
    "",
    "## Közösségi botsablonok (nem hivatalos gyűjtemény)",
    "",
    `Felhasználók által az X-en megosztott, x.ai/bot/… linkes sablonok saját magyar összefoglalóval. Nem állunk kapcsolatban a SpaceXSI-vel, az X-szel vagy a sablonok készítőivel.`,
    "",
    `- [Gyűjtemény](${absUrl(origin, "/sablonok/")})`,
    ...communityTemplates.map(
      (item) =>
        `- [${item.name}](${absUrl(origin, templatePath(item.slug))}): ${item.summaryHu} Készítő: ${item.handle}, ${budapestTime(item.postedAt)} (budapesti idő). Sablon: ${item.templateUrl} X-poszt: ${item.postUrl}`,
    ),
    "",
    "## Hivatalos Grok Bot útmutatók (nem hivatalos magyar összefoglalók)",
    "",
    `Az ${guidesIndexUrl} oldal ${guides.length} útmutatója saját rövid magyar összefoglalóval (nem fordítás), lekérve: ${guidesFetched}. Az oldal alján általános Grok-felhasználások (nem Grok Bot): ${useCasesUrl}`,
    "",
    `- [Útmutatók](${absUrl(origin, "/utmutatok/")})`,
    ...guides.map((g) => `- [${g.title}](${absUrl(origin, `/utmutatok/#${g.slug}`)}): ${g.summaryHu} Eredeti: ${guideUrl(g.slug)}`),
    "",
    "## Haladó útmutatók (a Botkezdő saját anyaga, nem hivatalos x.ai útmutató; a Kezdő 5 nap után)",
    "",
    `A Botkezdő saját magyar szövege, nem hivatalos x.ai anyag (a hivatalos útmutatók a fenti külön szakaszban). Források: az xAI-munkatársak útmutatói (gyártói forrás), közösségi X-cikkek és a docs.x.ai alapján, minden oldalon szerzővel, linkkel, dátummal és forrástípussal. Források lekérve: ${advancedFetched}.`,
    "",
    `- [Haladó útmutatók](${absUrl(origin, "/halado/")})`,
    ...advancedGuides.map((g) => `- [${g.title}](${absUrl(origin, advancedPath(g.slug))}): ${g.description} Források: ${g.sources.map((s) => s.url).join(", ")}`),
    "",
    "## Az oldal",
    "",
    `- [Kezdőlap](${absUrl(origin, "/")}): ${siteConfig.description}`,
    `- [Az 5 nap](${absUrl(origin, "/5-nap/")}): a kurzus áttekintése`,
    `- [Gyakorlólapok](${absUrl(origin, "/gyakorlolapok/")}): naponta egy nyomtatható lap kész promptokkal`,
    `- [Források és GYIK](${absUrl(origin, "/forrasok/")})`,
    `- [Rólunk](${absUrl(origin, "/rolunk/")})`,
    `- [Szponzoráció](${absUrl(origin, "/szponzoracio/")})`,
    `- [Hírlevél](${absUrl(origin, "/hirlevel/")}): dupla megerősítés, a szolgáltató még nincs bekötve`,
    `- [Impresszum](${absUrl(origin, "/impresszum/")})`,
    `- [Adatkezelési tájékoztató](${absUrl(origin, "/adatkezeles/")})`,
    "",
    "## Elsődleges források",
    "",
    `- [Get started](${docs.start})`,
    `- [Create and manage Bots](${docs.bots})`,
    `- [Skills and routines](${docs.skills})`,
    `- [Use the computer and apps](${docs.apps})`,
    `- [Approvals, security, and privacy](${docs.approve})`,
    `- [FAQ](${docs.faq})`,
    `- [Termékoldal](${docs.productCanonical})`,
    `- [Grok Bot GYIK (cursor.com)](${docs.faqCursor})`,
    `- [Changelog](${docs.changelog})`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
