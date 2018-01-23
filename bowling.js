const verify = (rolls) => {
  for (let i = 0; i < rolls.length; i += 1) {
    if (rolls[i] > 10) return false;
  }
  return true;
};
const strike = (thisRoll) => {
  if (thisRoll === 10) return 1;
  return 0;
};
const spare = (thisRoll, nextRoll) => {
  if (thisRoll + nextRoll >= 10) return 1;
  return 0;
};
const lastTurn = (i, scoreLength) => {
  if (i + 2 >= scoreLength) return true;
  return false;
};
const calculateBowlingScore = (rolls) => {
  const scoreLength = rolls.length;
  let turnCount = 0;
  if (!verify(rolls)) return 'invalid';
  let i = 0;
  let currentScore = 0;
  while (i < scoreLength - 1) {
    const thisRoll = rolls[i];
    turnCount += 1;
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
      if (thisRoll + nextRoll > 10) return 'invalid turn';
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
  if (turnCount !== 10) return 'invalid number of turns';
  return currentScore;
};
module.exports = calculateBowlingScore;
