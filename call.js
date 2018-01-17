function duckCount () {
  return Array.prototype.slice.call(arguments).filter(function (obj) {
    return Object.hasOwnProperty.call(obj, 'quack');
  }).length;
}
module.exports = duckCount;
