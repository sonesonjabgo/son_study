let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let T = Number(input[0]);
let str = input.slice(1);

let answer = ""

for (let i = 0; i < T; i++) {
  let check = str[i].split(" ");
  let R = Number(check[0]);
  let S = check[1];
  for (j=0; j<S.length; j++) {
    answer += S[j].repeat(R)
  }
  answer += "\n"
}

console.log(answer)