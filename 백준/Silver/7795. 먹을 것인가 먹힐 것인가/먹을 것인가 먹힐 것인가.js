const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());
const answer = [];

for (let i = 0; i < T; i++) {
  const [N, M] = input.shift().split(" ").map(Number);

  const A = input.shift().split(" ").map(Number);
  const B = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  let count = 0;

  for (const a of A) {
    for (let j = 0; j < M; j++) {
      if (a > B[j]) {
        count += M - j;
        break;
      }
    }
  }

  answer.push(count);
}

console.log(answer.join("\n"));
