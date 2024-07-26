const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const [num1, num2] = input
    .split(" ")
    .map((el) => el.split("").reverse().join(""))
    .map(Number);

console.log(Math.max(num1, num2));
