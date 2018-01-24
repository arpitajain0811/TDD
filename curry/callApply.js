const callAndApply = {
  caller(object, method, nameArg, ageArg, tShirtSizeArg) {
    if (typeof object !== 'object' || Array.isArray(object)) return false;
    if (Array.isArray(nameArg)) return false;
    method.call(object, nameArg, ageArg, tShirtSizeArg);
    return object;
  },
  applier(object, method, argumentsArr) {
    if (typeof object !== 'object' || Array.isArray(object)) return false;
    if (!Array.isArray(argumentsArr)) return false;
    method.apply(object, argumentsArr);
    return object;
  },
};
module.exports = callAndApply;
