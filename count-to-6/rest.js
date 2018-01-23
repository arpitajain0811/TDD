module.exports = function average(...args) {
  let avg = 0;
  args.forEach((value) => {
    const numValue = Number(value);
    avg += numValue;
  });
  if (args.length !== 0) { return avg / args.length; }

  return 0;
};
