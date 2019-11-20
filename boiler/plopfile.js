const { Plopfile } = require("../dist/plopfile")

module.exports = function(plop) {
  const plopfile = new Plopfile(plop)

  const groups = plopfile.groups({
    globs: {
      actions: "actions/*/*.js",
      generators: "generators/*.js",
      projects: "projects/*.js",
      prompts: "prompts/*.js",
    },
    source: __dirname
  })

  plopfile.addDefaultActionTypes()
  plopfile.addGenerators(groups, groups.projects)
  plopfile.addGenerators(groups, groups.generators)
}
