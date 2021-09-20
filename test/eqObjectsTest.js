const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('eqObjects', () => {
  it('return true if objects equal', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.isTrue(eqObjects(ab, ba));
  });
  it('return false if objects equal', () => {
    const ab = { a: "1", b: "2" };
    const ba = { c: "1", d: ["2", 3, 4] };
    assert.isFalse(eqObjects(ab, ba));
  });
});