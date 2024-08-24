const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = input.shift();
const answer = [];

for (const results of input) {
    let score = 0;
    let count = 0;

    results.split("").forEach((result) => {
        if (result === "O") {
            count++;
            score += count;
        } else count = 0;
    });

    answer.push(score);
}

console.log(answer.join("\n"));
