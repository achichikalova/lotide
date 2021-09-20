const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('eqArrays', () => {
  it('should return true if arrays are equal', () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it('should return true if arrays are equal', () => {
    assert.isTrue(eqArrays(['1', '2', '3'], ['1', '2', '3']));
  });
  it('should return false if arrays are equal', () => {
    assert.isFalse(eqArrays([1, 2, 3], [1, 5, 3]));
  });
  it('should return false if arrays are equal', () => {
    assert.isFalse(eqArrays(['1', '2', '3'], ['1', '2', 3]));
  });
})