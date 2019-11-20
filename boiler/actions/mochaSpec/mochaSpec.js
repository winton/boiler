module.exports = [
  {
    type: "add",
    path: "test/{{lib}}.spec.ts",
    skipIfExists: true,
    templateFile: "actions/mochaSpec/spec.ts.hbs",
  },
]
