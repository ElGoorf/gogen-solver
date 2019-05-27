import Letter from '../src/models/Letter';

describe('Letter', () => {
  const letterA = new Letter('a');

  test('Apply distance to another letter', () => {
    letterA.applyDistanceToOtherLetter('b', 4);

    expect(letterA.distances['b']).toEqual(4);
  });

  test('Apply distance to farther letter letter keeps the closer value', () => {
    letterA.applyDistanceToOtherLetter('b', 6);

    expect(letterA.distances['b']).toEqual(4);
  });

  test('Apply distance to closer letter letter sets the closer value', () => {
    letterA.applyDistanceToOtherLetter('b', 2);

    expect(letterA.distances['b']).toEqual(2);
  });

  test('Set known location for a letter', () => {
    expect(letterA.isKnown()).toEqual(false);

    letterA.setPosition(1,3);

    expect(letterA.position.row).toEqual(1);
    expect(letterA.position.column).toEqual(3);

    expect(letterA.isKnown()).toEqual(true);
  });
});
