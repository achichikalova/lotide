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
  head,
  tail,
  middle,
  eqArrays,
  eqObjects,
  countOnly,
  countLetters,
  findKey,
  findKeyByValue,
  letterPosition,
  map,
  takeUntil,
  without
};