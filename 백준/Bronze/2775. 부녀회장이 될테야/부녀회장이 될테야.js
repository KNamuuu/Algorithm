const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const T = input.shift();
const answer = [];

for (let i = 0; i < input.length; i += 2) {
    const k = Number(input[i]);
    const n = Number(input[i + 1]);

    const dp = Array.from({ length: k + 1 }, () =>
        Array.from({ length: n }, (_, i) => i + 1)
    );

    for (let a = 1; a < k + 1; a++) {
        for (let b = 1; b < n; b++) {
            dp[a][b] = dp[a][b - 1] + dp[a - 1][b];
        }
    }

    answer.push(dp[k][n - 1]);
}

console.log(answer.join("\n"));
