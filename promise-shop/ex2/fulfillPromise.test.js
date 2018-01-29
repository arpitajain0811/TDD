const fulfillPromise = require('./fulfillPromise.js');

describe('Functionality of setTimeout: ', () => {
  // jest.useFakeTimers();
  // it('calls setTimeout for 1 time: ', () => {
  //   fulfillPromise.then();
  //   expect(setTimeout).toHaveBeenCalledTimes(1);
  // });
  // it('calls setTimeout with a function after 300ms', () => {
  //   fulfillPromise.then();
  //   expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 300);
  // });
  it('returns FULFILLED!', () => {
    expect.assertions(1);// ensures that the callback actually gets called
    return expect(fulfillPromise).resolves.toBe('FULFILLED!');
  });
  it('checks for case sensitivity of FULFILLED!', () => {
    expect.assertions(1);// ensures that the callback actually gets called
    return expect(fulfillPromise).resolves.not.toBe('fulfilled!');
  });
});
