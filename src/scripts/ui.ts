import { siteConfig } from "../../site.config.mjs";
import { submitNoop } from "../lib/newsletter/noop";

function currentTheme(): "light" | "dark" {
  const explicit = document.documentElement.getAttribute("data-theme");
  if (explicit === "light" || explicit === "dark") return explicit;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function initTheme(): void {
  const button = document.querySelector<HTMLButtonElement>("[data-theme-toggle]");
  const label = button?.querySelector<HTMLElement>("[data-theme-label]");
  if (!button || !label) return;

  const paint = (theme: "light" | "dark", persist: boolean) => {
    document.documentElement.setAttribute("data-theme", theme);
    const dark = theme === "dark";
    button.setAttribute("aria-pressed", dark ? "true" : "false");
    label.textContent = dark ? "Világos téma" : "Sötét téma";
    button.setAttribute("aria-label", dark ? "Váltás világos témára" : "Váltás sötét témára");
    if (!persist) return;
    try {
      localStorage.setItem(siteConfig.themeStorageKey, theme);
    } catch {
      /* a privát mód nem írja a helyi tárolót; a téma a lap bezárásáig megmarad */
    }
  };

  const explicit = document.documentElement.getAttribute("data-theme");
  if (explicit === "light" || explicit === "dark") paint(explicit, false);
  else {
    const dark = currentTheme() === "dark";
    button.setAttribute("aria-pressed", dark ? "true" : "false");
    label.textContent = dark ? "Világos téma" : "Sötét téma";
    button.setAttribute("aria-label", dark ? "Váltás világos témára" : "Váltás sötét témára");
  }
  button.addEventListener("click", () => {
    paint(currentTheme() === "dark" ? "light" : "dark", true);
  });
}

function fieldMessage(root: ParentNode): string {
  const email = root.querySelector<HTMLInputElement>("input[type=email]");
  const consent = root.querySelector<HTMLInputElement>("input[type=checkbox]");
  if (!email || !consent) return "";

  email.setCustomValidity("");
  const emailOk = email.checkValidity();
  if (!email.value.trim()) email.setCustomValidity("Add meg az e-mail-címed.");
  else if (!emailOk) email.setCustomValidity("Érvényes e-mail-címet adj meg.");
  consent.setCustomValidity(consent.checked ? "" : "A feliratkozáshoz külön, bejelölt hozzájárulás kell.");

  email.setAttribute("aria-invalid", email.validationMessage ? "true" : "false");
  consent.setAttribute("aria-invalid", consent.validationMessage ? "true" : "false");
  return email.validationMessage || consent.validationMessage;
}

function initNewsletter(): void {
  document.querySelectorAll<HTMLElement>("[data-newsletter]").forEach((root) => {
    const status = root.querySelector<HTMLElement>("[data-newsletter-status]");
    const showDisabled = async () => {
      const problem = fieldMessage(root);
      if (problem) {
        if (status) status.textContent = problem;
        if (root instanceof HTMLFormElement) root.reportValidity();
        return;
      }
      const result = await submitNoop();
      if (status) status.textContent = result.message;
    };

    if (root instanceof HTMLFormElement) {
      root.addEventListener("submit", async (event) => {
        const provider = root.getAttribute("data-newsletter-provider");
        const action = root.getAttribute("action") ?? "";
        const transmits = provider !== "noop" && action.startsWith("https://");
        if (!transmits || fieldMessage(root)) {
          event.preventDefault();
          await showDisabled();
        }
      });
      return;
    }

    root.querySelector<HTMLButtonElement>("[data-newsletter-submit]")?.addEventListener("click", () => {
      void showDisabled();
    });
    root.querySelector<HTMLInputElement>("input[type=email]")?.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        void showDisabled();
      }
    });
  });
}

function initProgress(): void {
  const current = document.querySelector<HTMLElement>(".progress [aria-current='step']");
  if (!current) return;
  current.scrollIntoView({ inline: "center", block: "nearest" });
}

export function initPage(): void {
  initTheme();
  initNewsletter();
  initProgress();
}
