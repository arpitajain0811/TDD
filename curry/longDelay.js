let total = 0;
const longDelay = (addend) => {
  if (addend === undefined) return total;
  total += addend;
  return longDelay;
};
module.exports = longDelay;
