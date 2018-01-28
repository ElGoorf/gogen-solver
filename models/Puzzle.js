/**
 * Created by Hussein on 27/01/2018.
 */
const Letter = require("../models/Letter");
const Grid = require("../models/Grid");

class Puzzle {
  constructor(grid, words) {
    // console.log('Creating new puzzle...');

    this.grid = new Grid(grid);
    this.words = words;
    this.letters = this.createLettersList();

    this.setLetterPositionsFromGrid();

    // console.log("\n");
    // console.log("Grid:");
    // this.render();

    // console.log("\n");
    // console.log("Words:", this.words.join(", "));
  }

  /**
   * create an object where each key is a letter of the alphabet (in order);
   * @returns {*}
   */
  createLettersList() {
    const charA = "A".charCodeAt(0);
    const charZ = "Z".charCodeAt(0);

    const letters = {};

    for (let charCode = charA; charCode < charZ + 1; charCode++) {
      const letter = String.fromCharCode(charCode);
      letters[letter] = new Letter(letter);
    }

    return letters;
  }

  /**
   * create a map of distance from each letter to other letters which share the same words
   * @returns {{}}
   */
  generateLetterDistanceMap() {
    this.words.forEach(word => {
      const splitWord = word.split("");

      splitWord.forEach((letterInWord, indexOfLetterInWord) => {
        splitWord.forEach((otherLetterInWord, indexOfOtherLetterInWord) => {
          // not point routing letter to itself...
          if (letterInWord !== otherLetterInWord) {
            const distanceBetweenLetters = Math.abs(indexOfOtherLetterInWord - indexOfLetterInWord);
            // if a distance has already been established, only update it if the new value is lower
            this.letters[letterInWord].applyDistanceToOtherLetter(otherLetterInWord, distanceBetweenLetters);
          }
        })
      })
    });
  }

  /**
   * determines the area in which the letter could reside, based on max distance from other letters which share the same words
   * @param letter
   * @returns {{topMostValidRow: number, bottomMostValidRow: number, leftMostValidColumn: number, rightMostValidColumn: number}}
   */
  getPossibleAreaForLetter(letter) {
    // find all empty cells within range of the other (known) letter
    let topMostValidRow = 0;
    let bottomMostValidRow = 4;
    let leftMostValidColumn = 0;
    let rightMostValidColumn = 4;

    // restrict range to be in range of connected letters
    Object.entries(letter.distances).forEach(entry => {
      const otherLetter = this.letters[entry[0]];
      if (otherLetter.isKnown()) {
        const otherLetterDistance = entry[1];
        const otherLetterPosition = otherLetter.position;

        topMostValidRow = Math.max(topMostValidRow, otherLetterPosition.row - otherLetterDistance);
        bottomMostValidRow = Math.min(bottomMostValidRow, otherLetterPosition.row + otherLetterDistance);
        leftMostValidColumn = Math.max(leftMostValidColumn, otherLetterPosition.column - otherLetterDistance);
        rightMostValidColumn = Math.min(rightMostValidColumn, otherLetterPosition.column + otherLetterDistance);
      }
    });

    return {topMostValidRow, bottomMostValidRow, leftMostValidColumn, rightMostValidColumn };
  };

  /**
   * returns a list of cells in an area defined by row/colunn limits
   * @param range
   * @returns {Array}
   */
  convertToCellList(range) {
    const list = [];

    for (let rowNumber = range.topMostValidRow; rowNumber <= range.bottomMostValidRow; rowNumber++) {
      for (let columnNumber = range.leftMostValidColumn; columnNumber <= range.rightMostValidColumn; columnNumber++) {
        list.push({
          rowNumber,
          columnNumber
        });
      }
    }

    return list;
  };

  /**
   * saves grid coordinate to the letter, and also marks the letter on the grid
   * @param letter
   * @param cell
   */
  placeLetterOnGrid(letter, cell) {
    const {rowNumber, columnNumber} = cell;
    letter.setPosition(rowNumber, columnNumber);
    this.grid.setCellLetter(letter.letter, cell);
  }

  /**
   * let each letter be self-aware of it's position on the grid
   */
  setLetterPositionsFromGrid() {
    this.grid.graph.forEach((row, rowNumber) => {
      row.forEach((cell, columnNumber) => {
        const letter = cell;
        if (letter !== "_") {
          this.letters[letter].setPosition(rowNumber, columnNumber);
        }
      });
    });
  }

  /**
   * does what it says on the tin (hopefully)
   */
  solve() {
    // console.log("Solving...");

    // console.log("Calculating maximum distance between letters...");
    this.generateLetterDistanceMap();

    // console.log("Abra Cadabra...");
    while (this.grid.cellsRemaining()) {
      // console.log("Cells remaining: ", this.grid.cellsRemaining());
      Object.values(this.letters).forEach(letter => {
        if (!letter.isKnown()) {
          const range = this.getPossibleAreaForLetter(letter);
          const possibleCells = this.convertToCellList(range);
          const availableCells = possibleCells.filter(cell => {
            return this.grid.valueAt(cell.rowNumber, cell.columnNumber) === "_";
          });

          if (availableCells.length === 1) {
            this.placeLetterOnGrid(letter, availableCells[0]);
          }
        }
      });

      //this.grid.render();
    }

    // this.render();
    // console.log("Done!");
  }

  /**
   * to make it more accessible...
   */
  render() {
    this.grid.render();
  }
}

module.exports = Puzzle;