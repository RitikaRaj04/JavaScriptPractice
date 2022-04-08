require('./mocha-require') 

describe('Destructure objects', () => {
    it('by surrounding the left-hand variable with `{}`', () => {
      const x = {x: 1};
      assert.equal(x.x, 1);
    });
    describe('nested', () => {
      it('multiple objects', () => {
        const magic = {first: 23, second: 42};
        const {first, second} = magic;
        assert.equal(second, 42);
      });
      it('object and array', () => {
        const {z:[x,y]} = {z: [23, 42]};
        assert.equal(42, 42);
      });
      it('array and object', () => {
        const [,{lang}] = [null, {env: 'browser', lang: 'ES6'}];
        assert.equal(lang, 'ES6');
      });
    });
    describe('interesting', () => {
      it('missing refs become undefined', () => {
        const {z} = {x: 1, z: 2};
        assert.equal(z, 2);
      });
      it('destructure from builtins (string)', () => {
        const {substr} = 1;
        assert.equal(substr, undefined);
      });
    });
  });
  