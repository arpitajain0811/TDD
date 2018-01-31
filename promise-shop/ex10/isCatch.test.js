const isCatch = require('./isCatch.js');

describe('checking function iterate', () => {
  it('returns input +1', () => {
    expect(isCatch.iterate(2)).toEqual(3);
  });
});
describe('testing function alwaysThrow', () => {
  const errorMsg = () => {
    try {
      isCatch.alwaysThrows();
    } catch (e) {
      return (e.message);
    }
  };
  it('throws an error OH NOES', () => {
    expect(errorMsg()).toEqual('OH NOES');
  });
});
describe('checking if alwaysThrow is called after 5 calls to iteration', () => {
  it('returns error after 1,2,3,4,5', (done) => {
    const call = (data) => {
      expect(data).toEqual('12345OH NOES');
      done();
    };
    isCatch.itCatches(call);
  });
});
