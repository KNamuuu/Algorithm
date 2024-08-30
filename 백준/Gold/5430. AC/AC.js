class Node {
    constructor(value) {
        this.value = value;
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

    toArray(isReversed) {
        const result = [];
        let current = this.head;

        while (current !== null) {
            result.push(current.value);
            current = current.next;
        }

        return isReversed ? result.reverse() : result;
    }
}

const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const T = Number(input.shift());
const answer = [];

for (let i = 0; i < T * 3; i += 3) {
    const commands = input[i].split("");
    const N = Number(input[i + 1]);
    const arr = JSON.parse(input[i + 2]);
    const deque = new Deque();
    for (const number of arr) {
        deque.push(number);
    }
    let isError = false;
    let isReverse = false;

    for (const command of commands) {
        if (command === "D") {
            if (deque.size === 0) {
                isError = true;
                break;
            } else isReverse ? deque.pop() : deque.shift();
        } else if (command === "R") isReverse = !isReverse;
    }

    isError
        ? answer.push("error")
        : answer.push(`[${deque.toArray(isReverse)}]`);
}

console.log(answer.join("\n"));
