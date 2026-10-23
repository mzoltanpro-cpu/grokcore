/** Nyilvános forrás-URL-ek. Állítást csak olyan oldalról vegyél át, amit megnyitottál. */
export const docs = {
  start: "https://docs.x.ai/grok-bot/get-started",
  bots: "https://docs.x.ai/grok-bot/bots",
  skills: "https://docs.x.ai/grok-bot/skills-routines-and-automations",
  apps: "https://docs.x.ai/grok-bot/computer-and-apps",
  files: "https://docs.x.ai/grok-bot/files-and-results",
  approve: "https://docs.x.ai/grok-bot/approvals-security-and-privacy",
  faq: "https://docs.x.ai/grok-bot/faq",
  mobile: "https://docs.x.ai/grok-bot/mobile",
  troubleshooting: "https://docs.x.ai/grok-bot/troubleshooting",
  settings: "https://docs.x.ai/grok-bot/settings-and-notifications",
  chat: "https://docs.x.ai/grok-bot/chat-and-collaboration",
  teamBots: "https://docs.x.ai/grok-bot/team-bots",
  teamsEnterprise: "https://docs.x.ai/grok-bot/teams-and-enterprises",
  overview: "https://docs.x.ai/grok-bot/overview",
  routinesHelp: "https://cursor.com/help/grok-bot/routines",
  modelsHelp: "https://cursor.com/help/grok-bot/models",
  xsPricing: "https://docs.x.ai/x-subscription/pricing",
  xsSpendingCaps: "https://docs.x.ai/x-subscription/spending-caps",
  xsExtraUsage: "https://docs.x.ai/x-subscription/extra-usage",
  xsGrokBot: "https://docs.x.ai/x-subscription/grok-bot",
  product: "https://grokbot.com",
  productCanonical: "https://x.ai/bot",
  plans: "https://cursor.com/help/grok-bot/plans",
  faqCursor: "https://cursor.com/help/grok-bot/faqs",
  startCursor: "https://cursor.com/docs/grok-bot/get-started.md",
  changelog: "https://x.ai/changelog/bot",
  pricing: "https://cursor.com/pricing",
  privacyCursor: "https://cursor.com/privacy",
  securityCursor: "https://cursor.com/security",
  naih: "https://www.naih.hu",
  naihOnline: "https://naih.hu/online-ugyinditas",
} as const;

export function marker(note = ""): string {
  const text = note ? `[ELLENŐRIZENDŐ: ${note}]` : "[ELLENŐRIZENDŐ]";
  return `<span class="marker">${text}</span>`;
}
