const filteredLs = require('./filteredLs.js');


describe('returns the list of files with the given extension', () => {
  const outputList = ['anotherFile.js', 'hello.js'];
  it('works for valid directory in the same folder and valid extension', (done) => {
    const call = (data) => {
      expect(data).toEqual(outputList);
      done();
    };
    filteredLs('./testdir', 'js', call);
  });
  it('returns empty array for directory with no files of given extension', (done) => {
    const call = (data) => {
      expect(data).toEqual([]);
      done();
    };
    filteredLs('./testdir', 'dat', call);
  });
  it('works for directory as the current folder', (done) => {
    const call = (data) => {
      expect(data).toEqual(['hello.txt']);
      done();
    };
    filteredLs('./testdir', 'txt', call);
  });
  it('gives error for invalid directory', (done) => {
    const call = (data) => {
      expect(data).toEqual('error');
      done();
    };
    filteredLs('./doesNotExist', 'js', call);
  });
});
