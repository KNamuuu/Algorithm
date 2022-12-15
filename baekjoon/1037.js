let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// let input = fs.readFileSync("./input.txt").toString().split("\n");

input = input[1].split(" ").sort((a, b) => a - b);

console.log(input[0] * input[input.length - 1]);
