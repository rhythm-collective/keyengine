module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    "react-app",
    "plugin:prettier/recommended"
  ],
  plugins: ["@typescript-eslint", "react"],
  rules: {
    "@typescript-eslint/no-angle-bracket-type-assertion": 0,
    "@typescript-eslint/no-explicit-any": 0
  }
};
