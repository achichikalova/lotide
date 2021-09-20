const assert = require('chai').assert;
const middle = require('../middle');
// //TEST CODE
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// assertArraysEqual(middle([1, 2]), []);

describe('middle', () => {
  it('should return [2, 3] from [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it('should return [3] from [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it('should return [] from [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
})