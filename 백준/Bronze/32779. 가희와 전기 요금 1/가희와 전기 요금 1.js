const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const Q = input.shift();
const answer = [];

input.map((line) => {
  const [a, m] = line.split(" ").map(Number);
  answer.push(parseInt(a * m * (105.6 / 1000 / 60)));
});

console.log(answer.join("\n"));
