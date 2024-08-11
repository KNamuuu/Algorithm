const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number)
    .sort((a, b) => a - b);

let sum = 0;

input.forEach((el) => (sum += el));

console.log(sum / input.length);
console.log(input[parseInt(input.length / 2)]);
