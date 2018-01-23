const longDelay = require('./longDelay.js');

describe('calculates sum of arguments and retains values in successive calls', () => {
  it('return 0 with no arguments passed', () => {
    expect(longDelay()).toEqual(0);
  });

  it('works for two numbers', () => {
    expect(longDelay(1)(2)(3)(4)()).toEqual(10);
  });

  it('return 0+previous sum with no arguments passed', () => {
    expect(longDelay()).toEqual(10);
  });

  it('gives previous sum when undefined given as input ', () => {
    expect(longDelay(undefined)).toEqual(10);
  });
});
