# boiler

Boilerplate generator 🥘

## Install

```bash
npm i -g @fn2/boiler
```

## Run

```bash
mkdir new-project; cd new-project
boiler
```

## Options

| Option     | Description                               | Default value                                                 |
| ---------- | ----------------------------------------- | ------------------------------------------------------------- |
| `--source` | Generator source (boiler directory)       | [boiler](https://github.com/winton/boiler/tree/master/boiler) |
| `--dest`   | Generator destination (project directory) | `process.cwd()`                                               |
| `--force`  | Overwrite existing files in destination   | `false`                                                       |

## Structure

Boiler finds generator info in the [source directory](https://github.com/winton/boiler/tree/master/boiler) using the following glob patterns:

| Glob                                                                                | Description                            |
| ----------------------------------------------------------------------------------- | -------------------------------------- |
| [`prompts/*.js`](https://github.com/winton/boiler/tree/master/boiler/prompts)       | User input prompts                     |
| [`actions/*/*.js`](https://github.com/winton/boiler/tree/master/boiler/actions)     | Actions to perform                     |
| [`generators/*.js`](https://github.com/winton/boiler/tree/master/boiler/generators) | Groups of prompts and actions          |
| [`projects/*.js`](https://github.com/winton/boiler/tree/master/boiler/projects)     | Groups of generators                   |
| [`plopfile.js`](https://github.com/winton/boiler/tree/master/boiler/plopfile.js)    | [Plop](https://plopjs.com) initializer |

See [plop](https://plopjs.com) for more information on actions, prompts, and generators.

## Make your own boiler

Copy the [`plopfile.js`](https://github.com/winton/boiler/tree/master/boiler/plopfile.js) to your own directory and specify the directory in the `--source` option.

## Development

Execute `./bin/test` to test a generator, then check the `testProject` directory for output.
