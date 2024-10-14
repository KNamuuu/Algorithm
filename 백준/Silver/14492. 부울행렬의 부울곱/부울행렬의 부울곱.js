const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const A = input.slice(0, N).map((line) => line.split(" ").map(Number));
const B = input.slice(N, N * 2).map((line) => line.split(" ").map(Number));

let result = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
      if (A[i][k] && B[k][j]) {
        result++;
        break;
      }
    }
  }
}

console.log(result);
