/*
Implement a function that takes a string and a number times as arguments. The function should return the string repeated times number of times. 
If times is not a number, return undefined. If it is a negative number, return undefined also. If times is 0, return an empty string. 
You may ignore the possibility that times is a number that isn't an integer.
You may concatenate strings, but you may not use any other properties or methods from JavaScript's built-in String class.

Algorithm
  - concatenate string argument to itself as many times as the number argument indicates
  - undefined if number argument isn't a number larger or equal than 0
  - an argument of 0 returns empty string
*/

function repeat(string, times) {
  if(typeof times !== 'number' || times < 0 ) {
    console.log(undefined);
    return;
  }
  let newString = ''

  for(let i = 1; i <= times; i++){
    newString += string;
  }

  return console.log(newString);
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', 12)       // "abcabcabcabcabcabcabcabcabcabcabcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined


// JS BUILT IN METHOD
/*
The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, 
concatenated together.

It handles floating point times parameters, and ensures that times is a 31-bit integer for optimization
*/

// String.prototype.repeat(times);
// 'abcd'.repeat(times);

'abcd'.repeat(3);      // "abcdabcdabcd"
'abcd'.repeat('a');    // ""
'abcd'.repeat(1.6);    // "abcd"
'abcd'.repeat(1/0);    // RangeError
