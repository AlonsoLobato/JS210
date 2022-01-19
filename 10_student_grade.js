/*
Write a program to determine a student’s grade based on the average of three scores you get from the user. Use these rules to compute the grade:

- If the average score is greater than or equal to 90 then the grade is 'A'
- If the average score is greater than or equal to 70 and less than 90 then the grade is 'B'
- If the average score is greater than or equal to 50 and less than 70 then the grade is 'C'
- If the average score is less than 50 then the grade is 'F'

You may assume that all input values are valid positive integers.
*/

// let readLine = require('readline-sync');

// function averageScore() {
//   let score1 = readLine.question('Enter score 1: ');
//   let score2 = readLine.question('Enter score 2: ');
//   let score3 = readLine.question('Enter score 3: ');

//   let averageCalculation = (Number(score1) + Number(score2) + Number(score3)) / 3;
//   let letter;

//   if (averageCalculation >= 90) {
//     letter = 'A';
//   } else if (averageCalculation >= 70 && averageCalculation < 90) {
//     letter = 'B';
//   } else if (averageCalculation >= 50 && averageCalculation < 70) {
//     letter = 'C';
//   } else {
//     letter = 'F';
//   }

//   console.log(`Based on the average of your 3 scores your letter grade is "${letter}".`);
// }

// averageScore();

// ---------------  Modify the function to accept any number of scores

function averageScore(gradeArray) {
  let length = gradeArray.length;
  let total = 0;
  gradeArray.forEach(grade => {
    total += grade;
  });
  let average = total / length;
  
  let letter;
  if (average >= 90) {
    letter = 'A';
  } else if (average >= 70) {
    letter = 'B';
  } else if (average >= 50) {
    letter = 'C';
  } else {
    letter = 'F';
  }

  console.log(`Based on the average of your 3 scores your letter grade is "${letter}".`);
}

averageScore([33,76,90,87,77]);
