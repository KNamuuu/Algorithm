const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const N = input[0];
const dp = Array(N + 1).fill(0);

dp[1] = 0;
dp[2] = dp[1] + 1;
dp[3] = Math.min(dp[3 / 3] + 1, dp[3 - 1] + 1);

for (let i = 4; i < N + 1; i++) {
    if (i % 2 === 0 && i % 3 === 0)
        dp[i] = Math.min(dp[i / 3] + 1, dp[i / 2] + 1, dp[i - 1] + 1);
    else if (i % 2 === 0) dp[i] = Math.min(dp[i / 2] + 1, dp[i - 1] + 1);
    else if (i % 3 === 0) dp[i] = Math.min(dp[i / 3] + 1, dp[i - 1] + 1);
    else dp[i] = dp[i - 1] + 1;
}

console.log(dp[N]);
