const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input = [line];

}).on('close', function() {
    n = Number(input[0])
	for (i = 1; i <= 9; i++) {
      console.log(`${n} * ${i} = ${n*i}`)
    }    
});