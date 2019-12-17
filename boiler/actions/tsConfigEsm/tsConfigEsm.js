module.exports = (data) => {
  return data.tsBuilds.indexOf("esm") > -1 ? [
    {
      type: "add",
      path: "src/tsconfig.esm.json",
      skipIfExists: true,
      templateFile:
        "actions/tsConfigEsm/src/tsconfig.esm.json",
    }
  ] : []
}
