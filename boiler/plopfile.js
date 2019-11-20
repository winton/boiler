const { Plopfile } = require("../dist/plopfile")

module.exports = function(plop) {
  const plopfile = new Plopfile(plop)
  const groups = plopfile.groups()

  plopfile.addDefaultActionTypes()
  plopfile.addGenerators(groups, groups.projects)
  plopfile.addGenerators(groups, groups.generators)
}
