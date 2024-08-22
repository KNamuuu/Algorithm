const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const N = input.shift();
const distances = [];
for (let i = 1; i < input.length; i++) {
    distances.push(input[i] - input[i - 1]);
}

function getGCD(num1, num2) {
    while (num2 !== 0) {
        const tmp = num2;
        num2 = num1 % num2;
        num1 = tmp;
    }

    return num1;
}

const gcd = distances.reduce((a, b) => getGCD(a, b), 0);

const totalTrees = (input[N - 1] - input[0]) / gcd + 1;

console.log(totalTrees - input.length);
