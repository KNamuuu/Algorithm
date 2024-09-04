const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((el) => parseInt(el, 2))
    .map(BigInt);

const [B1, B2] = input;

console.log((B1 * B2).toString(2));
