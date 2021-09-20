// FUNCTION IMPLEMENTATION
const tail = function(arr) {
  let newArr;
  if (arr.length === 1) {
    newArr = [];
  } else {
    newArr = arr.slice(1);
  }
  return newArr;

};

module.exports = tail;