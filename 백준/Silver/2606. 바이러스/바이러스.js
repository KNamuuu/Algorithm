let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs.readFileSync("./input.txt").toString().split("\n");

const computers = Number(input.shift());
const nodes = input.shift();
const graph = Array.from({ length: computers + 1 }, () => []);
const visited = new Array(computers + 1).fill(false);

for (const line of input) {
    const [u, v] = line.split(" ");
    graph[u].push(v);
    graph[v].push(u);
}

let count = 0;

function dfs(index) {
    visited[index] = true;

    for (const x of graph[index]) {
        if (!visited[x]) {
            dfs(x);
            count++;
        }
    }
}

dfs(1);

console.log(count);
