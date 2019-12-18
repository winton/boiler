module.exports = [
  {
    type: "add",
    path: "src/index.ts",
    skipIfExists: true,
    templateFile: "actions/sourceHttpServer/index.ts.hbs",
  },
  {
    type: "add",
    path: "src/server.ts",
    skipIfExists: true,
    templateFile: "actions/sourceHttpServer/server.ts.hbs",
  },
  {
    type: "addDevPackages",
    packages: ["@types/pino", "ts-node-dev"],
  },
  {
    type: "addPackages",
    packages: ["pino"],
  },
  {
    type: "addScripts",
    scripts: {
      dev: "npx ts-node-dev --respawn --transpileOnly --notify false ./src/server",
      start: "node dist/server.js"
    }
  }
]
