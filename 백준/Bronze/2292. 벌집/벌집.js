const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());

let max = 1;
let count = 1;

while (true) {
    if (max >= N) {
        console.log(count);
        break;
    } else {
        max += 6 * count++;
    }
}
