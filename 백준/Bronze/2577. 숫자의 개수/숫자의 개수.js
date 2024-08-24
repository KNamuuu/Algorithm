const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const result = input.reduce((a, b) => a * b);
const answer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (const number of result.toString().split("").map(Number)) {
    answer[number]++;
}

console.log(answer.join("\n"));
