const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

let N = Number(input.shift());
let count = 1;

while (true) {
    if (N - count <= 0) break;
    N -= count++;
}

count % 2 === 0
    ? console.log(`${N}/${count - N + 1}`)
    : console.log(`${count - N + 1}/${N}`);
