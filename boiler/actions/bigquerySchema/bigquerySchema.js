module.exports = [
  {
    type: "add",
    path: "bin/build",
    skipIfExists: true,
    templateFile: "actions/bigquerySchema/bin/build.hbs",
  },
  {
    type: "add",
    path: "bin/deploy",
    skipIfExists: true,
    templateFile: "actions/bigquerySchema/bin/deploy.hbs",
  },
  {
    type: "add",
    path: "bin/schema",
    skipIfExists: true,
    templateFile: "actions/bigquerySchema/bin/schema.hbs",
  },
  {
    type: "add",
    path: "src/index.ts",
    skipIfExists: true,
    templateFile: "actions/bigquerySchema/src/index.hbs",
  },
  {
    type: "add",
    path: "src/{{table}}.ts",
    skipIfExists: true,
    templateFile: "actions/bigquerySchema/src/table.hbs",
  },
  {
    type: "add",
    path: "README.md",
    skipIfExists: true,
    templateFile: "actions/bigquerySchema/README.hbs",
  },
  {
    type: "addCommand",
    command: "chmod +x bin/build",
  },
  {
    type: "addCommand",
    command: "chmod +x bin/deploy",
  },
  {
    type: "addCommand",
    command: "chmod +x bin/schema",
  },
  {
    type: "addPackages",
    packages: ["generate-schema"],
  },
  {
    type: "addScripts",
    scripts: {
      build: "./bin/build",
      deploy: "./bin/deploy",
      schema: "./bin/schema",
    }
  }
]
