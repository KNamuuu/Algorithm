const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());

console.log(
    input
        .sort((a, b) => Number(a.split(" ")[0]) - Number(b.split(" ")[0]))
        .join("\n")
);
