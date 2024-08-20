const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [A, B, V] = input.shift().split(" ").map(Number);

console.log(Math.ceil((V - B) / (A - B)));
