const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const N = input.shift();
const max = Math.max(...input) + 1;
const answer = [];
const fibo = Array(max).fill(0);

fibo[0] = 0;
fibo[1] = 1;

for (let i = 2; i < max; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}

for (const number of input) {
    const zeroCount = fibo[number - 1] === undefined ? 1 : fibo[number - 1];
    const oneCount = fibo[number];

    answer.push(`${zeroCount} ${oneCount}`);
}

console.log(answer.join("\n"));
