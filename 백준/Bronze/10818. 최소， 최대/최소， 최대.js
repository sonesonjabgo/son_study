let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

arr = input[1].split(" ").map(Number);

min = arr.reduce((a, b) => {
  return Math.min(a, b);
});

max = arr.reduce((a, b) => {
  return Math.max(a, b);
});

console.log(min, max);