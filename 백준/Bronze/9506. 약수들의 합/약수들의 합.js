const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const answer = [];

for (const N of input) {
    if (N === -1) break;
    const divisor = [1];

    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            divisor.push(i);
            if (i !== Math.sqrt(N)) divisor.push(N / i);
        }
    }

    divisor.sort((a, b) => a - b);
    const sum = divisor.reduce((a, b) => a + b, 0);

    if (sum === N) answer.push(`${N} = ${divisor.join(" + ")}`);
    else answer.push(`${N} is NOT perfect.`);
}

console.log(answer.join("\n"));
