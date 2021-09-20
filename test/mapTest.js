const assert = require('chai').assert;
const map = require('../map');

//TEST CODE
// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);

// console.log(assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']));
// console.log(assertArraysEqual(results1, ['a', 'c', 't', 'm', 't']));
describe('map', () => {
  it("return ['a', 'c', 't', 'm', 't'] from ['ground', 'control', 'to', 'major', 'tom']", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word[0]);
    assert.deepEqual(results1, ['g', 'c', 't', 'm', 't']);
  })
})