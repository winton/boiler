module.exports = [
  {
    type: "add",
    path: "bin/release",
    skipIfExists: true,
    templateFile: "actions/releaseUpload/bin/release.hbs",
  },
  {
    type: "add",
    path: "bin/upload",
    skipIfExists: true,
    templateFile: "actions/releaseUpload/bin/upload.hbs",
  },
  {
    type: "addDevPackages",
    packages: ["release-it", "semver"],
  },
  {
    type: "addCommand",
    command: "chmod +x bin/release",
  },
  {
    type: "addCommand",
    command: "chmod +x bin/upload",
  },
]
