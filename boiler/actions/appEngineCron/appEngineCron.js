module.exports = [
  {
    type: "add",
    path: "cron.yaml",
    skipIfExists: true,
    templateFile: "actions/appEngineCron/cron.hbs",
  },
  {
    type: "addScripts",
    scripts: {
      deployCron: "gcloud app deploy cron.yaml"
    }
  }
]
