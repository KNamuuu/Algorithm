const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const sudoku = input.map((line) => line.split(" ").map(Number));
let zeroCoords = findZeroCoords();
const zeroCounts = zeroCoords.length;
let answer = "";

function findZeroCoords() {
    let arr = [];

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (sudoku[i][j] === 0) arr.push([i, j]);
        }
    }

    return arr;
}

function check(row, col, value) {
    const row_block = Math.floor(row / 3) * 3;
    const col_block = Math.floor(col / 3) * 3;

    for (let i = 0; i < 9; i++) {
        if (sudoku[row][i] === value || sudoku[i][col] === value) return false;
    }

    for (let i = row_block; i < row_block + 3; i++) {
        for (let j = col_block; j < col_block + 3; j++) {
            if (sudoku[i][j] === value) return false;
        }
    }

    return true;
}

function dfs(count) {
    if (count === zeroCounts) {
        for (let line of sudoku) {
            answer += `${line.join(" ")}\n`;
        }
        console.log(answer);
        process.exit(0);
    }

    const [row, col] = zeroCoords[count];

    for (let i = 1; i <= 9; i++) {
        if (check(row, col, i)) {
            sudoku[row][col] = i;
            dfs(count + 1);
            sudoku[row][col] = 0;
        }
    }
}

dfs(0);
