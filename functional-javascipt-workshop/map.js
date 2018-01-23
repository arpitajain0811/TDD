function doubleAll (numbers) {
  return numbers.map(function (num) { return num * 2; });
}
module.exports = doubleAll;

function equalArray (a, b) {
  if (a.length !== b.length) { return false; } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) { return false; }
      return true;
    }
  }
}

console.log('checking equalArray', equalArray([1, 2, 3], [1, 2, 3]) === true);
console.log('checking uneuqual array', equalArray([1, 2, 3], [2, 3, 4]) === false);
console.log('checking unequal array lengths', equalArray([1, 2, 3], [2, 3, 3, 4]) === false);
console.log('doubleAll returns correctly', equalArray(doubleAll([1, 2, 3]), [2, 4, 6]) === true);
