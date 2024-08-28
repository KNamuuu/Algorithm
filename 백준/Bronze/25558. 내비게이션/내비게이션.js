const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

let N = Number(input.shift());
const [s1, s2, e1, e2] = input.shift().split(" ").map(Number);
let min = Infinity;
let answer = 0;

let index = 0;

for (let i = 1; i <= N; i++) {
    const M = Number(input[index]);
    let currentX = s1;
    let currentY = s2;
    let distance = 0;

    for (let j = 1; j <= M; j++) {
        const [x, y] = input[index + j].split(" ").map(Number);
        distance += Math.abs(currentX - x) + Math.abs(currentY - y);
        currentX = x;
        currentY = y;
    }

    distance += Math.abs(currentX - e1) + Math.abs(currentY - e2);

    if (distance < min) {
        min = distance;
        answer = i;
    }

    index += M + 1;
}

console.log(answer);
