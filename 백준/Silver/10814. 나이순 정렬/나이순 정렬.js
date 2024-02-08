let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);

let data = [];
for (let i = 1; i <= N; i++) {
  let el = input[i].split(" ");
  data.push([Number(el[0]), el[1]]);
}

data.sort((a, b) => a[0] - b[0]);

answer = "";
for (let j = 0; j < N; j++) {
  answer += data[j][0] + " " + data[j][1] + "\n";
}
console.log(answer);