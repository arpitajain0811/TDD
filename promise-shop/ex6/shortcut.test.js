const shortcut = require('./shortcut');

describe('promise rejects with error message', () => {
  it('returns rejected', (done) => {
    const call = (data) => {
      expect(data).toEqual('rejected');
      done();
    };
    shortcut.usingCatch(call);
  });
  it('returns resolved', (done) => {
    const call = (data) => {
      expect(data).toEqual('resolved');
      done();
    };
    shortcut.resolveShortcut(call);
  });
});
