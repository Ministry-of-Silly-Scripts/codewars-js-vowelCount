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

  it('should return 2 for input aeb', () => {
    expect(vowelCount('aeb')).toBe(2);
  });

  it('should return 3 for input aebi', () => {
    expect(vowelCount('aebi')).toBe(3);
  });

  it('should return 3 for input aebic', () => {
    expect(vowelCount('aebic')).toBe(3);
  });
});
