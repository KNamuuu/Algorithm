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

    enqueue(item) {
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

    dequeue() {
        if (this.size === 0) return -1;

        const item = this.head.item;
        this.head = this.head.next;
        this.size -= 1;

        if (this.size === 0) this.tail = null;

        return item;
    }
}

const queue = new Queue();
for (let i = 1; i <= N; i++) {
    queue.enqueue(i);
}

const answer = [];

while (queue.size !== 0) {
    for (let i = 0; i < K - 1; i++) {
        queue.enqueue(queue.dequeue());
    }
    answer.push(queue.dequeue());
}

console.log("<" + answer.join(", ") + ">");
