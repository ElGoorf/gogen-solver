#gogen-solver/samples
A package of sample puzzles to use and test with. Well, at time of writing there's just one, which was taken form a local newspaper, so it probably has copyright, use at your own risk ¯\\\_(ツ)\_/¯

Includes a JSON Schema (see `/schema`) to help you validate your own.

## Install
* yarn:`yarn add @gogen-solver/samples`
* npm:`npm install @gogen-solver/samples`

## Usage
The format is provided as `@gogen-solver/core` requires so there's no modification or processing needed to load them. Simply extract the `words` and `grid` fields and pass them into the Gogen solver. 

### Example
If we want to load the `ES_2018-01-26` sample:

```js
// for dynamic input (eg. specified by the user)
const samples = require('@gogen-solver/samples');
const sample = samples['ES_2018-01-26.json'];
```
or

```js
// to just load a specific file
const sample = require('@gogen-solver/samples/samples/ES_2018-01-26.json');
```

and then extract the `words` an `grid` properties to pass to the Gogen solver:

```js
const Gogen = require('@gogen-solver/core');

const {grid, words} = sample;

const puzzle = new Gogen(grid, words);
puzzle.solve();

console.table(puzzle.grid.graph)
```

## Format
* `description (string, optional)`
* `grid (array[], required)` - 2D array. I don't see Gogen working well with anything besides a 5x5 grid (for the English alphabet, at least), but I left this flexible if you want to come up with your own funky grid dimensions
* `words (string[], required)` - List of words given.
* `solution (array[], optional)s - Optional because if you had the solution, you wouldn't need the `gogen-solver` would you? This is really just here for test scripts.

### Example
See `ES_2018-01-26` for a complete example with optional data included.

## Todos:
* Some way to test samples match schema and flag errors. Possibly with use of a TS/ES lint plugin?
* Make loader work without requirement for .json suffix?
