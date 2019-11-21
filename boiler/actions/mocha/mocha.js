module.exports = [
  {
    type: "add",
    path: ".mocharc.json",
    skipIfExists: true,
    templateFile: "actions/mocha/mocharc.json",
  },
  {
    type: "add",
    path: "test/expect.ts",
    skipIfExists: true,
    templateFile: "actions/mocha/test/expect.ts.hbs",
  },
  {
    type: "addDevPackages",
    packages: [
      "@types/mocha",
      "expect",
      "mocha",
      "ts-node",
    ],
  },
  {
    type: "addScripts",
    scripts: {
      test: "mocha",
    }
  }
]
