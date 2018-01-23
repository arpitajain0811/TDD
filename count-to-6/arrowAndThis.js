module.exports = function arrow() {
  const foot = {
    kick() {
      this.yelp = 'Ouch!';
      setImmediate(() => console.log(this.yelp));
    },
  };
  foot.kick();
};
