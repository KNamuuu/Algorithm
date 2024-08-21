const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const answer = [];

function getGCD(num1, num2) {
    while (num2 !== 0) {
        const tmp = num2;
        num2 = num1 % num2;
        num1 = tmp;
    }

    return num1;
}

for (const line of input) {
    const [a, b] = line.split(" ").map(Number);
    const gcd = getGCD(a, b);

    answer.push((a * b) / gcd);
}

console.log(answer.join("\n"));
