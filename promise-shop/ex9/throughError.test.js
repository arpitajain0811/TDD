const throwError = require('./throughError.js');

describe('promise handles error similar to synchronous code', () => {
  it('resolves for valid json as input', (done) => {
    const call = (data) => {
      expect(data).toEqual('parsed');
      done();
    };
    throwError('{"abc":1}', call);
  });
  it('captures the error thrown in a function with invalid json input', (done) => {
    const call = (data) => {
      expect(data).toEqual('REJECTED!');
      done();
    };
    throwError('blah', call);
  });
});
