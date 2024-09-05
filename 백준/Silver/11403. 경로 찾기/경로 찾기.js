const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const graph = Array.from({ length: N }, () => []);
const answer = Array.from({ length: N }, () => Array(N).fill(0));
let visited = Array(N).fill(false);

for (let i = 0; i < N; i++) {
    const nodes = input[i].split(" ").map(Number);

    for (let j = 0; j < N; j++) {
        if (nodes[j]) graph[i].push(j);
    }
}

function dfs(start, node) {
    for (const next of graph[node]) {
        if (!visited[next]) {
            answer[start][next] = 1;
            visited[next] = true;
            dfs(start, next);
        }
    }
}

for (let i = 0; i < N; i++) {
    visited = Array(N).fill(false);
    dfs(i, i);
}

console.log(answer.map((line) => line.join(" ")).join("\n"));
