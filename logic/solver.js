/**
 * Created by Hussein on 27/01/2018.
 */
const fs = require("fs");
const Puzzle = require("../models/Puzzle");

console.log("Running Gogen Solver");

const puzzleName = process.argv[2];
const puzzleFile = `samples/${puzzleName}.json`;

const puzzleData = JSON.parse(fs.readFileSync(puzzleFile));

const {words, grid} = puzzleData;

const puzzle = new Puzzle(grid, words);

puzzle.solve();