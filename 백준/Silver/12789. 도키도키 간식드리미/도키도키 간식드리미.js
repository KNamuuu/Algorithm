const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const people = input.shift().split(" ").map(Number);
const stack = [];
let turn = 1;

while (people.length !== 0) {
    const next = people.shift();

    if (next !== turn) stack.push(next);
    else turn++;

    while (stack.length > 0 && stack[stack.length - 1] === turn) {
        stack.pop();
        turn++;
    }
}

stack.length === 0 ? console.log("Nice") : console.log("Sad");
