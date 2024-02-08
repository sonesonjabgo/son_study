let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let data = input[1].split(" ").map(Number);
data.sort((a,b) => a - b)

let k = n
let answer = 0
for (let i=0; i<n; i++) {
  answer += data[i] * k
  k -= 1
}
console.log(answer)