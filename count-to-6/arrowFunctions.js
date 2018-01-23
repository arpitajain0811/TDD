module.exports = function arrowFn(arrayInputs) {
  const mapReduced = arrayInputs.map(arrayElement => arrayElement.charAt(0))
    .reduce((concatenated, arrayElement) => concatenated.concat(arrayElement), '');
  // console.log('[', inputs.toString(), ']', 'becomes', result);
  console.log(`[${arrayInputs}] becomes ${mapReduced}`);
};
