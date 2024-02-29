const calculateYamsScore = require('./yams');

describe('Testing calculateYamsScore', () => {
  test('should calculate total score for Chance (no matching)', () => {
    const rolls = [[1, 2, 3, 5, 6]];
    const result = calculateYamsScore(rolls);
    expect(result).toBe(17);
  });

  test('should calculate total score for Brelan (3 of a kind)', () => {
    const rolls = [[1, 2, 6, 6, 6]];
    const result = calculateYamsScore(rolls);
    expect(result).toBe(28);
  });

  test('should calculate total score for Carré (4 of a kind)', () => {
    const rolls = [[1, 6, 6, 6, 6]];
    const result = calculateYamsScore(rolls);
    expect(result).toBe(35);
  });

  test('should calculate total score for a Full (1 Brelan + 1 Paire)', () => {
    const rolls = [[1, 1, 6, 6, 6]];
    const result = calculateYamsScore(rolls);
    expect(result).toBe(30);
  });

  test('should calculate total score for a Grande Suite (valeur des 5 dés se suivent)', () => {
    const rolls = [[1, 2, 3, 4, 5]];
    const result = calculateYamsScore(rolls);
    expect(result).toBe(40);
  });

  test('should calculate total score for Yams (5 of a kind)', () => {
    const rolls = [[6, 6, 6, 6, 6]];
    const result = calculateYamsScore(rolls);
    expect(result).toBe(50);
  });

  test('should calculate total score with multiple rolls', () => {
    const rolls = [
      [1, 2, 3, 5, 6],
      [2, 3, 4, 5, 6],
    ];
    const result = calculateYamsScore(rolls);
    expect(result).toBe(57);
  });
});
