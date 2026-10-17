export type Source = { title: string; url: string };

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
  steps: Step[];
  blocks: Block[];
  sources: Source[];
};

export type FaqItem = {
  question: string;
  answerHtml: string;
  answerText: string;
};
