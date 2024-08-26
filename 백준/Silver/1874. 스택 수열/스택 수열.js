const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const N = input.shift();
let answer = [];
const stack = [];
let current = 1;

for (let i = 0; i < N; i++) {
    const target = input[i];

    while (target >= current) {
        stack.push(current);
        current++;
        answer.push("+");
    }

    let poppedNumber = stack.pop();
    answer.push("-");

    if (poppedNumber !== target) {
        answer = ["NO"];
        break;
    }
}

console.log(answer.join("\n"));
