const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const words = input.splice(0, N);
const wordSet = new Set(words);

let answer = 0;

for (const word of input) {
    if (wordSet.has(word)) answer++;
}

console.log(answer);
