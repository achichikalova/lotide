const assert = require('chai').assert;
const findKey = require('../findKey');

describe('findKey', () => {
  it('return key by name with callback function', () => {
    assert.strictEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, key => key.stars === 2), 'noma')
  });
});