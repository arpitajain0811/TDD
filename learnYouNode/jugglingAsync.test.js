const juggling = require('./jugglingAsync.js');

describe('collect data from 3 given URLs', () => {
  const inputURL = 'http://www.example.com';
  it('returns correct sequence on giving valid URLs as input', (done) => {
    const call = (data) => {
      expect(data).toEqual([0, 1, 2]);
      done();
    };
    juggling([inputURL, inputURL, inputURL], call);
  });

  // it('should give error if passed an invalid url', (done) => {
  //   const call = (dataLength, data) => {
  //     expect(dataLength).toMatch();
  //     expect(data).toMatch();
  //     done();
  //   };
  //   juggling([], call);
  // });

  it('should give error if less than 3 URLs are given as input', (done) => {
    const call = (data) => {
      expect(data).toEqual('need 3 URLs as input');
      done();
    };
    juggling([inputURL, inputURL], call);
  });
});
