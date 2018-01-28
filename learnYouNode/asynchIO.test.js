const numberOfNewLines = require('./asyncIO.js');

describe('calculating number of newlines in file', () => {
  it('works for valid file as input with 5 lines', (done) => {
    const call = (data) => {
      expect(data).toBe(4);
      done();
    };
    numberOfNewLines('learnYouNode/index.txt', call);
  });
  it('gives 0 for empty file as input', (done) => {
    const call = (data) => {
      expect(data).toBe(0);
      done();
    };
    numberOfNewLines('learnYouNode/empty.txt', call);
  });
  it('works for valid file as input with 1 line, gives 0', (done) => {
    const call = (data) => {
      expect(data).toBe(0);
      done();
    };
    numberOfNewLines('learnYouNode/oneLine.txt', call);
  });
  it('returns error if file does not exist', (done) => {
    const call = (data) => {
      expect(data).toBe('error');
      done();
    };
    numberOfNewLines('learnYouNode/one.txt', call);
  });
});
