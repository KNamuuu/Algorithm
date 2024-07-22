const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const string = input.shift().split("");
const n = Number(input.shift());

console.log(string[n - 1]);
