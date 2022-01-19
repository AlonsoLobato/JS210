/*
Write a function that takes a number of rows as the argument nStars and logs a square of numbers and asterisks. 
For example, if nStars is 7, log the following pattern:

generatePattern(7);
// console output
1******
12*****
123****
1234***
12345**
123456*
1234567

*/

// function generatePattern(nStars) {
//   let startNum = 1;
//   let numStars;
//   let numToPrint = '';

//   while (nStars >= startNum) {
//     numStars = nStars - startNum;
//     numToPrint += String(startNum);

//     console.log((numToPrint) + ('*'.repeat(numStars)));
    
//     startNum++;
//   }
// }

// generatePattern(7);
// generatePattern(15);

/* Try to fix the function so when printing number larger than 10, it stills returns a square instead of this:
12*************
123************
1234***********
12345**********
123456*********
1234567********
12345678*******
123456789******
12345678910*****
1234567891011****
123456789101112***
12345678910111213**
1234567891011121314*
123456789101112131415
*/

function generatePattern(nStars) {             // TO BE COMPLETED, STILL NOT LOGGING THE DESIRED SQUARE
    let startNum = 1;
    let numStars;
    let numToPrint = '';
    let extraStars = 0;
    
    while (nStars >= startNum) {
      numStars = (nStars - startNum);
      numToPrint += String(startNum);

      if (String(nStars).length > 1) {
        extraStars = (nStars - 9);
        for(let i = 0; i < String(nStars).length; i++) {
          if (i > 9) {
            console.log((numToPrint) + ('*'.repeat(numStars + extraStars)));
          } else {
            console.log((numToPrint) + ('*'.repeat(numStars)));
          }
        }
      } 
      startNum++;
    }
  }
  
  // generatePattern(7);
  generatePattern(15);
