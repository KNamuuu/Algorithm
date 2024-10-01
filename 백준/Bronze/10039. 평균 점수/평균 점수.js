const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => (Number(el) >= 40 ? Number(el) : 40));

const answer = input.reduce((acc, cur) => acc + cur, 0) / 5;

console.log(answer);
