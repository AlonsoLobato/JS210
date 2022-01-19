/*
Write a function that takes a number argument, and returns true if the number is prime, or false if it is not.
A prime number is a number that has no positive divisors other than 1 and itself. By definition, neither 0 nor 1 are primes.
*/

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

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false
