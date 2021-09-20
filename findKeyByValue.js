const findKeyByValue = function(obj, value) {
  for (let [key, val] of Object.entries(obj)) {
    if (val === value) {
      return key;
    }
  }
};
module.exports = findKeyByValue;