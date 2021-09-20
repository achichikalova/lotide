const takeUntil = function(array, callback) {
  // return a slice of the array with elements taken from the beginning
  let value;
  for (const item of array) {
    if (callback(item)) {
      value = array.indexOf(item);
    }
  }
  return array.slice(0, value);
};

module.exports = takeUntil;