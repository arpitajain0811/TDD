function repeat (operation, num) {
  if (num <= 0) return;
  operation();
  if (num % 20 === 0) {
    setTimeout(function () {
      return repeat(operation, --num);
    }, 50);
  } else {
    return repeat(operation, --num);
  }
}

module.exports = repeat;
