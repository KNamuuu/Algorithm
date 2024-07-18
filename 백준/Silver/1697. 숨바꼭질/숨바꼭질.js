let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs.readFileSync("./input.txt").toString().split("\n");

const [N, K] = input.shift().split(" ").map(Number);

const queue = [];
const visited = new Array(100001).fill(false);

function bfs() {
    queue.push([N, 0]); // 시작좌표, 시간
    visited[N] = true;

    while (queue.length > 0) {
        const [idx, time] = queue.shift();

        if (idx === K) return time;

        for (const next of [idx - 1, idx + 1, idx * 2]) {
            if (next >= 0 && next <= 100000 && !visited[next]) {
                visited[next] = true;
                queue.push([next, time + 1]);
            }
        }
    }
}

console.log(bfs());
