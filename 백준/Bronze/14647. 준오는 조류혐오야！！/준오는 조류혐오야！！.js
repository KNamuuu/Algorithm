const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const map = input.map((line) => line.split(" ").map(Number));

let totalNine = 0;
let rowMaxNine = 0;
let colMaxNine = 0;

for (let i = 0; i < n; i++) {
  let countNine = 0;

  for (let j = 0; j < m; j++) {
    for (const num of map[i][j].toString().split("").map(Number)) {
      if (num === 9) {
        totalNine++;
        countNine++;
      }
    }
  }

  rowMaxNine = Math.max(countNine, rowMaxNine);
}

for (let i = 0; i < m; i++) {
  let countNine = 0;
  for (let j = 0; j < n; j++) {
    for (const num of map[j][i].toString().split("").map(Number)) {
      if (num === 9) {
        countNine++;
      }
    }
  }

  colMaxNine = Math.max(countNine, colMaxNine);
}

console.log(totalNine - Math.max(rowMaxNine, colMaxNine));
