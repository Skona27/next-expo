const { resolve } = require("path");

module.exports = {
  settings: {
    react: {
      version: "detect"
    }
  },
  ignorePatterns: [".next/", "node_modules/"],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: resolve(__dirname, "./tsconfig.json")
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    // duplicated with eslint:recommended
    "no-unused-vars": "off",
    "react/prop-types": "disable"
  }
};
