//IMPORTS
const eqArrays = require('./eqArrays');
const eqObjects = function(object1, object2) {
  //return false if length of objects is not the same
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (let key1 of Object.keys(object1)) {
    //return false if there is no matching key
    if (!Object.prototype.hasOwnProperty.call(object2, key1)) return false;

    // return false if the type of key1 value is not equal to correlated type of key in object2
    if (typeof object1[key1] !== typeof object2[key1]) return false;

    // compare values of object1[key1] and object2[key2] if its type is an array
    if (Array.isArray(object1[key1])) {
      if (!eqArrays(object1[key1], object2[key1])) return false;
    } else {
      if (object1[key1] !== object2[key1]) return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed:${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

};

//TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);

