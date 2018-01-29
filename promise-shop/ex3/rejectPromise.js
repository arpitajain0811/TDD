require('es6-promise');

const promise = new Promise((fulfill, reject) => {
  // setTimeout(() => { reject(new Error('REJECTED!')); }, 300);
  setTimeout(() => { reject(new Error('REJECTED!')); }, 300);
});
// const onReject = (error) => {
//   console.log(error.message);
// };
// promise.then(null, onReject);
module.exports = promise;
