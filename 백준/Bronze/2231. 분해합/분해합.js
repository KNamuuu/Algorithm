const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const N = input[0];
let answer = 0;

for (let i = 0; i < N; i++) {
    const sum =
        i
            .toString()
            .split("")
            .map(Number)
            .reduce((a, b) => a + b, 0) + i;

    if (N === sum) {
        answer = i;
        break;
    }
}

console.log(answer);
