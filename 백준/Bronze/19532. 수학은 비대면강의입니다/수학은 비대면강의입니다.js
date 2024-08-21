const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

const [a, b, c, d, e, f] = input;

const x = (c * e - b * f) / (a * e - b * d);
const y = (c * d - a * f) / (b * d - a * e);
console.log([x, y].join(" "));
