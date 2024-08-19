const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const arr = input.map((line) => line.split(" ").map(Number));
const dp = Array.from({ length: N + 1 }, () => Array(3).fill(0));
dp[1] = input[0].split(" ").map(Number);

for (let i = 1; i < N + 1; i++) {
    for (let j = 0; j < 3; j++) {
        dp[i][j] = Math.min(
            arr[i - 1][j] + dp[i - 1][(j + 1) % 3],
            arr[i - 1][j] + dp[i - 1][(j + 2) % 3]
        );
    }
}

console.log(Math.min(...dp[N]));
