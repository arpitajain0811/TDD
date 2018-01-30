// const chaining = () => {
const first = () => {
  const promise = new Promise((resolve) => {
    resolve('secret value');
  });
  return promise;
};
const second = (value) => {
  const promise = new Promise((resolve) => {
    resolve(value);
  });
  return promise;
};
const firstPromise = first();
const secondPromise = firstPromise.then(secretValue =>
  second(secretValue));
  // return secondPromise;
  // secondPromise.then(console.log);
// };
module.exports = secondPromise;
