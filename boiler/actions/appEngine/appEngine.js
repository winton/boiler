module.exports = [
  {
    type: "add",
    path: "app.yaml",
    skipIfExists: true,
    templateFile: "actions/appEngine/app.hbs",
  },
  {
    type: "add",
    path: "app.prod.yaml",
    skipIfExists: true,
    templateFile: "actions/appEngine/app.prod.hbs",
  },
  {
    type: "add",
    path: "Dockerfile",
    skipIfExists: true,
    templateFile: "actions/appEngine/Dockerfile",
  },
  {
    type: "addScripts",
    scripts: {
      deploy: "npm run release && gcloud app deploy --verbosity=info"
    }
  }
]
