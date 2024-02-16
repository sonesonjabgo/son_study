let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let high = input[1].split(" ").map(Number);
let result = 0
let arrow = new Array(1000001).fill(0)
for (h of high) {
  if (arrow[h] > 0) {
    arrow[h] -= 1
    arrow[h-1] += 1
  }
  else {
    arrow[h-1] += 1
    result += 1
  }
}
console.log(result)