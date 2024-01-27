let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = input.map(Number)

let mySet = new Set()

for (let i=0; i<10; i++){
  waste = arr[i] % 42
  mySet.add(waste)
}

console.log(mySet.size)