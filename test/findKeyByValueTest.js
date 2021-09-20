const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');


//TEST CODE
// const bestTVShowsByGenre = {
//   'sci_fi': "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// // findKeyByValue(bestTVShowsByGenre, "The Wire");
// // findKeyByValue(bestTVShowsByGenre, "That '70s Show");
// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));

describe('findKeyByValue', () => {
  it('return key by value', () => {
    const bestTVShowsByGenre = {
    'sci_fi': "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it('return undefined if there is no such a value', () => {
    const bestTVShowsByGenre = {
    'sci_fi': "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  })
})