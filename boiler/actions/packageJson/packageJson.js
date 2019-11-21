module.exports = [
  {
    type: "addDevPackages",
    packages: ["husky", "lint-staged", "npm-check-updates", "ttab"],
  },
  {
    type: "add",
    path: "package.json",
    runLast: true,
    skipIfExists: true,
    templateFile: "actions/packageJson/package.json.hbs",
  },
  {
    type: "addScripts",
    scripts: {
      update: "ncu -u"
    }
  }
]
