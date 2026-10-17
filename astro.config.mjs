import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import { siteConfig } from "./site.config.mjs";

const fileEnv = loadEnv(process.env.NODE_ENV ?? "production", process.cwd(), "");
const site = (process.env.PUBLIC_SITE_URL || fileEnv.PUBLIC_SITE_URL || siteConfig.defaultUrl).replace(
  /\/+$/,
  "",
);

export default defineConfig({
  site,
  output: "static",
  trailingSlash: "always",
});
