const spreadMin = require('./spread.js');

global.console = {
  log: jest.fn(),
};
{
  const input = [3, 5, 6, 2, 20];
  spreadMin(input);
  test('gives minimum of numbers in array', () => {
    expect(console.log).toHaveBeenCalledWith(`The minimum of [${input}] is 2`);
  });
}
{
  const input = [3, 2, 6, 2, 20];
  spreadMin(input);
  test('two minimum numbers in array', () => {
    expect(console.log).toHaveBeenCalledWith(`The minimum of [${input}] is 2`);
  });
}
{
  const input = [3, '2', 6, 5, 20];
  spreadMin(input);
  test(' minimum number in array with a string value', () => {
    expect(console.log).toHaveBeenCalledWith(`The minimum of [${input}] is 2`);
  });
}
{
  const input = [3, -2, 6, 5, 20];
  spreadMin(input);
  test(' minimum number in array with a negative value', () => {
    expect(console.log).toHaveBeenCalledWith(`The minimum of [${input}] is -2`);
  });
}
{
  const input = [];
  spreadMin(input);
  test(' minimum number in empty array', () => {
    expect(console.log).toHaveBeenCalledWith(`The minimum of [${input}] is Infinity`);
  });
}
