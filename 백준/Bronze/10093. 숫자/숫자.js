const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const [A, B] = input.map(Number).sort((a, b) => a - b);
const numbers = Array.from({ length: B - A - 1 }, (_, i) => A + i + 1);
const gap = B - A - 1;

console.log(gap < 0 ? 0 : gap);
console.log(numbers.join(" "));
