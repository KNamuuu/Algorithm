const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const T = input.shift();
const N = Math.max(...input);

const isPrime = Array(N + 1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i <= Math.sqrt(N); i++) {
    if (isPrime[i]) {
        for (let j = i * i; j <= N; j += i) {
            isPrime[j] = false;
        }
    }
}

const primes = [];
for (let i = 0; i < N + 1; i++) {
    isPrime[i] && primes.push(i);
}
const primeSet = new Set(primes);
const answer = [];

for (const number of input) {
    let count = 0;

    for (const prime of primes) {
        if (number - prime < number / 2) break;
        primeSet.has(number - prime) && count++;
    }

    answer.push(count);
}

console.log(answer.join("\n"));
