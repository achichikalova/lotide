//Emoji
const failed = String.fromCodePoint(0x1F621);

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(` ✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(` 🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);    
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(8, 8);
assertEqual('1', 1);
assertEqual(null, 1);