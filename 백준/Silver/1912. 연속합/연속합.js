const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const arr = input.shift().split(" ").map(Number);
const dp = Array(N + 1).fill(0);

dp[0] = -Infinity;
dp[1] = arr[0];

for (let i = 2; i < N + 1; i++) {
    dp[i] = Math.max(dp[i - 1] + arr[i - 1], arr[i - 1]);
}

console.log(Math.max(...dp));
