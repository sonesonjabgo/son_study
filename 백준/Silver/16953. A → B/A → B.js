let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [A, B] = input[0].split(" ").map(Number);

let cnt = 0;
while (B > A) {
  if (B % 2 == 0) {
    B = B / 2;
    cnt += 1;
  } else if (B % 10 == 1) {
    B = parseInt(B / 10);
    cnt += 1;
  } else {
    cnt = -1;
    break;
  }
}

console.log(B === A ? cnt + 1 : -1);