// const json = process.argv[2];
const parse = (json, callback) => {
  const parsePromised = (jsonInput) => {
    const promise = new Promise((resolve, reject) => {
      try {
        JSON.parse(jsonInput);
      } catch (e) {
        // const errorMsg = e.message;
        reject(new Error('REJECTED!').message);
      }
      resolve('parsed');
    });
    return promise;
  };
  parsePromised(json).then(callback, callback);
};
module.exports = parse;
