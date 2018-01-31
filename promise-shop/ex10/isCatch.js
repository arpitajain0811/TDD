let str = '';
const iterate = (input) => {
  // console.log(input);
  // str = `${str + input},`;
  str = str.concat(input);
  return input + 1;
};
const alwaysThrows = () => {
  throw new Error('OH NOES');
};


const onReject = (error) => {
  str = str.concat(error.message);
};
// console.log(error.message);
const itCatches = (callback) => {
  str = '';
  Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(onReject)
    .then(() => {
      callback(str);
    });
};
module.exports = { iterate, alwaysThrows, itCatches };
