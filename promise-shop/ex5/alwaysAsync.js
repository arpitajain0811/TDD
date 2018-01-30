require('es6-promise');

const alwaysAsync = (callback) => {
  const arr = [];
  let index = 0;
  const promise = new Promise((fulfill) => {
    fulfill('PROMISE VALUE');
  });

  promise.then((fulfillValue) => {
    arr[index] = fulfillValue;
    index += 1;
    if (index === 2)callback(arr);
  });
  // console.log('MAIN PROGRAM');
  arr[index] = 'MAIN PROGRAM';
  index += 1;
  if (index === 2)callback(arr);
};
module.exports = alwaysAsync;
