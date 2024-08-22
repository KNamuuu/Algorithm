const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());

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
        this.length = 0;
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
        this.length += 1;
    }

    pop() {
        if (this.length === 0) return -1;

        const item = this.head.item;
        this.head = this.head.next;
        this.length -= 1;

        if (this.length === 0) this.tail = null;

        return item;
    }

    size() {
        return this.length;
    }

    empty() {
        return this.length === 0 ? 1 : 0;
    }

    front() {
        return this.head ? this.head.item : -1;
    }

    back() {
        return this.tail ? this.tail.item : -1;
    }
}

const queue = new Queue();
const cards = Array.from({ length: N }, (_, i) => i + 1);

for (const card of cards) {
    queue.push(card);
}

while (queue.size() !== 1) {
    queue.pop();
    queue.push(queue.pop());
}

console.log(queue.pop());
