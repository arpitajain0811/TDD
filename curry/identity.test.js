const identity = require('./identity.js');

describe('returns the arguments passed', () => {
  {
    const inputArgument = 'hello';
    it('works for input as string', () => {
      expect(identity(inputArgument)).toEqual('hello');
    });
  }
  {
    const inputArgument = [];
    it('works for input as empty array', () => {
      expect(identity(inputArgument)).toEqual([]);
    });
  }
  it('works for no input', () => {
    expect(identity()).toEqual(undefined);
  });
  it('works for number as input', () => {
    expect(identity(5)).toEqual(5);
  });
});
