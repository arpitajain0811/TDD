// let outputData = '';
// let storeLog = inputs => (outputData += inputs);
// test('console log template strings', () => {
//   console['log'] = jest.fn(storeLog);
//   require('./templateStrings.js');
//   expect(outputData).toBe('arpita');
// });
const lower = require('./templateStrings.js');

test('converts to lower case', () => {
  expect(lower('ARPITA')).toBe(`Hello, ARPITA!
Your name lowercased is "arpita".`);
});
// test('converts to lower case', function () {
//   expect(lower('Arpita')).toBe(`Hello, Arpita!
// Your name lowercased is "arpita".`);
// });
