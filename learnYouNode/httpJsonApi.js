const http = require('http');
const url = require('url');


const server = http.createServer((req, res) => {
  let result;
  const urlObject = url.parse(req.url, true);
  if (urlObject.pathname === '/api/unixtime') {
    const date = new Date(Date.parse(urlObject.query.iso));
    result = { unixtime: date.getTime() };
  } else {
    const data = new Date(Date.parse(urlObject.query.iso));
    result = { hour: data.getHours(), minute: data.getMinutes(), second: data.getSeconds() };
  }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(result));
});
server.listen(process.argv[2]);
