/**
 * Store known information about the grid of letters
 *
 * graph is a 5 x 5 array, with each cell being a letter, or "_" if unknown.
 *
 * @typedef {Object} CellCoords
 * @property {int} rowNumber
 * @property {int} columnNumber
 */
class Grid {
  /**
   * @param {array[]} graph (array of arrays, 5x5)
   */
  constructor(graph) {
    this.graph = graph;
  }

  /**
   *
   * @param {string} letter
   * @param {CellCoords} cell
   */
  setCellLetter(letter, cell) {
    const {rowNumber, columnNumber} = cell;
    this.graph[rowNumber][columnNumber] = letter;
  }

  valueAt(row, column) {
    return this.graph[row][column];
  }

  /**
   * number of cells remaining that don't have a letter assigned
   * @returns {*}
   */
  cellsRemaining() {
    return this.graph.reduce((emptyCells, row) => {
      return emptyCells + row.filter(cell => cell === "_").length;
    }, 0)
  }
}

module.exports = Grid;
