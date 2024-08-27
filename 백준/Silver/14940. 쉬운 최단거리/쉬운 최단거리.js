const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [n, m] = input.shift().split(" ");
const map = input.map((line) => line.split(" ").map(Number));
const visited = Array.from({ length: n }, () => Array(m).fill(false));

const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

const start = [];

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (map[i][j] === 2) {
            start.push(i, j);
            map[i][j] = 0;
            break;
        }
    }
    if (start.length !== 0) break;
}

const queue = [];

function bfs(count) {
    queue.push([...start, count]);
    visited[start[0]][start[1]] = true;

    while (queue.length > 0) {
        const [x, y, currentCount] = queue.shift().map(Number);

        for (const [dx, dy] of direction) {
            const new_x = x + dx;
            const new_y = y + dy;

            if (
                new_x >= 0 &&
                new_x < n &&
                new_y >= 0 &&
                new_y < m &&
                !visited[new_x][new_y] &&
                map[new_x][new_y] !== 0
            ) {
                queue.push([new_x, new_y, currentCount + 1]);
                visited[new_x][new_y] = true;
                map[new_x][new_y] = currentCount + 1;
            }
        }
    }
}

bfs(0);

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (!visited[i][j]) {
            if (map[i][j] === 1) map[i][j] = -1;
        }
    }
}

console.log(map.map((line) => line.join(" ")).join("\n"));
