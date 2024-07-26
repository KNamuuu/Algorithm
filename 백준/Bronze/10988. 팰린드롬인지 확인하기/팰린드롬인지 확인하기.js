const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const reverse = input.split("").reverse().join("");

console.log(input === reverse ? 1 : 0);
