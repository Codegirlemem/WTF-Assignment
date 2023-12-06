// Temperature Conversion:Write a program that converts temperatures between Fahrenheit and Celsius. Ask the user for the temperature and the desired conversion.

function convert() {
  let temperature = prompt("Enter a temperature value: ");
  let unit = prompt("Enter a desired conversion (celsius/fahrenheit): ");

  let cal = `${(temperature - 32) * (5 / 9)}° ${unit}`;
  let fah = `${temperature * (9 / 5) + 32}° ${unit}`;
  if (unit == "celsius") {
    console.log(cal);
    return cal;
  } else {
    console.log(fah);
    return fah;
  }
}

// convert();

// Number Pyramid:Create a script that prints a number pyramid pattern, where each row contains numbers in ascending order.

function numPyramid(num) {
  number = "";
  for (let i = 0; i <= num; i++) {
    number += i;
    console.log(number);
  }
}
// numPyramid(20);

// Greatest Common Divisor (GCD) Calculator:Write a function that calculates the greatest common divisor (GCD) of two numbers.

function divisor(a, b) {
  let commonDivisor = [];
  for (let i = 0; i <= b; i++) {
    if (a % i === 0 && b % i === 0) {
      commonDivisor.push(i);
    }
  }
  console.log(commonDivisor);
  console.log(commonDivisor.pop());
  return commonDivisor.pop();
}

// divisor(10, 20);

// ASSIGNMENT
// Factorial Calculator:Write a function that calculates the factorial of a given number.
// DO NOT USE PROMPT, I WANT ONLY 1 CONSOLE.LOG, YOUR FUNCTION MUST BE REUSEABLE, AND MUST RETURN A VALUE

// function findFactorial(num) {
//   let factorial = num;
//   let start = num - 1;

//   if (num >= 0) {
//     for (let i = start; i >= 1; i--) {
//       factorial *= i;
//     }
//     return factorial;
//   } else {
//     return `enter a positive number`;
//   }
// }

// const factorial = (num = 1) => {
//   let factorial = num;
//   let start = num - 1;

//   if (num >= 1) {
//     for (let i = start; i >= 1; i--) {
//       factorial *= i;
//     }
//     return factorial;
//   } else {
//     return `enter a number above 1`;
//   }
// };

// console.log(factorial());
