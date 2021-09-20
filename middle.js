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

module.exports = middle;