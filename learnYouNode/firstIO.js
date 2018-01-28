// const fs = require('fs');
//
// const data = fs.readFileSync(process.argv[2]);
// const dataString = data.toString();
// const resultArray = dataString.split('\n');
// console.log(resultArray.length - 1);


const fs = require('fs');

const countNewline = (filename) => {
  const data = fs.readFileSync(filename);
  const dataString = data.toString();
  const resultArray = dataString.split('\n');
  return resultArray.length - 1;
};
module.exports = countNewline;
