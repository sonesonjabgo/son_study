let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr1 = input[0].split("-");
let arr2 = [];
for (let num of arr1) {
  let sum = 0;
  let num2 = num.split("+");
  for (let i of num2) {
    sum += Number(i);
  }
  arr2.push(sum);
}

let answer = arr2[0];
for (let j = 1; j < arr2.length; j++) {
  answer -= arr2[j];
}
console.log(answer);