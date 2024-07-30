const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());

const answer = input.map(Number).sort((a, b) => a - b);

for(const num of answer) {
    console.log(num)
}