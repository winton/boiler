const path = require("path")
const { Groups } = require("../../dist/groups")

const { generators, projects } = new Groups({
  generators: "generators/*.js",
  projects: "projects/*.js",
}).build(path.join(__dirname, "../"))

const choices = Object.keys(generators).reduce(function(
  memo,
  generator
) {
  return memo.concat({
    name: generators[generator].title,
    value: generator,
  })
},
[])

function findProject() {
  for (const project in projects) {
    const p = projects[project]

    if (p.title === global.generatorTitle) {
      return p
    }
  }

  return { generators: [] }
}

module.exports = {
  type: "checkbox",
  name: "generators",
  message: "generators",
  choices: choices,
  default: function() {
    return findProject().generators
  },
}
