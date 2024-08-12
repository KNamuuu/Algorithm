const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);

const prefix = new Array(N + 1).fill(0);
let answer = -Infinity;

for (let i = 0; i < N; i++) {
    prefix[i + 1] = prefix[i] + arr[i];
}

for (let i = K; i <= N; i++) {
    answer = Math.max(answer, prefix[i] - prefix[i - K]);
}

console.log(answer);
