const validateInput = (input) => {
  if ((input === null) || (input === undefined)) {
    console.log(`Err1: ${input} args supplied!`);
    return false;
  }
  return true;
};

const warmUp = (input) => {
  if (!validateInput(input)) {
    return false;
  }
  setTimeout(console.log('TIMED OUT!'), 300);
  return true;
};


module.exports = warmUp;
