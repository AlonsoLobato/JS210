/*
Write a function that takes a string as an argument, and returns the string stripped of spaces from both ends. 
Do not remove or alter internal spaces.

You may not use any properties or methods from JavaScript's built-in String class other than [] and length.
*/

function trimFront(string) {
  let newString = '';
  let copyMode = false

  for(let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      copyMode = true;
    }
    if (copyMode) {
      newString += string[i];
    }
  }
  return newString;
}

console.log(trimFront('  ab  c   ')) // 'ab  c   '     --> test trimFront

function trimBack(string) {
  let newString = '';
  copyMode = false;
  
  for(let i = string.length -1; i >= 0; i--) {
    if (string[i] !== ' ') {
      copyMode = true;
    } 
    if (copyMode) {
      newString = string[i] + newString;
    }
  }
  return newString;
}

console.log(trimBack('  ab  c   ')) // '  ab  c'      --> test trimBack


function trim(string) {
  let trimmedString = trimFront(string);
  trimmedString = trimBack(trimmedString);
  return trimmedString;
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""


// JS built in methods
/*
The trim() method removes whitespace from both ends of a string (but not from the middle) and returns a new string, without modifying the original string. 
Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
*/

let original = '   foo  ';
original.trim();            // "foo"
