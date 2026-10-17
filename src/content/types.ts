export type Source = { title: string; url: string; kind?: "hivatalos" | "kozosseg" };

export type Step = { name: string; text: string };

export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; html: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "note"; html: string }
  | { type: "prompt"; label: string; code: string; caption?: string }
  | { type: "table"; caption: string; headers: string[]; rows: string[][] }
  | { type: "steps" }
  | { type: "done"; items: string[] };

export type Day = {
  n: number;
  slug: string;
  title: string;
  nav: string;
  card: string;
  description: string;
  lead: string;
  /** A nap egyetlen, egyértelmű feladata. */
  task: string;
  /** A tipikus buktató, forrással (HTML). */
  pitfall: string;
  steps: Step[];
  blocks: Block[];
  sources: Source[];
};

export type FaqItem = {
  question: string;
  answerHtml: string;
  answerText: string;
};

export type WorksheetPrompt = {
  /** Kinek a szövege: saját példánk, felhasználói idézet vagy hivatalos dokumentáció. */
  origin: "sajat" | "felhasznalo" | "hivatalos";
  label: string;
  code: string;
  /** Felhasználói idézetnél kötelező: @handle és link. */
  author?: string;
  url?: string;
};

export type Worksheet = {
  day: number;
  slug: string;
  title: string;
  intro: string;
  checklist: { heading: string; items: string[] }[];
  prompts: WorksheetPrompt[];
  troubleshooting: { problem: string; fix: string }[];
  sources: Source[];
};
