const callAndApply = require('./callApply.js');

const update = function update(name, age, tShirtSize) {
  this.name = name;
  this.age = age;
  this.tShirtSize = tShirtSize;
  return this;
};
const person = { name: 'Rakesh', age: 28, tShirtSize: 'L' };
describe('updating with valid inputs', () => {
  it('call function by passing valid input as comma separated values', () => {
    expect(callAndApply.caller(person, update, 'Ramesh', '22', 'L')).toEqual({ age: '22', name: 'Ramesh', tShirtSize: 'L' });
  });
  it('applier function with valid inputs as array', () => {
    expect(callAndApply.applier(person, update, ['Ramesh', '22', 'L'])).toEqual({ age: '22', name: 'Ramesh', tShirtSize: 'L' });
  });
  it('checking type of output to be object for applier', () => {
    expect(typeof callAndApply.applier(person, update, ['Ramesh', '22', 'L'])).toEqual('object');
  });
  it('checking type of output to be object for caller', () => {
    expect(typeof callAndApply.caller(person, update, 'Ramesh', '22', 'L')).toEqual('object');
  });
});

describe('test cases for invalid input', () => {
  it('caller function with this as object', () => {
    expect(callAndApply.caller('this', update, 'Ramesh', '22', 'L')).toEqual(false);
  });
  it('testcase 2 for valid input 1 as object', () => {
    expect(callAndApply.applier(1, update, ['Ramesh', '22', 'L'])).toEqual(false);
  });
  it('testcase 3 for valid input array is object', () => {
    expect(callAndApply.applier([1, 2, 3], update, ['Ramesh', '22', 'L'])).toEqual(false);
  });
  it('testcase 4 for valid input undefined as object', () => {
    expect(callAndApply.applier(undefined, update, ['Ramesh', '22', 'L'])).toEqual(false);
  });
  it('testcase 5 for valid input 1 as object', () => {
    expect(callAndApply.caller(1, update, 'Ramesh', '22', 'L')).toEqual(false);
  });
  it('testcase 6 for valid input array is object', () => {
    expect(callAndApply.caller([1, 2, 3], update, 'Ramesh', '22', 'L')).toEqual(false);
  });
  it('testcase 7 for valid input undefined as object', () => {
    expect(callAndApply.caller(undefined, update, 'Ramesh', '22', 'L')).toEqual(false);
  });
});

describe('checking with wrong type of parameter for call and apply', () => {
  it('call function by passing invalid input as array', () => {
    expect(callAndApply.caller(person, update, ['Ramesh', '22', 'L'])).toEqual(false);
  });
  it('applier function with valid inputs as comma seperated values', () => {
    expect(callAndApply.applier(person, update, 'Ramesh', '22', 'L')).toEqual(false);
  });
});
