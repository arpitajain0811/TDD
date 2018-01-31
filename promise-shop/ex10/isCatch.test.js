const isCatch = require('./isCatch.js');

describe('checking function iterate', () => {
  it('returns input +1', () => {
    expect(isCatch(2)).toEqual(3);
  });
});

describe('demonstrate that there is always a catch', () => {
  it('catches the error after running iterate for 5 times', () => {

  });
});
