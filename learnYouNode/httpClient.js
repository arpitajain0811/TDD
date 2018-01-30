const http = require('http');

const httpRequest = (url, callback) => {
  http.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('data', () => callback(null, 'data'));
    response.on('error', () => callback('Error'));
  });
};
module.exports = httpRequest;
