const alwaysAsync = require('./alwaysAsync');

describe('promise resolves in next turn of event loop', () => {
  it('returns main program at index 0 of array and promise value at index 1', (done) => {
    const call = (arr) => {
      expect(arr).toEqual(['MAIN PROGRAM', 'PROMISE VALUE']);
      done();
    };
    alwaysAsync(call);
  });
});
