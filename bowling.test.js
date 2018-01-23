const bowlingScoreBoard = require('./bowling.js');

describe('bowlingScore', () => {
  const inputScoreArray = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
  it('Calculates bowling score for no spare and strikes', () => {
    expect(bowlingScoreBoard(inputScoreArray)).toEqual(90);
  });
});
