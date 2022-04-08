require('./mocha-require') 

describe('When destructuring you can also provide default values', () => {
    it('just assign a default value, like so `a=1`', () => {
      const {a=1} = [];
      assert.equal(a, 1);
    });
    it('for a missing value', () => {
      const [b=2] = [1,2,3];
      assert.equal(b, 1);
    });
    it('in an object', () => {
      const {a, b=2} = {a:1,b:2};
      assert.equal(b,2);
    });
    it('if the value is undefined', () => {
      const {a, b} = {a: 1, b:2};
      assert.strictEqual(b, 2);
    });
    it('also a string works with defaults', () => {
      const [a, b=2] = '1';
      assert.equal(a, '1');
      assert.equal(b, 2);
    });
  });