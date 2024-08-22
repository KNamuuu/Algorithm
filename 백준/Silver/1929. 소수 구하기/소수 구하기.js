const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const primes = Array(M + 1).fill(true);
primes[0] = false;
primes[1] = false;

for (let i = 2; i <= Math.sqrt(M); i++) {
    if (primes[i]) {
        for (let j = i * i; j <= M; j += i) {
            primes[j] = false;
        }
    }
}

const answer = [];

for (let i = N; i < M + 1; i++) {
    primes[i] && answer.push(i);
}

console.log(answer.join("\n"));
