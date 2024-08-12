const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);

const prefix = new Array(N + 1).fill(0);
const answer = [];

for (let i = 0; i < N; i++) {
    prefix[i + 1] = prefix[i] + arr[i];
}

for (const line of input) {
    const [i, j] = line.split(" ").map(Number);

    answer.push(prefix[j] - prefix[i - 1]);
}

console.log(answer.join("\n"));
