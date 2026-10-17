import type { APIRoute } from "astro";
import { days } from "../content/days";
import { docs } from "../content/docs";
import { absUrl, dayPath, siteConfig, siteOrigin } from "../lib/site";

export const GET: APIRoute = ({ site }) => {
  const origin = siteOrigin(site);
  const lines = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.tagline}. Független, nem hivatalos magyar útmutató. Minden Grok Bot-állítás a hivatalos dokumentációra (docs.x.ai/grok-bot) hivatkozik. A nem ellenőrzött állítás a honlapon [ELLENŐRIZENDŐ] jelölést kap.`,
    "",
    "A részletes kivonat: " + absUrl(origin, "/llms-full.txt"),
    "",
    "## A 7 nap",
    "",
    ...days.map((day) => `- [${day.title}](${absUrl(origin, dayPath(day.slug))}): ${day.description}`),
    "",
    "## Az oldal",
    "",
    `- [Kezdőlap](${absUrl(origin, "/")}): ${siteConfig.description}`,
    `- [A 7 nap](${absUrl(origin, "/7-nap/")}): a kurzus áttekintése`,
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
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
