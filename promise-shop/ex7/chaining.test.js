const chaining = require('./chaining.js');

describe('chaining in promises', () => {
  it('returns the second promise with the fulfilled value of first promise', () =>
    // expect.assertions(1);// ensures that the callback actually gets called
    expect(chaining).resolves.toEqual('secret value'));
  // it('returns the second promise with the fulfilled value of first promise', () =>
  //   expect(chaining).resolves.not.toEqual('any value'));
});
