//IMPORTS
const assertEqual = require('./assertEqual');

//ACTUAL FUNCTION
const findKeyByValue = function(obj, value) {
  for (let [key, val] of Object.entries(obj)) {
    if (val === value) {
      return key;
    }
  }
};

//TEST CODE
const bestTVShowsByGenre = {
  'sci_fi': "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// findKeyByValue(bestTVShowsByGenre, "The Wire");
// findKeyByValue(bestTVShowsByGenre, "That '70s Show");
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));