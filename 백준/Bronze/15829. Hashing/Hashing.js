const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const L = Number(input.shift());
const word = input.shift();
const M = 1234567891n;
const r = 31n;

let answer = 0n;
let pow = 1n;

for (let i = 0; i < L; i++) {
    const a = BigInt(word.charCodeAt(i) - "a".charCodeAt(0) + 1);
    answer = (answer + a * pow) % M;
    pow = (pow * r) % M;
}

console.log(answer.toString());
