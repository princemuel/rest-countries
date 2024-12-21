// @ts-check
import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import globals from "globals";
import ts from "typescript-eslint";

import path from "node:path";
import { fileURLToPath } from "node:url";

import astro from "eslint-plugin-astro";
import prettier from "eslint-plugin-prettier/recommended";
import unicorn from "eslint-plugin-unicorn";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sharedGlobals = {
  ...globals.browser,
  ...globals.node,
  ...globals["shared-node-browser"],
};
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default ts.config(
  includeIgnoreFile(gitignorePath),
  js.configs.recommended,
  ts.configs.eslintRecommended,
  unicorn.configs["flat/all"],
  { rules: { "unicorn/prevent-abbreviations": "off" } },
  ts.configs.strictTypeChecked,
  ts.configs.stylisticTypeChecked,
  {
    files: ["**/*.ts", "**/*.js", "**/*.mjs", "**/*.cjs"],
    languageOptions: {
      globals: sharedGlobals,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["**/@types/*.d.ts"],
    extends: [ts.configs.disableTypeChecked],
    languageOptions: { parserOptions: { project: undefined } },
    rules: { "prettier/prettier": "off" },
  },
  astro.configs.all,
  astro.configs["jsx-a11y-strict"],
  {
    files: ["**/*.astro", "*.astro"],
    languageOptions: {
      parserOptions: {
        project: "tsconfig.json",
        extraFileExtensions: [".astro"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  // { files: ["**/*.d.ts"], extends: [ts.configs.disableTypeChecked] },
  prettier,
);
