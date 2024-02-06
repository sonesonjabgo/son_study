let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let arr = [];
for (i = 1; i <= N; i++) {
  arr.push(input[i]);
}
let data = [...new Set(arr)];

function compare(a, b) {
  if (a.length != b.length) return a.length - b.length;
  else {
    if (a > b) return 1;
    else if (a == b) return 0;
    else return -1;
  }
}

data.sort(compare);
let answer = "";
for (i = 0; i < data.length; i++) {
  answer += data[i] + "\n";
}
console.log(answer);