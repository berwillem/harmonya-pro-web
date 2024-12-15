import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // Rule : `.tsx` filenames to start with a capital letter
      "filename-rules/capitalized-tsx": [
        "error",
        {
          extensions: [".tsx"],
          case: "PascalCase",
        },
      ],

      // Rule : Enforce consistent component naming (PascalCase)
      "react/jsx-pascal-case": "error",

      // Rule : Enforce a maximum line length of 100 characters
      "max-len": ["warn", { code: 100 }],

      // Rule : Disallow `console.log` in production
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  }
);
