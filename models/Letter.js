/**
 * Created by Hussein on 27/01/2018.
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

  applyDistanceToOtherLetter(otherLetter, distance) {
    const existingDistance = this.distances[otherLetter];
    if (existingDistance) {
      this.distances[otherLetter] = Math.min(distance, existingDistance);
    } else {
      this.distances[otherLetter] = distance;
    }
  }

  setPosition(row, column) {
    this.position = {row, column};
  }

  isKnown() {
    return this.position.row !== null && this.position.column !== null;
  }
}

module.exports = Letter;