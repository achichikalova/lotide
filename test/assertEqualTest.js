const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(8, 8);
assertEqual('1', 1);
assertEqual(null, 1);

// describe('assertEqual', () => {
//   it('should return Assertion Failed message', () => {
//     const actual = assertEqual("Lighthouse Labs", "Bootcamp");
//     const expected = '🛑🛑🛑 Assertion Failed: Lighthouse Labs !== Bootcamp';
//     assert.deepEqual(actual, expected);
//   });
//   it('should return Assertion Passed message', () => {
//     const actual = assertEqual(8, 8);
//     const expected = '✅✅✅ Assertion Passed: 8 === 8';
//     assert.deepEqual(actual, expected);
//   });
// })