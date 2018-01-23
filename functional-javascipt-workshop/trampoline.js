function repeat (operation, num) {
  return function () {
    if (num <= 0) return;
    operation();
    let n = repeat(operation, --num);
    return num * n;
  };
}

function trampoline (fn) {
  while (fn && typeof fn === 'function') {
    fn = fn();
  }
}

module.exports = function (operation, num) {
  trampoline(function () {
    return repeat(operation, num);
  });
};
