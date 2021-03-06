import predicate from './predicate';

describe('toBeWithin Predicate', () => {
  test('returns true when given number is within the given bounds of start (inclusive) and end (exclusive)', () => {
    expect(predicate(1, 1, 3)).toBe(true);
  });

  test('returns false when given number is not within the given bounds of start (inclusive) and end (exclusive)', () => {
    expect(predicate(3, 1, 3)).toBe(false);
  });
});
