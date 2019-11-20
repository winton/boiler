import {
  Groups,
  GroupsType,
  GeneratorType,
  ProjectType,
} from "./groups"

export class Plopfile {
  constructor(public plop) {}

  addDefaultActionTypes(): void {
    let commands = []
    let devPackages = []
    let packages = []

    this.plop.setActionType(
      "addCommand",
      (answers, config) => {
        commands = commands.concat(config.command)
      }
    )

    this.plop.setActionType(
      "addDevPackages",
      (answers, config) => {
        devPackages = devPackages.concat(config.packages)
      }
    )

    this.plop.setActionType(
      "addPackages",
      (answers, config) => {
        packages = packages.concat(config.packages)
      }
    )

    this.plop.setActionType("showCommands", () => {
      if (devPackages.length) {
        commands.push(
          "npm i --save-exact --save-dev " +
            devPackages.sort().join(" ")
        )
      }
      if (packages.length) {
        commands.push(
          "npm i --save-exact " + packages.sort().join(" ")
        )
      }
      if (commands.length) {
        // eslint-disable-next-line
        console.log(
          "\n\n🛑 MANUALLY RUN COMMANDS:\n\n" +
            commands.join("\n\n") +
            "\n"
        )
      }
    })
  }

  addGenerators(
    groups: GroupsType,
    generators: GeneratorType[] | ProjectType[]
  ): void {
    for (const generatorName in generators) {
      const generator = generators[generatorName]

      const prompts = generator.prompts.reduce(
        (memo, prompt) => {
          return memo.concat(groups.prompts[prompt])
        },
        []
      )

      this.plop.setGenerator(generator.title, {
        description: generator.description,
        prompts: prompts,
        actions: data => {
          return this.generatorActions(
            data,
            generator,
            groups
          )
        },
      })
    }
  }

  generatorActions(
    data: any,
    generator: GeneratorType | ProjectType,
    groups: GroupsType
  ): any[] {
    let actions = []

    if (generator.actions) {
      actions = generator.actions.reduce((memo, action) => {
        return memo.concat(groups.actions[action])
      }, [])
    }

    if (data.generators) {
      for (const extraGenerator of data.generators) {
        const eg = groups.generators[extraGenerator]

        actions = eg.actions.reduce((memo, action) => {
          return memo.concat(groups.actions[action])
        }, actions)
      }
    }

    actions = actions.concat([{ type: "showCommands" }])

    return actions
  }

  groups({
    globs,
    source,
  }: {
    globs?: Record<string, string>
    source?: string
  } = {}): GroupsType {
    return new Groups(globs).build(source)
  }
}
