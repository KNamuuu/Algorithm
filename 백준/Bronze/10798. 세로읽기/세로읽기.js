const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((line) => line.split(""));

const answer = [];

const line = input.length;
const length = input.join("").length;

for (let i = 0; i < length; i++) {
    for (let j = 0; j < line; j++) {
        if (input[j][i] === undefined) continue;

        answer.push(input[j][i]);
    }
}

console.log(answer.join(""));
