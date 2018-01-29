const net = require('net');

// const portNumber = Number(process.argv[2]);
const portNumber = 1337;
const zeroFill = (i) => {
  if (i < 10) return `0${i}`;
  return `${i}`;
};
const server = net.createServer((socket) => {
  const date = new Date();
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const h = date.getHours();
  const min = date.getMinutes();
  const formattedDate = `${y}-${zeroFill(m)}-${zeroFill(d)} ${zeroFill(h)}:${zeroFill(min)}`;
  console.log(formattedDate);
  socket.end(`${formattedDate}\n`);
});
server.listen(portNumber);
