const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
let answer = -Infinity;

for (const scores of input) {
    const [a, d, g] = scores.split(" ").map(Number);
    const score = a === d + g ? a * (d + g) * 2 : a * (d + g);

    answer = Math.max(answer, score);
}

console.log(answer);
