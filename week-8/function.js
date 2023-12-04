// Question One
function checkNum(num) {
  num % 2 == 0 ? console.log("Even Number") : console.log("Odd Number");
}

checkNum(7);

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
numConsole(2, 5);

// Question Three

function numSum(a, b) {
  let sum;

  if (a < b) {
    for (let i = a; i <= b; i++) {
      if (i == a) {
        sum = a;
      } else if (i != a) {
        sum = sum + i;
      }
    }
  } else if (a > b) {
    for (let i = a; i >= b; i--) {
      if (i == a) {
        sum = a;
      } else if (i != a) {
        sum = sum + i;
      }
    }
  } else {
    sum = a;
  }

  console.log(sum);
  return sum;
}

numSum(0.1, 5.1);

// Alternatively

function numAdd(a, b) {
  let sum = a;

  if (a < b) {
    for (let i = a; i <= b; i++) {
      if (i != a) {
        sum += i;
      }
    }
  } else if (a > b) {
    for (let i = a; i >= b; i--) {
      if (i != a) {
        sum += i;
      }
    }
  }

  console.log(sum);
  return sum;
}

numAdd(3, 2);
