const juggling = require('./jugglingAsync.js');

describe('collect data from 3 given URLs', () => {
  it('returns correct sequence on giving valid URLs as input', (done) => {
    const call = (data) => {
      expect(data).toMatch();
      done();
    };
    juggling([], call);
  });

  it('should give error if passed an invalid url', (done) => {
    const call = (dataLength, data) => {
      expect(dataLength).toMatch();
      expect(data).toMatch();
      done();
    };
    juggling([], call);
  });

  it('should give error if less than 3 URLs are given as input', (done) => {
    const call = (dataLength, data) => {
      expect(dataLength).toMatch();
      expect(data).toMatch();
      done();
    };
    juggling([], call);
  });
});
