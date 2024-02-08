let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

num = input[0].split('').map(Number)
num.sort((a, b) => b - a)
console.log(num.join(''))