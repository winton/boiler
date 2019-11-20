module.exports = [
  {
    type: "add",
    path: ".eslintrc.json",
    skipIfExists: true,
    templateFile: "actions/eslint/.eslintrc.json",
  },
  {
    type: "addDevPackages",
    packages: [
      "eslint",
      "@typescript-eslint/eslint-plugin",
      "@typescript-eslint/parser",
    ],
  },
]
