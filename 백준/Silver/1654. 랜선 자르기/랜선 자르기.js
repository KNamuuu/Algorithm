const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [K, N] = input.shift().split(" ").map(Number);
const cables = input.map(Number);

let max = Math.max(...cables);
let min = 1;

while (min <= max) {
    let mid = parseInt((max + min) / 2);
    const count = cables
        .map((cable) => parseInt(cable / mid))
        .reduce((a, b) => a + b);

    if (count >= N) {
        min = mid + 1;
    } else {
        max = mid - 1;
    }
}

console.log(max);
