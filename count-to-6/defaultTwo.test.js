const defTwo = require('./defaultTwo.js');

test('prints str with its lengths number of exclamation marks given as default', () => {
  expect(defTwo('hello')).toBe('hello!!!!!');
});

test('prints str with number of exclamation marks given as input', () => {
  expect(defTwo('hello', 3)).toBe('hello!!!');
});

test('with empty string and 2 exclamation', () => {
  expect(defTwo('', 2)).toBe('!!');
});
