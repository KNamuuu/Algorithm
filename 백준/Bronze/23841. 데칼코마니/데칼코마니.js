const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const map = input.map((line) => line.split(""));

for (let i = 0; i < N; i++) {
  map[i].map((cell, idx) => {
    if (cell !== ".") map[i][M - 1 - idx] = cell;
  });
}

console.log(map.map((line) => line.join("")).join("\n"));
