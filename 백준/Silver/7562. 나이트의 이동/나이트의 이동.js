let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs.readFileSync("./input.txt").toString().split("\n");

const N = Number(input.shift());

const direction = [
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
];

function bfs(I, start, target) {
    const queue = [];
    const visited = Array.from({ length: I }, () =>
        Array.from({ length: I }, () => false)
    );

    queue.push(start);
    visited[start[0]][start[1]] = true;

    while (queue.length > 0) {
        const [x, y, distance] = queue.shift();

        if (x === target[0] && y === target[1]) return distance;

        for (const [dx, dy] of direction) {
            const new_x = x + dx;
            const new_y = y + dy;

            if (
                new_x >= 0 &&
                new_x < I &&
                new_y >= 0 &&
                new_y < I &&
                !visited[new_x][new_y]
            ) {
                visited[new_x][new_y] = true;
                queue.push([new_x, new_y, distance + 1]);
            }
        }
    }
}

for (let i = 0; i < N; i++) {
    const I = input[i * 3];
    const [start_x, start_y] = input[i * 3 + 1].split(" ").map(Number);
    const [target_x, target_y] = input[i * 3 + 2].split(" ").map(Number);

    console.log(bfs(I, [start_x, start_y, 0], [target_x, target_y]));
}
