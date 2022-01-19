/*
Write a function named checkGoldbach that uses Goldbach's Conjecture to log every pair of primes that sum to the number supplied as an argument. 
The conjecture states that "you can express every even integer greater than 2 as the sum of two primes". 
The function takes as its only parameter, an integer expectedSum, and logs all combinations of two prime numbers whose sum is expectedSum. 
Log the prime pairs with the smaller number first. If expectedSum is odd or less than 4, your function should log null.
*/

function isOdd(number) {
  if (number % 2 === 1) {
    return true;
  }
  return false;
}

function isPrime(number) {
  if (number <= 1) {
    return false
  }

  for(let i = 2; i < number; i++) {
    if (number % i === 0 ){
      return false;
    } 
  }
  return true;
}

// function checkGoldbach(expectedSum) {

//   if (isOdd(expectedSum) || expectedSum < 4) {
//     console.log(null);
//     return;
//   }

//   let allPrimes = [];
//   for(let i = 2; i < expectedSum; i++) {
//     if (isPrime(i)) {
//       allPrimes.push(i);
//     }
//   }

//   let allValidPairs = [];
//   for(let i = 0; i < allPrimes.length; i++) {
//     for(let j = 1; j < i; j++) {
//       if (allPrimes[i] + allPrimes[j] === expectedSum) {
//         allValidPairs.push(allPrimes[i], allPrimes[j])
//       }
//     }
//   }

//   allValidPairs = allValidPairs.reverse();
//   let index = 0
//   while (index < allValidPairs.length) {
//     console.log(allValidPairs[index], allValidPairs[index + 1]);
//     index += 2;
//   }
// }

let checkGoldbach = function(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 === 1) {
    console.log(null);
    return;
  }

  let num1 = 1;
  let num2;

  do {
    num1 += 1;
    num2 = expectedSum - num1;
    if (isPrime(num1) && isPrime(num2)) {
      console.log(num1, num2);
    }

  } while (num1 !== num2);
};

checkGoldbach(3);
// null

checkGoldbach(4);
// 2 2

checkGoldbach(12);
// 5 7

checkGoldbach(100);
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
