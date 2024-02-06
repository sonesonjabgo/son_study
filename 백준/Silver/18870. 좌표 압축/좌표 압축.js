let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let arr = input[1].split(" ");
// 숫자를 중복없이 만들고 정렬함
// 현재 숫자보다 작은 숫자의 개수와 함께 집합으로 만듦
let data = [...new Set(arr)]

data.sort(function(a,b) {return a-b})
let dict = {}
for (let i=0; i<data.length; i++) {
  dict[data[i]] = i
}

answer = ""
for (i=0; i<N; i++){
  answer += dict[arr[i]] + " "
}

console.log(answer)