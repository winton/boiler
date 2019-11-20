const globby = require("globby")
const path = require("path")

const paths = globby.sync([
  path.join(__dirname, "**/*.hbs"),
])

const actions = paths.map(function (p) {
  p = p.replace(__dirname + "/", "")

  return {
    type: "add",
    path: p.replace(/\.hbs$/, ""),
    skipIfExists: true,
    templateFile: path.join(
      "actions/cloudflareWorkers",
      p
    ),
  }
})

module.exports = actions
