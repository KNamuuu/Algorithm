const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const numbers = input.shift().split(" ").map(Number);
const uniqueNumbers = Array.from(new Set(numbers)).sort((a, b) => a - b);

const map = new Map();
uniqueNumbers.forEach((num, index) => {
    map.set(num, index);
});

const answer = numbers.map((number) => map.get(number));

console.log(answer.join(" "));
