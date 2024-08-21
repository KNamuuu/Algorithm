const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

let N = Number(input[0]);
let answer = 0;

while (N >= 3) {
    if (N % 5 === 0) {
        answer++;
        N -= 5;
    } else if (N % 3 === 0) {
        answer++;
        N -= 3;
    } else if (N >= 5) {
        answer++;
        N -= 5;
    } else {
        answer++;
        N -= 3;
    }
}

N === 0 ? console.log(answer) : console.log(-1);
