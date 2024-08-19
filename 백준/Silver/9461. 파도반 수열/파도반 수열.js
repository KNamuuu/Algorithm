const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const dp = Array(101).fill(0);

dp[1] = 1;
dp[2] = 1;
dp[3] = 1;

for (let i = 4; i < 101; i++) {
    dp[i] = dp[i - 2] + dp[i - 3];
}

const answer = [];

for (const number of input.map(Number)) {
    answer.push(dp[number]);
}

console.log(answer.join("\n"));
