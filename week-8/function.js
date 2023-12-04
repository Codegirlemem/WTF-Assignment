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
// numConsole(2, 5);
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

// numSum(5, 1);
// numSum(3, 6);
// numSum(2, 2);
