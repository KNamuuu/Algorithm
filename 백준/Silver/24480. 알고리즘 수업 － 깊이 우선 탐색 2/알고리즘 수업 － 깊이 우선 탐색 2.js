let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs.readFileSync("./input.txt").toString().split("\n");

// 정점의 수 N (5 ≤ N ≤ 100,000), 간선의 수 M (1 ≤ M ≤ 200,000), 시작 정점 R (1 ≤ R ≤ N)
const [N, M, R] = input
    .shift()
    .split(" ")
    .map((item) => Number(item));

const graph = Array.from({ length: N + 1 }, () => []);
const visited = new Array(N).fill(false);
const answer = new Array(N).fill(0);

for (const line of input) {
    const [u, v] = line.split(" ");
    graph[u].push(v);
    graph[v].push(u);
}

graph.forEach((line) => line.sort((a, b) => b - a));

let count = 1;

function dfs(index) {
    visited[index - 1] = true;
    answer[index - 1] = count++;

    for (const x of graph[index]) {
        if (!visited[x - 1]) {
            dfs(x);
        }
    }
}

dfs(R);

console.log(answer.join("\n"));
