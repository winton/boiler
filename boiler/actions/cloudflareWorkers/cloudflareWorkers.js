const globby = require("globby")
const path = require("path")

const paths = globby.sync([
  path.join(__dirname, "**/*.hbs"),
])

const actions = paths.map(function (p) {
  p = p.replace(__dirname + "/", "")

  return {
    type: "add",
    path: p.replace(/\.hbs$/, ""),
    skipIfExists: true,
    templateFile: path.join(
      "actions/cloudflareWorkers",
      p
    ),
  }
})

module.exports = actions.concat([
  {
    type: "addPackages",
    packages: [ "@fn2/cors-worker" ],
  },
  {
    type: "addScripts",
    scripts: {
      deploy: "npm run release && wrangler publish --env server",
      "deploy:assets": "wrangler publish --env assets",
    }
  }
])
