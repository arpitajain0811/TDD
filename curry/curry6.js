function curry(fx) {
  const arity = fx.length;

  return function f1() {
    const args = Array.prototype.slice.call(arguments, 0);
    if (args.length >= arity) {
      return fx(...args);
    }

    return function f2() {
      const args2 = Array.prototype.slice.call(arguments, 0);
      return f1(...args.concat(args2));
    };
  };
}
module.exports = curry;
