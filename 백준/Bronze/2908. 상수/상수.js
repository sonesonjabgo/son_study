let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = input[0].split(" ");

function solution(arr) {
  let checkArr = [];
  for (i = 0; i < arr.length; i++) {
    let rev = arr[i].split("").reverse().join("");
    checkArr.push(rev);
  }
  if (checkArr[0] > checkArr[1]) {
    console.log(checkArr[0]);
  } else {
    console.log(checkArr[1]);
  }
}

solution(num);