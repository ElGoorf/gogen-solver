/**
 * A Letter object contains known information about a given letter of the alphabet
 */
class Letter {
  /**
   *
   * @param letter
   */
  constructor(letter) {
    this.letter = letter;
    this.distances = {};
    this.position = {
      row: null,
      column: null,
    };
  }

  /**
   * Updates the shortest known distance between this letter and another
   * @param {string} otherLetter
   * @param {int} distance
   */
  applyDistanceToOtherLetter(otherLetter, distance) {
    const existingDistance = this.distances[otherLetter];
    if (existingDistance) {
      this.distances[otherLetter] = Math.min(distance, existingDistance);
    } else {
      this.distances[otherLetter] = distance;
    }
  }

  /**
   * Set where the letter is placed on the grid
   * @param {int} row
   * @param {int} column
   */
  setPosition(row, column) {
    this.position = {row, column};
  }

  /**
   * get if the location for the letter has been solved (or was initially set)
   * @returns {boolean}
   */
  isKnown() {
    return this.position.row !== null && this.position.column !== null;
  }
}

module.exports = Letter;
