let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);

let answer = 0;
let flag = false;

while (num >= 0) {
  if (num == 0 || num % 5 == 0) {
    answer += parseInt(num / 5);
    console.log(answer);
    flag = true;
    break;
  }
  num -= 3;
  answer += 1;
}

if (!flag) {
  console.log(-1);
}