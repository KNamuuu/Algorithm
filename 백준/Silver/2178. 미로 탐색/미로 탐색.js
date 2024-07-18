let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs.readFileSync("./input.txt").toString().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

input = input.map((line) => line.split("").map(Number));

const queue = [];
const visited = input;

function bfs(x, y, count) {
    queue.push([x, y, count]);
    visited[x][y] = 0;

    while (queue.length > 0) {
        const [row, col, distance] = queue.shift();

        if (row === N - 1 && col === M - 1) return distance;

        for (const [dx, dy] of dir) {
            const newRow = row + dx;
            const newCol = col + dy;

            if (
                newRow >= 0 &&
                newRow < N &&
                newCol >= 0 &&
                newCol < M &&
                visited[newRow][newCol] !== 0
            ) {
                queue.push([newRow, newCol, distance + 1]);
                visited[newRow][newCol] = 0;
            }
        }
    }
}

console.log(bfs(0, 0, 1));
