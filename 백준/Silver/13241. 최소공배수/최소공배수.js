const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [a, b] = input.shift().split(" ").map(Number);

function getGCD(num1, num2) {
    while (num2 !== 0) {
        const tmp = num2;
        num2 = num1 % num2;
        num1 = tmp;
    }

    return num1;
}

console.log((a * b) / getGCD(a, b));
