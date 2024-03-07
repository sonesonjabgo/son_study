let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [N, A, M, B] = input.map((v) => v.split(" "));

let array = new Set(A);
let result = B.map((v) => (array.has(v) ? 1 : 0));

console.log(result.join("\n"));