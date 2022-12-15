let fs = require("fs");

// let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let N = input.shift();
const board = input.map((v) => v.split(""));

console.log(board);
