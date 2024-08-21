const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());

console.log(
    input
        .map((el) => el.split(" ").map(Number))
        .sort((a, b) => a[1] - b[1])
        .sort((a, b) => a[0] - b[0])
        .map((line) => line.join(" "))
        .join("\n")
);
