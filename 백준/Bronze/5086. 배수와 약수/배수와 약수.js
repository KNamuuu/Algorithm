const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const answer = [];

for (const line of input) {
    const [a, b] = line.split(" ").map(Number);

    if (a === 0 && b === 0) console.log(answer.join("\n"));

    if (b % a === 0) answer.push("factor");
    else if (a % b === 0) answer.push("multiple");
    else answer.push("neither");
}
