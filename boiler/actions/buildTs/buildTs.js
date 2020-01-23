module.exports = (data) => {
  const concat = data.tsBuilds.indexOf("cjs") > -1 ?
    [
      {
        type: "add",
        path: "bin/build",
        skipIfExists: true,
        templateFile: "actions/buildTs/bin/buildCjs.hbs",
      }
    ] :
    [
      {
        type: "addDevPackages",
        packages: ["rollup"],
      },
      {
        type: "add",
        path: "bin/build",
        skipIfExists: true,
        templateFile: "actions/buildTs/bin/buildMjs.hbs",
      }
    ]
  
  return [
    {
      type: "addCommand",
      command: "chmod +x bin/build",
    },
    {
      type: "addScripts",
      scripts: {
        build: "./bin/build",
      }
    }
  ].concat(concat)
}
