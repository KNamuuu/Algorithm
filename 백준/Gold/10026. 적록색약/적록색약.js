const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];
const N = Number(input.shift());
const answer = [];
let pic = input.map((line) => line.split(""));
let visited = Array.from({ length: N }, () => Array(N).fill(false));
let count = 0;

function bfs(x, y, color) {
    const queue = [[x, y]];
    visited[x][y] = true;

    while (queue.length > 0) {
        const [currentX, currentY] = queue.shift();

        for (const [dx, dy] of direction) {
            const nextX = currentX + dx;
            const nextY = currentY + dy;

            if (
                nextX >= 0 &&
                nextX < N &&
                nextY >= 0 &&
                nextY < N &&
                !visited[nextX][nextY] &&
                pic[nextX][nextY] === color
            ) {
                queue.push([nextX, nextY]);
                visited[nextX][nextY] = true;
            }
        }
    }
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (!visited[i][j]) {
            bfs(i, j, pic[i][j]);
            count++;
        }
    }
}
answer.push(count);

pic = pic.map((line) =>
    line.map((el) => {
        if (el === "G") return "R";
        else return el;
    })
);
visited = Array.from({ length: N }, () => Array(N).fill(false));
count = 0;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (!visited[i][j]) {
            bfs(i, j, pic[i][j]);
            count++;
        }
    }
}

answer.push(count);

console.log(answer.join("\n"));
