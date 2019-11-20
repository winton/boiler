module.exports = [
  {
    type: "add",
    path: "bin/build",
    skipIfExists: true,
    templateFile:
      "actions/buildWebComponents/bin/build.hbs",
  },
  {
    type: "addCommand",
    command: "chmod +x bin/build",
  },
  {
    type: "addPackages",
    packages: ["rollup"],
  },
]
