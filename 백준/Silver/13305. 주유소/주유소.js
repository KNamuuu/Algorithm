const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const distance = input.shift().split(" ").map(BigInt);
const prices = input.shift().split(" ").map(BigInt);

let currentPrice = prices[0];
let answer = 0n;

for (let i = 0; i < N - 1; i++) {
    answer += currentPrice * distance[i];
    if (currentPrice > prices[i + 1]) currentPrice = prices[i + 1];
}

console.log(answer.toString());
