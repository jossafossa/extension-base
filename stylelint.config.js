/** @type {import('stylelint').Config} */
export default { 
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-rational-order',
    'stylelint-config-prettier', 
  ],
  plugins: [
    'stylelint-order',
  ],
  rules: {
    "selector-max-id": 0, // Disallow IDs in selectors (good practice)
    "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$", // Enforce camelCase for classes
    "block-opening-brace-space-before": "always", // Enforce space before {
    "declaration-block-single-line-max-declarations": 1, // Max one declaration per line
    "no-empty-source": null, // Allow empty files (sometimes useful during development)
    "color-hex-alpha": "never", // Disallow hex with alpha (prefer rgba/hsla)
    "font-family-no-missing-generic-family-keyword": true, // Ensure a generic font family is always present
  },
};