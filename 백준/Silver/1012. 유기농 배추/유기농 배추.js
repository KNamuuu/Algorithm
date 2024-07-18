let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs.readFileSync("./input.txt").toString().split("\n");

const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

const T = Number(input.shift());

function bfs(map, start, N, M) {
    const queue = [];
    queue.push(start);
    map[start[0]][start[1]] = 0;

    while (queue.length > 0) {
        const [x, y] = queue.shift();

        for (const [dx, dy] of direction) {
            const new_x = x + dx;
            const new_y = y + dy;

            if (
                new_x >= 0 &&
                new_x < N &&
                new_y >= 0 &&
                new_y < M &&
                map[new_x][new_y] === 1
            ) {
                queue.push([new_x, new_y]);
                map[new_x][new_y] = 0;
            }
        }
    }
}

for (let i = 0; i < T; i++) {
    const [M, N, K] = input.shift().split(" ").map(Number);

    let worm = 0;
    const map = Array.from({ length: N }, () =>
        Array.from({ length: M }, () => 0)
    );

    for (let j = 0; j < K; j++) {
        const [x, y] = input.shift().split(" ").map(Number);
        map[y][x] = 1;
    }

    for (let k = 0; k < N; k++) {
        for (let l = 0; l < M; l++) {
            if (map[k][l] === 1) {
                worm++;
                bfs(map, [k, l], N, M);
            }
        }
    }

    console.log(worm);
}
