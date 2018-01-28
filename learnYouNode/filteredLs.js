const fs = require('fs');
// const path = require('path');

const filteredLs = (directory, extension, callback) => {
  fs.readdir(directory, (err, list) => {
    if (err) return callback('error');
    const filteredList = list.filter(x => x.includes(`.${extension}`));
    return callback(filteredList);
  });
};
module.exports = filteredLs;

// const directory = process.argv[2];
// const extension = `.${process.argv[3]}`;
//
// fs.readdir(directory, (err, list) => {
//   const filteredList = list.filter(file => path.extname(file) === extension);
//   filteredList.forEach(file => console.log(file));
// });
