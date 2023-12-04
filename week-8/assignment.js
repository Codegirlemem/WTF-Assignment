function checkNum(num) {
  num % 2 === 0
    ? console.log("Even Number")
    : console.log("Not an even number");
}

// function check(num) {
//   if (num % 2 === 0) {
//     console.log("even number");
//   } else if (num % 2 !== 0) {
//     console.log("not an even number");
//   }
// }

checkNum(15);
checkNum(92);

// numb 2

//  n1= 10  n2= 1

//  n1 = 1   n2 = 5

//  print 5,6, 7, 8, 9 ,   10

function printNum(n1, n2) {
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
// printNum(1, 5);

// function print(n1, n2) {
//   let i = n1;
//   //   while (i <= n2) {
//   //     console.log(i);
//   //     i++;
//   //   }
//   do {
//     console.log(i);
//     i++;
//   } while (i <= n2);
// }
// print(2, 8);

// num 3

// function addNum(num1, num2) {
//   let sum;
//   if (num1 < num2) {
//     for (let i = num1; i <= num2; i++) {
//       if (i === num1) {
//         sum = num1;
//       } else if (i !== num1) {
//         sum += i;
//       }
//     }
//   }
//   console.log(sum);
// }
// addNum(1, 5);

function calcFunc(num1, num2) {
  let sum = 0;

  for (let i = num1; i <= num2; i++) {
    sum += i;
  }

  return sum;
}

console.log(calcFunc(7, 3));

//  1 + 2 + 3 + 4

// num1 = 1;
// i = num1  1st loop result 1
// i =num1 +1   2nd loop 2
// i = (num1+1) + 1 3rd loop 3
// i = num1 +1 + 1 + 1 4th loop 4

// i += i
// i + i + i + i
// i = i + i
// new i value = old i value + 1
