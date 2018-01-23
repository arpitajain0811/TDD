function foo() {
  let bar;
  function zip() {
    const quux = 2;
    bar = true;
  }
  return zip;
  quux = 3;
}
