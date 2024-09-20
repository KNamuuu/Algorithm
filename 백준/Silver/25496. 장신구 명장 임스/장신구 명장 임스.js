const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

let [P, N] = input.shift();
const accessories = input.shift().sort((a, b) => a - b);
let answer = 0;

for (const accessory of accessories) {
    if (P >= 200) break;

    P += accessory;
    answer++;
}

console.log(answer);
