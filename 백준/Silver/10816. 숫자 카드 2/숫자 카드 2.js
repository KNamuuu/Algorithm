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

const cardMap = new Map();
cards.forEach((card) => {
    if (cardMap.has(card)) cardMap.set(card, cardMap.get(card) + 1);
    else cardMap.set(card, 1);
});

const answer = numbers.map((number) => cardMap.get(number) | 0);
console.log(answer.join(" "));
