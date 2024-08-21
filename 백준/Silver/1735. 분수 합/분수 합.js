const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [a1, b1] = input.shift().split(" ").map(Number);
const [a2, b2] = input.shift().split(" ").map(Number);

function getGCD(num1, num2) {
    while (num2 !== 0) {
        const tmp = num2;
        num2 = num1 % num2;
        num1 = tmp;
    }

    return num1;
}

const numerator = a1 * b2 + a2 * b1;
const denominator = b1 * b2;
const gcd = getGCD(numerator, denominator);

console.log(numerator / gcd, denominator / gcd);
