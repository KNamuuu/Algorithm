const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const stack = [];
const answer = [];

function operateStack(func, num) {
    switch (func) {
        case 1:
            stack.push(num);
            return;
        case 2:
            stack.length !== 0 ? answer.push(stack.pop()) : answer.push(-1);
            return;
        case 3:
            answer.push(stack.length);
            return;
        case 4:
            answer.push(stack.length !== 0 ? 0 : 1);
            return;
        case 5:
            stack.length !== 0
                ? answer.push(stack[stack.length - 1])
                : answer.push(-1);
            return;
    }
}

for (const line of input) {
    const [a, b] = line.split(" ").map(Number);
    operateStack(a, b);
}

console.log(answer.join("\n"));
