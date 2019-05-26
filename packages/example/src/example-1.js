/*
  Example 1

  Demonstrates option to hard-load a specific sample
 */

const Gogen = require('@gogen-solver/core');
const sample = require('@gogen-solver/samples/samples/ES_2018-01-26.json');
const render = require('./render');

console.log("Running Gogen Solver");

console.log(sample.description);

const {words, grid} = sample;

const puzzle = new Gogen(grid, words);

puzzle.solve();
render(puzzle);
