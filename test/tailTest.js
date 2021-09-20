const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
const check = ["Lighthouse", "Labs"];
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
assertEqual(result.join(), check.join()); // => will pass!