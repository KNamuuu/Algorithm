const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [A, B] = input.shift().split(" ").map(Number);
const solutions = [];

if (Math.pow(A, 2) === B) solutions.push(-A);
else {
    solutions.push(
        -A + Math.sqrt(Math.pow(A, 2) - B),
        -A - Math.sqrt(Math.pow(A, 2) - B)
    );
}

console.log(solutions.sort((a, b) => a - b).join(" "));
