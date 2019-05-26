/*
  Example 2

  Demonstrates option to load all samples for later decision making
 */

const Gogen = require('@gogen-solver/core');
const samples = require('@gogen-solver/samples');
const render = require('./render');

console.log("Running Gogen Solver");

const puzzleName = `${process.argv[2]}.json`;

const puzzleData = samples[puzzleName];

console.log(puzzleData.description);

const {words, grid} = puzzleData;

const puzzle = new Gogen(grid, words);

puzzle.solve();
render(puzzle);
