const sum = require('./babySteps.js');

describe('returns the sum of numbers in the array passed', () => {
  it('works for an array of two numbers', () => {
    expect(sum([4, 5])).toEqual(9);
  });

  it('works for only one argument passed', () => {
    expect(sum([1])).toEqual(1);
  });

  it('works for array of numbers as strings', () => {
    expect(sum(['2', '3'])).toEqual(5);
  });
  it('works for empty array', () => {
    expect(sum([])).toEqual(0);
  });
});

describe('returns error message when input not valid', () => {
  it('does not work when input is not an array', () => {
    expect(sum(1)).toEqual('input needs to be an array');
  });
  it('does not work when array element is NaN', () => {
    expect(sum([1, 3, NaN])).toEqual('invalid array element');
  });
  it('does not work when array element is undefined', () => {
    expect(sum([1, 3, undefined])).toEqual('invalid array element');
  });
});
