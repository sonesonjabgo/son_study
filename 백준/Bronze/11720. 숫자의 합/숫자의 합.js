let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

number = input[1].split('').map(Number)
console.log(number.reduce((a,b)=>a+b))