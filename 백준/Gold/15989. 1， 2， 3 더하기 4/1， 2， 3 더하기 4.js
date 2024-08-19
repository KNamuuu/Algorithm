const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const N = input.shift();
const dp = Array.from({ length: Math.max(...input) + 1 }, () =>
    Array(3).fill(0)
);
const answer = [];

dp[1] = [1, 0, 0];
dp[2] = [1, 1, 0];
dp[3] = [1, 1, 1];

for (let i = 4; i < Math.max(...input) + 1; i++) {
    dp[i][0] = dp[i - 1][0];
    dp[i][1] = dp[i - 2][0] + dp[i - 2][1];
    dp[i][2] = dp[i - 3][0] + dp[i - 3][1] + dp[i - 3][2];
}

for (const number of input) {
    answer.push(dp[number].reduce((a, b) => a + b, 0));
}

console.log(answer.join("\n"));
