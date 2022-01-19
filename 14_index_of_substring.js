/*
Write two functions that each take two strings as arguments. Their expected behaviors are as follows:
- The 'indexOf' function searches for the first instance of a substring in 'firstString' that matches the string 'secondString', 
  and returns the index of the character where that substring begins.
- The 'lastIndexOf' function searches for the last instance of a substring in 'firstString' that matches the string 'secondString', 
  and returns the index of the character where that substring begins.
- Both functions return -1 if 'firstString' does not contain the substring specified by 'secondString'.

ALGORITHM:
- Given two strings
- Check if the whole string 2 matches a substring of string 1 (if string 2 appears in string 1)
- If so, return the index of char in string 1 where the match begins
- Otherwise return -1

- Given two strings
- Check if the whole string 2 matches a substring of string 1 (if string 2 appears in string 1)
- If so, return the last index of char in string where the match begins (if there are two or more matches, return start index of last match)
- Otherwise return -1
*/
/* MY UNSUCCESFUL 1st TRY: It works for the two first examples but not for the two second examples; also the 2nd function isn't implemented

function indexOf(firstString, secondString) {                // Blue Whale
  for(let j = 0; j < secondString.length; j++) {             // Whale
    let count = 0;                                           // cn
    for(let i = 0; i < firstString.length; i++) {
      if (secondString[j] === firstString[i]) {
        count += 1;
      }
    }
    if (count === secondString.length) {
      return i;
    }
  }
}

// function lastIndexOf(firstString, secondString) {
//   // statements
// }
*/

// LS SOLUTION
function indexOf(firstString, secondString) {
  let limit = firstString.length - secondString.length;

  for (let indexFirst = 0; indexFirst <= limit; indexFirst += 1) {
    let matchCount = 0;

    for (let indexSecond = 0; indexSecond < secondString.length; indexSecond += 1) {
      if (firstString[indexFirst + indexSecond] === secondString[indexSecond]) {
        matchCount += 1;
      } else {
        break;
      }
    }

    if (matchCount === secondString.length) {
      return indexFirst;
    }
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  let limit = firstString.length - secondString.length;

  for (let indexFirst = limit; indexFirst >= 0; indexFirst -= 1) {
    let matchCount = 0;

    for (let indexSecond = 0; indexSecond < secondString.length; indexSecond += 1) {
      if (firstString[indexFirst + indexSecond] === secondString[indexSecond]) {
        matchCount += 1;
      } else {
        break;
      }
    }

    if (matchCount === secondString.length) {
      return indexFirst;
    }
  }

  return -1;
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1


// TWO JS BUILT IN METHODS 

console.log('Blue Whale'.indexOf('Blue'));     // returns  0
console.log('Blue Whale'.indexOf('Blute'));    // returns -1
console.log('Blue Whale'.indexOf('Whale'));    // returns  5

console.log('canal'.lastIndexOf('a'));         // returns  3
console.log('canal'.lastIndexOf('x'));         // returns -1

// We can even provide a starting index for the search

console.log('Blue Whale'.indexOf('e', 4));     // returns  9
console.log('canal'.lastIndexOf('a', 2));      // returns  1
console.log('canal'.lastIndexOf('a', 0));      // returns -1
