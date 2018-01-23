function duckCount () {
  return Array.prototype.slice.call(arguments).filter(function (obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack');
  }).length;
}
module.exports = duckCount;

let arg1 = {quack: true};
let arg2 = {hello: false};
let arg3 = {quack: 1};
let arg4 = {};

console.log('for 3 arguments', duckCount(arg1, arg2, arg3) === 2);
console.log('for 2 arguments of which one is an empty object', duckCount(arg1, arg4) === 1);
console.log('for 1 argument which does not have quack defined directly on it', duckCount(Object.create({quack: true})) === 0);
console.log('without parameters', duckCount() === 0);
