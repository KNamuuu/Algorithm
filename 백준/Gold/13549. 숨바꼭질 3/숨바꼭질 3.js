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
        if (this.size === 0) return undefined;

        const item = this.head.item;
        this.head = this.head.next;
        this.size -= 1;

        if (this.size === 0) this.tail = null;

        return item;
    }

    isEmpty() {
        return this.size === 0;
    }
}

const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const [N, K] = input.map(Number);
let times = Array(100001).fill(Infinity);

const queue = new Queue();
queue.enqueue([N, 0]);
times[N] = 0;

while (!queue.isEmpty()) {
    const [current, time] = queue.dequeue();

    if (current * 2 >= 0 && current * 2 < 100001) {
        if (times[current * 2] > time) {
            times[current * 2] = time;
            queue.enqueue([current * 2, time]);
        }
    }

    for (const next of [current - 1, current + 1]) {
        if (next >= 0 && next < 100001) {
            if (times[next] > time + 1) {
                times[next] = time + 1;
                queue.enqueue([next, time + 1]);
            }
        }
    }
}

console.log(times[K]);
