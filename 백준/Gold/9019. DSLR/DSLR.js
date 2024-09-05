class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(value) {
        const node = new Node(value);

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
        if (this.size === 0) return undefined;

        const value = this.head.value;
        this.head = this.head.next;
        this.size -= 1;

        if (this.size === 0) this.tail = null;

        return value;
    }
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const answer = [];

function newD(number) {
    return (number * 2) % 10000;
}

function newS(number) {
    return number !== 0 ? number - 1 : 9999;
}

function newL(number) {
    const n = Math.floor(number / 1000);
    return (number % 1000) * 10 + n;
}

function newR(number) {
    const n = number % 10;
    return n * 1000 + Math.floor(number / 10);
}

function getDSLR(number) {
    return [newD(number), newS(number), newL(number), newR(number)];
}

function bfs(number, target) {
    const queue = new Queue();
    const visited = Array(10000).fill(false);

    queue.enqueue([number, []]);
    visited[number] = true;

    while (queue.size > 0) {
        const [currentNum, result] = queue.dequeue();
        if (currentNum === target) return result.join("");

        if (!visited[newD(currentNum)]) {
            queue.enqueue([newD(currentNum), [...result, "D"]]);
            visited[newD(currentNum)] = true;
        }

        if (!visited[newS(currentNum)]) {
            queue.enqueue([newS(currentNum), [...result, "S"]]);
            visited[newS(currentNum)] = true;
        }

        if (!visited[newL(currentNum)]) {
            queue.enqueue([newL(currentNum), [...result, "L"]]);
            visited[newL(currentNum)] = true;
        }

        if (!visited[newR(currentNum)]) {
            queue.enqueue([newR(currentNum), [...result, "R"]]);
            visited[newR(currentNum)] = true;
        }
    }
}

for (const line of input) {
    const [number, target] = line.split(" ").map(Number);

    answer.push(bfs(number, target));
}

console.log(answer.join("\n"));
