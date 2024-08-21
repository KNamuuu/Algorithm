const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

let N = Number(input[0]);
let number = 665;
let count = 0;

while (count !== N) {
    number++;
    if (number.toString().includes("666")) count++;
}

console.log(number);
