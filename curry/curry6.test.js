const curry6 = require('./curry6.js');

const fn = (a, b, c) => (a + b) - c;
const curryfn = curry6(fn);
describe('currying function with different number of arguments passsed in sucessive calls', () => {
  it('works for all arguments passed all at once', () => {
    expect(curryfn(4, 3, 2)).toEqual(5);
  });

  it('works for arguments passed in successive function calls', () => {
    expect(curryfn(4)(3)(2)).toEqual(5);
  });

  it('works with two arguments passed in one call and last argument in next call', () => {
    expect(curryfn(4, 3)(2)).toEqual(5);
  });
});
describe('currying function returns function in calls with less argum,ents than required', () => {
  it('returns function for less than the required arguments', () => {
    expect(typeof curryfn(5)).toEqual('function');
  });
});
