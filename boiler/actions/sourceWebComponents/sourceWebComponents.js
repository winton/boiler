const globby = require("globby")
const path = require("path")

const paths = globby.sync(path.join(__dirname, "**/*.hbs"))

module.exports = paths.map(function(p) {
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
