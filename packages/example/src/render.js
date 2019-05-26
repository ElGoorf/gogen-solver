function render(puzzle) {
  puzzle.grid.graph.forEach((row, i) => {
    console.log(row.join(' - '));
    if (i < 4) {
      console.log("┃ x ┃ x ┃ x ┃ x ┃");
    }
  });
}

module.exports = render;
