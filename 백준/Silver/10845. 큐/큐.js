class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    if (this.isEmpty() == 1) return -1;
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  size() {
    return this.tailIndex - this.headIndex;
  }
  isEmpty() {
    if (this.headIndex == this.tailIndex) return 1;
    else return 0;
  }
  front() {
    if (this.isEmpty() == 1) return -1;
    else return this.items[this.headIndex];
  }
  back() {
    if (this.isEmpty() == 1) return -1;
    else return this.items[this.tailIndex - 1];
  }
}

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let queue = new Queue();
let answer = [];

let N = Number(input[0]);
let command = input.slice(1);

for (let i = 0; i < N; i++) {
  switch (command[i]) {
    case "pop":
      answer.push(queue.dequeue());
      break;

    case "size":
      answer.push(queue.size());
      break;

    case "empty":
      answer.push(queue.isEmpty());
      break;

    case "front":
      answer.push(queue.front());
      break;

    case "back":
      answer.push(queue.back());
      break;

    default:
      queue.enqueue(Number(command[i].split(" ")[1]));
      break;
  }
}

console.log(answer.join("\n"));
