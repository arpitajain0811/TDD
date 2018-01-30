const rejectPromise = require('./rejectPromise.js');

describe('Functionality of promises: ', () => {
  // jest.useFakeTimers();
  // it('calls setTimeout for 1 time: ', () => {
  //   rejectPromise();
  //   expect(setTimeout).toHaveBeenCalledTimes(1);
  // });
  // it('calls setTimeout with a function after 300ms', () => {
  //   rejectPromise();
  //   expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 300);
  // });
  it('returns REJECTED!', () => {
    expect.assertions(1);// ensures that the callback actually gets called
    return expect(rejectPromise).rejects.toEqual(new Error('REJECTED!'));
  });
  it('checks case sensitivity of REJECTED! returned', () => {
    expect.assertions(1);// ensures that the callback actually gets called
    return expect(rejectPromise).rejects.not.toEqual(new Error('rejected!'));
  });
});
// if you dont write return the test will complete before rejectPromise() completes
