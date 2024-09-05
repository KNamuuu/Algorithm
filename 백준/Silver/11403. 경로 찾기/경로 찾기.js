const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const graph = input.map((line) => line.split(" ").map(Number));

for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (graph[i][k] === 1 && graph[k][j] === 1) graph[i][j] = 1;
        }
    }
}

console.log(graph.map((line) => line.join(" ")).join("\n"));
