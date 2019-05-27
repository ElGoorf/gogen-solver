import Grid from '../src/models/Grid';

const emptyGraph = [
  ['_','_','_','_','_'],
  ['_','_','_','_','_'],
  ['_','_','_','_','_'],
  ['_','_','_','_','_'],
  ['_','_','_','_','_'],
];

describe('Grid', () => {
  const grid = new Grid(emptyGraph);

  test('apply letter to grid', () => {
    grid.setCellLetter('a',{ rowNumber: 2, columnNumber: 4 });
    expect(grid.graph[2][4]).toEqual('a');
  });

  test('read letter from grid', () => {
    expect(grid.valueAt(2,4)).toEqual('a');
  });

  test('count number of remaining cells', () => {
    expect(grid.cellsRemaining()).toEqual((24));
  });
});
