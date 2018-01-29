const map = require('through2-map');
const http = require('http');
// const fs = require('fs');

const portNumber = process.argv[2];
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(map(request => request.toString().toUpperCase())).pipe(res);
  }
});
server.listen(portNumber);
