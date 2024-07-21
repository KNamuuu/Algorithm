const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const n = Number(input.shift());
const [person1, person2] = input.shift().split(" ").map(Number);
const m = Number(input.shift());

const graph = Array.from({ length: n + 1 }, () => []);

for (const line of input) {
    const [x, y] = line.split(" ").map(Number);

    graph[x].push(y);
    graph[y].push(x);
}

const visited = Array.from({ length: n + 1 }, () => false);
const queue = [];

function bfs(start, count) {
    queue.push([start, count]);
    visited[start] = true;

    while (queue.length > 0) {
        const [node, currentCount] = queue.shift();

        if (node === person2) return currentCount;

        for (const connectedNode of graph[node]) {
            if (!visited[connectedNode]) {
                queue.push([connectedNode, currentCount + 1]);
                visited[connectedNode] = true;
            }
        }
    }

    return -1;
}

console.log(bfs(person1, 0));
