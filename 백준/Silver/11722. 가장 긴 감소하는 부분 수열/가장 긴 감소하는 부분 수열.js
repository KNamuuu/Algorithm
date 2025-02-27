const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const arr = input.shift().split(" ").map(Number);

const dp = Array(N).fill(0);
dp[0] = 1;

for (let i = 1; i < N; i++) {
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (arr[j] > arr[i]) max = Math.max(dp[j], max);
  }

  dp[i] = max + 1;
}

console.log(Math.max(...dp));
