const assertArraysEqual = require('../assertArraysEqual');

describe('assertArraysEqual', () => {
  it('should return Assertion Passed message', () => {
    assertArraysEqual([1,2,3],[1,2,3]), '✅✅✅ Assertion Passed: 1,2,3 === 1,2,3';
  });
  it('should return Assertion Failed message', () => {
    assertArraysEqual([1,2,3],[3,4,5]), '🛑🛑🛑 Assertion Failed: 1,2,3 !== 3,4,5';
  });
})