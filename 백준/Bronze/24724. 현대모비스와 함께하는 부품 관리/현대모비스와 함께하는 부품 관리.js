const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const answer = [];
const T = Number(input.shift());

for (let i = 0; i < T; i++) {
    answer.push(`Material Management ${i + 1}`);
    answer.push("Classification ---- End!");
}
console.log(answer.join("\n"));
