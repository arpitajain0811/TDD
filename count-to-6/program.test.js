const hello = require('./program');

test('prints HELLO ES6', () => {
  expect(hello()).toBe('HELLO ES6');
});
