const vowelCount = require('./vowelCount');

describe('vowelCount', () => {
  it('should return 1 for input a', () => {
    expect(vowelCount('a')).toBe(1);
  });

  it('should return 0 for input b', () => {
    expect(vowelCount('b')).toBe(0);
  });

  it('should return 2 for input ae', () => {
    expect(vowelCount('ae')).toBe(2);
  });
});
