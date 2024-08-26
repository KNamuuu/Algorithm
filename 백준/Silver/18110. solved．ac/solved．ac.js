const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const N = input.shift();
const opinions = input.sort((a, b) => a - b);
const round = Math.round(N * 0.15);

if (round * 2 >= N) {
    console.log(0);
    process.exit();
}

opinions.splice(0, round);
opinions.splice(opinions.length - round, round);

console.log(Math.round(opinions.reduce((a, b) => a + b) / opinions.length));
