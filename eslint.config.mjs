import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";
import ts from "typescript";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: { ts },
    extends: ["ts/recommended"],
  },
  tseslint.configs.recommended,
]);
