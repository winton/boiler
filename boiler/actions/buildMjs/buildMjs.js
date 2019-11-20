module.exports = [
  {
    type: "add",
    path: "bin/build",
    skipIfExists: true,
    templateFile: "actions/buildMjs/bin/build.hbs",
  },
  {
    type: "addCommand",
    command: "chmod +x bin/build",
  },
  {
    type: "addDevPackages",
    packages: ["rollup"],
  },
]
