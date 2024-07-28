const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

let max = 0;
let idx_x = 0;
let idx_y = 0;

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
        if (input[i][j] > max) {
            max = input[i][j];
            idx_x = i;
            idx_y = j;
        }
    }
}

console.log(max);
console.log(idx_x + 1, idx_y + 1);
