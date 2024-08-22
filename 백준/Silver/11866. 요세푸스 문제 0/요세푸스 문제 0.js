const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [N, K] = input.shift().split(" ").map(Number);

class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(item) {
        const node = new Node(item);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.size += 1;
    }

    pop() {
        if (this.size === 0) return -1;

        const item = this.head.item;
        this.head = this.head.next;
        this.size -= 1;

        if (this.size === 0) this.tail = null;

        return item;
    }
}

const queue = new Queue();
const people = Array.from({ length: N }, (_, i) => i + 1);
for (const number of people) {
    queue.push(number);
}

const answer = [];
let count = 1;

while (queue.size !== 0) {
    if (count % K === 0) answer.push(queue.pop());
    else queue.push(queue.pop());

    count++;
}

console.log("<" + answer.join(", ") + ">");
