const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

let [N, M] = input.shift().split(" ").map(Number);
const board = input;
let answer = Infinity;

const black = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
];
const white = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
];

for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
        countDifference(i, j);
    }
}

function countDifference(x, y) {
    let countBlackBoard = 0;
    let countwhiteBoard = 0;

    for (let i = x; i < x + 8; i++) {
        for (let j = y; j < y + 8; j++) {
            if (board[i][j] !== white[i - x][j - y]) countwhiteBoard++;
            if (board[i][j] !== black[i - x][j - y]) countBlackBoard++;
        }
    }

    const min = Math.min(countBlackBoard, countwhiteBoard);
    if (min < answer) answer = min;
}

console.log(answer);
