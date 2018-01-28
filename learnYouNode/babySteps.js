const babySteps = (inputArray) => {
  // const inputArray = process.argv.slice(2);
  if (!Array.isArray(inputArray)) return 'input needs to be an array';
  let sum = 0;
  for (let i = 0; i < inputArray.length; i += 1) {
    // console.log(inputArray[i]);
    if (Number.isNaN(inputArray[i]) || inputArray[i] === undefined) return 'invalid array element';
  }
  inputArray.forEach((addend) => {
    sum += Number(addend);
  });
  // console.log(sum);
  return sum;
};
module.exports = babySteps;
