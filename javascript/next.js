module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "jsx-a11y"],
  ignorePatterns: [
    ".eslintrc",
    "package.json",
    "public/**/*",
    "node_modules",
    ".next",
    "coverage",
  ],
  rules: {
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": 1,
    "react/require-default-props": 1,
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "react/forbid-prop-types": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.test.{js,jsx}",
          "**/*.spec.{js,jsx}",
          "**/setupTests.js",
        ],
      },
    ],
  },
};
