module.exports = [
  {
    type: "add",
    path: "bin/build",
    skipIfExists: true,
    templateFile: "actions/buildSass/bin/build.hbs",
  },
  {
    type: "addDevPackages",
    packages: ["semver"],
  },
  {
    type: "addCommand",
    command: "chmod +x bin/build",
  },
  {
    type: "addScripts",
    scripts: {
      build: "./bin/build",
    }
  }
]
