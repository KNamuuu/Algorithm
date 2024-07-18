let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs.readFileSync("./input.txt").toString().split("\n");

const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

const N = Number(input.shift());
const map = input.map((line) => line.split("").map(Number));

let block = 0;
const houses = [];

function bfs(x, y) {
    const queue = [];

    queue.push([x, y, 1]);
    map[x][y] = 0;

    let answer = 0;

    while (queue.length > 0) {
        answer++;
        const [x, y, count] = queue.shift();

        for (const [dx, dy] of direction) {
            const new_x = x + dx;
            const new_y = y + dy;

            if (
                new_x >= 0 &&
                new_x < N &&
                new_y >= 0 &&
                new_y < N &&
                map[new_x][new_y] === 1
            ) {
                queue.push([new_x, new_y, count + 1]);
                map[new_x][new_y] = 0;
            }
        }
    }

    return answer;
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (map[i][j] === 1) {
            block++;
            houses.push(bfs(i, j));
        }
    }
}

houses.sort((a, b) => a - b);

console.log(block);
console.log(houses.join("\n"));
