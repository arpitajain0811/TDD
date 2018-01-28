const numberOfNewLines = require('./firstIO.js');

describe('calculating number of newlines in file', () => {
  it('works for valid file as input with 5 lines', () => {
    expect(numberOfNewLines('learnYouNode/index.txt')).toEqual(4);
  });
  it('works for empty file as input, gives 0', () => {
    expect(numberOfNewLines('learnYouNode/empty.txt')).toEqual(0);
  });
  it('works for valid file as input with 1 line, gives 0', () => {
    expect(numberOfNewLines('learnYouNode/oneLine.txt')).toEqual(0);
  });
});
