const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const arr = input.map((line) => line.split(" ").map(Number));
const dp = Array.from({ length: N }, (_, i) => Array(i + 1).fill(0));

dp[0][0] = arr[0][0];

for (let i = 1; i < N; i++) {
    for (let j = 0; j < dp[i].length; j++) {
        if (j === 0) dp[i][0] = dp[i - 1][0] + arr[i][0];
        else if (j === dp[i].length - 1)
            dp[i][j] = dp[i - 1][j - 1] + arr[i][j];
        else {
            dp[i][j] = Math.max(
                dp[i - 1][j - 1] + arr[i][j],
                dp[i - 1][j] + arr[i][j]
            );
        }
    }
}

console.log(Math.max(...dp[N - 1]));
