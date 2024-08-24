const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((el) => Math.pow(Number(el), 2));

const sum = input.reduce((a, b) => a + b);
console.log(sum % 10);
