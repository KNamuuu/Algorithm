const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const answer =
  input
    .shift()
    .split(" ")
    .map(Number)
    .reduce((a, b) => a + b, 0) +
  8 * (N - 1);

console.log(parseInt(answer / 24), answer % 24);
