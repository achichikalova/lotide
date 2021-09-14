const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION IMPLEMENTATION
const tail = function(arr) {
  let newArr;
  if (arr.length === 1) {
    newArr = [];
  } else {
    newArr = arr.slice(1);
    //console.log(arr); //original array
    //console.log(newArr); //new modify array
  }
  return newArr;

};

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
const check = ["Lighthouse", "Labs"];
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

assertEqual(result.join(), check.join()); // => will pass!
