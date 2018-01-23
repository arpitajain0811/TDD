let slice = Array.prototype.slice;
function logger (namespace) {
  return function () {
    // console.log(slice.call(arguments));
    console.log.apply(console, [namespace].concat(slice.call(arguments)));
  };
}
module.exports = logger;

let info = logger('INFO');
info('this is an info message');

console.log('prepending With one argument', false);
console.log('prepending with two arguments', false);
console.log('With no argument to prepend', false);
console.log('prepend in case of no namespace argument', false);
console.log('prepending with two namespace', false);
