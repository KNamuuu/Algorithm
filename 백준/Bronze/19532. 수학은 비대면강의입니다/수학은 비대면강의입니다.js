const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

const [a, b, c, d, e, f] = input;

const answer = [];

for (let i = -999; i < 1000; i++) {
    for (let j = -999; j < 1000; j++) {
        if (a * i + b * j === c && d * i + e * j === f) {
            answer.push(i, j);
            break;
        }
    }
}

console.log(answer.join(" "));
