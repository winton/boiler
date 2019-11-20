module.exports = [
  {
    type: "addDevPackages",
    packages: ["husky", "lint-staged", "npm-check-updates"],
  },
  {
    type: "add",
    path: "package.json",
    skipIfExists: true,
    templateFile: "actions/packageJson/package.json.hbs",
  },
]
