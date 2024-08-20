const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const [M, N] = input;
const isPrime = Array(N + 1).fill(true);
const primes = [];

isPrime[0] = false;
isPrime[1] = false;
for (let i = 2; i < Math.sqrt(N); i++) {
    if (isPrime[i]) {
        for (let j = i * i; j <= N; j += i) {
            isPrime[j] = false;
        }
    }
}

for (let i = M; i < N + 1; i++) {
    if (isPrime[i]) primes.push(i);
}

if (primes.length === 0) return console.log(-1);

console.log(primes.reduce((a, b) => a + b, 0));
console.log(primes[0]);
