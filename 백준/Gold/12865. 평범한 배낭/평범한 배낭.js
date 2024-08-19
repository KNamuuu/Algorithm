const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

let [N, K] = input.shift().split(" ").map(Number);
const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));

for (let i = 1; i < N + 1; i++) {
    const [W, V] = input.shift().split(" ").map(Number);

    for (let j = 1; j < K + 1; j++) {
        if (j - W >= 0) dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - W] + V);
        else dp[i][j] = dp[i - 1][j];
    }
}
console.log(dp[N][K]);
