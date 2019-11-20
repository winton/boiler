module.exports = [
  {
    type: "add",
    path: ".prettierrc",
    skipIfExists: true,
    templateFile: "actions/prettier/.prettierrc",
  },
  {
    type: "addPackages",
    packages: [
      "eslint-config-prettier",
      "eslint-plugin-prettier",
      "prettier",
    ],
  },
]
