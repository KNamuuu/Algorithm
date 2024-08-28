const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const trees = input.shift().split(" ").map(Number);

let max = Math.max(...trees);
let min = 0;
let answer = 0;

while (min <= max) {
    let mid = Math.floor((max + min) / 2);

    const cutted = trees.map((tree) => (tree - mid > 0 ? tree - mid : 0));
    const sum = cutted.reduce((a, b) => a + b);
    if (sum >= M) {
        answer = mid;
        min = mid + 1;
    } else if (sum < M) max = mid - 1;
}

console.log(answer);
