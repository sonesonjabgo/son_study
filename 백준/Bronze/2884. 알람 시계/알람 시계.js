const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function(line) {
    input = [line];
	// 콘솔 입력 창에서 줄바꿈(Enter)을 입력할 때마다 호출
}).on('close', function() {
	hour = Number(input[0].split(" ")[0]);
    minute = Number(input[0].split(" ")[1]);
    
    if (minute < 45) {
        hour -= 1;
        minute += 15;
        if (hour < 0) hour = 23;
    } 
    else {
        minute -= 45;
    }
    
    console.log(hour + " " + minute);
	process.exit();
});