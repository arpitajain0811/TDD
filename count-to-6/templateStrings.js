// let name = process.argv[2];
module.exports = function lowerCase(name) {
  const lowerCased = name.toLowerCase();
  // console.log(`Hello, ${name}!
  // Your name lowercased is "${lowerCased}".`);
  const output = `Hello, ${name}!
Your name lowercased is "${lowerCased}".`;
  return output;
};
