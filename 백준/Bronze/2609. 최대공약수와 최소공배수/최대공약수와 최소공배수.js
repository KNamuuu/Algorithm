const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

const [a, b] = input;
const answer = [];

function getGCD(num1, num2) {
    while (num2 !== 0) {
        let tmp = num2;
        num2 = num1 % num2;
        num1 = tmp;
    }

    return num1;
}

const gcd = getGCD(a, b);
answer.push(gcd, (a * b) / gcd);

console.log(answer.join("\n"));
