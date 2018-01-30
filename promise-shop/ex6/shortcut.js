// const usingCatch = (callback) => {
//   const promise = new Promise((resolve, reject) => {
//     reject(new Error('rejected'));
//   });
//   promise.catch((error) => {
//     callback(error.message);
//   });
// };
// const resolveShortcut = (callback) => {
//   const promise = Promise.resolve('resolved');
//   promise.then((resolve) => {
//     callback(resolve);
//   });
// };
// module.exports = {
//   usingCatch,
//   resolveShortcut,
// };


const promise1 = Promise.resolve('resolved');
promise1.then(console.log);
const promise2 = new Promise((resolve, reject) => {
  reject(new Error('rejected'));
});
promise2.catch((err) => {
  console.log(err.message);
});
