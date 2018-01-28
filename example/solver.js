/**
 * Created by Hussein on 27/01/2018.
 */
const fs = require("fs");
const Gogen = require("../index");

console.log("Running Gogen Solver");

const puzzleName = process.argv[2];
const puzzleFile = `samples/${puzzleName}.json`;

console.log(puzzleName);

const puzzleData = JSON.parse(fs.readFileSync(puzzleFile));

const {words, grid} = puzzleData;

const puzzle = new Gogen(grid, words);

puzzle.solve();
puzzle.render();