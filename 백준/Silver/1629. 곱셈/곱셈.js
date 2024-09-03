const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(BigInt);

let [A, B, C] = input;

function recursion(a, b, c) {
    if (b === 1n) return a % c;
    else if (b % 2n === 0n) {
        const half = recursion(a, b / 2n, c);
        return (half * half) % c;
    } else if (b % 2n === 1n) {
        const half = recursion(a, b / 2n, c);
        return (half * half * a) % c;
    }
}

console.log(recursion(A, B, C).toString());
