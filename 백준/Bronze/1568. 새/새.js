const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

let N = input.shift();
let answer = 0;
let count = 1;

while (N > 0) {
    if (N < count) count = 1;
    N -= count++;
    answer++;
}

console.log(answer);
