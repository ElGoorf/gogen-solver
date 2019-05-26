const Gogen = require('@gogen-solver/core');
const samples = require('@gogen-solver/samples').samples;
const render = require('./render');

console.log('samples', samples);

console.log("Running Gogen Solver");

const puzzleName = `${process.argv[2]}.json`;

console.log(puzzleName);

const puzzleData = samples[puzzleName];

const {words, grid} = puzzleData;

const puzzle = new Gogen(grid, words);

puzzle.solve();
render(puzzle);
