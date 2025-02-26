const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const n = +input.shift();
const graph = Array.from({ length: n + 1 }, () => []);

for (const [from, to, dist] of input) {
  graph[from].push([to, dist]);
  graph[to].push([from, dist]);
}

const visited = new Array(n + 1).fill(false);
let maxNode = 0;
let maxDist = 0;

function dfs(node, dist) {
  visited[node] = true;

  if (maxDist < dist) {
    maxNode = node;
    maxDist = dist;
  }

  for (const [nNode, nDist] of graph[node]) {
    if (!visited[nNode]) dfs(nNode, dist + nDist);
  }
}

dfs(1, 0);
visited.fill(false);
dfs(maxNode, 0);

console.log(maxDist);
