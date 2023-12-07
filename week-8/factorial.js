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
    factorial = `${null}: "enter a number above 1"`;
  }
  console.log(`${num}! = ${factorial}`);
  return factorial;
};

factorial(4);
function findFactorial(num) {
  let factorial = 1;
  if (num > 1) {
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  } else if (num === 0 || num === 1) {
    return factorial;
  } else {
    return null;
  }
}
console.log(findFactorial(0));
