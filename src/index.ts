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
    generators,
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
          choices: generators.map(function(generator) {
            return {
              name: generator.name,
              value: generator.name,
            }
          }),
        },
      ],
    }) as any

    const results = await generator.runPrompts()
    return results.generator
  }
}
