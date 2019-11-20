module.exports = [
  {
    type: "add",
    path: ".npmignore",
    skipIfExists: true,
    templateFile: "actions/npmIgnore/npmignore",
  },
]
