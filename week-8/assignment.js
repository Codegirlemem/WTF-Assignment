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
  let number = "";
  for (let i = 1; i <= num; i++) {
    let grt = "";
    number += `${grt} ${i} ${grt}`;
    console.log(number);
  }
}
// numPyramid(6);

// Greatest Common Divisor (GCD) Calculator:Write a function that calculates the greatest common divisor (GCD) of two numbers.

function divisor(a, b) {
  let commonDivisor = "";
  for (let i = 0; i <= b; i++) {
    if (a % i === 0 && b % i === 0) {
      commonDivisor = i;
    }
  }
  console.log(commonDivisor);
}

// divisor(25, 15);

function greatestDivisor(num1, num2) {
  let result; //variable declaration

  if (num1 > num2) {
    while (num2 !== 0) {
      result = num1 % num2;
      num1 = num2;
      num2 = result;
    }
    console.log("GCD =", num1);
  } else if (num2 > num1) {
    while (num1 !== 0) {
      result = num2 % num1;
      num2 = num1;
      num1 = result;
    }

    console.log("GCD =", num2);
  }
}

// greatestDivisor(15, 25);

// greatestDivisor(36, 16);

// ASSIGNMENT
// Factorial Calculator:Write a function that calculates the factorial of a given number.
// DO NOT USE PROMPT, I WANT ONLY 1 CONSOLE.LOG, YOUR FUNCTION MUST BE REUSEABLE, AND MUST RETURN A VALUE

function findFactorial(num) {
  let factorial = num;
  let start = num - 1;

  if (num >= 0) {
    for (let i = start; i >= 1; i--) {
      factorial *= i;
    }
    return factorial;
  } else {
    return `enter a positive number`;
  }
}

const factorial = (num = 1) => {
  let factorial = num;
  let start = num - 1;

  if (num >= 1) {
    for (let i = start; i >= 1; i--) {
      factorial *= i;
    }
    return factorial;
  } else {
    return `enter a number above 1`;
  }
};

// console.log(factorial());

// Character Frequency Counter:
// Implement a function that takes a string as input and counts the frequency of each character. Print the results.

// function frequencyChecker(str) {
//   for (let i = 0; i < str.length; i++) {
//     index;
//   }
// }

// Currency Converter:
// Create a currency converter program that converts an amount from one currency to another. Ask the user for the exchange rate and the amount in the original currency.

function currencyConverter() {
  const amount = prompt("enter amount in original currency eg 500");
  const currency = prompt(
    "enter currency you want to convert to(new currency eg dollar)"
  );
  const rate = prompt(
    "enter the exchange rate (from original currency to new currency"
  );
  convertCurrency = rate * amount;
  console.log(convertCurrency + " " + currency);
}
// currencyConverter();

// Leap Year Checker:
// Write a function that determines whether a given year is a leap year or not.

function leapYearChecker() {
  let year = prompt("enter a year to check if it is a leap year");
  if (year % 100 === 0 && year % 400 === 0) {
    console.log("leap year!");
    return true;
  } else {
    console.log("not a leap year!");
    return false;
  }
}
// leapYearChecker();

// console.log(leapYearChecker(2024));
