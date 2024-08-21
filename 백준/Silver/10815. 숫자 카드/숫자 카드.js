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

// const answer = numbers.map((number) => (cards.includes(number) ? 1 : 0));
// 시간초과 이유: includes가 시간복잡도가 O(n) 이기 때문
const map = new Map();
cards.forEach((card, idx) => {
    map.set(card, idx);
});

const answer = numbers.map((number) => (map.has(number) ? 1 : 0));
console.log(answer.join(" "));
