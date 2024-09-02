const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(BigInt);

const [n, m] = input;

console.log((n / m).toString(), (n % m).toString());
