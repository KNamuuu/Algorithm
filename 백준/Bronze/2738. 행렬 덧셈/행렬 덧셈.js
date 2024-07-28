const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const A = [];

for (let i = 0; i < N; i++) {
    A.push(input.shift().split(" ").map(Number));
}

const B = input.map((line) => line.split(" ").map(Number));

const answer = Array.from({ length: N }, () => []);

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        answer[i][j] = A[i][j] + B[i][j];
    }
}

// console.log(answer.join("\n"));
console.log(answer.map((line) => line.join(" ")).join("\n"));
