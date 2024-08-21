const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const cards = input.shift().split(" ").map(Number);
const M = Number(input.shift());
const numbers = input.shift().split(" ").map(Number);

const cardSet = new Set(cards);

const answer = numbers.map((number) => (cardSet.has(number) ? 1 : 0));
console.log(answer.join(" "));
