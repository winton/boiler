const globby = require("globby")
const path = require("path")

const paths = globby.sync([
  path.join(__dirname, "**/*.hbs")
])

const actions = paths.map(function (p) {
  p = p.replace(__dirname + "/", "")

  return {
    type: "add",
    path: p.replace(/\.hbs$/, ""),
    skipIfExists: true,
    templateFile: path.join(
      "actions/sourceGraphqlServer",
      p
    ),
  }
})

module.exports = actions.concat([
  {
    type: "addDevPackages",
    packages: [
      "@types/aws-lambda",
      "apollo-server-express",
      "aws-sdk",
      "express",
      "serverless",
      "serverless-offline"
    ],
  },
  {
    type: "addPackages",
    packages: [
      "apollo-server-lambda",
      "nexus"
    ],
  },
  {
    type: "addScripts",
    scripts: {
      deploy: "npm run release && npx sls deploy",
      offline: "npx sls offline"
    }
  }
])
