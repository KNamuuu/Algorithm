const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [a1, a2] = input.shift().split(" ").map(Number);
const c = Number(input.shift());
const n = Number(input.shift());

a1 * n + a2 <= c * n && c >= a1 ? console.log(1) : console.log(0);
