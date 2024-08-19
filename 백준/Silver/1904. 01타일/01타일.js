const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const dp = Array(N + 1).fill(0);

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i < N + 1; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}

console.log(dp[N]);
