const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
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
    Array.from({ length: M }, () => false)
);

const queue = [];
let count = 0;

function bfs(x, y) {
    queue.push([x, y]);

    while (queue.length > 0) {
        const [currentX, currentY] = queue.shift();

        if (map[currentX][currentY] === "P") {
            count++;
        }

        for (const [dx, dy] of direction) {
            const nextX = currentX + dx;
            const nextY = currentY + dy;

            if (
                nextX >= 0 &&
                nextX < N &&
                nextY >= 0 &&
                nextY < M &&
                map[nextX][nextY] !== "X" &&
                !visited[nextX][nextY]
            ) {
                queue.push([nextX, nextY]);
                visited[nextX][nextY] = true;
            }
        }
    }
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (map[i][j] === "I") {
            bfs(i, j);
            visited[i][j] = true;
        }
    }
}

console.log(count > 0 ? count : "TT");
