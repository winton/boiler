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
      "actions/sourceJwtAuthorizer",
      p
    ),
  }
})

module.exports = actions.concat([
  {
    type: "addDevPackages",
    packages: [
      "@types/aws-lambda",
      "@types/cookie",
      "@types/jsonwebtoken",
      "aws-sdk",
      "serverless",
      "serverless-offline",
      "ts-node"
    ],
  },
  {
    type: "addPackages",
    packages: [
      "cookie",
      "jsonwebtoken"
    ],
  },
  {
    type: "addCommand",
    command: "chmod +x bin/rotate",
  },
  {
    type: "addCommand",
    command: "chmod +x bin/token",
  },
  {
    type: "addScripts",
    scripts: {
      offline: "npx sls offline",
      token: "./bin/token"
    }
  }
])
