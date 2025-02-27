const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, L, K] = input.shift().split(" ").map(Number);
const problems = input
  .map((line) => line.split(" ").map(Number))
  .sort((a, b) => a[1] - b[1]);

let solvedProblems = 0;
let answer = 0;

for (const [easy, hard] of problems) {
  if (solvedProblems === K) break;

  if (hard <= L) {
    answer += 140;
    solvedProblems++;
    // continue;
  } else if (easy <= L) {
    answer += 100;
    solvedProblems++;
    // continue;
  }
}

console.log(answer);
