const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [N, k] = input.shift().split(" ").map(Number);

const scores = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

console.log(scores[k - 1]);
