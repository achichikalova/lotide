const assertEqual = require('../assertEqual');

describe('assertEqual', () => {
  it('should return Assertion Failed message', () => {
    assertEqual("Lighthouse Labs", "Bootcamp");
  });
  it('should return Assertion Failed message', () => {
    assertEqual(8, 8);
  });
  it('should return Assertion Failed message', () => {
    assertEqual('1', 1);
  });
  it('should return Assertion Passed message', () => {
    assertEqual(null, 1);
  });
})