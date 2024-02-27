module.exports = {
  root: true,
  extends: "@react-native-community",
  // Add any project-specific rules here
  rules: {
    "no-use-before-define": "warn",
    "react-hooks/rules-of-hooks": "error",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-var": "error",
    "prettier/prettier": "error",
    camelcase: ["error", { properties: "always" }],
    "prefer-destructuring": ["warn", { object: true, array: false }],
  },
};
