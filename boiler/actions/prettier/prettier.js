module.exports = [
  {
    type: "add",
    path: ".prettierrc",
    skipIfExists: true,
    templateFile: "actions/prettier/.prettierrc",
  },
  {
    type: "addDevPackages",
    packages: [
      "eslint-config-prettier",
      "eslint-plugin-prettier",
      "prettier",
    ],
  },
]
