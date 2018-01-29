const net = require('net');
const timeServer = require('./timeServer.js');

describe('checking the zeroFill function which helps convert the date to YYYY-MM-DD hh:mm format', () => {
  it('returns a number less than 10 in 2 digits', () => {
    expect(timeServer.zeroFill(5)).toMatch('05');
  });
  it('returns a number greater than 10 without zero fills', () => {
    expect(timeServer.zeroFill(15)).toMatch('15');
  });
});
describe('checking the formatDate function which converts the date to YYYY-MM-DD hh:mm format', () => {
  it('returns date in required format', () => {
    const sampleDate = new Date(2018, 2, 15, 7, 20);

    expect(timeServer.formatDate(sampleDate)).toMatch('2018-03-15 07:20');
  });
});
describe('check connection to timeServer and get server time in YYYY-MM-DD hh:mm format', () => {
  it('returns the correct time and in the required format', () => {
    const client = new net.Socket();
    client.connect(1337, () => {
      // console.log('Connected');
    });

    client.on('data', (data) => {
      const localDate = new Date();
      // const y = localDate.getFullYear();
      // const m = localDate.getMonth() + 1;
      // const d = localDate.getDate();
      // const h = localDate.getHours();
      // const min = localDate.getMinutes();
      const formattedDate = timeServer.formatDate(localDate);
      expect(formattedDate).toMatch(data);
      // console.log(`Received: ${data}`);
      client.destroy(); // kill client after server's response
    });

    client.on('close', () => {
      // console.log('Connection closed');
    });
  });
});
