const fs = require('fs');

const countNewline = (filename, testCall) => {
  // let numberOfNewLines;
  fs.readFile(filename, (err, data) => {
    if (err) return testCall('error');
    const dataString = data.toString();
    const resultArray = dataString.split('\n');
    return testCall(resultArray.length - 1);
  });
};
module.exports = countNewline;

// countNewline('index.txt');

// fs.readFile(process.argv[2], (err, data) => {
//   if (!err) {
//     const dataString = data.toString();
//     const resultArray = dataString.split('\n');
//     console.log(resultArray.length - 1);
//   }
// });
