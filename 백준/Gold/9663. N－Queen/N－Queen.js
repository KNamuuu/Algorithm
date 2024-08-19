const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

let N = Number(input.shift());
const queens = [];
let answer = 0;

function isPossible(x, y) {
    for (const [row, col] of queens) {
        if (x === row || y === col) return false;
        if (Math.abs(row - x) === Math.abs(col - y)) return false;
    }

    return true;
}

function dfs(row) {
    if (row === N) {
        answer++;
        return;
    }

    for (let i = 0; i < N; i++) {
        if (!isPossible(row, i)) continue;
        queens.push([row, i]);
        dfs(row + 1);
        queens.pop();
    }
}

dfs(0);

console.log(answer);
