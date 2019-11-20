const globby = require("globby")
const path = require("path")

const paths = globby.sync([
  path.join(__dirname, "**/*.hbs"),
  path.join(__dirname, "assets/**")
])

const actions = paths.map(function(p) {
  p = p.replace(__dirname + "/", "")

  return {
    type: "add",
    path: p.replace(/\.hbs$/, ""),
    skipIfExists: true,
    templateFile: path.join(
      "actions/sourceWebComponents",
      p
    ),
  }
})

module.exports = actions.concat([
  {
    type: "addDevPackages",
    packages: ["@fn2/dev-server"],
  }, {
    type: "addPackages",
    packages: [
      "@fn2/cors-worker",
      "@fn2/loaded",
      "@fn2/logger",
      "@fn2/patch",
      "@fn2/render",
      "@fn2/router",
      "@fn2/ssr",
      "@fn2/tiny-id",
      "globby",
      "undom"
    ],
  }
])
