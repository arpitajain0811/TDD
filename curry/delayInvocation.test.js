const delayInvocation = require('./delayInvocation.js');

describe('testing for sum of inputs to outer and inner functions', () => {
  it('works for two numbers', () => {
    expect(delayInvocation(5)(6)).toEqual(11);
  });
  it('does not work for only one argument passed', () => {
    expect(delayInvocation(1)()).toEqual('missing parameter');
  });
  it('gives wroung output for number as strings', () => {
    expect(delayInvocation('1')(2)).toEqual('invalid input, only numbers allowed');
  });
  it('works for no input', () => {
    expect(delayInvocation()()).toEqual('missing parameter');
  });
});
