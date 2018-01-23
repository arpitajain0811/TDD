const strike = (thisRoll) => {
  if (thisRoll === 10) return 1;
  return 0;
};
const spare = (thisRoll, nextRoll) => {
  if (thisRoll + nextRoll === 10) return 1;
  return 0;
};
const lastTurn = (i, scoreLength) => {
  if (i + 2 >= scoreLength) return true;
  return false;
};
const calculateBowlingScore = (rolls) => {
  const scoreLength = rolls.length;
  let i = 0;
  let currentScore = 0;
  while (i < scoreLength - 1) {
    const thisRoll = rolls[i];
    const nextRoll = rolls[i + 1];
    if (strike(thisRoll)) {
      if (lastTurn(i, scoreLength)) {
        currentScore += thisRoll + nextRoll;
        i += 2;
      } else {
        currentScore += thisRoll + nextRoll + rolls[i + 2];
        i += 1;
      }
    } else if (spare(thisRoll, nextRoll)) {
      currentScore += thisRoll + nextRoll + rolls[i + 2];
      if (lastTurn(i, scoreLength)) i += 3;
      else {
        i += 2;
      }
    } else {
      currentScore += thisRoll + nextRoll;
      i += 2;
    }
  }
  return currentScore;
};
module.exports = calculateBowlingScore;
