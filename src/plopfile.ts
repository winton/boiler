import { Groups, GroupsType, defaultGlobs } from "./groups"

export class Plopfile {
  constructor(public plop) {}

  addDefaultActionTypes(): void {
    let commands = []
    let packages = []

    this.plop.setActionType(
      "addCommand",
      (answers, config) => {
        commands = commands.concat(config.command)
      }
    )

    this.plop.setActionType(
      "addPackages",
      (answers, config) => {
        packages = packages.concat(config.packages)
      }
    )

    this.plop.setActionType("showCommands", () => {
      if (packages.length) {
        commands.push(
          "npm i --save-exact --save-dev " +
            packages.sort().join(" ")
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
    generators:
      | GroupsType["generators"]
      | GroupsType["projects"]
  ): void {
    for (const generator in generators) {
      const g = generators[generator]

      const prompts = g.prompts.reduce((m, p) => {
        return m.concat(groups.prompts[p])
      }, [])

      this.plop.setGenerator(g.title, {
        description: g.description,
        prompts: prompts,
        actions: data => {
          let actions = []

          if (g.actions) {
            actions = g.actions.reduce((m, a) => {
              return m.concat(groups.actions[a])
            }, [])
          }

          if (data.generators) {
            for (const extraGenerator of data.generators) {
              const eg = groups.generators[extraGenerator]

              actions = eg.actions.reduce((m, a) => {
                return m.concat(groups.actions[a])
              }, actions)
            }
          }

          actions = actions.concat([
            { type: "showCommands" },
          ])

          return actions
        },
      })
    }
  }

  groups(globs?: typeof defaultGlobs): GroupsType {
    return new Groups().build()
  }
}
