const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
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

    if (c >= a + b) answer.push("Invalid");
    else if (a === b && b === c) answer.push("Equilateral");
    else if (a === b || b === c || c === a) answer.push("Isosceles");
    else answer.push("Scalene");
}

console.log(answer.join("\n"));
