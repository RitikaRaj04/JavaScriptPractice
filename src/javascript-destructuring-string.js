require('./mocha-require') 

describe('Destructuring also works on strings', () => {
    it('destructure every character, just as if the string was an array', () => {
      let a, b, c = 'abc';
      assert.deepEqual([a, b, c], [undefined,undefined,'abc']);
    });
    it('missing characters are undefined', () => {
      const [a, c] = 'ab';
      assert.equal(c,'b');
    });
    it('unicode character work too', () => {
      const [space, coffee] = 'a☕';
      assert.equal(coffee,'☕');
    });
  });