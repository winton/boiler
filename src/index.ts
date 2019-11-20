import nodePlop, { NodePlopAPI } from "node-plop"
import path from "path"

export class Boiler {
  plop: NodePlopAPI

  constructor({
    force = false,
    boiler = path.join(__dirname, "../boiler"),
    root = process.cwd(),
  }: {
    force?: boolean
    boiler?: string
    root?: string
  } = {}) {
    this.plop = nodePlop(path.join(boiler, "plopfile.js"), {
      destBasePath: root,
      force,
    })
  }

  async run(): Promise<void> {
    const generators = this.plop.getGeneratorList()

    const name = await this.chooseOptionFromList(
      generators,
      "Please choose a generator."
    )

    const generator = this.plop.getGenerator(name) as any

    if (name.indexOf("📂") > -1) {
      global["generatorTitle"] = name
    }

    const answers = await generator.runPrompts()
    await generator.runActions(answers)
  }

  async chooseOptionFromList(
    plopList,
    message
  ): Promise<any> {
    const plop = nodePlop(undefined)
    const generator = plop.setGenerator("choose", {
      description: "",
      actions: [],
      prompts: [
        {
          type: "list",
          name: "generator",
          message: message,
          choices: plopList.map(function(p) {
            return {
              name: p.name,
              value: p.name,
            }
          }),
        },
      ],
    }) as any

    const results = await generator.runPrompts()
    return results.generator
  }
}
