const http = require('http');
const bl = require('bl');

let count = 0;
const responseArray = [];
const callbackFunction = (response, input) => {
  response.pipe(bl((err, data) => {
    const dataString = data.toString();
    count += 1;
    responseArray[input] = dataString;
    // console.log('hi1');
    if (count === 3) {
      return (responseArray);
    }
  }));
};
const juggleAsync = (urls) => {
  if (urls.length !== 3) return ('need 3 URLs as input');

  const juggle = (input) => {
    http.get(urls[input], (response) => {
      callbackFunction(response, input);
    });
    // response.setEncoding('utf8');
    // response.pipe(bl((err, data) => {
    //   const dataString = data.toString();
    //   count += 1;
    //   responseArray[input] = dataString;
    //   // console.log('hi1');
    //   if (count === 3) {
    //     return callback(responseArray);
    //     // for (let i = 0; i < 3; i += 1) { console.log(responseArray[i]); }
    //   }
    // }));
    // });
  };
  for (let i = 0; i < 3; i += 1) { juggle(i); }
};
module.exports = juggleAsync;
