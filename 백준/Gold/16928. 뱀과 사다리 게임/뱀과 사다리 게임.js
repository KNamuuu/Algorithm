let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs.readFileSync("./input.txt").toString().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const graph = Array.from({ length: 101 }, () => 0);
const visited = new Array(101).fill(false);

for (const line of input) {
    const [start, end] = line.split(" ").map(Number);

    graph[start] = end;
}

const queue = [];
queue.push([1, 0]);
visited[1] = true;

let answer = 0;

while (queue.length > 0) {
    const [x, count] = queue.shift();
    answer = count;

    if (x === 100) break;

    for (const dx of [1, 2, 3, 4, 5, 6]) {
        let new_x = x + dx;

        if (graph[new_x]) new_x = graph[new_x];

        if (!visited[new_x] && new_x <= 100) {
            queue.push([new_x, count + 1]);
            visited[new_x] = true;
        }
    }
}

console.log(answer);
