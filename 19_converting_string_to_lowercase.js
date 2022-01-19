/*
Write a function that returns a string converted to lowercase.

To convert a single uppercase character to a lowercase character, get its ASCII numeric representation from the ASCII table, add 32 to that number, 
then convert the number back to a character using the same ASCII table. You can use the String.fromCharCode and the String.charCodeAt methods for 
these operations. For example:

let string = 'A';
let asciiNumeric = string.charCodeAt(0);         // 65
asciiNumeric += 32;
string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase
*/

function toLowerCase(string) {
  let newString = '';

  for(let i = 0; i < string.length; i++) {
    let char = string[i];
    let newChar = ''; 
    if (/[A-Z]/.test(char)) {
      let ascii = char.charCodeAt(0) + 32;
      newChar = String.fromCharCode(ascii);
      newString += newChar;
    }
    else {
      newString += char;
    }
  }
  console.log(newString);
  return;
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"


// JS BUILT IN METHODS
/*
The toLowerCase() method returns the calling string value converted to lower case.
The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
*/

'miXedCase1Word'.toLowerCase();    // returns "mixedcase1word"
'miXedCase1Word'.toUpperCase();    // returns "MIXEDCASE1WORD"
