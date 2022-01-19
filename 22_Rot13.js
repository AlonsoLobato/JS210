/*
Rot13 ("rotate by 13 places") is a letter-substitution cipher that translates a String into a new String:

For each character in the original String:

  - If the character is a letter in the modern English alphabet, change it to the character 13 positions later in the alphabet. 
    Thus, a becomes n. If you reach the end of the alphabet, return to the beginning. Thus, o becomes b.
  - Letter transformations preserve case. A becomes N while a becomes n.
  - Don't modify characters that are not letters.
  - Write a Function, rot13, that takes a String and returns that String transformed by the rot13 cipher.
  - It's worth noting that rot13 applied twice results in the original string: This happens since there are 26 characters in the modern English alphabet: 2 sets of 13.    

Algorithm:
  - Declare a variable new string to empty string
  - Declare two variables to all characters in alphabet, one uppercase one lowercase 
  - Iterate the given string argument
  - Using regex expresion, detect if:
    - Current character is uppercase
      - Obtain the index position of current char in uppercase alphabet variable
      - Add 13 to that index and apply modulo 26, so if index position goes over 26, it'll start over from index position 0
      - Retrieve the character in uppercase alphabet variable at index position obtain in previous step 
      - Concatenate it to the new string variable
    - Current character is lowercas
      - Repeat all steps for uppercase, but using lowercase alphabet variable
    - Current character isn't uppercase nor lowercase
      - Concatenate the character to new string variable without modification
  - Return new string variable
*/

function rot13(string) {
  newString = '';
  const upperAZ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerAZ = 'abcdefghijklmnopqrstuvwxyz';

  for(let i = 0; i < string.length; i++){
    let char = string[i];
    if(/[A-Z]/.test(char)) {
      newString += upperAZ[(upperAZ.indexOf(char) + 13) % 26];
    } else if(/[a-z]/.test(char)){
      newString += lowerAZ[(lowerAZ.indexOf(char) + 13) % 26];
    } else {
      newString += char;
    }
  }
  return newString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
// Teachers open the door, but you must enter by yourself.
