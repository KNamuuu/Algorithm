const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const n = Number(input.shift());
const triangle = input.map((line) => line.split(" ").map(Number));
const dp = Array.from({ length: n }, (_, i) =>
    Array.from({ length: i + 1 }, () => 0)
);

dp[0][0] = triangle[0][0];

for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j <= i; j++) {
        if (j === 0) {
            dp[i][j] = dp[i - 1][j] + triangle[i][j];
        } else if (j === i) {
            dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
        } else {
            dp[i][j] = Math.max(
                dp[i - 1][j] + triangle[i][j],
                dp[i - 1][j - 1] + triangle[i][j]
            );
        }
    }
}

console.log(Math.max(...dp[n - 1]));
