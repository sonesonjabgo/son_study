const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];

function solution(array) {
  let a = array[0];
  let b = array[1];
  let c = array[2];

  if (a == b && b == c) console.log(10000 + a * 1000);
  else if (a == b) console.log(1000 + a * 100);
  else if (a == c) console.log(1000 + a * 100);
  else if (b == c) console.log(1000 + b * 100);
  else console.log(Math.max(a, b, c) * 100);
}

rl.on('line', function(line) {
	input = [line];
	// 콘솔 입력 창에서 줄바꿈(Enter)을 입력할 때마다 호출
}).on('close', function() {
	// 콘솔 입력 창에서 Ctrl + C 혹은 Ctrl + D를 입력하면 호출 (입력의 종료)
	let array1 = input[0].split(" ").map(Number);
    solution(array1);
	process.exit();
});