const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const arr = input.shift().split(" ").map(Number);

const dp = [...arr];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) dp[i] = Math.max(dp[j] + arr[i], dp[i]);
  }
}

console.log(Math.max(...dp));
