const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

const [a, b, c] = input;

console.log(a + b + Math.min(a + b - 1, c));
