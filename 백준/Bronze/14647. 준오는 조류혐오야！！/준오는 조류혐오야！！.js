const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const map = input.map((line) => line.split(" ").map(Number));

function countNines(number) {
  return number
    .toString()
    .split("")
    .filter((num) => num === "9").length;
}

let totalNine = 0;
let rowMaxNine = 0;
let colMaxNine = 0;

for (let i = 0; i < n; i++) {
  let rowNineCount = 0;
  for (let j = 0; j < m; j++) {
    const nineCount = countNines(map[i][j]);
    totalNine += nineCount;
    rowNineCount += nineCount;
  }
  rowMaxNine = Math.max(rowMaxNine, rowNineCount);
}

for (let j = 0; j < m; j++) {
  let colNineCount = 0;
  for (let i = 0; i < n; i++) {
    colNineCount += countNines(map[i][j]);
  }
  colMaxNine = Math.max(colMaxNine, colNineCount);
}

const result = totalNine - Math.max(rowMaxNine, colMaxNine);
console.log(result);
