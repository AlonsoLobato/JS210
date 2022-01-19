/*
This practice problem is similar to the previous one. 
This time though, both arguments are indices of the provided string. 
The following rules apply:

  - If both start and end are positive integers, start is less than end, and both are within the boundary of the string, 
    return the substring from the start index (inclusive), to the end index (NOT inclusive).
  - If the value of start is greater than end, swap the values of the two, then return the substring as described above.
  - If start is equal to end, return an empty string.
  - If end is omitted, the end variable inside the function is undefined. Return the substring starting at position start up through (and including) 
    the end of the string.
  - If either start or end is less than 0 or NaN, treat it as 0.
  - If either start or end is greater than the length of the string, treat it as equal to the string length.
*/

function substring(string, start, end) {
  
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
    // alternatively use [start, end] = [end, start];
  }
  if (end === undefined){
    end = string.length + 1;
  } 
  if (start < 0 || typeof start !== 'number'){
    start = 0;
  } 
  if (end < 0 || typeof end !== 'number'){
    end = 0;
  } 

  
  let newString = '';
  for(let i = 0; i < string.length; i++){
    if (i >= start && i < end){
      newString +=  string[i];
    }
  }

  console.log(newString);
  return;
}

let string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"


// JS BUILT IN METHOD
/*
The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
  - Note that substring and substr are two different methods.
*/

let string = 'hello world';

string.substring(2, 4);    // "ll"
string.substring(4, 2);    // "ll"

string.substring(0, -1);   // ""
string.substring(-1, 0);   // ""

string.substring(8, 20);   // "rld"
string.substring(20, 8);   // "rld"

string.substring(2);       // "llo world"
