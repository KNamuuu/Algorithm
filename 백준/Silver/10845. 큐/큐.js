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

        if (this.size === 0) {
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

    empty() {
        return this.size === 0 ? 1 : 0;
    }

    front() {
        return this.size === 0 ? -1 : this.head.item;
    }

    back() {
        return this.size === 0 ? -1 : this.tail.item;
    }
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = input.shift();
const queue = new Queue();
const answer = [];

function execution(command, number) {
    switch (command) {
        case "push":
            queue.enqueue(number);
            break;
        case "pop":
            answer.push(queue.dequeue());
            break;
        case "size":
            answer.push(queue.size);
            break;
        case "empty":
            answer.push(queue.empty());
            break;
        case "front":
            answer.push(queue.front());
            break;
        case "back":
            answer.push(queue.back());
            break;
    }
}

for (const line of input) {
    const [command, number] = line.split(" ");
    execution(command, number);
}

console.log(answer.join("\n"));
