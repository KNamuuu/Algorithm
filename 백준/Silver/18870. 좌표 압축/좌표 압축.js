const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const numbers = input.shift().split(" ").map(Number);
const uniqueNumbers = Array.from(new Set(numbers)).sort((a, b) => a - b);
const answer = [];

const rankMap = new Map();
uniqueNumbers.forEach((num, index) => {
    rankMap.set(num, index);
});

for (const number of numbers) {
    answer.push(rankMap.get(number));
}

console.log(answer.join(" "));
