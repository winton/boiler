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
      "prettier",
    ],
  },
]
