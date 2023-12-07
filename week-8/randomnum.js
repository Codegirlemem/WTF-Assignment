// Random Number Guessing Game:
// Develop a program that generates a random number between 1 and 100. Allow the user to guess the number and provide feedback on whether the guess is too high, too low, or correct.
const guess = Math.random();
let randomNum = Math.floor(guess * 100 + 1);
console.log(guess, randomNum);

function guessTheNumber(num = 10) {
  if (num >= 1 && num <= 100) {
    if (num < randomNum) {
      alert("guess istoo low");
    } else if (num > randomNum) {
      alert(" guess is too high");
    } else if (num == randomNum) {
      alert("guess is correct");
    }
  } else {
    alert("Invalid!: enter a number between 1 and 100");
  }
}

guessTheNumber();
