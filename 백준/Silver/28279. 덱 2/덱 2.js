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
        this.prev = null;
    }
}

class Deque {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    unshift(item) {
        const node = new Node(item);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }

        this.size += 1;
    }

    push(item) {
        const node = new Node(item);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }

        this.size += 1;
    }

    shift() {
        if (this.size === 0) return -1;

        const item = this.head.item;
        this.head = this.head.next;
        this.size -= 1;

        if (this.head) this.head.prev = null;
        else this.tail = null;

        return item;
    }

    pop() {
        if (this.size === 0) return -1;

        const item = this.tail.item;
        this.tail = this.tail.prev;
        this.size -= 1;

        if (this.tail) this.tail.next = null;
        else this.head = null;

        return item;
    }

    isEmpty() {
        return this.size === 0 ? 1 : 0;
    }

    front() {
        return this.head ? this.head.item : -1;
    }

    back() {
        return this.tail ? this.tail.item : -1;
    }
}

const deque = new Deque();
const answer = [];

function execution(command, number) {
    switch (command) {
        case "1":
            deque.unshift(number);
            break;
        case "2":
            deque.push(number);
            break;
        case "3":
            answer.push(deque.shift());
            break;
        case "4":
            answer.push(deque.pop());
            break;
        case "5":
            answer.push(deque.size);
            break;
        case "6":
            answer.push(deque.isEmpty());
            break;
        case "7":
            answer.push(deque.front());
            break;
        case "8":
            answer.push(deque.back());
            break;
    }
}

for (const line of input) {
    const [command, number] = line.split(" ");
    execution(command, number);
}

console.log(answer.join("\n"));
