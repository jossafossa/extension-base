import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
import importPlugin from "eslint-plugin-import"; // Import the import plugin

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    // Add the import plugin to the plugins array
    plugins: {
      import: importPlugin,
    },
    rules: {
      // Configure the import/order rule for import sorting
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always", // Ensure a newline between import groups
          alphabetize: {
            order: "asc", // Sort imports alphabetically within each group
            caseInsensitive: true,
          },
        },
      ],
      // Disable the default ESLint sort-imports rule to avoid conflicts
      "sort-imports": "off",
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);
