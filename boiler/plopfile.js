const { Groups } = require("../dist/groups")
const { Plopfile } = require("../dist/plopfile")

module.exports = function(plop) {
  const groups = new Groups().build()
  const plopfile = new Plopfile(plop)

  plopfile.addActionTypes()
  plopfile.addGenerators(groups, groups.projects)
  plopfile.addGenerators(groups, groups.generators)
}
