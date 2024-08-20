const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

let [x, y, w, h] = input;

console.log(Math.min(x, y, w - x, h - y));
