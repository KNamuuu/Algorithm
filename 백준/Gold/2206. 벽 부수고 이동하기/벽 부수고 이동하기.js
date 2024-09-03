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

const [N, M] = input.shift().split(" ").map(Number);
const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];
const map = input.map((line) => line.split(""));
const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => Array(2).fill(false))
);

const queue = new Queue();
queue.enqueue([0, 0, 1, 0]);

visited[0][0][0] = true;

while (queue.size > 0) {
    const [currentX, currentY, count, flag] = queue.dequeue();

    if (currentX === N - 1 && currentY === M - 1) {
        console.log(count);
        process.exit();
    }

    for (const [dx, dy] of direction) {
        const nextX = currentX + dx;
        const nextY = currentY + dy;

        if (
            nextX >= 0 &&
            nextX < N &&
            nextY >= 0 &&
            nextY < M &&
            !visited[nextX][nextY][flag]
        ) {
            if (flag === 0 && map[nextX][nextY] === "1") {
                queue.enqueue([nextX, nextY, count + 1, 1]);
                visited[nextX][nextY][1] = true;
            } else if (map[nextX][nextY] === "0") {
                queue.enqueue([nextX, nextY, count + 1, flag]);
                visited[nextX][nextY][flag] = true;
            }
        }
    }
}

console.log(-1);
