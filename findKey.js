//IMPORTS
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//FUNCTION IMPLEMENTATION
//It should scan the object and return the first key for which the callback returns a truthy value.
//If no key is found, then it should return undefined.
const findKey = function(obj, callback) {
  for (let [key, val] of Object.entries(obj)) {
    if (callback(val)) {
      return key;
    }
  }
};

//TEST CODE
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, key => key.stars === 2), "noma");