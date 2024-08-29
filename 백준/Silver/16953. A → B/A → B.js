const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const queue = [[N, 0]];
let answer = -1;

while (queue.length > 0) {
    const [number, count] = queue.shift();

    if (number === K) {
        answer = count + 1;
        break;
    }

    for (const next of [number * 2, number * 10 + 1]) {
        if (next <= K) queue.push([next, count + 1]);
    }
}

console.log(answer);
