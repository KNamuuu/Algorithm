const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
const visited = Array(N).fill(false);
const answer = [];

function dfs(depth, current) {
    if (depth === M) return answer.push(current.join(" "));

    let prev = -1;
    for (let i = 0; i < arr.length; i++) {
        if (!visited[i] && prev !== arr[i]) {
            visited[i] = true;
            dfs(depth + 1, [...current, arr[i]]);
            visited[i] = false;
            prev = arr[i];
        }
    }
}

dfs(0, []);

console.log(answer.join("\n"));
