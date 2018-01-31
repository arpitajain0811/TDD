const iterate = input => input + 1;
const alwaysThrows = () => {
  throw new Error('OH NOES');
};

module.exports = { iterate, alwaysThrows };
