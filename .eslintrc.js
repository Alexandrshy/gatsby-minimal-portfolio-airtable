module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    graphql: false,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
}
