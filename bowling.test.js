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
describe('calculating bowling score with strikes', () => {
  {
    const inputScoreArray = [3, 6, 3, 6, 3, 6, 10, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3];
    it('With one strike but no spares', () => {
      expect(bowlingScoreBoard(inputScoreArray)).toEqual(100);
    });
  }
  {
    const inputScoreArray = [3, 6, 3, 6, 3, 6, 10, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 10, 5];
    it('With a strike in the last turn', () => {
      expect(bowlingScoreBoard(inputScoreArray)).toEqual(106);
    });
  }
  {
    const inputScoreArray = [3, 6, 3, 6, 3, 6, 10, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 10, 10];
    it('With a strike in the last turn and spare in fill ball', () => {
      expect(bowlingScoreBoard(inputScoreArray)).toEqual(111);
    });
  }
  {
    const inputScoreArray = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    it('With all strikes', () => {
      expect(bowlingScoreBoard(inputScoreArray)).toEqual(290);
    });
  }
});
describe('input validation', () => {
  {
    const inputScoreArray = [3, 6, 3, 6, 3, 7, 3, 6, 3, 6, 3, 6, 11, 6, 3, 6, 3, 6, 3, 6];
    it('has any element of array with value greater than 10', () => {
      expect(bowlingScoreBoard(inputScoreArray)).toEqual('invalid');
    });
  }
  {
    const inputScoreArray = [3, 6, 3, 6, 3, 7, 3, 6, 3, 6, 3, 6, 6, 3, 6, 3, 6, 3, 6];
    it('has incorrect number of turns', () => {
      expect(bowlingScoreBoard(inputScoreArray)).toEqual('invalid number of turns');
    });
  }
  {
    const inputScoreArray = [3, 6, 3, 6, 3, 8, 3, 6, 3, 6, 3, 6, 6, 3, 6, 3, 6, 3, 6, 3];
    it('more than 10 points in a turn', () => {
      expect(bowlingScoreBoard(inputScoreArray)).toEqual('invalid turn');
    });
  }
  {
    const inputScoreArray = [];
    it('null array passed', () => {
      expect(bowlingScoreBoard(inputScoreArray)).toEqual('empty input');
    });
  }
});
