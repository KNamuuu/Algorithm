const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const N = Number(input[0]);
const f = new Array(N).fill(0);
let countFib = 1;
let countFibonacci = 0;

function fib(n) {
    if (n === 1 || n === 2) return 1;
    else {
        countFib++;
        return fib(n - 1) + fib(n - 2);
    }
}

function fibonacci(n) {
    f[1] = 1;
    f[2] = 1;

    for (let i = 3; i <= N; i++) {
        countFibonacci++;
        f[i] = f[i - 1] + f[i - 2];
    }
    return f[n];
}

fib(N);
fibonacci(N);

console.log(countFib, countFibonacci);
