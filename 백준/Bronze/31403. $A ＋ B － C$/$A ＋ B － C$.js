const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const answer = [];
answer.push(+input[0] + +input[1] - +input[2]);
answer.push(input[0] + input[1] - input[2]);

console.log(answer.join("\n"));
