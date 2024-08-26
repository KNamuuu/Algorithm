const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const T = input.shift();
const numbers = input.shift().split(" ").map(Number);
const answer = [];

for (const number of numbers) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) sum += i;
    }

    if (sum === number) answer.push("Perfect");
    else if (sum < number) answer.push("Deficient");
    else answer.push("Abundant");
}

console.log(answer.join("\n"));
