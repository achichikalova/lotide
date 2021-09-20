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

module.exports = findKey;