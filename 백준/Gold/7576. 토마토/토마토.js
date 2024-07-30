const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [M, N] = input.shift().split(" ").map(Number);
const box = input.map((line) => line.split(" ").map(Number));
const dist = Array.from({ length: N }, () => Array(M).fill(-1));

const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

let queue = [];
let front = 0;
let maxDays = 0;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (box[i][j] === 1) {
            queue.push([i, j]);
            dist[i][j] = 0;
        }
    }
}

while (front < queue.length) {
    const [x, y] = queue[front++];

    for (const [dx, dy] of direction) {
        const new_x = x + dx;
        const new_y = y + dy;

        if (
            new_x >= 0 &&
            new_x < N &&
            new_y >= 0 &&
            new_y < M &&
            box[new_x][new_y] === 0
        ) {
            box[new_x][new_y] = 1;
            dist[new_x][new_y] = dist[x][y] + 1;
            maxDays = Math.max(maxDays, dist[new_x][new_y]);
            queue.push([new_x, new_y]);
        }
    }
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (box[i][j] === 0) maxDays = -1;
    }
}

console.log(maxDays);
