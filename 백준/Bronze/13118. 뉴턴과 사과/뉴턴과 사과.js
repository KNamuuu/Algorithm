const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const people = input.shift().split(" ").map(Number);
const [x, y, z] = input.shift().split(" ").map(Number);

console.log(people.indexOf(x) + 1);
