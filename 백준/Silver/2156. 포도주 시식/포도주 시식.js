const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const N = input[0];
const dp = Array(N + 1).fill(0);

dp[1] = input[1];
dp[2] = input[1] + input[2];

for (let i = 3; i < N + 1; i++) {
    dp[i] = Math.max(
        dp[i - 3] + input[i - 1] + input[i],
        dp[i - 2] + input[i],
        dp[i - 1]
    );
}

console.log(dp[N]);
