let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);
let arr = new Array(num + 1).fill(0);
arr[1] = 1;
for (let i = 2; i <= num; i++) {
  arr[i] = arr[i - 2] + arr[i - 1];
}
console.log(arr[num])