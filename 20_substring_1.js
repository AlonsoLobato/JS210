/*
Write a function that returns a substring of a string based on a starting index and length.

- The start argument is the starting index. 
- If start is negative, treat it as strLength + start where strLength is the length of the string. 
  - For example, if start is -3, treat it as strLength - 3.
- The length argument is the maximum length of the desired substring. 
- If length exceeds the number of characters available, just use the available characters.
*/

function substr(string, start, length) {
  if (start < 0) {
    start = string.length + start
  }
  if (length <= 0) {
    console.log('');
    return;
  }

  let newString = '';

  for(let i = 0; i < string.length; i++) {
    if (i >= start) {
      newString += string[i];
      if (newString.length >= length) {
        break;
      }
    } 
  }

  console.log(newString);
  return;
}

let string = 'hello world';
substr(string, 0, 4);      // "hell"
substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""
substr('Thanks Katie', 4, 7); // "ks Kati"
substr('hello world', 2, 5); // "llo w"

// JS BUILT IN METHOD
/*
DEPRECATED:
The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
*/

let string = 'hello world';

string.substr(2, 4);    // "llo "
string.substr(-3, 2);   // "rl"
string.substr(8, 20);   // "rld"
string.substr(0, -20);  // ""
string.substr(0, 0);    // ""
string.substr(1);       // "ello world"
                        // goes to the end of the string if the second arg is omitted
