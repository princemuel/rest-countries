/// <reference types="vite-plugin-pwa/vanillajs" />
/// <reference types="vite-plugin-pwa/info" />
/// <reference types="vite-plugin-pwa/pwa-assets" />

interface ImportMetaEnv {
  [key: string]: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  theme: { updatePicker(theme?: string): void };
}

interface globalThis {
  __singletons: Map<string, unknown>;
}

declare const __BUILD_DATE__: string;
