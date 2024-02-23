const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().toUpperCase();

const array = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  array[input.charCodeAt(i) - 65] ++;
}

const max = Math.max(...array);
const index = array.indexOf(max);

let isSame = false;

for (let j = 0; j < 26; j++) {
  if (array[j] === max && index != j) {
    isSame = true;
    break;
  }
}
console.log(isSame ? "?" : String.fromCharCode(index + 65));