import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import jsdoc from "eslint-plugin-jsdoc";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";

export default [
  js.configs.recommended,
  jsdoc.configs["flat/recommended"],
  unicorn.configs["flat/recommended"],
  {
    ignores: ["www/**"],
  },
  {
    languageOptions: { globals: { ...globals.node } },
    rules: {
      "jsdoc/no-undefined-types": [1, { definedTypes: ["NodeJS"] }],
      "unicorn/filename-case": [
        "warn",
        {
          case: "kebabCase",
          ignore: ["eleventyComputed.js"],
        },
      ],
    },
  },
  {
    files: ["src/assets/**/*.js"],
    languageOptions: { globals: { ...globals.browser } },
  },
  {
    files: ["lib/serviceworker.js"],
    languageOptions: { globals: { ...globals.serviceworker } },
  },
  prettier,
];
