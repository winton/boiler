import nodePlop, { NodePlopAPI } from "node-plop"
import path from "path"

export class Boiler {
  plop: NodePlopAPI

  constructor({
    source = path.join(__dirname, "../boiler"),
    dest = process.cwd(),
    force = false,
  }: {
    source?: string
    dest?: string
    force?: boolean
  } = {}) {
    this.plop = nodePlop(path.join(source, "plopfile.js"), {
      destBasePath: dest,
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
