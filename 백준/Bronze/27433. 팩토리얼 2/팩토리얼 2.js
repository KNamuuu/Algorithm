const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const N = input.shift();
function fibo(n) {
    if (n === 0 || n === 1) return 1;
    else return n * fibo(n - 1);
}

console.log(fibo(N));
