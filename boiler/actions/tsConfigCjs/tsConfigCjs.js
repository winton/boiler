module.exports = (data) => {
  return data.tsBuilds.indexOf("cjs") > -1 ? [
    {
      type: "add",
      path: "src/tsconfig.cjs.json",
      skipIfExists: true,
      templateFile:
        "actions/tsConfigCjs/src/tsconfig.cjs.json.hbs",
    }
  ] : []
}
