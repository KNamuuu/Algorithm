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
let result = true;

while (true) {
    if (stack.length === 0 && people.length === 0) break;

    if (stack[stack.length - 1] !== turn && people.length === 0) {
        result = false;
        break;
    }

    if (people[0] === turn) {
        people.shift();
        turn++;
    } else if (stack[stack.length - 1] === turn) {
        stack.pop();
        turn++;
    } else stack.push(people.shift());
}

!result ? console.log("Sad") : console.log("Nice");
