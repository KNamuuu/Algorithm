const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const N = input.shift();

function fibo(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(N));
