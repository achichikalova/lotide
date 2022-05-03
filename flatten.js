// Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

let result = [];

const flatten = (arr) => {
  for (let num of arr) {
    if (Array.isArray(num)) {
      flatten(num);
    } else {
      result.push(num);
    }
  }
  return result;
};

console.log(flatten([1, 2, [3, [1, 2, 3], 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
