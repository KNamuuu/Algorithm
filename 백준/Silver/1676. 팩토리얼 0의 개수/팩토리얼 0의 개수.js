const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const N = Number(input);
const factorial = Array(N + 1).fill(0);
factorial[0] = factorial[1] = 1n;

for (let i = 2; i < N + 1; i++) {
    factorial[i] = factorial[i - 1] * BigInt(i);
}

let answer = 0;
for (const char of factorial[N].toString().split("").reverse()) {
    if (char === "0") answer++;
    else break;
}

console.log(answer);
