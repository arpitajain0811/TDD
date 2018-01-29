require('es6-promise');

const promise = new Promise((fulfill) => {
  setTimeout(() => { fulfill('FULFILLED!'); }, 300);
});
//   promise.then(output =>
//     // console.log(output);
//     output);
// };

module.exports = promise;
