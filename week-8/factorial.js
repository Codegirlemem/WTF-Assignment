// ASSIGNMENT
// Factorial Calculator:Write a function that calculates the factorial of a given number.
// DO NOT USE PROMPT, I WANT ONLY 1 CONSOLE.LOG, YOUR FUNCTION MUST BE REUSEABLE, AND MUST RETURN A VALUE

const factorial = (num = 1) => {
  let factorial = num;
  let start = num - 1;

  if (num >= 1) {
    for (let i = start; i >= 1; i--) {
      factorial *= i;
    }
  } else {
    factorial = `"enter a number above 1"`;
  }
  console.log(`${num}! = ${factorial}`);
  return factorial;
};

factorial(1);
