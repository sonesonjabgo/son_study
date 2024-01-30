let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let cmd = input.slice(1);
let stack = [];
let answer = [];

for (let call of cmd) {
  if (call.startsWith("push")) {
    num = call.split(" ")[1];
    stack.push(Number(num));
  } else if (call.startsWith("pop")) {
    let pop = -1;
    if (stack.length > 0) pop = stack.pop();
    answer.push(pop);
  } else if (call.startsWith("size")) {
    answer.push(stack.length);
  } else if (call.startsWith("empty")) {
    if (stack.length > 0) {
      answer.push(0);
    } else {
      answer.push(1);
    }
  } else if (call.startsWith("top")) {
    let top = -1;
    if (stack.length > 0) {
      top = stack.at(-1);
    }
    answer.push(top);
  }
}

console.log(answer.join("\n"));