function getShortMessages(objArray) {
  const msg = objArray.map(obj => obj.message);
  return msg.filter(m => m.length < 5);
}
module.exports = getShortMessages;

function equalArray(a, b) {
  if (a.length !== b.length) { return false; }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) { return false; }
    return true;
  }
}

console.log('checking equalArray', equalArray([1, 2, 3], [1, 2, 3]) === true);
console.log('checking uneuqual array', equalArray([1, 2, 3], [2, 3, 4]) === false);
console.log('checking unequal array lengths', equalArray([1, 2, 3], [2, 3, 3, 4]) === false);
console.log('returning short messages correctly', equalArray(getShortMessages([{ message: 'hI i am more than 5' }, { message: 'hi' }, { message: 'hello' }]), ['hi']) === true);
