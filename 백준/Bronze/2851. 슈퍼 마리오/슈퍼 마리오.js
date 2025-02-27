const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const TARGET = 100;
let sum = 0;

for (let i = 0; i < input.length; i++) {
  if (sum + input[i] <= 100 || sum + input[i] - 100 <= 100 - sum)
    sum += input[i];
  else break;
}

console.log(sum);
