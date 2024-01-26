let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let line = input[0].split(' ');


let summary = line.reduce((a,b) => parseInt(a) + parseInt(b));
console.log(summary);