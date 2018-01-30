const collect = require('./httpCollect');

describe('collect data from given URL', () => {
  it('returns correct value on giving a valid url as input', (done) => {
    const call = (error, data) => {
      expect(data).toMatch('response piped');
      done();
    };
    collect('http://www.example.com', call);
  });

//   it('should give error if passed an ivalid url', (done) => {
//     const call = (error, data) => {
//       expect(data).toMatch();
//       done();
//     };
//     collect('', call);
//   });
});
