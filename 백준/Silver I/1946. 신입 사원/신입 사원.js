let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let T = Number(input[0]);
let line = 1;
for (let tc = 0; tc < T; tc++) {
  let n = Number(input[line]);
  let arr = [];
  for (let i = line + 1; i <= line + n; i++) {
    let grade = input[i].split(" ").map(Number);
    arr.push(grade);
  }
  arr.sort((a, b) => a[0] - b[0]);
  let cnt = 0;
  let minNum = 1000001;
  for (let [x, y] of arr) {
    if (y < minNum) {
      minNum = y;
      cnt += 1;
    }
  }
  console.log(cnt);
  line += n + 1;
}