const warmUp = require('./warmUp');

describe('Argument Validation: ', () => {
  it('does not work for null args: ', () => {
    expect(warmUp(null)).toBe(false);
  });

  it('does not work for undefined args: ', () => {
    expect(warmUp(undefined)).toBe(false);
  });
});

describe('Functionality of setTimeout: ', () => {
  jest.useFakeTimers();
  warmUp('TIMED OUT!');
  test('Should be called for 1 time: ', () => {
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });

  test('Should be called with \'TIMED OUT!\': ', () => {
    expect(setTimeout).toHaveBeenCalledWith(console.log('TIMED OUT!'), 300);
  });
});
