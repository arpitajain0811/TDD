const defArgs = require('./defaultArgs.js');
// console.log('gives average of numbers in the array when all are valid numbers', rest() === 2);
test('gives midpoint of two numbers when both parameters are passed with numbers', () => {
  expect(defArgs(1, 3)).toBe(2);
});

test('gives midpoint of two numbers when one parameters is passed with number', () => {
  expect(defArgs(1)).toBe(1);
});

test('gives midpoint of two numbers when no parameters are paased', () => {
  expect(defArgs()).toBe(0.5);
});

// test('gives midpoint of two numbers when parameters are passed with numbers as strings', () => {
//   expect(defArgs('1', '3')).toBe(2);
// });

// test('gives midpoint of two numbers when parameters are passed with strings', () => {
//   expect(defArgs('a', '3')).toBe(NaN);
// });
// test('gives midpoint of two numbers when parameters are passed with numbers as strings', () => {
//   expect(defArgs(1, Infinity)).toBe(Infinity);
// });

test('gives midpoint of two numbers with undefined as an argument', () => {
  expect(defArgs(1, undefined)).toBe(1);
});

test('type of output is a number', () => {
  expect(typeof defArgs(1, 3)).toBe('number');
});
