class Node {
    constructor(item) {
        this.item = item;
        this.prev = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(item) {
        const node = new Node(item);

        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail = node;
        }
        this.size += 1;
    }

    pop() {
        if (this.size === 0) return -1;

        const item = this.tail.item;
        this.tail = this.tail.prev;
        this.size -= 1;

        if (this.size === 0) this.head = null;

        return item;
    }

    empty() {
        return this.size === 0 ? 1 : 0;
    }

    top() {
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
const stack = new Stack();
const answer = [];

function execution(command, number) {
    switch (command) {
        case "push":
            stack.push(number);
            break;
        case "pop":
            answer.push(stack.pop());
            break;
        case "size":
            answer.push(stack.size);
            break;
        case "empty":
            answer.push(stack.empty());
            break;
        case "top":
            answer.push(stack.top());
            break;
    }
}

for (const line of input) {
    const [command, number] = line.split(" ");
    execution(command, number);
}

console.log(answer.join("\n"));
