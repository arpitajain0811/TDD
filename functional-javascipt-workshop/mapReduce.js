// module.exports = function arrayMap (arr, fn) {
//
// };
//
// console.log('an array with more than zero elements', false);
// console.log('an array with zero elements', false);

function hello () {
  console.log('a');
  setTimeout(function () { console.log('b'); }, 1000);
  console.log('c');
  setTimeout(function () { console.log('d'); }, 10);
}
function hello1 () {
  console.log('a2');
}

hello();
console.log('thanks');
hello1();
console.log('t2');
