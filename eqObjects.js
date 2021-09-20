const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;