const strike = () => 0;
const spare = () => 0;
const calculateBowlingScore = (rolls) => {
  const scoreLength = rolls.length;
  let i = 0;
  let currentScore = 0;
  while (i < scoreLength) {
    const thisRoll = rolls[i];
    const nextRoll = rolls[i + 1];
    if (strike()) {
      //
    } else if (spare()) {
      //
    } else {
      currentScore += thisRoll + nextRoll;
      i += 2;
    }
  }
  return currentScore;
};

module.exports = calculateBowlingScore;
