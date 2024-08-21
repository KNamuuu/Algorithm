const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

console.log(
    input[0]
        .split("")
        .map(Number)
        .sort((a, b) => b - a)
        .join("")
);
