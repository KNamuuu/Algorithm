const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const answer = [];

for (const line of input) {
    const stack = line.split("");
    let count = 0;

    for (const c of stack) {
        if (c === "(") count++;
        else if (c === ")") count--;

        if (count < 0) {
            answer.push("NO");
            break;
        }
    }

    if (count === 0) {
        answer.push("YES");
    } else if (count > 0) {
        answer.push("NO");
    }
}

console.log(answer.join("\n"));
