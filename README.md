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

## Structure

This project uses [plop](https://plopjs.com) under the hood. Most of this terminology comes from that project.

| Directory                                                                      | Description                   |
| ------------------------------------------------------------------------------ | ----------------------------- |
| [`projects`](https://github.com/winton/boiler/tree/master/boiler/projects)     | Groups of generators          |
| [`generators`](https://github.com/winton/boiler/tree/master/boiler/generators) | Groups of prompts and actions |
| [`actions`](https://github.com/winton/boiler/tree/master/boiler/actions)       | Steps to perform              |
| [`prompts`](https://github.com/winton/boiler/tree/master/boiler/prompts)       | Individual user inputs        |

## Development

Execute `./bin/test` to test a generator, then check the `testProject` directory for output.
