const hello = require('./helloWorld.js');

describe('the function returns HELLO WORLD', () => {
  it('returns HELLO WORLD in uppercase', () => {
    expect(hello()).toBe('HELLO WORLD');
  });
  it('checks that hello world is not in lowercase', () => {
    expect(hello()).not.toBe('hello world');
  });
});
