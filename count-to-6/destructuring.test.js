const destructure = require('./destructuring.js');

// global.console = {
//   log: jest.fn(),
// };


function equalObject(a, b) {
  const aProps = Object.getOwnPropertyNames(a);
  const bProps = Object.getOwnPropertyNames(b);
  if (aProps.length !== bProps.length) { return false; }
  for (let i = 0; i < aProps.length; i += 1) {
    const propNameA = aProps[i];
    const propNameB = bProps[i];
    if (propNameA !== propNameB) { return false; }
  }
  return true;
}

{
  const inputArray = [7, 'abc0811', 'abc@gmail.com', 20, 'abc', 'xyz'];
  const outputObject = { username: 'abc0811', email: 'abc@gmail.com' };
  test('username and email with valid inputs', () => {
  // destructure([7, 'abc0811', 'abc@gmail.com', 20, 'abc', 'xyz']);
    expect(equalObject(destructure(inputArray), outputObject)).toBe(true);
  });
}
{
  const inputArray = [];
  const outputObject = { username: undefined, email: undefined };
  test('username and email with valid inputs', () => {
  // destructure([7, 'abc0811', 'abc@gmail.com', 20, 'abc', 'xyz']);
    expect(equalObject(destructure(inputArray), outputObject)).toBe(true);
  });
}
