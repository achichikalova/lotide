# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tonya_chi/lotide`

**Require it:**

`const _ = require('@tonya_chi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(...)`: description
* `function2(...)`: description
* `function3(...)`: description

* `head(),`: function returns first element from an array
* `tail(),`: function returns last element from an array
* `middle(),`: function returns middle element/elements from an array
* `eqArrays(),`: function returns true or false after comparing two arrays
* `eqObjects(),`: function returns true or false after comparing two objects
* `countOnly(),`: function returns how many times the item contains in an array
* `countLetters(),`: function returns how many times the letter contains in a word
* `findKey(),`: function returns key by name with callback function
* `findKeyByValue(),`: function returns key by value with callback function
* `letterPosition(),`: function returns index of all letters in an array
* `map(),`: function returns first letter of words in an array
* `takeUntil(),`: function returns slice of an array with callback function as a condition
* `without()`: function returns slice of an array without passing parameter