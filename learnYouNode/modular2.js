const modular = require('./modular.js');

// const directory = process.argv[2];
// const extension = process.argv[3];
const modular2 = (directory, extension, callback) => {
  modular(directory, extension, (err, data) => {
    if (err) { return callback('error'); }
    // data.forEach(file => console.log(file));
    return callback(data);
  });
};
module.exports = modular2;
