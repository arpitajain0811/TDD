const currySum = (firstAddend, secondAddend) => {
  if (firstAddend === undefined || secondAddend === undefined) return 'missing parameter';
  if (typeof firstAddend !== 'number' || typeof secondAddend !== 'number') return 'invalid input, only numbers allowed';
  return firstAddend + secondAddend;
};
module.exports = currySum;
