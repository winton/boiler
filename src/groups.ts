import globby from "globby"
import path from "path"

export interface ProjectType {
  title: string
  generators: string[]
  actions?: string[]
  prompts?: string[]
  description?: string
}

export interface GeneratorType {
  title: string
  prompts: string[]
  actions: string[]
  description?: string
}

export interface PromptType {
  type: string
  name: string
  message: string
  default?: string
}

export interface GroupsType {
  actions: Record<string, any>
  projects: Record<string, ProjectType>
  generators: Record<string, GeneratorType>
  prompts: Record<string, PromptType>
}

export class Groups {
  constructor(public globs: Record<string, string>) {}

  build(source: string): GroupsType {
    const groups = this.globGroups(source)
    this.resolvePrompts(groups)
    return groups
  }

  globGroups(source: string): GroupsType {
    return Object.keys(this.globs).reduce((memo, group) => {
      const paths = globby.sync(
        path.join(source, this.globs[group])
      )

      memo[group] = paths.reduce(function(m, p) {
        const base = path.basename(p, ".js")
        return Object.assign(m, { [base]: require(p) })
      }, {})

      return memo
    }, {}) as GroupsType
  }

  resolvePrompts(groups: GroupsType): void {
    if (!groups.projects || !groups.prompts) {
      return
    }

    for (const projectName in groups.projects) {
      const project = groups.projects[projectName]
      const prompts = {}

      for (const generatorName of project.generators) {
        const generator = groups.generators[generatorName]

        for (const prompt of generator.prompts) {
          prompts[prompt] = true
        }
      }

      project.prompts = Object.keys(prompts).concat(
        "generators"
      )
    }
  }
}
