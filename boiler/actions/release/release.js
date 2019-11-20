module.exports = [
  {
    type: "add",
    path: "bin/release",
    skipIfExists: true,
    templateFile: "actions/release/bin/release.hbs",
  },
  {
    type: "addPackages",
    packages: ["release-it", "semver"],
  },
  {
    type: "addCommand",
    command: "chmod +x bin/release",
  },
]
