let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

time1 = input[0]
time2 = input[1]

function solution(time1, time2) {
  hour = Number(time1.split(" ")[0]);
  minute = Number(time1.split(" ")[1]);

  disturb = Number(time2);

  sum = minute + disturb;

  if (sum >= 60) {
    q = parseInt(sum / 60);
    r = sum % 60;
    hourq = hour + q
    
    if (hourq >= 24) {
      hourq -= 24
    }
    
    console.log(`${hourq} ${r}`);
  } else {
    console.log(`${hour} ${minute + disturb}`);
  }
}

solution(time1, time2);