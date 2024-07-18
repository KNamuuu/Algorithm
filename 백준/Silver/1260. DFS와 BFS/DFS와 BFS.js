let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs.readFileSync("./input.txt").toString().split("\n");

let [N, M, V] = input
    .shift()
    .split(" ")
    .map((item) => Number(item));

const graph = Array.from({ length: N + 1 }, () => []);

for (const line of input) {
    const [u, v] = line.split(" ");
    graph[u].push(v);
    graph[v].push(u);
}

graph.forEach((line) => line.sort((a, b) => a - b));

const dfs_visited = new Array(N + 1).fill(false);
const dfs_result = [];

const bfs_visited = new Array(N + 1).fill(false);
const bfs_result = [];

function dfs(idx) {
    dfs_visited[idx] = true;
    dfs_result.push(idx);

    for (const x of graph[idx]) {
        if (!dfs_visited[x]) {
            dfs(x);
        }
    }
}

const bfs_queue = [];

function bfs(idx) {
    bfs_visited[idx] = true;
    bfs_result.push(idx);
    bfs_queue.push(idx);

    while (bfs_queue.length > 0) {
        const node = bfs_queue.shift();

        for (const x of graph[node]) {
            if (!bfs_visited[x]) {
                bfs_visited[x] = true;
                bfs_result.push(x);
                bfs_queue.push(x);
            }
        }
    }
}

dfs(V);
bfs(V);

console.log(dfs_result.join(" "));
console.log(bfs_result.join(" "));
