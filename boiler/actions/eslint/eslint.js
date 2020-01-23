module.exports = (data) => {
  console.log(data)
  const concat = data.generators.indexOf("prettier") > -1 ?
    [
      {
        type: "addDevPackages",
        packages: [
          "eslint-config-prettier",
          "eslint-plugin-prettier"
        ],
      }
    ] : []
  
  return [
    {
      type: "add",
      path: ".eslintrc.json",
      skipIfExists: true,
      templateFile: "actions/eslint/.eslintrc.json",
    },
    {
      type: "addDevPackages",
      packages: [
        "eslint",
        "@typescript-eslint/eslint-plugin",
        "@typescript-eslint/parser",
      ],
    },
  ].concat(concat)
}
