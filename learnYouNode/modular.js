const fs = require('fs');
const path = require('path');

const filteredLs = (directory, extension, fn) => {
  fs.readdir(directory, (err, list) => {
    if (err) return fn(err);
    const filteredList = list.filter(file => path.extname(file) === `.${extension}`);
    // filteredList.forEach(return fn(null,file));
    return fn(null, filteredList);
  });
};
module.exports = filteredLs;
