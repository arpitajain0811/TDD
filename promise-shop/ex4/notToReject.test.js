const notToReject = require('./notToReject.js');

describe('to show promise does not change state ', () => {
  it('returns I FIRED as it runs the fulfill function', () => {
    expect.assertions(1);// ensures that the callback actually gets called
    return expect(notToReject).resolves.toEqual('I FIRED');
  });
});
// if you dont write return the test will complete before rejectPromise() completes
