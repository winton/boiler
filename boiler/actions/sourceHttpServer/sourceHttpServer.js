module.exports = (data) => {
  const routes = data.routes.map((route) => {
    return {
      type: "add",
      path: `src/routes/${route}.ts`,
      skipIfExists: true,
      templateFile: `actions/sourceHttpServer/routes/${route}.ts.hbs`,
    }
  })

  return routes.concat([
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
      type: "add",
      path: "src/routes/ok.ts",
      skipIfExists: true,
      templateFile: "actions/sourceHttpServer/routes/ok.ts.hbs",
    },
    {
      type: "addDevPackages",
      packages: ["@types/pino", "ts-node-dev"],
    },
    {
      type: "addPackages",
      packages: ["pino"].concat(
        data.routes.includes("bigquery") ?
          ["@google-cloud/bigquery", "bigquery-buffer"] :
          []
      ),
    },
    {
      type: "addScripts",
      scripts: {
        dev: "npx ts-node-dev --respawn --transpileOnly --notify false ./src/server",
        start: "node dist/server.js"
      }
    }
  ])
}
