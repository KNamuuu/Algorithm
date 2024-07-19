let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs.readFileSync("./input.txt").toString().split("\n");

const N = Number(input.shift());
const arr = input.shift().split(" ").map(Number);
const v = Number(input.shift());

let answer = 0;

for (const number of arr) {
    if (number === v) answer++;
}

console.log(answer);
