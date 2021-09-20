const countLetters = function(str) {
  str = str.replace(/\s+/g, '');
  let result = {};
  for (let letter of str) {
    result[letter] = result[letter] + 1 || 1;
  }
  return result;
};

module.exports = countLetters;