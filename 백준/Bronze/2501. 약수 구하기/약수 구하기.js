const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const divisor = [];

for (let i = 1; i <= Math.sqrt(N); i++) {
    if (i === Math.sqrt(N)) {
        divisor.push(i);
        break;
    }
    if (N % i === 0) divisor.push(i, N / i);
}

divisor.sort((a, b) => a - b);


console.log(divisor[K - 1] || 0);
