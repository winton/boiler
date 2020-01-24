module.exports = [
  {
    type: "add",
    path: "src/index.ts",
    skipIfExists: true,
    templateFile: "actions/sourceHttpLambda/index.ts.hbs",
  },
  {
    type: "add",
    path: "serverless.yml",
    skipIfExists: true,
    templateFile: "actions/sourceHttpLambda/serverless.yml.hbs",
  },
  {
    type: "addDevPackages",
    packages: [
      "@types/aws-lambda",
      "serverless",
      "serverless-offline",
    ],
  },
  {
    type: "addScripts",
    scripts: {
      deploy: "npm run release && npx sls deploy",
      offline: "npx sls offline",
    }
  }
]
