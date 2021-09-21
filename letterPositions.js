const { letterPosition } = require(".");

const letterPositions = function(sentence) {
  let str = sentence.replace(/\s+/g, '');
  const result = {};
  for (let i = 0; i < str.length; i++) {
    let value = [];
    for (let j = 0; j < str.length; j++) {
      if (str[j] === str[i]) {
        value.push(j);
      }
    }
    result[str[i]] = value;
  }
  return result;
};

module.exports = letterPositions;