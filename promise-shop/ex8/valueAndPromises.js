const valueAndPromise = (callback) => {
  const attachTitle = name => `DR. ${name}`;
  const promise = new Promise((fulfill) => {
    fulfill('MANHATTAN');
  });
  promise.then(value => attachTitle(value)).then((output) => { callback(output); });
};
module.exports = valueAndPromise;
