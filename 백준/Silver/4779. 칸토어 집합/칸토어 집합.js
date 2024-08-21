const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

function recursion(length) {
    if (length === 1) return "-";

    const division = length / 3;
    const left = recursion(division);
    const mid = " ".repeat(division);
    const right = recursion(division);

    return left + mid + right;
}

const answer = [];
for (const number of input) {
    answer.push(recursion(Math.pow(3, number)));
}

console.log(answer.join("\n"));
