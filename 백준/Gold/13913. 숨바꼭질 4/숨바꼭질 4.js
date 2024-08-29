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
const visited = Array.from({ length: 100001 }, () => [Infinity, null]);
const queue = new Queue();
queue.enqueue([N, 0]);
visited[N] = [0, null];

while (!queue.isEmpty()) {
    const [current, time] = queue.dequeue();

    if (current === K) {
        console.log(time);

        const path = [];
        let temp = K;
        while (temp !== null) {
            path.push(temp);
            temp = visited[temp][1];
        }
        console.log(path.reverse().join(" "));
        break;
    }

    for (const next of [current - 1, current + 1, current * 2]) {
        if (next >= 0 && next < 100001) {
            if (visited[next][0] > time + 1) {
                queue.enqueue([next, time + 1]);
                visited[next] = [time, current];
            }
        }
    }
}
