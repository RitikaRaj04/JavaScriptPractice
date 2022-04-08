require('./mocha-require') 

describe('`Number.parseInt()` parses a string and returns an integer.', () => {
    it('it is a static function on `Number`', () => {
      const whatType = 'function';
      assert.equal(whatType, typeof Number.parseInt);
    });
    it('is the same as the global function `parseInt`', () => {
      const parseIntFunction = Number.parseInt();
      assert.equal(parseIntFunction, global.parseInt());
    });
    it('`parseInt` was specified in ECMAScript v1 (please find that ES1 kata for learning more)', () => {
      const version = 6;
      assert.equal('ECMAScript v' + version, 'ECMAScript v1');
    });
  });
  
  const global = () => globalThis || window || global;
  
  