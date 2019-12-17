const path = require("path")
const { Groups } = require("../../dist/groups")

const { projects } = new Groups({
  projects: "projects/*.js",
}).build(path.join(__dirname, "../"))

function findProject() {
  for (const project in projects) {
    const p = projects[project]

    if (p.title === global.generatorTitle) {
      return p
    }
  }

  return { builds: [ "cjs" ] }
}

module.exports = {
  type: "checkbox",
  name: "tsBuilds",
  message: "typescript module generation",
  choices: [
    { name: "commonjs", value: "cjs" },
    { name: "es2015", value: "esm" }
  ],
  default: function () {
    return findProject().builds
  },
}
