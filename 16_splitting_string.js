/*
Write a function that takes two arguments:

  1. a string to be split
  2. a delimiter character

and logs the split strings to the console.

Don't use any string method other than '[]' and 'lenght'
---
Algorithm:
  - initialize a variable to empty string
  - iterate the string argument
  - add each char to empty string up to (not included) the delimiter when it matches current iteration
  - log the new string and set it up to empty again
  - move iteration to next after delimiter and repeat process
  - repeat until the end of string argument
  - log the array again if isn't empty
*/

function splitString(string, delimiter) {

  if (delimiter === undefined) {
    return console.log("ERROR: No delimiter");
  }

  let newString = '';                                   //  *
  for(let i = 0; i < string.length; i++) {              // 'abc,123,hello world'
    if (string[i] === delimiter) {                      //  newString = a
      console.log(newString);
      newString = '';
    }
    else if (delimiter === '') {
      console.log(string[i]);
    }
    else {
      newString += string[i];
    }
  }
  if (newString) {
    console.log(newString);
  }
}

splitString('abc,123,hello world', ',');
// abc
// 123
// hello world

splitString('hello');
// ERROR: No delimiter

splitString('hello', '');
// h
// e
// l
// l
// o

splitString('hello', ';');
// hello

splitString(';hello;', ';');
//  (this is a blank line)
// hello

// JS BUILT IN METHOD
/*
split() returns an array of the split strings based on passed delimiter
*/

let str = 'We put comprehension and mastery above all else';

str.split(' ');     // ["We", "put", "comprehension", "and", "mastery", "above", "all", "else"]
str.split('and');   // ["We put comprehension ", " mastery above all else"]

'hello'.split('');  // ["h", "e", "l", "l", "o"]
