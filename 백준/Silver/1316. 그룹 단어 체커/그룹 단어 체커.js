let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let T = Number(input[0]);

function solution(data) {
  let mySet = new Set(data[0]);
  for (let i = 0; i < data.length - 1; i++) {
    if (data[i] != data[i + 1]) {
      if (mySet.has(data[i + 1])) {
        return false;
      } else {
        mySet.add(data[i + 1]);
      }
    }
  }
  return true;
}

let answer = 0

for (let i = 1; i <= T; i++) {
  if (solution(input[i])) {
    answer += 1
  }
}

console.log(answer)