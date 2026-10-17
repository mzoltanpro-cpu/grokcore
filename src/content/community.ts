/**
 * Közösségi (nem hivatalos) források a Kezdő 5 naphoz.
 * Csak olyan bejegyzés kerülhet ide, amelyet a GrokCore kutatás ténylegesen látott
 * (lásd az 5 napos terv forráslistáját). Az idézetek szó szerintiek, eredeti nyelven.
 * Ezek felhasználói tapasztalatok, nem hivatalos állítások.
 */
export const community = {
  kial: { handle: "@kial", date: "2026-10-15", url: "https://x.com/i/status/2110628933339430942" },
  alyce: { handle: "@alyce_ge", date: "2026-09-01", url: "https://x.com/i/status/2094785085413138433" },
  redditBlocked: {
    handle: "r/GrokBot: Blocked access to GrokBot",
    date: "",
    url: "https://www.reddit.com/r/GrokBot/comments/1wb6bf8/blocked_access_to_grokbot/",
  },
  changelog: { handle: "Grok Bot changelog", date: "2026-09-22", url: "https://x.ai/changelog/bot" },
  poteto: { handle: "@poteto", date: "2026-10-07", url: "https://x.com/i/status/2107830403549831186" },
  texas: { handle: "@Texas_Twins_Dad", date: "2026-09-17", url: "https://x.com/i/status/2100403828210200827" },
  cursorForum1p: {
    handle: "Cursor fórum: Grok Bot won't login to Google account using 1Password",
    date: "",
    url: "https://forum.cursor.com/t/grok-bot-wont-login-to-google-account-using-1password/173423",
  },
  binbin: { handle: "@ai_binbin", date: "2026-10-16", url: "https://x.com/i/status/2110939351228244411" },
  offred: { handle: "@OffredPosts", date: "2026-09-03", url: "https://x.com/i/status/2095381620198871194" },
  lizhenrong: { handle: "@LiZhenrong82556", date: "2026-10-14", url: "https://x.com/i/status/2110512224653734363" },
  emanuele: { handle: "@emanueledpt", date: "2026-08-22", url: "https://x.com/i/status/2091232992454664656" },
  rachit: { handle: "@Rachitjoshi12", date: "2026-09-10", url: "https://x.com/i/status/2098137296017232308" },
  gannotti: { handle: "@MichaelGannotti", date: "2026-10-04", url: "https://x.com/i/status/2106748588202095019" },
  gusmacca: { handle: "@gusmacca", date: "2026-08-24", url: "https://x.com/i/status/2091682185782915245" },
  redditUnresponsive: {
    handle: "r/GrokBot: My Grok Bot is unresponsive",
    date: "",
    url: "https://www.reddit.com/r/GrokBot/comments/1wo9y6c/my_grok_bot_is_unresponsive/",
  },
  mana: { handle: "@ManaEngineer", date: "2026-09-20", url: "https://x.com/i/status/2101761600227086337" },
  dhivagar: { handle: "@dhivagar", date: "2026-08-29", url: "https://x.com/i/status/2093568280065945789" },
  debs: { handle: "@debs_obrien", date: "2026-10-14", url: "https://x.com/debs_obrien/status/2110477175069798427" },
  xdeep: { handle: "@XDeepFreeze", date: "2026-10-14", url: "https://x.com/XDeepFreeze/status/2110484786330337359" },
  fenech: { handle: "@Michael_Fenech_", date: "2026-10-02", url: "https://x.com/Michael_Fenech_/status/2106037490578518128" },
  cyb3r: { handle: "@Cyb3rCricket", date: "2026-10-13", url: "https://x.com/Cyb3rCricket/status/2110121951175852534" },
  pgenius: { handle: "@PGeniusAI", date: "2026-09-14", url: "https://x.com/i/status/2099469701076173192" },
} as const;

export type CommunityKey = keyof typeof community;

/** Inline hivatkozás egy közösségi forrásra: „@handle, dátum” linkkel. */
export function cite(key: CommunityKey): string {
  const item = community[key];
  return `<a href="${item.url}">${item.handle}${item.date ? `, ${item.date}` : ""}</a>`;
}

export function communitySource(key: CommunityKey, note: string) {
  const item = community[key];
  return { title: `${item.handle}${item.date ? ` (${item.date})` : ""} – ${note}`, url: item.url, kind: "kozosseg" as const };
}
