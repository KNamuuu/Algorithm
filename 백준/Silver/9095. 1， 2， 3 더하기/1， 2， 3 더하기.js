const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const N = input.shift();
const max = Math.max(...input);
const dp = Array(max + 1).fill(0);
const answer = [];

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i < max + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for (const number of input) {
    answer.push(dp[number]);
}

console.log(answer.join("\n"));
