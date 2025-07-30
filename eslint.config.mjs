import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
import cssReorder from "eslint-plugin-css-reorder"; 
import perfectionist from "eslint-plugin-perfectionist";
import pluginPrettier from 'eslint-plugin-prettier';

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
      perfectionist.configs['recommended-natural'],
      
    ],
    plugins: {
      "css-reorder": cssReorder,
      prettier: pluginPrettier, 
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);
