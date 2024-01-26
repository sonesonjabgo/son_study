let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = input[0], b = input[1];

sub = b.split("");
for (let i = 2; i >= 0; i--) {
  console.log(Number(a) * Number(sub[i]));  
}

console.log(Number(a) * Number(b));