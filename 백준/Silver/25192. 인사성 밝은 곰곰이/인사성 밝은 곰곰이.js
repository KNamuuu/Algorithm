const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());

let message = new Set();
let answer = 0;

for (const line of input) {
    if (line === "ENTER") {
        message.clear();
        continue;
    }

    if (!message.has(line)) {
        message.add(line);
        answer++;
    }
}

console.log(answer);
