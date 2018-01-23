function prepend (namespace) {
  return console.log.bind(console, namespace);
};
module.exports = prepend;

prepend('INFO:')('hi');
prepend('WARN:')('hello', 'warning');
prepend('INFO:')();
prepend()('hi');
console.log('With one argument', false);
console.log('With two arguments', false);
console.log('With no argument to prepend', false);
console.log('With no namespace argument', false);
console.log('prepends returns a function', false);
