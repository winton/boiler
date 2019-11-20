module.exports = [
  {
    type: "add",
    path: ".gitignore",
    skipIfExists: true,
    templateFile: "actions/gitIgnore/gitignore",
  },
]
