# @gogen-solver/core
The core algorithm to solve Gogen puzzles with. For more info about what a Gogen puzzle is, please see the [README.md](../../README.md) in the repo root.

## Install
* yarn:`yarn add @gogen-solver/core`
* npm:`npm install @gogen-solver/core`

## Usage:
Please see underneath for examples.

| Constructor | Description |
| :---------- | :---------- |
|`Gogen(grid: array[], words: string[])` | Creates a new puzzle instance.

| Method | Description |
| :----- | :---------- |
|`solve` | `solve()` solves the puzzle, assuming initialised with valid words and grid. The result is available in `.grid.graph`.

### Example
This uses an example from London Evening Standard (26th Jan 2018):

```js
const Gogen = require('@gogen-solver/core');

const words = [
    "BUG",
    "CLING",
    "DAMPING",
    "FOIL",
    "FOX",
    "HARM",
    "HAVOC",
    "JAM",
    "KEY",
    "PEW",
    "SQUINT",
    "YEW"
  ];

const grid = [
 ["Y", "_", "W", "_", "H"],
 ["_", "_", "_", "_", "_"],
 ["Q", "_", "X", "_", "D"],
 ["_", "_", "_", "_", "_"],
 ["T", "_", "G", "_", "C"]
];

const puzzle = new Gogen(grid, words);

puzzle.solve();
console.table(puzzle.grid.graph)
```
