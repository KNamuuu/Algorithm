const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const n = BigInt(input.shift());

console.log(`${n * n * n}`);
console.log(3);
