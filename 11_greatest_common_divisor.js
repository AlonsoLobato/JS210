// Create a function that computes the Greatest Common Divisor of two positive integers.
/*
  - Find the divisors of num1.
  - Find the divisors of num2.
  - Find the common divisors of num1 and num2.
  - Return the highest.
*/

function divisors(num) {
  let candidate = 1;
  let divisors = [];
  while (candidate <= num) {
    if (num % candidate === 0) {
      divisors.push(candidate);
    }
    candidate += 1
  }
  return divisors;
}

// function gcd(num1, num2) {
//   let num1Divisors = divisors(num1);
//   let num2Divisors = divisors(num2);
//   let commonDivisors = [];

//   num1Divisors.forEach(divisor1 => {
//     num2Divisors.forEach(divisor2 => {
//       if (divisor1 === divisor2) {
//         commonDivisors.push(divisor1);
//       }
//     });
//   });
  
//   return Math.max(...commonDivisors);
// }

// console.log(gcd(13, 48));   // 1
// console.log(gcd(12, 4));   // 4
// console.log(gcd(10, 15));  // 5
// console.log(gcd(9, 2));    // 1


// --------------- Can you expand it to accept an array of two or more numbers instead?

function gcd(array) {
  let allDivisors = []
  array.forEach(number => {
    allDivisors.push(divisors(number));            // nested array with all divisors of each number in original array
  });
  
  let commonDivisors = allDivisors.reduce((join, current) => join.filter(el => current.includes(el)));
  return Math.max(...commonDivisors);
}

console.log(gcd([22,46,100,24])); // 2
console.log(gcd([100,200,300])); // 100
console.log(gcd([23,57,99])); // 1
console.log(gcd([10, 15]));  // 5

