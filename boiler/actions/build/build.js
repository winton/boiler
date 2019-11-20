module.exports = [
  {
    type: "add",
    path: "bin/build",
    skipIfExists: true,
    templateFile: "actions/build/bin/build.hbs",
  },
  {
    type: "addCommand",
    command: "chmod +x bin/build",
  },
]
