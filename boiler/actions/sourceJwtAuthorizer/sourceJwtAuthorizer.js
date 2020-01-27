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
      "aws-sdk",
      "fs-extra",
      "jwt-ssm",
      "serverless",
      "serverless-offline"
    ],
  },
  {
    type: "addPackages",
    packages: [
      "cookie"
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
      deploy: "npm run release && npx sls deploy",
      offline: "npx sls offline",
      rotate: "jwt-ssm rotate",
      token: "jwt-ssm token"
    }
  }
])
