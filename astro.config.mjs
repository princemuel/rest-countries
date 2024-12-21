// @ts-check
import css from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

import vercel from "@astrojs/vercel";

const mode = process.env.NODE_ENV ?? "production";
const envVars = loadEnv(mode, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  output: "static",
  srcDir: "./app",
  site: envVars.PUBLIC_SITE_URL ?? "",
  env: { validateSecrets: true, schema: {} },
  adapter: vercel(),
  experimental: {
    svg: { mode: "sprite" },
    responsiveImages: true,
    contentIntellisense: true,
  },
  image: {
    experimentalLayout: "responsive",
    remotePatterns: [
      { protocol: "https", hostname: "**.unsplash.com" },
      // { protocol: "https", hostname: "**.github.com" },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "princemuel/metadata/main/assets/*", // Use regex for all files in "assets"
      },
    ],
  },
  vite: {
    plugins: [css()],
    define: { __BUILD_DATE__: JSON.stringify(new Date()) },
  },
});
