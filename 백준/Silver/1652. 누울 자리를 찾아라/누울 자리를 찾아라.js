const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const rowCount = input
    .map((line) => line.split("X"))
    .flat()
    .filter((el) => el.length >= 2).length;
const colCount = Array.from({ length: N }, (_, i) =>
    input
        .map((line) => line[i])
        .join("")
        .split("X")
)
    .flat()
    .filter((el) => el.length >= 2).length;

console.log(`${rowCount} ${colCount}`);
