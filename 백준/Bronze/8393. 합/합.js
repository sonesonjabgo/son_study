const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
let num = 0;

rl.on('line', function(line) {
	input = [line];
	// 콘솔 입력 창에서 줄바꿈(Enter)을 입력할 때마다 호출
}).on('close', function() {
    n = Number(input[0])
	// 콘솔 입력 창에서 Ctrl + C 혹은 Ctrl + D를 입력하면 호출 (입력의 종료)
	for (i = 0; i <= n; i++) {
      num += i
    }

    console.log(num)
});