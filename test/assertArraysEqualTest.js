const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

//TEST CODE:
// assertArraysEqual([1,2,3],[3,4,5]);
// assertArraysEqual([1,2,3],[1,2,3]);

// describe('assertArraysEqual', () => {
//   it('should return Assertion Passed message', () => {
//     assert.strictEqual(assertArraysEqual([1,2,3],[1,2,3]), '✅✅✅ Assertion Passed: 1,2,3 === 1,2,3');
//   });
//   it('should return Assertion Failed message', () => {
//     assert.strictEqual(assertArraysEqual([1,2,3],[3,4,5]), '🛑🛑🛑 Assertion Failed: 1,2,3 !== 3,4,5');
//   });
// })