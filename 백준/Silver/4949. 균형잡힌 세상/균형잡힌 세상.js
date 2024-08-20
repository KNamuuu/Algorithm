const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const answer = [];
const regex = /[^()\[\]]/g;

for (let line of input) {
    if (line === ".") break;

    line = line.replace(regex, "");

    const stack = [];
    let isCompare = true;

    for (const c of line) {
        if (c === "(" || c === "[") stack.push(c);
        else if (c === ")") {
            if (stack[stack.length - 1] === "(") stack.pop();
            else {
                isCompare = false;
                break;
            }
        } else if (c === "]")
            if (stack[stack.length - 1] === "[") stack.pop();
            else {
                isCompare = false;
                break;
            }
    }

    if (!isCompare || stack.length > 0) answer.push("no");
    else answer.push("yes");
}

console.log(answer.join("\n"));
