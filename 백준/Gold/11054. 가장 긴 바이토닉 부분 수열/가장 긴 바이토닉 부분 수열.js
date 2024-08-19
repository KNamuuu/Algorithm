const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const arr = input.shift().split(" ").map(Number);
const ascDp = Array(N).fill(0);
const descDp = Array(N).fill(0);

for (let i = 0; i < N; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j]) max = Math.max(ascDp[j], max);
    }
    ascDp[i] = max + 1;
}

for (let i = N - 1; i >= 0; i--) {
    let max = 0;
    for (let j = i + 1; j < N; j++) {
        if (arr[i] > arr[j]) max = Math.max(descDp[j], max);
    }
    descDp[i] = max + 1;
}

const answer = ascDp.map((el, i) => el + descDp[i]);
console.log(Math.max(...answer) - 1);
