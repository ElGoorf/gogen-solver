/**
 * Created by Hussein on 27/01/2018.
 */

class Grid {
  constructor(graph) {
    this.graph = graph;
  }

  setCellLetter(letter, cell) {
    const {rowNumber, columnNumber} = cell;
    this.graph[rowNumber][columnNumber] = letter;
  }

  render() {
    this.graph.forEach((row, i) => {
      console.log(row.join(' - '));
      if (i < 4) {
        console.log("┃ x ┃ x ┃ x ┃ x ┃");
      }
    });
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