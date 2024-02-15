let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let distance = input[1].split(" ").map(Number);
let price = input[2].split(" ").map(Number);
let answer = 0;
// let gas = 0
for (let i = N - 2; i >= 0; i--) {
  let minNum = 1000001;
  for (let j = 0; j <= i; j++) {
    if (price[j] < minNum) {
      minNum = price[j];
    }
  }
  answer += minNum * distance[i];
}
console.log(answer);