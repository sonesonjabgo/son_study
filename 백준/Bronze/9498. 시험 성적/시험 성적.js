let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num1 = Number(input[0]);

if (num1 >= 90){
  console.log('A');
} else if(num1 >= 80) {
  console.log('B');
} else if(num1 >= 70) {
  console.log('C');
} else if(num1 >= 60) {
  console.log('D');
} else {
  console.log('F');
}