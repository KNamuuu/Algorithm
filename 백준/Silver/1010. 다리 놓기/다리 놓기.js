const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());

function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}

for (const line of input) {
    const [N, M] = line.split(" ").map(Number);

    console.log(Math.round(factorial(M) / factorial(N) / factorial(M - N)));
}
