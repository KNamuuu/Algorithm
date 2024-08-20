const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const n = input.shift();

const answer = (BigInt(n) * BigInt(n - 1) * BigInt(n - 2)) / BigInt(6);

console.log(`${answer}`);
console.log(3);
