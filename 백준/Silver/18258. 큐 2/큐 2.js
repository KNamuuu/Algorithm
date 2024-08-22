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
        this.size = 0;
    }

    push(item) {
        const node = new Node(item);

        if (!this.head) {
            this.head = node;
            this.head.next = this.tail;
        } else this.tail.next = node;

        this.tail = node;
        this.size += 1;
    }

    pop() {
        const item = this.head?.item;
        const newHead = this.head?.next;

        if (this.size === 0) {
            return -1;
        } else if (this.size === 1) {
            this.head = null;
            this.tail = null;
            this.size -= 1;
        } else if (this.size === 2) {
            this.head = newHead;
            this.tail = newHead;
            this.size -= 1;
        } else {
            this.head = newHead;
            this.size -= 1;
        }

        return item;
    }

    // size() {
    //     return this.size;
    // }

    empty() {
        return this.size === 0 ? 1 : 0;
    }

    front() {
        return this.head ? this.head.item : -1;
    }

    back() {
        return this.tail ? this.tail.item : -1;
    }
}

const queue = new Queue();
const answer = [];

function execution(command, number) {
    switch (command) {
        case "push":
            queue.push(number);
            break;
        case "pop":
            answer.push(queue.pop());
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
