// let numbers = process.argv.slice(2);
module.exports = function spreadMin(numbers) {
  const min = Math.min(...numbers);
  console.log(`The minimum of [${numbers}] is ${min}`);
};
