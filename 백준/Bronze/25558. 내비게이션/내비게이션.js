const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

let N = Number(input.shift());
const [s1, s2, e1, e2] = input.shift().split(" ").map(Number);
let answer = 0;
let count = 0;
let min = Infinity;

for (let i = 0; i < input.length; i += Number(input[i]) + 1) {
    count++;
    const current = [s1, s2];
    const M = Number(input[i]);
    let distance = 0;

    for (let j = 1; j < M + 1; j++) {
        const [x, y] = input[i + j].split(" ").map(Number);
        distance += Math.abs(current[0] - x);
        distance += Math.abs(current[1] - y);
        current[0] = x;
        current[1] = y;
    }
    distance += Math.abs(current[0] - e1);
    distance += Math.abs(current[1] - e2);

    if (distance < min) {
        min = distance;
        answer = count;
    }
}

console.log(answer);
