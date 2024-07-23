const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const arr = input.map(Number).sort((a, b) => a - b);

const answer = [];

// 산술평균
const sum = arr.reduce((a, b) => a + b, 0);
answer.push(
    Math.round(sum / arr.length) !== -0 ? Math.round(sum / arr.length) : 0
);

// 중앙값
answer.push(arr[parseInt(N / 2)]);

// 최빈값
const map = new Map();
let max = 0;
for (const number of arr) {
    map.has(number) ? map.set(number, map.get(number) + 1) : map.set(number, 1);

    if (max < map.get(number)) max = map.get(number);
}

const mode = [];

for (const [num, count] of map) {
    if (count === max) mode.push(num);
}

answer.push(mode.length === 1 ? mode[0] : mode[1]);

// 범위
answer.push(arr[arr.length - 1] - arr[0]);

console.log(answer.join("\n"));
