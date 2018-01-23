const unaryFunction = (inputArgument) => {
  const anotherUnaryFunction = (anotherArgument) => {
    if (inputArgument === undefined || anotherArgument === undefined) return 'missing parameter';
    if (typeof inputArgument !== 'number' || typeof anotherArgument !== 'number') return 'invalid input, only numbers allowed';
    return inputArgument + anotherArgument;
  };
  return anotherUnaryFunction;
};
module.exports = unaryFunction;
