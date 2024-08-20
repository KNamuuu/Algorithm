const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());

const dp = Array(N + 1).fill(0);
dp[0] = 4;

for (let i = 1; i < N + 1; i++) {
    const sqrt = Math.sqrt(dp[i - 1]);
    dp[i] = Math.pow(sqrt * 2 - 1, 2);
}

console.log(dp[N]);
