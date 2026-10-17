import type { APIRoute } from "astro";
import { days } from "../content/days";
import { worksheetMdPath, worksheetPath } from "../content/worksheets";
import { docs } from "../content/docs";
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
