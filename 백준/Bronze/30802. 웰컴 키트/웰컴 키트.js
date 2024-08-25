const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const sizes = input.shift().split(" ").map(Number);
const [T, P] = input.shift().split(" ").map(Number);

const shirts = sizes.map((size) => Math.ceil(size / T)).reduce((a, b) => a + b);
const pens = [Math.floor(N / P), N % P];

console.log(shirts);
console.log(pens.join(" "));
