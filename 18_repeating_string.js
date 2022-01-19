/*
Implement a function that determines whether a string begins with another string. 
If it does, the function should return true, or false otherwise.

You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. 
However, you may not use any other properties or methods from JavaScript's built-in String class.

Algorithm:
  - Given two strings
  - Iterate both simultaneously, up to the lenght of the second
  - If all characters (including non alphabetical and spaces) match
    - return true
  - Otherwise
    - return false

*/

function startsWith(string, searchString) {

  for(let i = 0; i < searchString.length; i++){
    if (string[i] !== searchString[i]){
      console.log(false);
      return;
    }
  }
  console.log(true);
  return;
}

let str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false

// JS BUILT IN METHOD
/*
The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
It takes an optional second argument to begin the comparison with a different index.
*/

let str = 'We put comprehension and mastery above all else';

str.startsWith('We');       // true
str.startsWith('We put');   // true
str.startsWith('put');      // false
str.startsWith('Put');      // false
str.startsWith('put', 3);   // true
