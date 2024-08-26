const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [A, P, C] = input.shift().split(" ").map(Number);

console.log(Math.max(A + C, P));
