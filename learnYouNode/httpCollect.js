const http = require('http');
const bl = require('bl');

const collect = (url, callback) => {
  http.get(url, (response) => {
  // response.setEncoding('utf8');
    response.pipe(bl((err, data) => {
      const dataString = data.toString();
      console.log(dataString.length);
      console.log(dataString);
      callback(null, 'response piped');
    }));
  });
};
module.exports = collect;
