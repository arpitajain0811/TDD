const curry = (fn) => {
  const a = fn.length;
  return function fun1(...args) {
    if (args.length >= a) return fn(...args);
    return (...args1) => fun1(...args.concat(args1));
  };
};

module.exports = curry;
