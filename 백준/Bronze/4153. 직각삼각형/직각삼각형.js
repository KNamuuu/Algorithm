const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const answer = [];
for (const line of input) {
    const [a, b, c] = line
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b);

    if (a === 0 && b === 0 && c === 0) break;

    if (Math.pow(c, 2) === Math.pow(a, 2) + Math.pow(b, 2))
        answer.push("right");
    else answer.push("wrong");
}

console.log(answer.join("\n"));
