// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');

const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');

const countOnly = require('./countOnly');
const countLetters = require('./countLetters');

const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');

const letterPosition = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  assertObjectsEqual: assertObjectsEqual,
  countOnly: countOnly,
  countLetters: countLetters,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  letterPosition: letterPosition,
  map: map,
  takeUntil: takeUntil,
  without: without
};