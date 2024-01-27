const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input = [line];
}).on('close', function() {
    num = input[0]
    
    for (i = 1; i <= num; i++) {
      star = '*'
      console.log(star.repeat(i))
    }
});