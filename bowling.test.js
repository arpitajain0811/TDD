const bowlingScoreBoard = require('./bowling.js');

describe('calculating bowling score for no spares and strikes', () => {
  {
    const inputScoreArray = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    it('Calculates bowling score when sum of no two adjacent rolls is 10', () => {
      expect(bowlingScoreBoard(inputScoreArray)).toEqual(90);
    });
  }
  {
    const inputScoreArray = [3, 6, 4, 5, 5, 3, 7, 1, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    it('Calculates bowling score when sum of some adjacent rolls is 10', () => {
      expect(bowlingScoreBoard(inputScoreArray)).toEqual(88);
    });
  }
});

describe('calculating bowling score with spares but no strikes', () => {
  {
    const inputScoreArray = [3, 6, 3, 6, 3, 7, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    it('With one spare', () => {
      expect(bowlingScoreBoard(inputScoreArray)).toEqual(94);
    });
  }
  {
    const inputScoreArray = [3, 6, 3, 6, 3, 7, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 4, 6, 5];
    it('With a spare in the last turn', () => {
      expect(bowlingScoreBoard(inputScoreArray)).toEqual(100);
    });
  }
});
