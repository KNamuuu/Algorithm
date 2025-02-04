const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const T = input.shift();
const answer = [];

input.map((line) => {
  const [d, n, s, p] = line.split(" ").map(Number);

  const serial = s * n;
  const parallel = d + p * n;

  if (serial > parallel) answer.push("parallelize");
  else if (serial < parallel) answer.push("do not parallelize");
  else answer.push("does not matter");
});

console.log(answer.join("\n"));
