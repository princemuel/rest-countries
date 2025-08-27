// @ts-check
import vercel from "@astrojs/vercel";
import css from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig, fontProviders } from "astro/config";
import { loadEnv } from "vite";

import sitemap from "@astrojs/sitemap";

const mode = process.env.NODE_ENV ?? "production";
const envVars = loadEnv(mode, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  output: "static",
  srcDir: "./app",
  site: envVars.PUBLIC_SITE_URL,
  env: { validateSecrets: true, schema: {} },
  adapter: vercel(),
  experimental: {
    // clientPrerender: true,
    // liveContentCollections: true,
    csp: envVars.NODE_ENV !== "development",
    contentIntellisense: true,
    preserveScriptOrder: true,
    fonts: [
      {
        name: "Nunito Sans",
        provider: fontProviders.google(),
        cssVariable: "--font-family-sans",
        subsets: ["latin"],
        fallbacks: [
          "ui-sans-serif",
          "system-ui",
          "apple-system",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    ],
    staticImportMetaEnv: true,
    chromeDevtoolsWorkspace: true,
  },
  integrations: [
    icon({ iconDir: "app/assets/icons", svgoOptions: { multipass: true } }),
    sitemap(),
  ],
  image: {
    layout: "constrained",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        // port: "",
        pathname: "w*/**", // allow /w320/... or other sizes
      },
      {
        protocol: "https",
        hostname: "mainfacts.com",
        // port: "",
        pathname: "media/images/coats_of_arms/*", // allow coat of arms images
      },
    ],
  },
  vite: {
    //@ts-expect-error
    plugins: [css()],
    define: { __BUILD_DATE__: JSON.stringify(new Date()) },
  },
});
