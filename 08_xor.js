/*
Write a function named isXor that takes two arguments, and returns true if exactly one argument 
is truthy, false otherwise. Your function should work with the boolean values of true and false, 
but also any JavaScript values based on their "truthiness".
*/

function isXor(param1, param2) {
  if ((param1 && param2) || (!param1 && !param2)) {
    return console.log(false);
  } else {
    return console.log(true);
  }
}

isXor(false, true);     // true
isXor(true, false);     // true
isXor(false, false);    // false
isXor(true, true);      // false

isXor(false, 3);        // true
isXor('a', undefined);  // true
isXor(null, '');        // false
isXor('2', 23);         // false
