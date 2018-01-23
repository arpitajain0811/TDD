const currySum = require('./currySum.js');

describe('returns the sum of two arguments passed', () => {
  it('works for two numbers', () => {
    expect(currySum(4, 5)).toEqual(9);
  });

  it('does not work for only one argument passed', () => {
    expect(currySum(1)).toEqual('missing parameter');
  });

  it('gives wroung output for number as strings', () => {
    expect(currySum('2', '3')).toEqual('invalid input, only numbers allowed');
  });
  it('works for no input', () => {
    expect(currySum()).toEqual('missing parameter');
  });
});
