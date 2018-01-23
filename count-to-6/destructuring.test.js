const destructure = require('./destructuring.js');

global.console = {
  log: jest.fn(),
};
destructure();

// function equalObject (a, b) {
//   let aProps = Object.getOwnPropertyNames(a);
//   let bProps = Object.getOwnPropertyNames(b);
//   if (aProps.length !== bProps.length) { return false; } else {
//     for (let i = 0; i < aProps.length; i++) {
//       let propNameA = aProps[i];
//       let propNameB = bProps[i];
//       if (propNameA !== propNameB) { return false; }
//     }
//     return true;
//   }
// }


test('username and email with valid inputs', () => {
  expect(console.log).toHaveBeenCalledWith({ username: 'abc0811', email: 'abc@gmail.com' });
});


test('username and email with empty value for one argument', () => {
  expect(console.log).toHaveBeenCalledWith({});
});
