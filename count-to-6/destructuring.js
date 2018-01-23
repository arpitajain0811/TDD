module.exports = function destructure() {
  // let userArray = process.argv.slice(2);
  const userArray = [7, 'abc0811', 'abc@gmail.com', 20, 'abc', 'xyz'];
  const data = {};
  [, data.username, data.email] = userArray;
  console.log(data);
};
