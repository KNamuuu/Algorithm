const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

let N = input.shift();
const factors = [];

while (N % 2 === 0) {
    factors.push(2);
    N /= 2;
}

let divisor = 3;

while (divisor <= Math.sqrt(N)) {
    while (N % divisor === 0) {
        factors.push(divisor);
        N /= divisor;
    }
    divisor += 2;
}

if (N > 1) {
    factors.push(N);
}

console.log(factors.join("\n"));
