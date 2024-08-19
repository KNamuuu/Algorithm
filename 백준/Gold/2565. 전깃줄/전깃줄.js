const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const arr = input
    .map((line) => line.split(" ").map(Number))
    .sort((a, b) => a[0] - b[0]);
const dp = Array(N).fill(0);

for (let i = 0; i < N; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
        if (arr[i][1] > arr[j][1]) max = Math.max(dp[j], max);
    }

    dp[i] = max + 1;
}

// console.log(arr);
console.log(N - Math.max(...dp));
