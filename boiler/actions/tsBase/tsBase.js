const globby = require("globby")
const path = require("path")

const paths = globby.sync([
  path.join(__dirname, "**/*.hbs"),
  path.join(__dirname, "**/*.json")
])

const actions = paths.map(function (p) {
  p = p.replace(__dirname + "/", "")

  return {
    type: "add",
    path: p.replace(/\.hbs$/, ""),
    skipIfExists: true,
    templateFile: path.join(
      "actions/tsBase",
      p
    ),
  }
})

module.exports = actions.concat([
  {
    type: "addDevPackages",
    packages: ["@types/node", "typescript"],
  },
  {
    type: "addScripts",
    scripts: {
      watch: "tsc -b -w"
    }
  }
])
