const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const answer = [];

for (const line of input) {
  const [a, b] = line.split(" ").map(Number);

  if (a === 0 && b === 0) break;

  if (a > b) answer.push("Yes");
  else answer.push("No");
}
console.log(answer.join("\n"));
