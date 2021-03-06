const httpRequest = require('./httpClient');

describe('http get request from given URL ', () => {
  it('returns result for correct URL', (done) => {
    const call = (err, data) => {
      expect(data).toBe('data');
      done();
    };
    httpRequest('', call);
  });

//   it('returns error for invalid URL', (done) => {
//     const call = (data) => {
//       expect(data).toBe('Error');
//       done();
//     };
//     httpRequest('', call);
//   });
});
