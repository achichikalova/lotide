//IMPORTS
const assertEqual = require('./assertEqual');

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

//ACTUAL FUNCTION
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

//TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba), true));
const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc), false));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc), true));

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2), false));

