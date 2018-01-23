const arrow = require('./arrowAndThis.js');

global.console = {
  log: jest.fn(),
};
arrow();
test('gives Ouch', () => {
  expect(console.log).toHaveBeenCalledWith('Ouch!');
});
