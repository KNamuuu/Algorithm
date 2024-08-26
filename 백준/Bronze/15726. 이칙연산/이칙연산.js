const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [A, B, C] = input.shift().split(" ").map(Number);

console.log(Math.max(Math.floor((A * B) / C), Math.floor((A / B) * C)));
