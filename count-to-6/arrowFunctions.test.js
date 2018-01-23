const arrow = require('./arrowFunctions.js');

global.console = {
  log: jest.fn(),
};
{
  const inputs = ['Hello', 'arrow', 'functions'];
  arrow(inputs);
  test('[Hello,arrow, functions reduced to Haf ', () => {
    expect(console.log).toHaveBeenCalledWith(`[${inputs}] becomes Haf`);
  });
}
{
  const inputs = [];
  arrow(inputs);
  test('empty array is reduced to empty ', () => {
    expect(console.log).toHaveBeenCalledWith(`[${inputs}] becomes `);
  });
}
{
  const inputs = ['hello', ' ', ' '];
  arrow(inputs);
  test('space  ', () => {
    expect(console.log).toHaveBeenCalledWith(`[${inputs}] becomes h  `);
  });
}
