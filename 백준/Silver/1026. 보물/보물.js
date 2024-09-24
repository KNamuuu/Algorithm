const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [N] = input.shift();
const A = input.shift().sort((a, b) => a - b);
const B = input.shift().sort((a, b) => b - a);
let answer = 0;

for (let i = 0; i < N; i++) {
  answer += A[i] * B[i];
}

console.log(answer);
