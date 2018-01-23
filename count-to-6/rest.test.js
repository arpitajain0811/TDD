const rest = require('./rest.js');
// console.log('gives average of numbers in the array when all are valid numbers', rest() === 2);
test('gives average of numbers in the array when all are valid numbers', () => {
  expect(rest(1, 2, 4, 3, 0)).toBe(2);
});

test('gives average of numbers in the array when average is a decimal number', () => {
  expect(rest(1, 2, 4, 5, 0)).toBe(2.4);
});

test('average of numbers in the array with a string value in array', () => {
  expect(rest(1, 2, '4', 5, 0)).toBe(2.4);
});

test('average of numbers in the array with a negative number ', () => {
  expect(rest(1, 2, -4, 5)).toBe(1);
});

test('average of numbers in the array with a string value in array does not work ', () => {
  expect(rest(1, 2, Infinity, 5, 0)).toBe(Infinity);
});

test('average of empty array', () => {
  expect(rest()).toBe(0);
});
