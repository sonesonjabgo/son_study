let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = Number(input[0]);

let answer = 0;
let num = 0;
let mul = 1;
while (num < data) {
  num += mul;
  mul += 1;
  if (num > data) {
    let mul2 = num - data;
    num = num - mul + (mul - 1 + mul2);
    break;
  }
  answer += 1;
}
console.log(answer);