const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const N = Math.max(...input) * 2 + 1;
const primes = Array(N).fill(true);
primes[0] = false;
primes[1] = false;

for (let i = 2; i <= Math.sqrt(N); i++) {
    if (primes[i]) {
        for (let j = i * i; j <= N; j += i) {
            primes[j] = false;
        }
    }
}

const answer = [];

for (const number of input) {
    if (number === 0) break;

    let count = 0;

    for (let i = number + 1; i <= number * 2; i++) {
        primes[i] && count++;
    }

    answer.push(count);
}

console.log(answer.join("\n"));
