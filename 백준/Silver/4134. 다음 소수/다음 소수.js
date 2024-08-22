const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const N = input.shift();
const answer = [];

function isPrime(number) {
    if (number === 0 || number === 1) return false;
    if (number === 2 || number === 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;

    for (let i = 5; i <= Math.sqrt(number); i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

function findNextPrime(number) {
    while (!isPrime(number)) {
        number++;
    }

    return number;
}

for (const number of input) {
    answer.push(findNextPrime(number));
}
console.log(answer.join("\n"));
