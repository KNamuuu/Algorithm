const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);
let answer = 0;

for (const node of input) {
    const [u, v] = node.split(" ").map(Number);
    graph[u].push(v);
    graph[v].push(u);
}

function bfs(start) {
    const queue = [start];
    visited[start] = true;

    while (queue.length > 0) {
        const currentNode = queue.shift();

        for (const nextNode of graph[currentNode]) {
            if (!visited[nextNode]) {
                visited[nextNode] = true;
                queue.push(nextNode);
            }
        }
    }
}

for (let i = 1; i < N + 1; i++) {
    if (!visited[i]) {
        answer++;
        bfs(i);
    }
}

console.log(answer);
