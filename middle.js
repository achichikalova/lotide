// TEST/ASSERTION FUNCTIONS
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

// ACTUAL FUNCTION
const middle = function(array) {
  let result = [];
  if (array.length <= 2) {
    result = [];
  } else {
    if (array.length % 2 !== 0) {
      result.push(array[Math.floor(array.length / 2)]);
    }
    if (array.length % 2 === 0) {
      result.push(array[Math.floor((array.length - 1) / 2)], array[Math.floor((array.length + 1) / 2)]);
    }
  }
  return result;
};


//TEST CODE
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2]), []);