module.exports = [
  {
    type: "add",
    path: "tsconfig-base.json",
    skipIfExists: true,
    templateFile: "actions/typescript/tsconfig-base.json",
  },
  {
    type: "add",
    path: "tsconfig.json",
    skipIfExists: true,
    templateFile: "actions/typescript/tsconfig.json",
  },
  {
    type: "add",
    path: "src/tsconfig.cjs.json",
    skipIfExists: true,
    templateFile:
      "actions/typescript/src/tsconfig.cjs.json",
  },
  {
    type: "add",
    path: "src/tsconfig.esm.json",
    skipIfExists: true,
    templateFile:
      "actions/typescript/src/tsconfig.esm.json",
  },
  {
    type: "addDevPackages",
    packages: ["@types/node", "typescript"],
  },
  {
    type: "addScripts",
    scripts: {
      watch: "ttab 'tsc -b -w'"
    }
  }
]
