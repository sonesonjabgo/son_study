let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number)

let max = arr.reduce((a, b) => {
  return Math.max(a, b)
})

let sum = 0
for (i=0; i < n; i++) {
  sum += arr[i] / max * 100
}

console.log(sum / n)