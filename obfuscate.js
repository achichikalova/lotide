// Our program should define a function named obfuscate. This function should take a string as an argument and obfuscate it by applying the following rules:

// Every "a" in the string should be replaced with a "4".
// Every "e" in the string should be replaced with a "3".
// Every "o" (oh) in the string should be replaced with a "0" (zero).
// Every "l" (el) in the string should be replaced with a "1" (one).

let password = "abracadaberla";
const replacement = {
  a: 4,
  e: 3,
  o: 0,
  l: 1,
};

const obfuscate = (word) => {
  let result = [];
  for (let letter of word) {
    if (Object.keys(replacement).includes(letter)) {
      result.push(replacement[letter]);
    } else {
      result.push(letter);
    }
  }
  return result.join("");
};

console.log(obfuscate(password));
