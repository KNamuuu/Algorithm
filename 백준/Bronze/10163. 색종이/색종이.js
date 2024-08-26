const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const board = Array.from({ length: 1001 }, () => Array(1001).fill(0));

for (let i = 0; i < N; i++) {
    const [x1, y1, width, height] = input[i].split(" ").map(Number);
    const x2 = x1 + width;
    const y2 = y1 + height;

    for (let j = x1; j < x2; j++) {
        for (let k = y1; k < y2; k++) {
            board[j][k] = i + 1;
        }
    }
}

const answer = Array(N).fill(0);

for (let i = 0; i < 1001; i++) {
    for (let j = 0; j < 1001; j++) {
        if (board[i][j] !== 0) answer[board[i][j] - 1]++;
    }
}

console.log(answer.join("\n"));
