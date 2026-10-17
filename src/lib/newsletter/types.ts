export type NewsletterInput = {
  email: string;
  consent: boolean;
};

export type NewsletterResult = {
  ok: boolean;
  code: "disabled" | "consent" | "unconfigured" | "accepted";
  message: string;
};

export type NewsletterAdapter = {
  id: "noop" | "mailerlite" | "brevo";
  /** Ha false, a submit nem kezdeményezhet hálózati kérést. */
  transmits: boolean;
  submit: (input: NewsletterInput) => Promise<NewsletterResult>;
};
