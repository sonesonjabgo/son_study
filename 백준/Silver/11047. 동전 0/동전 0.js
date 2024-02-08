let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0])
let price = Number(input[0].split(' ')[1])

let coin = input.slice(1).map(Number)

let count = 0
for (i=n-1; i>=0; i--) {
  if (coin[i] <= price) {
    while (coin[i] <= price){
      price -= coin[i]
      count += 1
    }
  }
}

console.log(count)