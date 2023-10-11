const vowelCount = require('./vowelCount');

describe('vowelCount', () => {
  it('should return 1 for input a', () => {
    expect(vowelCount('a')).toBe(1);
  });
});
