const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [K, N, M] = input;
const answer = K * N - M;

console.log(answer > 0 ? answer : 0);
