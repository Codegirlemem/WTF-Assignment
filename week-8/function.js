// Question One
function checkNum(num) {
  num % 2 == 0
    ? console.log("Even Number!")
    : console.log("Not an even number(odd num!)");
}

// checkNum(7);
// checkNum(4);

// Question Two
function numConsole(n1, n2) {
  if (n1 < n2) {
    for (let i = n1; i <= n2; i++) {
      console.log(i);
    }
  } else if (n1 > n2) {
    for (let i = n1; i >= n2; i--) {
      console.log(i);
    }
  } else {
    console.log(n1);
    console.log(n2);
  }
}
// numConsole(1, 25);
// numConsole(3, 1);

// Question Three
function numSum(a, b) {
  let sum = 0;

  if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  } else if (a > b) {
    for (let i = a; i >= b; i--) {
      sum += i;
    }
  } else {
    sum = a + b;
  }

  console.log(sum);
  return sum;
}

// numSum(1, 1);
// numSum(5, 1);
// numSum(3, 6);
// numSum(2, 2);

// To ouput both all the numbers being added and the result
function sumVal(n1, n2) {
  // using prompt (remove the n1 and n2 parameters i passed to make use of the prompt values)
  // n1 = Number(prompt(`enter a number`));
  // n2 = Number(prompt(`enter a second number`));
  let sum = 0;
  let number = "";
  for (let j = n1; j <= n2; j++) {
    if (j < n2) {
      sum += j; //sum = sum + j
      number += `${j} + `;
    } else {
      sum += j; //sum = sum + j
      number += `${j} =`;
    }
  }
  console.log(number, sum);
  return sum;
}
sumVal(2, 5);
