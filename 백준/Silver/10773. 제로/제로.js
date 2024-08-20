const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const N = input.shift();
const stack = [];

for (const num of input) {
    if (num === 0) stack.pop();
    else stack.push(num);
}

console.log(stack.reduce((a, b) => a + b, 0));
