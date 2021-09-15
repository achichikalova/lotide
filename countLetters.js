//IMPORTS
const assertEqual = function(actual, expected) {
  console.log(Object.entries(actual).toString(), Object.entries(expected).toString());
  if (Object.entries(actual).toString() === Object.entries(expected).toString()) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//FUNCTION
const countLetters = function(str) {
  str = str.replace(/\s+/g, '');
  let result = {};
  for (let letter of str) {
    result[letter] = result[letter] + 1 || 1;
  }
  return result;
};

//TEST CODE
//console.log(countLetters("lighthouse in the house"));
console.log(assertEqual(countLetters("lighthouse in the house"), {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1}));