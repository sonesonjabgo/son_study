let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

arr = input.map(Number);

let maxnum = -1000000;
let count = 0;

for (i = 0; i < arr.length; i++) {
  if (arr[i] > maxnum) {
    maxnum = arr[i];
    count = i + 1;
  }
}

console.log(maxnum + "\n" + count);
