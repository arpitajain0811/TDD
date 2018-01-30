const valueAndPromises = require('./valueAndPromises.js');

describe('fulfillment handlers may return values wrapped in promises', () => {
  it('returns the input name with DR. prepended', (done) => {
    const call = (data) => {
      expect(data).toEqual('DR. MANHATTAN');
      done();
    };
    valueAndPromises(call);
  });
});
